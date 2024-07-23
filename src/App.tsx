import React from "react";
import Navbar from "./components/navbar";
import Body from "./components/body";
import Footer from "./components/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className=" overflow-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/*" element={<NotFound/>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
