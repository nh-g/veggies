import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import NavigationBar from "./shared/NavigationBar";
import Footer from "./shared/Footer";

import HomePage from './pages/HomePage/Home';
import ProductPage from "./pages/ProductPages/Product";
import CategoryPage from "./pages/CategoryPages/Category";
import ContactPage from './pages/ContactPage/Contact';

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
