import * as TYPES from './types';

export const userLoginRequest = userData => ({
  type: TYPES.USER_LOGIN_REQUEST,
  payload: userData
});
export const userLoginSuccessed = loginResponse => ({
  type: TYPES.USER_LOGIN_SUCCESSED,
  payload: loginResponse
});
export const userLoginFailed = error => ({
  type: TYPES.USER_LOGIN_FAILED,
  payload: error
});

export const userCreateRequest = userData => ({
  type: TYPES.USER_CREATE_REQUEST,
  payload: userData
});
export const userCreateSuccessed = createResponse => ({
  type: TYPES.USER_CREATE_SUCCESSED,
  payload: createResponse
});
export const userCreateFailed = error => ({
  type: TYPES.USER_CREATE_FAILED,
  payload: error
});