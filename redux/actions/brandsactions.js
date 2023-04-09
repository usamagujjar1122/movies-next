import {
  GET_BRAND,
  ADD_BRAND,
  BRAND_ACTION_ATTEMPT,
  BRAND_ACTION_SUCCESS,
  BRAND_ACTION_FAILED,
  DELETE_BRAND,
  UPDATE_BRAND,
} from "../types";
import { uri } from "../../url";
import axios from "axios";
import { setAlert } from "./alertactions";

export const addbrand = (formData, navigate) => async (dispatch) => {
  try {
    // const page = 1;
    dispatch({ type: BRAND_ACTION_ATTEMPT });

    const res = await axios.post(
      `${uri}brand`,
      formData
    );
    dispatch({
      type: ADD_BRAND,
      payload: res.data,
    });
    dispatch(setAlert("New Brand Added Sussessfully", "success"));
    navigate("/dashboard");
  } catch (error) {
    console.log(error);
    dispatch({
      type: BRAND_ACTION_FAILED,
    });
    dispatch(setAlert(error.response.data.message, "error"));
  }
};
export const getbrands = () => async (dispatch) => {
  try {
    // const page = 1;
    dispatch({ type: BRAND_ACTION_ATTEMPT });

    const res = await axios.get(`${uri}brand`);
    console.log(res);
    dispatch({
      type: GET_BRAND,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const deletebrand = (id) => async (dispatch) => {
  try {
    // const page = 1;
    dispatch({ type: BRAND_ACTION_ATTEMPT });

    const res = await axios.delete(
      `${uri}brand/${id}`
    );
    console.log(res);
    dispatch({
      type: DELETE_BRAND,
      payload: res.data,
    });
    dispatch(setAlert("Brand Delete Successfully", "success"));
  } catch (error) {
    console.log(error);
  }
};

export const updatebrand = (formData, open) => async (dispatch) => {
  try {
    // const page = 1;
    dispatch({ type: BRAND_ACTION_ATTEMPT });

    const res = await axios.put(
      `${uri}brand/${formData.id}`,
      formData
    );
    dispatch({
      type: UPDATE_BRAND,
      payload: res.data,
    });
    dispatch(setAlert("Brand Updated Successfully", "success"));
    open(false);
  } catch (error) {
    console.log(error);
  }
};
