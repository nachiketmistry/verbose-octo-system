import React from 'react';
import { EntityMap } from '../../src';

export default { title: 'EntityMap/Dense100k' };

const entities = Array.from({ length: 100000 }, (_, i) => ({ id: String(i) }));

export const Dense100k = () => <EntityMap entities={entities} width={1000} height={800} />;
