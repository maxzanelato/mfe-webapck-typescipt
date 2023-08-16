import React from 'react';

import pokeball from '../../assets/pokeball.gif';
import EmptyResult from 'shared-types/interfaces/EmptyResult';

import { PokeballLoadingContainer } from './styles';

const PokeballLoading: React.FC<EmptyResult> = ({
  message = '',
  size = 200,
}) => {
  const handleMessage = () =>
    message ? (
      <span className='pokeball-loading__message text-primary'>
        {message}
      </span>
    ) : null;

  return (
    <PokeballLoadingContainer>
      <div className='pokeball-loading'>
        <div className='pokeball-loading__image'>
          <img
            src={pokeball}
            alt={'Pokeball Loading'}
            width={size}
            height={size}
          />
        </div>
        {handleMessage()}
      </div>
    </PokeballLoadingContainer>
  );
};

export default PokeballLoading;
