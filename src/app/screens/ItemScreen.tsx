import { useNavigate, useParams } from "react-router-dom";

function ItemScreen() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <section>
      <h1>Item {id}</h1>

      <button onClick={() => navigate("/")}>
        Go Home
      </button>
    </section>
  );
}

export default ItemScreen;
