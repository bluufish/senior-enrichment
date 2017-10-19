import React from 'react'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'


const singleStudent = ({ student, campuses }) => {
    if (!student) return <div/>
    return (
        <div>
            <h1>{student.name} </h1>
            <h3>{student.email}</h3>
            <Link to={`/campuses/${student.campusId}`}>
                <h3>{student.campus.name}</h3>
                <img src={student.image} />
                <img src={student.campus.image} />
            </Link>
            <div>
            </div>
        </div>
    )
}

const mapState = ({ students, campuses }, Ownprops) => ({
    campus: campuses,
    student: students.find(student => student.id === +Ownprops.match.params.studentId)
})

export default connect(mapState)(singleStudent)