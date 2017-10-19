import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'


export default class AddButton extends Component {
    constructor() {
        super()
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler() {
        console.log('hello')
    }

    render() {
        return (
            <Link to ="/">
            <button type="button" className="btn btn-success"> ADD</button>
            </Link>
        )
    }
}

