import React from 'react';
import { EntityMap } from '../../src';

export default { title: 'EntityMap/Sparse1k' };

const entities = Array.from({ length: 1000 }, (_, i) => ({ id: String(i) }));

export const Sparse1k = () => <EntityMap entities={entities} />;
