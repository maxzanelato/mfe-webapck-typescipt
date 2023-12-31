import { styled } from 'styled-components';

export const CardGridContainer = styled.div`
  display: unset;

  .card-grid {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    transition: all 0.3s;

    &--mini {
      grid-gap: 10px;
      grid-template-columns: repeat(auto-fill, minmax(102px, 1fr));
    }
  }
`;
