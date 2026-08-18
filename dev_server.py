import http.server
import socketserver
import requests
import os
import sys

PORT = 8080
BACKEND_HOST = "http://127.0.0.1:8000"
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class ThreadingHTTPServer(socketserver.ThreadingMixIn, socketserver.TCPServer):
    daemon_threads = True
    allow_reuse_address = True

class RobustProxyHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_proxy(self):
        backend_url = f"{BACKEND_HOST}{self.path}"
        content_length = int(self.headers.get('Content-Length', 0))
        body = self.rfile.read(content_length) if content_length > 0 else None

        # Copy incoming headers except host/connection/content-length
        forward_headers = {}
        for key, val in self.headers.items():
            if key.lower() not in ['host', 'connection', 'content-length']:
                forward_headers[key] = val

        try:
            resp = requests.request(
                method=self.command,
                url=backend_url,
                headers=forward_headers,
                data=body,
                allow_redirects=False,
                timeout=15
            )

            self.send_response(resp.status_code)
            for key, val in resp.headers.items():
                if key.lower() not in ['transfer-encoding', 'content-encoding', 'content-length', 'connection']:
                    self.send_header(key, val)
            self.send_header('Content-Length', str(len(resp.content)))
            self.send_header('Access-Control-Allow-Origin', '*')
            self.send_header('Access-Control-Allow-Headers', '*')
            self.send_header('Access-Control-Allow-Methods', '*')
            self.end_headers()
            self.wfile.write(resp.content)
        except requests.RequestException as e:
            self.send_response(502)
            self.send_header('Content-Type', 'application/json; charset=utf-8')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            err_json = f'{{"success": false, "message": "Backend server connection error: {str(e)}"}}'
            self.wfile.write(err_json.encode('utf-8'))

    def should_proxy(self):
        return (
            self.path.startswith('/api/') or
            self.path.startswith('/media/') or
            self.path.startswith('/django-admin/') or
            self.path.startswith('/static/admin/') or
            self.path.startswith('/swagger/') or
            self.path.startswith('/redoc/')
        )

    def do_GET(self):
        if self.should_proxy():
            self.do_proxy()
        else:
            super().do_GET()

    def do_POST(self):
        if self.should_proxy():
            self.do_proxy()
        else:
            self.send_error(405)

    def do_PUT(self):
        if self.should_proxy():
            self.do_proxy()
        else:
            self.send_error(405)

    def do_PATCH(self):
        if self.should_proxy():
            self.do_proxy()
        else:
            self.send_error(405)

    def do_DELETE(self):
        if self.should_proxy():
            self.do_proxy()
        else:
            self.send_error(405)

    def do_DELETE(self):
        if self.path.startswith('/api/') or self.path.startswith('/media/'):
            self.do_proxy()
        else:
            self.send_error(405)

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', '*')
        self.end_headers()


def run():
    with ThreadingHTTPServer(("", PORT), RobustProxyHandler) as httpd:
        print(f"Threading Frontend server with API proxy running at http://localhost:{PORT}/")
        print(f"Proxying /api/ and /media/ requests to {BACKEND_HOST}")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            pass

if __name__ == '__main__':
    run()
