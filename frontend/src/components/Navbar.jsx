import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar">

      <ul className="nav-links">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>

        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>

        <li>
          <Link to="education" smooth={true} duration={500}>
            Education
          </Link>
        </li>

        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>

        <li>
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>

        <li>
          <Link to="certifications" smooth={true} duration={500}>
            Certifications
          </Link>
        </li>

        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

    </nav>
  );
};

export default Navbar;