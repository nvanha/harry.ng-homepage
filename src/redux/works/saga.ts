import { call, put, takeLatest } from "redux-saga/effects";

import { axiosMicroApiInstance } from "@/services";
import * as Actions from "./actions";

function* addWork({ payload }) {
  try {
    const response = yield call(() =>
      axiosMicroApiInstance.post("/works/add-work", JSON.stringify(payload))
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

function* updateWork({ payload }) {
  try {
    const response = yield call(() =>
      axiosMicroApiInstance.post("/works/update-work", JSON.stringify(payload))
    );
    if (response?.status === 200) {
      yield put(Actions.updateWorkSuccess(response.data));
    }
  } catch (error: any) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.updateWorkFailure(messages));
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
      axiosMicroApiInstance.get(`/works/work-detail/${payload}`)
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

function* uploadImageWork({ payload }) {
  try {
    const response = yield call(() =>
      axiosMicroApiInstance.post(
        "/works/upload-image-work",
        JSON.stringify(payload)
      )
    );
    if (response?.status === 201) {
      yield put(Actions.uploadImageWorkSuccess(response.data));
    }
  } catch (error: any) {
    if (error?.response?.data) {
      const { detail } = error.response.data;
      yield put(Actions.uploadImageWorkFailure(detail));
    }
  }
}

function* deleteImageWork({ payload }) {
  try {
    const response = yield call(() =>
      axiosMicroApiInstance.delete(`/works/delete-image-work/${payload}`)
    );
    if (response?.status === 200) {
      yield put(Actions.deleteImageWorkSuccess(response.data));
    }
  } catch (error: any) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.deleteImageWorkFailure(messages));
    }
  }
}

export default function* () {
  yield takeLatest(Actions.addWorkRequest, addWork);
  yield takeLatest(Actions.updateWorkRequest, updateWork);
  yield takeLatest(Actions.getListWorksRequest, getListWorks);
  yield takeLatest(Actions.getWorkDetailsRequest, getWorkDetails);
  yield takeLatest(Actions.deleteWorkRequest, deleteWork);
  yield takeLatest(Actions.uploadImageWorkRequest, uploadImageWork);
  yield takeLatest(Actions.deleteImageWorkRequest, deleteImageWork);
}
