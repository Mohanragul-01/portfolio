import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub } from 'react-icons/fi';
import './Contact.css';
import { SiLeetcode, SiCodeforces, SiGeeksforgeeks, SiCodechef } from 'react-icons/si';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }
    
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 3000);
      }, 1500);
    }
  };

  const contactInfo = [
    {
      icon: <FiMail />,
      title: 'Email',
      content: 'mohanragul75@gmail.com',
      link: 'mailto:mohanragul75@gmail.com'
    },
    {
      icon: <FiPhone />,
      title: 'Phone',
      content: '+91-6379743472',
      link: 'tel:+916379743472'
    },
    {
      icon: <FiMapPin />,
      title: 'Location',
      content: 'Coimbatore, India',
      link: 'https://maps.google.com/?q=Coimbatore,India'
    }
  ];

  const socialLinks = [
    { icon: <FiLinkedin />, link: 'https://www.linkedin.com/in/mohanragul1604', label: 'LinkedIn' },
    { icon: <FiGithub />, link: 'https://github.com/Mohanragul-01', label: 'GitHub' },
    { icon: <SiLeetcode />, link: 'https://leetcode.com/u/Mohanragul', label: 'LeetCode' },
    { icon: <SiCodeforces />, link: 'https://codeforces.com/profile/Mohanragul', label: 'Codeforces' },
    { icon: <SiGeeksforgeeks />, link: 'https://auth.geeksforgeeks.org/user/mohanragul', label: 'GeeksforGeeks' },
    { icon: <SiCodechef />, link: 'https://www.codechef.com/users/mohan_06', label: 'CodeChef' }
  ];


  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">GET IN TOUCH</h2>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="contact-content"
        >
          <motion.div className="contact-info" variants={itemVariants}>
            <h3>Contact Information</h3>
            <p>Feel free to reach out to me for any inquiries, collaborations, or just to say hello!</p>
            
            <div className="info-list">
              {contactInfo.map((info, index) => (
                <div key={index} className="info-item">
                  <div className="info-icon">{info.icon}</div>
                  <div className="info-details">
                    <h4>{info.title}</h4>
                    <a href={info.link} target="_blank" rel="noopener noreferrer">
                      {info.content}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="social-links">
              <h3>Find Me On</h3>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="social-icon"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
