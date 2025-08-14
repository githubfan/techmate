'use client';

import PartnerForm from '../../components/PartnerForm';

export default function PartnerPage() {
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
              <a href="/join" className="text-[#2F2F2F] hover:text-[#2AB7CA] px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Join Community
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F46036] to-[#d4481f] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Partner with Techmate
          </h1>
          <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Join us in creating pathways to technology careers. Together, we can build a more inclusive and diverse tech ecosystem.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#2F2F2F] text-center mb-12">
            Partnership Opportunities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2AB7CA] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#2F2F2F] mb-2">Corporate Training</h3>
              <p className="text-[#2F2F2F]/70">Upskill your workforce with customized tech programs.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFD166] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#2F2F2F] mb-2">Talent Pipeline</h3>
              <p className="text-[#2F2F2F]/70">Access to trained and ready tech professionals.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F46036] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#2F2F2F] mb-2">CSR Impact</h3>
              <p className="text-[#2F2F2F]/70">Measurable social responsibility and community impact.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2F2F2F] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#2F2F2F] mb-2">Innovation Labs</h3>
              <p className="text-[#2F2F2F]/70">Collaborative spaces for cutting-edge tech projects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#2F2F2F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Partnership Impact</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#2AB7CA] mb-2">85%</div>
              <p className="text-lg">Job Placement Rate</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#FFD166] mb-2">2,500+</div>
              <p className="text-lg">Lives Transformed</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#F46036] mb-2">150+</div>
              <p className="text-lg">Partner Organisations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PartnerForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8 border-t border-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#2F2F2F]/70">
            &copy; 2025 Techmate. All rights reserved. Building partnerships for tech inclusion.
          </p>
        </div>
      </footer>
    </div>
  );
}
