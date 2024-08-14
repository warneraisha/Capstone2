let ProductCard = ({ obj }) => {
  let { title, thumbnail, description, price, rating, category, images } = obj;

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2">
      <img
        className="p-1 rounded-t-lg justify-center items-center"
        src={images}
        alt={thumbnail}
      />

      <div className="px-1 pb-2 ">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
            {rating}
          </span>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
            {category}
          </span>
        </h5>

        <div className="text-xl tracking-tight text-gray-900 dark:text-white">
          <p>{description}</p>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${price}
          </span>
          <a
            href="#"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
