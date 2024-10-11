import React from 'react';
import { Calendar } from 'lucide-react';

const Events = () => {
  const events = [
    { date: '2023-10-31', name: 'Toga-themed Halloween Party', description: 'Join us for a spooky night of togas and Texas spirits!' },
    { date: '2023-11-23', name: 'Thanksgiving Texan Feast', description: 'Celebrate Thanksgiving with a Texan twist!' },
    { date: '2023-12-31', name: 'New Year\'s Eve Rodeo Bash', description: 'Ring in the New Year, Texas-style!' },
    { date: '2024-03-02', name: 'Texas Independence Day', description: 'Celebrate Texas history with special drinks and music!' },
  ];

  return (
    <section id="events" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">Special Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 border-t-4 border-yellow-400">
              <div className="flex items-center mb-4">
                <Calendar className="text-red-600 mr-2" />
                <p className="text-lg font-semibold">{event.date}</p>
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-900">{event.name}</h3>
              <p className="text-gray-600">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;