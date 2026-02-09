import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ApplicationEngineering from "./pages/services/ApplicationEngineering";
import Cloud from "./pages/services/Cloud";
import DevOps from "./pages/services/DevOps";
import DataEngineering from "./pages/services/DataEngineering";
import CloudSaaS from "./pages/services/CloudSaaS";
import QualityEngineering from "./pages/services/QualityEngineering";
import UiUx from "./pages/services/UiUx";
import Mobility from "./pages/services/Mobility";
import AboutUs from "./components/AboutUs";
import Investors from "./pages/Investors";
import Careers from "./pages/Careers"; 
import ContactUs from "./pages/ContactUs"; 

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<ContactUs />} />"


        {/* SERVICES */}
        <Route
          path="/services/application-engineering"
          element={<ApplicationEngineering />}
        />

        <Route
          path="/services/cloud"
          element={<Cloud />}
        />

        <Route path="/services/devops" element={<DevOps />} />

        <Route
  path="/services/data-engineering"
  element={<DataEngineering />}
/>
<Route
  path="/services/cloud-saas"
  element={<CloudSaaS />}
/>

<Route path="/services/quality-engineering" element={<QualityEngineering />} />
<Route path="/services/ui-ux" element={<UiUx />} />
<Route path="/services/mobility" element={<Mobility />} />

      </Routes>
      

      <Footer />
    </>
  );
}
