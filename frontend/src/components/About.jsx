import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="about" id="about">

      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        <h2>About Me</h2>

        <p>
          Motivated Computer Science student with strong foundations
          in Python and MERN Stack development.
        </p>

        <p>
          Experienced in building full-stack web applications and
          machine learning projects. Skilled in problem solving,
          web technologies and database management.
        </p>

        <p>
          Passionate about learning modern technologies and
          developing real-world software solutions that create
          meaningful impact.
        </p>

      </motion.div>

    </section>
  );
};

export default About;