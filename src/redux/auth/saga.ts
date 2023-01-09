import { Auth } from "aws-amplify";
import { call, put, takeLatest } from "redux-saga/effects";

import * as Actions from "./actions";

function* signIn({ payload }) {
  try {
    const { username, password } = payload;
    const response = yield call(() => Auth.signIn(username, password));
    yield put(Actions.signInSuccess(response));
  } catch (error) {
    const message = [error];
    yield put(Actions.signInFailure(message));
  }
}

function* signUp({ payload }) {
  try {
    const {
      attributes: { email },
    } = payload;
    yield call(() => Auth.signIn(email.toLowerCase(), "123"));
  } catch (error1: any) {
    if (error1.code !== "UserNotFoundException") {
      const message = [
        {
          code: "EmailExistException",
          message:
            "This email already exists. Please try again with a new email address.",
        },
      ];
      yield put(Actions.signUpFailure(message));
      return;
    }
    try {
      const response = yield call(() => Auth.signUp(payload));
      yield put(Actions.signUpSuccess(response));
    } catch (error2) {
      const message = [error2];
      yield put(Actions.signUpFailure(message));
    }
  }
}

function* confirmSignUp({ payload }) {
  try {
    const { username, code } = payload;
    const response = yield call(() => Auth.confirmSignUp(username, code));
    if (response) {
      yield put(Actions.confirmSignUpSuccess(response));
    }
  } catch (error: any) {
    if (
      error.code === "InvalidParameterException" &&
      error.message.includes("Member must satisfy regular expression pattern")
    ) {
      const message = [
        {
          code: "CodeMismatchException",
          message: "Code provided does not match code generated on servers.",
        },
      ];
      yield put(Actions.confirmSignUpFailure(message));
    } else {
      const message = [error];
      yield put(Actions.confirmSignUpFailure(message));
    }
  }
}

function* signOut() {
  try {
    const response = yield call(() => Auth.signOut());
    const win: Window = window;
    win.location = "/";
    if (response?.status === 200) {
      yield put(Actions.signOutSuccess());
    }
  } catch (error: any) {
    if (error.response.data) {
      const { messages } = error.response.data.error;
      yield put(Actions.signOutFailure(messages));
    }
  }
}

function* forgotPassword({ payload }) {
  try {
    const { username } = payload;
    yield call(() => Auth.forgotPassword(username));
    yield put(Actions.forgotPasswordSuccess());
  } catch (error) {
    const messages = [error];
    yield put(Actions.forgotPasswordFailure(messages));
  }
}

function* resetPassword({ payload }) {
  try {
    const { username, code, new_password } = payload;
    yield call(() => Auth.forgotPasswordSubmit(username, code, new_password));
    yield put(Actions.resetPasswordSuccess());
  } catch (error) {
    const messages = [error];
    yield put(Actions.resetPasswordFailure(messages));
  }
}

export default function* () {
  yield takeLatest(Actions.signInRequest, signIn);
  yield takeLatest(Actions.signUpRequest, signUp);
  yield takeLatest(Actions.confirmSignUpRequest, confirmSignUp);
  yield takeLatest(Actions.signOutRequest, signOut);
  yield takeLatest(Actions.forgotPasswordRequest, forgotPassword);
  yield takeLatest(Actions.resetPasswordRequest, resetPassword);
}
