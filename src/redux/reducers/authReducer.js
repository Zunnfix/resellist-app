const initialState = {
  username: '',
  password: ''
}

// Variables set to avoid possible misspellings of string
const SET_USERNAME = 'SET_USERNAME'
const SET_PASSWORD = 'SET_PASSWORD'

// Runs when state values are submitted
export function setUsername(value) {
  return {
    type: SET_USERNAME,
    payload: value
  }
}
export function setPassword(value) {
  return {
    type: SET_PASSWORD,
    payload: value
  }
}

// Changes state with each keystroke
export default function reducer(state=initialState, action) {
  const { type, payload } = action
  switch(type) {
    case SET_USERNAME:
      return {
        ...state,
        username: payload
      }
    case SET_PASSWORD: 
      return {
        ...state,
        password: payload
      }
    default: return state
  }
}