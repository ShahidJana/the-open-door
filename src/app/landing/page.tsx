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


      {/* About the Book Section - Width matched to Hero Card */}
      <section className="w-full bg-black">
        <div className=" max-w-[1440px] mx-auto px-4 py-6 md:px-8 md:py-10 space-y-6">
          <div className="space-y-6">
            <h3 className="text-[#9A7642] font-bold text-sm md:text-base uppercase tracking-[0.15em]">
              ABOUT THE BOOK
            </h3>
            <h2 className="text-white font-semibold text-2xl md:text-3xl lg:text-4xl tracking-tight">
              Part memoir. Part guided journal. Fully honest.
            </h2>
            <p className="text-[#F8F6EE] text-md md:text-lg w-full text-justify leading-releax tracking-[0.04em]">
              The <span className="font-black">Open Door</span> blends Troy Sandifer's personal story with guided prompts to help readers reflect on their own recovery journey.
              It invites you to process pain, identify patterns, and begin writing a different future.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 pt-4">
            {/* Feature Box 1 - Dark Brown Background */}
            <div className="bg-[#42321E] rounded-2xl p-4 md:p-6 border border-[#9A7642]/10 flex flex-col justify-center">
              <h4 className="text-white text-xl md:text-2xl font-semibold mb-4">
                Stuck in darkness?
              </h4>
              <p className="text-[#CAC1B4] text-md md:text-lg text-justify leading-relaxed">
                When addiction, loss, and shame cloud your future, even one honest step can feel impossible.
              </p>
            </div>

            {/* Feature Box 2 - Gold Bordered */}
            <div className="border-2 border-[#9A7642]/30 bg-[#262626]/20 rounded-2xl p-4 md:p-6 flex flex-col justify-center">
              <h4 className="text-white text-xl md:text-2xl font-semibold mb-4">
                There is a door waiting for you.
              </h4>
              <p className="text-[#CAC1B4] text-md md:text-lg text-justify leading-relaxed">
                This book helps you confront your truth, reflect deeply, and move toward recovery with courage and purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Secure Order Section */}
      <section className=" max-w-[1440px] mx-auto px-4 py-4 md:px-8 md:py-8 space-y-6">
        <div className="bg-[#17110C] rounded-2xl border-1 border-[#3D2F1B] overflow-hidden px-8 py-4 md:px-12 md:py-8 flex flex-col lg:flex-row items-center gap-12 relative">
          <div className="flex-none w-[140px] md:w-[180px] z-10 relative mx-auto lg:mx-0 flex justify-center items-center">

            {/* Large Background Book Cover anchored behind the book */}
            <div
              className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-[55%] w-[680px] md:w-[1000px] h-[440px] md:h-[720px] pointer-events-none -z-10 select-none"
              style={{
                WebkitMaskImage: 'radial-gradient(ellipse closest-side at center, black 10%, transparent 100%)',
                maskImage: 'radial-gradient(ellipse closest-side at center, black 10%, transparent 100%)'
              }}
            >
              <Image
                src="/assets/book-cover.png"
                alt="Background Cover"
                fill
                unoptimized
                className="object-cover opacity-80 mix-blend-screen blur-[0.5px]"
              />
            </div>

            <Image
              src="/assets/book-image.png"
              alt="The Open Door Book Cover"
              width={160}
              height={240}
              unoptimized
              className="w-full h-auto drop-shadow-[0_20px_50px_rgba(222,168,75,0.2)] rounded-sm"
            />
          </div>

          <div className="flex-1 space-y-6 z-10">
            <div className="space-y-4">
              <h3 className="text-[#9A7642] font-bold text-xs uppercase tracking-[0.3em]">
                ORDER NOW
              </h3>
              <h2 className="text-white font-semibold text-3xl md:text-4xl lg:text-5xl tracking-tight">
                Continue to the secure order page
              </h2>
              <p className="text-[#CAC1B4] text-md md:text-lg">
                Click below to continue to the official order experience.
              </p>
            </div>

            <button className="bg-gradient-to-r from-[#FCC067] to-[#DB9940] text-black px-6 py-3 rounded-full font-bold tracking-wide hover:scale-105 transition-transform shadow-xl">
              Order Now
            </button>
          </div>
        </div>
      </section>

      {/* About Troy Sandifer Section */}
      <section className=" max-w-[1440px] mx-auto px-4 py-6 md:px-8 md:py-8 space-y-6">
        <div className="space-y-6 text-left">
          <h3 className="text-[#9A7642] font-bold text-sm md:text-base uppercase tracking-[0.15em]">
            ABOUT TROY SANDIFER
          </h3>
          <h2 className="text-white font-semibold text-2xl md:text-3xl lg:text-4xl tracking-tighter">
            A life reclaimed, now helping others rebuild theirs
          </h2>
          <p className="text-[#CAC1B4] text-md md:text-lg text-justify leading-relaxed max-w-6xl">
            Troy Sandifer is the founder and CEO of Hustle Recovery, Inc., a Tennessee-based nonprofit supporting people through recovery housing, treatment, employment, and community connection. His personal journey from incarceration and addiction into leadership, service, and purpose is the heartbeat behind this book.
          </p>
        </div>
      </section>
    </div>
  );
}
