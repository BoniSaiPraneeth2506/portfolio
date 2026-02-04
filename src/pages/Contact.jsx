import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import SectionWrapper from '../components/SectionWrapper';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length !== 0) {
      setErrors(newErrors);
      return;
    }

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE,
        process.env.REACT_APP_EMAILJS_TEMPLATE,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC
      )
      .then(() => {
        setSubmitted(true);

        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
          setSubmitted(false);
        }, 3000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send message. Try again later.");
      });
  };

  const contactInfo = [
    { icon: FaEnvelope, title: 'Email', value: 'praneeth@example.com' },
    { icon: FaPhone, title: 'Phone', value: '+91 XXXXX XXXXX' },
    { icon: FaMapMarkerAlt, title: 'Location', value: 'Bhimavaram, Andhra Pradesh' },
  ];

  return (
    <SectionWrapper id="contact">
      <div className="space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center space-y-4"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-text-primary">
            Get In <span className="text-accent">Touch</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Let's connect and build something amazing together
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-bold text-text-primary font-display">
                Contact Information
              </h3>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>

            {/* Contact Items */}
            <div className="space-y-3">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3 p-3 sm:p-4 bg-card border border-border rounded-xl hover:border-accent/50 transition-colors duration-200"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-accent/10 rounded-lg flex-shrink-0">
                      <Icon className="text-lg sm:text-xl text-accent" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-xs sm:text-sm font-semibold text-text-primary">{info.title}</h4>
                      <p className="text-xs sm:text-sm text-text-secondary truncate">{info.value}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Form - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-6 bg-card border border-border rounded-2xl p-6 sm:p-8">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-text-primary">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={`w-full px-4 py-3 bg-background border ${
                    errors.name ? 'border-red-500' : 'border-border'
                  } rounded-xl text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent transition-colors duration-200`}
                />
                {errors.name && <p className="text-red-400 text-xs">{errors.name}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-text-primary">
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={`w-full px-4 py-3 bg-background border ${
                    errors.email ? 'border-red-500' : 'border-border'
                  } rounded-xl text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent transition-colors duration-200`}
                />
                {errors.email && <p className="text-red-400 text-xs">{errors.email}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium text-text-primary">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  className={`w-full px-4 py-3 bg-background border ${
                    errors.subject ? 'border-red-500' : 'border-border'
                  } rounded-xl text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent transition-colors duration-200`}
                />
                {errors.subject && <p className="text-red-400 text-xs">{errors.subject}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-text-primary">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className={`w-full px-4 py-3 bg-background border ${
                    errors.message ? 'border-red-500' : 'border-border'
                  } rounded-xl text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent transition-colors duration-200 resize-none`}
                />
                {errors.message && <p className="text-red-400 text-xs">{errors.message}</p>}
              </div>

              <motion.button
                type="submit"
                className={`w-full py-3 rounded-xl font-medium transition-all duration-200 ${
                  submitted
                    ? 'bg-green-500 text-white'
                    : 'bg-accent hover:bg-accent/90 text-white'
                }`}
                whileHover={{ scale: submitted ? 1 : 1.02 }}
                whileTap={{ scale: submitted ? 1 : 0.98 }}
                disabled={submitted}
              >
                {submitted ? '✓ Message Sent!' : 'Send Message'}
              </motion.button>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-green-400 text-sm"
                >
                  Thank you! Your message has been sent successfully.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;

