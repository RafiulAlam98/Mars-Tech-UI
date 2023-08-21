import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const user = <FontAwesomeIcon icon={faUser} />;

export default function Header() {
  return (
    <div className="navbar bg-[#514280]">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn text-white font-bold btn-ghost lg:hidden mr-4"
          >
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-xl bg-[#059862] text-white rounded w-52"
          >
            <li>
              <a>Category</a>
              <ul className="p-2">
                <li>
                  <Link href="category/cpu">CPU / Processor</Link>
                </li>
                <li>
                  <Link href="category/motherboard">Motherboard</Link>
                </li>
                <li>
                  <Link href="category/ram">RAM</Link>
                </li>
                <li>
                  <Link href="category/psu">Power Supply Unit</Link>
                </li>
                <li>
                  <Link href="category/storage">Storage Device</Link>
                </li>
                <li>
                  <Link href="category/monitor">Monitor</Link>
                </li>
                <li>
                  <Link href="category/others">Others</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <Link
          href="/"
          className="font-bold text-slate-100 bg-none text-xl font-serif"
        >
          MARS_TECH
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 z-[1] rounded">
          <li tabIndex={0}>
            <details>
              <summary className="text-white font-semibold text-md hover:bg-[#059862] hover:rounded hover:text-white ">
                Category
              </summary>
              <ul className="p-2">
                <li>
                  <Link href="category/cpu">CPU / Processor</Link>
                </li>
                <li>
                  <Link href="category/motherboard">Motherboard</Link>
                </li>
                <li>
                  <Link href="category/ram">RAM</Link>
                </li>
                <li>
                  <Link href="category/psu">Power Supply Unit</Link>
                </li>
                <li>
                  <Link href="category/storage">Storage Device</Link>
                </li>
                <li>
                  <Link href="category/monitor">Monitor</Link>
                </li>
                <li>
                  <Link href="category/others">Others</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link href="/pc_builder">
          {" "}
          <button className="rounded btn-sm border-none mr-3 bg-[#04AA6D] hover:bg-[#059862] text-white font-semibold ">
            Pc Builder
          </button>
        </Link>
        <Link href="/login">
          <button className="flex justify-center items-center hover:bg-[#059862]  bg-[#04AA6D] px-2 py-1 rounded ">
            <button className="text-white mr-3 text-md">{user}</button>
            <button>
              {" "}
              <h6 className="text-sm text-white">register or login</h6>
            </button>
          </button>
        </Link>
      </div>
    </div>
  );
}
