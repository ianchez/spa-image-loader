import { useAppSelector } from '../../app/hooks';
import { selectAllPhotos } from '../../features/fetchAll/fetchAllSlice';
import PhotoItemComponent from '../components/PhotoItemComponent';

import './index.css';

function HomeScreen() {
  const allPhotos = useAppSelector(selectAllPhotos);

  return (
    <section>
      <h1>Main Page</h1>

      <div id="photos-container">
        {allPhotos.map(item => <PhotoItemComponent photoItem={item}/>)}
      </div>
    </section>
  );
}

export default HomeScreen;
