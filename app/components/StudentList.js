import React from 'react'
import { Link } from 'react-router-dom'

const StudentList = ({ students }) => {
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
                    </li>))
            }
        </ul>
    )
}

export default StudentList