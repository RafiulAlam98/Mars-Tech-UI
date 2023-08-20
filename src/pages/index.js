import Banner from "@/components/Banner";
import Featureproducts from "@/components/FeatureProducts/Featureproducts";
import MainLayout from "@/components/Layouts/MainLayout";
import Head from "next/head";

export default function Homepage({ products }) {
  const allProducts = products.data;

  return (
    <>
      {" "}
      <Head>
        <title>E-Tech Site</title>
        <meta
          name="description"
          content="This is an Ecommerce technology based Site made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Banner />
      <Featureproducts allProducts={allProducts} />
    </>
  );
}
Homepage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export async function getStaticProps() {
  const res = await fetch(
    "https://mars-tech-backend.vercel.app/api/v1/component"
  );
  const products = await res.json();
  return {
    props: {
      products,
    },
  };
}
