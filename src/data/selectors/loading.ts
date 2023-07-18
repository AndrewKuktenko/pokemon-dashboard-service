import { createSelector } from 'reselect';
import { ILoadingState } from 'ts/interfaces/loading/loading';

const baseLoadingSelector = (state: any) => state?.loading;

export const getLoadingSelector = (type: keyof ILoadingState) => createSelector(
    baseLoadingSelector,
    (loading) => loading[type],
);