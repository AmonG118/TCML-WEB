"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative z-[1] border-t-2"
      style={{ borderColor: "var(--ink)", backgroundColor: "var(--paper)" }}
    >
      {/* Footer Top - 4 columns */}
      <div
        className="md:grid-cols-1"
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          borderBottom: "1px solid var(--rule)",
        }}
      >
        {/* Column 1: Brand + Tagline + Social */}
        <div
          className="md:border-r-0"
          style={{
            padding: "48px 40px",
            borderRight: "1px solid var(--rule)",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "2rem",
              fontWeight: 900,
              letterSpacing: "-1px",
              lineHeight: 1,
              marginBottom: "16px",
            }}
          >
            <span style={{ color: "var(--orange)" }}>T</span>
            <span style={{ color: "var(--charcoal)" }}>CML</span>
          </div>
          <p
            style={{
              fontSize: "13px",
              color: "var(--ink-mid)",
              lineHeight: 1.7,
              maxWidth: "240px",
              marginBottom: "24px",
              fontFamily: "var(--font-ui)",
            }}
          >
            An official program by the Overseas Community Affairs Council, R.O.C. (Taiwan), dedicated to promoting
            Mandarin learning worldwide.
          </p>
          <div style={{ display: "flex", gap: "8px" }}>
            <a
              href="#"
              className="hover:border-[var(--orange)] hover:text-[var(--orange)] transition-all duration-150"
              style={{
                width: "30px",
                height: "30px",
                border: "1px solid var(--rule)",
                borderRadius: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "12px",
                color: "var(--ink-mid)",
                textDecoration: "none",
              }}
            >
              𝕏
            </a>
            <a
              href="#"
              className="hover:border-[var(--orange)] hover:text-[var(--orange)] transition-all duration-150"
              style={{
                width: "30px",
                height: "30px",
                border: "1px solid var(--rule)",
                borderRadius: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "12px",
                color: "var(--ink-mid)",
                textDecoration: "none",
              }}
            >
              f
            </a>
            <a
              href="#"
              className="hover:border-[var(--orange)] hover:text-[var(--orange)] transition-all duration-150"
              style={{
                width: "30px",
                height: "30px",
                border: "1px solid var(--rule)",
                borderRadius: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "12px",
                color: "var(--ink-mid)",
                textDecoration: "none",
              }}
            >
              ▶
            </a>
          </div>
        </div>

        {/* Column 2: Pages */}
        <div
          className="md:border-r-0"
          style={{
            padding: "48px 40px",
            borderRight: "1px solid var(--rule)",
          }}
        >
          <h4
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: "10px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "2px",
              color: "var(--ink-light)",
              marginBottom: "20px",
              paddingBottom: "12px",
              borderBottom: "1px solid var(--rule)",
            }}
          >
            Pages
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li style={{ marginBottom: "10px" }}>
              <Link
                href="/news"
                className="hover:text-[var(--orange)] transition-colors duration-150"
                style={{
                  fontSize: "13px",
                  color: "var(--ink-mid)",
                  textDecoration: "none",
                  fontFamily: "var(--font-ui)",
                }}
              >
                Latest News
              </Link>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <Link
                href="/centers"
                className="hover:text-[var(--orange)] transition-colors duration-150"
                style={{
                  fontSize: "13px",
                  color: "var(--ink-mid)",
                  textDecoration: "none",
                  fontFamily: "var(--font-ui)",
                }}
              >
                Find A Center
              </Link>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <Link
                href="/stories"
                className="hover:text-[var(--orange)] transition-colors duration-150"
                style={{
                  fontSize: "13px",
                  color: "var(--ink-mid)",
                  textDecoration: "none",
                  fontFamily: "var(--font-ui)",
                }}
              >
                Feature Story
              </Link>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <Link
                href="/taiwan-vibe"
                className="hover:text-[var(--orange)] transition-colors duration-150"
                style={{
                  fontSize: "13px",
                  color: "var(--ink-mid)",
                  textDecoration: "none",
                  fontFamily: "var(--font-ui)",
                }}
              >
                Taiwan Vibe
              </Link>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <Link
                href="/about"
                className="hover:text-[var(--orange)] transition-colors duration-150"
                style={{
                  fontSize: "13px",
                  color: "var(--ink-mid)",
                  textDecoration: "none",
                  fontFamily: "var(--font-ui)",
                }}
              >
                About Us
              </Link>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <Link
                href="/enroll"
                className="hover:text-[var(--orange)] transition-colors duration-150"
                style={{
                  fontSize: "13px",
                  color: "var(--ink-mid)",
                  textDecoration: "none",
                  fontFamily: "var(--font-ui)",
                }}
              >
                Join TCML
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Resources */}
        <div
          className="md:border-r-0"
          style={{
            padding: "48px 40px",
            borderRight: "1px solid var(--rule)",
          }}
        >
          <h4
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: "10px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "2px",
              color: "var(--ink-light)",
              marginBottom: "20px",
              paddingBottom: "12px",
              borderBottom: "1px solid var(--rule)",
            }}
          >
            Resources
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li style={{ marginBottom: "10px" }}>
              <a
                href="https://huayuworld.org/"
                className="hover:text-[var(--orange)] transition-colors duration-150"
                style={{
                  fontSize: "13px",
                  color: "var(--ink-mid)",
                  textDecoration: "none",
                  fontFamily: "var(--font-ui)",
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                HuayuWorld
              </a>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <a
                href="https://www.ocac.gov.tw/"
                className="hover:text-[var(--orange)] transition-colors duration-150"
                style={{
                  fontSize: "13px",
                  color: "var(--ink-mid)",
                  textDecoration: "none",
                  fontFamily: "var(--font-ui)",
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                OCAC Taiwan
              </a>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <Link
                href="/sitemap"
                className="hover:text-[var(--orange)] transition-colors duration-150"
                style={{
                  fontSize: "13px",
                  color: "var(--ink-mid)",
                  textDecoration: "none",
                  fontFamily: "var(--font-ui)",
                }}
              >
                Sitemap
              </Link>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <Link
                href="/privacy"
                className="hover:text-[var(--orange)] transition-colors duration-150"
                style={{
                  fontSize: "13px",
                  color: "var(--ink-mid)",
                  textDecoration: "none",
                  fontFamily: "var(--font-ui)",
                }}
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div style={{ padding: "48px 40px" }}>
          <h4
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: "10px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "2px",
              color: "var(--ink-light)",
              marginBottom: "20px",
              paddingBottom: "12px",
              borderBottom: "1px solid var(--rule)",
            }}
          >
            Contact
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li style={{ marginBottom: "10px" }}>
              <a
                href="mailto:info@tcml-mandarin.org"
                className="hover:text-[var(--orange)] transition-colors duration-150"
                style={{
                  fontSize: "13px",
                  color: "var(--ink-mid)",
                  textDecoration: "none",
                  fontFamily: "var(--font-ui)",
                }}
              >
                info@tcml-mandarin.org
              </a>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <a
                href="#"
                className="hover:text-[var(--orange)] transition-colors duration-150"
                style={{
                  fontSize: "13px",
                  color: "var(--ink-mid)",
                  textDecoration: "none",
                  fontFamily: "var(--font-ui)",
                }}
              >
                Taipei, Taiwan
              </a>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <a
                href="https://www.tcml-mandarin.org/"
                className="hover:text-[var(--orange)] transition-colors duration-150"
                style={{
                  fontSize: "13px",
                  color: "var(--ink-mid)",
                  textDecoration: "none",
                  fontFamily: "var(--font-ui)",
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                tcml-mandarin.org
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 40px",
          fontSize: "11px",
          color: "var(--ink-light)",
          fontFamily: "var(--font-ui)",
        }}
      >
        <span>© {currentYear} Taiwan Center for Mandarin Learning · All rights reserved</span>
        <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
          <Link
            href="/privacy"
            className="hover:text-[var(--teal)] transition-colors duration-150"
            style={{
              color: "var(--ink-light)",
              textDecoration: "none",
              fontSize: "11px",
            }}
          >
            Privacy Policy
          </Link>
          <Link
            href="/accessibility"
            className="hover:text-[var(--teal)] transition-colors duration-150"
            style={{
              color: "var(--ink-light)",
              textDecoration: "none",
              fontSize: "11px",
            }}
          >
            Accessibility
          </Link>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
              border: "1px solid var(--rule)",
              borderRadius: "4px",
              padding: "3px 8px",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.5px",
              color: "var(--ink-light)",
            }}
          >
            ♿ WCAG AA
          </div>
        </div>
      </div>
    </footer>
  );
}
