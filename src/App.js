import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

import './css/style.css';
export default function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <div className="main">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          laudantium cupiditate totam quae eaque sed temporibus voluptate unde
          accusantium optio sit maiores, minus sequi tenetur est soluta quas,
          aliquam distinctio!
        </div>
        <Footer />
      </div>
    </Router>
  );
}
