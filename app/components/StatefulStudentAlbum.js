import React, { Component } from 'react';
import { connect } from 'react-redux'
import StudentAlbum from './StudentAlbum'
import StudentList from './TableGenerator'
import { Link, Route, Switch } from 'react-router-dom';


function StatefulStudentAlbum(props) {
    return (

        <div>
            <Link to={`/studentsview/album`}>
                <button className="btn-default">Album</button>
            </Link>
            <Link to={`/studentsview/list`}>
                <button className="btn-default">List</button>
            </Link>
            <Switch>
                <Route
                    exact path={`/studentsview/list`}
                    render={_ => <StudentList
                        headers={['ID', 'Name', 'Campus', 'Email', 'Edit', 'Delete']}
                        rows={props.students}
                    />} />
                <Route to={`/studentsview/album`} render={_ => <StudentAlbum students={props.students} />} />
            </Switch>
        </div>
    )
}


const mapState = state => ({
    students: state.students
})


export default connect(mapState)(StatefulStudentAlbum)

