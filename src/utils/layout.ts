import { Entity } from '../types';

export interface LayoutResult {
  x: number;
  y: number;
  size: number;
  entity: Entity;
}

export function computeGridLayout(entities: Entity[], width: number, tileSize: number): LayoutResult[] {
  const perRow = Math.floor(width / tileSize);
  return entities.map((entity, idx) => {
    const row = Math.floor(idx / perRow);
    const col = idx % perRow;
    return { x: col * tileSize, y: row * tileSize, size: tileSize, entity };
  });
}
