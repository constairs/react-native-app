import { assoc, assocPath, pipe, values, set } from 'ramda';
import * as TYPES from './types';
import { createReducer } from '../utils/reducerUtils';

export const initState = {
  userFetching: false,
  email: '',
  photoURL: '',
  displayName: '',
  username: '',
  logged: false,
};

const userLoginRequest = () => assoc('userFetching', true);
const userLoginSuccessed = loginResponse => pipe(
  assoc('userFetching', false),
  assoc('logged', true),
  assoc('email', loginResponse.user.email),
  // assoc('photoURL', loginResponse.user.photoURL),
  // assoc('displayName', loginResponse.user.displayName),
);
const userLoginFailed = error => pipe(
  assoc('userFetching', false),
  assoc('error', error)
);

const userCreateRequest = () => assoc('userFetching', true);
const userCreateSuccessed = createResponse => pipe(
  assoc('userFetching', false),
  assoc('logged', true),
  assoc('email', createResponse.user.email)
);
const userCreateFailed = error => pipe(
  assoc('userFetching', false),
  assoc('error', error)
);

const handlers = {
  [TYPES.USER_LOGIN_REQUEST]: userLoginRequest,
  [TYPES.USER_LOGIN_SUCCESSED]: userLoginSuccessed,
  [TYPES.USER_LOGIN_FAILED]: userLoginFailed,
  [TYPES.USER_CREATE_REQUEST]: userCreateRequest,
  [TYPES.USER_CREATE_SUCCESSED]: userCreateSuccessed,
  [TYPES.USER_CREATE_FAILED]: userCreateFailed
};

export const user = createReducer(initState, handlers);
