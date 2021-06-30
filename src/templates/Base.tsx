import React from 'react';

import { config } from '../config/siteData';
import { Meta } from '../layout/Meta';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { Navbar } from './Navbar';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="antialiased text-primary-200">
    <Meta title={config.title} description={config.description} />
    <Navbar />
    <Hero />
    <VerticalFeatures />
    <Banner />
    <Footer />
  </div>
);

export { Base };
