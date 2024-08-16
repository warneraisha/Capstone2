import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

// Helper component for breadcrumb navigation
const Breadcrumb = ({ category, brand }) => (
  <nav class="flex">
    <ol role="list" class="flex items-center">
      <li class="text-left">
        <div class="-m-1">
          <Link
            to={'/'}
            class="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
          >
            {' '}
            Home{' '}
          </Link>
        </div>
      </li>

      <li class="text-left">
        <div class="flex items-center">
          <span class="mx-2 text-gray-400">/</span>
          <div class="-m-1">
            <Link
              to={'/'}
              class="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
            >
              {' '}
              Products{' '}
            </Link>
          </div>
        </div>
      </li>

      <li class="text-left">
        <div class="flex items-center">
          <span class="mx-2 text-gray-400">/</span>
          <div class="-m-1">
            <Link
              to={'/'}
              class="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
              aria-current="page"
            >
              {' '}
              {category}{' '}
            </Link>
          </div>
        </div>
      </li>
    </ol>
  </nav>
);

// Helper component for image gallery
const ImageGallery = ({ images, selectedImage, setSelectedImage, title }) => (
  <div className="lg:flex lg:items-start">
    <div className="lg:order-2 lg:ml-5">
      <div className="max-w-xl overflow-hidden rounded-lg">
        <img
          className="h-96 w-full max-w-full object-cover transition duration-300 ease-in-out hover:scale-125"
          src={selectedImage}
          alt={title}
        />
      </div>
    </div>

    <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
      <div className="flex flex-row items-start lg:flex-col">
        {images.map((image, index) => (
          <button
            key={index}
            type="button"
            className={`flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 ${
              selectedImage === image ? 'border-gray-900' : 'border-transparent'
            }`}
            onClick={() => setSelectedImage(image)}
          >
            <img
              className="h-full w-full object-cover"
              src={image}
              alt={`${title} ${index}`}
            />
          </button>
        ))}
      </div>
    </div>
  </div>
);

// Helper component for rating
const Rating = ({ rating }) => {
  const stars = Array(5)
    .fill(false)
    .map((_, index) => index < Math.round(rating));
  return (
    <div className="flex items-center">
      {stars.map((filled, index) => (
        <svg
          key={index}
          className={`block h-4 w-4 align-middle ${
            filled ? 'text-yellow-500' : 'text-gray-300'
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      ))}
      <div className="ml-4 text-sm font-medium text-gray-900">{rating}</div>
    </div>
  );
};

// Main component
const SingleProduct = () => {
  const [obj, setObj] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      setObj(data);
      if (data.images.length > 0) {
        setSelectedImage(data.images[0]);
      }
    };
    fetchProduct();
  }, [id]);

  if (!obj) return <h1>...Loading</h1>;

  const { title, description, images, brand, price, category, rating } = obj;

  return (
    <div>
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <Breadcrumb category={category} brand={brand} />
          <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-3 lg:row-end-1">
              <ImageGallery
                images={images}
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
                title={title}
              />
            </div>
            <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
              <h1 className="sm:text-2xl font-bold text-gray-900">{title}</h1>
              <Rating rating={rating} />
              <div className="mt-6 border-t border-gray-200 pt-6">
                <h3 className="text-base font-semibold text-gray-900">
                  Details
                </h3>
                <div className="mt-4 space-y-4">
                  <div className="flex justify-between text-sm font-medium text-gray-900">
                    <span>Category</span>
                    <span>{category}</span>
                  </div>
                  <div className="flex justify-between text-sm font-medium text-gray-900">
                    <span>Brand</span>
                    <span>{brand}</span>
                  </div>
                  <div className="flex justify-between text-sm font-medium text-gray-900">
                    <span>Description</span>
                    <div> : {description}</div>
                  </div>
                </div>
              </div>
              <div className="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
                <div className="flex items-end">
                  <h1 className="text-3xl font-bold">${price}</h1>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-blue-600 px-12 py-3 text-base font-bold text-white transition-all duration-200 ease-in-out hover:bg-blue-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0 mr-3 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleProduct;
