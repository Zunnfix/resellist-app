const initialState = {
  login: false,
  id: 0,
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  img: '',
  offers: [],
  products: []
}

const UPDATE_SESSION = 'UPDATE_SESSION'
const RESET_STATE = 'RESET_STATE'

export function updateSession(userSession) {
  return {
    type: UPDATE_SESSION,
    payload: userSession
  }
}
export function resetState() {
  return {
    type: RESET_STATE
  }
}

export default function reducer(state=initialState, action) {
  const { type, payload } = action
  console.log(action)
  switch(type) {
    case UPDATE_SESSION:
      return {
        ...state,
        login: true,
        id: payload.id,
        firstName: payload.firstName,
        lastName: payload.lastName,
        username: payload.username,
        email: payload.email,
        img: payload.img,
        offers: payload.offers,
        products: payload.products
      }
    case RESET_STATE: 
      return {
        initialState
      }
    default: return state
  }
}