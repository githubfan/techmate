'use client';

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import HCaptcha from '@hcaptcha/react-hcaptcha';

export default function PartnerForm() {
  const [formData, setFormData] = useState({
    contactName: '',
    email: '',
    phone: '',
    OrganisationName: '',
    OrganisationType: '',
    OrganisationSize: '',
    partnershipInterests: [],
    budget: '',
    timeline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);
  const captchaRef = useRef(null);

  const handleInterestChange = (interest) => {
    setFormData(prev => ({
      ...prev,
      partnershipInterests: prev.partnershipInterests.includes(interest)
        ? prev.partnershipInterests.filter(i => i !== interest)
        : [...prev.partnershipInterests, interest]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate captcha
    if (!captchaToken) {
      alert('Please complete the captcha verification.');
      return;
    }
    
    setIsSubmitting(true);

    try {
      // Submit to Notion via API route (include captcha token)
      const notionResponse = await fetch('/api/submit-partner-interest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, captchaToken })
      });

      if (notionResponse.ok) {
        // Send confirmation email via EmailJS
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_PARTNER_TEMPLATE_ID,
          {
            contact_name: formData.contactName,
            email: formData.email,
            organization_name: formData.OrganisationName,
            organization_type: formData.OrganisationType,
            partnership_interests: formData.partnershipInterests.join(', '),
            message: formData.message
          },
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        );

        setSubmitted(true);
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Something went wrong. Please try again.');
    }

    setIsSubmitting(false);
  };

  const onCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const onCaptchaExpire = () => {
    setCaptchaToken(null);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-green-800 mb-2">Thank You!</h3>
        <p className="text-green-700">
          We've received your partnership inquiry and sent you a confirmation email. 
          Our partnerships team will be in touch soon!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm border p-8">
      <h3 className="text-2xl font-bold text-[#2F2F2F] mb-6 text-center">
        Partner with Techmate
      </h3>

      {/* Contact Information */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-[#2F2F2F] mb-2">
            Contact Name *
          </label>
          <input
            type="text"
            required
            value={formData.contactName}
            onChange={(e) => setFormData(prev => ({ ...prev, contactName: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2AB7CA]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#2F2F2F] mb-2">
            Email Address *
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2AB7CA]"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-[#2F2F2F] mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2AB7CA]"
        />
      </div>

      {/* Organisation Information */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-[#2F2F2F] mb-2">
          Organisation Name *
        </label>
        <input
          type="text"
          required
          value={formData.OrganisationName}
          onChange={(e) => setFormData(prev => ({ ...prev, OrganisationName: e.target.value }))}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2AB7CA]"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-[#2F2F2F] mb-2">
            Organisation Type
          </label>
          <select
            value={formData.OrganisationType}
            onChange={(e) => setFormData(prev => ({ ...prev, OrganisationType: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2AB7CA]"
          >
            <option value="">Select Type</option>
            <option value="tech-company">Technology Company</option>
            <option value="startup">Startup</option>
            <option value="corporation">Large Corporation</option>
            <option value="small-business">Small Business</option>
            <option value="nonprofit">Non-profit Organisation</option>
            <option value="educational-institution">Educational Institution</option>
            <option value="government">Government Agency</option>
            <option value="community-Organisation">Community Organisation</option>
            <option value="funding-Organisation">Funding Organisation</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-[#2F2F2F] mb-2">
            Organisation Size
          </label>
          <select
            value={formData.OrganisationSize}
            onChange={(e) => setFormData(prev => ({ ...prev, OrganisationSize: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2AB7CA]"
          >
            <option value="">Select Size</option>
            <option value="1-10">1-10 employees</option>
            <option value="11-50">11-50 employees</option>
            <option value="51-200">51-200 employees</option>
            <option value="201-1000">201-1000 employees</option>
            <option value="1000+">1000+ employees</option>
          </select>
        </div>
      </div>

      {/* Partnership Interests */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-[#2F2F2F] mb-3">
          Partnership Interests: *
        </label>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            { value: 'financial-sponsorship', label: 'Financial sponsorship' },
            { value: 'event-hosting', label: 'Host events/workshops' },
            { value: 'mentoring', label: 'Employee mentoring programs' },
            { value: 'guest-speaking', label: 'Guest speaking' },
            { value: 'work-experience', label: 'Work experience placements' },
            { value: 'internships', label: 'Internship opportunities' },
            { value: 'job-opportunities', label: 'Job opportunities' },
            { value: 'equipment-donation', label: 'Equipment/resource donation' },
            { value: 'venue-space', label: 'Venue/space provision' },
            { value: 'curriculum-development', label: 'Curriculum development' },
            { value: 'pro-bono-services', label: 'Pro bono services' },
            { value: 'csr-partnership', label: 'CSR partnership' }
          ].map(interest => (
            <label key={interest.value} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.partnershipInterests.includes(interest.value)}
                onChange={() => handleInterestChange(interest.value)}
                className="w-4 h-4 text-[#2AB7CA] border-gray-300 rounded focus:ring-[#2AB7CA]"
              />
              <span className="text-sm text-[#2F2F2F]">{interest.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Budget & Timeline */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-[#2F2F2F] mb-2">
            Budget Range (if applicable)
          </label>
          <select
            value={formData.budget}
            onChange={(e) => setFormData(prev => ({ ...prev, budget: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2AB7CA]"
          >
            <option value="">Select Budget</option>
            <option value="under-1k">Under £1,000</option>
            <option value="1k-5k">£1,000 - £5,000</option>
            <option value="5k-10k">£5,000 - £10,000</option>
            <option value="10k-25k">£10,000 - £25,000</option>
            <option value="25k-50k">£25,000 - £50,000</option>
            <option value="50k+">£50,000+</option>
            <option value="in-kind">In-kind contribution</option>
            <option value="to-discuss">To be discussed</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-[#2F2F2F] mb-2">
            Timeline
          </label>
          <select
            value={formData.timeline}
            onChange={(e) => setFormData(prev => ({ ...prev, timeline: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2AB7CA]"
          >
            <option value="">Select Timeline</option>
            <option value="immediate">Immediate (within 1 month)</option>
            <option value="short-term">Short-term (1-3 months)</option>
            <option value="medium-term">Medium-term (3-6 months)</option>
            <option value="long-term">Long-term (6+ months)</option>
            <option value="ongoing">Ongoing partnership</option>
            <option value="flexible">Flexible</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-[#2F2F2F] mb-2">
          Tell us more about your partnership goals
        </label>
        <textarea
          value={formData.message}
          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
          rows="4"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2AB7CA]"
          placeholder="Describe your Organisation's goals, CSR objectives, or how you'd like to support the Techmate community..."
        />
      </div>

      {/* hCaptcha */}
      {process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY && (
        <div className="flex justify-center">
          <HCaptcha
            ref={captchaRef}
            sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY}
            onVerify={onCaptchaChange}
            onExpire={onCaptchaExpire}
          />
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting || !formData.contactName || !formData.email || !formData.OrganisationName || formData.partnershipInterests.length === 0 || (process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY && !captchaToken)}
        className="w-full bg-[#F46036] hover:bg-[#e54d28] disabled:bg-gray-400 text-white px-6 py-3 rounded-lg font-medium transition-colors"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Partnership Inquiry'}
      </button>

      <p className="text-xs text-[#2F2F2F]/60 mt-4 text-center">
        By submitting this form, you agree to receive communications from Techmate about partnership opportunities.
      </p>
    </form>
  );
}
