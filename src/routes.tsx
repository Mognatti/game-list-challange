import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GameList from "./pages/GameList";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";
import { useFirebaseAuth } from "./hooks/useFirebaseAuth";

export default function AppRoutes() {
  const [{ user }] = useFirebaseAuth();
  console.log("routes: ", user);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GameList />}></Route>
        <Route path="/auth" element={user ? <Profile /> : <Auth />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </Router>
  );
}
