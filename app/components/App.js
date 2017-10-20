import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter, Redirect } from 'react-router-dom';
import store, { fetchStudents, fetchCampuses } from '../store'
import { connect } from 'react-redux'
import CampusList from './CampusList'
import SingleStudent from './SingleStudent'
import StatefulStudentAlbum from './StatefulStudentAlbum'
import Navbar from './Navbar'
import Home from './Home'
import SingleCampus from './SingleCampus'
import AddStudent from './AddStudent'
import AddCampus from './AddCampus'
import Header from './Header'

class Main extends Component {
    componentDidMount() {
        this.props.initialData()
    }

    render() {
        return (
            <div id='main' className='container-fluid'>
                <Header />
                <Navbar />
                <Switch>
                    <Route path='/campusesview' component={CampusList} />
                    <Route path='/studentsview' component={StatefulStudentAlbum} />
                    <Route exact path='/campuses/add' component={AddCampus} />
                    <Route exact path='/students/add' component={AddStudent} />
                    <Route path='/campuses/:campusId' component={SingleCampus} />
                    <Route path='/students/:studentId' component={SingleStudent} />
                    <Route exact path='/' component={Home} />
                    <Redirect to='/' />
                </Switch>
            </div>
        )
    }
}

const mapState = state => ({ students: state.students })
const mapDispatch = dispatch => {
    return {
        initialData: _ => {
            dispatch(fetchCampuses())
            dispatch(fetchStudents())
        }
    }
}

export default withRouter(connect(mapState, mapDispatch)(Main))

