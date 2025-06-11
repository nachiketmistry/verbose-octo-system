import React, { useEffect, useState } from 'react';
import { EntityMap } from '../../src';

export default { title: 'EntityMap/AsyncData' };

export const AsyncData = () => {
  const [entities, setEntities] = useState<any[]>([]);
  useEffect(() => {
    setTimeout(() => {
      setEntities(Array.from({ length: 40 }, (_, i) => ({ id: String(i) })));
    }, 1000);
  }, []);
  return <EntityMap entities={entities} />;
};
