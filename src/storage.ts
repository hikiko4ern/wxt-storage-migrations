import { storage } from 'wxt/storage';

interface Data_v1 {
  a: number;
}

interface Data_v2 extends Data_v1 {
  b: {
    nested: number;
  };
}

export const test = storage.defineItem<Data_v2>('local:test', {
  version: 2,
  defaultValue: {
    a: 0,
    b: {
      nested: 0,
    },
  },
  migrations: {
    2: (data: Data_v1): Data_v2 => ({
      ...data,
      b: {
        nested: 0,
      },
    }),
  },
});
