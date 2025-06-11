import React, { useState, useEffect } from 'react';
import { EntityMap } from '../../src';

export default { title: 'EntityMap/HeatmapPlayback' };

export const HeatmapPlayback = () => {
  const [tick, setTick] = useState(0);
  const entities = Array.from({ length: 50 }, (_, i) => ({ id: String(i), value: (i + tick) % 100 }));

  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 1000);
    return () => clearInterval(id);
  }, []);

  return <EntityMap entities={entities} />;
};
