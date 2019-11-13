import React from "react"
import Navigation from "../components/navigation"
import Footer from "../components/footer"

export default ({ children }) => (
  <div className="h-screen flex flex-col">
    <Navigation />
    <div className="flex-1">
      {children}
    </div>
    <Footer />
  </div>
)
