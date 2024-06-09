import { useAppSelector } from '../../app/hooks';
import { selectAllPhotos } from '../../features/fetchAll/fetchAllSlice';
import fallbackImage from '../assets/fallback.png';

import './index.css';

function HomeScreen() {
  const allPhotos = useAppSelector(selectAllPhotos);

  return (
    <section>
      <h1>Home Screen</h1>

      <div id="photos-container">
        {allPhotos.map((photoItem) => (
          <div
            key={photoItem.index}
            className="photo-item"
          >
            <a href={`/${photoItem.index}/item`} >
              <img
                src={photoItem.image}
                alt={photoItem.title}
                onError={(e) => e.currentTarget.src = fallbackImage}
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HomeScreen;
