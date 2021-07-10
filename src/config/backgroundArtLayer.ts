import React, { CSSProperties } from 'react';

import { BannerLayer } from 'react-scroll-parallax';

const layerStyle: CSSProperties = {
  minWidth: '100%',
  height: '100%',
  objectFit: 'cover',
};

export default [
  {
    amount: 1,
    expanded: false,
    children: React.createElement('img', {
      style: layerStyle,
      alt: 'layer-img',
      src: '/assets/images/keyart/keyart-layer-1.svg',
    }),
  },
  {
    amount: 0.9,
    expanded: false,
    children: React.createElement('img', {
      style: { ...layerStyle, objectFit: 'contain' },
      alt: 'layer-img',
      src: '/assets/images/keyart/keyart-layer-2.svg',
    }),
  },
  {
    amount: 0.8,
    expanded: false,
    children: React.createElement('img', {
      style: layerStyle,
      alt: 'layer-img',
      src: '/assets/images/keyart/keyart-layer-3.svg',
    }),
  },
  {
    amount: 0.6,
    expanded: false,
    children: React.createElement('img', {
      style: layerStyle,
      alt: 'layer-img',
      src: '/assets/images/keyart/keyart-layer-4.svg',
    }),
  },
  {
    amount: 0.6,
    expanded: false,
    children: React.createElement('img', {
      style: layerStyle,
      alt: 'layer-img',
      src: '/assets/images/keyart/keyart-layer-5.svg',
    }),
  },
  {
    amount: 0.5,
    expanded: false,
    children: React.createElement('img', {
      style: layerStyle,
      alt: 'layer-img',
      src: '/assets/images/keyart/keyart-layer-6.svg',
    }),
  },
  {
    amount: 0.4,
    expanded: false,
    children: React.createElement('img', {
      style: layerStyle,
      alt: 'layer-img',
      src: '/assets/images/keyart/keyart-layer-7.svg',
    }),
  },
  {
    amount: 0.3,
    expanded: false,
    children: React.createElement('img', {
      style: layerStyle,
      alt: 'layer-img',
      src: '/assets/images/keyart/keyart-layer-8.svg',
    }),
  },
  {
    amount: 0.2,
    expanded: false,
    children: React.createElement('img', {
      style: layerStyle,
      alt: 'layer-img',
      src: '/assets/images/keyart/keyart-layer-9.svg',
    }),
  },
  {
    amount: 0.2,
    expanded: false,
    children: React.createElement('img', {
      style: layerStyle,
      alt: 'layer-img',
      src: '/assets/images/keyart/keyart-layer-10.svg',
    }),
  },
  {
    amount: 0.1,
    expanded: false,
    children: React.createElement('img', {
      style: layerStyle,
      alt: 'layer-img',
      src: '/assets/images/keyart/keyart-layer-11.svg',
    }),
  },
  {
    amount: 0.1,
    expanded: false,
    children: React.createElement('img', {
      style: layerStyle,
      alt: 'layer-img',
      src: '/assets/images/keyart/keyart-layer-12.svg',
    }),
  },
  {
    amount: 0.1,
    expanded: false,
    children: React.createElement('img', {
      style: layerStyle,
      alt: 'layer-img',
      src: '/assets/images/keyart/keyart-layer-13.svg',
    }),
  },
  {
    amount: 0.01,
    expanded: false,
    children: React.createElement('img', {
      style: layerStyle,
      alt: 'layer-img',
      src: '/assets/images/keyart/keyart-layer-14.svg',
    }),
  },
] as BannerLayer[];
