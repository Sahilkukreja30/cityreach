import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Magnetic from '../../../components/Magnetic/Magnetic';
import './sections.css';

export default function Enquiry() {
  const [formState, setFormState] = useState({ name: '', phone: '', requirements: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData();
    formData.append('name', formState.name);
    formData.append('phone', formState.phone);
    formData.append('requirements', formState.requirements);

    try {
      const response = await fetch('https://formspree.io/f/mojkwgja', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        setFormState({ name: '', phone: '', requirements: '' });
      } else {
        throw new Error('Something went wrong, please try again.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage(error.message || 'Failed to submit enquiry. Please try again.');
    }
  };

  return (
    <section id="enquiry-section" className="enquiry-container container">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="enquiry-form-card glass-accent laser-border-container"
      >
        <div className="laser-border" />
        
        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="submit-success-msg"
            >
              <h3>Enquiry Sent</h3>
              <p style={{ marginTop: '12px' }}>
                Thank you! Our executive will contact you shortly.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <h2 className="enquiry-title">Connect With Us</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    autoComplete="off"
                  />
                  <label>Your Name</label>
                </div>

                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    placeholder="+91 00000 00000"
                    required
                    autoComplete="off"
                  />
                  <label>Phone Number</label>
                </div>

                <div className="form-group">
                  <textarea
                    name="requirements"
                    rows="3"
                    value={formState.requirements}
                    onChange={handleChange}
                    required
                    autoComplete="off"
                  />
                  <label>Describe Your Requirements</label>
                </div>

                {status === 'error' && (
                  <p style={{ color: '#ef4444', marginBottom: '24px', fontSize: '0.85rem' }}>
                    {errorMessage}
                  </p>
                )}

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Magnetic>
                    <button 
                      type="submit" 
                      className="btn-primary" 
                      style={{ width: '100%', minWidth: '220px' }}
                      disabled={status === 'sending'}
                    >
                      {status === 'sending' ? 'Sending...' : 'Submit Enquiry'}
                    </button>
                  </Magnetic>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
