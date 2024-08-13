import { useState, useEffect } from 'react';
import ProductData from './data';
import ProductCard from './ProductCard';

let Home = () => {
  let [ProductArray, setProductArray] = useState([...ProductData]);
  let [searchText, setSearchText] = useState('');

  let filterProductData = (fn) => {
    let data = ProductData.filter(fn);

    setProductArray(data);
  };

  let filterTopRated = (obj) => {
    return obj.rating > 4.5;
  };

  let filterProduct = (proCategory) => {
    let fn = (obj) => {
      return proCategory.toLowerCase() == obj.category.toLowerCase();
    };
    let data = ProductData.filter(fn);
    setProductArray(data);
  };

  //  Search Filter

  let searchProduct = () => {
    let fn = (obj) =>
      obj.title.toLowerCase().includes(searchText.toLowerCase());
    let data = ProductData.filter(fn);

    console.log(data);

    setProductArray(data);
    searchText('');
  };

  return (
    <div className="border-2 border-red-600 bg-white">
      <div className="utility flex justify-center m-5">
        <button
          className="btn ml-2 border-2 hover:border-red-500"
          onClick={() => filterProductData(filterTopRated)}
        >
          Top Rated
        </button>

        <button
          className="btn ml-2 border-2 hover:border-red-500"
          onClick={() => filterProduct('beauty')}
        >
          Beauty
        </button>

        <div className="search-box flex  md:w-auto ">
          <input
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            type="text"
            placeholder="Search here..."
            className="input input-bordered border-red-500 bg-white text-black w-full max-w-xs"
          />
          <button
            className="btn btn-accent ml-2 border-2 hover:border-red-500"
            onClick={searchProduct}
          >
            Search
          </button>
        </div>

        <button
          className="btn ml-2 border-2 hover:border-red-500"
          onClick={() => filterProduct('groceries')}
        >
          Groceries
        </button>
        <button
          className="btn ml-2 border-2 hover:border-red-500"
          onClick={() => filterProduct('fragrances')}
        >
          Perfumes
        </button>

        <button
          className="btn ml-2 border-2 hover:border-red-500"
          onClick={() => filterProduct('furniture')}
        >
          Furniture
        </button>
      </div>
      <div className="cards flex flex-wrap justify-around">
        {ProductArray.map((obj) => (
          <ProductCard obj={obj} key={obj.id}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
