import React, { useState } from "react";

const PRODUCTS = [
  { id: 1, title: "Classic Tee", price: 60, sku: "CT-001", img: "/assets/product-1.svg" },
  { id: 2, title: "Slim Shirt", price: 75, sku: "SS-002", img: "/assets/product-2.svg" },
  { id: 3, title: "Denim Skirt", price: 120, sku: "DS-003", img: "/assets/product-3.svg" },
  { id: 4, title: "Double Pocket Jacket", price: 220, sku: "DJ-004", img: "/assets/product-4.svg" },
  { id: 5, title: "Casual Dress", price: 85, sku: "CD-005", img: "/assets/product-5.svg" },
  { id: 6, title: "Comfort Shorts", price: 50, sku: "CS-006", img: "/assets/product-6.svg" }
];

export default function App() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const filtered = PRODUCTS.filter((p) =>
    p.title.toLowerCase().includes(query.trim().toLowerCase())
  );

  const openWhatsAppWith = (text) => {
    const phone = "27842685484";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-amber-50 text-gray-900 antialiased">
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="/assets/logo.svg" alt="logo" className="w-12 h-12 object-contain" />
            <div>
              <h1 className="text-xl font-serif text-red-700">Molla Trading</h1>
              <p className="text-xs text-gray-600">Wholesale & Retail — Clothing</p>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 text-sm items-center">
            <a href="#home" className="hover:text-red-700">Home</a>
            <a href="#products" className="hover:text-red-700">Products</a>
            <a href="#about" className="hover:text-red-700">About</a>
            <a href="#contact" className="hover:text-red-700">Contact</a>
            <button
              onClick={() => openWhatsAppWith("Hello, I'm interested in your products")}
              className="ml-4 px-3 py-2 bg-green-600 text-white rounded"
            >
              WhatsApp
            </button>
          </nav>

          <div className="md:hidden">
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="px-3 py-2 rounded bg-red-600 text-white">Top</button>
          </div>
        </div>
      </header>

      <section id="home" className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-serif text-red-700">Stylish clothing for everyone</h2>
          <p className="mt-4 text-gray-700">Quality women's & men's clothing — wholesale and retail.</p>

          <div className="mt-6 flex gap-4">
            <a href="#products" className="px-5 py-3 bg-red-600 text-white rounded shadow">View Products</a>
            <button onClick={() => openWhatsAppWith("Hi, I'd like to order in bulk")} className="px-5 py-3 border border-red-600 text-red-600 rounded">Order via WhatsApp</button>
          </div>

          <div className="mt-6 text-sm text-gray-700">
            <p><strong>Address:</strong> 217 Rahima Moosa St, Madiba Building, Ground Floor, Shop No. 5, Johannesburg</p>
            <p><strong>Phone:</strong> +27 84 268 5484 • <strong>Email:</strong> tradingmolla@gmail.com</p>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img src="/assets/model.svg" alt="model" className="w-64 h-96 object-contain rounded-lg shadow" />
        </div>
      </section>

      <section id="products" className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-semibold">Products</h3>
            <p className="text-sm text-gray-600">Wholesale R45 / Retail R60 for many basics.</p>
          </div>

          <div className="flex items-center gap-3">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search styles..."
              className="border rounded px-3 py-2"
            />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {filtered.map((p) => (
            <div key={p.id} className="bg-white rounded-lg shadow p-3 flex flex-col">
              <div className="h-36 bg-gray-50 rounded overflow-hidden flex items-center justify-center">
                <img src={p.img} alt={p.title} onError={(e)=> e.currentTarget.src="/assets/product-placeholder.png"} className="object-contain h-full w-full" />
              </div>

              <div className="mt-2 flex-1">
                <h4 className="font-medium">{p.title}</h4>
                <div className="text-sm text-gray-600 mt-1">SKU: {p.sku}</div>
              </div>

              <div className="mt-3 flex items-center justify-between">
                <div className="text-lg font-semibold">R{p.price}</div>
                <div className="flex items-center gap-2">
                  <button onClick={() => { setSelected(p); }} className="px-3 py-1 border rounded text-sm">Details</button>
                  <button onClick={() => openWhatsAppWith(`Hello, I'd like to order ${p.title} (SKU: ${p.sku})`)} className="px-3 py-1 bg-green-600 text-white rounded text-sm">Order</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="max-w-6xl mx-auto px-4 py-8 bg-white/60">
        <h3 className="text-2xl font-semibold">About Molla Trading</h3>
        <p className="mt-3 text-gray-700">Affordable and stylish clothing for men and women. Wholesale orders welcomed.</p>
      </section>

      <section id="contact" className="max-w-6xl mx-auto px-4 py-8">
        <h3 className="text-2xl font-semibold">Contact</h3>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-gray-700">Address: 217 Rahima Moosa St, Madiba Building, Ground Floor, Shop No. 5</p>
            <p className="mt-2 text-gray-700">Phone / WhatsApp: +27 84 268 5484</p>
            <p className="mt-2 text-gray-700">Email: tradingmolla@gmail.com</p>

            <div className="mt-4">
              <button onClick={() => openWhatsAppWith("Hello, I want to place an order")} className="px-4 py-2 bg-green-600 text-white rounded">Message on WhatsApp</button>
            </div>
          </div>

          <form onSubmit={(e)=>{ e.preventDefault(); alert('Message sent (demo)'); }} className="bg-white p-4 rounded shadow">
            <label className="block">
              <span className="text-sm text-gray-700">Full name</span>
              <input required className="mt-1 w-full border rounded px-2 py-2" />
            </label>

            <label className="block mt-3">
              <span className="text-sm text-gray-700">Phone or email</span>
              <input required className="mt-1 w-full border rounded px-2 py-2" />
            </label>

            <label className="block mt-3">
              <span className="text-sm text-gray-700">Message</span>
              <textarea required className="mt-1 w-full border rounded px-2 py-2" rows="4" />
            </label>

            <div className="mt-3 text-right">
              <button type="submit" className="px-4 py-2 bg-red-600 text-white rounded">Send</button>
            </div>
          </form>
        </div>
      </section>

      <footer className="mt-8 bg-amber-50 py-6">
        <div className="max-w-6xl mx-auto px-4 text-sm text-gray-700 flex items-center justify-between">
          <div>© {new Date().getFullYear()} Molla Trading</div>
          <div>Follow us on Facebook</div>
        </div>
      </footer>

      <button
        onClick={() => openWhatsAppWith("Hello, I'm interested in your products")}
        className="fixed right-4 bottom-6 w-14 h-14 rounded-full bg-green-600 text-white shadow-lg flex items-center justify-center"
        aria-label="WhatsApp"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M20 4.5C18.6 3.1 16.8 2.2 14.9 2.2 10 2.2 6.2 6 6.2 10.9c0 1.5.4 2.9 1.2 4.1L6 21l5.2-1.3c1.1.6 2.4.9 3.8.9 4.9 0 8.7-3.8 8.7-8.7 0-1.9-.7-3.7-1.9-5.1z" fill="currentColor"></path>
        </svg>
      </button>

      {selected && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow p-4 max-w-md w-full">
            <div className="flex justify-between items-start">
              <h4 className="font-semibold">{selected.title}</h4>
              <button onClick={() => setSelected(null)} className="text-gray-500">✕</button>
            </div>

            <div className="mt-3">
              <img src={selected.img} alt={selected.title} className="w-full h-56 object-contain" onError={(e)=> e.currentTarget.src="/assets/product-placeholder.png"} />
              <p className="mt-2 text-gray-700">SKU: {selected.sku}</p>
              <p className="mt-2 text-lg font-semibold">R{selected.price}</p>
              <div className="mt-3 flex gap-3">
                <button onClick={() => openWhatsAppWith(`Hello, I'd like to order ${selected.title} (SKU: ${selected.sku})`)} className="px-4 py-2 bg-green-600 text-white rounded">Order on WhatsApp</button>
                <button onClick={() => setSelected(null)} className="px-4 py-2 border rounded">Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
          }
