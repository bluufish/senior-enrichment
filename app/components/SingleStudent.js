import React from 'react'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'


const singleStudent = ({ student, campuses }) => {
    if (!student) return <div/>
    return (
        <div>
            <h1>{student.name}</h1>
            <Link to={`/campuses/${student.campusId}`}>
                <h4>{student.campus.name}</h4>
            </Link>
            <img src={student.image} />
        </div>   
    )
}

const mapState = ({ students, campuses }, Ownprops) => ({
    campus: campuses,
    student: students.find(student => student.id === +Ownprops.match.params.studentId)
})

export default connect(mapState)(singleStudent)