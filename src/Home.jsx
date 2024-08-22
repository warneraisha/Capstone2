import { useState, useEffect, useContext } from 'react';
import ProductCard from './ProductCard';
import ShimmerUI from './shimmerUI';
import { Theme } from './utility/ThemeContext';

let Home = () => {
  let [allData, setAllData] = useState([]);
  let [ProductArray, setProductArray] = useState([]);
  let [searchText, setSearchText] = useState('');

  // State for menu visibility
  const [showFashionMenu, setShowFashionMenu] = useState(false);
  const [showAccessoriesMenu, setShowAccessoriesMenu] = useState(false);
  const [showElectronicsMenu, setShowElectronicsMenu] = useState(false);

  let getData = async () => {
    let data = await fetch('https://dummyjson.com/products?limit=0&skip=30');
    let obj = await data.json();

    setProductArray(obj.products);
    setAllData(obj.products);
  };

  // This effect is used to fetch data when the component mounts
  // The dependency array is empty, so it will only run once
  // The function getData is called and it will fetch the data
  // and set the state with the data
  useEffect(() => {
    getData();
  }, []);

  let filterProductData = (fn) => {
    let data = allData.filter(fn);
    setProductArray(data);
  };

  let filterTopRated = (obj) => {
    return obj.rating > 4.5;
  };

  let filterProduct = (proCategory) => {
    let fn = (obj) => {
      return proCategory.toLowerCase() === obj.category.toLowerCase();
    };
    filterProductData(fn);
  };

  // Search Filter
  let searchProduct = () => {
    let fn = (obj) =>
      obj.title.toLowerCase().includes(searchText.toLowerCase());
    filterProductData(fn);
    setSearchText('');
  };

  // Handle Menu Item Click
  const handleMenuItemClick = (menuSetter) => {
    menuSetter(false); // Close the submenu
  };

  // Handle Submenu Toggle
  const handleMenuToggle = (menuId, setter) => {
    setter((prev) => !prev); // Toggle the visibility
  };

  if (ProductArray.length === 0) {
    return (
      <div>
        <ShimmerUI />
      </div>
    );
  }

  let { theme, setTheme } = useContext(Theme);

  // Define card theme classes
  let lightTheme = 'cards flex flex-wrap justify-around bg-white';
  let darkTheme = 'cards flex flex-wrap justify-around bg-gray-900';

  // Define nav-items theme classes
  let lightThemeNav = 'bg-white text-gray-700';
  let darkThemeNav = 'bg-gray-900 text-white';

  // Define input field theme classes
  const inputLightTheme = 'bg-gray-100 border-gray-300';
  const inputDarkTheme = 'bg-gray-700 border-gray-600';

  // Define submenu theme classes
  const submenuLightTheme = 'bg-white text-gray-700';
  const submenuDarkTheme = 'bg-gray-900 text-gray-300';

  return (
    <>
      <div
        className={`shadow-md p-4 ${
          theme == 'light' ? lightThemeNav : darkThemeNav
        }`}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Search Bar */}
          <div className="relative w-full max-w-md">
            <input
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
              type="text"
              placeholder="Search..."
              className={`w-full h-12 px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                theme === 'light' ? inputLightTheme : inputDarkTheme
              }`}
            />
            <button
              className="absolute inset-y-0 right-0 flex items-center pr-3"
              onClick={searchProduct}
            >
              Search
            </button>
          </div>

          {/* Menu */}
          <div className="flex space-x-4">
            <button
              className=" font-medium"
              onClick={() => filterProductData(filterTopRated)}
            >
              Top Rated
            </button>

            {/* Parent Menu: Fashion */}
            <div className="relative z-50">
              <button
                className=" p-2  font-medium"
                onClick={() => handleMenuToggle('fashion', setShowFashionMenu)}
              >
                Fashion
              </button>
              {showFashionMenu && (
                <ul className="absolute bg-white border rounded-md shadow-lg mt-2">
                  <li>
                    <button
                      className=" p-2  font-medium w-full text-left"
                      onClick={() => {
                        filterProduct('mens-shirts');
                        handleMenuItemClick(setShowFashionMenu);
                      }}
                    >
                      Men's Clothing
                    </button>
                  </li>
                  <li>
                    <button
                      className=" p-2 font-medium w-full text-left"
                      onClick={() => {
                        filterProduct('mens-shoes');
                        handleMenuItemClick(setShowFashionMenu);
                      }}
                    >
                      Men's Shoes
                    </button>
                  </li>
                  <li>
                    <button
                      className=" p-2 font-medium w-full text-left"
                      onClick={() => {
                        filterProduct('mens-watches');
                        handleMenuItemClick(setShowFashionMenu);
                      }}
                    >
                      Men's Watches
                    </button>
                  </li>
                  <li>
                    <button
                      className=" p-2 font-medium w-full text-left"
                      onClick={() => {
                        filterProduct('womens-watches');
                        handleMenuItemClick(setShowFashionMenu);
                      }}
                    >
                      Women's Watches
                    </button>
                  </li>
                  <li>
                    <button
                      className=" p-2 font-medium w-full text-left"
                      onClick={() => {
                        filterProduct('womens-shoes');
                        handleMenuItemClick(setShowFashionMenu);
                      }}
                    >
                      Women's Shoes
                    </button>
                  </li>
                  <li>
                    <button
                      className=" p-2 font-medium w-full text-left"
                      onClick={() => {
                        filterProduct('womens-dresses');
                        handleMenuItemClick(setShowFashionMenu);
                      }}
                    >
                      Women's Dresses
                    </button>
                  </li>
                </ul>
              )}
            </div>

            {/* Parent Menu: Accessories */}
            <div className="relative z-50">
              <button
                className=" p-2 font-medium"
                onClick={() =>
                  handleMenuToggle('accessories', setShowAccessoriesMenu)
                }
              >
                Accessories
              </button>
              {showAccessoriesMenu && (
                <ul className="absolute bg-white border rounded-md shadow-lg mt-2">
                  <li>
                    <button
                      className=" p-2 font-medium w-full text-left"
                      onClick={() => {
                        filterProduct('mobile-accessories');
                        handleMenuItemClick(setShowAccessoriesMenu);
                      }}
                    >
                      Mobile
                    </button>
                  </li>
                  <li>
                    <button
                      className=" p-2 font-medium w-full text-left"
                      onClick={() => {
                        filterProduct('sunglasses');
                        handleMenuItemClick(setShowAccessoriesMenu);
                      }}
                    >
                      Sunglasses
                    </button>
                  </li>
                  <li>
                    <button
                      className=" p-2 font-medium w-full text-left"
                      onClick={() => {
                        filterProduct('sports-accessories');
                        handleMenuItemClick(setShowAccessoriesMenu);
                      }}
                    >
                      Sports
                    </button>
                  </li>
                  <li>
                    <button
                      className=" p-2 font-medium w-full text-left"
                      onClick={() => {
                        filterProduct('kitchen-accessories');
                        handleMenuItemClick(setShowAccessoriesMenu);
                      }}
                    >
                      Kitchen
                    </button>
                  </li>
                  <li>
                    <button
                      className=" p-2 font-medium w-full text-left"
                      onClick={() => {
                        filterProduct('womens-jewellery');
                        handleMenuItemClick(setShowAccessoriesMenu);
                      }}
                    >
                      Jewellery
                    </button>
                  </li>
                </ul>
              )}
            </div>

            {/* Parent Menu: Electronics */}
            <div className="relative z-50">
              <button
                className=" p-2 font-medium"
                onClick={() =>
                  handleMenuToggle('electronics', setShowElectronicsMenu)
                }
              >
                Electronics
              </button>
              {showElectronicsMenu && (
                <ul className="absolute bg-white border rounded-md shadow-lg mt-2">
                  <li>
                    <button
                      className=" p-2 font-medium w-full text-left"
                      onClick={() => {
                        filterProduct('smartphones');
                        handleMenuItemClick(setShowElectronicsMenu);
                      }}
                    >
                      Smartphones
                    </button>
                  </li>
                  <li>
                    <button
                      className=" p-2 font-medium w-full text-left"
                      onClick={() => {
                        filterProduct('laptops');
                        handleMenuItemClick(setShowElectronicsMenu);
                      }}
                    >
                      Laptops
                    </button>
                  </li>
                  <li>
                    <button
                      className=" p-2 font-medium w-full text-left"
                      onClick={() => {
                        filterProduct('tablets');
                        handleMenuItemClick(setShowElectronicsMenu);
                      }}
                    >
                      Tablets
                    </button>
                  </li>
                </ul>
              )}
            </div>

            {/* Individual Buttons Without Submenus */}
            <button
              className=" p-2 font-medium"
              onClick={() => filterProduct('motorcycle')}
            >
              Motorcycle
            </button>
            <button
              className=" p-2 font-medium"
              onClick={() => filterProduct('groceries')}
            >
              Groceries
            </button>
            <button
              className=" p-2 font-medium"
              onClick={() => filterProduct('skin-care')}
            >
              Skin Care
            </button>
          </div>
        </div>
      </div>
      <div className={theme == 'light' ? lightTheme : darkTheme}>
        {ProductArray.map((obj) => (
          <ProductCard
            obj={obj}
            key={obj.id}
            showRibbon={obj.rating > 4.7}
          ></ProductCard>
        ))}
      </div>
    </>
  );
};

export default Home;
