import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">Yellow Rose Bar</h3>
            <p>Bringing Texas to Porto since 2023</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-yellow-300 transition-colors">
              <Facebook />
            </a>
            <a href="#" className="hover:text-yellow-300 transition-colors">
              <Twitter />
            </a>
            <a href="#" className="hover:text-yellow-300 transition-colors">
              <Instagram />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 Yellow Rose Bar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;