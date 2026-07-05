import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

const links = [
  { to: '/', label: 'Home' },
  { to: '/our-story', label: 'Our Story' },
  { to: '/the-craft', label: 'The Craft' },
  { to: '/collections', label: 'Collections' },
  { to: '/made-for-you', label: 'Made for You' },
  { to: '/order', label: 'Order' },
  { to: '/journal', label: 'Journal' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-ink/90 backdrop-blur-md border-b border-gold-dim/30' : 'bg-transparent'
      }`}
    >
      <nav className="flex items-center justify-between px-6 md:px-12 py-4">
        <Link to="/" className="flex items-center gap-3 focus-gold">
          <img src={logo} alt="Qadam" className="h-10 w-10 md:h-12 md:w-12 object-contain" />
          <span className="hidden sm:block font-accent text-lg md:text-xl tracking-[0.2em] gold-text-shine">
            QADAM
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-8 font-ui text-xs tracking-[0.15em] uppercase">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `focus-gold transition-colors duration-300 hover:text-gold ${
                    isActive ? 'text-gold' : 'text-cream/80'
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          className="lg:hidden text-gold focus-gold"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <ul className="lg:hidden flex flex-col items-center gap-6 py-8 bg-ink/98 border-t border-gold-dim/30 font-ui text-sm tracking-[0.15em] uppercase">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} onClick={() => setOpen(false)} className="text-cream/80 hover:text-gold">
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
