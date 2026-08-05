import { useState } from 'react'

const NAV_LINKS = ['Services', 'Pricing', 'How It Works', 'About', 'Contact']

const FEATURES = [
  {
    icon: '£',
    title: 'No overblown packages',
    body: 'Agencies love to bundle you into contracts full of features you\'ll never use — then charge you a fortune for the privilege. My promise is simple: you get exactly what you need and nothing you don\'t. No filler, no fluff.',
    color: '#1a3d2b',
  },
  {
    icon: '⚡',
    title: 'Fast turnaround, no waiting',
    body: 'Most sites are live within 5–10 working days. I know time costs money when you\'re running a small business — so I move quickly, keep you in the loop, and don\'t disappear for weeks on end.',
    color: '#1a3d2b',
  },
  {
    icon: '☎',
    title: 'You deal with me, directly',
    body: 'No helpdesk tickets, no account managers, no being passed around. You speak to me — the person who actually builds your site. If something needs changing, just ask. I\'m not going to nickel-and-dime you for every small tweak.',
    color: '#1a3d2b',
  },
]

const SERVICES = [
  { name: 'New Website', desc: 'Built from scratch, mobile-ready, and optimised for Google.' },
  { name: 'Site Refresh', desc: 'Modernise an outdated site without starting over.' },
  { name: 'Content Updates', desc: 'New photos, updated pricing, fresh copy — done quickly.' },
  { name: 'Google My Business', desc: 'Get found locally with a properly set-up business listing.' },
  { name: 'SEO Basics', desc: 'Make sure local customers can actually find you online.' },
  { name: 'Ongoing Care', desc: 'Monthly plans so your site stays fast, secure, and current.' },
]

const STEPS = [
  {
    num: '01',
    title: 'Tell us what you need',
    body: 'A quick call or message is all it takes. We\'ll ask a few simple questions about your business and what you want your site to do.',
  },
  {
    num: '02',
    title: 'We build it',
    body: 'You\'ll get a draft to review, usually within a few days. Tell us what you think — we tweak until it\'s right.',
  },
  {
    num: '03',
    title: 'Go live',
    body: 'We handle the technical side — hosting, domain setup, everything. Your site goes live and starts working for you.',
  },
]

const TESTIMONIALS = [
  {
    quote: "I was quoted £3,500 by a local agency. These guys did a better job for a fraction of the price, and it was live in a week.",
    name: 'Dave Henson',
    trade: 'Plumber, Manchester',
    initials: 'DH',
  },
  {
    quote: "Anytime I need something changed — new prices, a photo, anything — it's done the same day. That's the kind of service I needed.",
    name: 'Sandra Mills',
    trade: 'Electrician, Bristol',
    initials: 'SM',
  },
  {
    quote: "I didn't think I needed a website but now I get 3–4 enquiries a week from it. Paid for itself in the first month.",
    name: 'Tom Rafferty',
    trade: 'Builder & Decorator, Leeds',
    initials: 'TR',
  },
]

const PRICING = [
  {
    name: 'Starter',
    price: '£299',
    period: 'one-off',
    desc: 'Perfect for getting online fast.',
    features: [
      'Up to 4 pages',
      'Mobile-friendly design',
      'Contact form',
      'Google Maps integration',
      '1 round of revisions',
    ],
    highlight: false,
  },
  {
    name: 'Professional',
    price: '£549',
    period: 'one-off',
    desc: 'Everything you need to look great and get found.',
    features: [
      'Up to 8 pages',
      'Custom design',
      'SEO setup',
      'Google My Business listing',
      'Photo gallery',
      '2 rounds of revisions',
    ],
    highlight: true,
  },
  {
    name: 'Care Plan',
    price: '£29',
    period: 'per month',
    desc: 'Keep your site fresh without the hassle.',
    features: [
      'Unlimited small updates',
      'Security & backups',
      'Performance monitoring',
      'Priority support',
    ],
    highlight: false,
  },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#faf9f5]/95 backdrop-blur-sm border-b border-[#e7e3d8]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-[#1a3d2b] flex items-center justify-center text-white text-sm font-bold" style={{ fontFamily: 'var(--font-display)' }}>S</span>
          <span className="font-semibold text-[#1c1917] text-lg" style={{ fontFamily: 'var(--font-display)' }}>SiteForge</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-[#57534e] hover:text-[#1a3d2b] text-sm font-medium transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 bg-[#1a3d2b] text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[#2d6a47] transition-colors"
        >
          Get a free quote
        </a>

        <button
          className="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 bg-[#1c1917] transition-all ${open ? 'rotate-45 translate-y-1' : ''}`} />
          <span className={`block h-0.5 bg-[#1c1917] transition-all ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 bg-[#1c1917] transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4 border-t border-[#e7e3d8] bg-[#faf9f5]">
          {NAV_LINKS.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-[#57534e] text-sm font-medium py-1"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex justify-center bg-[#1a3d2b] text-white text-sm font-semibold px-5 py-3 rounded-lg"
            onClick={() => setOpen(false)}
          >
            Get a free quote
          </a>
        </div>
      )}
    </nav>
  )
}

function Hero() {
  return (
    <section className="pt-32 pb-24 px-6 bg-[#faf9f5]" id="services">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-[#f0ede3] text-[#1a3d2b] text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
            Built for the little guy
          </div>
          <h1
            className="text-5xl md:text-6xl font-bold text-[#1a3d2b] leading-tight mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Your website. How you want it. <em>No surprises.</em>
          </h1>
          <p className="text-lg text-[#57534e] leading-relaxed mb-8">
            I've heard the same story from trades and small businesses time and again — big agency promises, amazing pitch, then a price tag that's just too high. I started SiteForge to change that. Simple websites, only the features you actually need, at a price that makes sense.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="inline-flex justify-center items-center bg-[#1a3d2b] text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-[#2d6a47] transition-colors text-base"
            >
              Get your free quote →
            </a>
            <a
              href="#how-it-works"
              className="inline-flex justify-center items-center border border-[#c9c4b8] text-[#1c1917] font-medium px-7 py-3.5 rounded-lg hover:border-[#1a3d2b] transition-colors text-base"
            >
              See how it works
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-6">
            {['No hidden fees', 'Live in days, not weeks', '5★ support'].map(badge => (
              <div key={badge} className="flex items-center gap-2 text-sm text-[#57534e]">
                <span className="w-5 h-5 rounded-full bg-[#f0ede3] flex items-center justify-center text-[#1a3d2b] text-xs font-bold">✓</span>
                {badge}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl shadow-[#1a3d2b]/10">
            <img
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=700&h=520&fit=crop&auto=format"
              alt="Electrician working — the kind of trade business we help get online"
              className="w-full object-cover"
              style={{ height: '380px' }}
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#1a3d2b]/40 to-transparent" />
          </div>
          <div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-lg shadow-black/8 px-5 py-4 border border-[#e7e3d8]">
            <div className="text-2xl font-bold text-[#1a3d2b]" style={{ fontFamily: 'var(--font-display)' }}>£299</div>
            <div className="text-xs text-[#78716c] mt-0.5">Starter sites from</div>
          </div>
          <div className="absolute -top-5 -right-5 bg-[#f59e0b] rounded-xl shadow-lg px-5 py-4">
            <div className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>5–10</div>
            <div className="text-xs text-amber-100 mt-0.5">days to go live</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Features() {
  return (
    <section className="py-20 px-6 bg-[#1a3d2b]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            I feel your frustration — that's why I'm here
          </h2>
          <p className="text-[#a3c4a8] text-lg max-w-2xl mx-auto">
            I've spent years building websites for companies of all sizes — from start-ups to corporates, from a few thousand to hundreds of thousands of pounds. The one thing that always stuck with me? The little guy always got the worst deal.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="bg-[#2d6a47]/30 border border-[#2d6a47] rounded-2xl p-8 hover:bg-[#2d6a47]/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-[#f59e0b] flex items-center justify-center text-white text-xl font-bold mb-5">
                {f.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                {f.title}
              </h3>
              <p className="text-[#a3c4a8] leading-relaxed text-sm">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section className="py-20 px-6 bg-[#f0ede3]" id="services-list">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-bold text-[#1a3d2b] mb-5" style={{ fontFamily: 'var(--font-display)' }}>
              Everything you need. Nothing you don't.
            </h2>
            <p className="text-[#57534e] leading-relaxed text-lg mb-8">
              I won't bundle you into a package stuffed with features you'll never touch. Tell me what your business needs, I'll build exactly that — simple, clean, and affordable.
            </p>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&auto=format"
              alt="Friendly professional ready to help your business succeed online"
              className="rounded-xl w-full object-cover shadow-md"
              style={{ height: '280px' }}
            />
          </div>

          <div className="grid grid-cols-1 gap-4">
            {SERVICES.map((s) => (
              <div
                key={s.name}
                className="bg-white rounded-xl px-6 py-5 flex items-start gap-4 border border-[#e7e3d8] hover:border-[#1a3d2b]/30 hover:shadow-sm transition-all"
              >
                <span className="w-2 h-2 rounded-full bg-[#f59e0b] mt-2 shrink-0" />
                <div>
                  <div className="font-semibold text-[#1c1917] mb-0.5">{s.name}</div>
                  <div className="text-sm text-[#78716c]">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  return (
    <section className="py-20 px-6 bg-[#faf9f5]" id="how-it-works">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#1a3d2b] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Simple as a phone call
          </h2>
          <p className="text-[#57534e] text-lg max-w-xl mx-auto">
            We've made the process as painless as possible. You don't need to know anything about websites — that's our job.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-8 left-1/4 right-1/4 h-px border-t-2 border-dashed border-[#d6d3d1]" />

          {STEPS.map((step, i) => (
            <div key={step.num} className="relative text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-5 border-2"
                style={{
                  fontFamily: 'var(--font-display)',
                  backgroundColor: i === 1 ? '#1a3d2b' : 'white',
                  color: i === 1 ? 'white' : '#1a3d2b',
                  borderColor: i === 1 ? '#1a3d2b' : '#d6d3d1',
                }}
              >
                {step.num}
              </div>
              <h3 className="text-xl font-semibold text-[#1c1917] mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                {step.title}
              </h3>
              <p className="text-[#57534e] leading-relaxed text-sm">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  return (
    <section className="py-20 px-6 bg-[#f0ede3]" id="pricing">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#1a3d2b] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Real prices for real budgets
          </h2>
          <p className="text-[#57534e] text-lg max-w-xl mx-auto">
            I set my prices with small business budgets in mind — not what the market will bear. What you see is what you pay. No retainers, no hidden extras, no quote that quietly doubles once the work starts.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PRICING.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 flex flex-col ${
                plan.highlight
                  ? 'bg-[#1a3d2b] text-white ring-2 ring-[#f59e0b]'
                  : 'bg-white border border-[#e7e3d8]'
              }`}
            >
              {plan.highlight && (
                <div className="inline-flex self-start bg-[#f59e0b] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                  Most popular
                </div>
              )}
              <div className="mb-1 text-sm font-semibold uppercase tracking-widest" style={{ color: plan.highlight ? '#a3c4a8' : '#78716c' }}>
                {plan.name}
              </div>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-4xl font-bold" style={{ fontFamily: 'var(--font-display)', color: plan.highlight ? 'white' : '#1a3d2b' }}>
                  {plan.price}
                </span>
                <span className="text-sm mb-1.5" style={{ color: plan.highlight ? '#a3c4a8' : '#78716c' }}>
                  {plan.period}
                </span>
              </div>
              <p className="text-sm mb-6" style={{ color: plan.highlight ? '#c8deca' : '#78716c' }}>
                {plan.desc}
              </p>
              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <span className="w-4 h-4 rounded-full bg-[#f59e0b] flex items-center justify-center text-white text-xs shrink-0 mt-0.5">✓</span>
                    <span style={{ color: plan.highlight ? '#e2f0e4' : '#57534e' }}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`w-full text-center font-semibold py-3 rounded-lg transition-colors text-sm ${
                  plan.highlight
                    ? 'bg-[#f59e0b] text-white hover:bg-[#d97706]'
                    : 'bg-[#1a3d2b] text-white hover:bg-[#2d6a47]'
                }`}
              >
                Get started
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-[#78716c] mt-8">
          Not sure which plan? <a href="#contact" className="text-[#1a3d2b] font-medium underline underline-offset-2">Drop us a message</a> and we'll work it out together.
        </p>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="py-20 px-6 bg-[#faf9f5]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#1a3d2b] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            What our clients say
          </h2>
          <p className="text-[#57534e] text-lg">Real feedback from real tradespeople.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-8 border border-[#e7e3d8] hover:shadow-md hover:border-[#1a3d2b]/20 transition-all"
            >
              <div className="flex gap-0.5 mb-5">
                {Array(5).fill(null).map((_, i) => (
                  <span key={i} className="text-[#f59e0b] text-sm">★</span>
                ))}
              </div>
              <blockquote className="text-[#1c1917] leading-relaxed mb-6 text-sm">
                "{t.quote}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1a3d2b] flex items-center justify-center text-white text-xs font-bold">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-[#1c1917] text-sm">{t.name}</div>
                  <div className="text-xs text-[#78716c]">{t.trade}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="py-20 px-6 bg-[#1a3d2b]" id="about">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=650&h=480&fit=crop&auto=format"
            alt="Small business owner working at their desk"
            className="rounded-2xl w-full object-cover shadow-xl"
            style={{ height: '360px' }}
          />
        </div>
        <div>
          <h2 className="text-4xl font-bold text-white mb-5" style={{ fontFamily: 'var(--font-display)' }}>
            I started SiteForge for the little guy
          </h2>
          <p className="text-[#a3c4a8] leading-relaxed text-lg mb-5">
            Over the years I've developed websites for start-ups, mid-sized companies, and large corporates — budgets ranging from a few thousand pounds to hundreds of thousands. But it was always the smaller companies that stuck with me.
          </p>
          <p className="text-[#a3c4a8] leading-relaxed text-base mb-8">
            Again and again I'd speak to trades people and small business owners who told me the same thing: agencies call with big promises that sound amazing, but the price tag is just too high. They'd end up squeezed into overblown contracts packed with stuff they'd never use. I felt their frustration — so I did something about it. SiteForge exists to give the little guy a fair shot. No big promises, no overpriced packages. Just your website, how you want it.
          </p>
          <div className="grid grid-cols-3 gap-6">
            {[['200+', 'sites built'], ['4.9★', 'average rating'], ['24h', 'support response']].map(([num, label]) => (
              <div key={label}>
                <div className="text-3xl font-bold text-[#f59e0b] mb-1" style={{ fontFamily: 'var(--font-display)' }}>{num}</div>
                <div className="text-xs text-[#a3c4a8] uppercase tracking-wide">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [form, setForm] = useState({ name: '', business: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="py-20 px-6 bg-[#f0ede3]" id="contact">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="text-4xl font-bold text-[#1a3d2b] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Let's get your business online
          </h2>
          <p className="text-[#57534e] leading-relaxed text-lg mb-8">
            Send us a message and we'll come back to you within one working day — usually much sooner. No obligation, no hard sell.
          </p>

          <div className="space-y-5">
            {[
              { icon: '📞', label: 'Phone', value: '0800 123 4567' },
              { icon: '✉️', label: 'Email', value: 'hello@siteforge.co.uk' },
              { icon: '🕐', label: 'Hours', value: 'Mon–Fri, 8am–6pm' },
            ].map(({ icon, label, value }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#1a3d2b] flex items-center justify-center text-base shrink-0">
                  {icon}
                </div>
                <div>
                  <div className="text-xs text-[#78716c] uppercase tracking-wide">{label}</div>
                  <div className="text-[#1c1917] font-medium">{value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 border border-[#e7e3d8] shadow-sm">
          {sent ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-[#1a3d2b] flex items-center justify-center text-white text-2xl mx-auto mb-4">✓</div>
              <h3 className="text-xl font-semibold text-[#1a3d2b] mb-2" style={{ fontFamily: 'var(--font-display)' }}>Message sent!</h3>
              <p className="text-[#57534e] text-sm">We'll be in touch within one working day.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-xl font-semibold text-[#1a3d2b] mb-6" style={{ fontFamily: 'var(--font-display)' }}>Get your free quote</h3>

              {[
                { id: 'name', label: 'Your name', type: 'text', placeholder: 'John Smith' },
                { id: 'business', label: 'Business name', type: 'text', placeholder: 'Smith Plumbing Ltd' },
                { id: 'phone', label: 'Phone number', type: 'tel', placeholder: '07700 000000' },
              ].map(({ id, label, type, placeholder }) => (
                <div key={id}>
                  <label htmlFor={id} className="block text-sm font-medium text-[#1c1917] mb-1.5">{label}</label>
                  <input
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    value={form[id as keyof typeof form]}
                    onChange={e => setForm({ ...form, [id]: e.target.value })}
                    className="w-full border border-[#d6d3d1] rounded-lg px-4 py-2.5 text-sm text-[#1c1917] placeholder-[#a8a29e] focus:outline-none focus:border-[#1a3d2b] focus:ring-1 focus:ring-[#1a3d2b] transition-colors"
                  />
                </div>
              ))}

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#1c1917] mb-1.5">Tell us a bit about what you need</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="e.g. New website for my plumbing business, 4–5 pages, need it to show my services and let customers contact me."
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  className="w-full border border-[#d6d3d1] rounded-lg px-4 py-2.5 text-sm text-[#1c1917] placeholder-[#a8a29e] focus:outline-none focus:border-[#1a3d2b] focus:ring-1 focus:ring-[#1a3d2b] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#1a3d2b] text-white font-semibold py-3 rounded-lg hover:bg-[#2d6a47] transition-colors text-sm"
              >
                Send my free quote request →
              </button>
              <p className="text-xs text-[#78716c] text-center">No obligation. We'll never spam or hard-sell.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-[#111a14] text-[#a3c4a8] py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-8 rounded-lg bg-[#f59e0b] flex items-center justify-center text-white text-sm font-bold" style={{ fontFamily: 'var(--font-display)' }}>S</span>
            <span className="font-semibold text-white text-lg" style={{ fontFamily: 'var(--font-display)' }}>SiteForge</span>
          </div>
          <p className="text-sm max-w-xs leading-relaxed">
            Affordable, professional websites for tradespeople and small businesses across the UK.
          </p>
        </div>
        <div className="flex flex-wrap gap-8 text-sm">
          {[['Services', NAV_LINKS]].map(([heading, links]) => (
            <div key={String(heading)}>
              <div className="text-white font-medium mb-3">{String(heading)}</div>
              <ul className="space-y-2">
                {(links as string[]).map(link => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-6xl mx-auto border-t border-[#1a3d2b] mt-10 pt-6 text-xs text-[#57534e] flex flex-col md:flex-row justify-between gap-2">
        <span>© 2025 SiteForge. All rights reserved.</span>
        <span>Built with care for UK small businesses.</span>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Services />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
