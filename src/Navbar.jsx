import { useState } from "react";
import { links, social } from "./data";
import { FaBars } from "react-icons/fa";
import logo from "./logo.png";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className="nav-center">
      <div className="nav-header">
        <img src={logo} className="logo" />
        <button className="nav-toggle" onClick={toggleLinks}>
          <FaBars />
        </button>
      </div>
      <div
        className={
          showLinks ? "links-container show-container" : "links-container"
        }
      >
        <ul className="links">
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
