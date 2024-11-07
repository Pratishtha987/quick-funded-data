import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "build.rollupOptions.external";
import ContactForm from "./components/ContactForm";
import HomePage from "./pages/HomePage";
import TermsAndConditionsModal from "./components/TermsAndConditionsModal";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
