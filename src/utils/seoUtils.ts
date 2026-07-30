/**
 * Utility function to dynamically update document title, meta description,
 * Open Graph tags, and canonical URL on client-side route transitions.
 */
export interface SeoConfig {
  title: string;
  description: string;
  canonicalPath?: string;
}

export function setPageSeo({ title, description, canonicalPath }: SeoConfig) {
  // 1. Title Tag
  document.title = title;

  // 2. Meta Description
  let metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.name = 'description';
    document.head.appendChild(metaDesc);
  }
  metaDesc.content = description;

  // 3. Open Graph Title
  let ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.content = title;
  }

  // 4. Open Graph Description
  let ogDesc = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
  if (ogDesc) {
    ogDesc.content = description;
  }

  // 5. Canonical Link
  let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }

  const baseUrl = 'https://miracleviewhealthllc.com';
  const fullCanonicalUrl = canonicalPath
    ? (canonicalPath.startsWith('http') ? canonicalPath : `${baseUrl}${canonicalPath.startsWith('/') ? '' : '/'}${canonicalPath}`)
    : baseUrl + '/';

  canonical.href = fullCanonicalUrl;
}
