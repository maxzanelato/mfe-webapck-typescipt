import Pokemon from './Pokemon';

export default interface CardGridProps {
  cards: Array<Pokemon>;
  loading: boolean;
}
