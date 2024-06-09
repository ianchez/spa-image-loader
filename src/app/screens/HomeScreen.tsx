import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { selectAllPhotos } from '../../features/fetchAll/fetchAllSlice';
import { PhotoItem } from '../../types';
import PhotoItemComponent from '../components/PhotoItemComponent';

import './index.css';

function HomeScreen() {
  const navigate = useNavigate();
  const allPhotos = useAppSelector(selectAllPhotos);

  const handleClick = (item: PhotoItem) => {
    navigate(`/${item.index}/${item.id}`, { state: { photoItem: item } });
  }

  return (
    <section>
      <h1>Main Page</h1>

      <div id="photos-container">
        {allPhotos.map(item => <PhotoItemComponent item={item} handleClick={handleClick}/>)}
      </div>
    </section>
  );
}

export default HomeScreen;
