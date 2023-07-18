import { Dispatch } from 'redux';
import { EReduxTypes } from 'ts/enums/redux.types';
import { IReduxAction } from 'ts/interfaces/redux/redux.action';

export const signUp = (email: string, password: string, setError: any) => (dispatch: Dispatch): void => {
  const action: IReduxAction = {
    type: EReduxTypes.SIGN_UP,
    payload: {
      method: 'POST',
      endpoint: `auth/sign-up`,
      body: {
        email,
        password,
      }
    },
    components: ['sign_up'],
    skipAuth: true,
    onFailed: (error: any) => {
      const errorMessage = error?.response?.data?.message || 'Create account error';
      setError(errorMessage);
    }
  };
  dispatch(action);
};

export const signIn = (email: string, password: string, setError: any) => (dispatch: Dispatch): void => {
    const action: IReduxAction = {
      type: EReduxTypes.SIGN_IN,
      payload: {
        method: 'POST',
        endpoint: `auth/sign-in`,
        body: {
          email,
          password,
        }
      },
      components: ['sign_in'],
      skipAuth: true,
      onFailed: (error: any) => {
        const errorMessage = error?.response?.data?.message || 'Sign-in error';
        setError(errorMessage);
      }
    }
    dispatch(action);
};

export const signOut = () => (dispatch: Dispatch): void => {
  const action: IReduxAction = {
    type: EReduxTypes.SIGN_OUT,
    data: true,
  }
  dispatch(action);
};
