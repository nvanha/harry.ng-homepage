import { handleActions } from "redux-actions";

import * as Actions from "./actions";

const initialState = {
  isAddWorkRequest: false,
  isAddWorkSuccess: false,
  isAddWorkFailure: false,
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
    [Actions.addWorkSuccess]: (state) => ({
      ...state,
      isAddWorkRequest: false,
      isAddWorkSuccess: true,
      isAddWorkFailure: false,
    }),
    [Actions.addWorkFailure]: (state, { payload }) => ({
      ...state,
      isAddWorkRequest: false,
      isAddWorkSuccess: false,
      isAddWorkFailure: true,
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
    [Actions.deleteWorkSuccess]: (state) => ({
      ...state,
      isDeleteWorkRequest: false,
      isDeleteWorkSuccess: true,
      isDeleteWorkFailure: false,
    }),
    [Actions.deleteWorkFailure]: (state, { payload }) => ({
      ...state,
      isDeleteWorkRequest: false,
      isDeleteWorkSuccess: false,
      isDeleteWorkFailure: true,
      errorMessages: [payload],
    }),
    // #endregion
    // #region : Local
    [Actions.resetWorksState]: () => initialState,
    // #endregion
  },
  initialState
);

export default reducer;
