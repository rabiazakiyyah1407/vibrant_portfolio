// import { motion } from "framer-motion";

// const Projects = () => {
//   return (
//     <section className="projects" id="projects">

//       <h2>Projects</h2>

//       <div className="projects-grid">

//         <motion.div
//           className="project-card"
//           whileHover={{ scale: 1.05 }}
//         >
//           <h3>🌱 Smart Crop Advisory System</h3>

//           <p>
//             Developed an intelligent crop advisory system
//             that detects crop pests and diseases using
//             machine learning techniques.
//           </p>

//           <div className="tags">
//             <span>Python</span>
//             <span>Machine Learning</span>
//           </div>
//         </motion.div>

//         <motion.div
//           className="project-card"
//           whileHover={{ scale: 1.05 }}
//         >
//           <h3>😊 Sentiment Analysis App</h3>

//           <p>
//             Built a Streamlit based NLP application that
//             classifies text as positive, negative or neutral.
//           </p>

//           <div className="tags">
//             <span>Python</span>
//             <span>NLP</span>
//             <span>Streamlit</span>
//           </div>
//         </motion.div>

//       </div>

//     </section>
//   );
// };

// export default Projects;

import { motion } from "framer-motion";
import { FaSeedling, FaRobot } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      icon: <FaSeedling />,
      title: "Smart Crop Advisory System",
      description:
        "Developed an intelligent crop advisory system that detects crop pests and diseases from uploaded images using machine learning techniques and recommends suitable crops and pest-control measures.",
      tech: ["Python", "Machine Learning", "Image Processing"],
    },
    {
      icon: <FaRobot />,
      title: "Sentiment Analysis App",
      description:
        "Built a Streamlit-based NLP application that classifies text as positive, negative, or neutral with an interactive dashboard and visual sentiment insights.",
      tech: ["Python", "NLP", "Streamlit", "TextBlob"],
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2>Featured Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{
              y: -12,
              scale: 1.03,
            }}
          >
            <div className="project-icon">
              {project.icon}
            </div>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="tags">
              {project.tech.map((item, i) => (
                <span key={i}>{item}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;