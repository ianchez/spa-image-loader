import { PhotoItem } from "../../types";

import fallbackImage from '../assets/fallback.png';

const PhotoItemComponent = ({
  item,
  handleClick
}: {
  item: PhotoItem,
  handleClick?: (item: PhotoItem) => void
}) => (
  <div
    key={item.id}
    className={`photo-item ${handleClick ? 'clickable' : ''}`}
    onClick={() => handleClick?.(item)}
  >
    <img
      src={item.image}
      alt={item.title}
      onError={(e) => e.currentTarget.src = fallbackImage}
    />
  </div>
);

export default PhotoItemComponent;
