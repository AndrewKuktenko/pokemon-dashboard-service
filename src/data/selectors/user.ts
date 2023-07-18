import { createSelector } from 'reselect';
import { InitialState } from 'ts/interfaces/redux/redux.action';

const baseUserSelector = (state: InitialState) => state?.user;

export const isUserAuthenticated = createSelector(
  baseUserSelector,
  (user) => user?.tokenPayload,
);

export const userEmail = createSelector(
  baseUserSelector,
  (user) => user?.tokenPayload?.email,
);
