import { createAction } from "redux-actions";

export const addWorkRequest = createAction("ADD_WORK_REQUEST");
export const addWorkSuccess = createAction("ADD_WORK_SUCCESS");
export const addWorkFailure = createAction("ADD_WORK_FAILURE");

export const getListWorksRequest = createAction("GET_LIST_WORKS_REQUEST");
export const getListWorksSuccess = createAction("GET_LIST_WORKS_SUCCESS");
export const getListWorksFailure = createAction("GET_LIST_WORKS_FAILURE");

export const getWorkDetailsRequest = createAction("GET_WORK_DETAILS_REQUEST");
export const getWorkDetailsSuccess = createAction("GET_WORK_DETAILS_SUCCESS");
export const getWorkDetailsFailure = createAction("GET_WORK_DETAILS_FAILURE");

export const deleteWorkRequest = createAction("DELETE_WORK_REQUEST");
export const deleteWorkSuccess = createAction("DELETE_WORK_SUCCESS");
export const deleteWorkFailure = createAction("DELETE_WORK_FAILURE");

export const testUploadImageRequest = createAction("TEST_UPLOAD_IMAGE_REQUEST");
export const testUploadImageSuccess = createAction("TEST_UPLOAD_IMAGE_SUCCESS");
export const testUploadImageFailure = createAction("TEST_UPLOAD_IMAGE_FAILURE");

export const resetWorksState = createAction("RESET_WORKS_STATE");
