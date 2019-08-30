/**
 * 方法修改 Map
 *      __webpack_require__.m -> __webpack_require__.modules
 *      __webpack_require__.c -> __webpack_require__.installedModules
 *      __webpack_require__.d -> __webpack_require__.definePropertyGetter
 *      __webpack_require__.r -> __webpack_require__.markAsESModule
 *      __webpack_require__.e -> __webpack_require__.ensure
 */
/******/
(function (modules) { // webpackBootstrap webpack启动方法
    // install a JSONP callback for chunk loading
    // 提取 chunk 并将 installedChunks[chunkId] 标记为 0 loaded
    function webpackJsonpCallback(data) {
        /******/
        var chunkIds = data[0];
        /******/
        var moreModules = data[1];
        /******/
        /******/
        /******/ 		// add "moreModules" to the modules object,
        /******/ 		// then flag all "chunkIds" as loaded and fire callback
        /******/
        var moduleId, chunkId, i = 0, resolves = [];
        /******/
        for (; i < chunkIds.length; i++) {
            /******/
            chunkId = chunkIds[i];
            /******/
            if (installedChunks[chunkId]) {
                /******/
                resolves.push(installedChunks[chunkId][0]);
                /******/
            }
            /******/
            installedChunks[chunkId] = 0;
            /******/
        }
        /******/
        for (moduleId in moreModules) {
            /******/
            if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
                /******/
                modules[moduleId] = moreModules[moduleId];
                /******/
            }
            /******/
        }
        /******/
        if (parentJsonpFunction) parentJsonpFunction(data);
        /******/
        /******/
        while (resolves.length) {
            /******/
            resolves.shift()();
            /******/
        }
        /******/
        /******/
    };


    // The module cache
    var installedModules = {}; //  缓存
    /******/
    /******/ 	// object to store loaded and loading chunks 状态映射表
    /******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
    /******/ 	// Promise = chunk loading, 0 = chunk loaded
    /******/
    var installedChunks = {
        /******/        "main": 0
        /******/
    };
    /******/
    /******/
    /******/
    /******/ 	// script path function
    /******/
    function jsonpScriptSrc(chunkId) {
        /******/
        return __webpack_require__.p + "" + chunkId + ".bundle.js"
        /******/
    }

    /******/
    /******/ 	// The require function
    /******/
    function __webpack_require__(moduleId) { // require函数
        /******/
        /******/ 		// Check if module is in cache
        /******/
        if (installedModules[moduleId]) { // 如果模块已经初始化了直接返回
            /******/
            return installedModules[moduleId].exports;
            /******/
        }
        /******/ 		// Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
            /******/            i: moduleId, // id
            /******/            l: false, // loaded
            /******/            exports: {}
            /******/
        };
        /******/
        /******/ 		// Execute the module function
        /******/
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__); // 初始化require模块，并绑定 this 为 module.exports
        /******/
        /******/ 		// Flag the module as loaded
        /******/
        module.l = true;
        /******/
        /******/ 		// Return the exports of the module
        /******/
        return module.exports;
        /******/
    }

    /******/
    /******/ 	// This file contains only the entry chunk.
    /******/ 	// The chunk loading function for additional chunks
    /******/
    __webpack_require__.ensure = function requireEnsure(chunkId) {
        /******/
        var promises = [];
        /******/
        /******/
        /******/ 		// JSONP chunk loading for javascript
        /******/
        /******/
        var installedChunkData = installedChunks[chunkId]; // 检查是否已加载
        /******/
        if (installedChunkData !== 0) { // 0 means "already installed".
            /******/
            /******/ 			// a Promise means "currently loading".
            /******/
            if (installedChunkData) { // 正在获取
                /******/
                promises.push(installedChunkData[2]);
                /******/
            } else {
                /******/ 				// setup Promise in chunk cache
                /******/
                var promise = new Promise(function (resolve, reject) {
                    /******/
                    installedChunkData = installedChunks[chunkId] = [resolve, reject];
                    /******/
                });
                /******/
                promises.push(installedChunkData[2] = promise);
                /******/
                /******/ 				// start chunk loading
                /******/
                var script = document.createElement('script');
                /******/
                var onScriptComplete;
                /******/
                /******/
                script.charset = 'utf-8'; // 不需要设置了，因为必须与 html 保持一致
                /******/
                script.timeout = 120;
                /******/
                if (__webpack_require__.nc) {
                    /******/
                    script.setAttribute("nonce", __webpack_require__.nc);
                    /******/
                }
                /******/
                script.src = jsonpScriptSrc(chunkId);
                /******/
                /******/ 				// create error before stack unwound to get useful stacktrace later
                /******/
                var error = new Error();
                /******/
                onScriptComplete = function (event) {
                    /******/ 					// avoid mem leaks in IE.
                    /******/
                    script.onerror = script.onload = null;
                    /******/
                    clearTimeout(timeout);
                    /******/
                    var chunk = installedChunks[chunkId];
                    /******/
                    if (chunk !== 0) { // 如果没有成功执行 jsonP Cb 则 还是为 [resolve, reject]
                        /******/
                        if (chunk) {
                            /******/
                            var errorType = event && (event.type === 'load' ? 'missing' : event.type);
                            /******/
                            var realSrc = event && event.target && event.target.src;
                            /******/
                            error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
                            /******/
                            error.name = 'ChunkLoadError';
                            /******/
                            error.type = errorType;
                            /******/
                            error.request = realSrc;
                            /******/
                            chunk[1](error);
                            /******/
                        }
                        /******/
                        installedChunks[chunkId] = undefined;
                        /******/
                    }
                    /******/
                };
                /******/
                var timeout = setTimeout(function () {
                    /******/
                    onScriptComplete({type: 'timeout', target: script});
                    /******/
                }, 120000);
                /******/
                script.onerror = script.onload = onScriptComplete;
                /******/
                document.head.appendChild(script);
                /******/
            }
            /******/
        }
        /******/
        return Promise.all(promises);
        /******/
    };

    /******/
    /******/
    /******/ 	// expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.modules = modules;
    /******/
    /******/ 	// expose the module cache
    /******/
    __webpack_require__.moduleCaches = installedModules;
    /******/
    /******/ 	// define getter function for harmony exports
    /******/
    __webpack_require__.definePropertyGetter = function (exports, name, getter) { // 定义一个getter函数，用来保证输出的是值的引用，并保证不能被外部模块修改
        /******/
        if (!__webpack_require__.hasOwnProperty(exports, name)) {
            /******/
            Object.defineProperty(exports, name, {enumerable: true, get: getter});
            /******/
        }
        /******/
    };
    /******/
    /******/ 	// define __esModule on exports
    /******/
    __webpack_require__.markAsESModule = function (exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/
            Object.defineProperty(exports, Symbol.toStringTag, {value: 'Module'}); // Object.prototype.toString.call(exports) === '[object Module]'
            /******/
        }
        /******/
        Object.defineProperty(exports, '__esModule', {value: true}); // 表示为__esModule
        /******/
    };
    /******/
    /******/ 	// create a fake namespace object
    /******/ 	// mode & 1: value is a module id, require it
    /******/ 	// mode & 2: merge all properties of value into the ns
    /******/ 	// mode & 4: return value when already ns object
    /******/ 	// mode & 8|1: behave like require
    /******/
    __webpack_require__.t = function (value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/
        if (mode & 8) return value;
        /******/
        if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
        /******/
        var ns = Object.create(null);
        /******/
        __webpack_require__.markAsESModule(ns);
        /******/
        Object.defineProperty(ns, 'default', {enumerable: true, value: value});
        /******/
        if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.definePropertyGetter(ns, key, function (key) {
            return value[key];
        }.bind(null, key));
        /******/
        return ns;
        /******/
    };
    /******/
    /******/ 	// getDefaultExport function for compatibility with non-harmony modules
    /******/
    __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
            /******/            function getDefault() {
                return module['default'];
            } :
            /******/            function getModuleExports() {
                return module;
            };
        /******/
        __webpack_require__.definePropertyGetter(getter, 'a', getter);
        /******/
        return getter;
        /******/
    };
    /******/
    /******/ 	// Object.prototype.hasOwnProperty.call
    /******/
    __webpack_require__.hasOwnProperty = function (object, property) { // object.hasOwnProperty(property)
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ 	// __webpack_public_path__
    /******/
    __webpack_require__.p = "";
    /******/
    /******/ 	// on error function for async loading
    /******/
    __webpack_require__.oe = function (err) {
        console.error(err);
        throw err;
    };
    /******/
    /******/
    var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
    /******/
    var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
    /******/
    jsonpArray.push = webpackJsonpCallback;
    /******/
    jsonpArray = jsonpArray.slice();
    /******/
    for (var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
    /******/
    var parentJsonpFunction = oldJsonpFunction;
    /******/
    /******/
    /******/ 	// Load entry module and return exports
    /******/
    return __webpack_require__(__webpack_require__.s = "./src/index.js");
    /******/
})
/************************************************************************/
/******/({ // {"./src/a.js: function(module,__webpack_exports__,__webpack_require__){eval(...)}", ...}

    /***/ "./src/a.js":
    /*!******************!*\
      !*** ./src/a.js ***!
      \******************/
    /*! exports provided: a, default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        // region eval
        __webpack_require__.markAsESModule(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.definePropertyGetter(__webpack_exports__, "aVal", function () {
            return aVal;
        });
        /* harmony export (binding) */
        __webpack_require__.definePropertyGetter(__webpack_exports__, "aFn", function () {
            return aFn;
        });
        /* harmony export (binding) */
        __webpack_require__.definePropertyGetter(__webpack_exports__, "aFnVar", function () {
            return aFnVar;
        });
        /* harmony import */
        var _b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./b */ "./src/b.js"); // 这里调用了require('b')，aFn因为作用域提升getter时已存在，而aFnVar还是为空

        Object(_b__WEBPACK_IMPORTED_MODULE_0__["default"])();

        let aVal = 1;

        Promise.resolve().then(() => {
            aVal = 2;
        });

        /* harmony default export */
        __webpack_exports__["default"] = (2);

        function aFn() {
            console.log('afn');
        }

        var aFnVar = () => {
            console.log('aFnVar');
        };

        //# sourceURL=webpack:///./src/a.js?
        // endregion

        /***/
    }),

    /***/ "./src/b.js":
    /*!******************!*\
      !*** ./src/b.js ***!
      \******************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        // region eval
        __webpack_require__.markAsESModule(__webpack_exports__);
        /* harmony import */
        var _a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a */ "./src/a.js");

        Object(_a__WEBPACK_IMPORTED_MODULE_0__["aFn"])();
        try {
            Object(_a__WEBPACK_IMPORTED_MODULE_0__["aFnVar"])();
        } catch (e) {
            console.error(e);
        }

        /* harmony default export */
        __webpack_exports__["default"] = (() => {
            console.log('b default')
        });
        //# sourceURL=webpack:///./src/b.js?
        // endregion

        /***/
    }),

    /***/ "./src/index.js":
    /*!**********************!*\
      !*** ./src/index.js ***!
      \**********************/
    /*! no exports provided */
    /***/ (function (module, __webpack_exports__, __webpack_require__) { // this === __webpack_exports__

        "use strict";
        // region eval
        __webpack_require__.markAsESModule(__webpack_exports__);
        /* harmony import */
        var _a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a.js */ "./src/a.js");
        // module a 为：
        //   Module {default: 2, __esModule: true, Symbol(Symbol.toStringTag): "Module"}
        //     aVal: 1
        //     default: 2
        //     Symbol(Symbol.toStringTag): "Module"
        //     __esModule: true
        //     get aVal: ƒ ()

        __webpack_require__.ensure(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./async.js */ "./src/async.js")).then(({default: asyncFn}) => asyncFn());

        console.log(_a_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

        upView(_a_js__WEBPACK_IMPORTED_MODULE_0__["aVal"]); // 1
        setTimeout(() => {
            upView(_a_js__WEBPACK_IMPORTED_MODULE_0__["aVal"]); // 2
        }, 2000);

        function upView(text) {
            console.log(text)
        }

        // endregion
        /***/
    })

    /******/
});
