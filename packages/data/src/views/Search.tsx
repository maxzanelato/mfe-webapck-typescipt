import React from 'react';
import { Box, Container, Grid } from '@material-ui/core';

import { usePokemon } from '../hooks/pokemon';
import SearchBar from '../components/Searchbar';
import PokeballLoading from '../components/PokeballLoading';

const Search: React.FC = () => {
  const { pokemons, loading } = usePokemon();

  return (
    <Container>
      <Box p={2}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <SearchBar />
          </Grid>
        </Grid>
      </Box>

      <Box>
        {loading ? (
          <PokeballLoading />
        ) : (
          <ul>
            {pokemons.map((card) => (
              <li key={card.id}>{card.name}</li>
            ))}
          </ul>
        )}
      </Box>
    </Container>
  );
};

export default Search;
