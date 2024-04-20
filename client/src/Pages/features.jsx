import React from "react";

const Features = () => {
  return (
    <div className="container flex flex-col justify-center items-center mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center font-Kite text-white">Key Features</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Feature 1: Data Analytics */}
        <div className="bg-slate-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl text-center font-semibold mb-4 text-white">Data Analytics</h2>
          <p className="text-gray-300 mb-4 font-Quicksand">
            Perform advanced data analytics on CSV files uploaded by users.
          </p>
          <p className="text-gray-300 font-Quicksand">
            Simply upload your CSV file, and the app will generate descriptive
            statistics for the data within seconds.
          </p>
        </div>
        {/* Feature 2: Easy to Use */}
        <div className="bg-slate-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl text-center font-semibold mb-4 text-white">Easy to Use</h2>
          <p className="text-gray-300 mb-4 font-Quicksand">
            The app provides a simple and intuitive interface for users to
            upload their CSV files and get detailed analytics results.
          </p>
          <p className="text-gray-300 font-Quicksand">
            No complex setup or technical knowledge required. Anyone can use
            it!
          </p>
        </div>
        {/* Feature 3: Fast Results */}
        <div className="bg-slate-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl text-center font-semibold mb-4 text-white">Fast Results</h2>
          <p className="text-gray-300 mb-4 font-Quicksand">
            Get instant analytics results without any delays. The app processes
            data quickly and efficiently.
          </p>
          <p className="text-gray-300 font-Quicksand">
            Spend less time waiting and more time analyzing your data.
          </p>
        </div>
        {/* Feature 4: Responsive Design */}
        <div className="bg-slate-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl text-center font-semibold mb-4 text-white">Responsive Design</h2>
          <p className="text-gray-300 mb-4 font-Quicksand">
            Access the app from any device, whether it's a desktop, tablet, or
            smartphone.
          </p>
          <p className="text-gray-300 font-Quicksand">
            The app's responsive design ensures optimal user experience across
            all devices.
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default Features;
