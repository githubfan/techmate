'use client';

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import HCaptcha from '@hcaptcha/react-hcaptcha';

export default function CommunityJoinForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interests: [],
    background: '',
    techLevel: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);
  const captchaRef = useRef(null);

  const handleInterestChange = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
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
      const notionResponse = await fetch('/api/submit-community-interest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, captchaToken })
      });

      if (notionResponse.ok) {
        // Send confirmation email via EmailJS
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_COMMUNITY_TEMPLATE_ID,
          {
            to_name: formData.name,
            email: formData.email,
            interests: formData.interests.join(', '),
            background: formData.background,
            tech_level: formData.techLevel,
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
          We've received your interest and sent you a confirmation email. 
          We'll be in touch soon!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm border p-8">
      <h3 className="text-2xl font-bold text-[#2F2F2F] mb-6 text-center">
        Join the Techmate Community
      </h3>

      {/* Personal Information */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-[#2F2F2F] mb-2">
            Full Name *
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
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
          Phone (Optional)
        </label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2AB7CA]"
        />
      </div>

      {/* Interest Areas */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-[#2F2F2F] mb-3">
          I'm interested in: *
        </label>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            { value: 'learning-coding', label: 'Learning coding skills' },
            { value: 'learning-digital-skills', label: 'Learning digital skills' },
            { value: 'cyber-security', label: 'Cyber security awareness' },
            { value: 'ai-literacy', label: 'AI literacy' },
            { value: 'career-guidance', label: 'Career guidance' },
            { value: 'networking', label: 'Networking opportunities' },
            { value: 'mentorship', label: 'Being mentored' },
            { value: 'volunteering', label: 'Volunteering/mentoring others' },
            { value: 'workshops', label: 'Attending workshops' },
            { value: 'events', label: 'Community events' }
          ].map(interest => (
            <label key={interest.value} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.interests.includes(interest.value)}
                onChange={() => handleInterestChange(interest.value)}
                className="w-4 h-4 text-[#2AB7CA] border-gray-300 rounded focus:ring-[#2AB7CA]"
              />
              <span className="text-sm text-[#2F2F2F]">{interest.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Background & Tech Level */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-[#2F2F2F] mb-2">
            Background
          </label>
          <select
            value={formData.background}
            onChange={(e) => setFormData(prev => ({ ...prev, background: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2AB7CA]"
          >
            <option value="">Select Background</option>
            <option value="student">Student</option>
            <option value="recent-graduate">Recent Graduate</option>
            <option value="career-changer">Career Changer</option>
            <option value="returning-to-work">Returning to Work</option>
            <option value="older-adult">Older Adult (50+)</option>
            <option value="unemployed">Currently Unemployed</option>
            <option value="underemployed">Underemployed</option>
            <option value="refugee-immigrant">Refugee/Immigrant</option>
            <option value="disability">Person with Disability</option>
            <option value="single-parent">Single Parent</option>
            <option value="rural-community">Rural Community Member</option>
            <option value="ethnic-minority">Ethnic Minority</option>
            <option value="lgbtq">LGBTQ+ Community</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-[#2F2F2F] mb-2">
            Current Tech Level
          </label>
          <select
            value={formData.techLevel}
            onChange={(e) => setFormData(prev => ({ ...prev, techLevel: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2AB7CA]"
          >
            <option value="">Select Level</option>
            <option value="complete-beginner">Complete Beginner</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
            <option value="professional">Professional</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-[#2F2F2F] mb-2">
          Tell us about your goals or what you hope to achieve
        </label>
        <textarea
          value={formData.message}
          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
          rows="4"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2AB7CA]"
          placeholder="Share your goals, challenges, or what you hope to achieve with Techmate..."
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
        disabled={isSubmitting || !formData.name || !formData.email || formData.interests.length === 0 || (process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY && !captchaToken)}
        className="w-full bg-[#F46036] hover:bg-[#e54d28] disabled:bg-gray-400 text-white px-6 py-3 rounded-lg font-medium transition-colors"
      >
        {isSubmitting ? 'Submitting...' : 'Join Techmate Community'}
      </button>

      <p className="text-xs text-[#2F2F2F]/60 mt-4 text-center">
        By submitting this form, you agree to receive communications from Techmate about events, opportunities, and community updates.
      </p>
    </form>
  );
}
