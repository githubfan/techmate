import Link from 'next/link';
import PartnerForm from '../../components/PartnerForm';

const opportunities = [
  { icon: '🏢', title: 'Corporate training', copy: 'Upskill your workforce with customised digital and AI programs.' },
  { icon: '🧭', title: 'Talent pipeline', copy: 'Connect with people who are developing practical, job ready skills.' },
  { icon: '🌱', title: 'CSR impact', copy: 'Create measurable social value through community partnerships.' },
  { icon: '⚡', title: 'Innovation labs', copy: 'Collaborate on bold projects and learning spaces for the future.' },
];

export default function PartnerPage() {
  return (
    <div className="site-shell">
      <header className="site-nav scrolled">
        <Link href="/" className="site-logo">
          TECH<span>MATE</span>
        </Link>
        <nav className="site-nav-links" aria-label="Secondary navigation">
          <Link href="/" className="site-nav-link">Home</Link>
          <Link href="/join" className="site-nav-link">Join Community</Link>
          <Link href="/partner" className="site-cta">Partner With Us</Link>
        </nav>
      </header>

      <main>
        <section className="hero-section" style={{ minHeight: 'auto', paddingTop: '140px', paddingBottom: '72px' }}>
          <div className="hero-orb one" />
          <div className="hero-orb three" />
          <div className="hero-inner">
            <div className="hero-grid">
              <div>
                <div className="hero-badge">
                  <span className="hero-badge-dot" />
                  Partnership pathway
                </div>
                
                <h1 className="hero-title" style={{ whiteSpace: 'normal'}}>Partner with <span className="accent-text">TECHMATE</span>.</h1>
                <p className="hero-copy">Join us in creating pathways into technology careers and build a more inclusive tech ecosystem with practical community impact.</p>
                <div className="hero-pills">
                  <span className="pill">Host events</span>
                  <span className="pill">Mentoring</span>
                  <span className="pill">Work experience</span>
                </div>
              </div>
              <div className="hero-aside">
                <div className="hero-aside-stack">
                  <div className="metric-card panel-soft">
                    <div className="metric-number">85%</div>
                    <div className="metric-label">Job placement rate is the kind of impact partnerships can help create.</div>
                  </div>
                  <div className="metric-card panel-soft">
                    <div className="metric-number">150+</div>
                    <div className="metric-label">Potential partners and collaborators can shape the next phase.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-block" style={{ background: 'var(--background-soft)' }}>
          <div className="section-inner">
            <SectionTitle kicker="What we offer" title="Partnership opportunities" copy="Join us as part of your community impact strategy and help build a stronger, more diverse future workforce." align="center" />
            <div className="grid-4" style={{ marginTop: '48px' }}>
              {opportunities.map((item) => (
                <div className="feature-card" key={item.title}>
                  <div className="feature-icon coral">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p className="card-copy">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-block">
          <div className="section-inner">
            <SectionTitle kicker="Partner now" title="Tell us what you are building." copy="If you are interested in sponsoring, hosting, mentoring, or co-creating a program, start here." align="center" />
            <div style={{ marginTop: '48px' }}>
              <PartnerForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer-shell">
        <div className="section-inner">
          <div className="footer-bottom" style={{ borderTop: 'none', paddingTop: 0 }}>
            <p>© 2026 TECHMATE. All rights reserved. Building partnerships for tech inclusion.</p>
            <Link href="/join" className="accent-text" style={{ fontFamily: 'var(--font-syne)', fontWeight: 700 }}>Join Community</Link>
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
