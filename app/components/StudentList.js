import React from 'react'
import { Link } from 'react-router-dom'
import StudentDelete from './FunctionButton'
import { connect } from 'react-redux'
import { deleteStudent } from '../store'


const StudentList = ({ students, remove }) => {
    return (
        <ul className='list-group'>
            {
                students && students.map(student => (
                    <li className='list-group-item' key={student.id}>
                        <Link to={`/students/${student.id}`} style={{ fontSize: '2em' }}>
                            {student.name}
                        </Link>
                        ............................................
                        <Link to={`/campuses/${student.campusId}`} >
                            <strong>
                                {student.campus.name}
                            </strong>
                        </Link>
                        <StudentDelete func={remove} item={student} text={'Delete'} />
                    </li>))
            }
        </ul>
    )
}

const mapState = null
const mapDispatch = dispatch => {
    return {
        remove: (student) => { dispatch(deleteStudent(student)) }
    }
}

export default connect(mapState, mapDispatch)(StudentList)

