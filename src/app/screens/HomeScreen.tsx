import { useAppSelector } from '../../app/hooks';
import { selectAllPhotos } from '../../features/fetchAll/fetchAllSlice';

function HomeScreen() {
  const data = useAppSelector(selectAllPhotos);
  console.log(data);

  return (
    <section>
      <h1>Home Screen</h1>
    </section>
  );
}

export default HomeScreen;
