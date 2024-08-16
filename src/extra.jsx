
  // State for menu visibility
  const [showFashionMenu, setShowFashionMenu] = useState(false);
  const [showAccessoriesMenu, setShowAccessoriesMenu] = useState(false);
  const [showElectronicsMenu, setShowElectronicsMenu] = useState(false);
  const [showHomeMenu, setShowHomeMenu] = useState(false);



  return (
    <>
      <div className="flex flex-wrap justify-center m-2">
        {/* Parent Menu: Fashion */}
        <div className="relative">
          <button
            className="text-gray-700 p-2 hover:text-gray-900 font-medium"
            onClick={() => setShowFashionMenu(!showFashionMenu)}
          >
            Fashion
          </button>
          {showFashionMenu && (
            <ul className="absolute bg-white border rounded-md shadow-lg mt-2">
              <li>
                <button
                  className="text-gray-700 p-2 hover:text-gray-900 font-medium w-full text-left"
                  onClick={() => filterProduct('mens-shirts')}
                >
                  Men's Clothing
                </button>
              </li>
              <li>
                <button
                  className="text-gray-700 p-2 hover:text-gray-900 font-medium w-full text-left"
                  onClick={() => filterProduct('mens-shoes')}
                >
                  Men's Shoes
                </button>
              </li>
              <li>
                <button
                  className="text-gray-700 p-2 hover:text-gray-900 font-medium w-full text-left"
                  onClick={() => filterProduct('mens-watches')}
                >
                  Men's Watches
                </button>
              </li>
              <li>
                <button
                  className="text-gray-700 p-2 hover:text-gray-900 font-medium w-full text-left"
                  onClick={() => filterProduct('skin-care')}
                >
                  Beauty
                </button>
              </li>
            </ul>
          )}
        </div>

        {/* Parent Menu: Accessories */}
        <div className="relative">
          <button
            className="text-gray-700 p-2 hover:text-gray-900 font-medium"
            onClick={() => setShowAccessoriesMenu(!showAccessoriesMenu)}
          >
            Accessories
          </button>
          {showAccessoriesMenu && (
            <ul className="absolute bg-white border rounded-md shadow-lg mt-2">
              <li>
                <button
                  className="text-gray-700 p-2 hover:text-gray-900 font-medium w-full text-left"
                  onClick={() => filterProduct('mobile-accessories')}
                >
                  Mobile Accessories
                </button>
              </li>
              <li>
                <button
                  className="text-gray-700 p-2 hover:text-gray-900 font-medium w-full text-left"
                  onClick={() => filterProduct('sunglasses')}
                >
                  Sunglasses
                </button>
              </li>
              <li>
                <button
                  className="text-gray-700 p-2 hover:text-gray-900 font-medium w-full text-left"
                  onClick={() => filterProduct('sports-accessories')}
                >
                  Sports Accessories
                </button>
              </li>
              <li>
                <button
                  className="text-gray-700 p-2 hover:text-gray-900 font-medium w-full text-left"
                  onClick={() => filterProduct('kitchen-accessories')}
                >
                  Kitchen Accessories
                </button>
              </li>
            </ul>
          )}
        </div>

        {/* Parent Menu: Electronics */}
        <div className="relative">
          <button
            className="text-gray-700 p-2 hover:text-gray-900 font-medium"
            onClick={() => setShowElectronicsMenu(!showElectronicsMenu)}
          >
            Electronics
          </button>
          {showElectronicsMenu && (
            <ul className="absolute bg-white border rounded-md shadow-lg mt-2">
              <li>
                <button
                  className="text-gray-700 p-2 hover:text-gray-900 font-medium w-full text-left"
                  onClick={() => filterProduct('smartphones')}
                >
                  Smartphones
                </button>
              </li>
              <li>
                <button
                  className="text-gray-700 p-2 hover:text-gray-900 font-medium w-full text-left"
                  onClick={() => filterProduct('laptops')}
                >
                  Laptops
                </button>
              </li>
            </ul>
          )}
        </div>

        {/* Parent Menu: Home */}
        <div className="relative">
          <button
            className="text-gray-700 p-2 hover:text-gray-900 font-medium"
            onClick={() => setShowHomeMenu(!showHomeMenu)}
          >
            Home
          </button>
          {showHomeMenu && (
            <ul className="absolute bg-white border rounded-md shadow-lg mt-2">
              <li>
                <button
                  className="text-gray-700 p-2 hover:text-gray-900 font-medium w-full text-left"
                  onClick={() => filterProduct('home-decoration')}
                >
                  Home Products
                </button>
              </li>
            </ul>
          )}
        </div>

        {/* Individual Buttons Without Submenus */}
        <button
          className="text-gray-700 p-2 hover:text-gray-900 font-medium"
          onClick={() => filterProductData(filterTopRated)}
        >
          Top Rated
        </button>
        <button
          className="text-gray-700 p-2 hover:text-gray-900 font-medium"
          onClick={() => filterProduct('motorcycle')}
        >
          Motorcycle
        </button>
        <button
          className="text-gray-700 p-2 hover:text-gray-900 font-medium"
          onClick={() => filterProduct('groceries')}
        >
          Groceries
        </button>
      </div>
      <div className="cards flex flex-wrap justify-around">
        {ProductArray.map((obj) => (
          <ProductCard obj={obj} key={obj.id} />
        ))}
      </div>
    </>
  );
};

export default Home;
