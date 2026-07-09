import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ShoppingBag, 
  Accessibility, 
  Terminal, 
  Check, 
  Plus, 
  Minus, 
  Volume2, 
  Code,
  Eye,
  Info
} from "lucide-react";

interface Variant {
  id: string;
  name: string;
  colorCode: string;
  price: string;
  originalPrice: string;
  stock: number;
  bgGradient: string;
}

const VARIANTS: Variant[] = [
  {
    id: "v-jade",
    name: "Jade Matte",
    colorCode: "#10b981",
    price: "$145.00",
    originalPrice: "$165.00",
    stock: 4,
    bgGradient: "from-emerald-950/40 via-zinc-900/60 to-zinc-950"
  },
  {
    id: "v-obsidian",
    name: "Royal Obsidian",
    colorCode: "#312e81",
    price: "$155.00",
    originalPrice: "$175.00",
    stock: 12,
    bgGradient: "from-zinc-900/60 via-zinc-800/40 to-zinc-950"
  },
  {
    id: "v-brass",
    name: "Sapphire Gold",
    colorCode: "#eab308",
    price: "$165.00",
    originalPrice: "$185.00",
    stock: 0, // out of stock demo
    bgGradient: "from-emerald-950/10 via-zinc-800/50 to-zinc-950"
  }
];

export default function PDPSimulator() {
  const [selectedVariant, setSelectedVariant] = useState<Variant>(VARIANTS[0]);
  const [quantity, setQuantity] = useState(1);
  const [isWcagMode, setIsWcagMode] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [screenReaderLogs, setScreenReaderLogs] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<"visual" | "html">("visual");

  const announcementsRef = useRef<HTMLDivElement>(null);

  // Add virtual screen reader announcement
  const announce = (text: string) => {
    setScreenReaderLogs(prev => [
      `[${new Date().toLocaleTimeString()}] ${text}`,
      ...prev.slice(0, 8)
    ]);
  };

  // Trigger announcements on state changes
  useEffect(() => {
    announce(`Selected variant: ${selectedVariant.name}. Price: ${selectedVariant.price}. ${selectedVariant.stock > 0 ? `${selectedVariant.stock} items remaining in stock.` : "Out of Stock."}`);
  }, [selectedVariant]);

  const handleQuantityChange = (val: number) => {
    const newQty = Math.max(1, Math.min(10, quantity + val));
    if (newQty !== quantity) {
      setQuantity(newQty);
      announce(`Quantity updated to ${newQty}.`);
    }
  };

  const handleAddToCart = () => {
    if (selectedVariant.stock === 0) {
      announce("Error: Add to cart is disabled because this variant is currently out of stock.");
      return;
    }
    setIsAddedToCart(true);
    announce(`Success: Added ${quantity} of ${selectedVariant.name} console to your cart. Cart subtotal updated.`);
    setTimeout(() => {
      setIsAddedToCart(false);
    }, 2500);
  };

  return (
    <div id="pdp-simulator" className="glass-panel rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
      {/* Simulator Control Header */}
      <div className="bg-zinc-900/90 border-b border-zinc-800 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <h3 className="font-display font-semibold text-lg text-white">Shopify Advanced PDP Lab</h3>
          </div>
          <p className="text-xs text-zinc-400 mt-0.5">Interactive Swiper.js & WCAG/ADA compliance prototype</p>
        </div>

        <div className="flex items-center gap-2">
          <button
            id="toggle-wcag-btn"
            onClick={() => {
              setIsWcagMode(!isWcagMode);
              announce(`WCAG Screen Reader HUD ${!isWcagMode ? "Activated" : "Deactivated"}.`);
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium transition-all ${
              isWcagMode 
                ? "bg-emerald-500 text-zinc-950 font-semibold shadow-lg shadow-emerald-500/20 border border-emerald-400" 
                : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700 border border-zinc-700"
            }`}
          >
            <Accessibility className={`h-4 w-4 ${isWcagMode ? "animate-bounce" : ""}`} />
            {isWcagMode ? "WCAG HUD: ON" : "WCAG Assist Mode"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left Side: Product Gallery Presentation */}
        <div className={`col-span-1 lg:col-span-5 p-6 flex flex-col justify-between transition-all duration-700 bg-gradient-to-b ${selectedVariant.bgGradient}`}>
          <div className="relative aspect-square rounded-xl overflow-hidden bg-black/40 border border-white/5 flex items-center justify-center p-8 group">
            {/* Ambient Backlight */}
            <div 
              className="absolute inset-0 opacity-30 blur-2xl transition-all duration-700 scale-90"
              style={{ background: `radial-gradient(circle, ${selectedVariant.colorCode} 0%, transparent 70%)` }}
            />

            {/* Simulated 3D Modular Furniture Console */}
            <div className="relative w-48 h-48 flex flex-col justify-between p-4 bg-zinc-900/90 border border-white/10 rounded-2xl shadow-2xl transition-all duration-500 group-hover:scale-105">
              <div className="flex justify-between items-center">
                <div className="flex gap-1">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: selectedVariant.colorCode }} />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-800 border border-white/10" />
                </div>
                <span className="text-[9px] font-mono tracking-widest text-slate-500 uppercase">USM SPEC</span>
              </div>
              
              {/* Product Shape Mesh */}
              <div className="my-auto py-2 flex justify-center">
                <svg className="w-32 h-20 text-slate-400" viewBox="0 0 100 60" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="5" y="10" width="90" height="40" rx="3" className="transition-all duration-500" style={{ stroke: selectedVariant.colorCode }} />
                  <line x1="35" y1="10" x2="35" y2="50" className="opacity-40" />
                  <line x1="65" y1="10" x2="65" y2="50" className="opacity-40" />
                  <circle cx="20" cy="30" r="4" style={{ fill: selectedVariant.colorCode }} className="opacity-80" />
                  <circle cx="50" cy="30" r="4" style={{ fill: selectedVariant.colorCode }} className="opacity-80" />
                  <circle cx="80" cy="30" r="4" style={{ fill: selectedVariant.colorCode }} className="opacity-80" />
                </svg>
              </div>

              <div className="flex justify-between items-end">
                <span className="text-[10px] font-mono text-slate-400">CHASSIS V.2</span>
                <span className="text-[10px] font-mono text-emerald-400">{selectedVariant.price}</span>
              </div>
            </div>

            {/* Accessibility Code Overlay */}
            <AnimatePresence>
              {isWcagMode && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="absolute inset-x-3 bottom-3 p-3 bg-emerald-950/95 border border-emerald-500/30 rounded-lg text-[10px] font-mono text-emerald-200 shadow-xl"
                >
                  <div className="flex items-center justify-between mb-1 text-emerald-400 font-semibold border-b border-emerald-500/20 pb-1">
                    <span>ACCESSIBILITY SPECS (ARIA-LIVE)</span>
                    <Accessibility className="h-3 w-3" />
                  </div>
                  <div>role=&quot;img&quot;</div>
                  <div>aria-label=&quot;{selectedVariant.name} modular console rendering, showing sleek chrome frameworks and {selectedVariant.name} side paneling.&quot;</div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Out of Stock Label */}
            {selectedVariant.stock === 0 && (
              <div className="absolute top-3 right-3 bg-red-500/90 text-white text-[10px] font-mono px-2 py-1 rounded-md tracking-wider font-semibold shadow">
                OUT OF STOCK
              </div>
            )}
          </div>

          {/* Simulated Swiper Thumbnails */}
          <div className="mt-4 grid grid-cols-3 gap-2">
            {VARIANTS.map((v) => (
              <button
                key={v.id}
                onClick={() => setSelectedVariant(v)}
                className={`p-2 rounded-lg bg-black/30 border text-left transition-all ${
                  selectedVariant.id === v.id 
                    ? "border-white/40 ring-1 ring-white/20" 
                    : "border-white/5 opacity-55 hover:opacity-100"
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: v.colorCode }} />
                  <span className="text-[10px] font-medium text-zinc-300 truncate">{v.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Interactive Buy Box & Specs */}
        <div className="col-span-1 lg:col-span-7 p-6 bg-zinc-950/90 border-l border-zinc-800 flex flex-col justify-between">
          
          {/* Main PDP Form Details */}
          <div>
            <div className="flex justify-between items-start gap-4">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase font-semibold">SWISS MODULAR SYSTEM</span>
                <h4 className="font-display font-medium text-2xl text-white mt-1">Oribe Modu-Luxe Cabinets</h4>
              </div>
              <div className="text-right">
                <div className="text-xl font-mono text-emerald-400 font-semibold">{selectedVariant.price}</div>
                <div className="text-xs font-mono text-slate-500 line-through mt-0.5">{selectedVariant.originalPrice}</div>
              </div>
            </div>

            <p className="text-xs text-slate-400 mt-3 leading-relaxed">
              Bespoke architectural configurations. Handcrafted Swiss steel framework fitted with high-gloss {selectedVariant.name} acoustic paneling and double-magnetic smart locks. Designed for audiophile setups and premium aesthetics.
            </p>

            {/* Custom Variant Selector Remediation */}
            <div className="mt-6">
              <div className="flex justify-between items-center">
                <span className="text-xs font-medium text-slate-300">
                  Select Accent Color: <span className="text-white font-semibold">{selectedVariant.name}</span>
                </span>
                {isWcagMode && (
                  <span className="text-[10px] font-mono text-emerald-400 font-semibold flex items-center gap-1">
                    <Accessibility className="h-3 w-3" /> role=&quot;radiogroup&quot;
                  </span>
                )}
              </div>

              {/* Remediated Radio Selector */}
              <div 
                className="mt-3 flex flex-wrap gap-2.5"
                role="radiogroup"
                aria-label="Accent metal and panel coloring"
              >
                {VARIANTS.map((v) => {
                  const isSelected = selectedVariant.id === v.id;
                  return (
                    <div key={v.id} className="relative">
                      <button
                        role="radio"
                        aria-checked={isSelected}
                        aria-label={`Accent color ${v.name}`}
                        onClick={() => setSelectedVariant(v)}
                        className="group relative flex items-center gap-2 px-3.5 py-2 rounded-xl transition-all border bg-zinc-900/40 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700"
                      >
                        <span className="w-3.5 h-3.5 rounded-full flex items-center justify-center border border-black/20" style={{ backgroundColor: v.colorCode }}>
                          {isSelected && <Check className="h-2 w-2 text-slate-900 stroke-[3]" />}
                        </span>
                        <span className="text-xs font-medium">{v.name}</span>
                      </button>

                      {/* WCAG Marker Overlay */}
                      <AnimatePresence>
                        {isWcagMode && (
                          <motion.div 
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="absolute -top-6 left-0 right-0 mx-auto text-center z-10 pointer-events-none"
                          >
                            <span className="bg-emerald-900 border border-emerald-500/30 text-[9px] text-emerald-100 font-mono px-1.5 py-0.5 rounded shadow">
                              aria-checked=&quot;{isSelected ? "true" : "false"}&quot;
                            </span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quantity and Purchase Box */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-12 gap-4">
              
              {/* Accessible Quantity Selector */}
              <div className="sm:col-span-5 relative">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-medium text-zinc-400">Quantity</span>
                  {isWcagMode && (
                    <span className="text-[9px] font-mono text-emerald-400">aria-label=&quot;Decrease/Increase qty&quot;</span>
                  )}
                </div>

                <div className="flex items-center bg-zinc-900/80 border border-zinc-800 rounded-xl overflow-hidden p-1">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    disabled={selectedVariant.stock === 0}
                    aria-label={`Decrease quantity of ${selectedVariant.name} console`}
                    className="p-2 text-zinc-400 hover:text-white disabled:opacity-30 hover:bg-zinc-800/50 rounded-lg transition-colors"
                  >
                    <Minus className="h-3.5 w-3.5" />
                  </button>
                  
                  <span 
                    aria-live="polite" 
                    className="flex-1 text-center font-mono text-sm text-white font-bold"
                  >
                    {quantity}
                  </span>

                  <button
                    onClick={() => handleQuantityChange(1)}
                    disabled={selectedVariant.stock === 0}
                    aria-label={`Increase quantity of ${selectedVariant.name} console`}
                    className="p-2 text-zinc-400 hover:text-white disabled:opacity-30 hover:bg-zinc-800/50 rounded-lg transition-colors"
                  >
                    <Plus className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              {/* Primary Add To Cart Button */}
              <div className="sm:col-span-7 flex flex-col justify-end relative">
                <button
                  onClick={handleAddToCart}
                  disabled={selectedVariant.stock === 0}
                  className={`w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold transition-all shadow-xl ${
                    selectedVariant.stock === 0 
                      ? "bg-zinc-800 text-zinc-500 border border-zinc-700 cursor-not-allowed" 
                      : isAddedToCart 
                        ? "bg-emerald-500 text-zinc-950 font-bold" 
                        : "bg-zinc-100 hover:bg-emerald-400 hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] text-zinc-950 font-bold border border-white/15 active:scale-[0.98]"
                  }`}
                  aria-label={
                    selectedVariant.stock === 0 
                      ? `Out of stock: ${selectedVariant.name} console` 
                      : `Add ${quantity} ${selectedVariant.name} modular consoles to cart`
                  }
                >
                  <ShoppingBag className={`h-4.5 w-4.5 ${isAddedToCart ? "animate-bounce" : ""}`} />
                  {selectedVariant.stock === 0 
                    ? "OUT OF STOCK" 
                    : isAddedToCart 
                      ? "✓ ADDED SECURELY" 
                      : "ADD TO BAG"}
                </button>

                {isWcagMode && (
                  <div className="absolute -bottom-5 left-0 right-0 text-center pointer-events-none">
                    <span className="bg-emerald-900/90 border border-emerald-500/20 text-[8px] text-emerald-300 font-mono px-1.5 py-0.5 rounded shadow">
                      aria-label=&quot;Add {quantity} {selectedVariant.name} modular consoles to cart&quot;
                    </span>
                  </div>
                )}
              </div>

            </div>
          </div>

          {/* Real-Time Logs Console Panel */}
          <div className="mt-8 border border-zinc-800 rounded-xl bg-zinc-900/60 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800 bg-zinc-950/50">
              <div className="flex items-center gap-2 text-xs font-semibold text-zinc-300">
                <Terminal className="h-3.5 w-3.5 text-emerald-400" />
                <span className="font-mono text-[10px] tracking-wide uppercase">Interactive Engineering Logs</span>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => setActiveTab("visual")} 
                  className={`text-[10px] font-mono px-2 py-0.5 rounded transition-all ${activeTab === "visual" ? "bg-zinc-800 text-white" : "text-zinc-500 hover:text-zinc-300"}`}
                >
                  Screen Reader Output
                </button>
                <button 
                  onClick={() => setActiveTab("html")} 
                  className={`text-[10px] font-mono px-2 py-0.5 rounded transition-all ${activeTab === "html" ? "bg-zinc-800 text-white" : "text-zinc-500 hover:text-zinc-300"}`}
                >
                  Inspect Remediated HTML
                </button>
              </div>
            </div>

            <div className="p-4 h-36 overflow-y-auto font-mono text-[11px] leading-relaxed text-zinc-300 scrollbar-thin scrollbar-thumb-zinc-800">
              {activeTab === "visual" ? (
                <div>
                  <div className="flex items-center gap-1.5 text-emerald-400 text-[10px] mb-2 font-semibold">
                    <Volume2 className="h-3.5 w-3.5 animate-pulse" />
                    <span>VIRTUAL SCREEN READER ANNOUNCEMENTS (ARIA-LIVE):</span>
                  </div>
                  {screenReaderLogs.length === 0 ? (
                    <div className="text-zinc-600 italic">No screen reader announcements triggered yet. Interact with variants or quantity controls above.</div>
                  ) : (
                    screenReaderLogs.map((log, idx) => (
                      <div 
                        key={idx} 
                        className={`py-0.5 ${idx === 0 ? "text-emerald-400 font-semibold" : "text-zinc-500 opacity-70"}`}
                      >
                        {log}
                      </div>
                    ))
                  )}
                </div>
              ) : (
                <div className="text-emerald-300 overflow-x-auto whitespace-pre">
{`<!-- Remediated Custom Shopify Variant Buy Box -->
<div role="radiogroup" aria-label="Accent metal and panel coloring">
  <button 
    role="radio" 
    aria-checked="${selectedVariant.id === 'v-jade'}"
    aria-label="Accent color Jade Matte"
    tabindex="0"
  >
    <span class="indicator bg-[#10b981]" aria-hidden="true"></span>
    <span>Jade Matte</span>
  </button>
</div>

<!-- Remediated Form Action Qty & Button -->
<div class="quantity-input">
  <button aria-label="Decrease quantity of ${selectedVariant.name} console">-</button>
  <span aria-live="polite">${quantity}</span>
  <button aria-label="Increase quantity of ${selectedVariant.name} console">+</button>
</div>

<button 
  role="button" 
  aria-label="${selectedVariant.stock === 0 ? `Out of stock: ${selectedVariant.name} console` : `Add ${quantity} ${selectedVariant.name} modular consoles to cart`}"
  ${selectedVariant.stock === 0 ? "disabled" : ""}
>
  ADD TO BAG
</button>`}
                </div>
              )}
            </div>
          </div>

          {/* Educational Note */}
          <div className="mt-4 flex items-start gap-2 text-[10px] text-zinc-500 leading-relaxed">
            <Info className="h-3.5 w-3.5 text-zinc-400 shrink-0 mt-0.5" />
            <span>
              <strong>How did I build this?</strong> Standard Shopify themes construct option buttons from nested tags without keyboard hooks, rendering them unnavigable for visually impaired users. This custom buy-box utilizes raw accessibility patterns, manual focus hooks, and synchronized state feeds with real-time screen reader announcements.
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}
