import React from "react"
import { Link } from "gatsby"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faFacebookSquare } from "@fortawesome/free-brands-svg-icons"
library.add(faTwitter, faFacebookSquare)

export default () => (
  <section className="bg-gray-100 border-t border-gray-300 py-8 w-full">
    <div className="w-full mx-auto bg-wild-sand">
      <div className="md:flex md:justify-around mb-6 mt-8 mx-8 pb-8 text-sm">
        <div id="social-media" className="md:w-1/6">
          <p className="uppercase text-gray-600 font-semibold mb-2 sm:mt-4">
            Follow Us
          </p>
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
              style={{ color: "#4267B2" }}
              icon={["fab", "facebook-square"]}
              size="2x"
            />
          </a>
          <a
            href="https://www.instagram.com/nfhsdrama"
            target="_blank"
            rel="noopener noreferrer"
          />
          <p className="text-gray-600 mt-2">
            Stay up to date on the latest news from NFHS Theatre.
          </p>
        </div>
        <div id="links" className="md:w-1/6 leading-normal">
          <p className="uppercase text-gray-600 font-semibold mb-2 sm:mt-4">
            Helpful Links
          </p>
          <p className="mb-2 text-gray-600">Charms</p>
          <p className="mb-2 text-gray-600">Parent Volunteer Opportunities</p>
          <p className="mb-2 text-gray-600">Donations</p>
        </div>
        <div id="boosters" className="md:w-1/6 leading-normal">
          <p className="uppercase text-gray-600 font-semibold mb-2 sm:mt-4">
            Booster Information
          </p>
          <Link to="/boosters" className="mb-2 text-gray-600">
            Current Boosters
          </Link>
          <p className="mb-2 text-gray-600">Booster Opportunities</p>
        </div>
        <div id="training-topics" className="md:w-1/6 leading-normal">
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
