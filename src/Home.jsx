import { useState, useEffect, useContext, useRef } from 'react';
import ProductCard from './ProductCard';
import ShimmerUI from './shimmerUI';
import { Theme } from './utility/ThemeContext';
import { FaStar } from 'react-icons/fa';



const Home = () => {
  const [allData, setAllData] = useState([]);
  const [ProductArray, setProductArray] = useState([]);
  const [searchText, setSearchText] = useState('');

  const { theme } = useContext(Theme);

  const getData = async () => {
    const response = await fetch('https://dummyjson.com/products?limit=8&skip=30');
    const obj = await response.json();

    // Custom images from Unsplash
    const customImages = [
      "https://images.unsplash.com/photo-1514361892635-6e5a4ea41f95",
      "https://images.unsplash.com/photo-1519681391541-310a3e3c1a49",
      "https://images.unsplash.com/photo-1470337458703-46ad1756a187",
      "https://images.unsplash.com/photo-1513635269975-59663e0ac10d",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908",
      "https://images.unsplash.com/photo-1529333166437-775ea6d5d570",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93"
    ];

    // Override thumbnails with custom images
    const products = obj.products.map((p, i) => ({
      ...p,
      thumbnail: customImages[i % customImages.length],
    }));
    
    setProductArray(obj.products);
    setAllData(obj.products);

    // Debug: confirm new thumbnails
  console.log('Thumbnails:', products.slice(0, 4).map(p => p.thumbnail));
  };

  useEffect(() => {
    getData();
  }, []);

  const filterProductData = (fn) => {
    const data = allData.filter(fn);
    setProductArray(data);
  };

  const filterTopRated = (obj) => obj.rating > 4.5;

  

  const searchProduct = () => {
    const fn = (obj) => obj.title.toLowerCase().includes(searchText.toLowerCase());
    filterProductData(fn);
    setSearchText('');
  };

  if (ProductArray.length === 0) {
    return <ShimmerUI />;
  }



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
              className="absolute inset-y-0 right-0 flex items-center pr-3 pl-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
              onClick={searchProduct}
            >
              Search
            </button>
          </div>

          <div className="flex space-x-4">
            <button
              className="flex items-center font-medium transition-all duration-200 bg-transparent hover:bg-gray-400 dark:hover:bg-gray-700 rounded-lg"
              onClick={() => filterProductData(filterTopRated)}
            >
              <FaStar className="mr-2" /> Top Rated
            </button>

            
            
          </div>
        </div>
      </div>
      <div className={`cards flex flex-wrap justify-around ${theme === 'dark' ? 'bg-slate-100' : 'bg-gray-900'}`}>
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
