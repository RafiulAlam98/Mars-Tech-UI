import React from "react";

export default function Footer() {
  return (
    <footer className="footer footer-container my-10 p-10 mb-0 text-base-content bg-[#081621]">
      <div>
        <span className="footer-title text-white font-bold text-xl">
          Services
        </span>
        <span className="link link-hover text-teal-500 font-semibold">
          Branding
        </span>
        <span className="link link-hover text-[#355966]  ">Design</span>
        <span className="link link-hover text-[#355966]">Marketing</span>
        <span className="link link-hover text-[#355966]">Advertisement</span>
      </div>
      <div>
        <span className="footer-title text-white font-bold text-xl">
          Contact
        </span>
        <span href="" className="link link-hover text-teal-500 font-semibold">
          Contact Us
        </span>
      </div>
      <div>
        <span className="footer-title text-white font-bold text-xl">
          Account
        </span>
        <span href="" className="link link-hover text-teal-500 font-semibold">
          Ticket
        </span>
        <span href="" className="link link-hover text-[#355966]">
          FAQs
        </span>
      </div>
      <div>
        <span className="footer-title text-white font-bold text-xl">About</span>
        <span href="" className="link link-hover text-teal-500 font-semibold ">
          About us
        </span>
        <span href="" className="link link-hover text-[#355966] ">
          Terms & Conditions
        </span>
        <span href="" className="link link-hover text-[#355966]">
          Privacy Policy
        </span>
        <span href="" className="link link-hover text-[#355966]">
          Return Policy
        </span>
      </div>
      <div>
        <span className="footer-title text-white font-bold text-xl">
          Social
        </span>
      </div>
    </footer>
  );
}
