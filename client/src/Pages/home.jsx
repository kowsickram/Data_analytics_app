import React from 'react';

export default function Home (){
  return (
    <>
      <div className='container h-screen flex items-center flex-col p-4 justify-center'>
        <img src='./images/analysiiii.png' className='rounded-md shadow-md hover:shadow-lg' width={250} alt='logo' />
        <h1 className='text-center text-2xl font-bold mt-11 text-white'>
          Transform Your Data Into Meaningful Insights
        </h1>
        <p className='text-center text-lg mt-4 text-gray-300'>
          Welcome to Analyzify - your all-in-one solution for data analytics. Whether you're a business owner, data scientist, or simply curious about your data, our app makes it easy to analyze and visualize your data like never before.
        </p>
        <div className='mt-8 flex justify-center'>
          <a href='/' className='bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-md focus:outline-none focus:bg-blue-600'>
            Get Started
          </a>
        </div>
      </div>
      {/* Additional Sections */}
      <section className='bg-gray-800 py-16'>
        <div className='container mx-auto'>
          <h2 className='text-3xl font-bold text-white text-center mb-8'>
            Why Choose Data Analyzer?
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {/* Feature 1 */}
            <div className='p-6 bg-gray-900 rounded-md shadow-md'>
              <h3 className='text-xl font-semibold text-white mb-4'>Easy to Use</h3>
              <p className='text-gray-300'>
                Our app offers a simple and intuitive interface, allowing users to upload their data effortlessly and get insightful analytics in minutes.
              </p>
            </div>
            {/* Feature 2 */}
            <div className='p-6 bg-gray-900 rounded-md shadow-md'>
              <h3 className='text-xl font-semibold text-white mb-4'>Powerful Analytics</h3>
              <p className='text-gray-300'>
                Utilize advanced data analytics algorithms to uncover trends, patterns, and outliers in your data, enabling informed decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>
          </>
  );
};


