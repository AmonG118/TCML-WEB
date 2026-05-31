import Link from "next/link";

const NEWS_ITEMS = [
  {
    date: "May 25, 2026",
    title: "Enroll now for the Summer 2026 Courses!",
    excerpt:
      "Learn more about special offers and course information. Join TCML to explore the endless possibilities of Mandarin and culture.",
    emoji: "🎓",
    barColor: "orange",
  },
  {
    date: "May 19, 2026",
    title: "Fremont Mayor Honors TCML-I Fly Young Chinese School",
    excerpt:
      "Mayor Raj Salwan officially proclaimed May 10–17, 2026, as Taiwanese American Heritage Week during a formal presentation.",
    emoji: "🏛",
    barColor: "teal",
  },
  {
    date: "May 18, 2026",
    title: "Taiwan Cultural Experience Day in Poland",
    excerpt:
      'TCML held the "Taiwan Cultural Experience and Mandarin Course Promotion Day" in Poznań, western Poland.',
    emoji: "🌍",
    barColor: "orange",
  },
];

export default function LatestNews() {
  return (
    <section
      className="border-t border-b relative z-[1]"
      style={{ backgroundColor: "var(--white)", borderColor: "var(--rule)" }}
      aria-labelledby="news-heading"
    >
      <div className="section-inner">
        {/* Section header */}
        <div
          className="flex items-end justify-between mb-12 pb-5 border-b"
          style={{ borderColor: "var(--rule)" }}
        >
          <div>
            <p
              style={{
                fontSize: "10px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "2px",
                color: "var(--ink-mid)",
                marginBottom: "8px",
                fontFamily: "var(--font-ui)",
              }}
            >
              最新消息
            </p>
            <h2
              id="news-heading"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                fontWeight: 700,
                letterSpacing: "-1px",
                color: "var(--ink)",
                lineHeight: 1.1,
              }}
            >
              Latest News
            </h2>
          </div>
          <Link
            href="/news"
            className="flex items-center gap-1.5 pb-1 border-b transition-all duration-150 hover:gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--teal)] focus-visible:ring-offset-2"
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: "13px",
              fontWeight: 600,
              color: "var(--teal-dark)",
              borderColor: "var(--teal-dark)",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            View all →
          </Link>
        </div>

        {/* News grid: 3 columns desktop, 1 column mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {NEWS_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="news-card cursor-pointer transition-all duration-200 relative overflow-hidden flex flex-col group"
            >
              {/* Image area */}
              <div
                className="relative overflow-hidden flex items-center justify-center"
                style={{
                  height: "200px",
                  background:
                    idx === 0
                      ? "linear-gradient(145deg, #C8BFB0, #A89880)"
                      : idx === 1
                        ? "linear-gradient(145deg, #8EA8B8, #6B8FA8)"
                        : "linear-gradient(145deg, #A8B898, #7A9878)",
                  position: "relative",
                }}
              >
                {/* Emoji placeholder with scale on hover */}
                <span
                  className="transition-all duration-300 group-hover:scale-105 group-hover:opacity-45"
                  style={{
                    fontSize: "48px",
                    opacity: 0.35,
                  }}
                >
                  {item.emoji}
                </span>

                {/* Date badge */}
                <div
                  className="absolute top-3.5 left-3.5"
                  style={{
                    display: "inline-block",
                    fontFamily: "var(--font-ui)",
                    fontSize: "10px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    color: "var(--ink-mid)",
                    backgroundColor: "rgba(255,255,255,0.9)",
                    border: "1px solid var(--rule)",
                    padding: "3px 8px",
                    borderRadius: "var(--radius-badge)",
                  }}
                >
                  {item.date}
                </div>
              </div>

              {/* Card body */}
              <div
                className="flex-1 flex flex-col"
                style={{
                  padding: "24px 28px 28px",
                  backgroundColor: "var(--white)",
                }}
              >
                <h3
                  className="group-hover:text-[var(--orange)] transition-colors duration-150"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "var(--ink)",
                    lineHeight: 1.3,
                    marginBottom: "10px",
                    letterSpacing: "-0.3px",
                  }}
                >
                  {item.title}
                </h3>

                {/* Color bar */}
                <div
                  style={{
                    width: "var(--bar-width)",
                    height: "2px",
                    borderRadius: "var(--radius-bar)",
                    marginBottom: "12px",
                    backgroundColor:
                      item.barColor === "orange" ? "var(--orange)" : "var(--teal)",
                  }}
                />

                {/* Excerpt */}
                <p
                  className="flex-1 mb-4"
                  style={{
                    fontFamily: "var(--font-ui)",
                    fontSize: "13px",
                    color: "var(--ink-mid)",
                    lineHeight: 1.7,
                  }}
                >
                  {item.excerpt}
                </p>

                {/* Read more link */}
                <Link
                  href={`/news/${idx}`}
                  className="inline-flex items-center gap-1 transition-colors duration-150"
                  style={{
                    fontFamily: "var(--font-ui)",
                    fontSize: "12px",
                    fontWeight: 600,
                    color: idx === 1 ? "var(--teal-dark)" : "var(--orange-dark)",
                    textDecoration: "none",
                    marginTop: "auto",
                  }}
                >
                  Read more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
