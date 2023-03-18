import * as actionType from "./actionType";
export const  loginAction = user => {
  console.log(user)
    return ({
        type: actionType.LOGIN_SUCCESS,
        user
    })
}