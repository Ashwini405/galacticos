import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Main Pages
import Home from "./pages/Home";
import AboutUs from "./components/AboutUs";
import Investors from "./pages/Investors";
import Careers from "./pages/Careers";
import ContactUs from "./pages/ContactUs";

// Services
import ApplicationEngineering from "./pages/services/ApplicationEngineering";
import Cloud from "./pages/services/Cloud";
import DevOps from "./pages/services/DevOps";
import DataEngineering from "./pages/services/DataEngineering";
import CloudSaaS from "./pages/services/CloudSaaS";
import QualityEngineering from "./pages/services/QualityEngineering";
import UiUx from "./pages/services/UiUx";
import Mobility from "./pages/services/Mobility";

// Case Studies
import DigitalTransformation from "./pages/services/DigitalTransformation";
import LifeSciencesInnovation from "./pages/services/LifeSciencesInnovation";
import FinancialServicesModernization from "./pages/services/FinancialServicesModernization";
import HedgeFundPlatforms from "./pages/services/HedgeFundPlatforms";
import GenAIEnablement from "./pages/services/GenAIEnablement";
import SmarterBusinessSolutions from "./pages/services/SmarterBusinessSolutions";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* MAIN ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<ContactUs />} />

        {/* CASE STUDIES */}
        <Route
          path="/case-study/digital-transformation"
          element={<DigitalTransformation />}
        />
        <Route
          path="/case-study/life-sciences-innovation"
          element={<LifeSciencesInnovation />}
        />
        <Route
          path="/case-study/financial-services-modernization"
          element={<FinancialServicesModernization />}
        />
        <Route
          path="/case-study/hedge-fund-platforms"
          element={<HedgeFundPlatforms />}
        />
        <Route
          path="/case-study/genai-enablement"
          element={<GenAIEnablement />}
        />
        <Route
          path="/case-study/smarter-business-solutions"
          element={<SmarterBusinessSolutions />}
        />

        {/* SERVICES */}
        <Route
          path="/services/application-engineering"
          element={<ApplicationEngineering />}
        />
        <Route path="/services/cloud" element={<Cloud />} />
        <Route path="/services/devops" element={<DevOps />} />
        <Route
          path="/services/data-engineering"
          element={<DataEngineering />}
        />
        <Route
          path="/services/cloud-saas"
          element={<CloudSaaS />}
        />
        <Route
          path="/services/quality-engineering"
          element={<QualityEngineering />}
        />
        <Route path="/services/ui-ux" element={<UiUx />} />
        <Route path="/services/mobility" element={<Mobility />} />
      </Routes>

      <Footer />
    </>
  );
}
