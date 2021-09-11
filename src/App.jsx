// remember what we said about Prettier formatting stuff vertically...
// as being a "clue" that something is wrong...
// see the comment on the <Switch> for the answer.
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import HomePage from "./pages/homepage";
import ProductPage from "./pages/productpage";
import CategoryPage from "./pages/categorypage";
import ContactPage from "./pages/contactpage";
import "./css/style.css";

// space betwern imports and the exported component
/**
 * A note about the component folder organization.
 * I see some atoms and sections folders but the rest of the components are outside these folders.
 * Either we commit fully to the atomic design or we drop it, otherwise it feels incomplete
 */
export default function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <div className="main">
          <Switch>
            {/* You dont need a redirect -1 */}
            {/* you only need exact in the "/" */}
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
