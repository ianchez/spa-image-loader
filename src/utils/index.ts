import { PhotoItem } from "../types";

export const parsePhotoItem = ([key, item]: any[]): PhotoItem => ({
  id: key,
  title: String(item?.title || ''),
  description: String(item?.description || ''),
  image: String(item?.image || '') ?? '',
  index: parseInt(item?.index || 0),
});
