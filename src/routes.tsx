import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GameList from "./pages/GameList";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GameList />}></Route>
        <Route path="/auth" element={<Auth />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </Router>
  );
}
