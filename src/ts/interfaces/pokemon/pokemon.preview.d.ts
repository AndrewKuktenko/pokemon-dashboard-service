import { IPokemonStats, IPokemonTypes } from './pokemon.properties';

export interface IPokemonPreview {
  id: number;
  name: string;
  stats: IPokemonStats[],
  types: IPokemonTypes[],
}
