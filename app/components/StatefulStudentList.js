import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import StudentList from './StudentList'

const StatefulStudentList = ({students}) => {
    return (
        <StudentList students = {students}/>
    )
}

const mapState = state => ({
    students: state.students
})


export default connect(mapState)(StatefulStudentList)


