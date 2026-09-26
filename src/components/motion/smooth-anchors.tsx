"use client";

import { useEffect } from "react";

// Makes every in-page link (`href="#section"` or `href="/#section"`) scroll
// smoothly to its section while leaving the address bar untouched, so the
// URL never picks up a `#fragment`. Also handles arriving with a hash (e.g.
// from the 404 page): scroll there, then strip it.
export function SmoothAnchors() {
  useEffect(() => {
    const scrollToId = (id: string) => {
      const el = document.getElementById(id);
      if (!el) return false;
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      return true;
    };

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = (e.target as Element | null)?.closest?.("a[href]");
      if (!link) return;
      const href = link.getAttribute("href") ?? "";
      const match = href.match(/^\/?#(.+)$/);
      if (!match) return;
      if (scrollToId(decodeURIComponent(match[1]))) e.preventDefault();
    };

    if (window.location.hash) {
      const id = decodeURIComponent(window.location.hash.slice(1));
      requestAnimationFrame(() => scrollToId(id));
      history.replaceState(history.state, "", window.location.pathname + window.location.search);
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
