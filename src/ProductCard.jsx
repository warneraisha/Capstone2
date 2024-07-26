let ProductCard = ({ obj }) => {
  let { name, seller, price, ratings, category, img } = obj;

  return (
    <div className="card mt-4">
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">{category}</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{ratings}</div>
            <div className="badge badge-outline">${price}</div>
            <button className="btn btn-active btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
