import { useRouter } from "next/router";
import styles from "/styles/toolbar.module.css";

export const Toolbar = () => {
  const router = useRouter();
  return (
    <>
       <nav className="flex justify-between bg-gray-400 text-white w-screen">
        <div className="px-5 xl:px-12 py-6 flex w-full items-center">
          <a className="text-3xl font-bold font-heading" href="/">
            <img
              className="h-9"
              src="https://images.squarespace-cdn.com/content/v1/5b759ef445776e4b290c79d4/1534439261090-LIGLQ5XJC8HZ6SM9I5H8/iKon_Logo-Black-1024x677.png"
              alt=""
            />
          </a>
          <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
            <li>
              <a
                className="hover:text-gray-200"
                href="#"
                onClick={() => router.push("/health")}
              >
                Health
              </a>
            </li>
            <li>
              <a
                className="hover:text-gray-200"
                href="#"
                onClick={() => router.push("/business")}
              >
                Business
              </a>
            </li>
            <li>
              <a
                className="hover:text-gray-200"
                href="#"
                onClick={() => router.push("/technology")}
              >
                Technology
              </a>
            </li>
          </ul>
          <a className="xl:hidden flex mr-6 items-center" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hover:text-gray-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="flex absolute -mt-5 ml-4">
              <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
            </span>
          </a>
          <a className="navbar-burger self-center mr-12 xl:hidden" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hover:text-gray-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </a>
        </div>
      </nav>
    </>
  );
};
