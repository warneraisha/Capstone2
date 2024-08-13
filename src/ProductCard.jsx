let ProductCard = ({ obj }) => {
  let {
    title,
    thumbnail,
    seller,
    description,
    price,
    rating,
    category,
    images,
  } = obj;

  return (
    <div className="card mt-6 ">
      <div className="card bg-base-100 w-96 shadow-xl ">
        <figure className="h-52">
          <img src={thumbnail} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">{category}</div>
          </h2>

          <div className="card-actions justify-end">
            <div className="badge badge-outline">{rating}</div>
            <div className="badge badge-outline">${price}</div>
            <p>{description}</p>
            <button className="btn btn-active btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
