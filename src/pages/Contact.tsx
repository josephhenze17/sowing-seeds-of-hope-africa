import { useState } from 'react'
import type { FormEvent } from 'react'
import { toast } from 'sonner'
import { SITE } from '../site'
import { usePageMeta } from '../usePageMeta'
import { CtaButton } from '../components/CtaButton'
import { Spinner } from '@/components/ui/spinner'
import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const interests = [
  'Donations',
  'Uganda schools',
  'Medical center',
  'Kenya school fees',
  'A visit or partnership',
] as const

type FieldErrors = {
  name?: string
  email?: string
  message?: string
}

export function Contact() {
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [interest, setInterest] = useState<string>('Donations')
  const [errors, setErrors] = useState<FieldErrors>({})

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
    const message = String(data.get('message') || '').trim()
    const nextErrors: FieldErrors = {}

    if (!name) nextErrors.name = 'Enter your name.'
    if (!email) nextErrors.email = 'Enter your email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = 'Enter a valid email.'
    if (!message) nextErrors.message = 'Enter a message.'

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    const subject = encodeURIComponent(`Hope Africa: ${interest || 'a note'} from ${name || 'a friend'}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nInterest: ${interest}\n\n${message}\n\n— Sent from the Sowing Seeds of Hope Africa website`,
    )

    setSending(true)
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`
    toast.success('Opening your email app')
    setSent(true)
    form.reset()
    setInterest('Donations')
    window.setTimeout(() => setSending(false), 800)
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

        <form className="contact-form" onSubmit={onSubmit} noValidate>
          <FieldGroup>
            <Field data-invalid={errors.name ? true : undefined}>
              <FieldLabel htmlFor="name">Name</FieldLabel>
              <Input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                aria-invalid={errors.name ? true : undefined}
                aria-describedby={errors.name ? 'name-error' : undefined}
                className="h-11 bg-card"
              />
              <FieldError id="name-error">{errors.name}</FieldError>
            </Field>
            <Field data-invalid={errors.email ? true : undefined}>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                spellCheck={false}
                required
                aria-invalid={errors.email ? true : undefined}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className="h-11 bg-card"
              />
              <FieldError id="email-error">{errors.email}</FieldError>
            </Field>
            <Field>
              <FieldLabel htmlFor="interest">I am writing about</FieldLabel>
              <Select value={interest} onValueChange={(value) => setInterest(String(value ?? 'Donations'))}>
                <SelectTrigger id="interest" className="h-11 w-full min-w-0 bg-card">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {interests.map((item) => (
                      <SelectItem key={item} value={item}>
                        {item}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>
            <Field data-invalid={errors.message ? true : undefined}>
              <FieldLabel htmlFor="message">Message</FieldLabel>
              <Textarea
                id="message"
                name="message"
                rows={5}
                autoComplete="off"
                required
                aria-invalid={errors.message ? true : undefined}
                aria-describedby={errors.message ? 'message-error' : undefined}
                className="bg-card"
              />
              <FieldError id="message-error">{errors.message}</FieldError>
            </Field>
            <CtaButton type="submit" disabled={sending}>
              {sending ? (
                <>
                  <Spinner />
                  Opening email
                </>
              ) : (
                "I'd Like to Help"
              )}
            </CtaButton>
            {sent ? (
              <p className="form-note" role="status" aria-live="polite">
                Opening your email app. If nothing appears, write us at{' '}
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
              </p>
            ) : null}
          </FieldGroup>
        </form>
      </div>
    </section>
  )
}
