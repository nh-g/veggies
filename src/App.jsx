import {BrowserRouter, Switch, Route} from "react-router-dom";

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
      <BrowserRouter>
        <NavigationBar />

        <div className="main">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/contact" component={ContactPage} />
            <Route exact path="/:category" component={CategoryPage} />
            <Route
              exact
              path="/:category/:product_id"
              component={ProductPage}
            />
          </Switch>
        </div>
        
        <Footer />
      </BrowserRouter>
    </div>
  );
}
