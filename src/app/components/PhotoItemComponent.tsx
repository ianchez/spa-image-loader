import { PhotoItem } from "../../types";

import fallbackImage from '../assets/fallback.png';
import './PhotoItemComponent.css';

const PhotoItemComponent = ({
  item,
  isSelected,
  handleClick
}: {
  item: PhotoItem,
  isSelected?: boolean,
  handleClick?: (item: PhotoItem) => void
}) => (
  <div
    key={item.id}
    className={`
      photo-item
      ${handleClick ? 'clickable' : ''}
      ${isSelected ? 'selected' : ''}
    `}
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
