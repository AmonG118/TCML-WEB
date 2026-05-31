import Link from "next/link";

const VIBE_ITEMS = [
  { kanji: "食", title: "Food Culture", desc: "Night markets, tea culture & Taiwanese cuisine" },
  { kanji: "節", title: "Festivals", desc: "Lantern Festival, Dragon Boat & more" },
  { kanji: "藝", title: "Arts & Craft", desc: "Calligraphy, paper cutting, traditional arts" },
  { kanji: "遊", title: "Study in Taiwan", desc: "Scholarship & immersion programs" },
];

export default function TaiwanVibe() {
  return (
    <section
      className="relative z-[1] overflow-hidden"
      style={{ backgroundColor: "var(--teal)" }}
      aria-labelledby="vibe-heading"
    >

      <div
        className="grid grid-cols-1 md:grid-cols-2 px-5 py-10 md:[padding:64px_48px] gap-8 md:gap-16"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Left: Copy */}
        <div>
          <p
            style={{
              fontSize: "10px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "2px",
              color: "rgba(255,255,255,0.5)",
              marginBottom: "8px",
              fontFamily: "var(--font-ui)",
            }}
          >
            文化體驗
          </p>
          <h2
            id="vibe-heading"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
              fontWeight: 700,
              letterSpacing: "-1px",
              color: "white",
              lineHeight: 1.1,
              marginBottom: "16px",
            }}
          >
            Taiwan Vibe
          </h2>
          <p
            style={{
              fontSize: "15px",
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.75,
              marginBottom: "28px",
              fontFamily: "var(--font-ui)",
            }}
          >
            Discover Taiwan's vibrant culture through food, festivals, arts, and everyday life.
            TCML is more than language — it's a gateway to Taiwan.
          </p>
          <Link
            href="/taiwan-vibe"
            className="inline-flex items-center gap-2 font-semibold text-white transition-all duration-200 hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
            style={{
              backgroundColor: "white",
              color: "var(--teal)",
              fontFamily: "var(--font-ui)",
              fontSize: "14px",
              padding: "12px 22px",
              borderRadius: "6px",
              boxShadow: "0 2px 0 rgba(0,0,0,0.1)",
              textDecoration: "none",
            }}
          >
            Explore Taiwan Vibe →
          </Link>
        </div>

        {/* Right: Feature grid 2x2 */}
        <div className="grid grid-cols-2 gap-3">
          {VIBE_ITEMS.map((item) => (
            <div
              key={item.kanji}
              className="transition-colors duration-150 cursor-pointer hover:bg-white/12"
              style={{
                backgroundColor: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "10px",
                padding: "20px",
              }}
            >
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: 900,
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1,
                  marginBottom: "10px",
                  fontFamily: "var(--font-display)",
                }}
              >
                {item.kanji}
              </div>
              <p
                style={{
                  fontFamily: "var(--font-ui)",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "white",
                  marginBottom: "4px",
                }}
              >
                {item.title}
              </p>
              <p
                style={{
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.5,
                  fontFamily: "var(--font-ui)",
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
