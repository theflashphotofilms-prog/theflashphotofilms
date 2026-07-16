const Services = () => {
  const services = [
    {
      title: 'Wedding Photography',
      description: 'Capture every precious moment of your special day with our professional wedding photography services.',
      icon: '📷',
    },
    {
      title: 'Portrait Sessions',
      description: 'Professional portrait sessions for individuals, families, and corporate headshots.',
      icon: '👤',
    },
    {
      title: 'Event Coverage',
      description: 'Comprehensive event coverage for corporate events, parties, and celebrations.',
      icon: '🎉',
    },
    {
      title: 'Video Production',
      description: 'High-quality video production services to bring your vision to life.',
      icon: '🎥',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our Photography & Videography Services
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We offer a wide range of professional photography and videography services tailored to your needs.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white overflow-hidden shadow rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="px-6 py-8">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-lg font-medium text-gray-900">{service.title}</h3>
                  <p className="mt-2 text-base text-gray-500">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;