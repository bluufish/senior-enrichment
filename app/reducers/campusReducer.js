import axios from 'axios'
import { fetchStudents } from './studentReducer'

//Action Types
const GET_CAMPUSES = 'GET_CAMPUSES'
const CREATE_CAMPUS = 'CREATE_CAMPUS'
const DELETE = 'DELETE_CAMPUS'
const UPDATE = 'UPDATE_CAMPUS'

//Action Creators
export const getCampuses = (campuses) => {
    const action = { type: GET_CAMPUSES, campuses }
    return action
}

export const createCampus = (campus) => {
    const action = { type: CREATE_CAMPUS, campus }
    return action
}

export const updateACampus = (campus) => {
    const action = {type: UPDATE, campus}
    return action
}

export const deleteCamp = (campus) => {
    const action = { type: DELETE, campus }
    return action
}

//Thunk Creators
export function fetchCampuses() {
    return function thunk(dispatch) {
        return axios.get('/api/campuses')
            .then(res => res.data)
            .then(campuses => {
                const action = getCampuses(campuses)
                dispatch(action)
            })
            .catch(err => console.error('Failed to fetch', err)
    }
}

export function postCampus(campus, history) {
    return function thunk(dispatch) {
        return axios.post('/api/campuses/add', campus)
            .then(res => res.data)
            .then(newCampus => {
                const action = createCampus(newCampus)
                dispatch(action)
                history.push(`/campuses/${newCampus.id}`)
            })
            .catch(err => console.error('Failed to post', err)
    }
}

export function updateCampus(campus, id, history) {
    return function thunk(dispatch) {
        return axios.put(`/api/campuses/${id}`, campus)
            .then(res => res.data)
            .then(updatedCampus => {
                const action = updateACampus(updatedCampus)
                dispatch(action)
                history.push(`/campuses/${updatedCampus.id}`)
            })
            .catch(err => console.error('Failed to update', err))
    }
}

export function deleteCampus(campus, history) {
    return function thunk(dispatch) {
        dispatch(deleteCamp(campus))
        return axios.delete(`/api/campuses/${campus.id}`)
            .then(_ => {
                dispatch(fetchStudents())
                history.push('/campuses/')
            })
            .catch(err => console.error('Could not delete', err))
    }
}

//Reducer

export default function reducer(state = [], action) {
    switch (action.type) {
        case GET_CAMPUSES:
            return action.campuses

        case CREATE_CAMPUS:
            return [...state, action.campus]

        case UPDATE:
            return state.map(campus => {
                if (campus.id === action.campus.id) return action.campus
                else return campus
            })

        case DELETE:
            return state.filter(campus => campus.id !== action.campus.id)

        default:
            return state
    }
}