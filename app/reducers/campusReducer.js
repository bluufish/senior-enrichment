import axios from 'axios';

//Action Types
const GET_CAMPUS = 'GET_CAMPUS'
const GET_CAMPUSES = 'GET_CAMPUSES'

//Action Creators
export const getCampus = (campus) => {
    const action = { type: GET_CAMPUS, campus }
    return action
}

export const getCampuses = (campuses) => {
    const action = { type: GET_CAMPUSES, campuses }
    return action
}

//Thunk Creators
export function fetchCampuses() {
    return function thunk(dispatch) {
        return axios.get('api/campuses')
        .then(res => res.data)
        .then (campuses => {
            const action = getCampuses(campuses)
            dispatch(action)
        })
    }
}


//Reducer

const state = []
export default function reducer(state = [], action) {
    switch (action.type) {
        case GET_CAMPUSES:
            return action.campuses

        default:
            return state;
    }
}