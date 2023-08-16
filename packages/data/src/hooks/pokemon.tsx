import React, {
  useState,
  useContext,
  useCallback,
  createContext,
} from 'react';

import { getCards } from '../services/pokemonService';

/**
 * https://www.geeksforgeeks.org/how-to-install-a-local-module-using-npm/
 */
import Pokemon from 'shared-types/interfaces/Pokemon';
import FetchParams from 'shared-types/interfaces/FetchParams';
import PokemonContextData from 'shared-types/interfaces/PokemonContextData';

const PokemonContext = createContext<PokemonContextData>(
  {} as PokemonContextData
);

export const PokemonProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [pokemons, setPokemons] = useState<Array<Pokemon>>([]);

  const fetch = useCallback(async ({ query }: FetchParams) => {
    setLoading(true);

    console.log(query);

    try {
      const cards = await getCards({ query });

      setLoading(false);
      setPokemons(cards);

      return cards;
    } catch (e) {
      setLoading(false);
      throw new Error(String(e));
    }
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        loading,
        pokemons,
        fetch,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export function usePokemon(): PokemonContextData {
  const context = useContext(PokemonContext);

  if (!context) {
    throw new Error(
      'usePokemon must be used within an PokemonProvider'
    );
  }

  return context;
}
