import React from 'react';
import { connect } from 'react-redux';

function campusList (props) {
    console.log(props.campuses)
    return (
        <div className = "row">
        <h1>Campus</h1>
        {
            props.campuses && props.campuses.map(campus => 
            <div className = "col-sm-6">
                <div>{campus.name}</div>
               <img src = 'https://i.imgur.com/ixa1EFT.png'/>
            </div>)
        }
        </div>
    )
}

const mapState = function(state){
    return {
        campuses: state.campuses
    }
}

export default connect(mapState)(campusList)