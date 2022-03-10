import React from 'react'
import {Link} from 'react-router-dom'
import { UserContext } from '../Contexts/UserContext'
import { useContext } from 'react'

export default function Header() {

    const {loggedInUser} = useContext(UserContext)
console.log(loggedInUser)

    return (
        <div>
 <Link to='/'>
    <h3 className="header_logo"> 
            NC<span className="Logo">News</span>
            </h3>
        </Link>
        <div className="logedInUser">
     <h4 className="welcome">Welcome back</h4><span className="username">{loggedInUser.username}</span>
 </div>
        </div>
    )
}
