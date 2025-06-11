import React, { useState, useEffect } from 'react';
import { EntityMap } from '../../src';

export default { title: 'EntityMap/RealtimeUpdates' };

export const RealtimeUpdates = () => {
  const [entities, setEntities] = useState(() => Array.from({ length: 20 }, (_, i) => ({ id: String(i), value: Math.random() })));

  useEffect(() => {
    const id = setInterval(() => {
      setEntities(prev => prev.map(e => ({ ...e, value: Math.random() })));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return <EntityMap entities={entities} />;
};
