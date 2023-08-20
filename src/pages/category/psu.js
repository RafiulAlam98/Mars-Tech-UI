import MainLayout from "@/components/Layouts/MainLayout";
import Link from "next/link";
import React from "react";

export default function PsuPage({ catProd }) {
  return (
    <section>
      <h2 className="text-3xl text-center my-8 text-teal-800">
        <span className="border-b-2 border-teal-600">
          Choose Cpu or Processor
        </span>
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {catProd?.map((product) => (
          <>
            {" "}
            <div className=" bg-white mt-5 rounded shadow-lg">
              <figure className="mx-auto">
                <img src={product.img} alt="" className="w-full h-1/2"></img>
              </figure>
              <hr className="mt-3" />
              <div className="card-body">
                <h2 className=" text-md font-semibold text-cyan-700">
                  {product.name.slice(0, 30)}
                </h2>
                <h3 className="text-sm text-cyan-700">
                  Category: {product.category}
                </h3>
                <h3 className="text-sm text-red-600 font-semibold">
                  Price: {product.price}
                </h3>
                <h3 className="text-sm text-pink-500">
                  Available: {product.status}
                </h3>
                <h3 className="text-sm text-cyan-700">
                  Rating: {product.averageRating}
                </h3>
                <button className="text-sm font-semibold text-white bg-blue-600 hover:bg-blue-800 rounded w-full mt-3 py-1">
                  Add
                </button>
                <Link href={`/details/${product._id}`}>
                  <button className="text-sm font-semibold text-white bg-blue-600 hover:bg-blue-800 rounded w-full mt-3 py-1">
                    Show Details
                  </button>
                </Link>
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
}
PsuPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export async function getStaticProps() {
  const res = await fetch(
    "https://mars-tech-backend.vercel.app/api/v1/component"
  );
  const products = await res.json();
  const catProd = products.data.filter((product) => product.category === "PSU");
  return {
    props: {
      catProd,
    },
  };
}
