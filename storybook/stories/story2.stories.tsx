import React from 'react';
import { EntityMap } from '../../src';

const entities = Array.from({ length: 200 }, (_, i) => ({ id: String(i), region: i%2? 'us':'eu' }));

export default { title: 'EntityMap/TwoLevel' };

export const TwoLevel = () => (
  <EntityMap entities={entities} groupBy={['region']} />
);
