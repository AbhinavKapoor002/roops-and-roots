import Image from 'next/image'
import React from 'react'

const Product = () => {
  return (
    <div id='shop' 
      className="flex flex-col md:flex-row items-center justify-center py-16 px-6 gap-10 font-marcellus"
      style={{
        backgroundImage: "url(/images/home/hero-bg-image.jpg)",
      }}
                >
  {/* Product Image */}
  <div className="flex justify-center md:w-1/2">
    <Image
    src="/images/product/transparent product image.png"
    alt="Herbal Face Pack"
    width={500}
    height={500}
    className="w-[80%] md:w-[70%] rounded-3xl   transform transition-transform duration-500 hover:scale-105 animate-float"
  />
  </div>

  {/* Product Info */}
  <div className="md:w-1/2 flex flex-col items-center text-center space-y-8">
    <h2 className="text-4xl md:text-5xl font-bold text-hover-color-2 tracking-wide hover:text-hover-color-2">
      🌿 Herbal Face Pack
    </h2>

    <p className="text-lg text-[#4B3A24] max-w-xl leading-relaxed">
      Crafted with time-honored Ayurvedic herbs like <strong className='text-[#A97142]'>Almond</strong>, 
      <strong className='text-[#D1A36F]'> Chandan</strong>, and <strong className='text-[#D97706]'>Turmeric</strong> — this pure, 
      chemical-free blend deeply cleanses, brightens, and restores your skin’s natural glow.
    </p>

    {/* Trust Strip */}
    <div className="flex flex-wrap justify-center gap-3 text-[#4B3A24] font-medium text-sm">
      <span className="bg-[#F3E5AB] px-4 py-2 rounded-full shadow-sm border border-[#e4d09b]">
        🔬 Lab-Tested
      </span>
      <span className="bg-[#F3E5AB] px-4 py-2 rounded-full shadow-sm border border-[#e4d09b]">
        🍃 100% Natural
      </span>
      <span className="bg-[#F3E5AB] px-4 py-2 rounded-full shadow-sm border border-[#e4d09b]">
        🚫 Chemical-Free
      </span>
    </div>

    {/* Pack Options */}
    <div className="grid md:grid-cols-2 gap-6 w-full max-w-3xl mt-4">
      {/* 100g Pack */}
      <div className="bg-[#fffaf2] p-6 rounded-2xl shadow-md border border-[#e4d09b] hover:shadow-lg hover:scale-105 transition-all">
        <h3 className="text-xl font-semibold text-[#5C3B00] mb-2">
          🌿 100 g Pack — ₹ 479 + Delivery
        </h3>
        <p className="text-[#4B3A24] mb-4">
          Ideal for daily skincare. Keeps your skin fresh, clean, and naturally radiant.
        </p>
        <a
          href="https://wa.me/919582131422?text=Hi! I’d like to order the 100g Herbal Face Pack."
          target="_blank"
          className="bg-[#8BC34A] text-white font-semibold px-6 py-2 rounded-full shadow-md hover:bg-[#7CB342] transition"
        >
          💬 Buy
        </a>
      </div>

      {/* 50g Pack */}
      <div className="bg-[#fffaf2] p-6 rounded-2xl shadow-md border border-[#e4d09b] hover:shadow-lg hover:scale-105 transition-all">
        <h3 className="text-xl font-semibold text-[#5C3B00] mb-2">
          ✨ 50 g Pack — ₹ 349 + Delivery
        </h3>
        <p className="text-[#4B3A24] mb-4">
          Perfect for travel and first-time users — easy to carry, easy to glow.
        </p>
        <a
          href="https://wa.me/919582131422?text=Hi! I’d like to order the 50g Herbal Face Pack."
          target="_blank"
          className="bg-[#8BC34A] text-white font-semibold px-6 py-2 rounded-full shadow-md hover:bg-[#7CB342] transition"
        >
          💬 Buy
        </a>
      </div>
    </div>
  </div>
</div>




//     <div 
//       className='flex  '
    
//     >
//       <div className=' flex justify-center bg-amber-100 '>
//         <Image 
//             alt="Backgroundimage"
//             src={"/images/product/transparent product image.png"}
//             className="w-[70%]"
//             width={908}
//             height={935}
//           />

//       </div>
//       <div>
//         <section className="w-full bg-gradient-to-b from-amber-50 to-emerald-50 py-14 flex flex-col items-center text-center space-y-10">
//   {/* <!-- Product Heading --> */}
//   <h2 className="text-4xl md:text-5xl font-bold text-amber-900">
//     🌿 Herbal Glow Face Pack
//   </h2>

//   {/* <!-- Product Description --> */}
//   <p className="text-lg text-amber-800 max-w-2xl px-6">
//     A pure, chemical-free blend of traditional herbs like <strong>Almond</strong>, 
//     <strong>Chandan</strong>, and <strong>Turmeric</strong> — crafted to gently cleanse, brighten, 
//     and reveal your natural glow.
//   </p>

//   {/* <!-- Trust Icons --> */}
//   <div className="flex flex-wrap justify-center gap-4 text-amber-900 font-medium text-sm">
//     <span className="bg-amber-200 px-5 py-2 rounded-full shadow-sm">🔬 Lab-Tested</span>
//     <span className="bg-amber-200 px-5 py-2 rounded-full shadow-sm">🍃 100% Natural</span>
//     <span className="bg-amber-200 px-5 py-2 rounded-full shadow-sm">🧴🚫 Chemical-Free</span>
//   </div>

//   {/* <!-- Product Cards --> */}
//   <div className="grid md:grid-cols-2 gap-10 max-w-5xl w-full px-6 mt-8">
//     {/* <!-- 100g Pack Card --> */}
//     <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center space-y-5 border border-amber-200 hover:scale-105 hover:shadow-xl transition-all duration-300">
//       <img src="your-image-100g.jpg" alt="100g Herbal Face Pack" className="w-40 h-40 object-cover rounded-full shadow-md"/>
//       <h3 className="text-2xl font-semibold text-amber-900">🌿 100 g Pack — ₹ 479 + Delivery</h3>
//       <p className="text-amber-800 text-base">
//         Ideal for regular, daily skincare routines. Keeps your skin fresh, clean, and naturally radiant every day.
//       </p>
//       <a
//         href="https://wa.me/91XXXXXXXXXX?text=Hi! I’d like to order the 100g Herbal Glow Face Pack."
//         target="_blank"
//         className="bg-amber-500 text-white font-semibold px-6 py-2 rounded-full shadow-md hover:bg-amber-600 transition"
//       >
//         💬 Buy on WhatsApp
//       </a>
//     </div>

//     {/* <!-- 50g Pack Card --> */}
//     <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center space-y-5 border border-amber-200 hover:scale-105 hover:shadow-xl transition-all duration-300">
//       <img src="your-image-50g.jpg" alt="50g Herbal Face Pack" className="w-40 h-40 object-cover rounded-full shadow-md"/>
//       <h3 className="text-2xl font-semibold text-amber-900">✨ 50 g Pack — ₹ 349 + Delivery</h3>
//       <p className="text-amber-800 text-base">
//         Perfect for travel and first-time users. Easy to carry, easy to glow — wherever you go.
//       </p>
//       <a
//         href="https://wa.me/91XXXXXXXXXX?text=Hi! I’d like to order the 50g Herbal Glow Face Pack."
//         target="_blank"
//         className="bg-amber-500 text-white font-semibold px-6 py-2 rounded-full shadow-md hover:bg-amber-600 transition"
//       >
//         💬 Buy on WhatsApp
//       </a>
//     </div>
//   </div>
// </section>

        
//       </div>
//     </div>
  )
}

export default Product