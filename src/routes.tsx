import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GameList from "./pages/GameList";
import Signup from "./pages/Signup";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GameList />}></Route>
        <Route path="/auth" element={<Signup />}></Route>
        <Route path="/profile" element={<p>você já está logado!</p>}></Route>
      </Routes>
    </Router>
  );
}
