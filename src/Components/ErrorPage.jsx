import React from "react"

const ErrorPage = ({ error = "Opps, something went wrong!" }) => {
  return (
    <div className="ErrorCard">
      <p> {error}!</p>
    </div>
  )
}
export default ErrorPage
