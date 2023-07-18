import { Dispatch } from 'redux';
import { EReduxTypes } from 'ts/enums/redux.types';
import { IReduxAction } from 'ts/interfaces/redux/redux.action';
import { IPagination } from 'ts/interfaces/common/pagination';

export const findPokemons = (pagination: IPagination) => (dispatch: Dispatch): void => {
  const action: IReduxAction = {
    type: EReduxTypes.FIND_POKEMONS,
    payload: {
      method: 'GET',
      endpoint: `pokemon?pageSize=${pagination.pageSize}&pageNumber=${pagination.pageNumber}`,
    },
    components: ['find_pokemons']
  };
  dispatch(action);
};

export const getPokemon = (name: string, onError: (message: string) => void = () => {}) => (dispatch: Dispatch): void => {
  const action: IReduxAction = {
    type: EReduxTypes.GET_POKEMON,
    payload: {
      method: 'GET',
      endpoint: `pokemon/${name}`,
    },
    onFailed: (error: any) => {
      const errorMessage = error?.response?.data?.message || 'Get pokemon error';
      onError(errorMessage);
    },
    components: ['get_pokemon']
  };
  dispatch(action);
};