import React from 'react';
import { EntityMap } from '../../src';

const entities = Array.from({ length: 50 }, (_, i) => ({ id: String(i) }));

export default { title: 'EntityMap/HoverTooltip' };

const Tooltip = ({ entity }: any) => <div>Entity {entity.id}</div>;

export const HoverTooltip = () => (
  <EntityMap entities={entities} tooltipRenderer={e => <Tooltip entity={e} />} />
);
