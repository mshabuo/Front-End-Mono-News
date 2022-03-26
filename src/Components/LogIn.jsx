import React, {useContext} from 'react'
import { UserContext } from '../Contexts/UserContext'

export default function LogIn() {

   const {setLoggedInUser, loggedInUser} = useContext(UserContext);

   const handleClick = (event) => {
       setLoggedInUser(event.target.value)
   }
    return (
        <div>
            <form>

            <br></br>
            <input className="LogIn_input" type="text" placeholder="Type your username" value="Tickle122" onChange={setLoggedInUser}></input>
            <br></br>
            <button onClick={handleClick} className="LogIn_Button">Submit</button>
            </form>
        </div>
    )
}
