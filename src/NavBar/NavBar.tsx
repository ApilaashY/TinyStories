import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav>
      <div className="nav-content">
        <Link to="/">
          <h1>Tiny's Stories</h1>
        </Link>

        <div className="nav-options">
          <Link to="/">
            <h2>Home</h2>
          </Link>
        </div>
      </div>
    </nav>
  );
}
