import React from 'react';

import { ParallaxBanner } from 'react-scroll-parallax';

import { Button } from '../button/Button';
import KeyArtLayerConfig from '../config/backgroundArtLayer';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';

const Hero = () => (
  <div className="z-0 static">
    <ParallaxBanner layers={KeyArtLayerConfig} className="min-h-screen" />
    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={(
          <>
            {'The best landing page ever made\n'}
            <span className="text-primary-500">Witch One</span>
          </>
                  )}
        description="The Stealthy and Magical Battle-Royal"
        button={(
          <a target="_blank" href="https://teamstep.io/" rel="noopener noreferrer">
            <Button xl>Don&apos;t Pre-order now</Button>
          </a>
                  )}
      />
    </Section>
  </div>
);
export { Hero };
