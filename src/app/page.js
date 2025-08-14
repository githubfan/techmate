'use client';

import { useState } from 'react';
import Image from 'next/image';
import { 
  AcademicCapIcon, 
  ArrowPathIcon, 
  UserIcon, 
  UsersIcon, 
  BriefcaseIcon, 
  HandRaisedIcon 
} from '@heroicons/react/24/outline';



export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    // Close mobile menu if open
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src="/techmate-logo.png" alt="Techmate" className="h-8 w-auto" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')} className="text-[#2F2F2F] hover:text-[#2AB7CA] px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
                <a href="#what-we-do" onClick={(e) => handleSmoothScroll(e, 'what-we-do')} className="text-[#2F2F2F] hover:text-[#2AB7CA] px-3 py-2 rounded-md text-sm font-medium transition-colors">What We Do</a>
                <a href="#join" onClick={(e) => handleSmoothScroll(e, 'join')} className="text-[#2F2F2F] hover:text-[#2AB7CA] px-3 py-2 rounded-md text-sm font-medium transition-colors">Join Us</a>
                <a href="#partners" onClick={(e) => handleSmoothScroll(e, 'partners')} className="text-[#2F2F2F] hover:text-[#2AB7CA] px-3 py-2 rounded-md text-sm font-medium transition-colors">Partners</a>
                <a href="#cta" onClick={(e) => handleSmoothScroll(e, 'cta')} className="bg-[#F46036] hover:bg-[#e54d28] text-white px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer inline-block">
                  Get Involved
                </a>
              </div>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-[#2F2F2F] hover:text-[#2AB7CA] p-2 cursor-pointer"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-[#FAF9F6]">
                <a 
                  href="#about" 
                  onClick={(e) => handleSmoothScroll(e, 'about')}
                  className="text-[#2F2F2F] hover:text-[#2AB7CA] block px-3 py-2 rounded-md text-base font-medium transition-colors"
                >
                  About
                </a>
                <a 
                  href="#what-we-do" 
                  onClick={(e) => handleSmoothScroll(e, 'what-we-do')}
                  className="text-[#2F2F2F] hover:text-[#2AB7CA] block px-3 py-2 rounded-md text-base font-medium transition-colors"
                >
                  What We Do
                </a>
                <a 
                  href="#join" 
                  onClick={(e) => handleSmoothScroll(e, 'join')}
                  className="text-[#2F2F2F] hover:text-[#2AB7CA] block px-3 py-2 rounded-md text-base font-medium transition-colors"
                >
                  Join Us
                </a>
                <a 
                  href="#partners" 
                  onClick={(e) => handleSmoothScroll(e, 'partners')}
                  className="text-[#2F2F2F] hover:text-[#2AB7CA] block px-3 py-2 rounded-md text-base font-medium transition-colors"
                >
                  Partners
                </a>
                <a 
                  href="#cta"
                  onClick={(e) => handleSmoothScroll(e, 'cta')}
                  className="bg-[#F46036] hover:bg-[#e54d28] text-white px-4 py-2 rounded-md text-base font-medium transition-colors w-full text-left cursor-pointer inline-block"
                >
                  Get Involved
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#2AB7CA] to-[#1a8a96] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[#2F2F2F] opacity-10"></div>
        
        {/* Geometric Shapes Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Circles */}
          <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-4 sm:w-8 h-4 sm:h-8 bg-[#FFD166] opacity-30 rounded-full animate-pulse"></div>
          <div className="absolute top-20 sm:top-40 right-10 sm:right-20 w-6 sm:w-12 h-6 sm:h-12 bg-white opacity-20 rounded-full"></div>
          <div className="absolute bottom-16 sm:bottom-32 left-1/4 w-3 sm:w-6 h-3 sm:h-6 bg-[#F46036] opacity-40 rounded-full animate-bounce"></div>
          <div className="absolute top-1/3 right-1/3 w-2 sm:w-4 h-2 sm:h-4 bg-[#FFD166] opacity-50 rounded-full"></div>
          
          {/* Triangles */}
          <div className="absolute top-8 sm:top-16 right-1/4 w-0 h-0 border-l-3 border-r-3 border-b-5 sm:border-l-6 sm:border-r-6 sm:border-b-10 border-l-transparent border-r-transparent border-b-white opacity-25"></div>
          <div className="absolute bottom-10 sm:bottom-20 right-8 sm:right-16 w-0 h-0 border-l-4 border-r-4 border-b-7 sm:border-l-8 sm:border-r-8 sm:border-b-14 border-l-transparent border-r-transparent border-b-[#FFD166] opacity-35"></div>
          <div className="absolute top-1/2 left-8 sm:left-16 w-0 h-0 border-l-2 border-r-2 border-b-4 sm:border-l-5 sm:border-r-5 sm:border-b-8 border-l-transparent border-r-transparent border-b-[#F46036] opacity-30"></div>
          
          {/* Squares and Rectangles */}
          <div className="absolute top-12 sm:top-24 left-1/3 w-5 sm:w-10 h-5 sm:h-10 bg-white opacity-15 transform rotate-45"></div>
          <div className="absolute bottom-20 sm:bottom-40 right-1/4 w-4 sm:w-8 h-6 sm:h-12 bg-[#FFD166] opacity-25 transform rotate-12"></div>
          <div className="absolute top-1/4 right-6 sm:right-12 w-3 sm:w-6 h-3 sm:h-6 bg-[#F46036] opacity-35 transform rotate-45 animate-spin" style={{animationDuration: '10s'}}></div>
          
          {/* Hexagons using CSS */}
          <div className="absolute top-16 sm:top-32 left-1/2 w-4 sm:w-8 h-4 sm:h-8 bg-white opacity-20 transform rotate-30" style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'}}>
          </div>
          <div className="absolute bottom-12 sm:bottom-24 left-10 sm:left-20 w-5 sm:w-10 h-5 sm:h-10 bg-[#FFD166] opacity-30 transform rotate-15" style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'}}>
          </div>
          
          {/* Lines/Dashes */}
          <div className="absolute top-1/3 left-1/5 w-8 sm:w-16 h-0.5 sm:h-1 bg-white opacity-25 transform rotate-45"></div>
          <div className="absolute bottom-1/3 right-1/5 w-6 sm:w-12 h-0.5 sm:h-1 bg-[#FFD166] opacity-35 transform -rotate-12"></div>
          <div className="absolute top-2/3 left-1/3 w-4 sm:w-8 h-0.5 sm:h-1 bg-[#F46036] opacity-40 transform rotate-90"></div>
          
          {/* Plus signs */}
          <div className="absolute top-6 sm:top-12 right-1/3 text-white opacity-20 text-lg sm:text-2xl">+</div>
          <div className="absolute bottom-6 sm:bottom-12 left-1/3 text-[#FFD166] opacity-30 text-base sm:text-xl">+</div>
          
          {/* Dots pattern */}
          <div className="absolute top-1/4 left-6 sm:left-12 flex space-x-1">
            <div className="w-0.5 sm:w-1 h-0.5 sm:h-1 bg-white opacity-30 rounded-full"></div>
            <div className="w-0.5 sm:w-1 h-0.5 sm:h-1 bg-white opacity-30 rounded-full"></div>
            <div className="w-0.5 sm:w-1 h-0.5 sm:h-1 bg-white opacity-30 rounded-full"></div>
          </div>
          <div className="absolute bottom-1/4 right-10 sm:right-20 flex flex-col space-y-1">
            <div className="w-0.5 sm:w-1 h-0.5 sm:h-1 bg-[#FFD166] opacity-40 rounded-full"></div>
            <div className="w-0.5 sm:w-1 h-0.5 sm:h-1 bg-[#FFD166] opacity-40 rounded-full"></div>
            <div className="w-0.5 sm:w-1 h-0.5 sm:h-1 bg-[#FFD166] opacity-40 rounded-full"></div>
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Opening Doors to Technology
              <span className="block">
                <span className="text-white">for </span>
                <span className="bg-gradient-to-r from-[#FFEB3B] to-[#FFC107] bg-clip-text text-transparent font-extrabold">
                  everyone
                </span>
              </span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Breaking down barriers and creating pathways into the technology sector for people from underrepresented groups.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/join" className="bg-[#F46036] hover:bg-[#e54d28] text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors shadow-lg cursor-pointer inline-block text-center">
                Join Our Community
              </a>
              <a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')} className="bg-transparent hover:bg-white text-white hover:text-[#2AB7CA] px-8 py-4 rounded-lg text-lg font-medium transition-colors border-2 border-white cursor-pointer inline-block text-center">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-[#2F2F2F] mb-6">About Techmate</h2>
                  <p className="text-lg text-[#2F2F2F]/80 mb-6 leading-relaxed">
                  Techmate is a community-driven initiative dedicated to breaking down barriers and creating accessible pathways into the technology sector. We believe that everyone, regardless of their background, age, or previous experience, deserves the opportunity to thrive in today's digital world.
                  </p>
                  <p className="text-lg text-[#2F2F2F]/80 mb-6 leading-relaxed">
                  Through free and low-cost workshops, mentoring programs, and community events, we're building bridges between underrepresented groups and the tech industry. Our mission is simple: open doors, create opportunities, and ensure no one is left behind in the digital revolution.
                  </p>

                    </div>
                    
                    <div className="relative h-full">
                      <div className="bg-gradient-to-br from-[#2AB7CA] to-[#1a8a96] rounded-2xl relative overflow-hidden flex items-center justify-center p-8">
                      <div className="relative w-full h-80 sm:h-96 bg-white rounded-xl p-6">
                      <Image 
                      src="/about-image.jpg" 
                      alt="About Techmate" 
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-lg"
                      />
                      </div>

                      {/* Decorative elements */}
                      <div className="absolute top-4 right-4 w-8 h-8 bg-[#FFD166] opacity-30 rounded-full"></div>
                      <div className="absolute bottom-4 left-4 w-6 h-6 bg-[#F46036] opacity-40 rounded-full"></div>
                      <div className="absolute top-1/2 right-8 w-4 h-4 bg-white opacity-25 rounded-full"></div>
                      </div>
                    </div>
                    </div>
                    
                    {/* Values Section */}
                <div className="text-center mb-16">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#2F2F2F] mb-4">Our Values</h3>
                <p className="text-xl text-[#2F2F2F]/70 max-w-3xl mx-auto">
                  Everything we do is guided by these core principles that drive our mission forward.
                </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 rounded-lg bg-[#FAF9F6] border border-[#FAF9F6]/50 shadow-sm">
                  <div className="w-16 h-16 bg-[#2AB7CA] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#2F2F2F] mb-2">Empower</h3>
                  <p className="text-[#2F2F2F]/70">Provide individuals with the knowledge and tools they need to succeed in tech.</p>
                </div>
                
                <div className="text-center p-6 rounded-lg bg-[#FAF9F6] border border-[#FAF9F6]/50 shadow-sm">
                  <div className="w-16 h-16 bg-[#FFD166] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#2F2F2F] mb-2">Connect</h3>
                  <p className="text-[#2F2F2F]/70">Bridge the community with tech organisations for mentoring and career development.</p>
                </div>
                
                <div className="text-center p-6 rounded-lg bg-[#FAF9F6] border border-[#FAF9F6]/50 shadow-sm">
                  <div className="w-16 h-16 bg-[#F46036] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#2F2F2F] mb-2">Support</h3>
                  <p className="text-[#2F2F2F]/70">Promote digital inclusion for older generations and build confidence online.</p>
                </div>
                </div>
              </div>
              </section>

              {/* What We Do Section */}
      <section id="what-we-do" className="py-20 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2F2F2F] mb-4">What We Do</h2>
            <p className="text-xl text-[#2F2F2F]/70 max-w-3xl mx-auto">
              We run free or low-cost events, workshops, and learning sessions covering essential tech skills for everyone.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-white/50">
              <div className="w-12 h-12 bg-[#2AB7CA] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#2F2F2F] mb-3">Practical Coding Skills</h3>
              <p className="text-[#2F2F2F]/70 mb-4">From beginner-friendly HTML to Python, data analysis, and beyond.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-white/50">
              <div className="w-12 h-12 bg-[#FFD166] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#2F2F2F] mb-3">Cyber Security Awareness</h3>
              <p className="text-[#2F2F2F]/70 mb-4">Stay safe online and protect your personal data.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-white/50">
              <div className="w-12 h-12 bg-[#F46036] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#2F2F2F] mb-3">AI Literacy</h3>
              <p className="text-[#2F2F2F]/70 mb-4">Understanding artificial intelligence and how to use it responsibly.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-white/50">
              <div className="w-12 h-12 bg-[#2AB7CA] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#2F2F2F] mb-3">Digital Footprint Education</h3>
              <p className="text-[#2F2F2F]/70 mb-4">Managing your online presence for personal and professional success.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-white/50">
              <div className="w-12 h-12 bg-[#FFD166] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#2F2F2F] mb-3">Essential Digital Skills</h3>
              <p className="text-[#2F2F2F]/70 mb-4">Navigate the internet, use productivity tools, and communicate effectively online.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-white/50">
              <div className="w-12 h-12 bg-[#F46036] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#2F2F2F] mb-3">Technology for Everyday Life</h3>
              <p className="text-[#2F2F2F]/70 mb-4">Smartphone basics, online banking, video calling, and avoiding scams for older adults.</p>
            </div>
          </div>
        </div>
      </section>

        <section id="join" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2F2F2F] mb-4">Who Can Join?</h2>
          <p className="text-xl text-[#2F2F2F]/70 max-w-3xl mx-auto">
            Techmate is open to everyone who wants to grow their digital skills and be part of an inclusive tech community.
          </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="text-center p-6">
            <div className="w-20 h-20 bg-[#2AB7CA] rounded-full flex items-center justify-center mx-auto mb-4">
              <AcademicCapIcon className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-lg font-bold text-[#2F2F2F] mb-2">Students & Young People</h3>
            <p className="text-[#2F2F2F]/70">Curious about tech and looking to explore career opportunities.</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-20 h-20 bg-[#FFD166] rounded-full flex items-center justify-center mx-auto mb-4">
              <ArrowPathIcon className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-lg font-bold text-[#2F2F2F] mb-2">Career Changers</h3>
            <p className="text-[#2F2F2F]/70">Looking to transition into the tech industry from other fields.</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-20 h-20 bg-[#F46036] rounded-full flex items-center justify-center mx-auto mb-4">
              <UserIcon className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-lg font-bold text-[#2F2F2F] mb-2">Older Adults</h3>
            <p className="text-[#2F2F2F]/70">Want to improve digital skills and confidence with technology.</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-20 h-20 bg-[#2AB7CA] rounded-full flex items-center justify-center mx-auto mb-4">
              <UsersIcon className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-lg font-bold text-[#2F2F2F] mb-2">Underrepresented Groups</h3>
            <p className="text-[#2F2F2F]/70">Anyone wanting to gain digital skills and confidence in tech.</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-20 h-20 bg-[#FFD166] rounded-full flex items-center justify-center mx-auto mb-4">
              <BriefcaseIcon className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-lg font-bold text-[#2F2F2F] mb-2">Industry Professionals</h3>
            <p className="text-[#2F2F2F]/70">Want to give back through mentoring, coaching, or guest speaking.</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-20 h-20 bg-[#F46036] rounded-full flex items-center justify-center mx-auto mb-4">
              <HandRaisedIcon className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-lg font-bold text-[#2F2F2F] mb-2">Community Leaders</h3>
            <p className="text-[#2F2F2F]/70">Leading local initiatives and helping to spread digital skills in their communities.</p>
          </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
      <section id="partners" className="py-20 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2F2F2F] mb-4">Partner with Techmate</h2>
            <p className="text-xl text-[#2F2F2F]/70 max-w-3xl mx-auto">
              Join us as part of your Corporate Social Responsibility efforts and help build a stronger, more diverse future workforce.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-[#2AB7CA] rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-bold text-[#2F2F2F] mb-2">Host Events</h3>
              <p className="text-sm text-[#2F2F2F]/70">Speak at seminars and workshops</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-[#FFD166] rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-[#2F2F2F] mb-2">Mentoring</h3>
              <p className="text-sm text-[#2F2F2F]/70">Provide guidance to our members</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-[#F46036] rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14V6.5" />
                </svg>
              </div>
              <h3 className="font-bold text-[#2F2F2F] mb-2">Work Experience</h3>
              <p className="text-sm text-[#2F2F2F]/70">Offer placements for young people</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-[#2AB7CA] rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-[#2F2F2F] mb-2">Sponsor</h3>
              <p className="text-sm text-[#2F2F2F]/70">Support events and materials</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section id="cta" className="py-20 bg-[#2F2F2F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-[#FAF9F6]/80">
            Join our community today and be part of opening doors to technology for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/join" className="bg-[#F46036] hover:bg-[#e54d28] text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors shadow-lg cursor-pointer inline-block text-center">
              Join Our Community
            </a>
            <a href="/partner" className="bg-[#2AB7CA] hover:bg-[#1a8a96] text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors shadow-lg cursor-pointer inline-block text-center">
              Become a Partner
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <img src="/techmate-logo.png" alt="Techmate" className="h-8 w-auto mb-4" />
              <p className="text-[#2F2F2F]/70 mb-4 max-w-md">
                Opening doors to technology for everyone. 
              </p>
              <div className="flex space-x-4">
                <a href="https://twitter.com/techmate" target="_blank" rel="noopener noreferrer" className="bg-[#FAF9F6] hover:bg-[#f0ede8] p-2 rounded-full transition-colors cursor-pointer inline-block">
                  <svg className="w-5 h-5 text-[#2F2F2F]/70" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com/company/techmate" target="_blank" rel="noopener noreferrer" className="bg-[#FAF9F6] hover:bg-[#f0ede8] p-2 rounded-full transition-colors cursor-pointer inline-block">
                  <svg className="w-5 h-5 text-[#2F2F2F]/70" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://youtube.com/@techmate" target="_blank" rel="noopener noreferrer" className="bg-[#FAF9F6] hover:bg-[#f0ede8] p-2 rounded-full transition-colors cursor-pointer inline-block">
                  <svg className="w-5 h-5 text-[#2F2F2F]/70" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-[#2F2F2F] mb-4">Quick Links</h4>
              <ul className="space-y-2 text-[#2F2F2F]/70">
                <li><a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')} className="hover:text-[#2AB7CA] transition-colors">About Us</a></li>
                <li><a href="#what-we-do" onClick={(e) => handleSmoothScroll(e, 'what-we-do')} className="hover:text-[#2AB7CA] transition-colors">What We Do</a></li>
                <li><a href="#join" onClick={(e) => handleSmoothScroll(e, 'join')} className="hover:text-[#2AB7CA] transition-colors">Join Us</a></li>
                <li><a href="#partners" onClick={(e) => handleSmoothScroll(e, 'partners')} className="hover:text-[#2AB7CA] transition-colors">Partners</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-[#2F2F2F] mb-4">Contact</h4>
              <ul className="space-y-2 text-[#2F2F2F]/70">
                <li>hello@techmate.org</li>
                <li>+44 (0) 123 456 7890</li>
                <li className="text-[#FFD166] font-medium">Follow us on social media</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-[#FAF9F6] mt-8 pt-8 text-center text-[#2F2F2F]/70">
            <p>&copy; 2025 Techmate. All rights reserved. Sponsored by Success Mindset 365.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
