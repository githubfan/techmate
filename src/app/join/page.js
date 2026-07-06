import Link from 'next/link';
import CommunityJoinForm from '../../components/CommunityJoinForm';
import { AcademicCapIcon, BriefcaseIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

const benefits = [
  { icon: AcademicCapIcon, title: 'Free learning resources', copy: 'Access to workshops, tutorials, and hands-on learning sessions.' },
  { icon: ChatBubbleLeftRightIcon, title: 'Mentorship support', copy: 'Connect with experienced tech professionals for guidance.' },
  { icon: BriefcaseIcon, title: 'Career opportunities', copy: 'Job placements, internships, and networking events.' },
];

export default function JoinPage() {
  return (
    <div className="site-shell">
      <header className="site-nav scrolled">
        <Link href="/" className="site-logo">
          TECH<span>MATE</span>
        </Link>
        <nav className="site-nav-links" aria-label="Secondary navigation">
          <Link href="/" className="site-nav-link">Home</Link>
          <Link href="/partner" className="site-nav-link">Partner With Us</Link>
          <Link href="/join" className="site-cta">Join Community</Link>
        </nav>
      </header>

      <main>
        <section className="hero-section" style={{ minHeight: 'auto', paddingTop: 'var(--section-padding-top, 140px)', paddingBottom: 'var(--section-padding-bottom, 72px)' }}>
          <div className="hero-orb one" />
          <div className="hero-orb two" />
          <div className="hero-inner">
            <div className="hero-grid">
              <div>
                <div className="hero-badge">
                  <span className="hero-badge-dot" />
                  Community membership
                </div>

                <h1 className="hero-title" style={{ whiteSpace: 'normal'}}>Join the <span className="accent-text">TECHMATE</span> community.</h1>
                <p className="hero-copy">Take the first step toward building your digital confidence and connecting with an inclusive community that supports your journey.</p>
                <div className="hero-pills">
                  <span className="pill">Learning resources</span>
                  <span className="pill">Mentorship</span>
                  <span className="pill">Career growth</span>
                </div>
              </div>
              <div className="hero-aside">
                <div className="hero-aside-stack">
                  <div className="metric-card panel-soft">
                    <div className="metric-number">Free</div>
                    <div className="metric-label">Access to programs, workshops, and community support.</div>
                  </div>
                  <div className="metric-card panel-soft">
                    <div className="metric-number">Human</div>
                    <div className="metric-label">Guidance that is warm, practical, and judgment free.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-block" style={{ background: 'var(--background-soft)' }}>
          <div className="section-inner">
            <SectionTitle
              kicker="What you get"
              title="Membership benefits"
              copy="TECHMATE is open to everyone who wants to grow their digital skills and be part of an inclusive tech community."
              align="center"
            />
            <div className="grid-3" style={{ marginTop: '48px' }}>
              {benefits.map((benefit) => (
                <div className="feature-card" key={benefit.title} style={{ textAlign: 'left' }}>
                  <div className="feature-icon">
                    {(() => {
                      const Icon = benefit.icon;
                      return <Icon className="h-6 w-6" />;
                    })()}
                  </div>
                  <h3>{benefit.title}</h3>
                  <p className="card-copy">{benefit.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-block">
          <div className="section-inner">
            <SectionTitle kicker="Join now" title="Tell us about yourself." copy="The form below helps us understand how we can support you and what kind of opportunities you are looking for." align="center" />
            <div style={{ marginTop: '48px' }}>
              <CommunityJoinForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer-shell">
        <div className="section-inner">
          <div className="footer-bottom" style={{ borderTop: 'none', paddingTop: 0 }}>
            <p>© 2026 TECHMATE. All rights reserved. Opening doors to technology for everyone.</p>
            <Link href="/partner" className="accent-text" style={{ fontFamily: 'var(--font-syne)', fontWeight: 700 }}>Partner With Us</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionTitle({ kicker, title, copy, align = 'left' }) {
  return (
    <div className={align === 'center' ? 'text-center' : ''}>
      <span className="section-kicker">{kicker}</span>
      <h2 className="section-title">{title}</h2>
      <p className="section-copy" style={align === 'center' ? { marginLeft: 'auto', marginRight: 'auto' } : undefined}>{copy}</p>
    </div>
  );
}
