import {
  DELETE_PROFILE,
  GET_PROFILE,
  UPDATE_PROFILE,
  PROFILE_ACTION_ATTEMPT,
  PROFILE_ACTION_SUCCESS,
  PROFILE_ACTION_FAILED,
} from "../types";
import axios from "axios";
import { setAlert } from "./alertactions";
import { uri } from "../../url";
export const getprofile = () => async (dispatch) => {
  try {
    // const page = 1;
    dispatch({ type: PROFILE_ACTION_ATTEMPT });

    const res = await axios.get(`${uri}profile`);
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const deleteprofile = (id) => async (dispatch) => {
  try {
    // const page = 1;
    dispatch({ type: PROFILE_ACTION_ATTEMPT });

    const res = await axios.delete(
      `${uri}profile/${id}`
    );
    console.log(res);
    dispatch({
      type: DELETE_PROFILE,
      payload: res.data,
    });
    dispatch(setAlert("Brand Delete Successfully", "success"));
  } catch (error) {
    console.log(error);
  }
};

export const updateprofile = (formData, navigate) => async (dispatch) => {
  try {
    // const page = 1;
    dispatch({ type: PROFILE_ACTION_ATTEMPT });

    const res = await axios.put(
      `${uri}profile`,
      formData
    );
    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });
    dispatch(setAlert("Profile Updated Successfully", "success"));
    // open(false);
  } catch (error) {
    console.log(error);
  }
};
