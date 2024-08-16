import React from 'react';

const ShimmerUI = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Shimmer for Navbar and Search Bar */}
      <div className="bg-white shadow-md p-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Shimmer for Search Bar */}
          <div className="relative w-full max-w-md bg-gray-200 animate-pulse rounded-lg">
            <div className="h-12 w-full bg-gray-200 animate-pulse rounded-lg"></div>
          </div>

          {/* Shimmer for Menu */}
          <div className="flex space-x-4">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="h-8 bg-gray-200 animate-pulse rounded-lg w-24"
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Shimmer for Product Cards */}
      <div className="flex flex-wrap justify-around p-4">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="relative w-full max-w-xs m-4 bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden"
          >
            <div className="h-60 bg-gray-200 animate-pulse"></div>
            <div className="p-4">
              <div className="h-6 bg-gray-200 animate-pulse mb-4 w-3/4"></div>
              <div className="flex items-center justify-between mb-4">
                <div className="h-6 bg-gray-200 animate-pulse w-1/2"></div>
                <div className="flex items-center">
                  <div className="h-5 w-5 bg-gray-200 animate-pulse rounded-full mr-1"></div>
                  <div className="h-5 w-5 bg-gray-200 animate-pulse rounded-full mr-1"></div>
                  <div className="h-5 w-5 bg-gray-200 animate-pulse rounded-full mr-1"></div>
                  <div className="h-5 w-5 bg-gray-200 animate-pulse rounded-full mr-1"></div>
                  <div className="h-5 w-5 bg-gray-200 animate-pulse rounded-full"></div>
                </div>
              </div>
              <div className="h-8 bg-gray-200 animate-pulse rounded w-1/2"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShimmerUI;
