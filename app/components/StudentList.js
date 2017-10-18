import React from 'react'
import { connect } from 'react-redux'

function studentList(props) {
    return (
        <div >
            <h1>Students</h1>
            <div className = "row" >
                {props.students && props.students.map(student =>
                    <div className = "col-sm-2">
                        <img src={student.image} />
                        <div>{student.name}</div>
                    </div>
                )}
            </div>
        </div>
    )
}

const mapState = state => ({
    students: state.students
})

export default connect(mapState)(studentList)
