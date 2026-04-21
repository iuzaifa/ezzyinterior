import { FaBolt, FaPalette, FaPuzzlePiece } from "react-icons/fa";

export default function AboutSection() {
  return (
    <>
      <section className="py-20 bg-[#fdd4a64d]">
        <h1 className="text-3xl font-semibold text-center mx-auto text-[#283618]">
          About our apps
        </h1>

        <p className="text-sm text-[#1a1423] text-center mt-2 max-w-md mx-auto">
          A visual collection of our most recent works - each piece crafted with
          intention, emotion and style.
        </p>

        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-0 py-10 relative">
          {/* glow background */}
          <div className="size-[520px] rounded-full absolute blur-[300px] -z-10 bg-[#FEFAE0]/30" />

          {/* image */}
          <img
            className="max-w-sm w-full rounded-xl h-auto"
            src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=830&h=844&auto=format&fit=crop"
            alt=""
          />

          {/* content */}
          <div>
            <h1 className="text-3xl font-semibold text-[#283618]">
              Our Latest Features
            </h1>

            <p className="text-sm text-[#1a1423] mt-2">
              Ship Beautiful Frontends Without the Overhead — Customizable,
              Scalable and Developer-Friendly UI Components.
            </p>

            {/* Features */}
            <div className="flex flex-col gap-10 mt-6">
              {/* Feature 1 */}
              <div className="flex items-start gap-4">
                <div className="text-[#DDA15E] text-xl mt-1">
                  <FaBolt />
                </div>
                <div>
                  <h3 className="text-base font-medium text-[#283618]">
                    Lightning-Fast Performance
                  </h3>
                  <p className="text-sm text-[#1a1423]">
                    Built with speed — minimal load times and optimized.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4">
                <div className="text-[#DDA15E] text-xl mt-1">
                  <FaPalette />
                </div>
                <div>
                  <h3 className="text-base font-medium text-[#283618]">
                    Beautifully Designed Components
                  </h3>
                  <p className="text-sm text-[#1a1423]">
                    Modern, pixel-perfect UI components ready for any project.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-4">
                <div className="text-[#DDA15E] text-xl mt-1">
                  <FaPuzzlePiece />
                </div>
                <div>
                  <h3 className="text-base font-medium text-[#283618]">
                    Plug-and-Play Integration
                  </h3>
                  <p className="text-sm text-[#1a1423]">
                    Simple setup with support for React, Next.js and Tailwind
                    CSS.
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
