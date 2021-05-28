/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { AppProps } from 'next/app';
import { ParallaxProvider } from 'react-scroll-parallax';

import '../styles/main.css';

// eslint-disable-next-line react/jsx-props-no-spreading
const MyApp = ({ Component, pageProps }: AppProps) => (
  <ParallaxProvider>
    <Component {...pageProps} />
  </ParallaxProvider>
);

export default MyApp;
