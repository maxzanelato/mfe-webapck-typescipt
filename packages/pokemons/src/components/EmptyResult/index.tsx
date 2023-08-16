import React from 'react';

import psyduck from '../../assets/psyduck.webp';
import IEmptyResult from 'shared-types/interfaces/EmptyResult';

import { EmptyResultContainer } from './styles';

const EmptyResult: React.FC<IEmptyResult> = (
  { message, width } = {
    message: 'Oops... Não encontramos nada.',
    width: 200,
  }
) => {
  return (
    <EmptyResultContainer>
      <div className='empty-result'>
        <img
          className='empty-result__image'
          width={width}
          src={psyduck}
          alt={'Empty Result'}
        />

        <span className='empty-result__message text-muted'>
          {message}
        </span>
      </div>
    </EmptyResultContainer>
  );
};

EmptyResult.defaultProps = {
  message: 'Oops... Não encontramos nada.',
  width: 200,
};

export default EmptyResult;
