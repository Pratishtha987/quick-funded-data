import "./App.css";
import ContactForm from "./components/ContactForm";
import HomePage from "./pages/HomePage";
import { Routes, Route, Navigate } from "react-router-dom";
import TermsAndConditionsModal from "./components/TermsAndConditionsModal";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </div>
  );
}

export default App;
