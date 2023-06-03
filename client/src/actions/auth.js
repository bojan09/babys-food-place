// import everything from actions as api
import * as api from "../api";

// actions
import { AUTH } from "../constants";

// Action creators

export const signin = (formData, navigate) => async (dispatch) => {
  try {
    // log in the user
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    navigate("/");
  } catch (err) {
    console.log(err);
  }
};

export const signup = (formData, navigate) => async (dispatch) => {
  try {
    // sign up the user
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    navigate("/");
  } catch (err) {
    console.log(err);
  }
};
