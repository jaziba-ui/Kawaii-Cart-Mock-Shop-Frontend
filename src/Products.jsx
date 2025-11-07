import React, { useState } from "react";

function Price({ value }) {
  // backend stores price in paise → convert to rupees
  const rupees = (value / 100).toFixed(2);
  return <span className="font-semibold text-vibe4">₹{rupees}</span>;
}

function ProductCard({ product, onAdd }) {
  const [qty, setQty] = useState(1);

  return (
    <div className="bg-vibe2 rounded-2xl shadow-sm border border-vibe3/60 p-5 flex flex-col hover:shadow-md transition-shadow">
      {/* Product Image Placeholder */}
      <img
        src={`/products/${product.image}`}
        alt={product.name}
        className="h-40 w-full object-cover rounded-xl border border-vibe3/60"
      />

      {/* Info */}
      <div className="flex-1">
        <h3 className="font-heading text-lg text-vibe4 leading-tight">
          {product.name}
        </h3>
        <div className="mt-2 text-gray-700 font-body">
          <Price value={product.price} />
        </div>
      </div>

      {/* Controls */}
      <div className="mt-4 flex items-center gap-3">
        <input
          type="number"
          min="1"
          value={qty}
          onChange={(e) =>
            setQty(Math.max(1, parseInt(e.target.value || "1", 10)))
          }
          className="w-20 px-3 py-1.5 rounded-md border border-vibe3 bg-white text-gray-700 font-body focus:outline-none focus:ring-2 focus:ring-vibe4/40"
        />

        <button
          onClick={() => onAdd(product.id, qty)}
          className="ml-auto px-4 py-1.5 rounded-md bg-vibe4 text-white font-semibold hover:bg-pink-600 transition"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default function Products({ products = [], onAdd = () => {} }) {
  return (
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 font-body">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onAdd={onAdd} />
      ))}
    </div>
  );
}
