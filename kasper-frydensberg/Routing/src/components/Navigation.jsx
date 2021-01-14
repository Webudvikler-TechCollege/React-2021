import React from 'react'
import {Link} from 'react-router-dom'

export function Navigation(){

    return (
        <nav>
            <ul>
               <li><Link to="/forside">Forside</Link></li>
                <li><Link to="/signup">Signup</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    )
}