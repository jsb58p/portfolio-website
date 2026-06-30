import { useState } from 'react'

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="site-header">
      <nav className="nav-bar" aria-label="Primary">
        <a href="#top" className="nav-logo" onClick={closeMenu}>
          FN<span className="nav-logo-dot">.</span>
        </a>

        <button
          className="nav-toggle"
          aria-expanded={isOpen}
          aria-controls="navMenu"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul id="navMenu" className={`nav-menu ${isOpen ? 'is-open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav-link" onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            {/* Replace with a real résumé file placed in /public */}
            <a href={`${import.meta.env.BASE_URL}resume.pdf`} className="nav-link nav-link-cta" download onClick={closeMenu}>
              Résumé
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav
