import { useAppSelector } from '../../app/hooks';
import { selectAllPhotos } from '../../features/fetchAll/fetchAllSlice';

import './index.css';

const FALLBACK_IMAGE = 'https://www.lighting.philips.com.sg/content/dam/b2b-philips-lighting/ecat-fallback.png?wid=93&hei=93&qlt=82';

function HomeScreen() {
  const allPhotos = useAppSelector(selectAllPhotos);

  console.log({ allPhotos })

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
                onError={(e) => e.currentTarget.src = FALLBACK_IMAGE}
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HomeScreen;
