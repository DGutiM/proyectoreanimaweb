import type { MetadataRoute } from 'next';
import { siteUrl } from './site-config';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-08-29T00:00:00+02:00');
  return [
    { url: siteUrl, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${siteUrl}/formacion-emergencias-empresas`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteUrl}/svb-dea-erc`, lastModified, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${siteUrl}/primeros-auxilios-empresas`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
  ];
}
