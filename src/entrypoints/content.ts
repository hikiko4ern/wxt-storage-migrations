import { test } from '../storage';

export default defineContentScript({
  matches: ['<all_urls>'],
  async main() {
    const value = await test.getValue();
    console.log('[content] value:', value);

    // to save the default value in the storage
    await test.setValue(value);
  },
});
