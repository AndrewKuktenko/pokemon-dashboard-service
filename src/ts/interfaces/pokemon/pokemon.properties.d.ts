interface IStat {
  name: string;
  url: string;
}

interface IType {
  name: string;
  url: string;
}

export interface IPokemonStats {
  base_stat: number;
  effort: number;
  stat: IStat;
}

export interface IPokemonTypes {
  slot: number;
  type: IType;
}
