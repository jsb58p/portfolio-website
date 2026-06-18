function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-grid">
        <div className="hero-text">
          <p className="eyebrow">Software Developer — Available for work</p>
          <h1 className="hero-title">
            Jacob
            <br />
            Biddinger
          </h1>
          <p className="hero-subtitle">
            I design and build reliable, well-tested web applications, from interface to database.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View projects</a>
            <a href="#contact" className="btn btn-ghost">Get in touch</a>
          </div>
        </div>
        <div className="hero-mark" aria-hidden="true">
          <svg viewBox="0 0 320 320" className="hero-svg">
            <circle cx="160" cy="160" r="158" className="ring ring-1"></circle>
            <circle cx="160" cy="160" r="118" className="ring ring-2"></circle>
            <circle cx="160" cy="160" r="78" className="ring ring-3"></circle>
            <line x1="160" y1="2" x2="160" y2="42" className="tick"></line>
            <line x1="160" y1="278" x2="160" y2="318" className="tick"></line>
            <line x1="2" y1="160" x2="42" y2="160" className="tick"></line>
            <line x1="278" y1="160" x2="318" y2="160" className="tick"></line>
          </svg>
        </div>
      </div>
      <a href="#about" className="scroll-cue" aria-label="Scroll to About section">Scroll</a>
    </section>
  )
}

export default Hero
