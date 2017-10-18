import React from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'

const Navbar = () => (
    <nav className= "navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
                <ul className="nav navbar-nav">
                    <li>
                        <NavLink to= '/' activeClassName="selected">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/campuses' activeClassName="selected">Campus</NavLink>
                    </li>
                    <li>
                        <NavLink to='/students' activeClassName="selected">Students</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>   
)

export default connect()(Navbar)