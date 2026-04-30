import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div
      className="min-h-screen bg-background text-white font-inter selection:bg-primary selection:text-black antialiased"
    >
      {/* Navbar */}
      <nav className="w-full bg-[#000000] border-b border-[#3D2F1B] sticky top-0 z-50">
        <div className="flex justify-between items-center px-2 md:px-8 py-4 max-w-[1440px] mx-auto w-full">
          <h1 className="text-xl md:text-2xl uppercase">
            THE OPEN DOOR
          </h1>
          <button className="bg-[#DEA84B] text-black px-6 md:px-8 py-2 md:py-3 rounded-full text-xs md:text-sm font-bold tracking-wide hover:bg-[#BF9353] transition-colors shadow-lg">
            Order Now
          </button>
        </div>
      </nav>

      {/* Hero Card - Matching Starting Page Scale */}
      <section className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] py-6 px-4 md:px-8">
        <div className="max-w-[1300px] w-full m-8">
          <div
            className="relative rounded-2xl border-1 border-[#372B1A] overflow-hidden px-6 py-10 md:px-12 md:py-8 flex flex-col lg:flex-row items-center gap-8 lg:gap-24 shadow-2xl"
          >
            {/* The signature golden glow on the right side */}
            <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-[#DEA84B] to-transparent pointer-events-none blur-[100px]"></div>

            {/* Left Side Content - Responsive Alignment */}
            <div className="flex-[1.6] space-y-6 text-left z-10 flex flex-col">
              <div className="w-full">
                <h1
                  className="font-bebas-neue leading-none uppercase whitespace-nowrap"
                  style={{ fontSize: "clamp(2.25rem, 6vw, 9.375rem)" }}
                >
                  THE OPEN DOOR
                </h1>
                <h2
                  className="font-semibold text-[#F8F6EE] tracking-tight leading-tight whitespace-wrap"
                  style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)" }}
                >
                  A Journaling Journey for Early Recovery
                </h2>
              </div>

              <div className="space-y-6 md:space-y-8 pt-2 md:pt-4 flex flex-col w-full">
                <p
                  className="text-[#F8F6EE] leading-[1.5] tracking-[0.04em] md:tracking-[0.06em] font-normal"
                  style={{ fontSize: "clamp(1.025rem, 1.8vw, 1.125rem)" }}
                >
                  A raw and honest recovery journey from addiction, loss, and <br className="hidden md:block" /> self-destruction into healing, purpose, and hope.
                </p>

                {/* Responsive centered button */}
                <div className="flex justify-center lg:justify-center w-full">
                  <button className="bg-[#DEA84B] text-black px-8 md:px-10 py-3 md:py-4 rounded-full font-bold tracking-[0.05em] hover:scale-105 transition-transform shadow-2xl text-sm md:text-base lg:text-lg">
                    Order Now
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side Image - Compact Scale */}
            <div className="flex-none lg:flex-1 relative z-10 w-full lg:w-auto flex justify-center lg:justify-end">
              <div className="relative w-[250px]  shrink-0">
                <Image
                  src="/assets/book-image.png"
                  alt="The Open Door Book Cover"
                  width={260}
                  height={420}
                  unoptimized
                  className="rounded-sm drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
