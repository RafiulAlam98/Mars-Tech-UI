import MainLayout from "@/components/Layouts/MainLayout";
import React from "react";

export default function CpuCategoryPage() {
  return <div>cpu</div>;
}

CpuCategoryPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
