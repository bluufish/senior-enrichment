import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from '../store'
import CampusList from './CampusList'
import StudentList from './StudentList'
import SingleStudent from './SingleStudent'
import Navbar from './Navbar'
import Home from './Home'
import { fetchStudents } from '../reducers/studentReducer'
import { fetchCampuses } from '../reducers/campusReducer'


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
                <div id="main" className="container-fluid">
                    <Navbar />
                    <Switch>
                        <Route exact path="/campuses" component={CampusList} />
                        <Route exact path="/students" component={StudentList} />
                        <Route path="/students/:studentId" component={SingleStudent} />
                        <Route component={Home} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

