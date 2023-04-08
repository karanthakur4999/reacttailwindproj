import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './imports';
import './brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={google} alt="Random img" />
    </div>
    <div>
      <img src={slack} alt="Random img" />
    </div>
    <div>
      <img src={atlassian} alt="Random img" />
    </div>
    <div>
      <img src={dropbox} alt="Random img" />
    </div>
    <div>
      <img src={shopify} alt="Random img" />
    </div>
  </div>
);

export default Brand;
