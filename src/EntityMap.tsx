import React, { useEffect, useRef } from 'react';
import { EntityMapProps } from './types';
import { EntityRenderer } from './engine/renderer';

export const EntityMap: React.FC<EntityMapProps> = ({
  entities,
  groupBy,
  thresholds,
  width = 800,
  height = 600,
  onClick,
  tooltipRenderer,
  theme = 'light',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rendererRef = useRef<EntityRenderer | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      rendererRef.current = new EntityRenderer(canvasRef.current, {
        entities,
        thresholds,
        width,
        height,
        tileSize: 10,
        onClick,
        theme,
      });
    }
    return () => {
      rendererRef.current?.destroy();
    };
  }, [entities, thresholds, width, height, onClick]);

  const bg = theme === 'dark' ? '#1e1e1e' : '#ffffff';

  return (
    <div style={{ width, height, backgroundColor: bg }}>
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};
