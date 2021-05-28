import React, { ReactNode, useState, useMemo } from 'react';

import { ParallaxBanner } from 'react-scroll-parallax';

type IHeroParallaxArtProps = {
  title: ReactNode;
  description: string;
};

type IParallaxKeyArtProps = {
  children?: JSX.Element | JSX.Element[];
};

const ParallaxKeyArt = (props: IParallaxKeyArtProps) => {
  const [layerCount] = useState(11);

  const paraLayers = useMemo(() => {
    const layerNodes = Array.from({ length: layerCount }, (_v, k) => k + 1).map((i) => ({
      image: `/assets/images/keyart/Layer${i}.png`,
      amount: Math.random(),
      expanded: false,
    }));

    return layerNodes;
  }, [layerCount]);

  return <ParallaxBanner layers={paraLayers}>{props.children}</ParallaxBanner>;
};

const HeroParallaxArt = (props: IHeroParallaxArtProps) => (
  <header className="text-center">
    <ParallaxKeyArt>
      <div id="title">
        <h1 className="text-5xl text-primary-100 font-bold whitespace-pre-line leading-hero">
          {props.title}
        </h1>
        <div className="text-2xl mt-4 mb-16">{props.description}</div>
      </div>
    </ParallaxKeyArt>
  </header>
);

export { HeroParallaxArt };
