import MainLayout from "@/components/Layouts/MainLayout";
import Link from "next/link";
import React from "react";

export default function CheckoutPage() {
  return (
    <div className="min-h-screen">
      <h2>This page coming soon</h2>
      <Link href="/">
        <button className="bg-teal-600 text-white px-4 py-1 text-sm rounded hover:cursor">
          Go To Home
        </button>
      </Link>
    </div>
  );
}
CheckoutPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
