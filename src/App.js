import React, { Fragment } from 'react';

import Routes from '~/routes';

import GlobalStyle from '~/styles/global';
import Default from './layouts/Default';

function App() {
  return (
    <Fragment>
      <Default>
        <Routes />
      </Default>
      <GlobalStyle />
    </Fragment>
  );
}

export default App;
