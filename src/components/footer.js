import React from 'react'

export default () => (
  <section className="bg-gray-100 border-t border-gray-300 py-8 w-full">
    <div className="w-full mx-auto bg-wild-sand">
      <div className="md:flex md:justify-around mb-6 mt-8 mx-8 pb-8 text-sm">
        <div id="social-media" className="md:w-1/6">
          <p className="uppercase text-gray-600 font-semibold mb-2 sm:mt-4">Follow Us</p>
          <a href="https://twitter.com/nfhsdrama" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <a href="https://www.facebook.com/nfhsdrama/" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="https://www.instagram.com/nfhsdrama" target="_blank" rel="noopener noreferrer">
          </a>
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
          <p className="mb-2 text-gray-600">Current Boosters</p>
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