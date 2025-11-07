import React, { useEffect, useState } from "react";

export default function CheckoutModal({ open, onClose, onSubmit, cart }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!open) {
      setName("");
      setEmail("");
      setSubmitting(false);
    }
  }, [open]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!cart.items.length) return alert("Cart is empty");
    try {
      setSubmitting(true);
      await onSubmit({ name, email });
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center font-body">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-[1px] transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-vibe2 rounded-2xl shadow-lg border border-vibe3/60 z-50 w-full max-w-md p-6 animate-fadeIn">
        
        {/* Close Button (top-right) */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 text-sm"
        >
          ×
        </button>

        <h3 className="font-heading text-xl text-vibe4 mb-4">Checkout</h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1 text-vibe4">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 py-2 rounded-md border border-vibe3 bg-white focus:outline-none focus:ring-2 focus:ring-vibe4/40"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1 text-vibe4">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 rounded-md border border-vibe3 bg-white focus:outline-none focus:ring-2 focus:ring-vibe4/40"
            />
          </div>

          {/* Footer */}
          <div className="pt-3 border-t border-vibe3/50 flex items-center justify-between">
            <div className="text-sm text-gray-700">
              Order Total: <span className="font-semibold text-vibe4">₹{(cart.total / 100).toFixed(2)}</span>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-3 py-1.5 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={submitting}
                className="px-4 py-1.5 rounded-md bg-vibe4 text-white font-medium hover:bg-vibe3 transition disabled:opacity-60"
              >
                {submitting ? "Processing..." : "Place Order"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
