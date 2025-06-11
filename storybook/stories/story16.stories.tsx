import React, { useState, useEffect } from 'react';
import { EntityMap } from '../../src';

export default { title: 'EntityMap/AnimatedChange' };

export const AnimatedChange = () => {
  const [entities, setEntities] = useState(() => Array.from({ length: 30 }, (_, i) => ({ id: String(i), value: Math.random() })));

  useEffect(() => {
    const id = setInterval(() => {
      setEntities(prev => prev.map(e => ({ ...e, value: Math.random() })));
    }, 500);
    return () => clearInterval(id);
  }, []);

  return <EntityMap entities={entities} />;
};
