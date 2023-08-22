import CategoryCard from "@/components/CardComponent/CategoryCard";
import MainLayout from "@/components/Layouts/MainLayout";
import Link from "next/link";
import React from "react";

export default function RamPage({ catProd }) {
  return (
    <section>
      <h2 className="text-3xl text-center my-8 text-teal-800">
        <span className="border-b-2 border-teal-600">Choose RAM</span>
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {catProd?.map((product) => (
          <CategoryCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
}
RamPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export async function getStaticProps() {
  const res = await fetch(
    "https://mars-tech-backend.vercel.app/api/v1/component"
  );
  const products = await res.json();
  const catProd = products.data.filter((product) => product.category === "RAM");
  return {
    props: {
      catProd,
    },
  };
}
