import "./HomeScreen.css";
import Product from "../components/Product";

const HomeScreen = () => {
  return (
    <div className="homescreen">
      Home Screen
      <h2 className="homescreen_title">Latest products</h2>
      <div className="homescreen_products">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default HomeScreen;
