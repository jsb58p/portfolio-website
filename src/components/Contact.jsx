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

  // NOTE: This is a client-side-only form. Submitting it does not send an
  // email on its own, because GitHub Pages and other free static hosts do
  // not run server-side code. To make this form actually deliver messages,
  // connect it to a form-processing endpoint (for example, an endpoint
  // provided by a third-party form service) or build a separate backend.
  const handleSubmit = (event) => {
    event.preventDefault()

    const form = event.target
    if (!form.checkValidity()) {
      setStatus('Please fill in all fields with a valid email address.')
      return
    }

    setStatus('Message captured. Connect this form to a backend or form service to deliver it by email.')
    setFormData(INITIAL_FORM)
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
            <li><a href="mailto:[email protected]">[email protected]</a></li>
            <li>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                github.com/yourusername
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/yourusername
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
          <button type="submit" className="btn btn-primary">Send message</button>
          <p className="form-status" role="status" aria-live="polite">{status}</p>
        </form>
      </div>
    </section>
  )
}

export default Contact
