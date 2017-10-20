import React from 'react'
import { connect } from 'react-redux'
import StudentAlbum from './StudentAlbum'
import StudentList from './TableGenerator'
import DeleteButton from './FunctionButton'
import { deleteCampus } from '../store'
import Home from './Home'
import { Link, Route, Switch } from 'react-router-dom';




const singleCampus = ({ campus, students, remove }) => {
    if (!campus) return <div />
    return (
        <div>
            <h1>{campus.name}</h1>
            <div>
                <img src={campus.image} />
                <DeleteButton func={remove} item={campus} text={'Delete'} />
            </div>
            <Link to={`/campuses/${campus.id}/album`}>
                <button className="btn-default">Album</button>
            </Link>
            <Link to={`/campuses/${campus.id}/list`}>
                <button className="btn-default">List</button>
            </Link>
            <Switch>
                <Route path={`/campuses/${campus.id}/album`} render={ _ => <StudentAlbum students={students} />} />
                <Route path={`/campuses/${campus.id}/list`}
                    render={ _ => <StudentList
                        headers={['ID', 'Name', 'Campus', 'Email', 'Edit', 'Delete']}
                        rows={students}
                    />} />
                <Route to={`/campuses/`} render={_ => <StudentAlbum students={students} />} />
            </Switch>
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

