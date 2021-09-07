import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";

import './css/style.css';
export default function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <div className="main">
          <HomePage/>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
