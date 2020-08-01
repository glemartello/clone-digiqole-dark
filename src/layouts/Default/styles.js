import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: 115px 70px auto 360px;
  grid-template-areas:
    '. h .'
    't t t'
    '. c .'
    'f f f';
`;

export const Header = styled.div`
  max-width: 1140px;
  min-width: 100%;
  grid-area: h;
`;

export const Content = styled.div`
  max-width: 1140px;
  width: 100%;
  grid-area: c;
`;
