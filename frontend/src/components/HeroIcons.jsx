import { FaReact, FaPython } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

const HeroIcons = () => {
  return (
    <>
      <FaReact className="floating-icon react-icon" />
      <FaPython className="floating-icon python-icon" />
      <SiMongodb className="floating-icon mongo-icon" />
    </>
  );
};

export default HeroIcons;