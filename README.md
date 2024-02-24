To reproduce the problem:

1. switch to commit with the first version of storage: `git checkout bc4b6a7`
2. install the dependencies: `pnpm i`
3. run dev mode: `pnpm dev:firefox`
4. load the extension in your browser and open any page\
   in the console will be printed
   ```js
   [content] value: Object { a: 0 }
   ```
5. switch to commit with the second version of storage: `git checkout d9d0194`
6. start dev mode: `pnpm dev:firefox`
7. reload the extension to run the new version of the content script\
   in the console will be printed
   ```js
   [content] value: Object { a: 0 }
   // note that value is a data without migrations applied
   ```
   and then an error
   ```
   [wxt] The content script "content" crashed on startup! TypeError: value.b is undefined
       main content.ts:12
       async* content.js:1694
       <anonymous> content.js:1701
       <anonymous> content.js:1702
   ```
