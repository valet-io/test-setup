test-setup
==========

Set up Mocha, Chai, and Bluebird for testing. Requiring this file: 

1. Makes `chai` available globally
2. Makes `sinon` available globally.
3. Applies [chai-as-promised](https://github.com/domenic/chai-as-promised/)
4. Applies [sinon-as-promised](https://github.com/valet-io/sinon-as-promised)
5. Logs [long stack traces](https://github.com/petkaantonov/bluebird/blob/master/API.md#promiselongstacktraces---void) for Bluebird promises
6. Throws [onPossiblyUnhandledRejection](https://github.com/petkaantonov/bluebird/blob/master/API.md#promiseonpossiblyunhandledrejectionfunction-handler---undefined) as errors, causing tests to fail

Just require to set up:

```js
require('test-setup');
```
