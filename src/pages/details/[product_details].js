import MainLayout from "@/components/Layouts/MainLayout";
import Link from "next/link";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import React from "react";


const sub = <FontAwesomeIcon icon={faMinus} />;
const add = <FontAwesomeIcon icon={faPlus} />;

export default function ProductDetails({ product }) {
  const {
    name,
    img,
    category,
    price,
    status,
    averageRating,
    description,
    features,
    reviews,
  } = product.data;
  const router = useRouter();
  console.log(product);
  const handleDecrease = () => {
    console.log("first");
  };
  const handleIncrease = () => {
    console.log("first");
  };
  return (
    <section>
      <div className=" grid grid-cols-2">
        <div>
          <figure className="mx-auto">
            <img src={img} alt="" className="w-2/3 h-1/2 mt-6"></img>
          </figure>
        </div>
        <div className="card-body">
          <h2 className="text-[#3749BB] text-lg font-serif">{name}</h2>
          <h4 className="badge shadow-md p-3 text-slate-700 font-serif">
            Price: {price}
          </h4>
          <h1 className="text-lg font-semibold my-3  font-serif">
            Key Features
          </h1>
          <h4 className="font-serif text-sm">Model: {features.model}</h4>
          <h4 className="font-serif text-sm">Category:{category}</h4>
          <h4 className="font-serif text-sm">Status:{status}</h4>
          <h4 className="font-serif text-sm">
            Average Rating: {averageRating}
          </h4>
          <h4 className="font-serif text-sm">Reviews: {reviews}</h4>
          <Link href="#description" className="font-serif text-sm text-red-500">
            <span className="border-b-2 border-red-500">View More Info</span>
          </Link>
          <div className="flex justify-center items-center  mt-5 shadow-lg py-3">
            <button
              className="mx-2 border px-3 py-1 hover:bg-teal-500 hover:text-white rounded"
              onClick={() => handleDecrease(product)}
            >
              {sub}
            </button>
            <h2 className="text-md bg-base-200 px-3 py-1 font-semibold rounded  border-slate-300 border">
              0
            </h2>
            <button
              className="mx-2 border px-3 py-1 hover:bg-teal-500 hover:text-white rounded"
              onClick={() => handleIncrease(product)}
            >
              {add}
            </button>
            <Link href="/buy_now">
              <button className="bg-blue-600 text-white rounded px-4 py-1 hover:bg-[#3749BB] font-semibold font-sans">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      </div>
      <hr className="my-10" />
      <div id="description" className="shadow-xl  px-4 mx-4 min-h-max">
        <h4 className="font-serif text-md hover:cursor-auto font-semibold mt-5 mb-6 ">
          <span className="bg-[#E5330B] text-white rounded px-4 py-2">
            Description
          </span>
        </h4>
        <h4 className=" font-serif text-sm mt-2 decoration-black pb-5">
          {description}
        </h4>
      </div>
    </section>
  );
}
ProductDetails.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export async function getServerSideProps(context) {
  const { params } = context;
  const res = await fetch(
    `https://mars-tech-backend.vercel.app/api/v1/component/${params.product_details}`
  );
  const product = await res.json();
  return {
    props: {
      product,
    },
  };
}
