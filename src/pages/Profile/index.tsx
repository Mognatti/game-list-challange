import { useFirebaseAuth } from "../../hooks/useFirebaseAuth";
import Header from "../../components/Header";
import GuestProfile from "./components/GuestProfile";
import UserProfile from "./components/UserProfile";
export default function Profile() {
  const [{ user, isLoading }] = useFirebaseAuth();

  if (isLoading) return <p> carregando dados...</p>;
  return (
    <>
      <Header />
      {user && <UserProfile {...user} />}
      {!user && <GuestProfile />}
    </>
  );
}
