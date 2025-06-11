import React from 'react';
import { EntityMap } from '../../src';

const entities = Array.from({ length: 50 }, (_, i) => ({ id: String(i) }));

export default { title: 'EntityMap/CustomTooltip' };

const Custom = (e: any) => <div style={{ color: 'red' }}>Custom {e.id}</div>;

export const CustomTooltip = () => (
  <EntityMap entities={entities} tooltipRenderer={e => <Custom {...e} />} />
);
