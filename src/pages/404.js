import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

export default function NotFound() {
  const router = useRouter();

  setTimeout(() => {
    router.push("/");
  }, 3000);

  return (
    <div className="">
      <img
        src="https://www.elegantthemes.com/blog/wp-content/uploads/2020/02/000-404.png"
        className="w-full h-screen"
        alt=""
      />
    </div>
  );
}
