// import axios from 'axios'

const initialState = {
  id: 0,
  user_id: 0,
  price: 0,
  item: '',
  category: '',
  city: '',
  state: '',
  img: ''
}

// const SET_ID = 'SET_ID'
const SET_USER_ID = 'SET_USER_ID'
const SET_PRICE = 'SET_PRICE'
const SET_ITEM = 'SET_ITEM'
const SET_CATEGORY = 'SET_CATEGORY'
const SET_CITY = 'SET_CITY'
const SET_STATE = 'SET_STATE'
const SET_IMG = 'SET_IMG'

export function setUserId(value) {
  return {
    type: SET_USER_ID,
    payload: value
  }
}
export function setItem(value) {
  return {
    type: SET_ITEM,
    payload: value
  }
}
export function setImg(value) {
  return {
    type: SET_IMG,
    payload: value
  }
}
export function setPrice(value) {
  return {
    type: SET_PRICE,
    payload: value
  }
}
export function setCategory(value) {
  return {
    type: SET_CATEGORY,
    payload: value
  }
}
export function setCity(value) {
  return {
    type: SET_CITY,
    payload: value
  }
}
export function setState(value) {
  return {
    type: SET_STATE,
    payload: value
  }
}

export default function reducer(state=initialState, action) {
  const { type, payload } = action
  switch(type) {
    case SET_USER_ID:
      return {
        ...state,
        user_id: payload
      }
    case SET_IMG:
      return {
        ...state,
        img: payload
      }
    case SET_ITEM: 
      return {
        ...state,
        item: payload
      }
    case SET_PRICE: 
      return {
        ...state,
        price: payload
      }
    case SET_CATEGORY: 
      return {
        ...state,
        category: payload
      }
    case SET_CITY:
      return {
        ...state,
        city: payload
      }
    case SET_STATE: 
      return {
        ...state,
        state: payload
      }
    default: return state
  }
}