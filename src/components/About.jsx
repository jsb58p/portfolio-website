import useReveal from '../hooks/useReveal.js'

function About() {
  const [ref, isVisible] = useReveal()

  return (
    <section
      id="about"
      ref={ref}
      className={`section section-light reveal ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="section-inner about-grid">
        <div className="section-heading">
          <p className="eyebrow">About</p>
          <h2>Who I am</h2>
        </div>
        <div className="about-content">
          <p>
            I am a dedicated problem-solver with an emphasis on web development.
            From UI design, to state management, to unit tests, I have it covered.
          </p>
          <p>
            As a UMKC bachelor of computer science, I have an array of projects on
            my GitHub page. Some of these projects are listed below. They demonstrate skills in multiple
            areas of Computer Science: web development, database management, blockchain services, and more.
          </p>
          <dl className="fact-list">
            <div className="fact">
              <dt>Location</dt>
              <dd>Lees Summit, Missouri</dd>
            </div>
            <div className="fact">
              <dt>Education</dt>
              <dd>B.S. Computer Science, University of Missouri-Kansas City, 2026</dd>
            </div>
            <div className="fact">
              <dt>Focus</dt>
              <dd>Frontend &amp; Backend Web Development</dd>
            </div>
            <div className="fact">
              <dt>Email</dt>
              <dd><a href="mailto:[jacobbiddinger@gmail.com]">[Jacob Biddinger]</a></dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}

export default About
