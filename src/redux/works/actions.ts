import { createAction } from "redux-actions";

export const addWorkRequest = createAction("ADD_WORK_REQUEST");
export const addWorkSuccess = createAction("ADD_WORK_SUCCESS");
export const addWorkFailure = createAction("ADD_WORK_FAILURE");

export const updateWorkRequest = createAction("UPDATE_WORK_REQUEST");
export const updateWorkSuccess = createAction("UPDATE_WORK_SUCCESS");
export const updateWorkFailure = createAction("UPDATE_WORK_FAILURE");

export const getListWorksRequest = createAction("GET_LIST_WORKS_REQUEST");
export const getListWorksSuccess = createAction("GET_LIST_WORKS_SUCCESS");
export const getListWorksFailure = createAction("GET_LIST_WORKS_FAILURE");

export const getWorkDetailsRequest = createAction("GET_WORK_DETAILS_REQUEST");
export const getWorkDetailsSuccess = createAction("GET_WORK_DETAILS_SUCCESS");
export const getWorkDetailsFailure = createAction("GET_WORK_DETAILS_FAILURE");

export const deleteWorkRequest = createAction("DELETE_WORK_REQUEST");
export const deleteWorkSuccess = createAction("DELETE_WORK_SUCCESS");
export const deleteWorkFailure = createAction("DELETE_WORK_FAILURE");

export const uploadImageWorkRequest = createAction("UPLOAD_IMAGE_WORK_REQUEST");
export const uploadImageWorkSuccess = createAction("UPLOAD_IMAGE_WORK_SUCCESS");
export const uploadImageWorkFailure = createAction("UPLOAD_IMAGE_WORK_FAILURE");

export const deleteImageWorkRequest = createAction("DELETE_IMAGE_WORK_REQUEST");
export const deleteImageWorkSuccess = createAction("DELETE_IMAGE_WORK_SUCCESS");
export const deleteImageWorkFailure = createAction("DELETE_IMAGE_WORK_FAILURE");

export const commentWorkRequest = createAction("COMMENT_WORK_REQUEST");
export const commentWorkSuccess = createAction("COMMENT_WORK_SUCCESS");
export const commentWorkFailure = createAction("COMMENT_WORK_FAILURE");

export const resetWorksState = createAction("RESET_WORKS_STATE");
export const resetGetWorkDetailsState = createAction(
  "RESET_GET_WORK_DETAILS_STATE"
);
