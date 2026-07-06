'use client';

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import HCaptcha from '@hcaptcha/react-hcaptcha';

const partnershipOptions = [
  { value: 'financial-sponsorship', label: 'Financial sponsorship' },
  { value: 'event-hosting', label: 'Host events and workshops' },
  { value: 'mentoring', label: 'Employee mentoring programs' },
  { value: 'guest-speaking', label: 'Guest speaking' },
  { value: 'work-experience', label: 'Work experience placements' },
  { value: 'internships', label: 'Internship opportunities' },
  { value: 'job-opportunities', label: 'Job opportunities' },
  { value: 'equipment-donation', label: 'Equipment or resource donation' },
  { value: 'venue-space', label: 'Venue or space provision' },
  { value: 'curriculum-development', label: 'Curriculum development' },
  { value: 'pro-bono-services', label: 'Pro bono services' },
  { value: 'csr-partnership', label: 'CSR partnership' },
];

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

    if (!captchaToken) {
      alert('Please complete the captcha verification.');
      return;
    }
    
    setIsSubmitting(true);

    try {
      const notionResponse = await fetch('/api/submit-partner-interest', {
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
          process.env.NEXT_PUBLIC_EMAILJS_PARTNER_TEMPLATE_ID,
          {
            contact_name: formData.contactName,
            email: formData.email,
            phone: formData.phone,
            organization_name: formData.OrganisationName,
            organization_type: formData.OrganisationType,
            partnership_interests: formData.partnershipInterests.join(', '),
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
          We have received your partnership inquiry and sent a confirmation email. Our partnerships team will be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="form-shell" style={{ maxWidth: '920px', margin: '0 auto' }}>
      <h3 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '28px' }}>Partner with TECHMATE</h3>

      <div className="form-row two">
        <div className="form-field">
          <label>Contact Name *</label>
          <input
            type="text"
            required
            value={formData.contactName}
            onChange={(e) => setFormData(prev => ({ ...prev, contactName: e.target.value }))}
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
        <label>Phone Number</label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
          className="input"
        />
      </div>

      <div className="form-field" style={{ marginTop: '16px' }}>
        <label>Organisation Name *</label>
        <input
          type="text"
          required
          value={formData.OrganisationName}
          onChange={(e) => setFormData(prev => ({ ...prev, OrganisationName: e.target.value }))}
          className="input"
        />
      </div>

      <div className="form-row two" style={{ marginTop: '16px' }}>
        <div className="form-field">
          <label>Organisation Type</label>
          <select
            value={formData.OrganisationType}
            onChange={(e) => setFormData(prev => ({ ...prev, OrganisationType: e.target.value }))}
            className="select"
          >
            <option value="">Select type</option>
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
        <div className="form-field">
          <label>Organisation Size</label>
          <select
            value={formData.OrganisationSize}
            onChange={(e) => setFormData(prev => ({ ...prev, OrganisationSize: e.target.value }))}
            className="select"
          >
            <option value="">Select size</option>
            <option value="1-10">1-10 employees</option>
            <option value="11-50">11-50 employees</option>
            <option value="51-200">51-200 employees</option>
            <option value="201-1000">201-1000 employees</option>
            <option value="1000+">1000+ employees</option>
          </select>
        </div>
      </div>

      <div className="form-field" style={{ marginTop: '16px' }}>
        <label>Partnership interests *</label>
        <div className="checkbox-grid">
          {partnershipOptions.map((interest) => (
            <label key={interest.value} className="checkbox-item">
              <input
                type="checkbox"
                checked={formData.partnershipInterests.includes(interest.value)}
                onChange={() => handleInterestChange(interest.value)}
              />
              <span>{interest.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="form-row two" style={{ marginTop: '16px' }}>
        <div className="form-field">
          <label>Budget Range (if applicable)</label>
          <select
            value={formData.budget}
            onChange={(e) => setFormData(prev => ({ ...prev, budget: e.target.value }))}
            className="select"
          >
            <option value="">Select budget</option>
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
        <div className="form-field">
          <label>Timeline</label>
          <select
            value={formData.timeline}
            onChange={(e) => setFormData(prev => ({ ...prev, timeline: e.target.value }))}
            className="select"
          >
            <option value="">Select timeline</option>
            <option value="immediate">Immediate (within 1 month)</option>
            <option value="short-term">Short-term (1-3 months)</option>
            <option value="medium-term">Medium-term (3-6 months)</option>
            <option value="long-term">Long-term (6+ months)</option>
            <option value="ongoing">Ongoing partnership</option>
            <option value="flexible">Flexible</option>
          </select>
        </div>
      </div>

      <div className="form-field" style={{ marginTop: '16px' }}>
        <label>Tell us more about your partnership goals</label>
        <textarea
          value={formData.message}
          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
          className="textarea"
          placeholder="Describe your organisation goals, CSR objectives, or how you would like to support the TECHMATE community."
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
        disabled={isSubmitting || !formData.contactName || !formData.email || !formData.OrganisationName || formData.partnershipInterests.length === 0 || (process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY && !captchaToken)}
        className="submit-button"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Partnership Inquiry'}
      </button>

      <p className="note-copy" style={{ textAlign: 'center', marginTop: '14px' }}>
        By submitting this form, you agree to receive communications from TECHMATE about partnership opportunities.
      </p>
    </form>
  );
}
