import React, { useEffect, useState } from 'react';
import { EntityMap } from '../../src';

export default { title: 'EntityMap/MockedREST' };

export const MockedREST = () => {
  const [entities, setEntities] = useState<any[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await Promise.resolve({ data: Array.from({ length: 60 }, (_, i) => ({ id: String(i) })) });
      setEntities(res.data);
    };
    fetchData();
  }, []);
  return <EntityMap entities={entities} />;
};
