import React, { Component } from 'react';
import { connect } from 'react-redux'
import StudentAlbum from './StudentAlbum'

function StatefulStudentAlbum(props) {
        return (
            <StudentAlbum students= {props.students}/>
        )
}


const mapState = state => ({
    students: state.students
})


export default connect(mapState)(StatefulStudentAlbum)

