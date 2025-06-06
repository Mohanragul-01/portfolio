import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCalendar, FiMapPin } from 'react-icons/fi';
import './Education.css';

const Education = () => {
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

  const educationData = [
    {
      degree: 'B.Tech in Artificial Intelligence and Data Science (CGPA: 8.28)',
      institution: 'PSG Institute of Technology and Applied Research',
      location: 'Coimbatore, India',
      period: '2022 – 2026',
      description: 'Focused on AI, Machine Learning, and Data Science. Engaged in technical projects, internships, and coding club activities.',
      courses: [
        'Data Structures and Algorithms',
        'Artificial Intelligence',
        'Machine Learning',
        'Deep Learning',
        'Cloud Computing'
      ]
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">EDUCATION</h2>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls} 
          className="timeline"
        >
          {educationData.map((item, index) => (
            <motion.div 
              key={index} 
              className="timeline-item"
              variants={itemVariants}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>{item.degree}</h3>
                <h4>{item.institution}</h4>
                
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
                
                <div className="courses">
                  <h5>Key Courses</h5>
                  <ul>
                    {item.courses.map((course, courseIndex) => (
                      <li key={courseIndex}>{course}</li>
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
 
export default Education;
