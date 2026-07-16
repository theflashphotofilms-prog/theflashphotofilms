const ServicesPage = () => {
  const detailedServices = [
    {
      title: 'Wedding Photography',
      description: 'Capture every precious moment of your special day with our professional wedding photography services. From engagement to ceremony and reception, we document your love story with artistic flair.',
      features: [
        'Full-day coverage',
        'Engagement session',
        'High-resolution photos',
        'Online gallery',
        'Print release'
      ],
      price: '$1,200+'
    },
    {
      title: 'Portrait Sessions',
      description: 'Professional portrait sessions for individuals, families, and corporate headshots. Our experienced photographers help you look your best in every shot.',
      features: [
        'Indoor/outdoor options',
        'Professional lighting',
        'Multiple outfit changes',
        'Retouched images',
        'Digital delivery'
      ],
      price: '$300+'
    },
    {
      title: 'Event Coverage',
      description: 'Comprehensive event coverage for corporate events, parties, and celebrations. We capture the atmosphere and key moments of your special occasion.',
      features: [
        'Customizable packages',
        'Multiple photographers',
        'Same-day slideshow',
        'Social media sharing',
        'Event planning consultation'
      ],
      price: '$500+'
    },
    {
      title: 'Video Production',
      description: 'High-quality video production services to bring your vision to life. From promotional videos to documentary-style coverage, we create compelling visual stories.',
      features: [
        'Pre-production planning',
        'Professional equipment',
        'Multi-camera setup',
        'Post-production editing',
        'Music licensing'
      ],
      price: '$800+'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Photography & Videography Services
          </h1>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            Professional services tailored to capture your unique story
          </p>
        </div>

        <div className="space-y-20">
          {detailedServices.map((service, index) => (
            <div 
              key={index} 
              className={`grid grid-cols-1 ${index % 2 === 0 ? 'md:grid-cols-1' : 'md:grid-cols-1'} gap-12 items-center`}
            >
              <div className={`bg-white p-8 rounded-xl shadow-lg ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">{service.title}</h2>
                  <span className="mt-2 md:mt-0 text-lg font-semibold text-blue-600">{service.price}</span>
                </div>
                
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What's Included:</h3>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8">
                  <a 
                    href="/contact" 
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors duration-300"
                  >
                    Book This Service
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-blue-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Contact us today to discuss your photography needs and schedule your session.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-md font-medium text-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Contact Us Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;