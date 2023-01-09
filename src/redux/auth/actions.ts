import { createAction } from "redux-actions";

export const signInRequest = createAction("SIGN_IN_REQUEST");
export const signInSuccess = createAction("SIGN_IN_SUCCESS");
export const signInFailure = createAction("SIGN_IN_FAILURE");

export const signUpRequest = createAction("SIGN_UP_REQUEST");
export const signUpSuccess = createAction("SIGN_UP_SUCCESS");
export const signUpFailure = createAction("SIGN_UP_FAILURE");

export const confirmSignUpRequest = createAction("CONFIRM_SIGN_UP_REQUEST");
export const confirmSignUpSuccess = createAction("CONFIRM_SIGN_UP_SUCCESS");
export const confirmSignUpFailure = createAction("CONFIRM_SIGN_UP_FAILURE");

export const signOutRequest = createAction("SIGN_OUT_REQUEST");
export const signOutSuccess = createAction("SIGN_OUT_SUCCESS");
export const signOutFailure = createAction("SIGN_OUT_FAILURE");

export const forgotPasswordRequest = createAction("FORGOT_PASSWORD_REQUEST");
export const forgotPasswordSuccess = createAction("FORGOT_PASSWORD_SUCCESS");
export const forgotPasswordFailure = createAction("FORGOT_PASSWORD_FAILURE");

export const resetPasswordRequest = createAction("RESET_PASSWORD_REQUEST");
export const resetPasswordSuccess = createAction("RESET_PASSWORD_SUCCESS");
export const resetPasswordFailure = createAction("RESET_PASSWORD_FAILURE");

export const resetAuthState = createAction("RESET_AUTH_STATE");
