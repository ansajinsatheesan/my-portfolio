import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import WebIndex from "./pages/webindex";
import Home from "./pages/home";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" name="Layout" element={<WebIndex to={"/home"} />}>
          <Route path="home" name="Home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
