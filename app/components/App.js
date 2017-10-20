import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import store, { fetchStudents, fetchCampuses } from '../store'
import { connect } from 'react-redux'
import CampusList from './CampusList'
import SingleStudent from './SingleStudent'
import StatefulStudentAlbum from './StatefulStudentAlbum'
import StatefulStudentList from './StatefulStudentList'
import Navbar from './Navbar'
import Home from './Home'
import SingleCampus from './SingleCampus'
import AddStudent from './AddStudent'
import AddCampus from './AddCampus'

class Main extends Component {
    componentDidMount() {
        this.props.initialData()
    }

    render() {
        return (
                <div id='main' className='container-fluid'>
                    <Navbar />
                    <Switch>
                        <Route exact path='/campuses' component={CampusList} />
                        <Route exact path='/campuses/add' component={AddCampus} />
                        <Route path='/campuses/:campusId' component={SingleCampus} />
                        <Route exact path='/students' component={StatefulStudentAlbum} />
                        <Route exact path='/students/add' component={AddStudent} />
                        <Route path='/students/:studentId' component={SingleStudent} />
                        <Route component={Home} />
                    </Switch>
                </div>
        )
    }
}

const mapState = null
const mapDispatch = dispatch => {
    return {
        initialData: _ => {
            dispatch(fetchCampuses())
            dispatch(fetchStudents())
        }
    }
}

export default withRouter(connect(mapState, mapDispatch)(Main))

