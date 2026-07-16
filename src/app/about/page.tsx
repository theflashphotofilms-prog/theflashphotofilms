const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Flash Photo Films
          </h1>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            Capturing life's precious moments with passion and professionalism
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2010, Flash Photo Films began as a passion project between two friends who shared a love for 
                photography and storytelling. What started as weekend hobby has grown into a full-service photography 
                and videography company trusted by hundreds of clients.
              </p>
              <p className="text-gray-600 mb-4">
                Our mission is to capture the authentic emotions and special moments that define life's most important 
                occasions. We believe that great photography is more than just taking pictures – it's about preserving 
                memories that last a lifetime.
              </p>
              <p className="text-gray-600">
                With over a decade of experience, we've perfected our craft while staying current with the latest 
                photography techniques and equipment. Our team brings creativity, professionalism, and attention to 
                detail to every project.
              </p>
            </div>
            
            <div className="flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                alt="Professional camera equipment"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-48 h-48 mx-auto" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Alex Johnson</h3>
              <p className="text-gray-600">Lead Photographer</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-48 h-48 mx-auto" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Maria Garcia</h3>
              <p className="text-gray-600">Videographer</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-48 h-48 mx-auto" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">James Wilson</h3>
              <p className="text-gray-600">Photo Editor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;