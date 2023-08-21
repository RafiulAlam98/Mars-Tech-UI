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
              Unleash Your Ultimate Power: Build Your Perfect PC with Us!
            </h1>
            <p className="py-6">
              Crafting Dreams, One PC at a Time: Your Custom-Built PC Awaits!
            </p>
            <Link href="/pc_builder">
              {" "}
              <button className="btn btn-sm border-none bg-[#04AA6D] rounded hover:bg-[#059862] text-white font-semibold ">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
