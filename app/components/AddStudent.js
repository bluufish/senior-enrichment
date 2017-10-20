import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createStudent } from '../reducers/studentReducer'
import AddStudentForm from './EditForm'

const AddStudent = (props) => {
        return (
            <div>
                <h1>Add a Student</h1>
                <AddStudentForm
                    onSubmit = {props.submitHandler}
                    dropdown = {{haveDropdown: true, items: props.campuses, label: 'Select a Campus'}}
                    forms={[
                        {label: 'Student Name', placeholder: 'Enter student name', name:'name'},
                        {label: 'Student Email', placeholder: 'Enter an email', name: 'email'}
                    ]}
                />
            </div>
        )
}

/////////////////////////////////////////////////////////////////////////////////////////////

const mapState = state => ({ campuses: state.campuses })

const mapDispatch = (dispatch, Ownprops) => {
    return {
        submitHandler: (event) => {
            event.preventDefault()
            
            const name = event.target.name.value || 'Mobu'
            const email = event.target.email.value 
            const campusId = event.target.select.value
            const student = { name, email, campusId }
            dispatch(createStudent(student, Ownprops.history))
        }
    }
}

export default connect(mapState, mapDispatch)(AddStudent)
