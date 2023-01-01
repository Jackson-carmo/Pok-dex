export type Pokedex = {
  id: number;
  pokemon: string;
  type: string;
  numero: string;
  categoria: string;
  habilidades: string;
  altura: number;
  peso: number;
  fraquezas: string;
  pokemonImg: string;
};

export type PokedexPage = {
  content: Pokedex[];
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
};
