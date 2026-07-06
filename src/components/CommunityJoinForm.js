'use client';

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import HCaptcha from '@hcaptcha/react-hcaptcha';

const interestOptions = [
  { value: 'learning-coding', label: 'Learning coding skills' },
  { value: 'learning-digital-skills', label: 'Learning digital skills' },
  { value: 'cyber-security', label: 'Cyber security awareness' },
  { value: 'ai-literacy', label: 'AI literacy' },
  { value: 'career-guidance', label: 'Career guidance' },
  { value: 'networking', label: 'Networking opportunities' },
  { value: 'mentorship', label: 'Being mentored' },
  { value: 'volunteering', label: 'Volunteering and mentoring others' },
  { value: 'workshops', label: 'Attending workshops' },
  { value: 'events', label: 'Community events' },
];

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

    if (!captchaToken) {
      alert('Please complete the captcha verification.');
      return;
    }
    
    setIsSubmitting(true);

    try {
      const notionResponse = await fetch('/api/submit-community-interest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, captchaToken })
      });

      if (!notionResponse.ok) {
        const errorData = await notionResponse.json().catch(() => ({}));
        throw new Error(errorData.error || 'Failed to submit');
      }

      try {
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_COMMUNITY_TEMPLATE_ID,
          {
            to_name: formData.name,
            email: formData.email,
            phone: formData.phone,
            interests: formData.interests.join(', '),
            background: formData.background,
            tech_level: formData.techLevel,
            message: formData.message
          },
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        );
      } catch {
      }

      setSubmitted(true);
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
      <div className="panel" style={{ padding: '32px', textAlign: 'center' }}>
        <div className="feature-icon" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Thank you</h3>
        <p className="card-copy">
          We have received your interest and sent a confirmation email. We will be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="form-shell" style={{ maxWidth: '920px', margin: '0 auto' }}>
      <h3 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '28px' }}>Join the TECHMATE community</h3>

      <div className="form-row two">
        <div className="form-field">
          <label>Full Name *</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            className="input"
          />
        </div>
        <div className="form-field">
          <label>Email Address *</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            className="input"
          />
        </div>
      </div>

      <div className="form-field" style={{ marginTop: '16px' }}>
        <label>Phone (optional)</label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
          className="input"
        />
      </div>

      <div className="form-field" style={{ marginTop: '16px' }}>
        <label id="interest">Interest areas *</label>
        <div className="checkbox-grid">
          {interestOptions.map((interest) => (
            <label key={interest.value} className="checkbox-item">
              <input
                type="checkbox"
                checked={formData.interests.includes(interest.value)}
                onChange={() => handleInterestChange(interest.value)}
              />
              <span>{interest.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="form-row two" style={{ marginTop: '16px' }}>
        <div className="form-field">
          <label>Background</label>
          <select
            value={formData.background}
            onChange={(e) => setFormData(prev => ({ ...prev, background: e.target.value }))}
            className="select"
          >
            <option value="">Select background</option>
            <option value="student">Student</option>
            <option value="recent-graduate">Recent Graduate</option>
            <option value="career-changer">Career Changer</option>
            <option value="returning-to-work">Returning to Work</option>
            <option value="older-adult">Older Adult (50+)</option>
            <option value="unemployed">Currently Unemployed</option>
            <option value="underemployed">Underemployed</option>
            <option value="refugee-immigrant">Refugee or Immigrant</option>
            <option value="disability">Person with Disability</option>
            <option value="single-parent">Single Parent</option>
            <option value="rural-community">Rural Community Member</option>
            <option value="ethnic-minority">Ethnic Minority</option>
            <option value="lgbtq">LGBTQ+ Community</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-field">
          <label>Current Tech Level</label>
          <select
            value={formData.techLevel}
            onChange={(e) => setFormData(prev => ({ ...prev, techLevel: e.target.value }))}
            className="select"
          >
            <option value="">Select level</option>
            <option value="complete-beginner">Complete Beginner</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
            <option value="professional">Professional</option>
          </select>
        </div>
      </div>

      <div className="form-field" style={{ marginTop: '16px' }}>
        <label>Tell us about your goals or what you hope to achieve</label>
        <textarea
          value={formData.message}
          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
          className="textarea"
          placeholder="Share your goals, challenges, or what you hope to achieve with TECHMATE."
        />
      </div>

      {process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <HCaptcha
            ref={captchaRef}
            sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY}
            onVerify={onCaptchaChange}
            onExpire={onCaptchaExpire}
          />
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting || !formData.name || !formData.email || formData.interests.length === 0 || (process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY && !captchaToken)}
        className="submit-button"
      >
        {isSubmitting ? 'Submitting...' : 'Join TECHMATE Community'}
      </button>

      <p className="note-copy" style={{ textAlign: 'center', marginTop: '14px' }}>
        By submitting this form, you agree to receive communications from TECHMATE about events, opportunities, and community updates.
      </p>
    </form>
  );
}
