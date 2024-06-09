import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import PhotoItemComponent from '../components/PhotoItemComponent';

// selectors
import { selectAllPhotos } from '../../slices/fetchAllSlice';
import { selectActiveID, setActiveID } from '../../slices/setActiveSlice';

// types
import { PhotoItem } from '../../types';

import './index.css';

function HomeScreen() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const allPhotos = useAppSelector(selectAllPhotos);
  const activeID = useAppSelector(selectActiveID);

  const handleClick = (item: PhotoItem) => {
    dispatch(setActiveID(item.id));
    navigate(`/${item.index}/${item.id}`, { state: { photoItem: item } });
  }

  return (
    <section>
      <h1>Main Page</h1>

      <div id="photos-container">
        {allPhotos.map(item => <PhotoItemComponent
          item={item}
          handleClick={handleClick}
          isSelected={item.id === activeID}
        />)}
      </div>
    </section>
  );
}

export default HomeScreen;
