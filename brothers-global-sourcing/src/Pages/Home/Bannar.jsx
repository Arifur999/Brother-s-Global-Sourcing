import React from 'react';

const Bannar = () => {
    return (
         <section className="relative bg-gradient-to-b from-[#111111] via-[#1b1b1b] to-[#0f0f0f] overflow-hidden">
      {/* Decorative circles */}
      <div aria-hidden className="absolute -left-20 -top-10 w-44 h-44 rounded-full bg-amber-900 opacity-10 blur-2xl pointer-events-none"></div>
      <div aria-hidden className="absolute right-8 top-56 w-56 h-56 rounded-full bg-amber-900 opacity-6 blur-3xl pointer-events-none"></div>

      <div className="max-w-[1500px] mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* LEFT column - text */}
          <div className="lg:col-span-6">
            <div className="max-w-xl">
              <p className="text-amber-400 text-xs font-semibold tracking-wider mb-3">
                GARMENTS BUYING HOUSE · BANGLADESH
              </p>

              <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                Your trusted partner in <br /> ready-made garments sourcing.
              </h1>

              <p className="text-gray-300 text-base sm:text-lg mb-6">
                Brother's Global Sourcing (BGS) connects global brands, importers, and
                retailers with reliable, compliant factories in Bangladesh — built on <strong>Trust, Transparency, and Committed Delivery.</strong>
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="text-xs px-3 py-2 rounded-full bg-white/6 text-gray-200 border border-white/6">TRUST · TRANSPARENCY · COMMITTED DELIVERY</span>
                <span className="text-xs px-3 py-2 rounded-full bg-white/6 text-gray-200 border border-white/6">WOVEN · KNIT · DENIM · SWEATERS · WORKWEAR</span>
              </div>

              {/* CTA buttons */}
              <div className="flex gap-4 items-center">
                <a
                  href="#products"
                  className="inline-flex items-center gap-3 bg-amber-600 hover:bg-amber-700 text-black font-semibold px-6 py-3 rounded-full shadow-sm"
                >
                  <span>EXPLORE PRODUCTS</span>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 border border-amber-600 text-amber-400 px-5 py-3 rounded-full hover:bg-white/3"
                >
                  WORK WITH US
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT column - info card */}
          <div className="lg:col-span-6">
            <div className="mt-6 lg:mt-0 flex justify-center lg:justify-end">
              <div className="w-full max-w-md lg:max-w-lg bg-gradient-to-b from-[#151515]/90 to-[#0f0f0f]/90 rounded-2xl p-6 md:p-8 border border-white/5 shadow-2xl">
                <div className="mb-4">
                  <span className="inline-flex items-center gap-2 bg-[#0f0f0f] text-gray-200 text-sm px-3 py-1 rounded-full border border-white/5">
                    <svg className="w-4 h-4 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v4" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v4" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h4" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 12h4" />
                    </svg>
                    Based in Dhaka · Serving global buyers
                  </span>
                </div>

                <h3 className="text-white text-lg font-semibold mb-3">
                  End-to-end sourcing support from idea to shipment.
                </h3>

                <p className="text-gray-300 text-sm mb-5">
                  We act as your extended sourcing office in Bangladesh — managing product development,
                  supplier selection, production follow-up, quality assurance, and logistics coordination.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white/3 rounded-lg p-4 border border-white/6">
                    <p className="text-2xs text-gray-400 uppercase tracking-wider mb-1">Product range</p>
                    <p className="text-sm text-gray-200 font-semibold">Woven · Knit · Denim · Sweaters · Workwear</p>
                  </div>

                  <div className="bg-white/3 rounded-lg p-4 border border-white/6">
                    <p className="text-2xs text-gray-400 uppercase tracking-wider mb-1">Factory network</p>
                    <p className="text-sm text-gray-200 font-semibold">Curated, compliance-focused units</p>
                  </div>

                  <div className="bg-white/3 rounded-lg p-4 border border-white/6">
                    <p className="text-2xs text-gray-400 uppercase tracking-wider mb-1">Approach</p>
                    <p className="text-sm text-gray-200 font-semibold">Transparent & structured</p>
                  </div>

                  <div className="bg-white/3 rounded-lg p-4 border border-white/6">
                    <p className="text-2xs text-gray-400 uppercase tracking-wider mb-1">Support</p>
                    <p className="text-sm text-gray-200 font-semibold">From sampling to shipment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> {/* grid */}
      </div>
    </section>
    );
};

export default Bannar;





  
