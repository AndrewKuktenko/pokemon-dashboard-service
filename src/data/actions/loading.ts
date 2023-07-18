import { Dispatch } from 'redux';
import { EReduxTypes } from 'ts/enums/redux.types';
import { IReduxAction } from 'ts/interfaces/redux/redux.action';

export const triggerLoadingAction = (components: string[], loading: boolean, dispatch: Dispatch): void => {
  if (components.length) {
    const action: IReduxAction = {
      type: EReduxTypes.UPDATE_LOADING_COMPONENT,
      data: {
        components,
        loading,
      },
    };
    dispatch(action);
  }
};
