import React from 'react';

import PokemonCard from '../PokemonCard';
import EmptyResult from '../EmptyResult';
import PokeballLoading from '../PokeballLoading';
import CardGridProps from 'shared-types/interfaces/CardGridProps';

import { CardGridContainer } from './styles';

const CardGrid: React.FC<CardGridProps> = (
  { cards, loading } = { cards: [], loading: false }
) => {
  const noCards = !cards || !cards.length;

  if (loading) {
    return <PokeballLoading />;
  }

  if (noCards) {
    return <EmptyResult />;
  }

  return (
    <CardGridContainer>
      <div className='card-grid'>
        {cards.map((card) => (
          <PokemonCard key={card.id} {...card} />
        ))}
      </div>
    </CardGridContainer>
  );
};

export default CardGrid;
