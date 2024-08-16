import { useState, useEffect } from 'react';
// import ProductData from './data';
import ProductCard from './ProductCard';
import ShimmerUI from './shimmerUI';

let Home = () => {
  let [allData, setAllData] = useState([]);
  let [ProductArray, setProductArray] = useState([]);
  let [searchText, setSearchText] = useState('');

  let getData = async () => {
    let data = await fetch('https://dummyjson.com/products');
    let obj = await data.json();

    setProductArray(obj.products);
    setAllData(obj.products);
  };

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
      return proCategory.toLowerCase() == obj.category.toLowerCase();
    };
    filterProductData(fn);
  };

  //  Search Filter

  let searchProduct = () => {
    let fn = (obj) =>
      obj.title.toLowerCase().includes(searchText.toLowerCase());
    filterProductData(fn);
    searchText('');
  };

  console.log('Component Called');

  if (ProductArray.length == 0) {
    return (
      <div>
        <ShimmerUI />
      </div>
    );
  }

  return (
    <div>
      <div className=" flex justify-center m-4 bg-red-500">
        <button
          className="btn border-2 hover:border-red-500"
          onClick={() => filterProductData(filterTopRated)}
        >
          Top Rated
        </button>

        <button
          className="btn ml-2  border-2  hover:border-red-500"
          onClick={() => filterProduct('beauty')}
        >
          Beauty
        </button>

        <div className=" flex  md:w-auto w-96 ml-2 ">
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
