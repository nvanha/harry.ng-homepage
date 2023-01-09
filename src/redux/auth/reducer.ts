import { handleActions } from "redux-actions";

import * as Actions from "./actions";

const initialState = {
  isSignInRequest: false,
  isSignInSuccess: false,
  isSignInFailure: false,
  isSignUpRequest: false,
  isSignUpSuccess: false,
  isSignUpFailure: false,
  isConfirmSignUpRequest: false,
  isConfirmSignUpSuccess: false,
  isConfirmSignUpFailure: false,
  isSignOutRequest: false,
  isSignOutSuccess: false,
  isSignOutFailure: false,
  isForgotPasswordRequest: false,
  isForgotPasswordSuccess: false,
  isForgotPasswordFailure: false,
  isResetPasswordRequest: false,
  isResetPasswordSuccess: false,
  isResetPasswordFailure: false,
  errorMessages: [],
};

const reducer = handleActions(
  {
    // #region : Sign in
    [Actions.signInRequest]: (state) => ({
      ...state,
      isSignInRequest: true,
      isSignInSuccess: false,
      isSignInFailure: false,
    }),
    [Actions.signInSuccess]: (state) => ({
      ...state,
      isSignInRequest: false,
      isSignInSuccess: true,
      isSignInFailure: false,
    }),
    [Actions.signInFailure]: (state, { payload }) => ({
      ...state,
      isSignInRequest: false,
      isSignInSuccess: false,
      isSignInFailure: true,
      errorMessages: payload,
    }),
    // #endregion
    // #region : Sign up
    [Actions.signUpRequest]: (state) => ({
      ...state,
      isSignUpRequest: true,
      isSignUpSuccess: false,
      isSignUpFailure: false,
    }),
    [Actions.signUpSuccess]: (state) => ({
      ...state,
      isSignUpRequest: false,
      isSignUpSuccess: true,
      isSignUpFailure: false,
    }),
    [Actions.signUpFailure]: (state, { payload }) => ({
      ...state,
      isSignUpRequest: false,
      isSignUpSuccess: false,
      isSignUpFailure: true,
      errorMessages: payload,
    }),
    [Actions.confirmSignUpRequest]: (state) => ({
      ...state,
      isConfirmSignUpRequest: true,
      isConfirmSignUpSuccess: false,
      isConfirmSignUpFailure: false,
    }),
    [Actions.confirmSignUpSuccess]: (state) => ({
      ...state,
      isConfirmSignUpRequest: false,
      isConfirmSignUpSuccess: true,
      isConfirmSignUpFailure: false,
    }),
    [Actions.confirmSignUpFailure]: (state, { payload }) => ({
      ...state,
      isConfirmSignUpRequest: false,
      isConfirmSignUpSuccess: false,
      isConfirmSignUpFailure: true,
      errorMessages: payload,
    }),
    // #endregion
    // #region : Sign out
    [Actions.signOutRequest]: (state) => ({
      ...state,
      isSignOutRequest: true,
      isSignOutSuccess: false,
      isSignOutFailure: false,
    }),
    [Actions.signOutSuccess]: (state) => ({
      ...state,
      isSignOutRequest: false,
      isSignOutSuccess: true,
      isSignOutFailure: false,
    }),
    [Actions.signOutFailure]: (state, { payload }) => ({
      ...state,
      isSignOutRequest: false,
      isSignOutSuccess: false,
      isSignOutFailure: true,
      errorMessages: payload,
    }),
    // #endregion
    // #region : Forgot password
    [Actions.forgotPasswordRequest]: (state) => ({
      ...state,
      isForgotPasswordRequest: true,
      isForgotPasswordSuccess: false,
      isForgotPasswordFailure: false,
    }),
    [Actions.forgotPasswordSuccess]: (state) => ({
      ...state,
      isForgotPasswordRequest: false,
      isForgotPasswordSuccess: true,
      isForgotPasswordFailure: false,
    }),
    [Actions.forgotPasswordFailure]: (state, { payload }) => ({
      ...state,
      isForgotPasswordRequest: false,
      isForgotPasswordSuccess: false,
      isForgotPasswordFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetPasswordRequest]: (state) => ({
      ...state,
      isResetPasswordRequest: true,
      isResetPasswordSuccess: false,
      isResetPasswordFailure: false,
    }),
    [Actions.resetPasswordSuccess]: (state) => ({
      ...state,
      isResetPasswordRequest: false,
      isResetPasswordSuccess: true,
      isResetPasswordFailure: false,
    }),
    [Actions.resetPasswordFailure]: (state, { payload }) => ({
      ...state,
      isResetPasswordRequest: false,
      isResetPasswordSuccess: false,
      isResetPasswordFailure: true,
      errorMessages: payload,
    }),
    // #endregion
    // #region : Local
    [Actions.resetAuthState]: () => initialState,
    // #endregion
  },
  initialState
);

export default reducer;
