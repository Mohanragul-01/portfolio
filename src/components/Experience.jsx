import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCalendar, FiMapPin } from 'react-icons/fi';
import './Experience.css';

const Experience = () => {
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

  const experienceData = [
    {
      title: 'Machine Learning Intern – AI Feedback Analysis System',
      company: 'AssuredAI',
      location: 'Coimbatore, India',
      period: 'September 2024 – November 2024',
      description: 'Developed a real-time feedback analysis system using ensemble machine learning for emotion detection from non-verbal cues.',
      responsibilities: [
        'Integrated facial recognition, interaction metrics, and system logs to enhance analysis accuracy.',
        'Utilized TensorFlow, OpenCV, dlib, FNN, CNN for emotion analysis.',
        'Built interactive dashboards with Streamlit and Grafana.'
      ]
    },
    {
      title: 'Project Intern – Vendor Comparison Application',
      company: 'SAP',
      location: 'Bengaluru, India',
      period: 'March 2024 – June 2024',
      description: 'Created a decision-support tool for vendor selection using dynamic comparison metrics.',
      responsibilities: [
        'Implemented small language models (SLM) and Retrieval-Augmented Generation (RAG) for real-time product comparisons.',
        'Developed frontend using React.js and backend logic with LangChain and Gradio.',
        'Performed data analysis with NumPy and Pandas.'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">EXPERIENCE</h2>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="timeline"
        >
          {experienceData.map((item, index) => (
            <motion.div 
              key={index} 
              className="timeline-item"
              variants={itemVariants}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <h4>{item.company}</h4>
                
                <div className="timeline-info">
                  <div className="info-item">
                    <FiCalendar className="info-icon" />
                    <span>{item.period}</span>
                  </div>
                  <div className="info-item">
                    <FiMapPin className="info-icon" />
                    <span>{item.location}</span>
                  </div>
                </div>
                
                <p>{item.description}</p>
                
                <div className="responsibilities">
                  <h5>Key Responsibilities</h5>
                  <ul>
                    {item.responsibilities.map((responsibility, responsibilityIndex) => (
                      <li key={responsibilityIndex}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
 
export default Experience;
