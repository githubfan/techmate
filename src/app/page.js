'use client';

import Image from 'next/image';
import { useState } from 'react';
import {
  AcademicCapIcon,
  Bars3Icon,
  ChevronUpIcon,
  GlobeAltIcon,
  HandRaisedIcon,
  HeartIcon,
  MegaphoneIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  SparklesIcon,
  UserCircleIcon,
  UserGroupIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';

const stats = [
  { icon: AcademicCapIcon, number: '1 in 3', label: 'Adults lack basic digital skills' },
  { icon: RocketLaunchIcon, number: '85%', label: 'Of jobs require digital literacy' },
  { icon: HeartIcon, number: '0', label: 'People left behind is the goal' },
];

const audiences = [
  {
    icon: AcademicCapIcon,
    title: 'Young People',
    copy: 'Coding fundamentals, AI literacy, online safety, and practical digital confidence for school and career.',
    tag: 'Schools and youth clubs',
  },
  {
    icon: UserGroupIcon,
    title: 'Parents and Seniors',
    copy: 'Digital support, with guidance on screen time, social media, and AI tools to use technology with confidence.',
    tag: 'Libraries and community centres',
  },
  {
    icon: UserCircleIcon,
    title: 'Professionals & Businesses',
    copy: 'Essential digital skills, including AI literacy, productivity, online safety, and career development.',
    tag: 'Workshops and drop-in sessions',
  },
  {
    icon: HandRaisedIcon,
    title: 'Underrepresented Groups',
    copy: 'Culturally aware programs that open access, opportunity, and practical support where it is needed most.',
    tag: 'Partnership programs',
  },
];

const programs = [
  { number: '01', icon: GlobeAltIcon, title: 'Digital Foundations', copy: 'Essential skills for devices, email, internet navigation, and digital safety.', level: 'All audiences' },
  { number: '02', icon: SparklesIcon, title: 'AI Literacy', copy: 'How AI works, where it appears in daily life, and how to use it responsibly.', level: 'All levels' },
  { number: '03', icon: ShieldCheckIcon, title: 'Online Safety and Privacy', copy: 'Passwords, scam awareness, privacy basics, and safer digital habits.', level: 'Families and seniors' },
  { number: '04', icon: RocketLaunchIcon, title: 'Digital Skills for Work', copy: 'Productivity tools, workplace AI, remote collaboration, and professional presence online.', level: 'Adults and young people' },
  { number: '05', icon: AcademicCapIcon, title: 'Youth Coding and AI Club', copy: 'Weekly sessions where young people build, create, and experiment in a supportive environment.', level: 'Ages 8 to 18' },
  { number: '06', icon: UsersIcon, title: 'Train the Trainer', copy: 'Equipping teachers, volunteers, and community workers to spread digital skills further.', level: 'Community partners' },
];

const values = [
  { title: 'Accessibility', copy: 'Free or low-cost programs delivered in accessible spaces and formats.' },
  { title: 'Dignity', copy: 'Every participant is met with respect, patience, and zero judgment.' },
  { title: 'Community Led', copy: 'Curriculum and delivery are shaped by the people we serve.' },
  { title: 'Relevance', copy: 'Everything is taught in the context of work, family, safety, and opportunity.' },
  { title: 'Critical Thinking', copy: 'We teach people to question, evaluate, and use digital tools wisely.' },
  { title: 'Partnership', copy: 'We work with schools, libraries, employers, and public services to scale impact.' },
];


function SectionTitle({ kicker, title, copy, align = 'left' }) {
  return (
    <div className={align === 'center' ? 'text-center' : ''}>
      <span className="section-kicker">{kicker}</span>
      <h2 className="section-title">{title}</h2>
      {copy ? <p className="section-copy" style={align === 'center' ? { marginLeft: 'auto', marginRight: 'auto' } : undefined}>{copy}</p> : null}
    </div>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSmoothScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="site-shell">
      <header className={`site-nav ${mobileMenuOpen ? 'scrolled' : ''}`}>
        <a href="#home" className="site-logo" onClick={(event) => handleSmoothScroll(event, 'home')}>
          TECH<span>MATE</span>
        </a>

        <nav className="site-nav-links" aria-label="Primary navigation">
          <a href="#about" className="site-nav-link" onClick={(event) => handleSmoothScroll(event, 'about')}>About</a>
          <a href="#serve" className="site-nav-link" onClick={(event) => handleSmoothScroll(event, 'serve')}>Who We Serve</a>
          <a href="#programs" className="site-nav-link" onClick={(event) => handleSmoothScroll(event, 'programs')}>Programs</a>
          <a href="#founder" className="site-nav-link" onClick={(event) => handleSmoothScroll(event, 'founder')}>Founder</a>
          <a href="#contact" className="site-cta" onClick={(event) => handleSmoothScroll(event, 'contact')}>Get Involved</a>
        </nav>

        <button type="button" className="menu-button" aria-label="Open menu" onClick={() => setMobileMenuOpen((value) => !value)}>
          <Bars3Icon className="h-5 w-5" aria-hidden="true" />
        </button>
      </header>

      <div className={`mobile-panel ${mobileMenuOpen ? 'open' : ''}`}>
        <nav>
          <a href="#about" onClick={(event) => handleSmoothScroll(event, 'about')}>About</a>
          <a href="#serve" onClick={(event) => handleSmoothScroll(event, 'serve')}>Who We Serve</a>
          <a href="#programs" onClick={(event) => handleSmoothScroll(event, 'programs')}>Programs</a>
          <a href="#founder" onClick={(event) => handleSmoothScroll(event, 'founder')}>Founder</a>
          <a href="#contact" onClick={(event) => handleSmoothScroll(event, 'contact')}>Get Involved</a>
        </nav>
      </div>

      <main id="home">
        <section className="hero-section">
          <div className="hero-orb one" />
          <div className="hero-orb two" />
          <div className="hero-orb three" />

          <div className="hero-inner">
            <div className="hero-grid">
              <div style={{ maxWidth: '620px', justifySelf: 'start', textAlign: 'center' }}>
                <h1 className="hero-title">
                  TECH<span className="accent-text">MATE</span>
                </h1>
                <br />
                <div className="hero-badge">
                  <span className="hero-badge-dot" />
                  Digital Skills and AI Literacy
                </div>
                <p className="hero-copy">
                  Empowering every generation with digital and AI literacy so no one is left behind in the digital age.
                </p>
                <div className="hero-actions">
                  <a href="#contact" className="button-primary" onClick={(event) => handleSmoothScroll(event, 'contact')}>Get Involved</a>
                  <a href="#about" className="button-secondary" onClick={(event) => handleSmoothScroll(event, 'about')}>Learn More</a>
                </div>
              
                <div className="hero-pills" style={{ marginTop: '40px' }}>
                  <span className="pill">Young People</span>
                  <span className="pill">Parents and Seniors</span>
                  <span className="pill">Professionals & Businesses</span>
                  <span className="pill">Underrepresented Groups</span>
                </div>
              </div>

              <div className="hero-aside">
                <div className="panel-soft" style={{ height: '100%', minHeight: '300px', display: 'grid', alignContent: 'stretch' }}>
                  <div style={{ position: 'relative', borderRadius: '22px', overflow: 'hidden', border: '1px solid var(--line)', background: 'linear-gradient(160deg, rgba(255, 170, 0, 0.14), rgba(0, 194, 168, 0.1), rgba(17, 32, 64, 0.94))' }}>
                    <Image
                      src="/about-image.jpg"
                      alt="Dr Kalu Kalu, Founder and CEO of TECHMATE"
                      fill
                      sizes="(max-width: 900px) 100vw, 50vw"
                      style={{ objectFit: 'cover', objectPosition: 'center top' }}
                    />
                  </div>
        
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="stats-strip">
          {stats.map((stat) => (
            <div className="stat-card" key={stat.label}>
              <span className="stat-pill" aria-hidden="true">
                <stat.icon className="h-5 w-5" />
              </span>
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </section>

        <section id="about" className="section-block">
          <div className="section-inner">
            <div className="grid-2" style={{ alignItems: 'center' }}>
              <div>
                <SectionTitle
                  kicker="01 - About TECHMATE"
                  title={<>We bridge the<br />digital divide.</>}
                />
                <div className="quote-block" style={{ marginTop: '30px' }}>
                  Technology is for everyone. We make sure everyone knows it.
                </div>
                <p className="section-copy" style={{ marginTop: '22px' }}>
                  TECHMATE is a community agency built to ensure digital transformation lifts everyone, not just the people who already have access, resources, and familiarity with technology.
                </p>
                <p className="section-copy">
                  As AI reshapes work, education, healthcare, and civic life, the gap between those who understand these technologies and those who do not is widening. TECHMATE bridges it one person, one community at a time.
                </p>
                <div className="button-row" style={{ marginTop: '28px' }}>
                  <a href="#pitch" className="button-primary" onClick={(event) => handleSmoothScroll(event, 'pitch')}>Our Story</a>
                </div>
              </div>

              <div className="grid-2">
                <div className="feature-card">
                    <div className="feature-icon">
                      <MegaphoneIcon className="h-6 w-6" />
                    </div>
                  <h3>Our Mission</h3>
                  <p className="card-copy">To equip people of all ages and backgrounds with digital and AI literacy skills to participate fully in modern society.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon amber">
                      <GlobeAltIcon className="h-6 w-6" />
                    </div>
                  <h3>Our Vision</h3>
                  <p className="card-copy">A community where technology is a tool for equity, not a barrier to it.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="serve" className="section-block" style={{ background: 'var(--background-soft)' }}>
          <div className="section-inner">
            <SectionTitle
              kicker="02 - Who We Serve"
              title={<>Four communities.<br />One mission.</>}
              copy="TECHMATE was built around four core audiences, each with unique needs, barriers, and potential."
            />
            <div className="grid-2" style={{ marginTop: '48px' }}>
              {audiences.map((item) => (
                <div className="feature-card" key={item.title}>
                  <div className="feature-icon">
                    {(() => {
                      const Icon = item.icon;
                      return <Icon className="h-6 w-6" />;
                    })()}
                  </div>
                  <h3>{item.title}</h3>
                  <p className="card-copy">{item.copy}</p>
                  <div className="tag-row" style={{ marginTop: '18px' }}>
                    <span className="tag">{item.tag}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="programs" className="section-block">
          <div className="section-inner">
            <SectionTitle
              kicker="03 - Our Programs"
              title="What we teach."
              copy="Practical, relevant, and jargon free. Our programs are built around real life, real jobs, and real challenges."
            />
            <div className="grid-3" style={{ marginTop: '48px' }}>
              {programs.map((program) => (
                <div className="panel" key={program.title} style={{ padding: '26px' }}>
                  <div className="section-meta" style={{ justifyContent: 'space-between', marginBottom: '16px' }}>
                    <div className="feature-icon" style={{ marginBottom: 0 }}>
                      {(() => {
                        const Icon = program.icon;
                        return <Icon className="h-6 w-6" />;
                      })()}
                    </div>
                    <span className="badge-chip">{program.number}</span>
                  </div>
                  <h3>{program.title}</h3>
                  <p className="card-copy">{program.copy}</p>
                  <div className="tag-row" style={{ marginTop: '18px' }}>
                    <span className="tag">{program.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="values" className="section-block" style={{ background: 'var(--background-soft)' }}>
          <div className="section-inner">
            <SectionTitle
              kicker="04 - Our Values"
              title="What we stand for."
              copy="Six principles guide everything we do, from program design to how we speak with every person who walks through our doors."
            />
            <div className="grid-3" style={{ marginTop: '48px' }}>
              {values.map((value, index) => (
                <div className="value-card" key={value.title}>
                  <div className={`value-bar ${index % 3 === 1 ? 'amber' : index % 3 === 2 ? 'coral' : ''}`} style={{ width: '42px', height: '3px', borderRadius: '999px', marginBottom: '18px', background: index % 3 === 1 ? 'var(--accent)' : index % 3 === 2 ? 'var(--coral)' : 'var(--primary)' }} />
                  <h3>{value.title}</h3>
                  <p className="card-copy">{value.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="founder" className="section-block">
          <div className="section-inner">
            <SectionTitle kicker="05 - Meet the Founder" title={<>The person behind<br />the mission.</>} />

            <div className="grid-2" style={{ marginTop: '48px', alignItems: 'start' }}>
              <div className="founder-card" style={{ padding: '12px', position: 'relative', width: 'fit-content', maxWidth: '100%', justifySelf: 'start' }}>
                <div style={{ position: 'relative', width: 'clamp(230px, 24vw, 300px)', aspectRatio: '3 / 4', borderRadius: '18px', overflow: 'hidden', border: '1px solid var(--line)', background: 'linear-gradient(160deg, rgba(255, 170, 0, 0.12), rgba(0, 194, 168, 0.1), rgba(17, 32, 64, 0.94))' }}>
                  <Image
                    src="/about-photo.png"
                    alt="Dr Kalu Kalu, Founder and CEO of TECHMATE"
                    fill
                    sizes="(max-width: 900px) 100vw, 300px"
                    style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  />
                </div>
               
              </div>

              <div>
                <h3 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.05, marginBottom: '8px' }}>Dr Kalu Kalu</h3>
                <p className="accent-text" style={{ fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', fontSize: '0.8rem' }}>Founder and Chief Executive Officer · TECHMATE</p>
                <div className="quote-block" style={{ margin: '26px 0' }}>
                  Technology is for everyone. My mission is to make sure no one is left out.
                </div>
                <p className="section-copy">Dr Kalu Kalu is the Founder and CEO of TECHMATE, a community agency dedicated to closing the digital divide through accessible, human-centred digital and AI literacy education.</p>
                <p className="section-copy">With a deep commitment to equity and community empowerment, he established TECHMATE on a simple but powerful belief: that no one should be left behind in the digital age.</p>
                <div className="tag-row" style={{ marginTop: '24px' }}>
                  <span className="tag">Digital Equity</span>
                  <span className="tag">AI Literacy</span>
                  <span className="tag">Community Empowerment</span>
                  <span className="tag">Tech for Good</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pitch" className="section-block" style={{ background: 'linear-gradient(175deg, var(--background-soft) 0%, var(--background) 100%)' }}>
          <div className="section-inner">
            <SectionTitle kicker="06 - The Pitch" title={<>Why TECHMATE.<br />Why now.</>} />
            <div className="grid-2" style={{ marginTop: '48px' }}>
              <div>
                <div className="panel" style={{ padding: '24px', marginBottom: '18px' }}>
                  <h3>The Opportunity</h3>
                  <p className="card-copy">AI is embedded in job applications, healthcare, school tools, and daily services right now. Communities that do not invest in digital literacy today will face deeper exclusion within a decade.</p>
                </div>
                <div className="panel" style={{ padding: '24px', marginBottom: '18px' }}>
                  <h3>What We Deliver</h3>
                  <p className="card-copy">Workshops, drop-in sessions, one-to-one mentoring, train the trainer programs, and partnership commissions with schools, libraries, employers, and public services.</p>
                </div>
                <div className="panel" style={{ padding: '24px' }}>
                  <h3>The Ask</h3>
                  <p className="card-copy">We are seeking founding partners, funders, corporate sponsors, local government, and community organisations who believe digital equity is not optional.</p>
                </div>
              </div>
              <div className="grid-2">
                <div className="metric-card">
                  <div className="metric-number">1 in 3</div>
                  <div className="metric-label">Adults lack basic digital skills needed for everyday life and work.</div>
                </div>
                <div className="metric-card">
                  <div className="metric-number">85%</div>
                  <div className="metric-label">Of jobs now require digital literacy as a baseline skill.</div>
                </div>
                <div className="metric-card">
                  <div className="metric-number">2026</div>
                  <div className="metric-label">The year AI literacy becomes as essential as reading and writing.</div>
                </div>
                <div className="metric-card">
                  <div className="metric-number">0</div>
                  <div className="metric-label">People who should be left behind.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section-block" style={{ background: 'var(--background-soft)' }}>
          <div className="section-inner">
            <SectionTitle kicker="07 - Get Involved" title={<>Let us build something<br />that matters.</>} copy="Whether you are a partner, funder, volunteer, participant, or simply curious, we would love to hear from you." />

            <div className="grid-2" style={{ marginTop: '48px' }}>
              <div className="grid-2">
                <div className="info-card">
                  <div className="contact-icon">
                    <HandRaisedIcon className="h-5 w-5" />
                  </div>
                  <h3>Partner With Us</h3>
                  <p className="card-copy">Organisations, schools, and businesses supporting digital equity in the community.</p>
                </div>
                <div className="info-card">
                  <div className="contact-icon amber">
                    <HeartIcon className="h-5 w-5" />
                  </div>
                  <h3>Fund Our Work</h3>
                  <p className="card-copy">Trusts, foundations, and corporate funders. Impact reports and program proposals are ready.</p>
                </div>
                <div className="info-card">
                  <div className="contact-icon coral">
                    <UsersIcon className="h-5 w-5" />
                  </div>
                  <h3>Volunteer and Mentor</h3>
                  <p className="card-copy">Tech professionals and community members who want to give their time and skills.</p>
                </div>
                <div className="info-card">
                  <div className="contact-icon">
                    <AcademicCapIcon className="h-5 w-5" />
                  </div>
                  <h3>Join a Program</h3>
                  <p className="card-copy">Individuals and families looking to build digital confidence and AI skills.</p>
                </div>
              </div>

              <div className="panel" style={{ padding: '28px' }}>
                <h3 style={{ marginBottom: '18px' }}>Contact</h3>
                <p className="card-copy">Serving our local community and beyond. Available for partnerships across the region.</p>
                <div className="tag-row" style={{ marginTop: '22px' }}>
                  <span className="tag">info@techmatecommunity.org</span>
                </div>
                <div className="button-row" style={{ marginTop: '26px' }}>
                  <a href="/join" className="button-primary">Join Our Community</a>
                  <a href="/partner" className="button-secondary">Become a Partner</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-band section-block" style={{ paddingTop: '72px', paddingBottom: '72px' }}>
          <div className="section-inner">
            <div className="panel" style={{ padding: '34px', textAlign: 'center' }}>
              <h2 className="section-title" style={{ marginBottom: '14px' }}>Ready to get started?</h2>
              <p className="section-copy" style={{ marginLeft: 'auto', marginRight: 'auto' }}>Join our community today and help open doors to technology for everyone.</p>
              <div className="button-row" style={{ justifyContent: 'center', marginTop: '26px' }}>
                <a href="/join" className="button-primary">Join Our Community</a>
                <a href="/partner" className="button-secondary">Become a Partner</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer-shell">
        <div className="section-inner">
          <div className="footer-grid">
            <div>
              <div className="site-logo" style={{ marginBottom: '14px' }}>TECH<span>MATE</span></div>
              <p className="footer-copy" style={{ maxWidth: '280px' }}>Your guide to the digital world. Empowering every generation with digital and AI literacy.</p>
            </div>
            <div>
              <h4 style={{ marginBottom: '16px' }}>About</h4>
              <div className="footer-links">
                <a href="#about" onClick={(event) => handleSmoothScroll(event, 'about')}>Our Story</a>
                <a href="#values" onClick={(event) => handleSmoothScroll(event, 'values')}>Our Values</a>
                <a href="#pitch" onClick={(event) => handleSmoothScroll(event, 'pitch')}>The Pitch</a>
              </div>
            </div>
            <div>
              <h4 style={{ marginBottom: '16px' }}>Programs</h4>
              <div className="footer-links">
                <a href="#programs" onClick={(event) => handleSmoothScroll(event, 'programs')}>Digital Foundations</a>
                <a href="#programs" onClick={(event) => handleSmoothScroll(event, 'programs')}>AI Literacy</a>
                <a href="#programs" onClick={(event) => handleSmoothScroll(event, 'programs')}>Online Safety</a>
              </div>
            </div>
            <div>
              <h4 style={{ marginBottom: '16px' }}>Get Involved</h4>
              <div className="footer-links">
                <a href="#contact" onClick={(event) => handleSmoothScroll(event, 'contact')}>Partner With Us</a>
                <a href="#contact" onClick={(event) => handleSmoothScroll(event, 'contact')}>Fund Our Work</a>
                <a href="#contact" onClick={(event) => handleSmoothScroll(event, 'contact')}>Join a Program</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2026 TECHMATE Community Agency. All rights reserved.</p>
            <span className="accent-text" style={{ fontFamily: 'var(--font-syne)', fontWeight: 700 }}>No one gets left behind.</span>
          </div>
        </div>
      </footer>

      <a href="#home" className="back-to-top" onClick={(event) => handleSmoothScroll(event, 'home')} aria-label="Back to top">
        <ChevronUpIcon className="h-5 w-5" />
      </a>
    </div>
  );
}
