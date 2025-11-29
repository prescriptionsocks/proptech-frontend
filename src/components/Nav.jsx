import { Link } from "react-router-dom"

export default function Nav() {
  return (
    <nav>
      <div className="secion-padding">
        <div className="nav-flex">
          <Link to="/" className="nav-logo">
      
      </Link> {" "}
      

      <Link to="/">Home</Link> |{" "}
      <Link to="/add">Add Property</Link> |{" "}
      <Link to="/about">About</Link>

        </div>
      </div>
      
    </nav>
  )
}
