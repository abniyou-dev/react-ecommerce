import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Wichlist from "./pages/Wichlist";
import NavBar from "./components/NavBar";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <>
    
      <BrowserRouter>
        <CartProvider>
          <div>
            <NavBar />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/wishlist" element={<Wichlist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<Product />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
