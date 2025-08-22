import { MapPin, Phone, Mail, Clock, Send, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';
import { useContactForm } from '../hooks/useContactForm';
import WhatsAppButton from '../components/WhatsAppButton';

export default function Contact() {
  const { formData, errors, submitStatus, updateField, submitForm } = useContactForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitForm();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Get in <span className="text-amber-700">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We'd love to hear from you! Whether you have questions about our products, 
            want to place an order, or need more information, we're here to help.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-amber-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Send us a Message</h2>
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center gap-2 text-green-800">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-medium">Message sent successfully!</span>
                  </div>
                  <p className="text-green-700 text-sm mt-1">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center gap-2 text-red-800">
                    <AlertCircle className="w-5 h-5" />
                    <span className="font-medium">Error sending message</span>
                  </div>
                  <p className="text-red-700 text-sm mt-1">
                    Please try again or contact us via WhatsApp.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => updateField('name', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all ${
                      errors.name ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="Enter your full name"
                    required
                  />
                  {errors.name && (
                    <p className="text-red-600 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all ${
                      errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="your.email@example.com"
                    required
                  />
                  {errors.email && (
                    <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <select 
                    value={formData.subject}
                    onChange={(e) => updateField('subject', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all ${
                      errors.subject ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                    required
                  >
                    <option>Product Inquiry</option>
                    <option>Bulk Order Request</option>
                    <option>Custom Product Request</option>
                    <option>Quality Feedback</option>
                    <option>Partnership Opportunity</option>
                    <option>General Question</option>
                  </select>
                  {errors.subject && (
                    <p className="text-red-600 text-sm mt-1">{errors.subject}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows={6}
                    value={formData.message}
                    onChange={(e) => updateField('message', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none ${
                      errors.message ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="Tell us about your inquiry, which products you're interested in, or any questions you have..."
                    required
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-600 text-sm mt-1">{errors.message}</p>
                  )}
                </div>
                
                <WhatsAppButton
                  message={`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`}
                  className="w-full bg-gradient-to-r from-amber-700 to-orange-600 text-white py-4 rounded-lg hover:from-amber-800 hover:to-orange-700 transition-all duration-300 flex items-center justify-center gap-2 font-medium"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </WhatsAppButton>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-amber-100">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-300 text-sm">
                      SREEBHADRA GROUP OF CONCERNS<br />
                      8/125A, SB COMPLEX, PALAKKAD MAIN ROAD,<br />
                      NEAR SREEKRISHNAPURAM POLICE STATION,<br />
                      THIRUVAZHIYODE PO, Palakkad, Kerala-679514
                    </p>
                  </div>
                  <div className="my-8 rounded-lg overflow-hidden shadow-lg">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.904250492887!2d76.3897053!3d10.894881099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7d7797388b109%3A0x9505dc8f2718e53c!2sRoyal%20Taste%20Food%20Products!5e0!3m2!1sen!2sin!4v1755714926536!5m2!1sen!2sin" 
                      width="100%" 
                      height="350" 
                      style={{ border: 0 }} 
                      allowFullScreen={true} 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Royal Taste Food Products Location"
                    ></iframe>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                      <p className="text-gray-600">
                        WhatsApp: +91 93880 51003/+91 93880 51005
                                  
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-500 rounded flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-amber-400 flex-shrink-0" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                      <p className="text-gray-600">
                        info@royaltastefoods.com<br />
                      </p>
                    </div>
                  </div>
                  

                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday - Saturday: 8:00 AM - 6:00 PM<br />
                        Sunday: Closed<br />
                        <span className="text-sm text-amber-700">IST</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Order Section */}
              <div className="bg-gradient-to-br from-amber-600 to-orange-500 rounded-2xl shadow-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <MessageCircle className="w-6 h-6" />
                  Quick Order via WhatsApp
                </h3>
                <p className="mb-6 opacity-90">
                  For faster service, you can also place your orders directly through WhatsApp. 
                  Just send us a message with your product requirements!
                </p>
                <WhatsAppButton
                  message="Hello! I would like to place a quick order for Royal Taste Food Products. Please assist me with the available products and pricing."
                  className="bg-white text-amber-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                />
              </div>

              {/* FAQ Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-amber-100">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Do you deliver outside Kerala?</h4>
                    <p className="text-gray-600">Currently, we serve customers across Kerala. For orders outside Kerala, please contact us for special arrangements.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">What is the minimum order quantity?</h4>
                    <p className="text-gray-600">We accept orders of all sizes, from single products to bulk quantities for businesses and institutions.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">How long do the products stay fresh?</h4>
                    <p className="text-gray-600">Our products have a shelf life of six months. Each product comes with clear packaging dates.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
