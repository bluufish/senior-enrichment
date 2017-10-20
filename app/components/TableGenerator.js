import React from 'react'
import { Router, Link } from 'react-router-dom'
import StudentButton from './FunctionButton'
import { connect } from 'react-redux'
import { deleteStudent } from '../store'



const tableGenerator = ({ headers, rows, remove }) => (
    <table className="table">
        <thead>
            <tr>
                {
                    headers.map(header => <th key={header}>{header}</th>)
                }
            </tr>
        </thead>
        <tbody>
            {
                rows.map(({ name, email, campus, id }) => (
                    <tr key={id}>
                        <th scope="row">{id}</th>
                        <td>
                            <Link to={`/students/edit/${id}`} style={{ fontSize: '2em', color: "Black" }}>
                                {name}
                            </Link>
                        </td>
                        <td>
                            <Link to={`/campuses/${campus.id}`} style={{ fontSize: '1.5em' }} >
                                {campus.name}
                            </Link>
                        </td>
                        <td>{email}</td>
                        <td>
                            <Link to = {`/studentsedit/${id}`}>
                                <button> EDIT </button>
                            </Link>
                        </td>
                        <td><StudentButton func={remove} item={id} text={'Delete'} /></td>
                    </tr>
                ))
            }
        </tbody>
    </table>
)

/////////////////////////////////////////////////////////////////////

const mapState = null
const mapDispatch = dispatch => {
    return {
        remove: (student) => { dispatch(deleteStudent(student)) }
    }
}

export default connect(mapState, mapDispatch)(tableGenerator)

