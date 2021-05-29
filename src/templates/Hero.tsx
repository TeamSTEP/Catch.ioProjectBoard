import React, { useMemo, useState } from 'react';

import Link from 'next/link';
import { BannerLayer, ParallaxBanner } from 'react-scroll-parallax';

// import { ParallaxKeyArtBackground } from '../background/ParallaxKeyArtBackground';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => {
  // number of images inside the image/keyart folder
  const [layerCount] = useState(11);

  const paraLayers = useMemo(() => {
    const layerNodes = Array.from({ length: layerCount }, (_v, k) => k + 1).map(
      (i) => ({
        // image: `/assets/images/keyart/Layer${i}.png`,
        amount: Math.random(),
        expanded: false,
        children: (
          <img
            style={{ height: 'auto' }}
            alt="layer-img"
            src={`/assets/images/keyart/keyart-layer-${i}.png`}
          />
        ),
      } as BannerLayer),
    );

    return layerNodes;
  }, [layerCount]);

  return (
    <ParallaxBanner layers={paraLayers} style={{ minHeight: '100vh' }}>
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
};

export { Hero };
