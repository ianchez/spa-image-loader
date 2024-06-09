import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import PhotoItemComponent from '../components/PhotoItemComponent';
import { useAppSelector } from '../../app/hooks';
import usePagination from '../../hooks/usePagination';

// selectors
import { selectAllPhotos } from '../../slices/fetchAllSlice';
import { selectActive, setActiveID, setSelectedPage } from '../../slices/setActiveSlice';

// types
import { PhotoItem } from '../../types';

import './index.css';

const ITEMS_PER_PAGE = 10;

function HomeScreen() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const allPhotos = useAppSelector(selectAllPhotos);
  const { ID: activeID, selectedPage } = useAppSelector(selectActive);

  const {
    paginationControls,
    currentItems,
    currentPage
  } = usePagination(allPhotos, selectedPage, ITEMS_PER_PAGE);  

  const handleClick = (item: PhotoItem) => {
    dispatch(setActiveID(item.id));
    dispatch(setSelectedPage(currentPage));
    navigate(`/${item.index}/${item.id}`, { state: { photoItem: item } });
  }

  return (
    <section id="home-screen">
      <div id="photos-container">
        {currentItems.map(item =>
          <PhotoItemComponent
            key={item.id}
            item={item}
            handleClick={handleClick}
            isSelected={item.id === activeID}
          />
        )}
      </div>

      {paginationControls}
    </section>
  );
}

export default HomeScreen;
