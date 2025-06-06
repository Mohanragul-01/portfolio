import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Skills.css';

const Skills = () => {
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
        staggerChildren: 0.1
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
  const technicalSkills = [
    'Python',
    'JavaScript',
    'C',
    'C++',
    'Tailwind CSS',
    'React.js',
    'Node.js',
    'Express.js',
    'Flask',
    'MongoDB',
    'PostgreSQL',
    'Streamlit',
    'TensorFlow',
    'Scikit-learn',
    'OpenCV',
    'YOLO',
    'RAG',
    'LangChain',
    'Hugging Face',
    'Pandas',
    'NumPy',
    'Matplotlib',
    'Seaborn'
  ];

  const tools = [
    'Figma',
    'GitHub',
    'Docker',
    'Postman',
    'Grafana',
    'VS Code',
    'Jupyter',
    'Anaconda',
    'Arduino',
    'Raspberry Pi'
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">SKILLS</h2>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="skills-content"
        >
          <motion.div className="skills-category" variants={itemVariants}>
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              {technicalSkills.map((skill, index) => (
                <motion.div 
                  key={index} 
                  className="skill-badge"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div className="tools-container" variants={itemVariants}>
            <h3>Tools & Technologies</h3>
            <div className="tools-grid">
              {tools.map((tool, index) => (
                <motion.div 
                  key={index} 
                  className="tool-item"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  {tool}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
