import React, { useState } from 'react';
import { EntityMap } from '../../src';

const entities = Array.from({ length: 150 }, (_, i) => ({ id: String(i) }));

export default { title: 'EntityMap/Responsive' };

export const Responsive = () => {
  const [size, setSize] = useState(600);
  return (
    <div>
      <input type="range" min={200} max={800} value={size} onChange={e => setSize(Number(e.target.value))} />
      <EntityMap entities={entities} width={size} height={size} />
    </div>
  );
};
