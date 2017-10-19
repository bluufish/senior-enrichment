import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import StudentAlbum from './StudentAlbum'
import StudentList from './StudentList'


const singleCampus = ({ campus, students }) => {
    if (!campus) return <div />
    return (
        <div>
            <h1>{campus.name}</h1>
            <img src={campus.image} />
            <StudentAlbum students={students}/>
            <StudentList students={students}/>
        </div>
    )
}

const mapState = ({ students, campuses }, Ownprops) => ({
    students: students.filter(student => +student.campusId === +Ownprops.match.params.campusId),
    campus: campuses.find(campus => campus.id === +Ownprops.match.params.campusId)
})

export default connect(mapState)(singleCampus)

