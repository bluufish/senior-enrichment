import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import {createStudent} from '../reducers/studentReducer'

class AddButton extends Component {
    constructor(props) {
        super(props)
        this.submitHandler = this.submitHandler.bind(this)
    }

    submitHandler(event) {
        event.preventDefault()
        this.props.submitHandler(event)
    }

    render() {
        return (
            <div>
                <h3>Add a Student</h3>
                <form onSubmit={event => this.submitHandler(event)}>

                    <div className="form-group">
                        <label className="col-sm-2 control-label">Student Name</label>
                        <div className="col-sm-10">
                            <input name="studentName" type="text" className="form-control" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-sm-2 control-label">Student Email</label>
                        <div className="col-sm-10">
                            <input name="studentEmail" type="text" className="form-control" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-sm-2 control-label">Campus</label>
                        <div className="col-sm-10">
                            <select name="selectedCampus" className="form-control">
                                <option value="1">Hibike</option>
                            </select>
                        </div>
                    </div>

                    <div className="col-sm-offset-2 col-sm-10">
                        <button type="submit" className="btn btn-primary">SUBMIT</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapState = null
const mapDispatch = dispatch => {
    return {
        submitHandler: (event) => {
            const name = event.target.studentName.value || 'Mobu'
            const email = event.target.studentEmail.value || 'Kyoani@Kyoani.com'
            const campusId = event.target.selectedCampus.value 
            const student = {name, email, campusId}
            dispatch(createStudent(student))
        }
    }
}

export default connect(mapState, mapDispatch)(AddButton)