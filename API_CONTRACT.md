# وثيقة مواصفات وعقد واجهة برمجة التطبيقات (API Contract Specification)
## مشروع الواجهة الأمامية ولوحة التحكم — أساسات المشاعر المحدودة

هذه الوثيقة مخصصة لمطوري الواجهة الخلفية (Backend Developers) وتحدد بدقة كافة المسارات (Endpoints)، هياكل البيانات (JSON Payloads)، شروط المصادقة (Auth & JWT)، وأكواد الاستجابة (HTTP Status Codes) التي تتوقعها الواجهة الأمامية للعمل بكامل ميزاتها.

---

## 1. المعمارية وآلية عمل الواجهة (Architecture Overview)

- **نمط العمل الهجين (Hybrid Cache & Real-time Sync)**:
  - تقوم الواجهة الأمامية بالإقلاع الفوري (Zero-Latency) اعتماداً على التخزين المؤقت المحلي `localStorage` والبيانات الافتراضية.
  - بمجرد تحميل الصفحة، يتم إرسال طلب استعلام إلى الخادم الخلفي لتحديث البيانات في الخلفية بدون حجب واجهة المستخدم.
- **التوثيق والمصادقة (Authentication)**:
  - يتم تمرير التوكن في الترويسة القياسية: `Authorization: Bearer <JWT_TOKEN>`
  - يتم تخزين التوكن في المتصفح تحت المفتاح: `asasat_jwt_token`.

---

## 2. المسارات العامة (Public API Endpoints)

### 2.1 جلب المحتوى المنشور للزوار (Get Published CMS Data)
- **المسار**: `GET /api/cms/published`
- **المصادقة**: غير مطلوبة (عام للزوار).
- **الاستجابة الناجحة (200 OK)**:
```json
{
  "success": true,
  "data": {
    "hero": { ... },
    "about": { ... },
    "services": [ ... ],
    "solutions": [ ... ],
    "whyUs": [ ... ],
    "sectors": [ ... ],
    "stats": [ ... ],
    "cta": { ... },
    "footer": { ... },
    "contact": { ... },
    "navigation": [ ... ],
    "settings": { ... }
  },
  "version": "v2.0.4",
  "lastPublishedAt": "2026-08-17 12:30:00"
}
```

### 2.2 جلب إصدار المحتوى الحالي (Get Version Info)
- **المسار**: `GET /api/cms/version`
- **المصادقة**: غير مطلوبة.
- **الاستجابة الناجحة (200 OK)**:
```json
{
  "version": "v2.0.4",
  "lastPublishedAt": "2026-08-17 12:30:00"
}
```

### 2.3 إرسال نموذج طلب استشارة أو عرض سعر (Submit Consultation)
- **المسار**: `POST /api/contact/consultation`
- **المصادقة**: غير مطلوبة.
- **ترويسة الطلب**: `Content-Type: application/json`
- **جسم الطلب (Request Body)**:
```json
{
  "name": "محمد عبدالله",
  "phone": "+966501234567",
  "email": "user@example.com",
  "service": "cctv_security",
  "projectType": "منشأة تجارية",
  "notes": "نرغب في دراسة وتركيب كاميرات مراقبة أمنية متكاملة."
}
```
- **الاستجابة الناجحة (201 Created / 200 OK)**:
```json
{
  "success": true,
  "message": "تم استلام طلبك بنجاح! سيتواصل معك أحد مهندسينا المختصين خلال 24 ساعة."
}
```

---

## 3. مسارات المصادقة وتسجيل الدخول (Auth Endpoints)

### 3.1 تسجيل الدخول للوحة التحكم (Admin Login)
- **المسار**: `POST /api/auth/login`
- **المصادقة**: غير مطلوبة.
- **جسم الطلب**:
```json
{
  "email": "admin@asasat.sa",
  "password": "YourPasswordHere"
}
```
- **الاستجابة الناجحة (200 OK)**:
```json
{
  "success": true,
  "message": "تم تسجيل الدخول بنجاح.",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "usr-1",
    "name": "المهندس المشرف",
    "email": "admin@asasat.sa",
    "role": "superadmin",
    "roleTitle": "المدير العام للنظام",
    "avatar": "img/LOGO.jpeg",
    "lastLogin": "2026-08-17 13:00:00"
  }
}
```
- **الاستجابة عند الفشل (401 Unauthorized)**:
```json
{
  "success": false,
  "message": "بيانات الدخول غير صحيحة. الوصول مصرح للمسؤول المعتمد فقط."
}
```

### 3.2 التحقق من صلاحية الجلسة (Validate Session / Me)
- **المسار**: `GET /api/auth/me`
- **المصادقة**: مطلوبة (`Authorization: Bearer <token>`).
- **الاستجابة الناجحة (200 OK)**:
```json
{
  "success": true,
  "user": {
    "id": "usr-1",
    "name": "المهندس المشرف",
    "email": "admin@asasat.sa",
    "role": "superadmin",
    "roleTitle": "المدير العام للنظام",
    "avatar": "img/LOGO.jpeg"
  }
}
```

### 3.3 تسجيل الخروج (Admin Logout)
- **المسار**: `POST /api/auth/logout`
- **المصادقة**: مطلوبة (`Authorization: Bearer <token>`).
- **الاستجابة الناجحة (200 OK)**:
```json
{
  "success": true,
  "message": "تم تسجيل الخروج بنجاح."
}
```

---

## 4. مسارات لوحة التحكم وإدارة المحتوى (Admin CMS Endpoints)

> **ملاحظة**: جميع هذه المسارات تتطلب إرسال توكن المصادقة `Authorization: Bearer <token>`.

### 4.1 جلب الحالة الكاملة للمحتوى (Get Full CMS State)
- **المسار**: `GET /api/admin/cms/state`
- **الاستجابة الناجحة (200 OK)**:
```json
{
  "success": true,
  "state": {
    "draft": { ... },
    "published": { ... },
    "currentVersion": "v2.0.4",
    "lastPublishedAt": "2026-08-17 12:30:00",
    "isDirty": false,
    "activityLogs": [ ... ],
    "revisions": [ ... ],
    "users": [ ... ]
  }
}
```

### 4.2 تحديث مسودة قسم معين (Update Section Draft)
- **المسار**: `PUT /api/admin/cms/draft/:section`
- **أمثلة على `:section`**: `hero`, `about`, `services`, `solutions`, `whyUs`, `sectors`, `stats`, `cta`, `footer`, `contact`, `navigation`, `settings`
- **جسم الطلب**: كائن البيانات المحدث الخاص بالقسم فقط.
- **الاستجابة الناجحة (200 OK)**:
```json
{
  "success": true,
  "message": "تم حفظ مسودة القسم بنجاح.",
  "section": "services",
  "updatedAt": "2026-08-17 13:10:00"
}
```

### 4.3 نشر المسودة لتصبح المحتوى المباشر (Publish Draft)
- **المسار**: `POST /api/admin/cms/publish`
- **جسم الطلب**:
```json
{
  "note": "تحديث أسعار ومميزات أنظمة إنذار الحريق والشبكات"
}
```
- **الاستجابة الناجحة (200 OK)**:
```json
{
  "success": true,
  "message": "تم نشر جميع التغييرات بنجاح إلى الموقع المباشر.",
  "version": "v2.0.5",
  "publishedAt": "2026-08-17 13:15:00"
}
```

### 4.4 إلغاء تعديلات المسودة والتراجع إلى المنشور (Discard Draft)
- **المسار**: `POST /api/admin/cms/discard`
- **الاستجابة الناجحة (200 OK)**:
```json
{
  "success": true,
  "message": "تم إلغاء تعديلات المسودة واستعادة آخر نسخة منشورة."
}
```

### 4.5 استعادة نسخة سابقة (Restore Revision)
- **المسار**: `POST /api/admin/cms/restore/:revisionId`
- **الاستجابة الناجحة (200 OK)**:
```json
{
  "success": true,
  "message": "تمت استعادة النسخة بنجاح في المسودة.",
  "revisionId": "rev-1692271829"
}
```

### 4.6 إعادة ضبط المحتوى للمصنع (Factory Reset)
- **المسار**: `POST /api/admin/cms/reset`
- **الاستجابة الناجحة (200 OK)**:
```json
{
  "success": true,
  "message": "تمت إعادة ضبط محتوى النظام إلى الحالة الافتراضية بنجاح."
}
```

---

## 5. مسارات إدارة المستخدمين وسجل النشاطات (Users & Logs)

### 5.1 جلب المستخدمين (Get Users)
- **المسار**: `GET /api/admin/users`
- **الاستجابة**:
```json
{
  "success": true,
  "users": [
    {
      "id": "usr-1",
      "name": "المهندس المشرف",
      "email": "admin@asasat.sa",
      "role": "superadmin",
      "roleTitle": "المدير العام للنظام",
      "status": "active",
      "lastLogin": "2026-08-17 13:00:00"
    }
  ]
}
```

### 5.2 إضافة مستخدم جديد (Create User)
- **المسار**: `POST /api/admin/users`
- **جسم الطلب**:
```json
{
  "name": "محرر محتوى",
  "email": "editor@asasat.sa",
  "password": "SecurePassword123",
  "role": "editor",
  "roleTitle": "مسؤول التحرير"
}
```

### 5.3 حذف مستخدم (Delete User)
- **المسار**: `DELETE /api/admin/users/:userId`

---

## 6. مسار رفع الوسائط (Media Upload)

- **المسار**: `POST /api/admin/media/upload`
- **المصادقة**: مطلوبة (`Authorization: Bearer <token>`).
- **نوع المحتوى**: `multipart/form-data` (الحقل: `file`).
- **الاستجابة الناجحة (200 OK)**:
```json
{
  "success": true,
  "url": "img/uploads/camera_system_2026.jpg",
  "filename": "camera_system_2026.jpg",
  "size": 245120
}
```
