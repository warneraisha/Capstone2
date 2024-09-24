import { useState, useEffect, useContext, useRef } from 'react';
import ProductCard from './ProductCard';
import ShimmerUI from './shimmerUI';
import { Theme } from './utility/ThemeContext';
import { FaTshirt, FaShoePrints, FaRegClock, FaMobileAlt, FaTabletAlt, FaLaptop, FaShoppingBasket, FaStar } from 'react-icons/fa'; // Updated imports

const Menu = ({ title, items, filterProduct, theme, icon }) => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  const handleMenuToggle = () => setShowMenu((prev) => !prev);

  const submenuStyles = theme === 'light' ? 
    'absolute bg-white text-gray-800' : 
    'absolute bg-gray-800 text-gray-300';

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative z-50" ref={menuRef}>
      <button
        className="flex items-center p-2 font-medium transition-all duration-200 bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
        onClick={handleMenuToggle}
        aria-expanded={showMenu}
      >
        {icon} {title}
      </button>
      {showMenu && (
        <ul className={`${submenuStyles} border rounded-md shadow-lg mt-2 p-2`}>
          {items.map((item) => (
            <li key={item.category}>
              <button
                className="flex items-center p-2 font-medium w-full text-left transition-all duration-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
                onClick={() => {
                  filterProduct(item.category);
                  setShowMenu(false);
                }}
              >
                {item.icon} {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Home = () => {
  const [allData, setAllData] = useState([]);
  const [ProductArray, setProductArray] = useState([]);
  const [searchText, setSearchText] = useState('');

  const { theme } = useContext(Theme);

  const getData = async () => {
    const response = await fetch('https://dummyjson.com/products?limit=0&skip=30');
    const obj = await response.json();
    setProductArray(obj.products);
    setAllData(obj.products);
  };

  useEffect(() => {
    getData();
  }, []);

  const filterProductData = (fn) => {
    const data = allData.filter(fn);
    setProductArray(data);
  };

  const filterTopRated = (obj) => obj.rating > 4.5;

  const filterProduct = (proCategory) => {
    const fn = (obj) => proCategory.toLowerCase() === obj.category.toLowerCase();
    filterProductData(fn);
  };

  const searchProduct = () => {
    const fn = (obj) => obj.title.toLowerCase().includes(searchText.toLowerCase());
    filterProductData(fn);
    setSearchText('');
  };

  if (ProductArray.length === 0) {
    return <ShimmerUI />;
  }

  const fashionItems = [
    { label: "Men's Clothing", category: 'mens-shirts', icon: <FaTshirt className="mr-2" /> },
    { label: "Men's Shoes", category: 'mens-shoes', icon: <FaShoePrints className="mr-2" /> },
    { label: "Men's Watches", category: 'mens-watches', icon: <FaRegClock className="mr-2" /> },
    { label: "Women's Watches", category: 'womens-watches', icon: <FaRegClock className="mr-2" /> },
    { label: "Women's Shoes", category: 'womens-shoes', icon: <FaShoePrints className="mr-2" /> },
    { label: "Women's Dresses", category: 'womens-dresses', icon: <FaTshirt className="mr-2" /> },
  ];

  const accessoryItems = [
    { label: "Mobile", category: 'mobile-accessories',  icon: <FaMobileAlt className="mr-2" /> },
    { label: "Sunglasses", category: 'sunglasses', icon: <FaShoppingBasket className="mr-2" /> },
    { label: "Sports", category: 'sports-accessories', icon: <FaShoppingBasket className="mr-2" /> },
    { label: "Kitchen", category: 'kitchen-accessories', icon: <FaShoppingBasket className="mr-2" /> },
    { label: "Jewellery", category: 'womens-jewellery', icon: <FaShoppingBasket className="mr-2" /> },
  ];

  const electronicsItems = [
    { label: "Smartphones", category: 'smartphones', icon: <FaMobileAlt className="mr-2" /> },
    { label: "Laptops", category: 'laptops', icon: <FaLaptop className="mr-2" /> },
    { label: "Tablets", category: 'tablets', icon: <FaTabletAlt className="mr-2" /> },
  ];

  return (
    <>
      <div className={`shadow-md p-4 ${theme === 'light' ? 'bg-white text-gray-700' : 'bg-gray-900 text-white'}`}>
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="relative w-full max-w-md">
            <input
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
              type="text"
              placeholder="Search..."
              className={`w-full h-12 px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${theme === 'light' ? 'bg-gray-100 border-gray-300' : 'bg-gray-700 border-gray-600'}`}
            />
            <button
              className="absolute inset-y-0 right-0 flex items-center pr-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
              onClick={searchProduct}
            >
              Search
            </button>
          </div>

          <div className="flex space-x-4">
            <button
              className="flex items-center font-medium transition-all duration-200 bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
              onClick={() => filterProductData(filterTopRated)}
            >
              <FaStar className="mr-2" /> Top Rated
            </button>

            <Menu title="Fashion" items={fashionItems} filterProduct={filterProduct} theme={theme} icon={<FaTshirt />} />
            <Menu title="Accessories" items={accessoryItems} filterProduct={filterProduct} theme={theme} icon={<FaShoppingBasket />} />
            <Menu title="Electronics" items={electronicsItems} filterProduct={filterProduct} theme={theme} icon={<FaLaptop />} />

            <button className="p-2 font-medium transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg" onClick={() => filterProduct('motorcycle')}>Motorcycle</button>
            <button className="p-2 font-medium transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg" onClick={() => filterProduct('groceries')}>Groceries</button>
            <button className="p-2 font-medium transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg" onClick={() => filterProduct('skin-care')}>Skin Care</button>
          </div>
        </div>
      </div>
      <div className={`cards flex flex-wrap justify-around ${theme === 'light' ? 'bg-white' : 'bg-gray-900'}`}>
        {ProductArray.map((obj) => (
          <ProductCard
            obj={obj}
            key={obj.id}
            showRibbon={obj.rating > 4.7}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
