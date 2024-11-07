import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ContactForm from "./components/ContactForm";
import HomePage from "./pages/HomePage";
import TermsAndConditionsModal from "./components/TermsAndConditionsModal";

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root path ("/") to "/home" */}
        {/* <Route path="/" element={<Navigate to="/home" />} /> */}
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/contact" element={<ContactForm />} />
        {/* Uncomment this line if you need the Terms and Conditions modal */}
        {/* <Route path="/contact/terms-conditions" element={<TermsAndConditionsModal />} /> */}
      </Routes>
      <HomePage />
    </Router>
  );
}

export default App;
