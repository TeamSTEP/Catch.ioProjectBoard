import React from 'react';

import { config } from '../config/siteData';

const FooterCopyright = () => (
  <div className="footer-copyright">
    © Copyright
    {' '}
    {new Date().getFullYear()}
    {' '}
    {config.title}
  </div>
);

export { FooterCopyright };
