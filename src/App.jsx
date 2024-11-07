import "./App.css";
import ContactForm from "./components/ContactForm";
import HomePage from "./pages/HomePage";
// import SheetDataViewer from "./components/SheetDataViewer";
// import SheetPage from "./pages/SheetPage";
import { Routes, Route, Navigate } from "react-router-dom";
import TermsAndConditionsModal from "./components/TermsAndConditionsModal";
// import FirstPage from "./components/HomePage/FirstPage";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route path="/home" element={<HomePage />} />
          <Route path="/contact" element={<ContactForm />} />
        </Route>
        {/* <Route
          path="/contact/terms-conditions"
          element={<TermsAndConditionsModal />}
        /> */}
        {/* <Route path="/contact" element={<ContactForm />} /> */}
      </Routes>
      {/* <ContactForm /> */}
      {/* <HomePage /> */}
    </>
  );
}

export default App;
