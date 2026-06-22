import { motion } from "framer-motion";

const educationData = [
  {
    year: "2026 - Present",
    title: "Bachelor of Engineering (B.Tech)",
    institution: "Kongu Engineering College",
    score: "CGPA: 8.7/10",
  },
  {
    year: "2024",
    title: "Class XII",
    institution: "Tamil Nadu State Board",
    score: "86%",
  },
  {
    year: "2022",
    title: "Class X",
    institution: "Tamil Nadu State Board",
    score: "92%",
  },
];

const Education = () => {
  return (
    <section className="education" id="education">
      <h2>Education Journey</h2>

      <div className="timeline">
        {educationData.map((item, index) => (
          <motion.div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="timeline-card">
              <h3>{item.year}</h3>
              <h4>{item.title}</h4>
              <p>{item.institution}</p>
              <span>{item.score}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;