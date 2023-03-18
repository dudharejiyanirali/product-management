import * as actionType from '../Action/actionType'
const initialState = {
  isLoggedIn: true,
  user: null,
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.LOGIN_SUCCESS:
      localStorage.setItem(
        'user',
        JSON.stringify({ isLoggedIn: state.isLoggedIn }),
      )
      return {
        ...state,
        isLoggedIn: true,
        user: action.user,
      }
    default:
      return state
  }
}
export default loginReducer
