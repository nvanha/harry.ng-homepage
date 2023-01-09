import { call, put, takeLatest } from "redux-saga/effects";

import { axiosMicroApiInstance } from "@/services";
import * as Actions from "./actions";

function* addWork({ payload }) {
  try {
    const response = yield call(() =>
      axiosMicroApiInstance.put("/works/add-work", JSON.stringify(payload))
    );
    if (response?.status === 201) {
      yield put(Actions.addWorkSuccess(response.data));
    }
  } catch (error: any) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.addWorkFailure(messages));
    }
  }
}

function* getListWorks({ payload }) {
  try {
    const response = yield call(() =>
      axiosMicroApiInstance.get("/works/list-works")
    );
    if (response?.status === 200) {
      yield put(Actions.getListWorksSuccess(response.data));
    }
  } catch (error: any) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.getListWorksFailure(messages));
    }
  }
}

function* getWorkDetails({ payload }) {
  try {
    const response = yield call(() =>
      axiosMicroApiInstance.get(`/works/work/${payload}`)
    );
    if (response?.status === 200) {
      yield put(Actions.getWorkDetailsSuccess(response.data));
    }
  } catch (error: any) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.getWorkDetailsFailure(messages));
    }
  }
}

function* deleteWork({ payload }) {
  try {
    const response = yield call(() =>
      axiosMicroApiInstance.delete(`/works/delete-work/${payload}`)
    );
    if (response?.status === 201) {
      yield put(Actions.deleteWorkSuccess(response.data));
    }
  } catch (error: any) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.deleteWorkFailure(messages));
    }
  }
}

export default function* () {
  yield takeLatest(Actions.addWorkRequest, addWork);
  yield takeLatest(Actions.getListWorksRequest, getListWorks);
  yield takeLatest(Actions.getWorkDetailsRequest, getWorkDetails);
  yield takeLatest(Actions.deleteWorkRequest, deleteWork);
}
