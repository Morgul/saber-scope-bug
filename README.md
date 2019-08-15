# saber-scope-bug
An example showing issues with scoped themes.

Just run `yarn` and then `yarn run dev`.

You should then see something like this:

```
info Using config file: docs/saber-config.js
error Error: Cannot find module 'saber-theme-@skewedaspect/saber-theme-minima/package.json'
Require stack:
- /Users/ccase/devel/armtech/saber-test/docs/noop.js
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:623:15)
    at resolveFileName (/Users/ccase/devel/armtech/saber-test/node_modules/saber/node_modules/resolve-from/index.js:29:39)
    at resolveFrom (/Users/ccase/devel/armtech/saber-test/node_modules/saber/node_modules/resolve-from/index.js:43:9)
    at module.exports (/Users/ccase/devel/armtech/saber-test/node_modules/saber/node_modules/resolve-from/index.js:46:47)
    at module.exports (/Users/ccase/devel/armtech/saber-test/node_modules/saber/lib/utils/resolvePackage.js:19:5)
    at Saber.prepare (/Users/ccase/devel/armtech/saber-test/node_modules/saber/lib/index.js:135:20)
    at processTicksAndRejections (internal/process/task_queues.js:89:5)
    at async Saber.serve (/Users/ccase/devel/armtech/saber-test/node_modules/saber/lib/index.js:349:5)
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

Process finished with exit code 1

```
