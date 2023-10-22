import { get } from 'lodash';

const defaultObj = {};
const defaultArr = [];

export const getAuthUser = (state) => get(state, 'auth.user', defaultObj);

export const getAuthenticationStatus = (state) =>
  get(state, 'auth.user.authenticated', false);

export const getSuperAdminStatus = (state) =>
  get(state, 'auth.user.superAdmin', false);

export const getSMAdminStatus = (state) =>
  get(state, 'auth.user.SMAdmin', false);

export const getAuthenticationEmail = (state) =>
  get(state, 'auth.user.email', '');

export const getMGCustomerServiceStatus = (state) =>
  get(state, 'auth.user.MGCustomerService', false);

export const getSMSalesRep = (state) =>
  get(state, 'auth.user.SMSalesRep', false);
