import { useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height, left, top } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      const move = 20;
      const rotateX = y * move;
      const rotateY = -x * move;
      
      heroRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };
    
    const handleMouseLeave = () => {
      if (!heroRef.current) return;
      heroRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
      heroRef.current.style.transition = 'transform 0.5s ease';
    };
    
    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      heroElement.addEventListener('mouseleave', handleMouseLeave);
    }
    
    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
        heroElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="shape-circle shape-1"></div>
      <div className="shape-circle shape-2"></div>
      
      <div className="container hero-container">
        <div className="hero-image" ref={heroRef}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="image-container"
          >
            <img 
              src="/assets/img.png"
              alt="Profile" 
              className="profile-image"
            />
          </motion.div>
        </div>
        
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="hero-greeting">Hello, I'm <span className="text-primary">Mohanragul G</span></h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="hero-title">AI & DATA SCIENCE STUDENT</h2>
          </motion.div>
          
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
          IN EVERY PATTERN, A POSSIBILITY.
          IN EVERY ANOMALY, A DISCOVERY.
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          > 
            <Link 
              to="projects" 
              spy={true} 
              smooth={true} 
              offset={-50} 
              duration={500}
              className="btn"
            >
              View My Work
            </Link>
            <Link 
              to="contact" 
              spy={true} 
              smooth={true} 
              offset={-50} 
              duration={500}
              className="btn btn-outline"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="arrow"></div>
      </div>
    </section>
  );
};

export default Hero;
