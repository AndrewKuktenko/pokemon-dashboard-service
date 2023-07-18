import { createSelector } from 'reselect';
import { InitialState } from 'ts/interfaces/redux/redux.action';

const basePokemonSelector = (state: InitialState) => state?.pokemon;

export const pokemonsDataSelector = createSelector(
  basePokemonSelector,
  (pokemon) => pokemon?.data || [],
);

export const pokemonsMetaSelector = createSelector(
  basePokemonSelector,
  (pokemon) => pokemon?.meta || {},
);

export const previewPokemonSelector = createSelector(
  basePokemonSelector,
  (pokemon) => pokemon.preview || null,
);
