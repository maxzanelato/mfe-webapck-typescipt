import Pokemon from './Pokemon';
import FetchParams from './FetchParams';

export default interface PokemonContextData {
  loading: boolean;
  pokemons: Array<Pokemon>;

  fetch: (search: FetchParams) => void;
}
