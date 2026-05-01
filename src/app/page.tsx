import Link from "next/link";
import { Button } from "@/components/Button";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#000000] overflow-hidden flex flex-col">
      {/* Vertical centre line */}
      <div className="centre-line" />

      {/* Hero */}
      <section
        className="relative z-10 flex flex-1 flex-col items-center justify-center text-center px-6 sm:px-12 animate-in"
        style={{ gap: "clamp(0.75rem, 2vw, 1.5rem)" }}
      >
        {/* Eyebrow label */}
        <p
          className="font-label font-bold uppercase text-primary animate-in"
          style={{
            fontSize: "clamp(9px, 2.2vw, 16px)",
            letterSpacing: "clamp(0.2em, 0.8vw, 0.35em)",
          }}
        >
          THE OPEN DOOR EXPERIENCE
        </p>

        {/* Main heading */}
        <h1
          className="font-display font-bold text-text-main leading-[1.1] tracking-[-0.03em] animate-in-delay"
          style={{ fontSize: "clamp(1.4rem, 8.5vw, 4rem)" }}
        >
          Step out of darkness.
          <br />
          Step into hope.
        </h1>

        {/* CTA Button */}
        <div className="animate-in-delay-2">
          <Link href="/landing">
            <Button
              className="btn-gold font-bold tracking-[0.03em]"
              style={{
                fontSize: "clamp(11px, 2vw, 15px)",
                padding: "clamp(0.5rem, 1.5vw, 1rem) clamp(1.2rem, 4vw, 2.4rem)",
              }}
            >
              Open the Door
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
