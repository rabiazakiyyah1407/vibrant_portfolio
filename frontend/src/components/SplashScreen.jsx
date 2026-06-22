// import { motion } from "framer-motion";

// const SplashScreen = () => {
//   return (
//     <motion.div
//       className="splash-screen"
//       initial={{ opacity: 1 }}
//       animate={{ opacity: 0 }}
//       transition={{ delay: 2.5, duration: 1 }}
//     >
//       <motion.h1
//         initial={{ scale: 0 }}
//         animate={{ scale: 1 }}
//         transition={{ duration: 1 }}
//       >
//         RZ
//       </motion.h1>

//       <p>Rabia Zakiyya H</p>
//     </motion.div>
//   );
// };

// export default SplashScreen;
import { motion } from "framer-motion";
import {
  FaReact,
  FaPython,
} from "react-icons/fa";

import {
  SiMongodb,
  SiVercel,
} from "react-icons/si";

const SplashScreen = () => {
  return (
    <div className="splash-screen">

      <div className="glow-circle"></div>

      {/* Orbit Ring */}
      <div className="orbit-container">

        <div className="orbit orbit1">
          <FaReact className="orbit-icon react" />
        </div>

        <div className="orbit orbit2">
          <FaPython className="orbit-icon python" />
        </div>

        <div className="orbit orbit3">
          <SiMongodb className="orbit-icon mongo" />
        </div>

        <div className="orbit orbit4">
          <SiVercel className="orbit-icon vercel" />
        </div>

      </div>

      <motion.h1
        className="portfolio-logo"
        initial={{
          scale: 0.6,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
      >
        Portfolio
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1,
          duration: 1,
        }}
      >
        Full Stack Developer • MERN • Problem Solver
      </motion.p>

      <div className="particles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

    </div>
  );
};

export default SplashScreen;