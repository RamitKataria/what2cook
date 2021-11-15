import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import AboutPage from "./components/about-page";
// import HomePage from "./components/home-page";

export default function App() {
  // const MyPaths = [
  //   {name: "Home", path: "/home-page", component: HomePage},
  //   {name: "About Us", path: "/about-page", component: AboutPage}
  // ]

  return (
    <div>
    {/* <Router>
      {MyPaths.map()}
    </Router> */}
   {/* <HomePage/> */}
      <AboutPage/>
    </div>
  );
}