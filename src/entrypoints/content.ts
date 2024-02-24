import { test } from '../storage';

export default defineContentScript({
  matches: ['<all_urls>'],
  async main() {
    const value = await test.getValue();
    console.log('[content] value:', value);

    // it will throw at runtime because when this code starts executing,
    // the migrations have not had time to execute yet,
    // and `test.getValue()` will return the old version of the data (`Data_v1` instead of `Data_v2`)
    console.log('[content] nested:', value.b.nested);
  },
});
