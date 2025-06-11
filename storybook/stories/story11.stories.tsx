import React, { useState } from 'react';
import { EntityMap } from '../../src';

const entities = Array.from({ length: 200 }, (_, i) => ({ id: String(i), region: i%2? 'us':'eu' }));

export default { title: 'EntityMap/ExternalControls' };

export const ExternalControls = () => {
  const [group, setGroup] = useState<string[]>([]);
  return (
    <div>
      <select onChange={e => setGroup([e.target.value])}>
        <option value="">none</option>
        <option value="region">region</option>
      </select>
      <EntityMap entities={entities} groupBy={group} />
    </div>
  );
};
