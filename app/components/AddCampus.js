import React, { Component } from 'react'
import { connect } from 'react-redux' 
import {postCampus} from '../reducers/campusReducer'

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
                <h3>Add a Campus</h3>
                <form onSubmit={event => this.submitHandler(event)}>

                    <div className="form-group">
                        <label className="col-sm-2 control-label">Campus Name</label>
                        <div className="col-sm-10">
                            <input name="campusName" type="text" className="form-control" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-sm-2 control-label">Campus Image</label>
                        <div className="col-sm-10">
                            <input name="campusImage" type="text" className="form-control" />
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
const mapDispatch = (dispatch, Ownprops) => {
    return {
        submitHandler: (event) => {
            const name = event.target.campusName.value || 'Kyoani'
            const image = event.target.campusImage.value || undefined
            const campus = {name, image}
            dispatch(postCampus(campus, Ownprops.history))
        }
    }
}

export default connect(mapState, mapDispatch)(AddButton)