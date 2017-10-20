import React, { Component } from 'react';
import { connect } from 'react-redux'
import StudentAlbum from './StudentAlbum'
import StudentList from './TableGenerator'

function StatefulStudentAlbum(props) {
    return (
        <div>
            <StudentAlbum students={props.students} />
            <StudentList
                headers={['ID', 'Name', 'Campus', 'Email', 'Edit', 'Delete']}
                rows={props.students}
            />
        </div>
    )
}


const mapState = state => ({
    students: state.students
})


export default connect(mapState)(StatefulStudentAlbum)

