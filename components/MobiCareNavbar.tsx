"use client";

import MobiCareWordmark from "./MobiCareWordmark";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/pricelist", label: "Price List" },
  { href: "/our-store", label: "Our Store" },
  { href: "/promo", label: "Promo" },
  { href: "/gallery", label: "Galeri" },
  { href: "/about", label: "Tentang" },
];

export default function MobiCareNavbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuOpenRef = useRef(menuOpen);

  useEffect(() => {
    menuOpenRef.current = menuOpen;
  }, [menuOpen]);

  const closeMenu = (returnFocus = false) => {
    setMenuOpen(false);
    if (returnFocus) requestAnimationFrame(() => menuButtonRef.current?.focus());
  };

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu(true);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  // Navbar tersembunyi saat scroll turun dan muncul lagi saat scroll naik,
  // sehingga navigasi selalu bisa diakses tanpa harus kembali ke atas.
  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      const delta = y - lastY;
      if (menuOpenRef.current || y <= 90) {
        setHidden(false);
      } else if (delta > 6) {
        setHidden(true);
      } else if (delta < -6) {
        setHidden(false);
      }
      lastY = y;
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (pathname.startsWith("/admin")) return null;

  const activePath = pathname.replace(/^\/en(?=\/|$)/, "") || "/";

  const isEn = pathname.startsWith("/en");
  const getHref = (href: string) => {
    if (!isEn) return href;
    return href === "/" ? "/en" : `/en${href}`;
  };

  return (
    <header className={`mobi-nav ${hidden ? "is-hidden" : ""}`}>
      <nav className="mobi-nav__inner" aria-label="Navigasi utama">
        <Link className="mobi-nav__brand" href={getHref("/")} aria-label="MobiCare home">
          <MobiCareWordmark />
        </Link>

        <div className="mobi-nav__desktop-links">
          {links.map((link) => (
            <Link
              className={activePath === link.href ? "is-active" : undefined}
              href={getHref(link.href)}
              key={link.href}
            >
              {link.label}
            </Link>
          ))}
          <Link className="mobi-nav__cta mobi-nav__desktop-cta" href={getHref("/contact")}>
            {isEn ? "Consultation" : "Konsultasi"}{" "}
            <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.5} />
          </Link>
        </div>

        <button
          className="mobi-nav__menu-button"
          ref={menuButtonRef}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobi-mobile-menu"
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          onClick={() => (menuOpen ? closeMenu() : (setMenuOpen(true), setHidden(false)))}
        >
          <span />
          <span />
        </button>
      </nav>

      <div className={`mobi-nav__drawer ${menuOpen ? "is-open" : ""}`} id="mobi-mobile-menu" aria-hidden={!menuOpen} inert={!menuOpen}>
        <div className="mobi-nav__drawer-links">
          {links.map((link) => (
            <Link href={getHref(link.href)} key={link.href} onClick={() => closeMenu()}>
              {link.label}
            </Link>
          ))}
        </div>
        <Link className="mobi-nav__drawer-cta" href={getHref("/contact")} onClick={() => closeMenu()}>
          {isEn ? "Start consultation" : "Mulai konsultasi"}{" "}
          <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.5} />
        </Link>
      </div>
    </header>
  );
}
