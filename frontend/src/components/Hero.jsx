// // import { TypeAnimation } from "react-type-animation";
// // import { motion } from "framer-motion";

// // const Hero = () => {
// //   return (
// //     <section className="hero" id="home">

// //       <motion.div
// //         initial={{ opacity: 0, y: 80 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 1 }}
// //       >

// //         <h3>Hello 👋</h3>

// //         <h1>
// //           Hi, I'm <span>Rabia Zakiyya H</span>
// //         </h1>

// //         <div className="typing">

// //           <TypeAnimation
// //             sequence={[
// //               "Full Stack Developer",
// //               2000,
// //               "MERN Stack Developer",
// //               2000,
// //               "Problem Solver",
// //               2000,
// //             ]}
// //             speed={50}
// //             repeat={Infinity}
// //           />

// //         </div>

// //         <p>
// //           Motivated Computer Science student with strong foundations
// //           in Python and MERN Stack development. Experienced in
// //           building full-stack web applications and machine learning
// //           projects.
// //         </p>

// //       </motion.div>

// //     </section>
// //   );
// // };

// // export default Hero;

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaReact, FaPython } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import HeroIcons from "./HeroIcons";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        {/* Left Side */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h3>Hello 👋</h3>

          <h1>
            Hi, I'm <span>Rabia Zakiyya H</span>
          </h1>

          <div className="typing">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "MERN Stack Developer",
                2000,
                "Problem Solver",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p>
            Motivated Computer Science student with strong foundations
            in Python and MERN Stack development. Experienced in
            building full-stack web applications and machine learning
            projects.
          </p>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1006/1006363.png"
            alt="Developer"
          />

          <FaReact className="floating-icon react" />
          <FaPython className="floating-icon python" />
          <SiMongodb className="floating-icon mongo" />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
// import { TypeAnimation } from "react-type-animation";
// import { motion } from "framer-motion";
// import HeroIcons from "./HeroIcons";

// const Hero = () => {
//   return (
//     <section className="hero" id="home">
//       <HeroIcons />

//       <div className="hero-container">

//         {/* Left Side */}
//         <motion.div
//           className="hero-content"
//           initial={{ opacity: 0, x: -80 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <h3>Hello 👋</h3>

//           <h1>
//             Hi, I'm <span>Rabia Zakiyya H</span>
//           </h1>

//           <div className="typing">
//             <TypeAnimation
//               sequence={[
//                 "Full Stack Developer",
//                 2000,
//                 "MERN Stack Developer",
//                 2000,
//                 "Problem Solver",
//                 2000,
//               ]}
//               speed={50}
//               repeat={Infinity}
//             />
//           </div>

//           <p>
//             Motivated Computer Science student with strong foundations
//             in Python and MERN Stack development. Experienced in
//             building full-stack web applications and machine learning
//             projects. Passionate about building innovative software
//             solutions and learning modern technologies.
//           </p>
//         </motion.div>

//         {/* Right Side */}
//         <motion.div
//           className="hero-image"
//           initial={{ opacity: 0, x: 80 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/1006/1006363.png"
//             alt="Developer Illustration"
//           />
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default Hero;