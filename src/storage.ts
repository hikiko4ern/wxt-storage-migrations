import { storage } from 'wxt/storage';

interface Data_v1 {
  a: number;
}

export const test = storage.defineItem<Data_v1>('local:test', {
  version: 1,
  defaultValue: {
    a: 0,
  },
});
