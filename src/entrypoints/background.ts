import { test } from '../storage';

export default defineBackground(() => {
  (async () => {
    console.log('bg:', await test.getValue());
  })();
});
