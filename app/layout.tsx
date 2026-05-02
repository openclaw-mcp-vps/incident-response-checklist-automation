import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'IncidentFlow — Automated Incident Response Playbooks',
  description: 'Dynamic incident checklists with real-time updates for DevOps and SRE teams. Automate your incident response playbooks based on severity and type.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="20ddca2e-2d99-4fba-81fd-24330126407f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
