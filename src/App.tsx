import React from "react";
import Navbar from "./components/navbar";
import Body from "./components/body";
import Footer from "./components/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import MDO from "./pages/MDO";
import HR from "./pages/hr";
import Admin from "./pages/Admin";
import IT from "./pages/IT";
import Marketing from "./pages/Marketing";
import Procurment from "./pages/Procurment";
import Stores from "./pages/Stores";
import Projects from "./pages/Projects";
import Finance from "./pages/Finance";
import Accounts from "./pages/Accounts";
import ProjectManagement from "./pages/ProjectManagement";
import Gigs from "./pages/Gigs";
import Logistics from "./pages/Logistics";
import Audit from "./pages/Audit";
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className=" overflow-hidden max-w-[2000px] m-auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/mdo" element={<MDO />} />
          <Route path="/hr" element={<HR />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/it" element={<IT />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/procurment" element={<Procurment />} />
          <Route path="/stores" element={<Stores />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/project-management" element={<ProjectManagement />} />
          <Route path="/gigs" element={<Gigs />} />
          <Route path="/logistics" element={<Logistics />} />
          <Route path="/audit" element={<Audit />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
