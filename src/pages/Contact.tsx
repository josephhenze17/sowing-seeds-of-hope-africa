import { useState } from 'react'
import type { FormEvent } from 'react'
import { SITE } from '../site'
import { usePageMeta } from '../usePageMeta'

export function Contact() {
  const [sent, setSent] = useState(false)

  usePageMeta({
    title: 'Contact | Sowing Seeds of Hope Africa',
    description:
      'Write Sowing Seeds of Hope Africa about donations, school-fee support, visits, or partnership.',
    path: '/contact',
  })

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') || '').trim()
    const email = String(data.get('email') || '').trim()
    const interest = String(data.get('interest') || '').trim()
    const message = String(data.get('message') || '').trim()

    const subject = encodeURIComponent(`Hope Africa: ${interest || 'a note'} from ${name || 'a friend'}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nInterest: ${interest}\n\n${message}\n\n— Sent from the Sowing Seeds of Hope Africa website`,
    )

    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`
    setSent(true)
    form.reset()
  }

  return (
    <section className="section contact">
      <div className="container contact-grid">
        <div>
          <p className="section-kicker">Contact</p>
          <h1>Let’s plant the next step together.</h1>
          <p>
            Donations, a visit, school-fee questions, or a partnership. Write us and we will answer
            as soon as we can.
          </p>
          <p>
            Email{' '}
            <a className="text-link" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
          </p>
        </div>

        <form className="contact-form" onSubmit={onSubmit}>
          <label>
            Name
            <input name="name" type="text" autoComplete="name" required />
          </label>
          <label>
            Email
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label>
            I am writing about
            <select name="interest" defaultValue="Donations">
              <option>Donations</option>
              <option>Uganda schools</option>
              <option>Medical center</option>
              <option>Kenya school fees</option>
              <option>A visit or partnership</option>
            </select>
          </label>
          <label>
            Message
            <textarea name="message" rows={5} required />
          </label>
          <button className="btn btn-primary" type="submit">
            I'd Like to Help
          </button>
          {sent ? (
            <p className="form-note" role="status">
              Opening your email app. If nothing appears, write us at{' '}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  )
}
