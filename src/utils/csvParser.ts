import { ServiceItem } from '../types';

/**
 * Robust CSV parser supporting quotes, commas within quotes, and multi-line fields.
 */
export function parseCSVToServices(csvText: string): ServiceItem[] {
  const lines: string[] = [];
  let currentLine = '';
  let inQuotes = false;

  for (let i = 0; i < csvText.length; i++) {
    const char = csvText[i];
    const nextChar = csvText[i + 1];

    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        currentLine += '"';
        i++; // skip escaped quote
      } else {
        inQuotes = !inQuotes;
      }
    } else if ((char === '\r' || char === '\n') && !inQuotes) {
      if (char === '\r' && nextChar === '\n') {
        i++;
      }
      if (currentLine.trim()) {
        lines.push(currentLine.trim());
      }
      currentLine = '';
    } else {
      currentLine += char;
    }
  }

  if (currentLine.trim()) {
    lines.push(currentLine.trim());
  }

  if (lines.length < 2) return [];

  // Parse rows
  const parseRow = (line: string): string[] => {
    const row: string[] = [];
    let field = '';
    let inQ = false;

    for (let j = 0; j < line.length; j++) {
      const c = line[j];
      const nc = line[j + 1];

      if (c === '"') {
        if (inQ && nc === '"') {
          field += '"';
          j++;
        } else {
          inQ = !inQ;
        }
      } else if (c === ',' && !inQ) {
        row.push(field.trim());
        field = '';
      } else {
        field += c;
      }
    }
    row.push(field.trim());
    return row;
  };

  const headers = parseRow(lines[0]);
  const results: ServiceItem[] = [];

  for (let idx = 1; idx < lines.length; idx++) {
    const row = parseRow(lines[idx]);
    if (row.length < 5) continue;

    // header mapping
    const iconName = row[0] || 'cctv_security';
    const title = row[1] || '';
    const titleEn = row[2] || '';
    const number = row[3] || (idx < 10 ? `0${idx}` : `${idx}`);
    const category = row[4] || '';
    const assetPath = row[5] || '';
    const usage = row[6] || '';
    const shortDesc = row[7] || '';
    const fullDesc = row[8] || shortDesc;
    const featuresRaw = row[9] || '';
    const techsRaw = row[10] || '';

    const features = featuresRaw
      ? featuresRaw.split(';').map(f => f.trim()).filter(Boolean)
      : [];

    const technologies = techsRaw
      ? techsRaw.split(';').map(t => t.trim()).filter(Boolean)
      : [];

    const applications = usage
      ? usage.split(';').map(u => u.trim()).filter(Boolean)
      : ['المنشآت التجارية والمكاتب', 'المشاريع الحكومية والخاصة', 'الأبراج والمجمعات الذكية'];

    results.push({
      id: `service-${number}`,
      number,
      title,
      titleEn,
      category,
      iconName,
      shortDescription: shortDesc,
      fullDescription: fullDesc,
      features: features.length ? features : ['تكامل تقني معتمد', 'أعلى معايير الأمان', 'دعم واستجابة سريعة'],
      applications,
      technologies,
      imagePath: assetPath || 'img/JUST.jpg'
    });
  }

  return results;
}
