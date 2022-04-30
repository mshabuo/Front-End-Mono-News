import React, { useContext, useState } from "react"
import { UserContext } from "../Contexts/UserContext"

export default function LogIn() {
  const { setLoggedInUser, setIsLoggedIn } = useContext(UserContext)
  const [signIn, setSignIn] = useState("")

  const handleClick = event => {
    event.preventDefault()
    if (signIn.length < 1) {
      alert("Please enter valid username to sign in!")
    }
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
                setIsLoggedIn(true)
              }}
            ></input>
          </li>
          <br></br>
          <li>Please log in as default user: tickle122</li>
        </ul>
        <button className="LogIn_Button">
          SIGN IN &nbsp; <span className="Article-Arrow">&#10230;</span>
        </button>
        <br></br>
      </form>
    </div>
  )
}
