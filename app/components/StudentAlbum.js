import React from 'react'
import { Link } from 'react-router-dom'


export default function studentList({ students }) {
    if (!students) return <div />
    return (
        <div style={{ fontSize: '2em' }}>
            <h1>Students</h1>
            <div className="row" >
                {students && students.map(student =>
                    <div className="col-sm-3" key={student.id} style={{ marginBottom: '1em' }}>
                        <Link to={`/students/${student.id}`}>
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

