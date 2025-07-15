import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faSyncAlt,
  faClock,
  faCreditCard,
  faShieldAlt
} from '@fortawesome/free-solid-svg-icons';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const plans = [
    {
      name: "Starter",
      monthlyPrice: 19,
      yearlyPrice: 190,
      features: [
        "Basic analytics dashboard",
        "Up to 5 team members",
        "1GB storage space",
        "Email support within 24 hours",
        "Basic project templates",
        "1 custom domain",
        "SSL security",
        "Weekly backups",
        "Community forum access",
        "Basic API access (100 calls/day)"
      ],
      isPopular: false,
      description: "Perfect for small teams and startups getting started"
    },
    {
      name: "Pro",
      monthlyPrice: 49,
      yearlyPrice: 490,
      features: [
        "Everything in Starter, plus:",
        "Advanced analytics & reporting",
        "Up to 20 team members",
        "25GB storage space",
        "Priority support (4-hour response)",
        "Advanced project templates",
        "5 custom domains",
        "Automated daily backups",
        "Custom integrations",
        "Advanced API access (1000 calls/day)",
        "Team collaboration tools",
        "Custom branding options",
        "Priority feature updates"
      ],
      isPopular: true,
      description: "Ideal for growing businesses needing more power"
    },
    {
      name: "Enterprise",
      monthlyPrice: 99,
      yearlyPrice: 990,
      features: [
        "Everything in Pro, plus:",
        "Enterprise analytics suite",
        "Unlimited team members",
        "Unlimited storage space",
        "24/7 dedicated support",
        "Unlimited custom domains",
        "Custom SLA agreement",
        "Dedicated account manager",
        "Custom development support",
        "On-premise deployment option",
        "SAML/SSO integration",
        "Advanced security features",
        "Compliance assistance",
        "Quarterly business reviews",
        "Custom AI model training"
      ],
      isPopular: false,
      description: "For large organizations requiring maximum flexibility"
    }
  ];

  return (
    <div className="min-vh-100  px-3" style={{ backgroundColor: '#FBF7F4' }}>
      <div className="p-5">
        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="display-4 font-weight-bold mb-3" style={{ color: '#2D1810' }}>
            Choose the Right Plan for Your Business
          </h1>
          <p className="lead mb-4 mx-auto" style={{ color: '#5C3D2E', maxWidth: '700px' }}>
            Select the perfect plan that suits your needs. Upgrade or downgrade at any time.
          </p>

          {/* Toggle */}
          <div className="d-flex align-items-center justify-content-center mt-4">
            <span className={`me-2 ${!isYearly ? 'font-weight-bold' : ''}`}
              style={{ fontSize: '1.1rem', color: !isYearly ? '#2D1810' : '#5C3D2E' }}>
              Monthly
            </span>

            <div className="position-relative rounded-pill"
              style={{
                width: '60px',
                height: '30px',
                backgroundColor: '#D9C5B8',
                cursor: 'pointer'
              }}
              onClick={() => setIsYearly(!isYearly)}>
              <div className="position-absolute rounded-circle"
                style={{
                  width: '24px',
                  height: '24px',
                  top: '3px',
                  left: isYearly ? '33px' : '3px',
                  backgroundColor: '#854836',
                  transition: 'left 0.3s ease-in-out'
                }} />
            </div>

            <span className={`ms-2 me-2 ${isYearly ? 'font-weight-bold' : ''}`}
              style={{ fontSize: '1.1rem', color: isYearly ? '#2D1810' : '#5C3D2E' }}>
              Yearly
            </span>

            <span className="ml-2 badge badge-pill"
              style={{
                backgroundColor: '#854836',
                color: 'white',
                fontSize: '0.75rem',
                padding: '0.25rem 0.5rem'
              }}>
              Save 20%
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="row justify-content-center">
          {plans.map((plan, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4 d-flex">
              <div className="card w-100 rounded shadow-sm position-relative"
                style={{
                  backgroundColor: plan.isPopular ? '#2D1810' : '#FFFFFF',
                  color: plan.isPopular ? '#FFFFFF' : '#2D1810',
                  border: plan.isPopular ? '2px solid #854836' : '1px solid #D9C5B8'
                }}>
                {plan.isPopular && (
                  <div className="position-absolute" style={{ top: '0', right: '0' }}>
                    <div className="px-3 py-1 rounded-bl text-white font-weight-bold"
                      style={{ backgroundColor: '#854836', fontSize: '0.75rem' }}>
                      MOST POPULAR
                    </div>
                  </div>
                )}
                <div className="card-body d-flex flex-column">
                  <h3 className="h2 font-weight-bold mb-2">{plan.name}</h3>
                  <p className="small mb-3" style={{ opacity: 0.8 }}>{plan.description}</p>
                  <div className="d-flex align-items-baseline mb-4">
                    <span className="display-4 font-weight-bold">
                      ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="ml-2" style={{ opacity: 0.8 }}>
                      /{isYearly ? 'year' : 'month'}
                    </span>
                  </div>
                  <hr style={{ backgroundColor: plan.isPopular ? '#854836' : '#D9C5B8', opacity: 1 }} />
                  <ul className="list-unstyled mb-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="mb-2 d-flex">
                        <FontAwesomeIcon icon={faCheckCircle} className="mr-2 mt-1" style={{ color: '#854836' }} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="btn font-weight-bold mt-auto"
                    style={{
                      backgroundColor: plan.isPopular ? '#FFFFFF' : '#854836',
                      color: plan.isPopular ? '#2D1810' : '#FFFFFF',
                      border: 'none'
                    }}>
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="mx-auto  mt-5" >
          <h2 className="h1 font-weight-bold mb-4" style={{ color: '#2D1810' }}>Frequently Asked Questions</h2>
          <div className="text-left">
            {[
              {
                icon: faSyncAlt,
                question: "Can I change my plan later?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
              },
              {
                icon: faClock,
                question: "Is there a free trial available?",
                answer: "Yes, we offer a 14-day free trial for all plans. No credit card required to start."
              },
              {
                icon: faCreditCard,
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, and bank transfers for Enterprise plans."
              },
              {
                icon: faShieldAlt,
                question: "How secure is my data?",
                answer: "Your data is protected with enterprise-grade security, encryption, and compliance with privacy regulations."
              }
            ].map((faq, i) => (
              <div key={i} className="mb-3 p-4 rounded bg-white"
                style={{ border: '1px solid #D9C5B8', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                <h3 className="h5 font-weight-bold mb-2 d-flex align-items-center">
                  <FontAwesomeIcon icon={faq.icon} className="mr-2" style={{ color: '#854836' }} />
                  {faq.question}
                </h3>
                <p style={{ color: '#5C3D2E' }}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-5">
          <h2 className="h1 font-weight-bold mb-3" style={{ color: '#2D1810' }}>Still have questions?</h2>
          <p className="mb-4" style={{ color: '#5C3D2E' }}>Our team is here to help you find the perfect solution for your business needs.</p>
          <button className="btn py-2 px-5 font-weight-bold text-white"
            style={{ backgroundColor: '#854836' }}>
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
