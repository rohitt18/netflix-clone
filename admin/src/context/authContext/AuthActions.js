// ACTIONS -

// //  After starting we're not gonna return anything,
// //   we're gonna just wait for successful or failure process
export const loginStart = () => ({
  type: "LOGIN_START",
});

// when our login process in successful its gonna return us a user
// so we will take the user & update the state
export const loginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const loginFailure = () => ({
  type: "LOGIN_FAILURE",
});

// YEH START SUCCESS & FAILURE TABHI KARTE HAI JAB API CALL KARNA HOTA HAI

export const logout = () => ({
  type: "LOGOUT", // delete the user from our state i,e its gonna be null again
});

// we can create a logout button & when user clicks this we can dispatch this action & that would make our user null again
