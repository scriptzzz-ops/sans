import React from 'react';

const KeyPeople = () => {
  const people = [
    {
      name: 'श्री नीतीश कुमार',
      title: 'मुख्यमंत्री',
      subtitle: 'बिहार सरकार',
      image: '',
      isChief: true
    },
    {
      name: 'डॉ. संजय कुमार',
      title: 'प्रमुख सचिव',
      subtitle: 'शिक्षा विभाग',
      image: ''
    },
    {
      name: 'प्रो. राजेश कुमार',
      title: 'निदेशक',
      subtitle: 'संस्कृत शिक्षा परिषद्',
      image: ''
    },
    {
      name: 'श्री अमित कुमार',
      title: 'सचिव',
      subtitle: 'परीक्षा विभाग',
      image: ''
    },
    {
      name: 'डॉ. सुनीता देवी',
      title: 'उप निदेशक',
      subtitle: 'अकादमिक विभाग',
      image: ''
    },
    {
      name: 'श्री विकास सिंह',
      title: 'सहायक निदेशक',
      subtitle: 'प्रशासन विभाग',
      image: ''
    }
  ];

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-2">मुख्य व्यक्तित्व</h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
        </div>

        {/* Grid of Key People */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {people.map((person, index) => (
            <div key={index} className="text-center group">
              {/* Profile Image */}
              <div className="relative mb-3">
                <div
                  className={`relative w-20 h-20 mx-auto rounded-full overflow-hidden shadow-md transition-all duration-300 transform group-hover:scale-105 ${
                    person.isChief
                      ? 'border-2 border-orange-400'
                      : 'border-2 border-yellow-400'
                  }`}
                >
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Details Box */}
              <div className="bg-white p-3 rounded shadow-sm hover:shadow-md transition-all duration-300 transform group-hover:-translate-y-1">
                <h3 className="text-xs font-bold text-gray-800 mb-1 group-hover:text-orange-600 transition-colors leading-tight">
                  {person.name}
                </h3>
                <p
                  className={`font-semibold mb-1 text-xs ${
                    person.isChief ? 'text-orange-600' : 'text-red-600'
                  } group-hover:text-orange-700 transition-colors`}
                >
                  {person.title}
                </p>
                <p className="text-xs text-gray-600 leading-tight">{person.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyPeople;
