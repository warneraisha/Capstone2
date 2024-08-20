import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useContext } from 'react';
import { Theme } from './utility/ThemeContext';

const ProductCard = ({ obj, showRibbon }) => {
  const {
    title,
    thumbnail,
    description,
    price,
    rating,
    category,
    images,
    id,
    discountPercentage,
  } = obj;

  const { theme, setTheme } = useContext(Theme);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${id}`);
  };

  // Calculate the number of full, half, and empty stars
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const totalStars = 5;

  // Generate star elements
  const stars = Array.from({ length: totalStars }, (_, index) => {
    if (index < fullStars) {
      return (
        <svg
          key={index}
          aria-hidden="true"
          className="h-5 w-5 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      );
    }
    if (index === fullStars && hasHalfStar) {
      return (
        <svg
          key={index}
          aria-hidden="true"
          className="h-5 w-5 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      );
    }
    return (
      <svg
        key={index}
        aria-hidden="true"
        className="h-5 w-5 text-gray-300"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
    );
  });

  // Theme-specific class names
  const cardClasses =
    theme === 'light'
      ? 'relative m-4 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md'
      : 'relative m-4 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-700 bg-gray-800 shadow-lg';

  const titleClasses =
    theme === 'light'
      ? 'text-xl tracking-tight text-slate-900'
      : 'text-xl tracking-tight text-slate-200';

  const priceClasses =
    theme === 'light'
      ? 'text-2xl font-bold text-slate-900'
      : 'text-2xl font-bold text-slate-300';

  const discountClasses =
    theme === 'light'
      ? 'text-sm text-slate-900 line-through'
      : 'text-sm text-slate-400 line-through';

  const buttonClasses =
    theme === 'light'
      ? 'flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-blue-300'
      : 'flex items-center justify-center rounded-md bg-slate-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-blue-500';

  return (
    <div className={cardClasses} onClick={handleClick}>
      {/* Conditionally render the ribbon if showRibbon is true */}
      {showRibbon && (
        <div className="absolute left-0 top-0 h-16 w-16">
          <div className="bg-indigo-700 absolute transform -rotate-45 text-center text-white font-semibold py-1 left-[-34px] top-[32px] w-[170px]">
            Popular
          </div>
        </div>
      )}
      <Link className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
        <img
          className="object-cover ml-6 max-w-xs transition duration-300 ease-in-out hover:scale-110"
          src={thumbnail}
          alt={title}
        />
        <span className="absolute top-0 right-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-slate-200">
          {Math.floor(discountPercentage)}% OFF
        </span>
      </Link>
      <div className="mt-4 px-5 pb-5">
        <h5 className={titleClasses}>{title}</h5>

        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className={priceClasses}>${price}</span>
            <span className={discountClasses}>
              ${Math.floor(price + discountPercentage)}
            </span>
          </p>
          <div className="flex items-center">
            {stars}
            <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
              {rating.toFixed(1)}
            </span>
          </div>
        </div>
        <Link className={buttonClasses}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          Add to cart
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
