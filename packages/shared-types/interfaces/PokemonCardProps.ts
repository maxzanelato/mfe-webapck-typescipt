import Pokemon from './Pokemon';

export default interface PokemonCardProps extends Pokemon {
  onClick?: () => void;
}
