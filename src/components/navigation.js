import React from "react"
import { Link } from "gatsby"

export default () => (
  <nav className="flex items-center justify-between flex-wrap bg-nfhspurple p-6">
    <div className="flex items-center flex-shrink-0 text-white mr-6">
      <Link to="/">
        <img
          className="mx-auto"
          width="82"
          src={"logo.png"}
          alt="North Forsyth Theater Troupe 5368"
        />
      </Link>
      <Link to="/" className="cursor-pointer">
        <span className="inline-block ml-4 font-normal text-xl tracking-tight">
          <p className="">North Forsyth High Theatre</p>
          <p className="text-base">Troupe #5368</p>
        </span>
      </Link>
    </div>
    <div className="block lg:hidden">
      <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
        <svg
          className="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div className="sm:flex sm:justify-end lg:flex-grow text-sm">
        <Link
          to="/about"
          className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
        >
          About
        </Link>
        <Link
          to="/box-office"
          className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
        >
          Box Office
        </Link>
        <Link
          to="/2019-2020-season"
          className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
        >
          2019-2020 Season
        </Link>
        <Link
          to="/classes"
          className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
        >
          Class Information
        </Link>
      </div>
    </div>
  </nav>
)
