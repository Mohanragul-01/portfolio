import { motion } from 'framer-motion';
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader">
      <motion.div 
        className="loader-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="loader-icon">
          <motion.div 
            className="circle"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              borderRadius: ["50%", "30%", "50%"]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
        </div>
        <motion.h2 
          className="loader-text"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Loading...
        </motion.h2>
      </motion.div>
    </div>
  );
};

export default Loader;
