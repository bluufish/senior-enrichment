import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'


function campusList (props) {
    return (
        <div className = "row">
        <h1>Campus</h1>
        {
            props.campuses && props.campuses.map(campus => 
            <div className = "col-sm-6 campus-album" key={campus.id}>
            <Link to ={`campuses/${campus.id}`}>
                <div>{campus.name}</div>
               <img src = {campus.image}/>
               </Link>
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