import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiUser, FiAward, FiBookOpen, FiCode } from 'react-icons/fi';
import './About.css';

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
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
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const infoItems = [
    {
      icon: <FiUser />,
      title: 'Profile',
      description: 'B.Tech AI & DS student at PSG iTech with experience in ML, Full Stack development, and real-time AI projects.',
    },
    {
      icon: <FiCode />,
      title: 'Interests',
      description: 'Interested in AI agents, LLMs, RAG systems, and building applications using MERN Stack.',
    },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">ABOUT ME</h2>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="about-content"
        >
          <motion.div className="about-text" variants={itemVariants}>
            <h3>Get to know me</h3>
            <p>
              I'm Mohanragul G, B.Tech student in Artificial Intelligence and Data Science at PSG Institute of Technology and Applied Research. I specialize in building scalable software solutions using AI and MERN technologies. My experience includes internships at SAP and AssuredAI, and I’ve built projects like ALLASK and SmartLoan Assistant using RAG, LangChain, and React. I'm driven by innovation and solving real-world problems through technology.
            </p>
            <div className="about-cta">
              <button className="btn">
                <a href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
              </button>
            </div>
          </motion.div>
          
          <motion.div className="about-info" variants={itemVariants}>
            <div className="info-grid">
              {infoItems.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="info-card"
                  variants={itemVariants}
                >
                  <div className="info-icon">
                    {item.icon}
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  ); 
};

export default About;
