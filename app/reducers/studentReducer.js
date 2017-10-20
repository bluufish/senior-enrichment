import axios from 'axios'

//Action Types
const GET_STUDENTS = 'GET_STUDENTS'
const ADD_STUDENT = 'ADD_STUDENT'
const DELETE = 'DELETE_STUDENT'
const UPDATE = 'UPDATE_STUDENT'

//Action Creators
export const getStudents = (students) => {
    const action = { type: GET_STUDENTS, students }
    return action
}

export const addStudent = (student) => {
    const action = { type: ADD_STUDENT, student }
    return action
}

export const deleteAStudent = (student) => {
    const action = { type: DELETE, student }
    return action
}

export const updateAStudent = (student) => {
    const action = { type: UPDATE, student }
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
            .catch(console.error)
    }
}

export function createStudent(student, history) {
    return function thunk(dispatch) {
        return axios.post('/api/students/add', student)
            .then(res => res.data)
            .then(student => {
                const action = addStudent(student)
                dispatch(action)
                history.push(`/students/${student.id}`)
            })
            .catch(console.error)
    }
}

export function updateStudent(student, id, history) {
    return function thunk(dispatch) {
        return axios.put(`/api/students/${id}`, student)
            .then(res => res.data)
            .then(updatedStudent => {
                dispatch(updateAStudent(updatedStudent))
                history.push(`/students/${updatedStudent.id}`)
            })
            .catch(err => console.error('Could not update', err))
    }
}

export function deleteStudent(student, history) {
    return function thunk(dispatch) {
        dispatch(deleteAStudent(student))
        return axios.delete(`/api/students/${student}`)
            .then( _ => history.push(`/studentsview`) )
            .catch(err => console.error('Could not delete', err))
    }
}



//Reducer
export default function reducer(state = [], action) {
    switch (action.type) {
        case GET_STUDENTS:
            return action.students

        case ADD_STUDENT:
            return [...state, action.student]

        case DELETE:
            return state.filter(student => student.id !== action.student)

        case UPDATE: 
            return state.map(student => {
                if (student.id === action.student.id) return action.student
                else return student
            })

        default:
            return state
    }
}
