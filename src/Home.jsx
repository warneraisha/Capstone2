import { useState } from 'react';
import ProductData from './data';
import ProductCard from './ProductCard';

let Home = () => {
  let [ProductArray, setProductArray] = useState([...ProductData]);
  let [searchText, setSearchText] = useState('');

  let filterTopRated = () => {
    let data = ProductArray.filter((obj) => {
      return obj.ratings > 4;
    });
    setProductArray(data);
  };

  let filterProduct = (ProCategory) => {
    let data = ProductData.filter((obj) => {
      return ProCategory === obj.category;
    });
    setProductArray(data);
  };

  let searchProduct = () => {
    let data = ProductData.filter((obj) =>
      obj.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setProductArray(data);
  };

  return (
    <div className="border-2 border-red-600 bg-white">
      <div className="utility flex justify-center m-5">
        <button
          className="btn ml-2 border-2 hover:border-red-500"
          onClick={filterTopRated}
        >
          Top Rated
        </button>
        <button
          className="btn ml-2 border-2 hover:border-red-500"
          onClick={() => filterProduct("Men's Sneaker")}
        >
          Men's Sneaker
        </button>
        <button
          className="btn ml-2 border-2 hover:border-red-500"
          onClick={() => filterProduct("Men's Pants")}
        >
          Men's Pants
        </button>
        <button
          className="btn ml-2 border-2 hover:border-red-500"
          onClick={() => filterProduct("Men's Boot")}
        >
          Men's Boot
        </button>

        <div className="search-box w-1/2 ml-20">
          <input
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            type="text"
            placeholder="Type here"
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
          onClick={() => filterProduct('Bag')}
        >
          Bag
        </button>
        <button
          className="btn ml-2 border-2 hover:border-red-500"
          onClick={() => filterProduct('Cap')}
        >
          Cap
        </button>
        <button
          className="btn ml-2 border-2 hover:border-red-500"
          onClick={() => filterProduct('Bottle')}
        >
          Bottle
        </button>
        <button
          className="btn ml-2 border-2 hover:border-red-500"
          onClick={() => filterProduct('Earphones')}
        >
          Earphones
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
