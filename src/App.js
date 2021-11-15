import {BrowserRouter as Router, Route,Routes} from "react-router-dom";

import AboutPage from "./components/about-page";
import HomePage from "./components/home-page";



export default function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/about-page" element={<AboutPage/>}/>
        <Route path="/" element={<HomePage/>} /> 
      </Routes>
    </Router>
  );
}