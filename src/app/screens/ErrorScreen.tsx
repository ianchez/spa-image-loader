import { useNavigate } from "react-router-dom";

function ErrorScreen() {
  const navigate = useNavigate();

  return (
    <section>
      <h1>This page does not exists... yet!</h1>

      <button
        className="clickable"
        onClick={() => navigate("/")}
      >
        Go Home
      </button>
    </section>
  );
}

export default ErrorScreen;