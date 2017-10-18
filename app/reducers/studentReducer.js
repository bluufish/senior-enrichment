import axios from 'axios'

//Action Types
const GET_STUDENTS = 'GET_STUDENTS'

//Action Creators
export const getStudents = (students) => {
    const action = { type: GET_STUDENTS, students }
    return action
}

//Thunk Creators
export function fetchStudents() {
    return function thunk(dispatch) {
        return axios.get('/api/students')
            .then(res => res.data)
            .then(students => {
                const action = getStudents(students)
                dispatch(action)
            })
    }
}


//Reducer
export default function reducer(state = [], action) {
    switch (action.type) {
        case GET_STUDENTS:
            return action.students

        default:
            return state
    }
}
