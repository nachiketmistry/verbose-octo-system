import React from 'react';
import { EntityMap } from '../../src';
import { Meta } from '@storybook/react';

export default {
  title: 'EntityMap/Default',
} as Meta;

const entities = Array.from({ length: 100 }, (_, i) => ({ id: String(i) }));

export const Default = () => (
  <EntityMap entities={entities} theme="dark" />
);
