import useReveal from '../hooks/useReveal.js'

const PROJECTS = [
  {
    name: 'SchedulerAI',
    image: './projects/project-1.png',
    description:
      'AI calendar app that takes a simple prompt and constraints, and turns it into a day-by-day outline. Syncs with Google Calendar.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    liveUrl: 'https://schedulerai-frontend-eta.vercel.app/',
    codeUrl: 'https://github.com/jsb58p/ai-calendar',
  },
  {
    name: 'Cold Chain Monitoring',
    image: './projects/project-2.png',
    description:
      'Blockchain supply chain monitoring. Takes temperature/humidity data, records breaches on the blockchain, and makes all data accessible by pinning to an IPFS.',
    tags: ['TypeScript', 'Express', 'Docker'],
    liveUrl: '#',
    codeUrl: 'https://github.com/jsb58p/Blockchain--Supply-Chain-Temperature-Humidity',
  },
  {
    name: 'Automotive Repair Database',
    image: './projects/project-3.png',
    description:
      'A database for tracking car repair orders in an auto shop.',
    tags: ['Python', 'Flask', 'SQLite'],
    liveUrl: '#',
    codeUrl: 'https://github.com/jsb58p/Automative-Repair-Database',
  },
  {
    name: 'Genetic Algorithms',
    image: './projects/project-4.png',
    description:
      'Created a fitness function for a genetic algorithm. The purpose is to use AI to find the best fit for class schedules given a set of constraints (instructor availability, class size, etc.)',
    tags: ['JavaScript', 'HTML/CSS'],
    liveUrl: '#',
    codeUrl: 'https://github.com/NWise-DrownedOctopus/Genetic-Algorithm-Project',
  },
]

function Projects() {
  const [ref, isVisible] = useReveal()

  return (
    <section
      id="projects"
      ref={ref}
      className={`section section-light reveal ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="section-inner">
        <div className="section-heading">
          <p className="eyebrow">Projects</p>
          <h2>Selected work</h2>
        </div>
        <div className="project-grid">
          {PROJECTS.map((project) => (
            <article className="project-card" key={project.name}>
              <div className="project-media">
                <img src={project.image} alt={project.name} />
              </div>
              <div className="project-body">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <ul className="project-tags">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <div className="project-links">
                  <a href={project.liveUrl} className="text-link">Live site</a>
                  <a href={project.codeUrl} className="text-link">Source code</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
