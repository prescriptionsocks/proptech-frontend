import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="section-padding">
        <div className="nav-flex">
          <Link to="/" className="nav-logo">
            PROPTECH
          </Link>

          <div className="nav-list">
            <Link className="nav-lin" to="/">
              Home
            </Link>
            <Link className="nav-lin" to="/add">
              Add Property
            </Link>
            <Link className="nav-lin" to="/about">
              About
            </Link>
          </div>
        </div>
        <div className="footer-lower">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Proptech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
