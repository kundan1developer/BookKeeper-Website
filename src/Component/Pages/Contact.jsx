import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCheckCircle, 
  faExclamationCircle, 
  faSpinner, 
  faPaperPlane,
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight - 100;
        if (isInView) {
          element.classList.add('animate-visible');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('idle');
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors((prev) => ({
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

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setFormStatus('submitting');

    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <div className="min-vh-100 d-flex flex-column" style={{ backgroundColor: '#FBF7F4', color: '#2D1810' }}>
      {/* Header */}
      <header className="py-5 text-white" style={{ 
        background: 'linear-gradient(to right, #854836, #5C3D2E)'
      }}>
        <div className="container px-3 px-md-4 px-lg-5">
          <h1 className={`display-4 font-weight-bold mb-3 ${isVisible ? 'slide-in' : ''}`} 
              style={{ opacity: 0, animationDelay: '0.2s' }}>
            Contact Us
          </h1>
          <p className={`lead ${isVisible ? 'slide-in' : ''}`} 
             style={{ 
               opacity: 0, 
               animationDelay: '0.4s',
               maxWidth: '700px'
             }}>
            We'd love to hear from you. Fill out the form below, visit our office, or connect with us via WhatsApp for immediate assistance.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container flex-grow-1 px-3 px-md-4 px-lg-5 py-5">
        <div className="row g-4">
          {/* Contact Form */}
          <div className="col-lg-6">
            <div className="bg-white rounded shadow p-4 h-100 animate-on-scroll" 
                 style={{ borderTop: '4px solid #854836' }}>
              <h2 className="h2 font-weight-semibold mb-4" style={{ color: '#5C3D2E' }}>
                Send Us a Message
              </h2>
              
              {formStatus === 'success' && (
                <div className="alert alert-success d-flex align-items-center mb-4">
                  <FontAwesomeIcon icon={faCheckCircle} className="me-2" />
                  <span>Thank you! Your message has been sent successfully.</span>
                </div>
              )}
              
              {formStatus === 'error' && (
                <div className="alert alert-danger d-flex align-items-center mb-4">
                  <FontAwesomeIcon icon={faExclamationCircle} className="me-2" />
                  <span>Something went wrong. Please try again later.</span>
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-medium">
                    Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    placeholder="Your name"
                  />
                  {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>
                
                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-medium">
                    Email <span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
                
                <div className="mb-4">
                  <label htmlFor="message" className="form-label fw-medium">
                    Message <span className="text-danger">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                    placeholder="How can we help you?"
                  ></textarea>
                  {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                </div>
                
                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="btn w-100 py-2 fw-medium"
                  style={{ backgroundColor: '#5C3D2E', color: 'white' }}
                >
                  {formStatus === 'submitting' ? (
                    <>
                      <FontAwesomeIcon icon={faSpinner} spin className="me-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faPaperPlane} className="me-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
          
          {/* Map and Address */}
          <div className="col-lg-6">
            <div className="bg-white rounded shadow overflow-hidden mb-4 animate-on-scroll" 
                 style={{ borderTop: '4px solid #5C3D2E' }}>
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059353029!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1656543745932!5m2!1sen!2s"
                  className="embed-responsive-item"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Our Location"
                ></iframe>
              </div>
            </div>
            
            <div className="bg-white rounded shadow p-4 animate-on-scroll" style={{ borderTop: '4px solid #2D1810' }}>
              <h2 className="h2 font-weight-semibold mb-4" style={{ color: '#5C3D2E' }}>
                Visit Our Office
              </h2>
              
              <div className="d-flex mb-4">
                <div className="rounded-circle p-2 me-3 d-flex align-items-center justify-content-center" 
                     style={{ backgroundColor: '#854836', color: 'white', width: '40px', height: '40px', flexShrink: 0 }}>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </div>
                <div>
                  <h3 className="h5 fw-medium mb-1">Our Address</h3>
                  <p className="text-muted mb-0">
                    123 Business Avenue, Suite 456<br />
                    New York, NY 10001<br />
                    United States
                  </p>
                </div>
              </div>
              
              <div className="d-flex mb-4">
                <div className="rounded-circle p-2 me-3 d-flex align-items-center justify-content-center" 
                     style={{ backgroundColor: '#854836', color: 'white', width: '40px', height: '40px', flexShrink: 0 }}>
                  <FontAwesomeIcon icon={faPhoneAlt} />
                </div>
                <div>
                  <h3 className="h5 fw-medium mb-1">Phone</h3>
                  <p className="text-muted mb-0">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="d-flex">
                <div className="rounded-circle p-2 me-3 d-flex align-items-center justify-content-center" 
                     style={{ backgroundColor: '#854836', color: 'white', width: '40px', height: '40px', flexShrink: 0 }}>
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div>
                  <h3 className="h5 fw-medium mb-1">Email</h3>
                  <p className="text-muted mb-0">contact@yourcompany.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Business Hours */}
        <div className="bg-white rounded shadow p-4 mt-4 animate-on-scroll" 
             style={{ borderTop: '4px solid #854836' }}>
          <h2 className="h2 font-weight-semibold mb-4 text-center" style={{ color: '#5C3D2E' }}>
            Business Hours
          </h2>
          
          <div className="row g-3">
            <div className="col-md-4">
              <div className="p-3 border rounded h-100">
                <h3 className="h5 fw-medium mb-2" style={{ color: '#854836' }}>Monday - Friday</h3>
                <p className="text-muted mb-0">9:00 AM - 6:00 PM</p>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="p-3 border rounded h-100">
                <h3 className="h5 fw-medium mb-2" style={{ color: '#854836' }}>Saturday</h3>
                <p className="text-muted mb-0">10:00 AM - 4:00 PM</p>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="p-3 border rounded h-100">
                <h3 className="h5 fw-medium mb-2" style={{ color: '#854836' }}>Sunday</h3>
                <p className="text-muted mb-0">Closed</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Floating WhatsApp Button */}
      <div className="position-fixed" style={{ bottom: '1.5rem', right: '1.5rem', zIndex: 50 }}>
        <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer" 
           className={`rounded-circle shadow d-flex align-items-center justify-content-center ${isVisible ? 'fade-in' : ''}`} 
           style={{
             width: '4rem',
             height: '4rem',
             backgroundColor: '#25D366',
             color: 'white',
             border: 'none',
             opacity: 0,
             animationDelay: '1s',
             textDecoration: 'none'
           }}>
          <FontAwesomeIcon icon={faWhatsapp} size="2x" />
        </a>
      </div>

 

      {/* CSS for animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideUp {
            from {
              transform: translateY(50px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
          @keyframes slideIn {
            from {
              transform: translateX(-50px);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
          .animate-on-scroll {
            opacity: 0;
            transform: translateY(50px);
            transition: all 0.6s ease-out;
          }
          .animate-visible {
            opacity: 1;
            transform: translateY(0);
          }
          .fade-in {
            animation: fadeIn 1s ease-out forwards;
          }
          .slide-up {
            animation: slideUp 1s ease-out forwards;
          }
          .slide-in {
            animation: slideIn 1s ease-out forwards;
          }
          
          /* Responsive adjustments */
          @media (max-width: 767.98px) {
            header h1 {
              font-size: 2.5rem;
            }
            header p {
              font-size: 1rem;
            }
            .h2 {
              font-size: 1.75rem;
            }
          }
          
          @media (max-width: 575.98px) {
            header h1 {
              font-size: 2rem;
            }
            .h2 {
              font-size: 1.5rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Contact;