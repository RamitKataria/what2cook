import {BrowserRouter as Router, Route,Routes, Link} from "react-router-dom";

import AboutPage from "./components/about-page";
import HomePage from "./components/home-page";

export default function App() {
  const MyPaths = [
    {name: "Home", path: "/home-page", component: HomePage},
    {name: "About Us", path: "/about-page", component: AboutPage}
  ]

  return (
    <Router>
      {MyPaths.map((e) => (
        <Routes>
          <Route path={e.path} componene={e.component}/>
        </Routes>
      ))}

      <footer>
      <ol style={{ textDecoration: "none", display: "flex", flex: "row", margin: 0}}>
          {MyPaths.map((e) => {
            return (
              <nav class="d-flex flex-row m-3">
                <Link
                  to={e.path}
                  style={{ textDecoration: "none", fontSize: "small" }}
                >
                  {e.name}
                </Link>
              </nav>
            );
          })}
        </ol>
      </footer>
      <HomePage/>
    </Router>
  );
}