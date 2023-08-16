import React, { useCallback } from 'react';

import DelayedField from '../DelayedField';
import { usePokemon } from '../../hooks/pokemon';

const SearchBar: React.FC = () => {
  const { fetch } = usePokemon();

  const search = useCallback(
    ({ target }) => {
      try {
        fetch({ query: target.value });
      } catch (error) {
        alert(error);
      }
    },
    [fetch]
  );

  return (
    <DelayedField
      fullWidth
      id='search-input'
      name='search-input'
      label='Pesquisar'
      variant='outlined'
      placeholder='Digite o nome do pokemon'
      onChange={search}
    />
  );
};

export default SearchBar;
