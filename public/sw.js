/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// noop fns to prevent runtime errors during initialization
/******/ 	if (typeof self !== "undefined") {
/******/ 		self.$RefreshReg$ = function () {};
/******/ 		self.$RefreshSig$ = function () {
/******/ 			return function (type) {
/******/ 				return type;
/******/ 			};
/******/ 		};
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/
/******/ 		        var hasRefresh = typeof self !== "undefined" && !!self.$RefreshInterceptModuleExecution$;
/******/ 		        var cleanup = hasRefresh
/******/ 		          ? self.$RefreshInterceptModuleExecution$(moduleId)
/******/ 		          : function() {};
/******/ 		        try {
/******/ 		        
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		        } finally {
/******/ 		          cleanup();
/******/ 		        }
/******/ 		        
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./sw.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/next/dist/compiled/webpack/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/webpack/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__dirname) {module.exports =
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 931:
/***/ (function(module) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	__nccwpck_require__.ab = __dirname + "/";/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __nccwpck_require__(931);
/******/ })()
;
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./node_modules/workbox-core/_private.mjs":
/*!************************************************!*\
  !*** ./node_modules/workbox-core/_private.mjs ***!
  \************************************************/
/*! exports provided: assert, cacheNames, cacheWrapper, DBWrapper, Deferred, deleteDatabase, executeQuotaErrorCallbacks, fetchWrapper, getFriendlyURL, logger, WorkboxError */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _private_assert_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/assert.mjs */ "./node_modules/workbox-core/_private/assert.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assert", function() { return _private_assert_mjs__WEBPACK_IMPORTED_MODULE_0__["assert"]; });

/* harmony import */ var _private_cacheNames_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_private/cacheNames.mjs */ "./node_modules/workbox-core/_private/cacheNames.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cacheNames", function() { return _private_cacheNames_mjs__WEBPACK_IMPORTED_MODULE_1__["cacheNames"]; });

/* harmony import */ var _private_cacheWrapper_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_private/cacheWrapper.mjs */ "./node_modules/workbox-core/_private/cacheWrapper.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cacheWrapper", function() { return _private_cacheWrapper_mjs__WEBPACK_IMPORTED_MODULE_2__["cacheWrapper"]; });

/* harmony import */ var _private_DBWrapper_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_private/DBWrapper.mjs */ "./node_modules/workbox-core/_private/DBWrapper.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DBWrapper", function() { return _private_DBWrapper_mjs__WEBPACK_IMPORTED_MODULE_3__["DBWrapper"]; });

/* harmony import */ var _private_Deferred_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_private/Deferred.mjs */ "./node_modules/workbox-core/_private/Deferred.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Deferred", function() { return _private_Deferred_mjs__WEBPACK_IMPORTED_MODULE_4__["Deferred"]; });

/* harmony import */ var _private_deleteDatabase_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_private/deleteDatabase.mjs */ "./node_modules/workbox-core/_private/deleteDatabase.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteDatabase", function() { return _private_deleteDatabase_mjs__WEBPACK_IMPORTED_MODULE_5__["deleteDatabase"]; });

/* harmony import */ var _private_executeQuotaErrorCallbacks_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_private/executeQuotaErrorCallbacks.mjs */ "./node_modules/workbox-core/_private/executeQuotaErrorCallbacks.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "executeQuotaErrorCallbacks", function() { return _private_executeQuotaErrorCallbacks_mjs__WEBPACK_IMPORTED_MODULE_6__["executeQuotaErrorCallbacks"]; });

/* harmony import */ var _private_fetchWrapper_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_private/fetchWrapper.mjs */ "./node_modules/workbox-core/_private/fetchWrapper.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchWrapper", function() { return _private_fetchWrapper_mjs__WEBPACK_IMPORTED_MODULE_7__["fetchWrapper"]; });

/* harmony import */ var _private_getFriendlyURL_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_private/getFriendlyURL.mjs */ "./node_modules/workbox-core/_private/getFriendlyURL.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFriendlyURL", function() { return _private_getFriendlyURL_mjs__WEBPACK_IMPORTED_MODULE_8__["getFriendlyURL"]; });

/* harmony import */ var _private_logger_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_private/logger.mjs */ "./node_modules/workbox-core/_private/logger.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "logger", function() { return _private_logger_mjs__WEBPACK_IMPORTED_MODULE_9__["logger"]; });

/* harmony import */ var _private_WorkboxError_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_private/WorkboxError.mjs */ "./node_modules/workbox-core/_private/WorkboxError.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WorkboxError", function() { return _private_WorkboxError_mjs__WEBPACK_IMPORTED_MODULE_10__["WorkboxError"]; });

/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_version.mjs */ "./node_modules/workbox-core/_version.mjs");
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

// We either expose defaults or we expose every named export.

















/***/ }),

/***/ "./node_modules/workbox-core/_private/DBWrapper.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/workbox-core/_private/DBWrapper.mjs ***!
  \**********************************************************/
/*! exports provided: DBWrapper */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DBWrapper", function() { return DBWrapper; });
/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.mjs */ "./node_modules/workbox-core/_version.mjs");
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * A class that wraps common IndexedDB functionality in a promise-based API.
 * It exposes all the underlying power and functionality of IndexedDB, but
 * wraps the most commonly used features in a way that's much simpler to use.
 *
 * @private
 */
class DBWrapper {
  /**
   * @param {string} name
   * @param {number} version
   * @param {Object=} [callback]
   * @param {!Function} [callbacks.onupgradeneeded]
   * @param {!Function} [callbacks.onversionchange] Defaults to
   *     DBWrapper.prototype._onversionchange when not specified.
   * @private
   */
  constructor(name, version, {
    onupgradeneeded,
    onversionchange = this._onversionchange,
  } = {}) {
    this._name = name;
    this._version = version;
    this._onupgradeneeded = onupgradeneeded;
    this._onversionchange = onversionchange;

    // If this is null, it means the database isn't open.
    this._db = null;
  }

  /**
   * Returns the IDBDatabase instance (not normally needed).
   *
   * @private
   */
  get db() {
    return this._db;
  }

  /**
   * Opens a connected to an IDBDatabase, invokes any onupgradedneeded
   * callback, and added an onversionchange callback to the database.
   *
   * @return {IDBDatabase}
   * @private
   */
  async open() {
    if (this._db) return;

    this._db = await new Promise((resolve, reject) => {
      // This flag is flipped to true if the timeout callback runs prior
      // to the request failing or succeeding. Note: we use a timeout instead
      // of an onblocked handler since there are cases where onblocked will
      // never never run. A timeout better handles all possible scenarios:
      // https://github.com/w3c/IndexedDB/issues/223
      let openRequestTimedOut = false;
      setTimeout(() => {
        openRequestTimedOut = true;
        reject(new Error('The open request was blocked and timed out'));
      }, this.OPEN_TIMEOUT);

      const openRequest = indexedDB.open(this._name, this._version);
      openRequest.onerror = () => reject(openRequest.error);
      openRequest.onupgradeneeded = (evt) => {
        if (openRequestTimedOut) {
          openRequest.transaction.abort();
          evt.target.result.close();
        } else if (this._onupgradeneeded) {
          this._onupgradeneeded(evt);
        }
      };
      openRequest.onsuccess = ({target}) => {
        const db = target.result;
        if (openRequestTimedOut) {
          db.close();
        } else {
          db.onversionchange = this._onversionchange.bind(this);
          resolve(db);
        }
      };
    });

    return this;
  }

  /**
   * Polyfills the native `getKey()` method. Note, this is overridden at
   * runtime if the browser supports the native method.
   *
   * @param {string} storeName
   * @param {*} query
   * @return {Array}
   * @private
   */
  async getKey(storeName, query) {
    return (await this.getAllKeys(storeName, query, 1))[0];
  }

  /**
   * Polyfills the native `getAll()` method. Note, this is overridden at
   * runtime if the browser supports the native method.
   *
   * @param {string} storeName
   * @param {*} query
   * @param {number} count
   * @return {Array}
   * @private
   */
  async getAll(storeName, query, count) {
    return await this.getAllMatching(storeName, {query, count});
  }


  /**
   * Polyfills the native `getAllKeys()` method. Note, this is overridden at
   * runtime if the browser supports the native method.
   *
   * @param {string} storeName
   * @param {*} query
   * @param {number} count
   * @return {Array}
   * @private
   */
  async getAllKeys(storeName, query, count) {
    return (await this.getAllMatching(
        storeName, {query, count, includeKeys: true})).map(({key}) => key);
  }

  /**
   * Supports flexible lookup in an object store by specifying an index,
   * query, direction, and count. This method returns an array of objects
   * with the signature .
   *
   * @param {string} storeName
   * @param {Object} [opts]
   * @param {string} [opts.index] The index to use (if specified).
   * @param {*} [opts.query]
   * @param {IDBCursorDirection} [opts.direction]
   * @param {number} [opts.count] The max number of results to return.
   * @param {boolean} [opts.includeKeys] When true, the structure of the
   *     returned objects is changed from an array of values to an array of
   *     objects in the form {key, primaryKey, value}.
   * @return {Array}
   * @private
   */
  async getAllMatching(storeName, {
    index,
    query = null, // IE errors if query === `undefined`.
    direction = 'next',
    count,
    includeKeys,
  } = {}) {
    return await this.transaction([storeName], 'readonly', (txn, done) => {
      const store = txn.objectStore(storeName);
      const target = index ? store.index(index) : store;
      const results = [];

      target.openCursor(query, direction).onsuccess = ({target}) => {
        const cursor = target.result;
        if (cursor) {
          const {primaryKey, key, value} = cursor;
          results.push(includeKeys ? {primaryKey, key, value} : value);
          if (count && results.length >= count) {
            done(results);
          } else {
            cursor.continue();
          }
        } else {
          done(results);
        }
      };
    });
  }

  /**
   * Accepts a list of stores, a transaction type, and a callback and
   * performs a transaction. A promise is returned that resolves to whatever
   * value the callback chooses. The callback holds all the transaction logic
   * and is invoked with two arguments:
   *   1. The IDBTransaction object
   *   2. A `done` function, that's used to resolve the promise when
   *      when the transaction is done, if passed a value, the promise is
   *      resolved to that value.
   *
   * @param {Array<string>} storeNames An array of object store names
   *     involved in the transaction.
   * @param {string} type Can be `readonly` or `readwrite`.
   * @param {!Function} callback
   * @return {*} The result of the transaction ran by the callback.
   * @private
   */
  async transaction(storeNames, type, callback) {
    await this.open();
    return await new Promise((resolve, reject) => {
      const txn = this._db.transaction(storeNames, type);
      txn.onabort = ({target}) => reject(target.error);
      txn.oncomplete = () => resolve();

      callback(txn, (value) => resolve(value));
    });
  }

  /**
   * Delegates async to a native IDBObjectStore method.
   *
   * @param {string} method The method name.
   * @param {string} storeName The object store name.
   * @param {string} type Can be `readonly` or `readwrite`.
   * @param {...*} args The list of args to pass to the native method.
   * @return {*} The result of the transaction.
   * @private
   */
  async _call(method, storeName, type, ...args) {
    const callback = (txn, done) => {
      txn.objectStore(storeName)[method](...args).onsuccess = ({target}) => {
        done(target.result);
      };
    };

    return await this.transaction([storeName], type, callback);
  }

  /**
   * The default onversionchange handler, which closes the database so other
   * connections can open without being blocked.
   *
   * @private
   */
  _onversionchange() {
    this.close();
  }

  /**
   * Closes the connection opened by `DBWrapper.open()`. Generally this method
   * doesn't need to be called since:
   *   1. It's usually better to keep a connection open since opening
   *      a new connection is somewhat slow.
   *   2. Connections are automatically closed when the reference is
   *      garbage collected.
   * The primary use case for needing to close a connection is when another
   * reference (typically in another tab) needs to upgrade it and would be
   * blocked by the current, open connection.
   *
   * @private
   */
  close() {
    if (this._db) {
      this._db.close();
      this._db = null;
    }
  }
}

// Exposed to let users modify the default timeout on a per-instance
// or global basis.
DBWrapper.prototype.OPEN_TIMEOUT = 2000;

// Wrap native IDBObjectStore methods according to their mode.
const methodsToWrap = {
  'readonly': ['get', 'count', 'getKey', 'getAll', 'getAllKeys'],
  'readwrite': ['add', 'put', 'clear', 'delete'],
};
for (const [mode, methods] of Object.entries(methodsToWrap)) {
  for (const method of methods) {
    if (method in IDBObjectStore.prototype) {
      // Don't use arrow functions here since we're outside of the class.
      DBWrapper.prototype[method] = async function(storeName, ...args) {
        return await this._call(method, storeName, mode, ...args);
      };
    }
  }
}


/***/ }),

/***/ "./node_modules/workbox-core/_private/Deferred.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/workbox-core/_private/Deferred.mjs ***!
  \*********************************************************/
/*! exports provided: Deferred */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Deferred", function() { return Deferred; });
/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.mjs */ "./node_modules/workbox-core/_version.mjs");
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * The Deferred class composes Promises in a way that allows for them to be
 * resolved or rejected from outside the constructor. In most cases promises
 * should be used directly, but Deferreds can be necessary when the logic to
 * resolve a promise must be separate.
 *
 * @private
 */
class Deferred {
  /**
   * Creates a promise and exposes its resolve and reject functions as methods.
   */
  constructor() {
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }
}


/***/ }),

/***/ "./node_modules/workbox-core/_private/WorkboxError.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/workbox-core/_private/WorkboxError.mjs ***!
  \*************************************************************/
/*! exports provided: WorkboxError */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkboxError", function() { return WorkboxError; });
/* harmony import */ var _models_messages_messageGenerator_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/messages/messageGenerator.mjs */ "./node_modules/workbox-core/models/messages/messageGenerator.mjs");
/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.mjs */ "./node_modules/workbox-core/_version.mjs");
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Workbox errors should be thrown with this class.
 * This allows use to ensure the type easily in tests,
 * helps developers identify errors from workbox
 * easily and allows use to optimise error
 * messages correctly.
 *
 * @private
 */
class WorkboxError extends Error {
  /**
   *
   * @param {string} errorCode The error code that
   * identifies this particular error.
   * @param {Object=} details Any relevant arguments
   * that will help developers identify issues should
   * be added as a key on the context object.
   */
  constructor(errorCode, details) {
    let message = Object(_models_messages_messageGenerator_mjs__WEBPACK_IMPORTED_MODULE_0__["messageGenerator"])(errorCode, details);

    super(message);

    this.name = errorCode;
    this.details = details;
  }
}




/***/ }),

/***/ "./node_modules/workbox-core/_private/assert.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/workbox-core/_private/assert.mjs ***!
  \*******************************************************/
/*! exports provided: assert */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assert", function() { return finalAssertExports; });
/* harmony import */ var _private_WorkboxError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/WorkboxError.mjs */ "./node_modules/workbox-core/_private/WorkboxError.mjs");
/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.mjs */ "./node_modules/workbox-core/_version.mjs");
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/*
 * This method returns true if the current context is a service worker.
 */
const isSWEnv = (moduleName) => {
  if (!('ServiceWorkerGlobalScope' in self)) {
    throw new _private_WorkboxError_mjs__WEBPACK_IMPORTED_MODULE_0__["WorkboxError"]('not-in-sw', {moduleName});
  }
};

/*
 * This method throws if the supplied value is not an array.
 * The destructed values are required to produce a meaningful error for users.
 * The destructed and restructured object is so it's clear what is
 * needed.
 */
const isArray = (value, {moduleName, className, funcName, paramName}) => {
  if (!Array.isArray(value)) {
    throw new _private_WorkboxError_mjs__WEBPACK_IMPORTED_MODULE_0__["WorkboxError"]('not-an-array', {
      moduleName,
      className,
      funcName,
      paramName,
    });
  }
};

const hasMethod = (object, expectedMethod,
    {moduleName, className, funcName, paramName}) => {
  const type = typeof object[expectedMethod];
  if (type !== 'function') {
    throw new _private_WorkboxError_mjs__WEBPACK_IMPORTED_MODULE_0__["WorkboxError"]('missing-a-method', {paramName, expectedMethod,
      moduleName, className, funcName});
  }
};

const isType = (object, expectedType,
    {moduleName, className, funcName, paramName}) => {
  if (typeof object !== expectedType) {
    throw new _private_WorkboxError_mjs__WEBPACK_IMPORTED_MODULE_0__["WorkboxError"]('incorrect-type', {paramName, expectedType,
      moduleName, className, funcName});
  }
};

const isInstance = (object, expectedClass,
    {moduleName, className, funcName,
      paramName, isReturnValueProblem}) => {
  if (!(object instanceof expectedClass)) {
    throw new _private_WorkboxError_mjs__WEBPACK_IMPORTED_MODULE_0__["WorkboxError"]('incorrect-class', {paramName, expectedClass,
      moduleName, className, funcName, isReturnValueProblem});
  }
};

const isOneOf = (value, validValues, {paramName}) => {
  if (!validValues.includes(value)) {
    throw new _private_WorkboxError_mjs__WEBPACK_IMPORTED_MODULE_0__["WorkboxError"]('invalid-value', {
      paramName,
      value,
      validValueDescription: `Valid values are ${JSON.stringify(validValues)}.`,
    });
  }
};

const isArrayOfClass = (value, expectedClass,
    {moduleName, className, funcName, paramName}) => {
  const error = new _private_WorkboxError_mjs__WEBPACK_IMPORTED_MODULE_0__["WorkboxError"]('not-array-of-class', {
    value, expectedClass,
    moduleName, className, funcName, paramName,
  });
  if (!Array.isArray(value)) {
    throw error;
  }

  for (let item of value) {
    if (!(item instanceof expectedClass)) {
      throw error;
    }
  }
};

const finalAssertExports =  false ? undefined : {
  hasMethod,
  isArray,
  isInstance,
  isOneOf,
  isSWEnv,
  isType,
  isArrayOfClass,
};




/***/ }),

/***/ "./node_modules/workbox-core/_private/cacheNames.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/workbox-core/_private/cacheNames.mjs ***!
  \***********************************************************/
/*! exports provided: cacheNames */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cacheNames", function() { return cacheNames; });
/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.mjs */ "./node_modules/workbox-core/_version.mjs");
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




const _cacheNameDetails = {
  googleAnalytics: 'googleAnalytics',
  precache: 'precache-v2',
  prefix: 'workbox',
  runtime: 'runtime',
  suffix: self.registration.scope,
};

const _createCacheName = (cacheName) => {
  return [_cacheNameDetails.prefix, cacheName, _cacheNameDetails.suffix]
      .filter((value) => value.length > 0)
      .join('-');
};

const cacheNames = {
  updateDetails: (details) => {
    Object.keys(_cacheNameDetails).forEach((key) => {
      if (typeof details[key] !== 'undefined') {
        _cacheNameDetails[key] = details[key];
      }
    });
  },
  getGoogleAnalyticsName: (userCacheName) => {
    return userCacheName || _createCacheName(_cacheNameDetails.googleAnalytics);
  },
  getPrecacheName: (userCacheName) => {
    return userCacheName || _createCacheName(_cacheNameDetails.precache);
  },
  getPrefix: () => {
    return _cacheNameDetails.prefix;
  },
  getRuntimeName: (userCacheName) => {
    return userCacheName || _createCacheName(_cacheNameDetails.runtime);
  },
  getSuffix: () => {
    return _cacheNameDetails.suffix;
  },
};


/***/ }),

/***/ "./node_modules/workbox-core/_private/cacheWrapper.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/workbox-core/_private/cacheWrapper.mjs ***!
  \*************************************************************/
/*! exports provided: cacheWrapper */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cacheWrapper", function() { return cacheWrapper; });
/* harmony import */ var _WorkboxError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WorkboxError.mjs */ "./node_modules/workbox-core/_private/WorkboxError.mjs");
/* harmony import */ var _assert_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assert.mjs */ "./node_modules/workbox-core/_private/assert.mjs");
/* harmony import */ var _getFriendlyURL_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getFriendlyURL.mjs */ "./node_modules/workbox-core/_private/getFriendlyURL.mjs");
/* harmony import */ var _logger_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logger.mjs */ "./node_modules/workbox-core/_private/logger.mjs");
/* harmony import */ var _executeQuotaErrorCallbacks_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./executeQuotaErrorCallbacks.mjs */ "./node_modules/workbox-core/_private/executeQuotaErrorCallbacks.mjs");
/* harmony import */ var _models_pluginEvents_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/pluginEvents.mjs */ "./node_modules/workbox-core/models/pluginEvents.mjs");
/* harmony import */ var _utils_pluginUtils_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/pluginUtils.mjs */ "./node_modules/workbox-core/utils/pluginUtils.mjs");
/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_version.mjs */ "./node_modules/workbox-core/_version.mjs");
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/











/**
 * Wrapper around cache.put().
 *
 * Will call `cacheDidUpdate` on plugins if the cache was updated, using
 * `matchOptions` when determining what the old entry is.
 *
 * @param {Object} options
 * @param {string} options.cacheName
 * @param {Request} options.request
 * @param {Response} options.response
 * @param {Event} [options.event]
 * @param {Array<Object>} [options.plugins=[]]
 * @param {Object} [options.matchOptions]
 *
 * @private
 * @memberof module:workbox-core
 */
const putWrapper = async ({
  cacheName,
  request,
  response,
  event,
  plugins = [],
  matchOptions,
} = {}) => {
  if (true) {
    if (request.method && request.method !== 'GET') {
      throw new _WorkboxError_mjs__WEBPACK_IMPORTED_MODULE_0__["WorkboxError"]('attempt-to-cache-non-get-request', {
        url: Object(_getFriendlyURL_mjs__WEBPACK_IMPORTED_MODULE_2__["getFriendlyURL"])(request.url),
        method: request.method,
      });
    }
  }

  const effectiveRequest = await _getEffectiveRequest({
    plugins, request, mode: 'write'});

  if (!response) {
    if (true) {
      _logger_mjs__WEBPACK_IMPORTED_MODULE_3__["logger"].error(`Cannot cache non-existent response for ` +
        `'${Object(_getFriendlyURL_mjs__WEBPACK_IMPORTED_MODULE_2__["getFriendlyURL"])(effectiveRequest.url)}'.`);
    }

    throw new _WorkboxError_mjs__WEBPACK_IMPORTED_MODULE_0__["WorkboxError"]('cache-put-with-no-response', {
      url: Object(_getFriendlyURL_mjs__WEBPACK_IMPORTED_MODULE_2__["getFriendlyURL"])(effectiveRequest.url),
    });
  }

  let responseToCache = await _isResponseSafeToCache({
    event,
    plugins,
    response,
    request: effectiveRequest,
  });

  if (!responseToCache) {
    if (true) {
      _logger_mjs__WEBPACK_IMPORTED_MODULE_3__["logger"].debug(`Response '${Object(_getFriendlyURL_mjs__WEBPACK_IMPORTED_MODULE_2__["getFriendlyURL"])(effectiveRequest.url)}' will ` +
      `not be cached.`, responseToCache);
    }
    return;
  }

  const cache = await caches.open(cacheName);

  const updatePlugins = _utils_pluginUtils_mjs__WEBPACK_IMPORTED_MODULE_6__["pluginUtils"].filter(
      plugins, _models_pluginEvents_mjs__WEBPACK_IMPORTED_MODULE_5__["pluginEvents"].CACHE_DID_UPDATE);

  let oldResponse = updatePlugins.length > 0 ?
      await matchWrapper({cacheName, matchOptions, request: effectiveRequest}) :
      null;

  if (true) {
    _logger_mjs__WEBPACK_IMPORTED_MODULE_3__["logger"].debug(`Updating the '${cacheName}' cache with a new Response for ` +
      `${Object(_getFriendlyURL_mjs__WEBPACK_IMPORTED_MODULE_2__["getFriendlyURL"])(effectiveRequest.url)}.`);
  }

  try {
    await cache.put(effectiveRequest, responseToCache);
  } catch (error) {
    // See https://developer.mozilla.org/en-US/docs/Web/API/DOMException#exception-QuotaExceededError
    if (error.name === 'QuotaExceededError') {
      await Object(_executeQuotaErrorCallbacks_mjs__WEBPACK_IMPORTED_MODULE_4__["executeQuotaErrorCallbacks"])();
    }
    throw error;
  }

  for (let plugin of updatePlugins) {
    await plugin[_models_pluginEvents_mjs__WEBPACK_IMPORTED_MODULE_5__["pluginEvents"].CACHE_DID_UPDATE].call(plugin, {
      cacheName,
      event,
      oldResponse,
      newResponse: responseToCache,
      request: effectiveRequest,
    });
  }
};

/**
 * This is a wrapper around cache.match().
 *
 * @param {Object} options
 * @param {string} options.cacheName Name of the cache to match against.
 * @param {Request} options.request The Request that will be used to look up
 *     cache entries.
 * @param {Event} [options.event] The event that propted the action.
 * @param {Object} [options.matchOptions] Options passed to cache.match().
 * @param {Array<Object>} [options.plugins=[]] Array of plugins.
 * @return {Response} A cached response if available.
 *
 * @private
 * @memberof module:workbox-core
 */
const matchWrapper = async ({
  cacheName,
  request,
  event,
  matchOptions,
  plugins = [],
}) => {
  const cache = await caches.open(cacheName);

  const effectiveRequest = await _getEffectiveRequest({
    plugins, request, mode: 'read'});

  let cachedResponse = await cache.match(effectiveRequest, matchOptions);
  if (true) {
    if (cachedResponse) {
      _logger_mjs__WEBPACK_IMPORTED_MODULE_3__["logger"].debug(`Found a cached response in '${cacheName}'.`);
    } else {
      _logger_mjs__WEBPACK_IMPORTED_MODULE_3__["logger"].debug(`No cached response found in '${cacheName}'.`);
    }
  }

  for (const plugin of plugins) {
    if (_models_pluginEvents_mjs__WEBPACK_IMPORTED_MODULE_5__["pluginEvents"].CACHED_RESPONSE_WILL_BE_USED in plugin) {
      cachedResponse = await plugin[_models_pluginEvents_mjs__WEBPACK_IMPORTED_MODULE_5__["pluginEvents"].CACHED_RESPONSE_WILL_BE_USED]
          .call(plugin, {
            cacheName,
            event,
            matchOptions,
            cachedResponse,
            request: effectiveRequest,
          });
      if (true) {
        if (cachedResponse) {
          _assert_mjs__WEBPACK_IMPORTED_MODULE_1__["assert"].isInstance(cachedResponse, Response, {
            moduleName: 'Plugin',
            funcName: _models_pluginEvents_mjs__WEBPACK_IMPORTED_MODULE_5__["pluginEvents"].CACHED_RESPONSE_WILL_BE_USED,
            isReturnValueProblem: true,
          });
        }
      }
    }
  }

  return cachedResponse;
};

/**
 * This method will call cacheWillUpdate on the available plugins (or use
 * status === 200) to determine if the Response is safe and valid to cache.
 *
 * @param {Object} options
 * @param {Request} options.request
 * @param {Response} options.response
 * @param {Event} [options.event]
 * @param {Array<Object>} [options.plugins=[]]
 * @return {Promise<Response>}
 *
 * @private
 * @memberof module:workbox-core
 */
const _isResponseSafeToCache = async ({request, response, event, plugins}) => {
  let responseToCache = response;
  let pluginsUsed = false;
  for (let plugin of plugins) {
    if (_models_pluginEvents_mjs__WEBPACK_IMPORTED_MODULE_5__["pluginEvents"].CACHE_WILL_UPDATE in plugin) {
      pluginsUsed = true;
      responseToCache = await plugin[_models_pluginEvents_mjs__WEBPACK_IMPORTED_MODULE_5__["pluginEvents"].CACHE_WILL_UPDATE]
          .call(plugin, {
            request,
            response: responseToCache,
            event,
          });

      if (true) {
        if (responseToCache) {
          _assert_mjs__WEBPACK_IMPORTED_MODULE_1__["assert"].isInstance(responseToCache, Response, {
            moduleName: 'Plugin',
            funcName: _models_pluginEvents_mjs__WEBPACK_IMPORTED_MODULE_5__["pluginEvents"].CACHE_WILL_UPDATE,
            isReturnValueProblem: true,
          });
        }
      }

      if (!responseToCache) {
        break;
      }
    }
  }

  if (!pluginsUsed) {
    if (true) {
      if (!responseToCache.status === 200) {
        if (responseToCache.status === 0) {
          _logger_mjs__WEBPACK_IMPORTED_MODULE_3__["logger"].warn(`The response for '${request.url}' is an opaque ` +
            `response. The caching strategy that you're using will not ` +
            `cache opaque responses by default.`);
        } else {
          _logger_mjs__WEBPACK_IMPORTED_MODULE_3__["logger"].debug(`The response for '${request.url}' returned ` +
          `a status code of '${response.status}' and won't be cached as a ` +
          `result.`);
        }
      }
    }
    responseToCache = responseToCache.status === 200 ? responseToCache : null;
  }

  return responseToCache ? responseToCache : null;
};

/**
 * Checks the list of plugins for the cacheKeyWillBeUsed callback, and
 * executes any of those callbacks found in sequence. The final `Request` object
 * returned by the last plugin is treated as the cache key for cache reads
 * and/or writes.
 *
 * @param {Object} options
 * @param {Request} options.request
 * @param {string} options.mode
 * @param {Array<Object>} [options.plugins=[]]
 * @return {Promise<Request>}
 *
 * @private
 * @memberof module:workbox-core
 */
const _getEffectiveRequest = async ({request, mode, plugins}) => {
  const cacheKeyWillBeUsedPlugins = _utils_pluginUtils_mjs__WEBPACK_IMPORTED_MODULE_6__["pluginUtils"].filter(
      plugins, _models_pluginEvents_mjs__WEBPACK_IMPORTED_MODULE_5__["pluginEvents"].CACHE_KEY_WILL_BE_USED);

  let effectiveRequest = request;
  for (const plugin of cacheKeyWillBeUsedPlugins) {
    effectiveRequest = await plugin[_models_pluginEvents_mjs__WEBPACK_IMPORTED_MODULE_5__["pluginEvents"].CACHE_KEY_WILL_BE_USED].call(
        plugin, {mode, request: effectiveRequest});

    if (typeof effectiveRequest === 'string') {
      effectiveRequest = new Request(effectiveRequest);
    }

    if (true) {
      _assert_mjs__WEBPACK_IMPORTED_MODULE_1__["assert"].isInstance(effectiveRequest, Request, {
        moduleName: 'Plugin',
        funcName: _models_pluginEvents_mjs__WEBPACK_IMPORTED_MODULE_5__["pluginEvents"].CACHE_KEY_WILL_BE_USED,
        isReturnValueProblem: true,
      });
    }
  }

  return effectiveRequest;
};

const cacheWrapper = {
  put: putWrapper,
  match: matchWrapper,
};


/***/ }),

/***/ "./node_modules/workbox-core/_private/deleteDatabase.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/workbox-core/_private/deleteDatabase.mjs ***!
  \***************************************************************/
/*! exports provided: deleteDatabase */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteDatabase", function() { return deleteDatabase; });
/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.mjs */ "./node_modules/workbox-core/_version.mjs");
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Deletes the database.
 * Note: this is exported separately from the DBWrapper module because most
 * usages of IndexedDB in workbox dont need deleting, and this way it can be
 * reused in tests to delete databases without creating DBWrapper instances.
 *
 * @param {string} name The database name.
 * @private
 */
const deleteDatabase = async (name) => {
  await new Promise((resolve, reject) => {
    const request = indexedDB.deleteDatabase(name);
    request.onerror = ({target}) => {
      reject(target.error);
    };
    request.onblocked = () => {
      reject(new Error('Delete blocked'));
    };
    request.onsuccess = () => {
      resolve();
    };
  });
};


/***/ }),

/***/ "./node_modules/workbox-core/_private/executeQuotaErrorCallbacks.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/workbox-core/_private/executeQuotaErrorCallbacks.mjs ***!
  \***************************************************************************/
/*! exports provided: executeQuotaErrorCallbacks */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "executeQuotaErrorCallbacks", function() { return executeQuotaErrorCallbacks; });
/* harmony import */ var _private_logger_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/logger.mjs */ "./node_modules/workbox-core/_private/logger.mjs");
/* harmony import */ var _models_quotaErrorCallbacks_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/quotaErrorCallbacks.mjs */ "./node_modules/workbox-core/models/quotaErrorCallbacks.mjs");
/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_version.mjs */ "./node_modules/workbox-core/_version.mjs");
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * Runs all of the callback functions, one at a time sequentially, in the order
 * in which they were registered.
 *
 * @memberof workbox.core
 * @private
 */
async function executeQuotaErrorCallbacks() {
  if (true) {
    _private_logger_mjs__WEBPACK_IMPORTED_MODULE_0__["logger"].log(`About to run ${_models_quotaErrorCallbacks_mjs__WEBPACK_IMPORTED_MODULE_1__["quotaErrorCallbacks"].size} ` +
        `callbacks to clean up caches.`);
  }

  for (const callback of _models_quotaErrorCallbacks_mjs__WEBPACK_IMPORTED_MODULE_1__["quotaErrorCallbacks"]) {
    await callback();
    if (true) {
      _private_logger_mjs__WEBPACK_IMPORTED_MODULE_0__["logger"].log(callback, 'is complete.');
    }
  }

  if (true) {
    _private_logger_mjs__WEBPACK_IMPORTED_MODULE_0__["logger"].log('Finished running callbacks.');
  }
}




/***/ }),

/***/ "./node_modules/workbox-core/_private/fetchWrapper.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/workbox-core/_private/fetchWrapper.mjs ***!
  \*************************************************************/
/*! exports provided: fetchWrapper */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchWrapper", function() { return fetchWrapper; });
/* harmony import */ var _WorkboxError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WorkboxError.mjs */ "./node_modules/workbox-core/_private/WorkboxError.mjs");
/* harmony import */ var _logger_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger.mjs */ "./node_modules/workbox-core/_private/logger.mjs");
/* harmony import */ var _assert_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assert.mjs */ "./node_modules/workbox-core/_private/assert.mjs");
/* harmony import */ var _private_getFriendlyURL_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_private/getFriendlyURL.mjs */ "./node_modules/workbox-core/_private/getFriendlyURL.mjs");
/* harmony import */ var _models_pluginEvents_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/pluginEvents.mjs */ "./node_modules/workbox-core/models/pluginEvents.mjs");
/* harmony import */ var _utils_pluginUtils_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/pluginUtils.mjs */ "./node_modules/workbox-core/utils/pluginUtils.mjs");
/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_version.mjs */ "./node_modules/workbox-core/_version.mjs");
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/









/**
 * Wrapper around the fetch API.
 *
 * Will call requestWillFetch on available plugins.
 *
 * @param {Object} options
 * @param {Request|string} options.request
 * @param {Object} [options.fetchOptions]
 * @param {Event} [options.event]
 * @param {Array<Object>} [options.plugins=[]]
 * @return {Promise<Response>}
 *
 * @private
 * @memberof module:workbox-core
 */
const wrappedFetch = async ({
  request,
  fetchOptions,
  event,
  plugins = []}) => {
  // We *should* be able to call `await event.preloadResponse` even if it's
  // undefined, but for some reason, doing so leads to errors in our Node unit
  // tests. To work around that, explicitly check preloadResponse's value first.
  if (event && event.preloadResponse) {
    const possiblePreloadResponse = await event.preloadResponse;
    if (possiblePreloadResponse) {
      if (true) {
        _logger_mjs__WEBPACK_IMPORTED_MODULE_1__["logger"].log(`Using a preloaded navigation response for ` +
          `'${Object(_private_getFriendlyURL_mjs__WEBPACK_IMPORTED_MODULE_3__["getFriendlyURL"])(request.url)}'`);
      }
      return possiblePreloadResponse;
    }
  }

  if (typeof request === 'string') {
    request = new Request(request);
  }

  if (true) {
    _assert_mjs__WEBPACK_IMPORTED_MODULE_2__["assert"].isInstance(request, Request, {
      paramName: request,
      expectedClass: 'Request',
      moduleName: 'workbox-core',
      className: 'fetchWrapper',
      funcName: 'wrappedFetch',
    });
  }

  const failedFetchPlugins = _utils_pluginUtils_mjs__WEBPACK_IMPORTED_MODULE_5__["pluginUtils"].filter(
      plugins, _models_pluginEvents_mjs__WEBPACK_IMPORTED_MODULE_4__["pluginEvents"].FETCH_DID_FAIL);

  // If there is a fetchDidFail plugin, we need to save a clone of the
  // original request before it's either modified by a requestWillFetch
  // plugin or before the original request's body is consumed via fetch().
  const originalRequest = failedFetchPlugins.length > 0 ?
    request.clone() : null;

  try {
    for (let plugin of plugins) {
      if (_models_pluginEvents_mjs__WEBPACK_IMPORTED_MODULE_4__["pluginEvents"].REQUEST_WILL_FETCH in plugin) {
        request = await plugin[_models_pluginEvents_mjs__WEBPACK_IMPORTED_MODULE_4__["pluginEvents"].REQUEST_WILL_FETCH].call(plugin, {
          request: request.clone(),
          event,
        });

        if (true) {
          if (request) {
            _assert_mjs__WEBPACK_IMPORTED_MODULE_2__["assert"].isInstance(request, Request, {
              moduleName: 'Plugin',
              funcName: _models_pluginEvents_mjs__WEBPACK_IMPORTED_MODULE_4__["pluginEvents"].CACHED_RESPONSE_WILL_BE_USED,
              isReturnValueProblem: true,
            });
          }
        }
      }
    }
  } catch (err) {
    throw new _WorkboxError_mjs__WEBPACK_IMPORTED_MODULE_0__["WorkboxError"]('plugin-error-request-will-fetch', {
      thrownError: err,
    });
  }

  // The request can be altered by plugins with `requestWillFetch` making
  // the original request (Most likely from a `fetch` event) to be different
  // to the Request we make. Pass both to `fetchDidFail` to aid debugging.
  let pluginFilteredRequest = request.clone();

  try {
    let fetchResponse;

    // See https://github.com/GoogleChrome/workbox/issues/1796
    if (request.mode === 'navigate') {
      fetchResponse = await fetch(request);
    } else {
      fetchResponse = await fetch(request, fetchOptions);
    }

    if (true) {
      _logger_mjs__WEBPACK_IMPORTED_MODULE_1__["logger"].debug(`Network request for `+
      `'${Object(_private_getFriendlyURL_mjs__WEBPACK_IMPORTED_MODULE_3__["getFriendlyURL"])(request.url)}' returned a response with ` +
      `status '${fetchResponse.status}'.`);
    }

    for (const plugin of plugins) {
      if (_models_pluginEvents_mjs__WEBPACK_IMPORTED_MODULE_4__["pluginEvents"].FETCH_DID_SUCCEED in plugin) {
        fetchResponse = await plugin[_models_pluginEvents_mjs__WEBPACK_IMPORTED_MODULE_4__["pluginEvents"].FETCH_DID_SUCCEED]
            .call(plugin, {
              event,
              request: pluginFilteredRequest,
              response: fetchResponse,
            });

        if (true) {
          if (fetchResponse) {
            _assert_mjs__WEBPACK_IMPORTED_MODULE_2__["assert"].isInstance(fetchResponse, Response, {
              moduleName: 'Plugin',
              funcName: _models_pluginEvents_mjs__WEBPACK_IMPORTED_MODULE_4__["pluginEvents"].FETCH_DID_SUCCEED,
              isReturnValueProblem: true,
            });
          }
        }
      }
    }

    return fetchResponse;
  } catch (error) {
    if (true) {
      _logger_mjs__WEBPACK_IMPORTED_MODULE_1__["logger"].error(`Network request for `+
      `'${Object(_private_getFriendlyURL_mjs__WEBPACK_IMPORTED_MODULE_3__["getFriendlyURL"])(request.url)}' threw an error.`, error);
    }

    for (const plugin of failedFetchPlugins) {
      await plugin[_models_pluginEvents_mjs__WEBPACK_IMPORTED_MODULE_4__["pluginEvents"].FETCH_DID_FAIL].call(plugin, {
        error,
        event,
        originalRequest: originalRequest.clone(),
        request: pluginFilteredRequest.clone(),
      });
    }

    throw error;
  }
};

const fetchWrapper = {
  fetch: wrappedFetch,
};




/***/ }),

/***/ "./node_modules/workbox-core/_private/getFriendlyURL.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/workbox-core/_private/getFriendlyURL.mjs ***!
  \***************************************************************/
/*! exports provided: getFriendlyURL */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFriendlyURL", function() { return getFriendlyURL; });
/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.mjs */ "./node_modules/workbox-core/_version.mjs");
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



const getFriendlyURL = (url) => {
  const urlObj = new URL(url, location);
  if (urlObj.origin === location.origin) {
    return urlObj.pathname;
  }
  return urlObj.href;
};




/***/ }),

/***/ "./node_modules/workbox-core/_private/logger.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/workbox-core/_private/logger.mjs ***!
  \*******************************************************/
/*! exports provided: logger */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logger", function() { return logger; });
/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.mjs */ "./node_modules/workbox-core/_version.mjs");
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




const logger =  false ? undefined : (() => {
  let inGroup = false;

  const methodToColorMap = {
    debug: `#7f8c8d`, // Gray
    log: `#2ecc71`, // Green
    warn: `#f39c12`, // Yellow
    error: `#c0392b`, // Red
    groupCollapsed: `#3498db`, // Blue
    groupEnd: null, // No colored prefix on groupEnd
  };

  const print = function(method, args) {
    if (method === 'groupCollapsed') {
      // Safari doesn't print all console.groupCollapsed() arguments:
      // https://bugs.webkit.org/show_bug.cgi?id=182754
      if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
        console[method](...args);
        return;
      }
    }

    const styles = [
      `background: ${methodToColorMap[method]}`,
      `border-radius: 0.5em`,
      `color: white`,
      `font-weight: bold`,
      `padding: 2px 0.5em`,
    ];

    // When in a group, the workbox prefix is not displayed.
    const logPrefix = inGroup ? [] : ['%cworkbox', styles.join(';')];

    console[method](...logPrefix, ...args);

    if (method === 'groupCollapsed') {
      inGroup = true;
    }
    if (method === 'groupEnd') {
      inGroup = false;
    }
  };

  const api = {};
  for (const method of Object.keys(methodToColorMap)) {
    api[method] = (...args) => {
      print(method, args);
    };
  }

  return api;
})();




/***/ }),

/***/ "./node_modules/workbox-core/_version.mjs":
/*!************************************************!*\
  !*** ./node_modules/workbox-core/_version.mjs ***!
  \************************************************/
/*! no exports provided */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
try{self['workbox:core:4.3.1']&&_()}catch(e){}// eslint-disable-line

/***/ }),

/***/ "./node_modules/workbox-core/cacheNames.mjs":
/*!**************************************************!*\
  !*** ./node_modules/workbox-core/cacheNames.mjs ***!
  \**************************************************/
/*! exports provided: cacheNames */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cacheNames", function() { return cacheNames; });
/* harmony import */ var _private_cacheNames_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/cacheNames.mjs */ "./node_modules/workbox-core/_private/cacheNames.mjs");
/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.mjs */ "./node_modules/workbox-core/_version.mjs");
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/





/**
 * Get the current cache names and prefix/suffix used by Workbox.
 *
 * `cacheNames.precache` is used for precached assets,
 * `cacheNames.googleAnalytics` is used by `workbox-google-analytics` to
 * store `analytics.js`, and `cacheNames.runtime` is used for everything else.
 *
 * `cacheNames.prefix` can be used to retrieve just the current prefix value.
 * `cacheNames.suffix` can be used to retrieve just the current suffix value.
 *
 * @return {Object} An object with `precache`, `runtime`, `prefix`, and
 *     `googleAnalytics` properties.
 *
 * @alias workbox.core.cacheNames
 */
const cacheNames = {
  get googleAnalytics() {
    return _private_cacheNames_mjs__WEBPACK_IMPORTED_MODULE_0__["cacheNames"].getGoogleAnalyticsName();
  },
  get precache() {
    return _private_cacheNames_mjs__WEBPACK_IMPORTED_MODULE_0__["cacheNames"].getPrecacheName();
  },
  get prefix() {
    return _private_cacheNames_mjs__WEBPACK_IMPORTED_MODULE_0__["cacheNames"].getPrefix();
  },
  get runtime() {
    return _private_cacheNames_mjs__WEBPACK_IMPORTED_MODULE_0__["cacheNames"].getRuntimeName();
  },
  get suffix() {
    return _private_cacheNames_mjs__WEBPACK_IMPORTED_MODULE_0__["cacheNames"].getSuffix();
  },
};


/***/ }),

/***/ "./node_modules/workbox-core/clientsClaim.mjs":
/*!****************************************************!*\
  !*** ./node_modules/workbox-core/clientsClaim.mjs ***!
  \****************************************************/
/*! exports provided: clientsClaim */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clientsClaim", function() { return clientsClaim; });
/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_version.mjs */ "./node_modules/workbox-core/_version.mjs");
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Claim any currently available clients once the service worker
 * becomes active. This is normally used in conjunction with `skipWaiting()`.
 *
 * @alias workbox.core.clientsClaim
 */
const clientsClaim = () => {
  addEventListener('activate', () => clients.claim());
};


/***/ }),

/***/ "./node_modules/workbox-core/index.mjs":
/*!*********************************************!*\
  !*** ./node_modules/workbox-core/index.mjs ***!
  \*********************************************/
/*! exports provided: _private, clientsClaim, cacheNames, registerQuotaErrorCallback, setCacheNameDetails, skipWaiting */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _registerQuotaErrorCallback_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registerQuotaErrorCallback.mjs */ "./node_modules/workbox-core/registerQuotaErrorCallback.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerQuotaErrorCallback", function() { return _registerQuotaErrorCallback_mjs__WEBPACK_IMPORTED_MODULE_0__["registerQuotaErrorCallback"]; });

/* harmony import */ var _private_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_private.mjs */ "./node_modules/workbox-core/_private.mjs");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "_private", function() { return _private_mjs__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _clientsClaim_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clientsClaim.mjs */ "./node_modules/workbox-core/clientsClaim.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clientsClaim", function() { return _clientsClaim_mjs__WEBPACK_IMPORTED_MODULE_2__["clientsClaim"]; });

/* harmony import */ var _cacheNames_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cacheNames.mjs */ "./node_modules/workbox-core/cacheNames.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cacheNames", function() { return _cacheNames_mjs__WEBPACK_IMPORTED_MODULE_3__["cacheNames"]; });

/* harmony import */ var _setCacheNameDetails_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setCacheNameDetails.mjs */ "./node_modules/workbox-core/setCacheNameDetails.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCacheNameDetails", function() { return _setCacheNameDetails_mjs__WEBPACK_IMPORTED_MODULE_4__["setCacheNameDetails"]; });

/* harmony import */ var _skipWaiting_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./skipWaiting.mjs */ "./node_modules/workbox-core/skipWaiting.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "skipWaiting", function() { return _skipWaiting_mjs__WEBPACK_IMPORTED_MODULE_5__["skipWaiting"]; });

/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.mjs */ "./node_modules/workbox-core/_version.mjs");
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/










// Give our version strings something to hang off of.
try {
  self.workbox.v = self.workbox.v || {};
} catch (errer) {
  // NOOP
}

/**
 * All of the Workbox service worker libraries use workbox-core for shared
 * code as well as setting default values that need to be shared (like cache
 * names).
 *
 * @namespace workbox.core
 */




/***/ }),

/***/ "./node_modules/workbox-core/models/messages/messageGenerator.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/workbox-core/models/messages/messageGenerator.mjs ***!
  \************************************************************************/
/*! exports provided: messageGenerator */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messageGenerator", function() { return messageGenerator; });
/* harmony import */ var _messages_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.mjs */ "./node_modules/workbox-core/models/messages/messages.mjs");
/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_version.mjs */ "./node_modules/workbox-core/_version.mjs");
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




const fallback = (code, ...args) => {
  let msg = code;
  if (args.length > 0) {
    msg += ` :: ${JSON.stringify(args)}`;
  }
  return msg;
};

const generatorFunction = (code, ...args) => {
  const message = _messages_mjs__WEBPACK_IMPORTED_MODULE_0__["messages"][code];
  if (!message) {
    throw new Error(`Unable to find message for code '${code}'.`);
  }

  return message(...args);
};

const messageGenerator = ( false) ?
    undefined : generatorFunction;


/***/ }),

/***/ "./node_modules/workbox-core/models/messages/messages.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/workbox-core/models/messages/messages.mjs ***!
  \****************************************************************/
/*! exports provided: messages */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messages", function() { return messages; });
/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_version.mjs */ "./node_modules/workbox-core/_version.mjs");
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




const messages = {
  'invalid-value': ({paramName, validValueDescription, value}) => {
    if (!paramName || !validValueDescription) {
      throw new Error(`Unexpected input to 'invalid-value' error.`);
    }
    return `The '${paramName}' parameter was given a value with an ` +
      `unexpected value. ${validValueDescription} Received a value of ` +
      `${JSON.stringify(value)}.`;
  },

  'not-in-sw': ({moduleName}) => {
    if (!moduleName) {
      throw new Error(`Unexpected input to 'not-in-sw' error.`);
    }
    return `The '${moduleName}' must be used in a service worker.`;
  },

  'not-an-array': ({moduleName, className, funcName, paramName}) => {
    if (!moduleName || !className || !funcName || !paramName) {
      throw new Error(`Unexpected input to 'not-an-array' error.`);
    }
    return `The parameter '${paramName}' passed into ` +
      `'${moduleName}.${className}.${funcName}()' must be an array.`;
  },

  'incorrect-type': ({expectedType, paramName, moduleName, className,
    funcName}) => {
    if (!expectedType || !paramName || !moduleName || !funcName) {
      throw new Error(`Unexpected input to 'incorrect-type' error.`);
    }
    return `The parameter '${paramName}' passed into ` +
      `'${moduleName}.${className ? (className + '.') : ''}` +
      `${funcName}()' must be of type ${expectedType}.`;
  },

  'incorrect-class': ({expectedClass, paramName, moduleName, className,
    funcName, isReturnValueProblem}) => {
    if (!expectedClass || !moduleName || !funcName) {
      throw new Error(`Unexpected input to 'incorrect-class' error.`);
    }

    if (isReturnValueProblem) {
      return `The return value from ` +
        `'${moduleName}.${className ? (className + '.') : ''}${funcName}()' ` +
        `must be an instance of class ${expectedClass.name}.`;
    }

    return `The parameter '${paramName}' passed into ` +
      `'${moduleName}.${className ? (className + '.') : ''}${funcName}()' ` +
      `must be an instance of class ${expectedClass.name}.`;
  },

  'missing-a-method': ({expectedMethod, paramName, moduleName, className,
    funcName}) => {
    if (!expectedMethod || !paramName || !moduleName || !className
        || !funcName) {
      throw new Error(`Unexpected input to 'missing-a-method' error.`);
    }
    return `${moduleName}.${className}.${funcName}() expected the ` +
      `'${paramName}' parameter to expose a '${expectedMethod}' method.`;
  },

  'add-to-cache-list-unexpected-type': ({entry}) => {
    return `An unexpected entry was passed to ` +
    `'workbox-precaching.PrecacheController.addToCacheList()' The entry ` +
    `'${JSON.stringify(entry)}' isn't supported. You must supply an array of ` +
    `strings with one or more characters, objects with a url property or ` +
    `Request objects.`;
  },

  'add-to-cache-list-conflicting-entries': ({firstEntry, secondEntry}) => {
    if (!firstEntry || !secondEntry) {
      throw new Error(`Unexpected input to ` +
        `'add-to-cache-list-duplicate-entries' error.`);
    }

    return `Two of the entries passed to ` +
      `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
      `${firstEntry._entryId} but different revision details. Workbox is ` +
      `is unable to cache and version the asset correctly. Please remove one ` +
      `of the entries.`;
  },

  'plugin-error-request-will-fetch': ({thrownError}) => {
    if (!thrownError) {
      throw new Error(`Unexpected input to ` +
        `'plugin-error-request-will-fetch', error.`);
    }

    return `An error was thrown by a plugins 'requestWillFetch()' method. ` +
      `The thrown error message was: '${thrownError.message}'.`;
  },

  'invalid-cache-name': ({cacheNameId, value}) => {
    if (!cacheNameId) {
      throw new Error(
          `Expected a 'cacheNameId' for error 'invalid-cache-name'`);
    }

    return `You must provide a name containing at least one character for ` +
      `setCacheDeatils({${cacheNameId}: '...'}). Received a value of ` +
      `'${JSON.stringify(value)}'`;
  },

  'unregister-route-but-not-found-with-method': ({method}) => {
    if (!method) {
      throw new Error(`Unexpected input to ` +
        `'unregister-route-but-not-found-with-method' error.`);
    }

    return `The route you're trying to unregister was not  previously ` +
      `registered for the method type '${method}'.`;
  },

  'unregister-route-route-not-registered': () => {
    return `The route you're trying to unregister was not previously ` +
      `registered.`;
  },

  'queue-replay-failed': ({name}) => {
    return `Replaying the background sync queue '${name}' failed.`;
  },

  'duplicate-queue-name': ({name}) => {
    return `The Queue name '${name}' is already being used. ` +
        `All instances of backgroundSync.Queue must be given unique names.`;
  },

  'expired-test-without-max-age': ({methodName, paramName}) => {
    return `The '${methodName}()' method can only be used when the ` +
      `'${paramName}' is used in the constructor.`;
  },

  'unsupported-route-type': ({moduleName, className, funcName, paramName}) => {
    return `The supplied '${paramName}' parameter was an unsupported type. ` +
      `Please check the docs for ${moduleName}.${className}.${funcName} for ` +
      `valid input types.`;
  },

  'not-array-of-class': ({value, expectedClass,
    moduleName, className, funcName, paramName}) => {
    return `The supplied '${paramName}' parameter must be an array of ` +
      `'${expectedClass}' objects. Received '${JSON.stringify(value)},'. ` +
      `Please check the call to ${moduleName}.${className}.${funcName}() ` +
      `to fix the issue.`;
  },

  'max-entries-or-age-required': ({moduleName, className, funcName}) => {
    return `You must define either config.maxEntries or config.maxAgeSeconds` +
      `in ${moduleName}.${className}.${funcName}`;
  },

  'statuses-or-headers-required': ({moduleName, className, funcName}) => {
    return `You must define either config.statuses or config.headers` +
      `in ${moduleName}.${className}.${funcName}`;
  },

  'invalid-string': ({moduleName, className, funcName, paramName}) => {
    if (!paramName || !moduleName || !funcName) {
      throw new Error(`Unexpected input to 'invalid-string' error.`);
    }
    return `When using strings, the '${paramName}' parameter must start with ` +
      `'http' (for cross-origin matches) or '/' (for same-origin matches). ` +
      `Please see the docs for ${moduleName}.${funcName}() for ` +
      `more info.`;
  },

  'channel-name-required': () => {
    return `You must provide a channelName to construct a ` +
    `BroadcastCacheUpdate instance.`;
  },

  'invalid-responses-are-same-args': () => {
    return `The arguments passed into responsesAreSame() appear to be ` +
      `invalid. Please ensure valid Responses are used.`;
  },

  'expire-custom-caches-only': () => {
    return `You must provide a 'cacheName' property when using the ` +
      `expiration plugin with a runtime caching strategy.`;
  },

  'unit-must-be-bytes': ({normalizedRangeHeader}) => {
    if (!normalizedRangeHeader) {
      throw new Error(`Unexpected input to 'unit-must-be-bytes' error.`);
    }
    return `The 'unit' portion of the Range header must be set to 'bytes'. ` +
      `The Range header provided was "${normalizedRangeHeader}"`;
  },

  'single-range-only': ({normalizedRangeHeader}) => {
    if (!normalizedRangeHeader) {
      throw new Error(`Unexpected input to 'single-range-only' error.`);
    }
    return `Multiple ranges are not supported. Please use a  single start ` +
      `value, and optional end value. The Range header provided was ` +
      `"${normalizedRangeHeader}"`;
  },

  'invalid-range-values': ({normalizedRangeHeader}) => {
    if (!normalizedRangeHeader) {
      throw new Error(`Unexpected input to 'invalid-range-values' error.`);
    }
    return `The Range header is missing both start and end values. At least ` +
      `one of those values is needed. The Range header provided was ` +
      `"${normalizedRangeHeader}"`;
  },

  'no-range-header': () => {
    return `No Range header was found in the Request provided.`;
  },

  'range-not-satisfiable': ({size, start, end}) => {
    return `The start (${start}) and end (${end}) values in the Range are ` +
      `not satisfiable by the cached response, which is ${size} bytes.`;
  },

  'attempt-to-cache-non-get-request': ({url, method}) => {
    return `Unable to cache '${url}' because it is a '${method}' request and ` +
      `only 'GET' requests can be cached.`;
  },

  'cache-put-with-no-response': ({url}) => {
    return `There was an attempt to cache '${url}' but the response was not ` +
      `defined.`;
  },

  'no-response': ({url, error}) => {
    let message = `The strategy could not generate a response for '${url}'.`;
    if (error) {
      message += ` The underlying error is ${error}.`;
    }
    return message;
  },

  'bad-precaching-response': ({url, status}) => {
    return `The precaching request for '${url}' failed with an HTTP ` +
      `status of ${status}.`;
  },
};


/***/ }),

/***/ "./node_modules/workbox-core/models/pluginEvents.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/workbox-core/models/pluginEvents.mjs ***!
  \***********************************************************/
/*! exports provided: pluginEvents */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pluginEvents", function() { return pluginEvents; });
/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.mjs */ "./node_modules/workbox-core/_version.mjs");
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




const pluginEvents = {
  CACHE_DID_UPDATE: 'cacheDidUpdate',
  CACHE_KEY_WILL_BE_USED: 'cacheKeyWillBeUsed',
  CACHE_WILL_UPDATE: 'cacheWillUpdate',
  CACHED_RESPONSE_WILL_BE_USED: 'cachedResponseWillBeUsed',
  FETCH_DID_FAIL: 'fetchDidFail',
  FETCH_DID_SUCCEED: 'fetchDidSucceed',
  REQUEST_WILL_FETCH: 'requestWillFetch',
};


/***/ }),

/***/ "./node_modules/workbox-core/models/quotaErrorCallbacks.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/workbox-core/models/quotaErrorCallbacks.mjs ***!
  \******************************************************************/
/*! exports provided: quotaErrorCallbacks */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quotaErrorCallbacks", function() { return quotaErrorCallbacks; });
/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.mjs */ "./node_modules/workbox-core/_version.mjs");
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




// Callbacks to be executed whenever there's a quota error.
const quotaErrorCallbacks = new Set();




/***/ }),

/***/ "./node_modules/workbox-core/registerQuotaErrorCallback.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/workbox-core/registerQuotaErrorCallback.mjs ***!
  \******************************************************************/
/*! exports provided: registerQuotaErrorCallback */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerQuotaErrorCallback", function() { return registerQuotaErrorCallback; });
/* harmony import */ var _private_logger_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/logger.mjs */ "./node_modules/workbox-core/_private/logger.mjs");
/* harmony import */ var _private_assert_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_private/assert.mjs */ "./node_modules/workbox-core/_private/assert.mjs");
/* harmony import */ var _models_quotaErrorCallbacks_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/quotaErrorCallbacks.mjs */ "./node_modules/workbox-core/models/quotaErrorCallbacks.mjs");
/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.mjs */ "./node_modules/workbox-core/_version.mjs");
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * Adds a function to the set of quotaErrorCallbacks that will be executed if
 * there's a quota error.
 *
 * @param {Function} callback
 * @memberof workbox.core
 */
function registerQuotaErrorCallback(callback) {
  if (true) {
    _private_assert_mjs__WEBPACK_IMPORTED_MODULE_1__["assert"].isType(callback, 'function', {
      moduleName: 'workbox-core',
      funcName: 'register',
      paramName: 'callback',
    });
  }

  _models_quotaErrorCallbacks_mjs__WEBPACK_IMPORTED_MODULE_2__["quotaErrorCallbacks"].add(callback);

  if (true) {
    _private_logger_mjs__WEBPACK_IMPORTED_MODULE_0__["logger"].log('Registered a callback to respond to quota errors.', callback);
  }
}




/***/ }),

/***/ "./node_modules/workbox-core/setCacheNameDetails.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/workbox-core/setCacheNameDetails.mjs ***!
  \***********************************************************/
/*! exports provided: setCacheNameDetails */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCacheNameDetails", function() { return setCacheNameDetails; });
/* harmony import */ var _private_assert_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/assert.mjs */ "./node_modules/workbox-core/_private/assert.mjs");
/* harmony import */ var _private_cacheNames_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_private/cacheNames.mjs */ "./node_modules/workbox-core/_private/cacheNames.mjs");
/* harmony import */ var _private_WorkboxError_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_private/WorkboxError.mjs */ "./node_modules/workbox-core/_private/WorkboxError.mjs");
/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.mjs */ "./node_modules/workbox-core/_version.mjs");
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * Modifies the default cache names used by the Workbox packages.
 * Cache names are generated as `<prefix>-<Cache Name>-<suffix>`.
 *
 * @param {Object} details
 * @param {Object} [details.prefix] The string to add to the beginning of
 *     the precache and runtime cache names.
 * @param {Object} [details.suffix] The string to add to the end of
 *     the precache and runtime cache names.
 * @param {Object} [details.precache] The cache name to use for precache
 *     caching.
 * @param {Object} [details.runtime] The cache name to use for runtime caching.
 * @param {Object} [details.googleAnalytics] The cache name to use for
 *     `workbox-google-analytics` caching.
 *
 * @alias workbox.core.setCacheNameDetails
 */
const setCacheNameDetails = (details) => {
  if (true) {
    Object.keys(details).forEach((key) => {
      _private_assert_mjs__WEBPACK_IMPORTED_MODULE_0__["assert"].isType(details[key], 'string', {
        moduleName: 'workbox-core',
        funcName: 'setCacheNameDetails',
        paramName: `details.${key}`,
      });
    });

    if ('precache' in details && details.precache.length === 0) {
      throw new _private_WorkboxError_mjs__WEBPACK_IMPORTED_MODULE_2__["WorkboxError"]('invalid-cache-name', {
        cacheNameId: 'precache',
        value: details.precache,
      });
    }

    if ('runtime' in details && details.runtime.length === 0) {
      throw new _private_WorkboxError_mjs__WEBPACK_IMPORTED_MODULE_2__["WorkboxError"]('invalid-cache-name', {
        cacheNameId: 'runtime',
        value: details.runtime,
      });
    }

    if ('googleAnalytics' in details && details.googleAnalytics.length === 0) {
      throw new _private_WorkboxError_mjs__WEBPACK_IMPORTED_MODULE_2__["WorkboxError"]('invalid-cache-name', {
        cacheNameId: 'googleAnalytics',
        value: details.googleAnalytics,
      });
    }
  }

  _private_cacheNames_mjs__WEBPACK_IMPORTED_MODULE_1__["cacheNames"].updateDetails(details);
};


/***/ }),

/***/ "./node_modules/workbox-core/skipWaiting.mjs":
/*!***************************************************!*\
  !*** ./node_modules/workbox-core/skipWaiting.mjs ***!
  \***************************************************/
/*! exports provided: skipWaiting */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skipWaiting", function() { return skipWaiting; });
/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_version.mjs */ "./node_modules/workbox-core/_version.mjs");
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Force a service worker to become active, instead of waiting. This is
 * normally used in conjunction with `clientsClaim()`.
 *
 * @alias workbox.core.skipWaiting
 */
const skipWaiting = () => {
  // We need to explicitly call `self.skipWaiting()` here because we're
  // shadowing `skipWaiting` with this local function.
  addEventListener('install', () => self.skipWaiting());
};


/***/ }),

/***/ "./node_modules/workbox-core/utils/pluginUtils.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/workbox-core/utils/pluginUtils.mjs ***!
  \*********************************************************/
/*! exports provided: pluginUtils */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pluginUtils", function() { return pluginUtils; });
/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.mjs */ "./node_modules/workbox-core/_version.mjs");
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



const pluginUtils = {
  filter: (plugins, callbackName) => {
    return plugins.filter((plugin) => callbackName in plugin);
  },
};


/***/ }),

/***/ "./node_modules/workbox-expiration/CacheExpiration.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/workbox-expiration/CacheExpiration.mjs ***!
  \*************************************************************/
/*! exports provided: CacheExpiration */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheExpiration", function() { return CacheExpiration; });
/* harmony import */ var _models_CacheTimestampsModel_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/CacheTimestampsModel.mjs */ "./node_modules/workbox-expiration/models/CacheTimestampsModel.mjs");
/* harmony import */ var workbox_core_private_WorkboxError_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.mjs */ "./node_modules/workbox-core/_private/WorkboxError.mjs");
/* harmony import */ var workbox_core_private_assert_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/assert.mjs */ "./node_modules/workbox-core/_private/assert.mjs");
/* harmony import */ var workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/logger.mjs */ "./node_modules/workbox-core/_private/logger.mjs");
/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_version.mjs */ "./node_modules/workbox-expiration/_version.mjs");
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/








/**
 * The `CacheExpiration` class allows you define an expiration and / or
 * limit on the number of responses stored in a
 * [`Cache`](https://developer.mozilla.org/en-US/docs/Web/API/Cache).
 *
 * @memberof workbox.expiration
 */
class CacheExpiration {
  /**
   * To construct a new CacheExpiration instance you must provide at least
   * one of the `config` properties.
   *
   * @param {string} cacheName Name of the cache to apply restrictions to.
   * @param {Object} config
   * @param {number} [config.maxEntries] The maximum number of entries to cache.
   * Entries used the least will be removed as the maximum is reached.
   * @param {number} [config.maxAgeSeconds] The maximum age of an entry before
   * it's treated as stale and removed.
   */
  constructor(cacheName, config = {}) {
    if (true) {
      workbox_core_private_assert_mjs__WEBPACK_IMPORTED_MODULE_2__["assert"].isType(cacheName, 'string', {
        moduleName: 'workbox-expiration',
        className: 'CacheExpiration',
        funcName: 'constructor',
        paramName: 'cacheName',
      });

      if (!(config.maxEntries || config.maxAgeSeconds)) {
        throw new workbox_core_private_WorkboxError_mjs__WEBPACK_IMPORTED_MODULE_1__["WorkboxError"]('max-entries-or-age-required', {
          moduleName: 'workbox-expiration',
          className: 'CacheExpiration',
          funcName: 'constructor',
        });
      }

      if (config.maxEntries) {
        workbox_core_private_assert_mjs__WEBPACK_IMPORTED_MODULE_2__["assert"].isType(config.maxEntries, 'number', {
          moduleName: 'workbox-expiration',
          className: 'CacheExpiration',
          funcName: 'constructor',
          paramName: 'config.maxEntries',
        });

        // TODO: Assert is positive
      }

      if (config.maxAgeSeconds) {
        workbox_core_private_assert_mjs__WEBPACK_IMPORTED_MODULE_2__["assert"].isType(config.maxAgeSeconds, 'number', {
          moduleName: 'workbox-expiration',
          className: 'CacheExpiration',
          funcName: 'constructor',
          paramName: 'config.maxAgeSeconds',
        });

        // TODO: Assert is positive
      }
    }

    this._isRunning = false;
    this._rerunRequested = false;
    this._maxEntries = config.maxEntries;
    this._maxAgeSeconds = config.maxAgeSeconds;
    this._cacheName = cacheName;
    this._timestampModel = new _models_CacheTimestampsModel_mjs__WEBPACK_IMPORTED_MODULE_0__["CacheTimestampsModel"](cacheName);
  }

  /**
   * Expires entries for the given cache and given criteria.
   */
  async expireEntries() {
    if (this._isRunning) {
      this._rerunRequested = true;
      return;
    }
    this._isRunning = true;

    const minTimestamp = this._maxAgeSeconds ?
        Date.now() - (this._maxAgeSeconds * 1000) : undefined;

    const urlsExpired = await this._timestampModel.expireEntries(
        minTimestamp, this._maxEntries);

    // Delete URLs from the cache
    const cache = await caches.open(this._cacheName);
    for (const url of urlsExpired) {
      await cache.delete(url);
    }

    if (true) {
      if (urlsExpired.length > 0) {
        workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_3__["logger"].groupCollapsed(
            `Expired ${urlsExpired.length} ` +
          `${urlsExpired.length === 1 ? 'entry' : 'entries'} and removed ` +
          `${urlsExpired.length === 1 ? 'it' : 'them'} from the ` +
          `'${this._cacheName}' cache.`);
        workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_3__["logger"].log(`Expired the following ${urlsExpired.length === 1 ?
            'URL' : 'URLs'}:`);
        urlsExpired.forEach((url) => workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_3__["logger"].log(`    ${url}`));
        workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_3__["logger"].groupEnd();
      } else {
        workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_3__["logger"].debug(`Cache expiration ran and found no entries to remove.`);
      }
    }

    this._isRunning = false;
    if (this._rerunRequested) {
      this._rerunRequested = false;
      this.expireEntries();
    }
  }

  /**
   * Update the timestamp for the given URL. This ensures the when
   * removing entries based on maximum entries, most recently used
   * is accurate or when expiring, the timestamp is up-to-date.
   *
   * @param {string} url
   */
  async updateTimestamp(url) {
    if (true) {
      workbox_core_private_assert_mjs__WEBPACK_IMPORTED_MODULE_2__["assert"].isType(url, 'string', {
        moduleName: 'workbox-expiration',
        className: 'CacheExpiration',
        funcName: 'updateTimestamp',
        paramName: 'url',
      });
    }

    await this._timestampModel.setTimestamp(url, Date.now());
  }

  /**
   * Can be used to check if a URL has expired or not before it's used.
   *
   * This requires a look up from IndexedDB, so can be slow.
   *
   * Note: This method will not remove the cached entry, call
   * `expireEntries()` to remove indexedDB and Cache entries.
   *
   * @param {string} url
   * @return {boolean}
   */
  async isURLExpired(url) {
    if (true) {
      if (!this._maxAgeSeconds) {
        throw new workbox_core_private_WorkboxError_mjs__WEBPACK_IMPORTED_MODULE_1__["WorkboxError"](`expired-test-without-max-age`, {
          methodName: 'isURLExpired',
          paramName: 'maxAgeSeconds',
        });
      }
    }

    const timestamp = await this._timestampModel.getTimestamp(url);
    const expireOlderThan = Date.now() - (this._maxAgeSeconds * 1000);
    return (timestamp < expireOlderThan);
  }

  /**
   * Removes the IndexedDB object store used to keep track of cache expiration
   * metadata.
   */
  async delete() {
    // Make sure we don't attempt another rerun if we're called in the middle of
    // a cache expiration.
    this._rerunRequested = false;
    await this._timestampModel.expireEntries(Infinity); // Expires all.
  }
}




/***/ }),

/***/ "./node_modules/workbox-expiration/Plugin.mjs":
/*!****************************************************!*\
  !*** ./node_modules/workbox-expiration/Plugin.mjs ***!
  \****************************************************/
/*! exports provided: Plugin */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Plugin", function() { return Plugin; });
/* harmony import */ var workbox_core_private_assert_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.mjs */ "./node_modules/workbox-core/_private/assert.mjs");
/* harmony import */ var workbox_core_private_cacheNames_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.mjs */ "./node_modules/workbox-core/_private/cacheNames.mjs");
/* harmony import */ var workbox_core_private_getFriendlyURL_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.mjs */ "./node_modules/workbox-core/_private/getFriendlyURL.mjs");
/* harmony import */ var workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/logger.mjs */ "./node_modules/workbox-core/_private/logger.mjs");
/* harmony import */ var workbox_core_private_WorkboxError_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.mjs */ "./node_modules/workbox-core/_private/WorkboxError.mjs");
/* harmony import */ var workbox_core_registerQuotaErrorCallback_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/registerQuotaErrorCallback.mjs */ "./node_modules/workbox-core/registerQuotaErrorCallback.mjs");
/* harmony import */ var _CacheExpiration_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CacheExpiration.mjs */ "./node_modules/workbox-expiration/CacheExpiration.mjs");
/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_version.mjs */ "./node_modules/workbox-expiration/_version.mjs");
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/











/**
 * This plugin can be used in the Workbox APIs to regularly enforce a
 * limit on the age and / or the number of cached requests.
 *
 * Whenever a cached request is used or updated, this plugin will look
 * at the used Cache and remove any old or extra requests.
 *
 * When using `maxAgeSeconds`, requests may be used *once* after expiring
 * because the expiration clean up will not have occurred until *after* the
 * cached request has been used. If the request has a "Date" header, then
 * a light weight expiration check is performed and the request will not be
 * used immediately.
 *
 * When using `maxEntries`, the entry least-recently requested will be removed from the cache first.
 *
 * @memberof workbox.expiration
 */
class Plugin {
  /**
   * @param {Object} config
   * @param {number} [config.maxEntries] The maximum number of entries to cache.
   * Entries used the least will be removed as the maximum is reached.
   * @param {number} [config.maxAgeSeconds] The maximum age of an entry before
   * it's treated as stale and removed.
   * @param {boolean} [config.purgeOnQuotaError] Whether to opt this cache in to
   * automatic deletion if the available storage quota has been exceeded.
   */
  constructor(config = {}) {
    if (true) {
      if (!(config.maxEntries || config.maxAgeSeconds)) {
        throw new workbox_core_private_WorkboxError_mjs__WEBPACK_IMPORTED_MODULE_4__["WorkboxError"]('max-entries-or-age-required', {
          moduleName: 'workbox-expiration',
          className: 'Plugin',
          funcName: 'constructor',
        });
      }

      if (config.maxEntries) {
        workbox_core_private_assert_mjs__WEBPACK_IMPORTED_MODULE_0__["assert"].isType(config.maxEntries, 'number', {
          moduleName: 'workbox-expiration',
          className: 'Plugin',
          funcName: 'constructor',
          paramName: 'config.maxEntries',
        });
      }

      if (config.maxAgeSeconds) {
        workbox_core_private_assert_mjs__WEBPACK_IMPORTED_MODULE_0__["assert"].isType(config.maxAgeSeconds, 'number', {
          moduleName: 'workbox-expiration',
          className: 'Plugin',
          funcName: 'constructor',
          paramName: 'config.maxAgeSeconds',
        });
      }
    }

    this._config = config;
    this._maxAgeSeconds = config.maxAgeSeconds;
    this._cacheExpirations = new Map();

    if (config.purgeOnQuotaError) {
      Object(workbox_core_registerQuotaErrorCallback_mjs__WEBPACK_IMPORTED_MODULE_5__["registerQuotaErrorCallback"])(() => this.deleteCacheAndMetadata());
    }
  }

  /**
   * A simple helper method to return a CacheExpiration instance for a given
   * cache name.
   *
   * @param {string} cacheName
   * @return {CacheExpiration}
   *
   * @private
   */
  _getCacheExpiration(cacheName) {
    if (cacheName === workbox_core_private_cacheNames_mjs__WEBPACK_IMPORTED_MODULE_1__["cacheNames"].getRuntimeName()) {
      throw new workbox_core_private_WorkboxError_mjs__WEBPACK_IMPORTED_MODULE_4__["WorkboxError"]('expire-custom-caches-only');
    }

    let cacheExpiration = this._cacheExpirations.get(cacheName);
    if (!cacheExpiration) {
      cacheExpiration = new _CacheExpiration_mjs__WEBPACK_IMPORTED_MODULE_6__["CacheExpiration"](cacheName, this._config);
      this._cacheExpirations.set(cacheName, cacheExpiration);
    }
    return cacheExpiration;
  }

  /**
   * A "lifecycle" callback that will be triggered automatically by the
   * `workbox.strategies` handlers when a `Response` is about to be returned
   * from a [Cache](https://developer.mozilla.org/en-US/docs/Web/API/Cache) to
   * the handler. It allows the `Response` to be inspected for freshness and
   * prevents it from being used if the `Response`'s `Date` header value is
   * older than the configured `maxAgeSeconds`.
   *
   * @param {Object} options
   * @param {string} options.cacheName Name of the cache the response is in.
   * @param {Response} options.cachedResponse The `Response` object that's been
   *     read from a cache and whose freshness should be checked.
   * @return {Response} Either the `cachedResponse`, if it's
   *     fresh, or `null` if the `Response` is older than `maxAgeSeconds`.
   *
   * @private
   */
  cachedResponseWillBeUsed({event, request, cacheName, cachedResponse}) {
    if (!cachedResponse) {
      return null;
    }

    let isFresh = this._isResponseDateFresh(cachedResponse);

    // Expire entries to ensure that even if the expiration date has
    // expired, it'll only be used once.
    const cacheExpiration = this._getCacheExpiration(cacheName);
    cacheExpiration.expireEntries();

    // Update the metadata for the request URL to the current timestamp,
    // but don't `await` it as we don't want to block the response.
    const updateTimestampDone = cacheExpiration.updateTimestamp(request.url);
    if (event) {
      try {
        event.waitUntil(updateTimestampDone);
      } catch (error) {
        if (true) {
          workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_3__["logger"].warn(`Unable to ensure service worker stays alive when ` +
            `updating cache entry for '${Object(workbox_core_private_getFriendlyURL_mjs__WEBPACK_IMPORTED_MODULE_2__["getFriendlyURL"])(event.request.url)}'.`);
        }
      }
    }

    return isFresh ? cachedResponse : null;
  }

  /**
   * @param {Response} cachedResponse
   * @return {boolean}
   *
   * @private
   */
  _isResponseDateFresh(cachedResponse) {
    if (!this._maxAgeSeconds) {
      // We aren't expiring by age, so return true, it's fresh
      return true;
    }

    // Check if the 'date' header will suffice a quick expiration check.
    // See https://github.com/GoogleChromeLabs/sw-toolbox/issues/164 for
    // discussion.
    const dateHeaderTimestamp = this._getDateHeaderTimestamp(cachedResponse);
    if (dateHeaderTimestamp === null) {
      // Unable to parse date, so assume it's fresh.
      return true;
    }

    // If we have a valid headerTime, then our response is fresh iff the
    // headerTime plus maxAgeSeconds is greater than the current time.
    const now = Date.now();
    return dateHeaderTimestamp >= now - (this._maxAgeSeconds * 1000);
  }

  /**
   * This method will extract the data header and parse it into a useful
   * value.
   *
   * @param {Response} cachedResponse
   * @return {number}
   *
   * @private
   */
  _getDateHeaderTimestamp(cachedResponse) {
    if (!cachedResponse.headers.has('date')) {
      return null;
    }

    const dateHeader = cachedResponse.headers.get('date');
    const parsedDate = new Date(dateHeader);
    const headerTime = parsedDate.getTime();

    // If the Date header was invalid for some reason, parsedDate.getTime()
    // will return NaN.
    if (isNaN(headerTime)) {
      return null;
    }

    return headerTime;
  }

  /**
   * A "lifecycle" callback that will be triggered automatically by the
   * `workbox.strategies` handlers when an entry is added to a cache.
   *
   * @param {Object} options
   * @param {string} options.cacheName Name of the cache that was updated.
   * @param {string} options.request The Request for the cached entry.
   *
   * @private
   */
  async cacheDidUpdate({cacheName, request}) {
    if (true) {
      workbox_core_private_assert_mjs__WEBPACK_IMPORTED_MODULE_0__["assert"].isType(cacheName, 'string', {
        moduleName: 'workbox-expiration',
        className: 'Plugin',
        funcName: 'cacheDidUpdate',
        paramName: 'cacheName',
      });
      workbox_core_private_assert_mjs__WEBPACK_IMPORTED_MODULE_0__["assert"].isInstance(request, Request, {
        moduleName: 'workbox-expiration',
        className: 'Plugin',
        funcName: 'cacheDidUpdate',
        paramName: 'request',
      });
    }

    const cacheExpiration = this._getCacheExpiration(cacheName);
    await cacheExpiration.updateTimestamp(request.url);
    await cacheExpiration.expireEntries();
  }


  /**
   * This is a helper method that performs two operations:
   *
   * - Deletes *all* the underlying Cache instances associated with this plugin
   * instance, by calling caches.delete() on your behalf.
   * - Deletes the metadata from IndexedDB used to keep track of expiration
   * details for each Cache instance.
   *
   * When using cache expiration, calling this method is preferable to calling
   * `caches.delete()` directly, since this will ensure that the IndexedDB
   * metadata is also cleanly removed and open IndexedDB instances are deleted.
   *
   * Note that if you're *not* using cache expiration for a given cache, calling
   * `caches.delete()` and passing in the cache's name should be sufficient.
   * There is no Workbox-specific method needed for cleanup in that case.
   */
  async deleteCacheAndMetadata() {
    // Do this one at a time instead of all at once via `Promise.all()` to
    // reduce the chance of inconsistency if a promise rejects.
    for (const [cacheName, cacheExpiration] of this._cacheExpirations) {
      await caches.delete(cacheName);
      await cacheExpiration.delete();
    }

    // Reset this._cacheExpirations to its initial state.
    this._cacheExpirations = new Map();
  }
}




/***/ }),

/***/ "./node_modules/workbox-expiration/_version.mjs":
/*!******************************************************!*\
  !*** ./node_modules/workbox-expiration/_version.mjs ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
try{self['workbox:expiration:4.3.1']&&_()}catch(e){}// eslint-disable-line

/***/ }),

/***/ "./node_modules/workbox-expiration/index.mjs":
/*!***************************************************!*\
  !*** ./node_modules/workbox-expiration/index.mjs ***!
  \***************************************************/
/*! exports provided: CacheExpiration, Plugin */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CacheExpiration_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CacheExpiration.mjs */ "./node_modules/workbox-expiration/CacheExpiration.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CacheExpiration", function() { return _CacheExpiration_mjs__WEBPACK_IMPORTED_MODULE_0__["CacheExpiration"]; });

/* harmony import */ var _Plugin_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Plugin.mjs */ "./node_modules/workbox-expiration/Plugin.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Plugin", function() { return _Plugin_mjs__WEBPACK_IMPORTED_MODULE_1__["Plugin"]; });

/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version.mjs */ "./node_modules/workbox-expiration/_version.mjs");
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * @namespace workbox.expiration
 */




/***/ }),

/***/ "./node_modules/workbox-expiration/models/CacheTimestampsModel.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/workbox-expiration/models/CacheTimestampsModel.mjs ***!
  \*************************************************************************/
/*! exports provided: CacheTimestampsModel */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheTimestampsModel", function() { return CacheTimestampsModel; });
/* harmony import */ var workbox_core_private_DBWrapper_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/DBWrapper.mjs */ "./node_modules/workbox-core/_private/DBWrapper.mjs");
/* harmony import */ var workbox_core_private_deleteDatabase_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/deleteDatabase.mjs */ "./node_modules/workbox-core/_private/deleteDatabase.mjs");
/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_version.mjs */ "./node_modules/workbox-expiration/_version.mjs");
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






const DB_NAME = 'workbox-expiration';
const OBJECT_STORE_NAME = 'cache-entries';

const normalizeURL = (unNormalizedUrl) => {
  const url = new URL(unNormalizedUrl, location);
  url.hash = '';

  return url.href;
};


/**
 * Returns the timestamp model.
 *
 * @private
 */
class CacheTimestampsModel {
  /**
   *
   * @param {string} cacheName
   *
   * @private
   */
  constructor(cacheName) {
    this._cacheName = cacheName;

    this._db = new workbox_core_private_DBWrapper_mjs__WEBPACK_IMPORTED_MODULE_0__["DBWrapper"](DB_NAME, 1, {
      onupgradeneeded: (event) => this._handleUpgrade(event),
    });
  }

  /**
   * Should perform an upgrade of indexedDB.
   *
   * @param {Event} event
   *
   * @private
   */
  _handleUpgrade(event) {
    const db = event.target.result;

    // TODO(philipwalton): EdgeHTML doesn't support arrays as a keyPath, so we
    // have to use the `id` keyPath here and create our own values (a
    // concatenation of `url + cacheName`) instead of simply using
    // `keyPath: ['url', 'cacheName']`, which is supported in other browsers.
    const objStore = db.createObjectStore(OBJECT_STORE_NAME, {keyPath: 'id'});

    // TODO(philipwalton): once we don't have to support EdgeHTML, we can
    // create a single index with the keyPath `['cacheName', 'timestamp']`
    // instead of doing both these indexes.
    objStore.createIndex('cacheName', 'cacheName', {unique: false});
    objStore.createIndex('timestamp', 'timestamp', {unique: false});

    // Previous versions of `workbox-expiration` used `this._cacheName`
    // as the IDBDatabase name.
    Object(workbox_core_private_deleteDatabase_mjs__WEBPACK_IMPORTED_MODULE_1__["deleteDatabase"])(this._cacheName);
  }

  /**
   * @param {string} url
   * @param {number} timestamp
   *
   * @private
   */
  async setTimestamp(url, timestamp) {
    url = normalizeURL(url);

    await this._db.put(OBJECT_STORE_NAME, {
      url,
      timestamp,
      cacheName: this._cacheName,
      // Creating an ID from the URL and cache name won't be necessary once
      // Edge switches to Chromium and all browsers we support work with
      // array keyPaths.
      id: this._getId(url),
    });
  }

  /**
   * Returns the timestamp stored for a given URL.
   *
   * @param {string} url
   * @return {number}
   *
   * @private
   */
  async getTimestamp(url) {
    const entry = await this._db.get(OBJECT_STORE_NAME, this._getId(url));
    return entry.timestamp;
  }

  /**
   * Iterates through all the entries in the object store (from newest to
   * oldest) and removes entries once either `maxCount` is reached or the
   * entry's timestamp is less than `minTimestamp`.
   *
   * @param {number} minTimestamp
   * @param {number} maxCount
   *
   * @private
   */
  async expireEntries(minTimestamp, maxCount) {
    const entriesToDelete = await this._db.transaction(
        OBJECT_STORE_NAME, 'readwrite', (txn, done) => {
          const store = txn.objectStore(OBJECT_STORE_NAME);
          const entriesToDelete = [];
          let entriesNotDeletedCount = 0;

          store.index('timestamp')
              .openCursor(null, 'prev')
              .onsuccess = ({target}) => {
                const cursor = target.result;
                if (cursor) {
                  const result = cursor.value;
                  // TODO(philipwalton): once we can use a multi-key index, we
                  // won't have to check `cacheName` here.
                  if (result.cacheName === this._cacheName) {
                    // Delete an entry if it's older than the max age or
                    // if we already have the max number allowed.
                    if ((minTimestamp && result.timestamp < minTimestamp) ||
                        (maxCount && entriesNotDeletedCount >= maxCount)) {
                      // TODO(philipwalton): we should be able to delete the
                      // entry right here, but doing so causes an iteration
                      // bug in Safari stable (fixed in TP). Instead we can
                      // store the keys of the entries to delete, and then
                      // delete the separate transactions.
                      // https://github.com/GoogleChrome/workbox/issues/1978
                      // cursor.delete();

                      // We only need to return the URL, not the whole entry.
                      entriesToDelete.push(cursor.value);
                    } else {
                      entriesNotDeletedCount++;
                    }
                  }
                  cursor.continue();
                } else {
                  done(entriesToDelete);
                }
              };
        });

    // TODO(philipwalton): once the Safari bug in the following issue is fixed,
    // we should be able to remove this loop and do the entry deletion in the
    // cursor loop above:
    // https://github.com/GoogleChrome/workbox/issues/1978
    const urlsDeleted = [];
    for (const entry of entriesToDelete) {
      await this._db.delete(OBJECT_STORE_NAME, entry.id);
      urlsDeleted.push(entry.url);
    }

    return urlsDeleted;
  }

  /**
   * Takes a URL and returns an ID that will be unique in the object store.
   *
   * @param {string} url
   * @return {string}
   *
   * @private
   */
  _getId(url) {
    // Creating an ID from the URL and cache name won't be necessary once
    // Edge switches to Chromium and all browsers we support work with
    // array keyPaths.
    return this._cacheName + '|' + normalizeURL(url);
  }
}




/***/ }),

/***/ "./node_modules/workbox-precaching/PrecacheController.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/workbox-precaching/PrecacheController.mjs ***!
  \****************************************************************/
/*! exports provided: PrecacheController */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrecacheController", function() { return PrecacheController; });
/* harmony import */ var workbox_core_private_assert_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.mjs */ "./node_modules/workbox-core/_private/assert.mjs");
/* harmony import */ var workbox_core_private_cacheNames_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.mjs */ "./node_modules/workbox-core/_private/cacheNames.mjs");
/* harmony import */ var workbox_core_private_cacheWrapper_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/cacheWrapper.mjs */ "./node_modules/workbox-core/_private/cacheWrapper.mjs");
/* harmony import */ var workbox_core_private_fetchWrapper_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/fetchWrapper.mjs */ "./node_modules/workbox-core/_private/fetchWrapper.mjs");
/* harmony import */ var workbox_core_private_WorkboxError_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.mjs */ "./node_modules/workbox-core/_private/WorkboxError.mjs");
/* harmony import */ var _utils_cleanRedirect_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/cleanRedirect.mjs */ "./node_modules/workbox-precaching/utils/cleanRedirect.mjs");
/* harmony import */ var _utils_createCacheKey_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/createCacheKey.mjs */ "./node_modules/workbox-precaching/utils/createCacheKey.mjs");
/* harmony import */ var _utils_printCleanupDetails_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/printCleanupDetails.mjs */ "./node_modules/workbox-precaching/utils/printCleanupDetails.mjs");
/* harmony import */ var _utils_printInstallDetails_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/printInstallDetails.mjs */ "./node_modules/workbox-precaching/utils/printInstallDetails.mjs");
/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_version.mjs */ "./node_modules/workbox-precaching/_version.mjs");
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/















/**
 * Performs efficient precaching of assets.
 *
 * @memberof module:workbox-precaching
 */
class PrecacheController {
  /**
   * Create a new PrecacheController.
   *
   * @param {string} [cacheName] An optional name for the cache, to override
   * the default precache name.
   */
  constructor(cacheName) {
    this._cacheName = workbox_core_private_cacheNames_mjs__WEBPACK_IMPORTED_MODULE_1__["cacheNames"].getPrecacheName(cacheName);
    this._urlsToCacheKeys = new Map();
  }

  /**
   * This method will add items to the precache list, removing duplicates
   * and ensuring the information is valid.
   *
   * @param {
   * Array<module:workbox-precaching.PrecacheController.PrecacheEntry|string>
   * } entries Array of entries to precache.
   */
  addToCacheList(entries) {
    if (true) {
      workbox_core_private_assert_mjs__WEBPACK_IMPORTED_MODULE_0__["assert"].isArray(entries, {
        moduleName: 'workbox-precaching',
        className: 'PrecacheController',
        funcName: 'addToCacheList',
        paramName: 'entries',
      });
    }

    for (const entry of entries) {
      const {cacheKey, url} = Object(_utils_createCacheKey_mjs__WEBPACK_IMPORTED_MODULE_6__["createCacheKey"])(entry);
      if (this._urlsToCacheKeys.has(url) &&
          this._urlsToCacheKeys.get(url) !== cacheKey) {
        throw new workbox_core_private_WorkboxError_mjs__WEBPACK_IMPORTED_MODULE_4__["WorkboxError"]('add-to-cache-list-conflicting-entries', {
          firstEntry: this._urlsToCacheKeys.get(url),
          secondEntry: cacheKey,
        });
      }
      this._urlsToCacheKeys.set(url, cacheKey);
    }
  }

  /**
   * Precaches new and updated assets. Call this method from the service worker
   * install event.
   *
   * @param {Object} options
   * @param {Event} [options.event] The install event (if needed).
   * @param {Array<Object>} [options.plugins] Plugins to be used for fetching
   * and caching during install.
   * @return {Promise<workbox.precaching.InstallResult>}
   */
  async install({event, plugins} = {}) {
    if (true) {
      if (plugins) {
        workbox_core_private_assert_mjs__WEBPACK_IMPORTED_MODULE_0__["assert"].isArray(plugins, {
          moduleName: 'workbox-precaching',
          className: 'PrecacheController',
          funcName: 'install',
          paramName: 'plugins',
        });
      }
    }

    const urlsToPrecache = [];
    const urlsAlreadyPrecached = [];

    const cache = await caches.open(this._cacheName);
    const alreadyCachedRequests = await cache.keys();
    const alreadyCachedURLs = new Set(alreadyCachedRequests.map(
        (request) => request.url));

    for (const cacheKey of this._urlsToCacheKeys.values()) {
      if (alreadyCachedURLs.has(cacheKey)) {
        urlsAlreadyPrecached.push(cacheKey);
      } else {
        urlsToPrecache.push(cacheKey);
      }
    }

    const precacheRequests = urlsToPrecache.map((url) => {
      return this._addURLToCache({event, plugins, url});
    });
    await Promise.all(precacheRequests);

    if (true) {
      Object(_utils_printInstallDetails_mjs__WEBPACK_IMPORTED_MODULE_8__["printInstallDetails"])(urlsToPrecache, urlsAlreadyPrecached);
    }

    return {
      updatedURLs: urlsToPrecache,
      notUpdatedURLs: urlsAlreadyPrecached,
    };
  }

  /**
   * Deletes assets that are no longer present in the current precache manifest.
   * Call this method from the service worker activate event.
   *
   * @return {Promise<workbox.precaching.CleanupResult>}
   */
  async activate() {
    const cache = await caches.open(this._cacheName);
    const currentlyCachedRequests = await cache.keys();
    const expectedCacheKeys = new Set(this._urlsToCacheKeys.values());

    const deletedURLs = [];
    for (const request of currentlyCachedRequests) {
      if (!expectedCacheKeys.has(request.url)) {
        await cache.delete(request);
        deletedURLs.push(request.url);
      }
    }

    if (true) {
      Object(_utils_printCleanupDetails_mjs__WEBPACK_IMPORTED_MODULE_7__["printCleanupDetails"])(deletedURLs);
    }

    return {deletedURLs};
  }

  /**
   * Requests the entry and saves it to the cache if the response is valid.
   * By default, any response with a status code of less than 400 (including
   * opaque responses) is considered valid.
   *
   * If you need to use custom criteria to determine what's valid and what
   * isn't, then pass in an item in `options.plugins` that implements the
   * `cacheWillUpdate()` lifecycle event.
   *
   * @private
   * @param {Object} options
   * @param {string} options.url The URL to fetch and cache.
   * @param {Event} [options.event] The install event (if passed).
   * @param {Array<Object>} [options.plugins] An array of plugins to apply to
   * fetch and caching.
   */
  async _addURLToCache({url, event, plugins}) {
    const request = new Request(url, {credentials: 'same-origin'});
    let response = await workbox_core_private_fetchWrapper_mjs__WEBPACK_IMPORTED_MODULE_3__["fetchWrapper"].fetch({
      event,
      plugins,
      request,
    });

    // Allow developers to override the default logic about what is and isn't
    // valid by passing in a plugin implementing cacheWillUpdate(), e.g.
    // a workbox.cacheableResponse.Plugin instance.
    let cacheWillUpdateCallback;
    for (const plugin of (plugins || [])) {
      if ('cacheWillUpdate' in plugin) {
        cacheWillUpdateCallback = plugin.cacheWillUpdate.bind(plugin);
      }
    }

    const isValidResponse = cacheWillUpdateCallback ?
      // Use a callback if provided. It returns a truthy value if valid.
      cacheWillUpdateCallback({event, request, response}) :
      // Otherwise, default to considering any response status under 400 valid.
      // This includes, by default, considering opaque responses valid.
      response.status < 400;

    // Consider this a failure, leading to the `install` handler failing, if
    // we get back an invalid response.
    if (!isValidResponse) {
      throw new workbox_core_private_WorkboxError_mjs__WEBPACK_IMPORTED_MODULE_4__["WorkboxError"]('bad-precaching-response', {
        url,
        status: response.status,
      });
    }

    if (response.redirected) {
      response = await Object(_utils_cleanRedirect_mjs__WEBPACK_IMPORTED_MODULE_5__["cleanRedirect"])(response);
    }

    await workbox_core_private_cacheWrapper_mjs__WEBPACK_IMPORTED_MODULE_2__["cacheWrapper"].put({
      event,
      plugins,
      request,
      response,
      cacheName: this._cacheName,
      matchOptions: {
        ignoreSearch: true,
      },
    });
  }

  /**
   * Returns a mapping of a precached URL to the corresponding cache key, taking
   * into account the revision information for the URL.
   *
   * @return {Map<string, string>} A URL to cache key mapping.
   */
  getURLsToCacheKeys() {
    return this._urlsToCacheKeys;
  }

  /**
   * Returns a list of all the URLs that have been precached by the current
   * service worker.
   *
   * @return {Array<string>} The precached URLs.
   */
  getCachedURLs() {
    return [...this._urlsToCacheKeys.keys()];
  }

  /**
   * Returns the cache key used for storing a given URL. If that URL is
   * unversioned, like `/index.html', then the cache key will be the original
   * URL with a search parameter appended to it.
   *
   * @param {string} url A URL whose cache key you want to look up.
   * @return {string} The versioned URL that corresponds to a cache key
   * for the original URL, or undefined if that URL isn't precached.
   */
  getCacheKeyForURL(url) {
    const urlObject = new URL(url, location);
    return this._urlsToCacheKeys.get(urlObject.href);
  }
}




/***/ }),

/***/ "./node_modules/workbox-precaching/_version.mjs":
/*!******************************************************!*\
  !*** ./node_modules/workbox-precaching/_version.mjs ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
try{self['workbox:precaching:4.3.1']&&_()}catch(e){}// eslint-disable-line

/***/ }),

/***/ "./node_modules/workbox-precaching/addPlugins.mjs":
/*!********************************************************!*\
  !*** ./node_modules/workbox-precaching/addPlugins.mjs ***!
  \********************************************************/
/*! exports provided: addPlugins */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPlugins", function() { return addPlugins; });
/* harmony import */ var _utils_precachePlugins_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/precachePlugins.mjs */ "./node_modules/workbox-precaching/utils/precachePlugins.mjs");
/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.mjs */ "./node_modules/workbox-precaching/_version.mjs");
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/





/**
 * Adds plugins to precaching.
 *
 * @param {Array<Object>} newPlugins
 *
 * @alias workbox.precaching.addPlugins
 */
const addPlugins = (newPlugins) => {
  _utils_precachePlugins_mjs__WEBPACK_IMPORTED_MODULE_0__["precachePlugins"].add(newPlugins);
};




/***/ }),

/***/ "./node_modules/workbox-precaching/addRoute.mjs":
/*!******************************************************!*\
  !*** ./node_modules/workbox-precaching/addRoute.mjs ***!
  \******************************************************/
/*! exports provided: addRoute */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addRoute", function() { return addRoute; });
/* harmony import */ var _utils_addFetchListener_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/addFetchListener.mjs */ "./node_modules/workbox-precaching/utils/addFetchListener.mjs");
/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.mjs */ "./node_modules/workbox-precaching/_version.mjs");

/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/





let listenerAdded = false;

/**
 * Add a `fetch` listener to the service worker that will
 * respond to
 * [network requests]{@link https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#Custom_responses_to_requests}
 * with precached assets.
 *
 * Requests for assets that aren't precached, the `FetchEvent` will not be
 * responded to, allowing the event to fall through to other `fetch` event
 * listeners.
 *
 * @param {Object} options
 * @param {string} [options.directoryIndex=index.html] The `directoryIndex` will
 * check cache entries for a URLs ending with '/' to see if there is a hit when
 * appending the `directoryIndex` value.
 * @param {Array<RegExp>} [options.ignoreURLParametersMatching=[/^utm_/]] An
 * array of regex's to remove search params when looking for a cache match.
 * @param {boolean} [options.cleanURLs=true] The `cleanURLs` option will
 * check the cache for the URL with a `.html` added to the end of the end.
 * @param {workbox.precaching~urlManipulation} [options.urlManipulation]
 * This is a function that should take a URL and return an array of
 * alternative URL's that should be checked for precache matches.
 *
 * @alias workbox.precaching.addRoute
 */
const addRoute = (options) => {
  if (!listenerAdded) {
    Object(_utils_addFetchListener_mjs__WEBPACK_IMPORTED_MODULE_0__["addFetchListener"])(options);
    listenerAdded = true;
  }
};


/***/ }),

/***/ "./node_modules/workbox-precaching/cleanupOutdatedCaches.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/workbox-precaching/cleanupOutdatedCaches.mjs ***!
  \*******************************************************************/
/*! exports provided: cleanupOutdatedCaches */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanupOutdatedCaches", function() { return cleanupOutdatedCaches; });
/* harmony import */ var workbox_core_private_cacheNames_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/cacheNames.mjs */ "./node_modules/workbox-core/_private/cacheNames.mjs");
/* harmony import */ var workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.mjs */ "./node_modules/workbox-core/_private/logger.mjs");
/* harmony import */ var _utils_deleteOutdatedCaches_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/deleteOutdatedCaches.mjs */ "./node_modules/workbox-precaching/utils/deleteOutdatedCaches.mjs");
/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.mjs */ "./node_modules/workbox-precaching/_version.mjs");
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * Adds an `activate` event listener which will clean up incompatible
 * precaches that were created by older versions of Workbox.
 *
 * @alias workbox.precaching.cleanupOutdatedCaches
 */
const cleanupOutdatedCaches = () => {
  addEventListener('activate', (event) => {
    const cacheName = workbox_core_private_cacheNames_mjs__WEBPACK_IMPORTED_MODULE_0__["cacheNames"].getPrecacheName();

    event.waitUntil(Object(_utils_deleteOutdatedCaches_mjs__WEBPACK_IMPORTED_MODULE_2__["deleteOutdatedCaches"])(cacheName).then((cachesDeleted) => {
      if (true) {
        if (cachesDeleted.length > 0) {
          workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_1__["logger"].log(`The following out-of-date precaches were cleaned up ` +
              `automatically:`, cachesDeleted);
        }
      }
    }));
  });
};


/***/ }),

/***/ "./node_modules/workbox-precaching/getCacheKeyForURL.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/workbox-precaching/getCacheKeyForURL.mjs ***!
  \***************************************************************/
/*! exports provided: getCacheKeyForURL */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCacheKeyForURL", function() { return getCacheKeyForURL; });
/* harmony import */ var _utils_getOrCreatePrecacheController_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.mjs */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.mjs");
/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.mjs */ "./node_modules/workbox-precaching/_version.mjs");
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/





/**
 * Takes in a URL, and returns the corresponding URL that could be used to
 * lookup the entry in the precache.
 *
 * If a relative URL is provided, the location of the service worker file will
 * be used as the base.
 *
 * For precached entries without revision information, the cache key will be the
 * same as the original URL.
 *
 * For precached entries with revision information, the cache key will be the
 * original URL with the addition of a query parameter used for keeping track of
 * the revision info.
 *
 * @param {string} url The URL whose cache key to look up.
 * @return {string} The cache key that corresponds to that URL.
 *
 * @alias workbox.precaching.getCacheKeyForURL
 */
const getCacheKeyForURL = (url) => {
  const precacheController = Object(_utils_getOrCreatePrecacheController_mjs__WEBPACK_IMPORTED_MODULE_0__["getOrCreatePrecacheController"])();
  return precacheController.getCacheKeyForURL(url);
};


/***/ }),

/***/ "./node_modules/workbox-precaching/index.mjs":
/*!***************************************************!*\
  !*** ./node_modules/workbox-precaching/index.mjs ***!
  \***************************************************/
/*! exports provided: addPlugins, addRoute, cleanupOutdatedCaches, getCacheKeyForURL, precache, precacheAndRoute, PrecacheController */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var workbox_core_private_assert_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.mjs */ "./node_modules/workbox-core/_private/assert.mjs");
/* harmony import */ var _addPlugins_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addPlugins.mjs */ "./node_modules/workbox-precaching/addPlugins.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addPlugins", function() { return _addPlugins_mjs__WEBPACK_IMPORTED_MODULE_1__["addPlugins"]; });

/* harmony import */ var _addRoute_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addRoute.mjs */ "./node_modules/workbox-precaching/addRoute.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addRoute", function() { return _addRoute_mjs__WEBPACK_IMPORTED_MODULE_2__["addRoute"]; });

/* harmony import */ var _cleanupOutdatedCaches_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cleanupOutdatedCaches.mjs */ "./node_modules/workbox-precaching/cleanupOutdatedCaches.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cleanupOutdatedCaches", function() { return _cleanupOutdatedCaches_mjs__WEBPACK_IMPORTED_MODULE_3__["cleanupOutdatedCaches"]; });

/* harmony import */ var _getCacheKeyForURL_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getCacheKeyForURL.mjs */ "./node_modules/workbox-precaching/getCacheKeyForURL.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCacheKeyForURL", function() { return _getCacheKeyForURL_mjs__WEBPACK_IMPORTED_MODULE_4__["getCacheKeyForURL"]; });

/* harmony import */ var _precache_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./precache.mjs */ "./node_modules/workbox-precaching/precache.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "precache", function() { return _precache_mjs__WEBPACK_IMPORTED_MODULE_5__["precache"]; });

/* harmony import */ var _precacheAndRoute_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./precacheAndRoute.mjs */ "./node_modules/workbox-precaching/precacheAndRoute.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "precacheAndRoute", function() { return _precacheAndRoute_mjs__WEBPACK_IMPORTED_MODULE_6__["precacheAndRoute"]; });

/* harmony import */ var _PrecacheController_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PrecacheController.mjs */ "./node_modules/workbox-precaching/PrecacheController.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrecacheController", function() { return _PrecacheController_mjs__WEBPACK_IMPORTED_MODULE_7__["PrecacheController"]; });

/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_version.mjs */ "./node_modules/workbox-precaching/_version.mjs");
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/












if (true) {
  workbox_core_private_assert_mjs__WEBPACK_IMPORTED_MODULE_0__["assert"].isSWEnv('workbox-precaching');
}

/**
 * Most consumers of this module will want to use the
 * [precacheAndRoute()]{@link workbox.precaching.precacheAndRoute}
 * method to add assets to the Cache and respond to network requests with these
 * cached assets.
 *
 * If you require finer grained control, you can use the
 * [PrecacheController]{@link workbox.precaching.PrecacheController}
 * to determine when performed.
 *
 * @namespace workbox.precaching
 */




/***/ }),

/***/ "./node_modules/workbox-precaching/precache.mjs":
/*!******************************************************!*\
  !*** ./node_modules/workbox-precaching/precache.mjs ***!
  \******************************************************/
/*! exports provided: precache */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "precache", function() { return precache; });
/* harmony import */ var workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.mjs */ "./node_modules/workbox-core/_private/logger.mjs");
/* harmony import */ var _utils_getOrCreatePrecacheController_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.mjs */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.mjs");
/* harmony import */ var _utils_precachePlugins_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/precachePlugins.mjs */ "./node_modules/workbox-precaching/utils/precachePlugins.mjs");
/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.mjs */ "./node_modules/workbox-precaching/_version.mjs");
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







const installListener = (event) => {
  const precacheController = Object(_utils_getOrCreatePrecacheController_mjs__WEBPACK_IMPORTED_MODULE_1__["getOrCreatePrecacheController"])();
  const plugins = _utils_precachePlugins_mjs__WEBPACK_IMPORTED_MODULE_2__["precachePlugins"].get();

  event.waitUntil(
      precacheController.install({event, plugins})
          .catch((error) => {
            if (true) {
              workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_0__["logger"].error(`Service worker installation failed. It will ` +
              `be retried automatically during the next navigation.`);
            }
            // Re-throw the error to ensure installation fails.
            throw error;
          })
  );
};

const activateListener = (event) => {
  const precacheController = Object(_utils_getOrCreatePrecacheController_mjs__WEBPACK_IMPORTED_MODULE_1__["getOrCreatePrecacheController"])();
  const plugins = _utils_precachePlugins_mjs__WEBPACK_IMPORTED_MODULE_2__["precachePlugins"].get();

  event.waitUntil(precacheController.activate({event, plugins}));
};

/**
 * Adds items to the precache list, removing any duplicates and
 * stores the files in the
 * ["precache cache"]{@link module:workbox-core.cacheNames} when the service
 * worker installs.
 *
 * This method can be called multiple times.
 *
 * Please note: This method **will not** serve any of the cached files for you.
 * It only precaches files. To respond to a network request you call
 * [addRoute()]{@link module:workbox-precaching.addRoute}.
 *
 * If you have a single array of files to precache, you can just call
 * [precacheAndRoute()]{@link module:workbox-precaching.precacheAndRoute}.
 *
 * @param {Array<Object|string>} entries Array of entries to precache.
 *
 * @alias workbox.precaching.precache
 */
const precache = (entries) => {
  const precacheController = Object(_utils_getOrCreatePrecacheController_mjs__WEBPACK_IMPORTED_MODULE_1__["getOrCreatePrecacheController"])();
  precacheController.addToCacheList(entries);

  if (entries.length > 0) {
    // NOTE: these listeners will only be added once (even if the `precache()`
    // method is called multiple times) because event listeners are implemented
    // as a set, where each listener must be unique.
    addEventListener('install', installListener);
    addEventListener('activate', activateListener);
  }
};


/***/ }),

/***/ "./node_modules/workbox-precaching/precacheAndRoute.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/workbox-precaching/precacheAndRoute.mjs ***!
  \**************************************************************/
/*! exports provided: precacheAndRoute */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "precacheAndRoute", function() { return precacheAndRoute; });
/* harmony import */ var _addRoute_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addRoute.mjs */ "./node_modules/workbox-precaching/addRoute.mjs");
/* harmony import */ var _precache_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./precache.mjs */ "./node_modules/workbox-precaching/precache.mjs");
/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version.mjs */ "./node_modules/workbox-precaching/_version.mjs");
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * This method will add entries to the precache list and add a route to
 * respond to fetch events.
 *
 * This is a convenience method that will call
 * [precache()]{@link module:workbox-precaching.precache} and
 * [addRoute()]{@link module:workbox-precaching.addRoute} in a single call.
 *
 * @param {Array<Object|string>} entries Array of entries to precache.
 * @param {Object} options See
 * [addRoute() options]{@link module:workbox-precaching.addRoute}.
 *
 * @alias workbox.precaching.precacheAndRoute
 */
const precacheAndRoute = (entries, options) => {
  Object(_precache_mjs__WEBPACK_IMPORTED_MODULE_1__["precache"])(entries);
  Object(_addRoute_mjs__WEBPACK_IMPORTED_MODULE_0__["addRoute"])(options);
};


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/addFetchListener.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/addFetchListener.mjs ***!
  \********************************************************************/
/*! exports provided: addFetchListener */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFetchListener", function() { return addFetchListener; });
/* harmony import */ var workbox_core_private_cacheNames_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/cacheNames.mjs */ "./node_modules/workbox-core/_private/cacheNames.mjs");
/* harmony import */ var workbox_core_private_getFriendlyURL_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.mjs */ "./node_modules/workbox-core/_private/getFriendlyURL.mjs");
/* harmony import */ var workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/logger.mjs */ "./node_modules/workbox-core/_private/logger.mjs");
/* harmony import */ var _getCacheKeyForURL_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getCacheKeyForURL.mjs */ "./node_modules/workbox-precaching/utils/getCacheKeyForURL.mjs");
/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_version.mjs */ "./node_modules/workbox-precaching/_version.mjs");
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/








/**
 * Adds a `fetch` listener to the service worker that will
 * respond to
 * [network requests]{@link https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#Custom_responses_to_requests}
 * with precached assets.
 *
 * Requests for assets that aren't precached, the `FetchEvent` will not be
 * responded to, allowing the event to fall through to other `fetch` event
 * listeners.
 *
 * NOTE: when called more than once this method will replace the previously set
 * configuration options. Calling it more than once is not recommended outside
 * of tests.
 *
 * @private
 * @param {Object} options
 * @param {string} [options.directoryIndex=index.html] The `directoryIndex` will
 * check cache entries for a URLs ending with '/' to see if there is a hit when
 * appending the `directoryIndex` value.
 * @param {Array<RegExp>} [options.ignoreURLParametersMatching=[/^utm_/]] An
 * array of regex's to remove search params when looking for a cache match.
 * @param {boolean} [options.cleanURLs=true] The `cleanURLs` option will
 * check the cache for the URL with a `.html` added to the end of the end.
 * @param {workbox.precaching~urlManipulation} [options.urlManipulation]
 * This is a function that should take a URL and return an array of
 * alternative URL's that should be checked for precache matches.
 */
const addFetchListener = ({
  ignoreURLParametersMatching = [/^utm_/],
  directoryIndex = 'index.html',
  cleanURLs = true,
  urlManipulation = null,
} = {}) => {
  const cacheName = workbox_core_private_cacheNames_mjs__WEBPACK_IMPORTED_MODULE_0__["cacheNames"].getPrecacheName();

  addEventListener('fetch', (event) => {
    const precachedURL = Object(_getCacheKeyForURL_mjs__WEBPACK_IMPORTED_MODULE_3__["getCacheKeyForURL"])(event.request.url, {
      cleanURLs,
      directoryIndex,
      ignoreURLParametersMatching,
      urlManipulation,
    });
    if (!precachedURL) {
      if (true) {
        workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_2__["logger"].debug(`Precaching did not find a match for ` +
          Object(workbox_core_private_getFriendlyURL_mjs__WEBPACK_IMPORTED_MODULE_1__["getFriendlyURL"])(event.request.url));
      }
      return;
    }

    let responsePromise = caches.open(cacheName).then((cache) => {
      return cache.match(precachedURL);
    }).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      // Fall back to the network if we don't have a cached response
      // (perhaps due to manual cache cleanup).
      if (true) {
        workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_2__["logger"].warn(`The precached response for ` +
        `${Object(workbox_core_private_getFriendlyURL_mjs__WEBPACK_IMPORTED_MODULE_1__["getFriendlyURL"])(precachedURL)} in ${cacheName} was not found. ` +
        `Falling back to the network instead.`);
      }

      return fetch(precachedURL);
    });

    if (true) {
      responsePromise = responsePromise.then((response) => {
        // Workbox is going to handle the route.
        // print the routing details to the console.
        workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_2__["logger"].groupCollapsed(`Precaching is responding to: ` +
          Object(workbox_core_private_getFriendlyURL_mjs__WEBPACK_IMPORTED_MODULE_1__["getFriendlyURL"])(event.request.url));
        workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_2__["logger"].log(`Serving the precached url: ${precachedURL}`);

        workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_2__["logger"].groupCollapsed(`View request details here.`);
        workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_2__["logger"].log(event.request);
        workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_2__["logger"].groupEnd();

        workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_2__["logger"].groupCollapsed(`View response details here.`);
        workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_2__["logger"].log(response);
        workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_2__["logger"].groupEnd();

        workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_2__["logger"].groupEnd();
        return response;
      });
    }

    event.respondWith(responsePromise);
  });
};


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/cleanRedirect.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/cleanRedirect.mjs ***!
  \*****************************************************************/
/*! exports provided: cleanRedirect */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanRedirect", function() { return cleanRedirect; });
/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.mjs */ "./node_modules/workbox-precaching/_version.mjs");
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * @param {Response} response
 * @return {Response}
 *
 * @private
 * @memberof module:workbox-precaching
 */
async function cleanRedirect(response) {
  const clonedResponse = response.clone();

  // Not all browsers support the Response.body stream, so fall back
  // to reading the entire body into memory as a blob.
  const bodyPromise = 'body' in clonedResponse ?
    Promise.resolve(clonedResponse.body) :
    clonedResponse.blob();

  const body = await bodyPromise;

  // new Response() is happy when passed either a stream or a Blob.
  return new Response(body, {
    headers: clonedResponse.headers,
    status: clonedResponse.status,
    statusText: clonedResponse.statusText,
  });
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/createCacheKey.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/createCacheKey.mjs ***!
  \******************************************************************/
/*! exports provided: createCacheKey */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCacheKey", function() { return createCacheKey; });
/* harmony import */ var workbox_core_private_WorkboxError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.mjs */ "./node_modules/workbox-core/_private/WorkboxError.mjs");
/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.mjs */ "./node_modules/workbox-precaching/_version.mjs");
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/





// Name of the search parameter used to store revision info.
const REVISION_SEARCH_PARAM = '__WB_REVISION__';

/**
 * Converts a manifest entry into a versioned URL suitable for precaching.
 *
 * @param {Object} entry
 * @return {string} A URL with versioning info.
 *
 * @private
 * @memberof module:workbox-precaching
 */
function createCacheKey(entry) {
  if (!entry) {
    throw new workbox_core_private_WorkboxError_mjs__WEBPACK_IMPORTED_MODULE_0__["WorkboxError"]('add-to-cache-list-unexpected-type', {entry});
  }

  // If a precache manifest entry is a string, it's assumed to be a versioned
  // URL, like '/app.abcd1234.js'. Return as-is.
  if (typeof entry === 'string') {
    const urlObject = new URL(entry, location);
    return {
      cacheKey: urlObject.href,
      url: urlObject.href,
    };
  }

  const {revision, url} = entry;
  if (!url) {
    throw new workbox_core_private_WorkboxError_mjs__WEBPACK_IMPORTED_MODULE_0__["WorkboxError"]('add-to-cache-list-unexpected-type', {entry});
  }

  // If there's just a URL and no revision, then it's also assumed to be a
  // versioned URL.
  if (!revision) {
    const urlObject = new URL(url, location);
    return {
      cacheKey: urlObject.href,
      url: urlObject.href,
    };
  }

  // Otherwise, construct a properly versioned URL using the custom Workbox
  // search parameter along with the revision info.
  const originalURL = new URL(url, location);
  const cacheKeyURL = new URL(url, location);
  cacheKeyURL.searchParams.set(REVISION_SEARCH_PARAM, revision);
  return {
    cacheKey: cacheKeyURL.href,
    url: originalURL.href,
  };
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/deleteOutdatedCaches.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/deleteOutdatedCaches.mjs ***!
  \************************************************************************/
/*! exports provided: deleteOutdatedCaches */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteOutdatedCaches", function() { return deleteOutdatedCaches; });
/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.mjs */ "./node_modules/workbox-precaching/_version.mjs");
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



const SUBSTRING_TO_FIND = '-precache-';

/**
 * Cleans up incompatible precaches that were created by older versions of
 * Workbox, by a service worker registered under the current scope.
 *
 * This is meant to be called as part of the `activate` event.
 *
 * This should be safe to use as long as you don't include `substringToFind`
 * (defaulting to `-precache-`) in your non-precache cache names.
 *
 * @param {string} currentPrecacheName The cache name currently in use for
 * precaching. This cache won't be deleted.
 * @param {string} [substringToFind='-precache-'] Cache names which include this
 * substring will be deleted (excluding `currentPrecacheName`).
 * @return {Array<string>} A list of all the cache names that were deleted.
 *
 * @private
 * @memberof module:workbox-precaching
 */
const deleteOutdatedCaches = async (
  currentPrecacheName,
  substringToFind = SUBSTRING_TO_FIND) => {
  const cacheNames = await caches.keys();

  const cacheNamesToDelete = cacheNames.filter((cacheName) => {
    return cacheName.includes(substringToFind) &&
           cacheName.includes(self.registration.scope) &&
           cacheName !== currentPrecacheName;
  });

  await Promise.all(
      cacheNamesToDelete.map((cacheName) => caches.delete(cacheName)));

  return cacheNamesToDelete;
};





/***/ }),

/***/ "./node_modules/workbox-precaching/utils/generateURLVariations.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/generateURLVariations.mjs ***!
  \*************************************************************************/
/*! exports provided: generateURLVariations */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateURLVariations", function() { return generateURLVariations; });
/* harmony import */ var _removeIgnoredSearchParams_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeIgnoredSearchParams.mjs */ "./node_modules/workbox-precaching/utils/removeIgnoredSearchParams.mjs");
/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.mjs */ "./node_modules/workbox-precaching/_version.mjs");
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/





/**
 * Generator function that yields possible variations on the original URL to
 * check, one at a time.
 *
 * @param {string} url
 * @param {Object} options
 *
 * @private
 * @memberof module:workbox-precaching
 */
function* generateURLVariations(url, {
  ignoreURLParametersMatching,
  directoryIndex,
  cleanURLs,
  urlManipulation,
} = {}) {
  const urlObject = new URL(url, location);
  urlObject.hash = '';
  yield urlObject.href;

  const urlWithoutIgnoredParams = Object(_removeIgnoredSearchParams_mjs__WEBPACK_IMPORTED_MODULE_0__["removeIgnoredSearchParams"])(
      urlObject, ignoreURLParametersMatching);
  yield urlWithoutIgnoredParams.href;

  if (directoryIndex && urlWithoutIgnoredParams.pathname.endsWith('/')) {
    const directoryURL = new URL(urlWithoutIgnoredParams);
    directoryURL.pathname += directoryIndex;
    yield directoryURL.href;
  }

  if (cleanURLs) {
    const cleanURL = new URL(urlWithoutIgnoredParams);
    cleanURL.pathname += '.html';
    yield cleanURL.href;
  }

  if (urlManipulation) {
    const additionalURLs = urlManipulation({url: urlObject});
    for (const urlToAttempt of additionalURLs) {
      yield urlToAttempt.href;
    }
  }
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/getCacheKeyForURL.mjs":
/*!*********************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/getCacheKeyForURL.mjs ***!
  \*********************************************************************/
/*! exports provided: getCacheKeyForURL */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCacheKeyForURL", function() { return getCacheKeyForURL; });
/* harmony import */ var _getOrCreatePrecacheController_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getOrCreatePrecacheController.mjs */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.mjs");
/* harmony import */ var _generateURLVariations_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateURLVariations.mjs */ "./node_modules/workbox-precaching/utils/generateURLVariations.mjs");
/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_version.mjs */ "./node_modules/workbox-precaching/_version.mjs");
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/





/**
 * This function will take the request URL and manipulate it based on the
 * configuration options.
 *
 * @param {string} url
 * @param {Object} options
 * @return {string} Returns the URL in the cache that matches the request,
 * if possible.
 *
 * @private
 */
const getCacheKeyForURL = (url, options) => {
  const precacheController = Object(_getOrCreatePrecacheController_mjs__WEBPACK_IMPORTED_MODULE_0__["getOrCreatePrecacheController"])();

  const urlsToCacheKeys = precacheController.getURLsToCacheKeys();
  for (const possibleURL of Object(_generateURLVariations_mjs__WEBPACK_IMPORTED_MODULE_1__["generateURLVariations"])(url, options)) {
    const possibleCacheKey = urlsToCacheKeys.get(possibleURL);
    if (possibleCacheKey) {
      return possibleCacheKey;
    }
  }
};


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.mjs ***!
  \*********************************************************************************/
/*! exports provided: getOrCreatePrecacheController */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrCreatePrecacheController", function() { return getOrCreatePrecacheController; });
/* harmony import */ var _PrecacheController_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PrecacheController.mjs */ "./node_modules/workbox-precaching/PrecacheController.mjs");
/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.mjs */ "./node_modules/workbox-precaching/_version.mjs");
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/





let precacheController;

/**
 * @return {PrecacheController}
 * @private
 */
const getOrCreatePrecacheController = () => {
  if (!precacheController) {
    precacheController = new _PrecacheController_mjs__WEBPACK_IMPORTED_MODULE_0__["PrecacheController"]();
  }
  return precacheController;
};


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/precachePlugins.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/precachePlugins.mjs ***!
  \*******************************************************************/
/*! exports provided: precachePlugins */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "precachePlugins", function() { return precachePlugins; });
/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.mjs */ "./node_modules/workbox-precaching/_version.mjs");
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




const plugins = [];

const precachePlugins = {
  /*
   * @return {Array}
   * @private
   */
  get() {
    return plugins;
  },

  /*
   * @param {Array} newPlugins
   * @private
   */
  add(newPlugins) {
    plugins.push(...newPlugins);
  },
};


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/printCleanupDetails.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/printCleanupDetails.mjs ***!
  \***********************************************************************/
/*! exports provided: printCleanupDetails */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printCleanupDetails", function() { return printCleanupDetails; });
/* harmony import */ var workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.mjs */ "./node_modules/workbox-core/_private/logger.mjs");
/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.mjs */ "./node_modules/workbox-precaching/_version.mjs");
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/





const logGroup = (groupTitle, deletedURLs) => {
  workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_0__["logger"].groupCollapsed(groupTitle);

  for (const url of deletedURLs) {
    workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_0__["logger"].log(url);
  }

  workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_0__["logger"].groupEnd();
};

/**
 * @param {Array<string>} deletedURLs
 *
 * @private
 * @memberof module:workbox-precaching
 */
function printCleanupDetails(deletedURLs) {
  const deletionCount = deletedURLs.length;
  if (deletionCount > 0) {
    workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_0__["logger"].groupCollapsed(`During precaching cleanup, ` +
        `${deletionCount} cached ` +
        `request${deletionCount === 1 ? ' was' : 's were'} deleted.`);
    logGroup('Deleted Cache Requests', deletedURLs);
    workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_0__["logger"].groupEnd();
  }
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/printInstallDetails.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/printInstallDetails.mjs ***!
  \***********************************************************************/
/*! exports provided: printInstallDetails */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printInstallDetails", function() { return printInstallDetails; });
/* harmony import */ var workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.mjs */ "./node_modules/workbox-core/_private/logger.mjs");
/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.mjs */ "./node_modules/workbox-precaching/_version.mjs");
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/





/**
 * @param {string} groupTitle
 * @param {Array<string>} urls
 *
 * @private
 */
function _nestedGroup(groupTitle, urls) {
  if (urls.length === 0) {
    return;
  }

  workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_0__["logger"].groupCollapsed(groupTitle);

  for (const url of urls) {
    workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_0__["logger"].log(url);
  }

  workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_0__["logger"].groupEnd();
}

/**
 * @param {Array<string>} urlsToPrecache
 * @param {Array<string>} urlsAlreadyPrecached
 *
 * @private
 * @memberof module:workbox-precaching
 */
function printInstallDetails(urlsToPrecache, urlsAlreadyPrecached) {
  const precachedCount = urlsToPrecache.length;
  const alreadyPrecachedCount = urlsAlreadyPrecached.length;

  if (precachedCount || alreadyPrecachedCount) {
    let message =
        `Precaching ${precachedCount} file${precachedCount === 1 ? '' : 's'}.`;

    if (alreadyPrecachedCount > 0) {
      message += ` ${alreadyPrecachedCount} ` +
        `file${alreadyPrecachedCount === 1 ? ' is' : 's are'} already cached.`;
    }

    workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_0__["logger"].groupCollapsed(message);

    _nestedGroup(`View newly precached URLs.`, urlsToPrecache);
    _nestedGroup(`View previously precached URLs.`, urlsAlreadyPrecached);
    workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_0__["logger"].groupEnd();
  }
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/removeIgnoredSearchParams.mjs":
/*!*****************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/removeIgnoredSearchParams.mjs ***!
  \*****************************************************************************/
/*! exports provided: removeIgnoredSearchParams */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeIgnoredSearchParams", function() { return removeIgnoredSearchParams; });
/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.mjs */ "./node_modules/workbox-precaching/_version.mjs");
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * Removes any URL search parameters that should be ignored.
 *
 * @param {URL} urlObject The original URL.
 * @param {Array<RegExp>} ignoreURLParametersMatching RegExps to test against
 * each search parameter name. Matches mean that the search parameter should be
 * ignored.
 * @return {URL} The URL with any ignored search parameters removed.
 *
 * @private
 * @memberof module:workbox-precaching
 */
function removeIgnoredSearchParams(urlObject,
    ignoreURLParametersMatching) {
  // Convert the iterable into an array at the start of the loop to make sure
  // deletion doesn't mess up iteration.
  for (const paramName of [...urlObject.searchParams.keys()]) {
    if (ignoreURLParametersMatching.some((regExp) => regExp.test(paramName))) {
      urlObject.searchParams.delete(paramName);
    }
  }

  return urlObject;
}


/***/ }),

/***/ "./node_modules/workbox-routing/NavigationRoute.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/workbox-routing/NavigationRoute.mjs ***!
  \**********************************************************/
/*! exports provided: NavigationRoute */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationRoute", function() { return NavigationRoute; });
/* harmony import */ var workbox_core_private_assert_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.mjs */ "./node_modules/workbox-core/_private/assert.mjs");
/* harmony import */ var workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.mjs */ "./node_modules/workbox-core/_private/logger.mjs");
/* harmony import */ var _Route_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Route.mjs */ "./node_modules/workbox-routing/Route.mjs");
/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.mjs */ "./node_modules/workbox-routing/_version.mjs");
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * NavigationRoute makes it easy to create a [Route]{@link
 * workbox.routing.Route} that matches for browser
 * [navigation requests]{@link https://developers.google.com/web/fundamentals/primers/service-workers/high-performance-loading#first_what_are_navigation_requests}.
 *
 * It will only match incoming Requests whose
 * [`mode`]{@link https://fetch.spec.whatwg.org/#concept-request-mode}
 * is set to `navigate`.
 *
 * You can optionally only apply this route to a subset of navigation requests
 * by using one or both of the `blacklist` and `whitelist` parameters.
 *
 * @memberof workbox.routing
 * @extends workbox.routing.Route
 */
class NavigationRoute extends _Route_mjs__WEBPACK_IMPORTED_MODULE_2__["Route"] {
  /**
   * If both `blacklist` and `whiltelist` are provided, the `blacklist` will
   * take precedence and the request will not match this route.
   *
   * The regular expressions in `whitelist` and `blacklist`
   * are matched against the concatenated
   * [`pathname`]{@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/pathname}
   * and [`search`]{@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/search}
   * portions of the requested URL.
   *
   * @param {workbox.routing.Route~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   * @param {Object} options
   * @param {Array<RegExp>} [options.blacklist] If any of these patterns match,
   * the route will not handle the request (even if a whitelist RegExp matches).
   * @param {Array<RegExp>} [options.whitelist=[/./]] If any of these patterns
   * match the URL's pathname and search parameter, the route will handle the
   * request (assuming the blacklist doesn't match).
   */
  constructor(handler, {whitelist = [/./], blacklist = []} = {}) {
    if (true) {
      workbox_core_private_assert_mjs__WEBPACK_IMPORTED_MODULE_0__["assert"].isArrayOfClass(whitelist, RegExp, {
        moduleName: 'workbox-routing',
        className: 'NavigationRoute',
        funcName: 'constructor',
        paramName: 'options.whitelist',
      });
      workbox_core_private_assert_mjs__WEBPACK_IMPORTED_MODULE_0__["assert"].isArrayOfClass(blacklist, RegExp, {
        moduleName: 'workbox-routing',
        className: 'NavigationRoute',
        funcName: 'constructor',
        paramName: 'options.blacklist',
      });
    }

    super((options) => this._match(options), handler);

    this._whitelist = whitelist;
    this._blacklist = blacklist;
  }

  /**
   * Routes match handler.
   *
   * @param {Object} options
   * @param {URL} options.url
   * @param {Request} options.request
   * @return {boolean}
   *
   * @private
   */
  _match({url, request}) {
    if (request.mode !== 'navigate') {
      return false;
    }

    const pathnameAndSearch = url.pathname + url.search;

    for (const regExp of this._blacklist) {
      if (regExp.test(pathnameAndSearch)) {
        if (true) {
          workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_1__["logger"].log(`The navigation route is not being used, since the ` +
              `URL matches this blacklist pattern: ${regExp}`);
        }
        return false;
      }
    }

    if (this._whitelist.some((regExp) => regExp.test(pathnameAndSearch))) {
      if (true) {
        workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_1__["logger"].debug(`The navigation route is being used.`);
      }
      return true;
    }

    if (true) {
      workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_1__["logger"].log(`The navigation route is not being used, since the URL ` +
          `being navigated to doesn't match the whitelist.`);
    }
    return false;
  }
}




/***/ }),

/***/ "./node_modules/workbox-routing/RegExpRoute.mjs":
/*!******************************************************!*\
  !*** ./node_modules/workbox-routing/RegExpRoute.mjs ***!
  \******************************************************/
/*! exports provided: RegExpRoute */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegExpRoute", function() { return RegExpRoute; });
/* harmony import */ var workbox_core_private_assert_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.mjs */ "./node_modules/workbox-core/_private/assert.mjs");
/* harmony import */ var workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.mjs */ "./node_modules/workbox-core/_private/logger.mjs");
/* harmony import */ var _Route_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Route.mjs */ "./node_modules/workbox-routing/Route.mjs");
/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.mjs */ "./node_modules/workbox-routing/_version.mjs");
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * RegExpRoute makes it easy to create a regular expression based
 * [Route]{@link workbox.routing.Route}.
 *
 * For same-origin requests the RegExp only needs to match part of the URL. For
 * requests against third-party servers, you must define a RegExp that matches
 * the start of the URL.
 *
 * [See the module docs for info.]{@link https://developers.google.com/web/tools/workbox/modules/workbox-routing}
 *
 * @memberof workbox.routing
 * @extends workbox.routing.Route
 */
class RegExpRoute extends _Route_mjs__WEBPACK_IMPORTED_MODULE_2__["Route"] {
  /**
   * If the regulard expression contains
   * [capture groups]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#grouping-back-references},
   * th ecaptured values will be passed to the
   * [handler's]{@link workbox.routing.Route~handlerCallback} `params`
   * argument.
   *
   * @param {RegExp} regExp The regular expression to match against URLs.
   * @param {workbox.routing.Route~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   * @param {string} [method='GET'] The HTTP method to match the Route
   * against.
   */
  constructor(regExp, handler, method) {
    if (true) {
      workbox_core_private_assert_mjs__WEBPACK_IMPORTED_MODULE_0__["assert"].isInstance(regExp, RegExp, {
        moduleName: 'workbox-routing',
        className: 'RegExpRoute',
        funcName: 'constructor',
        paramName: 'pattern',
      });
    }

    const match = ({url}) => {
      const result = regExp.exec(url.href);

      // Return null immediately if there's no match.
      if (!result) {
        return null;
      }

      // Require that the match start at the first character in the URL string
      // if it's a cross-origin request.
      // See https://github.com/GoogleChrome/workbox/issues/281 for the context
      // behind this behavior.
      if ((url.origin !== location.origin) && (result.index !== 0)) {
        if (true) {
          workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_1__["logger"].debug(
              `The regular expression '${regExp}' only partially matched ` +
            `against the cross-origin URL '${url}'. RegExpRoute's will only ` +
            `handle cross-origin requests if they match the entire URL.`
          );
        }

        return null;
      }

      // If the route matches, but there aren't any capture groups defined, then
      // this will return [], which is truthy and therefore sufficient to
      // indicate a match.
      // If there are capture groups, then it will return their values.
      return result.slice(1);
    };

    super(match, handler, method);
  }
}




/***/ }),

/***/ "./node_modules/workbox-routing/Route.mjs":
/*!************************************************!*\
  !*** ./node_modules/workbox-routing/Route.mjs ***!
  \************************************************/
/*! exports provided: Route */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return Route; });
/* harmony import */ var workbox_core_private_assert_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.mjs */ "./node_modules/workbox-core/_private/assert.mjs");
/* harmony import */ var _utils_constants_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/constants.mjs */ "./node_modules/workbox-routing/utils/constants.mjs");
/* harmony import */ var _utils_normalizeHandler_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/normalizeHandler.mjs */ "./node_modules/workbox-routing/utils/normalizeHandler.mjs");
/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.mjs */ "./node_modules/workbox-routing/_version.mjs");
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * A `Route` consists of a pair of callback functions, "match" and "handler".
 * The "match" callback determine if a route should be used to "handle" a
 * request by returning a non-falsy value if it can. The "handler" callback
 * is called when there is a match and should return a Promise that resolves
 * to a `Response`.
 *
 * @memberof workbox.routing
 */
class Route {
  /**
   * Constructor for Route class.
   *
   * @param {workbox.routing.Route~matchCallback} match
   * A callback function that determines whether the route matches a given
   * `fetch` event by returning a non-falsy value.
   * @param {workbox.routing.Route~handlerCallback} handler A callback
   * function that returns a Promise resolving to a Response.
   * @param {string} [method='GET'] The HTTP method to match the Route
   * against.
   */
  constructor(match, handler, method) {
    if (true) {
      workbox_core_private_assert_mjs__WEBPACK_IMPORTED_MODULE_0__["assert"].isType(match, 'function', {
        moduleName: 'workbox-routing',
        className: 'Route',
        funcName: 'constructor',
        paramName: 'match',
      });

      if (method) {
        workbox_core_private_assert_mjs__WEBPACK_IMPORTED_MODULE_0__["assert"].isOneOf(method, _utils_constants_mjs__WEBPACK_IMPORTED_MODULE_1__["validMethods"], {paramName: 'method'});
      }
    }

    // These values are referenced directly by Router so cannot be
    // altered by minifification.
    this.handler = Object(_utils_normalizeHandler_mjs__WEBPACK_IMPORTED_MODULE_2__["normalizeHandler"])(handler);
    this.match = match;
    this.method = method || _utils_constants_mjs__WEBPACK_IMPORTED_MODULE_1__["defaultMethod"];
  }
}




/***/ }),

/***/ "./node_modules/workbox-routing/Router.mjs":
/*!*************************************************!*\
  !*** ./node_modules/workbox-routing/Router.mjs ***!
  \*************************************************/
/*! exports provided: Router */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return Router; });
/* harmony import */ var workbox_core_private_assert_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.mjs */ "./node_modules/workbox-core/_private/assert.mjs");
/* harmony import */ var workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.mjs */ "./node_modules/workbox-core/_private/logger.mjs");
/* harmony import */ var workbox_core_private_WorkboxError_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.mjs */ "./node_modules/workbox-core/_private/WorkboxError.mjs");
/* harmony import */ var workbox_core_private_getFriendlyURL_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.mjs */ "./node_modules/workbox-core/_private/getFriendlyURL.mjs");
/* harmony import */ var _utils_normalizeHandler_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/normalizeHandler.mjs */ "./node_modules/workbox-routing/utils/normalizeHandler.mjs");
/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.mjs */ "./node_modules/workbox-routing/_version.mjs");
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/









/**
 * The Router can be used to process a FetchEvent through one or more
 * [Routes]{@link workbox.routing.Route} responding  with a Request if
 * a matching route exists.
 *
 * If no route matches a given a request, the Router will use a "default"
 * handler if one is defined.
 *
 * Should the matching Route throw an error, the Router will use a "catch"
 * handler if one is defined to gracefully deal with issues and respond with a
 * Request.
 *
 * If a request matches multiple routes, the **earliest** registered route will
 * be used to respond to the request.
 *
 * @memberof workbox.routing
 */
class Router {
  /**
   * Initializes a new Router.
   */
  constructor() {
    this._routes = new Map();
  }

  /**
   * @return {Map<string, Array<workbox.routing.Route>>} routes A `Map` of HTTP
   * method name ('GET', etc.) to an array of all the corresponding `Route`
   * instances that are registered.
   */
  get routes() {
    return this._routes;
  }

  /**
   * Adds a fetch event listener to respond to events when a route matches
   * the event's request.
   */
  addFetchListener() {
    self.addEventListener('fetch', (event) => {
      const {request} = event;
      const responsePromise = this.handleRequest({request, event});
      if (responsePromise) {
        event.respondWith(responsePromise);
      }
    });
  }

  /**
   * Adds a message event listener for URLs to cache from the window.
   * This is useful to cache resources loaded on the page prior to when the
   * service worker started controlling it.
   *
   * The format of the message data sent from the window should be as follows.
   * Where the `urlsToCache` array may consist of URL strings or an array of
   * URL string + `requestInit` object (the same as you'd pass to `fetch()`).
   *
   * ```
   * {
   *   type: 'CACHE_URLS',
   *   payload: {
   *     urlsToCache: [
   *       './script1.js',
   *       './script2.js',
   *       ['./script3.js', {mode: 'no-cors'}],
   *     ],
   *   },
   * }
   * ```
   */
  addCacheListener() {
    self.addEventListener('message', async (event) => {
      if (event.data && event.data.type === 'CACHE_URLS') {
        const {payload} = event.data;

        if (true) {
          workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_1__["logger"].debug(`Caching URLs from the window`, payload.urlsToCache);
        }

        const requestPromises = Promise.all(payload.urlsToCache.map((entry) => {
          if (typeof entry === 'string') {
            entry = [entry];
          }

          const request = new Request(...entry);
          return this.handleRequest({request});
        }));

        event.waitUntil(requestPromises);

        // If a MessageChannel was used, reply to the message on success.
        if (event.ports && event.ports[0]) {
          await requestPromises;
          event.ports[0].postMessage(true);
        }
      }
    });
  }

  /**
   * Apply the routing rules to a FetchEvent object to get a Response from an
   * appropriate Route's handler.
   *
   * @param {Object} options
   * @param {Request} options.request The request to handle (this is usually
   *     from a fetch event, but it does not have to be).
   * @param {FetchEvent} [options.event] The event that triggered the request,
   *     if applicable.
   * @return {Promise<Response>|undefined} A promise is returned if a
   *     registered route can handle the request. If there is no matching
   *     route and there's no `defaultHandler`, `undefined` is returned.
   */
  handleRequest({request, event}) {
    if (true) {
      workbox_core_private_assert_mjs__WEBPACK_IMPORTED_MODULE_0__["assert"].isInstance(request, Request, {
        moduleName: 'workbox-routing',
        className: 'Router',
        funcName: 'handleRequest',
        paramName: 'options.request',
      });
    }

    const url = new URL(request.url, location);
    if (!url.protocol.startsWith('http')) {
      if (true) {
        workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_1__["logger"].debug(
            `Workbox Router only supports URLs that start with 'http'.`);
      }
      return;
    }

    let {params, route} = this.findMatchingRoute({url, request, event});
    let handler = route && route.handler;

    let debugMessages = [];
    if (true) {
      if (handler) {
        debugMessages.push([
          `Found a route to handle this request:`, route,
        ]);

        if (params) {
          debugMessages.push([
            `Passing the following params to the route's handler:`, params,
          ]);
        }
      }
    }

    // If we don't have a handler because there was no matching route, then
    // fall back to defaultHandler if that's defined.
    if (!handler && this._defaultHandler) {
      if (true) {
        debugMessages.push(`Failed to find a matching route. Falling ` +
          `back to the default handler.`);

        // This is used for debugging in logs in the case of an error.
        route = '[Default Handler]';
      }
      handler = this._defaultHandler;
    }

    if (!handler) {
      if (true) {
        // No handler so Workbox will do nothing. If logs is set of debug
        // i.e. verbose, we should print out this information.
        workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_1__["logger"].debug(`No route found for: ${Object(workbox_core_private_getFriendlyURL_mjs__WEBPACK_IMPORTED_MODULE_3__["getFriendlyURL"])(url)}`);
      }
      return;
    }

    if (true) {
      // We have a handler, meaning Workbox is going to handle the route.
      // print the routing details to the console.
      workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_1__["logger"].groupCollapsed(`Router is responding to: ${Object(workbox_core_private_getFriendlyURL_mjs__WEBPACK_IMPORTED_MODULE_3__["getFriendlyURL"])(url)}`);
      debugMessages.forEach((msg) => {
        if (Array.isArray(msg)) {
          workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_1__["logger"].log(...msg);
        } else {
          workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_1__["logger"].log(msg);
        }
      });

      // The Request and Response objects contains a great deal of information,
      // hide it under a group in case developers want to see it.
      workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_1__["logger"].groupCollapsed(`View request details here.`);
      workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_1__["logger"].log(request);
      workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_1__["logger"].groupEnd();

      workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_1__["logger"].groupEnd();
    }

    // Wrap in try and catch in case the handle method throws a synchronous
    // error. It should still callback to the catch handler.
    let responsePromise;
    try {
      responsePromise = handler.handle({url, request, event, params});
    } catch (err) {
      responsePromise = Promise.reject(err);
    }

    if (responsePromise && this._catchHandler) {
      responsePromise = responsePromise.catch((err) => {
        if (true) {
          // Still include URL here as it will be async from the console group
          // and may not make sense without the URL
          workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_1__["logger"].groupCollapsed(`Error thrown when responding to: ` +
            ` ${Object(workbox_core_private_getFriendlyURL_mjs__WEBPACK_IMPORTED_MODULE_3__["getFriendlyURL"])(url)}. Falling back to Catch Handler.`);
          workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_1__["logger"].error(`Error thrown by:`, route);
          workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_1__["logger"].error(err);
          workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_1__["logger"].groupEnd();
        }
        return this._catchHandler.handle({url, event, err});
      });
    }

    return responsePromise;
  }

  /**
   * Checks a request and URL (and optionally an event) against the list of
   * registered routes, and if there's a match, returns the corresponding
   * route along with any params generated by the match.
   *
   * @param {Object} options
   * @param {URL} options.url
   * @param {Request} options.request The request to match.
   * @param {FetchEvent} [options.event] The corresponding event (unless N/A).
   * @return {Object} An object with `route` and `params` properties.
   *     They are populated if a matching route was found or `undefined`
   *     otherwise.
   */
  findMatchingRoute({url, request, event}) {
    if (true) {
      workbox_core_private_assert_mjs__WEBPACK_IMPORTED_MODULE_0__["assert"].isInstance(url, URL, {
        moduleName: 'workbox-routing',
        className: 'Router',
        funcName: 'findMatchingRoute',
        paramName: 'options.url',
      });
      workbox_core_private_assert_mjs__WEBPACK_IMPORTED_MODULE_0__["assert"].isInstance(request, Request, {
        moduleName: 'workbox-routing',
        className: 'Router',
        funcName: 'findMatchingRoute',
        paramName: 'options.request',
      });
    }

    const routes = this._routes.get(request.method) || [];
    for (const route of routes) {
      let params;
      let matchResult = route.match({url, request, event});
      if (matchResult) {
        if (Array.isArray(matchResult) && matchResult.length > 0) {
          // Instead of passing an empty array in as params, use undefined.
          params = matchResult;
        } else if ((matchResult.constructor === Object &&
            Object.keys(matchResult).length > 0)) {
          // Instead of passing an empty object in as params, use undefined.
          params = matchResult;
        }

        // Return early if have a match.
        return {route, params};
      }
    }
    // If no match was found above, return and empty object.
    return {};
  }

  /**
   * Define a default `handler` that's called when no routes explicitly
   * match the incoming request.
   *
   * Without a default handler, unmatched requests will go against the
   * network as if there were no service worker present.
   *
   * @param {workbox.routing.Route~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   */
  setDefaultHandler(handler) {
    this._defaultHandler = Object(_utils_normalizeHandler_mjs__WEBPACK_IMPORTED_MODULE_4__["normalizeHandler"])(handler);
  }

  /**
   * If a Route throws an error while handling a request, this `handler`
   * will be called and given a chance to provide a response.
   *
   * @param {workbox.routing.Route~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   */
  setCatchHandler(handler) {
    this._catchHandler = Object(_utils_normalizeHandler_mjs__WEBPACK_IMPORTED_MODULE_4__["normalizeHandler"])(handler);
  }

  /**
   * Registers a route with the router.
   *
   * @param {workbox.routing.Route} route The route to register.
   */
  registerRoute(route) {
    if (true) {
      workbox_core_private_assert_mjs__WEBPACK_IMPORTED_MODULE_0__["assert"].isType(route, 'object', {
        moduleName: 'workbox-routing',
        className: 'Router',
        funcName: 'registerRoute',
        paramName: 'route',
      });

      workbox_core_private_assert_mjs__WEBPACK_IMPORTED_MODULE_0__["assert"].hasMethod(route, 'match', {
        moduleName: 'workbox-routing',
        className: 'Router',
        funcName: 'registerRoute',
        paramName: 'route',
      });

      workbox_core_private_assert_mjs__WEBPACK_IMPORTED_MODULE_0__["assert"].isType(route.handler, 'object', {
        moduleName: 'workbox-routing',
        className: 'Router',
        funcName: 'registerRoute',
        paramName: 'route',
      });

      workbox_core_private_assert_mjs__WEBPACK_IMPORTED_MODULE_0__["assert"].hasMethod(route.handler, 'handle', {
        moduleName: 'workbox-routing',
        className: 'Router',
        funcName: 'registerRoute',
        paramName: 'route.handler',
      });

      workbox_core_private_assert_mjs__WEBPACK_IMPORTED_MODULE_0__["assert"].isType(route.method, 'string', {
        moduleName: 'workbox-routing',
        className: 'Router',
        funcName: 'registerRoute',
        paramName: 'route.method',
      });
    }

    if (!this._routes.has(route.method)) {
      this._routes.set(route.method, []);
    }

    // Give precedence to all of the earlier routes by adding this additional
    // route to the end of the array.
    this._routes.get(route.method).push(route);
  }

  /**
   * Unregisters a route with the router.
   *
   * @param {workbox.routing.Route} route The route to unregister.
   */
  unregisterRoute(route) {
    if (!this._routes.has(route.method)) {
      throw new workbox_core_private_WorkboxError_mjs__WEBPACK_IMPORTED_MODULE_2__["WorkboxError"](
          'unregister-route-but-not-found-with-method', {
            method: route.method,
          }
      );
    }

    const routeIndex = this._routes.get(route.method).indexOf(route);
    if (routeIndex > -1) {
      this._routes.get(route.method).splice(routeIndex, 1);
    } else {
      throw new workbox_core_private_WorkboxError_mjs__WEBPACK_IMPORTED_MODULE_2__["WorkboxError"]('unregister-route-route-not-registered');
    }
  }
}




/***/ }),

/***/ "./node_modules/workbox-routing/_version.mjs":
/*!***************************************************!*\
  !*** ./node_modules/workbox-routing/_version.mjs ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
try{self['workbox:routing:4.3.1']&&_()}catch(e){}// eslint-disable-line

/***/ }),

/***/ "./node_modules/workbox-routing/index.mjs":
/*!************************************************!*\
  !*** ./node_modules/workbox-routing/index.mjs ***!
  \************************************************/
/*! exports provided: NavigationRoute, RegExpRoute, registerNavigationRoute, registerRoute, Route, Router, setCatchHandler, setDefaultHandler */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var workbox_core_private_assert_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.mjs */ "./node_modules/workbox-core/_private/assert.mjs");
/* harmony import */ var _NavigationRoute_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavigationRoute.mjs */ "./node_modules/workbox-routing/NavigationRoute.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavigationRoute", function() { return _NavigationRoute_mjs__WEBPACK_IMPORTED_MODULE_1__["NavigationRoute"]; });

/* harmony import */ var _RegExpRoute_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RegExpRoute.mjs */ "./node_modules/workbox-routing/RegExpRoute.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegExpRoute", function() { return _RegExpRoute_mjs__WEBPACK_IMPORTED_MODULE_2__["RegExpRoute"]; });

/* harmony import */ var _registerNavigationRoute_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registerNavigationRoute.mjs */ "./node_modules/workbox-routing/registerNavigationRoute.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerNavigationRoute", function() { return _registerNavigationRoute_mjs__WEBPACK_IMPORTED_MODULE_3__["registerNavigationRoute"]; });

/* harmony import */ var _registerRoute_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./registerRoute.mjs */ "./node_modules/workbox-routing/registerRoute.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerRoute", function() { return _registerRoute_mjs__WEBPACK_IMPORTED_MODULE_4__["registerRoute"]; });

/* harmony import */ var _Route_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Route.mjs */ "./node_modules/workbox-routing/Route.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return _Route_mjs__WEBPACK_IMPORTED_MODULE_5__["Route"]; });

/* harmony import */ var _Router_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Router.mjs */ "./node_modules/workbox-routing/Router.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return _Router_mjs__WEBPACK_IMPORTED_MODULE_6__["Router"]; });

/* harmony import */ var _setCatchHandler_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./setCatchHandler.mjs */ "./node_modules/workbox-routing/setCatchHandler.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCatchHandler", function() { return _setCatchHandler_mjs__WEBPACK_IMPORTED_MODULE_7__["setCatchHandler"]; });

/* harmony import */ var _setDefaultHandler_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./setDefaultHandler.mjs */ "./node_modules/workbox-routing/setDefaultHandler.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setDefaultHandler", function() { return _setDefaultHandler_mjs__WEBPACK_IMPORTED_MODULE_8__["setDefaultHandler"]; });

/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_version.mjs */ "./node_modules/workbox-routing/_version.mjs");
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/














if (true) {
  workbox_core_private_assert_mjs__WEBPACK_IMPORTED_MODULE_0__["assert"].isSWEnv('workbox-routing');
}

/**
 * @namespace workbox.routing
 */




/***/ }),

/***/ "./node_modules/workbox-routing/registerNavigationRoute.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/workbox-routing/registerNavigationRoute.mjs ***!
  \******************************************************************/
/*! exports provided: registerNavigationRoute */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerNavigationRoute", function() { return registerNavigationRoute; });
/* harmony import */ var workbox_core_private_assert_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.mjs */ "./node_modules/workbox-core/_private/assert.mjs");
/* harmony import */ var workbox_core_private_cacheNames_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.mjs */ "./node_modules/workbox-core/_private/cacheNames.mjs");
/* harmony import */ var workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/logger.mjs */ "./node_modules/workbox-core/_private/logger.mjs");
/* harmony import */ var _NavigationRoute_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavigationRoute.mjs */ "./node_modules/workbox-routing/NavigationRoute.mjs");
/* harmony import */ var _utils_getOrCreateDefaultRouter_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/getOrCreateDefaultRouter.mjs */ "./node_modules/workbox-routing/utils/getOrCreateDefaultRouter.mjs");
/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.mjs */ "./node_modules/workbox-routing/_version.mjs");
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/









/**
 * Registers a route that will return a precached file for a navigation
 * request. This is useful for the
 * [application shell pattern]{@link https://developers.google.com/web/fundamentals/architecture/app-shell}.
 *
 * When determining the URL of the precached HTML document, you will likely need
 * to call `workbox.precaching.getCacheKeyForURL(originalUrl)`, to account for
 * the fact that Workbox's precaching naming conventions often results in URL
 * cache keys that contain extra revisioning info.
 *
 * This method will generate a
 * [NavigationRoute]{@link workbox.routing.NavigationRoute}
 * and call
 * [Router.registerRoute()]{@link workbox.routing.Router#registerRoute} on a
 * singleton Router instance.
 *
 * @param {string} cachedAssetUrl The cache key to use for the HTML file.
 * @param {Object} [options]
 * @param {string} [options.cacheName] Cache name to store and retrieve
 * requests. Defaults to precache cache name provided by
 * [workbox-core.cacheNames]{@link workbox.core.cacheNames}.
 * @param {Array<RegExp>} [options.blacklist=[]] If any of these patterns
 * match, the route will not handle the request (even if a whitelist entry
 * matches).
 * @param {Array<RegExp>} [options.whitelist=[/./]] If any of these patterns
 * match the URL's pathname and search parameter, the route will handle the
 * request (assuming the blacklist doesn't match).
 * @return {workbox.routing.NavigationRoute} Returns the generated
 * Route.
 *
 * @alias workbox.routing.registerNavigationRoute
 */
const registerNavigationRoute = (cachedAssetUrl, options = {}) => {
  if (true) {
    workbox_core_private_assert_mjs__WEBPACK_IMPORTED_MODULE_0__["assert"].isType(cachedAssetUrl, 'string', {
      moduleName: 'workbox-routing',
      funcName: 'registerNavigationRoute',
      paramName: 'cachedAssetUrl',
    });
  }

  const cacheName = workbox_core_private_cacheNames_mjs__WEBPACK_IMPORTED_MODULE_1__["cacheNames"].getPrecacheName(options.cacheName);
  const handler = async () => {
    try {
      const response = await caches.match(cachedAssetUrl, {cacheName});

      if (response) {
        return response;
      }

      // This shouldn't normally happen, but there are edge cases:
      // https://github.com/GoogleChrome/workbox/issues/1441
      throw new Error(`The cache ${cacheName} did not have an entry for ` +
          `${cachedAssetUrl}.`);
    } catch (error) {
      // If there's either a cache miss, or the caches.match() call threw
      // an exception, then attempt to fulfill the navigation request with
      // a response from the network rather than leaving the user with a
      // failed navigation.
      if (true) {
        workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_2__["logger"].debug(`Unable to respond to navigation request with ` +
            `cached response. Falling back to network.`, error);
      }

      // This might still fail if the browser is offline...
      return fetch(cachedAssetUrl);
    }
  };

  const route = new _NavigationRoute_mjs__WEBPACK_IMPORTED_MODULE_3__["NavigationRoute"](handler, {
    whitelist: options.whitelist,
    blacklist: options.blacklist,
  });

  const defaultRouter = Object(_utils_getOrCreateDefaultRouter_mjs__WEBPACK_IMPORTED_MODULE_4__["getOrCreateDefaultRouter"])();
  defaultRouter.registerRoute(route);

  return route;
};


/***/ }),

/***/ "./node_modules/workbox-routing/registerRoute.mjs":
/*!********************************************************!*\
  !*** ./node_modules/workbox-routing/registerRoute.mjs ***!
  \********************************************************/
/*! exports provided: registerRoute */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerRoute", function() { return registerRoute; });
/* harmony import */ var workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.mjs */ "./node_modules/workbox-core/_private/logger.mjs");
/* harmony import */ var workbox_core_private_WorkboxError_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.mjs */ "./node_modules/workbox-core/_private/WorkboxError.mjs");
/* harmony import */ var _Route_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Route.mjs */ "./node_modules/workbox-routing/Route.mjs");
/* harmony import */ var _RegExpRoute_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RegExpRoute.mjs */ "./node_modules/workbox-routing/RegExpRoute.mjs");
/* harmony import */ var _utils_getOrCreateDefaultRouter_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/getOrCreateDefaultRouter.mjs */ "./node_modules/workbox-routing/utils/getOrCreateDefaultRouter.mjs");
/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.mjs */ "./node_modules/workbox-routing/_version.mjs");
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/









/**
 * Easily register a RegExp, string, or function with a caching
 * strategy to a singleton Router instance.
 *
 * This method will generate a Route for you if needed and
 * call [Router.registerRoute()]{@link
 * workbox.routing.Router#registerRoute}.
 *
 * @param {
 * RegExp|
 * string|
 * workbox.routing.Route~matchCallback|
 * workbox.routing.Route
 * } capture
 * If the capture param is a `Route`, all other arguments will be ignored.
 * @param {workbox.routing.Route~handlerCallback} handler A callback
 * function that returns a Promise resulting in a Response.
 * @param {string} [method='GET'] The HTTP method to match the Route
 * against.
 * @return {workbox.routing.Route} The generated `Route`(Useful for
 * unregistering).
 *
 * @alias workbox.routing.registerRoute
 */
const registerRoute = (capture, handler, method = 'GET') => {
  let route;

  if (typeof capture === 'string') {
    const captureUrl = new URL(capture, location);

    if (true) {
      if (!(capture.startsWith('/') || capture.startsWith('http'))) {
        throw new workbox_core_private_WorkboxError_mjs__WEBPACK_IMPORTED_MODULE_1__["WorkboxError"]('invalid-string', {
          moduleName: 'workbox-routing',
          funcName: 'registerRoute',
          paramName: 'capture',
        });
      }

      // We want to check if Express-style wildcards are in the pathname only.
      // TODO: Remove this log message in v4.
      const valueToCheck = capture.startsWith('http') ?
          captureUrl.pathname : capture;

      // See https://github.com/pillarjs/path-to-regexp#parameters
      const wildcards = '[*:?+]';
      if (valueToCheck.match(new RegExp(`${wildcards}`))) {
        workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_0__["logger"].debug(
            `The '$capture' parameter contains an Express-style wildcard ` +
          `character (${wildcards}). Strings are now always interpreted as ` +
          `exact matches; use a RegExp for partial or wildcard matches.`
        );
      }
    }

    const matchCallback = ({url}) => {
      if (true) {
        if ((url.pathname === captureUrl.pathname) &&
            (url.origin !== captureUrl.origin)) {
          workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_0__["logger"].debug(
              `${capture} only partially matches the cross-origin URL ` +
              `${url}. This route will only handle cross-origin requests ` +
              `if they match the entire URL.`);
        }
      }

      return url.href === captureUrl.href;
    };

    route = new _Route_mjs__WEBPACK_IMPORTED_MODULE_2__["Route"](matchCallback, handler, method);
  } else if (capture instanceof RegExp) {
    route = new _RegExpRoute_mjs__WEBPACK_IMPORTED_MODULE_3__["RegExpRoute"](capture, handler, method);
  } else if (typeof capture === 'function') {
    route = new _Route_mjs__WEBPACK_IMPORTED_MODULE_2__["Route"](capture, handler, method);
  } else if (capture instanceof _Route_mjs__WEBPACK_IMPORTED_MODULE_2__["Route"]) {
    route = capture;
  } else {
    throw new workbox_core_private_WorkboxError_mjs__WEBPACK_IMPORTED_MODULE_1__["WorkboxError"]('unsupported-route-type', {
      moduleName: 'workbox-routing',
      funcName: 'registerRoute',
      paramName: 'capture',
    });
  }

  const defaultRouter = Object(_utils_getOrCreateDefaultRouter_mjs__WEBPACK_IMPORTED_MODULE_4__["getOrCreateDefaultRouter"])();
  defaultRouter.registerRoute(route);

  return route;
};


/***/ }),

/***/ "./node_modules/workbox-routing/setCatchHandler.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/workbox-routing/setCatchHandler.mjs ***!
  \**********************************************************/
/*! exports provided: setCatchHandler */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCatchHandler", function() { return setCatchHandler; });
/* harmony import */ var _utils_getOrCreateDefaultRouter_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreateDefaultRouter.mjs */ "./node_modules/workbox-routing/utils/getOrCreateDefaultRouter.mjs");
/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.mjs */ "./node_modules/workbox-routing/_version.mjs");
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/





/**
 * If a Route throws an error while handling a request, this `handler`
 * will be called and given a chance to provide a response.
 *
 * @param {workbox.routing.Route~handlerCallback} handler A callback
 * function that returns a Promise resulting in a Response.
 *
 * @alias workbox.routing.setCatchHandler
 */
const setCatchHandler = (handler) => {
  const defaultRouter = Object(_utils_getOrCreateDefaultRouter_mjs__WEBPACK_IMPORTED_MODULE_0__["getOrCreateDefaultRouter"])();
  defaultRouter.setCatchHandler(handler);
};


/***/ }),

/***/ "./node_modules/workbox-routing/setDefaultHandler.mjs":
/*!************************************************************!*\
  !*** ./node_modules/workbox-routing/setDefaultHandler.mjs ***!
  \************************************************************/
/*! exports provided: setDefaultHandler */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDefaultHandler", function() { return setDefaultHandler; });
/* harmony import */ var _utils_getOrCreateDefaultRouter_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreateDefaultRouter.mjs */ "./node_modules/workbox-routing/utils/getOrCreateDefaultRouter.mjs");
/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.mjs */ "./node_modules/workbox-routing/_version.mjs");
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/





/**
 * Define a default `handler` that's called when no routes explicitly
 * match the incoming request.
 *
 * Without a default handler, unmatched requests will go against the
 * network as if there were no service worker present.
 *
 * @param {workbox.routing.Route~handlerCallback} handler A callback
 * function that returns a Promise resulting in a Response.
 *
 * @alias workbox.routing.setDefaultHandler
 */
const setDefaultHandler = (handler) => {
  const defaultRouter = Object(_utils_getOrCreateDefaultRouter_mjs__WEBPACK_IMPORTED_MODULE_0__["getOrCreateDefaultRouter"])();
  defaultRouter.setDefaultHandler(handler);
};


/***/ }),

/***/ "./node_modules/workbox-routing/utils/constants.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/workbox-routing/utils/constants.mjs ***!
  \**********************************************************/
/*! exports provided: defaultMethod, validMethods */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultMethod", function() { return defaultMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validMethods", function() { return validMethods; });
/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.mjs */ "./node_modules/workbox-routing/_version.mjs");
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * The default HTTP method, 'GET', used when there's no specific method
 * configured for a route.
 *
 * @type {string}
 *
 * @private
 */
const defaultMethod = 'GET';

/**
 * The list of valid HTTP methods associated with requests that could be routed.
 *
 * @type {Array<string>}
 *
 * @private
 */
const validMethods = [
  'DELETE',
  'GET',
  'HEAD',
  'PATCH',
  'POST',
  'PUT',
];


/***/ }),

/***/ "./node_modules/workbox-routing/utils/getOrCreateDefaultRouter.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/workbox-routing/utils/getOrCreateDefaultRouter.mjs ***!
  \*************************************************************************/
/*! exports provided: getOrCreateDefaultRouter */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrCreateDefaultRouter", function() { return getOrCreateDefaultRouter; });
/* harmony import */ var _Router_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Router.mjs */ "./node_modules/workbox-routing/Router.mjs");
/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.mjs */ "./node_modules/workbox-routing/_version.mjs");
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




let defaultRouter;

/**
 * Creates a new, singleton Router instance if one does not exist. If one
 * does already exist, that instance is returned.
 *
 * @private
 * @return {Router}
 */
const getOrCreateDefaultRouter = () => {
  if (!defaultRouter) {
    defaultRouter = new _Router_mjs__WEBPACK_IMPORTED_MODULE_0__["Router"]();

    // The helpers that use the default Router assume these listeners exist.
    defaultRouter.addFetchListener();
    defaultRouter.addCacheListener();
  }
  return defaultRouter;
};


/***/ }),

/***/ "./node_modules/workbox-routing/utils/normalizeHandler.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/workbox-routing/utils/normalizeHandler.mjs ***!
  \*****************************************************************/
/*! exports provided: normalizeHandler */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeHandler", function() { return normalizeHandler; });
/* harmony import */ var workbox_core_private_assert_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.mjs */ "./node_modules/workbox-core/_private/assert.mjs");
/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.mjs */ "./node_modules/workbox-routing/_version.mjs");
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * @param {function()|Object} handler Either a function, or an object with a
 * 'handle' method.
 * @return {Object} An object with a handle method.
 *
 * @private
 */
const normalizeHandler = (handler) => {
  if (handler && typeof handler === 'object') {
    if (true) {
      workbox_core_private_assert_mjs__WEBPACK_IMPORTED_MODULE_0__["assert"].hasMethod(handler, 'handle', {
        moduleName: 'workbox-routing',
        className: 'Route',
        funcName: 'constructor',
        paramName: 'handler',
      });
    }
    return handler;
  } else {
    if (true) {
      workbox_core_private_assert_mjs__WEBPACK_IMPORTED_MODULE_0__["assert"].isType(handler, 'function', {
        moduleName: 'workbox-routing',
        className: 'Route',
        funcName: 'constructor',
        paramName: 'handler',
      });
    }
    return {handle: handler};
  }
};


/***/ }),

/***/ "./node_modules/workbox-strategies/CacheFirst.mjs":
/*!********************************************************!*\
  !*** ./node_modules/workbox-strategies/CacheFirst.mjs ***!
  \********************************************************/
/*! exports provided: CacheFirst */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheFirst", function() { return CacheFirst; });
/* harmony import */ var workbox_core_private_assert_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.mjs */ "./node_modules/workbox-core/_private/assert.mjs");
/* harmony import */ var workbox_core_private_cacheNames_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.mjs */ "./node_modules/workbox-core/_private/cacheNames.mjs");
/* harmony import */ var workbox_core_private_cacheWrapper_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/cacheWrapper.mjs */ "./node_modules/workbox-core/_private/cacheWrapper.mjs");
/* harmony import */ var workbox_core_private_fetchWrapper_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/fetchWrapper.mjs */ "./node_modules/workbox-core/_private/fetchWrapper.mjs");
/* harmony import */ var workbox_core_private_getFriendlyURL_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.mjs */ "./node_modules/workbox-core/_private/getFriendlyURL.mjs");
/* harmony import */ var workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/_private/logger.mjs */ "./node_modules/workbox-core/_private/logger.mjs");
/* harmony import */ var workbox_core_private_WorkboxError_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.mjs */ "./node_modules/workbox-core/_private/WorkboxError.mjs");
/* harmony import */ var _utils_messages_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/messages.mjs */ "./node_modules/workbox-strategies/utils/messages.mjs");
/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_version.mjs */ "./node_modules/workbox-strategies/_version.mjs");
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/












/**
 * An implementation of a [cache-first]{@link https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#cache-falling-back-to-network}
 * request strategy.
 *
 * A cache first strategy is useful for assets that have been revisioned,
 * such as URLs like `/styles/example.a8f5f1.css`, since they
 * can be cached for long periods of time.
 *
 * If the network request fails, and there is no cache match, this will throw
 * a `WorkboxError` exception.
 *
 * @memberof workbox.strategies
 */
class CacheFirst {
  /**
   * @param {Object} options
   * @param {string} options.cacheName Cache name to store and retrieve
   * requests. Defaults to cache names provided by
   * [workbox-core]{@link workbox.core.cacheNames}.
   * @param {Array<Object>} options.plugins [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} options.fetchOptions Values passed along to the
   * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
   * of all fetch() requests made by this strategy.
   * @param {Object} options.matchOptions [`CacheQueryOptions`](https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions)
   */
  constructor(options = {}) {
    this._cacheName = workbox_core_private_cacheNames_mjs__WEBPACK_IMPORTED_MODULE_1__["cacheNames"].getRuntimeName(options.cacheName);
    this._plugins = options.plugins || [];
    this._fetchOptions = options.fetchOptions || null;
    this._matchOptions = options.matchOptions || null;
  }

  /**
   * This method will perform a request strategy and follows an API that
   * will work with the
   * [Workbox Router]{@link workbox.routing.Router}.
   *
   * @param {Object} options
   * @param {Request} options.request The request to run this strategy for.
   * @param {Event} [options.event] The event that triggered the request.
   * @return {Promise<Response>}
   */
  async handle({event, request}) {
    return this.makeRequest({
      event,
      request: request || event.request,
    });
  }

  /**
   * This method can be used to perform a make a standalone request outside the
   * context of the [Workbox Router]{@link workbox.routing.Router}.
   *
   * See "[Advanced Recipes](https://developers.google.com/web/tools/workbox/guides/advanced-recipes#make-requests)"
   * for more usage information.
   *
   * @param {Object} options
   * @param {Request|string} options.request Either a
   *     [`Request`]{@link https://developer.mozilla.org/en-US/docs/Web/API/Request}
   *     object, or a string URL, corresponding to the request to be made.
   * @param {FetchEvent} [options.event] If provided, `event.waitUntil()` will
         be called automatically to extend the service worker's lifetime.
   * @return {Promise<Response>}
   */
  async makeRequest({event, request}) {
    const logs = [];

    if (typeof request === 'string') {
      request = new Request(request);
    }

    if (true) {
      workbox_core_private_assert_mjs__WEBPACK_IMPORTED_MODULE_0__["assert"].isInstance(request, Request, {
        moduleName: 'workbox-strategies',
        className: 'CacheFirst',
        funcName: 'makeRequest',
        paramName: 'request',
      });
    }

    let response = await workbox_core_private_cacheWrapper_mjs__WEBPACK_IMPORTED_MODULE_2__["cacheWrapper"].match({
      cacheName: this._cacheName,
      request,
      event,
      matchOptions: this._matchOptions,
      plugins: this._plugins,
    });

    let error;
    if (!response) {
      if (true) {
        logs.push(
            `No response found in the '${this._cacheName}' cache. ` +
          `Will respond with a network request.`);
      }
      try {
        response = await this._getFromNetwork(request, event);
      } catch (err) {
        error = err;
      }

      if (true) {
        if (response) {
          logs.push(`Got response from network.`);
        } else {
          logs.push(`Unable to get a response from the network.`);
        }
      }
    } else {
      if (true) {
        logs.push(
            `Found a cached response in the '${this._cacheName}' cache.`);
      }
    }

    if (true) {
      workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_5__["logger"].groupCollapsed(
          _utils_messages_mjs__WEBPACK_IMPORTED_MODULE_7__["messages"].strategyStart('CacheFirst', request));
      for (let log of logs) {
        workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_5__["logger"].log(log);
      }
      _utils_messages_mjs__WEBPACK_IMPORTED_MODULE_7__["messages"].printFinalResponse(response);
      workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_5__["logger"].groupEnd();
    }

    if (!response) {
      throw new workbox_core_private_WorkboxError_mjs__WEBPACK_IMPORTED_MODULE_6__["WorkboxError"]('no-response', {url: request.url, error});
    }
    return response;
  }

  /**
   * Handles the network and cache part of CacheFirst.
   *
   * @param {Request} request
   * @param {FetchEvent} [event]
   * @return {Promise<Response>}
   *
   * @private
   */
  async _getFromNetwork(request, event) {
    const response = await workbox_core_private_fetchWrapper_mjs__WEBPACK_IMPORTED_MODULE_3__["fetchWrapper"].fetch({
      request,
      event,
      fetchOptions: this._fetchOptions,
      plugins: this._plugins,
    });

    // Keep the service worker while we put the request to the cache
    const responseClone = response.clone();
    const cachePutPromise = workbox_core_private_cacheWrapper_mjs__WEBPACK_IMPORTED_MODULE_2__["cacheWrapper"].put({
      cacheName: this._cacheName,
      request,
      response: responseClone,
      event,
      plugins: this._plugins,
    });

    if (event) {
      try {
        event.waitUntil(cachePutPromise);
      } catch (error) {
        if (true) {
          workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_5__["logger"].warn(`Unable to ensure service worker stays alive when ` +
            `updating cache for '${Object(workbox_core_private_getFriendlyURL_mjs__WEBPACK_IMPORTED_MODULE_4__["getFriendlyURL"])(request.url)}'.`);
        }
      }
    }

    return response;
  }
}




/***/ }),

/***/ "./node_modules/workbox-strategies/CacheOnly.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/workbox-strategies/CacheOnly.mjs ***!
  \*******************************************************/
/*! exports provided: CacheOnly */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheOnly", function() { return CacheOnly; });
/* harmony import */ var workbox_core_private_assert_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.mjs */ "./node_modules/workbox-core/_private/assert.mjs");
/* harmony import */ var workbox_core_private_cacheNames_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.mjs */ "./node_modules/workbox-core/_private/cacheNames.mjs");
/* harmony import */ var workbox_core_private_cacheWrapper_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/cacheWrapper.mjs */ "./node_modules/workbox-core/_private/cacheWrapper.mjs");
/* harmony import */ var workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/logger.mjs */ "./node_modules/workbox-core/_private/logger.mjs");
/* harmony import */ var workbox_core_private_WorkboxError_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.mjs */ "./node_modules/workbox-core/_private/WorkboxError.mjs");
/* harmony import */ var _utils_messages_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/messages.mjs */ "./node_modules/workbox-strategies/utils/messages.mjs");
/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.mjs */ "./node_modules/workbox-strategies/_version.mjs");
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/











/**
 * An implementation of a
 * [cache-only]{@link https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#cache-only}
 * request strategy.
 *
 * This class is useful if you want to take advantage of any
 * [Workbox plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}.
 *
 * If there is no cache match, this will throw a `WorkboxError` exception.
 *
 * @memberof workbox.strategies
 */
class CacheOnly {
  /**
   * @param {Object} options
   * @param {string} options.cacheName Cache name to store and retrieve
   * requests. Defaults to cache names provided by
   * [workbox-core]{@link workbox.core.cacheNames}.
   * @param {Array<Object>} options.plugins [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} options.matchOptions [`CacheQueryOptions`](https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions)
   */
  constructor(options = {}) {
    this._cacheName = workbox_core_private_cacheNames_mjs__WEBPACK_IMPORTED_MODULE_1__["cacheNames"].getRuntimeName(options.cacheName);
    this._plugins = options.plugins || [];
    this._matchOptions = options.matchOptions || null;
  }

  /**
   * This method will perform a request strategy and follows an API that
   * will work with the
   * [Workbox Router]{@link workbox.routing.Router}.
   *
   * @param {Object} options
   * @param {Request} options.request The request to run this strategy for.
   * @param {Event} [options.event] The event that triggered the request.
   * @return {Promise<Response>}
   */
  async handle({event, request}) {
    return this.makeRequest({
      event,
      request: request || event.request,
    });
  }

  /**
   * This method can be used to perform a make a standalone request outside the
   * context of the [Workbox Router]{@link workbox.routing.Router}.
   *
   * See "[Advanced Recipes](https://developers.google.com/web/tools/workbox/guides/advanced-recipes#make-requests)"
   * for more usage information.
   *
   * @param {Object} options
   * @param {Request|string} options.request Either a
   *     [`Request`]{@link https://developer.mozilla.org/en-US/docs/Web/API/Request}
   *     object, or a string URL, corresponding to the request to be made.
   * @param {FetchEvent} [options.event] If provided, `event.waitUntil()` will
   *     be called automatically to extend the service worker's lifetime.
   * @return {Promise<Response>}
   */
  async makeRequest({event, request}) {
    if (typeof request === 'string') {
      request = new Request(request);
    }

    if (true) {
      workbox_core_private_assert_mjs__WEBPACK_IMPORTED_MODULE_0__["assert"].isInstance(request, Request, {
        moduleName: 'workbox-strategies',
        className: 'CacheOnly',
        funcName: 'makeRequest',
        paramName: 'request',
      });
    }

    const response = await workbox_core_private_cacheWrapper_mjs__WEBPACK_IMPORTED_MODULE_2__["cacheWrapper"].match({
      cacheName: this._cacheName,
      request,
      event,
      matchOptions: this._matchOptions,
      plugins: this._plugins,
    });

    if (true) {
      workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_3__["logger"].groupCollapsed(
          _utils_messages_mjs__WEBPACK_IMPORTED_MODULE_5__["messages"].strategyStart('CacheOnly', request));
      if (response) {
        workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_3__["logger"].log(`Found a cached response in the '${this._cacheName}'` +
          ` cache.`);
        _utils_messages_mjs__WEBPACK_IMPORTED_MODULE_5__["messages"].printFinalResponse(response);
      } else {
        workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_3__["logger"].log(`No response found in the '${this._cacheName}' cache.`);
      }
      workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_3__["logger"].groupEnd();
    }

    if (!response) {
      throw new workbox_core_private_WorkboxError_mjs__WEBPACK_IMPORTED_MODULE_4__["WorkboxError"]('no-response', {url: request.url});
    }
    return response;
  }
}




/***/ }),

/***/ "./node_modules/workbox-strategies/NetworkFirst.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/workbox-strategies/NetworkFirst.mjs ***!
  \**********************************************************/
/*! exports provided: NetworkFirst */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkFirst", function() { return NetworkFirst; });
/* harmony import */ var workbox_core_private_assert_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.mjs */ "./node_modules/workbox-core/_private/assert.mjs");
/* harmony import */ var workbox_core_private_cacheNames_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.mjs */ "./node_modules/workbox-core/_private/cacheNames.mjs");
/* harmony import */ var workbox_core_private_cacheWrapper_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/cacheWrapper.mjs */ "./node_modules/workbox-core/_private/cacheWrapper.mjs");
/* harmony import */ var workbox_core_private_fetchWrapper_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/fetchWrapper.mjs */ "./node_modules/workbox-core/_private/fetchWrapper.mjs");
/* harmony import */ var workbox_core_private_getFriendlyURL_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.mjs */ "./node_modules/workbox-core/_private/getFriendlyURL.mjs");
/* harmony import */ var workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/_private/logger.mjs */ "./node_modules/workbox-core/_private/logger.mjs");
/* harmony import */ var workbox_core_private_WorkboxError_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.mjs */ "./node_modules/workbox-core/_private/WorkboxError.mjs");
/* harmony import */ var _utils_messages_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/messages.mjs */ "./node_modules/workbox-strategies/utils/messages.mjs");
/* harmony import */ var _plugins_cacheOkAndOpaquePlugin_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./plugins/cacheOkAndOpaquePlugin.mjs */ "./node_modules/workbox-strategies/plugins/cacheOkAndOpaquePlugin.mjs");
/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_version.mjs */ "./node_modules/workbox-strategies/_version.mjs");
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/













/**
 * An implementation of a
 * [network first]{@link https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#network-falling-back-to-cache}
 * request strategy.
 *
 * By default, this strategy will cache responses with a 200 status code as
 * well as [opaque responses]{@link https://developers.google.com/web/tools/workbox/guides/handle-third-party-requests}.
 * Opaque responses are are cross-origin requests where the response doesn't
 * support [CORS]{@link https://enable-cors.org/}.
 *
 * If the network request fails, and there is no cache match, this will throw
 * a `WorkboxError` exception.
 *
 * @memberof workbox.strategies
 */
class NetworkFirst {
  /**
   * @param {Object} options
   * @param {string} options.cacheName Cache name to store and retrieve
   * requests. Defaults to cache names provided by
   * [workbox-core]{@link workbox.core.cacheNames}.
   * @param {Array<Object>} options.plugins [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} options.fetchOptions Values passed along to the
   * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
   * of all fetch() requests made by this strategy.
   * @param {Object} options.matchOptions [`CacheQueryOptions`](https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions)
   * @param {number} options.networkTimeoutSeconds If set, any network requests
   * that fail to respond within the timeout will fallback to the cache.
   *
   * This option can be used to combat
   * "[lie-fi]{@link https://developers.google.com/web/fundamentals/performance/poor-connectivity/#lie-fi}"
   * scenarios.
   */
  constructor(options = {}) {
    this._cacheName = workbox_core_private_cacheNames_mjs__WEBPACK_IMPORTED_MODULE_1__["cacheNames"].getRuntimeName(options.cacheName);

    if (options.plugins) {
      let isUsingCacheWillUpdate =
        options.plugins.some((plugin) => !!plugin.cacheWillUpdate);
      this._plugins = isUsingCacheWillUpdate ?
        options.plugins : [_plugins_cacheOkAndOpaquePlugin_mjs__WEBPACK_IMPORTED_MODULE_8__["cacheOkAndOpaquePlugin"], ...options.plugins];
    } else {
      // No plugins passed in, use the default plugin.
      this._plugins = [_plugins_cacheOkAndOpaquePlugin_mjs__WEBPACK_IMPORTED_MODULE_8__["cacheOkAndOpaquePlugin"]];
    }

    this._networkTimeoutSeconds = options.networkTimeoutSeconds;
    if (true) {
      if (this._networkTimeoutSeconds) {
        workbox_core_private_assert_mjs__WEBPACK_IMPORTED_MODULE_0__["assert"].isType(this._networkTimeoutSeconds, 'number', {
          moduleName: 'workbox-strategies',
          className: 'NetworkFirst',
          funcName: 'constructor',
          paramName: 'networkTimeoutSeconds',
        });
      }
    }

    this._fetchOptions = options.fetchOptions || null;
    this._matchOptions = options.matchOptions || null;
  }

  /**
   * This method will perform a request strategy and follows an API that
   * will work with the
   * [Workbox Router]{@link workbox.routing.Router}.
   *
   * @param {Object} options
   * @param {Request} options.request The request to run this strategy for.
   * @param {Event} [options.event] The event that triggered the request.
   * @return {Promise<Response>}
   */
  async handle({event, request}) {
    return this.makeRequest({
      event,
      request: request || event.request,
    });
  }

  /**
   * This method can be used to perform a make a standalone request outside the
   * context of the [Workbox Router]{@link workbox.routing.Router}.
   *
   * See "[Advanced Recipes](https://developers.google.com/web/tools/workbox/guides/advanced-recipes#make-requests)"
   * for more usage information.
   *
   * @param {Object} options
   * @param {Request|string} options.request Either a
   *     [`Request`]{@link https://developer.mozilla.org/en-US/docs/Web/API/Request}
   *     object, or a string URL, corresponding to the request to be made.
   * @param {FetchEvent} [options.event] If provided, `event.waitUntil()` will
   *     be called automatically to extend the service worker's lifetime.
   * @return {Promise<Response>}
   */
  async makeRequest({event, request}) {
    const logs = [];

    if (typeof request === 'string') {
      request = new Request(request);
    }

    if (true) {
      workbox_core_private_assert_mjs__WEBPACK_IMPORTED_MODULE_0__["assert"].isInstance(request, Request, {
        moduleName: 'workbox-strategies',
        className: 'NetworkFirst',
        funcName: 'handle',
        paramName: 'makeRequest',
      });
    }

    const promises = [];
    let timeoutId;

    if (this._networkTimeoutSeconds) {
      const {id, promise} = this._getTimeoutPromise({request, event, logs});
      timeoutId = id;
      promises.push(promise);
    }

    const networkPromise =
        this._getNetworkPromise({timeoutId, request, event, logs});
    promises.push(networkPromise);

    // Promise.race() will resolve as soon as the first promise resolves.
    let response = await Promise.race(promises);
    // If Promise.race() resolved with null, it might be due to a network
    // timeout + a cache miss. If that were to happen, we'd rather wait until
    // the networkPromise resolves instead of returning null.
    // Note that it's fine to await an already-resolved promise, so we don't
    // have to check to see if it's still "in flight".
    if (!response) {
      response = await networkPromise;
    }

    if (true) {
      workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_5__["logger"].groupCollapsed(
          _utils_messages_mjs__WEBPACK_IMPORTED_MODULE_7__["messages"].strategyStart('NetworkFirst', request));
      for (let log of logs) {
        workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_5__["logger"].log(log);
      }
      _utils_messages_mjs__WEBPACK_IMPORTED_MODULE_7__["messages"].printFinalResponse(response);
      workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_5__["logger"].groupEnd();
    }

    if (!response) {
      throw new workbox_core_private_WorkboxError_mjs__WEBPACK_IMPORTED_MODULE_6__["WorkboxError"]('no-response', {url: request.url});
    }
    return response;
  }

  /**
   * @param {Object} options
   * @param {Request} options.request
   * @param {Array} options.logs A reference to the logs array
   * @param {Event} [options.event]
   * @return {Promise<Response>}
   *
   * @private
   */
  _getTimeoutPromise({request, logs, event}) {
    let timeoutId;
    const timeoutPromise = new Promise((resolve) => {
      const onNetworkTimeout = async () => {
        if (true) {
          logs.push(`Timing out the network response at ` +
            `${this._networkTimeoutSeconds} seconds.`);
        }

        resolve(await this._respondFromCache({request, event}));
      };

      timeoutId = setTimeout(
          onNetworkTimeout,
          this._networkTimeoutSeconds * 1000,
      );
    });

    return {
      promise: timeoutPromise,
      id: timeoutId,
    };
  }

  /**
   * @param {Object} options
   * @param {number|undefined} options.timeoutId
   * @param {Request} options.request
   * @param {Array} options.logs A reference to the logs Array.
   * @param {Event} [options.event]
   * @return {Promise<Response>}
   *
   * @private
   */
  async _getNetworkPromise({timeoutId, request, logs, event}) {
    let error;
    let response;
    try {
      response = await workbox_core_private_fetchWrapper_mjs__WEBPACK_IMPORTED_MODULE_3__["fetchWrapper"].fetch({
        request,
        event,
        fetchOptions: this._fetchOptions,
        plugins: this._plugins,
      });
    } catch (err) {
      error = err;
    }

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    if (true) {
      if (response) {
        logs.push(`Got response from network.`);
      } else {
        logs.push(`Unable to get a response from the network. Will respond ` +
          `with a cached response.`);
      }
    }

    if (error || !response) {
      response = await this._respondFromCache({request, event});
      if (true) {
        if (response) {
          logs.push(`Found a cached response in the '${this._cacheName}'` +
            ` cache.`);
        } else {
          logs.push(`No response found in the '${this._cacheName}' cache.`);
        }
      }
    } else {
      // Keep the service worker alive while we put the request in the cache
      const responseClone = response.clone();
      const cachePut = workbox_core_private_cacheWrapper_mjs__WEBPACK_IMPORTED_MODULE_2__["cacheWrapper"].put({
        cacheName: this._cacheName,
        request,
        response: responseClone,
        event,
        plugins: this._plugins,
      });

      if (event) {
        try {
          // The event has been responded to so we can keep the SW alive to
          // respond to the request
          event.waitUntil(cachePut);
        } catch (err) {
          if (true) {
            workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_5__["logger"].warn(`Unable to ensure service worker stays alive when ` +
              `updating cache for '${Object(workbox_core_private_getFriendlyURL_mjs__WEBPACK_IMPORTED_MODULE_4__["getFriendlyURL"])(request.url)}'.`);
          }
        }
      }
    }

    return response;
  }

  /**
   * Used if the network timeouts or fails to make the request.
   *
   * @param {Object} options
   * @param {Request} request The request to match in the cache
   * @param {Event} [options.event]
   * @return {Promise<Object>}
   *
   * @private
   */
  _respondFromCache({event, request}) {
    return workbox_core_private_cacheWrapper_mjs__WEBPACK_IMPORTED_MODULE_2__["cacheWrapper"].match({
      cacheName: this._cacheName,
      request,
      event,
      matchOptions: this._matchOptions,
      plugins: this._plugins,
    });
  }
}




/***/ }),

/***/ "./node_modules/workbox-strategies/NetworkOnly.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/workbox-strategies/NetworkOnly.mjs ***!
  \*********************************************************/
/*! exports provided: NetworkOnly */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkOnly", function() { return NetworkOnly; });
/* harmony import */ var workbox_core_private_assert_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.mjs */ "./node_modules/workbox-core/_private/assert.mjs");
/* harmony import */ var workbox_core_private_cacheNames_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.mjs */ "./node_modules/workbox-core/_private/cacheNames.mjs");
/* harmony import */ var workbox_core_private_fetchWrapper_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/fetchWrapper.mjs */ "./node_modules/workbox-core/_private/fetchWrapper.mjs");
/* harmony import */ var workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/logger.mjs */ "./node_modules/workbox-core/_private/logger.mjs");
/* harmony import */ var workbox_core_private_WorkboxError_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.mjs */ "./node_modules/workbox-core/_private/WorkboxError.mjs");
/* harmony import */ var _utils_messages_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/messages.mjs */ "./node_modules/workbox-strategies/utils/messages.mjs");
/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.mjs */ "./node_modules/workbox-strategies/_version.mjs");
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/










/**
 * An implementation of a
 * [network-only]{@link https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#network-only}
 * request strategy.
 *
 * This class is useful if you want to take advantage of any
 * [Workbox plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}.
 *
 * If the network request fails, this will throw a `WorkboxError` exception.
 *
 * @memberof workbox.strategies
 */
class NetworkOnly {
  /**
   * @param {Object} options
   * @param {string} options.cacheName Cache name to store and retrieve
   * requests. Defaults to cache names provided by
   * [workbox-core]{@link workbox.core.cacheNames}.
   * @param {Array<Object>} options.plugins [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} options.fetchOptions Values passed along to the
   * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
   * of all fetch() requests made by this strategy.
   */
  constructor(options = {}) {
    this._cacheName = workbox_core_private_cacheNames_mjs__WEBPACK_IMPORTED_MODULE_1__["cacheNames"].getRuntimeName(options.cacheName);
    this._plugins = options.plugins || [];
    this._fetchOptions = options.fetchOptions || null;
  }

  /**
   * This method will perform a request strategy and follows an API that
   * will work with the
   * [Workbox Router]{@link workbox.routing.Router}.
   *
   * @param {Object} options
   * @param {Request} options.request The request to run this strategy for.
   * @param {Event} [options.event] The event that triggered the request.
   * @return {Promise<Response>}
   */
  async handle({event, request}) {
    return this.makeRequest({
      event,
      request: request || event.request,
    });
  }

  /**
   * This method can be used to perform a make a standalone request outside the
   * context of the [Workbox Router]{@link workbox.routing.Router}.
   *
   * See "[Advanced Recipes](https://developers.google.com/web/tools/workbox/guides/advanced-recipes#make-requests)"
   * for more usage information.
   *
   * @param {Object} options
   * @param {Request|string} options.request Either a
   *     [`Request`]{@link https://developer.mozilla.org/en-US/docs/Web/API/Request}
   *     object, or a string URL, corresponding to the request to be made.
   * @param {FetchEvent} [options.event] If provided, `event.waitUntil()` will
   *     be called automatically to extend the service worker's lifetime.
   * @return {Promise<Response>}
   */
  async makeRequest({event, request}) {
    if (typeof request === 'string') {
      request = new Request(request);
    }

    if (true) {
      workbox_core_private_assert_mjs__WEBPACK_IMPORTED_MODULE_0__["assert"].isInstance(request, Request, {
        moduleName: 'workbox-strategies',
        className: 'NetworkOnly',
        funcName: 'handle',
        paramName: 'request',
      });
    }

    let error;
    let response;
    try {
      response = await workbox_core_private_fetchWrapper_mjs__WEBPACK_IMPORTED_MODULE_2__["fetchWrapper"].fetch({
        request,
        event,
        fetchOptions: this._fetchOptions,
        plugins: this._plugins,
      });
    } catch (err) {
      error = err;
    }

    if (true) {
      workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_3__["logger"].groupCollapsed(
          _utils_messages_mjs__WEBPACK_IMPORTED_MODULE_5__["messages"].strategyStart('NetworkOnly', request));
      if (response) {
        workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_3__["logger"].log(`Got response from network.`);
      } else {
        workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_3__["logger"].log(`Unable to get a response from the network.`);
      }
      _utils_messages_mjs__WEBPACK_IMPORTED_MODULE_5__["messages"].printFinalResponse(response);
      workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_3__["logger"].groupEnd();
    }

    if (!response) {
      throw new workbox_core_private_WorkboxError_mjs__WEBPACK_IMPORTED_MODULE_4__["WorkboxError"]('no-response', {url: request.url, error});
    }
    return response;
  }
}




/***/ }),

/***/ "./node_modules/workbox-strategies/StaleWhileRevalidate.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/workbox-strategies/StaleWhileRevalidate.mjs ***!
  \******************************************************************/
/*! exports provided: StaleWhileRevalidate */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaleWhileRevalidate", function() { return StaleWhileRevalidate; });
/* harmony import */ var workbox_core_private_assert_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.mjs */ "./node_modules/workbox-core/_private/assert.mjs");
/* harmony import */ var workbox_core_private_cacheNames_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.mjs */ "./node_modules/workbox-core/_private/cacheNames.mjs");
/* harmony import */ var workbox_core_private_cacheWrapper_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/cacheWrapper.mjs */ "./node_modules/workbox-core/_private/cacheWrapper.mjs");
/* harmony import */ var workbox_core_private_fetchWrapper_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/fetchWrapper.mjs */ "./node_modules/workbox-core/_private/fetchWrapper.mjs");
/* harmony import */ var workbox_core_private_getFriendlyURL_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.mjs */ "./node_modules/workbox-core/_private/getFriendlyURL.mjs");
/* harmony import */ var workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/_private/logger.mjs */ "./node_modules/workbox-core/_private/logger.mjs");
/* harmony import */ var workbox_core_private_WorkboxError_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.mjs */ "./node_modules/workbox-core/_private/WorkboxError.mjs");
/* harmony import */ var _utils_messages_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/messages.mjs */ "./node_modules/workbox-strategies/utils/messages.mjs");
/* harmony import */ var _plugins_cacheOkAndOpaquePlugin_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./plugins/cacheOkAndOpaquePlugin.mjs */ "./node_modules/workbox-strategies/plugins/cacheOkAndOpaquePlugin.mjs");
/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_version.mjs */ "./node_modules/workbox-strategies/_version.mjs");
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/













/**
 * An implementation of a
 * [stale-while-revalidate]{@link https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#stale-while-revalidate}
 * request strategy.
 *
 * Resources are requested from both the cache and the network in parallel.
 * The strategy will respond with the cached version if available, otherwise
 * wait for the network response. The cache is updated with the network response
 * with each successful request.
 *
 * By default, this strategy will cache responses with a 200 status code as
 * well as [opaque responses]{@link https://developers.google.com/web/tools/workbox/guides/handle-third-party-requests}.
 * Opaque responses are are cross-origin requests where the response doesn't
 * support [CORS]{@link https://enable-cors.org/}.
 *
 * If the network request fails, and there is no cache match, this will throw
 * a `WorkboxError` exception.
 *
 * @memberof workbox.strategies
 */
class StaleWhileRevalidate {
  /**
   * @param {Object} options
   * @param {string} options.cacheName Cache name to store and retrieve
   * requests. Defaults to cache names provided by
   * [workbox-core]{@link workbox.core.cacheNames}.
   * @param {Array<Object>} options.plugins [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} options.fetchOptions Values passed along to the
   * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
   * of all fetch() requests made by this strategy.
   * @param {Object} options.matchOptions [`CacheQueryOptions`](https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions)
   */
  constructor(options = {}) {
    this._cacheName = workbox_core_private_cacheNames_mjs__WEBPACK_IMPORTED_MODULE_1__["cacheNames"].getRuntimeName(options.cacheName);
    this._plugins = options.plugins || [];

    if (options.plugins) {
      let isUsingCacheWillUpdate =
        options.plugins.some((plugin) => !!plugin.cacheWillUpdate);
      this._plugins = isUsingCacheWillUpdate ?
        options.plugins : [_plugins_cacheOkAndOpaquePlugin_mjs__WEBPACK_IMPORTED_MODULE_8__["cacheOkAndOpaquePlugin"], ...options.plugins];
    } else {
      // No plugins passed in, use the default plugin.
      this._plugins = [_plugins_cacheOkAndOpaquePlugin_mjs__WEBPACK_IMPORTED_MODULE_8__["cacheOkAndOpaquePlugin"]];
    }

    this._fetchOptions = options.fetchOptions || null;
    this._matchOptions = options.matchOptions || null;
  }

  /**
   * This method will perform a request strategy and follows an API that
   * will work with the
   * [Workbox Router]{@link workbox.routing.Router}.
   *
   * @param {Object} options
   * @param {Request} options.request The request to run this strategy for.
   * @param {Event} [options.event] The event that triggered the request.
   * @return {Promise<Response>}
   */
  async handle({event, request}) {
    return this.makeRequest({
      event,
      request: request || event.request,
    });
  }
  /**
   * This method can be used to perform a make a standalone request outside the
   * context of the [Workbox Router]{@link workbox.routing.Router}.
   *
   * See "[Advanced Recipes](https://developers.google.com/web/tools/workbox/guides/advanced-recipes#make-requests)"
   * for more usage information.
   *
   * @param {Object} options
   * @param {Request|string} options.request Either a
   *     [`Request`]{@link https://developer.mozilla.org/en-US/docs/Web/API/Request}
   *     object, or a string URL, corresponding to the request to be made.
   * @param {FetchEvent} [options.event] If provided, `event.waitUntil()` will
   *     be called automatically to extend the service worker's lifetime.
   * @return {Promise<Response>}
   */
  async makeRequest({event, request}) {
    const logs = [];

    if (typeof request === 'string') {
      request = new Request(request);
    }

    if (true) {
      workbox_core_private_assert_mjs__WEBPACK_IMPORTED_MODULE_0__["assert"].isInstance(request, Request, {
        moduleName: 'workbox-strategies',
        className: 'StaleWhileRevalidate',
        funcName: 'handle',
        paramName: 'request',
      });
    }

    const fetchAndCachePromise = this._getFromNetwork({request, event});

    let response = await workbox_core_private_cacheWrapper_mjs__WEBPACK_IMPORTED_MODULE_2__["cacheWrapper"].match({
      cacheName: this._cacheName,
      request,
      event,
      matchOptions: this._matchOptions,
      plugins: this._plugins,
    });
    let error;
    if (response) {
      if (true) {
        logs.push(`Found a cached response in the '${this._cacheName}'` +
          ` cache. Will update with the network response in the background.`);
      }

      if (event) {
        try {
          event.waitUntil(fetchAndCachePromise);
        } catch (error) {
          if (true) {
            workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_5__["logger"].warn(`Unable to ensure service worker stays alive when ` +
              `updating cache for '${Object(workbox_core_private_getFriendlyURL_mjs__WEBPACK_IMPORTED_MODULE_4__["getFriendlyURL"])(request.url)}'.`);
          }
        }
      }
    } else {
      if (true) {
        logs.push(`No response found in the '${this._cacheName}' cache. ` +
          `Will wait for the network response.`);
      }
      try {
        response = await fetchAndCachePromise;
      } catch (err) {
        error = err;
      }
    }

    if (true) {
      workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_5__["logger"].groupCollapsed(
          _utils_messages_mjs__WEBPACK_IMPORTED_MODULE_7__["messages"].strategyStart('StaleWhileRevalidate', request));
      for (let log of logs) {
        workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_5__["logger"].log(log);
      }
      _utils_messages_mjs__WEBPACK_IMPORTED_MODULE_7__["messages"].printFinalResponse(response);
      workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_5__["logger"].groupEnd();
    }

    if (!response) {
      throw new workbox_core_private_WorkboxError_mjs__WEBPACK_IMPORTED_MODULE_6__["WorkboxError"]('no-response', {url: request.url, error});
    }
    return response;
  }

  /**
   * @param {Object} options
   * @param {Request} options.request
   * @param {Event} [options.event]
   * @return {Promise<Response>}
   *
   * @private
   */
  async _getFromNetwork({request, event}) {
    const response = await workbox_core_private_fetchWrapper_mjs__WEBPACK_IMPORTED_MODULE_3__["fetchWrapper"].fetch({
      request,
      event,
      fetchOptions: this._fetchOptions,
      plugins: this._plugins,
    });

    const cachePutPromise = workbox_core_private_cacheWrapper_mjs__WEBPACK_IMPORTED_MODULE_2__["cacheWrapper"].put({
      cacheName: this._cacheName,
      request,
      response: response.clone(),
      event,
      plugins: this._plugins,
    });

    if (event) {
      try {
        event.waitUntil(cachePutPromise);
      } catch (error) {
        if (true) {
          workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_5__["logger"].warn(`Unable to ensure service worker stays alive when ` +
            `updating cache for '${Object(workbox_core_private_getFriendlyURL_mjs__WEBPACK_IMPORTED_MODULE_4__["getFriendlyURL"])(request.url)}'.`);
        }
      }
    }

    return response;
  }
}




/***/ }),

/***/ "./node_modules/workbox-strategies/_version.mjs":
/*!******************************************************!*\
  !*** ./node_modules/workbox-strategies/_version.mjs ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
try{self['workbox:strategies:4.3.1']&&_()}catch(e){}// eslint-disable-line

/***/ }),

/***/ "./node_modules/workbox-strategies/index.mjs":
/*!***************************************************!*\
  !*** ./node_modules/workbox-strategies/index.mjs ***!
  \***************************************************/
/*! exports provided: CacheFirst, CacheOnly, NetworkFirst, NetworkOnly, StaleWhileRevalidate, cacheFirst, cacheOnly, networkFirst, networkOnly, staleWhileRevalidate */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cacheFirst", function() { return cacheFirst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cacheOnly", function() { return cacheOnly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "networkFirst", function() { return networkFirst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "networkOnly", function() { return networkOnly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staleWhileRevalidate", function() { return staleWhileRevalidate; });
/* harmony import */ var workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.mjs */ "./node_modules/workbox-core/_private/logger.mjs");
/* harmony import */ var _CacheFirst_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CacheFirst.mjs */ "./node_modules/workbox-strategies/CacheFirst.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CacheFirst", function() { return _CacheFirst_mjs__WEBPACK_IMPORTED_MODULE_1__["CacheFirst"]; });

/* harmony import */ var _CacheOnly_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CacheOnly.mjs */ "./node_modules/workbox-strategies/CacheOnly.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CacheOnly", function() { return _CacheOnly_mjs__WEBPACK_IMPORTED_MODULE_2__["CacheOnly"]; });

/* harmony import */ var _NetworkFirst_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NetworkFirst.mjs */ "./node_modules/workbox-strategies/NetworkFirst.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NetworkFirst", function() { return _NetworkFirst_mjs__WEBPACK_IMPORTED_MODULE_3__["NetworkFirst"]; });

/* harmony import */ var _NetworkOnly_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NetworkOnly.mjs */ "./node_modules/workbox-strategies/NetworkOnly.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NetworkOnly", function() { return _NetworkOnly_mjs__WEBPACK_IMPORTED_MODULE_4__["NetworkOnly"]; });

/* harmony import */ var _StaleWhileRevalidate_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./StaleWhileRevalidate.mjs */ "./node_modules/workbox-strategies/StaleWhileRevalidate.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaleWhileRevalidate", function() { return _StaleWhileRevalidate_mjs__WEBPACK_IMPORTED_MODULE_5__["StaleWhileRevalidate"]; });

/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.mjs */ "./node_modules/workbox-strategies/_version.mjs");
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/










const mapping = {
  cacheFirst: _CacheFirst_mjs__WEBPACK_IMPORTED_MODULE_1__["CacheFirst"],
  cacheOnly: _CacheOnly_mjs__WEBPACK_IMPORTED_MODULE_2__["CacheOnly"],
  networkFirst: _NetworkFirst_mjs__WEBPACK_IMPORTED_MODULE_3__["NetworkFirst"],
  networkOnly: _NetworkOnly_mjs__WEBPACK_IMPORTED_MODULE_4__["NetworkOnly"],
  staleWhileRevalidate: _StaleWhileRevalidate_mjs__WEBPACK_IMPORTED_MODULE_5__["StaleWhileRevalidate"],
};

const deprecate = (strategy) => {
  const StrategyCtr = mapping[strategy];

  return (options) => {
    if (true) {
      const strategyCtrName = strategy[0].toUpperCase() + strategy.slice(1);
      workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_0__["logger"].warn(`The 'workbox.strategies.${strategy}()' function has been ` +
          `deprecated and will be removed in a future version of Workbox.\n` +
          `Please use 'new workbox.strategies.${strategyCtrName}()' instead.`);
    }
    return new StrategyCtr(options);
  };
};

/**
 * @function workbox.strategies.cacheFirst
 * @param {Object} options See the {@link workbox.strategies.CacheFirst}
 * constructor for more info.
 * @deprecated since v4.0.0
 */
const cacheFirst = deprecate('cacheFirst');

/**
 * @function workbox.strategies.cacheOnly
 * @param {Object} options See the {@link workbox.strategies.CacheOnly}
 * constructor for more info.
 * @deprecated since v4.0.0
 */
const cacheOnly = deprecate('cacheOnly');

/**
 * @function workbox.strategies.networkFirst
 * @param {Object} options See the {@link workbox.strategies.NetworkFirst}
 * constructor for more info.
 * @deprecated since v4.0.0
 */
const networkFirst = deprecate('networkFirst');

/**
 * @function workbox.strategies.networkOnly
 * @param {Object} options See the {@link workbox.strategies.NetworkOnly}
 * constructor for more info.
 * @deprecated since v4.0.0
 */
const networkOnly = deprecate('networkOnly');

/**
 * @function workbox.strategies.staleWhileRevalidate
 * @param {Object} options See the
 * {@link workbox.strategies.StaleWhileRevalidate} constructor for more info.
 * @deprecated since v4.0.0
 */
const staleWhileRevalidate = deprecate('staleWhileRevalidate');

/**
 * There are common caching strategies that most service workers will need
 * and use. This module provides simple implementations of these strategies.
 *
 * @namespace workbox.strategies
 */





/***/ }),

/***/ "./node_modules/workbox-strategies/plugins/cacheOkAndOpaquePlugin.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/workbox-strategies/plugins/cacheOkAndOpaquePlugin.mjs ***!
  \****************************************************************************/
/*! exports provided: cacheOkAndOpaquePlugin */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cacheOkAndOpaquePlugin", function() { return cacheOkAndOpaquePlugin; });
/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.mjs */ "./node_modules/workbox-strategies/_version.mjs");
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



const cacheOkAndOpaquePlugin = {
  /**
   * Returns a valid response (to allow caching) if the status is 200 (OK) or
   * 0 (opaque).
   *
   * @param {Object} options
   * @param {Response} options.response
   * @return {Response|null}
   *
   * @private
   */
  cacheWillUpdate: ({response}) => {
    if (response.status === 200 || response.status === 0) {
      return response;
    }
    return null;
  },
};


/***/ }),

/***/ "./node_modules/workbox-strategies/utils/messages.mjs":
/*!************************************************************!*\
  !*** ./node_modules/workbox-strategies/utils/messages.mjs ***!
  \************************************************************/
/*! exports provided: messages */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messages", function() { return messages; });
/* harmony import */ var workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.mjs */ "./node_modules/workbox-core/_private/logger.mjs");
/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.mjs */ "./node_modules/workbox-strategies/_version.mjs");
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




const getFriendlyURL = (url) => {
  const urlObj = new URL(url, location);
  if (urlObj.origin === location.origin) {
    return urlObj.pathname;
  }
  return urlObj.href;
};

const messages = {
  strategyStart: (strategyName, request) => `Using ${strategyName} to ` +
    `respond to '${getFriendlyURL(request.url)}'`,
  printFinalResponse: (response) => {
    if (response) {
      workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_0__["logger"].groupCollapsed(`View the final response here.`);
      workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_0__["logger"].log(response);
      workbox_core_private_logger_mjs__WEBPACK_IMPORTED_MODULE_0__["logger"].groupEnd();
    }
  },
};


/***/ }),

/***/ "./sw.js":
/*!***************!*\
  !*** ./sw.js ***!
  \***************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var workbox_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core */ "./node_modules/workbox-core/index.mjs");
/* harmony import */ var workbox_expiration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-expiration */ "./node_modules/workbox-expiration/index.mjs");
/* harmony import */ var workbox_strategies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-strategies */ "./node_modules/workbox-strategies/index.mjs");
/* harmony import */ var workbox_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-routing */ "./node_modules/workbox-routing/index.mjs");
/* harmony import */ var workbox_precaching__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-precaching */ "./node_modules/workbox-precaching/index.mjs");





Object(workbox_core__WEBPACK_IMPORTED_MODULE_0__["skipWaiting"])();
Object(workbox_core__WEBPACK_IMPORTED_MODULE_0__["clientsClaim"])(); // must include following lines when using inject manifest module from workbox
// https://developers.google.com/web/tools/workbox/guides/precache-files/workbox-build#add_an_injection_point

var WB_MANIFEST = []; // Precache fallback route and image

WB_MANIFEST.push({
  url: '/fallback',
  revision: '1234567890'
});
Object(workbox_precaching__WEBPACK_IMPORTED_MODULE_4__["precacheAndRoute"])(WB_MANIFEST);
Object(workbox_precaching__WEBPACK_IMPORTED_MODULE_4__["cleanupOutdatedCaches"])();
Object(workbox_routing__WEBPACK_IMPORTED_MODULE_3__["registerRoute"])('/', new workbox_strategies__WEBPACK_IMPORTED_MODULE_2__["NetworkFirst"]({
  cacheName: 'start-url',
  plugins: [new workbox_expiration__WEBPACK_IMPORTED_MODULE_1__["Plugin"]({
    maxEntries: 1,
    maxAgeSeconds: 86400,
    purgeOnQuotaError: !0
  })]
}), 'GET');
Object(workbox_routing__WEBPACK_IMPORTED_MODULE_3__["registerRoute"])(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i, new workbox_strategies__WEBPACK_IMPORTED_MODULE_2__["CacheFirst"]({
  cacheName: 'google-fonts',
  plugins: [new workbox_expiration__WEBPACK_IMPORTED_MODULE_1__["Plugin"]({
    maxEntries: 4,
    maxAgeSeconds: 31536e3,
    purgeOnQuotaError: !0
  })]
}), 'GET');
Object(workbox_routing__WEBPACK_IMPORTED_MODULE_3__["registerRoute"])(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i, new workbox_strategies__WEBPACK_IMPORTED_MODULE_2__["StaleWhileRevalidate"]({
  cacheName: 'static-font-assets',
  plugins: [new workbox_expiration__WEBPACK_IMPORTED_MODULE_1__["Plugin"]({
    maxEntries: 4,
    maxAgeSeconds: 604800,
    purgeOnQuotaError: !0
  })]
}), 'GET'); // disable image cache, so we could observe the placeholder image when offline

Object(workbox_routing__WEBPACK_IMPORTED_MODULE_3__["registerRoute"])(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i, new workbox_strategies__WEBPACK_IMPORTED_MODULE_2__["CacheFirst"]({
  cacheName: 'static-image-assets',
  plugins: [new workbox_expiration__WEBPACK_IMPORTED_MODULE_1__["Plugin"]({
    maxEntries: 64,
    maxAgeSeconds: 86400,
    purgeOnQuotaError: !0
  })]
}), 'GET');
Object(workbox_routing__WEBPACK_IMPORTED_MODULE_3__["registerRoute"])(/\.(?:js)$/i, new workbox_strategies__WEBPACK_IMPORTED_MODULE_2__["StaleWhileRevalidate"]({
  cacheName: 'static-js-assets',
  plugins: [new workbox_expiration__WEBPACK_IMPORTED_MODULE_1__["Plugin"]({
    maxEntries: 32,
    maxAgeSeconds: 86400,
    purgeOnQuotaError: !0
  })]
}), 'GET');
Object(workbox_routing__WEBPACK_IMPORTED_MODULE_3__["registerRoute"])(/\.(?:css|less)$/i, new workbox_strategies__WEBPACK_IMPORTED_MODULE_2__["StaleWhileRevalidate"]({
  cacheName: 'static-style-assets',
  plugins: [new workbox_expiration__WEBPACK_IMPORTED_MODULE_1__["Plugin"]({
    maxEntries: 32,
    maxAgeSeconds: 86400,
    purgeOnQuotaError: !0
  })]
}), 'GET');
Object(workbox_routing__WEBPACK_IMPORTED_MODULE_3__["registerRoute"])(/\.(?:json|xml|csv)$/i, new workbox_strategies__WEBPACK_IMPORTED_MODULE_2__["NetworkFirst"]({
  cacheName: 'static-data-assets',
  plugins: [new workbox_expiration__WEBPACK_IMPORTED_MODULE_1__["Plugin"]({
    maxEntries: 32,
    maxAgeSeconds: 86400,
    purgeOnQuotaError: !0
  })]
}), 'GET');
Object(workbox_routing__WEBPACK_IMPORTED_MODULE_3__["registerRoute"])(/\/api\/.*$/i, new workbox_strategies__WEBPACK_IMPORTED_MODULE_2__["NetworkFirst"]({
  cacheName: 'apis',
  networkTimeoutSeconds: 10,
  plugins: [new workbox_expiration__WEBPACK_IMPORTED_MODULE_1__["Plugin"]({
    maxEntries: 16,
    maxAgeSeconds: 86400,
    purgeOnQuotaError: !0
  })]
}), 'GET');
Object(workbox_routing__WEBPACK_IMPORTED_MODULE_3__["registerRoute"])(/.*/i, new workbox_strategies__WEBPACK_IMPORTED_MODULE_2__["NetworkFirst"]({
  cacheName: 'others',
  networkTimeoutSeconds: 10,
  plugins: [new workbox_expiration__WEBPACK_IMPORTED_MODULE_1__["Plugin"]({
    maxEntries: 32,
    maxAgeSeconds: 86400,
    purgeOnQuotaError: !0
  })]
}), 'GET'); // following lines gives you control of the offline fallback strategies
// https://developers.google.com/web/tools/workbox/guides/advanced-recipes#comprehensive_fallbacks
// Use a stale-while-revalidate strategy for all other requests.

Object(workbox_routing__WEBPACK_IMPORTED_MODULE_3__["setDefaultHandler"])(new workbox_strategies__WEBPACK_IMPORTED_MODULE_2__["StaleWhileRevalidate"]()); // This "catch" handler is triggered when any of the other routes fail to
// generate a response.

Object(workbox_routing__WEBPACK_IMPORTED_MODULE_3__["setCatchHandler"])(function (_ref) {
  var event = _ref.event;

  // The FALLBACK_URL entries must be added to the cache ahead of time, either
  // via runtime or precaching. If they are precached, then call
  // `matchPrecache(FALLBACK_URL)` (from the `workbox-precaching` package)
  // to get the response from the correct cache.
  //
  // Use event, request, and url to figure out how to respond.
  // One approach would be to use request.destination, see
  // https://medium.com/dev-channel/service-worker-caching-strategies-based-on-request-types-57411dd7652c
  switch (event.request.destination) {
    case 'document':
      // If using precached URLs:
      return Object(workbox_precaching__WEBPACK_IMPORTED_MODULE_4__["precache"])('/fallback'); // return caches.match('/fallback')

      break;

    case 'image':
      // If using precached URLs:
      return Object(workbox_precaching__WEBPACK_IMPORTED_MODULE_4__["precache"])('/static/images/fallback.png'); // return caches.match('/static/images/fallback.png')

      break;

    case 'font': // If using precached URLs:
    // return precache(FALLBACK_FONT_URL);
    //return caches.match('/static/fonts/fallback.otf')
    //break

    default:
      // If we don't have a fallback, just return an error response.
      return Response.error();
  }
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL19OX0UvKHdlYnBhY2spL3dlYnBhY2svaGFybW9ueS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvX3ByaXZhdGUubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1jb3JlL19wcml2YXRlL0RCV3JhcHBlci5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvX3ByaXZhdGUvRGVmZXJyZWQubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1jb3JlL19wcml2YXRlL1dvcmtib3hFcnJvci5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvX3ByaXZhdGUvYXNzZXJ0Lm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9fcHJpdmF0ZS9jYWNoZU5hbWVzLm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9fcHJpdmF0ZS9jYWNoZVdyYXBwZXIubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1jb3JlL19wcml2YXRlL2RlbGV0ZURhdGFiYXNlLm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9fcHJpdmF0ZS9leGVjdXRlUXVvdGFFcnJvckNhbGxiYWNrcy5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvX3ByaXZhdGUvZmV0Y2hXcmFwcGVyLm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9fcHJpdmF0ZS9nZXRGcmllbmRseVVSTC5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvX3ByaXZhdGUvbG9nZ2VyLm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9fdmVyc2lvbi5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvY2FjaGVOYW1lcy5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvY2xpZW50c0NsYWltLm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvbW9kZWxzL21lc3NhZ2VzL21lc3NhZ2VHZW5lcmF0b3IubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1jb3JlL21vZGVscy9tZXNzYWdlcy9tZXNzYWdlcy5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvbW9kZWxzL3BsdWdpbkV2ZW50cy5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvbW9kZWxzL3F1b3RhRXJyb3JDYWxsYmFja3MubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1jb3JlL3JlZ2lzdGVyUXVvdGFFcnJvckNhbGxiYWNrLm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9zZXRDYWNoZU5hbWVEZXRhaWxzLm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9za2lwV2FpdGluZy5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvdXRpbHMvcGx1Z2luVXRpbHMubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1leHBpcmF0aW9uL0NhY2hlRXhwaXJhdGlvbi5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LWV4cGlyYXRpb24vUGx1Z2luLm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtZXhwaXJhdGlvbi9fdmVyc2lvbi5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LWV4cGlyYXRpb24vaW5kZXgubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1leHBpcmF0aW9uL21vZGVscy9DYWNoZVRpbWVzdGFtcHNNb2RlbC5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvUHJlY2FjaGVDb250cm9sbGVyLm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy9fdmVyc2lvbi5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvYWRkUGx1Z2lucy5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvYWRkUm91dGUubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1wcmVjYWNoaW5nL2NsZWFudXBPdXRkYXRlZENhY2hlcy5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvZ2V0Q2FjaGVLZXlGb3JVUkwubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1wcmVjYWNoaW5nL2luZGV4Lm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy9wcmVjYWNoZS5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvcHJlY2FjaGVBbmRSb3V0ZS5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvdXRpbHMvYWRkRmV0Y2hMaXN0ZW5lci5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvdXRpbHMvY2xlYW5SZWRpcmVjdC5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvdXRpbHMvY3JlYXRlQ2FjaGVLZXkubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1wcmVjYWNoaW5nL3V0aWxzL2RlbGV0ZU91dGRhdGVkQ2FjaGVzLm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy91dGlscy9nZW5lcmF0ZVVSTFZhcmlhdGlvbnMubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1wcmVjYWNoaW5nL3V0aWxzL2dldENhY2hlS2V5Rm9yVVJMLm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy91dGlscy9nZXRPckNyZWF0ZVByZWNhY2hlQ29udHJvbGxlci5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvdXRpbHMvcHJlY2FjaGVQbHVnaW5zLm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy91dGlscy9wcmludENsZWFudXBEZXRhaWxzLm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy91dGlscy9wcmludEluc3RhbGxEZXRhaWxzLm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy91dGlscy9yZW1vdmVJZ25vcmVkU2VhcmNoUGFyYW1zLm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcm91dGluZy9OYXZpZ2F0aW9uUm91dGUubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1yb3V0aW5nL1JlZ0V4cFJvdXRlLm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcm91dGluZy9Sb3V0ZS5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXJvdXRpbmcvUm91dGVyLm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcm91dGluZy9fdmVyc2lvbi5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXJvdXRpbmcvaW5kZXgubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1yb3V0aW5nL3JlZ2lzdGVyTmF2aWdhdGlvblJvdXRlLm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcm91dGluZy9yZWdpc3RlclJvdXRlLm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcm91dGluZy9zZXRDYXRjaEhhbmRsZXIubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1yb3V0aW5nL3NldERlZmF1bHRIYW5kbGVyLm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcm91dGluZy91dGlscy9jb25zdGFudHMubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1yb3V0aW5nL3V0aWxzL2dldE9yQ3JlYXRlRGVmYXVsdFJvdXRlci5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXJvdXRpbmcvdXRpbHMvbm9ybWFsaXplSGFuZGxlci5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXN0cmF0ZWdpZXMvQ2FjaGVGaXJzdC5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXN0cmF0ZWdpZXMvQ2FjaGVPbmx5Lm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtc3RyYXRlZ2llcy9OZXR3b3JrRmlyc3QubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1zdHJhdGVnaWVzL05ldHdvcmtPbmx5Lm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtc3RyYXRlZ2llcy9TdGFsZVdoaWxlUmV2YWxpZGF0ZS5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXN0cmF0ZWdpZXMvX3ZlcnNpb24ubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1zdHJhdGVnaWVzL2luZGV4Lm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtc3RyYXRlZ2llcy9wbHVnaW5zL2NhY2hlT2tBbmRPcGFxdWVQbHVnaW4ubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1zdHJhdGVnaWVzL3V0aWxzL21lc3NhZ2VzLm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3cuanMiXSwibmFtZXMiOlsic2tpcFdhaXRpbmciLCJjbGllbnRzQ2xhaW0iLCJXQl9NQU5JRkVTVCIsInNlbGYiLCJfX1dCX01BTklGRVNUIiwicHVzaCIsInVybCIsInJldmlzaW9uIiwicHJlY2FjaGVBbmRSb3V0ZSIsImNsZWFudXBPdXRkYXRlZENhY2hlcyIsInJlZ2lzdGVyUm91dGUiLCJOZXR3b3JrRmlyc3QiLCJjYWNoZU5hbWUiLCJwbHVnaW5zIiwiRXhwaXJhdGlvblBsdWdpbiIsIm1heEVudHJpZXMiLCJtYXhBZ2VTZWNvbmRzIiwicHVyZ2VPblF1b3RhRXJyb3IiLCJDYWNoZUZpcnN0IiwiU3RhbGVXaGlsZVJldmFsaWRhdGUiLCJuZXR3b3JrVGltZW91dFNlY29uZHMiLCJzZXREZWZhdWx0SGFuZGxlciIsInNldENhdGNoSGFuZGxlciIsImV2ZW50IiwicmVxdWVzdCIsImRlc3RpbmF0aW9uIiwicHJlY2FjaGUiLCJSZXNwb25zZSIsImVycm9yIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQSxZQUFZO1FBQ1o7UUFDQTs7UUFFQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDOUdBO0FBQ0Esc0JBQXNCO0FBQ3RCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFD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LGlCQUFhLEVBQUUsS0FBakM7QUFBd0NDLHFCQUFpQixFQUFFLENBQUM7QUFBNUQsR0FBckIsQ0FBRDtBQUhJLENBQWpCLENBRlMsRUFPVCxLQVBTLENBQWIsQyxDQVVBO0FBQ0E7QUFFQTs7QUFDQUkseUVBQWlCLENBQUMsSUFBSUYsdUVBQUosRUFBRCxDQUFqQixDLENBRUE7QUFDQTs7QUFDQUcsdUVBQWUsQ0FBQyxnQkFBZTtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTs7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVFBLEtBQUssQ0FBQ0MsT0FBTixDQUFjQyxXQUF0QjtBQUNJLFNBQUssVUFBTDtBQUNJO0FBQ0EsYUFBT0MsbUVBQVEsQ0FBQyxXQUFELENBQWYsQ0FGSixDQUdJOztBQUNBOztBQUNKLFNBQUssT0FBTDtBQUNJO0FBQ0EsYUFBT0EsbUVBQVEsQ0FBQyw2QkFBRCxDQUFmLENBRkosQ0FHSTs7QUFDQTs7QUFDSixTQUFLLE1BQUwsQ0FYSixDQVlJO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0k7QUFDQSxhQUFPQyxRQUFRLENBQUNDLEtBQVQsRUFBUDtBQWxCUjtBQW9CSCxDQTdCYyxDQUFmIiwiZmlsZSI6Ii4uL3B1YmxpYy9zdy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG5vb3AgZm5zIHRvIHByZXZlbnQgcnVudGltZSBlcnJvcnMgZHVyaW5nIGluaXRpYWxpemF0aW9uXG4gXHRpZiAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIpIHtcbiBcdFx0c2VsZi4kUmVmcmVzaFJlZyQgPSBmdW5jdGlvbiAoKSB7fTtcbiBcdFx0c2VsZi4kUmVmcmVzaFNpZyQgPSBmdW5jdGlvbiAoKSB7XG4gXHRcdFx0cmV0dXJuIGZ1bmN0aW9uICh0eXBlKSB7XG4gXHRcdFx0XHRyZXR1cm4gdHlwZTtcbiBcdFx0XHR9O1xuIFx0XHR9O1xuIFx0fVxuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuXG4gXHRcdCAgICAgICAgdmFyIGhhc1JlZnJlc2ggPSB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiAhIXNlbGYuJFJlZnJlc2hJbnRlcmNlcHRNb2R1bGVFeGVjdXRpb24kO1xuIFx0XHQgICAgICAgIHZhciBjbGVhbnVwID0gaGFzUmVmcmVzaFxuIFx0XHQgICAgICAgICAgPyBzZWxmLiRSZWZyZXNoSW50ZXJjZXB0TW9kdWxlRXhlY3V0aW9uJChtb2R1bGVJZClcbiBcdFx0ICAgICAgICAgIDogZnVuY3Rpb24oKSB7fTtcbiBcdFx0ICAgICAgICB0cnkge1xuIFx0XHQgICAgICAgIFxuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdCAgICAgICAgfSBmaW5hbGx5IHtcbiBcdFx0ICAgICAgICAgIGNsZWFudXAoKTtcbiBcdFx0ICAgICAgICB9XG4gXHRcdCAgICAgICAgXG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zdy5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID1cbi8qKioqKiovIChmdW5jdGlvbigpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHR2YXIgX193ZWJwYWNrX21vZHVsZXNfXyA9ICh7XG5cbi8qKiovIDkzMTpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUpIHtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbE1vZHVsZSkge1xuXHRpZiAoIW9yaWdpbmFsTW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdHZhciBtb2R1bGUgPSBPYmplY3QuY3JlYXRlKG9yaWdpbmFsTW9kdWxlKTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJleHBvcnRzXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWVcblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcblxuXG4vKioqLyB9KVxuXG4vKioqKioqLyBcdH0pO1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX25jY3dwY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcbi8qKioqKiovIFx0XHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdHZhciB0aHJldyA9IHRydWU7XG4vKioqKioqLyBcdFx0dHJ5IHtcbi8qKioqKiovIFx0XHRcdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fbmNjd3Bja19yZXF1aXJlX18pO1xuLyoqKioqKi8gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbi8qKioqKiovIFx0XHR9IGZpbmFsbHkge1xuLyoqKioqKi8gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovIFx0XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHQvKiB3ZWJwYWNrL3J1bnRpbWUvY29tcGF0ICovXG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHRfX25jY3dwY2tfcmVxdWlyZV9fLmFiID0gX19kaXJuYW1lICsgXCIvXCI7LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIFx0Ly8gbW9kdWxlIGV4cG9ydHMgbXVzdCBiZSByZXR1cm5lZCBmcm9tIHJ1bnRpbWUgc28gZW50cnkgaW5saW5pbmcgaXMgZGlzYWJsZWRcbi8qKioqKiovIFx0Ly8gc3RhcnR1cFxuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fbmNjd3Bja19yZXF1aXJlX18oOTMxKTtcbi8qKioqKiovIH0pKClcbjsiLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbi8vIFdlIGVpdGhlciBleHBvc2UgZGVmYXVsdHMgb3Igd2UgZXhwb3NlIGV2ZXJ5IG5hbWVkIGV4cG9ydC5cbmltcG9ydCB7YXNzZXJ0fSBmcm9tICcuL19wcml2YXRlL2Fzc2VydC5tanMnO1xuaW1wb3J0IHtjYWNoZU5hbWVzfSBmcm9tICcuL19wcml2YXRlL2NhY2hlTmFtZXMubWpzJztcbmltcG9ydCB7Y2FjaGVXcmFwcGVyfSBmcm9tICcuL19wcml2YXRlL2NhY2hlV3JhcHBlci5tanMnO1xuaW1wb3J0IHtEQldyYXBwZXJ9IGZyb20gJy4vX3ByaXZhdGUvREJXcmFwcGVyLm1qcyc7XG5pbXBvcnQge0RlZmVycmVkfSBmcm9tICcuL19wcml2YXRlL0RlZmVycmVkLm1qcyc7XG5pbXBvcnQge2RlbGV0ZURhdGFiYXNlfSBmcm9tICcuL19wcml2YXRlL2RlbGV0ZURhdGFiYXNlLm1qcyc7XG5pbXBvcnQge2V4ZWN1dGVRdW90YUVycm9yQ2FsbGJhY2tzfSBmcm9tICcuL19wcml2YXRlL2V4ZWN1dGVRdW90YUVycm9yQ2FsbGJhY2tzLm1qcyc7XG5pbXBvcnQge2ZldGNoV3JhcHBlcn0gZnJvbSAnLi9fcHJpdmF0ZS9mZXRjaFdyYXBwZXIubWpzJztcbmltcG9ydCB7Z2V0RnJpZW5kbHlVUkx9IGZyb20gJy4vX3ByaXZhdGUvZ2V0RnJpZW5kbHlVUkwubWpzJztcbmltcG9ydCB7bG9nZ2VyfSBmcm9tICcuL19wcml2YXRlL2xvZ2dlci5tanMnO1xuaW1wb3J0IHtXb3JrYm94RXJyb3J9IGZyb20gJy4vX3ByaXZhdGUvV29ya2JveEVycm9yLm1qcyc7XG5cbmltcG9ydCAnLi9fdmVyc2lvbi5tanMnO1xuXG5leHBvcnQge1xuICBhc3NlcnQsXG4gIGNhY2hlTmFtZXMsXG4gIGNhY2hlV3JhcHBlcixcbiAgREJXcmFwcGVyLFxuICBEZWZlcnJlZCxcbiAgZGVsZXRlRGF0YWJhc2UsXG4gIGV4ZWN1dGVRdW90YUVycm9yQ2FsbGJhY2tzLFxuICBmZXRjaFdyYXBwZXIsXG4gIGdldEZyaWVuZGx5VVJMLFxuICBsb2dnZXIsXG4gIFdvcmtib3hFcnJvcixcbn07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCAnLi4vX3ZlcnNpb24ubWpzJztcblxuXG4vKipcbiAqIEEgY2xhc3MgdGhhdCB3cmFwcyBjb21tb24gSW5kZXhlZERCIGZ1bmN0aW9uYWxpdHkgaW4gYSBwcm9taXNlLWJhc2VkIEFQSS5cbiAqIEl0IGV4cG9zZXMgYWxsIHRoZSB1bmRlcmx5aW5nIHBvd2VyIGFuZCBmdW5jdGlvbmFsaXR5IG9mIEluZGV4ZWREQiwgYnV0XG4gKiB3cmFwcyB0aGUgbW9zdCBjb21tb25seSB1c2VkIGZlYXR1cmVzIGluIGEgd2F5IHRoYXQncyBtdWNoIHNpbXBsZXIgdG8gdXNlLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBjbGFzcyBEQldyYXBwZXIge1xuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICogQHBhcmFtIHtudW1iZXJ9IHZlcnNpb25cbiAgICogQHBhcmFtIHtPYmplY3Q9fSBbY2FsbGJhY2tdXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBbY2FsbGJhY2tzLm9udXBncmFkZW5lZWRlZF1cbiAgICogQHBhcmFtIHshRnVuY3Rpb259IFtjYWxsYmFja3Mub252ZXJzaW9uY2hhbmdlXSBEZWZhdWx0cyB0b1xuICAgKiAgICAgREJXcmFwcGVyLnByb3RvdHlwZS5fb252ZXJzaW9uY2hhbmdlIHdoZW4gbm90IHNwZWNpZmllZC5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNvbnN0cnVjdG9yKG5hbWUsIHZlcnNpb24sIHtcbiAgICBvbnVwZ3JhZGVuZWVkZWQsXG4gICAgb252ZXJzaW9uY2hhbmdlID0gdGhpcy5fb252ZXJzaW9uY2hhbmdlLFxuICB9ID0ge30pIHtcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgICB0aGlzLl92ZXJzaW9uID0gdmVyc2lvbjtcbiAgICB0aGlzLl9vbnVwZ3JhZGVuZWVkZWQgPSBvbnVwZ3JhZGVuZWVkZWQ7XG4gICAgdGhpcy5fb252ZXJzaW9uY2hhbmdlID0gb252ZXJzaW9uY2hhbmdlO1xuXG4gICAgLy8gSWYgdGhpcyBpcyBudWxsLCBpdCBtZWFucyB0aGUgZGF0YWJhc2UgaXNuJ3Qgb3Blbi5cbiAgICB0aGlzLl9kYiA9IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgSURCRGF0YWJhc2UgaW5zdGFuY2UgKG5vdCBub3JtYWxseSBuZWVkZWQpLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0IGRiKCkge1xuICAgIHJldHVybiB0aGlzLl9kYjtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucyBhIGNvbm5lY3RlZCB0byBhbiBJREJEYXRhYmFzZSwgaW52b2tlcyBhbnkgb251cGdyYWRlZG5lZWRlZFxuICAgKiBjYWxsYmFjaywgYW5kIGFkZGVkIGFuIG9udmVyc2lvbmNoYW5nZSBjYWxsYmFjayB0byB0aGUgZGF0YWJhc2UuXG4gICAqXG4gICAqIEByZXR1cm4ge0lEQkRhdGFiYXNlfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYXN5bmMgb3BlbigpIHtcbiAgICBpZiAodGhpcy5fZGIpIHJldHVybjtcblxuICAgIHRoaXMuX2RiID0gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgLy8gVGhpcyBmbGFnIGlzIGZsaXBwZWQgdG8gdHJ1ZSBpZiB0aGUgdGltZW91dCBjYWxsYmFjayBydW5zIHByaW9yXG4gICAgICAvLyB0byB0aGUgcmVxdWVzdCBmYWlsaW5nIG9yIHN1Y2NlZWRpbmcuIE5vdGU6IHdlIHVzZSBhIHRpbWVvdXQgaW5zdGVhZFxuICAgICAgLy8gb2YgYW4gb25ibG9ja2VkIGhhbmRsZXIgc2luY2UgdGhlcmUgYXJlIGNhc2VzIHdoZXJlIG9uYmxvY2tlZCB3aWxsXG4gICAgICAvLyBuZXZlciBuZXZlciBydW4uIEEgdGltZW91dCBiZXR0ZXIgaGFuZGxlcyBhbGwgcG9zc2libGUgc2NlbmFyaW9zOlxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3czYy9JbmRleGVkREIvaXNzdWVzLzIyM1xuICAgICAgbGV0IG9wZW5SZXF1ZXN0VGltZWRPdXQgPSBmYWxzZTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBvcGVuUmVxdWVzdFRpbWVkT3V0ID0gdHJ1ZTtcbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignVGhlIG9wZW4gcmVxdWVzdCB3YXMgYmxvY2tlZCBhbmQgdGltZWQgb3V0JykpO1xuICAgICAgfSwgdGhpcy5PUEVOX1RJTUVPVVQpO1xuXG4gICAgICBjb25zdCBvcGVuUmVxdWVzdCA9IGluZGV4ZWREQi5vcGVuKHRoaXMuX25hbWUsIHRoaXMuX3ZlcnNpb24pO1xuICAgICAgb3BlblJlcXVlc3Qub25lcnJvciA9ICgpID0+IHJlamVjdChvcGVuUmVxdWVzdC5lcnJvcik7XG4gICAgICBvcGVuUmVxdWVzdC5vbnVwZ3JhZGVuZWVkZWQgPSAoZXZ0KSA9PiB7XG4gICAgICAgIGlmIChvcGVuUmVxdWVzdFRpbWVkT3V0KSB7XG4gICAgICAgICAgb3BlblJlcXVlc3QudHJhbnNhY3Rpb24uYWJvcnQoKTtcbiAgICAgICAgICBldnQudGFyZ2V0LnJlc3VsdC5jbG9zZSgpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX29udXBncmFkZW5lZWRlZCkge1xuICAgICAgICAgIHRoaXMuX29udXBncmFkZW5lZWRlZChldnQpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgb3BlblJlcXVlc3Qub25zdWNjZXNzID0gKHt0YXJnZXR9KSA9PiB7XG4gICAgICAgIGNvbnN0IGRiID0gdGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgaWYgKG9wZW5SZXF1ZXN0VGltZWRPdXQpIHtcbiAgICAgICAgICBkYi5jbG9zZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRiLm9udmVyc2lvbmNoYW5nZSA9IHRoaXMuX29udmVyc2lvbmNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICAgIHJlc29sdmUoZGIpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogUG9seWZpbGxzIHRoZSBuYXRpdmUgYGdldEtleSgpYCBtZXRob2QuIE5vdGUsIHRoaXMgaXMgb3ZlcnJpZGRlbiBhdFxuICAgKiBydW50aW1lIGlmIHRoZSBicm93c2VyIHN1cHBvcnRzIHRoZSBuYXRpdmUgbWV0aG9kLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RvcmVOYW1lXG4gICAqIEBwYXJhbSB7Kn0gcXVlcnlcbiAgICogQHJldHVybiB7QXJyYXl9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBhc3luYyBnZXRLZXkoc3RvcmVOYW1lLCBxdWVyeSkge1xuICAgIHJldHVybiAoYXdhaXQgdGhpcy5nZXRBbGxLZXlzKHN0b3JlTmFtZSwgcXVlcnksIDEpKVswXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQb2x5ZmlsbHMgdGhlIG5hdGl2ZSBgZ2V0QWxsKClgIG1ldGhvZC4gTm90ZSwgdGhpcyBpcyBvdmVycmlkZGVuIGF0XG4gICAqIHJ1bnRpbWUgaWYgdGhlIGJyb3dzZXIgc3VwcG9ydHMgdGhlIG5hdGl2ZSBtZXRob2QuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdG9yZU5hbWVcbiAgICogQHBhcmFtIHsqfSBxdWVyeVxuICAgKiBAcGFyYW0ge251bWJlcn0gY291bnRcbiAgICogQHJldHVybiB7QXJyYXl9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBhc3luYyBnZXRBbGwoc3RvcmVOYW1lLCBxdWVyeSwgY291bnQpIHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5nZXRBbGxNYXRjaGluZyhzdG9yZU5hbWUsIHtxdWVyeSwgY291bnR9KTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIFBvbHlmaWxscyB0aGUgbmF0aXZlIGBnZXRBbGxLZXlzKClgIG1ldGhvZC4gTm90ZSwgdGhpcyBpcyBvdmVycmlkZGVuIGF0XG4gICAqIHJ1bnRpbWUgaWYgdGhlIGJyb3dzZXIgc3VwcG9ydHMgdGhlIG5hdGl2ZSBtZXRob2QuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdG9yZU5hbWVcbiAgICogQHBhcmFtIHsqfSBxdWVyeVxuICAgKiBAcGFyYW0ge251bWJlcn0gY291bnRcbiAgICogQHJldHVybiB7QXJyYXl9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBhc3luYyBnZXRBbGxLZXlzKHN0b3JlTmFtZSwgcXVlcnksIGNvdW50KSB7XG4gICAgcmV0dXJuIChhd2FpdCB0aGlzLmdldEFsbE1hdGNoaW5nKFxuICAgICAgICBzdG9yZU5hbWUsIHtxdWVyeSwgY291bnQsIGluY2x1ZGVLZXlzOiB0cnVlfSkpLm1hcCgoe2tleX0pID0+IGtleSk7XG4gIH1cblxuICAvKipcbiAgICogU3VwcG9ydHMgZmxleGlibGUgbG9va3VwIGluIGFuIG9iamVjdCBzdG9yZSBieSBzcGVjaWZ5aW5nIGFuIGluZGV4LFxuICAgKiBxdWVyeSwgZGlyZWN0aW9uLCBhbmQgY291bnQuIFRoaXMgbWV0aG9kIHJldHVybnMgYW4gYXJyYXkgb2Ygb2JqZWN0c1xuICAgKiB3aXRoIHRoZSBzaWduYXR1cmUgLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RvcmVOYW1lXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0c11cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmluZGV4XSBUaGUgaW5kZXggdG8gdXNlIChpZiBzcGVjaWZpZWQpLlxuICAgKiBAcGFyYW0geyp9IFtvcHRzLnF1ZXJ5XVxuICAgKiBAcGFyYW0ge0lEQkN1cnNvckRpcmVjdGlvbn0gW29wdHMuZGlyZWN0aW9uXVxuICAgKiBAcGFyYW0ge251bWJlcn0gW29wdHMuY291bnRdIFRoZSBtYXggbnVtYmVyIG9mIHJlc3VsdHMgdG8gcmV0dXJuLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmluY2x1ZGVLZXlzXSBXaGVuIHRydWUsIHRoZSBzdHJ1Y3R1cmUgb2YgdGhlXG4gICAqICAgICByZXR1cm5lZCBvYmplY3RzIGlzIGNoYW5nZWQgZnJvbSBhbiBhcnJheSBvZiB2YWx1ZXMgdG8gYW4gYXJyYXkgb2ZcbiAgICogICAgIG9iamVjdHMgaW4gdGhlIGZvcm0ge2tleSwgcHJpbWFyeUtleSwgdmFsdWV9LlxuICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGFzeW5jIGdldEFsbE1hdGNoaW5nKHN0b3JlTmFtZSwge1xuICAgIGluZGV4LFxuICAgIHF1ZXJ5ID0gbnVsbCwgLy8gSUUgZXJyb3JzIGlmIHF1ZXJ5ID09PSBgdW5kZWZpbmVkYC5cbiAgICBkaXJlY3Rpb24gPSAnbmV4dCcsXG4gICAgY291bnQsXG4gICAgaW5jbHVkZUtleXMsXG4gIH0gPSB7fSkge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLnRyYW5zYWN0aW9uKFtzdG9yZU5hbWVdLCAncmVhZG9ubHknLCAodHhuLCBkb25lKSA9PiB7XG4gICAgICBjb25zdCBzdG9yZSA9IHR4bi5vYmplY3RTdG9yZShzdG9yZU5hbWUpO1xuICAgICAgY29uc3QgdGFyZ2V0ID0gaW5kZXggPyBzdG9yZS5pbmRleChpbmRleCkgOiBzdG9yZTtcbiAgICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcblxuICAgICAgdGFyZ2V0Lm9wZW5DdXJzb3IocXVlcnksIGRpcmVjdGlvbikub25zdWNjZXNzID0gKHt0YXJnZXR9KSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnNvciA9IHRhcmdldC5yZXN1bHQ7XG4gICAgICAgIGlmIChjdXJzb3IpIHtcbiAgICAgICAgICBjb25zdCB7cHJpbWFyeUtleSwga2V5LCB2YWx1ZX0gPSBjdXJzb3I7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKGluY2x1ZGVLZXlzID8ge3ByaW1hcnlLZXksIGtleSwgdmFsdWV9IDogdmFsdWUpO1xuICAgICAgICAgIGlmIChjb3VudCAmJiByZXN1bHRzLmxlbmd0aCA+PSBjb3VudCkge1xuICAgICAgICAgICAgZG9uZShyZXN1bHRzKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3Vyc29yLmNvbnRpbnVlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRvbmUocmVzdWx0cyk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWNjZXB0cyBhIGxpc3Qgb2Ygc3RvcmVzLCBhIHRyYW5zYWN0aW9uIHR5cGUsIGFuZCBhIGNhbGxiYWNrIGFuZFxuICAgKiBwZXJmb3JtcyBhIHRyYW5zYWN0aW9uLiBBIHByb21pc2UgaXMgcmV0dXJuZWQgdGhhdCByZXNvbHZlcyB0byB3aGF0ZXZlclxuICAgKiB2YWx1ZSB0aGUgY2FsbGJhY2sgY2hvb3Nlcy4gVGhlIGNhbGxiYWNrIGhvbGRzIGFsbCB0aGUgdHJhbnNhY3Rpb24gbG9naWNcbiAgICogYW5kIGlzIGludm9rZWQgd2l0aCB0d28gYXJndW1lbnRzOlxuICAgKiAgIDEuIFRoZSBJREJUcmFuc2FjdGlvbiBvYmplY3RcbiAgICogICAyLiBBIGBkb25lYCBmdW5jdGlvbiwgdGhhdCdzIHVzZWQgdG8gcmVzb2x2ZSB0aGUgcHJvbWlzZSB3aGVuXG4gICAqICAgICAgd2hlbiB0aGUgdHJhbnNhY3Rpb24gaXMgZG9uZSwgaWYgcGFzc2VkIGEgdmFsdWUsIHRoZSBwcm9taXNlIGlzXG4gICAqICAgICAgcmVzb2x2ZWQgdG8gdGhhdCB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBzdG9yZU5hbWVzIEFuIGFycmF5IG9mIG9iamVjdCBzdG9yZSBuYW1lc1xuICAgKiAgICAgaW52b2x2ZWQgaW4gdGhlIHRyYW5zYWN0aW9uLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBDYW4gYmUgYHJlYWRvbmx5YCBvciBgcmVhZHdyaXRlYC5cbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGNhbGxiYWNrXG4gICAqIEByZXR1cm4geyp9IFRoZSByZXN1bHQgb2YgdGhlIHRyYW5zYWN0aW9uIHJhbiBieSB0aGUgY2FsbGJhY2suXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBhc3luYyB0cmFuc2FjdGlvbihzdG9yZU5hbWVzLCB0eXBlLCBjYWxsYmFjaykge1xuICAgIGF3YWl0IHRoaXMub3BlbigpO1xuICAgIHJldHVybiBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCB0eG4gPSB0aGlzLl9kYi50cmFuc2FjdGlvbihzdG9yZU5hbWVzLCB0eXBlKTtcbiAgICAgIHR4bi5vbmFib3J0ID0gKHt0YXJnZXR9KSA9PiByZWplY3QodGFyZ2V0LmVycm9yKTtcbiAgICAgIHR4bi5vbmNvbXBsZXRlID0gKCkgPT4gcmVzb2x2ZSgpO1xuXG4gICAgICBjYWxsYmFjayh0eG4sICh2YWx1ZSkgPT4gcmVzb2x2ZSh2YWx1ZSkpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGVnYXRlcyBhc3luYyB0byBhIG5hdGl2ZSBJREJPYmplY3RTdG9yZSBtZXRob2QuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2QgVGhlIG1ldGhvZCBuYW1lLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RvcmVOYW1lIFRoZSBvYmplY3Qgc3RvcmUgbmFtZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgQ2FuIGJlIGByZWFkb25seWAgb3IgYHJlYWR3cml0ZWAuXG4gICAqIEBwYXJhbSB7Li4uKn0gYXJncyBUaGUgbGlzdCBvZiBhcmdzIHRvIHBhc3MgdG8gdGhlIG5hdGl2ZSBtZXRob2QuXG4gICAqIEByZXR1cm4geyp9IFRoZSByZXN1bHQgb2YgdGhlIHRyYW5zYWN0aW9uLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYXN5bmMgX2NhbGwobWV0aG9kLCBzdG9yZU5hbWUsIHR5cGUsIC4uLmFyZ3MpIHtcbiAgICBjb25zdCBjYWxsYmFjayA9ICh0eG4sIGRvbmUpID0+IHtcbiAgICAgIHR4bi5vYmplY3RTdG9yZShzdG9yZU5hbWUpW21ldGhvZF0oLi4uYXJncykub25zdWNjZXNzID0gKHt0YXJnZXR9KSA9PiB7XG4gICAgICAgIGRvbmUodGFyZ2V0LnJlc3VsdCk7XG4gICAgICB9O1xuICAgIH07XG5cbiAgICByZXR1cm4gYXdhaXQgdGhpcy50cmFuc2FjdGlvbihbc3RvcmVOYW1lXSwgdHlwZSwgY2FsbGJhY2spO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBkZWZhdWx0IG9udmVyc2lvbmNoYW5nZSBoYW5kbGVyLCB3aGljaCBjbG9zZXMgdGhlIGRhdGFiYXNlIHNvIG90aGVyXG4gICAqIGNvbm5lY3Rpb25zIGNhbiBvcGVuIHdpdGhvdXQgYmVpbmcgYmxvY2tlZC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9vbnZlcnNpb25jaGFuZ2UoKSB7XG4gICAgdGhpcy5jbG9zZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyB0aGUgY29ubmVjdGlvbiBvcGVuZWQgYnkgYERCV3JhcHBlci5vcGVuKClgLiBHZW5lcmFsbHkgdGhpcyBtZXRob2RcbiAgICogZG9lc24ndCBuZWVkIHRvIGJlIGNhbGxlZCBzaW5jZTpcbiAgICogICAxLiBJdCdzIHVzdWFsbHkgYmV0dGVyIHRvIGtlZXAgYSBjb25uZWN0aW9uIG9wZW4gc2luY2Ugb3BlbmluZ1xuICAgKiAgICAgIGEgbmV3IGNvbm5lY3Rpb24gaXMgc29tZXdoYXQgc2xvdy5cbiAgICogICAyLiBDb25uZWN0aW9ucyBhcmUgYXV0b21hdGljYWxseSBjbG9zZWQgd2hlbiB0aGUgcmVmZXJlbmNlIGlzXG4gICAqICAgICAgZ2FyYmFnZSBjb2xsZWN0ZWQuXG4gICAqIFRoZSBwcmltYXJ5IHVzZSBjYXNlIGZvciBuZWVkaW5nIHRvIGNsb3NlIGEgY29ubmVjdGlvbiBpcyB3aGVuIGFub3RoZXJcbiAgICogcmVmZXJlbmNlICh0eXBpY2FsbHkgaW4gYW5vdGhlciB0YWIpIG5lZWRzIHRvIHVwZ3JhZGUgaXQgYW5kIHdvdWxkIGJlXG4gICAqIGJsb2NrZWQgYnkgdGhlIGN1cnJlbnQsIG9wZW4gY29ubmVjdGlvbi5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNsb3NlKCkge1xuICAgIGlmICh0aGlzLl9kYikge1xuICAgICAgdGhpcy5fZGIuY2xvc2UoKTtcbiAgICAgIHRoaXMuX2RiID0gbnVsbDtcbiAgICB9XG4gIH1cbn1cblxuLy8gRXhwb3NlZCB0byBsZXQgdXNlcnMgbW9kaWZ5IHRoZSBkZWZhdWx0IHRpbWVvdXQgb24gYSBwZXItaW5zdGFuY2Vcbi8vIG9yIGdsb2JhbCBiYXNpcy5cbkRCV3JhcHBlci5wcm90b3R5cGUuT1BFTl9USU1FT1VUID0gMjAwMDtcblxuLy8gV3JhcCBuYXRpdmUgSURCT2JqZWN0U3RvcmUgbWV0aG9kcyBhY2NvcmRpbmcgdG8gdGhlaXIgbW9kZS5cbmNvbnN0IG1ldGhvZHNUb1dyYXAgPSB7XG4gICdyZWFkb25seSc6IFsnZ2V0JywgJ2NvdW50JywgJ2dldEtleScsICdnZXRBbGwnLCAnZ2V0QWxsS2V5cyddLFxuICAncmVhZHdyaXRlJzogWydhZGQnLCAncHV0JywgJ2NsZWFyJywgJ2RlbGV0ZSddLFxufTtcbmZvciAoY29uc3QgW21vZGUsIG1ldGhvZHNdIG9mIE9iamVjdC5lbnRyaWVzKG1ldGhvZHNUb1dyYXApKSB7XG4gIGZvciAoY29uc3QgbWV0aG9kIG9mIG1ldGhvZHMpIHtcbiAgICBpZiAobWV0aG9kIGluIElEQk9iamVjdFN0b3JlLnByb3RvdHlwZSkge1xuICAgICAgLy8gRG9uJ3QgdXNlIGFycm93IGZ1bmN0aW9ucyBoZXJlIHNpbmNlIHdlJ3JlIG91dHNpZGUgb2YgdGhlIGNsYXNzLlxuICAgICAgREJXcmFwcGVyLnByb3RvdHlwZVttZXRob2RdID0gYXN5bmMgZnVuY3Rpb24oc3RvcmVOYW1lLCAuLi5hcmdzKSB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLl9jYWxsKG1ldGhvZCwgc3RvcmVOYW1lLCBtb2RlLCAuLi5hcmdzKTtcbiAgICAgIH07XG4gICAgfVxuICB9XG59XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCAnLi4vX3ZlcnNpb24ubWpzJztcblxuXG4vKipcbiAqIFRoZSBEZWZlcnJlZCBjbGFzcyBjb21wb3NlcyBQcm9taXNlcyBpbiBhIHdheSB0aGF0IGFsbG93cyBmb3IgdGhlbSB0byBiZVxuICogcmVzb2x2ZWQgb3IgcmVqZWN0ZWQgZnJvbSBvdXRzaWRlIHRoZSBjb25zdHJ1Y3Rvci4gSW4gbW9zdCBjYXNlcyBwcm9taXNlc1xuICogc2hvdWxkIGJlIHVzZWQgZGlyZWN0bHksIGJ1dCBEZWZlcnJlZHMgY2FuIGJlIG5lY2Vzc2FyeSB3aGVuIHRoZSBsb2dpYyB0b1xuICogcmVzb2x2ZSBhIHByb21pc2UgbXVzdCBiZSBzZXBhcmF0ZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgY2xhc3MgRGVmZXJyZWQge1xuICAvKipcbiAgICogQ3JlYXRlcyBhIHByb21pc2UgYW5kIGV4cG9zZXMgaXRzIHJlc29sdmUgYW5kIHJlamVjdCBmdW5jdGlvbnMgYXMgbWV0aG9kcy5cbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMucmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICB0aGlzLnJlamVjdCA9IHJlamVjdDtcbiAgICB9KTtcbiAgfVxufVxuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQge21lc3NhZ2VHZW5lcmF0b3J9IGZyb20gJy4uL21vZGVscy9tZXNzYWdlcy9tZXNzYWdlR2VuZXJhdG9yLm1qcyc7XG5pbXBvcnQgJy4uL192ZXJzaW9uLm1qcyc7XG5cbi8qKlxuICogV29ya2JveCBlcnJvcnMgc2hvdWxkIGJlIHRocm93biB3aXRoIHRoaXMgY2xhc3MuXG4gKiBUaGlzIGFsbG93cyB1c2UgdG8gZW5zdXJlIHRoZSB0eXBlIGVhc2lseSBpbiB0ZXN0cyxcbiAqIGhlbHBzIGRldmVsb3BlcnMgaWRlbnRpZnkgZXJyb3JzIGZyb20gd29ya2JveFxuICogZWFzaWx5IGFuZCBhbGxvd3MgdXNlIHRvIG9wdGltaXNlIGVycm9yXG4gKiBtZXNzYWdlcyBjb3JyZWN0bHkuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY2xhc3MgV29ya2JveEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGVycm9yQ29kZSBUaGUgZXJyb3IgY29kZSB0aGF0XG4gICAqIGlkZW50aWZpZXMgdGhpcyBwYXJ0aWN1bGFyIGVycm9yLlxuICAgKiBAcGFyYW0ge09iamVjdD19IGRldGFpbHMgQW55IHJlbGV2YW50IGFyZ3VtZW50c1xuICAgKiB0aGF0IHdpbGwgaGVscCBkZXZlbG9wZXJzIGlkZW50aWZ5IGlzc3VlcyBzaG91bGRcbiAgICogYmUgYWRkZWQgYXMgYSBrZXkgb24gdGhlIGNvbnRleHQgb2JqZWN0LlxuICAgKi9cbiAgY29uc3RydWN0b3IoZXJyb3JDb2RlLCBkZXRhaWxzKSB7XG4gICAgbGV0IG1lc3NhZ2UgPSBtZXNzYWdlR2VuZXJhdG9yKGVycm9yQ29kZSwgZGV0YWlscyk7XG5cbiAgICBzdXBlcihtZXNzYWdlKTtcblxuICAgIHRoaXMubmFtZSA9IGVycm9yQ29kZTtcbiAgICB0aGlzLmRldGFpbHMgPSBkZXRhaWxzO1xuICB9XG59XG5cbmV4cG9ydCB7V29ya2JveEVycm9yfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0IHtXb3JrYm94RXJyb3J9IGZyb20gJy4uL19wcml2YXRlL1dvcmtib3hFcnJvci5tanMnO1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5tanMnO1xuXG4vKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyB0cnVlIGlmIHRoZSBjdXJyZW50IGNvbnRleHQgaXMgYSBzZXJ2aWNlIHdvcmtlci5cbiAqL1xuY29uc3QgaXNTV0VudiA9IChtb2R1bGVOYW1lKSA9PiB7XG4gIGlmICghKCdTZXJ2aWNlV29ya2VyR2xvYmFsU2NvcGUnIGluIHNlbGYpKSB7XG4gICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignbm90LWluLXN3Jywge21vZHVsZU5hbWV9KTtcbiAgfVxufTtcblxuLypcbiAqIFRoaXMgbWV0aG9kIHRocm93cyBpZiB0aGUgc3VwcGxpZWQgdmFsdWUgaXMgbm90IGFuIGFycmF5LlxuICogVGhlIGRlc3RydWN0ZWQgdmFsdWVzIGFyZSByZXF1aXJlZCB0byBwcm9kdWNlIGEgbWVhbmluZ2Z1bCBlcnJvciBmb3IgdXNlcnMuXG4gKiBUaGUgZGVzdHJ1Y3RlZCBhbmQgcmVzdHJ1Y3R1cmVkIG9iamVjdCBpcyBzbyBpdCdzIGNsZWFyIHdoYXQgaXNcbiAqIG5lZWRlZC5cbiAqL1xuY29uc3QgaXNBcnJheSA9ICh2YWx1ZSwge21vZHVsZU5hbWUsIGNsYXNzTmFtZSwgZnVuY05hbWUsIHBhcmFtTmFtZX0pID0+IHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ25vdC1hbi1hcnJheScsIHtcbiAgICAgIG1vZHVsZU5hbWUsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBmdW5jTmFtZSxcbiAgICAgIHBhcmFtTmFtZSxcbiAgICB9KTtcbiAgfVxufTtcblxuY29uc3QgaGFzTWV0aG9kID0gKG9iamVjdCwgZXhwZWN0ZWRNZXRob2QsXG4gICAge21vZHVsZU5hbWUsIGNsYXNzTmFtZSwgZnVuY05hbWUsIHBhcmFtTmFtZX0pID0+IHtcbiAgY29uc3QgdHlwZSA9IHR5cGVvZiBvYmplY3RbZXhwZWN0ZWRNZXRob2RdO1xuICBpZiAodHlwZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ21pc3NpbmctYS1tZXRob2QnLCB7cGFyYW1OYW1lLCBleHBlY3RlZE1ldGhvZCxcbiAgICAgIG1vZHVsZU5hbWUsIGNsYXNzTmFtZSwgZnVuY05hbWV9KTtcbiAgfVxufTtcblxuY29uc3QgaXNUeXBlID0gKG9iamVjdCwgZXhwZWN0ZWRUeXBlLFxuICAgIHttb2R1bGVOYW1lLCBjbGFzc05hbWUsIGZ1bmNOYW1lLCBwYXJhbU5hbWV9KSA9PiB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ICE9PSBleHBlY3RlZFR5cGUpIHtcbiAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdpbmNvcnJlY3QtdHlwZScsIHtwYXJhbU5hbWUsIGV4cGVjdGVkVHlwZSxcbiAgICAgIG1vZHVsZU5hbWUsIGNsYXNzTmFtZSwgZnVuY05hbWV9KTtcbiAgfVxufTtcblxuY29uc3QgaXNJbnN0YW5jZSA9IChvYmplY3QsIGV4cGVjdGVkQ2xhc3MsXG4gICAge21vZHVsZU5hbWUsIGNsYXNzTmFtZSwgZnVuY05hbWUsXG4gICAgICBwYXJhbU5hbWUsIGlzUmV0dXJuVmFsdWVQcm9ibGVtfSkgPT4ge1xuICBpZiAoIShvYmplY3QgaW5zdGFuY2VvZiBleHBlY3RlZENsYXNzKSkge1xuICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ2luY29ycmVjdC1jbGFzcycsIHtwYXJhbU5hbWUsIGV4cGVjdGVkQ2xhc3MsXG4gICAgICBtb2R1bGVOYW1lLCBjbGFzc05hbWUsIGZ1bmNOYW1lLCBpc1JldHVyblZhbHVlUHJvYmxlbX0pO1xuICB9XG59O1xuXG5jb25zdCBpc09uZU9mID0gKHZhbHVlLCB2YWxpZFZhbHVlcywge3BhcmFtTmFtZX0pID0+IHtcbiAgaWYgKCF2YWxpZFZhbHVlcy5pbmNsdWRlcyh2YWx1ZSkpIHtcbiAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdpbnZhbGlkLXZhbHVlJywge1xuICAgICAgcGFyYW1OYW1lLFxuICAgICAgdmFsdWUsXG4gICAgICB2YWxpZFZhbHVlRGVzY3JpcHRpb246IGBWYWxpZCB2YWx1ZXMgYXJlICR7SlNPTi5zdHJpbmdpZnkodmFsaWRWYWx1ZXMpfS5gLFxuICAgIH0pO1xuICB9XG59O1xuXG5jb25zdCBpc0FycmF5T2ZDbGFzcyA9ICh2YWx1ZSwgZXhwZWN0ZWRDbGFzcyxcbiAgICB7bW9kdWxlTmFtZSwgY2xhc3NOYW1lLCBmdW5jTmFtZSwgcGFyYW1OYW1lfSkgPT4ge1xuICBjb25zdCBlcnJvciA9IG5ldyBXb3JrYm94RXJyb3IoJ25vdC1hcnJheS1vZi1jbGFzcycsIHtcbiAgICB2YWx1ZSwgZXhwZWN0ZWRDbGFzcyxcbiAgICBtb2R1bGVOYW1lLCBjbGFzc05hbWUsIGZ1bmNOYW1lLCBwYXJhbU5hbWUsXG4gIH0pO1xuICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cblxuICBmb3IgKGxldCBpdGVtIG9mIHZhbHVlKSB7XG4gICAgaWYgKCEoaXRlbSBpbnN0YW5jZW9mIGV4cGVjdGVkQ2xhc3MpKSB7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGZpbmFsQXNzZXJ0RXhwb3J0cyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgPyBudWxsIDoge1xuICBoYXNNZXRob2QsXG4gIGlzQXJyYXksXG4gIGlzSW5zdGFuY2UsXG4gIGlzT25lT2YsXG4gIGlzU1dFbnYsXG4gIGlzVHlwZSxcbiAgaXNBcnJheU9mQ2xhc3MsXG59O1xuXG5leHBvcnQge2ZpbmFsQXNzZXJ0RXhwb3J0cyBhcyBhc3NlcnR9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQgJy4uL192ZXJzaW9uLm1qcyc7XG5cblxuY29uc3QgX2NhY2hlTmFtZURldGFpbHMgPSB7XG4gIGdvb2dsZUFuYWx5dGljczogJ2dvb2dsZUFuYWx5dGljcycsXG4gIHByZWNhY2hlOiAncHJlY2FjaGUtdjInLFxuICBwcmVmaXg6ICd3b3JrYm94JyxcbiAgcnVudGltZTogJ3J1bnRpbWUnLFxuICBzdWZmaXg6IHNlbGYucmVnaXN0cmF0aW9uLnNjb3BlLFxufTtcblxuY29uc3QgX2NyZWF0ZUNhY2hlTmFtZSA9IChjYWNoZU5hbWUpID0+IHtcbiAgcmV0dXJuIFtfY2FjaGVOYW1lRGV0YWlscy5wcmVmaXgsIGNhY2hlTmFtZSwgX2NhY2hlTmFtZURldGFpbHMuc3VmZml4XVxuICAgICAgLmZpbHRlcigodmFsdWUpID0+IHZhbHVlLmxlbmd0aCA+IDApXG4gICAgICAuam9pbignLScpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNhY2hlTmFtZXMgPSB7XG4gIHVwZGF0ZURldGFpbHM6IChkZXRhaWxzKSA9PiB7XG4gICAgT2JqZWN0LmtleXMoX2NhY2hlTmFtZURldGFpbHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBkZXRhaWxzW2tleV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIF9jYWNoZU5hbWVEZXRhaWxzW2tleV0gPSBkZXRhaWxzW2tleV07XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIGdldEdvb2dsZUFuYWx5dGljc05hbWU6ICh1c2VyQ2FjaGVOYW1lKSA9PiB7XG4gICAgcmV0dXJuIHVzZXJDYWNoZU5hbWUgfHwgX2NyZWF0ZUNhY2hlTmFtZShfY2FjaGVOYW1lRGV0YWlscy5nb29nbGVBbmFseXRpY3MpO1xuICB9LFxuICBnZXRQcmVjYWNoZU5hbWU6ICh1c2VyQ2FjaGVOYW1lKSA9PiB7XG4gICAgcmV0dXJuIHVzZXJDYWNoZU5hbWUgfHwgX2NyZWF0ZUNhY2hlTmFtZShfY2FjaGVOYW1lRGV0YWlscy5wcmVjYWNoZSk7XG4gIH0sXG4gIGdldFByZWZpeDogKCkgPT4ge1xuICAgIHJldHVybiBfY2FjaGVOYW1lRGV0YWlscy5wcmVmaXg7XG4gIH0sXG4gIGdldFJ1bnRpbWVOYW1lOiAodXNlckNhY2hlTmFtZSkgPT4ge1xuICAgIHJldHVybiB1c2VyQ2FjaGVOYW1lIHx8IF9jcmVhdGVDYWNoZU5hbWUoX2NhY2hlTmFtZURldGFpbHMucnVudGltZSk7XG4gIH0sXG4gIGdldFN1ZmZpeDogKCkgPT4ge1xuICAgIHJldHVybiBfY2FjaGVOYW1lRGV0YWlscy5zdWZmaXg7XG4gIH0sXG59O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQge1dvcmtib3hFcnJvcn0gZnJvbSAnLi9Xb3JrYm94RXJyb3IubWpzJztcbmltcG9ydCB7YXNzZXJ0fSBmcm9tICcuL2Fzc2VydC5tanMnO1xuaW1wb3J0IHtnZXRGcmllbmRseVVSTH0gZnJvbSAnLi9nZXRGcmllbmRseVVSTC5tanMnO1xuaW1wb3J0IHtsb2dnZXJ9IGZyb20gJy4vbG9nZ2VyLm1qcyc7XG5pbXBvcnQge2V4ZWN1dGVRdW90YUVycm9yQ2FsbGJhY2tzfSBmcm9tICcuL2V4ZWN1dGVRdW90YUVycm9yQ2FsbGJhY2tzLm1qcyc7XG5pbXBvcnQge3BsdWdpbkV2ZW50c30gZnJvbSAnLi4vbW9kZWxzL3BsdWdpbkV2ZW50cy5tanMnO1xuaW1wb3J0IHtwbHVnaW5VdGlsc30gZnJvbSAnLi4vdXRpbHMvcGx1Z2luVXRpbHMubWpzJztcbmltcG9ydCAnLi4vX3ZlcnNpb24ubWpzJztcblxuXG4vKipcbiAqIFdyYXBwZXIgYXJvdW5kIGNhY2hlLnB1dCgpLlxuICpcbiAqIFdpbGwgY2FsbCBgY2FjaGVEaWRVcGRhdGVgIG9uIHBsdWdpbnMgaWYgdGhlIGNhY2hlIHdhcyB1cGRhdGVkLCB1c2luZ1xuICogYG1hdGNoT3B0aW9uc2Agd2hlbiBkZXRlcm1pbmluZyB3aGF0IHRoZSBvbGQgZW50cnkgaXMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmNhY2hlTmFtZVxuICogQHBhcmFtIHtSZXF1ZXN0fSBvcHRpb25zLnJlcXVlc3RcbiAqIEBwYXJhbSB7UmVzcG9uc2V9IG9wdGlvbnMucmVzcG9uc2VcbiAqIEBwYXJhbSB7RXZlbnR9IFtvcHRpb25zLmV2ZW50XVxuICogQHBhcmFtIHtBcnJheTxPYmplY3Q+fSBbb3B0aW9ucy5wbHVnaW5zPVtdXVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLm1hdGNoT3B0aW9uc11cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG1lbWJlcm9mIG1vZHVsZTp3b3JrYm94LWNvcmVcbiAqL1xuY29uc3QgcHV0V3JhcHBlciA9IGFzeW5jICh7XG4gIGNhY2hlTmFtZSxcbiAgcmVxdWVzdCxcbiAgcmVzcG9uc2UsXG4gIGV2ZW50LFxuICBwbHVnaW5zID0gW10sXG4gIG1hdGNoT3B0aW9ucyxcbn0gPSB7fSkgPT4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChyZXF1ZXN0Lm1ldGhvZCAmJiByZXF1ZXN0Lm1ldGhvZCAhPT0gJ0dFVCcpIHtcbiAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ2F0dGVtcHQtdG8tY2FjaGUtbm9uLWdldC1yZXF1ZXN0Jywge1xuICAgICAgICB1cmw6IGdldEZyaWVuZGx5VVJMKHJlcXVlc3QudXJsKSxcbiAgICAgICAgbWV0aG9kOiByZXF1ZXN0Lm1ldGhvZCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGVmZmVjdGl2ZVJlcXVlc3QgPSBhd2FpdCBfZ2V0RWZmZWN0aXZlUmVxdWVzdCh7XG4gICAgcGx1Z2lucywgcmVxdWVzdCwgbW9kZTogJ3dyaXRlJ30pO1xuXG4gIGlmICghcmVzcG9uc2UpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgbG9nZ2VyLmVycm9yKGBDYW5ub3QgY2FjaGUgbm9uLWV4aXN0ZW50IHJlc3BvbnNlIGZvciBgICtcbiAgICAgICAgYCcke2dldEZyaWVuZGx5VVJMKGVmZmVjdGl2ZVJlcXVlc3QudXJsKX0nLmApO1xuICAgIH1cblxuICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ2NhY2hlLXB1dC13aXRoLW5vLXJlc3BvbnNlJywge1xuICAgICAgdXJsOiBnZXRGcmllbmRseVVSTChlZmZlY3RpdmVSZXF1ZXN0LnVybCksXG4gICAgfSk7XG4gIH1cblxuICBsZXQgcmVzcG9uc2VUb0NhY2hlID0gYXdhaXQgX2lzUmVzcG9uc2VTYWZlVG9DYWNoZSh7XG4gICAgZXZlbnQsXG4gICAgcGx1Z2lucyxcbiAgICByZXNwb25zZSxcbiAgICByZXF1ZXN0OiBlZmZlY3RpdmVSZXF1ZXN0LFxuICB9KTtcblxuICBpZiAoIXJlc3BvbnNlVG9DYWNoZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBsb2dnZXIuZGVidWcoYFJlc3BvbnNlICcke2dldEZyaWVuZGx5VVJMKGVmZmVjdGl2ZVJlcXVlc3QudXJsKX0nIHdpbGwgYCArXG4gICAgICBgbm90IGJlIGNhY2hlZC5gLCByZXNwb25zZVRvQ2FjaGUpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBjYWNoZSA9IGF3YWl0IGNhY2hlcy5vcGVuKGNhY2hlTmFtZSk7XG5cbiAgY29uc3QgdXBkYXRlUGx1Z2lucyA9IHBsdWdpblV0aWxzLmZpbHRlcihcbiAgICAgIHBsdWdpbnMsIHBsdWdpbkV2ZW50cy5DQUNIRV9ESURfVVBEQVRFKTtcblxuICBsZXQgb2xkUmVzcG9uc2UgPSB1cGRhdGVQbHVnaW5zLmxlbmd0aCA+IDAgP1xuICAgICAgYXdhaXQgbWF0Y2hXcmFwcGVyKHtjYWNoZU5hbWUsIG1hdGNoT3B0aW9ucywgcmVxdWVzdDogZWZmZWN0aXZlUmVxdWVzdH0pIDpcbiAgICAgIG51bGw7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBsb2dnZXIuZGVidWcoYFVwZGF0aW5nIHRoZSAnJHtjYWNoZU5hbWV9JyBjYWNoZSB3aXRoIGEgbmV3IFJlc3BvbnNlIGZvciBgICtcbiAgICAgIGAke2dldEZyaWVuZGx5VVJMKGVmZmVjdGl2ZVJlcXVlc3QudXJsKX0uYCk7XG4gIH1cblxuICB0cnkge1xuICAgIGF3YWl0IGNhY2hlLnB1dChlZmZlY3RpdmVSZXF1ZXN0LCByZXNwb25zZVRvQ2FjaGUpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vIFNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRE9NRXhjZXB0aW9uI2V4Y2VwdGlvbi1RdW90YUV4Y2VlZGVkRXJyb3JcbiAgICBpZiAoZXJyb3IubmFtZSA9PT0gJ1F1b3RhRXhjZWVkZWRFcnJvcicpIHtcbiAgICAgIGF3YWl0IGV4ZWN1dGVRdW90YUVycm9yQ2FsbGJhY2tzKCk7XG4gICAgfVxuICAgIHRocm93IGVycm9yO1xuICB9XG5cbiAgZm9yIChsZXQgcGx1Z2luIG9mIHVwZGF0ZVBsdWdpbnMpIHtcbiAgICBhd2FpdCBwbHVnaW5bcGx1Z2luRXZlbnRzLkNBQ0hFX0RJRF9VUERBVEVdLmNhbGwocGx1Z2luLCB7XG4gICAgICBjYWNoZU5hbWUsXG4gICAgICBldmVudCxcbiAgICAgIG9sZFJlc3BvbnNlLFxuICAgICAgbmV3UmVzcG9uc2U6IHJlc3BvbnNlVG9DYWNoZSxcbiAgICAgIHJlcXVlc3Q6IGVmZmVjdGl2ZVJlcXVlc3QsXG4gICAgfSk7XG4gIH1cbn07XG5cbi8qKlxuICogVGhpcyBpcyBhIHdyYXBwZXIgYXJvdW5kIGNhY2hlLm1hdGNoKCkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmNhY2hlTmFtZSBOYW1lIG9mIHRoZSBjYWNoZSB0byBtYXRjaCBhZ2FpbnN0LlxuICogQHBhcmFtIHtSZXF1ZXN0fSBvcHRpb25zLnJlcXVlc3QgVGhlIFJlcXVlc3QgdGhhdCB3aWxsIGJlIHVzZWQgdG8gbG9vayB1cFxuICogICAgIGNhY2hlIGVudHJpZXMuXG4gKiBAcGFyYW0ge0V2ZW50fSBbb3B0aW9ucy5ldmVudF0gVGhlIGV2ZW50IHRoYXQgcHJvcHRlZCB0aGUgYWN0aW9uLlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLm1hdGNoT3B0aW9uc10gT3B0aW9ucyBwYXNzZWQgdG8gY2FjaGUubWF0Y2goKS5cbiAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gW29wdGlvbnMucGx1Z2lucz1bXV0gQXJyYXkgb2YgcGx1Z2lucy5cbiAqIEByZXR1cm4ge1Jlc3BvbnNlfSBBIGNhY2hlZCByZXNwb25zZSBpZiBhdmFpbGFibGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d29ya2JveC1jb3JlXG4gKi9cbmNvbnN0IG1hdGNoV3JhcHBlciA9IGFzeW5jICh7XG4gIGNhY2hlTmFtZSxcbiAgcmVxdWVzdCxcbiAgZXZlbnQsXG4gIG1hdGNoT3B0aW9ucyxcbiAgcGx1Z2lucyA9IFtdLFxufSkgPT4ge1xuICBjb25zdCBjYWNoZSA9IGF3YWl0IGNhY2hlcy5vcGVuKGNhY2hlTmFtZSk7XG5cbiAgY29uc3QgZWZmZWN0aXZlUmVxdWVzdCA9IGF3YWl0IF9nZXRFZmZlY3RpdmVSZXF1ZXN0KHtcbiAgICBwbHVnaW5zLCByZXF1ZXN0LCBtb2RlOiAncmVhZCd9KTtcblxuICBsZXQgY2FjaGVkUmVzcG9uc2UgPSBhd2FpdCBjYWNoZS5tYXRjaChlZmZlY3RpdmVSZXF1ZXN0LCBtYXRjaE9wdGlvbnMpO1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChjYWNoZWRSZXNwb25zZSkge1xuICAgICAgbG9nZ2VyLmRlYnVnKGBGb3VuZCBhIGNhY2hlZCByZXNwb25zZSBpbiAnJHtjYWNoZU5hbWV9Jy5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9nZ2VyLmRlYnVnKGBObyBjYWNoZWQgcmVzcG9uc2UgZm91bmQgaW4gJyR7Y2FjaGVOYW1lfScuYCk7XG4gICAgfVxuICB9XG5cbiAgZm9yIChjb25zdCBwbHVnaW4gb2YgcGx1Z2lucykge1xuICAgIGlmIChwbHVnaW5FdmVudHMuQ0FDSEVEX1JFU1BPTlNFX1dJTExfQkVfVVNFRCBpbiBwbHVnaW4pIHtcbiAgICAgIGNhY2hlZFJlc3BvbnNlID0gYXdhaXQgcGx1Z2luW3BsdWdpbkV2ZW50cy5DQUNIRURfUkVTUE9OU0VfV0lMTF9CRV9VU0VEXVxuICAgICAgICAgIC5jYWxsKHBsdWdpbiwge1xuICAgICAgICAgICAgY2FjaGVOYW1lLFxuICAgICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgICBtYXRjaE9wdGlvbnMsXG4gICAgICAgICAgICBjYWNoZWRSZXNwb25zZSxcbiAgICAgICAgICAgIHJlcXVlc3Q6IGVmZmVjdGl2ZVJlcXVlc3QsXG4gICAgICAgICAgfSk7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoY2FjaGVkUmVzcG9uc2UpIHtcbiAgICAgICAgICBhc3NlcnQuaXNJbnN0YW5jZShjYWNoZWRSZXNwb25zZSwgUmVzcG9uc2UsIHtcbiAgICAgICAgICAgIG1vZHVsZU5hbWU6ICdQbHVnaW4nLFxuICAgICAgICAgICAgZnVuY05hbWU6IHBsdWdpbkV2ZW50cy5DQUNIRURfUkVTUE9OU0VfV0lMTF9CRV9VU0VELFxuICAgICAgICAgICAgaXNSZXR1cm5WYWx1ZVByb2JsZW06IHRydWUsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY2FjaGVkUmVzcG9uc2U7XG59O1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIHdpbGwgY2FsbCBjYWNoZVdpbGxVcGRhdGUgb24gdGhlIGF2YWlsYWJsZSBwbHVnaW5zIChvciB1c2VcbiAqIHN0YXR1cyA9PT0gMjAwKSB0byBkZXRlcm1pbmUgaWYgdGhlIFJlc3BvbnNlIGlzIHNhZmUgYW5kIHZhbGlkIHRvIGNhY2hlLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcGFyYW0ge1JlcXVlc3R9IG9wdGlvbnMucmVxdWVzdFxuICogQHBhcmFtIHtSZXNwb25zZX0gb3B0aW9ucy5yZXNwb25zZVxuICogQHBhcmFtIHtFdmVudH0gW29wdGlvbnMuZXZlbnRdXG4gKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IFtvcHRpb25zLnBsdWdpbnM9W11dXG4gKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlPn1cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG1lbWJlcm9mIG1vZHVsZTp3b3JrYm94LWNvcmVcbiAqL1xuY29uc3QgX2lzUmVzcG9uc2VTYWZlVG9DYWNoZSA9IGFzeW5jICh7cmVxdWVzdCwgcmVzcG9uc2UsIGV2ZW50LCBwbHVnaW5zfSkgPT4ge1xuICBsZXQgcmVzcG9uc2VUb0NhY2hlID0gcmVzcG9uc2U7XG4gIGxldCBwbHVnaW5zVXNlZCA9IGZhbHNlO1xuICBmb3IgKGxldCBwbHVnaW4gb2YgcGx1Z2lucykge1xuICAgIGlmIChwbHVnaW5FdmVudHMuQ0FDSEVfV0lMTF9VUERBVEUgaW4gcGx1Z2luKSB7XG4gICAgICBwbHVnaW5zVXNlZCA9IHRydWU7XG4gICAgICByZXNwb25zZVRvQ2FjaGUgPSBhd2FpdCBwbHVnaW5bcGx1Z2luRXZlbnRzLkNBQ0hFX1dJTExfVVBEQVRFXVxuICAgICAgICAgIC5jYWxsKHBsdWdpbiwge1xuICAgICAgICAgICAgcmVxdWVzdCxcbiAgICAgICAgICAgIHJlc3BvbnNlOiByZXNwb25zZVRvQ2FjaGUsXG4gICAgICAgICAgICBldmVudCxcbiAgICAgICAgICB9KTtcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKHJlc3BvbnNlVG9DYWNoZSkge1xuICAgICAgICAgIGFzc2VydC5pc0luc3RhbmNlKHJlc3BvbnNlVG9DYWNoZSwgUmVzcG9uc2UsIHtcbiAgICAgICAgICAgIG1vZHVsZU5hbWU6ICdQbHVnaW4nLFxuICAgICAgICAgICAgZnVuY05hbWU6IHBsdWdpbkV2ZW50cy5DQUNIRV9XSUxMX1VQREFURSxcbiAgICAgICAgICAgIGlzUmV0dXJuVmFsdWVQcm9ibGVtOiB0cnVlLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghcmVzcG9uc2VUb0NhY2hlKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmICghcGx1Z2luc1VzZWQpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKCFyZXNwb25zZVRvQ2FjaGUuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgaWYgKHJlc3BvbnNlVG9DYWNoZS5zdGF0dXMgPT09IDApIHtcbiAgICAgICAgICBsb2dnZXIud2FybihgVGhlIHJlc3BvbnNlIGZvciAnJHtyZXF1ZXN0LnVybH0nIGlzIGFuIG9wYXF1ZSBgICtcbiAgICAgICAgICAgIGByZXNwb25zZS4gVGhlIGNhY2hpbmcgc3RyYXRlZ3kgdGhhdCB5b3UncmUgdXNpbmcgd2lsbCBub3QgYCArXG4gICAgICAgICAgICBgY2FjaGUgb3BhcXVlIHJlc3BvbnNlcyBieSBkZWZhdWx0LmApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgVGhlIHJlc3BvbnNlIGZvciAnJHtyZXF1ZXN0LnVybH0nIHJldHVybmVkIGAgK1xuICAgICAgICAgIGBhIHN0YXR1cyBjb2RlIG9mICcke3Jlc3BvbnNlLnN0YXR1c30nIGFuZCB3b24ndCBiZSBjYWNoZWQgYXMgYSBgICtcbiAgICAgICAgICBgcmVzdWx0LmApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3BvbnNlVG9DYWNoZSA9IHJlc3BvbnNlVG9DYWNoZS5zdGF0dXMgPT09IDIwMCA/IHJlc3BvbnNlVG9DYWNoZSA6IG51bGw7XG4gIH1cblxuICByZXR1cm4gcmVzcG9uc2VUb0NhY2hlID8gcmVzcG9uc2VUb0NhY2hlIDogbnVsbDtcbn07XG5cbi8qKlxuICogQ2hlY2tzIHRoZSBsaXN0IG9mIHBsdWdpbnMgZm9yIHRoZSBjYWNoZUtleVdpbGxCZVVzZWQgY2FsbGJhY2ssIGFuZFxuICogZXhlY3V0ZXMgYW55IG9mIHRob3NlIGNhbGxiYWNrcyBmb3VuZCBpbiBzZXF1ZW5jZS4gVGhlIGZpbmFsIGBSZXF1ZXN0YCBvYmplY3RcbiAqIHJldHVybmVkIGJ5IHRoZSBsYXN0IHBsdWdpbiBpcyB0cmVhdGVkIGFzIHRoZSBjYWNoZSBrZXkgZm9yIGNhY2hlIHJlYWRzXG4gKiBhbmQvb3Igd3JpdGVzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcGFyYW0ge1JlcXVlc3R9IG9wdGlvbnMucmVxdWVzdFxuICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubW9kZVxuICogQHBhcmFtIHtBcnJheTxPYmplY3Q+fSBbb3B0aW9ucy5wbHVnaW5zPVtdXVxuICogQHJldHVybiB7UHJvbWlzZTxSZXF1ZXN0Pn1cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG1lbWJlcm9mIG1vZHVsZTp3b3JrYm94LWNvcmVcbiAqL1xuY29uc3QgX2dldEVmZmVjdGl2ZVJlcXVlc3QgPSBhc3luYyAoe3JlcXVlc3QsIG1vZGUsIHBsdWdpbnN9KSA9PiB7XG4gIGNvbnN0IGNhY2hlS2V5V2lsbEJlVXNlZFBsdWdpbnMgPSBwbHVnaW5VdGlscy5maWx0ZXIoXG4gICAgICBwbHVnaW5zLCBwbHVnaW5FdmVudHMuQ0FDSEVfS0VZX1dJTExfQkVfVVNFRCk7XG5cbiAgbGV0IGVmZmVjdGl2ZVJlcXVlc3QgPSByZXF1ZXN0O1xuICBmb3IgKGNvbnN0IHBsdWdpbiBvZiBjYWNoZUtleVdpbGxCZVVzZWRQbHVnaW5zKSB7XG4gICAgZWZmZWN0aXZlUmVxdWVzdCA9IGF3YWl0IHBsdWdpbltwbHVnaW5FdmVudHMuQ0FDSEVfS0VZX1dJTExfQkVfVVNFRF0uY2FsbChcbiAgICAgICAgcGx1Z2luLCB7bW9kZSwgcmVxdWVzdDogZWZmZWN0aXZlUmVxdWVzdH0pO1xuXG4gICAgaWYgKHR5cGVvZiBlZmZlY3RpdmVSZXF1ZXN0ID09PSAnc3RyaW5nJykge1xuICAgICAgZWZmZWN0aXZlUmVxdWVzdCA9IG5ldyBSZXF1ZXN0KGVmZmVjdGl2ZVJlcXVlc3QpO1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBhc3NlcnQuaXNJbnN0YW5jZShlZmZlY3RpdmVSZXF1ZXN0LCBSZXF1ZXN0LCB7XG4gICAgICAgIG1vZHVsZU5hbWU6ICdQbHVnaW4nLFxuICAgICAgICBmdW5jTmFtZTogcGx1Z2luRXZlbnRzLkNBQ0hFX0tFWV9XSUxMX0JFX1VTRUQsXG4gICAgICAgIGlzUmV0dXJuVmFsdWVQcm9ibGVtOiB0cnVlLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVmZmVjdGl2ZVJlcXVlc3Q7XG59O1xuXG5leHBvcnQgY29uc3QgY2FjaGVXcmFwcGVyID0ge1xuICBwdXQ6IHB1dFdyYXBwZXIsXG4gIG1hdGNoOiBtYXRjaFdyYXBwZXIsXG59O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQgJy4uL192ZXJzaW9uLm1qcyc7XG5cblxuLyoqXG4gKiBEZWxldGVzIHRoZSBkYXRhYmFzZS5cbiAqIE5vdGU6IHRoaXMgaXMgZXhwb3J0ZWQgc2VwYXJhdGVseSBmcm9tIHRoZSBEQldyYXBwZXIgbW9kdWxlIGJlY2F1c2UgbW9zdFxuICogdXNhZ2VzIG9mIEluZGV4ZWREQiBpbiB3b3JrYm94IGRvbnQgbmVlZCBkZWxldGluZywgYW5kIHRoaXMgd2F5IGl0IGNhbiBiZVxuICogcmV1c2VkIGluIHRlc3RzIHRvIGRlbGV0ZSBkYXRhYmFzZXMgd2l0aG91dCBjcmVhdGluZyBEQldyYXBwZXIgaW5zdGFuY2VzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBkYXRhYmFzZSBuYW1lLlxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IGRlbGV0ZURhdGFiYXNlID0gYXN5bmMgKG5hbWUpID0+IHtcbiAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBpbmRleGVkREIuZGVsZXRlRGF0YWJhc2UobmFtZSk7XG4gICAgcmVxdWVzdC5vbmVycm9yID0gKHt0YXJnZXR9KSA9PiB7XG4gICAgICByZWplY3QodGFyZ2V0LmVycm9yKTtcbiAgICB9O1xuICAgIHJlcXVlc3Qub25ibG9ja2VkID0gKCkgPT4ge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignRGVsZXRlIGJsb2NrZWQnKSk7XG4gICAgfTtcbiAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9ICgpID0+IHtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9O1xuICB9KTtcbn07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCB7bG9nZ2VyfSBmcm9tICcuLi9fcHJpdmF0ZS9sb2dnZXIubWpzJztcbmltcG9ydCB7cXVvdGFFcnJvckNhbGxiYWNrc30gZnJvbSAnLi4vbW9kZWxzL3F1b3RhRXJyb3JDYWxsYmFja3MubWpzJztcbmltcG9ydCAnLi4vX3ZlcnNpb24ubWpzJztcblxuXG4vKipcbiAqIFJ1bnMgYWxsIG9mIHRoZSBjYWxsYmFjayBmdW5jdGlvbnMsIG9uZSBhdCBhIHRpbWUgc2VxdWVudGlhbGx5LCBpbiB0aGUgb3JkZXJcbiAqIGluIHdoaWNoIHRoZXkgd2VyZSByZWdpc3RlcmVkLlxuICpcbiAqIEBtZW1iZXJvZiB3b3JrYm94LmNvcmVcbiAqIEBwcml2YXRlXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGV4ZWN1dGVRdW90YUVycm9yQ2FsbGJhY2tzKCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGxvZ2dlci5sb2coYEFib3V0IHRvIHJ1biAke3F1b3RhRXJyb3JDYWxsYmFja3Muc2l6ZX0gYCArXG4gICAgICAgIGBjYWxsYmFja3MgdG8gY2xlYW4gdXAgY2FjaGVzLmApO1xuICB9XG5cbiAgZm9yIChjb25zdCBjYWxsYmFjayBvZiBxdW90YUVycm9yQ2FsbGJhY2tzKSB7XG4gICAgYXdhaXQgY2FsbGJhY2soKTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgbG9nZ2VyLmxvZyhjYWxsYmFjaywgJ2lzIGNvbXBsZXRlLicpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgbG9nZ2VyLmxvZygnRmluaXNoZWQgcnVubmluZyBjYWxsYmFja3MuJyk7XG4gIH1cbn1cblxuZXhwb3J0IHtleGVjdXRlUXVvdGFFcnJvckNhbGxiYWNrc307XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCB7V29ya2JveEVycm9yfSBmcm9tICcuL1dvcmtib3hFcnJvci5tanMnO1xuaW1wb3J0IHtsb2dnZXJ9IGZyb20gJy4vbG9nZ2VyLm1qcyc7XG5pbXBvcnQge2Fzc2VydH0gZnJvbSAnLi9hc3NlcnQubWpzJztcbmltcG9ydCB7Z2V0RnJpZW5kbHlVUkx9IGZyb20gJy4uL19wcml2YXRlL2dldEZyaWVuZGx5VVJMLm1qcyc7XG5pbXBvcnQge3BsdWdpbkV2ZW50c30gZnJvbSAnLi4vbW9kZWxzL3BsdWdpbkV2ZW50cy5tanMnO1xuaW1wb3J0IHtwbHVnaW5VdGlsc30gZnJvbSAnLi4vdXRpbHMvcGx1Z2luVXRpbHMubWpzJztcbmltcG9ydCAnLi4vX3ZlcnNpb24ubWpzJztcblxuLyoqXG4gKiBXcmFwcGVyIGFyb3VuZCB0aGUgZmV0Y2ggQVBJLlxuICpcbiAqIFdpbGwgY2FsbCByZXF1ZXN0V2lsbEZldGNoIG9uIGF2YWlsYWJsZSBwbHVnaW5zLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcGFyYW0ge1JlcXVlc3R8c3RyaW5nfSBvcHRpb25zLnJlcXVlc3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5mZXRjaE9wdGlvbnNdXG4gKiBAcGFyYW0ge0V2ZW50fSBbb3B0aW9ucy5ldmVudF1cbiAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gW29wdGlvbnMucGx1Z2lucz1bXV1cbiAqIEByZXR1cm4ge1Byb21pc2U8UmVzcG9uc2U+fVxuICpcbiAqIEBwcml2YXRlXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtY29yZVxuICovXG5jb25zdCB3cmFwcGVkRmV0Y2ggPSBhc3luYyAoe1xuICByZXF1ZXN0LFxuICBmZXRjaE9wdGlvbnMsXG4gIGV2ZW50LFxuICBwbHVnaW5zID0gW119KSA9PiB7XG4gIC8vIFdlICpzaG91bGQqIGJlIGFibGUgdG8gY2FsbCBgYXdhaXQgZXZlbnQucHJlbG9hZFJlc3BvbnNlYCBldmVuIGlmIGl0J3NcbiAgLy8gdW5kZWZpbmVkLCBidXQgZm9yIHNvbWUgcmVhc29uLCBkb2luZyBzbyBsZWFkcyB0byBlcnJvcnMgaW4gb3VyIE5vZGUgdW5pdFxuICAvLyB0ZXN0cy4gVG8gd29yayBhcm91bmQgdGhhdCwgZXhwbGljaXRseSBjaGVjayBwcmVsb2FkUmVzcG9uc2UncyB2YWx1ZSBmaXJzdC5cbiAgaWYgKGV2ZW50ICYmIGV2ZW50LnByZWxvYWRSZXNwb25zZSkge1xuICAgIGNvbnN0IHBvc3NpYmxlUHJlbG9hZFJlc3BvbnNlID0gYXdhaXQgZXZlbnQucHJlbG9hZFJlc3BvbnNlO1xuICAgIGlmIChwb3NzaWJsZVByZWxvYWRSZXNwb25zZSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgbG9nZ2VyLmxvZyhgVXNpbmcgYSBwcmVsb2FkZWQgbmF2aWdhdGlvbiByZXNwb25zZSBmb3IgYCArXG4gICAgICAgICAgYCcke2dldEZyaWVuZGx5VVJMKHJlcXVlc3QudXJsKX0nYCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcG9zc2libGVQcmVsb2FkUmVzcG9uc2U7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiByZXF1ZXN0ID09PSAnc3RyaW5nJykge1xuICAgIHJlcXVlc3QgPSBuZXcgUmVxdWVzdChyZXF1ZXN0KTtcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgYXNzZXJ0LmlzSW5zdGFuY2UocmVxdWVzdCwgUmVxdWVzdCwge1xuICAgICAgcGFyYW1OYW1lOiByZXF1ZXN0LFxuICAgICAgZXhwZWN0ZWRDbGFzczogJ1JlcXVlc3QnLFxuICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtY29yZScsXG4gICAgICBjbGFzc05hbWU6ICdmZXRjaFdyYXBwZXInLFxuICAgICAgZnVuY05hbWU6ICd3cmFwcGVkRmV0Y2gnLFxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgZmFpbGVkRmV0Y2hQbHVnaW5zID0gcGx1Z2luVXRpbHMuZmlsdGVyKFxuICAgICAgcGx1Z2lucywgcGx1Z2luRXZlbnRzLkZFVENIX0RJRF9GQUlMKTtcblxuICAvLyBJZiB0aGVyZSBpcyBhIGZldGNoRGlkRmFpbCBwbHVnaW4sIHdlIG5lZWQgdG8gc2F2ZSBhIGNsb25lIG9mIHRoZVxuICAvLyBvcmlnaW5hbCByZXF1ZXN0IGJlZm9yZSBpdCdzIGVpdGhlciBtb2RpZmllZCBieSBhIHJlcXVlc3RXaWxsRmV0Y2hcbiAgLy8gcGx1Z2luIG9yIGJlZm9yZSB0aGUgb3JpZ2luYWwgcmVxdWVzdCdzIGJvZHkgaXMgY29uc3VtZWQgdmlhIGZldGNoKCkuXG4gIGNvbnN0IG9yaWdpbmFsUmVxdWVzdCA9IGZhaWxlZEZldGNoUGx1Z2lucy5sZW5ndGggPiAwID9cbiAgICByZXF1ZXN0LmNsb25lKCkgOiBudWxsO1xuXG4gIHRyeSB7XG4gICAgZm9yIChsZXQgcGx1Z2luIG9mIHBsdWdpbnMpIHtcbiAgICAgIGlmIChwbHVnaW5FdmVudHMuUkVRVUVTVF9XSUxMX0ZFVENIIGluIHBsdWdpbikge1xuICAgICAgICByZXF1ZXN0ID0gYXdhaXQgcGx1Z2luW3BsdWdpbkV2ZW50cy5SRVFVRVNUX1dJTExfRkVUQ0hdLmNhbGwocGx1Z2luLCB7XG4gICAgICAgICAgcmVxdWVzdDogcmVxdWVzdC5jbG9uZSgpLFxuICAgICAgICAgIGV2ZW50LFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIGlmIChyZXF1ZXN0KSB7XG4gICAgICAgICAgICBhc3NlcnQuaXNJbnN0YW5jZShyZXF1ZXN0LCBSZXF1ZXN0LCB7XG4gICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICdQbHVnaW4nLFxuICAgICAgICAgICAgICBmdW5jTmFtZTogcGx1Z2luRXZlbnRzLkNBQ0hFRF9SRVNQT05TRV9XSUxMX0JFX1VTRUQsXG4gICAgICAgICAgICAgIGlzUmV0dXJuVmFsdWVQcm9ibGVtOiB0cnVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdwbHVnaW4tZXJyb3ItcmVxdWVzdC13aWxsLWZldGNoJywge1xuICAgICAgdGhyb3duRXJyb3I6IGVycixcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFRoZSByZXF1ZXN0IGNhbiBiZSBhbHRlcmVkIGJ5IHBsdWdpbnMgd2l0aCBgcmVxdWVzdFdpbGxGZXRjaGAgbWFraW5nXG4gIC8vIHRoZSBvcmlnaW5hbCByZXF1ZXN0IChNb3N0IGxpa2VseSBmcm9tIGEgYGZldGNoYCBldmVudCkgdG8gYmUgZGlmZmVyZW50XG4gIC8vIHRvIHRoZSBSZXF1ZXN0IHdlIG1ha2UuIFBhc3MgYm90aCB0byBgZmV0Y2hEaWRGYWlsYCB0byBhaWQgZGVidWdnaW5nLlxuICBsZXQgcGx1Z2luRmlsdGVyZWRSZXF1ZXN0ID0gcmVxdWVzdC5jbG9uZSgpO1xuXG4gIHRyeSB7XG4gICAgbGV0IGZldGNoUmVzcG9uc2U7XG5cbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS93b3JrYm94L2lzc3Vlcy8xNzk2XG4gICAgaWYgKHJlcXVlc3QubW9kZSA9PT0gJ25hdmlnYXRlJykge1xuICAgICAgZmV0Y2hSZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlcXVlc3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmZXRjaFJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocmVxdWVzdCwgZmV0Y2hPcHRpb25zKTtcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgbG9nZ2VyLmRlYnVnKGBOZXR3b3JrIHJlcXVlc3QgZm9yIGArXG4gICAgICBgJyR7Z2V0RnJpZW5kbHlVUkwocmVxdWVzdC51cmwpfScgcmV0dXJuZWQgYSByZXNwb25zZSB3aXRoIGAgK1xuICAgICAgYHN0YXR1cyAnJHtmZXRjaFJlc3BvbnNlLnN0YXR1c30nLmApO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgcGx1Z2luIG9mIHBsdWdpbnMpIHtcbiAgICAgIGlmIChwbHVnaW5FdmVudHMuRkVUQ0hfRElEX1NVQ0NFRUQgaW4gcGx1Z2luKSB7XG4gICAgICAgIGZldGNoUmVzcG9uc2UgPSBhd2FpdCBwbHVnaW5bcGx1Z2luRXZlbnRzLkZFVENIX0RJRF9TVUNDRUVEXVxuICAgICAgICAgICAgLmNhbGwocGx1Z2luLCB7XG4gICAgICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgICAgICByZXF1ZXN0OiBwbHVnaW5GaWx0ZXJlZFJlcXVlc3QsXG4gICAgICAgICAgICAgIHJlc3BvbnNlOiBmZXRjaFJlc3BvbnNlLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICBpZiAoZmV0Y2hSZXNwb25zZSkge1xuICAgICAgICAgICAgYXNzZXJ0LmlzSW5zdGFuY2UoZmV0Y2hSZXNwb25zZSwgUmVzcG9uc2UsIHtcbiAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ1BsdWdpbicsXG4gICAgICAgICAgICAgIGZ1bmNOYW1lOiBwbHVnaW5FdmVudHMuRkVUQ0hfRElEX1NVQ0NFRUQsXG4gICAgICAgICAgICAgIGlzUmV0dXJuVmFsdWVQcm9ibGVtOiB0cnVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZldGNoUmVzcG9uc2U7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGxvZ2dlci5lcnJvcihgTmV0d29yayByZXF1ZXN0IGZvciBgK1xuICAgICAgYCcke2dldEZyaWVuZGx5VVJMKHJlcXVlc3QudXJsKX0nIHRocmV3IGFuIGVycm9yLmAsIGVycm9yKTtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHBsdWdpbiBvZiBmYWlsZWRGZXRjaFBsdWdpbnMpIHtcbiAgICAgIGF3YWl0IHBsdWdpbltwbHVnaW5FdmVudHMuRkVUQ0hfRElEX0ZBSUxdLmNhbGwocGx1Z2luLCB7XG4gICAgICAgIGVycm9yLFxuICAgICAgICBldmVudCxcbiAgICAgICAgb3JpZ2luYWxSZXF1ZXN0OiBvcmlnaW5hbFJlcXVlc3QuY2xvbmUoKSxcbiAgICAgICAgcmVxdWVzdDogcGx1Z2luRmlsdGVyZWRSZXF1ZXN0LmNsb25lKCksXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxuY29uc3QgZmV0Y2hXcmFwcGVyID0ge1xuICBmZXRjaDogd3JhcHBlZEZldGNoLFxufTtcblxuZXhwb3J0IHtmZXRjaFdyYXBwZXJ9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQgJy4uL192ZXJzaW9uLm1qcyc7XG5cbmNvbnN0IGdldEZyaWVuZGx5VVJMID0gKHVybCkgPT4ge1xuICBjb25zdCB1cmxPYmogPSBuZXcgVVJMKHVybCwgbG9jYXRpb24pO1xuICBpZiAodXJsT2JqLm9yaWdpbiA9PT0gbG9jYXRpb24ub3JpZ2luKSB7XG4gICAgcmV0dXJuIHVybE9iai5wYXRobmFtZTtcbiAgfVxuICByZXR1cm4gdXJsT2JqLmhyZWY7XG59O1xuXG5leHBvcnQge2dldEZyaWVuZGx5VVJMfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCAnLi4vX3ZlcnNpb24ubWpzJztcblxuXG5jb25zdCBsb2dnZXIgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID8gbnVsbCA6ICgoKSA9PiB7XG4gIGxldCBpbkdyb3VwID0gZmFsc2U7XG5cbiAgY29uc3QgbWV0aG9kVG9Db2xvck1hcCA9IHtcbiAgICBkZWJ1ZzogYCM3ZjhjOGRgLCAvLyBHcmF5XG4gICAgbG9nOiBgIzJlY2M3MWAsIC8vIEdyZWVuXG4gICAgd2FybjogYCNmMzljMTJgLCAvLyBZZWxsb3dcbiAgICBlcnJvcjogYCNjMDM5MmJgLCAvLyBSZWRcbiAgICBncm91cENvbGxhcHNlZDogYCMzNDk4ZGJgLCAvLyBCbHVlXG4gICAgZ3JvdXBFbmQ6IG51bGwsIC8vIE5vIGNvbG9yZWQgcHJlZml4IG9uIGdyb3VwRW5kXG4gIH07XG5cbiAgY29uc3QgcHJpbnQgPSBmdW5jdGlvbihtZXRob2QsIGFyZ3MpIHtcbiAgICBpZiAobWV0aG9kID09PSAnZ3JvdXBDb2xsYXBzZWQnKSB7XG4gICAgICAvLyBTYWZhcmkgZG9lc24ndCBwcmludCBhbGwgY29uc29sZS5ncm91cENvbGxhcHNlZCgpIGFyZ3VtZW50czpcbiAgICAgIC8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xODI3NTRcbiAgICAgIGlmICgvXigoPyFjaHJvbWV8YW5kcm9pZCkuKSpzYWZhcmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICAgIGNvbnNvbGVbbWV0aG9kXSguLi5hcmdzKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHN0eWxlcyA9IFtcbiAgICAgIGBiYWNrZ3JvdW5kOiAke21ldGhvZFRvQ29sb3JNYXBbbWV0aG9kXX1gLFxuICAgICAgYGJvcmRlci1yYWRpdXM6IDAuNWVtYCxcbiAgICAgIGBjb2xvcjogd2hpdGVgLFxuICAgICAgYGZvbnQtd2VpZ2h0OiBib2xkYCxcbiAgICAgIGBwYWRkaW5nOiAycHggMC41ZW1gLFxuICAgIF07XG5cbiAgICAvLyBXaGVuIGluIGEgZ3JvdXAsIHRoZSB3b3JrYm94IHByZWZpeCBpcyBub3QgZGlzcGxheWVkLlxuICAgIGNvbnN0IGxvZ1ByZWZpeCA9IGluR3JvdXAgPyBbXSA6IFsnJWN3b3JrYm94Jywgc3R5bGVzLmpvaW4oJzsnKV07XG5cbiAgICBjb25zb2xlW21ldGhvZF0oLi4ubG9nUHJlZml4LCAuLi5hcmdzKTtcblxuICAgIGlmIChtZXRob2QgPT09ICdncm91cENvbGxhcHNlZCcpIHtcbiAgICAgIGluR3JvdXAgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAobWV0aG9kID09PSAnZ3JvdXBFbmQnKSB7XG4gICAgICBpbkdyb3VwID0gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGFwaSA9IHt9O1xuICBmb3IgKGNvbnN0IG1ldGhvZCBvZiBPYmplY3Qua2V5cyhtZXRob2RUb0NvbG9yTWFwKSkge1xuICAgIGFwaVttZXRob2RdID0gKC4uLmFyZ3MpID0+IHtcbiAgICAgIHByaW50KG1ldGhvZCwgYXJncyk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBhcGk7XG59KSgpO1xuXG5leHBvcnQge2xvZ2dlcn07XG4iLCJ0cnl7c2VsZlsnd29ya2JveDpjb3JlOjQuMy4xJ10mJl8oKX1jYXRjaChlKXt9Ly8gZXNsaW50LWRpc2FibGUtbGluZSIsIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0IHtjYWNoZU5hbWVzIGFzIF9jYWNoZU5hbWVzfSBmcm9tICcuL19wcml2YXRlL2NhY2hlTmFtZXMubWpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5tanMnO1xuXG5cbi8qKlxuICogR2V0IHRoZSBjdXJyZW50IGNhY2hlIG5hbWVzIGFuZCBwcmVmaXgvc3VmZml4IHVzZWQgYnkgV29ya2JveC5cbiAqXG4gKiBgY2FjaGVOYW1lcy5wcmVjYWNoZWAgaXMgdXNlZCBmb3IgcHJlY2FjaGVkIGFzc2V0cyxcbiAqIGBjYWNoZU5hbWVzLmdvb2dsZUFuYWx5dGljc2AgaXMgdXNlZCBieSBgd29ya2JveC1nb29nbGUtYW5hbHl0aWNzYCB0b1xuICogc3RvcmUgYGFuYWx5dGljcy5qc2AsIGFuZCBgY2FjaGVOYW1lcy5ydW50aW1lYCBpcyB1c2VkIGZvciBldmVyeXRoaW5nIGVsc2UuXG4gKlxuICogYGNhY2hlTmFtZXMucHJlZml4YCBjYW4gYmUgdXNlZCB0byByZXRyaWV2ZSBqdXN0IHRoZSBjdXJyZW50IHByZWZpeCB2YWx1ZS5cbiAqIGBjYWNoZU5hbWVzLnN1ZmZpeGAgY2FuIGJlIHVzZWQgdG8gcmV0cmlldmUganVzdCB0aGUgY3VycmVudCBzdWZmaXggdmFsdWUuXG4gKlxuICogQHJldHVybiB7T2JqZWN0fSBBbiBvYmplY3Qgd2l0aCBgcHJlY2FjaGVgLCBgcnVudGltZWAsIGBwcmVmaXhgLCBhbmRcbiAqICAgICBgZ29vZ2xlQW5hbHl0aWNzYCBwcm9wZXJ0aWVzLlxuICpcbiAqIEBhbGlhcyB3b3JrYm94LmNvcmUuY2FjaGVOYW1lc1xuICovXG5leHBvcnQgY29uc3QgY2FjaGVOYW1lcyA9IHtcbiAgZ2V0IGdvb2dsZUFuYWx5dGljcygpIHtcbiAgICByZXR1cm4gX2NhY2hlTmFtZXMuZ2V0R29vZ2xlQW5hbHl0aWNzTmFtZSgpO1xuICB9LFxuICBnZXQgcHJlY2FjaGUoKSB7XG4gICAgcmV0dXJuIF9jYWNoZU5hbWVzLmdldFByZWNhY2hlTmFtZSgpO1xuICB9LFxuICBnZXQgcHJlZml4KCkge1xuICAgIHJldHVybiBfY2FjaGVOYW1lcy5nZXRQcmVmaXgoKTtcbiAgfSxcbiAgZ2V0IHJ1bnRpbWUoKSB7XG4gICAgcmV0dXJuIF9jYWNoZU5hbWVzLmdldFJ1bnRpbWVOYW1lKCk7XG4gIH0sXG4gIGdldCBzdWZmaXgoKSB7XG4gICAgcmV0dXJuIF9jYWNoZU5hbWVzLmdldFN1ZmZpeCgpO1xuICB9LFxufTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0ICcuL192ZXJzaW9uLm1qcyc7XG5cblxuLyoqXG4gKiBDbGFpbSBhbnkgY3VycmVudGx5IGF2YWlsYWJsZSBjbGllbnRzIG9uY2UgdGhlIHNlcnZpY2Ugd29ya2VyXG4gKiBiZWNvbWVzIGFjdGl2ZS4gVGhpcyBpcyBub3JtYWxseSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYHNraXBXYWl0aW5nKClgLlxuICpcbiAqIEBhbGlhcyB3b3JrYm94LmNvcmUuY2xpZW50c0NsYWltXG4gKi9cbmV4cG9ydCBjb25zdCBjbGllbnRzQ2xhaW0gPSAoKSA9PiB7XG4gIGFkZEV2ZW50TGlzdGVuZXIoJ2FjdGl2YXRlJywgKCkgPT4gY2xpZW50cy5jbGFpbSgpKTtcbn07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCB7cmVnaXN0ZXJRdW90YUVycm9yQ2FsbGJhY2t9IGZyb20gJy4vcmVnaXN0ZXJRdW90YUVycm9yQ2FsbGJhY2subWpzJztcbmltcG9ydCAqIGFzIF9wcml2YXRlIGZyb20gJy4vX3ByaXZhdGUubWpzJztcbmltcG9ydCB7Y2xpZW50c0NsYWltfSBmcm9tICcuL2NsaWVudHNDbGFpbS5tanMnO1xuaW1wb3J0IHtjYWNoZU5hbWVzfSBmcm9tICcuL2NhY2hlTmFtZXMubWpzJztcbmltcG9ydCB7c2V0Q2FjaGVOYW1lRGV0YWlsc30gZnJvbSAnLi9zZXRDYWNoZU5hbWVEZXRhaWxzLm1qcyc7XG5pbXBvcnQge3NraXBXYWl0aW5nfSBmcm9tICcuL3NraXBXYWl0aW5nLm1qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24ubWpzJztcblxuXG4vLyBHaXZlIG91ciB2ZXJzaW9uIHN0cmluZ3Mgc29tZXRoaW5nIHRvIGhhbmcgb2ZmIG9mLlxudHJ5IHtcbiAgc2VsZi53b3JrYm94LnYgPSBzZWxmLndvcmtib3gudiB8fCB7fTtcbn0gY2F0Y2ggKGVycmVyKSB7XG4gIC8vIE5PT1Bcbn1cblxuLyoqXG4gKiBBbGwgb2YgdGhlIFdvcmtib3ggc2VydmljZSB3b3JrZXIgbGlicmFyaWVzIHVzZSB3b3JrYm94LWNvcmUgZm9yIHNoYXJlZFxuICogY29kZSBhcyB3ZWxsIGFzIHNldHRpbmcgZGVmYXVsdCB2YWx1ZXMgdGhhdCBuZWVkIHRvIGJlIHNoYXJlZCAobGlrZSBjYWNoZVxuICogbmFtZXMpLlxuICpcbiAqIEBuYW1lc3BhY2Ugd29ya2JveC5jb3JlXG4gKi9cblxuZXhwb3J0IHtcbiAgX3ByaXZhdGUsXG4gIGNsaWVudHNDbGFpbSxcbiAgY2FjaGVOYW1lcyxcbiAgcmVnaXN0ZXJRdW90YUVycm9yQ2FsbGJhY2ssXG4gIHNldENhY2hlTmFtZURldGFpbHMsXG4gIHNraXBXYWl0aW5nLFxufTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0IHttZXNzYWdlc30gZnJvbSAnLi9tZXNzYWdlcy5tanMnO1xuaW1wb3J0ICcuLi8uLi9fdmVyc2lvbi5tanMnO1xuXG5jb25zdCBmYWxsYmFjayA9IChjb2RlLCAuLi5hcmdzKSA9PiB7XG4gIGxldCBtc2cgPSBjb2RlO1xuICBpZiAoYXJncy5sZW5ndGggPiAwKSB7XG4gICAgbXNnICs9IGAgOjogJHtKU09OLnN0cmluZ2lmeShhcmdzKX1gO1xuICB9XG4gIHJldHVybiBtc2c7XG59O1xuXG5jb25zdCBnZW5lcmF0b3JGdW5jdGlvbiA9IChjb2RlLCAuLi5hcmdzKSA9PiB7XG4gIGNvbnN0IG1lc3NhZ2UgPSBtZXNzYWdlc1tjb2RlXTtcbiAgaWYgKCFtZXNzYWdlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gZmluZCBtZXNzYWdlIGZvciBjb2RlICcke2NvZGV9Jy5gKTtcbiAgfVxuXG4gIHJldHVybiBtZXNzYWdlKC4uLmFyZ3MpO1xufTtcblxuZXhwb3J0IGNvbnN0IG1lc3NhZ2VHZW5lcmF0b3IgPSAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykgP1xuICAgIGZhbGxiYWNrIDogZ2VuZXJhdG9yRnVuY3Rpb247XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCAnLi4vLi4vX3ZlcnNpb24ubWpzJztcblxuXG5leHBvcnQgY29uc3QgbWVzc2FnZXMgPSB7XG4gICdpbnZhbGlkLXZhbHVlJzogKHtwYXJhbU5hbWUsIHZhbGlkVmFsdWVEZXNjcmlwdGlvbiwgdmFsdWV9KSA9PiB7XG4gICAgaWYgKCFwYXJhbU5hbWUgfHwgIXZhbGlkVmFsdWVEZXNjcmlwdGlvbikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIGlucHV0IHRvICdpbnZhbGlkLXZhbHVlJyBlcnJvci5gKTtcbiAgICB9XG4gICAgcmV0dXJuIGBUaGUgJyR7cGFyYW1OYW1lfScgcGFyYW1ldGVyIHdhcyBnaXZlbiBhIHZhbHVlIHdpdGggYW4gYCArXG4gICAgICBgdW5leHBlY3RlZCB2YWx1ZS4gJHt2YWxpZFZhbHVlRGVzY3JpcHRpb259IFJlY2VpdmVkIGEgdmFsdWUgb2YgYCArXG4gICAgICBgJHtKU09OLnN0cmluZ2lmeSh2YWx1ZSl9LmA7XG4gIH0sXG5cbiAgJ25vdC1pbi1zdyc6ICh7bW9kdWxlTmFtZX0pID0+IHtcbiAgICBpZiAoIW1vZHVsZU5hbWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBpbnB1dCB0byAnbm90LWluLXN3JyBlcnJvci5gKTtcbiAgICB9XG4gICAgcmV0dXJuIGBUaGUgJyR7bW9kdWxlTmFtZX0nIG11c3QgYmUgdXNlZCBpbiBhIHNlcnZpY2Ugd29ya2VyLmA7XG4gIH0sXG5cbiAgJ25vdC1hbi1hcnJheSc6ICh7bW9kdWxlTmFtZSwgY2xhc3NOYW1lLCBmdW5jTmFtZSwgcGFyYW1OYW1lfSkgPT4ge1xuICAgIGlmICghbW9kdWxlTmFtZSB8fCAhY2xhc3NOYW1lIHx8ICFmdW5jTmFtZSB8fCAhcGFyYW1OYW1lKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgaW5wdXQgdG8gJ25vdC1hbi1hcnJheScgZXJyb3IuYCk7XG4gICAgfVxuICAgIHJldHVybiBgVGhlIHBhcmFtZXRlciAnJHtwYXJhbU5hbWV9JyBwYXNzZWQgaW50byBgICtcbiAgICAgIGAnJHttb2R1bGVOYW1lfS4ke2NsYXNzTmFtZX0uJHtmdW5jTmFtZX0oKScgbXVzdCBiZSBhbiBhcnJheS5gO1xuICB9LFxuXG4gICdpbmNvcnJlY3QtdHlwZSc6ICh7ZXhwZWN0ZWRUeXBlLCBwYXJhbU5hbWUsIG1vZHVsZU5hbWUsIGNsYXNzTmFtZSxcbiAgICBmdW5jTmFtZX0pID0+IHtcbiAgICBpZiAoIWV4cGVjdGVkVHlwZSB8fCAhcGFyYW1OYW1lIHx8ICFtb2R1bGVOYW1lIHx8ICFmdW5jTmFtZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIGlucHV0IHRvICdpbmNvcnJlY3QtdHlwZScgZXJyb3IuYCk7XG4gICAgfVxuICAgIHJldHVybiBgVGhlIHBhcmFtZXRlciAnJHtwYXJhbU5hbWV9JyBwYXNzZWQgaW50byBgICtcbiAgICAgIGAnJHttb2R1bGVOYW1lfS4ke2NsYXNzTmFtZSA/IChjbGFzc05hbWUgKyAnLicpIDogJyd9YCArXG4gICAgICBgJHtmdW5jTmFtZX0oKScgbXVzdCBiZSBvZiB0eXBlICR7ZXhwZWN0ZWRUeXBlfS5gO1xuICB9LFxuXG4gICdpbmNvcnJlY3QtY2xhc3MnOiAoe2V4cGVjdGVkQ2xhc3MsIHBhcmFtTmFtZSwgbW9kdWxlTmFtZSwgY2xhc3NOYW1lLFxuICAgIGZ1bmNOYW1lLCBpc1JldHVyblZhbHVlUHJvYmxlbX0pID0+IHtcbiAgICBpZiAoIWV4cGVjdGVkQ2xhc3MgfHwgIW1vZHVsZU5hbWUgfHwgIWZ1bmNOYW1lKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgaW5wdXQgdG8gJ2luY29ycmVjdC1jbGFzcycgZXJyb3IuYCk7XG4gICAgfVxuXG4gICAgaWYgKGlzUmV0dXJuVmFsdWVQcm9ibGVtKSB7XG4gICAgICByZXR1cm4gYFRoZSByZXR1cm4gdmFsdWUgZnJvbSBgICtcbiAgICAgICAgYCcke21vZHVsZU5hbWV9LiR7Y2xhc3NOYW1lID8gKGNsYXNzTmFtZSArICcuJykgOiAnJ30ke2Z1bmNOYW1lfSgpJyBgICtcbiAgICAgICAgYG11c3QgYmUgYW4gaW5zdGFuY2Ugb2YgY2xhc3MgJHtleHBlY3RlZENsYXNzLm5hbWV9LmA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGBUaGUgcGFyYW1ldGVyICcke3BhcmFtTmFtZX0nIHBhc3NlZCBpbnRvIGAgK1xuICAgICAgYCcke21vZHVsZU5hbWV9LiR7Y2xhc3NOYW1lID8gKGNsYXNzTmFtZSArICcuJykgOiAnJ30ke2Z1bmNOYW1lfSgpJyBgICtcbiAgICAgIGBtdXN0IGJlIGFuIGluc3RhbmNlIG9mIGNsYXNzICR7ZXhwZWN0ZWRDbGFzcy5uYW1lfS5gO1xuICB9LFxuXG4gICdtaXNzaW5nLWEtbWV0aG9kJzogKHtleHBlY3RlZE1ldGhvZCwgcGFyYW1OYW1lLCBtb2R1bGVOYW1lLCBjbGFzc05hbWUsXG4gICAgZnVuY05hbWV9KSA9PiB7XG4gICAgaWYgKCFleHBlY3RlZE1ldGhvZCB8fCAhcGFyYW1OYW1lIHx8ICFtb2R1bGVOYW1lIHx8ICFjbGFzc05hbWVcbiAgICAgICAgfHwgIWZ1bmNOYW1lKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgaW5wdXQgdG8gJ21pc3NpbmctYS1tZXRob2QnIGVycm9yLmApO1xuICAgIH1cbiAgICByZXR1cm4gYCR7bW9kdWxlTmFtZX0uJHtjbGFzc05hbWV9LiR7ZnVuY05hbWV9KCkgZXhwZWN0ZWQgdGhlIGAgK1xuICAgICAgYCcke3BhcmFtTmFtZX0nIHBhcmFtZXRlciB0byBleHBvc2UgYSAnJHtleHBlY3RlZE1ldGhvZH0nIG1ldGhvZC5gO1xuICB9LFxuXG4gICdhZGQtdG8tY2FjaGUtbGlzdC11bmV4cGVjdGVkLXR5cGUnOiAoe2VudHJ5fSkgPT4ge1xuICAgIHJldHVybiBgQW4gdW5leHBlY3RlZCBlbnRyeSB3YXMgcGFzc2VkIHRvIGAgK1xuICAgIGAnd29ya2JveC1wcmVjYWNoaW5nLlByZWNhY2hlQ29udHJvbGxlci5hZGRUb0NhY2hlTGlzdCgpJyBUaGUgZW50cnkgYCArXG4gICAgYCcke0pTT04uc3RyaW5naWZ5KGVudHJ5KX0nIGlzbid0IHN1cHBvcnRlZC4gWW91IG11c3Qgc3VwcGx5IGFuIGFycmF5IG9mIGAgK1xuICAgIGBzdHJpbmdzIHdpdGggb25lIG9yIG1vcmUgY2hhcmFjdGVycywgb2JqZWN0cyB3aXRoIGEgdXJsIHByb3BlcnR5IG9yIGAgK1xuICAgIGBSZXF1ZXN0IG9iamVjdHMuYDtcbiAgfSxcblxuICAnYWRkLXRvLWNhY2hlLWxpc3QtY29uZmxpY3RpbmctZW50cmllcyc6ICh7Zmlyc3RFbnRyeSwgc2Vjb25kRW50cnl9KSA9PiB7XG4gICAgaWYgKCFmaXJzdEVudHJ5IHx8ICFzZWNvbmRFbnRyeSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIGlucHV0IHRvIGAgK1xuICAgICAgICBgJ2FkZC10by1jYWNoZS1saXN0LWR1cGxpY2F0ZS1lbnRyaWVzJyBlcnJvci5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYFR3byBvZiB0aGUgZW50cmllcyBwYXNzZWQgdG8gYCArXG4gICAgICBgJ3dvcmtib3gtcHJlY2FjaGluZy5QcmVjYWNoZUNvbnRyb2xsZXIuYWRkVG9DYWNoZUxpc3QoKScgaGFkIHRoZSBVUkwgYCArXG4gICAgICBgJHtmaXJzdEVudHJ5Ll9lbnRyeUlkfSBidXQgZGlmZmVyZW50IHJldmlzaW9uIGRldGFpbHMuIFdvcmtib3ggaXMgYCArXG4gICAgICBgaXMgdW5hYmxlIHRvIGNhY2hlIGFuZCB2ZXJzaW9uIHRoZSBhc3NldCBjb3JyZWN0bHkuIFBsZWFzZSByZW1vdmUgb25lIGAgK1xuICAgICAgYG9mIHRoZSBlbnRyaWVzLmA7XG4gIH0sXG5cbiAgJ3BsdWdpbi1lcnJvci1yZXF1ZXN0LXdpbGwtZmV0Y2gnOiAoe3Rocm93bkVycm9yfSkgPT4ge1xuICAgIGlmICghdGhyb3duRXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBpbnB1dCB0byBgICtcbiAgICAgICAgYCdwbHVnaW4tZXJyb3ItcmVxdWVzdC13aWxsLWZldGNoJywgZXJyb3IuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGBBbiBlcnJvciB3YXMgdGhyb3duIGJ5IGEgcGx1Z2lucyAncmVxdWVzdFdpbGxGZXRjaCgpJyBtZXRob2QuIGAgK1xuICAgICAgYFRoZSB0aHJvd24gZXJyb3IgbWVzc2FnZSB3YXM6ICcke3Rocm93bkVycm9yLm1lc3NhZ2V9Jy5gO1xuICB9LFxuXG4gICdpbnZhbGlkLWNhY2hlLW5hbWUnOiAoe2NhY2hlTmFtZUlkLCB2YWx1ZX0pID0+IHtcbiAgICBpZiAoIWNhY2hlTmFtZUlkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEV4cGVjdGVkIGEgJ2NhY2hlTmFtZUlkJyBmb3IgZXJyb3IgJ2ludmFsaWQtY2FjaGUtbmFtZSdgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYFlvdSBtdXN0IHByb3ZpZGUgYSBuYW1lIGNvbnRhaW5pbmcgYXQgbGVhc3Qgb25lIGNoYXJhY3RlciBmb3IgYCArXG4gICAgICBgc2V0Q2FjaGVEZWF0aWxzKHske2NhY2hlTmFtZUlkfTogJy4uLid9KS4gUmVjZWl2ZWQgYSB2YWx1ZSBvZiBgICtcbiAgICAgIGAnJHtKU09OLnN0cmluZ2lmeSh2YWx1ZSl9J2A7XG4gIH0sXG5cbiAgJ3VucmVnaXN0ZXItcm91dGUtYnV0LW5vdC1mb3VuZC13aXRoLW1ldGhvZCc6ICh7bWV0aG9kfSkgPT4ge1xuICAgIGlmICghbWV0aG9kKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgaW5wdXQgdG8gYCArXG4gICAgICAgIGAndW5yZWdpc3Rlci1yb3V0ZS1idXQtbm90LWZvdW5kLXdpdGgtbWV0aG9kJyBlcnJvci5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYFRoZSByb3V0ZSB5b3UncmUgdHJ5aW5nIHRvIHVucmVnaXN0ZXIgd2FzIG5vdCAgcHJldmlvdXNseSBgICtcbiAgICAgIGByZWdpc3RlcmVkIGZvciB0aGUgbWV0aG9kIHR5cGUgJyR7bWV0aG9kfScuYDtcbiAgfSxcblxuICAndW5yZWdpc3Rlci1yb3V0ZS1yb3V0ZS1ub3QtcmVnaXN0ZXJlZCc6ICgpID0+IHtcbiAgICByZXR1cm4gYFRoZSByb3V0ZSB5b3UncmUgdHJ5aW5nIHRvIHVucmVnaXN0ZXIgd2FzIG5vdCBwcmV2aW91c2x5IGAgK1xuICAgICAgYHJlZ2lzdGVyZWQuYDtcbiAgfSxcblxuICAncXVldWUtcmVwbGF5LWZhaWxlZCc6ICh7bmFtZX0pID0+IHtcbiAgICByZXR1cm4gYFJlcGxheWluZyB0aGUgYmFja2dyb3VuZCBzeW5jIHF1ZXVlICcke25hbWV9JyBmYWlsZWQuYDtcbiAgfSxcblxuICAnZHVwbGljYXRlLXF1ZXVlLW5hbWUnOiAoe25hbWV9KSA9PiB7XG4gICAgcmV0dXJuIGBUaGUgUXVldWUgbmFtZSAnJHtuYW1lfScgaXMgYWxyZWFkeSBiZWluZyB1c2VkLiBgICtcbiAgICAgICAgYEFsbCBpbnN0YW5jZXMgb2YgYmFja2dyb3VuZFN5bmMuUXVldWUgbXVzdCBiZSBnaXZlbiB1bmlxdWUgbmFtZXMuYDtcbiAgfSxcblxuICAnZXhwaXJlZC10ZXN0LXdpdGhvdXQtbWF4LWFnZSc6ICh7bWV0aG9kTmFtZSwgcGFyYW1OYW1lfSkgPT4ge1xuICAgIHJldHVybiBgVGhlICcke21ldGhvZE5hbWV9KCknIG1ldGhvZCBjYW4gb25seSBiZSB1c2VkIHdoZW4gdGhlIGAgK1xuICAgICAgYCcke3BhcmFtTmFtZX0nIGlzIHVzZWQgaW4gdGhlIGNvbnN0cnVjdG9yLmA7XG4gIH0sXG5cbiAgJ3Vuc3VwcG9ydGVkLXJvdXRlLXR5cGUnOiAoe21vZHVsZU5hbWUsIGNsYXNzTmFtZSwgZnVuY05hbWUsIHBhcmFtTmFtZX0pID0+IHtcbiAgICByZXR1cm4gYFRoZSBzdXBwbGllZCAnJHtwYXJhbU5hbWV9JyBwYXJhbWV0ZXIgd2FzIGFuIHVuc3VwcG9ydGVkIHR5cGUuIGAgK1xuICAgICAgYFBsZWFzZSBjaGVjayB0aGUgZG9jcyBmb3IgJHttb2R1bGVOYW1lfS4ke2NsYXNzTmFtZX0uJHtmdW5jTmFtZX0gZm9yIGAgK1xuICAgICAgYHZhbGlkIGlucHV0IHR5cGVzLmA7XG4gIH0sXG5cbiAgJ25vdC1hcnJheS1vZi1jbGFzcyc6ICh7dmFsdWUsIGV4cGVjdGVkQ2xhc3MsXG4gICAgbW9kdWxlTmFtZSwgY2xhc3NOYW1lLCBmdW5jTmFtZSwgcGFyYW1OYW1lfSkgPT4ge1xuICAgIHJldHVybiBgVGhlIHN1cHBsaWVkICcke3BhcmFtTmFtZX0nIHBhcmFtZXRlciBtdXN0IGJlIGFuIGFycmF5IG9mIGAgK1xuICAgICAgYCcke2V4cGVjdGVkQ2xhc3N9JyBvYmplY3RzLiBSZWNlaXZlZCAnJHtKU09OLnN0cmluZ2lmeSh2YWx1ZSl9LCcuIGAgK1xuICAgICAgYFBsZWFzZSBjaGVjayB0aGUgY2FsbCB0byAke21vZHVsZU5hbWV9LiR7Y2xhc3NOYW1lfS4ke2Z1bmNOYW1lfSgpIGAgK1xuICAgICAgYHRvIGZpeCB0aGUgaXNzdWUuYDtcbiAgfSxcblxuICAnbWF4LWVudHJpZXMtb3ItYWdlLXJlcXVpcmVkJzogKHttb2R1bGVOYW1lLCBjbGFzc05hbWUsIGZ1bmNOYW1lfSkgPT4ge1xuICAgIHJldHVybiBgWW91IG11c3QgZGVmaW5lIGVpdGhlciBjb25maWcubWF4RW50cmllcyBvciBjb25maWcubWF4QWdlU2Vjb25kc2AgK1xuICAgICAgYGluICR7bW9kdWxlTmFtZX0uJHtjbGFzc05hbWV9LiR7ZnVuY05hbWV9YDtcbiAgfSxcblxuICAnc3RhdHVzZXMtb3ItaGVhZGVycy1yZXF1aXJlZCc6ICh7bW9kdWxlTmFtZSwgY2xhc3NOYW1lLCBmdW5jTmFtZX0pID0+IHtcbiAgICByZXR1cm4gYFlvdSBtdXN0IGRlZmluZSBlaXRoZXIgY29uZmlnLnN0YXR1c2VzIG9yIGNvbmZpZy5oZWFkZXJzYCArXG4gICAgICBgaW4gJHttb2R1bGVOYW1lfS4ke2NsYXNzTmFtZX0uJHtmdW5jTmFtZX1gO1xuICB9LFxuXG4gICdpbnZhbGlkLXN0cmluZyc6ICh7bW9kdWxlTmFtZSwgY2xhc3NOYW1lLCBmdW5jTmFtZSwgcGFyYW1OYW1lfSkgPT4ge1xuICAgIGlmICghcGFyYW1OYW1lIHx8ICFtb2R1bGVOYW1lIHx8ICFmdW5jTmFtZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIGlucHV0IHRvICdpbnZhbGlkLXN0cmluZycgZXJyb3IuYCk7XG4gICAgfVxuICAgIHJldHVybiBgV2hlbiB1c2luZyBzdHJpbmdzLCB0aGUgJyR7cGFyYW1OYW1lfScgcGFyYW1ldGVyIG11c3Qgc3RhcnQgd2l0aCBgICtcbiAgICAgIGAnaHR0cCcgKGZvciBjcm9zcy1vcmlnaW4gbWF0Y2hlcykgb3IgJy8nIChmb3Igc2FtZS1vcmlnaW4gbWF0Y2hlcykuIGAgK1xuICAgICAgYFBsZWFzZSBzZWUgdGhlIGRvY3MgZm9yICR7bW9kdWxlTmFtZX0uJHtmdW5jTmFtZX0oKSBmb3IgYCArXG4gICAgICBgbW9yZSBpbmZvLmA7XG4gIH0sXG5cbiAgJ2NoYW5uZWwtbmFtZS1yZXF1aXJlZCc6ICgpID0+IHtcbiAgICByZXR1cm4gYFlvdSBtdXN0IHByb3ZpZGUgYSBjaGFubmVsTmFtZSB0byBjb25zdHJ1Y3QgYSBgICtcbiAgICBgQnJvYWRjYXN0Q2FjaGVVcGRhdGUgaW5zdGFuY2UuYDtcbiAgfSxcblxuICAnaW52YWxpZC1yZXNwb25zZXMtYXJlLXNhbWUtYXJncyc6ICgpID0+IHtcbiAgICByZXR1cm4gYFRoZSBhcmd1bWVudHMgcGFzc2VkIGludG8gcmVzcG9uc2VzQXJlU2FtZSgpIGFwcGVhciB0byBiZSBgICtcbiAgICAgIGBpbnZhbGlkLiBQbGVhc2UgZW5zdXJlIHZhbGlkIFJlc3BvbnNlcyBhcmUgdXNlZC5gO1xuICB9LFxuXG4gICdleHBpcmUtY3VzdG9tLWNhY2hlcy1vbmx5JzogKCkgPT4ge1xuICAgIHJldHVybiBgWW91IG11c3QgcHJvdmlkZSBhICdjYWNoZU5hbWUnIHByb3BlcnR5IHdoZW4gdXNpbmcgdGhlIGAgK1xuICAgICAgYGV4cGlyYXRpb24gcGx1Z2luIHdpdGggYSBydW50aW1lIGNhY2hpbmcgc3RyYXRlZ3kuYDtcbiAgfSxcblxuICAndW5pdC1tdXN0LWJlLWJ5dGVzJzogKHtub3JtYWxpemVkUmFuZ2VIZWFkZXJ9KSA9PiB7XG4gICAgaWYgKCFub3JtYWxpemVkUmFuZ2VIZWFkZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBpbnB1dCB0byAndW5pdC1tdXN0LWJlLWJ5dGVzJyBlcnJvci5gKTtcbiAgICB9XG4gICAgcmV0dXJuIGBUaGUgJ3VuaXQnIHBvcnRpb24gb2YgdGhlIFJhbmdlIGhlYWRlciBtdXN0IGJlIHNldCB0byAnYnl0ZXMnLiBgICtcbiAgICAgIGBUaGUgUmFuZ2UgaGVhZGVyIHByb3ZpZGVkIHdhcyBcIiR7bm9ybWFsaXplZFJhbmdlSGVhZGVyfVwiYDtcbiAgfSxcblxuICAnc2luZ2xlLXJhbmdlLW9ubHknOiAoe25vcm1hbGl6ZWRSYW5nZUhlYWRlcn0pID0+IHtcbiAgICBpZiAoIW5vcm1hbGl6ZWRSYW5nZUhlYWRlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIGlucHV0IHRvICdzaW5nbGUtcmFuZ2Utb25seScgZXJyb3IuYCk7XG4gICAgfVxuICAgIHJldHVybiBgTXVsdGlwbGUgcmFuZ2VzIGFyZSBub3Qgc3VwcG9ydGVkLiBQbGVhc2UgdXNlIGEgIHNpbmdsZSBzdGFydCBgICtcbiAgICAgIGB2YWx1ZSwgYW5kIG9wdGlvbmFsIGVuZCB2YWx1ZS4gVGhlIFJhbmdlIGhlYWRlciBwcm92aWRlZCB3YXMgYCArXG4gICAgICBgXCIke25vcm1hbGl6ZWRSYW5nZUhlYWRlcn1cImA7XG4gIH0sXG5cbiAgJ2ludmFsaWQtcmFuZ2UtdmFsdWVzJzogKHtub3JtYWxpemVkUmFuZ2VIZWFkZXJ9KSA9PiB7XG4gICAgaWYgKCFub3JtYWxpemVkUmFuZ2VIZWFkZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBpbnB1dCB0byAnaW52YWxpZC1yYW5nZS12YWx1ZXMnIGVycm9yLmApO1xuICAgIH1cbiAgICByZXR1cm4gYFRoZSBSYW5nZSBoZWFkZXIgaXMgbWlzc2luZyBib3RoIHN0YXJ0IGFuZCBlbmQgdmFsdWVzLiBBdCBsZWFzdCBgICtcbiAgICAgIGBvbmUgb2YgdGhvc2UgdmFsdWVzIGlzIG5lZWRlZC4gVGhlIFJhbmdlIGhlYWRlciBwcm92aWRlZCB3YXMgYCArXG4gICAgICBgXCIke25vcm1hbGl6ZWRSYW5nZUhlYWRlcn1cImA7XG4gIH0sXG5cbiAgJ25vLXJhbmdlLWhlYWRlcic6ICgpID0+IHtcbiAgICByZXR1cm4gYE5vIFJhbmdlIGhlYWRlciB3YXMgZm91bmQgaW4gdGhlIFJlcXVlc3QgcHJvdmlkZWQuYDtcbiAgfSxcblxuICAncmFuZ2Utbm90LXNhdGlzZmlhYmxlJzogKHtzaXplLCBzdGFydCwgZW5kfSkgPT4ge1xuICAgIHJldHVybiBgVGhlIHN0YXJ0ICgke3N0YXJ0fSkgYW5kIGVuZCAoJHtlbmR9KSB2YWx1ZXMgaW4gdGhlIFJhbmdlIGFyZSBgICtcbiAgICAgIGBub3Qgc2F0aXNmaWFibGUgYnkgdGhlIGNhY2hlZCByZXNwb25zZSwgd2hpY2ggaXMgJHtzaXplfSBieXRlcy5gO1xuICB9LFxuXG4gICdhdHRlbXB0LXRvLWNhY2hlLW5vbi1nZXQtcmVxdWVzdCc6ICh7dXJsLCBtZXRob2R9KSA9PiB7XG4gICAgcmV0dXJuIGBVbmFibGUgdG8gY2FjaGUgJyR7dXJsfScgYmVjYXVzZSBpdCBpcyBhICcke21ldGhvZH0nIHJlcXVlc3QgYW5kIGAgK1xuICAgICAgYG9ubHkgJ0dFVCcgcmVxdWVzdHMgY2FuIGJlIGNhY2hlZC5gO1xuICB9LFxuXG4gICdjYWNoZS1wdXQtd2l0aC1uby1yZXNwb25zZSc6ICh7dXJsfSkgPT4ge1xuICAgIHJldHVybiBgVGhlcmUgd2FzIGFuIGF0dGVtcHQgdG8gY2FjaGUgJyR7dXJsfScgYnV0IHRoZSByZXNwb25zZSB3YXMgbm90IGAgK1xuICAgICAgYGRlZmluZWQuYDtcbiAgfSxcblxuICAnbm8tcmVzcG9uc2UnOiAoe3VybCwgZXJyb3J9KSA9PiB7XG4gICAgbGV0IG1lc3NhZ2UgPSBgVGhlIHN0cmF0ZWd5IGNvdWxkIG5vdCBnZW5lcmF0ZSBhIHJlc3BvbnNlIGZvciAnJHt1cmx9Jy5gO1xuICAgIGlmIChlcnJvcikge1xuICAgICAgbWVzc2FnZSArPSBgIFRoZSB1bmRlcmx5aW5nIGVycm9yIGlzICR7ZXJyb3J9LmA7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gICdiYWQtcHJlY2FjaGluZy1yZXNwb25zZSc6ICh7dXJsLCBzdGF0dXN9KSA9PiB7XG4gICAgcmV0dXJuIGBUaGUgcHJlY2FjaGluZyByZXF1ZXN0IGZvciAnJHt1cmx9JyBmYWlsZWQgd2l0aCBhbiBIVFRQIGAgK1xuICAgICAgYHN0YXR1cyBvZiAke3N0YXR1c30uYDtcbiAgfSxcbn07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCAnLi4vX3ZlcnNpb24ubWpzJztcblxuXG5leHBvcnQgY29uc3QgcGx1Z2luRXZlbnRzID0ge1xuICBDQUNIRV9ESURfVVBEQVRFOiAnY2FjaGVEaWRVcGRhdGUnLFxuICBDQUNIRV9LRVlfV0lMTF9CRV9VU0VEOiAnY2FjaGVLZXlXaWxsQmVVc2VkJyxcbiAgQ0FDSEVfV0lMTF9VUERBVEU6ICdjYWNoZVdpbGxVcGRhdGUnLFxuICBDQUNIRURfUkVTUE9OU0VfV0lMTF9CRV9VU0VEOiAnY2FjaGVkUmVzcG9uc2VXaWxsQmVVc2VkJyxcbiAgRkVUQ0hfRElEX0ZBSUw6ICdmZXRjaERpZEZhaWwnLFxuICBGRVRDSF9ESURfU1VDQ0VFRDogJ2ZldGNoRGlkU3VjY2VlZCcsXG4gIFJFUVVFU1RfV0lMTF9GRVRDSDogJ3JlcXVlc3RXaWxsRmV0Y2gnLFxufTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0ICcuLi9fdmVyc2lvbi5tanMnO1xuXG5cbi8vIENhbGxiYWNrcyB0byBiZSBleGVjdXRlZCB3aGVuZXZlciB0aGVyZSdzIGEgcXVvdGEgZXJyb3IuXG5jb25zdCBxdW90YUVycm9yQ2FsbGJhY2tzID0gbmV3IFNldCgpO1xuXG5leHBvcnQge3F1b3RhRXJyb3JDYWxsYmFja3N9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQge2xvZ2dlcn0gZnJvbSAnLi9fcHJpdmF0ZS9sb2dnZXIubWpzJztcbmltcG9ydCB7YXNzZXJ0fSBmcm9tICcuL19wcml2YXRlL2Fzc2VydC5tanMnO1xuaW1wb3J0IHtxdW90YUVycm9yQ2FsbGJhY2tzfSBmcm9tICcuL21vZGVscy9xdW90YUVycm9yQ2FsbGJhY2tzLm1qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24ubWpzJztcblxuXG4vKipcbiAqIEFkZHMgYSBmdW5jdGlvbiB0byB0aGUgc2V0IG9mIHF1b3RhRXJyb3JDYWxsYmFja3MgdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIGlmXG4gKiB0aGVyZSdzIGEgcXVvdGEgZXJyb3IuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEBtZW1iZXJvZiB3b3JrYm94LmNvcmVcbiAqL1xuZnVuY3Rpb24gcmVnaXN0ZXJRdW90YUVycm9yQ2FsbGJhY2soY2FsbGJhY2spIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBhc3NlcnQuaXNUeXBlKGNhbGxiYWNrLCAnZnVuY3Rpb24nLCB7XG4gICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1jb3JlJyxcbiAgICAgIGZ1bmNOYW1lOiAncmVnaXN0ZXInLFxuICAgICAgcGFyYW1OYW1lOiAnY2FsbGJhY2snLFxuICAgIH0pO1xuICB9XG5cbiAgcXVvdGFFcnJvckNhbGxiYWNrcy5hZGQoY2FsbGJhY2spO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgbG9nZ2VyLmxvZygnUmVnaXN0ZXJlZCBhIGNhbGxiYWNrIHRvIHJlc3BvbmQgdG8gcXVvdGEgZXJyb3JzLicsIGNhbGxiYWNrKTtcbiAgfVxufVxuXG5leHBvcnQge3JlZ2lzdGVyUXVvdGFFcnJvckNhbGxiYWNrfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0IHthc3NlcnR9IGZyb20gJy4vX3ByaXZhdGUvYXNzZXJ0Lm1qcyc7XG5pbXBvcnQge2NhY2hlTmFtZXN9IGZyb20gJy4vX3ByaXZhdGUvY2FjaGVOYW1lcy5tanMnO1xuaW1wb3J0IHtXb3JrYm94RXJyb3J9IGZyb20gJy4vX3ByaXZhdGUvV29ya2JveEVycm9yLm1qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24ubWpzJztcblxuXG4vKipcbiAqIE1vZGlmaWVzIHRoZSBkZWZhdWx0IGNhY2hlIG5hbWVzIHVzZWQgYnkgdGhlIFdvcmtib3ggcGFja2FnZXMuXG4gKiBDYWNoZSBuYW1lcyBhcmUgZ2VuZXJhdGVkIGFzIGA8cHJlZml4Pi08Q2FjaGUgTmFtZT4tPHN1ZmZpeD5gLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZXRhaWxzXG4gKiBAcGFyYW0ge09iamVjdH0gW2RldGFpbHMucHJlZml4XSBUaGUgc3RyaW5nIHRvIGFkZCB0byB0aGUgYmVnaW5uaW5nIG9mXG4gKiAgICAgdGhlIHByZWNhY2hlIGFuZCBydW50aW1lIGNhY2hlIG5hbWVzLlxuICogQHBhcmFtIHtPYmplY3R9IFtkZXRhaWxzLnN1ZmZpeF0gVGhlIHN0cmluZyB0byBhZGQgdG8gdGhlIGVuZCBvZlxuICogICAgIHRoZSBwcmVjYWNoZSBhbmQgcnVudGltZSBjYWNoZSBuYW1lcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbZGV0YWlscy5wcmVjYWNoZV0gVGhlIGNhY2hlIG5hbWUgdG8gdXNlIGZvciBwcmVjYWNoZVxuICogICAgIGNhY2hpbmcuXG4gKiBAcGFyYW0ge09iamVjdH0gW2RldGFpbHMucnVudGltZV0gVGhlIGNhY2hlIG5hbWUgdG8gdXNlIGZvciBydW50aW1lIGNhY2hpbmcuXG4gKiBAcGFyYW0ge09iamVjdH0gW2RldGFpbHMuZ29vZ2xlQW5hbHl0aWNzXSBUaGUgY2FjaGUgbmFtZSB0byB1c2UgZm9yXG4gKiAgICAgYHdvcmtib3gtZ29vZ2xlLWFuYWx5dGljc2AgY2FjaGluZy5cbiAqXG4gKiBAYWxpYXMgd29ya2JveC5jb3JlLnNldENhY2hlTmFtZURldGFpbHNcbiAqL1xuZXhwb3J0IGNvbnN0IHNldENhY2hlTmFtZURldGFpbHMgPSAoZGV0YWlscykgPT4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIE9iamVjdC5rZXlzKGRldGFpbHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgYXNzZXJ0LmlzVHlwZShkZXRhaWxzW2tleV0sICdzdHJpbmcnLCB7XG4gICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LWNvcmUnLFxuICAgICAgICBmdW5jTmFtZTogJ3NldENhY2hlTmFtZURldGFpbHMnLFxuICAgICAgICBwYXJhbU5hbWU6IGBkZXRhaWxzLiR7a2V5fWAsXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGlmICgncHJlY2FjaGUnIGluIGRldGFpbHMgJiYgZGV0YWlscy5wcmVjYWNoZS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ2ludmFsaWQtY2FjaGUtbmFtZScsIHtcbiAgICAgICAgY2FjaGVOYW1lSWQ6ICdwcmVjYWNoZScsXG4gICAgICAgIHZhbHVlOiBkZXRhaWxzLnByZWNhY2hlLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCdydW50aW1lJyBpbiBkZXRhaWxzICYmIGRldGFpbHMucnVudGltZS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ2ludmFsaWQtY2FjaGUtbmFtZScsIHtcbiAgICAgICAgY2FjaGVOYW1lSWQ6ICdydW50aW1lJyxcbiAgICAgICAgdmFsdWU6IGRldGFpbHMucnVudGltZSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICgnZ29vZ2xlQW5hbHl0aWNzJyBpbiBkZXRhaWxzICYmIGRldGFpbHMuZ29vZ2xlQW5hbHl0aWNzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignaW52YWxpZC1jYWNoZS1uYW1lJywge1xuICAgICAgICBjYWNoZU5hbWVJZDogJ2dvb2dsZUFuYWx5dGljcycsXG4gICAgICAgIHZhbHVlOiBkZXRhaWxzLmdvb2dsZUFuYWx5dGljcyxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNhY2hlTmFtZXMudXBkYXRlRGV0YWlscyhkZXRhaWxzKTtcbn07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCAnLi9fdmVyc2lvbi5tanMnO1xuXG5cbi8qKlxuICogRm9yY2UgYSBzZXJ2aWNlIHdvcmtlciB0byBiZWNvbWUgYWN0aXZlLCBpbnN0ZWFkIG9mIHdhaXRpbmcuIFRoaXMgaXNcbiAqIG5vcm1hbGx5IHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgY2xpZW50c0NsYWltKClgLlxuICpcbiAqIEBhbGlhcyB3b3JrYm94LmNvcmUuc2tpcFdhaXRpbmdcbiAqL1xuZXhwb3J0IGNvbnN0IHNraXBXYWl0aW5nID0gKCkgPT4ge1xuICAvLyBXZSBuZWVkIHRvIGV4cGxpY2l0bHkgY2FsbCBgc2VsZi5za2lwV2FpdGluZygpYCBoZXJlIGJlY2F1c2Ugd2UncmVcbiAgLy8gc2hhZG93aW5nIGBza2lwV2FpdGluZ2Agd2l0aCB0aGlzIGxvY2FsIGZ1bmN0aW9uLlxuICBhZGRFdmVudExpc3RlbmVyKCdpbnN0YWxsJywgKCkgPT4gc2VsZi5za2lwV2FpdGluZygpKTtcbn07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCAnLi4vX3ZlcnNpb24ubWpzJztcblxuZXhwb3J0IGNvbnN0IHBsdWdpblV0aWxzID0ge1xuICBmaWx0ZXI6IChwbHVnaW5zLCBjYWxsYmFja05hbWUpID0+IHtcbiAgICByZXR1cm4gcGx1Z2lucy5maWx0ZXIoKHBsdWdpbikgPT4gY2FsbGJhY2tOYW1lIGluIHBsdWdpbik7XG4gIH0sXG59O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQge0NhY2hlVGltZXN0YW1wc01vZGVsfSBmcm9tICcuL21vZGVscy9DYWNoZVRpbWVzdGFtcHNNb2RlbC5tanMnO1xuaW1wb3J0IHtXb3JrYm94RXJyb3J9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9Xb3JrYm94RXJyb3IubWpzJztcbmltcG9ydCB7YXNzZXJ0fSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvYXNzZXJ0Lm1qcyc7XG5pbXBvcnQge2xvZ2dlcn0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5tanMnO1xuXG5pbXBvcnQgJy4vX3ZlcnNpb24ubWpzJztcblxuLyoqXG4gKiBUaGUgYENhY2hlRXhwaXJhdGlvbmAgY2xhc3MgYWxsb3dzIHlvdSBkZWZpbmUgYW4gZXhwaXJhdGlvbiBhbmQgLyBvclxuICogbGltaXQgb24gdGhlIG51bWJlciBvZiByZXNwb25zZXMgc3RvcmVkIGluIGFcbiAqIFtgQ2FjaGVgXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ2FjaGUpLlxuICpcbiAqIEBtZW1iZXJvZiB3b3JrYm94LmV4cGlyYXRpb25cbiAqL1xuY2xhc3MgQ2FjaGVFeHBpcmF0aW9uIHtcbiAgLyoqXG4gICAqIFRvIGNvbnN0cnVjdCBhIG5ldyBDYWNoZUV4cGlyYXRpb24gaW5zdGFuY2UgeW91IG11c3QgcHJvdmlkZSBhdCBsZWFzdFxuICAgKiBvbmUgb2YgdGhlIGBjb25maWdgIHByb3BlcnRpZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjYWNoZU5hbWUgTmFtZSBvZiB0aGUgY2FjaGUgdG8gYXBwbHkgcmVzdHJpY3Rpb25zIHRvLlxuICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbY29uZmlnLm1heEVudHJpZXNdIFRoZSBtYXhpbXVtIG51bWJlciBvZiBlbnRyaWVzIHRvIGNhY2hlLlxuICAgKiBFbnRyaWVzIHVzZWQgdGhlIGxlYXN0IHdpbGwgYmUgcmVtb3ZlZCBhcyB0aGUgbWF4aW11bSBpcyByZWFjaGVkLlxuICAgKiBAcGFyYW0ge251bWJlcn0gW2NvbmZpZy5tYXhBZ2VTZWNvbmRzXSBUaGUgbWF4aW11bSBhZ2Ugb2YgYW4gZW50cnkgYmVmb3JlXG4gICAqIGl0J3MgdHJlYXRlZCBhcyBzdGFsZSBhbmQgcmVtb3ZlZC5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGNhY2hlTmFtZSwgY29uZmlnID0ge30pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgYXNzZXJ0LmlzVHlwZShjYWNoZU5hbWUsICdzdHJpbmcnLCB7XG4gICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LWV4cGlyYXRpb24nLFxuICAgICAgICBjbGFzc05hbWU6ICdDYWNoZUV4cGlyYXRpb24nLFxuICAgICAgICBmdW5jTmFtZTogJ2NvbnN0cnVjdG9yJyxcbiAgICAgICAgcGFyYW1OYW1lOiAnY2FjaGVOYW1lJyxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIShjb25maWcubWF4RW50cmllcyB8fCBjb25maWcubWF4QWdlU2Vjb25kcykpIHtcbiAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignbWF4LWVudHJpZXMtb3ItYWdlLXJlcXVpcmVkJywge1xuICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LWV4cGlyYXRpb24nLFxuICAgICAgICAgIGNsYXNzTmFtZTogJ0NhY2hlRXhwaXJhdGlvbicsXG4gICAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29uZmlnLm1heEVudHJpZXMpIHtcbiAgICAgICAgYXNzZXJ0LmlzVHlwZShjb25maWcubWF4RW50cmllcywgJ251bWJlcicsIHtcbiAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1leHBpcmF0aW9uJyxcbiAgICAgICAgICBjbGFzc05hbWU6ICdDYWNoZUV4cGlyYXRpb24nLFxuICAgICAgICAgIGZ1bmNOYW1lOiAnY29uc3RydWN0b3InLFxuICAgICAgICAgIHBhcmFtTmFtZTogJ2NvbmZpZy5tYXhFbnRyaWVzJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gVE9ETzogQXNzZXJ0IGlzIHBvc2l0aXZlXG4gICAgICB9XG5cbiAgICAgIGlmIChjb25maWcubWF4QWdlU2Vjb25kcykge1xuICAgICAgICBhc3NlcnQuaXNUeXBlKGNvbmZpZy5tYXhBZ2VTZWNvbmRzLCAnbnVtYmVyJywge1xuICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LWV4cGlyYXRpb24nLFxuICAgICAgICAgIGNsYXNzTmFtZTogJ0NhY2hlRXhwaXJhdGlvbicsXG4gICAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgICAgcGFyYW1OYW1lOiAnY29uZmlnLm1heEFnZVNlY29uZHMnLFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBUT0RPOiBBc3NlcnQgaXMgcG9zaXRpdmVcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9pc1J1bm5pbmcgPSBmYWxzZTtcbiAgICB0aGlzLl9yZXJ1blJlcXVlc3RlZCA9IGZhbHNlO1xuICAgIHRoaXMuX21heEVudHJpZXMgPSBjb25maWcubWF4RW50cmllcztcbiAgICB0aGlzLl9tYXhBZ2VTZWNvbmRzID0gY29uZmlnLm1heEFnZVNlY29uZHM7XG4gICAgdGhpcy5fY2FjaGVOYW1lID0gY2FjaGVOYW1lO1xuICAgIHRoaXMuX3RpbWVzdGFtcE1vZGVsID0gbmV3IENhY2hlVGltZXN0YW1wc01vZGVsKGNhY2hlTmFtZSk7XG4gIH1cblxuICAvKipcbiAgICogRXhwaXJlcyBlbnRyaWVzIGZvciB0aGUgZ2l2ZW4gY2FjaGUgYW5kIGdpdmVuIGNyaXRlcmlhLlxuICAgKi9cbiAgYXN5bmMgZXhwaXJlRW50cmllcygpIHtcbiAgICBpZiAodGhpcy5faXNSdW5uaW5nKSB7XG4gICAgICB0aGlzLl9yZXJ1blJlcXVlc3RlZCA9IHRydWU7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2lzUnVubmluZyA9IHRydWU7XG5cbiAgICBjb25zdCBtaW5UaW1lc3RhbXAgPSB0aGlzLl9tYXhBZ2VTZWNvbmRzID9cbiAgICAgICAgRGF0ZS5ub3coKSAtICh0aGlzLl9tYXhBZ2VTZWNvbmRzICogMTAwMCkgOiB1bmRlZmluZWQ7XG5cbiAgICBjb25zdCB1cmxzRXhwaXJlZCA9IGF3YWl0IHRoaXMuX3RpbWVzdGFtcE1vZGVsLmV4cGlyZUVudHJpZXMoXG4gICAgICAgIG1pblRpbWVzdGFtcCwgdGhpcy5fbWF4RW50cmllcyk7XG5cbiAgICAvLyBEZWxldGUgVVJMcyBmcm9tIHRoZSBjYWNoZVxuICAgIGNvbnN0IGNhY2hlID0gYXdhaXQgY2FjaGVzLm9wZW4odGhpcy5fY2FjaGVOYW1lKTtcbiAgICBmb3IgKGNvbnN0IHVybCBvZiB1cmxzRXhwaXJlZCkge1xuICAgICAgYXdhaXQgY2FjaGUuZGVsZXRlKHVybCk7XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh1cmxzRXhwaXJlZC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxvZ2dlci5ncm91cENvbGxhcHNlZChcbiAgICAgICAgICAgIGBFeHBpcmVkICR7dXJsc0V4cGlyZWQubGVuZ3RofSBgICtcbiAgICAgICAgICBgJHt1cmxzRXhwaXJlZC5sZW5ndGggPT09IDEgPyAnZW50cnknIDogJ2VudHJpZXMnfSBhbmQgcmVtb3ZlZCBgICtcbiAgICAgICAgICBgJHt1cmxzRXhwaXJlZC5sZW5ndGggPT09IDEgPyAnaXQnIDogJ3RoZW0nfSBmcm9tIHRoZSBgICtcbiAgICAgICAgICBgJyR7dGhpcy5fY2FjaGVOYW1lfScgY2FjaGUuYCk7XG4gICAgICAgIGxvZ2dlci5sb2coYEV4cGlyZWQgdGhlIGZvbGxvd2luZyAke3VybHNFeHBpcmVkLmxlbmd0aCA9PT0gMSA/XG4gICAgICAgICAgICAnVVJMJyA6ICdVUkxzJ306YCk7XG4gICAgICAgIHVybHNFeHBpcmVkLmZvckVhY2goKHVybCkgPT4gbG9nZ2VyLmxvZyhgICAgICR7dXJsfWApKTtcbiAgICAgICAgbG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2dnZXIuZGVidWcoYENhY2hlIGV4cGlyYXRpb24gcmFuIGFuZCBmb3VuZCBubyBlbnRyaWVzIHRvIHJlbW92ZS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9pc1J1bm5pbmcgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5fcmVydW5SZXF1ZXN0ZWQpIHtcbiAgICAgIHRoaXMuX3JlcnVuUmVxdWVzdGVkID0gZmFsc2U7XG4gICAgICB0aGlzLmV4cGlyZUVudHJpZXMoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHRoZSB0aW1lc3RhbXAgZm9yIHRoZSBnaXZlbiBVUkwuIFRoaXMgZW5zdXJlcyB0aGUgd2hlblxuICAgKiByZW1vdmluZyBlbnRyaWVzIGJhc2VkIG9uIG1heGltdW0gZW50cmllcywgbW9zdCByZWNlbnRseSB1c2VkXG4gICAqIGlzIGFjY3VyYXRlIG9yIHdoZW4gZXhwaXJpbmcsIHRoZSB0aW1lc3RhbXAgaXMgdXAtdG8tZGF0ZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKi9cbiAgYXN5bmMgdXBkYXRlVGltZXN0YW1wKHVybCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBhc3NlcnQuaXNUeXBlKHVybCwgJ3N0cmluZycsIHtcbiAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtZXhwaXJhdGlvbicsXG4gICAgICAgIGNsYXNzTmFtZTogJ0NhY2hlRXhwaXJhdGlvbicsXG4gICAgICAgIGZ1bmNOYW1lOiAndXBkYXRlVGltZXN0YW1wJyxcbiAgICAgICAgcGFyYW1OYW1lOiAndXJsJyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGF3YWl0IHRoaXMuX3RpbWVzdGFtcE1vZGVsLnNldFRpbWVzdGFtcCh1cmwsIERhdGUubm93KCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbiBiZSB1c2VkIHRvIGNoZWNrIGlmIGEgVVJMIGhhcyBleHBpcmVkIG9yIG5vdCBiZWZvcmUgaXQncyB1c2VkLlxuICAgKlxuICAgKiBUaGlzIHJlcXVpcmVzIGEgbG9vayB1cCBmcm9tIEluZGV4ZWREQiwgc28gY2FuIGJlIHNsb3cuXG4gICAqXG4gICAqIE5vdGU6IFRoaXMgbWV0aG9kIHdpbGwgbm90IHJlbW92ZSB0aGUgY2FjaGVkIGVudHJ5LCBjYWxsXG4gICAqIGBleHBpcmVFbnRyaWVzKClgIHRvIHJlbW92ZSBpbmRleGVkREIgYW5kIENhY2hlIGVudHJpZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGFzeW5jIGlzVVJMRXhwaXJlZCh1cmwpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKCF0aGlzLl9tYXhBZ2VTZWNvbmRzKSB7XG4gICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoYGV4cGlyZWQtdGVzdC13aXRob3V0LW1heC1hZ2VgLCB7XG4gICAgICAgICAgbWV0aG9kTmFtZTogJ2lzVVJMRXhwaXJlZCcsXG4gICAgICAgICAgcGFyYW1OYW1lOiAnbWF4QWdlU2Vjb25kcycsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHRpbWVzdGFtcCA9IGF3YWl0IHRoaXMuX3RpbWVzdGFtcE1vZGVsLmdldFRpbWVzdGFtcCh1cmwpO1xuICAgIGNvbnN0IGV4cGlyZU9sZGVyVGhhbiA9IERhdGUubm93KCkgLSAodGhpcy5fbWF4QWdlU2Vjb25kcyAqIDEwMDApO1xuICAgIHJldHVybiAodGltZXN0YW1wIDwgZXhwaXJlT2xkZXJUaGFuKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoZSBJbmRleGVkREIgb2JqZWN0IHN0b3JlIHVzZWQgdG8ga2VlcCB0cmFjayBvZiBjYWNoZSBleHBpcmF0aW9uXG4gICAqIG1ldGFkYXRhLlxuICAgKi9cbiAgYXN5bmMgZGVsZXRlKCkge1xuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCBhdHRlbXB0IGFub3RoZXIgcmVydW4gaWYgd2UncmUgY2FsbGVkIGluIHRoZSBtaWRkbGUgb2ZcbiAgICAvLyBhIGNhY2hlIGV4cGlyYXRpb24uXG4gICAgdGhpcy5fcmVydW5SZXF1ZXN0ZWQgPSBmYWxzZTtcbiAgICBhd2FpdCB0aGlzLl90aW1lc3RhbXBNb2RlbC5leHBpcmVFbnRyaWVzKEluZmluaXR5KTsgLy8gRXhwaXJlcyBhbGwuXG4gIH1cbn1cblxuZXhwb3J0IHtDYWNoZUV4cGlyYXRpb259O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQge2Fzc2VydH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2Fzc2VydC5tanMnO1xuaW1wb3J0IHtjYWNoZU5hbWVzfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvY2FjaGVOYW1lcy5tanMnO1xuaW1wb3J0IHtnZXRGcmllbmRseVVSTH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2dldEZyaWVuZGx5VVJMLm1qcyc7XG5pbXBvcnQge2xvZ2dlcn0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5tanMnO1xuaW1wb3J0IHtXb3JrYm94RXJyb3J9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9Xb3JrYm94RXJyb3IubWpzJztcbmltcG9ydCB7cmVnaXN0ZXJRdW90YUVycm9yQ2FsbGJhY2t9XG4gIGZyb20gJ3dvcmtib3gtY29yZS9yZWdpc3RlclF1b3RhRXJyb3JDYWxsYmFjay5tanMnO1xuXG5pbXBvcnQge0NhY2hlRXhwaXJhdGlvbn0gZnJvbSAnLi9DYWNoZUV4cGlyYXRpb24ubWpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5tanMnO1xuXG4vKipcbiAqIFRoaXMgcGx1Z2luIGNhbiBiZSB1c2VkIGluIHRoZSBXb3JrYm94IEFQSXMgdG8gcmVndWxhcmx5IGVuZm9yY2UgYVxuICogbGltaXQgb24gdGhlIGFnZSBhbmQgLyBvciB0aGUgbnVtYmVyIG9mIGNhY2hlZCByZXF1ZXN0cy5cbiAqXG4gKiBXaGVuZXZlciBhIGNhY2hlZCByZXF1ZXN0IGlzIHVzZWQgb3IgdXBkYXRlZCwgdGhpcyBwbHVnaW4gd2lsbCBsb29rXG4gKiBhdCB0aGUgdXNlZCBDYWNoZSBhbmQgcmVtb3ZlIGFueSBvbGQgb3IgZXh0cmEgcmVxdWVzdHMuXG4gKlxuICogV2hlbiB1c2luZyBgbWF4QWdlU2Vjb25kc2AsIHJlcXVlc3RzIG1heSBiZSB1c2VkICpvbmNlKiBhZnRlciBleHBpcmluZ1xuICogYmVjYXVzZSB0aGUgZXhwaXJhdGlvbiBjbGVhbiB1cCB3aWxsIG5vdCBoYXZlIG9jY3VycmVkIHVudGlsICphZnRlciogdGhlXG4gKiBjYWNoZWQgcmVxdWVzdCBoYXMgYmVlbiB1c2VkLiBJZiB0aGUgcmVxdWVzdCBoYXMgYSBcIkRhdGVcIiBoZWFkZXIsIHRoZW5cbiAqIGEgbGlnaHQgd2VpZ2h0IGV4cGlyYXRpb24gY2hlY2sgaXMgcGVyZm9ybWVkIGFuZCB0aGUgcmVxdWVzdCB3aWxsIG5vdCBiZVxuICogdXNlZCBpbW1lZGlhdGVseS5cbiAqXG4gKiBXaGVuIHVzaW5nIGBtYXhFbnRyaWVzYCwgdGhlIGVudHJ5IGxlYXN0LXJlY2VudGx5IHJlcXVlc3RlZCB3aWxsIGJlIHJlbW92ZWQgZnJvbSB0aGUgY2FjaGUgZmlyc3QuXG4gKlxuICogQG1lbWJlcm9mIHdvcmtib3guZXhwaXJhdGlvblxuICovXG5jbGFzcyBQbHVnaW4ge1xuICAvKipcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgKiBAcGFyYW0ge251bWJlcn0gW2NvbmZpZy5tYXhFbnRyaWVzXSBUaGUgbWF4aW11bSBudW1iZXIgb2YgZW50cmllcyB0byBjYWNoZS5cbiAgICogRW50cmllcyB1c2VkIHRoZSBsZWFzdCB3aWxsIGJlIHJlbW92ZWQgYXMgdGhlIG1heGltdW0gaXMgcmVhY2hlZC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IFtjb25maWcubWF4QWdlU2Vjb25kc10gVGhlIG1heGltdW0gYWdlIG9mIGFuIGVudHJ5IGJlZm9yZVxuICAgKiBpdCdzIHRyZWF0ZWQgYXMgc3RhbGUgYW5kIHJlbW92ZWQuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2NvbmZpZy5wdXJnZU9uUXVvdGFFcnJvcl0gV2hldGhlciB0byBvcHQgdGhpcyBjYWNoZSBpbiB0b1xuICAgKiBhdXRvbWF0aWMgZGVsZXRpb24gaWYgdGhlIGF2YWlsYWJsZSBzdG9yYWdlIHF1b3RhIGhhcyBiZWVuIGV4Y2VlZGVkLlxuICAgKi9cbiAgY29uc3RydWN0b3IoY29uZmlnID0ge30pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKCEoY29uZmlnLm1heEVudHJpZXMgfHwgY29uZmlnLm1heEFnZVNlY29uZHMpKSB7XG4gICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ21heC1lbnRyaWVzLW9yLWFnZS1yZXF1aXJlZCcsIHtcbiAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1leHBpcmF0aW9uJyxcbiAgICAgICAgICBjbGFzc05hbWU6ICdQbHVnaW4nLFxuICAgICAgICAgIGZ1bmNOYW1lOiAnY29uc3RydWN0b3InLFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbmZpZy5tYXhFbnRyaWVzKSB7XG4gICAgICAgIGFzc2VydC5pc1R5cGUoY29uZmlnLm1heEVudHJpZXMsICdudW1iZXInLCB7XG4gICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtZXhwaXJhdGlvbicsXG4gICAgICAgICAgY2xhc3NOYW1lOiAnUGx1Z2luJyxcbiAgICAgICAgICBmdW5jTmFtZTogJ2NvbnN0cnVjdG9yJyxcbiAgICAgICAgICBwYXJhbU5hbWU6ICdjb25maWcubWF4RW50cmllcycsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29uZmlnLm1heEFnZVNlY29uZHMpIHtcbiAgICAgICAgYXNzZXJ0LmlzVHlwZShjb25maWcubWF4QWdlU2Vjb25kcywgJ251bWJlcicsIHtcbiAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1leHBpcmF0aW9uJyxcbiAgICAgICAgICBjbGFzc05hbWU6ICdQbHVnaW4nLFxuICAgICAgICAgIGZ1bmNOYW1lOiAnY29uc3RydWN0b3InLFxuICAgICAgICAgIHBhcmFtTmFtZTogJ2NvbmZpZy5tYXhBZ2VTZWNvbmRzJyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICAgIHRoaXMuX21heEFnZVNlY29uZHMgPSBjb25maWcubWF4QWdlU2Vjb25kcztcbiAgICB0aGlzLl9jYWNoZUV4cGlyYXRpb25zID0gbmV3IE1hcCgpO1xuXG4gICAgaWYgKGNvbmZpZy5wdXJnZU9uUXVvdGFFcnJvcikge1xuICAgICAgcmVnaXN0ZXJRdW90YUVycm9yQ2FsbGJhY2soKCkgPT4gdGhpcy5kZWxldGVDYWNoZUFuZE1ldGFkYXRhKCkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBIHNpbXBsZSBoZWxwZXIgbWV0aG9kIHRvIHJldHVybiBhIENhY2hlRXhwaXJhdGlvbiBpbnN0YW5jZSBmb3IgYSBnaXZlblxuICAgKiBjYWNoZSBuYW1lLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2FjaGVOYW1lXG4gICAqIEByZXR1cm4ge0NhY2hlRXhwaXJhdGlvbn1cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9nZXRDYWNoZUV4cGlyYXRpb24oY2FjaGVOYW1lKSB7XG4gICAgaWYgKGNhY2hlTmFtZSA9PT0gY2FjaGVOYW1lcy5nZXRSdW50aW1lTmFtZSgpKSB7XG4gICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdleHBpcmUtY3VzdG9tLWNhY2hlcy1vbmx5Jyk7XG4gICAgfVxuXG4gICAgbGV0IGNhY2hlRXhwaXJhdGlvbiA9IHRoaXMuX2NhY2hlRXhwaXJhdGlvbnMuZ2V0KGNhY2hlTmFtZSk7XG4gICAgaWYgKCFjYWNoZUV4cGlyYXRpb24pIHtcbiAgICAgIGNhY2hlRXhwaXJhdGlvbiA9IG5ldyBDYWNoZUV4cGlyYXRpb24oY2FjaGVOYW1lLCB0aGlzLl9jb25maWcpO1xuICAgICAgdGhpcy5fY2FjaGVFeHBpcmF0aW9ucy5zZXQoY2FjaGVOYW1lLCBjYWNoZUV4cGlyYXRpb24pO1xuICAgIH1cbiAgICByZXR1cm4gY2FjaGVFeHBpcmF0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgXCJsaWZlY3ljbGVcIiBjYWxsYmFjayB0aGF0IHdpbGwgYmUgdHJpZ2dlcmVkIGF1dG9tYXRpY2FsbHkgYnkgdGhlXG4gICAqIGB3b3JrYm94LnN0cmF0ZWdpZXNgIGhhbmRsZXJzIHdoZW4gYSBgUmVzcG9uc2VgIGlzIGFib3V0IHRvIGJlIHJldHVybmVkXG4gICAqIGZyb20gYSBbQ2FjaGVdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DYWNoZSkgdG9cbiAgICogdGhlIGhhbmRsZXIuIEl0IGFsbG93cyB0aGUgYFJlc3BvbnNlYCB0byBiZSBpbnNwZWN0ZWQgZm9yIGZyZXNobmVzcyBhbmRcbiAgICogcHJldmVudHMgaXQgZnJvbSBiZWluZyB1c2VkIGlmIHRoZSBgUmVzcG9uc2VgJ3MgYERhdGVgIGhlYWRlciB2YWx1ZSBpc1xuICAgKiBvbGRlciB0aGFuIHRoZSBjb25maWd1cmVkIGBtYXhBZ2VTZWNvbmRzYC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuY2FjaGVOYW1lIE5hbWUgb2YgdGhlIGNhY2hlIHRoZSByZXNwb25zZSBpcyBpbi5cbiAgICogQHBhcmFtIHtSZXNwb25zZX0gb3B0aW9ucy5jYWNoZWRSZXNwb25zZSBUaGUgYFJlc3BvbnNlYCBvYmplY3QgdGhhdCdzIGJlZW5cbiAgICogICAgIHJlYWQgZnJvbSBhIGNhY2hlIGFuZCB3aG9zZSBmcmVzaG5lc3Mgc2hvdWxkIGJlIGNoZWNrZWQuXG4gICAqIEByZXR1cm4ge1Jlc3BvbnNlfSBFaXRoZXIgdGhlIGBjYWNoZWRSZXNwb25zZWAsIGlmIGl0J3NcbiAgICogICAgIGZyZXNoLCBvciBgbnVsbGAgaWYgdGhlIGBSZXNwb25zZWAgaXMgb2xkZXIgdGhhbiBgbWF4QWdlU2Vjb25kc2AuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjYWNoZWRSZXNwb25zZVdpbGxCZVVzZWQoe2V2ZW50LCByZXF1ZXN0LCBjYWNoZU5hbWUsIGNhY2hlZFJlc3BvbnNlfSkge1xuICAgIGlmICghY2FjaGVkUmVzcG9uc2UpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGxldCBpc0ZyZXNoID0gdGhpcy5faXNSZXNwb25zZURhdGVGcmVzaChjYWNoZWRSZXNwb25zZSk7XG5cbiAgICAvLyBFeHBpcmUgZW50cmllcyB0byBlbnN1cmUgdGhhdCBldmVuIGlmIHRoZSBleHBpcmF0aW9uIGRhdGUgaGFzXG4gICAgLy8gZXhwaXJlZCwgaXQnbGwgb25seSBiZSB1c2VkIG9uY2UuXG4gICAgY29uc3QgY2FjaGVFeHBpcmF0aW9uID0gdGhpcy5fZ2V0Q2FjaGVFeHBpcmF0aW9uKGNhY2hlTmFtZSk7XG4gICAgY2FjaGVFeHBpcmF0aW9uLmV4cGlyZUVudHJpZXMoKTtcblxuICAgIC8vIFVwZGF0ZSB0aGUgbWV0YWRhdGEgZm9yIHRoZSByZXF1ZXN0IFVSTCB0byB0aGUgY3VycmVudCB0aW1lc3RhbXAsXG4gICAgLy8gYnV0IGRvbid0IGBhd2FpdGAgaXQgYXMgd2UgZG9uJ3Qgd2FudCB0byBibG9jayB0aGUgcmVzcG9uc2UuXG4gICAgY29uc3QgdXBkYXRlVGltZXN0YW1wRG9uZSA9IGNhY2hlRXhwaXJhdGlvbi51cGRhdGVUaW1lc3RhbXAocmVxdWVzdC51cmwpO1xuICAgIGlmIChldmVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZXZlbnQud2FpdFVudGlsKHVwZGF0ZVRpbWVzdGFtcERvbmUpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICBsb2dnZXIud2FybihgVW5hYmxlIHRvIGVuc3VyZSBzZXJ2aWNlIHdvcmtlciBzdGF5cyBhbGl2ZSB3aGVuIGAgK1xuICAgICAgICAgICAgYHVwZGF0aW5nIGNhY2hlIGVudHJ5IGZvciAnJHtnZXRGcmllbmRseVVSTChldmVudC5yZXF1ZXN0LnVybCl9Jy5gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpc0ZyZXNoID8gY2FjaGVkUmVzcG9uc2UgOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7UmVzcG9uc2V9IGNhY2hlZFJlc3BvbnNlXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfaXNSZXNwb25zZURhdGVGcmVzaChjYWNoZWRSZXNwb25zZSkge1xuICAgIGlmICghdGhpcy5fbWF4QWdlU2Vjb25kcykge1xuICAgICAgLy8gV2UgYXJlbid0IGV4cGlyaW5nIGJ5IGFnZSwgc28gcmV0dXJuIHRydWUsIGl0J3MgZnJlc2hcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGlmIHRoZSAnZGF0ZScgaGVhZGVyIHdpbGwgc3VmZmljZSBhIHF1aWNrIGV4cGlyYXRpb24gY2hlY2suXG4gICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3N3LXRvb2xib3gvaXNzdWVzLzE2NCBmb3JcbiAgICAvLyBkaXNjdXNzaW9uLlxuICAgIGNvbnN0IGRhdGVIZWFkZXJUaW1lc3RhbXAgPSB0aGlzLl9nZXREYXRlSGVhZGVyVGltZXN0YW1wKGNhY2hlZFJlc3BvbnNlKTtcbiAgICBpZiAoZGF0ZUhlYWRlclRpbWVzdGFtcCA9PT0gbnVsbCkge1xuICAgICAgLy8gVW5hYmxlIHRvIHBhcnNlIGRhdGUsIHNvIGFzc3VtZSBpdCdzIGZyZXNoLlxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gSWYgd2UgaGF2ZSBhIHZhbGlkIGhlYWRlclRpbWUsIHRoZW4gb3VyIHJlc3BvbnNlIGlzIGZyZXNoIGlmZiB0aGVcbiAgICAvLyBoZWFkZXJUaW1lIHBsdXMgbWF4QWdlU2Vjb25kcyBpcyBncmVhdGVyIHRoYW4gdGhlIGN1cnJlbnQgdGltZS5cbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgIHJldHVybiBkYXRlSGVhZGVyVGltZXN0YW1wID49IG5vdyAtICh0aGlzLl9tYXhBZ2VTZWNvbmRzICogMTAwMCk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2Qgd2lsbCBleHRyYWN0IHRoZSBkYXRhIGhlYWRlciBhbmQgcGFyc2UgaXQgaW50byBhIHVzZWZ1bFxuICAgKiB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtSZXNwb25zZX0gY2FjaGVkUmVzcG9uc2VcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2dldERhdGVIZWFkZXJUaW1lc3RhbXAoY2FjaGVkUmVzcG9uc2UpIHtcbiAgICBpZiAoIWNhY2hlZFJlc3BvbnNlLmhlYWRlcnMuaGFzKCdkYXRlJykpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGRhdGVIZWFkZXIgPSBjYWNoZWRSZXNwb25zZS5oZWFkZXJzLmdldCgnZGF0ZScpO1xuICAgIGNvbnN0IHBhcnNlZERhdGUgPSBuZXcgRGF0ZShkYXRlSGVhZGVyKTtcbiAgICBjb25zdCBoZWFkZXJUaW1lID0gcGFyc2VkRGF0ZS5nZXRUaW1lKCk7XG5cbiAgICAvLyBJZiB0aGUgRGF0ZSBoZWFkZXIgd2FzIGludmFsaWQgZm9yIHNvbWUgcmVhc29uLCBwYXJzZWREYXRlLmdldFRpbWUoKVxuICAgIC8vIHdpbGwgcmV0dXJuIE5hTi5cbiAgICBpZiAoaXNOYU4oaGVhZGVyVGltZSkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBoZWFkZXJUaW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgXCJsaWZlY3ljbGVcIiBjYWxsYmFjayB0aGF0IHdpbGwgYmUgdHJpZ2dlcmVkIGF1dG9tYXRpY2FsbHkgYnkgdGhlXG4gICAqIGB3b3JrYm94LnN0cmF0ZWdpZXNgIGhhbmRsZXJzIHdoZW4gYW4gZW50cnkgaXMgYWRkZWQgdG8gYSBjYWNoZS5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuY2FjaGVOYW1lIE5hbWUgb2YgdGhlIGNhY2hlIHRoYXQgd2FzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnJlcXVlc3QgVGhlIFJlcXVlc3QgZm9yIHRoZSBjYWNoZWQgZW50cnkuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBhc3luYyBjYWNoZURpZFVwZGF0ZSh7Y2FjaGVOYW1lLCByZXF1ZXN0fSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBhc3NlcnQuaXNUeXBlKGNhY2hlTmFtZSwgJ3N0cmluZycsIHtcbiAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtZXhwaXJhdGlvbicsXG4gICAgICAgIGNsYXNzTmFtZTogJ1BsdWdpbicsXG4gICAgICAgIGZ1bmNOYW1lOiAnY2FjaGVEaWRVcGRhdGUnLFxuICAgICAgICBwYXJhbU5hbWU6ICdjYWNoZU5hbWUnLFxuICAgICAgfSk7XG4gICAgICBhc3NlcnQuaXNJbnN0YW5jZShyZXF1ZXN0LCBSZXF1ZXN0LCB7XG4gICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LWV4cGlyYXRpb24nLFxuICAgICAgICBjbGFzc05hbWU6ICdQbHVnaW4nLFxuICAgICAgICBmdW5jTmFtZTogJ2NhY2hlRGlkVXBkYXRlJyxcbiAgICAgICAgcGFyYW1OYW1lOiAncmVxdWVzdCcsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBjYWNoZUV4cGlyYXRpb24gPSB0aGlzLl9nZXRDYWNoZUV4cGlyYXRpb24oY2FjaGVOYW1lKTtcbiAgICBhd2FpdCBjYWNoZUV4cGlyYXRpb24udXBkYXRlVGltZXN0YW1wKHJlcXVlc3QudXJsKTtcbiAgICBhd2FpdCBjYWNoZUV4cGlyYXRpb24uZXhwaXJlRW50cmllcygpO1xuICB9XG5cblxuICAvKipcbiAgICogVGhpcyBpcyBhIGhlbHBlciBtZXRob2QgdGhhdCBwZXJmb3JtcyB0d28gb3BlcmF0aW9uczpcbiAgICpcbiAgICogLSBEZWxldGVzICphbGwqIHRoZSB1bmRlcmx5aW5nIENhY2hlIGluc3RhbmNlcyBhc3NvY2lhdGVkIHdpdGggdGhpcyBwbHVnaW5cbiAgICogaW5zdGFuY2UsIGJ5IGNhbGxpbmcgY2FjaGVzLmRlbGV0ZSgpIG9uIHlvdXIgYmVoYWxmLlxuICAgKiAtIERlbGV0ZXMgdGhlIG1ldGFkYXRhIGZyb20gSW5kZXhlZERCIHVzZWQgdG8ga2VlcCB0cmFjayBvZiBleHBpcmF0aW9uXG4gICAqIGRldGFpbHMgZm9yIGVhY2ggQ2FjaGUgaW5zdGFuY2UuXG4gICAqXG4gICAqIFdoZW4gdXNpbmcgY2FjaGUgZXhwaXJhdGlvbiwgY2FsbGluZyB0aGlzIG1ldGhvZCBpcyBwcmVmZXJhYmxlIHRvIGNhbGxpbmdcbiAgICogYGNhY2hlcy5kZWxldGUoKWAgZGlyZWN0bHksIHNpbmNlIHRoaXMgd2lsbCBlbnN1cmUgdGhhdCB0aGUgSW5kZXhlZERCXG4gICAqIG1ldGFkYXRhIGlzIGFsc28gY2xlYW5seSByZW1vdmVkIGFuZCBvcGVuIEluZGV4ZWREQiBpbnN0YW5jZXMgYXJlIGRlbGV0ZWQuXG4gICAqXG4gICAqIE5vdGUgdGhhdCBpZiB5b3UncmUgKm5vdCogdXNpbmcgY2FjaGUgZXhwaXJhdGlvbiBmb3IgYSBnaXZlbiBjYWNoZSwgY2FsbGluZ1xuICAgKiBgY2FjaGVzLmRlbGV0ZSgpYCBhbmQgcGFzc2luZyBpbiB0aGUgY2FjaGUncyBuYW1lIHNob3VsZCBiZSBzdWZmaWNpZW50LlxuICAgKiBUaGVyZSBpcyBubyBXb3JrYm94LXNwZWNpZmljIG1ldGhvZCBuZWVkZWQgZm9yIGNsZWFudXAgaW4gdGhhdCBjYXNlLlxuICAgKi9cbiAgYXN5bmMgZGVsZXRlQ2FjaGVBbmRNZXRhZGF0YSgpIHtcbiAgICAvLyBEbyB0aGlzIG9uZSBhdCBhIHRpbWUgaW5zdGVhZCBvZiBhbGwgYXQgb25jZSB2aWEgYFByb21pc2UuYWxsKClgIHRvXG4gICAgLy8gcmVkdWNlIHRoZSBjaGFuY2Ugb2YgaW5jb25zaXN0ZW5jeSBpZiBhIHByb21pc2UgcmVqZWN0cy5cbiAgICBmb3IgKGNvbnN0IFtjYWNoZU5hbWUsIGNhY2hlRXhwaXJhdGlvbl0gb2YgdGhpcy5fY2FjaGVFeHBpcmF0aW9ucykge1xuICAgICAgYXdhaXQgY2FjaGVzLmRlbGV0ZShjYWNoZU5hbWUpO1xuICAgICAgYXdhaXQgY2FjaGVFeHBpcmF0aW9uLmRlbGV0ZSgpO1xuICAgIH1cblxuICAgIC8vIFJlc2V0IHRoaXMuX2NhY2hlRXhwaXJhdGlvbnMgdG8gaXRzIGluaXRpYWwgc3RhdGUuXG4gICAgdGhpcy5fY2FjaGVFeHBpcmF0aW9ucyA9IG5ldyBNYXAoKTtcbiAgfVxufVxuXG5leHBvcnQge1BsdWdpbn07XG4iLCJ0cnl7c2VsZlsnd29ya2JveDpleHBpcmF0aW9uOjQuMy4xJ10mJl8oKX1jYXRjaChlKXt9Ly8gZXNsaW50LWRpc2FibGUtbGluZSIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0IHtDYWNoZUV4cGlyYXRpb259IGZyb20gJy4vQ2FjaGVFeHBpcmF0aW9uLm1qcyc7XG5pbXBvcnQge1BsdWdpbn0gZnJvbSAnLi9QbHVnaW4ubWpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5tanMnO1xuXG5cbi8qKlxuICogQG5hbWVzcGFjZSB3b3JrYm94LmV4cGlyYXRpb25cbiAqL1xuXG5leHBvcnQge1xuICBDYWNoZUV4cGlyYXRpb24sXG4gIFBsdWdpbixcbn07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCB7REJXcmFwcGVyfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvREJXcmFwcGVyLm1qcyc7XG5pbXBvcnQge2RlbGV0ZURhdGFiYXNlfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvZGVsZXRlRGF0YWJhc2UubWpzJztcbmltcG9ydCAnLi4vX3ZlcnNpb24ubWpzJztcblxuXG5jb25zdCBEQl9OQU1FID0gJ3dvcmtib3gtZXhwaXJhdGlvbic7XG5jb25zdCBPQkpFQ1RfU1RPUkVfTkFNRSA9ICdjYWNoZS1lbnRyaWVzJztcblxuY29uc3Qgbm9ybWFsaXplVVJMID0gKHVuTm9ybWFsaXplZFVybCkgPT4ge1xuICBjb25zdCB1cmwgPSBuZXcgVVJMKHVuTm9ybWFsaXplZFVybCwgbG9jYXRpb24pO1xuICB1cmwuaGFzaCA9ICcnO1xuXG4gIHJldHVybiB1cmwuaHJlZjtcbn07XG5cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSB0aW1lc3RhbXAgbW9kZWwuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY2xhc3MgQ2FjaGVUaW1lc3RhbXBzTW9kZWwge1xuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNhY2hlTmFtZVxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY29uc3RydWN0b3IoY2FjaGVOYW1lKSB7XG4gICAgdGhpcy5fY2FjaGVOYW1lID0gY2FjaGVOYW1lO1xuXG4gICAgdGhpcy5fZGIgPSBuZXcgREJXcmFwcGVyKERCX05BTUUsIDEsIHtcbiAgICAgIG9udXBncmFkZW5lZWRlZDogKGV2ZW50KSA9PiB0aGlzLl9oYW5kbGVVcGdyYWRlKGV2ZW50KSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG91bGQgcGVyZm9ybSBhbiB1cGdyYWRlIG9mIGluZGV4ZWREQi5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9oYW5kbGVVcGdyYWRlKGV2ZW50KSB7XG4gICAgY29uc3QgZGIgPSBldmVudC50YXJnZXQucmVzdWx0O1xuXG4gICAgLy8gVE9ETyhwaGlsaXB3YWx0b24pOiBFZGdlSFRNTCBkb2Vzbid0IHN1cHBvcnQgYXJyYXlzIGFzIGEga2V5UGF0aCwgc28gd2VcbiAgICAvLyBoYXZlIHRvIHVzZSB0aGUgYGlkYCBrZXlQYXRoIGhlcmUgYW5kIGNyZWF0ZSBvdXIgb3duIHZhbHVlcyAoYVxuICAgIC8vIGNvbmNhdGVuYXRpb24gb2YgYHVybCArIGNhY2hlTmFtZWApIGluc3RlYWQgb2Ygc2ltcGx5IHVzaW5nXG4gICAgLy8gYGtleVBhdGg6IFsndXJsJywgJ2NhY2hlTmFtZSddYCwgd2hpY2ggaXMgc3VwcG9ydGVkIGluIG90aGVyIGJyb3dzZXJzLlxuICAgIGNvbnN0IG9ialN0b3JlID0gZGIuY3JlYXRlT2JqZWN0U3RvcmUoT0JKRUNUX1NUT1JFX05BTUUsIHtrZXlQYXRoOiAnaWQnfSk7XG5cbiAgICAvLyBUT0RPKHBoaWxpcHdhbHRvbik6IG9uY2Ugd2UgZG9uJ3QgaGF2ZSB0byBzdXBwb3J0IEVkZ2VIVE1MLCB3ZSBjYW5cbiAgICAvLyBjcmVhdGUgYSBzaW5nbGUgaW5kZXggd2l0aCB0aGUga2V5UGF0aCBgWydjYWNoZU5hbWUnLCAndGltZXN0YW1wJ11gXG4gICAgLy8gaW5zdGVhZCBvZiBkb2luZyBib3RoIHRoZXNlIGluZGV4ZXMuXG4gICAgb2JqU3RvcmUuY3JlYXRlSW5kZXgoJ2NhY2hlTmFtZScsICdjYWNoZU5hbWUnLCB7dW5pcXVlOiBmYWxzZX0pO1xuICAgIG9ialN0b3JlLmNyZWF0ZUluZGV4KCd0aW1lc3RhbXAnLCAndGltZXN0YW1wJywge3VuaXF1ZTogZmFsc2V9KTtcblxuICAgIC8vIFByZXZpb3VzIHZlcnNpb25zIG9mIGB3b3JrYm94LWV4cGlyYXRpb25gIHVzZWQgYHRoaXMuX2NhY2hlTmFtZWBcbiAgICAvLyBhcyB0aGUgSURCRGF0YWJhc2UgbmFtZS5cbiAgICBkZWxldGVEYXRhYmFzZSh0aGlzLl9jYWNoZU5hbWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVzdGFtcFxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYXN5bmMgc2V0VGltZXN0YW1wKHVybCwgdGltZXN0YW1wKSB7XG4gICAgdXJsID0gbm9ybWFsaXplVVJMKHVybCk7XG5cbiAgICBhd2FpdCB0aGlzLl9kYi5wdXQoT0JKRUNUX1NUT1JFX05BTUUsIHtcbiAgICAgIHVybCxcbiAgICAgIHRpbWVzdGFtcCxcbiAgICAgIGNhY2hlTmFtZTogdGhpcy5fY2FjaGVOYW1lLFxuICAgICAgLy8gQ3JlYXRpbmcgYW4gSUQgZnJvbSB0aGUgVVJMIGFuZCBjYWNoZSBuYW1lIHdvbid0IGJlIG5lY2Vzc2FyeSBvbmNlXG4gICAgICAvLyBFZGdlIHN3aXRjaGVzIHRvIENocm9taXVtIGFuZCBhbGwgYnJvd3NlcnMgd2Ugc3VwcG9ydCB3b3JrIHdpdGhcbiAgICAgIC8vIGFycmF5IGtleVBhdGhzLlxuICAgICAgaWQ6IHRoaXMuX2dldElkKHVybCksXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdGltZXN0YW1wIHN0b3JlZCBmb3IgYSBnaXZlbiBVUkwuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYXN5bmMgZ2V0VGltZXN0YW1wKHVybCkge1xuICAgIGNvbnN0IGVudHJ5ID0gYXdhaXQgdGhpcy5fZGIuZ2V0KE9CSkVDVF9TVE9SRV9OQU1FLCB0aGlzLl9nZXRJZCh1cmwpKTtcbiAgICByZXR1cm4gZW50cnkudGltZXN0YW1wO1xuICB9XG5cbiAgLyoqXG4gICAqIEl0ZXJhdGVzIHRocm91Z2ggYWxsIHRoZSBlbnRyaWVzIGluIHRoZSBvYmplY3Qgc3RvcmUgKGZyb20gbmV3ZXN0IHRvXG4gICAqIG9sZGVzdCkgYW5kIHJlbW92ZXMgZW50cmllcyBvbmNlIGVpdGhlciBgbWF4Q291bnRgIGlzIHJlYWNoZWQgb3IgdGhlXG4gICAqIGVudHJ5J3MgdGltZXN0YW1wIGlzIGxlc3MgdGhhbiBgbWluVGltZXN0YW1wYC5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IG1pblRpbWVzdGFtcFxuICAgKiBAcGFyYW0ge251bWJlcn0gbWF4Q291bnRcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGFzeW5jIGV4cGlyZUVudHJpZXMobWluVGltZXN0YW1wLCBtYXhDb3VudCkge1xuICAgIGNvbnN0IGVudHJpZXNUb0RlbGV0ZSA9IGF3YWl0IHRoaXMuX2RiLnRyYW5zYWN0aW9uKFxuICAgICAgICBPQkpFQ1RfU1RPUkVfTkFNRSwgJ3JlYWR3cml0ZScsICh0eG4sIGRvbmUpID0+IHtcbiAgICAgICAgICBjb25zdCBzdG9yZSA9IHR4bi5vYmplY3RTdG9yZShPQkpFQ1RfU1RPUkVfTkFNRSk7XG4gICAgICAgICAgY29uc3QgZW50cmllc1RvRGVsZXRlID0gW107XG4gICAgICAgICAgbGV0IGVudHJpZXNOb3REZWxldGVkQ291bnQgPSAwO1xuXG4gICAgICAgICAgc3RvcmUuaW5kZXgoJ3RpbWVzdGFtcCcpXG4gICAgICAgICAgICAgIC5vcGVuQ3Vyc29yKG51bGwsICdwcmV2JylcbiAgICAgICAgICAgICAgLm9uc3VjY2VzcyA9ICh7dGFyZ2V0fSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnNvciA9IHRhcmdldC5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnNvcikge1xuICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gY3Vyc29yLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgLy8gVE9ETyhwaGlsaXB3YWx0b24pOiBvbmNlIHdlIGNhbiB1c2UgYSBtdWx0aS1rZXkgaW5kZXgsIHdlXG4gICAgICAgICAgICAgICAgICAvLyB3b24ndCBoYXZlIHRvIGNoZWNrIGBjYWNoZU5hbWVgIGhlcmUuXG4gICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmNhY2hlTmFtZSA9PT0gdGhpcy5fY2FjaGVOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIERlbGV0ZSBhbiBlbnRyeSBpZiBpdCdzIG9sZGVyIHRoYW4gdGhlIG1heCBhZ2Ugb3JcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgd2UgYWxyZWFkeSBoYXZlIHRoZSBtYXggbnVtYmVyIGFsbG93ZWQuXG4gICAgICAgICAgICAgICAgICAgIGlmICgobWluVGltZXN0YW1wICYmIHJlc3VsdC50aW1lc3RhbXAgPCBtaW5UaW1lc3RhbXApIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAobWF4Q291bnQgJiYgZW50cmllc05vdERlbGV0ZWRDb3VudCA+PSBtYXhDb3VudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPKHBoaWxpcHdhbHRvbik6IHdlIHNob3VsZCBiZSBhYmxlIHRvIGRlbGV0ZSB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAvLyBlbnRyeSByaWdodCBoZXJlLCBidXQgZG9pbmcgc28gY2F1c2VzIGFuIGl0ZXJhdGlvblxuICAgICAgICAgICAgICAgICAgICAgIC8vIGJ1ZyBpbiBTYWZhcmkgc3RhYmxlIChmaXhlZCBpbiBUUCkuIEluc3RlYWQgd2UgY2FuXG4gICAgICAgICAgICAgICAgICAgICAgLy8gc3RvcmUgdGhlIGtleXMgb2YgdGhlIGVudHJpZXMgdG8gZGVsZXRlLCBhbmQgdGhlblxuICAgICAgICAgICAgICAgICAgICAgIC8vIGRlbGV0ZSB0aGUgc2VwYXJhdGUgdHJhbnNhY3Rpb25zLlxuICAgICAgICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9pc3N1ZXMvMTk3OFxuICAgICAgICAgICAgICAgICAgICAgIC8vIGN1cnNvci5kZWxldGUoKTtcblxuICAgICAgICAgICAgICAgICAgICAgIC8vIFdlIG9ubHkgbmVlZCB0byByZXR1cm4gdGhlIFVSTCwgbm90IHRoZSB3aG9sZSBlbnRyeS5cbiAgICAgICAgICAgICAgICAgICAgICBlbnRyaWVzVG9EZWxldGUucHVzaChjdXJzb3IudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIGVudHJpZXNOb3REZWxldGVkQ291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgY3Vyc29yLmNvbnRpbnVlKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGRvbmUoZW50cmllc1RvRGVsZXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgLy8gVE9ETyhwaGlsaXB3YWx0b24pOiBvbmNlIHRoZSBTYWZhcmkgYnVnIGluIHRoZSBmb2xsb3dpbmcgaXNzdWUgaXMgZml4ZWQsXG4gICAgLy8gd2Ugc2hvdWxkIGJlIGFibGUgdG8gcmVtb3ZlIHRoaXMgbG9vcCBhbmQgZG8gdGhlIGVudHJ5IGRlbGV0aW9uIGluIHRoZVxuICAgIC8vIGN1cnNvciBsb29wIGFib3ZlOlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9pc3N1ZXMvMTk3OFxuICAgIGNvbnN0IHVybHNEZWxldGVkID0gW107XG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzVG9EZWxldGUpIHtcbiAgICAgIGF3YWl0IHRoaXMuX2RiLmRlbGV0ZShPQkpFQ1RfU1RPUkVfTkFNRSwgZW50cnkuaWQpO1xuICAgICAgdXJsc0RlbGV0ZWQucHVzaChlbnRyeS51cmwpO1xuICAgIH1cblxuICAgIHJldHVybiB1cmxzRGVsZXRlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUYWtlcyBhIFVSTCBhbmQgcmV0dXJucyBhbiBJRCB0aGF0IHdpbGwgYmUgdW5pcXVlIGluIHRoZSBvYmplY3Qgc3RvcmUuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2dldElkKHVybCkge1xuICAgIC8vIENyZWF0aW5nIGFuIElEIGZyb20gdGhlIFVSTCBhbmQgY2FjaGUgbmFtZSB3b24ndCBiZSBuZWNlc3Nhcnkgb25jZVxuICAgIC8vIEVkZ2Ugc3dpdGNoZXMgdG8gQ2hyb21pdW0gYW5kIGFsbCBicm93c2VycyB3ZSBzdXBwb3J0IHdvcmsgd2l0aFxuICAgIC8vIGFycmF5IGtleVBhdGhzLlxuICAgIHJldHVybiB0aGlzLl9jYWNoZU5hbWUgKyAnfCcgKyBub3JtYWxpemVVUkwodXJsKTtcbiAgfVxufVxuXG5leHBvcnQge0NhY2hlVGltZXN0YW1wc01vZGVsfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0IHthc3NlcnR9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9hc3NlcnQubWpzJztcbmltcG9ydCB7Y2FjaGVOYW1lc30gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2NhY2hlTmFtZXMubWpzJztcbmltcG9ydCB7Y2FjaGVXcmFwcGVyfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvY2FjaGVXcmFwcGVyLm1qcyc7XG5pbXBvcnQge2ZldGNoV3JhcHBlcn0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2ZldGNoV3JhcHBlci5tanMnO1xuaW1wb3J0IHtXb3JrYm94RXJyb3J9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9Xb3JrYm94RXJyb3IubWpzJztcblxuaW1wb3J0IHtjbGVhblJlZGlyZWN0fSBmcm9tICcuL3V0aWxzL2NsZWFuUmVkaXJlY3QubWpzJztcbmltcG9ydCB7Y3JlYXRlQ2FjaGVLZXl9IGZyb20gJy4vdXRpbHMvY3JlYXRlQ2FjaGVLZXkubWpzJztcbmltcG9ydCB7cHJpbnRDbGVhbnVwRGV0YWlsc30gZnJvbSAnLi91dGlscy9wcmludENsZWFudXBEZXRhaWxzLm1qcyc7XG5pbXBvcnQge3ByaW50SW5zdGFsbERldGFpbHN9IGZyb20gJy4vdXRpbHMvcHJpbnRJbnN0YWxsRGV0YWlscy5tanMnO1xuXG5pbXBvcnQgJy4vX3ZlcnNpb24ubWpzJztcblxuXG4vKipcbiAqIFBlcmZvcm1zIGVmZmljaWVudCBwcmVjYWNoaW5nIG9mIGFzc2V0cy5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtcHJlY2FjaGluZ1xuICovXG5jbGFzcyBQcmVjYWNoZUNvbnRyb2xsZXIge1xuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IFByZWNhY2hlQ29udHJvbGxlci5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtjYWNoZU5hbWVdIEFuIG9wdGlvbmFsIG5hbWUgZm9yIHRoZSBjYWNoZSwgdG8gb3ZlcnJpZGVcbiAgICogdGhlIGRlZmF1bHQgcHJlY2FjaGUgbmFtZS5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGNhY2hlTmFtZSkge1xuICAgIHRoaXMuX2NhY2hlTmFtZSA9IGNhY2hlTmFtZXMuZ2V0UHJlY2FjaGVOYW1lKGNhY2hlTmFtZSk7XG4gICAgdGhpcy5fdXJsc1RvQ2FjaGVLZXlzID0gbmV3IE1hcCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHdpbGwgYWRkIGl0ZW1zIHRvIHRoZSBwcmVjYWNoZSBsaXN0LCByZW1vdmluZyBkdXBsaWNhdGVzXG4gICAqIGFuZCBlbnN1cmluZyB0aGUgaW5mb3JtYXRpb24gaXMgdmFsaWQuXG4gICAqXG4gICAqIEBwYXJhbSB7XG4gICAqIEFycmF5PG1vZHVsZTp3b3JrYm94LXByZWNhY2hpbmcuUHJlY2FjaGVDb250cm9sbGVyLlByZWNhY2hlRW50cnl8c3RyaW5nPlxuICAgKiB9IGVudHJpZXMgQXJyYXkgb2YgZW50cmllcyB0byBwcmVjYWNoZS5cbiAgICovXG4gIGFkZFRvQ2FjaGVMaXN0KGVudHJpZXMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgYXNzZXJ0LmlzQXJyYXkoZW50cmllcywge1xuICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1wcmVjYWNoaW5nJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnUHJlY2FjaGVDb250cm9sbGVyJyxcbiAgICAgICAgZnVuY05hbWU6ICdhZGRUb0NhY2hlTGlzdCcsXG4gICAgICAgIHBhcmFtTmFtZTogJ2VudHJpZXMnLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSB7XG4gICAgICBjb25zdCB7Y2FjaGVLZXksIHVybH0gPSBjcmVhdGVDYWNoZUtleShlbnRyeSk7XG4gICAgICBpZiAodGhpcy5fdXJsc1RvQ2FjaGVLZXlzLmhhcyh1cmwpICYmXG4gICAgICAgICAgdGhpcy5fdXJsc1RvQ2FjaGVLZXlzLmdldCh1cmwpICE9PSBjYWNoZUtleSkge1xuICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdhZGQtdG8tY2FjaGUtbGlzdC1jb25mbGljdGluZy1lbnRyaWVzJywge1xuICAgICAgICAgIGZpcnN0RW50cnk6IHRoaXMuX3VybHNUb0NhY2hlS2V5cy5nZXQodXJsKSxcbiAgICAgICAgICBzZWNvbmRFbnRyeTogY2FjaGVLZXksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5fdXJsc1RvQ2FjaGVLZXlzLnNldCh1cmwsIGNhY2hlS2V5KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUHJlY2FjaGVzIG5ldyBhbmQgdXBkYXRlZCBhc3NldHMuIENhbGwgdGhpcyBtZXRob2QgZnJvbSB0aGUgc2VydmljZSB3b3JrZXJcbiAgICogaW5zdGFsbCBldmVudC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICogQHBhcmFtIHtFdmVudH0gW29wdGlvbnMuZXZlbnRdIFRoZSBpbnN0YWxsIGV2ZW50IChpZiBuZWVkZWQpLlxuICAgKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IFtvcHRpb25zLnBsdWdpbnNdIFBsdWdpbnMgdG8gYmUgdXNlZCBmb3IgZmV0Y2hpbmdcbiAgICogYW5kIGNhY2hpbmcgZHVyaW5nIGluc3RhbGwuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8d29ya2JveC5wcmVjYWNoaW5nLkluc3RhbGxSZXN1bHQ+fVxuICAgKi9cbiAgYXN5bmMgaW5zdGFsbCh7ZXZlbnQsIHBsdWdpbnN9ID0ge30pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHBsdWdpbnMpIHtcbiAgICAgICAgYXNzZXJ0LmlzQXJyYXkocGx1Z2lucywge1xuICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXByZWNhY2hpbmcnLFxuICAgICAgICAgIGNsYXNzTmFtZTogJ1ByZWNhY2hlQ29udHJvbGxlcicsXG4gICAgICAgICAgZnVuY05hbWU6ICdpbnN0YWxsJyxcbiAgICAgICAgICBwYXJhbU5hbWU6ICdwbHVnaW5zJyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgdXJsc1RvUHJlY2FjaGUgPSBbXTtcbiAgICBjb25zdCB1cmxzQWxyZWFkeVByZWNhY2hlZCA9IFtdO1xuXG4gICAgY29uc3QgY2FjaGUgPSBhd2FpdCBjYWNoZXMub3Blbih0aGlzLl9jYWNoZU5hbWUpO1xuICAgIGNvbnN0IGFscmVhZHlDYWNoZWRSZXF1ZXN0cyA9IGF3YWl0IGNhY2hlLmtleXMoKTtcbiAgICBjb25zdCBhbHJlYWR5Q2FjaGVkVVJMcyA9IG5ldyBTZXQoYWxyZWFkeUNhY2hlZFJlcXVlc3RzLm1hcChcbiAgICAgICAgKHJlcXVlc3QpID0+IHJlcXVlc3QudXJsKSk7XG5cbiAgICBmb3IgKGNvbnN0IGNhY2hlS2V5IG9mIHRoaXMuX3VybHNUb0NhY2hlS2V5cy52YWx1ZXMoKSkge1xuICAgICAgaWYgKGFscmVhZHlDYWNoZWRVUkxzLmhhcyhjYWNoZUtleSkpIHtcbiAgICAgICAgdXJsc0FscmVhZHlQcmVjYWNoZWQucHVzaChjYWNoZUtleSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1cmxzVG9QcmVjYWNoZS5wdXNoKGNhY2hlS2V5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwcmVjYWNoZVJlcXVlc3RzID0gdXJsc1RvUHJlY2FjaGUubWFwKCh1cmwpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLl9hZGRVUkxUb0NhY2hlKHtldmVudCwgcGx1Z2lucywgdXJsfSk7XG4gICAgfSk7XG4gICAgYXdhaXQgUHJvbWlzZS5hbGwocHJlY2FjaGVSZXF1ZXN0cyk7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcHJpbnRJbnN0YWxsRGV0YWlscyh1cmxzVG9QcmVjYWNoZSwgdXJsc0FscmVhZHlQcmVjYWNoZWQpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGVkVVJMczogdXJsc1RvUHJlY2FjaGUsXG4gICAgICBub3RVcGRhdGVkVVJMczogdXJsc0FscmVhZHlQcmVjYWNoZWQsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIGFzc2V0cyB0aGF0IGFyZSBubyBsb25nZXIgcHJlc2VudCBpbiB0aGUgY3VycmVudCBwcmVjYWNoZSBtYW5pZmVzdC5cbiAgICogQ2FsbCB0aGlzIG1ldGhvZCBmcm9tIHRoZSBzZXJ2aWNlIHdvcmtlciBhY3RpdmF0ZSBldmVudC5cbiAgICpcbiAgICogQHJldHVybiB7UHJvbWlzZTx3b3JrYm94LnByZWNhY2hpbmcuQ2xlYW51cFJlc3VsdD59XG4gICAqL1xuICBhc3luYyBhY3RpdmF0ZSgpIHtcbiAgICBjb25zdCBjYWNoZSA9IGF3YWl0IGNhY2hlcy5vcGVuKHRoaXMuX2NhY2hlTmFtZSk7XG4gICAgY29uc3QgY3VycmVudGx5Q2FjaGVkUmVxdWVzdHMgPSBhd2FpdCBjYWNoZS5rZXlzKCk7XG4gICAgY29uc3QgZXhwZWN0ZWRDYWNoZUtleXMgPSBuZXcgU2V0KHRoaXMuX3VybHNUb0NhY2hlS2V5cy52YWx1ZXMoKSk7XG5cbiAgICBjb25zdCBkZWxldGVkVVJMcyA9IFtdO1xuICAgIGZvciAoY29uc3QgcmVxdWVzdCBvZiBjdXJyZW50bHlDYWNoZWRSZXF1ZXN0cykge1xuICAgICAgaWYgKCFleHBlY3RlZENhY2hlS2V5cy5oYXMocmVxdWVzdC51cmwpKSB7XG4gICAgICAgIGF3YWl0IGNhY2hlLmRlbGV0ZShyZXF1ZXN0KTtcbiAgICAgICAgZGVsZXRlZFVSTHMucHVzaChyZXF1ZXN0LnVybCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHByaW50Q2xlYW51cERldGFpbHMoZGVsZXRlZFVSTHMpO1xuICAgIH1cblxuICAgIHJldHVybiB7ZGVsZXRlZFVSTHN9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcXVlc3RzIHRoZSBlbnRyeSBhbmQgc2F2ZXMgaXQgdG8gdGhlIGNhY2hlIGlmIHRoZSByZXNwb25zZSBpcyB2YWxpZC5cbiAgICogQnkgZGVmYXVsdCwgYW55IHJlc3BvbnNlIHdpdGggYSBzdGF0dXMgY29kZSBvZiBsZXNzIHRoYW4gNDAwIChpbmNsdWRpbmdcbiAgICogb3BhcXVlIHJlc3BvbnNlcykgaXMgY29uc2lkZXJlZCB2YWxpZC5cbiAgICpcbiAgICogSWYgeW91IG5lZWQgdG8gdXNlIGN1c3RvbSBjcml0ZXJpYSB0byBkZXRlcm1pbmUgd2hhdCdzIHZhbGlkIGFuZCB3aGF0XG4gICAqIGlzbid0LCB0aGVuIHBhc3MgaW4gYW4gaXRlbSBpbiBgb3B0aW9ucy5wbHVnaW5zYCB0aGF0IGltcGxlbWVudHMgdGhlXG4gICAqIGBjYWNoZVdpbGxVcGRhdGUoKWAgbGlmZWN5Y2xlIGV2ZW50LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy51cmwgVGhlIFVSTCB0byBmZXRjaCBhbmQgY2FjaGUuXG4gICAqIEBwYXJhbSB7RXZlbnR9IFtvcHRpb25zLmV2ZW50XSBUaGUgaW5zdGFsbCBldmVudCAoaWYgcGFzc2VkKS5cbiAgICogQHBhcmFtIHtBcnJheTxPYmplY3Q+fSBbb3B0aW9ucy5wbHVnaW5zXSBBbiBhcnJheSBvZiBwbHVnaW5zIHRvIGFwcGx5IHRvXG4gICAqIGZldGNoIGFuZCBjYWNoaW5nLlxuICAgKi9cbiAgYXN5bmMgX2FkZFVSTFRvQ2FjaGUoe3VybCwgZXZlbnQsIHBsdWdpbnN9KSB7XG4gICAgY29uc3QgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KHVybCwge2NyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nfSk7XG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2hXcmFwcGVyLmZldGNoKHtcbiAgICAgIGV2ZW50LFxuICAgICAgcGx1Z2lucyxcbiAgICAgIHJlcXVlc3QsXG4gICAgfSk7XG5cbiAgICAvLyBBbGxvdyBkZXZlbG9wZXJzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IGxvZ2ljIGFib3V0IHdoYXQgaXMgYW5kIGlzbid0XG4gICAgLy8gdmFsaWQgYnkgcGFzc2luZyBpbiBhIHBsdWdpbiBpbXBsZW1lbnRpbmcgY2FjaGVXaWxsVXBkYXRlKCksIGUuZy5cbiAgICAvLyBhIHdvcmtib3guY2FjaGVhYmxlUmVzcG9uc2UuUGx1Z2luIGluc3RhbmNlLlxuICAgIGxldCBjYWNoZVdpbGxVcGRhdGVDYWxsYmFjaztcbiAgICBmb3IgKGNvbnN0IHBsdWdpbiBvZiAocGx1Z2lucyB8fCBbXSkpIHtcbiAgICAgIGlmICgnY2FjaGVXaWxsVXBkYXRlJyBpbiBwbHVnaW4pIHtcbiAgICAgICAgY2FjaGVXaWxsVXBkYXRlQ2FsbGJhY2sgPSBwbHVnaW4uY2FjaGVXaWxsVXBkYXRlLmJpbmQocGx1Z2luKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBpc1ZhbGlkUmVzcG9uc2UgPSBjYWNoZVdpbGxVcGRhdGVDYWxsYmFjayA/XG4gICAgICAvLyBVc2UgYSBjYWxsYmFjayBpZiBwcm92aWRlZC4gSXQgcmV0dXJucyBhIHRydXRoeSB2YWx1ZSBpZiB2YWxpZC5cbiAgICAgIGNhY2hlV2lsbFVwZGF0ZUNhbGxiYWNrKHtldmVudCwgcmVxdWVzdCwgcmVzcG9uc2V9KSA6XG4gICAgICAvLyBPdGhlcndpc2UsIGRlZmF1bHQgdG8gY29uc2lkZXJpbmcgYW55IHJlc3BvbnNlIHN0YXR1cyB1bmRlciA0MDAgdmFsaWQuXG4gICAgICAvLyBUaGlzIGluY2x1ZGVzLCBieSBkZWZhdWx0LCBjb25zaWRlcmluZyBvcGFxdWUgcmVzcG9uc2VzIHZhbGlkLlxuICAgICAgcmVzcG9uc2Uuc3RhdHVzIDwgNDAwO1xuXG4gICAgLy8gQ29uc2lkZXIgdGhpcyBhIGZhaWx1cmUsIGxlYWRpbmcgdG8gdGhlIGBpbnN0YWxsYCBoYW5kbGVyIGZhaWxpbmcsIGlmXG4gICAgLy8gd2UgZ2V0IGJhY2sgYW4gaW52YWxpZCByZXNwb25zZS5cbiAgICBpZiAoIWlzVmFsaWRSZXNwb25zZSkge1xuICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignYmFkLXByZWNhY2hpbmctcmVzcG9uc2UnLCB7XG4gICAgICAgIHVybCxcbiAgICAgICAgc3RhdHVzOiByZXNwb25zZS5zdGF0dXMsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocmVzcG9uc2UucmVkaXJlY3RlZCkge1xuICAgICAgcmVzcG9uc2UgPSBhd2FpdCBjbGVhblJlZGlyZWN0KHJlc3BvbnNlKTtcbiAgICB9XG5cbiAgICBhd2FpdCBjYWNoZVdyYXBwZXIucHV0KHtcbiAgICAgIGV2ZW50LFxuICAgICAgcGx1Z2lucyxcbiAgICAgIHJlcXVlc3QsXG4gICAgICByZXNwb25zZSxcbiAgICAgIGNhY2hlTmFtZTogdGhpcy5fY2FjaGVOYW1lLFxuICAgICAgbWF0Y2hPcHRpb25zOiB7XG4gICAgICAgIGlnbm9yZVNlYXJjaDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIG1hcHBpbmcgb2YgYSBwcmVjYWNoZWQgVVJMIHRvIHRoZSBjb3JyZXNwb25kaW5nIGNhY2hlIGtleSwgdGFraW5nXG4gICAqIGludG8gYWNjb3VudCB0aGUgcmV2aXNpb24gaW5mb3JtYXRpb24gZm9yIHRoZSBVUkwuXG4gICAqXG4gICAqIEByZXR1cm4ge01hcDxzdHJpbmcsIHN0cmluZz59IEEgVVJMIHRvIGNhY2hlIGtleSBtYXBwaW5nLlxuICAgKi9cbiAgZ2V0VVJMc1RvQ2FjaGVLZXlzKCkge1xuICAgIHJldHVybiB0aGlzLl91cmxzVG9DYWNoZUtleXM7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGxpc3Qgb2YgYWxsIHRoZSBVUkxzIHRoYXQgaGF2ZSBiZWVuIHByZWNhY2hlZCBieSB0aGUgY3VycmVudFxuICAgKiBzZXJ2aWNlIHdvcmtlci5cbiAgICpcbiAgICogQHJldHVybiB7QXJyYXk8c3RyaW5nPn0gVGhlIHByZWNhY2hlZCBVUkxzLlxuICAgKi9cbiAgZ2V0Q2FjaGVkVVJMcygpIHtcbiAgICByZXR1cm4gWy4uLnRoaXMuX3VybHNUb0NhY2hlS2V5cy5rZXlzKCldO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGNhY2hlIGtleSB1c2VkIGZvciBzdG9yaW5nIGEgZ2l2ZW4gVVJMLiBJZiB0aGF0IFVSTCBpc1xuICAgKiB1bnZlcnNpb25lZCwgbGlrZSBgL2luZGV4Lmh0bWwnLCB0aGVuIHRoZSBjYWNoZSBrZXkgd2lsbCBiZSB0aGUgb3JpZ2luYWxcbiAgICogVVJMIHdpdGggYSBzZWFyY2ggcGFyYW1ldGVyIGFwcGVuZGVkIHRvIGl0LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIEEgVVJMIHdob3NlIGNhY2hlIGtleSB5b3Ugd2FudCB0byBsb29rIHVwLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSB2ZXJzaW9uZWQgVVJMIHRoYXQgY29ycmVzcG9uZHMgdG8gYSBjYWNoZSBrZXlcbiAgICogZm9yIHRoZSBvcmlnaW5hbCBVUkwsIG9yIHVuZGVmaW5lZCBpZiB0aGF0IFVSTCBpc24ndCBwcmVjYWNoZWQuXG4gICAqL1xuICBnZXRDYWNoZUtleUZvclVSTCh1cmwpIHtcbiAgICBjb25zdCB1cmxPYmplY3QgPSBuZXcgVVJMKHVybCwgbG9jYXRpb24pO1xuICAgIHJldHVybiB0aGlzLl91cmxzVG9DYWNoZUtleXMuZ2V0KHVybE9iamVjdC5ocmVmKTtcbiAgfVxufVxuXG5leHBvcnQge1ByZWNhY2hlQ29udHJvbGxlcn07XG4iLCJ0cnl7c2VsZlsnd29ya2JveDpwcmVjYWNoaW5nOjQuMy4xJ10mJl8oKX1jYXRjaChlKXt9Ly8gZXNsaW50LWRpc2FibGUtbGluZSIsIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0IHtwcmVjYWNoZVBsdWdpbnN9IGZyb20gJy4vdXRpbHMvcHJlY2FjaGVQbHVnaW5zLm1qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24ubWpzJztcblxuXG4vKipcbiAqIEFkZHMgcGx1Z2lucyB0byBwcmVjYWNoaW5nLlxuICpcbiAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gbmV3UGx1Z2luc1xuICpcbiAqIEBhbGlhcyB3b3JrYm94LnByZWNhY2hpbmcuYWRkUGx1Z2luc1xuICovXG5jb25zdCBhZGRQbHVnaW5zID0gKG5ld1BsdWdpbnMpID0+IHtcbiAgcHJlY2FjaGVQbHVnaW5zLmFkZChuZXdQbHVnaW5zKTtcbn07XG5cbmV4cG9ydCB7YWRkUGx1Z2luc307XG4iLCJcbi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCB7YWRkRmV0Y2hMaXN0ZW5lcn0gZnJvbSAnLi91dGlscy9hZGRGZXRjaExpc3RlbmVyLm1qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24ubWpzJztcblxuXG5sZXQgbGlzdGVuZXJBZGRlZCA9IGZhbHNlO1xuXG4vKipcbiAqIEFkZCBhIGBmZXRjaGAgbGlzdGVuZXIgdG8gdGhlIHNlcnZpY2Ugd29ya2VyIHRoYXQgd2lsbFxuICogcmVzcG9uZCB0b1xuICogW25ldHdvcmsgcmVxdWVzdHNde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9TZXJ2aWNlX1dvcmtlcl9BUEkvVXNpbmdfU2VydmljZV9Xb3JrZXJzI0N1c3RvbV9yZXNwb25zZXNfdG9fcmVxdWVzdHN9XG4gKiB3aXRoIHByZWNhY2hlZCBhc3NldHMuXG4gKlxuICogUmVxdWVzdHMgZm9yIGFzc2V0cyB0aGF0IGFyZW4ndCBwcmVjYWNoZWQsIHRoZSBgRmV0Y2hFdmVudGAgd2lsbCBub3QgYmVcbiAqIHJlc3BvbmRlZCB0bywgYWxsb3dpbmcgdGhlIGV2ZW50IHRvIGZhbGwgdGhyb3VnaCB0byBvdGhlciBgZmV0Y2hgIGV2ZW50XG4gKiBsaXN0ZW5lcnMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5kaXJlY3RvcnlJbmRleD1pbmRleC5odG1sXSBUaGUgYGRpcmVjdG9yeUluZGV4YCB3aWxsXG4gKiBjaGVjayBjYWNoZSBlbnRyaWVzIGZvciBhIFVSTHMgZW5kaW5nIHdpdGggJy8nIHRvIHNlZSBpZiB0aGVyZSBpcyBhIGhpdCB3aGVuXG4gKiBhcHBlbmRpbmcgdGhlIGBkaXJlY3RvcnlJbmRleGAgdmFsdWUuXG4gKiBAcGFyYW0ge0FycmF5PFJlZ0V4cD59IFtvcHRpb25zLmlnbm9yZVVSTFBhcmFtZXRlcnNNYXRjaGluZz1bL151dG1fL11dIEFuXG4gKiBhcnJheSBvZiByZWdleCdzIHRvIHJlbW92ZSBzZWFyY2ggcGFyYW1zIHdoZW4gbG9va2luZyBmb3IgYSBjYWNoZSBtYXRjaC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuY2xlYW5VUkxzPXRydWVdIFRoZSBgY2xlYW5VUkxzYCBvcHRpb24gd2lsbFxuICogY2hlY2sgdGhlIGNhY2hlIGZvciB0aGUgVVJMIHdpdGggYSBgLmh0bWxgIGFkZGVkIHRvIHRoZSBlbmQgb2YgdGhlIGVuZC5cbiAqIEBwYXJhbSB7d29ya2JveC5wcmVjYWNoaW5nfnVybE1hbmlwdWxhdGlvbn0gW29wdGlvbnMudXJsTWFuaXB1bGF0aW9uXVxuICogVGhpcyBpcyBhIGZ1bmN0aW9uIHRoYXQgc2hvdWxkIHRha2UgYSBVUkwgYW5kIHJldHVybiBhbiBhcnJheSBvZlxuICogYWx0ZXJuYXRpdmUgVVJMJ3MgdGhhdCBzaG91bGQgYmUgY2hlY2tlZCBmb3IgcHJlY2FjaGUgbWF0Y2hlcy5cbiAqXG4gKiBAYWxpYXMgd29ya2JveC5wcmVjYWNoaW5nLmFkZFJvdXRlXG4gKi9cbmV4cG9ydCBjb25zdCBhZGRSb3V0ZSA9IChvcHRpb25zKSA9PiB7XG4gIGlmICghbGlzdGVuZXJBZGRlZCkge1xuICAgIGFkZEZldGNoTGlzdGVuZXIob3B0aW9ucyk7XG4gICAgbGlzdGVuZXJBZGRlZCA9IHRydWU7XG4gIH1cbn07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCB7Y2FjaGVOYW1lc30gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2NhY2hlTmFtZXMubWpzJztcbmltcG9ydCB7bG9nZ2VyfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvbG9nZ2VyLm1qcyc7XG5pbXBvcnQge2RlbGV0ZU91dGRhdGVkQ2FjaGVzfSBmcm9tICcuL3V0aWxzL2RlbGV0ZU91dGRhdGVkQ2FjaGVzLm1qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24ubWpzJztcblxuXG4vKipcbiAqIEFkZHMgYW4gYGFjdGl2YXRlYCBldmVudCBsaXN0ZW5lciB3aGljaCB3aWxsIGNsZWFuIHVwIGluY29tcGF0aWJsZVxuICogcHJlY2FjaGVzIHRoYXQgd2VyZSBjcmVhdGVkIGJ5IG9sZGVyIHZlcnNpb25zIG9mIFdvcmtib3guXG4gKlxuICogQGFsaWFzIHdvcmtib3gucHJlY2FjaGluZy5jbGVhbnVwT3V0ZGF0ZWRDYWNoZXNcbiAqL1xuZXhwb3J0IGNvbnN0IGNsZWFudXBPdXRkYXRlZENhY2hlcyA9ICgpID0+IHtcbiAgYWRkRXZlbnRMaXN0ZW5lcignYWN0aXZhdGUnLCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBjYWNoZU5hbWUgPSBjYWNoZU5hbWVzLmdldFByZWNhY2hlTmFtZSgpO1xuXG4gICAgZXZlbnQud2FpdFVudGlsKGRlbGV0ZU91dGRhdGVkQ2FjaGVzKGNhY2hlTmFtZSkudGhlbigoY2FjaGVzRGVsZXRlZCkgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKGNhY2hlc0RlbGV0ZWQubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGxvZ2dlci5sb2coYFRoZSBmb2xsb3dpbmcgb3V0LW9mLWRhdGUgcHJlY2FjaGVzIHdlcmUgY2xlYW5lZCB1cCBgICtcbiAgICAgICAgICAgICAgYGF1dG9tYXRpY2FsbHk6YCwgY2FjaGVzRGVsZXRlZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KSk7XG4gIH0pO1xufTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0IHtnZXRPckNyZWF0ZVByZWNhY2hlQ29udHJvbGxlcn1cbiAgZnJvbSAnLi91dGlscy9nZXRPckNyZWF0ZVByZWNhY2hlQ29udHJvbGxlci5tanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLm1qcyc7XG5cblxuLyoqXG4gKiBUYWtlcyBpbiBhIFVSTCwgYW5kIHJldHVybnMgdGhlIGNvcnJlc3BvbmRpbmcgVVJMIHRoYXQgY291bGQgYmUgdXNlZCB0b1xuICogbG9va3VwIHRoZSBlbnRyeSBpbiB0aGUgcHJlY2FjaGUuXG4gKlxuICogSWYgYSByZWxhdGl2ZSBVUkwgaXMgcHJvdmlkZWQsIHRoZSBsb2NhdGlvbiBvZiB0aGUgc2VydmljZSB3b3JrZXIgZmlsZSB3aWxsXG4gKiBiZSB1c2VkIGFzIHRoZSBiYXNlLlxuICpcbiAqIEZvciBwcmVjYWNoZWQgZW50cmllcyB3aXRob3V0IHJldmlzaW9uIGluZm9ybWF0aW9uLCB0aGUgY2FjaGUga2V5IHdpbGwgYmUgdGhlXG4gKiBzYW1lIGFzIHRoZSBvcmlnaW5hbCBVUkwuXG4gKlxuICogRm9yIHByZWNhY2hlZCBlbnRyaWVzIHdpdGggcmV2aXNpb24gaW5mb3JtYXRpb24sIHRoZSBjYWNoZSBrZXkgd2lsbCBiZSB0aGVcbiAqIG9yaWdpbmFsIFVSTCB3aXRoIHRoZSBhZGRpdGlvbiBvZiBhIHF1ZXJ5IHBhcmFtZXRlciB1c2VkIGZvciBrZWVwaW5nIHRyYWNrIG9mXG4gKiB0aGUgcmV2aXNpb24gaW5mby5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBVUkwgd2hvc2UgY2FjaGUga2V5IHRvIGxvb2sgdXAuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBjYWNoZSBrZXkgdGhhdCBjb3JyZXNwb25kcyB0byB0aGF0IFVSTC5cbiAqXG4gKiBAYWxpYXMgd29ya2JveC5wcmVjYWNoaW5nLmdldENhY2hlS2V5Rm9yVVJMXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRDYWNoZUtleUZvclVSTCA9ICh1cmwpID0+IHtcbiAgY29uc3QgcHJlY2FjaGVDb250cm9sbGVyID0gZ2V0T3JDcmVhdGVQcmVjYWNoZUNvbnRyb2xsZXIoKTtcbiAgcmV0dXJuIHByZWNhY2hlQ29udHJvbGxlci5nZXRDYWNoZUtleUZvclVSTCh1cmwpO1xufTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0IHthc3NlcnR9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9hc3NlcnQubWpzJztcbmltcG9ydCB7YWRkUGx1Z2luc30gZnJvbSAnLi9hZGRQbHVnaW5zLm1qcyc7XG5pbXBvcnQge2FkZFJvdXRlfSBmcm9tICcuL2FkZFJvdXRlLm1qcyc7XG5pbXBvcnQge2NsZWFudXBPdXRkYXRlZENhY2hlc30gZnJvbSAnLi9jbGVhbnVwT3V0ZGF0ZWRDYWNoZXMubWpzJztcbmltcG9ydCB7Z2V0Q2FjaGVLZXlGb3JVUkx9IGZyb20gJy4vZ2V0Q2FjaGVLZXlGb3JVUkwubWpzJztcbmltcG9ydCB7cHJlY2FjaGV9IGZyb20gJy4vcHJlY2FjaGUubWpzJztcbmltcG9ydCB7cHJlY2FjaGVBbmRSb3V0ZX0gZnJvbSAnLi9wcmVjYWNoZUFuZFJvdXRlLm1qcyc7XG5pbXBvcnQge1ByZWNhY2hlQ29udHJvbGxlcn0gZnJvbSAnLi9QcmVjYWNoZUNvbnRyb2xsZXIubWpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5tanMnO1xuXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIGFzc2VydC5pc1NXRW52KCd3b3JrYm94LXByZWNhY2hpbmcnKTtcbn1cblxuLyoqXG4gKiBNb3N0IGNvbnN1bWVycyBvZiB0aGlzIG1vZHVsZSB3aWxsIHdhbnQgdG8gdXNlIHRoZVxuICogW3ByZWNhY2hlQW5kUm91dGUoKV17QGxpbmsgd29ya2JveC5wcmVjYWNoaW5nLnByZWNhY2hlQW5kUm91dGV9XG4gKiBtZXRob2QgdG8gYWRkIGFzc2V0cyB0byB0aGUgQ2FjaGUgYW5kIHJlc3BvbmQgdG8gbmV0d29yayByZXF1ZXN0cyB3aXRoIHRoZXNlXG4gKiBjYWNoZWQgYXNzZXRzLlxuICpcbiAqIElmIHlvdSByZXF1aXJlIGZpbmVyIGdyYWluZWQgY29udHJvbCwgeW91IGNhbiB1c2UgdGhlXG4gKiBbUHJlY2FjaGVDb250cm9sbGVyXXtAbGluayB3b3JrYm94LnByZWNhY2hpbmcuUHJlY2FjaGVDb250cm9sbGVyfVxuICogdG8gZGV0ZXJtaW5lIHdoZW4gcGVyZm9ybWVkLlxuICpcbiAqIEBuYW1lc3BhY2Ugd29ya2JveC5wcmVjYWNoaW5nXG4gKi9cblxuZXhwb3J0IHtcbiAgYWRkUGx1Z2lucyxcbiAgYWRkUm91dGUsXG4gIGNsZWFudXBPdXRkYXRlZENhY2hlcyxcbiAgZ2V0Q2FjaGVLZXlGb3JVUkwsXG4gIHByZWNhY2hlLFxuICBwcmVjYWNoZUFuZFJvdXRlLFxuICBQcmVjYWNoZUNvbnRyb2xsZXIsXG59O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQge2xvZ2dlcn0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5tanMnO1xuaW1wb3J0IHtnZXRPckNyZWF0ZVByZWNhY2hlQ29udHJvbGxlcn0gZnJvbSAnLi91dGlscy9nZXRPckNyZWF0ZVByZWNhY2hlQ29udHJvbGxlci5tanMnO1xuaW1wb3J0IHtwcmVjYWNoZVBsdWdpbnN9IGZyb20gJy4vdXRpbHMvcHJlY2FjaGVQbHVnaW5zLm1qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24ubWpzJztcblxuXG5jb25zdCBpbnN0YWxsTGlzdGVuZXIgPSAoZXZlbnQpID0+IHtcbiAgY29uc3QgcHJlY2FjaGVDb250cm9sbGVyID0gZ2V0T3JDcmVhdGVQcmVjYWNoZUNvbnRyb2xsZXIoKTtcbiAgY29uc3QgcGx1Z2lucyA9IHByZWNhY2hlUGx1Z2lucy5nZXQoKTtcblxuICBldmVudC53YWl0VW50aWwoXG4gICAgICBwcmVjYWNoZUNvbnRyb2xsZXIuaW5zdGFsbCh7ZXZlbnQsIHBsdWdpbnN9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgIGxvZ2dlci5lcnJvcihgU2VydmljZSB3b3JrZXIgaW5zdGFsbGF0aW9uIGZhaWxlZC4gSXQgd2lsbCBgICtcbiAgICAgICAgICAgICAgYGJlIHJldHJpZWQgYXV0b21hdGljYWxseSBkdXJpbmcgdGhlIG5leHQgbmF2aWdhdGlvbi5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFJlLXRocm93IHRoZSBlcnJvciB0byBlbnN1cmUgaW5zdGFsbGF0aW9uIGZhaWxzLlxuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgfSlcbiAgKTtcbn07XG5cbmNvbnN0IGFjdGl2YXRlTGlzdGVuZXIgPSAoZXZlbnQpID0+IHtcbiAgY29uc3QgcHJlY2FjaGVDb250cm9sbGVyID0gZ2V0T3JDcmVhdGVQcmVjYWNoZUNvbnRyb2xsZXIoKTtcbiAgY29uc3QgcGx1Z2lucyA9IHByZWNhY2hlUGx1Z2lucy5nZXQoKTtcblxuICBldmVudC53YWl0VW50aWwocHJlY2FjaGVDb250cm9sbGVyLmFjdGl2YXRlKHtldmVudCwgcGx1Z2luc30pKTtcbn07XG5cbi8qKlxuICogQWRkcyBpdGVtcyB0byB0aGUgcHJlY2FjaGUgbGlzdCwgcmVtb3ZpbmcgYW55IGR1cGxpY2F0ZXMgYW5kXG4gKiBzdG9yZXMgdGhlIGZpbGVzIGluIHRoZVxuICogW1wicHJlY2FjaGUgY2FjaGVcIl17QGxpbmsgbW9kdWxlOndvcmtib3gtY29yZS5jYWNoZU5hbWVzfSB3aGVuIHRoZSBzZXJ2aWNlXG4gKiB3b3JrZXIgaW5zdGFsbHMuXG4gKlxuICogVGhpcyBtZXRob2QgY2FuIGJlIGNhbGxlZCBtdWx0aXBsZSB0aW1lcy5cbiAqXG4gKiBQbGVhc2Ugbm90ZTogVGhpcyBtZXRob2QgKip3aWxsIG5vdCoqIHNlcnZlIGFueSBvZiB0aGUgY2FjaGVkIGZpbGVzIGZvciB5b3UuXG4gKiBJdCBvbmx5IHByZWNhY2hlcyBmaWxlcy4gVG8gcmVzcG9uZCB0byBhIG5ldHdvcmsgcmVxdWVzdCB5b3UgY2FsbFxuICogW2FkZFJvdXRlKClde0BsaW5rIG1vZHVsZTp3b3JrYm94LXByZWNhY2hpbmcuYWRkUm91dGV9LlxuICpcbiAqIElmIHlvdSBoYXZlIGEgc2luZ2xlIGFycmF5IG9mIGZpbGVzIHRvIHByZWNhY2hlLCB5b3UgY2FuIGp1c3QgY2FsbFxuICogW3ByZWNhY2hlQW5kUm91dGUoKV17QGxpbmsgbW9kdWxlOndvcmtib3gtcHJlY2FjaGluZy5wcmVjYWNoZUFuZFJvdXRlfS5cbiAqXG4gKiBAcGFyYW0ge0FycmF5PE9iamVjdHxzdHJpbmc+fSBlbnRyaWVzIEFycmF5IG9mIGVudHJpZXMgdG8gcHJlY2FjaGUuXG4gKlxuICogQGFsaWFzIHdvcmtib3gucHJlY2FjaGluZy5wcmVjYWNoZVxuICovXG5leHBvcnQgY29uc3QgcHJlY2FjaGUgPSAoZW50cmllcykgPT4ge1xuICBjb25zdCBwcmVjYWNoZUNvbnRyb2xsZXIgPSBnZXRPckNyZWF0ZVByZWNhY2hlQ29udHJvbGxlcigpO1xuICBwcmVjYWNoZUNvbnRyb2xsZXIuYWRkVG9DYWNoZUxpc3QoZW50cmllcyk7XG5cbiAgaWYgKGVudHJpZXMubGVuZ3RoID4gMCkge1xuICAgIC8vIE5PVEU6IHRoZXNlIGxpc3RlbmVycyB3aWxsIG9ubHkgYmUgYWRkZWQgb25jZSAoZXZlbiBpZiB0aGUgYHByZWNhY2hlKClgXG4gICAgLy8gbWV0aG9kIGlzIGNhbGxlZCBtdWx0aXBsZSB0aW1lcykgYmVjYXVzZSBldmVudCBsaXN0ZW5lcnMgYXJlIGltcGxlbWVudGVkXG4gICAgLy8gYXMgYSBzZXQsIHdoZXJlIGVhY2ggbGlzdGVuZXIgbXVzdCBiZSB1bmlxdWUuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcignaW5zdGFsbCcsIGluc3RhbGxMaXN0ZW5lcik7XG4gICAgYWRkRXZlbnRMaXN0ZW5lcignYWN0aXZhdGUnLCBhY3RpdmF0ZUxpc3RlbmVyKTtcbiAgfVxufTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0IHthZGRSb3V0ZX0gZnJvbSAnLi9hZGRSb3V0ZS5tanMnO1xuaW1wb3J0IHtwcmVjYWNoZX0gZnJvbSAnLi9wcmVjYWNoZS5tanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLm1qcyc7XG5cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCB3aWxsIGFkZCBlbnRyaWVzIHRvIHRoZSBwcmVjYWNoZSBsaXN0IGFuZCBhZGQgYSByb3V0ZSB0b1xuICogcmVzcG9uZCB0byBmZXRjaCBldmVudHMuXG4gKlxuICogVGhpcyBpcyBhIGNvbnZlbmllbmNlIG1ldGhvZCB0aGF0IHdpbGwgY2FsbFxuICogW3ByZWNhY2hlKClde0BsaW5rIG1vZHVsZTp3b3JrYm94LXByZWNhY2hpbmcucHJlY2FjaGV9IGFuZFxuICogW2FkZFJvdXRlKClde0BsaW5rIG1vZHVsZTp3b3JrYm94LXByZWNhY2hpbmcuYWRkUm91dGV9IGluIGEgc2luZ2xlIGNhbGwuXG4gKlxuICogQHBhcmFtIHtBcnJheTxPYmplY3R8c3RyaW5nPn0gZW50cmllcyBBcnJheSBvZiBlbnRyaWVzIHRvIHByZWNhY2hlLlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgU2VlXG4gKiBbYWRkUm91dGUoKSBvcHRpb25zXXtAbGluayBtb2R1bGU6d29ya2JveC1wcmVjYWNoaW5nLmFkZFJvdXRlfS5cbiAqXG4gKiBAYWxpYXMgd29ya2JveC5wcmVjYWNoaW5nLnByZWNhY2hlQW5kUm91dGVcbiAqL1xuZXhwb3J0IGNvbnN0IHByZWNhY2hlQW5kUm91dGUgPSAoZW50cmllcywgb3B0aW9ucykgPT4ge1xuICBwcmVjYWNoZShlbnRyaWVzKTtcbiAgYWRkUm91dGUob3B0aW9ucyk7XG59O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQge2NhY2hlTmFtZXN9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9jYWNoZU5hbWVzLm1qcyc7XG5pbXBvcnQge2dldEZyaWVuZGx5VVJMfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvZ2V0RnJpZW5kbHlVUkwubWpzJztcbmltcG9ydCB7bG9nZ2VyfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvbG9nZ2VyLm1qcyc7XG5pbXBvcnQge2dldENhY2hlS2V5Rm9yVVJMfSBmcm9tICcuL2dldENhY2hlS2V5Rm9yVVJMLm1qcyc7XG5pbXBvcnQgJy4uL192ZXJzaW9uLm1qcyc7XG5cblxuLyoqXG4gKiBBZGRzIGEgYGZldGNoYCBsaXN0ZW5lciB0byB0aGUgc2VydmljZSB3b3JrZXIgdGhhdCB3aWxsXG4gKiByZXNwb25kIHRvXG4gKiBbbmV0d29yayByZXF1ZXN0c117QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1NlcnZpY2VfV29ya2VyX0FQSS9Vc2luZ19TZXJ2aWNlX1dvcmtlcnMjQ3VzdG9tX3Jlc3BvbnNlc190b19yZXF1ZXN0c31cbiAqIHdpdGggcHJlY2FjaGVkIGFzc2V0cy5cbiAqXG4gKiBSZXF1ZXN0cyBmb3IgYXNzZXRzIHRoYXQgYXJlbid0IHByZWNhY2hlZCwgdGhlIGBGZXRjaEV2ZW50YCB3aWxsIG5vdCBiZVxuICogcmVzcG9uZGVkIHRvLCBhbGxvd2luZyB0aGUgZXZlbnQgdG8gZmFsbCB0aHJvdWdoIHRvIG90aGVyIGBmZXRjaGAgZXZlbnRcbiAqIGxpc3RlbmVycy5cbiAqXG4gKiBOT1RFOiB3aGVuIGNhbGxlZCBtb3JlIHRoYW4gb25jZSB0aGlzIG1ldGhvZCB3aWxsIHJlcGxhY2UgdGhlIHByZXZpb3VzbHkgc2V0XG4gKiBjb25maWd1cmF0aW9uIG9wdGlvbnMuIENhbGxpbmcgaXQgbW9yZSB0aGFuIG9uY2UgaXMgbm90IHJlY29tbWVuZGVkIG91dHNpZGVcbiAqIG9mIHRlc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmRpcmVjdG9yeUluZGV4PWluZGV4Lmh0bWxdIFRoZSBgZGlyZWN0b3J5SW5kZXhgIHdpbGxcbiAqIGNoZWNrIGNhY2hlIGVudHJpZXMgZm9yIGEgVVJMcyBlbmRpbmcgd2l0aCAnLycgdG8gc2VlIGlmIHRoZXJlIGlzIGEgaGl0IHdoZW5cbiAqIGFwcGVuZGluZyB0aGUgYGRpcmVjdG9yeUluZGV4YCB2YWx1ZS5cbiAqIEBwYXJhbSB7QXJyYXk8UmVnRXhwPn0gW29wdGlvbnMuaWdub3JlVVJMUGFyYW1ldGVyc01hdGNoaW5nPVsvXnV0bV8vXV0gQW5cbiAqIGFycmF5IG9mIHJlZ2V4J3MgdG8gcmVtb3ZlIHNlYXJjaCBwYXJhbXMgd2hlbiBsb29raW5nIGZvciBhIGNhY2hlIG1hdGNoLlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5jbGVhblVSTHM9dHJ1ZV0gVGhlIGBjbGVhblVSTHNgIG9wdGlvbiB3aWxsXG4gKiBjaGVjayB0aGUgY2FjaGUgZm9yIHRoZSBVUkwgd2l0aCBhIGAuaHRtbGAgYWRkZWQgdG8gdGhlIGVuZCBvZiB0aGUgZW5kLlxuICogQHBhcmFtIHt3b3JrYm94LnByZWNhY2hpbmd+dXJsTWFuaXB1bGF0aW9ufSBbb3B0aW9ucy51cmxNYW5pcHVsYXRpb25dXG4gKiBUaGlzIGlzIGEgZnVuY3Rpb24gdGhhdCBzaG91bGQgdGFrZSBhIFVSTCBhbmQgcmV0dXJuIGFuIGFycmF5IG9mXG4gKiBhbHRlcm5hdGl2ZSBVUkwncyB0aGF0IHNob3VsZCBiZSBjaGVja2VkIGZvciBwcmVjYWNoZSBtYXRjaGVzLlxuICovXG5leHBvcnQgY29uc3QgYWRkRmV0Y2hMaXN0ZW5lciA9ICh7XG4gIGlnbm9yZVVSTFBhcmFtZXRlcnNNYXRjaGluZyA9IFsvXnV0bV8vXSxcbiAgZGlyZWN0b3J5SW5kZXggPSAnaW5kZXguaHRtbCcsXG4gIGNsZWFuVVJMcyA9IHRydWUsXG4gIHVybE1hbmlwdWxhdGlvbiA9IG51bGwsXG59ID0ge30pID0+IHtcbiAgY29uc3QgY2FjaGVOYW1lID0gY2FjaGVOYW1lcy5nZXRQcmVjYWNoZU5hbWUoKTtcblxuICBhZGRFdmVudExpc3RlbmVyKCdmZXRjaCcsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IHByZWNhY2hlZFVSTCA9IGdldENhY2hlS2V5Rm9yVVJMKGV2ZW50LnJlcXVlc3QudXJsLCB7XG4gICAgICBjbGVhblVSTHMsXG4gICAgICBkaXJlY3RvcnlJbmRleCxcbiAgICAgIGlnbm9yZVVSTFBhcmFtZXRlcnNNYXRjaGluZyxcbiAgICAgIHVybE1hbmlwdWxhdGlvbixcbiAgICB9KTtcbiAgICBpZiAoIXByZWNhY2hlZFVSTCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgbG9nZ2VyLmRlYnVnKGBQcmVjYWNoaW5nIGRpZCBub3QgZmluZCBhIG1hdGNoIGZvciBgICtcbiAgICAgICAgICBnZXRGcmllbmRseVVSTChldmVudC5yZXF1ZXN0LnVybCkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCByZXNwb25zZVByb21pc2UgPSBjYWNoZXMub3BlbihjYWNoZU5hbWUpLnRoZW4oKGNhY2hlKSA9PiB7XG4gICAgICByZXR1cm4gY2FjaGUubWF0Y2gocHJlY2FjaGVkVVJMKTtcbiAgICB9KS50aGVuKChjYWNoZWRSZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKGNhY2hlZFJlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWRSZXNwb25zZTtcbiAgICAgIH1cblxuICAgICAgLy8gRmFsbCBiYWNrIHRvIHRoZSBuZXR3b3JrIGlmIHdlIGRvbid0IGhhdmUgYSBjYWNoZWQgcmVzcG9uc2VcbiAgICAgIC8vIChwZXJoYXBzIGR1ZSB0byBtYW51YWwgY2FjaGUgY2xlYW51cCkuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBsb2dnZXIud2FybihgVGhlIHByZWNhY2hlZCByZXNwb25zZSBmb3IgYCArXG4gICAgICAgIGAke2dldEZyaWVuZGx5VVJMKHByZWNhY2hlZFVSTCl9IGluICR7Y2FjaGVOYW1lfSB3YXMgbm90IGZvdW5kLiBgICtcbiAgICAgICAgYEZhbGxpbmcgYmFjayB0byB0aGUgbmV0d29yayBpbnN0ZWFkLmApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmV0Y2gocHJlY2FjaGVkVVJMKTtcbiAgICB9KTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXNwb25zZVByb21pc2UgPSByZXNwb25zZVByb21pc2UudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgLy8gV29ya2JveCBpcyBnb2luZyB0byBoYW5kbGUgdGhlIHJvdXRlLlxuICAgICAgICAvLyBwcmludCB0aGUgcm91dGluZyBkZXRhaWxzIHRvIHRoZSBjb25zb2xlLlxuICAgICAgICBsb2dnZXIuZ3JvdXBDb2xsYXBzZWQoYFByZWNhY2hpbmcgaXMgcmVzcG9uZGluZyB0bzogYCArXG4gICAgICAgICAgZ2V0RnJpZW5kbHlVUkwoZXZlbnQucmVxdWVzdC51cmwpKTtcbiAgICAgICAgbG9nZ2VyLmxvZyhgU2VydmluZyB0aGUgcHJlY2FjaGVkIHVybDogJHtwcmVjYWNoZWRVUkx9YCk7XG5cbiAgICAgICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKGBWaWV3IHJlcXVlc3QgZGV0YWlscyBoZXJlLmApO1xuICAgICAgICBsb2dnZXIubG9nKGV2ZW50LnJlcXVlc3QpO1xuICAgICAgICBsb2dnZXIuZ3JvdXBFbmQoKTtcblxuICAgICAgICBsb2dnZXIuZ3JvdXBDb2xsYXBzZWQoYFZpZXcgcmVzcG9uc2UgZGV0YWlscyBoZXJlLmApO1xuICAgICAgICBsb2dnZXIubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgbG9nZ2VyLmdyb3VwRW5kKCk7XG5cbiAgICAgICAgbG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGV2ZW50LnJlc3BvbmRXaXRoKHJlc3BvbnNlUHJvbWlzZSk7XG4gIH0pO1xufTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0ICcuLi9fdmVyc2lvbi5tanMnO1xuXG4vKipcbiAqIEBwYXJhbSB7UmVzcG9uc2V9IHJlc3BvbnNlXG4gKiBAcmV0dXJuIHtSZXNwb25zZX1cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG1lbWJlcm9mIG1vZHVsZTp3b3JrYm94LXByZWNhY2hpbmdcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNsZWFuUmVkaXJlY3QocmVzcG9uc2UpIHtcbiAgY29uc3QgY2xvbmVkUmVzcG9uc2UgPSByZXNwb25zZS5jbG9uZSgpO1xuXG4gIC8vIE5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCB0aGUgUmVzcG9uc2UuYm9keSBzdHJlYW0sIHNvIGZhbGwgYmFja1xuICAvLyB0byByZWFkaW5nIHRoZSBlbnRpcmUgYm9keSBpbnRvIG1lbW9yeSBhcyBhIGJsb2IuXG4gIGNvbnN0IGJvZHlQcm9taXNlID0gJ2JvZHknIGluIGNsb25lZFJlc3BvbnNlID9cbiAgICBQcm9taXNlLnJlc29sdmUoY2xvbmVkUmVzcG9uc2UuYm9keSkgOlxuICAgIGNsb25lZFJlc3BvbnNlLmJsb2IoKTtcblxuICBjb25zdCBib2R5ID0gYXdhaXQgYm9keVByb21pc2U7XG5cbiAgLy8gbmV3IFJlc3BvbnNlKCkgaXMgaGFwcHkgd2hlbiBwYXNzZWQgZWl0aGVyIGEgc3RyZWFtIG9yIGEgQmxvYi5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShib2R5LCB7XG4gICAgaGVhZGVyczogY2xvbmVkUmVzcG9uc2UuaGVhZGVycyxcbiAgICBzdGF0dXM6IGNsb25lZFJlc3BvbnNlLnN0YXR1cyxcbiAgICBzdGF0dXNUZXh0OiBjbG9uZWRSZXNwb25zZS5zdGF0dXNUZXh0LFxuICB9KTtcbn1cbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0IHtXb3JrYm94RXJyb3J9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9Xb3JrYm94RXJyb3IubWpzJztcblxuaW1wb3J0ICcuLi9fdmVyc2lvbi5tanMnO1xuXG4vLyBOYW1lIG9mIHRoZSBzZWFyY2ggcGFyYW1ldGVyIHVzZWQgdG8gc3RvcmUgcmV2aXNpb24gaW5mby5cbmNvbnN0IFJFVklTSU9OX1NFQVJDSF9QQVJBTSA9ICdfX1dCX1JFVklTSU9OX18nO1xuXG4vKipcbiAqIENvbnZlcnRzIGEgbWFuaWZlc3QgZW50cnkgaW50byBhIHZlcnNpb25lZCBVUkwgc3VpdGFibGUgZm9yIHByZWNhY2hpbmcuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGVudHJ5XG4gKiBAcmV0dXJuIHtzdHJpbmd9IEEgVVJMIHdpdGggdmVyc2lvbmluZyBpbmZvLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtcHJlY2FjaGluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2FjaGVLZXkoZW50cnkpIHtcbiAgaWYgKCFlbnRyeSkge1xuICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ2FkZC10by1jYWNoZS1saXN0LXVuZXhwZWN0ZWQtdHlwZScsIHtlbnRyeX0pO1xuICB9XG5cbiAgLy8gSWYgYSBwcmVjYWNoZSBtYW5pZmVzdCBlbnRyeSBpcyBhIHN0cmluZywgaXQncyBhc3N1bWVkIHRvIGJlIGEgdmVyc2lvbmVkXG4gIC8vIFVSTCwgbGlrZSAnL2FwcC5hYmNkMTIzNC5qcycuIFJldHVybiBhcy1pcy5cbiAgaWYgKHR5cGVvZiBlbnRyeSA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25zdCB1cmxPYmplY3QgPSBuZXcgVVJMKGVudHJ5LCBsb2NhdGlvbik7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNhY2hlS2V5OiB1cmxPYmplY3QuaHJlZixcbiAgICAgIHVybDogdXJsT2JqZWN0LmhyZWYsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IHtyZXZpc2lvbiwgdXJsfSA9IGVudHJ5O1xuICBpZiAoIXVybCkge1xuICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ2FkZC10by1jYWNoZS1saXN0LXVuZXhwZWN0ZWQtdHlwZScsIHtlbnRyeX0pO1xuICB9XG5cbiAgLy8gSWYgdGhlcmUncyBqdXN0IGEgVVJMIGFuZCBubyByZXZpc2lvbiwgdGhlbiBpdCdzIGFsc28gYXNzdW1lZCB0byBiZSBhXG4gIC8vIHZlcnNpb25lZCBVUkwuXG4gIGlmICghcmV2aXNpb24pIHtcbiAgICBjb25zdCB1cmxPYmplY3QgPSBuZXcgVVJMKHVybCwgbG9jYXRpb24pO1xuICAgIHJldHVybiB7XG4gICAgICBjYWNoZUtleTogdXJsT2JqZWN0LmhyZWYsXG4gICAgICB1cmw6IHVybE9iamVjdC5ocmVmLFxuICAgIH07XG4gIH1cblxuICAvLyBPdGhlcndpc2UsIGNvbnN0cnVjdCBhIHByb3Blcmx5IHZlcnNpb25lZCBVUkwgdXNpbmcgdGhlIGN1c3RvbSBXb3JrYm94XG4gIC8vIHNlYXJjaCBwYXJhbWV0ZXIgYWxvbmcgd2l0aCB0aGUgcmV2aXNpb24gaW5mby5cbiAgY29uc3Qgb3JpZ2luYWxVUkwgPSBuZXcgVVJMKHVybCwgbG9jYXRpb24pO1xuICBjb25zdCBjYWNoZUtleVVSTCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbik7XG4gIGNhY2hlS2V5VVJMLnNlYXJjaFBhcmFtcy5zZXQoUkVWSVNJT05fU0VBUkNIX1BBUkFNLCByZXZpc2lvbik7XG4gIHJldHVybiB7XG4gICAgY2FjaGVLZXk6IGNhY2hlS2V5VVJMLmhyZWYsXG4gICAgdXJsOiBvcmlnaW5hbFVSTC5ocmVmLFxuICB9O1xufVxuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQgJy4uL192ZXJzaW9uLm1qcyc7XG5cbmNvbnN0IFNVQlNUUklOR19UT19GSU5EID0gJy1wcmVjYWNoZS0nO1xuXG4vKipcbiAqIENsZWFucyB1cCBpbmNvbXBhdGlibGUgcHJlY2FjaGVzIHRoYXQgd2VyZSBjcmVhdGVkIGJ5IG9sZGVyIHZlcnNpb25zIG9mXG4gKiBXb3JrYm94LCBieSBhIHNlcnZpY2Ugd29ya2VyIHJlZ2lzdGVyZWQgdW5kZXIgdGhlIGN1cnJlbnQgc2NvcGUuXG4gKlxuICogVGhpcyBpcyBtZWFudCB0byBiZSBjYWxsZWQgYXMgcGFydCBvZiB0aGUgYGFjdGl2YXRlYCBldmVudC5cbiAqXG4gKiBUaGlzIHNob3VsZCBiZSBzYWZlIHRvIHVzZSBhcyBsb25nIGFzIHlvdSBkb24ndCBpbmNsdWRlIGBzdWJzdHJpbmdUb0ZpbmRgXG4gKiAoZGVmYXVsdGluZyB0byBgLXByZWNhY2hlLWApIGluIHlvdXIgbm9uLXByZWNhY2hlIGNhY2hlIG5hbWVzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjdXJyZW50UHJlY2FjaGVOYW1lIFRoZSBjYWNoZSBuYW1lIGN1cnJlbnRseSBpbiB1c2UgZm9yXG4gKiBwcmVjYWNoaW5nLiBUaGlzIGNhY2hlIHdvbid0IGJlIGRlbGV0ZWQuXG4gKiBAcGFyYW0ge3N0cmluZ30gW3N1YnN0cmluZ1RvRmluZD0nLXByZWNhY2hlLSddIENhY2hlIG5hbWVzIHdoaWNoIGluY2x1ZGUgdGhpc1xuICogc3Vic3RyaW5nIHdpbGwgYmUgZGVsZXRlZCAoZXhjbHVkaW5nIGBjdXJyZW50UHJlY2FjaGVOYW1lYCkuXG4gKiBAcmV0dXJuIHtBcnJheTxzdHJpbmc+fSBBIGxpc3Qgb2YgYWxsIHRoZSBjYWNoZSBuYW1lcyB0aGF0IHdlcmUgZGVsZXRlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG1lbWJlcm9mIG1vZHVsZTp3b3JrYm94LXByZWNhY2hpbmdcbiAqL1xuY29uc3QgZGVsZXRlT3V0ZGF0ZWRDYWNoZXMgPSBhc3luYyAoXG4gIGN1cnJlbnRQcmVjYWNoZU5hbWUsXG4gIHN1YnN0cmluZ1RvRmluZCA9IFNVQlNUUklOR19UT19GSU5EKSA9PiB7XG4gIGNvbnN0IGNhY2hlTmFtZXMgPSBhd2FpdCBjYWNoZXMua2V5cygpO1xuXG4gIGNvbnN0IGNhY2hlTmFtZXNUb0RlbGV0ZSA9IGNhY2hlTmFtZXMuZmlsdGVyKChjYWNoZU5hbWUpID0+IHtcbiAgICByZXR1cm4gY2FjaGVOYW1lLmluY2x1ZGVzKHN1YnN0cmluZ1RvRmluZCkgJiZcbiAgICAgICAgICAgY2FjaGVOYW1lLmluY2x1ZGVzKHNlbGYucmVnaXN0cmF0aW9uLnNjb3BlKSAmJlxuICAgICAgICAgICBjYWNoZU5hbWUgIT09IGN1cnJlbnRQcmVjYWNoZU5hbWU7XG4gIH0pO1xuXG4gIGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgY2FjaGVOYW1lc1RvRGVsZXRlLm1hcCgoY2FjaGVOYW1lKSA9PiBjYWNoZXMuZGVsZXRlKGNhY2hlTmFtZSkpKTtcblxuICByZXR1cm4gY2FjaGVOYW1lc1RvRGVsZXRlO1xufTtcblxuZXhwb3J0IHtkZWxldGVPdXRkYXRlZENhY2hlc307XG5cbiIsIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0IHtyZW1vdmVJZ25vcmVkU2VhcmNoUGFyYW1zfSBmcm9tICcuL3JlbW92ZUlnbm9yZWRTZWFyY2hQYXJhbXMubWpzJztcblxuaW1wb3J0ICcuLi9fdmVyc2lvbi5tanMnO1xuXG4vKipcbiAqIEdlbmVyYXRvciBmdW5jdGlvbiB0aGF0IHlpZWxkcyBwb3NzaWJsZSB2YXJpYXRpb25zIG9uIHRoZSBvcmlnaW5hbCBVUkwgdG9cbiAqIGNoZWNrLCBvbmUgYXQgYSB0aW1lLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKlxuICogQHByaXZhdGVcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d29ya2JveC1wcmVjYWNoaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiogZ2VuZXJhdGVVUkxWYXJpYXRpb25zKHVybCwge1xuICBpZ25vcmVVUkxQYXJhbWV0ZXJzTWF0Y2hpbmcsXG4gIGRpcmVjdG9yeUluZGV4LFxuICBjbGVhblVSTHMsXG4gIHVybE1hbmlwdWxhdGlvbixcbn0gPSB7fSkge1xuICBjb25zdCB1cmxPYmplY3QgPSBuZXcgVVJMKHVybCwgbG9jYXRpb24pO1xuICB1cmxPYmplY3QuaGFzaCA9ICcnO1xuICB5aWVsZCB1cmxPYmplY3QuaHJlZjtcblxuICBjb25zdCB1cmxXaXRob3V0SWdub3JlZFBhcmFtcyA9IHJlbW92ZUlnbm9yZWRTZWFyY2hQYXJhbXMoXG4gICAgICB1cmxPYmplY3QsIGlnbm9yZVVSTFBhcmFtZXRlcnNNYXRjaGluZyk7XG4gIHlpZWxkIHVybFdpdGhvdXRJZ25vcmVkUGFyYW1zLmhyZWY7XG5cbiAgaWYgKGRpcmVjdG9yeUluZGV4ICYmIHVybFdpdGhvdXRJZ25vcmVkUGFyYW1zLnBhdGhuYW1lLmVuZHNXaXRoKCcvJykpIHtcbiAgICBjb25zdCBkaXJlY3RvcnlVUkwgPSBuZXcgVVJMKHVybFdpdGhvdXRJZ25vcmVkUGFyYW1zKTtcbiAgICBkaXJlY3RvcnlVUkwucGF0aG5hbWUgKz0gZGlyZWN0b3J5SW5kZXg7XG4gICAgeWllbGQgZGlyZWN0b3J5VVJMLmhyZWY7XG4gIH1cblxuICBpZiAoY2xlYW5VUkxzKSB7XG4gICAgY29uc3QgY2xlYW5VUkwgPSBuZXcgVVJMKHVybFdpdGhvdXRJZ25vcmVkUGFyYW1zKTtcbiAgICBjbGVhblVSTC5wYXRobmFtZSArPSAnLmh0bWwnO1xuICAgIHlpZWxkIGNsZWFuVVJMLmhyZWY7XG4gIH1cblxuICBpZiAodXJsTWFuaXB1bGF0aW9uKSB7XG4gICAgY29uc3QgYWRkaXRpb25hbFVSTHMgPSB1cmxNYW5pcHVsYXRpb24oe3VybDogdXJsT2JqZWN0fSk7XG4gICAgZm9yIChjb25zdCB1cmxUb0F0dGVtcHQgb2YgYWRkaXRpb25hbFVSTHMpIHtcbiAgICAgIHlpZWxkIHVybFRvQXR0ZW1wdC5ocmVmO1xuICAgIH1cbiAgfVxufVxuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQge2dldE9yQ3JlYXRlUHJlY2FjaGVDb250cm9sbGVyfVxuICBmcm9tICcuL2dldE9yQ3JlYXRlUHJlY2FjaGVDb250cm9sbGVyLm1qcyc7XG5pbXBvcnQge2dlbmVyYXRlVVJMVmFyaWF0aW9uc30gZnJvbSAnLi9nZW5lcmF0ZVVSTFZhcmlhdGlvbnMubWpzJztcbmltcG9ydCAnLi4vX3ZlcnNpb24ubWpzJztcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIHdpbGwgdGFrZSB0aGUgcmVxdWVzdCBVUkwgYW5kIG1hbmlwdWxhdGUgaXQgYmFzZWQgb24gdGhlXG4gKiBjb25maWd1cmF0aW9uIG9wdGlvbnMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge3N0cmluZ30gUmV0dXJucyB0aGUgVVJMIGluIHRoZSBjYWNoZSB0aGF0IG1hdGNoZXMgdGhlIHJlcXVlc3QsXG4gKiBpZiBwb3NzaWJsZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgY29uc3QgZ2V0Q2FjaGVLZXlGb3JVUkwgPSAodXJsLCBvcHRpb25zKSA9PiB7XG4gIGNvbnN0IHByZWNhY2hlQ29udHJvbGxlciA9IGdldE9yQ3JlYXRlUHJlY2FjaGVDb250cm9sbGVyKCk7XG5cbiAgY29uc3QgdXJsc1RvQ2FjaGVLZXlzID0gcHJlY2FjaGVDb250cm9sbGVyLmdldFVSTHNUb0NhY2hlS2V5cygpO1xuICBmb3IgKGNvbnN0IHBvc3NpYmxlVVJMIG9mIGdlbmVyYXRlVVJMVmFyaWF0aW9ucyh1cmwsIG9wdGlvbnMpKSB7XG4gICAgY29uc3QgcG9zc2libGVDYWNoZUtleSA9IHVybHNUb0NhY2hlS2V5cy5nZXQocG9zc2libGVVUkwpO1xuICAgIGlmIChwb3NzaWJsZUNhY2hlS2V5KSB7XG4gICAgICByZXR1cm4gcG9zc2libGVDYWNoZUtleTtcbiAgICB9XG4gIH1cbn07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCB7UHJlY2FjaGVDb250cm9sbGVyfSBmcm9tICcuLi9QcmVjYWNoZUNvbnRyb2xsZXIubWpzJztcbmltcG9ydCAnLi4vX3ZlcnNpb24ubWpzJztcblxuXG5sZXQgcHJlY2FjaGVDb250cm9sbGVyO1xuXG4vKipcbiAqIEByZXR1cm4ge1ByZWNhY2hlQ29udHJvbGxlcn1cbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRPckNyZWF0ZVByZWNhY2hlQ29udHJvbGxlciA9ICgpID0+IHtcbiAgaWYgKCFwcmVjYWNoZUNvbnRyb2xsZXIpIHtcbiAgICBwcmVjYWNoZUNvbnRyb2xsZXIgPSBuZXcgUHJlY2FjaGVDb250cm9sbGVyKCk7XG4gIH1cbiAgcmV0dXJuIHByZWNhY2hlQ29udHJvbGxlcjtcbn07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCAnLi4vX3ZlcnNpb24ubWpzJztcblxuXG5jb25zdCBwbHVnaW5zID0gW107XG5cbmV4cG9ydCBjb25zdCBwcmVjYWNoZVBsdWdpbnMgPSB7XG4gIC8qXG4gICAqIEByZXR1cm4ge0FycmF5fVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0KCkge1xuICAgIHJldHVybiBwbHVnaW5zO1xuICB9LFxuXG4gIC8qXG4gICAqIEBwYXJhbSB7QXJyYXl9IG5ld1BsdWdpbnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGFkZChuZXdQbHVnaW5zKSB7XG4gICAgcGx1Z2lucy5wdXNoKC4uLm5ld1BsdWdpbnMpO1xuICB9LFxufTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0IHtsb2dnZXJ9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIubWpzJztcblxuaW1wb3J0ICcuLi9fdmVyc2lvbi5tanMnO1xuXG5jb25zdCBsb2dHcm91cCA9IChncm91cFRpdGxlLCBkZWxldGVkVVJMcykgPT4ge1xuICBsb2dnZXIuZ3JvdXBDb2xsYXBzZWQoZ3JvdXBUaXRsZSk7XG5cbiAgZm9yIChjb25zdCB1cmwgb2YgZGVsZXRlZFVSTHMpIHtcbiAgICBsb2dnZXIubG9nKHVybCk7XG4gIH1cblxuICBsb2dnZXIuZ3JvdXBFbmQoKTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBkZWxldGVkVVJMc1xuICpcbiAqIEBwcml2YXRlXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtcHJlY2FjaGluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRDbGVhbnVwRGV0YWlscyhkZWxldGVkVVJMcykge1xuICBjb25zdCBkZWxldGlvbkNvdW50ID0gZGVsZXRlZFVSTHMubGVuZ3RoO1xuICBpZiAoZGVsZXRpb25Db3VudCA+IDApIHtcbiAgICBsb2dnZXIuZ3JvdXBDb2xsYXBzZWQoYER1cmluZyBwcmVjYWNoaW5nIGNsZWFudXAsIGAgK1xuICAgICAgICBgJHtkZWxldGlvbkNvdW50fSBjYWNoZWQgYCArXG4gICAgICAgIGByZXF1ZXN0JHtkZWxldGlvbkNvdW50ID09PSAxID8gJyB3YXMnIDogJ3Mgd2VyZSd9IGRlbGV0ZWQuYCk7XG4gICAgbG9nR3JvdXAoJ0RlbGV0ZWQgQ2FjaGUgUmVxdWVzdHMnLCBkZWxldGVkVVJMcyk7XG4gICAgbG9nZ2VyLmdyb3VwRW5kKCk7XG4gIH1cbn1cbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0IHtsb2dnZXJ9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIubWpzJztcblxuaW1wb3J0ICcuLi9fdmVyc2lvbi5tanMnO1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBncm91cFRpdGxlXG4gKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IHVybHNcbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBfbmVzdGVkR3JvdXAoZ3JvdXBUaXRsZSwgdXJscykge1xuICBpZiAodXJscy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBsb2dnZXIuZ3JvdXBDb2xsYXBzZWQoZ3JvdXBUaXRsZSk7XG5cbiAgZm9yIChjb25zdCB1cmwgb2YgdXJscykge1xuICAgIGxvZ2dlci5sb2codXJsKTtcbiAgfVxuXG4gIGxvZ2dlci5ncm91cEVuZCgpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gdXJsc1RvUHJlY2FjaGVcbiAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gdXJsc0FscmVhZHlQcmVjYWNoZWRcbiAqXG4gKiBAcHJpdmF0ZVxuICogQG1lbWJlcm9mIG1vZHVsZTp3b3JrYm94LXByZWNhY2hpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByaW50SW5zdGFsbERldGFpbHModXJsc1RvUHJlY2FjaGUsIHVybHNBbHJlYWR5UHJlY2FjaGVkKSB7XG4gIGNvbnN0IHByZWNhY2hlZENvdW50ID0gdXJsc1RvUHJlY2FjaGUubGVuZ3RoO1xuICBjb25zdCBhbHJlYWR5UHJlY2FjaGVkQ291bnQgPSB1cmxzQWxyZWFkeVByZWNhY2hlZC5sZW5ndGg7XG5cbiAgaWYgKHByZWNhY2hlZENvdW50IHx8IGFscmVhZHlQcmVjYWNoZWRDb3VudCkge1xuICAgIGxldCBtZXNzYWdlID1cbiAgICAgICAgYFByZWNhY2hpbmcgJHtwcmVjYWNoZWRDb3VudH0gZmlsZSR7cHJlY2FjaGVkQ291bnQgPT09IDEgPyAnJyA6ICdzJ30uYDtcblxuICAgIGlmIChhbHJlYWR5UHJlY2FjaGVkQ291bnQgPiAwKSB7XG4gICAgICBtZXNzYWdlICs9IGAgJHthbHJlYWR5UHJlY2FjaGVkQ291bnR9IGAgK1xuICAgICAgICBgZmlsZSR7YWxyZWFkeVByZWNhY2hlZENvdW50ID09PSAxID8gJyBpcycgOiAncyBhcmUnfSBhbHJlYWR5IGNhY2hlZC5gO1xuICAgIH1cblxuICAgIGxvZ2dlci5ncm91cENvbGxhcHNlZChtZXNzYWdlKTtcblxuICAgIF9uZXN0ZWRHcm91cChgVmlldyBuZXdseSBwcmVjYWNoZWQgVVJMcy5gLCB1cmxzVG9QcmVjYWNoZSk7XG4gICAgX25lc3RlZEdyb3VwKGBWaWV3IHByZXZpb3VzbHkgcHJlY2FjaGVkIFVSTHMuYCwgdXJsc0FscmVhZHlQcmVjYWNoZWQpO1xuICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuICB9XG59XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCAnLi4vX3ZlcnNpb24ubWpzJztcblxuLyoqXG4gKiBSZW1vdmVzIGFueSBVUkwgc2VhcmNoIHBhcmFtZXRlcnMgdGhhdCBzaG91bGQgYmUgaWdub3JlZC5cbiAqXG4gKiBAcGFyYW0ge1VSTH0gdXJsT2JqZWN0IFRoZSBvcmlnaW5hbCBVUkwuXG4gKiBAcGFyYW0ge0FycmF5PFJlZ0V4cD59IGlnbm9yZVVSTFBhcmFtZXRlcnNNYXRjaGluZyBSZWdFeHBzIHRvIHRlc3QgYWdhaW5zdFxuICogZWFjaCBzZWFyY2ggcGFyYW1ldGVyIG5hbWUuIE1hdGNoZXMgbWVhbiB0aGF0IHRoZSBzZWFyY2ggcGFyYW1ldGVyIHNob3VsZCBiZVxuICogaWdub3JlZC5cbiAqIEByZXR1cm4ge1VSTH0gVGhlIFVSTCB3aXRoIGFueSBpZ25vcmVkIHNlYXJjaCBwYXJhbWV0ZXJzIHJlbW92ZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d29ya2JveC1wcmVjYWNoaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVJZ25vcmVkU2VhcmNoUGFyYW1zKHVybE9iamVjdCxcbiAgICBpZ25vcmVVUkxQYXJhbWV0ZXJzTWF0Y2hpbmcpIHtcbiAgLy8gQ29udmVydCB0aGUgaXRlcmFibGUgaW50byBhbiBhcnJheSBhdCB0aGUgc3RhcnQgb2YgdGhlIGxvb3AgdG8gbWFrZSBzdXJlXG4gIC8vIGRlbGV0aW9uIGRvZXNuJ3QgbWVzcyB1cCBpdGVyYXRpb24uXG4gIGZvciAoY29uc3QgcGFyYW1OYW1lIG9mIFsuLi51cmxPYmplY3Quc2VhcmNoUGFyYW1zLmtleXMoKV0pIHtcbiAgICBpZiAoaWdub3JlVVJMUGFyYW1ldGVyc01hdGNoaW5nLnNvbWUoKHJlZ0V4cCkgPT4gcmVnRXhwLnRlc3QocGFyYW1OYW1lKSkpIHtcbiAgICAgIHVybE9iamVjdC5zZWFyY2hQYXJhbXMuZGVsZXRlKHBhcmFtTmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVybE9iamVjdDtcbn1cbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0IHthc3NlcnR9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9hc3NlcnQubWpzJztcbmltcG9ydCB7bG9nZ2VyfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvbG9nZ2VyLm1qcyc7XG5pbXBvcnQge1JvdXRlfSBmcm9tICcuL1JvdXRlLm1qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24ubWpzJztcblxuLyoqXG4gKiBOYXZpZ2F0aW9uUm91dGUgbWFrZXMgaXQgZWFzeSB0byBjcmVhdGUgYSBbUm91dGVde0BsaW5rXG4gKiB3b3JrYm94LnJvdXRpbmcuUm91dGV9IHRoYXQgbWF0Y2hlcyBmb3IgYnJvd3NlclxuICogW25hdmlnYXRpb24gcmVxdWVzdHNde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi9mdW5kYW1lbnRhbHMvcHJpbWVycy9zZXJ2aWNlLXdvcmtlcnMvaGlnaC1wZXJmb3JtYW5jZS1sb2FkaW5nI2ZpcnN0X3doYXRfYXJlX25hdmlnYXRpb25fcmVxdWVzdHN9LlxuICpcbiAqIEl0IHdpbGwgb25seSBtYXRjaCBpbmNvbWluZyBSZXF1ZXN0cyB3aG9zZVxuICogW2Btb2RlYF17QGxpbmsgaHR0cHM6Ly9mZXRjaC5zcGVjLndoYXR3Zy5vcmcvI2NvbmNlcHQtcmVxdWVzdC1tb2RlfVxuICogaXMgc2V0IHRvIGBuYXZpZ2F0ZWAuXG4gKlxuICogWW91IGNhbiBvcHRpb25hbGx5IG9ubHkgYXBwbHkgdGhpcyByb3V0ZSB0byBhIHN1YnNldCBvZiBuYXZpZ2F0aW9uIHJlcXVlc3RzXG4gKiBieSB1c2luZyBvbmUgb3IgYm90aCBvZiB0aGUgYGJsYWNrbGlzdGAgYW5kIGB3aGl0ZWxpc3RgIHBhcmFtZXRlcnMuXG4gKlxuICogQG1lbWJlcm9mIHdvcmtib3gucm91dGluZ1xuICogQGV4dGVuZHMgd29ya2JveC5yb3V0aW5nLlJvdXRlXG4gKi9cbmNsYXNzIE5hdmlnYXRpb25Sb3V0ZSBleHRlbmRzIFJvdXRlIHtcbiAgLyoqXG4gICAqIElmIGJvdGggYGJsYWNrbGlzdGAgYW5kIGB3aGlsdGVsaXN0YCBhcmUgcHJvdmlkZWQsIHRoZSBgYmxhY2tsaXN0YCB3aWxsXG4gICAqIHRha2UgcHJlY2VkZW5jZSBhbmQgdGhlIHJlcXVlc3Qgd2lsbCBub3QgbWF0Y2ggdGhpcyByb3V0ZS5cbiAgICpcbiAgICogVGhlIHJlZ3VsYXIgZXhwcmVzc2lvbnMgaW4gYHdoaXRlbGlzdGAgYW5kIGBibGFja2xpc3RgXG4gICAqIGFyZSBtYXRjaGVkIGFnYWluc3QgdGhlIGNvbmNhdGVuYXRlZFxuICAgKiBbYHBhdGhuYW1lYF17QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hUTUxIeXBlcmxpbmtFbGVtZW50VXRpbHMvcGF0aG5hbWV9XG4gICAqIGFuZCBbYHNlYXJjaGBde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IVE1MSHlwZXJsaW5rRWxlbWVudFV0aWxzL3NlYXJjaH1cbiAgICogcG9ydGlvbnMgb2YgdGhlIHJlcXVlc3RlZCBVUkwuXG4gICAqXG4gICAqIEBwYXJhbSB7d29ya2JveC5yb3V0aW5nLlJvdXRlfmhhbmRsZXJDYWxsYmFja30gaGFuZGxlciBBIGNhbGxiYWNrXG4gICAqIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIFByb21pc2UgcmVzdWx0aW5nIGluIGEgUmVzcG9uc2UuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAqIEBwYXJhbSB7QXJyYXk8UmVnRXhwPn0gW29wdGlvbnMuYmxhY2tsaXN0XSBJZiBhbnkgb2YgdGhlc2UgcGF0dGVybnMgbWF0Y2gsXG4gICAqIHRoZSByb3V0ZSB3aWxsIG5vdCBoYW5kbGUgdGhlIHJlcXVlc3QgKGV2ZW4gaWYgYSB3aGl0ZWxpc3QgUmVnRXhwIG1hdGNoZXMpLlxuICAgKiBAcGFyYW0ge0FycmF5PFJlZ0V4cD59IFtvcHRpb25zLndoaXRlbGlzdD1bLy4vXV0gSWYgYW55IG9mIHRoZXNlIHBhdHRlcm5zXG4gICAqIG1hdGNoIHRoZSBVUkwncyBwYXRobmFtZSBhbmQgc2VhcmNoIHBhcmFtZXRlciwgdGhlIHJvdXRlIHdpbGwgaGFuZGxlIHRoZVxuICAgKiByZXF1ZXN0IChhc3N1bWluZyB0aGUgYmxhY2tsaXN0IGRvZXNuJ3QgbWF0Y2gpLlxuICAgKi9cbiAgY29uc3RydWN0b3IoaGFuZGxlciwge3doaXRlbGlzdCA9IFsvLi9dLCBibGFja2xpc3QgPSBbXX0gPSB7fSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBhc3NlcnQuaXNBcnJheU9mQ2xhc3Mod2hpdGVsaXN0LCBSZWdFeHAsIHtcbiAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtcm91dGluZycsXG4gICAgICAgIGNsYXNzTmFtZTogJ05hdmlnYXRpb25Sb3V0ZScsXG4gICAgICAgIGZ1bmNOYW1lOiAnY29uc3RydWN0b3InLFxuICAgICAgICBwYXJhbU5hbWU6ICdvcHRpb25zLndoaXRlbGlzdCcsXG4gICAgICB9KTtcbiAgICAgIGFzc2VydC5pc0FycmF5T2ZDbGFzcyhibGFja2xpc3QsIFJlZ0V4cCwge1xuICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1yb3V0aW5nJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnTmF2aWdhdGlvblJvdXRlJyxcbiAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgIHBhcmFtTmFtZTogJ29wdGlvbnMuYmxhY2tsaXN0JyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHN1cGVyKChvcHRpb25zKSA9PiB0aGlzLl9tYXRjaChvcHRpb25zKSwgaGFuZGxlcik7XG5cbiAgICB0aGlzLl93aGl0ZWxpc3QgPSB3aGl0ZWxpc3Q7XG4gICAgdGhpcy5fYmxhY2tsaXN0ID0gYmxhY2tsaXN0O1xuICB9XG5cbiAgLyoqXG4gICAqIFJvdXRlcyBtYXRjaCBoYW5kbGVyLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge1VSTH0gb3B0aW9ucy51cmxcbiAgICogQHBhcmFtIHtSZXF1ZXN0fSBvcHRpb25zLnJlcXVlc3RcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9tYXRjaCh7dXJsLCByZXF1ZXN0fSkge1xuICAgIGlmIChyZXF1ZXN0Lm1vZGUgIT09ICduYXZpZ2F0ZScpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBwYXRobmFtZUFuZFNlYXJjaCA9IHVybC5wYXRobmFtZSArIHVybC5zZWFyY2g7XG5cbiAgICBmb3IgKGNvbnN0IHJlZ0V4cCBvZiB0aGlzLl9ibGFja2xpc3QpIHtcbiAgICAgIGlmIChyZWdFeHAudGVzdChwYXRobmFtZUFuZFNlYXJjaCkpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICBsb2dnZXIubG9nKGBUaGUgbmF2aWdhdGlvbiByb3V0ZSBpcyBub3QgYmVpbmcgdXNlZCwgc2luY2UgdGhlIGAgK1xuICAgICAgICAgICAgICBgVVJMIG1hdGNoZXMgdGhpcyBibGFja2xpc3QgcGF0dGVybjogJHtyZWdFeHB9YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLl93aGl0ZWxpc3Quc29tZSgocmVnRXhwKSA9PiByZWdFeHAudGVzdChwYXRobmFtZUFuZFNlYXJjaCkpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBsb2dnZXIuZGVidWcoYFRoZSBuYXZpZ2F0aW9uIHJvdXRlIGlzIGJlaW5nIHVzZWQuYCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgbG9nZ2VyLmxvZyhgVGhlIG5hdmlnYXRpb24gcm91dGUgaXMgbm90IGJlaW5nIHVzZWQsIHNpbmNlIHRoZSBVUkwgYCArXG4gICAgICAgICAgYGJlaW5nIG5hdmlnYXRlZCB0byBkb2Vzbid0IG1hdGNoIHRoZSB3aGl0ZWxpc3QuYCk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5leHBvcnQge05hdmlnYXRpb25Sb3V0ZX07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCB7YXNzZXJ0fSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvYXNzZXJ0Lm1qcyc7XG5pbXBvcnQge2xvZ2dlcn0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5tanMnO1xuaW1wb3J0IHtSb3V0ZX0gZnJvbSAnLi9Sb3V0ZS5tanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLm1qcyc7XG5cbi8qKlxuICogUmVnRXhwUm91dGUgbWFrZXMgaXQgZWFzeSB0byBjcmVhdGUgYSByZWd1bGFyIGV4cHJlc3Npb24gYmFzZWRcbiAqIFtSb3V0ZV17QGxpbmsgd29ya2JveC5yb3V0aW5nLlJvdXRlfS5cbiAqXG4gKiBGb3Igc2FtZS1vcmlnaW4gcmVxdWVzdHMgdGhlIFJlZ0V4cCBvbmx5IG5lZWRzIHRvIG1hdGNoIHBhcnQgb2YgdGhlIFVSTC4gRm9yXG4gKiByZXF1ZXN0cyBhZ2FpbnN0IHRoaXJkLXBhcnR5IHNlcnZlcnMsIHlvdSBtdXN0IGRlZmluZSBhIFJlZ0V4cCB0aGF0IG1hdGNoZXNcbiAqIHRoZSBzdGFydCBvZiB0aGUgVVJMLlxuICpcbiAqIFtTZWUgdGhlIG1vZHVsZSBkb2NzIGZvciBpbmZvLl17QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL3Rvb2xzL3dvcmtib3gvbW9kdWxlcy93b3JrYm94LXJvdXRpbmd9XG4gKlxuICogQG1lbWJlcm9mIHdvcmtib3gucm91dGluZ1xuICogQGV4dGVuZHMgd29ya2JveC5yb3V0aW5nLlJvdXRlXG4gKi9cbmNsYXNzIFJlZ0V4cFJvdXRlIGV4dGVuZHMgUm91dGUge1xuICAvKipcbiAgICogSWYgdGhlIHJlZ3VsYXJkIGV4cHJlc3Npb24gY29udGFpbnNcbiAgICogW2NhcHR1cmUgZ3JvdXBzXXtAbGluayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9SZWdFeHAjZ3JvdXBpbmctYmFjay1yZWZlcmVuY2VzfSxcbiAgICogdGggZWNhcHR1cmVkIHZhbHVlcyB3aWxsIGJlIHBhc3NlZCB0byB0aGVcbiAgICogW2hhbmRsZXInc117QGxpbmsgd29ya2JveC5yb3V0aW5nLlJvdXRlfmhhbmRsZXJDYWxsYmFja30gYHBhcmFtc2BcbiAgICogYXJndW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVnRXhwfSByZWdFeHAgVGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiB0byBtYXRjaCBhZ2FpbnN0IFVSTHMuXG4gICAqIEBwYXJhbSB7d29ya2JveC5yb3V0aW5nLlJvdXRlfmhhbmRsZXJDYWxsYmFja30gaGFuZGxlciBBIGNhbGxiYWNrXG4gICAqIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIFByb21pc2UgcmVzdWx0aW5nIGluIGEgUmVzcG9uc2UuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbWV0aG9kPSdHRVQnXSBUaGUgSFRUUCBtZXRob2QgdG8gbWF0Y2ggdGhlIFJvdXRlXG4gICAqIGFnYWluc3QuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihyZWdFeHAsIGhhbmRsZXIsIG1ldGhvZCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBhc3NlcnQuaXNJbnN0YW5jZShyZWdFeHAsIFJlZ0V4cCwge1xuICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1yb3V0aW5nJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnUmVnRXhwUm91dGUnLFxuICAgICAgICBmdW5jTmFtZTogJ2NvbnN0cnVjdG9yJyxcbiAgICAgICAgcGFyYW1OYW1lOiAncGF0dGVybicsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBtYXRjaCA9ICh7dXJsfSkgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0ID0gcmVnRXhwLmV4ZWModXJsLmhyZWYpO1xuXG4gICAgICAvLyBSZXR1cm4gbnVsbCBpbW1lZGlhdGVseSBpZiB0aGVyZSdzIG5vIG1hdGNoLlxuICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIC8vIFJlcXVpcmUgdGhhdCB0aGUgbWF0Y2ggc3RhcnQgYXQgdGhlIGZpcnN0IGNoYXJhY3RlciBpbiB0aGUgVVJMIHN0cmluZ1xuICAgICAgLy8gaWYgaXQncyBhIGNyb3NzLW9yaWdpbiByZXF1ZXN0LlxuICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9pc3N1ZXMvMjgxIGZvciB0aGUgY29udGV4dFxuICAgICAgLy8gYmVoaW5kIHRoaXMgYmVoYXZpb3IuXG4gICAgICBpZiAoKHVybC5vcmlnaW4gIT09IGxvY2F0aW9uLm9yaWdpbikgJiYgKHJlc3VsdC5pbmRleCAhPT0gMCkpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICBsb2dnZXIuZGVidWcoXG4gICAgICAgICAgICAgIGBUaGUgcmVndWxhciBleHByZXNzaW9uICcke3JlZ0V4cH0nIG9ubHkgcGFydGlhbGx5IG1hdGNoZWQgYCArXG4gICAgICAgICAgICBgYWdhaW5zdCB0aGUgY3Jvc3Mtb3JpZ2luIFVSTCAnJHt1cmx9Jy4gUmVnRXhwUm91dGUncyB3aWxsIG9ubHkgYCArXG4gICAgICAgICAgICBgaGFuZGxlIGNyb3NzLW9yaWdpbiByZXF1ZXN0cyBpZiB0aGV5IG1hdGNoIHRoZSBlbnRpcmUgVVJMLmBcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHRoZSByb3V0ZSBtYXRjaGVzLCBidXQgdGhlcmUgYXJlbid0IGFueSBjYXB0dXJlIGdyb3VwcyBkZWZpbmVkLCB0aGVuXG4gICAgICAvLyB0aGlzIHdpbGwgcmV0dXJuIFtdLCB3aGljaCBpcyB0cnV0aHkgYW5kIHRoZXJlZm9yZSBzdWZmaWNpZW50IHRvXG4gICAgICAvLyBpbmRpY2F0ZSBhIG1hdGNoLlxuICAgICAgLy8gSWYgdGhlcmUgYXJlIGNhcHR1cmUgZ3JvdXBzLCB0aGVuIGl0IHdpbGwgcmV0dXJuIHRoZWlyIHZhbHVlcy5cbiAgICAgIHJldHVybiByZXN1bHQuc2xpY2UoMSk7XG4gICAgfTtcblxuICAgIHN1cGVyKG1hdGNoLCBoYW5kbGVyLCBtZXRob2QpO1xuICB9XG59XG5cbmV4cG9ydCB7UmVnRXhwUm91dGV9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQge2Fzc2VydH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2Fzc2VydC5tanMnO1xuXG5pbXBvcnQge2RlZmF1bHRNZXRob2QsIHZhbGlkTWV0aG9kc30gZnJvbSAnLi91dGlscy9jb25zdGFudHMubWpzJztcbmltcG9ydCB7bm9ybWFsaXplSGFuZGxlcn0gZnJvbSAnLi91dGlscy9ub3JtYWxpemVIYW5kbGVyLm1qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24ubWpzJztcblxuLyoqXG4gKiBBIGBSb3V0ZWAgY29uc2lzdHMgb2YgYSBwYWlyIG9mIGNhbGxiYWNrIGZ1bmN0aW9ucywgXCJtYXRjaFwiIGFuZCBcImhhbmRsZXJcIi5cbiAqIFRoZSBcIm1hdGNoXCIgY2FsbGJhY2sgZGV0ZXJtaW5lIGlmIGEgcm91dGUgc2hvdWxkIGJlIHVzZWQgdG8gXCJoYW5kbGVcIiBhXG4gKiByZXF1ZXN0IGJ5IHJldHVybmluZyBhIG5vbi1mYWxzeSB2YWx1ZSBpZiBpdCBjYW4uIFRoZSBcImhhbmRsZXJcIiBjYWxsYmFja1xuICogaXMgY2FsbGVkIHdoZW4gdGhlcmUgaXMgYSBtYXRjaCBhbmQgc2hvdWxkIHJldHVybiBhIFByb21pc2UgdGhhdCByZXNvbHZlc1xuICogdG8gYSBgUmVzcG9uc2VgLlxuICpcbiAqIEBtZW1iZXJvZiB3b3JrYm94LnJvdXRpbmdcbiAqL1xuY2xhc3MgUm91dGUge1xuICAvKipcbiAgICogQ29uc3RydWN0b3IgZm9yIFJvdXRlIGNsYXNzLlxuICAgKlxuICAgKiBAcGFyYW0ge3dvcmtib3gucm91dGluZy5Sb3V0ZX5tYXRjaENhbGxiYWNrfSBtYXRjaFxuICAgKiBBIGNhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgZGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSByb3V0ZSBtYXRjaGVzIGEgZ2l2ZW5cbiAgICogYGZldGNoYCBldmVudCBieSByZXR1cm5pbmcgYSBub24tZmFsc3kgdmFsdWUuXG4gICAqIEBwYXJhbSB7d29ya2JveC5yb3V0aW5nLlJvdXRlfmhhbmRsZXJDYWxsYmFja30gaGFuZGxlciBBIGNhbGxiYWNrXG4gICAqIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIFByb21pc2UgcmVzb2x2aW5nIHRvIGEgUmVzcG9uc2UuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbWV0aG9kPSdHRVQnXSBUaGUgSFRUUCBtZXRob2QgdG8gbWF0Y2ggdGhlIFJvdXRlXG4gICAqIGFnYWluc3QuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihtYXRjaCwgaGFuZGxlciwgbWV0aG9kKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGFzc2VydC5pc1R5cGUobWF0Y2gsICdmdW5jdGlvbicsIHtcbiAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtcm91dGluZycsXG4gICAgICAgIGNsYXNzTmFtZTogJ1JvdXRlJyxcbiAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgIHBhcmFtTmFtZTogJ21hdGNoJyxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAobWV0aG9kKSB7XG4gICAgICAgIGFzc2VydC5pc09uZU9mKG1ldGhvZCwgdmFsaWRNZXRob2RzLCB7cGFyYW1OYW1lOiAnbWV0aG9kJ30pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRoZXNlIHZhbHVlcyBhcmUgcmVmZXJlbmNlZCBkaXJlY3RseSBieSBSb3V0ZXIgc28gY2Fubm90IGJlXG4gICAgLy8gYWx0ZXJlZCBieSBtaW5pZmlmaWNhdGlvbi5cbiAgICB0aGlzLmhhbmRsZXIgPSBub3JtYWxpemVIYW5kbGVyKGhhbmRsZXIpO1xuICAgIHRoaXMubWF0Y2ggPSBtYXRjaDtcbiAgICB0aGlzLm1ldGhvZCA9IG1ldGhvZCB8fCBkZWZhdWx0TWV0aG9kO1xuICB9XG59XG5cbmV4cG9ydCB7Um91dGV9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQge2Fzc2VydH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2Fzc2VydC5tanMnO1xuaW1wb3J0IHtsb2dnZXJ9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIubWpzJztcbmltcG9ydCB7V29ya2JveEVycm9yfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvV29ya2JveEVycm9yLm1qcyc7XG5pbXBvcnQge2dldEZyaWVuZGx5VVJMfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvZ2V0RnJpZW5kbHlVUkwubWpzJztcblxuaW1wb3J0IHtub3JtYWxpemVIYW5kbGVyfSBmcm9tICcuL3V0aWxzL25vcm1hbGl6ZUhhbmRsZXIubWpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5tanMnO1xuXG4vKipcbiAqIFRoZSBSb3V0ZXIgY2FuIGJlIHVzZWQgdG8gcHJvY2VzcyBhIEZldGNoRXZlbnQgdGhyb3VnaCBvbmUgb3IgbW9yZVxuICogW1JvdXRlc117QGxpbmsgd29ya2JveC5yb3V0aW5nLlJvdXRlfSByZXNwb25kaW5nICB3aXRoIGEgUmVxdWVzdCBpZlxuICogYSBtYXRjaGluZyByb3V0ZSBleGlzdHMuXG4gKlxuICogSWYgbm8gcm91dGUgbWF0Y2hlcyBhIGdpdmVuIGEgcmVxdWVzdCwgdGhlIFJvdXRlciB3aWxsIHVzZSBhIFwiZGVmYXVsdFwiXG4gKiBoYW5kbGVyIGlmIG9uZSBpcyBkZWZpbmVkLlxuICpcbiAqIFNob3VsZCB0aGUgbWF0Y2hpbmcgUm91dGUgdGhyb3cgYW4gZXJyb3IsIHRoZSBSb3V0ZXIgd2lsbCB1c2UgYSBcImNhdGNoXCJcbiAqIGhhbmRsZXIgaWYgb25lIGlzIGRlZmluZWQgdG8gZ3JhY2VmdWxseSBkZWFsIHdpdGggaXNzdWVzIGFuZCByZXNwb25kIHdpdGggYVxuICogUmVxdWVzdC5cbiAqXG4gKiBJZiBhIHJlcXVlc3QgbWF0Y2hlcyBtdWx0aXBsZSByb3V0ZXMsIHRoZSAqKmVhcmxpZXN0KiogcmVnaXN0ZXJlZCByb3V0ZSB3aWxsXG4gKiBiZSB1c2VkIHRvIHJlc3BvbmQgdG8gdGhlIHJlcXVlc3QuXG4gKlxuICogQG1lbWJlcm9mIHdvcmtib3gucm91dGluZ1xuICovXG5jbGFzcyBSb3V0ZXIge1xuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgYSBuZXcgUm91dGVyLlxuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fcm91dGVzID0gbmV3IE1hcCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge01hcDxzdHJpbmcsIEFycmF5PHdvcmtib3gucm91dGluZy5Sb3V0ZT4+fSByb3V0ZXMgQSBgTWFwYCBvZiBIVFRQXG4gICAqIG1ldGhvZCBuYW1lICgnR0VUJywgZXRjLikgdG8gYW4gYXJyYXkgb2YgYWxsIHRoZSBjb3JyZXNwb25kaW5nIGBSb3V0ZWBcbiAgICogaW5zdGFuY2VzIHRoYXQgYXJlIHJlZ2lzdGVyZWQuXG4gICAqL1xuICBnZXQgcm91dGVzKCkge1xuICAgIHJldHVybiB0aGlzLl9yb3V0ZXM7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGZldGNoIGV2ZW50IGxpc3RlbmVyIHRvIHJlc3BvbmQgdG8gZXZlbnRzIHdoZW4gYSByb3V0ZSBtYXRjaGVzXG4gICAqIHRoZSBldmVudCdzIHJlcXVlc3QuXG4gICAqL1xuICBhZGRGZXRjaExpc3RlbmVyKCkge1xuICAgIHNlbGYuYWRkRXZlbnRMaXN0ZW5lcignZmV0Y2gnLCAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHtyZXF1ZXN0fSA9IGV2ZW50O1xuICAgICAgY29uc3QgcmVzcG9uc2VQcm9taXNlID0gdGhpcy5oYW5kbGVSZXF1ZXN0KHtyZXF1ZXN0LCBldmVudH0pO1xuICAgICAgaWYgKHJlc3BvbnNlUHJvbWlzZSkge1xuICAgICAgICBldmVudC5yZXNwb25kV2l0aChyZXNwb25zZVByb21pc2UpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBtZXNzYWdlIGV2ZW50IGxpc3RlbmVyIGZvciBVUkxzIHRvIGNhY2hlIGZyb20gdGhlIHdpbmRvdy5cbiAgICogVGhpcyBpcyB1c2VmdWwgdG8gY2FjaGUgcmVzb3VyY2VzIGxvYWRlZCBvbiB0aGUgcGFnZSBwcmlvciB0byB3aGVuIHRoZVxuICAgKiBzZXJ2aWNlIHdvcmtlciBzdGFydGVkIGNvbnRyb2xsaW5nIGl0LlxuICAgKlxuICAgKiBUaGUgZm9ybWF0IG9mIHRoZSBtZXNzYWdlIGRhdGEgc2VudCBmcm9tIHRoZSB3aW5kb3cgc2hvdWxkIGJlIGFzIGZvbGxvd3MuXG4gICAqIFdoZXJlIHRoZSBgdXJsc1RvQ2FjaGVgIGFycmF5IG1heSBjb25zaXN0IG9mIFVSTCBzdHJpbmdzIG9yIGFuIGFycmF5IG9mXG4gICAqIFVSTCBzdHJpbmcgKyBgcmVxdWVzdEluaXRgIG9iamVjdCAodGhlIHNhbWUgYXMgeW91J2QgcGFzcyB0byBgZmV0Y2goKWApLlxuICAgKlxuICAgKiBgYGBcbiAgICoge1xuICAgKiAgIHR5cGU6ICdDQUNIRV9VUkxTJyxcbiAgICogICBwYXlsb2FkOiB7XG4gICAqICAgICB1cmxzVG9DYWNoZTogW1xuICAgKiAgICAgICAnLi9zY3JpcHQxLmpzJyxcbiAgICogICAgICAgJy4vc2NyaXB0Mi5qcycsXG4gICAqICAgICAgIFsnLi9zY3JpcHQzLmpzJywge21vZGU6ICduby1jb3JzJ31dLFxuICAgKiAgICAgXSxcbiAgICogICB9LFxuICAgKiB9XG4gICAqIGBgYFxuICAgKi9cbiAgYWRkQ2FjaGVMaXN0ZW5lcigpIHtcbiAgICBzZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5kYXRhICYmIGV2ZW50LmRhdGEudHlwZSA9PT0gJ0NBQ0hFX1VSTFMnKSB7XG4gICAgICAgIGNvbnN0IHtwYXlsb2FkfSA9IGV2ZW50LmRhdGE7XG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICBsb2dnZXIuZGVidWcoYENhY2hpbmcgVVJMcyBmcm9tIHRoZSB3aW5kb3dgLCBwYXlsb2FkLnVybHNUb0NhY2hlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlcXVlc3RQcm9taXNlcyA9IFByb21pc2UuYWxsKHBheWxvYWQudXJsc1RvQ2FjaGUubWFwKChlbnRyeSkgPT4ge1xuICAgICAgICAgIGlmICh0eXBlb2YgZW50cnkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBlbnRyeSA9IFtlbnRyeV07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KC4uLmVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSZXF1ZXN0KHtyZXF1ZXN0fSk7XG4gICAgICAgIH0pKTtcblxuICAgICAgICBldmVudC53YWl0VW50aWwocmVxdWVzdFByb21pc2VzKTtcblxuICAgICAgICAvLyBJZiBhIE1lc3NhZ2VDaGFubmVsIHdhcyB1c2VkLCByZXBseSB0byB0aGUgbWVzc2FnZSBvbiBzdWNjZXNzLlxuICAgICAgICBpZiAoZXZlbnQucG9ydHMgJiYgZXZlbnQucG9ydHNbMF0pIHtcbiAgICAgICAgICBhd2FpdCByZXF1ZXN0UHJvbWlzZXM7XG4gICAgICAgICAgZXZlbnQucG9ydHNbMF0ucG9zdE1lc3NhZ2UodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBseSB0aGUgcm91dGluZyBydWxlcyB0byBhIEZldGNoRXZlbnQgb2JqZWN0IHRvIGdldCBhIFJlc3BvbnNlIGZyb20gYW5cbiAgICogYXBwcm9wcmlhdGUgUm91dGUncyBoYW5kbGVyLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge1JlcXVlc3R9IG9wdGlvbnMucmVxdWVzdCBUaGUgcmVxdWVzdCB0byBoYW5kbGUgKHRoaXMgaXMgdXN1YWxseVxuICAgKiAgICAgZnJvbSBhIGZldGNoIGV2ZW50LCBidXQgaXQgZG9lcyBub3QgaGF2ZSB0byBiZSkuXG4gICAqIEBwYXJhbSB7RmV0Y2hFdmVudH0gW29wdGlvbnMuZXZlbnRdIFRoZSBldmVudCB0aGF0IHRyaWdnZXJlZCB0aGUgcmVxdWVzdCxcbiAgICogICAgIGlmIGFwcGxpY2FibGUuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8UmVzcG9uc2U+fHVuZGVmaW5lZH0gQSBwcm9taXNlIGlzIHJldHVybmVkIGlmIGFcbiAgICogICAgIHJlZ2lzdGVyZWQgcm91dGUgY2FuIGhhbmRsZSB0aGUgcmVxdWVzdC4gSWYgdGhlcmUgaXMgbm8gbWF0Y2hpbmdcbiAgICogICAgIHJvdXRlIGFuZCB0aGVyZSdzIG5vIGBkZWZhdWx0SGFuZGxlcmAsIGB1bmRlZmluZWRgIGlzIHJldHVybmVkLlxuICAgKi9cbiAgaGFuZGxlUmVxdWVzdCh7cmVxdWVzdCwgZXZlbnR9KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGFzc2VydC5pc0luc3RhbmNlKHJlcXVlc3QsIFJlcXVlc3QsIHtcbiAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtcm91dGluZycsXG4gICAgICAgIGNsYXNzTmFtZTogJ1JvdXRlcicsXG4gICAgICAgIGZ1bmNOYW1lOiAnaGFuZGxlUmVxdWVzdCcsXG4gICAgICAgIHBhcmFtTmFtZTogJ29wdGlvbnMucmVxdWVzdCcsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsLCBsb2NhdGlvbik7XG4gICAgaWYgKCF1cmwucHJvdG9jb2wuc3RhcnRzV2l0aCgnaHR0cCcpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBsb2dnZXIuZGVidWcoXG4gICAgICAgICAgICBgV29ya2JveCBSb3V0ZXIgb25seSBzdXBwb3J0cyBVUkxzIHRoYXQgc3RhcnQgd2l0aCAnaHR0cCcuYCk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHtwYXJhbXMsIHJvdXRlfSA9IHRoaXMuZmluZE1hdGNoaW5nUm91dGUoe3VybCwgcmVxdWVzdCwgZXZlbnR9KTtcbiAgICBsZXQgaGFuZGxlciA9IHJvdXRlICYmIHJvdXRlLmhhbmRsZXI7XG5cbiAgICBsZXQgZGVidWdNZXNzYWdlcyA9IFtdO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICBkZWJ1Z01lc3NhZ2VzLnB1c2goW1xuICAgICAgICAgIGBGb3VuZCBhIHJvdXRlIHRvIGhhbmRsZSB0aGlzIHJlcXVlc3Q6YCwgcm91dGUsXG4gICAgICAgIF0pO1xuXG4gICAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgICBkZWJ1Z01lc3NhZ2VzLnB1c2goW1xuICAgICAgICAgICAgYFBhc3NpbmcgdGhlIGZvbGxvd2luZyBwYXJhbXMgdG8gdGhlIHJvdXRlJ3MgaGFuZGxlcjpgLCBwYXJhbXMsXG4gICAgICAgICAgXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJZiB3ZSBkb24ndCBoYXZlIGEgaGFuZGxlciBiZWNhdXNlIHRoZXJlIHdhcyBubyBtYXRjaGluZyByb3V0ZSwgdGhlblxuICAgIC8vIGZhbGwgYmFjayB0byBkZWZhdWx0SGFuZGxlciBpZiB0aGF0J3MgZGVmaW5lZC5cbiAgICBpZiAoIWhhbmRsZXIgJiYgdGhpcy5fZGVmYXVsdEhhbmRsZXIpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGRlYnVnTWVzc2FnZXMucHVzaChgRmFpbGVkIHRvIGZpbmQgYSBtYXRjaGluZyByb3V0ZS4gRmFsbGluZyBgICtcbiAgICAgICAgICBgYmFjayB0byB0aGUgZGVmYXVsdCBoYW5kbGVyLmApO1xuXG4gICAgICAgIC8vIFRoaXMgaXMgdXNlZCBmb3IgZGVidWdnaW5nIGluIGxvZ3MgaW4gdGhlIGNhc2Ugb2YgYW4gZXJyb3IuXG4gICAgICAgIHJvdXRlID0gJ1tEZWZhdWx0IEhhbmRsZXJdJztcbiAgICAgIH1cbiAgICAgIGhhbmRsZXIgPSB0aGlzLl9kZWZhdWx0SGFuZGxlcjtcbiAgICB9XG5cbiAgICBpZiAoIWhhbmRsZXIpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIC8vIE5vIGhhbmRsZXIgc28gV29ya2JveCB3aWxsIGRvIG5vdGhpbmcuIElmIGxvZ3MgaXMgc2V0IG9mIGRlYnVnXG4gICAgICAgIC8vIGkuZS4gdmVyYm9zZSwgd2Ugc2hvdWxkIHByaW50IG91dCB0aGlzIGluZm9ybWF0aW9uLlxuICAgICAgICBsb2dnZXIuZGVidWcoYE5vIHJvdXRlIGZvdW5kIGZvcjogJHtnZXRGcmllbmRseVVSTCh1cmwpfWApO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyBXZSBoYXZlIGEgaGFuZGxlciwgbWVhbmluZyBXb3JrYm94IGlzIGdvaW5nIHRvIGhhbmRsZSB0aGUgcm91dGUuXG4gICAgICAvLyBwcmludCB0aGUgcm91dGluZyBkZXRhaWxzIHRvIHRoZSBjb25zb2xlLlxuICAgICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKGBSb3V0ZXIgaXMgcmVzcG9uZGluZyB0bzogJHtnZXRGcmllbmRseVVSTCh1cmwpfWApO1xuICAgICAgZGVidWdNZXNzYWdlcy5mb3JFYWNoKChtc2cpID0+IHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobXNnKSkge1xuICAgICAgICAgIGxvZ2dlci5sb2coLi4ubXNnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsb2dnZXIubG9nKG1zZyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBUaGUgUmVxdWVzdCBhbmQgUmVzcG9uc2Ugb2JqZWN0cyBjb250YWlucyBhIGdyZWF0IGRlYWwgb2YgaW5mb3JtYXRpb24sXG4gICAgICAvLyBoaWRlIGl0IHVuZGVyIGEgZ3JvdXAgaW4gY2FzZSBkZXZlbG9wZXJzIHdhbnQgdG8gc2VlIGl0LlxuICAgICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKGBWaWV3IHJlcXVlc3QgZGV0YWlscyBoZXJlLmApO1xuICAgICAgbG9nZ2VyLmxvZyhyZXF1ZXN0KTtcbiAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuXG4gICAgICBsb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICB9XG5cbiAgICAvLyBXcmFwIGluIHRyeSBhbmQgY2F0Y2ggaW4gY2FzZSB0aGUgaGFuZGxlIG1ldGhvZCB0aHJvd3MgYSBzeW5jaHJvbm91c1xuICAgIC8vIGVycm9yLiBJdCBzaG91bGQgc3RpbGwgY2FsbGJhY2sgdG8gdGhlIGNhdGNoIGhhbmRsZXIuXG4gICAgbGV0IHJlc3BvbnNlUHJvbWlzZTtcbiAgICB0cnkge1xuICAgICAgcmVzcG9uc2VQcm9taXNlID0gaGFuZGxlci5oYW5kbGUoe3VybCwgcmVxdWVzdCwgZXZlbnQsIHBhcmFtc30pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmVzcG9uc2VQcm9taXNlID0gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICB9XG5cbiAgICBpZiAocmVzcG9uc2VQcm9taXNlICYmIHRoaXMuX2NhdGNoSGFuZGxlcikge1xuICAgICAgcmVzcG9uc2VQcm9taXNlID0gcmVzcG9uc2VQcm9taXNlLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAvLyBTdGlsbCBpbmNsdWRlIFVSTCBoZXJlIGFzIGl0IHdpbGwgYmUgYXN5bmMgZnJvbSB0aGUgY29uc29sZSBncm91cFxuICAgICAgICAgIC8vIGFuZCBtYXkgbm90IG1ha2Ugc2Vuc2Ugd2l0aG91dCB0aGUgVVJMXG4gICAgICAgICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKGBFcnJvciB0aHJvd24gd2hlbiByZXNwb25kaW5nIHRvOiBgICtcbiAgICAgICAgICAgIGAgJHtnZXRGcmllbmRseVVSTCh1cmwpfS4gRmFsbGluZyBiYWNrIHRvIENhdGNoIEhhbmRsZXIuYCk7XG4gICAgICAgICAgbG9nZ2VyLmVycm9yKGBFcnJvciB0aHJvd24gYnk6YCwgcm91dGUpO1xuICAgICAgICAgIGxvZ2dlci5lcnJvcihlcnIpO1xuICAgICAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9jYXRjaEhhbmRsZXIuaGFuZGxlKHt1cmwsIGV2ZW50LCBlcnJ9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiByZXNwb25zZVByb21pc2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGEgcmVxdWVzdCBhbmQgVVJMIChhbmQgb3B0aW9uYWxseSBhbiBldmVudCkgYWdhaW5zdCB0aGUgbGlzdCBvZlxuICAgKiByZWdpc3RlcmVkIHJvdXRlcywgYW5kIGlmIHRoZXJlJ3MgYSBtYXRjaCwgcmV0dXJucyB0aGUgY29ycmVzcG9uZGluZ1xuICAgKiByb3V0ZSBhbG9uZyB3aXRoIGFueSBwYXJhbXMgZ2VuZXJhdGVkIGJ5IHRoZSBtYXRjaC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICogQHBhcmFtIHtVUkx9IG9wdGlvbnMudXJsXG4gICAqIEBwYXJhbSB7UmVxdWVzdH0gb3B0aW9ucy5yZXF1ZXN0IFRoZSByZXF1ZXN0IHRvIG1hdGNoLlxuICAgKiBAcGFyYW0ge0ZldGNoRXZlbnR9IFtvcHRpb25zLmV2ZW50XSBUaGUgY29ycmVzcG9uZGluZyBldmVudCAodW5sZXNzIE4vQSkuXG4gICAqIEByZXR1cm4ge09iamVjdH0gQW4gb2JqZWN0IHdpdGggYHJvdXRlYCBhbmQgYHBhcmFtc2AgcHJvcGVydGllcy5cbiAgICogICAgIFRoZXkgYXJlIHBvcHVsYXRlZCBpZiBhIG1hdGNoaW5nIHJvdXRlIHdhcyBmb3VuZCBvciBgdW5kZWZpbmVkYFxuICAgKiAgICAgb3RoZXJ3aXNlLlxuICAgKi9cbiAgZmluZE1hdGNoaW5nUm91dGUoe3VybCwgcmVxdWVzdCwgZXZlbnR9KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGFzc2VydC5pc0luc3RhbmNlKHVybCwgVVJMLCB7XG4gICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXJvdXRpbmcnLFxuICAgICAgICBjbGFzc05hbWU6ICdSb3V0ZXInLFxuICAgICAgICBmdW5jTmFtZTogJ2ZpbmRNYXRjaGluZ1JvdXRlJyxcbiAgICAgICAgcGFyYW1OYW1lOiAnb3B0aW9ucy51cmwnLFxuICAgICAgfSk7XG4gICAgICBhc3NlcnQuaXNJbnN0YW5jZShyZXF1ZXN0LCBSZXF1ZXN0LCB7XG4gICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXJvdXRpbmcnLFxuICAgICAgICBjbGFzc05hbWU6ICdSb3V0ZXInLFxuICAgICAgICBmdW5jTmFtZTogJ2ZpbmRNYXRjaGluZ1JvdXRlJyxcbiAgICAgICAgcGFyYW1OYW1lOiAnb3B0aW9ucy5yZXF1ZXN0JyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlcyA9IHRoaXMuX3JvdXRlcy5nZXQocmVxdWVzdC5tZXRob2QpIHx8IFtdO1xuICAgIGZvciAoY29uc3Qgcm91dGUgb2Ygcm91dGVzKSB7XG4gICAgICBsZXQgcGFyYW1zO1xuICAgICAgbGV0IG1hdGNoUmVzdWx0ID0gcm91dGUubWF0Y2goe3VybCwgcmVxdWVzdCwgZXZlbnR9KTtcbiAgICAgIGlmIChtYXRjaFJlc3VsdCkge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShtYXRjaFJlc3VsdCkgJiYgbWF0Y2hSZXN1bHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgIC8vIEluc3RlYWQgb2YgcGFzc2luZyBhbiBlbXB0eSBhcnJheSBpbiBhcyBwYXJhbXMsIHVzZSB1bmRlZmluZWQuXG4gICAgICAgICAgcGFyYW1zID0gbWF0Y2hSZXN1bHQ7XG4gICAgICAgIH0gZWxzZSBpZiAoKG1hdGNoUmVzdWx0LmNvbnN0cnVjdG9yID09PSBPYmplY3QgJiZcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKG1hdGNoUmVzdWx0KS5sZW5ndGggPiAwKSkge1xuICAgICAgICAgIC8vIEluc3RlYWQgb2YgcGFzc2luZyBhbiBlbXB0eSBvYmplY3QgaW4gYXMgcGFyYW1zLCB1c2UgdW5kZWZpbmVkLlxuICAgICAgICAgIHBhcmFtcyA9IG1hdGNoUmVzdWx0O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmV0dXJuIGVhcmx5IGlmIGhhdmUgYSBtYXRjaC5cbiAgICAgICAgcmV0dXJuIHtyb3V0ZSwgcGFyYW1zfTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gSWYgbm8gbWF0Y2ggd2FzIGZvdW5kIGFib3ZlLCByZXR1cm4gYW5kIGVtcHR5IG9iamVjdC5cbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lIGEgZGVmYXVsdCBgaGFuZGxlcmAgdGhhdCdzIGNhbGxlZCB3aGVuIG5vIHJvdXRlcyBleHBsaWNpdGx5XG4gICAqIG1hdGNoIHRoZSBpbmNvbWluZyByZXF1ZXN0LlxuICAgKlxuICAgKiBXaXRob3V0IGEgZGVmYXVsdCBoYW5kbGVyLCB1bm1hdGNoZWQgcmVxdWVzdHMgd2lsbCBnbyBhZ2FpbnN0IHRoZVxuICAgKiBuZXR3b3JrIGFzIGlmIHRoZXJlIHdlcmUgbm8gc2VydmljZSB3b3JrZXIgcHJlc2VudC5cbiAgICpcbiAgICogQHBhcmFtIHt3b3JrYm94LnJvdXRpbmcuUm91dGV+aGFuZGxlckNhbGxiYWNrfSBoYW5kbGVyIEEgY2FsbGJhY2tcbiAgICogZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgUHJvbWlzZSByZXN1bHRpbmcgaW4gYSBSZXNwb25zZS5cbiAgICovXG4gIHNldERlZmF1bHRIYW5kbGVyKGhhbmRsZXIpIHtcbiAgICB0aGlzLl9kZWZhdWx0SGFuZGxlciA9IG5vcm1hbGl6ZUhhbmRsZXIoaGFuZGxlcik7XG4gIH1cblxuICAvKipcbiAgICogSWYgYSBSb3V0ZSB0aHJvd3MgYW4gZXJyb3Igd2hpbGUgaGFuZGxpbmcgYSByZXF1ZXN0LCB0aGlzIGBoYW5kbGVyYFxuICAgKiB3aWxsIGJlIGNhbGxlZCBhbmQgZ2l2ZW4gYSBjaGFuY2UgdG8gcHJvdmlkZSBhIHJlc3BvbnNlLlxuICAgKlxuICAgKiBAcGFyYW0ge3dvcmtib3gucm91dGluZy5Sb3V0ZX5oYW5kbGVyQ2FsbGJhY2t9IGhhbmRsZXIgQSBjYWxsYmFja1xuICAgKiBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBQcm9taXNlIHJlc3VsdGluZyBpbiBhIFJlc3BvbnNlLlxuICAgKi9cbiAgc2V0Q2F0Y2hIYW5kbGVyKGhhbmRsZXIpIHtcbiAgICB0aGlzLl9jYXRjaEhhbmRsZXIgPSBub3JtYWxpemVIYW5kbGVyKGhhbmRsZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIHJvdXRlIHdpdGggdGhlIHJvdXRlci5cbiAgICpcbiAgICogQHBhcmFtIHt3b3JrYm94LnJvdXRpbmcuUm91dGV9IHJvdXRlIFRoZSByb3V0ZSB0byByZWdpc3Rlci5cbiAgICovXG4gIHJlZ2lzdGVyUm91dGUocm91dGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgYXNzZXJ0LmlzVHlwZShyb3V0ZSwgJ29iamVjdCcsIHtcbiAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtcm91dGluZycsXG4gICAgICAgIGNsYXNzTmFtZTogJ1JvdXRlcicsXG4gICAgICAgIGZ1bmNOYW1lOiAncmVnaXN0ZXJSb3V0ZScsXG4gICAgICAgIHBhcmFtTmFtZTogJ3JvdXRlJyxcbiAgICAgIH0pO1xuXG4gICAgICBhc3NlcnQuaGFzTWV0aG9kKHJvdXRlLCAnbWF0Y2gnLCB7XG4gICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXJvdXRpbmcnLFxuICAgICAgICBjbGFzc05hbWU6ICdSb3V0ZXInLFxuICAgICAgICBmdW5jTmFtZTogJ3JlZ2lzdGVyUm91dGUnLFxuICAgICAgICBwYXJhbU5hbWU6ICdyb3V0ZScsXG4gICAgICB9KTtcblxuICAgICAgYXNzZXJ0LmlzVHlwZShyb3V0ZS5oYW5kbGVyLCAnb2JqZWN0Jywge1xuICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1yb3V0aW5nJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnUm91dGVyJyxcbiAgICAgICAgZnVuY05hbWU6ICdyZWdpc3RlclJvdXRlJyxcbiAgICAgICAgcGFyYW1OYW1lOiAncm91dGUnLFxuICAgICAgfSk7XG5cbiAgICAgIGFzc2VydC5oYXNNZXRob2Qocm91dGUuaGFuZGxlciwgJ2hhbmRsZScsIHtcbiAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtcm91dGluZycsXG4gICAgICAgIGNsYXNzTmFtZTogJ1JvdXRlcicsXG4gICAgICAgIGZ1bmNOYW1lOiAncmVnaXN0ZXJSb3V0ZScsXG4gICAgICAgIHBhcmFtTmFtZTogJ3JvdXRlLmhhbmRsZXInLFxuICAgICAgfSk7XG5cbiAgICAgIGFzc2VydC5pc1R5cGUocm91dGUubWV0aG9kLCAnc3RyaW5nJywge1xuICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1yb3V0aW5nJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnUm91dGVyJyxcbiAgICAgICAgZnVuY05hbWU6ICdyZWdpc3RlclJvdXRlJyxcbiAgICAgICAgcGFyYW1OYW1lOiAncm91dGUubWV0aG9kJyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fcm91dGVzLmhhcyhyb3V0ZS5tZXRob2QpKSB7XG4gICAgICB0aGlzLl9yb3V0ZXMuc2V0KHJvdXRlLm1ldGhvZCwgW10pO1xuICAgIH1cblxuICAgIC8vIEdpdmUgcHJlY2VkZW5jZSB0byBhbGwgb2YgdGhlIGVhcmxpZXIgcm91dGVzIGJ5IGFkZGluZyB0aGlzIGFkZGl0aW9uYWxcbiAgICAvLyByb3V0ZSB0byB0aGUgZW5kIG9mIHRoZSBhcnJheS5cbiAgICB0aGlzLl9yb3V0ZXMuZ2V0KHJvdXRlLm1ldGhvZCkucHVzaChyb3V0ZSk7XG4gIH1cblxuICAvKipcbiAgICogVW5yZWdpc3RlcnMgYSByb3V0ZSB3aXRoIHRoZSByb3V0ZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7d29ya2JveC5yb3V0aW5nLlJvdXRlfSByb3V0ZSBUaGUgcm91dGUgdG8gdW5yZWdpc3Rlci5cbiAgICovXG4gIHVucmVnaXN0ZXJSb3V0ZShyb3V0ZSkge1xuICAgIGlmICghdGhpcy5fcm91dGVzLmhhcyhyb3V0ZS5tZXRob2QpKSB7XG4gICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKFxuICAgICAgICAgICd1bnJlZ2lzdGVyLXJvdXRlLWJ1dC1ub3QtZm91bmQtd2l0aC1tZXRob2QnLCB7XG4gICAgICAgICAgICBtZXRob2Q6IHJvdXRlLm1ldGhvZCxcbiAgICAgICAgICB9XG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlSW5kZXggPSB0aGlzLl9yb3V0ZXMuZ2V0KHJvdXRlLm1ldGhvZCkuaW5kZXhPZihyb3V0ZSk7XG4gICAgaWYgKHJvdXRlSW5kZXggPiAtMSkge1xuICAgICAgdGhpcy5fcm91dGVzLmdldChyb3V0ZS5tZXRob2QpLnNwbGljZShyb3V0ZUluZGV4LCAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcigndW5yZWdpc3Rlci1yb3V0ZS1yb3V0ZS1ub3QtcmVnaXN0ZXJlZCcpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQge1JvdXRlcn07XG4iLCJ0cnl7c2VsZlsnd29ya2JveDpyb3V0aW5nOjQuMy4xJ10mJl8oKX1jYXRjaChlKXt9Ly8gZXNsaW50LWRpc2FibGUtbGluZSIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0IHthc3NlcnR9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9hc3NlcnQubWpzJztcblxuaW1wb3J0IHtOYXZpZ2F0aW9uUm91dGV9IGZyb20gJy4vTmF2aWdhdGlvblJvdXRlLm1qcyc7XG5pbXBvcnQge1JlZ0V4cFJvdXRlfSBmcm9tICcuL1JlZ0V4cFJvdXRlLm1qcyc7XG5pbXBvcnQge3JlZ2lzdGVyTmF2aWdhdGlvblJvdXRlfSBmcm9tICcuL3JlZ2lzdGVyTmF2aWdhdGlvblJvdXRlLm1qcyc7XG5pbXBvcnQge3JlZ2lzdGVyUm91dGV9IGZyb20gJy4vcmVnaXN0ZXJSb3V0ZS5tanMnO1xuaW1wb3J0IHtSb3V0ZX0gZnJvbSAnLi9Sb3V0ZS5tanMnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJy4vUm91dGVyLm1qcyc7XG5pbXBvcnQge3NldENhdGNoSGFuZGxlcn0gZnJvbSAnLi9zZXRDYXRjaEhhbmRsZXIubWpzJztcbmltcG9ydCB7c2V0RGVmYXVsdEhhbmRsZXJ9IGZyb20gJy4vc2V0RGVmYXVsdEhhbmRsZXIubWpzJztcblxuaW1wb3J0ICcuL192ZXJzaW9uLm1qcyc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIGFzc2VydC5pc1NXRW52KCd3b3JrYm94LXJvdXRpbmcnKTtcbn1cblxuLyoqXG4gKiBAbmFtZXNwYWNlIHdvcmtib3gucm91dGluZ1xuICovXG5cbmV4cG9ydCB7XG4gIE5hdmlnYXRpb25Sb3V0ZSxcbiAgUmVnRXhwUm91dGUsXG4gIHJlZ2lzdGVyTmF2aWdhdGlvblJvdXRlLFxuICByZWdpc3RlclJvdXRlLFxuICBSb3V0ZSxcbiAgUm91dGVyLFxuICBzZXRDYXRjaEhhbmRsZXIsXG4gIHNldERlZmF1bHRIYW5kbGVyLFxufTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0IHthc3NlcnR9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9hc3NlcnQubWpzJztcbmltcG9ydCB7Y2FjaGVOYW1lc30gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2NhY2hlTmFtZXMubWpzJztcbmltcG9ydCB7bG9nZ2VyfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvbG9nZ2VyLm1qcyc7XG5pbXBvcnQge05hdmlnYXRpb25Sb3V0ZX0gZnJvbSAnLi9OYXZpZ2F0aW9uUm91dGUubWpzJztcbmltcG9ydCB7Z2V0T3JDcmVhdGVEZWZhdWx0Um91dGVyfSBmcm9tICcuL3V0aWxzL2dldE9yQ3JlYXRlRGVmYXVsdFJvdXRlci5tanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLm1qcyc7XG5cblxuLyoqXG4gKiBSZWdpc3RlcnMgYSByb3V0ZSB0aGF0IHdpbGwgcmV0dXJuIGEgcHJlY2FjaGVkIGZpbGUgZm9yIGEgbmF2aWdhdGlvblxuICogcmVxdWVzdC4gVGhpcyBpcyB1c2VmdWwgZm9yIHRoZVxuICogW2FwcGxpY2F0aW9uIHNoZWxsIHBhdHRlcm5de0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi9mdW5kYW1lbnRhbHMvYXJjaGl0ZWN0dXJlL2FwcC1zaGVsbH0uXG4gKlxuICogV2hlbiBkZXRlcm1pbmluZyB0aGUgVVJMIG9mIHRoZSBwcmVjYWNoZWQgSFRNTCBkb2N1bWVudCwgeW91IHdpbGwgbGlrZWx5IG5lZWRcbiAqIHRvIGNhbGwgYHdvcmtib3gucHJlY2FjaGluZy5nZXRDYWNoZUtleUZvclVSTChvcmlnaW5hbFVybClgLCB0byBhY2NvdW50IGZvclxuICogdGhlIGZhY3QgdGhhdCBXb3JrYm94J3MgcHJlY2FjaGluZyBuYW1pbmcgY29udmVudGlvbnMgb2Z0ZW4gcmVzdWx0cyBpbiBVUkxcbiAqIGNhY2hlIGtleXMgdGhhdCBjb250YWluIGV4dHJhIHJldmlzaW9uaW5nIGluZm8uXG4gKlxuICogVGhpcyBtZXRob2Qgd2lsbCBnZW5lcmF0ZSBhXG4gKiBbTmF2aWdhdGlvblJvdXRlXXtAbGluayB3b3JrYm94LnJvdXRpbmcuTmF2aWdhdGlvblJvdXRlfVxuICogYW5kIGNhbGxcbiAqIFtSb3V0ZXIucmVnaXN0ZXJSb3V0ZSgpXXtAbGluayB3b3JrYm94LnJvdXRpbmcuUm91dGVyI3JlZ2lzdGVyUm91dGV9IG9uIGFcbiAqIHNpbmdsZXRvbiBSb3V0ZXIgaW5zdGFuY2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNhY2hlZEFzc2V0VXJsIFRoZSBjYWNoZSBrZXkgdG8gdXNlIGZvciB0aGUgSFRNTCBmaWxlLlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmNhY2hlTmFtZV0gQ2FjaGUgbmFtZSB0byBzdG9yZSBhbmQgcmV0cmlldmVcbiAqIHJlcXVlc3RzLiBEZWZhdWx0cyB0byBwcmVjYWNoZSBjYWNoZSBuYW1lIHByb3ZpZGVkIGJ5XG4gKiBbd29ya2JveC1jb3JlLmNhY2hlTmFtZXNde0BsaW5rIHdvcmtib3guY29yZS5jYWNoZU5hbWVzfS5cbiAqIEBwYXJhbSB7QXJyYXk8UmVnRXhwPn0gW29wdGlvbnMuYmxhY2tsaXN0PVtdXSBJZiBhbnkgb2YgdGhlc2UgcGF0dGVybnNcbiAqIG1hdGNoLCB0aGUgcm91dGUgd2lsbCBub3QgaGFuZGxlIHRoZSByZXF1ZXN0IChldmVuIGlmIGEgd2hpdGVsaXN0IGVudHJ5XG4gKiBtYXRjaGVzKS5cbiAqIEBwYXJhbSB7QXJyYXk8UmVnRXhwPn0gW29wdGlvbnMud2hpdGVsaXN0PVsvLi9dXSBJZiBhbnkgb2YgdGhlc2UgcGF0dGVybnNcbiAqIG1hdGNoIHRoZSBVUkwncyBwYXRobmFtZSBhbmQgc2VhcmNoIHBhcmFtZXRlciwgdGhlIHJvdXRlIHdpbGwgaGFuZGxlIHRoZVxuICogcmVxdWVzdCAoYXNzdW1pbmcgdGhlIGJsYWNrbGlzdCBkb2Vzbid0IG1hdGNoKS5cbiAqIEByZXR1cm4ge3dvcmtib3gucm91dGluZy5OYXZpZ2F0aW9uUm91dGV9IFJldHVybnMgdGhlIGdlbmVyYXRlZFxuICogUm91dGUuXG4gKlxuICogQGFsaWFzIHdvcmtib3gucm91dGluZy5yZWdpc3Rlck5hdmlnYXRpb25Sb3V0ZVxuICovXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJOYXZpZ2F0aW9uUm91dGUgPSAoY2FjaGVkQXNzZXRVcmwsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGFzc2VydC5pc1R5cGUoY2FjaGVkQXNzZXRVcmwsICdzdHJpbmcnLCB7XG4gICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1yb3V0aW5nJyxcbiAgICAgIGZ1bmNOYW1lOiAncmVnaXN0ZXJOYXZpZ2F0aW9uUm91dGUnLFxuICAgICAgcGFyYW1OYW1lOiAnY2FjaGVkQXNzZXRVcmwnLFxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgY2FjaGVOYW1lID0gY2FjaGVOYW1lcy5nZXRQcmVjYWNoZU5hbWUob3B0aW9ucy5jYWNoZU5hbWUpO1xuICBjb25zdCBoYW5kbGVyID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNhY2hlcy5tYXRjaChjYWNoZWRBc3NldFVybCwge2NhY2hlTmFtZX0pO1xuXG4gICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgfVxuXG4gICAgICAvLyBUaGlzIHNob3VsZG4ndCBub3JtYWxseSBoYXBwZW4sIGJ1dCB0aGVyZSBhcmUgZWRnZSBjYXNlczpcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9pc3N1ZXMvMTQ0MVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgY2FjaGUgJHtjYWNoZU5hbWV9IGRpZCBub3QgaGF2ZSBhbiBlbnRyeSBmb3IgYCArXG4gICAgICAgICAgYCR7Y2FjaGVkQXNzZXRVcmx9LmApO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBJZiB0aGVyZSdzIGVpdGhlciBhIGNhY2hlIG1pc3MsIG9yIHRoZSBjYWNoZXMubWF0Y2goKSBjYWxsIHRocmV3XG4gICAgICAvLyBhbiBleGNlcHRpb24sIHRoZW4gYXR0ZW1wdCB0byBmdWxmaWxsIHRoZSBuYXZpZ2F0aW9uIHJlcXVlc3Qgd2l0aFxuICAgICAgLy8gYSByZXNwb25zZSBmcm9tIHRoZSBuZXR3b3JrIHJhdGhlciB0aGFuIGxlYXZpbmcgdGhlIHVzZXIgd2l0aCBhXG4gICAgICAvLyBmYWlsZWQgbmF2aWdhdGlvbi5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGxvZ2dlci5kZWJ1ZyhgVW5hYmxlIHRvIHJlc3BvbmQgdG8gbmF2aWdhdGlvbiByZXF1ZXN0IHdpdGggYCArXG4gICAgICAgICAgICBgY2FjaGVkIHJlc3BvbnNlLiBGYWxsaW5nIGJhY2sgdG8gbmV0d29yay5gLCBlcnJvcik7XG4gICAgICB9XG5cbiAgICAgIC8vIFRoaXMgbWlnaHQgc3RpbGwgZmFpbCBpZiB0aGUgYnJvd3NlciBpcyBvZmZsaW5lLi4uXG4gICAgICByZXR1cm4gZmV0Y2goY2FjaGVkQXNzZXRVcmwpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByb3V0ZSA9IG5ldyBOYXZpZ2F0aW9uUm91dGUoaGFuZGxlciwge1xuICAgIHdoaXRlbGlzdDogb3B0aW9ucy53aGl0ZWxpc3QsXG4gICAgYmxhY2tsaXN0OiBvcHRpb25zLmJsYWNrbGlzdCxcbiAgfSk7XG5cbiAgY29uc3QgZGVmYXVsdFJvdXRlciA9IGdldE9yQ3JlYXRlRGVmYXVsdFJvdXRlcigpO1xuICBkZWZhdWx0Um91dGVyLnJlZ2lzdGVyUm91dGUocm91dGUpO1xuXG4gIHJldHVybiByb3V0ZTtcbn07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCB7bG9nZ2VyfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvbG9nZ2VyLm1qcyc7XG5pbXBvcnQge1dvcmtib3hFcnJvcn0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL1dvcmtib3hFcnJvci5tanMnO1xuaW1wb3J0IHtSb3V0ZX0gZnJvbSAnLi9Sb3V0ZS5tanMnO1xuaW1wb3J0IHtSZWdFeHBSb3V0ZX0gZnJvbSAnLi9SZWdFeHBSb3V0ZS5tanMnO1xuaW1wb3J0IHtnZXRPckNyZWF0ZURlZmF1bHRSb3V0ZXJ9IGZyb20gJy4vdXRpbHMvZ2V0T3JDcmVhdGVEZWZhdWx0Um91dGVyLm1qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24ubWpzJztcblxuXG4vKipcbiAqIEVhc2lseSByZWdpc3RlciBhIFJlZ0V4cCwgc3RyaW5nLCBvciBmdW5jdGlvbiB3aXRoIGEgY2FjaGluZ1xuICogc3RyYXRlZ3kgdG8gYSBzaW5nbGV0b24gUm91dGVyIGluc3RhbmNlLlxuICpcbiAqIFRoaXMgbWV0aG9kIHdpbGwgZ2VuZXJhdGUgYSBSb3V0ZSBmb3IgeW91IGlmIG5lZWRlZCBhbmRcbiAqIGNhbGwgW1JvdXRlci5yZWdpc3RlclJvdXRlKClde0BsaW5rXG4gKiB3b3JrYm94LnJvdXRpbmcuUm91dGVyI3JlZ2lzdGVyUm91dGV9LlxuICpcbiAqIEBwYXJhbSB7XG4gKiBSZWdFeHB8XG4gKiBzdHJpbmd8XG4gKiB3b3JrYm94LnJvdXRpbmcuUm91dGV+bWF0Y2hDYWxsYmFja3xcbiAqIHdvcmtib3gucm91dGluZy5Sb3V0ZVxuICogfSBjYXB0dXJlXG4gKiBJZiB0aGUgY2FwdHVyZSBwYXJhbSBpcyBhIGBSb3V0ZWAsIGFsbCBvdGhlciBhcmd1bWVudHMgd2lsbCBiZSBpZ25vcmVkLlxuICogQHBhcmFtIHt3b3JrYm94LnJvdXRpbmcuUm91dGV+aGFuZGxlckNhbGxiYWNrfSBoYW5kbGVyIEEgY2FsbGJhY2tcbiAqIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIFByb21pc2UgcmVzdWx0aW5nIGluIGEgUmVzcG9uc2UuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21ldGhvZD0nR0VUJ10gVGhlIEhUVFAgbWV0aG9kIHRvIG1hdGNoIHRoZSBSb3V0ZVxuICogYWdhaW5zdC5cbiAqIEByZXR1cm4ge3dvcmtib3gucm91dGluZy5Sb3V0ZX0gVGhlIGdlbmVyYXRlZCBgUm91dGVgKFVzZWZ1bCBmb3JcbiAqIHVucmVnaXN0ZXJpbmcpLlxuICpcbiAqIEBhbGlhcyB3b3JrYm94LnJvdXRpbmcucmVnaXN0ZXJSb3V0ZVxuICovXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJSb3V0ZSA9IChjYXB0dXJlLCBoYW5kbGVyLCBtZXRob2QgPSAnR0VUJykgPT4ge1xuICBsZXQgcm91dGU7XG5cbiAgaWYgKHR5cGVvZiBjYXB0dXJlID09PSAnc3RyaW5nJykge1xuICAgIGNvbnN0IGNhcHR1cmVVcmwgPSBuZXcgVVJMKGNhcHR1cmUsIGxvY2F0aW9uKTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAoIShjYXB0dXJlLnN0YXJ0c1dpdGgoJy8nKSB8fCBjYXB0dXJlLnN0YXJ0c1dpdGgoJ2h0dHAnKSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignaW52YWxpZC1zdHJpbmcnLCB7XG4gICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtcm91dGluZycsXG4gICAgICAgICAgZnVuY05hbWU6ICdyZWdpc3RlclJvdXRlJyxcbiAgICAgICAgICBwYXJhbU5hbWU6ICdjYXB0dXJlJyxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFdlIHdhbnQgdG8gY2hlY2sgaWYgRXhwcmVzcy1zdHlsZSB3aWxkY2FyZHMgYXJlIGluIHRoZSBwYXRobmFtZSBvbmx5LlxuICAgICAgLy8gVE9ETzogUmVtb3ZlIHRoaXMgbG9nIG1lc3NhZ2UgaW4gdjQuXG4gICAgICBjb25zdCB2YWx1ZVRvQ2hlY2sgPSBjYXB0dXJlLnN0YXJ0c1dpdGgoJ2h0dHAnKSA/XG4gICAgICAgICAgY2FwdHVyZVVybC5wYXRobmFtZSA6IGNhcHR1cmU7XG5cbiAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vcGlsbGFyanMvcGF0aC10by1yZWdleHAjcGFyYW1ldGVyc1xuICAgICAgY29uc3Qgd2lsZGNhcmRzID0gJ1sqOj8rXSc7XG4gICAgICBpZiAodmFsdWVUb0NoZWNrLm1hdGNoKG5ldyBSZWdFeHAoYCR7d2lsZGNhcmRzfWApKSkge1xuICAgICAgICBsb2dnZXIuZGVidWcoXG4gICAgICAgICAgICBgVGhlICckY2FwdHVyZScgcGFyYW1ldGVyIGNvbnRhaW5zIGFuIEV4cHJlc3Mtc3R5bGUgd2lsZGNhcmQgYCArXG4gICAgICAgICAgYGNoYXJhY3RlciAoJHt3aWxkY2FyZHN9KS4gU3RyaW5ncyBhcmUgbm93IGFsd2F5cyBpbnRlcnByZXRlZCBhcyBgICtcbiAgICAgICAgICBgZXhhY3QgbWF0Y2hlczsgdXNlIGEgUmVnRXhwIGZvciBwYXJ0aWFsIG9yIHdpbGRjYXJkIG1hdGNoZXMuYFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG1hdGNoQ2FsbGJhY2sgPSAoe3VybH0pID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmICgodXJsLnBhdGhuYW1lID09PSBjYXB0dXJlVXJsLnBhdGhuYW1lKSAmJlxuICAgICAgICAgICAgKHVybC5vcmlnaW4gIT09IGNhcHR1cmVVcmwub3JpZ2luKSkge1xuICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhcbiAgICAgICAgICAgICAgYCR7Y2FwdHVyZX0gb25seSBwYXJ0aWFsbHkgbWF0Y2hlcyB0aGUgY3Jvc3Mtb3JpZ2luIFVSTCBgICtcbiAgICAgICAgICAgICAgYCR7dXJsfS4gVGhpcyByb3V0ZSB3aWxsIG9ubHkgaGFuZGxlIGNyb3NzLW9yaWdpbiByZXF1ZXN0cyBgICtcbiAgICAgICAgICAgICAgYGlmIHRoZXkgbWF0Y2ggdGhlIGVudGlyZSBVUkwuYCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHVybC5ocmVmID09PSBjYXB0dXJlVXJsLmhyZWY7XG4gICAgfTtcblxuICAgIHJvdXRlID0gbmV3IFJvdXRlKG1hdGNoQ2FsbGJhY2ssIGhhbmRsZXIsIG1ldGhvZCk7XG4gIH0gZWxzZSBpZiAoY2FwdHVyZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgIHJvdXRlID0gbmV3IFJlZ0V4cFJvdXRlKGNhcHR1cmUsIGhhbmRsZXIsIG1ldGhvZCk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGNhcHR1cmUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByb3V0ZSA9IG5ldyBSb3V0ZShjYXB0dXJlLCBoYW5kbGVyLCBtZXRob2QpO1xuICB9IGVsc2UgaWYgKGNhcHR1cmUgaW5zdGFuY2VvZiBSb3V0ZSkge1xuICAgIHJvdXRlID0gY2FwdHVyZTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCd1bnN1cHBvcnRlZC1yb3V0ZS10eXBlJywge1xuICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtcm91dGluZycsXG4gICAgICBmdW5jTmFtZTogJ3JlZ2lzdGVyUm91dGUnLFxuICAgICAgcGFyYW1OYW1lOiAnY2FwdHVyZScsXG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBkZWZhdWx0Um91dGVyID0gZ2V0T3JDcmVhdGVEZWZhdWx0Um91dGVyKCk7XG4gIGRlZmF1bHRSb3V0ZXIucmVnaXN0ZXJSb3V0ZShyb3V0ZSk7XG5cbiAgcmV0dXJuIHJvdXRlO1xufTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0IHtnZXRPckNyZWF0ZURlZmF1bHRSb3V0ZXJ9IGZyb20gJy4vdXRpbHMvZ2V0T3JDcmVhdGVEZWZhdWx0Um91dGVyLm1qcyc7XG5cbmltcG9ydCAnLi9fdmVyc2lvbi5tanMnO1xuXG4vKipcbiAqIElmIGEgUm91dGUgdGhyb3dzIGFuIGVycm9yIHdoaWxlIGhhbmRsaW5nIGEgcmVxdWVzdCwgdGhpcyBgaGFuZGxlcmBcbiAqIHdpbGwgYmUgY2FsbGVkIGFuZCBnaXZlbiBhIGNoYW5jZSB0byBwcm92aWRlIGEgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHt3b3JrYm94LnJvdXRpbmcuUm91dGV+aGFuZGxlckNhbGxiYWNrfSBoYW5kbGVyIEEgY2FsbGJhY2tcbiAqIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIFByb21pc2UgcmVzdWx0aW5nIGluIGEgUmVzcG9uc2UuXG4gKlxuICogQGFsaWFzIHdvcmtib3gucm91dGluZy5zZXRDYXRjaEhhbmRsZXJcbiAqL1xuZXhwb3J0IGNvbnN0IHNldENhdGNoSGFuZGxlciA9IChoYW5kbGVyKSA9PiB7XG4gIGNvbnN0IGRlZmF1bHRSb3V0ZXIgPSBnZXRPckNyZWF0ZURlZmF1bHRSb3V0ZXIoKTtcbiAgZGVmYXVsdFJvdXRlci5zZXRDYXRjaEhhbmRsZXIoaGFuZGxlcik7XG59O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQge2dldE9yQ3JlYXRlRGVmYXVsdFJvdXRlcn0gZnJvbSAnLi91dGlscy9nZXRPckNyZWF0ZURlZmF1bHRSb3V0ZXIubWpzJztcblxuaW1wb3J0ICcuL192ZXJzaW9uLm1qcyc7XG5cbi8qKlxuICogRGVmaW5lIGEgZGVmYXVsdCBgaGFuZGxlcmAgdGhhdCdzIGNhbGxlZCB3aGVuIG5vIHJvdXRlcyBleHBsaWNpdGx5XG4gKiBtYXRjaCB0aGUgaW5jb21pbmcgcmVxdWVzdC5cbiAqXG4gKiBXaXRob3V0IGEgZGVmYXVsdCBoYW5kbGVyLCB1bm1hdGNoZWQgcmVxdWVzdHMgd2lsbCBnbyBhZ2FpbnN0IHRoZVxuICogbmV0d29yayBhcyBpZiB0aGVyZSB3ZXJlIG5vIHNlcnZpY2Ugd29ya2VyIHByZXNlbnQuXG4gKlxuICogQHBhcmFtIHt3b3JrYm94LnJvdXRpbmcuUm91dGV+aGFuZGxlckNhbGxiYWNrfSBoYW5kbGVyIEEgY2FsbGJhY2tcbiAqIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIFByb21pc2UgcmVzdWx0aW5nIGluIGEgUmVzcG9uc2UuXG4gKlxuICogQGFsaWFzIHdvcmtib3gucm91dGluZy5zZXREZWZhdWx0SGFuZGxlclxuICovXG5leHBvcnQgY29uc3Qgc2V0RGVmYXVsdEhhbmRsZXIgPSAoaGFuZGxlcikgPT4ge1xuICBjb25zdCBkZWZhdWx0Um91dGVyID0gZ2V0T3JDcmVhdGVEZWZhdWx0Um91dGVyKCk7XG4gIGRlZmF1bHRSb3V0ZXIuc2V0RGVmYXVsdEhhbmRsZXIoaGFuZGxlcik7XG59O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQgJy4uL192ZXJzaW9uLm1qcyc7XG5cbi8qKlxuICogVGhlIGRlZmF1bHQgSFRUUCBtZXRob2QsICdHRVQnLCB1c2VkIHdoZW4gdGhlcmUncyBubyBzcGVjaWZpYyBtZXRob2RcbiAqIGNvbmZpZ3VyZWQgZm9yIGEgcm91dGUuXG4gKlxuICogQHR5cGUge3N0cmluZ31cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgY29uc3QgZGVmYXVsdE1ldGhvZCA9ICdHRVQnO1xuXG4vKipcbiAqIFRoZSBsaXN0IG9mIHZhbGlkIEhUVFAgbWV0aG9kcyBhc3NvY2lhdGVkIHdpdGggcmVxdWVzdHMgdGhhdCBjb3VsZCBiZSByb3V0ZWQuXG4gKlxuICogQHR5cGUge0FycmF5PHN0cmluZz59XG4gKlxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IHZhbGlkTWV0aG9kcyA9IFtcbiAgJ0RFTEVURScsXG4gICdHRVQnLFxuICAnSEVBRCcsXG4gICdQQVRDSCcsXG4gICdQT1NUJyxcbiAgJ1BVVCcsXG5dO1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnLi4vUm91dGVyLm1qcyc7XG5pbXBvcnQgJy4uL192ZXJzaW9uLm1qcyc7XG5cbmxldCBkZWZhdWx0Um91dGVyO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcsIHNpbmdsZXRvbiBSb3V0ZXIgaW5zdGFuY2UgaWYgb25lIGRvZXMgbm90IGV4aXN0LiBJZiBvbmVcbiAqIGRvZXMgYWxyZWFkeSBleGlzdCwgdGhhdCBpbnN0YW5jZSBpcyByZXR1cm5lZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHJldHVybiB7Um91dGVyfVxuICovXG5leHBvcnQgY29uc3QgZ2V0T3JDcmVhdGVEZWZhdWx0Um91dGVyID0gKCkgPT4ge1xuICBpZiAoIWRlZmF1bHRSb3V0ZXIpIHtcbiAgICBkZWZhdWx0Um91dGVyID0gbmV3IFJvdXRlcigpO1xuXG4gICAgLy8gVGhlIGhlbHBlcnMgdGhhdCB1c2UgdGhlIGRlZmF1bHQgUm91dGVyIGFzc3VtZSB0aGVzZSBsaXN0ZW5lcnMgZXhpc3QuXG4gICAgZGVmYXVsdFJvdXRlci5hZGRGZXRjaExpc3RlbmVyKCk7XG4gICAgZGVmYXVsdFJvdXRlci5hZGRDYWNoZUxpc3RlbmVyKCk7XG4gIH1cbiAgcmV0dXJuIGRlZmF1bHRSb3V0ZXI7XG59O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQge2Fzc2VydH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2Fzc2VydC5tanMnO1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5tanMnO1xuXG4vKipcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKXxPYmplY3R9IGhhbmRsZXIgRWl0aGVyIGEgZnVuY3Rpb24sIG9yIGFuIG9iamVjdCB3aXRoIGFcbiAqICdoYW5kbGUnIG1ldGhvZC5cbiAqIEByZXR1cm4ge09iamVjdH0gQW4gb2JqZWN0IHdpdGggYSBoYW5kbGUgbWV0aG9kLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVIYW5kbGVyID0gKGhhbmRsZXIpID0+IHtcbiAgaWYgKGhhbmRsZXIgJiYgdHlwZW9mIGhhbmRsZXIgPT09ICdvYmplY3QnKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGFzc2VydC5oYXNNZXRob2QoaGFuZGxlciwgJ2hhbmRsZScsIHtcbiAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtcm91dGluZycsXG4gICAgICAgIGNsYXNzTmFtZTogJ1JvdXRlJyxcbiAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgIHBhcmFtTmFtZTogJ2hhbmRsZXInLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBoYW5kbGVyO1xuICB9IGVsc2Uge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBhc3NlcnQuaXNUeXBlKGhhbmRsZXIsICdmdW5jdGlvbicsIHtcbiAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtcm91dGluZycsXG4gICAgICAgIGNsYXNzTmFtZTogJ1JvdXRlJyxcbiAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgIHBhcmFtTmFtZTogJ2hhbmRsZXInLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB7aGFuZGxlOiBoYW5kbGVyfTtcbiAgfVxufTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0IHthc3NlcnR9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9hc3NlcnQubWpzJztcbmltcG9ydCB7Y2FjaGVOYW1lc30gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2NhY2hlTmFtZXMubWpzJztcbmltcG9ydCB7Y2FjaGVXcmFwcGVyfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvY2FjaGVXcmFwcGVyLm1qcyc7XG5pbXBvcnQge2ZldGNoV3JhcHBlcn0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2ZldGNoV3JhcHBlci5tanMnO1xuaW1wb3J0IHtnZXRGcmllbmRseVVSTH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2dldEZyaWVuZGx5VVJMLm1qcyc7XG5pbXBvcnQge2xvZ2dlcn0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5tanMnO1xuaW1wb3J0IHtXb3JrYm94RXJyb3J9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9Xb3JrYm94RXJyb3IubWpzJztcblxuaW1wb3J0IHttZXNzYWdlc30gZnJvbSAnLi91dGlscy9tZXNzYWdlcy5tanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLm1qcyc7XG5cbi8qKlxuICogQW4gaW1wbGVtZW50YXRpb24gb2YgYSBbY2FjaGUtZmlyc3Rde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi9mdW5kYW1lbnRhbHMvaW5zdGFudC1hbmQtb2ZmbGluZS9vZmZsaW5lLWNvb2tib29rLyNjYWNoZS1mYWxsaW5nLWJhY2stdG8tbmV0d29ya31cbiAqIHJlcXVlc3Qgc3RyYXRlZ3kuXG4gKlxuICogQSBjYWNoZSBmaXJzdCBzdHJhdGVneSBpcyB1c2VmdWwgZm9yIGFzc2V0cyB0aGF0IGhhdmUgYmVlbiByZXZpc2lvbmVkLFxuICogc3VjaCBhcyBVUkxzIGxpa2UgYC9zdHlsZXMvZXhhbXBsZS5hOGY1ZjEuY3NzYCwgc2luY2UgdGhleVxuICogY2FuIGJlIGNhY2hlZCBmb3IgbG9uZyBwZXJpb2RzIG9mIHRpbWUuXG4gKlxuICogSWYgdGhlIG5ldHdvcmsgcmVxdWVzdCBmYWlscywgYW5kIHRoZXJlIGlzIG5vIGNhY2hlIG1hdGNoLCB0aGlzIHdpbGwgdGhyb3dcbiAqIGEgYFdvcmtib3hFcnJvcmAgZXhjZXB0aW9uLlxuICpcbiAqIEBtZW1iZXJvZiB3b3JrYm94LnN0cmF0ZWdpZXNcbiAqL1xuY2xhc3MgQ2FjaGVGaXJzdCB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5jYWNoZU5hbWUgQ2FjaGUgbmFtZSB0byBzdG9yZSBhbmQgcmV0cmlldmVcbiAgICogcmVxdWVzdHMuIERlZmF1bHRzIHRvIGNhY2hlIG5hbWVzIHByb3ZpZGVkIGJ5XG4gICAqIFt3b3JrYm94LWNvcmVde0BsaW5rIHdvcmtib3guY29yZS5jYWNoZU5hbWVzfS5cbiAgICogQHBhcmFtIHtBcnJheTxPYmplY3Q+fSBvcHRpb25zLnBsdWdpbnMgW1BsdWdpbnNde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi90b29scy93b3JrYm94L2d1aWRlcy91c2luZy1wbHVnaW5zfVxuICAgKiB0byB1c2UgaW4gY29uanVuY3Rpb24gd2l0aCB0aGlzIGNhY2hpbmcgc3RyYXRlZ3kuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zLmZldGNoT3B0aW9ucyBWYWx1ZXMgcGFzc2VkIGFsb25nIHRvIHRoZVxuICAgKiBbYGluaXRgXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93T3JXb3JrZXJHbG9iYWxTY29wZS9mZXRjaCNQYXJhbWV0ZXJzKVxuICAgKiBvZiBhbGwgZmV0Y2goKSByZXF1ZXN0cyBtYWRlIGJ5IHRoaXMgc3RyYXRlZ3kuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zLm1hdGNoT3B0aW9ucyBbYENhY2hlUXVlcnlPcHRpb25zYF0oaHR0cHM6Ly93M2MuZ2l0aHViLmlvL1NlcnZpY2VXb3JrZXIvI2RpY3RkZWYtY2FjaGVxdWVyeW9wdGlvbnMpXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICB0aGlzLl9jYWNoZU5hbWUgPSBjYWNoZU5hbWVzLmdldFJ1bnRpbWVOYW1lKG9wdGlvbnMuY2FjaGVOYW1lKTtcbiAgICB0aGlzLl9wbHVnaW5zID0gb3B0aW9ucy5wbHVnaW5zIHx8IFtdO1xuICAgIHRoaXMuX2ZldGNoT3B0aW9ucyA9IG9wdGlvbnMuZmV0Y2hPcHRpb25zIHx8IG51bGw7XG4gICAgdGhpcy5fbWF0Y2hPcHRpb25zID0gb3B0aW9ucy5tYXRjaE9wdGlvbnMgfHwgbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCB3aWxsIHBlcmZvcm0gYSByZXF1ZXN0IHN0cmF0ZWd5IGFuZCBmb2xsb3dzIGFuIEFQSSB0aGF0XG4gICAqIHdpbGwgd29yayB3aXRoIHRoZVxuICAgKiBbV29ya2JveCBSb3V0ZXJde0BsaW5rIHdvcmtib3gucm91dGluZy5Sb3V0ZXJ9LlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge1JlcXVlc3R9IG9wdGlvbnMucmVxdWVzdCBUaGUgcmVxdWVzdCB0byBydW4gdGhpcyBzdHJhdGVneSBmb3IuXG4gICAqIEBwYXJhbSB7RXZlbnR9IFtvcHRpb25zLmV2ZW50XSBUaGUgZXZlbnQgdGhhdCB0cmlnZ2VyZWQgdGhlIHJlcXVlc3QuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8UmVzcG9uc2U+fVxuICAgKi9cbiAgYXN5bmMgaGFuZGxlKHtldmVudCwgcmVxdWVzdH0pIHtcbiAgICByZXR1cm4gdGhpcy5tYWtlUmVxdWVzdCh7XG4gICAgICBldmVudCxcbiAgICAgIHJlcXVlc3Q6IHJlcXVlc3QgfHwgZXZlbnQucmVxdWVzdCxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBjYW4gYmUgdXNlZCB0byBwZXJmb3JtIGEgbWFrZSBhIHN0YW5kYWxvbmUgcmVxdWVzdCBvdXRzaWRlIHRoZVxuICAgKiBjb250ZXh0IG9mIHRoZSBbV29ya2JveCBSb3V0ZXJde0BsaW5rIHdvcmtib3gucm91dGluZy5Sb3V0ZXJ9LlxuICAgKlxuICAgKiBTZWUgXCJbQWR2YW5jZWQgUmVjaXBlc10oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL3Rvb2xzL3dvcmtib3gvZ3VpZGVzL2FkdmFuY2VkLXJlY2lwZXMjbWFrZS1yZXF1ZXN0cylcIlxuICAgKiBmb3IgbW9yZSB1c2FnZSBpbmZvcm1hdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICogQHBhcmFtIHtSZXF1ZXN0fHN0cmluZ30gb3B0aW9ucy5yZXF1ZXN0IEVpdGhlciBhXG4gICAqICAgICBbYFJlcXVlc3RgXXtAbGluayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvUmVxdWVzdH1cbiAgICogICAgIG9iamVjdCwgb3IgYSBzdHJpbmcgVVJMLCBjb3JyZXNwb25kaW5nIHRvIHRoZSByZXF1ZXN0IHRvIGJlIG1hZGUuXG4gICAqIEBwYXJhbSB7RmV0Y2hFdmVudH0gW29wdGlvbnMuZXZlbnRdIElmIHByb3ZpZGVkLCBgZXZlbnQud2FpdFVudGlsKClgIHdpbGxcbiAgICAgICAgIGJlIGNhbGxlZCBhdXRvbWF0aWNhbGx5IHRvIGV4dGVuZCB0aGUgc2VydmljZSB3b3JrZXIncyBsaWZldGltZS5cbiAgICogQHJldHVybiB7UHJvbWlzZTxSZXNwb25zZT59XG4gICAqL1xuICBhc3luYyBtYWtlUmVxdWVzdCh7ZXZlbnQsIHJlcXVlc3R9KSB7XG4gICAgY29uc3QgbG9ncyA9IFtdO1xuXG4gICAgaWYgKHR5cGVvZiByZXF1ZXN0ID09PSAnc3RyaW5nJykge1xuICAgICAgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KHJlcXVlc3QpO1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBhc3NlcnQuaXNJbnN0YW5jZShyZXF1ZXN0LCBSZXF1ZXN0LCB7XG4gICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXN0cmF0ZWdpZXMnLFxuICAgICAgICBjbGFzc05hbWU6ICdDYWNoZUZpcnN0JyxcbiAgICAgICAgZnVuY05hbWU6ICdtYWtlUmVxdWVzdCcsXG4gICAgICAgIHBhcmFtTmFtZTogJ3JlcXVlc3QnLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgY2FjaGVXcmFwcGVyLm1hdGNoKHtcbiAgICAgIGNhY2hlTmFtZTogdGhpcy5fY2FjaGVOYW1lLFxuICAgICAgcmVxdWVzdCxcbiAgICAgIGV2ZW50LFxuICAgICAgbWF0Y2hPcHRpb25zOiB0aGlzLl9tYXRjaE9wdGlvbnMsXG4gICAgICBwbHVnaW5zOiB0aGlzLl9wbHVnaW5zLFxuICAgIH0pO1xuXG4gICAgbGV0IGVycm9yO1xuICAgIGlmICghcmVzcG9uc2UpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGxvZ3MucHVzaChcbiAgICAgICAgICAgIGBObyByZXNwb25zZSBmb3VuZCBpbiB0aGUgJyR7dGhpcy5fY2FjaGVOYW1lfScgY2FjaGUuIGAgK1xuICAgICAgICAgIGBXaWxsIHJlc3BvbmQgd2l0aCBhIG5ldHdvcmsgcmVxdWVzdC5gKTtcbiAgICAgIH1cbiAgICAgIHRyeSB7XG4gICAgICAgIHJlc3BvbnNlID0gYXdhaXQgdGhpcy5fZ2V0RnJvbU5ldHdvcmsocmVxdWVzdCwgZXZlbnQpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGVycm9yID0gZXJyO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICBsb2dzLnB1c2goYEdvdCByZXNwb25zZSBmcm9tIG5ldHdvcmsuYCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbG9ncy5wdXNoKGBVbmFibGUgdG8gZ2V0IGEgcmVzcG9uc2UgZnJvbSB0aGUgbmV0d29yay5gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBsb2dzLnB1c2goXG4gICAgICAgICAgICBgRm91bmQgYSBjYWNoZWQgcmVzcG9uc2UgaW4gdGhlICcke3RoaXMuX2NhY2hlTmFtZX0nIGNhY2hlLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBsb2dnZXIuZ3JvdXBDb2xsYXBzZWQoXG4gICAgICAgICAgbWVzc2FnZXMuc3RyYXRlZ3lTdGFydCgnQ2FjaGVGaXJzdCcsIHJlcXVlc3QpKTtcbiAgICAgIGZvciAobGV0IGxvZyBvZiBsb2dzKSB7XG4gICAgICAgIGxvZ2dlci5sb2cobG9nKTtcbiAgICAgIH1cbiAgICAgIG1lc3NhZ2VzLnByaW50RmluYWxSZXNwb25zZShyZXNwb25zZSk7XG4gICAgICBsb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICB9XG5cbiAgICBpZiAoIXJlc3BvbnNlKSB7XG4gICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCduby1yZXNwb25zZScsIHt1cmw6IHJlcXVlc3QudXJsLCBlcnJvcn0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyB0aGUgbmV0d29yayBhbmQgY2FjaGUgcGFydCBvZiBDYWNoZUZpcnN0LlxuICAgKlxuICAgKiBAcGFyYW0ge1JlcXVlc3R9IHJlcXVlc3RcbiAgICogQHBhcmFtIHtGZXRjaEV2ZW50fSBbZXZlbnRdXG4gICAqIEByZXR1cm4ge1Byb21pc2U8UmVzcG9uc2U+fVxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYXN5bmMgX2dldEZyb21OZXR3b3JrKHJlcXVlc3QsIGV2ZW50KSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaFdyYXBwZXIuZmV0Y2goe1xuICAgICAgcmVxdWVzdCxcbiAgICAgIGV2ZW50LFxuICAgICAgZmV0Y2hPcHRpb25zOiB0aGlzLl9mZXRjaE9wdGlvbnMsXG4gICAgICBwbHVnaW5zOiB0aGlzLl9wbHVnaW5zLFxuICAgIH0pO1xuXG4gICAgLy8gS2VlcCB0aGUgc2VydmljZSB3b3JrZXIgd2hpbGUgd2UgcHV0IHRoZSByZXF1ZXN0IHRvIHRoZSBjYWNoZVxuICAgIGNvbnN0IHJlc3BvbnNlQ2xvbmUgPSByZXNwb25zZS5jbG9uZSgpO1xuICAgIGNvbnN0IGNhY2hlUHV0UHJvbWlzZSA9IGNhY2hlV3JhcHBlci5wdXQoe1xuICAgICAgY2FjaGVOYW1lOiB0aGlzLl9jYWNoZU5hbWUsXG4gICAgICByZXF1ZXN0LFxuICAgICAgcmVzcG9uc2U6IHJlc3BvbnNlQ2xvbmUsXG4gICAgICBldmVudCxcbiAgICAgIHBsdWdpbnM6IHRoaXMuX3BsdWdpbnMsXG4gICAgfSk7XG5cbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGV2ZW50LndhaXRVbnRpbChjYWNoZVB1dFByb21pc2UpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICBsb2dnZXIud2FybihgVW5hYmxlIHRvIGVuc3VyZSBzZXJ2aWNlIHdvcmtlciBzdGF5cyBhbGl2ZSB3aGVuIGAgK1xuICAgICAgICAgICAgYHVwZGF0aW5nIGNhY2hlIGZvciAnJHtnZXRGcmllbmRseVVSTChyZXF1ZXN0LnVybCl9Jy5gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxufVxuXG5leHBvcnQge0NhY2hlRmlyc3R9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQge2Fzc2VydH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2Fzc2VydC5tanMnO1xuaW1wb3J0IHtjYWNoZU5hbWVzfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvY2FjaGVOYW1lcy5tanMnO1xuaW1wb3J0IHtjYWNoZVdyYXBwZXJ9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9jYWNoZVdyYXBwZXIubWpzJztcbmltcG9ydCB7bG9nZ2VyfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvbG9nZ2VyLm1qcyc7XG5pbXBvcnQge1dvcmtib3hFcnJvcn0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL1dvcmtib3hFcnJvci5tanMnO1xuXG5pbXBvcnQge21lc3NhZ2VzfSBmcm9tICcuL3V0aWxzL21lc3NhZ2VzLm1qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24ubWpzJztcblxuXG4vKipcbiAqIEFuIGltcGxlbWVudGF0aW9uIG9mIGFcbiAqIFtjYWNoZS1vbmx5XXtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS93ZWIvZnVuZGFtZW50YWxzL2luc3RhbnQtYW5kLW9mZmxpbmUvb2ZmbGluZS1jb29rYm9vay8jY2FjaGUtb25seX1cbiAqIHJlcXVlc3Qgc3RyYXRlZ3kuXG4gKlxuICogVGhpcyBjbGFzcyBpcyB1c2VmdWwgaWYgeW91IHdhbnQgdG8gdGFrZSBhZHZhbnRhZ2Ugb2YgYW55XG4gKiBbV29ya2JveCBwbHVnaW5zXXtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS93ZWIvdG9vbHMvd29ya2JveC9ndWlkZXMvdXNpbmctcGx1Z2luc30uXG4gKlxuICogSWYgdGhlcmUgaXMgbm8gY2FjaGUgbWF0Y2gsIHRoaXMgd2lsbCB0aHJvdyBhIGBXb3JrYm94RXJyb3JgIGV4Y2VwdGlvbi5cbiAqXG4gKiBAbWVtYmVyb2Ygd29ya2JveC5zdHJhdGVnaWVzXG4gKi9cbmNsYXNzIENhY2hlT25seSB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5jYWNoZU5hbWUgQ2FjaGUgbmFtZSB0byBzdG9yZSBhbmQgcmV0cmlldmVcbiAgICogcmVxdWVzdHMuIERlZmF1bHRzIHRvIGNhY2hlIG5hbWVzIHByb3ZpZGVkIGJ5XG4gICAqIFt3b3JrYm94LWNvcmVde0BsaW5rIHdvcmtib3guY29yZS5jYWNoZU5hbWVzfS5cbiAgICogQHBhcmFtIHtBcnJheTxPYmplY3Q+fSBvcHRpb25zLnBsdWdpbnMgW1BsdWdpbnNde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi90b29scy93b3JrYm94L2d1aWRlcy91c2luZy1wbHVnaW5zfVxuICAgKiB0byB1c2UgaW4gY29uanVuY3Rpb24gd2l0aCB0aGlzIGNhY2hpbmcgc3RyYXRlZ3kuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zLm1hdGNoT3B0aW9ucyBbYENhY2hlUXVlcnlPcHRpb25zYF0oaHR0cHM6Ly93M2MuZ2l0aHViLmlvL1NlcnZpY2VXb3JrZXIvI2RpY3RkZWYtY2FjaGVxdWVyeW9wdGlvbnMpXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICB0aGlzLl9jYWNoZU5hbWUgPSBjYWNoZU5hbWVzLmdldFJ1bnRpbWVOYW1lKG9wdGlvbnMuY2FjaGVOYW1lKTtcbiAgICB0aGlzLl9wbHVnaW5zID0gb3B0aW9ucy5wbHVnaW5zIHx8IFtdO1xuICAgIHRoaXMuX21hdGNoT3B0aW9ucyA9IG9wdGlvbnMubWF0Y2hPcHRpb25zIHx8IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2Qgd2lsbCBwZXJmb3JtIGEgcmVxdWVzdCBzdHJhdGVneSBhbmQgZm9sbG93cyBhbiBBUEkgdGhhdFxuICAgKiB3aWxsIHdvcmsgd2l0aCB0aGVcbiAgICogW1dvcmtib3ggUm91dGVyXXtAbGluayB3b3JrYm94LnJvdXRpbmcuUm91dGVyfS5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICogQHBhcmFtIHtSZXF1ZXN0fSBvcHRpb25zLnJlcXVlc3QgVGhlIHJlcXVlc3QgdG8gcnVuIHRoaXMgc3RyYXRlZ3kgZm9yLlxuICAgKiBAcGFyYW0ge0V2ZW50fSBbb3B0aW9ucy5ldmVudF0gVGhlIGV2ZW50IHRoYXQgdHJpZ2dlcmVkIHRoZSByZXF1ZXN0LlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlPn1cbiAgICovXG4gIGFzeW5jIGhhbmRsZSh7ZXZlbnQsIHJlcXVlc3R9KSB7XG4gICAgcmV0dXJuIHRoaXMubWFrZVJlcXVlc3Qoe1xuICAgICAgZXZlbnQsXG4gICAgICByZXF1ZXN0OiByZXF1ZXN0IHx8IGV2ZW50LnJlcXVlc3QsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgY2FuIGJlIHVzZWQgdG8gcGVyZm9ybSBhIG1ha2UgYSBzdGFuZGFsb25lIHJlcXVlc3Qgb3V0c2lkZSB0aGVcbiAgICogY29udGV4dCBvZiB0aGUgW1dvcmtib3ggUm91dGVyXXtAbGluayB3b3JrYm94LnJvdXRpbmcuUm91dGVyfS5cbiAgICpcbiAgICogU2VlIFwiW0FkdmFuY2VkIFJlY2lwZXNdKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi90b29scy93b3JrYm94L2d1aWRlcy9hZHZhbmNlZC1yZWNpcGVzI21ha2UtcmVxdWVzdHMpXCJcbiAgICogZm9yIG1vcmUgdXNhZ2UgaW5mb3JtYXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAqIEBwYXJhbSB7UmVxdWVzdHxzdHJpbmd9IG9wdGlvbnMucmVxdWVzdCBFaXRoZXIgYVxuICAgKiAgICAgW2BSZXF1ZXN0YF17QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1JlcXVlc3R9XG4gICAqICAgICBvYmplY3QsIG9yIGEgc3RyaW5nIFVSTCwgY29ycmVzcG9uZGluZyB0byB0aGUgcmVxdWVzdCB0byBiZSBtYWRlLlxuICAgKiBAcGFyYW0ge0ZldGNoRXZlbnR9IFtvcHRpb25zLmV2ZW50XSBJZiBwcm92aWRlZCwgYGV2ZW50LndhaXRVbnRpbCgpYCB3aWxsXG4gICAqICAgICBiZSBjYWxsZWQgYXV0b21hdGljYWxseSB0byBleHRlbmQgdGhlIHNlcnZpY2Ugd29ya2VyJ3MgbGlmZXRpbWUuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8UmVzcG9uc2U+fVxuICAgKi9cbiAgYXN5bmMgbWFrZVJlcXVlc3Qoe2V2ZW50LCByZXF1ZXN0fSkge1xuICAgIGlmICh0eXBlb2YgcmVxdWVzdCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJlcXVlc3QgPSBuZXcgUmVxdWVzdChyZXF1ZXN0KTtcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgYXNzZXJ0LmlzSW5zdGFuY2UocmVxdWVzdCwgUmVxdWVzdCwge1xuICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1zdHJhdGVnaWVzJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnQ2FjaGVPbmx5JyxcbiAgICAgICAgZnVuY05hbWU6ICdtYWtlUmVxdWVzdCcsXG4gICAgICAgIHBhcmFtTmFtZTogJ3JlcXVlc3QnLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjYWNoZVdyYXBwZXIubWF0Y2goe1xuICAgICAgY2FjaGVOYW1lOiB0aGlzLl9jYWNoZU5hbWUsXG4gICAgICByZXF1ZXN0LFxuICAgICAgZXZlbnQsXG4gICAgICBtYXRjaE9wdGlvbnM6IHRoaXMuX21hdGNoT3B0aW9ucyxcbiAgICAgIHBsdWdpbnM6IHRoaXMuX3BsdWdpbnMsXG4gICAgfSk7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKFxuICAgICAgICAgIG1lc3NhZ2VzLnN0cmF0ZWd5U3RhcnQoJ0NhY2hlT25seScsIHJlcXVlc3QpKTtcbiAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICBsb2dnZXIubG9nKGBGb3VuZCBhIGNhY2hlZCByZXNwb25zZSBpbiB0aGUgJyR7dGhpcy5fY2FjaGVOYW1lfSdgICtcbiAgICAgICAgICBgIGNhY2hlLmApO1xuICAgICAgICBtZXNzYWdlcy5wcmludEZpbmFsUmVzcG9uc2UocmVzcG9uc2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9nZ2VyLmxvZyhgTm8gcmVzcG9uc2UgZm91bmQgaW4gdGhlICcke3RoaXMuX2NhY2hlTmFtZX0nIGNhY2hlLmApO1xuICAgICAgfVxuICAgICAgbG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgfVxuXG4gICAgaWYgKCFyZXNwb25zZSkge1xuICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignbm8tcmVzcG9uc2UnLCB7dXJsOiByZXF1ZXN0LnVybH0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cbn1cblxuZXhwb3J0IHtDYWNoZU9ubHl9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQge2Fzc2VydH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2Fzc2VydC5tanMnO1xuaW1wb3J0IHtjYWNoZU5hbWVzfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvY2FjaGVOYW1lcy5tanMnO1xuaW1wb3J0IHtjYWNoZVdyYXBwZXJ9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9jYWNoZVdyYXBwZXIubWpzJztcbmltcG9ydCB7ZmV0Y2hXcmFwcGVyfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvZmV0Y2hXcmFwcGVyLm1qcyc7XG5pbXBvcnQge2dldEZyaWVuZGx5VVJMfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvZ2V0RnJpZW5kbHlVUkwubWpzJztcbmltcG9ydCB7bG9nZ2VyfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvbG9nZ2VyLm1qcyc7XG5pbXBvcnQge1dvcmtib3hFcnJvcn0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL1dvcmtib3hFcnJvci5tanMnO1xuXG5pbXBvcnQge21lc3NhZ2VzfSBmcm9tICcuL3V0aWxzL21lc3NhZ2VzLm1qcyc7XG5pbXBvcnQge2NhY2hlT2tBbmRPcGFxdWVQbHVnaW59IGZyb20gJy4vcGx1Z2lucy9jYWNoZU9rQW5kT3BhcXVlUGx1Z2luLm1qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24ubWpzJztcblxuLyoqXG4gKiBBbiBpbXBsZW1lbnRhdGlvbiBvZiBhXG4gKiBbbmV0d29yayBmaXJzdF17QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL2Z1bmRhbWVudGFscy9pbnN0YW50LWFuZC1vZmZsaW5lL29mZmxpbmUtY29va2Jvb2svI25ldHdvcmstZmFsbGluZy1iYWNrLXRvLWNhY2hlfVxuICogcmVxdWVzdCBzdHJhdGVneS5cbiAqXG4gKiBCeSBkZWZhdWx0LCB0aGlzIHN0cmF0ZWd5IHdpbGwgY2FjaGUgcmVzcG9uc2VzIHdpdGggYSAyMDAgc3RhdHVzIGNvZGUgYXNcbiAqIHdlbGwgYXMgW29wYXF1ZSByZXNwb25zZXNde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi90b29scy93b3JrYm94L2d1aWRlcy9oYW5kbGUtdGhpcmQtcGFydHktcmVxdWVzdHN9LlxuICogT3BhcXVlIHJlc3BvbnNlcyBhcmUgYXJlIGNyb3NzLW9yaWdpbiByZXF1ZXN0cyB3aGVyZSB0aGUgcmVzcG9uc2UgZG9lc24ndFxuICogc3VwcG9ydCBbQ09SU117QGxpbmsgaHR0cHM6Ly9lbmFibGUtY29ycy5vcmcvfS5cbiAqXG4gKiBJZiB0aGUgbmV0d29yayByZXF1ZXN0IGZhaWxzLCBhbmQgdGhlcmUgaXMgbm8gY2FjaGUgbWF0Y2gsIHRoaXMgd2lsbCB0aHJvd1xuICogYSBgV29ya2JveEVycm9yYCBleGNlcHRpb24uXG4gKlxuICogQG1lbWJlcm9mIHdvcmtib3guc3RyYXRlZ2llc1xuICovXG5jbGFzcyBOZXR3b3JrRmlyc3Qge1xuICAvKipcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuY2FjaGVOYW1lIENhY2hlIG5hbWUgdG8gc3RvcmUgYW5kIHJldHJpZXZlXG4gICAqIHJlcXVlc3RzLiBEZWZhdWx0cyB0byBjYWNoZSBuYW1lcyBwcm92aWRlZCBieVxuICAgKiBbd29ya2JveC1jb3JlXXtAbGluayB3b3JrYm94LmNvcmUuY2FjaGVOYW1lc30uXG4gICAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gb3B0aW9ucy5wbHVnaW5zIFtQbHVnaW5zXXtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS93ZWIvdG9vbHMvd29ya2JveC9ndWlkZXMvdXNpbmctcGx1Z2luc31cbiAgICogdG8gdXNlIGluIGNvbmp1bmN0aW9uIHdpdGggdGhpcyBjYWNoaW5nIHN0cmF0ZWd5LlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucy5mZXRjaE9wdGlvbnMgVmFsdWVzIHBhc3NlZCBhbG9uZyB0byB0aGVcbiAgICogW2Bpbml0YF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvd09yV29ya2VyR2xvYmFsU2NvcGUvZmV0Y2gjUGFyYW1ldGVycylcbiAgICogb2YgYWxsIGZldGNoKCkgcmVxdWVzdHMgbWFkZSBieSB0aGlzIHN0cmF0ZWd5LlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucy5tYXRjaE9wdGlvbnMgW2BDYWNoZVF1ZXJ5T3B0aW9uc2BdKGh0dHBzOi8vdzNjLmdpdGh1Yi5pby9TZXJ2aWNlV29ya2VyLyNkaWN0ZGVmLWNhY2hlcXVlcnlvcHRpb25zKVxuICAgKiBAcGFyYW0ge251bWJlcn0gb3B0aW9ucy5uZXR3b3JrVGltZW91dFNlY29uZHMgSWYgc2V0LCBhbnkgbmV0d29yayByZXF1ZXN0c1xuICAgKiB0aGF0IGZhaWwgdG8gcmVzcG9uZCB3aXRoaW4gdGhlIHRpbWVvdXQgd2lsbCBmYWxsYmFjayB0byB0aGUgY2FjaGUuXG4gICAqXG4gICAqIFRoaXMgb3B0aW9uIGNhbiBiZSB1c2VkIHRvIGNvbWJhdFxuICAgKiBcIltsaWUtZmlde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi9mdW5kYW1lbnRhbHMvcGVyZm9ybWFuY2UvcG9vci1jb25uZWN0aXZpdHkvI2xpZS1maX1cIlxuICAgKiBzY2VuYXJpb3MuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICB0aGlzLl9jYWNoZU5hbWUgPSBjYWNoZU5hbWVzLmdldFJ1bnRpbWVOYW1lKG9wdGlvbnMuY2FjaGVOYW1lKTtcblxuICAgIGlmIChvcHRpb25zLnBsdWdpbnMpIHtcbiAgICAgIGxldCBpc1VzaW5nQ2FjaGVXaWxsVXBkYXRlID1cbiAgICAgICAgb3B0aW9ucy5wbHVnaW5zLnNvbWUoKHBsdWdpbikgPT4gISFwbHVnaW4uY2FjaGVXaWxsVXBkYXRlKTtcbiAgICAgIHRoaXMuX3BsdWdpbnMgPSBpc1VzaW5nQ2FjaGVXaWxsVXBkYXRlID9cbiAgICAgICAgb3B0aW9ucy5wbHVnaW5zIDogW2NhY2hlT2tBbmRPcGFxdWVQbHVnaW4sIC4uLm9wdGlvbnMucGx1Z2luc107XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE5vIHBsdWdpbnMgcGFzc2VkIGluLCB1c2UgdGhlIGRlZmF1bHQgcGx1Z2luLlxuICAgICAgdGhpcy5fcGx1Z2lucyA9IFtjYWNoZU9rQW5kT3BhcXVlUGx1Z2luXTtcbiAgICB9XG5cbiAgICB0aGlzLl9uZXR3b3JrVGltZW91dFNlY29uZHMgPSBvcHRpb25zLm5ldHdvcmtUaW1lb3V0U2Vjb25kcztcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHRoaXMuX25ldHdvcmtUaW1lb3V0U2Vjb25kcykge1xuICAgICAgICBhc3NlcnQuaXNUeXBlKHRoaXMuX25ldHdvcmtUaW1lb3V0U2Vjb25kcywgJ251bWJlcicsIHtcbiAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1zdHJhdGVnaWVzJyxcbiAgICAgICAgICBjbGFzc05hbWU6ICdOZXR3b3JrRmlyc3QnLFxuICAgICAgICAgIGZ1bmNOYW1lOiAnY29uc3RydWN0b3InLFxuICAgICAgICAgIHBhcmFtTmFtZTogJ25ldHdvcmtUaW1lb3V0U2Vjb25kcycsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2ZldGNoT3B0aW9ucyA9IG9wdGlvbnMuZmV0Y2hPcHRpb25zIHx8IG51bGw7XG4gICAgdGhpcy5fbWF0Y2hPcHRpb25zID0gb3B0aW9ucy5tYXRjaE9wdGlvbnMgfHwgbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCB3aWxsIHBlcmZvcm0gYSByZXF1ZXN0IHN0cmF0ZWd5IGFuZCBmb2xsb3dzIGFuIEFQSSB0aGF0XG4gICAqIHdpbGwgd29yayB3aXRoIHRoZVxuICAgKiBbV29ya2JveCBSb3V0ZXJde0BsaW5rIHdvcmtib3gucm91dGluZy5Sb3V0ZXJ9LlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge1JlcXVlc3R9IG9wdGlvbnMucmVxdWVzdCBUaGUgcmVxdWVzdCB0byBydW4gdGhpcyBzdHJhdGVneSBmb3IuXG4gICAqIEBwYXJhbSB7RXZlbnR9IFtvcHRpb25zLmV2ZW50XSBUaGUgZXZlbnQgdGhhdCB0cmlnZ2VyZWQgdGhlIHJlcXVlc3QuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8UmVzcG9uc2U+fVxuICAgKi9cbiAgYXN5bmMgaGFuZGxlKHtldmVudCwgcmVxdWVzdH0pIHtcbiAgICByZXR1cm4gdGhpcy5tYWtlUmVxdWVzdCh7XG4gICAgICBldmVudCxcbiAgICAgIHJlcXVlc3Q6IHJlcXVlc3QgfHwgZXZlbnQucmVxdWVzdCxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBjYW4gYmUgdXNlZCB0byBwZXJmb3JtIGEgbWFrZSBhIHN0YW5kYWxvbmUgcmVxdWVzdCBvdXRzaWRlIHRoZVxuICAgKiBjb250ZXh0IG9mIHRoZSBbV29ya2JveCBSb3V0ZXJde0BsaW5rIHdvcmtib3gucm91dGluZy5Sb3V0ZXJ9LlxuICAgKlxuICAgKiBTZWUgXCJbQWR2YW5jZWQgUmVjaXBlc10oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL3Rvb2xzL3dvcmtib3gvZ3VpZGVzL2FkdmFuY2VkLXJlY2lwZXMjbWFrZS1yZXF1ZXN0cylcIlxuICAgKiBmb3IgbW9yZSB1c2FnZSBpbmZvcm1hdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICogQHBhcmFtIHtSZXF1ZXN0fHN0cmluZ30gb3B0aW9ucy5yZXF1ZXN0IEVpdGhlciBhXG4gICAqICAgICBbYFJlcXVlc3RgXXtAbGluayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvUmVxdWVzdH1cbiAgICogICAgIG9iamVjdCwgb3IgYSBzdHJpbmcgVVJMLCBjb3JyZXNwb25kaW5nIHRvIHRoZSByZXF1ZXN0IHRvIGJlIG1hZGUuXG4gICAqIEBwYXJhbSB7RmV0Y2hFdmVudH0gW29wdGlvbnMuZXZlbnRdIElmIHByb3ZpZGVkLCBgZXZlbnQud2FpdFVudGlsKClgIHdpbGxcbiAgICogICAgIGJlIGNhbGxlZCBhdXRvbWF0aWNhbGx5IHRvIGV4dGVuZCB0aGUgc2VydmljZSB3b3JrZXIncyBsaWZldGltZS5cbiAgICogQHJldHVybiB7UHJvbWlzZTxSZXNwb25zZT59XG4gICAqL1xuICBhc3luYyBtYWtlUmVxdWVzdCh7ZXZlbnQsIHJlcXVlc3R9KSB7XG4gICAgY29uc3QgbG9ncyA9IFtdO1xuXG4gICAgaWYgKHR5cGVvZiByZXF1ZXN0ID09PSAnc3RyaW5nJykge1xuICAgICAgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KHJlcXVlc3QpO1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBhc3NlcnQuaXNJbnN0YW5jZShyZXF1ZXN0LCBSZXF1ZXN0LCB7XG4gICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXN0cmF0ZWdpZXMnLFxuICAgICAgICBjbGFzc05hbWU6ICdOZXR3b3JrRmlyc3QnLFxuICAgICAgICBmdW5jTmFtZTogJ2hhbmRsZScsXG4gICAgICAgIHBhcmFtTmFtZTogJ21ha2VSZXF1ZXN0JyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHByb21pc2VzID0gW107XG4gICAgbGV0IHRpbWVvdXRJZDtcblxuICAgIGlmICh0aGlzLl9uZXR3b3JrVGltZW91dFNlY29uZHMpIHtcbiAgICAgIGNvbnN0IHtpZCwgcHJvbWlzZX0gPSB0aGlzLl9nZXRUaW1lb3V0UHJvbWlzZSh7cmVxdWVzdCwgZXZlbnQsIGxvZ3N9KTtcbiAgICAgIHRpbWVvdXRJZCA9IGlkO1xuICAgICAgcHJvbWlzZXMucHVzaChwcm9taXNlKTtcbiAgICB9XG5cbiAgICBjb25zdCBuZXR3b3JrUHJvbWlzZSA9XG4gICAgICAgIHRoaXMuX2dldE5ldHdvcmtQcm9taXNlKHt0aW1lb3V0SWQsIHJlcXVlc3QsIGV2ZW50LCBsb2dzfSk7XG4gICAgcHJvbWlzZXMucHVzaChuZXR3b3JrUHJvbWlzZSk7XG5cbiAgICAvLyBQcm9taXNlLnJhY2UoKSB3aWxsIHJlc29sdmUgYXMgc29vbiBhcyB0aGUgZmlyc3QgcHJvbWlzZSByZXNvbHZlcy5cbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBQcm9taXNlLnJhY2UocHJvbWlzZXMpO1xuICAgIC8vIElmIFByb21pc2UucmFjZSgpIHJlc29sdmVkIHdpdGggbnVsbCwgaXQgbWlnaHQgYmUgZHVlIHRvIGEgbmV0d29ya1xuICAgIC8vIHRpbWVvdXQgKyBhIGNhY2hlIG1pc3MuIElmIHRoYXQgd2VyZSB0byBoYXBwZW4sIHdlJ2QgcmF0aGVyIHdhaXQgdW50aWxcbiAgICAvLyB0aGUgbmV0d29ya1Byb21pc2UgcmVzb2x2ZXMgaW5zdGVhZCBvZiByZXR1cm5pbmcgbnVsbC5cbiAgICAvLyBOb3RlIHRoYXQgaXQncyBmaW5lIHRvIGF3YWl0IGFuIGFscmVhZHktcmVzb2x2ZWQgcHJvbWlzZSwgc28gd2UgZG9uJ3RcbiAgICAvLyBoYXZlIHRvIGNoZWNrIHRvIHNlZSBpZiBpdCdzIHN0aWxsIFwiaW4gZmxpZ2h0XCIuXG4gICAgaWYgKCFyZXNwb25zZSkge1xuICAgICAgcmVzcG9uc2UgPSBhd2FpdCBuZXR3b3JrUHJvbWlzZTtcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKFxuICAgICAgICAgIG1lc3NhZ2VzLnN0cmF0ZWd5U3RhcnQoJ05ldHdvcmtGaXJzdCcsIHJlcXVlc3QpKTtcbiAgICAgIGZvciAobGV0IGxvZyBvZiBsb2dzKSB7XG4gICAgICAgIGxvZ2dlci5sb2cobG9nKTtcbiAgICAgIH1cbiAgICAgIG1lc3NhZ2VzLnByaW50RmluYWxSZXNwb25zZShyZXNwb25zZSk7XG4gICAgICBsb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICB9XG5cbiAgICBpZiAoIXJlc3BvbnNlKSB7XG4gICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCduby1yZXNwb25zZScsIHt1cmw6IHJlcXVlc3QudXJsfSk7XG4gICAgfVxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge1JlcXVlc3R9IG9wdGlvbnMucmVxdWVzdFxuICAgKiBAcGFyYW0ge0FycmF5fSBvcHRpb25zLmxvZ3MgQSByZWZlcmVuY2UgdG8gdGhlIGxvZ3MgYXJyYXlcbiAgICogQHBhcmFtIHtFdmVudH0gW29wdGlvbnMuZXZlbnRdXG4gICAqIEByZXR1cm4ge1Byb21pc2U8UmVzcG9uc2U+fVxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2dldFRpbWVvdXRQcm9taXNlKHtyZXF1ZXN0LCBsb2dzLCBldmVudH0pIHtcbiAgICBsZXQgdGltZW91dElkO1xuICAgIGNvbnN0IHRpbWVvdXRQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGNvbnN0IG9uTmV0d29ya1RpbWVvdXQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgbG9ncy5wdXNoKGBUaW1pbmcgb3V0IHRoZSBuZXR3b3JrIHJlc3BvbnNlIGF0IGAgK1xuICAgICAgICAgICAgYCR7dGhpcy5fbmV0d29ya1RpbWVvdXRTZWNvbmRzfSBzZWNvbmRzLmApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzb2x2ZShhd2FpdCB0aGlzLl9yZXNwb25kRnJvbUNhY2hlKHtyZXF1ZXN0LCBldmVudH0pKTtcbiAgICAgIH07XG5cbiAgICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgb25OZXR3b3JrVGltZW91dCxcbiAgICAgICAgICB0aGlzLl9uZXR3b3JrVGltZW91dFNlY29uZHMgKiAxMDAwLFxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICBwcm9taXNlOiB0aW1lb3V0UHJvbWlzZSxcbiAgICAgIGlkOiB0aW1lb3V0SWQsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge251bWJlcnx1bmRlZmluZWR9IG9wdGlvbnMudGltZW91dElkXG4gICAqIEBwYXJhbSB7UmVxdWVzdH0gb3B0aW9ucy5yZXF1ZXN0XG4gICAqIEBwYXJhbSB7QXJyYXl9IG9wdGlvbnMubG9ncyBBIHJlZmVyZW5jZSB0byB0aGUgbG9ncyBBcnJheS5cbiAgICogQHBhcmFtIHtFdmVudH0gW29wdGlvbnMuZXZlbnRdXG4gICAqIEByZXR1cm4ge1Byb21pc2U8UmVzcG9uc2U+fVxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYXN5bmMgX2dldE5ldHdvcmtQcm9taXNlKHt0aW1lb3V0SWQsIHJlcXVlc3QsIGxvZ3MsIGV2ZW50fSkge1xuICAgIGxldCBlcnJvcjtcbiAgICBsZXQgcmVzcG9uc2U7XG4gICAgdHJ5IHtcbiAgICAgIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2hXcmFwcGVyLmZldGNoKHtcbiAgICAgICAgcmVxdWVzdCxcbiAgICAgICAgZXZlbnQsXG4gICAgICAgIGZldGNoT3B0aW9uczogdGhpcy5fZmV0Y2hPcHRpb25zLFxuICAgICAgICBwbHVnaW5zOiB0aGlzLl9wbHVnaW5zLFxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBlcnJvciA9IGVycjtcbiAgICB9XG5cbiAgICBpZiAodGltZW91dElkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgIGxvZ3MucHVzaChgR290IHJlc3BvbnNlIGZyb20gbmV0d29yay5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvZ3MucHVzaChgVW5hYmxlIHRvIGdldCBhIHJlc3BvbnNlIGZyb20gdGhlIG5ldHdvcmsuIFdpbGwgcmVzcG9uZCBgICtcbiAgICAgICAgICBgd2l0aCBhIGNhY2hlZCByZXNwb25zZS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZXJyb3IgfHwgIXJlc3BvbnNlKSB7XG4gICAgICByZXNwb25zZSA9IGF3YWl0IHRoaXMuX3Jlc3BvbmRGcm9tQ2FjaGUoe3JlcXVlc3QsIGV2ZW50fSk7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICBsb2dzLnB1c2goYEZvdW5kIGEgY2FjaGVkIHJlc3BvbnNlIGluIHRoZSAnJHt0aGlzLl9jYWNoZU5hbWV9J2AgK1xuICAgICAgICAgICAgYCBjYWNoZS5gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsb2dzLnB1c2goYE5vIHJlc3BvbnNlIGZvdW5kIGluIHRoZSAnJHt0aGlzLl9jYWNoZU5hbWV9JyBjYWNoZS5gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBLZWVwIHRoZSBzZXJ2aWNlIHdvcmtlciBhbGl2ZSB3aGlsZSB3ZSBwdXQgdGhlIHJlcXVlc3QgaW4gdGhlIGNhY2hlXG4gICAgICBjb25zdCByZXNwb25zZUNsb25lID0gcmVzcG9uc2UuY2xvbmUoKTtcbiAgICAgIGNvbnN0IGNhY2hlUHV0ID0gY2FjaGVXcmFwcGVyLnB1dCh7XG4gICAgICAgIGNhY2hlTmFtZTogdGhpcy5fY2FjaGVOYW1lLFxuICAgICAgICByZXF1ZXN0LFxuICAgICAgICByZXNwb25zZTogcmVzcG9uc2VDbG9uZSxcbiAgICAgICAgZXZlbnQsXG4gICAgICAgIHBsdWdpbnM6IHRoaXMuX3BsdWdpbnMsXG4gICAgICB9KTtcblxuICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhlIGV2ZW50IGhhcyBiZWVuIHJlc3BvbmRlZCB0byBzbyB3ZSBjYW4ga2VlcCB0aGUgU1cgYWxpdmUgdG9cbiAgICAgICAgICAvLyByZXNwb25kIHRvIHRoZSByZXF1ZXN0XG4gICAgICAgICAgZXZlbnQud2FpdFVudGlsKGNhY2hlUHV0KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGxvZ2dlci53YXJuKGBVbmFibGUgdG8gZW5zdXJlIHNlcnZpY2Ugd29ya2VyIHN0YXlzIGFsaXZlIHdoZW4gYCArXG4gICAgICAgICAgICAgIGB1cGRhdGluZyBjYWNoZSBmb3IgJyR7Z2V0RnJpZW5kbHlVUkwocmVxdWVzdC51cmwpfScuYCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFVzZWQgaWYgdGhlIG5ldHdvcmsgdGltZW91dHMgb3IgZmFpbHMgdG8gbWFrZSB0aGUgcmVxdWVzdC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICogQHBhcmFtIHtSZXF1ZXN0fSByZXF1ZXN0IFRoZSByZXF1ZXN0IHRvIG1hdGNoIGluIHRoZSBjYWNoZVxuICAgKiBAcGFyYW0ge0V2ZW50fSBbb3B0aW9ucy5ldmVudF1cbiAgICogQHJldHVybiB7UHJvbWlzZTxPYmplY3Q+fVxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3Jlc3BvbmRGcm9tQ2FjaGUoe2V2ZW50LCByZXF1ZXN0fSkge1xuICAgIHJldHVybiBjYWNoZVdyYXBwZXIubWF0Y2goe1xuICAgICAgY2FjaGVOYW1lOiB0aGlzLl9jYWNoZU5hbWUsXG4gICAgICByZXF1ZXN0LFxuICAgICAgZXZlbnQsXG4gICAgICBtYXRjaE9wdGlvbnM6IHRoaXMuX21hdGNoT3B0aW9ucyxcbiAgICAgIHBsdWdpbnM6IHRoaXMuX3BsdWdpbnMsXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IHtOZXR3b3JrRmlyc3R9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQge2Fzc2VydH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2Fzc2VydC5tanMnO1xuaW1wb3J0IHtjYWNoZU5hbWVzfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvY2FjaGVOYW1lcy5tanMnO1xuaW1wb3J0IHtmZXRjaFdyYXBwZXJ9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9mZXRjaFdyYXBwZXIubWpzJztcbmltcG9ydCB7bG9nZ2VyfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvbG9nZ2VyLm1qcyc7XG5pbXBvcnQge1dvcmtib3hFcnJvcn0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL1dvcmtib3hFcnJvci5tanMnO1xuXG5pbXBvcnQge21lc3NhZ2VzfSBmcm9tICcuL3V0aWxzL21lc3NhZ2VzLm1qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24ubWpzJztcblxuLyoqXG4gKiBBbiBpbXBsZW1lbnRhdGlvbiBvZiBhXG4gKiBbbmV0d29yay1vbmx5XXtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS93ZWIvZnVuZGFtZW50YWxzL2luc3RhbnQtYW5kLW9mZmxpbmUvb2ZmbGluZS1jb29rYm9vay8jbmV0d29yay1vbmx5fVxuICogcmVxdWVzdCBzdHJhdGVneS5cbiAqXG4gKiBUaGlzIGNsYXNzIGlzIHVzZWZ1bCBpZiB5b3Ugd2FudCB0byB0YWtlIGFkdmFudGFnZSBvZiBhbnlcbiAqIFtXb3JrYm94IHBsdWdpbnNde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi90b29scy93b3JrYm94L2d1aWRlcy91c2luZy1wbHVnaW5zfS5cbiAqXG4gKiBJZiB0aGUgbmV0d29yayByZXF1ZXN0IGZhaWxzLCB0aGlzIHdpbGwgdGhyb3cgYSBgV29ya2JveEVycm9yYCBleGNlcHRpb24uXG4gKlxuICogQG1lbWJlcm9mIHdvcmtib3guc3RyYXRlZ2llc1xuICovXG5jbGFzcyBOZXR3b3JrT25seSB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5jYWNoZU5hbWUgQ2FjaGUgbmFtZSB0byBzdG9yZSBhbmQgcmV0cmlldmVcbiAgICogcmVxdWVzdHMuIERlZmF1bHRzIHRvIGNhY2hlIG5hbWVzIHByb3ZpZGVkIGJ5XG4gICAqIFt3b3JrYm94LWNvcmVde0BsaW5rIHdvcmtib3guY29yZS5jYWNoZU5hbWVzfS5cbiAgICogQHBhcmFtIHtBcnJheTxPYmplY3Q+fSBvcHRpb25zLnBsdWdpbnMgW1BsdWdpbnNde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi90b29scy93b3JrYm94L2d1aWRlcy91c2luZy1wbHVnaW5zfVxuICAgKiB0byB1c2UgaW4gY29uanVuY3Rpb24gd2l0aCB0aGlzIGNhY2hpbmcgc3RyYXRlZ3kuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zLmZldGNoT3B0aW9ucyBWYWx1ZXMgcGFzc2VkIGFsb25nIHRvIHRoZVxuICAgKiBbYGluaXRgXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93T3JXb3JrZXJHbG9iYWxTY29wZS9mZXRjaCNQYXJhbWV0ZXJzKVxuICAgKiBvZiBhbGwgZmV0Y2goKSByZXF1ZXN0cyBtYWRlIGJ5IHRoaXMgc3RyYXRlZ3kuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICB0aGlzLl9jYWNoZU5hbWUgPSBjYWNoZU5hbWVzLmdldFJ1bnRpbWVOYW1lKG9wdGlvbnMuY2FjaGVOYW1lKTtcbiAgICB0aGlzLl9wbHVnaW5zID0gb3B0aW9ucy5wbHVnaW5zIHx8IFtdO1xuICAgIHRoaXMuX2ZldGNoT3B0aW9ucyA9IG9wdGlvbnMuZmV0Y2hPcHRpb25zIHx8IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2Qgd2lsbCBwZXJmb3JtIGEgcmVxdWVzdCBzdHJhdGVneSBhbmQgZm9sbG93cyBhbiBBUEkgdGhhdFxuICAgKiB3aWxsIHdvcmsgd2l0aCB0aGVcbiAgICogW1dvcmtib3ggUm91dGVyXXtAbGluayB3b3JrYm94LnJvdXRpbmcuUm91dGVyfS5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICogQHBhcmFtIHtSZXF1ZXN0fSBvcHRpb25zLnJlcXVlc3QgVGhlIHJlcXVlc3QgdG8gcnVuIHRoaXMgc3RyYXRlZ3kgZm9yLlxuICAgKiBAcGFyYW0ge0V2ZW50fSBbb3B0aW9ucy5ldmVudF0gVGhlIGV2ZW50IHRoYXQgdHJpZ2dlcmVkIHRoZSByZXF1ZXN0LlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlPn1cbiAgICovXG4gIGFzeW5jIGhhbmRsZSh7ZXZlbnQsIHJlcXVlc3R9KSB7XG4gICAgcmV0dXJuIHRoaXMubWFrZVJlcXVlc3Qoe1xuICAgICAgZXZlbnQsXG4gICAgICByZXF1ZXN0OiByZXF1ZXN0IHx8IGV2ZW50LnJlcXVlc3QsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgY2FuIGJlIHVzZWQgdG8gcGVyZm9ybSBhIG1ha2UgYSBzdGFuZGFsb25lIHJlcXVlc3Qgb3V0c2lkZSB0aGVcbiAgICogY29udGV4dCBvZiB0aGUgW1dvcmtib3ggUm91dGVyXXtAbGluayB3b3JrYm94LnJvdXRpbmcuUm91dGVyfS5cbiAgICpcbiAgICogU2VlIFwiW0FkdmFuY2VkIFJlY2lwZXNdKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi90b29scy93b3JrYm94L2d1aWRlcy9hZHZhbmNlZC1yZWNpcGVzI21ha2UtcmVxdWVzdHMpXCJcbiAgICogZm9yIG1vcmUgdXNhZ2UgaW5mb3JtYXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAqIEBwYXJhbSB7UmVxdWVzdHxzdHJpbmd9IG9wdGlvbnMucmVxdWVzdCBFaXRoZXIgYVxuICAgKiAgICAgW2BSZXF1ZXN0YF17QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1JlcXVlc3R9XG4gICAqICAgICBvYmplY3QsIG9yIGEgc3RyaW5nIFVSTCwgY29ycmVzcG9uZGluZyB0byB0aGUgcmVxdWVzdCB0byBiZSBtYWRlLlxuICAgKiBAcGFyYW0ge0ZldGNoRXZlbnR9IFtvcHRpb25zLmV2ZW50XSBJZiBwcm92aWRlZCwgYGV2ZW50LndhaXRVbnRpbCgpYCB3aWxsXG4gICAqICAgICBiZSBjYWxsZWQgYXV0b21hdGljYWxseSB0byBleHRlbmQgdGhlIHNlcnZpY2Ugd29ya2VyJ3MgbGlmZXRpbWUuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8UmVzcG9uc2U+fVxuICAgKi9cbiAgYXN5bmMgbWFrZVJlcXVlc3Qoe2V2ZW50LCByZXF1ZXN0fSkge1xuICAgIGlmICh0eXBlb2YgcmVxdWVzdCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJlcXVlc3QgPSBuZXcgUmVxdWVzdChyZXF1ZXN0KTtcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgYXNzZXJ0LmlzSW5zdGFuY2UocmVxdWVzdCwgUmVxdWVzdCwge1xuICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1zdHJhdGVnaWVzJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnTmV0d29ya09ubHknLFxuICAgICAgICBmdW5jTmFtZTogJ2hhbmRsZScsXG4gICAgICAgIHBhcmFtTmFtZTogJ3JlcXVlc3QnLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGV0IGVycm9yO1xuICAgIGxldCByZXNwb25zZTtcbiAgICB0cnkge1xuICAgICAgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaFdyYXBwZXIuZmV0Y2goe1xuICAgICAgICByZXF1ZXN0LFxuICAgICAgICBldmVudCxcbiAgICAgICAgZmV0Y2hPcHRpb25zOiB0aGlzLl9mZXRjaE9wdGlvbnMsXG4gICAgICAgIHBsdWdpbnM6IHRoaXMuX3BsdWdpbnMsXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGVycm9yID0gZXJyO1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBsb2dnZXIuZ3JvdXBDb2xsYXBzZWQoXG4gICAgICAgICAgbWVzc2FnZXMuc3RyYXRlZ3lTdGFydCgnTmV0d29ya09ubHknLCByZXF1ZXN0KSk7XG4gICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgbG9nZ2VyLmxvZyhgR290IHJlc3BvbnNlIGZyb20gbmV0d29yay5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvZ2dlci5sb2coYFVuYWJsZSB0byBnZXQgYSByZXNwb25zZSBmcm9tIHRoZSBuZXR3b3JrLmApO1xuICAgICAgfVxuICAgICAgbWVzc2FnZXMucHJpbnRGaW5hbFJlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuICAgIH1cblxuICAgIGlmICghcmVzcG9uc2UpIHtcbiAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ25vLXJlc3BvbnNlJywge3VybDogcmVxdWVzdC51cmwsIGVycm9yfSk7XG4gICAgfVxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxufVxuXG5leHBvcnQge05ldHdvcmtPbmx5fTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0IHthc3NlcnR9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9hc3NlcnQubWpzJztcbmltcG9ydCB7Y2FjaGVOYW1lc30gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2NhY2hlTmFtZXMubWpzJztcbmltcG9ydCB7Y2FjaGVXcmFwcGVyfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvY2FjaGVXcmFwcGVyLm1qcyc7XG5pbXBvcnQge2ZldGNoV3JhcHBlcn0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2ZldGNoV3JhcHBlci5tanMnO1xuaW1wb3J0IHtnZXRGcmllbmRseVVSTH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2dldEZyaWVuZGx5VVJMLm1qcyc7XG5pbXBvcnQge2xvZ2dlcn0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5tanMnO1xuaW1wb3J0IHtXb3JrYm94RXJyb3J9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9Xb3JrYm94RXJyb3IubWpzJztcblxuaW1wb3J0IHttZXNzYWdlc30gZnJvbSAnLi91dGlscy9tZXNzYWdlcy5tanMnO1xuaW1wb3J0IHtjYWNoZU9rQW5kT3BhcXVlUGx1Z2lufSBmcm9tICcuL3BsdWdpbnMvY2FjaGVPa0FuZE9wYXF1ZVBsdWdpbi5tanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLm1qcyc7XG5cbi8qKlxuICogQW4gaW1wbGVtZW50YXRpb24gb2YgYVxuICogW3N0YWxlLXdoaWxlLXJldmFsaWRhdGVde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi9mdW5kYW1lbnRhbHMvaW5zdGFudC1hbmQtb2ZmbGluZS9vZmZsaW5lLWNvb2tib29rLyNzdGFsZS13aGlsZS1yZXZhbGlkYXRlfVxuICogcmVxdWVzdCBzdHJhdGVneS5cbiAqXG4gKiBSZXNvdXJjZXMgYXJlIHJlcXVlc3RlZCBmcm9tIGJvdGggdGhlIGNhY2hlIGFuZCB0aGUgbmV0d29yayBpbiBwYXJhbGxlbC5cbiAqIFRoZSBzdHJhdGVneSB3aWxsIHJlc3BvbmQgd2l0aCB0aGUgY2FjaGVkIHZlcnNpb24gaWYgYXZhaWxhYmxlLCBvdGhlcndpc2VcbiAqIHdhaXQgZm9yIHRoZSBuZXR3b3JrIHJlc3BvbnNlLiBUaGUgY2FjaGUgaXMgdXBkYXRlZCB3aXRoIHRoZSBuZXR3b3JrIHJlc3BvbnNlXG4gKiB3aXRoIGVhY2ggc3VjY2Vzc2Z1bCByZXF1ZXN0LlxuICpcbiAqIEJ5IGRlZmF1bHQsIHRoaXMgc3RyYXRlZ3kgd2lsbCBjYWNoZSByZXNwb25zZXMgd2l0aCBhIDIwMCBzdGF0dXMgY29kZSBhc1xuICogd2VsbCBhcyBbb3BhcXVlIHJlc3BvbnNlc117QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL3Rvb2xzL3dvcmtib3gvZ3VpZGVzL2hhbmRsZS10aGlyZC1wYXJ0eS1yZXF1ZXN0c30uXG4gKiBPcGFxdWUgcmVzcG9uc2VzIGFyZSBhcmUgY3Jvc3Mtb3JpZ2luIHJlcXVlc3RzIHdoZXJlIHRoZSByZXNwb25zZSBkb2Vzbid0XG4gKiBzdXBwb3J0IFtDT1JTXXtAbGluayBodHRwczovL2VuYWJsZS1jb3JzLm9yZy99LlxuICpcbiAqIElmIHRoZSBuZXR3b3JrIHJlcXVlc3QgZmFpbHMsIGFuZCB0aGVyZSBpcyBubyBjYWNoZSBtYXRjaCwgdGhpcyB3aWxsIHRocm93XG4gKiBhIGBXb3JrYm94RXJyb3JgIGV4Y2VwdGlvbi5cbiAqXG4gKiBAbWVtYmVyb2Ygd29ya2JveC5zdHJhdGVnaWVzXG4gKi9cbmNsYXNzIFN0YWxlV2hpbGVSZXZhbGlkYXRlIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmNhY2hlTmFtZSBDYWNoZSBuYW1lIHRvIHN0b3JlIGFuZCByZXRyaWV2ZVxuICAgKiByZXF1ZXN0cy4gRGVmYXVsdHMgdG8gY2FjaGUgbmFtZXMgcHJvdmlkZWQgYnlcbiAgICogW3dvcmtib3gtY29yZV17QGxpbmsgd29ya2JveC5jb3JlLmNhY2hlTmFtZXN9LlxuICAgKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IG9wdGlvbnMucGx1Z2lucyBbUGx1Z2luc117QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL3Rvb2xzL3dvcmtib3gvZ3VpZGVzL3VzaW5nLXBsdWdpbnN9XG4gICAqIHRvIHVzZSBpbiBjb25qdW5jdGlvbiB3aXRoIHRoaXMgY2FjaGluZyBzdHJhdGVneS5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMuZmV0Y2hPcHRpb25zIFZhbHVlcyBwYXNzZWQgYWxvbmcgdG8gdGhlXG4gICAqIFtgaW5pdGBdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3dPcldvcmtlckdsb2JhbFNjb3BlL2ZldGNoI1BhcmFtZXRlcnMpXG4gICAqIG9mIGFsbCBmZXRjaCgpIHJlcXVlc3RzIG1hZGUgYnkgdGhpcyBzdHJhdGVneS5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMubWF0Y2hPcHRpb25zIFtgQ2FjaGVRdWVyeU9wdGlvbnNgXShodHRwczovL3czYy5naXRodWIuaW8vU2VydmljZVdvcmtlci8jZGljdGRlZi1jYWNoZXF1ZXJ5b3B0aW9ucylcbiAgICovXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMuX2NhY2hlTmFtZSA9IGNhY2hlTmFtZXMuZ2V0UnVudGltZU5hbWUob3B0aW9ucy5jYWNoZU5hbWUpO1xuICAgIHRoaXMuX3BsdWdpbnMgPSBvcHRpb25zLnBsdWdpbnMgfHwgW107XG5cbiAgICBpZiAob3B0aW9ucy5wbHVnaW5zKSB7XG4gICAgICBsZXQgaXNVc2luZ0NhY2hlV2lsbFVwZGF0ZSA9XG4gICAgICAgIG9wdGlvbnMucGx1Z2lucy5zb21lKChwbHVnaW4pID0+ICEhcGx1Z2luLmNhY2hlV2lsbFVwZGF0ZSk7XG4gICAgICB0aGlzLl9wbHVnaW5zID0gaXNVc2luZ0NhY2hlV2lsbFVwZGF0ZSA/XG4gICAgICAgIG9wdGlvbnMucGx1Z2lucyA6IFtjYWNoZU9rQW5kT3BhcXVlUGx1Z2luLCAuLi5vcHRpb25zLnBsdWdpbnNdO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBObyBwbHVnaW5zIHBhc3NlZCBpbiwgdXNlIHRoZSBkZWZhdWx0IHBsdWdpbi5cbiAgICAgIHRoaXMuX3BsdWdpbnMgPSBbY2FjaGVPa0FuZE9wYXF1ZVBsdWdpbl07XG4gICAgfVxuXG4gICAgdGhpcy5fZmV0Y2hPcHRpb25zID0gb3B0aW9ucy5mZXRjaE9wdGlvbnMgfHwgbnVsbDtcbiAgICB0aGlzLl9tYXRjaE9wdGlvbnMgPSBvcHRpb25zLm1hdGNoT3B0aW9ucyB8fCBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHdpbGwgcGVyZm9ybSBhIHJlcXVlc3Qgc3RyYXRlZ3kgYW5kIGZvbGxvd3MgYW4gQVBJIHRoYXRcbiAgICogd2lsbCB3b3JrIHdpdGggdGhlXG4gICAqIFtXb3JrYm94IFJvdXRlcl17QGxpbmsgd29ya2JveC5yb3V0aW5nLlJvdXRlcn0uXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAqIEBwYXJhbSB7UmVxdWVzdH0gb3B0aW9ucy5yZXF1ZXN0IFRoZSByZXF1ZXN0IHRvIHJ1biB0aGlzIHN0cmF0ZWd5IGZvci5cbiAgICogQHBhcmFtIHtFdmVudH0gW29wdGlvbnMuZXZlbnRdIFRoZSBldmVudCB0aGF0IHRyaWdnZXJlZCB0aGUgcmVxdWVzdC5cbiAgICogQHJldHVybiB7UHJvbWlzZTxSZXNwb25zZT59XG4gICAqL1xuICBhc3luYyBoYW5kbGUoe2V2ZW50LCByZXF1ZXN0fSkge1xuICAgIHJldHVybiB0aGlzLm1ha2VSZXF1ZXN0KHtcbiAgICAgIGV2ZW50LFxuICAgICAgcmVxdWVzdDogcmVxdWVzdCB8fCBldmVudC5yZXF1ZXN0LFxuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBjYW4gYmUgdXNlZCB0byBwZXJmb3JtIGEgbWFrZSBhIHN0YW5kYWxvbmUgcmVxdWVzdCBvdXRzaWRlIHRoZVxuICAgKiBjb250ZXh0IG9mIHRoZSBbV29ya2JveCBSb3V0ZXJde0BsaW5rIHdvcmtib3gucm91dGluZy5Sb3V0ZXJ9LlxuICAgKlxuICAgKiBTZWUgXCJbQWR2YW5jZWQgUmVjaXBlc10oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL3Rvb2xzL3dvcmtib3gvZ3VpZGVzL2FkdmFuY2VkLXJlY2lwZXMjbWFrZS1yZXF1ZXN0cylcIlxuICAgKiBmb3IgbW9yZSB1c2FnZSBpbmZvcm1hdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICogQHBhcmFtIHtSZXF1ZXN0fHN0cmluZ30gb3B0aW9ucy5yZXF1ZXN0IEVpdGhlciBhXG4gICAqICAgICBbYFJlcXVlc3RgXXtAbGluayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvUmVxdWVzdH1cbiAgICogICAgIG9iamVjdCwgb3IgYSBzdHJpbmcgVVJMLCBjb3JyZXNwb25kaW5nIHRvIHRoZSByZXF1ZXN0IHRvIGJlIG1hZGUuXG4gICAqIEBwYXJhbSB7RmV0Y2hFdmVudH0gW29wdGlvbnMuZXZlbnRdIElmIHByb3ZpZGVkLCBgZXZlbnQud2FpdFVudGlsKClgIHdpbGxcbiAgICogICAgIGJlIGNhbGxlZCBhdXRvbWF0aWNhbGx5IHRvIGV4dGVuZCB0aGUgc2VydmljZSB3b3JrZXIncyBsaWZldGltZS5cbiAgICogQHJldHVybiB7UHJvbWlzZTxSZXNwb25zZT59XG4gICAqL1xuICBhc3luYyBtYWtlUmVxdWVzdCh7ZXZlbnQsIHJlcXVlc3R9KSB7XG4gICAgY29uc3QgbG9ncyA9IFtdO1xuXG4gICAgaWYgKHR5cGVvZiByZXF1ZXN0ID09PSAnc3RyaW5nJykge1xuICAgICAgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KHJlcXVlc3QpO1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBhc3NlcnQuaXNJbnN0YW5jZShyZXF1ZXN0LCBSZXF1ZXN0LCB7XG4gICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXN0cmF0ZWdpZXMnLFxuICAgICAgICBjbGFzc05hbWU6ICdTdGFsZVdoaWxlUmV2YWxpZGF0ZScsXG4gICAgICAgIGZ1bmNOYW1lOiAnaGFuZGxlJyxcbiAgICAgICAgcGFyYW1OYW1lOiAncmVxdWVzdCcsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBmZXRjaEFuZENhY2hlUHJvbWlzZSA9IHRoaXMuX2dldEZyb21OZXR3b3JrKHtyZXF1ZXN0LCBldmVudH0pO1xuXG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgY2FjaGVXcmFwcGVyLm1hdGNoKHtcbiAgICAgIGNhY2hlTmFtZTogdGhpcy5fY2FjaGVOYW1lLFxuICAgICAgcmVxdWVzdCxcbiAgICAgIGV2ZW50LFxuICAgICAgbWF0Y2hPcHRpb25zOiB0aGlzLl9tYXRjaE9wdGlvbnMsXG4gICAgICBwbHVnaW5zOiB0aGlzLl9wbHVnaW5zLFxuICAgIH0pO1xuICAgIGxldCBlcnJvcjtcbiAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGxvZ3MucHVzaChgRm91bmQgYSBjYWNoZWQgcmVzcG9uc2UgaW4gdGhlICcke3RoaXMuX2NhY2hlTmFtZX0nYCArXG4gICAgICAgICAgYCBjYWNoZS4gV2lsbCB1cGRhdGUgd2l0aCB0aGUgbmV0d29yayByZXNwb25zZSBpbiB0aGUgYmFja2dyb3VuZC5gKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZXZlbnQud2FpdFVudGlsKGZldGNoQW5kQ2FjaGVQcm9taXNlKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgbG9nZ2VyLndhcm4oYFVuYWJsZSB0byBlbnN1cmUgc2VydmljZSB3b3JrZXIgc3RheXMgYWxpdmUgd2hlbiBgICtcbiAgICAgICAgICAgICAgYHVwZGF0aW5nIGNhY2hlIGZvciAnJHtnZXRGcmllbmRseVVSTChyZXF1ZXN0LnVybCl9Jy5gKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgbG9ncy5wdXNoKGBObyByZXNwb25zZSBmb3VuZCBpbiB0aGUgJyR7dGhpcy5fY2FjaGVOYW1lfScgY2FjaGUuIGAgK1xuICAgICAgICAgIGBXaWxsIHdhaXQgZm9yIHRoZSBuZXR3b3JrIHJlc3BvbnNlLmApO1xuICAgICAgfVxuICAgICAgdHJ5IHtcbiAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaEFuZENhY2hlUHJvbWlzZTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBlcnJvciA9IGVycjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKFxuICAgICAgICAgIG1lc3NhZ2VzLnN0cmF0ZWd5U3RhcnQoJ1N0YWxlV2hpbGVSZXZhbGlkYXRlJywgcmVxdWVzdCkpO1xuICAgICAgZm9yIChsZXQgbG9nIG9mIGxvZ3MpIHtcbiAgICAgICAgbG9nZ2VyLmxvZyhsb2cpO1xuICAgICAgfVxuICAgICAgbWVzc2FnZXMucHJpbnRGaW5hbFJlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuICAgIH1cblxuICAgIGlmICghcmVzcG9uc2UpIHtcbiAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ25vLXJlc3BvbnNlJywge3VybDogcmVxdWVzdC51cmwsIGVycm9yfSk7XG4gICAgfVxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge1JlcXVlc3R9IG9wdGlvbnMucmVxdWVzdFxuICAgKiBAcGFyYW0ge0V2ZW50fSBbb3B0aW9ucy5ldmVudF1cbiAgICogQHJldHVybiB7UHJvbWlzZTxSZXNwb25zZT59XG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBhc3luYyBfZ2V0RnJvbU5ldHdvcmsoe3JlcXVlc3QsIGV2ZW50fSkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2hXcmFwcGVyLmZldGNoKHtcbiAgICAgIHJlcXVlc3QsXG4gICAgICBldmVudCxcbiAgICAgIGZldGNoT3B0aW9uczogdGhpcy5fZmV0Y2hPcHRpb25zLFxuICAgICAgcGx1Z2luczogdGhpcy5fcGx1Z2lucyxcbiAgICB9KTtcblxuICAgIGNvbnN0IGNhY2hlUHV0UHJvbWlzZSA9IGNhY2hlV3JhcHBlci5wdXQoe1xuICAgICAgY2FjaGVOYW1lOiB0aGlzLl9jYWNoZU5hbWUsXG4gICAgICByZXF1ZXN0LFxuICAgICAgcmVzcG9uc2U6IHJlc3BvbnNlLmNsb25lKCksXG4gICAgICBldmVudCxcbiAgICAgIHBsdWdpbnM6IHRoaXMuX3BsdWdpbnMsXG4gICAgfSk7XG5cbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGV2ZW50LndhaXRVbnRpbChjYWNoZVB1dFByb21pc2UpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICBsb2dnZXIud2FybihgVW5hYmxlIHRvIGVuc3VyZSBzZXJ2aWNlIHdvcmtlciBzdGF5cyBhbGl2ZSB3aGVuIGAgK1xuICAgICAgICAgICAgYHVwZGF0aW5nIGNhY2hlIGZvciAnJHtnZXRGcmllbmRseVVSTChyZXF1ZXN0LnVybCl9Jy5gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxufVxuXG5leHBvcnQge1N0YWxlV2hpbGVSZXZhbGlkYXRlfTtcbiIsInRyeXtzZWxmWyd3b3JrYm94OnN0cmF0ZWdpZXM6NC4zLjEnXSYmXygpfWNhdGNoKGUpe30vLyBlc2xpbnQtZGlzYWJsZS1saW5lIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQge2xvZ2dlcn0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5tanMnO1xuaW1wb3J0IHtDYWNoZUZpcnN0fSBmcm9tICcuL0NhY2hlRmlyc3QubWpzJztcbmltcG9ydCB7Q2FjaGVPbmx5fSBmcm9tICcuL0NhY2hlT25seS5tanMnO1xuaW1wb3J0IHtOZXR3b3JrRmlyc3R9IGZyb20gJy4vTmV0d29ya0ZpcnN0Lm1qcyc7XG5pbXBvcnQge05ldHdvcmtPbmx5fSBmcm9tICcuL05ldHdvcmtPbmx5Lm1qcyc7XG5pbXBvcnQge1N0YWxlV2hpbGVSZXZhbGlkYXRlfSBmcm9tICcuL1N0YWxlV2hpbGVSZXZhbGlkYXRlLm1qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24ubWpzJztcblxuXG5jb25zdCBtYXBwaW5nID0ge1xuICBjYWNoZUZpcnN0OiBDYWNoZUZpcnN0LFxuICBjYWNoZU9ubHk6IENhY2hlT25seSxcbiAgbmV0d29ya0ZpcnN0OiBOZXR3b3JrRmlyc3QsXG4gIG5ldHdvcmtPbmx5OiBOZXR3b3JrT25seSxcbiAgc3RhbGVXaGlsZVJldmFsaWRhdGU6IFN0YWxlV2hpbGVSZXZhbGlkYXRlLFxufTtcblxuY29uc3QgZGVwcmVjYXRlID0gKHN0cmF0ZWd5KSA9PiB7XG4gIGNvbnN0IFN0cmF0ZWd5Q3RyID0gbWFwcGluZ1tzdHJhdGVneV07XG5cbiAgcmV0dXJuIChvcHRpb25zKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGNvbnN0IHN0cmF0ZWd5Q3RyTmFtZSA9IHN0cmF0ZWd5WzBdLnRvVXBwZXJDYXNlKCkgKyBzdHJhdGVneS5zbGljZSgxKTtcbiAgICAgIGxvZ2dlci53YXJuKGBUaGUgJ3dvcmtib3guc3RyYXRlZ2llcy4ke3N0cmF0ZWd5fSgpJyBmdW5jdGlvbiBoYXMgYmVlbiBgICtcbiAgICAgICAgICBgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIHZlcnNpb24gb2YgV29ya2JveC5cXG5gICtcbiAgICAgICAgICBgUGxlYXNlIHVzZSAnbmV3IHdvcmtib3guc3RyYXRlZ2llcy4ke3N0cmF0ZWd5Q3RyTmFtZX0oKScgaW5zdGVhZC5gKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBTdHJhdGVneUN0cihvcHRpb25zKTtcbiAgfTtcbn07XG5cbi8qKlxuICogQGZ1bmN0aW9uIHdvcmtib3guc3RyYXRlZ2llcy5jYWNoZUZpcnN0XG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBTZWUgdGhlIHtAbGluayB3b3JrYm94LnN0cmF0ZWdpZXMuQ2FjaGVGaXJzdH1cbiAqIGNvbnN0cnVjdG9yIGZvciBtb3JlIGluZm8uXG4gKiBAZGVwcmVjYXRlZCBzaW5jZSB2NC4wLjBcbiAqL1xuY29uc3QgY2FjaGVGaXJzdCA9IGRlcHJlY2F0ZSgnY2FjaGVGaXJzdCcpO1xuXG4vKipcbiAqIEBmdW5jdGlvbiB3b3JrYm94LnN0cmF0ZWdpZXMuY2FjaGVPbmx5XG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBTZWUgdGhlIHtAbGluayB3b3JrYm94LnN0cmF0ZWdpZXMuQ2FjaGVPbmx5fVxuICogY29uc3RydWN0b3IgZm9yIG1vcmUgaW5mby5cbiAqIEBkZXByZWNhdGVkIHNpbmNlIHY0LjAuMFxuICovXG5jb25zdCBjYWNoZU9ubHkgPSBkZXByZWNhdGUoJ2NhY2hlT25seScpO1xuXG4vKipcbiAqIEBmdW5jdGlvbiB3b3JrYm94LnN0cmF0ZWdpZXMubmV0d29ya0ZpcnN0XG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBTZWUgdGhlIHtAbGluayB3b3JrYm94LnN0cmF0ZWdpZXMuTmV0d29ya0ZpcnN0fVxuICogY29uc3RydWN0b3IgZm9yIG1vcmUgaW5mby5cbiAqIEBkZXByZWNhdGVkIHNpbmNlIHY0LjAuMFxuICovXG5jb25zdCBuZXR3b3JrRmlyc3QgPSBkZXByZWNhdGUoJ25ldHdvcmtGaXJzdCcpO1xuXG4vKipcbiAqIEBmdW5jdGlvbiB3b3JrYm94LnN0cmF0ZWdpZXMubmV0d29ya09ubHlcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIFNlZSB0aGUge0BsaW5rIHdvcmtib3guc3RyYXRlZ2llcy5OZXR3b3JrT25seX1cbiAqIGNvbnN0cnVjdG9yIGZvciBtb3JlIGluZm8uXG4gKiBAZGVwcmVjYXRlZCBzaW5jZSB2NC4wLjBcbiAqL1xuY29uc3QgbmV0d29ya09ubHkgPSBkZXByZWNhdGUoJ25ldHdvcmtPbmx5Jyk7XG5cbi8qKlxuICogQGZ1bmN0aW9uIHdvcmtib3guc3RyYXRlZ2llcy5zdGFsZVdoaWxlUmV2YWxpZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgU2VlIHRoZVxuICoge0BsaW5rIHdvcmtib3guc3RyYXRlZ2llcy5TdGFsZVdoaWxlUmV2YWxpZGF0ZX0gY29uc3RydWN0b3IgZm9yIG1vcmUgaW5mby5cbiAqIEBkZXByZWNhdGVkIHNpbmNlIHY0LjAuMFxuICovXG5jb25zdCBzdGFsZVdoaWxlUmV2YWxpZGF0ZSA9IGRlcHJlY2F0ZSgnc3RhbGVXaGlsZVJldmFsaWRhdGUnKTtcblxuLyoqXG4gKiBUaGVyZSBhcmUgY29tbW9uIGNhY2hpbmcgc3RyYXRlZ2llcyB0aGF0IG1vc3Qgc2VydmljZSB3b3JrZXJzIHdpbGwgbmVlZFxuICogYW5kIHVzZS4gVGhpcyBtb2R1bGUgcHJvdmlkZXMgc2ltcGxlIGltcGxlbWVudGF0aW9ucyBvZiB0aGVzZSBzdHJhdGVnaWVzLlxuICpcbiAqIEBuYW1lc3BhY2Ugd29ya2JveC5zdHJhdGVnaWVzXG4gKi9cblxuZXhwb3J0IHtcbiAgQ2FjaGVGaXJzdCxcbiAgQ2FjaGVPbmx5LFxuICBOZXR3b3JrRmlyc3QsXG4gIE5ldHdvcmtPbmx5LFxuICBTdGFsZVdoaWxlUmV2YWxpZGF0ZSxcblxuICAvLyBEZXByZWNhdGVkLi4uXG4gIGNhY2hlRmlyc3QsXG4gIGNhY2hlT25seSxcbiAgbmV0d29ya0ZpcnN0LFxuICBuZXR3b3JrT25seSxcbiAgc3RhbGVXaGlsZVJldmFsaWRhdGUsXG59O1xuXG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCAnLi4vX3ZlcnNpb24ubWpzJztcblxuZXhwb3J0IGNvbnN0IGNhY2hlT2tBbmRPcGFxdWVQbHVnaW4gPSB7XG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgdmFsaWQgcmVzcG9uc2UgKHRvIGFsbG93IGNhY2hpbmcpIGlmIHRoZSBzdGF0dXMgaXMgMjAwIChPSykgb3JcbiAgICogMCAob3BhcXVlKS5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICogQHBhcmFtIHtSZXNwb25zZX0gb3B0aW9ucy5yZXNwb25zZVxuICAgKiBAcmV0dXJuIHtSZXNwb25zZXxudWxsfVxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY2FjaGVXaWxsVXBkYXRlOiAoe3Jlc3BvbnNlfSkgPT4ge1xuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCB8fCByZXNwb25zZS5zdGF0dXMgPT09IDApIHtcbiAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH0sXG59O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQge2xvZ2dlcn0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5tanMnO1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5tanMnO1xuXG5jb25zdCBnZXRGcmllbmRseVVSTCA9ICh1cmwpID0+IHtcbiAgY29uc3QgdXJsT2JqID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uKTtcbiAgaWYgKHVybE9iai5vcmlnaW4gPT09IGxvY2F0aW9uLm9yaWdpbikge1xuICAgIHJldHVybiB1cmxPYmoucGF0aG5hbWU7XG4gIH1cbiAgcmV0dXJuIHVybE9iai5ocmVmO1xufTtcblxuZXhwb3J0IGNvbnN0IG1lc3NhZ2VzID0ge1xuICBzdHJhdGVneVN0YXJ0OiAoc3RyYXRlZ3lOYW1lLCByZXF1ZXN0KSA9PiBgVXNpbmcgJHtzdHJhdGVneU5hbWV9IHRvIGAgK1xuICAgIGByZXNwb25kIHRvICcke2dldEZyaWVuZGx5VVJMKHJlcXVlc3QudXJsKX0nYCxcbiAgcHJpbnRGaW5hbFJlc3BvbnNlOiAocmVzcG9uc2UpID0+IHtcbiAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgIGxvZ2dlci5ncm91cENvbGxhcHNlZChgVmlldyB0aGUgZmluYWwgcmVzcG9uc2UgaGVyZS5gKTtcbiAgICAgIGxvZ2dlci5sb2cocmVzcG9uc2UpO1xuICAgICAgbG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgfVxuICB9LFxufTtcbiIsImltcG9ydCB7IHNraXBXYWl0aW5nLCBjbGllbnRzQ2xhaW0gfSBmcm9tICd3b3JrYm94LWNvcmUnXHJcbmltcG9ydCB7IFBsdWdpbiBhcyBFeHBpcmF0aW9uUGx1Z2luIH0gZnJvbSAnd29ya2JveC1leHBpcmF0aW9uJ1xyXG5pbXBvcnQgeyBOZXR3b3JrT25seSwgTmV0d29ya0ZpcnN0LCBDYWNoZUZpcnN0LCBTdGFsZVdoaWxlUmV2YWxpZGF0ZSB9IGZyb20gJ3dvcmtib3gtc3RyYXRlZ2llcydcclxuaW1wb3J0IHsgcmVnaXN0ZXJSb3V0ZSwgc2V0RGVmYXVsdEhhbmRsZXIsIHNldENhdGNoSGFuZGxlciB9IGZyb20gJ3dvcmtib3gtcm91dGluZydcclxuaW1wb3J0IHsgbWF0Y2hQcmVjYWNoZSwgcHJlY2FjaGUsIHByZWNhY2hlQW5kUm91dGUsIGNsZWFudXBPdXRkYXRlZENhY2hlcyB9IGZyb20gJ3dvcmtib3gtcHJlY2FjaGluZydcclxuXHJcbnNraXBXYWl0aW5nKClcclxuY2xpZW50c0NsYWltKClcclxuXHJcbi8vIG11c3QgaW5jbHVkZSBmb2xsb3dpbmcgbGluZXMgd2hlbiB1c2luZyBpbmplY3QgbWFuaWZlc3QgbW9kdWxlIGZyb20gd29ya2JveFxyXG4vLyBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS93ZWIvdG9vbHMvd29ya2JveC9ndWlkZXMvcHJlY2FjaGUtZmlsZXMvd29ya2JveC1idWlsZCNhZGRfYW5faW5qZWN0aW9uX3BvaW50XHJcbmNvbnN0IFdCX01BTklGRVNUID0gc2VsZi5fX1dCX01BTklGRVNUXHJcbi8vIFByZWNhY2hlIGZhbGxiYWNrIHJvdXRlIGFuZCBpbWFnZVxyXG5XQl9NQU5JRkVTVC5wdXNoKFxyXG4gICAge1xyXG4gICAgICAgIHVybDogJy9mYWxsYmFjaycsXHJcbiAgICAgICAgcmV2aXNpb246ICcxMjM0NTY3ODkwJ1xyXG4gICAgfSxcclxuKVxyXG5wcmVjYWNoZUFuZFJvdXRlKFdCX01BTklGRVNUKVxyXG5cclxuY2xlYW51cE91dGRhdGVkQ2FjaGVzKClcclxucmVnaXN0ZXJSb3V0ZShcclxuICAgICcvJyxcclxuICAgIG5ldyBOZXR3b3JrRmlyc3Qoe1xyXG4gICAgICAgIGNhY2hlTmFtZTogJ3N0YXJ0LXVybCcsXHJcbiAgICAgICAgcGx1Z2luczogW25ldyBFeHBpcmF0aW9uUGx1Z2luKHsgbWF4RW50cmllczogMSwgbWF4QWdlU2Vjb25kczogODY0MDAsIHB1cmdlT25RdW90YUVycm9yOiAhMCB9KV1cclxuICAgIH0pLFxyXG4gICAgJ0dFVCdcclxuKVxyXG5yZWdpc3RlclJvdXRlKFxyXG4gICAgL15odHRwczpcXC9cXC9mb250c1xcLig/Omdvb2dsZWFwaXN8Z3N0YXRpYylcXC5jb21cXC8uKi9pLFxyXG4gICAgbmV3IENhY2hlRmlyc3Qoe1xyXG4gICAgICAgIGNhY2hlTmFtZTogJ2dvb2dsZS1mb250cycsXHJcbiAgICAgICAgcGx1Z2luczogW25ldyBFeHBpcmF0aW9uUGx1Z2luKHsgbWF4RW50cmllczogNCwgbWF4QWdlU2Vjb25kczogMzE1MzZlMywgcHVyZ2VPblF1b3RhRXJyb3I6ICEwIH0pXVxyXG4gICAgfSksXHJcbiAgICAnR0VUJ1xyXG4pXHJcbnJlZ2lzdGVyUm91dGUoXHJcbiAgICAvXFwuKD86ZW90fG90Znx0dGN8dHRmfHdvZmZ8d29mZjJ8Zm9udC5jc3MpJC9pLFxyXG4gICAgbmV3IFN0YWxlV2hpbGVSZXZhbGlkYXRlKHtcclxuICAgICAgICBjYWNoZU5hbWU6ICdzdGF0aWMtZm9udC1hc3NldHMnLFxyXG4gICAgICAgIHBsdWdpbnM6IFtuZXcgRXhwaXJhdGlvblBsdWdpbih7IG1heEVudHJpZXM6IDQsIG1heEFnZVNlY29uZHM6IDYwNDgwMCwgcHVyZ2VPblF1b3RhRXJyb3I6ICEwIH0pXVxyXG4gICAgfSksXHJcbiAgICAnR0VUJ1xyXG4pXHJcbi8vIGRpc2FibGUgaW1hZ2UgY2FjaGUsIHNvIHdlIGNvdWxkIG9ic2VydmUgdGhlIHBsYWNlaG9sZGVyIGltYWdlIHdoZW4gb2ZmbGluZVxyXG5yZWdpc3RlclJvdXRlKFxyXG4gICAgL1xcLig/OmpwZ3xqcGVnfGdpZnxwbmd8c3ZnfGljb3x3ZWJwKSQvaSxcclxuICAgIG5ldyBDYWNoZUZpcnN0KHtcclxuICAgICAgICBjYWNoZU5hbWU6ICdzdGF0aWMtaW1hZ2UtYXNzZXRzJyxcclxuICAgICAgICBwbHVnaW5zOiBbbmV3IEV4cGlyYXRpb25QbHVnaW4oeyBtYXhFbnRyaWVzOiA2NCwgbWF4QWdlU2Vjb25kczogODY0MDAsIHB1cmdlT25RdW90YUVycm9yOiAhMCB9KV1cclxuICAgIH0pLFxyXG4gICAgJ0dFVCdcclxuKVxyXG5yZWdpc3RlclJvdXRlKFxyXG4gICAgL1xcLig/OmpzKSQvaSxcclxuICAgIG5ldyBTdGFsZVdoaWxlUmV2YWxpZGF0ZSh7XHJcbiAgICAgICAgY2FjaGVOYW1lOiAnc3RhdGljLWpzLWFzc2V0cycsXHJcbiAgICAgICAgcGx1Z2luczogW25ldyBFeHBpcmF0aW9uUGx1Z2luKHsgbWF4RW50cmllczogMzIsIG1heEFnZVNlY29uZHM6IDg2NDAwLCBwdXJnZU9uUXVvdGFFcnJvcjogITAgfSldXHJcbiAgICB9KSxcclxuICAgICdHRVQnXHJcbilcclxucmVnaXN0ZXJSb3V0ZShcclxuICAgIC9cXC4oPzpjc3N8bGVzcykkL2ksXHJcbiAgICBuZXcgU3RhbGVXaGlsZVJldmFsaWRhdGUoe1xyXG4gICAgICAgIGNhY2hlTmFtZTogJ3N0YXRpYy1zdHlsZS1hc3NldHMnLFxyXG4gICAgICAgIHBsdWdpbnM6IFtuZXcgRXhwaXJhdGlvblBsdWdpbih7IG1heEVudHJpZXM6IDMyLCBtYXhBZ2VTZWNvbmRzOiA4NjQwMCwgcHVyZ2VPblF1b3RhRXJyb3I6ICEwIH0pXVxyXG4gICAgfSksXHJcbiAgICAnR0VUJ1xyXG4pXHJcbnJlZ2lzdGVyUm91dGUoXHJcbiAgICAvXFwuKD86anNvbnx4bWx8Y3N2KSQvaSxcclxuICAgIG5ldyBOZXR3b3JrRmlyc3Qoe1xyXG4gICAgICAgIGNhY2hlTmFtZTogJ3N0YXRpYy1kYXRhLWFzc2V0cycsXHJcbiAgICAgICAgcGx1Z2luczogW25ldyBFeHBpcmF0aW9uUGx1Z2luKHsgbWF4RW50cmllczogMzIsIG1heEFnZVNlY29uZHM6IDg2NDAwLCBwdXJnZU9uUXVvdGFFcnJvcjogITAgfSldXHJcbiAgICB9KSxcclxuICAgICdHRVQnXHJcbilcclxucmVnaXN0ZXJSb3V0ZShcclxuICAgIC9cXC9hcGlcXC8uKiQvaSxcclxuICAgIG5ldyBOZXR3b3JrRmlyc3Qoe1xyXG4gICAgICAgIGNhY2hlTmFtZTogJ2FwaXMnLFxyXG4gICAgICAgIG5ldHdvcmtUaW1lb3V0U2Vjb25kczogMTAsXHJcbiAgICAgICAgcGx1Z2luczogW25ldyBFeHBpcmF0aW9uUGx1Z2luKHsgbWF4RW50cmllczogMTYsIG1heEFnZVNlY29uZHM6IDg2NDAwLCBwdXJnZU9uUXVvdGFFcnJvcjogITAgfSldXHJcbiAgICB9KSxcclxuICAgICdHRVQnXHJcbilcclxucmVnaXN0ZXJSb3V0ZShcclxuICAgIC8uKi9pLFxyXG4gICAgbmV3IE5ldHdvcmtGaXJzdCh7XHJcbiAgICAgICAgY2FjaGVOYW1lOiAnb3RoZXJzJyxcclxuICAgICAgICBuZXR3b3JrVGltZW91dFNlY29uZHM6IDEwLFxyXG4gICAgICAgIHBsdWdpbnM6IFtuZXcgRXhwaXJhdGlvblBsdWdpbih7IG1heEVudHJpZXM6IDMyLCBtYXhBZ2VTZWNvbmRzOiA4NjQwMCwgcHVyZ2VPblF1b3RhRXJyb3I6ICEwIH0pXVxyXG4gICAgfSksXHJcbiAgICAnR0VUJ1xyXG4pXHJcblxyXG4vLyBmb2xsb3dpbmcgbGluZXMgZ2l2ZXMgeW91IGNvbnRyb2wgb2YgdGhlIG9mZmxpbmUgZmFsbGJhY2sgc3RyYXRlZ2llc1xyXG4vLyBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS93ZWIvdG9vbHMvd29ya2JveC9ndWlkZXMvYWR2YW5jZWQtcmVjaXBlcyNjb21wcmVoZW5zaXZlX2ZhbGxiYWNrc1xyXG5cclxuLy8gVXNlIGEgc3RhbGUtd2hpbGUtcmV2YWxpZGF0ZSBzdHJhdGVneSBmb3IgYWxsIG90aGVyIHJlcXVlc3RzLlxyXG5zZXREZWZhdWx0SGFuZGxlcihuZXcgU3RhbGVXaGlsZVJldmFsaWRhdGUoKSlcclxuXHJcbi8vIFRoaXMgXCJjYXRjaFwiIGhhbmRsZXIgaXMgdHJpZ2dlcmVkIHdoZW4gYW55IG9mIHRoZSBvdGhlciByb3V0ZXMgZmFpbCB0b1xyXG4vLyBnZW5lcmF0ZSBhIHJlc3BvbnNlLlxyXG5zZXRDYXRjaEhhbmRsZXIoKHsgZXZlbnQgfSkgPT4ge1xyXG4gICAgLy8gVGhlIEZBTExCQUNLX1VSTCBlbnRyaWVzIG11c3QgYmUgYWRkZWQgdG8gdGhlIGNhY2hlIGFoZWFkIG9mIHRpbWUsIGVpdGhlclxyXG4gICAgLy8gdmlhIHJ1bnRpbWUgb3IgcHJlY2FjaGluZy4gSWYgdGhleSBhcmUgcHJlY2FjaGVkLCB0aGVuIGNhbGxcclxuICAgIC8vIGBtYXRjaFByZWNhY2hlKEZBTExCQUNLX1VSTClgIChmcm9tIHRoZSBgd29ya2JveC1wcmVjYWNoaW5nYCBwYWNrYWdlKVxyXG4gICAgLy8gdG8gZ2V0IHRoZSByZXNwb25zZSBmcm9tIHRoZSBjb3JyZWN0IGNhY2hlLlxyXG4gICAgLy9cclxuICAgIC8vIFVzZSBldmVudCwgcmVxdWVzdCwgYW5kIHVybCB0byBmaWd1cmUgb3V0IGhvdyB0byByZXNwb25kLlxyXG4gICAgLy8gT25lIGFwcHJvYWNoIHdvdWxkIGJlIHRvIHVzZSByZXF1ZXN0LmRlc3RpbmF0aW9uLCBzZWVcclxuICAgIC8vIGh0dHBzOi8vbWVkaXVtLmNvbS9kZXYtY2hhbm5lbC9zZXJ2aWNlLXdvcmtlci1jYWNoaW5nLXN0cmF0ZWdpZXMtYmFzZWQtb24tcmVxdWVzdC10eXBlcy01NzQxMWRkNzY1MmNcclxuICAgIHN3aXRjaCAoZXZlbnQucmVxdWVzdC5kZXN0aW5hdGlvbikge1xyXG4gICAgICAgIGNhc2UgJ2RvY3VtZW50JzpcclxuICAgICAgICAgICAgLy8gSWYgdXNpbmcgcHJlY2FjaGVkIFVSTHM6XHJcbiAgICAgICAgICAgIHJldHVybiBwcmVjYWNoZSgnL2ZhbGxiYWNrJyk7XHJcbiAgICAgICAgICAgIC8vIHJldHVybiBjYWNoZXMubWF0Y2goJy9mYWxsYmFjaycpXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgY2FzZSAnaW1hZ2UnOlxyXG4gICAgICAgICAgICAvLyBJZiB1c2luZyBwcmVjYWNoZWQgVVJMczpcclxuICAgICAgICAgICAgcmV0dXJuIHByZWNhY2hlKCcvc3RhdGljL2ltYWdlcy9mYWxsYmFjay5wbmcnKTtcclxuICAgICAgICAgICAgLy8gcmV0dXJuIGNhY2hlcy5tYXRjaCgnL3N0YXRpYy9pbWFnZXMvZmFsbGJhY2sucG5nJylcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICBjYXNlICdmb250JzpcclxuICAgICAgICAvLyBJZiB1c2luZyBwcmVjYWNoZWQgVVJMczpcclxuICAgICAgICAvLyByZXR1cm4gcHJlY2FjaGUoRkFMTEJBQ0tfRk9OVF9VUkwpO1xyXG4gICAgICAgIC8vcmV0dXJuIGNhY2hlcy5tYXRjaCgnL3N0YXRpYy9mb250cy9mYWxsYmFjay5vdGYnKVxyXG4gICAgICAgIC8vYnJlYWtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAvLyBJZiB3ZSBkb24ndCBoYXZlIGEgZmFsbGJhY2ssIGp1c3QgcmV0dXJuIGFuIGVycm9yIHJlc3BvbnNlLlxyXG4gICAgICAgICAgICByZXR1cm4gUmVzcG9uc2UuZXJyb3IoKVxyXG4gICAgfVxyXG59KSJdLCJzb3VyY2VSb290IjoiIn0=