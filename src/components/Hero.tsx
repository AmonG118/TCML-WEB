import Link from "next/link";
import SearchCard from "@/components/SearchCard";

const STATS = [
  { value: "60+",  label: "Centers",      color: "orange" },
  { value: "8",    label: "Countries",    color: "teal"   },
  { value: "4",    label: "Languages",    color: "orange" },
  { value: "2021", label: "Founded",      color: "teal"  },
] as const;

export default function Hero() {
  return (
    <section
      className="relative z-[1] overflow-hidden border-b"
      style={{ borderColor: "var(--rule)" }}
      aria-labelledby="hero-heading"
    >
      {/* ── Eyebrow bar ── */}
      <div
        className="flex items-center border-b overflow-x-auto"
        style={{
          padding: "0 48px",
          height: "40px",
          borderColor: "var(--rule)",
          fontFamily: "var(--font-ui)",
          fontSize: "11px",
          fontWeight: 600,
          letterSpacing: "1px",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
          gap: 0,
        }}
        aria-label="Program overview"
      >
        <span
          className="pr-5 mr-5 border-r shrink-0"
          style={{ borderColor: "var(--rule)", color: "var(--ink-light)" }}
        >
          Official Program · OCAC Taiwan{" "}
          <svg
            aria-hidden="true"
            role="presentation"
            viewBox="0 0 30 20"
            width="18"
            height="12"
            style={{ display: "inline-block", verticalAlign: "middle", borderRadius: "2px", flexShrink: 0 }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="30" height="20" fill="#FE0000" />
            <rect width="15" height="10" fill="#000095" />
            <circle cx="7.5" cy="5" r="2.8" fill="white" />
            <circle cx="7.5" cy="5" r="1.2" fill="#FE0000" />
          </svg>
        </span>
        <span
          className="pr-5 mr-5 border-r shrink-0"
          style={{ borderColor: "var(--rule)", color: "var(--teal)" }}
        >
          ● Enrolling Now — Summer 2026
        </span>
        <span className="shrink-0" style={{ color: "var(--ink-light)" }}>
          60+ Centers Worldwide
        </span>
      </div>

      {/* ── Hero main：1fr + 420px desktop, single col mobile ── */}
      <div className="hero-grid grid min-h-[540px]">
        {/* ── Left copy ── */}
        <div
          className="hero-copy-pad relative flex flex-col justify-between overflow-hidden [border-bottom:1px_solid_var(--rule)] md:[border-bottom:none] md:[border-right:1px_solid_var(--rule)]"
        >
          {/* 裝飾性「學」字（純氛圍，aria-hidden）*/}
          <span
            aria-hidden="true"
            role="presentation"
            style={{
              position: "absolute",
              right: "-20px",
              bottom: "-40px",
              fontSize: "320px",
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              color: "rgba(245,146,30,0.05)",
              lineHeight: 1,
              pointerEvents: "none",
              userSelect: "none",
            }}
          >
            學
          </span>

          <div>
            {/* Kicker */}
            <div
              className="flex items-center mb-5"
              style={{
                gap: "10px",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "var(--ink-light)",
                fontFamily: "var(--font-ui)",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  display: "inline-block",
                  width: "24px",
                  height: "1.5px",
                  background: "var(--orange)",
                  flexShrink: 0,
                }}
              />
              Taiwan Center for Mandarin Learning
            </div>

            {/* H1 */}
            <h1
              id="hero-heading"
              className="mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(3rem, 5.5vw, 5rem)",
                fontWeight: 700,
                lineHeight: 1.0,
                letterSpacing: "-2px",
                color: "var(--ink)",
              }}
            >
              Learn{" "}
              <mark
                style={{
                  display: "inline",
                  background: "#F7E98E",
                  color: "var(--ink)",
                  padding: "2px 8px",
                  borderRadius: "3px",
                }}
              >
                Mandarin
              </mark>
              ,
              <br />
              <em
                style={{
                  fontStyle: "italic",
                  fontWeight: 300,
                  color: "var(--ink-mid)",
                }}
              >
                Explore Taiwan.
              </em>
            </h1>

            {/* Description */}
            <p
              className="mb-9"
              style={{
                fontSize: "15px",
                color: "var(--ink-mid)",
                lineHeight: 1.75,
                maxWidth: "400px",
                fontFamily: "var(--font-ui)",
              }}
            >
              Join TCML — a global network of Mandarin learning centers backed
              by OCAC Taiwan. Authentic courses, real cultural exchange, for
              adults 18+.
            </p>

            {/* CTA buttons */}
            <div className="hero-cta-wrap flex gap-3">
              {/* Primary: Find a Center */}
              <Link
                href="/centers"
                className="inline-flex items-center justify-center gap-2 font-semibold text-white transition-all duration-200 hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--orange)] focus-visible:ring-offset-2"
                style={{
                  backgroundColor: "var(--orange)",
                  fontFamily: "var(--font-ui)",
                  fontSize: "14px",
                  padding: "12px 22px",
                  borderRadius: "6px",
                  boxShadow:
                    "0 2px 0 var(--orange-dark), 0 4px 12px rgba(245,146,30,0.2)",
                  minHeight: "44px",
                }}
              >
                Find a Center
              </Link>

              {/* Teal: Enroll Now */}
              <Link
                href="/enroll"
                className="inline-flex items-center justify-center gap-2 font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:bg-[var(--teal-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--teal)] focus-visible:ring-offset-2"
                style={{
                  backgroundColor: "var(--teal)",
                  fontFamily: "var(--font-ui)",
                  fontSize: "14px",
                  padding: "12px 22px",
                  borderRadius: "6px",
                  boxShadow:
                    "0 2px 0 var(--teal-dark), 0 4px 12px rgba(13,148,136,0.2)",
                  minHeight: "44px",
                }}
              >
                Enroll Now
              </Link>

              {/* Outline: Learn More */}
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 transition-all duration-200 hover:border-[var(--teal)] hover:text-[var(--teal)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--teal)] focus-visible:ring-offset-2"
                style={{
                  backgroundColor: "transparent",
                  color: "var(--ink)",
                  fontFamily: "var(--font-ui)",
                  fontSize: "14px",
                  fontWeight: 500,
                  padding: "12px 18px",
                  borderRadius: "6px",
                  border: "1px solid var(--rule)",
                  minHeight: "44px",
                }}
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div
            className="flex"
            style={{
              borderTop: "1px solid var(--rule)",
              marginTop: "40px",
              paddingTop: "24px",
              gap: 0,
            }}
            aria-label="TCML at a glance"
          >
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className="flex-1"
                style={{
                  paddingRight: i < STATS.length - 1 ? "24px" : 0,
                  marginRight: i < STATS.length - 1 ? "24px" : 0,
                  borderRight:
                    i < STATS.length - 1
                      ? "1px dashed var(--rule)"
                      : "none",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2.2rem",
                    fontWeight: 900,
                    lineHeight: 1,
                    letterSpacing: "-1px",
                    color:
                      stat.color === "orange"
                        ? "var(--orange)"
                        : "var(--teal)",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-ui)",
                    fontSize: "10px",
                    fontWeight: 600,
                    color: "var(--ink-light)",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    marginTop: "4px",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right：photo area + search card ── */}
        <div
          className="flex flex-col"
          style={{ backgroundColor: "var(--paper-dark)" }}
        >
          {/* Photo area（漸層佔位圖 + 台灣裝飾）*/}
          <div
            className="relative overflow-hidden"
            style={{ flex: 1, minHeight: "300px" }}
            aria-hidden="true"
          >
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                background: "linear-gradient(160deg, #C8BFB0 0%, #A89880 100%)",
                fontSize: "56px",
                color: "rgba(255,255,255,0.25)",
              }}
            >
              {/* 📸 placeholder */}
              <span role="presentation" aria-hidden="true">
                📸
              </span>

              {/* 台灣 裝飾字（photo 右下）*/}
              <span
                aria-hidden="true"
                role="presentation"
                style={{
                  position: "absolute",
                  bottom: "16px",
                  right: "12px",
                  fontFamily: "var(--font-display)",
                  fontSize: "88px",
                  fontWeight: 900,
                  color: "rgba(255,255,255,0.13)",
                  lineHeight: 1,
                  letterSpacing: "-2px",
                  pointerEvents: "none",
                  userSelect: "none",
                }}
              >
                台灣
              </span>
            </div>

            {/* Photo caption */}
            <p
              className="absolute"
              style={{
                bottom: "12px",
                left: "16px",
                fontFamily: "var(--font-ui)",
                fontSize: "11px",
                fontStyle: "italic",
                color: "rgba(26,24,20,0.45)",
              }}
            >
              TCML students — Paris, France, 2026
            </p>
          </div>

          {/* Search area（含 chip 篩選，client component）*/}
          <SearchCard />
        </div>
      </div>
    </section>
  );
}
