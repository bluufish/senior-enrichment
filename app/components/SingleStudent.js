import React from 'react'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import DeleteButton from './FunctionButton'
import { deleteStudent } from '../store'

const singleStudent = ({ student, campuses, remove }) => {
    if (!student) return <div />
    return (
        <div>
            <h1>{student.name} </h1>
            <h3>{student.email}</h3>
            <div>
                <Link to={`/studentsedit/${student.id}`}>
                    <button classnName="btn-default"> Update </button>
                </Link>
                <DeleteButton func={remove} item={student.id} text={'Delete'} />
            </div>
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

/////////////////////////////////////////////////////////////////////////////////////

const mapState = ({ students, campuses }, Ownprops) => ({
    campus: campuses,
    student: students.find(student => student.id === +Ownprops.match.params.studentId)
})


const mapDispatch = (dispatch, Ownprops) => ({
    remove: (student) => {
        dispatch(deleteStudent(student, Ownprops.history))
    }
})

export default connect(mapState, mapDispatch)(singleStudent)