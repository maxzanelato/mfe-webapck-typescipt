import React from 'react';

import PokemonCardProps from 'shared-types/interfaces/PokemonCardProps';

import { PokemonImage } from './styles';

const PokemonCard: React.FC<PokemonCardProps> = (
  { id, name, imageUrl, onClick }: PokemonCardProps = {
    onClick: () => {},
    id: '',
    name: '',
    imageUrl: '',
  }
) => {
  return (
    <PokemonImage
      className='fade-in'
      src={imageUrl}
      alt={`${id}-${name}`}
      width={'100%'}
      loading={'lazy'}
      onClick={onClick}
    />
  );
};

export default PokemonCard;
