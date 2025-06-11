import React from 'react';
import { EntityMap, Threshold } from '../../src';

const entities = Array.from({ length: 100 }, (_, i) => ({ id: String(i), value: i }));
const thresholds: Threshold[] = [
  { value: 50, color: 0xff0000 },
  { value: 20, color: 0xffff00 },
];

export default { title: 'EntityMap/CustomColor' };

export const CustomColor = () => (
  <EntityMap entities={entities} thresholds={thresholds} />
);
