export default function getSlug(pageNumber, slug) {
  return !isNaN(pageNumber) ? slug[slug.length - 3] : slug[slug.length - 1];
}
