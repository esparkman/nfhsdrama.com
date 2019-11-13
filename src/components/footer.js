import React from "react"
import { Link } from "gatsby"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faFacebookSquare, faInstagram } from "@fortawesome/free-brands-svg-icons"
library.add(faTwitter, faFacebookSquare, faInstagram)

export default () => (
  <section className="bg-gray-100 border-t border-gray-300 py-8">
    <div className="w-full mx-auto bg-wild-sand absolute sticky inset-x-0 bottom-0">
      <div className="md:flex md:justify-around mb-6 mt-8 mx-8 pb-8 text-sm">
        <div id="social-media" className="md:w-1/6">
          <p className="uppercase text-gray-600 font-semibold mb-2 sm:mt-4">
            Follow Us
          </p>
          <div className="flex">
            <a
              href="https://twitter.com/nfhsdrama"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="mr-4"
                style={{ color: "#1DA1F2" }}
                icon={["fab", "twitter"]}
                size="2x"
              />
            </a>
            <a
              href="https://www.facebook.com/nfhsdrama5368/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="mr-4"
                style={{ color: "#4267B2" }}
                icon={["fab", "facebook-square"]}
                size="2x"
              />
            </a>
            <a
              href="https://www.instagram.com/nfhsdramadept"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                style={{ color: "#BC01AB" }}
                icon={["fab", "instagram"]}
                size="2x"
              />
            </a>
          </div>
          <p className="text-gray-600 mt-2">
            Stay up to date on the latest news from NFHS Theatre.
          </p>
        </div>
        <div id="links" className="md:w-1/6 leading-normal">
          <p className="uppercase text-gray-600 font-semibold mb-2 sm:mt-4">
            Helpful Links
          </p>
          <p className="mb-2 text-gray-600">
            <a
              className="hover:text-nfhspurple hover:font-semibold"
              href="https://charmsoffice.com/charms2/login.asp#public" 
              target="_blank"
              rel="noopener noreferrer"
            >
              Charms
            </a>
          </p>
          <p className="mb-2 text-gray-600">Parent Volunteer Opportunities</p>
          <p className="mb-2 text-gray-600">Donations</p>
        </div>
        <div id="boosters" className="md:w-1/6 leading-normal">
          <p className="uppercase text-gray-600 font-semibold mb-2 sm:mt-4">
            Booster Information
          </p>
          <Link 
            to="/boosters"
            className="mb-2 text-gray-600 hover:text-nfhspurple hover:font-semibold"
          >
            Current Boosters
          </Link>
          <p className="mb-2 text-gray-600">Booster Opportunities</p>
        </div>
        <div id="upcoming-events" className="md:w-1/6 leading-normal">
          <p className="uppercase text-gray-600 font-semibold mb-2 sm:mt-4">
            Upcoming Events
          </p>
          <p className="mb-2 text-gray-600">Ferguson's Fundraiser</p>
          <p className="mb-2 text-gray-600">Chicago Trip</p>
          <p className="mb-2 text-gray-600">Thescon 2020</p>
        </div>
      </div>
    </div>
  </section>
)
