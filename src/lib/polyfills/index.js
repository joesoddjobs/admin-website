import Promise from 'promise-polyfill'
import 'url-polyfill'
import 'whatwg-fetch'
import 'core-js/modules/es7.promise.finally'
import 'core-js/modules/es6.object.assign'
import 'core-js/modules/es6.object.keys'
import 'core-js/modules/es7.object.values'
import 'core-js/modules/es7.object.entries'
import 'core-js/modules/es6.array.some'
import 'core-js/modules/es7.array.includes'
import 'core-js/modules/es6.map'
import 'core-js/modules/es6.weak-map'
import 'core-js/modules/es6.set'
import 'core-js/modules/es6.weak-set'
import 'core-js/modules/es6.string.includes'
import 'core-js/modules/es6.string.starts-with'
import 'core-js/modules/es6.string.ends-with'

// if Promise is already available globally, just use that instead
if (!window.Promise) {
  window.Promise = Promise
}