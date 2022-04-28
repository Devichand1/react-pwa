import React, { useState, useEffect} from "react";

import { BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import QRScanner from "./pages/Scanner";

const App = () => {

  return (
    <BrowserRouter>
<Routes>
  <Route path="/" element={<HomePage/>} ></Route>
  <Route path="/scanner" element={<QRScanner/>} ></Route>
</Routes>
    </BrowserRouter>
  );
};

export default App ; 
