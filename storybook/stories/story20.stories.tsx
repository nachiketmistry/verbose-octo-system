import React, { useRef } from 'react';
import { EntityMap } from '../../src';

const entities = Array.from({ length: 40 }, (_, i) => ({ id: String(i) }));

export default { title: 'EntityMap/ProgrammaticSelection' };

export const ProgrammaticSelection = () => {
  const ref = useRef<any>();
  return (
    <div>
      <button onClick={() => console.log(ref.current)}>Log ref</button>
      <EntityMap ref={ref} entities={entities} />
    </div>
  );
};
