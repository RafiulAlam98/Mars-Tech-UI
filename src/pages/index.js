import Image from "next/image";
import { Inter } from "next/font/google";
import MainLayout from "@/components/Layouts/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Homepage() {
  return (
    <>
      <h2>hello</h2>
    </>
  );
}
Homepage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
