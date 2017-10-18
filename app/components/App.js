import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from '../store'
import CampusList from './CampusList'
import StudentList from './StudentList'
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
                    <Switch>
                        <Route exact path="/students" component={StudentList}/>
                        <Route component={CampusList}/>
                </Switch>
                </div>
            </Router>
                    )
    }
}

