import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Carousel } from 'react-responsive-carousel';
import TableGenerator from './TableGenerator'

const home = ({students}) => {
    return (
        <TableGenerator
            headers={['ID', 'Name', 'Campus', 'Email', 'Edit', 'Delete']}
            rows ={students}
             />
    )
}


export default home