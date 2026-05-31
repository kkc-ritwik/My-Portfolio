import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const rawSiteUrl = process.env.SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL || 'http://localhost:5173';
const siteUrl = rawSiteUrl.replace(/\/$/, '');

const routes = [
  '/',
  '/#about',
  '/#services',
  '/#skills',
  '/#projects',
  '/#github',
  '/#testimonials',
  '/#resume',
  '/#contact',
  '/#faq',
];

const now = new Date().toISOString();

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>\n    <loc>${siteUrl}${route}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${route === '/' ? '1.0' : '0.8'}</priority>\n  </url>`,
  )
  .join('\n')}
</urlset>
`;

const outputPath = resolve(process.cwd(), 'public', 'sitemap.xml');
writeFileSync(outputPath, xml, 'utf8');

console.log(`sitemap generated at ${outputPath} using base URL: ${siteUrl}`);
