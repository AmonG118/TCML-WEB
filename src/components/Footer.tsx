"use client";

import Link from "next/link";

const FOOTER_LINK_STYLE = {
  fontSize: "13px",
  color: "var(--ink-mid)",
  textDecoration: "none",
  fontFamily: "var(--font-ui)",
} as const;

const FOOTER_H4_STYLE = {
  fontFamily: "var(--font-ui)",
  fontSize: "10px",
  fontWeight: 700,
  textTransform: "uppercase" as const,
  letterSpacing: "2px",
  color: "var(--ink-mid)",
  marginBottom: "20px",
  paddingBottom: "12px",
  borderBottom: "1px solid var(--rule)",
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative z-[1] border-t-2"
      style={{ borderColor: "var(--ink)", backgroundColor: "var(--paper)" }}
    >
      {/* ── Footer Top: 3 outer cols (aligns dividers with OurMission) ── */}
      <div
        className="footer-top-grid grid border-b"
        style={{ borderColor: "var(--rule)" }}
      >

        {/* ── Col 1: Brand ── */}
        <div className="footer-col footer-col-brand">
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
              maxWidth: "220px",
              marginBottom: "24px",
              fontFamily: "var(--font-ui)",
            }}
          >
            An official program by the Overseas Community Affairs Council,
            R.O.C. (Taiwan), promoting Mandarin learning worldwide.
          </p>
          <div style={{ display: "flex", gap: "8px" }}>
            {[{ label: "𝕏", href: "#" }, { label: "f", href: "#" }, { label: "▶", href: "#" }].map(
              ({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="hover:border-[var(--orange)] hover:text-[var(--orange)] transition-all duration-150"
                  style={{
                    width: "44px",
                    height: "44px",
                    border: "1px solid var(--rule)",
                    borderRadius: "var(--radius-chip)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "12px",
                    color: "var(--ink-mid)",
                    textDecoration: "none",
                  }}
                >
                  {label}
                </a>
              )
            )}
          </div>
        </div>

        {/* ── Col 2: Pages | Resources ── */}
        <div className="footer-col">
          <div className="footer-col-inner">

            {/* Sub: Pages */}
            <div className="footer-sub-col">
              <h4 style={FOOTER_H4_STYLE}>Pages</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  { href: "/news",          label: "Latest News" },
                  { href: "/centers",       label: "Find A Center" },
                  { href: "/feature-story", label: "Feature Story" },
                  { href: "/taiwan-vibe",   label: "Taiwan Vibe" },
                  { href: "/about",         label: "About Us" },
                  { href: "/enroll",        label: "Join TCML" },
                ].map(({ href, label }) => (
                  <li key={href} style={{ marginBottom: "10px" }}>
                    <Link href={href} className="hover:text-[var(--orange)] transition-colors duration-150" style={FOOTER_LINK_STYLE}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sub: Resources */}
            <div className="footer-sub-col">
              <h4 style={FOOTER_H4_STYLE}>Resources</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li style={{ marginBottom: "10px" }}>
                  <a href="https://huayuworld.org/" className="hover:text-[var(--orange)] transition-colors duration-150" style={FOOTER_LINK_STYLE} target="_blank" rel="noopener noreferrer">
                    HuayuWorld
                  </a>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <a href="https://www.ocac.gov.tw/" className="hover:text-[var(--orange)] transition-colors duration-150" style={FOOTER_LINK_STYLE} target="_blank" rel="noopener noreferrer">
                    OCAC Taiwan
                  </a>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <Link href="/sitemap" className="hover:text-[var(--orange)] transition-colors duration-150" style={FOOTER_LINK_STYLE}>
                    Sitemap
                  </Link>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <Link href="/privacy" className="hover:text-[var(--orange)] transition-colors duration-150" style={FOOTER_LINK_STYLE}>
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* ── Col 3: Contact | Our Mission ── */}
        <div className="footer-col">
          <div className="footer-col-inner">

            {/* Sub: Contact */}
            <div className="footer-sub-col">
              <h4 style={FOOTER_H4_STYLE}>Contact</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li style={{ marginBottom: "10px" }}>
                  <a href="mailto:info@tcml-mandarin.org" className="hover:text-[var(--orange)] transition-colors duration-150" style={FOOTER_LINK_STYLE}>
                    info@tcml-mandarin.org
                  </a>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <span style={FOOTER_LINK_STYLE}>Taipei, Taiwan</span>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <a href="https://www.tcml-mandarin.org/" className="hover:text-[var(--orange)] transition-colors duration-150" style={FOOTER_LINK_STYLE} target="_blank" rel="noopener noreferrer">
                    tcml-mandarin.org
                  </a>
                </li>
              </ul>
            </div>

            {/* Sub: Our Mission */}
            <div className="footer-sub-col">
              <h4 style={FOOTER_H4_STYLE}>Our Mission</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  { text: "Foster Mandarin Learning", bar: "var(--orange)" },
                  { text: "Promote Cultural Exchange", bar: "var(--teal)" },
                  { text: "Encourage Community Participation", bar: "var(--highlight)" },
                ].map(({ text, bar }) => (
                  <li
                    key={text}
                    style={{
                      marginBottom: "12px",
                      paddingLeft: "10px",
                      borderLeft: `2px solid ${bar}`,
                      fontSize: "12px",
                      color: "var(--ink-mid)",
                      lineHeight: 1.5,
                      fontFamily: "var(--font-ui)",
                    }}
                  >
                    {text}
                  </li>
                ))}
                <li style={{ marginTop: "16px" }}>
                  <Link
                    href="/about"
                    className="hover:text-[var(--teal)] transition-colors duration-150"
                    style={{
                      fontSize: "11px",
                      fontWeight: 600,
                      color: "var(--teal)",
                      textDecoration: "none",
                      fontFamily: "var(--font-ui)",
                    }}
                  >
                    About Us →
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>

      {/* ── Footer Bottom ── */}
      <div className="footer-bottom">
        <span>© {currentYear} Taiwan Center for Mandarin Learning · All rights reserved</span>
        <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
          <Link href="/privacy" className="hover:text-[var(--teal)] transition-colors duration-150" style={{ color: "var(--ink-light)", textDecoration: "none", fontSize: "11px" }}>
            Privacy Policy
          </Link>
          <Link href="/accessibility" className="hover:text-[var(--teal)] transition-colors duration-150" style={{ color: "var(--ink-light)", textDecoration: "none", fontSize: "11px" }}>
            Accessibility
          </Link>
          <a href="https://accessibility.moda.gov.tw/" target="_blank" rel="noopener noreferrer" aria-label="通過無障礙 AA 等級認證">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/wcag-badge.webp" alt="無障礙 AA 標章" style={{ width: "80px", height: "auto", display: "block" }} />
          </a>
        </div>
      </div>
    </footer>
  );
}
