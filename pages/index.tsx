import React from 'react';
import Head from 'next/head';
import { GlobalStyles } from '../components/GlobalStyles';
import { App } from './App';

const Index = () => (
  <div>
    <GlobalStyles />
    <Head>
      <title>Vita Nox</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
      />
    </Head>
    <App />
  </div>
);

export default Index;
