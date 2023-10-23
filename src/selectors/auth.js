import { get } from 'lodash';

const defaultObj = {};
const defaultArr = [];

export const getAuthUser = (state) => get(state, 'auth.user.user', defaultObj);

export const getAuthenticationStatus = (state) =>
  get(state, 'auth.user.authenticated', false);

export const getAuthenticationEmail = (state) =>
  get(state, 'auth.user.email', '');
