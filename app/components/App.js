import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store, { fetchStudents, fetchCampuses } from '../store'
import CampusList from './CampusList'
import SingleStudent from './SingleStudent'
import StatefulStudentAlbum from './StatefulStudentAlbum'
import StatefulStudentList from './StatefulStudentList'
import Navbar from './Navbar'
import Home from './Home'
import SingleCampus from './SingleCampus'
import StudentList from './StudentList'

export default class Main extends Component {
    componentDidMount() {
        const campusesThunk = fetchCampuses()
        const studentsThunk = fetchStudents()
        store.dispatch(campusesThunk)
        store.dispatch(studentsThunk)
    }

    render() {
        return (
            <Router>
                <div id='main' className='container-fluid'>
                    <Navbar />
                    <Switch>
                        <Route exact path='/campuses' component={CampusList} />
                        <Route path path='/campuses/:campusId' component={SingleCampus} />
                        <Route exact path='/students' component={StatefulStudentAlbum} />
                        <Route path='/students/:studentId' component={SingleStudent} />
                        <Route component={StatefulStudentList}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}



