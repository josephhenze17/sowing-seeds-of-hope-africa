import { useEffect, useId, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { SITE } from '../site'

const ugandaLinks = [
  { to: '/uganda/schools', label: 'Schools' },
  { to: '/uganda/medical-center', label: 'Medical Center' },
  { to: '/uganda/other', label: 'Other' },
]

const kenyaLinks = [
  { to: '/kenya/school-fees', label: 'Supporting School Fees' },
  { to: '/kenya/other', label: 'Other Opportunities' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuId = useId()
  const location = useLocation()
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}${open ? ' open' : ''}`} ref={navRef}>
      <div className="nav-inner">
        <NavLink className="nav-brand" to="/" aria-label="Sowing Seeds of Hope Africa home">
          <img
            className="nav-logo"
            src="/images/logo.png"
            alt=""
            width={1133}
            height={521}
          />
        </NavLink>

        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
        </button>

        <nav className="nav-links" id={menuId}>
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'is-active' : undefined)}>
            Home
          </NavLink>

          <div className="nav-item">
            <NavLink to="/uganda" className={({ isActive }) => (isActive ? 'is-active' : undefined)}>
              Uganda
            </NavLink>
            <div className="nav-sub">
              {ugandaLinks.map((link) => (
                <NavLink key={link.to} to={link.to}>
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="nav-item">
            <NavLink to="/kenya" className={({ isActive }) => (isActive ? 'is-active' : undefined)}>
              Kenya
            </NavLink>
            <div className="nav-sub">
              {kenyaLinks.map((link) => (
                <NavLink key={link.to} to={link.to}>
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>

          <NavLink to="/donations" className={({ isActive }) => (isActive ? 'is-active' : undefined)}>
            Donations
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'is-active' : undefined)}>
            Contact
          </NavLink>
          <a className="nav-cta" href={SITE.donateUrl}>
            Give Hope
          </a>
        </nav>
      </div>
    </header>
  )
}
