import { Link } from "react-router-dom";
import { useFirebaseAuth } from "../../hooks/useFirebaseAuth";

export default function Profile() {
  const [{ user }] = useFirebaseAuth();
  return (
    <div>
      <p>Olá, {user?.email} </p>
      <button>
        <Link to="/">Ver lista de jogos</Link>
      </button>
    </div>
  );
}
