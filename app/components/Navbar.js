import React from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'

const Navbar = () => (
    <nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
                <ul className="nav navbar-nav">
                    <li>
                        <NavLink to='/' activeClassName="selected">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/campusesview' activeClassName="selected">Campus</NavLink>
                    </li>
                    <li>
                        <NavLink to='/studentsview' activeClassName="selected">Students</NavLink>
                    </li>
                    <li>
                        <NavLink to='/students/add' activeClassName="selected">Add Student</NavLink>
                    </li>
                    <li>
                        <NavLink to='/campuses/add' activeClassName="selected">Add Campus</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)

export default connect()(Navbar)
