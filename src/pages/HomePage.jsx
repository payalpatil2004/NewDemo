// src/pages/HomePages.jsx
import Header from "../components/Header/Header";
import Popup from "../components/Popup/Popup";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
import "../styles/Pages.css"; // Ensure styles are applied

const HomePages = () => {
  return (
    <div className="page-container home-page">
      <Header />
      <Popup />

      <main>
        {/* Hero Section */}
        <section className="page-section text-center banner-section">
          <div className="banner-container">
            <img
              src="/images/college-banner_720.png"
              alt="Vivekanand College Banner"
              className="hero-image"
              loading="lazy"
            />
            <div className="banner-text">
              <h1 className="section-title-large">Welcome to Vivekanand College!</h1>
              <p className="section-text">Your journey to excellence starts here.</p>
              <Link to="/admission" className="apply-btn-green">Apply Now!</Link>
            </div>
          </div>
        </section>

        {/* About College */}
        <section className="page-section">
          
          <p className="section-text">
            <strong>Vivekanand College</strong> Vivekanand College is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in 1980, we have proudly served generations of students, empowering them to achieve their full potential.
          </p>
          <p className="section-text">
            At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.
          </p>
        </section>

        {/* Why Choose Us */}
        <section className="page-section">
          <h2 className="section-subtitle">Why Choose Vivekanand College?</h2>
          <ul className="section-list">
            <li><strong>Legacy of Excellence:</strong> Decades of quality education.</li>
            <li><strong>Experienced Faculty:</strong> Renowned experts.</li>
            <li><strong>Modern Facilities:</strong> Labs, library, and campus.</li>
            <li><strong>Holistic Development:</strong> Activities and sports.</li>
            <li><strong>Strong Placements:</strong> Top company opportunities.</li>
          </ul>
        </section>

        {/* Campus Life */}
        <section className="page-section">
          <h2 className="section-subtitle">Campus Life & Facilities</h2>
          <div className="grid-2">
            <img
              src="/images/students-studying_720.jpg"
              alt="Students Studying"
              loading="lazy"
              className="campus-img"
            />
            <img
              src="/images/campus-life_360.jpg"
              alt="College Campus"
              loading="lazy"
              className="campus-img"
            />
          </div>
          <p className="section-text mt-4">
            Explore our vibrant campus and state-of-the-art facilities...
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePages;
