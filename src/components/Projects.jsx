import useReveal from '../hooks/useReveal.js'
const PROJECTS = [
  {
    name: 'SchedulerAI',
    image: './projects/project-1.png',
    description:
      'AI calendar app that takes a simple prompt and constraints, and turns it into a day-by-day outline. Syncs with Google Calendar.',
    tags: ['TypeScript', 'React', 'Node.js'],
    liveUrl: 'https://schedulerai-frontend-eta.vercel.app/',
    codeUrl: 'https://github.com/jsb58p/ai-calendar',
  },
  {
    name: 'Cold Chain Monitoring',
    image: './projects/project-2.png',
    description:
      'Blockchain supply chain monitoring. Takes temperature/humidity data, records breaches on the blockchain, and makes all data accessible by pinning to an IPFS.',
    tags: ['Solidity', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Ethereum', 'Blockchain'],
    codeUrl: 'https://github.com/jsb58p/Blockchain--Supply-Chain-Temperature-Humidity',
  },
  {
    name: 'Automotive Repair Database',
    image: './projects/project-3.png',
    description:
      'A database for tracking car repair orders in an auto shop.',
    tags: ['PostGRE SQL', 'pgAdmin4'],
    codeUrl: 'https://github.com/jsb58p/Automative-Repair-Database',
  },
  {
    name: 'Genetic Algorithms',
    image: './projects/project-4.png',
    description:
      'Created a fitness function for a genetic algorithm. The purpose is to use AI to find the best fit for class schedules given a set of constraints (instructor availability, class size, etc.)',
    tags: ['Python', 'Pygame'],
    codeUrl: 'https://github.com/NWise-DrownedOctopus/Genetic-Algorithm-Project',
  },
  {
    name: 'BudgetBridge',
    image: './projects/project-5.png',
    description:
      'A personal finance app with a focus on visualization through charts and graphs. Hosted on Google Cloud and GitHub pages.',
    tags: ['Java', 'JavaScript', 'TypeScript', 'mySQL', 'Google Cloud Services'],
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
                  {project.liveUrl && (
                    <a href={project.liveUrl} className="text-link">Live site</a>
                  )}
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