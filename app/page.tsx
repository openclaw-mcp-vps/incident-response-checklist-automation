export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For DevOps &amp; SRE Teams
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Automated Incident Response{' '}
          <span className="text-[#58a6ff]">Playbooks</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Dynamic checklists that adapt to incident severity and type in real-time.
          Stop guessing during outages — let IncidentFlow guide your team to resolution.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors duration-200"
        >
          Start for $49/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required for 14-day trial</p>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[
            { icon: '⚡', title: 'Real-Time Updates', desc: 'WebSocket-powered live checklist sync across your entire team.' },
            { icon: '🎯', title: 'Severity-Aware', desc: 'Playbooks auto-adjust based on P1/P2/P3 severity and incident type.' },
            { icon: '🔗', title: 'Webhook Integrations', desc: 'Connect PagerDuty, Datadog, and Grafana to trigger playbooks automatically.' },
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-[#8b949e] text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold text-white text-center mb-10">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-sm mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$49</div>
          <p className="text-[#8b949e] mb-8">per month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited incidents & playbooks',
              'Real-time team collaboration',
              'Webhook integrations (PagerDuty, Datadog)',
              'Custom severity-based templates',
              'Audit logs & post-mortem exports',
              'Priority email support',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-200"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does the dynamic checklist generation work?',
              a: 'When an incident is created or triggered via webhook, IncidentFlow analyzes the severity level and incident type, then automatically populates a tailored checklist from your playbook library — no manual setup needed during an outage.',
            },
            {
              q: 'Can multiple team members work on the same incident?',
              a: 'Yes. Real-time WebSocket updates ensure every team member sees checklist progress instantly. You can assign tasks, leave notes, and track who completed each step.',
            },
            {
              q: 'Which monitoring tools can trigger playbooks automatically?',
              a: 'IncidentFlow supports inbound webhooks from PagerDuty, Datadog, Grafana, OpsGenie, and any tool that can send an HTTP POST. Custom webhook mappings let you define exactly which playbook fires for each alert type.',
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-[#8b949e] text-sm">
        © {new Date().getFullYear()} IncidentFlow. Built for teams who ship fast and recover faster.
      </footer>
    </main>
  )
}
