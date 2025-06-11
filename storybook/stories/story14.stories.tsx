import React, { useState } from 'react';
import { EntityMap } from '../../src';

const entities = Array.from({ length: 50 }, (_, i) => ({ id: `node-${i}` }));

export default { title: 'EntityMap/SearchHighlight' };

export const SearchHighlight = () => {
  const [term, setTerm] = useState('');
  const filtered = entities.filter(e => e.id.includes(term));
  return (
    <div>
      <input value={term} onChange={e => setTerm(e.target.value)} />
      <EntityMap entities={filtered} />
    </div>
  );
};
