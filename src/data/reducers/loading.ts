import { ILoadingState } from 'ts/interfaces/loading/loading';
import { EReduxTypes } from 'ts/enums/redux.types';
import { IReduxAction } from 'ts/interfaces/redux/redux.action';

const initialState: ILoadingState = {
  sign_up: false,
  sign_in: false,
  find_pokemons: false,
  get_pokemon: false,
};
  
const loadingReducer = (state = initialState, action: IReduxAction) => {
  switch (action.type) {
    case EReduxTypes.UPDATE_LOADING_COMPONENT: {
      const { components, loading } = action.data;

      components.forEach((item: keyof ILoadingState) => {
        state[item] = loading;
      });

      return {
        ...state,
      };
    }

    default:
      return state;
  }
};

export default loadingReducer;
