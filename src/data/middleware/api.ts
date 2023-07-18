import { Middleware } from 'redux';
import { triggerLoadingAction } from 'data/actions/loading';
import { signOut } from 'data/actions/user';
import { IReduxAction } from 'ts/interfaces/redux/redux.action';

import axios, { AxiosResponse } from 'axios';

const apiMiddleware = (): Middleware => () => (next: any) => async (action: IReduxAction) => {
  if (!action) return false;
  
  const host = action?.payload?.host;
  const endpoint = action?.payload?.endpoint;
  const method = action?.payload?.method;
  const body = action?.payload?.body;
  const params = action?.payload?.params;
  const data = action?.data;
  const components = action?.components;
  const skipAuth = action?.skipAuth;
  const onSuccess = action?.onSuccess;
  const onFailed = action?.onFailed;

  const apiHost = (host) ? host : process.env.REACT_APP_API_URL;

  if (data) return next(action);

  if (components) {
    triggerLoadingAction(components, true, next);
  }

  
  const headers: any = {};

  if (!skipAuth) {
    const accessToken = localStorage.getItem('ACCESS_TOKEN');
    headers['Authorization'] = `Bearer ${accessToken}`;
  }
  try {
    const res: AxiosResponse = await axios({
      url: `${apiHost}/${endpoint}`,
      method,
      data: body,
      params,
      headers
    });

    const data = res?.data;
    if (onSuccess) onSuccess(data);

    if (components) triggerLoadingAction(components, false, next);
    
    return next({
      ...action,
      payload: data,
    });
  } catch (err: any) {
    if (components) triggerLoadingAction(components, false, next);

    if (err?.response?.status === 401 && apiHost === process.env.REACT_APP_API_URL) {
      signOut()(next);
    }
    if (onFailed) return onFailed(err);
    return false;
  }
};

export default apiMiddleware;