import React from 'react';

import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Navbar = () => (
  <div className="fixed z-10 w-screen bg-black bg-opacity-20 backdrop-filter backdrop-blur-lg">
    <Section yPadding="py-3">
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
        <li>
          <a
            target="_blank"
            href="https://devdocs.teamstep.io"
            rel="noopener noreferrer"
            className="text-primary-100"
          >
            Dev Docs
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://gdd.teamstep.io"
            rel="noopener noreferrer"
            className="text-primary-100"
          >
            GDD
          </a>
        </li>
      </NavbarTwoColumns>
    </Section>
  </div>
);
export { Navbar };
