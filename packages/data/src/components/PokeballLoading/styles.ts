import styled from 'styled-components';

export const PokeballLoadingContainer = styled.div`
  display: unset;

  .pokeball-loading {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &__image {
      img {
        object-fit: contain;
      }
    }

    &__message {
      font-size: 1.6rem;
    }
  }
`;
