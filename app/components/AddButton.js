import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'


export default class AddButton extends Component {
    render() {
        return (
            <Link to ="/">
            <button type="button" className="btn btn-success">ADD</button>
            </Link>
        )
    }
}

