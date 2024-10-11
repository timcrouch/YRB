import React from 'react';
import { Coffee, Beer } from 'lucide-react';

const Menu = () => {
  const drinks = [
    { name: 'Yellow Rose Margarita', price: '€8', description: 'Our signature margarita with a Texan twist' },
    { name: 'Lone Star Beer', price: '€5', description: 'The National Beer of Texas' },
    { name: 'Porto Tonic', price: '€7', description: 'A local favorite with white port and tonic' },
    { name: 'Texas Mule', price: '€9', description: 'A spicy kick with vodka, lime, and ginger beer' },
    { name: 'Bluebonnet Bourbon Sour', price: '€10', description: 'Smooth bourbon with a floral touch' },
    { name: 'Armadillo Punch', price: '€8', description: 'A fruity, refreshing Texas-sized punch' },
  ];

  return (
    <section id="menu" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">Our Signature Drinks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {drinks.map((drink, index) => (
            <div key={index} className="bg-gray-50 rounded-lg shadow-md p-6 border-l-4 border-yellow-400">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-blue-900">{drink.name}</h3>
                <p className="text-lg font-semibold text-red-600">{drink.price}</p>
              </div>
              <p className="text-gray-600 mb-4">{drink.description}</p>
              <div className="flex items-center">
                {index % 2 === 0 ? <Coffee className="text-yellow-500 mr-2" /> : <Beer className="text-yellow-500 mr-2" />}
                <p className="text-sm text-gray-500">Taste the spirit of Texas</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;