'use client';

import CommunityJoinForm from '../../components/CommunityJoinForm';

export default function JoinPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="/"><img src="/techmate-logo.png" alt="Techmate" className="h-8 w-auto" /></a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="/" className="text-[#2F2F2F] hover:text-[#2AB7CA] px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </a>
              <a href="/partner" className="text-[#2F2F2F] hover:text-[#2AB7CA] px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Partner with Us
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2AB7CA] to-[#1a8a96] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Join the Techmate Community
          </h1>
          <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Take the first step towards building your tech skills and connecting with an inclusive community that supports your journey.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#2F2F2F] text-center mb-12">
            What You'll Get as a Member
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2AB7CA] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#2F2F2F] mb-2">Free Learning Resources</h3>
              <p className="text-[#2F2F2F]/70">Access to workshops, tutorials, and hands-on coding sessions.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFD166] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#2F2F2F] mb-2">Mentorship Support</h3>
              <p className="text-[#2F2F2F]/70">Connect with experienced tech professionals for guidance.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F46036] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 00-2 2H8a2 2 0 00-2-2V4M16 6h.01M8 6h.01M16 10h.01M8 10h.01M16 14h.01M8 14h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#2F2F2F] mb-2">Career Opportunities</h3>
              <p className="text-[#2F2F2F]/70">Job placements, internships, and networking events.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CommunityJoinForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8 border-t border-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#2F2F2F]/70">
            &copy; 2025 Techmate. All rights reserved. Opening doors to technology for everyone.
          </p>
        </div>
      </footer>
    </div>
  );
}
