// import { motion } from "framer-motion";
// import {
//   FaEnvelope,
//   FaPhone,
//   FaGithub,
//   FaLinkedin,
// } from "react-icons/fa";

// const Contact = () => {
//   return (
//     <section className="contact" id="contact">
//       <motion.div
//         className="contact-container"
//         initial={{ opacity: 0, y: 80 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//       >
//         <h2>Contact Me</h2>

//         <div className="contact-info">

//           <div className="contact-item">
//             <FaEnvelope />
//             <span>rabiazakiyya@gmail.com</span>
//           </div>

//           <div className="contact-item">
//             <FaPhone />
//             <span>+91 9342641202</span>
//           </div>

//           <div className="contact-item">
//             <FaGithub />
//             <span>GitHub Profile</span>
//           </div>

//           <div className="contact-item">
//             <FaLinkedin />
//             <span>LinkedIn Profile</span>
//           </div>

//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default Contact;

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Let's Connect</h2>

        <p className="contact-text">
          I'm always open to discussing new projects,
          internships, collaborations, and opportunities.
        </p>

        <div className="contact-info">

          <a
            href="mailto:rabiazakiyya@gmail.com"
            className="contact-item"
          >
            <FaEnvelope />
            <div>
              <h4>Email</h4>
              <span>rabiazakiyya@gmail.com</span>
            </div>
          </a>

          <a
            href="tel:+919342641202"
            className="contact-item"
          >
            <FaPhone />
            <div>
              <h4>Phone</h4>
              <span>+91 9342641202</span>
            </div>
          </a>

          <a
            href="https://github.com/rabiazakiyyah1407"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <FaGithub />
            <div>
              <h4>GitHub</h4>
              <span>View My Projects</span>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/rabia-zakiyya-h-413303367/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <FaLinkedin />
            <div>
              <h4>LinkedIn</h4>
              <span>Connect Professionally</span>
            </div>
          </a>

        </div>
      </motion.div>
    </section>
  );
};

export default Contact;