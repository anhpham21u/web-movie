import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Browse from "./pages/browse/Browse";
import Search from "./pages/search/Search";

import "./pages/styles.scss";

const MyContext = React.createContext();

function App() {
  const [showModal, setShowModal] = useState(false);
  const [dataModal, setDataModal] = useState({});

  return (
    <BrowserRouter>
      <MyContext.Provider
        value={{ showModal, setShowModal, dataModal, setDataModal }}
      >
        <Routes>
          <Route path="/" element={<Browse />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export { MyContext };
export default App;
