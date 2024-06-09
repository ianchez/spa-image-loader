import { useNavigate, useLocation } from "react-router-dom";
import PhotoItemComponent from "../components/PhotoItemComponent";

import './index.css';

function ItemScreen() {
  const navigate = useNavigate();
  const { state: { photoItem } } = useLocation();

  return (
    <section id="item-screen">
      <PhotoItemComponent item={photoItem} />

      <button
        className="clickable"
        onClick={() => navigate("/")}
      >
        Go Home
      </button>
    </section>
  );
}

export default ItemScreen;
