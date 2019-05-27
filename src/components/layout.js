import React from "react"
import Navigation from "../components/navigation"
import Footer from "../components/footer"

export default ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <Navigation />
    <div className="container mx-auto px-8 mt-8 flex-grow">{children}</div>
    <Footer />
  </div>
)
