import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


function studentList(props) {
    return (
        <div style={{ fontSize: '2em' }}>
            <h1>Students</h1>
            <div className="row" >
                {props.students && props.students.map(student =>
                    <div className="col-sm-3" key={student.id} style={{ marginBottom: '1em' }}>
                        <Link to={`students/${student.id}`}>
                            <img src={student.image} />
                            <h5>
                                <span>{student.name}</span>
                            </h5>
                        </Link>
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
