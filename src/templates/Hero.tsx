import React from 'react';

import { Background } from '../background/Background';
import { HeroParallaxArt } from '../hero/HeroParallaxArt';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-primary-900">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <a
            target="_blank"
            href="https://teamstep.io"
            rel="noopener noreferrer"
            className="text-primary-100"
          >
            Team STEP
          </a>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroParallaxArt
        title={(
          <>
            {'The best landing page ever made\n'}
            <span className="text-primary-500">Witch One</span>
          </>
                  )}
        description="The Stealthy and Magical Battle-Royal"
      />
    </Section>
  </Background>
);

export { Hero };
