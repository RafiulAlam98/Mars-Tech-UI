import Image from "next/image";
import Link from "next/link";

import React from "react";

export default function HomeFeatureCard({ product }) {
  console.log(product);
  const { name, img, category, price, _id, status, averageRating } = product;
  return (
    <Link href={`/details/${_id}`}>
      <div className=" bg-white mt-5 rounded shadow-lg">
        <figure className="mx-auto">
          <img src={img} alt="" className="w-full h-1/2"></img>
        </figure>
        <hr className="mt-3" />
        <div className="card-body">
          <h2 className=" text-md font-semibold text-cyan-700">
            {name.slice(0, 28)}..
          </h2>
          <h3 className="text-sm text-cyan-700">Category: {category}</h3>
          <h3 className="text-sm text-red-600 font-semibold">Price: {price}</h3>
          <h3 className="text-sm text-pink-500">Available: {status}</h3>
          <h3 className="text-sm text-cyan-700">Rating: {averageRating}</h3>
        </div>
      </div>
    </Link>
  );
}
