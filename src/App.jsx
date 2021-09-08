import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import PageRenderer from "./Page-renderer";

import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

import './css/style.css';
export default function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <div className="main">
          <Switch>
            <Route path="/:page" component={PageRenderer} /> 
            {/* <Route
              path="/dish"
              component={() => <CategoryPage urlParameter={"dish"} />}
            /> */}
            <Route path="/" render={() => <Redirect to="/home" />} />
            <Route component={() => 404} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
