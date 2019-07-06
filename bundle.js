/******/
(function (modules) { // webpackBootstrap webpack启动方法
    /******/ 	// The module cache
    /******/
    var installedModules = {}; //  缓存
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
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__); // 初始化require模块
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
        // eval("__webpack_require__.markAsESModule(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.definePropertyGetter(__webpack_exports__, \"aVal\", function() { return aVal; });\nlet aVal = 1;\r\n\r\nPromise.resolve().then(() => {\r\n  aVal = 2;\r\n});\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (2);\r\n\n\n//# sourceURL=webpack:///./src/a.js?");
        // region eval
        __webpack_require__.markAsESModule(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.definePropertyGetter(__webpack_exports__, "aVal", function() { return aVal; });
        let aVal = 1;

        Promise.resolve().then(() => {
            aVal = 2;
        });

        /* harmony default export */ __webpack_exports__["default"] = (2);
        //# sourceURL=webpack:///./src/a.js?
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
        // eval("__webpack_require__.markAsESModule(__webpack_exports__);\n/* harmony import */ var _a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a.js */ \"./src/a.js\");\n\n\nconsole.log(_a_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\nupView(_a_js__WEBPACK_IMPORTED_MODULE_0__[\"aVal\"]); // 1\nsetTimeout(() => {\n  upView(_a_js__WEBPACK_IMPORTED_MODULE_0__[\"aVal\"]); // 2\n}, 2000);\n\nfunction upView(text) {\n  document.getElementById(\"app\").innerText = text;\n}\n\n\n//# sourceURL=webpack:///./src/index.js?");
        // region eval
        __webpack_require__.markAsESModule(__webpack_exports__);
        /* harmony import */ var _a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a.js */ "./src/a.js");
        // module a 为：
        //   Module {default: 2, __esModule: true, Symbol(Symbol.toStringTag): "Module"}
        //     aVal: 1
        //     default: 2
        //     Symbol(Symbol.toStringTag): "Module"
        //     __esModule: true
        //     get aVal: ƒ ()

        console.log(_a_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

        upView(_a_js__WEBPACK_IMPORTED_MODULE_0__["aVal"]); // 1
        setTimeout(() => {
            upView(_a_js__WEBPACK_IMPORTED_MODULE_0__["aVal"]); // 2
        }, 2000);

        function upView(text) {
            document.getElementById("app").innerText = text;
        }
        // endregion
        /***/
    })

    /******/
});
