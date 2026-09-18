import { useState } from "react";
import type { NavItem } from "../data/site";

type LanguageLink = {
  href: string;
  isCurrent: boolean;
  label: string;
};

type SiteHeaderProps = {
  brandHref: string;
  brandName: string;
  languageLabel: string;
  languages: LanguageLink[];
  menuClose: string;
  menuOpen: string;
  menuToggle: string;
  navItems: NavItem[];
};

export function SiteHeader({
  brandHref,
  brandName,
  languageLabel,
  languages,
  menuClose,
  menuOpen,
  menuToggle,
  navItems,
}: SiteHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonClassName = isOpen ? "menuButton isOpen" : "menuButton";
  const menuLabel = isOpen ? menuClose : menuOpen;
  const navClassName = isOpen ? "nav navOpen" : "nav";

  function handleToggle() {
    setIsOpen((open) => !open);
  }

  function isCurrentLanguage(item: LanguageLink) {
    return item.isCurrent;
  }

  function renderNavItem(item: NavItem) {
    return (
      <a href={item.href} key={item.href}>
        {item.label}
      </a>
    );
  }

  function renderLanguageOption(item: LanguageLink) {
    const className = item.isCurrent ? "isCurrent" : undefined;
    return (
      <a
        aria-current={item.isCurrent ? "true" : undefined}
        className={className}
        data-astro-reload=""
        href={item.href}
        key={item.label}
      >
        {item.label}
      </a>
    );
  }

  const currentLanguage =
    languages.find(isCurrentLanguage) ?? languages[0];

  return (
    <header className="siteHeader">
      <div className="wrap headerInner">
        <a aria-label={brandName} className="brand" href={brandHref}>
          <svg
            aria-hidden="true"
            className="brandMark"
            viewBox="100 30 440 160"
            xmlns="http://www.w3.org/2000/svg"
          >
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
        <div className="headerEnd">
          <nav className={navClassName} id="siteNav">
            {navItems.map(renderNavItem)}
          </nav>
          <span aria-hidden="true" className="navLangRule">
            |
          </span>
          <details className="langSwitch">
            <summary aria-label={languageLabel}>
              {currentLanguage.label}
            </summary>
            <div className="langMenu">{languages.map(renderLanguageOption)}</div>
          </details>
          <button
            aria-controls="siteNav"
            aria-expanded={isOpen}
            aria-label={menuToggle}
            className={menuButtonClassName}
            onClick={handleToggle}
            type="button"
          >
            <span className="visuallyHidden">{menuLabel}</span>
            <span aria-hidden="true" className="menuIcon">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
