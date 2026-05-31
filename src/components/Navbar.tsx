"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/news", label: "Latest News" },
  { href: "/centers", label: "Find A Center" },
  { href: "/feature-story", label: "Feature Story" },
  { href: "/taiwan-vibe", label: "Taiwan Vibe" },
  { href: "/about", label: "About Us" },
];

const LANGUAGES = ["EN", "FR", "DE", "ES"] as const;

export default function Navbar() {
  const pathname = usePathname();
  const [activeLang, setActiveLang] = useState<(typeof LANGUAGES)[number]>("EN");
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b"
      style={{ backgroundColor: "var(--paper)", borderColor: "var(--rule)" }}
    >
      <div
        className="navbar-inner grid items-center"
        style={{
          gridTemplateColumns: "auto 1fr auto",
          height: "64px",
        }}
      >
        {/* ── Logo：wordmark T(橘) + CML(炭灰) ── */}
        <Link
          href="/"
          className="flex items-center gap-3 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--orange)] focus-visible:ring-offset-2"
          aria-label="TCML – Taiwan Center for Mandarin Learning, go to homepage"
        >
          {/* Wordmark */}
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: "26px",
              lineHeight: 1,
              letterSpacing: "-1px",
            }}
          >
            <span style={{ color: "var(--orange)" }}>T</span>
            <span style={{ color: "var(--charcoal)" }}>CML</span>
          </span>

          {/* Subtitle with left border separator — hidden on mobile */}
          <span
            className="hidden md:inline-block"
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: "10px",
              fontWeight: 500,
              color: "var(--ink-light)",
              letterSpacing: "0.3px",
              lineHeight: 1.4,
              borderLeft: "1px solid var(--rule)",
              paddingLeft: "12px",
              marginLeft: "4px",
            }}
          >
            Taiwan Center
            <br />
            for Mandarin Learning
          </span>
        </Link>

        {/* ── Desktop Nav Links（居中）── */}
        <nav
          className="hidden lg:flex items-center justify-center"
          aria-label="Main navigation"
        >
          <ul className="flex items-center" style={{ listStyle: "none" }}>
            {NAV_LINKS.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={cn(
                      "relative block rounded px-3.5 py-2",
                      "font-medium transition-colors duration-150",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--orange)] focus-visible:ring-offset-2",
                      /* 底線動畫 */
                      "after:absolute after:bottom-0.5 after:left-3.5 after:right-3.5",
                      "after:h-[1.5px] after:bg-[var(--orange)]",
                      "after:origin-left after:scale-x-0 after:transition-transform after:duration-200",
                      "hover:text-[var(--ink)] hover:after:scale-x-100",
                      isActive
                        ? "text-[var(--orange)] font-semibold after:scale-x-100"
                        : "text-[var(--ink-mid)]"
                    )}
                    style={{ fontSize: "13px", fontFamily: "var(--font-ui)" }}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* ── Right Controls ── */}
        <div className="flex items-center gap-2 ml-auto">
          {/* Language pills（grouped border container）*/}
          <div
            className="hidden md:flex items-center overflow-hidden"
            style={{
              border: "1px solid var(--rule)",
              borderRadius: "6px",
            }}
            role="group"
            aria-label="Language selection"
          >
            {LANGUAGES.map((lang, i) => {
              const isActive = activeLang === lang;
              return (
                <button
                  key={lang}
                  onClick={() => setActiveLang(lang)}
                  className={cn(
                    "px-2.5 py-[5px] transition-all duration-150",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--orange)]",
                    isActive
                      ? "text-white"
                      : "text-[var(--ink-light)] hover:text-[var(--orange)] hover:bg-[var(--orange-light)]"
                  )}
                  style={{
                    fontFamily: "var(--font-ui)",
                    fontSize: "11px",
                    fontWeight: 600,
                    borderRight: i < LANGUAGES.length - 1 ? "1px solid var(--rule)" : "none",
                    backgroundColor: isActive ? "var(--orange)" : "transparent",
                    cursor: "pointer",
                  }}
                  aria-pressed={isActive}
                  lang={lang.toLowerCase()}
                >
                  {lang}
                </button>
              );
            })}
          </div>

          {/* Search icon button */}
          <button
            className={cn(
              "flex items-center justify-center transition-all duration-150",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--orange)] focus-visible:ring-offset-1",
              "hover:border-[var(--orange)] hover:text-[var(--orange)]"
            )}
            style={{
              width: "32px",
              height: "32px",
              border: "1px solid var(--rule)",
              borderRadius: "6px",
              backgroundColor: "transparent",
              color: "var(--ink-mid)",
              fontSize: "15px",
              cursor: "pointer",
            }}
            aria-label="Search"
          >
            ⌕
          </button>

          {/* Mobile Hamburger */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              className={cn(
                "lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg",
                "text-[var(--ink-mid)] hover:bg-[var(--paper-dark)] transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--orange)] focus-visible:ring-offset-2"
              )}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </SheetTrigger>

            <SheetContent
              side="right"
              id="mobile-menu"
              className="w-72 p-0"
              style={{ backgroundColor: "var(--paper)" }}
            >
              <SheetHeader
                className="p-4 border-b"
                style={{ borderColor: "var(--rule)" }}
              >
                <SheetTitle
                  className="text-left"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 900,
                    fontSize: "18px",
                    color: "var(--ink)",
                    letterSpacing: "-0.5px",
                  }}
                >
                  <span style={{ color: "var(--orange)" }}>T</span>
                  <span style={{ color: "var(--charcoal)" }}>CML</span>
                </SheetTitle>
              </SheetHeader>

              {/* Mobile Nav */}
              <nav className="mt-2 flex flex-col gap-0.5 px-2" aria-label="Mobile navigation">
                {NAV_LINKS.map(({ href, label }) => {
                  const isActive = pathname === href;
                  return (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--orange)]",
                        isActive
                          ? "bg-[var(--orange-light)] font-semibold text-[var(--orange)]"
                          : "text-[var(--ink-mid)] hover:bg-[var(--paper-dark)] hover:text-[var(--ink)]"
                      )}
                      style={{ fontFamily: "var(--font-ui)" }}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {label}
                    </Link>
                  );
                })}
              </nav>

              {/* Mobile Language */}
              <div className="mt-4 border-t px-4 pt-4" style={{ borderColor: "var(--rule)" }}>
                <p
                  className="mb-3 text-xs font-semibold uppercase tracking-widest"
                  style={{ color: "var(--ink-light)", fontFamily: "var(--font-ui)" }}
                >
                  Language
                </p>
                <div className="flex gap-0 overflow-hidden" style={{ border: "1px solid var(--rule)", borderRadius: "6px" }} role="group" aria-label="Language selection">
                  {LANGUAGES.map((lang, i) => {
                    const isActive = activeLang === lang;
                    return (
                      <button
                        key={lang}
                        onClick={() => setActiveLang(lang)}
                        className="flex-1 py-2 text-xs font-semibold transition-all"
                        style={{
                          fontFamily: "var(--font-ui)",
                          borderRight: i < LANGUAGES.length - 1 ? "1px solid var(--rule)" : "none",
                          backgroundColor: isActive ? "var(--orange)" : "transparent",
                          color: isActive ? "white" : "var(--ink-light)",
                          cursor: "pointer",
                        }}
                        aria-pressed={isActive}
                        lang={lang.toLowerCase()}
                      >
                        {lang}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6 px-4">
                <Link
                  href="/join"
                  onClick={() => setMobileOpen(false)}
                  className="flex w-full items-center justify-center rounded-lg py-3 text-sm font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--orange)] focus-visible:ring-offset-2"
                  style={{
                    backgroundColor: "var(--orange)",
                    boxShadow: "0 2px 0 var(--orange-dark)",
                    fontFamily: "var(--font-ui)",
                  }}
                >
                  Join TCML
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
