import { useState } from "react";
import "./App.css";

function App() {

  // 1️⃣ Product List
  const products = [
    { id: 1, name: "Shoes", price: 1999 },
    { id: 2, name: "T-Shirt", price: 799 },
    { id: 3, name: "Watch", price: 2499 }
  ];

  // 2️⃣ Cart State
  const [cart, setCart] = useState([]);

  // 3️⃣ Add to Cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="container">

      <h1>Mini E-Commerce Store</h1>

      <h2>🛒 Cart Items: {cart.length}</h2>

      <div className="products">

        {products.map((item) => (
          <div key={item.id} className="card">

            <h3>{item.name}</h3>
            <p>₹ {item.price}</p>

            <button onClick={() => addToCart(item)}>
              Add to Cart
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default App;