import axios from 'axios'

//Action Types
const GET_STUDENTS = 'GET_STUDENTS'
const ADD_STUDENT = 'ADD_STUDENT'

//Action Creators
export const getStudents = (students) => {
    const action = { type: GET_STUDENTS, students }
    return action
}

export const addStudent = (student) => {
    const action = {type:ADD_STUDENT, student}
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
                //history.push(`/students/$()`)
            })
            .catch(console.error)            
    }
}

export function createStudent(student) {
    return function thunk(dispatch) {
        return axios.post('/api/students/add', student)
        .then(res => res.data)
        .then (student => {
            const action = addStudent(student)
            dispatch(action)
        })
        .catch(console.error)
    }
}


//Reducer
export default function reducer(state = [], action) {
    switch (action.type) {
        case GET_STUDENTS:
            return action.students
        case ADD_STUDENT:
            return [...state, action.student]
        default:
            return state
    }
}
