import useAddComponent from "@/hooks/selectedComponent";
import Link from "next/link";

export default function CategoryCard({ product }) {
  const {handleSelectedComponent} = useAddComponent()
  return (
    <div className=" bg-white mt-5 rounded shadow-lg">
      <figure className="mx-auto">
        <img src={product.img} alt="" className="w-full h-1/2"></img>
      </figure>
      <hr className="mt-3" />
      <div className="card-body">
        <h2 className=" text-md font-semibold text-cyan-700">
          {product.name.slice(0, 30)}
        </h2>
        <h3 className="text-sm text-cyan-700">Category: {product.category}</h3>
        <h3 className="text-sm text-red-600 font-semibold">
          Price: {product.price}
        </h3>
        <h3 className="text-sm text-pink-500">Available: {product.status}</h3>
        <h3 className="text-sm text-cyan-700">
          Rating: {product.averageRating}
        </h3>
        <button
          onClick={() => handleSelectedComponent(product)}
          className="text-sm font-semibold text-white bg-blue-600 hover:bg-blue-800 rounded w-full mt-3 py-1"
        >
          Add
        </button>
        <Link href={`/details/${product._id}`}>
          <button className="text-sm font-semibold text-white bg-blue-600 hover:bg-blue-800 rounded w-full mt-3 py-1">
            Show Details
          </button>
        </Link>
      </div>
    </div>
  );
}
