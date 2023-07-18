import { EReduxTypes } from 'ts/enums/redux.types';
import { IReduxAction } from 'ts/interfaces/redux/redux.action';
import { IPokemonState } from 'ts/interfaces/pokemon/pokemon.state';
import { IPokemonPreview } from 'ts/interfaces/pokemon/pokemon.preview';

const initialState: IPokemonState | {} = {};

const pokemonReducer = (state = initialState, action: IReduxAction): IPokemonState | {} => {
  switch (action.type) {
    case EReduxTypes.FIND_POKEMONS: {
      return action.payload as IPokemonState;
    }
    case EReduxTypes.GET_POKEMON: {
      const preview = action.payload as IPokemonPreview;
      return {
        ...state,
        preview,
      }
    }
    default:
      return state;
  }
};

export default pokemonReducer;