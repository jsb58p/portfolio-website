import { useState } from 'react'
import useReveal from '../hooks/useReveal.js'

const INITIAL_FORM = { name: '', email: '', message: '' }

function Contact() {
  const [ref, isVisible] = useReveal()
  const [formData, setFormData] = useState(INITIAL_FORM)
  const [status, setStatus] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const [isSubmitting, setIsSubmitting] = useState(false)

  // Set VITE_CONTACT_API_URL in a .env file (local) and as an environment
  // variable in the GitHub Actions build (frontend repo secrets/variables),
  // pointing to your deployed Render backend, e.g.:
  // https://your-app-name.onrender.com/api/contact
  const contactApiUrl = import.meta.env.VITE_CONTACT_API_URL

  const handleSubmit = async (event) => {
    event.preventDefault()

    const form = event.target
    if (!form.checkValidity()) {
      setStatus('Please fill in all fields with a valid email address.')
      return
    }

    if (!contactApiUrl) {
      setStatus('Contact backend is not configured. Set VITE_CONTACT_API_URL.')
      return
    }

    setIsSubmitting(true)
    setStatus('Sending...')

    try {
      const response = await fetch(contactApiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Request failed')
      }

      setStatus('Message sent. Thanks for reaching out.')
      setFormData(INITIAL_FORM)
    } catch (err) {
      console.error(err)
      setStatus('Something went wrong sending your message. Please try again or email directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      ref={ref}
      className={`section section-dark reveal ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="section-inner contact-grid">
        <div className="section-heading">
          <p className="eyebrow">Contact</p>
          <h2>Let's talk</h2>
          <p className="contact-intro">
            Send a message using the form, or reach out directly by email or social profiles below.
          </p>
          <ul className="contact-list">
            <li><a href="mailto:jacobbiddinger@gmail.com">jacobbiddinger@gmail.com</a></li>
            <li>
              <a href="https://github.com/jsb58p" target="_blank" rel="noopener noreferrer">
                github.com/jsb58p
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/jacob-biddinger-718112190/" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/jacob-biddinger-718112190/
              </a>
            </li>
          </ul>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send message'}
          </button>
          <p className="form-status" role="status" aria-live="polite">{status}</p>
        </form>
      </div>
    </section>
  )
}

export default Contact
