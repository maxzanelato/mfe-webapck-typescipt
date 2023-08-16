import { styled } from 'styled-components';

export const EmptyResultContainer = styled.div`
  display: unset;

  .empty-result {
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
