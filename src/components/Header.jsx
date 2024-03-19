import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar">
      <div></div>
      <div className="header-center">
        <NavLink exact to="/" className="nav-item" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/projects" className="nav-item" activeClassName="active">
          Projects
        </NavLink>
        <NavLink to="/contact" className="nav-item" activeClassName="active">
          Contact
        </NavLink>
      </div>
      <div>
        <a className="resume-container" href="/resume-placeholder.pdf" download="resume.pdf">
          <div className="resume-link">
            <p className="resume-download">Download Resume</p>
            <img className="resume-icon" src="/resume.png"></img>
          </div>
        </a>
      </div>
    </nav>
  );
};

export default Header;
