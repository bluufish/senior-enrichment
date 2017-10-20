import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postCampus } from '../reducers/campusReducer'
import AddCampusForm from './EditForm'

const AddCampus = props => {
    return (
        <div>
        <h1>Add a Campus</h1>
            <AddCampusForm
                onSubmit={props.submitHandler}
                forms={[
                    { label: 'Campus Name', placeholder: 'Enter campus name', name: 'campusName' },
                    { label: 'Campus Image', placeholder: 'Paste an image for the campus', name: 'campusImage' }
                ]}
            />
        </div>
    )
}


////////////////////////////////////////////////////////////////////////////////////

const mapState = null
const mapDispatch = (dispatch, Ownprops) => {
    return {
        submitHandler: (event) => {
            event.preventDefault()            
            const name = event.target.campusName.value || 'Kyoani'
            const image = event.target.campusImage.value || undefined
            const campus = { name, image }
            dispatch(postCampus(campus, Ownprops.history))
        }
    }
}

export default connect(mapState, mapDispatch)(AddCampus)