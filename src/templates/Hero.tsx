import React from 'react';

import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
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
      <HeroOneButton
        title={(
          <>
            {'The modern landing page for\n'}
            <span className="text-primary-500">React developer</span>
          </>
                  )}
        description="The easiest way to build React landing page in seconds."
        button={(
          <Link href="https://creativedesignsguru.com/category/nextjs/">
            <a>
              <Button xl>Download Your Free Theme</Button>
            </a>
          </Link>
                  )}
      />
    </Section>
  </Background>
);

export { Hero };
