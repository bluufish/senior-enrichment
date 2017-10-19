import React, { Component } from 'react';
import { connect } from 'react-redux'
import StudentAlbum from './StudentAlbum'
import StudentList from './StudentList'
import AddButton from './AddButton'

function StatefulStudentAlbum(props) {
    return (
        <div>
            <AddButton />
            <StudentAlbum students={props.students} />
            <StudentList students={props.students} />
        </div>
    )
}


const mapState = state => ({
    students: state.students
})


export default connect(mapState)(StatefulStudentAlbum)

