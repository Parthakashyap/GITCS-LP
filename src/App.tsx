import React from "react";
import Navbar from "./components/navbar";
import Body from "./components/body";
import Footer from "./components/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import MDO from "./pages/MDO";
import HR from "./pages/hr";
import Admin from "./pages/Admin";
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className=" overflow-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/mdo" element={<MDO />} />
          <Route path="/hr" element={<HR />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
