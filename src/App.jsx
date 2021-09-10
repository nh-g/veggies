import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

import HomePage from './pages/homepage';
import ProductPage from "./pages/productpage";
import CategoryPage from "./pages/categorypage";
import ContactPage from './pages/contactpage';

import './css/style.css';
export default function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <div className="main">
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/:category" component={CategoryPage} />
            <Route
              exact
              path="/:category/:product_id"
              component={ProductPage}
            />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}
