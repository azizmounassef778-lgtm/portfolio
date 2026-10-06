import React, { useEffect, useState } from 'react';

const links = [
  ['home', 'Home'],
  ['about', 'About'],
  ['skills', 'Skills'],
  ['projects', 'Projects'],
  ['contact', 'Contact'],
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    links.forEach(([id]) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`navbar${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}>
      <nav className="navbar-container" aria-label="Main navigation">
        <a href="#home" className="navbar-logo" onClick={close}>
          Aziz<span>.</span>
        </a>

        <div className="navbar-links" id="nav-menu">
          {links.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? 'is-active' : undefined}
              aria-current={active === id ? 'true' : undefined}
              onClick={close}
            >
              {label}
            </a>
          ))}
          <a href="#contact" className="navbar-button navbar-button-mobile" onClick={close}>
            Let's Talk
          </a>
        </div>

        <a href="#contact" className="navbar-button navbar-button-desktop">
          Let's Talk
        </a>

        <button
          type="button"
          className="navbar-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="nav-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
