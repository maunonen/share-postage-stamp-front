import React from 'react'
import {NavLink} from 'react-router-dom'

const AppHeader = () => (
    <header> 
        <h1>Header Page</h1>
        <NavLink to="/" exact={true}>Postage Stamp</NavLink>
        <NavLink to="/sendnew">send new</NavLink>
        <NavLink to="/rules">rules</NavLink>
        <NavLink to="/dashboard">dashboard</NavLink>
        <NavLink to="/contactus" exact={true}>contact us</NavLink>
        <NavLink to="/help">sign out</NavLink>
        <NavLink to="/addstamp">Add Stamp</NavLink>

    </header>
)

export default AppHeader