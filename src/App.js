import "./App.css";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import NewDx from "./Pages/NewDx";
import History from "./Pages/History";
import NewPass from "./Pages/NewPass";
import Sign from "./Pages/Sign";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState(localStorage.getItem("name"));
  console.log(user);

  return (
    <>
      {user ? (
        <HashRouter>
          <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/Diagnosis/newdx" element={<NewDx />} />
            <Route path="/Diagnosis/history" element={<History />} />
            <Route path="/Diagnosis/newPass" element={<NewPass />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </HashRouter>
      ) : (
        <Sign />
      )}
    </>
  );
}

export default App;
