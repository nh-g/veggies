import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import PageRenderer from "./Page-renderer";

import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

import ProductPage from "./pages/productpage";
import DishPage from './pages/dishpage';

import './css/style.css';
export default function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <div className="main">
          <Switch>
            <Route exact path="/:page" component={PageRenderer} />
            {/* <Route exact path="/dish" component={DishPage} /> */}
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            <Route
              exact
              path="/:category/:product_id"
              component={ProductPage}
            />
            <Route component={() => 404} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
