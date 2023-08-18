import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Category</a>
              <ul className="p-2">
                <li>
                  <Link href="">CPU / Processor</Link>
                </li>
                <li>
                  <Link href="">Motherboard</Link>
                </li>
                <li>
                  <Link href="">RAM</Link>
                </li>
                <li>
                  <Link href="">Power Supply Unit</Link>
                </li>
                <li>
                  <Link href="">Storage Device</Link>
                </li>
                <li>
                  <Link href="">Monitor</Link>
                </li>
                <li>
                  <Link href="">Others</Link>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">MARS TECH</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Item 1</a>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>Category</summary>
              <ul className="p-2">
                <li>
                  <Link href="">CPU / Processor</Link>
                </li>
                <li>
                  <Link href="">Motherboard</Link>
                </li>
                <li>
                  <Link href="">RAM</Link>
                </li>
                <li>
                  <Link href="">Power Supply Unit</Link>
                </li>
                <li>
                  <Link href="">Storage Device</Link>
                </li>
                <li>
                  <Link href="">Monitor</Link>
                </li>
                <li>
                  <Link href="">Others</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link href="/pc_builder">
          {" "}
          <button className="btn">Pc Builder</button>
        </Link>
      </div>
    </div>
  );
}
