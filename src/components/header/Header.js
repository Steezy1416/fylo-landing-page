import { logo } from "../../images";
import "./header.css";

const Header = () => {
  return (
    <header className="flex-row align-center">
      <div className="header-content flex-row space-between align-center">
        <img className="logo-icon" alt="" src={logo} />
        <nav>
          <ul className="flex-row nav-list-container">
            <li>Feature</li>
            <li>Team</li>
            <li>Sign In</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
