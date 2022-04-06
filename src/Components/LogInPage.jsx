import React, { useContext, useState } from "react"
import { UserContext } from "../Contexts/UserContext"

export default function LogIn() {
  const { setLoggedInUser } = useContext(UserContext)
  const [signIn, setSignIn] = useState("")

  const handleClick = event => {
    event.preventDefault()
    setLoggedInUser(signIn)
  }

  return (
    <div>
      <form onSubmit={handleClick}>
        <ul>
          <li>
            Username:{" "}
            <input
              type="text"
              value={signIn.username}
              onChange={event => {
                setSignIn(event.target.value)
              }}
            ></input>
          </li>
          <br></br>
          <li>Please log in as default user: tickle122</li>
        </ul>
        <button className="LogIn_Button">Log In</button>
        <br></br>
      </form>
    </div>
  )
}
