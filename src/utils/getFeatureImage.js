export default function getFeatureImage(data) {
  const { altText, sourceUrl, caption } = data?.featuredImage?.node || {};
  return {
    altText,
    sourceUrl,
    caption,
  };
}
