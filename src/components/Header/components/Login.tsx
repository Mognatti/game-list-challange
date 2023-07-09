import { Link } from "react-router-dom";
import { useFirebaseAuth } from "../../../hooks/useFirebaseAuth";

export default function Login() {
  const [{ logOut, user }] = useFirebaseAuth();

  function logOutHeader() {
    logOut();
    window.location.reload();
  }
  return (
    <div>
      <button>
        <Link to="/auth">{user ? "Profile" : "Entre"}</Link>
      </button>
      <button onClick={() => logOutHeader()}>Sair</button>
    </div>
  );
}
