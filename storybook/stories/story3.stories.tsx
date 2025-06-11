import React from 'react';
import { EntityMap } from '../../src';

const entities = Array.from({ length: 300 }, (_, i) => ({
  id: String(i),
  region: i % 2 ? 'us' : 'eu',
  zone: `zone-${i % 3}`,
  rack: `rack-${i % 5}`,
}));

export default { title: 'EntityMap/ThreeLevel' };

export const ThreeLevel = () => (
  <EntityMap entities={entities} groupBy={['region', 'zone', 'rack']} />
);
