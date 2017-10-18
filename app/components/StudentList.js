import React from 'react'
import { Link } from 'react-router-dom'

const StudentList = ({ students }) => {
    return (
        <ul className='list-group'>
            {
                students.map(student => (
                    <li className='list-group-item' key={student.id}>
                        <Link to={`/students/${student.id}`}>
                            {student.name}
                        </Link>
                        ----------------------------------------
                        <Link to= {`/campuses/${student.campusId}`} >
                            {student.campus.name}
                        </Link>
                    </li>))
            }
        </ul>
    )
}

export default StudentList