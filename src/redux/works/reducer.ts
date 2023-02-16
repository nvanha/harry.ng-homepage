import { handleActions } from "redux-actions";

import * as Actions from "./actions";

const initialState = {
  isAddWorkRequest: false,
  isAddWorkSuccess: false,
  isAddWorkFailure: false,
  addWorkRes: {},
  isUpdateWorkRequest: false,
  isUpdateWorkSuccess: false,
  isUpdateWorkFailure: false,
  isGetListWorksRequest: false,
  isGetListWorksSuccess: false,
  isGetListWorksFailure: false,
  listWorksState: [],
  isGetWorkDetailsRequest: false,
  isGetWorkDetailsSuccess: false,
  isGetWorkDetailsFailure: false,
  workDetailsState: {},
  isDeleteWorkRequest: false,
  isDeleteWorkSuccess: false,
  isDeleteWorkFailure: false,
  deleteWorkRes: {},
  isUploadImageWorkRequest: false,
  isUploadImageWorkSuccess: false,
  isUploadImageWorkFailure: false,
  uploadImageWorkRes: {},
  isDeleteImageWorkRequest: false,
  isDeleteImageWorkSuccess: false,
  isDeleteImageWorkFailure: false,
  deleteImageWorkRes: {},
  isCommentWorkRequest: false,
  isCommentWorkSuccess: false,
  isCommentWorkFailure: false,
  errorMessages: [],
};

const reducer = handleActions(
  {
    // #region : Add work
    [Actions.addWorkRequest]: (state) => ({
      ...state,
      isAddWorkRequest: true,
      isAddWorkSuccess: false,
      isAddWorkFailure: false,
    }),
    [Actions.addWorkSuccess]: (state, { payload }) => ({
      ...state,
      isAddWorkRequest: false,
      isAddWorkSuccess: true,
      isAddWorkFailure: false,
      addWorkRes: payload,
    }),
    [Actions.addWorkFailure]: (state, { payload }) => ({
      ...state,
      isAddWorkRequest: false,
      isAddWorkSuccess: false,
      isAddWorkFailure: true,
      errorMessages: [payload],
    }),
    // #endregion
    // #region : Update work
    [Actions.updateWorkRequest]: (state) => ({
      ...state,
      isUpdateWorkRequest: true,
      isUpdateWorkSuccess: false,
      isUpdateWorkFailure: false,
    }),
    [Actions.updateWorkSuccess]: (state) => ({
      ...state,
      isUpdateWorkRequest: false,
      isUpdateWorkSuccess: true,
      isUpdateWorkFailure: false,
    }),
    [Actions.updateWorkFailure]: (state, { payload }) => ({
      ...state,
      isUpdateWorkRequest: false,
      isUpdateWorkSuccess: false,
      isUpdateWorkFailure: true,
      errorMessages: [payload],
    }),
    // #endregion
    // #region : Get list works
    [Actions.getListWorksRequest]: (state) => ({
      ...state,
      isGetListWorksRequest: true,
      isGetListWorksSuccess: false,
      isGetListWorksFailure: false,
    }),
    [Actions.getListWorksSuccess]: (state, { payload }) => ({
      ...state,
      isGetListWorksRequest: false,
      isGetListWorksSuccess: true,
      isGetListWorksFailure: false,
      listWorksState: payload,
    }),
    [Actions.getListWorksFailure]: (state, { payload }) => ({
      ...state,
      isGetListWorksRequest: false,
      isGetListWorksSuccess: false,
      isGetListWorksFailure: true,
      errorMessages: [payload],
    }),
    // #endregion
    // #region : Get work details
    [Actions.getWorkDetailsRequest]: (state) => ({
      ...state,
      isGetWorkDetailsRequest: true,
      isGetWorkDetailsSuccess: false,
      isGetWorkDetailsFailure: false,
    }),
    [Actions.getWorkDetailsSuccess]: (state, { payload }) => ({
      ...state,
      isGetWorkDetailsRequest: false,
      isGetWorkDetailsSuccess: true,
      isGetWorkDetailsFailure: false,
      workDetailsState: payload,
    }),
    [Actions.getWorkDetailsFailure]: (state, { payload }) => ({
      ...state,
      isGetWorkDetailsRequest: false,
      isGetWorkDetailsSuccess: false,
      isGetWorkDetailsFailure: true,
      errorMessages: [payload],
    }),
    // #endregion
    // #region : Delete work
    [Actions.deleteWorkRequest]: (state) => ({
      ...state,
      isDeleteWorkRequest: true,
      isDeleteWorkSuccess: false,
      isDeleteWorkFailure: false,
    }),
    [Actions.deleteWorkSuccess]: (state, { payload }) => ({
      ...state,
      isDeleteWorkRequest: false,
      isDeleteWorkSuccess: true,
      isDeleteWorkFailure: false,
      deleteWorkRes: payload,
    }),
    [Actions.deleteWorkFailure]: (state, { payload }) => ({
      ...state,
      isDeleteWorkRequest: false,
      isDeleteWorkSuccess: false,
      isDeleteWorkFailure: true,
      errorMessages: [payload],
    }),
    // #endregion
    // #region : Upload image work
    [Actions.uploadImageWorkRequest]: (state) => ({
      ...state,
      isUploadImageWorkRequest: true,
      isUploadImageWorkSuccess: false,
      isUploadImageWorkFailure: false,
    }),
    [Actions.uploadImageWorkSuccess]: (state, { payload }) => ({
      ...state,
      isUploadImageWorkRequest: false,
      isUploadImageWorkSuccess: true,
      isUploadImageWorkFailure: false,
      uploadImageWorkRes: payload,
    }),
    [Actions.uploadImageWorkFailure]: (state, { payload }) => ({
      ...state,
      isUploadImageWorkRequest: false,
      isUploadImageWorkSuccess: false,
      isUploadImageWorkFailure: true,
      errorMessages: [payload],
    }),
    // #endregion
    // #region : Delete image work
    [Actions.deleteImageWorkRequest]: (state) => ({
      ...state,
      isDeleteImageWorkRequest: true,
      isDeleteImageWorkSuccess: false,
      isDeleteImageWorkFailure: false,
    }),
    [Actions.deleteImageWorkSuccess]: (state, { payload }) => ({
      ...state,
      isDeleteImageWorkRequest: false,
      isDeleteImageWorkSuccess: true,
      isDeleteImageWorkFailure: false,
      deleteImageWorkRes: payload,
    }),
    [Actions.deleteImageWorkFailure]: (state, { payload }) => ({
      ...state,
      isDeleteImageWorkRequest: false,
      isDeleteImageWorkSuccess: false,
      isDeleteImageWorkFailure: true,
      errorMessages: [payload],
    }),
    // #endregion
    // #region : Comment work
    [Actions.commentWorkRequest]: (state) => ({
      ...state,
      isCommentWorkRequest: true,
      isCommentWorkSuccess: false,
      isCommentWorkFailure: false,
    }),
    [Actions.commentWorkSuccess]: (state, { payload }) => ({
      ...state,
      isCommentWorkRequest: false,
      isCommentWorkSuccess: true,
      isCommentWorkFailure: false,
      deleteImageWorkRes: payload,
    }),
    [Actions.commentWorkFailure]: (state, { payload }) => ({
      ...state,
      isCommentWorkRequest: false,
      isCommentWorkSuccess: false,
      isCommentWorkFailure: true,
      errorMessages: [payload],
    }),
    // #endregion
    // #region : Local
    [Actions.resetWorksState]: () => initialState,
    [Actions.resetGetWorkDetailsState]: (state) => ({
      ...state,
      isGetWorkDetailsRequest: false,
      isGetWorkDetailsSuccess: false,
      isGetWorkDetailsFailure: false,
      workDetailsState: {},
    }),
    // #endregion
  },
  initialState
);

export default reducer;
