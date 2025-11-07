import React from "react";

function Price({ value }) {
  const rupees = (value / 100).toFixed(2);
  return <span className="font-semibold text-vibe4">₹{rupees}</span>;
}

export default function CartPanel({
  cart = { items: [], total: 0 },
  onUpdate = () => {},
  onRemove = () => {},
}) {
  return (
    <div className="bg-vibe2 mt-10 p-7 w-96 rounded-2xl shadow-sm border border-vibe3/60 font-body">
      <h3 className="font-heading text-lg text-vibe4 mb-4">Your Cart</h3>

      {cart.items.length === 0 ? (
        <div className="text-gray-500 italic">Cart is empty.</div>
      ) : (
        <ul className="space-y-4">
          {cart.items.map((it) => (
            <li
              key={it.id}
              className="flex items-center gap-4 pb-3 border-b border-vibe3/40"
            >
              {/* Item Info */}
              <div className="flex-1">
                <div className="font-medium text-vibe4">{it.name}</div>
                <div className="text-sm text-gray-600">
                  Unit: <Price value={it.price} />
                </div>
              </div>

              {/* Quantity + Line Total */}
              <div className="flex items-center gap-3">
                <input
                  type="number"
                  min="0"
                  value={it.qty}
                  onChange={(e) => {
                    const val = Math.max(
                      0,
                      parseInt(e.target.value || "0", 10)
                    );
                    onUpdate(it.id, val);
                  }}
                  className="w-16 px-3 py-1.5 rounded-md border border-vibe3 bg-white focus:outline-none focus:ring-2 focus:ring-vibe4/40"
                />

                <div className="w-24 text-right font-semibold text-vibe4">
                  <Price value={it.lineTotal} />
                </div>

                <button
                  onClick={() => onRemove(it.id)}
                  className="text-sm text-red-500 hover:text-red-600 font-medium transition"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Total */}
      <div className="mt-5 pt-4 border-t border-vibe3/50 flex items-center justify-between">
        <div className="font-semibold text-vibe4">Total</div>
        <div className="text-xl font-heading text-vibe4">
          <Price value={cart.total} />
        </div>
      </div>
    </div>
  );
}
