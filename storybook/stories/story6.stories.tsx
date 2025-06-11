import React from 'react';
import { EntityMap } from '../../src';

const entities = Array.from({ length: 30 }, (_, i) => ({ id: String(i) }));

export default { title: 'EntityMap/Clickable' };

export const Clickable = () => (
  <EntityMap entities={entities} onClick={e => alert(`Clicked ${e.id}`)} />
);
