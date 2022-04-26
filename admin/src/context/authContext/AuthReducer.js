// Reducer will take our actions & accordingly it will update our context state

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      // its gonna return our new state
      return {
        user: null,
        isFetching: true,
        error: false,
      };
    case "LOGIN_SUCCESS":
      // its gonna return our new state
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case "LOGIN_FAILURE":
      // its gonna return our new state
      return {
        user: null,
        isFetching: false,
        error: true,
      };
    case "LOGOUT":
      return {
        user: null,
        isFetching: false,
        error: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default AuthReducer;

// So now once I have my actions & my reducers, I can now dispatch them
// we have to dispatch it where we wanna use it for eg when we login & update the user we have to dispatch
// by saying dispatch({type:"UPDATE_SUCCESS",payload:res.data})
// but first going to Context.js, I can use my state & dispatch with the help of useReducer hook
