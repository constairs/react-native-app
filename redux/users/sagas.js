import{ put, call, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import {
  USER_LOGIN_REQUEST,
  USER_CREATE_REQUEST
} from './types';
import {
  userLoginSuccessed,
  userLoginFailed,
  userCreateSuccessed,
  userCreateFailed
} from './actions';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
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
    yield put(push('/user'));
  } catch (error) {
    yield put(userCreateFailed(error.message));
  }
}

export function* userSagas() {
  yield takeLatest(USER_LOGIN_REQUEST, userLoginSaga);
  yield takeLatest(USER_CREATE_REQUEST, userCreateSaga);
}
