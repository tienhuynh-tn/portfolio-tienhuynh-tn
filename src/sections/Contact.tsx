import { useMemo, useState, type ChangeEvent, type FormEvent } from 'react'
import Section from '../components/layout/Section'
import useRevealOnScroll from '../hooks/useRevealOnScroll'

type ContactFormState = {
  fullName: string
  email: string
  subject: string
  message: string
}

const INITIAL_STATE: ContactFormState = {
  fullName: '',
  email: '',
  subject: '',
  message: '',
}

function Contact() {
  const revealRef = useRevealOnScroll<HTMLDivElement>()
  const [formState, setFormState] = useState<ContactFormState>(INITIAL_STATE)
  const [submittedEmpty, setSubmittedEmpty] = useState(false)

  const isComplete = useMemo(
    () =>
      Object.values(formState)
        .map((value) => value.trim())
        .every(Boolean),
    [formState]
  )

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setFormState((prev) => ({ ...prev, [name]: value }))
    if (submittedEmpty) {
      setSubmittedEmpty(false)
    }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!isComplete) {
      setSubmittedEmpty(true)
      return
    }

    const body = `Name: ${formState.fullName}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    const mailto = `mailto:tien.huynhlt.tn@gmail.com?subject=${encodeURIComponent(
      formState.subject
    )}&body=${encodeURIComponent(body)}`

    window.location.href = mailto
  }

  return (
    <Section id="contact">
      <div className="reveal" ref={revealRef}>
        <h2 className="mb-6 text-center text-blue-900 text-3xl font-semibold">
          Get in touch
        </h2>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-5">
            <div>
              <h3 className="text-2xl font-bold">Let’s work together</h3>
              <p className="mt-3 max-w-xl text-slate-600 leading-relaxed">
                I’d love to learn about your goals and see how I can help turn
                ideas into reliable, well-crafted products. Whether you’re
                planning a new build, refining an existing system, or just
                exploring options, feel free to reach out.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-blue-900">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 6h16a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2zm0 2l8 5 8-5H4zm0 10h16V10l-8 5-8-5v8z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <div className="flex flex-col gap-1">
                  <span className="text-xs uppercase tracking-widest text-slate-500">
                    Email
                  </span>
                  <a
                    href="mailto:tien.huynhlt.tn@gmail.com"
                    className="font-medium text-blue-900 hover:text-blue-800"
                  >
                    tien.huynhlt.tn@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-blue-900">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 2.5a7 7 0 00-7 7c0 4.5 5.5 10.7 6.4 11.7.3.3.8.3 1.1 0 .9-1 6.5-7.2 6.5-11.7a7 7 0 00-7-7zm0 9.3a2.3 2.3 0 110-4.6 2.3 2.3 0 010 4.6z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <div className="flex flex-col gap-1">
                  <span className="text-xs uppercase tracking-widest text-slate-500">
                    Location
                  </span>
                  <span className="font-medium text-slate-900">
                    Ho Chi Minh, Vietnam
                  </span>
                </div>
              </div>
            </div>
          </div>

          <form
            className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="fullName" className="font-medium">
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-200"
                  placeholder="Your full name"
                  value={formState.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-medium">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-200"
                  placeholder="you@email.com"
                  value={formState.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="font-medium">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-200"
                placeholder="Project collaboration"
                value={formState.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="min-h-[140px] resize-y rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-200"
                placeholder="Tell me about your project or say hello."
                value={formState.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-900 px-4 py-2 font-medium text-white shadow-sm transition hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 disabled:cursor-not-allowed disabled:opacity-60"
              disabled={!isComplete}
              onClick={() => setSubmittedEmpty(false)}
            >
              <span>Send Message</span>
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M3 11.5l17-7-6.5 17-2.5-6-6-4z"
                  fill="currentColor"
                />
              </svg>
            </button>
            <p className="text-sm text-slate-500" aria-live="polite">
              {!isComplete && submittedEmpty
                ? 'Please fill in all fields to enable sending.'
                : 'Your message will open in your email client.'}
            </p>
          </form>
        </div>

        <div className="mt-6 border-t border-slate-200 pt-3">
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/tienhuynh-tn/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-slate-600 transition hover:bg-slate-100 hover:text-blue-900"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M6.94 8.5V20h-3V8.5h3zm-1.5-4a1.75 1.75 0 110 3.5 1.75 1.75 0 010-3.5zM20.5 20h-3v-6.1c0-1.45-.03-3.32-2.02-3.32-2.03 0-2.34 1.58-2.34 3.21V20h-3V8.5h2.88v1.57h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.6V20z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              href="https://github.com/tienhuynh-tn"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-slate-600 transition hover:bg-slate-100 hover:text-blue-900"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M12 2.25a9.75 9.75 0 00-3.08 19c.49.09.67-.21.67-.47v-1.7c-2.72.6-3.29-1.31-3.29-1.31-.44-1.1-1.08-1.4-1.08-1.4-.88-.6.07-.59.07-.59 1 .07 1.52 1.02 1.52 1.02.87 1.5 2.29 1.07 2.85.82.09-.64.34-1.08.62-1.33-2.17-.25-4.45-1.08-4.45-4.8 0-1.06.38-1.93 1-2.61-.1-.25-.43-1.25.1-2.6 0 0 .82-.26 2.7 1a9.3 9.3 0 014.92 0c1.87-1.26 2.7-1 2.7-1 .53 1.35.2 2.35.1 2.6.62.68 1 1.55 1 2.61 0 3.73-2.29 4.55-4.47 4.8.35.3.66.9.66 1.82v2.69c0 .26.18.57.68.47A9.75 9.75 0 0012 2.25z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              href="mailto:tien.huynhlt.tn@gmail.com"
              aria-label="Email"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-slate-600 transition hover:bg-slate-100 hover:text-blue-900"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M4 5h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V7a2 2 0 012-2zm0 2l8 5 8-5H4zm0 10h16V9l-8 5-8-5v8z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
          <div className="mt-2 text-center text-sm text-slate-500">
            © 2026 Tien Huynh (Fairy). Built with 💚 using React, TypeScript,
            Tailwind CSS, and late-night learning + milk tea.
            <br />
            Assisted by ChatGPT &amp; Codex.
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Contact
