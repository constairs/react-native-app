import{
  put,
  call,
  takeLatest
} from 'redux-saga/effects';
import { push } from 'connected-react-router';
import {
  USER_LOGIN_REQUEST,
  USER_CREATE_REQUEST,
  USER_LOGOUT_REQUEST,
  USER_DELETE_REQUEST,
  UPDATE_EMAIL_REQUEST,
  UPDATE_PASSWORD_REQUEST
} from './types';
import {
  userLoginSuccessed,
  userLoginFailed,
  userCreateSuccessed,
  userCreateFailed,
  userLogoutSuccessed,
  userLogoutFailed,
  userDeleteSuccessed,
  userDeleteFailed,
  updateEmailRequest,
  updateEmailSuccessed,
  updateEmailFailed,
  updatePasswordSuccessed,
  updatePasswordFailed
} from './actions';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  logout,
  deleteProfile,
  updateEmail,
  sendVerification,
  updatePassword,
  resetPassword
} from '../../firebase/userFunctions';

export function* userLoginSaga(action) {
  try {
    const loginResponse = yield call(signInWithEmailAndPassword, ...action.payload);
    yield put(push('/user'));
    yield put(userLoginSuccessed(loginResponse));
  } catch (error) {
    yield put(userLoginFailed(error.message));
  }
}

export function* userCreateSaga(action) {
  try {
    const createResponse = yield call(createUserWithEmailAndPassword, ...action.payload);
    yield put(userCreateSuccessed(createResponse));
    yield call(sendVerification);
    yield put(push('/user'));
  } catch (error) {
    yield put(userCreateFailed(error.message));
  }
}

export function* userLogoutSaga() {
  try {
    const logoutResponse = yield call(logout);
    yield put(userLogoutSuccessed(logoutResponse));
    yield put(push('/'));
  } catch (error) {
    yield put(userLogoutFailed(error.message));
  }
}

export function* userDeleteSaga() {
  try {
    const deleteResponse = yield call(deleteProfile);
    yield put(userDeleteSuccessed(deleteProfile));
    yield put(push('/'));
  } catch (error) {
    yield put(userDeleteFailed(error.message));
  }
}

export function* updateEmailSaga({ payload }) {
  try {
    const updateRes = yield call(updateEmail, payload);
    yield put(updateEmailSuccessed(updateRes));
    yield put(push('/user'));
  } catch (error) {
    yield put(updateEmailFailed(error.message));
  }
}

export function* updatePasswordSaga({ payload }) {
  try {
    const updateResponse = yield call(updatePassword, payload);
    yield put(updatePasswordSuccessed(updateResponse));
    yield put(push('/user'));
  } catch (error) {
    yield put(updatePasswordFailed(error.message));
  }
}

export function* userSagas() {
  yield takeLatest(USER_LOGIN_REQUEST, userLoginSaga);
  yield takeLatest(USER_CREATE_REQUEST, userCreateSaga);
  yield takeLatest(USER_LOGOUT_REQUEST, userLogoutSaga);
  yield takeLatest(USER_DELETE_REQUEST, userDeleteSaga);
  yield takeLatest(UPDATE_EMAIL_REQUEST, updateEmailSaga);
  yield takeLatest(UPDATE_PASSWORD_REQUEST, updatePasswordSaga);
}
