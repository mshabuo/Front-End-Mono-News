import React from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../Contexts/UserContext"
import { useContext } from "react"

export default function Header() {
  const { loggedInUser } = useContext(UserContext)

  return (
    <div>
      <Link to="/">
        <h3 className="header_logo">
          Mono <span className="logo_Feature">> </span>
        </h3>
      </Link>
      <div className="logedInUser">
        <Link to="/login">
          <div className="Header_LogInButton">{loggedInUser}</div>
        </Link>
      </div>
    </div>
  )
}
