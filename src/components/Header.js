import React from "react";
import { BrowserRouter as Routes, Route } from "react-router-dom";

import Idas from "./Idas";
function Header() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Idas />} />
      </Routes>
    </div>
  );
}

export default Header;
