import { useState, useEffect, memo } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiExternalLink, FiGithub, FiMaximize2 } from "react-icons/fi";
import "./Projects.css";

const ProjectCard = memo(({ project, openProjectModal }) => {
  return (
    <motion.div
      className="project-card"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
      whileHover={{ y: -10 }}
    >
      <div className="project-image">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          style={{ background: "rgba(0, 0, 0, 0.1)" }}
        />
        <div className="project-overlay">
          <button
            className="view-details-btn"
            onClick={() => openProjectModal(project)}
          >
            <FiMaximize2 />
          </button>
        </div>
      </div>
      <div className="project-info">
        <h3>
          {project.title.length > 20
            ? project.title.substring(0, 20) + `...`
            : project.title}
        </h3>
        <p>{project.description.substring(0, 100)}...</p>
        <div className="project-tech">
          {project.technologies.slice(0, 2).map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
          {project.technologies.length > 2 && (
            <span className="tech-tag">+{project.technologies.length - 3}</span>
          )}
        </div>
        <div className="project-links">
          <a
            href={project.github}
            className="project-link"
            title="GitHub Repository"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FiGithub />
          </a>
          {/* <a href={project.demo} className="project-link" title="Live Demo">
            <FiExternalLink />
          </a> */}
        </div>
      </div>
    </motion.div>
  );
});

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "ALLASK – AI Task Allocation System",
      category: "web",
      image:
        "https://images.pexels.com/photos/5076516/pexels-photo-5076516.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
      description:
        "An AI-driven task allocation application that optimizes task assignment using intelligent agents to boost productivity and efficiency.",
      technologies: [
        "LangChain",
        "NVIDIA AI",
        "PyPDF2",
        "Bootstrap",
        "Flask",
        "MySQL"
      ],
      github: "https://github.com/Mohanragul-01/allask.git",
      demo: "#",
    },
    {
      id: 2,
      title: "SmartLoan Assistant",
      category: "app",
      image:
        "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
      description:
        "A multilingual chatbot to guide users through loan applications with eligibility checks, financial advice, and speech/text inputs for better accessibility.",
      technologies: [
        "Sarvam AI",
        "LangChain",
        "RAG",
        "Groq",
        "PyPDF2",
        "React.js",
        "Flask"
      ],
      github: "https://github.com/Mohanragul-01/smart-loan-assistant.git",
      demo: "#",
    },
    {
      id: 3,
      title: "INVENTRA – Ingredient Tracker",
      category: "data",
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
      description:
        "Real-time object detection system for restaurants to monitor and track ingredient usage, reducing food waste and enhancing inventory management.",
      technologies: [
        "YOLO",
        "OpenCV",
        "Ultralytics",
        "PyTorch",
        "React.js",
        "Flask",
        "MongoDB",
      ],
      github: "https://github.com/Mohanragul-01/inventra.git",
      demo: "#",
    },
    {
      id: 4,
      title: "ISL Connect – Sign Language Translator",
      category: "app",
      image:
        "https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
      description:
        "Assistive communication software for hearing-impaired individuals with text-to-ISL, speech-to-text, and ISL video generation features.",
      technologies: [
        "TensorFlow",
        "OpenCV",
        "CNN",
        "React.js",
        "Node.js",
        "Flask",
        "MongoDB",
      ],
      github: "https://github.com/Mohanragul-01/isl-connect.git",
      demo: "#",
    },
    {
      id: 5,
      title: "Vendor Comparison Application – SAP Internship",
      category: "web",
      image:
        "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
      description:
        "A vendor selection decision-support tool with dynamic comparison metrics powered by SLM and Retrieval-Augmented Generation for product recommendations.",
      technologies: [
        "DistilBERT",
        "RAG",
        "LangChain",
        "Gradio",
        "React.js",
        "NumPy",
        "Pandas",
      ],
      github: "https://github.com/Mohanragul-01/vendor-comparison.git",
      demo: "#",
    },
    {
      id: 6,
      title: "AI Feedback Analysis System – AssuredAI Internship",
      category: "data",
      image:
        "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
      description:
        "A real-time feedback analysis system using ensemble learning to detect user emotions from non-verbal cues and activity patterns.",
      technologies: [
        "TensorFlow",
        "OpenCV",
        "dlib",
        "FNN",
        "CNN",
        "Streamlit",
        "Grafana",
      ],
      github: "https://github.com/Mohanragul-01/feedback-without-feedback.git",
      demo: "#",
    },
  ]);

  const [selectedProject, setSelectedProject] = useState(null);

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">PROJECTS</h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="projects-grid"
        >
          {projects.length > 0 ? (
            projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                openProjectModal={openProjectModal}
              />
            ))
          ) : (
            <p>No projects available.</p>
          )}
        </motion.div>

        <a
          href="https://github.com/Mohanragul-01"
          className="see-more-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub /> See More
        </a>
      </div>

      {selectedProject && (
        <div className="project-modal-backdrop" onClick={closeProjectModal}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeProjectModal}>
              ×
            </button>

            <div className="modal-content">
              <div className="modal-image">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  loading="lazy"
                  style={{ background: "rgba(0, 0, 0, 0.1)" }}
                />
              </div>

              <div className="modal-details">
                <h3>{selectedProject.title}</h3>
                <p>{selectedProject.description}</p>

                <div className="modal-technologies">
                  <h4>Technologies</h4>
                  <div className="tech-tags">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="modal-links">
                  <a
                    href={selectedProject.github}
                    className="btn btn-outline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub /> GitHub
                  </a>
                  {/* <a href={selectedProject.demo} className="btn" target="_blank" rel="noopener noreferrer">
                    <FiExternalLink /> Live Demo
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
