import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};

// // so after the login process if everything is successful, we're gonna update this initial state
// // we will have our username, email & we're gonna reach this user inside any component, any pages

export const AuthContext = createContext(INITIAL_STATE);

// // inside this Context im gonna pass the initial state

// // So how am i gonna reach this user inside any component? i should create here ContextProvider
// // And wrap all the components with the ContextProvider & then we'll be able to reach this initial state

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  //   // so once this initial state is updated we can now use this Context as Provider by Context.Provider

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch, // so that they can dispatch this actions
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
