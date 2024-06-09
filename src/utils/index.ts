import { PhotoItem } from "../types";

export const isValidUrl = (url: any): boolean => {
  if (!url) return false;
  if (typeof url !== 'string') return false;

  try {
    const parsedUrl = new URL(url);
    return ['http:', 'https:'].includes(parsedUrl.protocol);
  } catch (e) {
    return false;
  }
};

export const parsePhotoItem = (item: any): PhotoItem => ({
  title: String(item?.title) || '',
  description: String(item?.description) || '',
  image: isValidUrl(item.image) ? item.image : undefined,
  index: parseInt(item?.index || 0),
});
