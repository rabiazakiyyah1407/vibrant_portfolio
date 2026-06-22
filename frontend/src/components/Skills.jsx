// import {
//   FaJava,
//   FaPython,
//   FaReact,
//   FaGitAlt,
//   FaGithub,
// } from "react-icons/fa";

// const Skills = () => {
//   return (
//     <section className="skills" id="skills">
//       <h2>Technical Skills</h2>

//       <div className="skills-grid">

//         <div className="skill-card">
//           <FaJava />
//           <h3>Java</h3>
//         </div>

//         <div className="skill-card">
//           <FaPython />
//           <h3>Python</h3>
//         </div>

//         <div className="skill-card">
//           <FaReact />
//           <h3>React</h3>
//         </div>

//         <div className="skill-card">
//           <FaGitAlt />
//           <h3>Git</h3>
//         </div>

//         <div className="skill-card">
//           <FaGithub />
//           <h3>GitHub</h3>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Skills;

import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaDatabase,
  FaTools,
  FaRocket,
  FaBook,
} from "react-icons/fa";

const Skills = () => {
  const skills = [
    {
      icon: <FaCode />,
      title: "Languages",
      items: ["Java", "Python", "JavaScript"],
    },
    {
      icon: <FaLaptopCode />,
      title: "Frontend",
      items: ["HTML", "CSS", "React.js"],
    },
    {
      icon: <FaDatabase />,
      title: "Databases",
      items: ["MySQL", "MongoDB"],
    },
    {
      icon: <FaTools />,
      title: "Tools",
      items: ["Git", "GitHub", "VS Code"],
    },
    {
      icon: <FaRocket />,
      title: "Deployment",
      items: ["Vercel", "Render"],
    },
    {
      icon: <FaBook />,
      title: "Coursework",
      items: [
        "DSA",
        "CN",
        "OS",
        "DBMS",
        "OOPS",
      ],
    },
  ];

  return (
    <section className="skills" id="skills">
      <h2>Technical Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{
              y: -12,
              scale: 1.03,
            }}
          >
            <div className="skill-icon">
              {skill.icon}
            </div>

            <h3>{skill.title}</h3>

            <div className="skill-tags">
              {skill.items.map((item, i) => (
                <span key={i}>{item}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;