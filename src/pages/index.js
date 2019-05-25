import React from "react"

import Layout from "../components/layout"

export default () => (
  <Layout>
    <div className="md:flex bg-white border rounded-lg p-6">
      <img className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6" src="https://images.unsplash.com/photo-1544535379-b81233c1a64e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80" alt="User avatar" />
      <div className="text-center md:text-left">
        <h2 className="text-lg">Erin Lindford</h2>
        <div className="text-purple-500">Customer Support</div>
        <div className="text-gray-600">erinlindford@example.com</div>
        <div className="text-gray-600">(555) 765-4321</div>
      </div>
    </div>
  </Layout>
)
