# @mistry/entity-map

A high-performance, interactive entity grid map built with PixiJS and React.

This package renders up to 100k entities as colored squares and supports multi-level grouping and rich tooltips. See Storybook for demos.
Animations are lightweight and smooth, and hovered tiles brighten to provide clear feedback.

## Installation
```bash
npm i @nachiketmistry/entity-map
```

## Usage
```tsx
import { EntityMap } from '@nachiketmistry/entity-map'

const entities = [
  { id: '1', region: 'us-west', zone: 'a', rack: '1', metrics: { cpu: 0.5 } },
  // ...more entities
]

function Example() {
  return (
    <EntityMap
      entities={entities}
      groupBy={['region', 'zone', 'rack']}
      theme="light"
    />
  )
}
```

## Development
Run Storybook to explore example stories:
```bash
npm run storybook
```

Build the package:
```bash
npm run build
```

## Theme
The map supports light and dark themes via the `theme` prop. The default is `light`.
Set `theme="dark"` to render on a dark background.

## Publishing
Update the version in `package.json` and run:
```bash
npm publish --access public
```
