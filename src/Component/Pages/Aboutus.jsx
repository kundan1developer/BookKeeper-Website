import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCheckCircle, 
  faLightbulb, 
  faShieldAlt, 
  faComments,
  faArrowRight,
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
  faUserShield,
  faUsers,
  faChartLine
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitter, faGithub, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Aboutus = () => {
  return (
    <div className="min-vh-100 bg-white d-flex flex-column">
      {/* About Us Hero Section */}
      <section className="py-5 overflow-hidden">
        <div className="p-5">
          <div className="row align-items-center g-4">
            {/* Left Column - Text Content */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="display-4 fw-bold mb-3" style={{ color: '#2D1810' }}>About Us</h2>
              <div className="w-25 mb-4" style={{ height: '2px', backgroundColor: '#854836' }}></div>
              <p className="lead mb-4" style={{ color: '#2D1810' }}>
                At GST Accounting, we're dedicated to simplifying tax compliance for businesses of all sizes. Since 2018, we've been helping companies navigate the complexities of GST with our intuitive, powerful software solutions.
              </p>
              <div className="row g-3">
                <div className="col-sm-6">
                  <div className="d-flex">
                    <div className="rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{ width: '48px', height: '48px', backgroundColor: 'rgba(133, 72, 54, 0.1)' }}>
                      <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#854836', fontSize: '1.25rem' }} />
                    </div>
                    <div>
                      <h3 className="h5 fw-semibold mb-1" style={{ color: '#2D1810' }}>Accuracy</h3>
                      <p className="small mb-0" style={{ color: '#5C3D2E' }}>Precise calculations and error-free reporting</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex">
                    <div className="rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{ width: '48px', height: '48px', backgroundColor: 'rgba(133, 72, 54, 0.1)' }}>
                      <FontAwesomeIcon icon={faLightbulb} style={{ color: '#854836', fontSize: '1.25rem' }} />
                    </div>
                    <div>
                      <h3 className="h5 fw-semibold mb-1" style={{ color: '#2D1810' }}>Simplicity</h3>
                      <p className="small mb-0" style={{ color: '#5C3D2E' }}>User-friendly interface with intuitive workflows</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex">
                    <div className="rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{ width: '48px', height: '48px', backgroundColor: 'rgba(133, 72, 54, 0.1)' }}>
                      <FontAwesomeIcon icon={faShieldAlt} style={{ color: '#854836', fontSize: '1.25rem' }} />
                    </div>
                    <div>
                      <h3 className="h5 fw-semibold mb-1" style={{ color: '#2D1810' }}>Compliance</h3>
                      <p className="small mb-0" style={{ color: '#5C3D2E' }}>Always up-to-date with latest tax regulations</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex">
                    <div className="rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{ width: '48px', height: '48px', backgroundColor: 'rgba(133, 72, 54, 0.1)' }}>
                      <FontAwesomeIcon icon={faComments} style={{ color: '#854836', fontSize: '1.25rem' }} />
                    </div>
                    <div>
                      <h3 className="h5 fw-semibold mb-1" style={{ color: '#2D1810' }}>Bilingual Support</h3>
                      <p className="small mb-0" style={{ color: '#5C3D2E' }}>Assistance available in multiple languages</p>
                    </div>
                  </div>
                </div>
              </div>
              <button className="btn mt-4 px-4 py-2 d-inline-flex align-items-center" style={{ backgroundColor: '#854836', color: 'white' }}>
                <span>Learn More About Our Mission</span>
                <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
              </button>
            </div>
            {/* Right Column - Image */}
            <div className="col-lg-6 position-relative">
              <div className="position-relative">
                <img
                  src="https://readdy.ai/api/search-image?query=A%20professional%20dashboard%20interface%20for%20GST%20accounting%20software%20with%20warm%20brown%20color%20scheme%20featuring%20charts%2C%20graphs%2C%20and%20financial%20data%20visualization.%20The%20interface%20shows%20tax%20reports%2C%20compliance%20status%2C%20and%20financial%20metrics%20with%20a%20clean%20modern%20design%20in%20colors%20854836%2C%205C3D2E%2C%20and%202D1810.%20High%20quality%2C%20photorealistic%2C%20detailed%20UI%20design&width=600&height=500&seq=123456&orientation=landscape"
                  alt="GST Accounting Dashboard"
                  className="img-fluid rounded shadow-lg w-100"
                />
                <div className="position-absolute bottom-0 start-0" style={{ width: '96px', height: '96px', backgroundColor: 'rgba(133, 72, 54, 0.1)', borderRadius: '50%', zIndex: 0 }}></div>
                <div className="position-absolute top-0 end-0" style={{ width: '128px', height: '128px', backgroundColor: 'rgba(92, 61, 46, 0.1)', borderRadius: '50%', zIndex: 0 }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-5 bg-light">
        <div className="p-5">
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold mb-3" style={{ color: '#2D1810' }}>Our Leadership Team</h2>
            <div className="w-25 mx-auto mb-4" style={{ height: '2px', backgroundColor: '#854836' }}></div>
            <p className="lead mx-auto" style={{ color: '#5C3D2E', maxWidth: '800px' }}>
              Meet the experienced professionals behind our innovative GST accounting solutions
            </p>
          </div>
          <div className="row g-4 justify-content-center">
            {/* Team Member 1 */}
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="mx-auto mt-4 overflow-hidden" style={{ width: '200px', height: '200px', borderRadius: '50%' }}>
                  <img
                    src="https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20a%20confident%20female%20CEO%20in%20her%2040s%20with%20short%20dark%20hair%2C%20wearing%20a%20brown%20business%20suit%20against%20a%20neutral%20background.%20She%20has%20a%20warm%20smile%20and%20professional%20demeanor.%20High%20quality%2C%20corporate%20photography%20style%20with%20soft%20lighting%20and%20shallow%20depth%20of%20field&width=400&height=400&seq=123457&orientation=squarish"
                    alt="Sarah Johnson, CEO"
                    className="img-fluid w-100 h-100 object-fit-cover"
                  />
                </div>
                <div className="card-body text-center">
                  <h3 className="h4 fw-semibold mb-1" style={{ color: '#2D1810' }}>Sarah Johnson</h3>
                  <p className="fw-medium mb-3" style={{ color: '#854836' }}>Chief Executive Officer</p>
                  <p className="card-text mb-4" style={{ color: '#5C3D2E' }}>
                    With over 15 years in financial technology, Sarah leads our vision for simplified tax compliance.
                  </p>
                  <div className="d-flex justify-content-center">
                    <a href="#" className="mx-2 text-decoration-none" style={{ color: '#854836' }}>
                      <FontAwesomeIcon icon={faLinkedin} size="lg" />
                    </a>
                    <a href="#" className="mx-2 text-decoration-none" style={{ color: '#854836' }}>
                      <FontAwesomeIcon icon={faTwitter} size="lg" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Team Member 2 */}
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="mx-auto mt-4 overflow-hidden" style={{ width: '200px', height: '200px', borderRadius: '50%' }}>
                  <img
                    src="https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20a%20male%20CTO%20in%20his%2030s%20with%20glasses%20and%20short%20beard%2C%20wearing%20a%20brown%20button-up%20shirt%20against%20a%20neutral%20background.%20He%20has%20a%20thoughtful%20expression%20and%20technical%20demeanor.%20High%20quality%2C%20corporate%20photography%20style%20with%20soft%20lighting%20and%20shallow%20depth%20of%20field&width=400&height=400&seq=123458&orientation=squarish"
                    alt="Michael Chen, CTO"
                    className="img-fluid w-100 h-100 object-fit-cover"
                  />
                </div>
                <div className="card-body text-center">
                  <h3 className="h4 fw-semibold mb-1" style={{ color: '#2D1810' }}>Michael Chen</h3>
                  <p className="fw-medium mb-3" style={{ color: '#854836' }}>Chief Technology Officer</p>
                  <p className="card-text mb-4" style={{ color: '#5C3D2E' }}>
                    Michael's expertise in AI and machine learning drives our innovative approach to tax automation.
                  </p>
                  <div className="d-flex justify-content-center">
                    <a href="#" className="mx-2 text-decoration-none" style={{ color: '#854836' }}>
                      <FontAwesomeIcon icon={faLinkedin} size="lg" />
                    </a>
                    <a href="#" className="mx-2 text-decoration-none" style={{ color: '#854836' }}>
                      <FontAwesomeIcon icon={faGithub} size="lg" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Team Member 3 */}
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="mx-auto mt-4 overflow-hidden" style={{ width: '200px', height: '200px', borderRadius: '50%' }}>
                  <img
                    src="https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20a%20female%20CFO%20in%20her%2050s%20with%20shoulder-length%20blonde%20hair%2C%20wearing%20a%20brown%20blazer%20against%20a%20neutral%20background.%20She%20has%20a%20confident%20expression%20and%20professional%20demeanor.%20High%20quality%2C%20corporate%20photography%20style%20with%20soft%20lighting%20and%20shallow%20depth%20of%20field&width=400&height=400&seq=123459&orientation=squarish"
                    alt="Amanda Patel, CFO"
                    className="img-fluid w-100 h-100 object-fit-cover"
                  />
                </div>
                <div className="card-body text-center">
                  <h3 className="h4 fw-semibold mb-1" style={{ color: '#2D1810' }}>Amanda Patel</h3>
                  <p className="fw-medium mb-3" style={{ color: '#854836' }}>Chief Financial Officer</p>
                  <p className="card-text mb-4" style={{ color: '#5C3D2E' }}>
                    Amanda brings 20+ years of accounting expertise, ensuring our solutions meet real-world financial needs.
                  </p>
                  <div className="d-flex justify-content-center">
                    <a href="#" className="mx-2 text-decoration-none" style={{ color: '#854836' }}>
                      <FontAwesomeIcon icon={faLinkedin} size="lg" />
                    </a>
                    <a href="#" className="mx-2 text-decoration-none" style={{ color: '#854836' }}>
                      <FontAwesomeIcon icon={faEnvelope} size="lg" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-5">
        <div className="p-5">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <img
                src="https://readdy.ai/api/search-image?query=A%20modern%20office%20space%20with%20warm%20brown%20tones%20showing%20a%20diverse%20team%20collaborating%20on%20GST%20accounting%20software.%20The%20scene%20shows%20professionals%20working%20together%20at%20a%20conference%20table%20with%20laptops%20and%20financial%20documents.%20The%20office%20has%20wooden%20elements%20and%20warm%20lighting%20with%20colors%20854836%2C%205C3D2E%2C%20and%202D1810.%20Photorealistic%2C%20professional%20corporate%20photography&width=600&height=400&seq=123460&orientation=landscape"
                alt="Our Company Story"
                className="img-fluid rounded shadow-lg w-100"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="display-4 fw-bold mb-3" style={{ color: '#2D1810' }}>Our Story</h2>
              <div className="w-25 mb-4" style={{ height: '2px', backgroundColor: '#854836' }}></div>
              <p className="lead mb-4" style={{ color: '#2D1810' }}>
                Founded in 2018, GST Accounting was born from a simple observation: businesses were spending too much time on tax compliance and not enough on growth.
              </p>
              <p className="lead mb-4" style={{ color: '#2D1810' }}>
                Our founders, experienced tax professionals and software engineers, set out to create a solution that would automate the complex aspects of GST filing while maintaining complete accuracy and compliance.
              </p>
              <p className="lead mb-4" style={{ color: '#2D1810' }}>
                Today, we serve over 10,000 businesses across multiple countries, from small startups to large enterprises, all benefiting from our commitment to simplifying tax management through technology.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <div className="p-3 rounded flex-grow-1" style={{ backgroundColor: 'rgba(133, 72, 54, 0.1)' }}>
                  <div className="h3 fw-bold mb-1" style={{ color: '#854836' }}>7+</div>
                  <div className="small" style={{ color: '#5C3D2E' }}>Years of Experience</div>
                </div>
                <div className="p-3 rounded flex-grow-1" style={{ backgroundColor: 'rgba(133, 72, 54, 0.1)' }}>
                  <div className="h3 fw-bold mb-1" style={{ color: '#854836' }}>10,000+</div>
                  <div className="small" style={{ color: '#5C3D2E' }}>Businesses Served</div>
                </div>
                <div className="p-3 rounded flex-grow-1" style={{ backgroundColor: 'rgba(133, 72, 54, 0.1)' }}>
                  <div className="h3 fw-bold mb-1" style={{ color: '#854836' }}>98%</div>
                  <div className="small" style={{ color: '#5C3D2E' }}>Customer Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-5 text-white" style={{ backgroundColor: '#2D1810' }}>
        <div className="p-5">
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold mb-3">Our Core Values</h2>
            <div className="w-25 bg-white mx-auto mb-4" style={{ height: '2px' }}></div>
            <p className="lead mx-auto" style={{ maxWidth: '800px' }}>
              The principles that guide everything we do
            </p>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="p-4 rounded text-center h-100" style={{ backgroundColor: 'rgba(133, 72, 54, 0.2)' }}>
                <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '64px', height: '64px', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                  <FontAwesomeIcon icon={faUserShield} size="lg" />
                </div>
                <h3 className="h4 fw-semibold mb-3">Integrity</h3>
                <p className="mb-0">
                  We maintain the highest standards of honesty and transparency in all our operations.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="p-4 rounded text-center h-100" style={{ backgroundColor: 'rgba(133, 72, 54, 0.2)' }}>
                <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '64px', height: '64px', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                  <FontAwesomeIcon icon={faLightbulb} size="lg" />
                </div>
                <h3 className="h4 fw-semibold mb-3">Innovation</h3>
                <p className="mb-0">
                  We continuously seek new ways to improve and simplify tax compliance.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="p-4 rounded text-center h-100" style={{ backgroundColor: 'rgba(133, 72, 54, 0.2)' }}>
                <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '64px', height: '64px', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                  <FontAwesomeIcon icon={faUsers} size="lg" />
                </div>
                <h3 className="h4 fw-semibold mb-3">Customer Focus</h3>
                <p className="mb-0">
                  Our clients' success drives every decision we make and product we build.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="p-4 rounded text-center h-100" style={{ backgroundColor: 'rgba(133, 72, 54, 0.2)' }}>
                <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '64px', height: '64px', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                  <FontAwesomeIcon icon={faChartLine} size="lg" />
                </div>
                <h3 className="h4 fw-semibold mb-3">Excellence</h3>
                <p className="mb-0">
                  We strive for perfection in our software, service, and support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

 
    </div>
  );
};

export default Aboutus;