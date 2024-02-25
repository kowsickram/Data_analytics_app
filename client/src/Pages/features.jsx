import React from "react";

const Features = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">Key Features</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Feature 1: Data Analytics */}
        <div className="bg-slate-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-white">Data Analytics</h2>
          <p className="text-gray-300 mb-4">
            Perform advanced data analytics on CSV files uploaded by users.
          </p>
          <p className="text-gray-300">
            Simply upload your CSV file, and the app will generate descriptive
            statistics for the data within seconds.
          </p>
        </div>
        {/* Feature 2: Easy to Use */}
        <div className="bg-slate-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-white">Easy to Use</h2>
          <p className="text-gray-300 mb-4">
            The app provides a simple and intuitive interface for users to
            upload their CSV files and get detailed analytics results.
          </p>
          <p className="text-gray-300">
            No complex setup or technical knowledge required. Anyone can use
            it!
          </p>
        </div>
        {/* Feature 3: Fast Results */}
        <div className="bg-slate-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-white">Fast Results</h2>
          <p className="text-gray-300 mb-4">
            Get instant analytics results without any delays. The app processes
            data quickly and efficiently.
          </p>
          <p className="text-gray-300">
            Spend less time waiting and more time analyzing your data.
          </p>
        </div>
        {/* Feature 4: Responsive Design */}
        <div className="bg-slate-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-white">Responsive Design</h2>
          <p className="text-gray-300 mb-4">
            Access the app from any device, whether it's a desktop, tablet, or
            smartphone.
          </p>
          <p className="text-gray-300">
            The app's responsive design ensures optimal user experience across
            all devices.
          </p>
        </div>
      </div>
      {/* How to Use Section */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-6 text-white text-center">How to Use</h2>
        <ol className=" list-item text-gray-300 pl-8 text-justify ">
          <li className="mb-4">
            <span className="font-semibold ">Step 1:</span> Click on the "Choose
            File" button and select the CSV file you want to analyze.
          </li>
          <li className="mb-4">
            <span className="font-semibold">Step 2:</span> Once the file is
            selected, click the "Submit" button to start the analysis.
          </li>
          <li className="mb-4">
            <span className="font-semibold">Step 3:</span> Wait for the
            analysis to complete. You'll see the analytics results displayed on
            the screen.
          </li>
          <li className="mb-4">
            <span className="font-semibold">Step 4:</span> Explore the
            descriptive statistics generated for your data and gain valuable
            insights.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Features;
