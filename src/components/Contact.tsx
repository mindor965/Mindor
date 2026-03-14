import React, { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';

interface ContactProps {
  setShowSuccessModal: (show: boolean) => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  serviceInterest: string;
  bestTimeToCall: string;
  message: string;
  contactPreference: string;
}

const Contact: React.FC<ContactProps> = ({ setShowSuccessModal }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceInterest: '',
    bestTimeToCall: '',
    message: '',
    contactPreference: 'email'
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // For name field, only allow alphabets and spaces
    if (name === 'name') {
      const alphabetsOnly = value.replace(/[^a-zA-Z\s]/g, ''); // Remove all non-alphabetic characters except spaces
      setFormData(prev => ({
        ...prev,
        [name]: alphabetsOnly
      }));
    }
    // For phone field, only allow digits and limit to 10 digits
    else if (name === 'phone') {
      const digitsOnly = value.replace(/\D/g, ''); // Remove all non-digit characters
      const limitedValue = digitsOnly.slice(0, 10); // Limit to 10 digits
      setFormData(prev => ({
        ...prev,
        [name]: limitedValue
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const validateForm = (): boolean => {
    if (!formData.name || !formData.email || !formData.message || !formData.phone) {
      setError('Please fill in all required fields.');
      return false;
    }

    // Validate name: must contain only alphabets and spaces
    if (!/^[a-zA-Z\s]+$/.test(formData.name.trim())) {
      setError('Name must contain only alphabets.');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address.');
      return false;
    }

    // Validate phone number: must be exactly 10 digits and contain only digits
    if (!/^\d{10}$/.test(formData.phone)) {
      setError('Phone number must be exactly 10 digits and contain only digits.');
      return false;
    }

    setError('');
    return true;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setError('');

    // Always use standard form submission
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://formsubmit.co/official.agarwal.1008@gmail.com';
    form.style.display = 'none';

    const fields = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone || 'Not provided',
      company: formData.company || 'Not provided',
      serviceInterest: formData.serviceInterest || 'Not specified',
      bestTimeToCall: formData.bestTimeToCall || 'Not specified',
      message: formData.message,
      contactPreference: formData.contactPreference,
      _subject: `New Strategy Call Request from ${formData.name}`,
      _captcha: 'false',
      _next: window.location.href + '#success',
      _template: 'table'
    };

    Object.keys(fields).forEach(key => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = fields[key as keyof typeof fields];
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 bg-background-light">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-text-primary mb-6 gradient-text">
              Schedule Your Strategy Call
            </h2>
            <p className="text-lg text-text-secondary mb-12 leading-relaxed">
              Ready to transform your business with cutting-edge technology solutions? Schedule a strategy call with our experts and let's discuss how we can help you achieve your goals.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-light rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">
                  📞
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">Phone</h3>
                  <p className="text-text-secondary">+91 8928210967</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-light rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">
                  ✉️
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">Email</h3>
                  <p className="text-text-secondary">info@mindor.tech</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-light rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">
                  📍
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">Location</h3>
                  <p className="text-text-secondary">Bangalore, India</p>
                </div>
              </div>
            </div>

            {/* Calendly Scheduling Option */}
            <div className="mt-12 p-6 bg-gradient-to-r from-primary/10 to-primary-light/10 rounded-2xl border border-primary/20">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-light rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">
                  📅
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">Quick Schedule</h3>
                  <p className="text-text-secondary mb-4">Book a strategy call directly through our calendar</p>
                </div>
              </div>
              
              <motion.a
                href="https://calendar.app.google/c94YxYt7MYuphBsw6"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-full flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                </svg>
                Schedule with Google Calendar
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="contact-form bg-white rounded-2xl p-8 shadow-xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className={`space-y-6 ${isSubmitting ? 'pointer-events-none opacity-70' : ''}`}>
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                  {error}
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-300"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-300"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Your Phone Number"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-300"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your Company Name"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-300"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="serviceInterest"
                    value={formData.serviceInterest}
                    onChange={handleInputChange}
                    placeholder="Service You're Interested In"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-300"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="bestTimeToCall"
                    value={formData.bestTimeToCall}
                    onChange={handleInputChange}
                    placeholder="Best Time to Call"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-300"
                  />
                </div>
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="How can we help you?"
                  rows={4}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-300 resize-none"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-3">
                  Preferred Contact Method:
                </label>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="contactPreference"
                      value="email"
                      checked={formData.contactPreference === 'email'}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-primary focus:ring-primary/20"
                    />
                    <span className="text-text-secondary">Email</span>
                  </label>
                </div>
              </div>

              <motion.button
                type="submit"
                className={`btn btn-primary btn-full flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-60 cursor-not-allowed' : ''}`}
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  'Schedule Your Call'
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 