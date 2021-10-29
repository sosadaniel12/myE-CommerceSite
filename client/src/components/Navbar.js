import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar_logo">
        <h2>E-commerce</h2>
      </div>

      <ul className="navbar_links">
        <li>
          <Link to="/cart" className="cart_link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span className="cartlogo_badge">0</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">
            Shop
            <span className="cartlogo_badge">0</span>
          </Link>
        </li>
      </ul>

      {/* Hamburger menu */}
      <div className="hamburger_menu">
        <div className="hamburger_menu_line"></div>
        <div className="hamburger_menu_line"></div>
        <div className="hamburger_menu_line"></div>
      </div>
    </nav>
  );
};
export default Navbar;
