import * as PIXI from 'pixi.js';
import { Entity, Threshold } from '../types';
import { computeGridLayout } from '../utils/layout';

interface Options {
  entities: Entity[];
  thresholds?: Threshold[];
  width: number;
  height: number;
  tileSize: number;
  onClick?: (entity: Entity) => void;
  theme: 'light' | 'dark';
}

function lightenColor(color: number, percent: number): number {
  const r = (color >> 16) & 0xff;
  const g = (color >> 8) & 0xff;
  const b = color & 0xff;
  const nr = Math.min(255, Math.round(r + (255 - r) * percent));
  const ng = Math.min(255, Math.round(g + (255 - g) * percent));
  const nb = Math.min(255, Math.round(b + (255 - b) * percent));
  return (nr << 16) + (ng << 8) + nb;
}

export class EntityRenderer {
  app: PIXI.Application;
  container: PIXI.Container;
  options: Options;

  constructor(canvas: HTMLCanvasElement, options: Options) {
    this.app = new PIXI.Application({
      view: canvas,
      width: options.width,
      height: options.height,
      backgroundAlpha: 1,
      backgroundColor: options.theme === 'dark' ? 0x1e1e1e : 0xffffff,
      antialias: true,
    });
    this.container = new PIXI.Container();
    this.app.stage.addChild(this.container);
    this.options = options;
    this.render();
  }

  destroy() {
    this.app.destroy(true, { children: true });
  }

  private animateTo(target: PIXI.DisplayObject, scale: number, alpha: number) {
    const ticker = this.app.ticker;
    const step = () => {
      const ds = scale - target.scale.x;
      const da = alpha - target.alpha;
      target.scale.x += ds * 0.2;
      target.scale.y += ds * 0.2;
      target.alpha += da * 0.2;
      if (Math.abs(ds) < 0.01 && Math.abs(da) < 0.01) {
        ticker.remove(step);
        target.scale.set(scale);
        target.alpha = alpha;
      }
    };
    ticker.add(step);
  }

  private getColorForEntity(entity: Entity): number {
    if (!this.options.thresholds) return 0x888888;
    for (const t of this.options.thresholds) {
      if (entity.value >= t.value) return t.color;
    }
    return 0x888888;
  }

  private render() {
    const { entities, width, tileSize } = this.options;
    const layout = computeGridLayout(entities, width, tileSize);
    layout.forEach(({ x, y, size, entity }) => {
      const graphics = new PIXI.Graphics();
      const baseColor = this.getColorForEntity(entity);
      graphics.beginFill(baseColor);
      graphics.drawRect(0, 0, size, size);
      graphics.endFill();
      graphics.x = x;
      graphics.y = y;
      graphics.interactive = true;
      graphics.cursor = 'pointer';
      graphics.on('pointerover', () => {
        graphics.tint = lightenColor(baseColor, 0.4);
        this.animateTo(graphics, 1.1, 1);
      });
      graphics.on('pointerout', () => {
        graphics.tint = baseColor;
        this.animateTo(graphics, 1, 1);
      });
      if (this.options.onClick) {
        graphics.on('pointertap', () => this.options.onClick!(entity));
      }
      this.container.addChild(graphics);
    });
  }
}
