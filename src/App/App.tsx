import { Link } from "react-router-dom";
import "./App.css";
import StoryDetail from "./StoryDetail/StoryDetail";

function App() {
  return (
    <>
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

      <h2 className="current-stories">Current Stories</h2>

      <div className="story-list">
        <StoryDetail />
      </div>
    </>
  );
}

export default App;
