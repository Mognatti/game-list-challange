import { Link } from "react-router-dom";
import useLoggedIn from "../../../hooks/useLoggedIn";

export default function Login() {
  const [{ logOut }] = useLoggedIn();

  function logOutHeader() {
    logOut();
    window.location.reload();
  }
  return (
    <div>
      <button>
        <Link to="/auth">Entre</Link>
      </button>
      <button onClick={() => logOutHeader()}>Sair</button>
    </div>
  );
}
