import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";

const Cart = () => {
  const { products, currency, deliveery_fee } = useContext(ShopContext);

  // cart stored as { [productId]: qty }
  const [cart, setCart] = useState(() => {
    try {
      const raw = localStorage.getItem("cart");
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (e) {}
  }, [cart]);

  const addQty = (id) =>
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  const subQty = (id) =>
    setCart((prev) => {
      const next = { ...prev };
      if (!next[id]) return prev;
      next[id] = next[id] - 1;
      if (next[id] <= 0) delete next[id];
      return next;
    });
  const removeItem = (id) =>
    setCart((prev) => {
      const n = { ...prev };
      delete n[id];
      return n;
    });
  const clearCart = () => setCart({});

  // Build an array of cart items with product data
  const cartItems = Object.keys(cart)
    .map((id) => {
      const prod = products.find((p) => p.id === id);
      return prod ? { ...prod, qty: cart[id] } : null;
    })
    .filter(Boolean);

  const subtotal = cartItems.reduce((s, it) => s + it.price * it.qty, 0);
  const delivery = cartItems.length ? deliveery_fee || 0 : 0;
  const total = subtotal + delivery;

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
        <p className="text-gray-600">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 p-4 border rounded-md bg-white"
            >
              <div className="w-24 h-24 bg-gray-50 flex items-center justify-center overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "";
                  }}
                />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-500">
                      {currency}
                      {item.price} each
                    </p>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-sm text-rose-600"
                  >
                    Remove
                  </button>
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <button
                    onClick={() => subQty(item.id)}
                    className="px-3 py-1 border rounded"
                  >
                    -
                  </button>
                  <div className="px-3">{item.qty}</div>
                  <button
                    onClick={() => addQty(item.id)}
                    className="px-3 py-1 border rounded"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <aside className="p-4 border rounded-md bg-white">
          <h4 className="font-semibold mb-3">Order Summary</h4>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>
              {currency}
              {subtotal}
            </span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Delivery</span>
            <span>
              {currency}
              {delivery}
            </span>
          </div>
          <div className="flex justify-between font-bold text-lg mt-3">
            <span>Total</span>
            <span>
              {currency}
              {total}
            </span>
          </div>

          <button className="w-full mt-4 bg-indigo-600 text-white py-2 rounded">
            Proceed to Checkout
          </button>
          <button
            onClick={clearCart}
            className="w-full mt-2 border py-2 rounded"
          >
            Clear Cart
          </button>
        </aside>
      </div>
    </div>
  );
};

export default Cart;
