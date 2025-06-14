import { FiHeart } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">        
        <div className="footer-bottom">
          <p>
            &copy; {currentYear} Mohanragul. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}; 

export default Footer;
