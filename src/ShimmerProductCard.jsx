import React from 'react';

const ShimmerProductCard = () => (
  <div className="flex flex-col lg:flex-row lg:gap-12 p-4 bg-white shadow-md rounded-lg animate-pulse">
    {/* Image Placeholder */}
    <div className="lg:w-1/2">
      <div className="h-96 bg-gray-200 rounded-lg"></div>
    </div>

    {/* Details Placeholder */}
    <div className="lg:w-1/2 mt-4 lg:mt-0 flex flex-col gap-4">
      <div className="h-6 bg-gray-200 rounded w-3/4"></div> {/* Title */}
      <div className="h-4 bg-gray-200 rounded w-1/2"></div>{' '}
      {/* Subtitle or Brand */}
      <div className="flex items-center gap-2">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="h-5 w-5 bg-gray-200 rounded-full"></div> // Star Rating
        ))}
      </div>
      <div className="h-8 bg-gray-200 rounded w-1/2"></div> {/* Price */}
      <div className="h-4 bg-gray-200 rounded w-3/4"></div> {/* Description */}
      <div className="h-12 bg-gray-200 rounded w-full"></div> {/* Button */}
    </div>
  </div>
);

export default ShimmerProductCard;
