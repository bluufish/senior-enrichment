import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import StudentAlbum from './StudentAlbum'
import StudentList from './TableGenerator'
import DeleteButton from './FunctionButton'
import { deleteCampus } from '../store'



const singleCampus = ({ campus, students, remove }) => {
    if (!campus) return <div />
    return (
        <div>
            <h1>{campus.name}</h1>
            <div>
                <img src={campus.image} />
                <DeleteButton func={remove} item={campus} text={'Delete'} />
            </div>
            <StudentAlbum students={students} />
            <StudentList
            headers={['ID', 'Name', 'Campus', 'Email', 'Edit', 'Delete']}
            rows={students}
        />
        </div>
    )
}

const mapState = ({ students, campuses }, Ownprops) => ({
    students: students.filter(student => +student.campusId === +Ownprops.match.params.campusId),
    campus: campuses.find(campus => campus.id === +Ownprops.match.params.campusId)
})

const mapDispatch = (dispatch, Ownprops) => ({
    remove: (campus) => {
        dispatch(deleteCampus(campus, Ownprops.history))
    }
})

export default connect(mapState, mapDispatch)(singleCampus)

