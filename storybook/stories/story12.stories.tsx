import React from 'react';
import { EntityMap } from '../../src';

const entities = Array.from({ length: 500 }, (_, i) => ({ id: String(i) }));

export default { title: 'EntityMap/ZoomPan' };

export const ZoomPan = () => <EntityMap entities={entities} />;
