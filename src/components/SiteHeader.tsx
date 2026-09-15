import { useState } from "react";
import { copy, navItems } from "../data/site";

type SiteHeaderProps = {
  brandName: string;
};

export function SiteHeader({ brandName }: SiteHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuLabel = isOpen ? copy.menuClose : copy.menuOpen;
  const navClassName = isOpen ? "nav navOpen" : "nav";

  function handleToggle() {
    setIsOpen((open) => !open);
  }

  function handleNavigate() {
    setIsOpen(false);
  }

  function renderNavItem(item: (typeof navItems)[number]) {
    return (
      <a href={item.href} key={item.href} onClick={handleNavigate}>
        {item.label}
      </a>
    );
  }

  return (
    <header className="siteHeader">
      <div className="wrap headerInner">
        <a aria-label={brandName} className="brand" href="/">
          <svg
            aria-hidden="true"
            className="brandMark"
            viewBox="0 0 640 220"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              className="brandWaves"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="10"
            >
              <path d="M78 70v80" />
              <path className="wavePulse" d="M58 88v44" />
              <path className="wavePulse" d="M98 88v44" />
              <path className="waveArc" d="M118 70c22 16 22 64 0 80" />
              <path className="waveArc waveArcOuter" d="M138 52c36 28 36 88 0 116" />
              <path d="M562 70v80" />
              <path className="wavePulse" d="M542 88v44" />
              <path className="wavePulse" d="M582 88v44" />
              <path className="waveArc" d="M522 70c-22 16-22 64 0 80" />
              <path className="waveArc waveArcOuter" d="M502 52c-36 28-36 88 0 116" />
            </g>
            <text
              fill="currentColor"
              fontFamily="Oswald, Impact, sans-serif"
              fontSize="92"
              fontWeight="700"
              letterSpacing="8"
              textAnchor="middle"
              x="320"
              y="118"
            >
              NRG
            </text>
            <text
              fill="currentColor"
              fontFamily="Oswald, Impact, sans-serif"
              fontSize="22"
              fontWeight="500"
              letterSpacing="10"
              textAnchor="middle"
              x="320"
              y="168"
            >
              AUDIO AND VISUALS
            </text>
          </svg>
        </a>
        <button
          aria-expanded={isOpen}
          aria-label={copy.menuToggle}
          className="menuButton"
          onClick={handleToggle}
          type="button"
        >
          {menuLabel}
        </button>
        <nav className={navClassName}>{navItems.map(renderNavItem)}</nav>
      </div>
    </header>
  );
}
