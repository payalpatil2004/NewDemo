import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy;{new Date().getFullYear()}Vivekanand College. All right reserved</p>
    </footer>
  )
}

export default Footer;