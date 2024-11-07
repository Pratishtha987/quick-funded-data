import "./App.css";
import { Routes, Route, Navigate } from "node_modules/react-router-dom";
import ContactForm from "./components/ContactForm";
import HomePage from "./pages/HomePage";
import TermsAndConditionsModal from "./components/TermsAndConditionsModal";

function App() {
  return (
    <Routes>
      {/* Redirect root path ("/") to "/home" */}
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/contact" element={<ContactForm />} />
      {/* Uncomment this line if you need the Terms and Conditions modal */}
      {/* <Route path="/contact/terms-conditions" element={<TermsAndConditionsModal />} /> */}
    </Routes>
  );
}

export default App;
