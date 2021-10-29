import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Screens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

//Component
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      {/*Nav Bar*/}
      {/* SideDrawer */}
      {/* Backdrop */}
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/products/:id" component={ProductScreen} />
          <Route exacr path="/cart" component={CartScreen} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
