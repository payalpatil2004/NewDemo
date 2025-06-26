import './styles/Pages.css'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePages";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import ContactPage from "./pages/ContactPage";
import AddmisionPage from './pages/AdmissionPage';
import ChatbotComponent from './componentes/Chatbot/ChatbotComponent';

const App = () => {
  return(
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
      
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/courses" element={<CoursesPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/admission" element={<AddmisionPage/>}/>
          <Route path="/home" element={<HomePage/>} />
        </Routes>
        <ChatbotComponent/>
      </Router>




    </div>



  )


}
export default App;
