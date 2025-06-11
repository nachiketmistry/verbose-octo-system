import React, { useState } from 'react';
import { EntityMap } from '../../src';

const all = Array.from({ length: 100 }, (_, i) => ({ id: String(i), healthy: i%2===0 }));

export default { title: 'EntityMap/Filtering' };

export const Filtering = () => {
  const [showHealthy, setShowHealthy] = useState(true);
  const entities = showHealthy ? all.filter(e => e.healthy) : all;
  return (
    <div>
      <label>
        <input type="checkbox" checked={showHealthy} onChange={e => setShowHealthy(e.target.checked)} />
        only healthy
      </label>
      <EntityMap entities={entities} />
    </div>
  );
};
