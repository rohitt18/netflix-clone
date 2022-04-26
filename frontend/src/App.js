import "./app.scss";
import Home from "./pages/home/Home";
import PlayMovie from "./pages/playMovie/PlayMovie";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        {!user && (
          <>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </>
        )}

        {user && (
          <>
            <Route exact path="/" element={<Home />} />

            <Route path="/movies" element={<Home type="movie" />} />

            <Route path="/series" element={<Home type="series" />} />

            <Route path="/playMovie" element={<PlayMovie />} />
          </>
        )}

        <Route path="*" element={<Navigate to={user ? "/" : "/register"} />} />
      </Routes>
    </Router>
  );
}

export default App;
