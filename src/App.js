import {BrowserRouter as Router, Route,Routes, Link} from "react-router-dom";

import AboutPage from "./components/about-page";
import HomePage from "./components/home-page";



export default function App() {
  const MyPaths = [
    {name: "Home", path: "/", component: <HomePage/>},
    {name: "About Us", path: "/about-page", component: <AboutPage/>}
  ]

  return (
    <Router>
      <Routes>
        <Route exact path="/about-page" element={<AboutPage/>}/>
        <Route path="/" element={<HomePage/>} /> 
      </Routes>
    </Router>
  );
}