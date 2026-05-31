const MISSION_ITEMS = [
  {
    title: "Foster Mandarin Learning Globally",
    desc: "Cultivating supportive and immersive environments for effective Mandarin learning through our certified network of schools.",
    barColor: "orange",
  },
  {
    title: "Promote Cultural Exchange",
    desc: "Creating meaningful connections between Mandarin learners and the vibrant local Taiwanese community around the world.",
    barColor: "teal",
  },
  {
    title: "Encourage Community Participation",
    desc: "Fostering active participation through local events that promote cross-cultural understanding and practical language skills.",
    barColor: "highlight",
  },
];

export default function OurMission() {
  return (
    <section
      className="relative z-[1]"
      style={{ backgroundColor: "var(--charcoal-dark)" }}
      aria-labelledby="mission-heading"
    >
      <div
        className="px-5 py-10 md:[padding:72px_48px]"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        {/* Section header */}
        <div
          className="mb-12 pb-5 border-b"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <p
            style={{
              fontSize: "10px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "2px",
              color: "rgba(255,255,255,0.35)",
              marginBottom: "8px",
              fontFamily: "var(--font-ui)",
            }}
          >
            我們的目標
          </p>
          <h2
            id="mission-heading"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
              fontWeight: 700,
              letterSpacing: "-1px",
              color: "white",
              lineHeight: 1.1,
            }}
          >
            Our Mission
          </h2>
        </div>

        {/* Mission grid: 3 columns desktop, 1 column mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {MISSION_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className={`transition-colors duration-200 hover:bg-white/5 px-5 py-8 md:[padding:40px_32px] [border-bottom:1px_solid_rgba(255,255,255,0.08)] last:[border-bottom:none] md:[border-bottom:none]${idx < MISSION_ITEMS.length - 1 ? " md:[border-right:1px_solid_rgba(255,255,255,0.08)]" : ""}`}
            >
              {/* Color bar */}
              <div
                className="h-0.5 rounded-full mb-4"
                style={{
                  width: "28px",
                  backgroundColor:
                    item.barColor === "orange"
                      ? "var(--orange)"
                      : item.barColor === "teal"
                        ? "var(--teal)"
                        : "var(--highlight)",
                }}
              />

              {/* Title */}
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  color: "white",
                  lineHeight: 1.3,
                  marginBottom: "12px",
                }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: "var(--font-ui)",
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.45)",
                  lineHeight: 1.75,
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
