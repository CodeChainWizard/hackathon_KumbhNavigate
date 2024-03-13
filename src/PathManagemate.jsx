import { BrowserRouter, Route, Routes } from "react-router-dom";

// INTERNAL IMPORT
import Narbar from "./seaction/NavBar/Narbar";
import Home from "./seaction/home/Home";
import About from "./seaction/about/About";
import Contact from "./seaction/contact/Contact";
import Login from "./seaction/login/Login";
import Footer from "./seaction/footer/Footer";
import MapSeaction from "./seaction/navigation/Map_seaction";
import Admin from "./AdminFile/Admin";
import ErrorManagements from "./ErrorManagements/ErrorManagements";
import Description from "./Description/Description.tsx";

const Path_Managemate = () => {
  return (
    <>
      <BrowserRouter>
        <Narbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Navigate" element={<MapSeaction />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Description" element={<Description />} />
          <Route path="*" element={<ErrorManagements />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Path_Managemate;
