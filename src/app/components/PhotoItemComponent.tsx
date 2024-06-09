import { useNavigate } from "react-router-dom";
import { PhotoItem } from "../../types";

import fallbackImage from '../assets/fallback.png';

const PhotoItemComponent = ({photoItem}: {photoItem: PhotoItem}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${photoItem.index}/${photoItem.id}`, { state: { photoItem } });
  }

  return (
    <div
      key={photoItem.id}
      className="photo-item"
      onClick={handleClick}
    >
      <img
        src={photoItem.image}
        alt={photoItem.title}
        onError={(e) => e.currentTarget.src = fallbackImage}
      />
    </div>
  );
};

export default PhotoItemComponent;
