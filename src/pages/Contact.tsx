import React from 'react';
import { MapPin, Phone, Mail, Calendar } from 'lucide-react';

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-16 pt-24">
      <h1 className="text-4xl font-bold text-black text-center mb-12">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              We'd love to hear from you. Please feel free to contact us using any of the following methods.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-gray-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Address:</h3>
                <p className="text-gray-600">
                  J83C+5R8, Maharaja Agrasen College,<br />
                  Ganpati Mandir Marg, Vasundhara Enclave,<br />
                  Delhi-110096, New Delhi, India
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-gray-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Phone:</h3>
                <p className="text-gray-600">+91 9871205587 (Siddhant – President, CDF MAC)</p>
                <p className="text-gray-600">+91 7042940125 (Pratik – Vice President, CDF MAC)</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-gray-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Email:</h3>
                <p className="text-gray-600">cdf.mac.du@gmail.com</p>
              </div>
            </div>

            {/* Calendly Section */}
            <div className="flex items-start space-x-4">
              <Calendar className="w-6 h-6 text-gray-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Reach through Calendly:</h3>
                <a 
                  href="https://calendly.com/cdf-mac-du" 
                  className="text-blue-600 hover:underline" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Schedule a meeting
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="h-[500px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.8892450124087!2d77.31724561508876!3d28.606899982429473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4e9d0e99aef%3A0xc766f5294f0a8974!2sMaharaja%20Agrasen%20College!5e0!3m2!1sen!2sin!4v1647887842012!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
