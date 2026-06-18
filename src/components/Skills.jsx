import useReveal from '../hooks/useReveal.js'

const SKILL_GROUPS = [
  {
    title: 'Languages',
    skills: [
      { name: 'Java', level: 5 },
      { name: 'C++', level: 4 },
      { name: 'JavaScript / TypeScript', level: 4 },
      { name: 'Python', level: 5 },
      { name: 'HTML & CSS', level: 5 },
      { name: 'SQL', level: 3 },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'React', level: 4 },
      { name: 'Node.js', level: 3 },
      { name: 'Express', level: 3 },
      { name: 'Tailwind CSS', level: 4 },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git & GitHub', level: 4 },
      { name: 'Docker', level: 2 },
      { name: 'VS Code', level: 5 },
      { name: 'Figma', level: 3 },
      { name: 'MySQL', level: 4 },
      { name: 'PostgreSQL', level: 3 },
      { name: 'Claude Code', level: 5 },
      { name: 'Google Cloud Console', level: 5 },
      { name: 'Vercel', level: 4 },
      { name: 'Render', level: 4 },
      { name: 'Oracle VirtualBox', level: 5 },
      { name: 'MongoDB Atlas', level: 3 },
      { name: 'Resend', level: 2 },
    ],
  },
]

function Skills() {
  const [ref, isVisible] = useReveal()

  return (
    <section
      id="skills"
      ref={ref}
      className={`section section-dark reveal ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="section-inner">
        <div className="section-heading">
          <p className="eyebrow">Skills</p>
          <h2>What I work with</h2>
        </div>
        <div className="skills-grid">
          {SKILL_GROUPS.map((group) => (
            <div className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <ul className="skill-list">
                {group.skills.map((skill) => (
                  <li key={skill.name}>
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-dots" data-level={skill.level}></span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
