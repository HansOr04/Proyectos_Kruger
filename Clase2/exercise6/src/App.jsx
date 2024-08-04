import { Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductsPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import Navbar from "./components/Narbar";

function App() {
  return (
    <>
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/cart" element={<ShoppingCartPage />} />
      </Routes>
    </>
  );
}

export default App;
