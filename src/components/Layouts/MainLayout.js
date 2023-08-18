import React from "react";
import Header from "../shared/Header";
import Footer from "../shared/Footer";

export default function MainLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="min-h-screen max-w-[1000px] mx-auto">{children}</div>
      <Footer />
    </div>
  );
}
