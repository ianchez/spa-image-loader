import { PhotoItem } from "../types";


export const parsePhotoItem = (item: any): PhotoItem => ({
  title: String(item?.title) || '',
  description: String(item?.description) || '',
  image: String(item.image) ?? '',
  index: parseInt(item?.index || 0),
});
