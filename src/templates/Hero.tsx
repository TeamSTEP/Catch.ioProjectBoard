import React from 'react';

import Link from 'next/link';
import { ParallaxBanner } from 'react-scroll-parallax';

import { Button } from '../button/Button';
import KeyArtLayerConfig from '../config/backgroundArtLayer';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <ParallaxBanner layers={KeyArtLayerConfig} style={{ minHeight: '2000px' }}>
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
      <HeroOneButton
        title={(
          <>
            {'The best landing page ever made\n'}
            <span className="text-primary-500">Witch One</span>
          </>
                  )}
        description="The Stealthy and Magical Battle-Royal"
        button={(
          <Link href="https://creativedesignsguru.com/category/nextjs/">
            <a>
              <Button xl>Download Your Free Theme</Button>
            </a>
          </Link>
                  )}
      />
    </Section>
  </ParallaxBanner>
);
export { Hero };
