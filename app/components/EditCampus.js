import React from 'react'
import CampusEdit from './EditForm'
import { connect } from 'react-redux'
import { updateCampus } from '../store'

const campusEdit = props => {


    const {campuses } = props
    if (!campuses.length) return <div />
    const campus = campuses.find(campus => campus.id === +props.match.params.id)
    
    return (
        <CampusEdit
            forms={[
                { label: 'Edit Campus Name', name: 'name', value: campus.name }
            ]}

            onSubmit={props.submitHandler}
        />
    )
}

//////////////////////////////////////////////////////////////////////////////////////////////

const mapState = state => ({ campuses: state.campuses })

const mapDispatch = (dispatch, Ownprops) => ({
    submitHandler: (event) => {
        event.preventDefault()
        const id = Ownprops.match.params.id
        const name = event.target.name.value
        const campus = { name }
        
        //console.log(Campus)
        dispatch(updateCampus(campus, id, Ownprops.history))
    }
})

export default connect(mapState, mapDispatch)(campusEdit)