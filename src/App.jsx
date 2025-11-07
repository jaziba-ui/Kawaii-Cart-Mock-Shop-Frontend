import React, { useEffect, useState } from "react";
import { addOrUpdateCart, checkout, fetchCart, fetchProducts, removeFromCart } from "./api";
import Products from "./Products";
import CartPanel from "./CartPanel";
import CheckoutModal from "./CheckoutModal";
import ReceiptModal from "./ReceiptModal";

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({ items: [], total: 0 });
  const [loading, setLoading] = useState(true);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [receipt, setReceipt] = useState(null);
  const [error, setError] = useState(null);

  async function loadAll() {
    try {
      setLoading(true);
      const prodRes = await fetchProducts();
      setProducts(prodRes.products || []);
      const cartRes = await fetchCart();
      setCart(cartRes || { items: [], total: 0 });
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to load");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadAll();
  }, []);

  async function handleAddToCart(productId, qty) {
    try {
      const res = await addOrUpdateCart(productId, qty);
      setCart(res);
    } catch (err) {
      setError(err.message || "Failed to add to cart");
    }
  }

  async function handleRemove(productId) {
    try {
      const res = await removeFromCart(productId);
      setCart(res);
    } catch (err) {
      setError(err.message || "Failed to remove item");
    }
  }

  async function handleCheckout({ name, email }) {
    const cartItems = cart.items.map((it) => ({ productId: it.id, qty: it.qty }));
    try {
      const res = await checkout({ cartItems, name, email });
      setReceipt(res.receipt || res);
      setCart({ items: [], total: 0 });
      setCheckoutOpen(false);
    } catch (err) {
      setError(err.message || "Checkout failed");
    }
  }

  return (
    <div className="min-h-screen bg-vibe1 font-body text-gray-800">
      <header className="bg-vibe2 border-b border-vibe3 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="font-heading text-3xl text-vibe4">Kawaii-Cart — Mock Shop</h1>

          <div className="flex items-center gap-4">
            <button
              className="px-4 py-2 rounded-md bg-vibe4 text-white font-medium hover:bg-pink-600 transition"
              onClick={() => setCheckoutOpen(true)}
            >
              Checkout
            </button>
            <div className="text-sm font-semibold">
              Total: <span className="text-vibe4">₹{(cart.total / 100).toFixed(2)}</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <section className="lg:col-span-3">
          <h2 className="font-heading text-2xl text-vibe4 mb-4">Products</h2>
          {loading ? (
            <div className="text-gray-600">Loading products...</div>
          ) : (
            <Products products={products} onAdd={handleAddToCart} />
          )}
        </section>

        <aside className="lg:col-span-1">
          <CartPanel cart={cart} onUpdate={handleAddToCart} onRemove={handleRemove} />
        </aside>
      </main>

      <CheckoutModal open={checkoutOpen} onClose={() => setCheckoutOpen(false)} cart={cart} onSubmit={handleCheckout} />

      <ReceiptModal receipt={receipt} onClose={() => setReceipt(null)} />

      {error && (
        <div className="fixed bottom-6 right-6 bg-red-600 text-white px-4 py-2 rounded shadow-lg">
          <div className="flex items-center gap-4">
            <span className="font-semibold">Error:</span>
            <span>{error}</span>
            <button className="underline" onClick={() => setError(null)}>
              Dismiss
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
