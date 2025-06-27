import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"; // ✅ Fixed
import AboutPage from "./pages/AboutPage";
import AdmissionPage from "./pages/AdmissionPage";
import CoursesPage from "./pages/CoursesPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import './App.css';
import './styles/Pages.css';
import ChatbotComponent from "./components/Chatbot/ChatbotComponent";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/home" element={<HomePage />} /> 
        <Route path="/about" element={<AboutPage />} />
        <Route path="/admission" element={<AdmissionPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/notfound" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ChatbotComponent />
    </Router>
  );
};

export default App;
