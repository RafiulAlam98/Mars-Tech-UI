/* eslint-disable react/jsx-key */
import React from "react";
import HomeFeatureCard from "../CardComponent/HomeFeatureCard";

export default function Featureproducts({ allProducts }) {
  console.log(allProducts);
  return (
    <div className="min-h-screen mt-8">
      <h1 className="flex justify-center text-2xl text-purple-400 font-bold">
        <span className="border-b-2 border-purple-400">
          Our Featured Products
        </span>
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {allProducts?.map((product) => (
          <HomeFeatureCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
