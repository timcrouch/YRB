import React from 'react';
import { MapPin, Phone, Mail, Instagram, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">Visit Us</h2>
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4 text-blue-900">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="text-red-600 mr-2" />
                <p>Rua da Galeria de Paris 67, 4050-487 Porto, Portugal</p>
              </div>
              <div className="flex items-center">
                <Phone className="text-red-600 mr-2" />
                <p>+351 912 819 625</p>
              </div>
              <div className="flex items-center">
                <Mail className="text-red-600 mr-2" />
                <p>info@yellowrose.bar</p>
              </div>
              <div className="flex items-center">
                <Instagram className="text-red-600 mr-2" />
                <a href="https://www.instagram.com/yellowrosebar" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  @yellowrosebar
                </a>
              </div>
              <div className="flex items-center">
                <Clock className="text-red-600 mr-2" />
                <p>Open Tuesday through Saturday from 8 PM to 4 AM</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3004.3891856371374!2d-8.616569684688566!3d41.14784337928743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2464e0e01e5555%3A0x4a8f13f8b2c2e2e0!2sRua%20da%20Galeria%20de%20Paris%2067%2C%204050-284%20Porto%2C%20Portugal!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus" 
              width="100%" 
              height="450" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;