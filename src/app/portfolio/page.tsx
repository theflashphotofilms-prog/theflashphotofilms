const PortfolioPage = () => {
  const portfolioItems = [
    {
      id: 1,
      title: 'Summer Wedding',
      category: 'Wedding',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
    },
    {
      id: 2,
      title: 'Corporate Event',
      category: 'Events',
      image: 'https://images.unsplash.com/photo-1505373877841-f46a2eb8f0ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
    },
    {
      id: 3,
      title: 'Family Portrait',
      category: 'Portraits',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
    },
    {
      id: 4,
      title: 'Adventure Photography',
      category: 'Landscape',
      image: 'https://images.unsplash.com/photo-1506260408121-e353d10b87c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
    },
    {
      id: 5,
      title: 'Product Shoot',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
    },
    {
      id: 6,
      title: 'Fashion Session',
      category: 'Portraits',
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b717b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Portfolio
          </h1>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            A selection of our finest work showcasing our photography and videography expertise
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-xl shadow-lg">
              <div className="aspect-w-1 aspect-h-1 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 object-cover group-hover:opacity-90 transition-opacity duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <span className="text-sm font-medium text-blue-400">{item.category}</span>
                  <h3 className="text-xl font-bold text-white mt-1">{item.title}</h3>
                </div>
              </div>
              <div className="p-4 bg-white">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-blue-600">{item.category}</span>
                  <button className="text-sm font-medium text-gray-900 hover:text-blue-600">
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-md font-medium text-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Book Your Session Today
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;