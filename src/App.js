import "./App.css";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import NewDx from "./Pages/NewDx";
import History from "./Pages/History";
import NewPass from "./Pages/NewPass";
import Sign from "./Pages/Sign";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState(localStorage.getItem("name"));
  console.log(user);

  return (
    <>
      {user ? (
        <Router>
          <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/newdx" element={<NewDx />} />
            <Route path="/history" element={<History />} />
            <Route path="/newPass" element={<NewPass />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Router>
      ) : (
        <Sign />
      )}
    </>
  );
}

export default App;
