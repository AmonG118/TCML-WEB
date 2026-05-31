"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const FILTER_CHIPS = ["All", "Online", "Weekends", "Personalized"] as const;
type FilterChip = (typeof FILTER_CHIPS)[number];

/**
 * Search area 嵌入 hero-right 底部，不含外框 card 樣式。
 * 互動部分（chips state、search input）需 client component。
 */
export default function SearchCard() {
  const [activeFilter, setActiveFilter] = useState<FilterChip>("All");
  const [query, setQuery] = useState("");

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    // TODO: 接後端搜尋 API
  }

  return (
    <div className="search-card-wrap">
      {/* 標題（mockup 樣式：小寫粗體大寫，ink-light）*/}
      <p
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          fontSize: "12px",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "1px",
          color: "var(--ink-mid)",
          marginBottom: "14px",
          fontFamily: "var(--font-ui)",
        }}
      >
        Find a Center Near You
      </p>

      {/* 搜尋列 */}
      <form
        onSubmit={handleSearch}
        className="flex gap-2 mb-3"
        role="search"
        aria-label="Search for a Mandarin learning center"
      >
        <label htmlFor="center-search" className="sr-only">
          City, state, or country
        </label>
        <input
          id="center-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="City, state, or country…"
          className="placeholder:text-[var(--ink-light)]"
          style={{
            flex: 1,
            fontFamily: "var(--font-ui)",
            fontSize: "14px",
            padding: "10px 14px",
            border: "1px solid var(--rule)",
            borderRadius: "6px",
            backgroundColor: "var(--white)",
            color: "var(--ink)",
            transition: "border-color 0.15s",
          }}
        />
        <button
          type="submit"
          className="hover:bg-[var(--teal-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--teal)] focus-visible:ring-offset-2"
          style={{
            backgroundColor: "var(--teal)",
            color: "white",
            border: "none",
            borderRadius: "6px",
            padding: "10px 16px",
            fontFamily: "var(--font-ui)",
            fontSize: "13px",
            fontWeight: 600,
            minHeight: "44px",
            cursor: "pointer",
            transition: "background 0.15s",
            whiteSpace: "nowrap",
          }}
        >
          Search
        </button>
      </form>

      {/* Chip 篩選器（DESIGN.md 3.1：chip/tag 式）*/}
      <div
        className="flex flex-wrap gap-1.5"
        role="group"
        aria-label="Filter by class type"
      >
        {FILTER_CHIPS.map((chip) => {
          const isActive = activeFilter === chip;
          return (
            <button
              key={chip}
              type="button"
              onClick={() => setActiveFilter(chip)}
              aria-pressed={isActive}
              className={cn(
                "cursor-pointer transition-all duration-150",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--orange)] focus-visible:ring-offset-1",
                !isActive && "hover:bg-[var(--highlight)] hover:border-[rgba(247,233,142,0.6)] hover:text-[var(--ink)]"
              )}
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: "11px",
                fontWeight: 600,
                padding: "5px 12px",
                borderRadius: "4px",
                border: "1px solid",
                borderColor: isActive ? "rgba(247,233,142,0.6)" : "var(--rule)",
                backgroundColor: isActive ? "var(--highlight)" : "var(--white)",
                color: isActive ? "var(--ink)" : "var(--ink-mid)",
              }}
            >
              {chip}
            </button>
          );
        })}
      </div>
    </div>
  );
}
