import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <div>
 <Link to='/'>
    <h3 className="header_logo"> 
            NC<span className="Logo">News</span>
            </h3>
        </Link>
        </div>
    )
}
