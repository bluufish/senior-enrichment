import React from 'react'
import { connect } from 'react-redux'

const singleStudent = ({ student }) => {
    if (!student) return <div />
    return (
        <div>
            <h1>{student.name}</h1>
            <h4>{student.campus.name}</h4>
            <img src={student.image} />
        </div>
    )
}

const mapState = ({ students }, Ownprops) => ({
    //student : students.forEach(student => console.log(student.id))   
    student: students.find(student => student.id === +Ownprops.match.params.studentId)
})

export default connect(mapState)(singleStudent)