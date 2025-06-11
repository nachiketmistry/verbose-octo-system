export interface Entity {
  id: string;
  [key: string]: any;
}

export interface Grouping {
  field: string;
}

export interface Threshold {
  value: number | string;
  color: number;
}

export interface EntityMapProps {
  entities: Entity[];
  groupBy?: string[];
  thresholds?: Threshold[];
  width?: number;
  height?: number;
  onClick?: (entity: Entity) => void;
  tooltipRenderer?: (entity: Entity) => JSX.Element;
  /** Display theme for background and default colors */
  theme?: 'light' | 'dark';
}
