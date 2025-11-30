import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="section-padding is-nav">
        <div className="nav-flex">
          <Link to="/" className="nav-logo">
          PROPTECH
          </Link>

          <div className="nav-list">
            <Link className="nav-lin" to="/">Home</Link>
            <Link className="nav-lin" to="/add">Add Property</Link>
            <Link className="nav-lin" to="/about">About</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
