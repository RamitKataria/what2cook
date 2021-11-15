import {BrowserRouter as Router, Route,Routes, Link} from "react-router-dom";

import AboutPage from "./components/about-page";
import HomePage from "./components/home-page";

import Logo from "./resources/logo.svg"

export default function App() {
  const MyPaths = [
    {name: "Home", path: "/", component: HomePage},
    {name: "About Us", path: "/about-page", component: AboutPage}
  ]

  return (
    <Router>

      <header>
      <ol style={{ textDecoration: "none", display: "flex", flex: "row", margin: 0}}>

        <img
          style={{ width: "100px", margin: "0", padding: "0.1rem"}}
          src={Logo}
          alt="What2Cook"/>

          {MyPaths.map((e) => {
            return (
                <nav class="d-flex flex-row m-3">
                  <Link
                    to={e.path}
                    style={{ textDecoration: "none", fontSize: "1rem", margin: "3rem" }}
                  >
                    {e.name}
                  </Link>
                </nav>
            );
          })}
        </ol>
      </header>


      {MyPaths.map((e) => (
        <Routes>
        <Route path={e.path} component={e.component} />
        </Routes>
      ))}
      {/* <HomePage/> */}
    </Router>
  );
}