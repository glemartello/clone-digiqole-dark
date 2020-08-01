import React from 'react';

import { Container, Header, Content } from './styles';
import TopBar from './TopBar';
import Footer from './Footer';

function Default({ children }) {
  return (
    <Container>
      <Header>Imagem Ad</Header>
      <TopBar />
      <Content>{children}</Content>
      <Footer />
    </Container>
  );
}

export default Default;
