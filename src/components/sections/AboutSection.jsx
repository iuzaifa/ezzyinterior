// import { FaBolt, FaPalette, FaPuzzlePiece } from "react-icons/fa";

// export default function AboutSection() {
//   return (
//     <>
//       <section className="py-20 bg-[#fdd4a64d] px-4 sm:px-6 lg:px-20">
//         <h1 className="text-2xl sm:text-3xl font-semibold text-center mx-auto text-[#283618] mb-6">
//           About Our Interior Design
//         </h1>

//         <p className="text-sm sm:text-base text-[#1a1423] text-center mt-4 max-w-md mx-auto mb-12">
//           A visual collection of our most recent interior works — crafted with creativity, precision, and elegance.
//         </p>

//         <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 relative">
{
  /* glow background */
}
<div className="hidden md:block w-[280px] h-[280px] lg:size-[520px] rounded-full absolute blur-[200px] lg:blur-[300px] -z-10 bg-[#FEFAE0]/30 top-1/2 -left-40" />;

//           {/* image */}
//           <img
//             className="max-w-sm w-full rounded-xl h-auto shadow-2xl"
//             src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=830&h=844&auto=format&fit=crop"
//             alt="About us"
//           />

//           {/* content */}
//           <div className="text-center md:text-left">
//             <h1 className="text-2xl sm:text-3xl font-semibold text-[#283618] mb-4">
//               Designing Spaces That Inspire
//             </h1>

//             <p className="text-sm  text-[#1a1423] mb-8 leading-relaxed">
//               We specialize in creating modern, functional, and beautiful interiors for homes, offices, and commercial spaces. Our goal is to transform your vision into reality with creativity, quality, and attention to detail.
//             </p>

//             {/* Features */}
//             <div className="flex flex-col gap-6 md:gap-8">
//               {/* Feature 1 */}
//               <div className="flex items-start gap-4">
//                 <div className="text-[#DDA15E] text-xl mt-1 flex-shrink-0">
//                   <FaBolt />
//                 </div>
//                 <div>
//                   <h3 className="text-lg sm:text-xl font-medium text-[#283618]">
//                     Lightning-Fast Performance
//                   </h3>
//                   <p className="text-sm text-[#1a1423]">
//                     Built with speed — minimal load times and optimized.
//                   </p>
//                 </div>
//               </div>

//               {/* Feature 2 */}
//               <div className="flex items-start gap-4">
//                 <div className="text-[#DDA15E] text-xl mt-1 flex-shrink-0">
//                   <FaPalette />
//                 </div>
//                 <div>
//                   <h3 className="text-lg sm:text-xl font-medium text-[#283618]">
//                     Beautifully Designed Components
//                   </h3>
//                   <p className="text-sm text-[#1a1423]">
//                     Modern, pixel-perfect UI components ready for any project.
//                   </p>
//                 </div>
//               </div>

//               {/* Feature 3 */}
//               <div className="flex items-start gap-4">
//                 <div className="text-[#DDA15E] text-xl mt-1 flex-shrink-0">
//                   <FaPuzzlePiece />
//                 </div>
//                 <div>
//                   <h3 className="text-lg sm:text-xl font-medium text-[#283618]">
//                     Plug-and-Play Integration
//                   </h3>
//                   <p className="text-sm text-[#1a1423]">
//                     Simple setup with support for React, Next.js and Tailwind
//                     CSS.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
import { FaBolt, FaPalette, FaPuzzlePiece } from "react-icons/fa";

export default function AboutSection() {
  return (
    <>
      <section className="py-20 bg-[#fdd4a64d] px-4 sm:px-6 lg:px-20">
        <h1 className="text-2xl sm:text-3xl font-semibold text-center mx-auto text-[#283618] mb-6">
          About Our Interior Design
        </h1>

        <p className="text-sm sm:text-base text-[#1a1423] text-center mt-4 max-w-md mx-auto mb-12">
          A visual collection of our most recent interior works — crafted with
          creativity, precision, and elegance.
        </p>

        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 relative">
          {/* glow background */}
          <div className="w-[280px] h-[280px] md:size-[520px] rounded-full absolute blur-[200px] md:blur-[300px] -z-10 bg-[#FEFAE0]/30" />

          {/* image */}
          <img
            className="max-w-sm w-full rounded-xl h-auto shadow-2xl"
            src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=830&h=844&auto=format&fit=crop"
            alt="About us"
          />

          {/* content */}
          <div className="text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl font-semibold text-[#283618] mb-4">
              Designing Spaces That Inspire
            </h1>

            <p className="text-sm text-[#1a1423] mb-8 leading-relaxed">
              We specialize in creating modern, functional, and beautiful
              interiors for homes, offices, and commercial spaces. From concept
              to completion, we focus on quality craftsmanship, smart space
              planning, and timeless design that reflects your lifestyle.
            </p>

            {/* Features */}
            <div className="flex flex-col gap-6 md:gap-8">
              {/* Feature 1 */}
              <div className="flex items-start gap-4">
                <div className="text-[#DDA15E] text-xl mt-1 flex-shrink-0">
                  <FaBolt />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-[#283618]">
                    Smart Space Planning
                  </h3>
                  <p className="text-sm text-[#1a1423]">
                    Efficient layouts that maximize space utilization while
                    maintaining comfort and style.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4">
                <div className="text-[#DDA15E] text-xl mt-1 flex-shrink-0">
                  <FaPalette />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-[#283618]">
                    Premium Interior Design
                  </h3>
                  <p className="text-sm text-[#1a1423]">
                    Elegant, modern, and customized designs tailored to your
                    taste and lifestyle.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-4">
                <div className="text-[#DDA15E] text-xl mt-1 flex-shrink-0">
                  <FaPuzzlePiece />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-[#283618]">
                    End-to-End Execution
                  </h3>
                  <p className="text-sm text-[#1a1423]">
                    Complete interior solutions from design to final execution
                    with seamless project management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
