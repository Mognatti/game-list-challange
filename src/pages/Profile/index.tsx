import { useFirebaseAuth } from "../../hooks/useFirebaseAuth";
import Header from "../../components/Header";
import GuestProfile from "./components/GuestProfile";
import UserProfile from "./components/UserProfile";
import { PacmanLoader } from "react-spinners";
import { PerfilLoader } from "./styles";
import { pallete } from "../../styles/styleVariables";
export default function Profile() {
  const [{ user, isLoading, isLoginLoading }] = useFirebaseAuth();
  if (isLoading || isLoginLoading)
    return (
      <PerfilLoader>
        <PacmanLoader color={pallete.yellow} size="30px" />
      </PerfilLoader>
    );

  return (
    <>
      <Header />
      {user && <UserProfile {...user} />}
      {!user && <GuestProfile />}
    </>
  );
}
