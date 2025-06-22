import Header from "./components/Header.jsx";
import Meals from "./components/Meals.jsx";
import CartContext, { CartProvider } from "./store/CartContext.jsx";
import { UserProgressContextProvider } from "./store/UserProgressContext.jsx";
import Cart from "./components/Cart.jsx";

function App() {
  return (
    <UserProgressContextProvider>
      <CartProvider>
        <Header />
        <Meals />
        <Cart />
      </CartProvider>
    </UserProgressContextProvider>
  );
}

export default App;
