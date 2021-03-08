import styled from 'styled-components';

export const List = styled.div`
    display: grid;
    width: 100%;
    justify-content: center;
    grid-template-columns: repeat(5, 16vw);
    gap: 3rem 1rem;
    overflow: scroll;
      
    @media (min-width: 768px) and (max-width: 1024px) {
          grid-template-columns: repeat(3, 25vw);
    }

      
    @media (max-width: 767px) {
          grid-template-columns: repeat(1, 80vw);
    }
`;