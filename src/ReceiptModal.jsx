import React from "react";

export default function ReceiptModal({ receipt, onClose }) {
  if (!receipt) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center font-body">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-vibe2 rounded-2xl shadow-lg border border-vibe3/60 z-50 w-full max-w-lg p-6 animate-fadeIn">
        
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-heading text-xl text-vibe4">Receipt</h3>
          <button
            onClick={onClose}
            className="text-sm text-gray-600 hover:text-gray-800"
          >
            Close
          </button>
        </div>

        {/* Receipt Meta */}
        <div className="space-y-1 text-sm text-gray-700">
          <div><strong className="text-vibe4">Receipt ID:</strong> {receipt.receiptId}</div>
          {receipt.name && <div><strong className="text-vibe4">Name:</strong> {receipt.name}</div>}
          {receipt.email && <div><strong className="text-vibe4">Email:</strong> {receipt.email}</div>}
          <div>
            <strong className="text-vibe4">When:</strong> {new Date(receipt.timestamp).toLocaleString()}
          </div>
        </div>

        {/* Items Table */}
        <table className="w-full mt-5 text-sm">
          <thead>
            <tr className="text-left text-vibe4 font-medium border-b border-vibe3/60">
              <th className="pb-2">Item</th>
              <th className="pb-2">Qty</th>
              <th className="pb-2 text-right">Line</th>
            </tr>
          </thead>

          <tbody>
            {receipt.items.map((it) => (
              <tr key={it.id} className="border-b border-vibe3/40">
                <td className="py-2">{it.name}</td>
                <td className="py-2">{it.qty}</td>
                <td className="py-2 text-right">₹{(it.lineTotal / 100).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>

          <tfoot>
            <tr className="font-semibold text-vibe4 border-t border-vibe3/60">
              <td className="pt-3"></td>
              <td className="pt-3">Total</td>
              <td className="pt-3 text-right">₹{(receipt.total / 100).toFixed(2)}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
