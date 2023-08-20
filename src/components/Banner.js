import Image from "next/image";
import React from "react";
import img from "../assets/banner_img.png";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="hero">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <Image
            height={200}
            width={400}
            responsive
            src={img}
            className="max-w-sm rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <h1 className="text-5xl font-bold">
              Build Your Dream PC: Unleash Your Performance Potential
            </h1>
            <p className="py-6">
              Build Your Dream PC: Unleash Your Performance Potential
            </p>
            <Link href="/pc_builder">
              {" "}
              <button className="btn btn-sm border-none bg-[#04AA6D] hover:bg-[#059862] text-white font-semibold ">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
