const initialState = {
  username: '',
  password: ''
}

const SET_USERNAME = 'SET_USERNAME'
const SET_PASSWORD = 'SET_PASSWORD'

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