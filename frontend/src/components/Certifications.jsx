// import { motion } from "framer-motion";

// const Certifications = () => {
//   const certifications = [
//     {
//       title: "Human Computer Interaction",
//       issuer: "NPTEL",
//       link: "https://archive.nptel.ac.in/certificate.php?cert_num=NOC26CS70S15450079204786191",
//     },
//     {
//       title: "Object Oriented Programming",
//       issuer: "MATLAB",
//       link: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=fbf8051f-35c9-4c3b-9458-e16bce7119d7\&",
//     },
//     {
//       title: "Simulink Onramp",
//       issuer: "MATLAB",
//       link: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=43f1f9e1-0138-4e3b-8851-686384170474\&",
//     },
//   ];

//   return (
//     <section className="certifications" id="certifications">
//       <h2>Certifications</h2>

//       <div className="certificate-grid">
//         {certifications.map((cert, index) => (
//           <motion.a
//             key={index}
//             href={cert.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="certificate-card"
//             initial={{ opacity: 0, y: 80 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             whileHover={{
//               scale: 1.05,
//               y: -10,
//             }}
//           >
//             <h3>
//               {cert.title}
//               <span className="certificate-arrow"> ↗</span>
//             </h3>

//             <p>{cert.issuer}</p>
//           </motion.a>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Certifications;

import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa";

const Certifications = () => {
  const certifications = [
    {
      title: "Human Computer Interaction",
      issuer: "NPTEL",
      link: "https://archive.nptel.ac.in/certificate.php?cert_num=NOC26CS70S15450079204786191",
    },
    {
      title: "Object Oriented Programming",
      issuer: "MATLAB",
      link: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=fbf8051f-35c9-4c3b-9458-e16bce7119d7",
    },
    {
      title: "Simulink Onramp",
      issuer: "MATLAB",
      link: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=43f1f9e1-0138-4e3b-8851-686384170474",
    },
  ];

  return (
    <section className="certifications" id="certifications">
      <h2>Certifications</h2>

      <div className="certificate-grid">
        {certifications.map((cert, index) => (
          <motion.a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="certificate-card"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{
              y: -12,
              scale: 1.03,
            }}
          >
            <div className="cert-badge">
              <FaAward />
            </div>

            <h3>{cert.title}</h3>

            <p>{cert.issuer}</p>

            <span className="verify">
              View Certificate ↗
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Certifications;