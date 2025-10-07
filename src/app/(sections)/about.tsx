import React, { Fragment } from "react";

const About = () => {
  return (
    <>
      <div id="about" />
      <div className="px-6 sm:px-12 md:px-[100px] py-[100px] md:py-[200px] space-y-[60px] md:space-y-[75px]">
        
        {/* --- FROM HERBS TO HARMONY --- */}
        <div className="flex justify-center text-heading-color">
          <h2 className="font-marcellus text-center text-3xl sm:text-4xl md:text-6xl leading-0">
            <span className="hover:text-hover-color transition-colors duration-300">
              FROM HERBS
              <br />
              <span className="text-5xl sm:text-6xl md:text-8xl font-imperial_script block mt-2 ">
                to Harmony
              </span>
            </span>
          </h2>
        </div>

        {/* --- Main Description --- */}
        <div className="px-4 sm:px-8 md:px-[100px] text-lg sm:text-2xl md:text-3xl leading-relaxed text-paragraph-color text-center hover:text-hover-color-2 transition-colors duration-300">
          <p>
            &quot;At Roop and Roots by Renu, we believe beauty is not just about
            appearance—it’s about balance, purity, and care. Our herbal recipes
            are rooted in age-old traditions, blending natural ingredients to
            nourish your skin. With every application, you experience the
            harmony of nature restoring your glow, safely and gently.&quot;
          </p>
        </div>

        {/* --- GOOD TO KNOW --- */}
        <div className="flex justify-center text-heading-color">
          <h2 className="font-marcellus text-center text-4xl sm:text-5xl md:text-6xl leading-0">
            <span className="hover:text-hover-color transition-colors duration-300">
              GOOD
              <br />
              <span className="text-6xl sm:text-7xl md:text-8xl font-imperial_script block mt-2 ">
                to know
              </span>
            </span>
          </h2>
        </div>

        {/* --- Information Blocks --- */}
        <div className="space-y-[30px] sm:space-y-[40px] md:space-y-[50px]">
          {[
            {
              heading: "Selection",
              paragraph:
                "🍃 Carefully chosen natural ingredients like Almond, Chandan, Turmeric — and many more trusted herbs.",
            },
            {
              heading: "Traceability",
              paragraph:
                "🔬 Lab-tested for quality, ensuring every batch is safe and effective for your skin.",
            },
            {
              heading: "Freshness & Quality",
              paragraph:
                "🌸 Small-batch production to keep ingredients fresh, potent, and chemical-free.",
            },
            {
              heading: "Carefully Crafted",
              paragraph:
                "✋ Made with love and tradition, blending herbal wisdom with modern safety standards.",
            },
          ].map((item, index) => (
            <Fragment key={index}>
              {index > 0 && (
                <div className="relative flex justify-center items-center">
                  <div className="w-full h-[1px] bg-paragraph-color" />
                  <div className="w-[10px] h-[10px] bg-paragraph-color absolute rounded-full" />
                </div>
              )}
              <div className="space-y-2 sm:space-y-3">
                <h2 className="font-extrabold font-marcellus text-center text-lg sm:text-2xl md:text-3xl text-heading-color leading-tight">
                  {item.heading}
                </h2>
                <p className="text-center text-base sm:text-lg md:text-xl text-paragraph-color leading-relaxed">
                  {item.paragraph}
                </p>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;


// import React, { Fragment } from "react";

// const About = () => {
//   return (
//     <>
//     <div id="about"/>
//       <div className="p-[100px] py-[200px] space-y-[75px] ">
//         <div className="flex justify-center text-heading-color">
//           <h2 className="font-marcellus text-center text-3xl md:text-6xl md:leading-0 leading-[10px]">
//             <span className="hover:text-hover-color">
//               FROM HERBS
//               <br />{" "}
//               <span className="text-5xl md:text-8xl font-imperial_script">to Harmony </span>
//             </span>
//           </h2>
//         </div>
//         <div className="p-[100px] text-4xl leading-[50px] text-paragraph-color text-center hover:text-hover-color-2">
//           <p>
//             "At Roop and Roots by Renu, we believe beauty is not just about
//             appearance—it’s about balance, purity, and care. Our herbal recipes
//             are rooted in age-old traditions, blending natural ingredients to
//             nourish your skin. With every application, you experience the
//             harmony of nature restoring your glow, safely and gently."
//           </p>
//         </div>
//         <div className="flex justify-center text-heading-color ">
//           <h2 className="font-marcellus text-center text-6xl leading-0">
//             <span className="hover:text-hover-color">
//               GOOD
//               <br />
//               <span className="text-8xl font-imperial_script">to know </span>
//             </span>
//           </h2>
//         </div>
//         <div className="space-y-[30px]">
//           {[
//             {
//               heading: "Selection",
//               paragraph:
//                 "🍃 Carefully chosen natural ingredients like Almond, Chandan, Turmeric — and many more trusted herbs.",
//             },
//             {
//               heading: "Traceability",
//               paragraph:
//                 "🔬 Lab-tested for quality, ensuring every batch is safe and effective for your skin.",
//             },
//             {
//               heading: "Freshness & Quality",
//               paragraph:
//                 "🌸 Small-batch production to keep ingredients fresh, potent, and chemical-free.",
//             },
//             {
//               heading: "Carefully Crafted",
//               paragraph:
//                 "✋ Made with love and tradition, blending herbal wisdom with modern safety standards.",
//             },
//           ].map((item, index) => (
//             <Fragment key={index}>
//               {index > 0 ? (
//                 <div className="relative">
//                   <div className="w-full h-[1px] bg-paragraph-color" />
//                   <div className="max-w-[10px] w-full min-h-[10px] bg-paragraph-color absolute left-1/2 -translate-1/2 rounded-full" />
//                 </div>
//               ) : (
//                 ""
//               )}
//               <div className="space-y-0.5">
//                 <h2 className="font-extrabold font-marcellus text-center">
//                   {item.heading}
//                 </h2>
//                 <p className=" text-center">{item.paragraph}</p>
//               </div>
//             </Fragment>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default About;
