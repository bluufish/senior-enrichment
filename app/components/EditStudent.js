import React from 'react'
import StudentEdit from './EditForm'
import { connect } from 'react-redux'


const studentEdit = props => {


    const { students, campuses } = props
    if (!students.length) return <div />
    const student = students.find(student => student.id === +props.match.params.id)
    return (
        <StudentEdit
            forms={[
                { label: 'Edit Student Name', name: 'name', value: student.name},
                { label: 'Edit Student Email', name: 'email' , value: student.email }
            ]}

            dropdown = {{
                haveDropdown : true,
                items: campuses,
                label: 'Edit Campus',
                defaultValue: student.campus.id
            }}

            onSubmit = {props.submitHandler}
        />
    )
}


const mapState = state => ({ students: state.students, campuses: state.campuses })
const mapDispatch = dispatch => ({
    submitHandler : (event) => {
        event.preventDefault()

        const name = event.target.name.value
        const email = event.target.email.value
        const campusId = event.target.select.value
        const updatedStudent = {name,email,campusId}
        console.log(updatedStudent)
    }
})

export default connect(mapState,mapDispatch)(studentEdit)