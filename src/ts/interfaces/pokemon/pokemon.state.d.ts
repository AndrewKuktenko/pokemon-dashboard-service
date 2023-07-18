import { IPaginationMeta } from 'ts/interfaces/common/pagination.meta';
import { IPokemon } from "./pokemon";
import { IPokemonPreview } from './pokemon.preview';

export interface IPokemonState {
  data: IPokemon[];
  meta: IPaginationMeta;
  preview: IPokemonPreview;
}
