import { Action } from 'redux';
import { IUserState } from 'ts/interfaces/user/user.state';
import { IPokemonState } from 'ts/interfaces/pokemon/pokemon.state';
import { ILoadingTypes } from 'ts/types/loading.types';

import 'redux-thunk/extend-redux'

export interface InitialState {
  user: IUserState,
  pokemon: IPokemonState,
}

export interface IBasePayload {
    host?: string;
    endpoint?: string;
    method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS';
    body?: any;
    params?: any;
    [key: string]: any;
}

export interface IReduxAction extends Action {
    payload?: IBasePayload;
    data?: any;
    components?: ILoadingTypes[];
    delayLoading?: number;
    skipAuth?: boolean;
    forwardedData?: any;
    onSuccess?: (data: any) => void;
    onFailed?: (error: any) => void;
  }