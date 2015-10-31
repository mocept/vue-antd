/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ((function(modules) {
	// Check all modules for deduplicated modules
	for(var i in modules) {
		if(Object.prototype.hasOwnProperty.call(modules, i)) {
			switch(typeof modules[i]) {
			case "function": break;
			case "object":
				// Module can be created from a template
				modules[i] = (function(_m) {
					var args = _m.slice(1), fn = modules[_m[0]];
					return function (a,b,c) {
						fn.apply(this, [a,b,c].concat(args));
					};
				}(modules[i]));
				break;
			default:
				// Module is a copy of another module
				modules[i] = modules[modules[i]];
				break;
			}
		}
	}
	return modules;
}([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _vue = __webpack_require__(93);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _vueRouter = __webpack_require__(313);
	
	var _vueRouter2 = _interopRequireDefault(_vueRouter);
	
	var _vueResource = __webpack_require__(302);
	
	var _vueResource2 = _interopRequireDefault(_vueResource);
	
	var _vueAsyncData = __webpack_require__(233);
	
	var _vueAsyncData2 = _interopRequireDefault(_vueAsyncData);
	
	var _routes = __webpack_require__(96);
	
	var _viewsAppVue = __webpack_require__(272);
	
	var _viewsAppVue2 = _interopRequireDefault(_viewsAppVue);
	
	__webpack_require__(193);
	
	__webpack_require__(191).polyfill();
	
	_vue2['default'].config.debug = true;
	
	// install router
	_vue2['default'].use(_vueRouter2['default']);
	
	// Load Resource
	_vue2['default'].use(_vueResource2['default']);
	
	// use globally
	// you can also just use `VueAsyncData.mixin` where needed
	_vue2['default'].use(_vueAsyncData2['default']);
	
	// create router
	var router = new _vueRouter2['default']({
	  saveScrollPosition: true
	});
	
	// configure router
	(0, _routes.configRouter)(router);
	
	// boostrap the app
	router.start(_vue2['default'].extend(_viewsAppVue2['default']), '#root');
	
	// just for debugging
	window.router = router;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var lang = __webpack_require__(362)
	var extend = lang.extend
	
	extend(exports, lang)
	extend(exports, __webpack_require__(361))
	extend(exports, __webpack_require__(360))
	extend(exports, __webpack_require__(363))
	extend(exports, __webpack_require__(358))
	extend(exports, __webpack_require__(359))


/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};
	
	exports.__esModule = true;

/***/ },
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = '';
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes += ' ' + arg;
				} else if (Array.isArray(arg)) {
					classes += ' ' + classNames.apply(null, arg);
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes += ' ' + key;
						}
					}
				}
			}
	
			return classes.substr(1);
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$defineProperty = __webpack_require__(154)["default"];
	
	exports["default"] = function (obj, key, value) {
	  if (key in obj) {
	    _Object$defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	
	  return obj;
	};
	
	exports.__esModule = true;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _IconfontVue = __webpack_require__(285);
	
	var _IconfontVue2 = _interopRequireDefault(_IconfontVue);

	exports['default'] = _IconfontVue2['default'];
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	
	  /**
	   * Whether to print debug messages.
	   * Also enables stack trace for warnings.
	   *
	   * @type {Boolean}
	   */
	
	  debug: false,
	
	  /**
	   * Whether to suppress warnings.
	   *
	   * @type {Boolean}
	   */
	
	  silent: false,
	
	  /**
	   * Whether to use async rendering.
	   */
	
	  async: true,
	
	  /**
	   * Whether to warn against errors caught when evaluating
	   * expressions.
	   */
	
	  warnExpressionErrors: true,
	
	  /**
	   * Internal flag to indicate the delimiters have been
	   * changed.
	   *
	   * @type {Boolean}
	   */
	
	  _delimitersChanged: true,
	
	  /**
	   * List of asset types that a component can own.
	   *
	   * @type {Array}
	   */
	
	  _assetTypes: [
	    'component',
	    'directive',
	    'elementDirective',
	    'filter',
	    'transition',
	    'partial'
	  ],
	
	  /**
	   * prop binding modes
	   */
	
	  _propBindingModes: {
	    ONE_WAY: 0,
	    TWO_WAY: 1,
	    ONE_TIME: 2
	  },
	
	  /**
	   * Max circular updates allowed in a batcher flush cycle.
	   */
	
	  _maxUpdateCount: 100
	
	}
	
	/**
	 * Interpolation delimiters. Changing these would trigger
	 * the text parser to re-compile the regular expressions.
	 *
	 * @type {Array<String>}
	 */
	
	var delimiters = ['{{', '}}']
	var unsafeDelimiters = ['{{{', '}}}']
	var textParser = __webpack_require__(25)
	
	Object.defineProperty(module.exports, 'delimiters', {
	  get: function () {
	    return delimiters
	  },
	  set: function (val) {
	    delimiters = val
	    textParser.compileRegex()
	  }
	})
	
	Object.defineProperty(module.exports, 'unsafeDelimiters', {
	  get: function () {
	    return unsafeDelimiters
	  },
	  set: function (val) {
	    unsafeDelimiters = val
	    textParser.compileRegex()
	  }
	})


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _ButtonVue = __webpack_require__(282);
	
	var _ButtonVue2 = _interopRequireDefault(_ButtonVue);
	
	var _ButtonGroupVue = __webpack_require__(283);
	
	var _ButtonGroupVue2 = _interopRequireDefault(_ButtonGroupVue);
	
	_ButtonVue2['default'].vButtonGroup = _ButtonGroupVue2['default'];
	
	exports['default'] = _ButtonVue2['default'];
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	exports.__esModule = true;
	exports.warn = warn;
	exports.resolvePath = resolvePath;
	exports.isPromise = isPromise;
	exports.getRouteConfig = getRouteConfig;
	exports.resolveAsyncComponent = resolveAsyncComponent;
	exports.mapParams = mapParams;
	
	var _routeRecognizer = __webpack_require__(86);
	
	var _routeRecognizer2 = _interopRequireDefault(_routeRecognizer);
	
	var genQuery = _routeRecognizer2['default'].prototype.generateQueryString;
	
	// export default for holding the Vue reference
	var _exports = {};
	exports['default'] = _exports;
	
	/**
	 * Warn stuff.
	 *
	 * @param {String} msg
	 */
	
	function warn(msg) {
	  /* istanbul ignore next */
	  if (window.console) {
	    console.warn('[vue-router] ' + msg);
	    /* istanbul ignore if */
	    if (!_exports.Vue || _exports.Vue.config.debug) {
	      console.warn(new Error('warning stack trace:').stack);
	    }
	  }
	}
	
	/**
	 * Resolve a relative path.
	 *
	 * @param {String} base
	 * @param {String} relative
	 * @param {Boolean} append
	 * @return {String}
	 */
	
	function resolvePath(base, relative, append) {
	  var query = base.match(/(\?.*)$/);
	  if (query) {
	    query = query[1];
	    base = base.slice(0, -query.length);
	  }
	  // a query!
	  if (relative.charAt(0) === '?') {
	    return base + relative;
	  }
	  var stack = base.split('/');
	  // remove trailing segment if:
	  // - not appending
	  // - appending to trailing slash (last segment is empty)
	  if (!append || !stack[stack.length - 1]) {
	    stack.pop();
	  }
	  // resolve relative path
	  var segments = relative.replace(/^\//, '').split('/');
	  for (var i = 0; i < segments.length; i++) {
	    var segment = segments[i];
	    if (segment === '.') {
	      continue;
	    } else if (segment === '..') {
	      stack.pop();
	    } else {
	      stack.push(segment);
	    }
	  }
	  // ensure leading slash
	  if (stack[0] !== '') {
	    stack.unshift('');
	  }
	  return stack.join('/');
	}
	
	/**
	 * Forgiving check for a promise
	 *
	 * @param {Object} p
	 * @return {Boolean}
	 */
	
	function isPromise(p) {
	  return p && typeof p.then === 'function';
	}
	
	/**
	 * Retrive a route config field from a component instance
	 * OR a component contructor.
	 *
	 * @param {Function|Vue} component
	 * @param {String} name
	 * @return {*}
	 */
	
	function getRouteConfig(component, name) {
	  var options = component && (component.$options || component.options);
	  return options && options.route && options.route[name];
	}
	
	/**
	 * Resolve an async component factory. Have to do a dirty
	 * mock here because of Vue core's internal API depends on
	 * an ID check.
	 *
	 * @param {Object} handler
	 * @param {Function} cb
	 */
	
	var resolver = undefined;
	
	function resolveAsyncComponent(handler, cb) {
	  if (!resolver) {
	    resolver = {
	      resolve: _exports.Vue.prototype._resolveComponent,
	      $options: {
	        components: {
	          _: handler.component
	        }
	      }
	    };
	  } else {
	    resolver.$options.components._ = handler.component;
	  }
	  resolver.resolve('_', function (Component) {
	    handler.component = Component;
	    cb(Component);
	  });
	}
	
	/**
	 * Map the dynamic segments in a path to params.
	 *
	 * @param {String} path
	 * @param {Object} params
	 * @param {Object} query
	 */
	
	function mapParams(path, params, query) {
	  if (params === undefined) params = {};
	
	  path = path.replace(/:([^\/]+)/g, function (_, key) {
	    var val = params[key];
	    if (!val) {
	      warn('param "' + key + '" not found when generating ' + 'path for "' + path + '" with params ' + JSON.stringify(params));
	    }
	    return val || '';
	  });
	  if (query) {
	    path += genQuery(query);
	  }
	  return path;
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(175)('wks')
	  , Symbol = __webpack_require__(29).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || __webpack_require__(179))('Symbol.' + name));
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var Cache = __webpack_require__(16)
	var templateCache = new Cache(1000)
	var idSelectorCache = new Cache(1000)
	
	var map = {
	  _default: [0, '', ''],
	  legend: [1, '<fieldset>', '</fieldset>'],
	  tr: [2, '<table><tbody>', '</tbody></table>'],
	  col: [
	    2,
	    '<table><tbody></tbody><colgroup>',
	    '</colgroup></table>'
	  ]
	}
	
	map.td =
	map.th = [
	  3,
	  '<table><tbody><tr>',
	  '</tr></tbody></table>'
	]
	
	map.option =
	map.optgroup = [
	  1,
	  '<select multiple="multiple">',
	  '</select>'
	]
	
	map.thead =
	map.tbody =
	map.colgroup =
	map.caption =
	map.tfoot = [1, '<table>', '</table>']
	
	map.g =
	map.defs =
	map.symbol =
	map.use =
	map.image =
	map.text =
	map.circle =
	map.ellipse =
	map.line =
	map.path =
	map.polygon =
	map.polyline =
	map.rect = [
	  1,
	  '<svg ' +
	    'xmlns="http://www.w3.org/2000/svg" ' +
	    'xmlns:xlink="http://www.w3.org/1999/xlink" ' +
	    'xmlns:ev="http://www.w3.org/2001/xml-events"' +
	    'version="1.1">',
	  '</svg>'
	]
	
	/**
	 * Check if a node is a supported template node with a
	 * DocumentFragment content.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */
	
	function isRealTemplate (node) {
	  return _.isTemplate(node) &&
	    node.content instanceof DocumentFragment
	}
	
	var tagRE = /<([\w:]+)/
	var entityRE = /&\w+;|&#\d+;|&#x[\dA-F]+;/
	
	/**
	 * Convert a string template to a DocumentFragment.
	 * Determines correct wrapping by tag types. Wrapping
	 * strategy found in jQuery & component/domify.
	 *
	 * @param {String} templateString
	 * @return {DocumentFragment}
	 */
	
	function stringToFragment (templateString) {
	  // try a cache hit first
	  var hit = templateCache.get(templateString)
	  if (hit) {
	    return hit
	  }
	
	  var frag = document.createDocumentFragment()
	  var tagMatch = templateString.match(tagRE)
	  var entityMatch = entityRE.test(templateString)
	
	  if (!tagMatch && !entityMatch) {
	    // text only, return a single text node.
	    frag.appendChild(
	      document.createTextNode(templateString)
	    )
	  } else {
	
	    var tag = tagMatch && tagMatch[1]
	    var wrap = map[tag] || map._default
	    var depth = wrap[0]
	    var prefix = wrap[1]
	    var suffix = wrap[2]
	    var node = document.createElement('div')
	
	    node.innerHTML = prefix + templateString.trim() + suffix
	    while (depth--) {
	      node = node.lastChild
	    }
	
	    var child
	    /* eslint-disable no-cond-assign */
	    while (child = node.firstChild) {
	    /* eslint-enable no-cond-assign */
	      frag.appendChild(child)
	    }
	  }
	
	  templateCache.put(templateString, frag)
	  return frag
	}
	
	/**
	 * Convert a template node to a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {DocumentFragment}
	 */
	
	function nodeToFragment (node) {
	  // if its a template tag and the browser supports it,
	  // its content is already a document fragment.
	  if (isRealTemplate(node)) {
	    _.trimNode(node.content)
	    return node.content
	  }
	  // script template
	  if (node.tagName === 'SCRIPT') {
	    return stringToFragment(node.textContent)
	  }
	  // normal node, clone it to avoid mutating the original
	  var clone = exports.clone(node)
	  var frag = document.createDocumentFragment()
	  var child
	  /* eslint-disable no-cond-assign */
	  while (child = clone.firstChild) {
	  /* eslint-enable no-cond-assign */
	    frag.appendChild(child)
	  }
	  _.trimNode(frag)
	  return frag
	}
	
	// Test for the presence of the Safari template cloning bug
	// https://bugs.webkit.org/show_bug.cgi?id=137755
	var hasBrokenTemplate = (function () {
	  /* istanbul ignore else */
	  if (_.inBrowser) {
	    var a = document.createElement('div')
	    a.innerHTML = '<template>1</template>'
	    return !a.cloneNode(true).firstChild.innerHTML
	  } else {
	    return false
	  }
	})()
	
	// Test for IE10/11 textarea placeholder clone bug
	var hasTextareaCloneBug = (function () {
	  /* istanbul ignore else */
	  if (_.inBrowser) {
	    var t = document.createElement('textarea')
	    t.placeholder = 't'
	    return t.cloneNode(true).value === 't'
	  } else {
	    return false
	  }
	})()
	
	/**
	 * 1. Deal with Safari cloning nested <template> bug by
	 *    manually cloning all template instances.
	 * 2. Deal with IE10/11 textarea placeholder bug by setting
	 *    the correct value after cloning.
	 *
	 * @param {Element|DocumentFragment} node
	 * @return {Element|DocumentFragment}
	 */
	
	exports.clone = function (node) {
	  if (!node.querySelectorAll) {
	    return node.cloneNode()
	  }
	  var res = node.cloneNode(true)
	  var i, original, cloned
	  /* istanbul ignore if */
	  if (hasBrokenTemplate) {
	    var clone = res
	    if (isRealTemplate(node)) {
	      node = node.content
	      clone = res.content
	    }
	    original = node.querySelectorAll('template')
	    if (original.length) {
	      cloned = clone.querySelectorAll('template')
	      i = cloned.length
	      while (i--) {
	        cloned[i].parentNode.replaceChild(
	          exports.clone(original[i]),
	          cloned[i]
	        )
	      }
	    }
	  }
	  /* istanbul ignore if */
	  if (hasTextareaCloneBug) {
	    if (node.tagName === 'TEXTAREA') {
	      res.value = node.value
	    } else {
	      original = node.querySelectorAll('textarea')
	      if (original.length) {
	        cloned = res.querySelectorAll('textarea')
	        i = cloned.length
	        while (i--) {
	          cloned[i].value = original[i].value
	        }
	      }
	    }
	  }
	  return res
	}
	
	/**
	 * Process the template option and normalizes it into a
	 * a DocumentFragment that can be used as a partial or a
	 * instance template.
	 *
	 * @param {*} template
	 *    Possible values include:
	 *    - DocumentFragment object
	 *    - Node object of type Template
	 *    - id selector: '#some-template-id'
	 *    - template string: '<div><span>{{msg}}</span></div>'
	 * @param {Boolean} clone
	 * @param {Boolean} noSelector
	 * @return {DocumentFragment|undefined}
	 */
	
	exports.parse = function (template, clone, noSelector) {
	  var node, frag
	
	  // if the template is already a document fragment,
	  // do nothing
	  if (template instanceof DocumentFragment) {
	    _.trimNode(template)
	    return clone
	      ? exports.clone(template)
	      : template
	  }
	
	  if (typeof template === 'string') {
	    // id selector
	    if (!noSelector && template.charAt(0) === '#') {
	      // id selector can be cached too
	      frag = idSelectorCache.get(template)
	      if (!frag) {
	        node = document.getElementById(template.slice(1))
	        if (node) {
	          frag = nodeToFragment(node)
	          // save selector to cache
	          idSelectorCache.put(template, frag)
	        }
	      }
	    } else {
	      // normal string template
	      frag = stringToFragment(template)
	    }
	  } else if (template.nodeType) {
	    // a direct node
	    frag = nodeToFragment(template)
	  }
	
	  return frag && clone
	    ? exports.clone(frag)
	    : frag
	}


/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 13 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.1'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 14 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}
	
	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 16 */
/***/ function(module, exports) {

	/**
	 * A doubly linked list-based Least Recently Used (LRU)
	 * cache. Will keep most recently used items while
	 * discarding least recently used items when its limit is
	 * reached. This is a bare-bone version of
	 * Rasmus Andersson's js-lru:
	 *
	 *   https://github.com/rsms/js-lru
	 *
	 * @param {Number} limit
	 * @constructor
	 */
	
	function Cache (limit) {
	  this.size = 0
	  this.limit = limit
	  this.head = this.tail = undefined
	  this._keymap = Object.create(null)
	}
	
	var p = Cache.prototype
	
	/**
	 * Put <value> into the cache associated with <key>.
	 * Returns the entry which was removed to make room for
	 * the new entry. Otherwise undefined is returned.
	 * (i.e. if there was enough room already).
	 *
	 * @param {String} key
	 * @param {*} value
	 * @return {Entry|undefined}
	 */
	
	p.put = function (key, value) {
	  var entry = {
	    key: key,
	    value: value
	  }
	  this._keymap[key] = entry
	  if (this.tail) {
	    this.tail.newer = entry
	    entry.older = this.tail
	  } else {
	    this.head = entry
	  }
	  this.tail = entry
	  if (this.size === this.limit) {
	    return this.shift()
	  } else {
	    this.size++
	  }
	}
	
	/**
	 * Purge the least recently used (oldest) entry from the
	 * cache. Returns the removed entry or undefined if the
	 * cache was empty.
	 */
	
	p.shift = function () {
	  var entry = this.head
	  if (entry) {
	    this.head = this.head.newer
	    this.head.older = undefined
	    entry.newer = entry.older = undefined
	    this._keymap[entry.key] = undefined
	  }
	  return entry
	}
	
	/**
	 * Get and register recent use of <key>. Returns the value
	 * associated with <key> or undefined if not in cache.
	 *
	 * @param {String} key
	 * @param {Boolean} returnEntry
	 * @return {Entry|*}
	 */
	
	p.get = function (key, returnEntry) {
	  var entry = this._keymap[key]
	  if (entry === undefined) return
	  if (entry === this.tail) {
	    return returnEntry
	      ? entry
	      : entry.value
	  }
	  // HEAD--------------TAIL
	  //   <.older   .newer>
	  //  <--- add direction --
	  //   A  B  C  <D>  E
	  if (entry.newer) {
	    if (entry === this.head) {
	      this.head = entry.newer
	    }
	    entry.newer.older = entry.older // C <-- E.
	  }
	  if (entry.older) {
	    entry.older.newer = entry.newer // C. --> E
	  }
	  entry.newer = undefined // D --x
	  entry.older = this.tail // D. --> E
	  if (this.tail) {
	    this.tail.newer = entry // E. <-- D
	  }
	  this.tail = entry
	  return returnEntry
	    ? entry
	    : entry.value
	}
	
	module.exports = Cache


/***/ },
/* 17 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	
	_.extend(exports, __webpack_require__(324))
	_.extend(exports, __webpack_require__(325))


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var Cache = __webpack_require__(16)
	var cache = new Cache(1000)
	var filterTokenRE = /[^\s'"]+|'[^']*'|"[^"]*"/g
	var reservedArgRE = /^in$|^-?\d+/
	
	/**
	 * Parser state
	 */
	
	var str, dir
	var c, i, l, lastFilterIndex
	var inSingle, inDouble, curly, square, paren
	
	/**
	 * Push a filter to the current directive object
	 */
	
	function pushFilter () {
	  var exp = str.slice(lastFilterIndex, i).trim()
	  var filter
	  if (exp) {
	    filter = {}
	    var tokens = exp.match(filterTokenRE)
	    filter.name = tokens[0]
	    if (tokens.length > 1) {
	      filter.args = tokens.slice(1).map(processFilterArg)
	    }
	  }
	  if (filter) {
	    (dir.filters = dir.filters || []).push(filter)
	  }
	  lastFilterIndex = i + 1
	}
	
	/**
	 * Check if an argument is dynamic and strip quotes.
	 *
	 * @param {String} arg
	 * @return {Object}
	 */
	
	function processFilterArg (arg) {
	  if (reservedArgRE.test(arg)) {
	    return {
	      value: _.toNumber(arg),
	      dynamic: false
	    }
	  } else {
	    var stripped = _.stripQuotes(arg)
	    var dynamic = stripped === arg
	    return {
	      value: dynamic ? arg : stripped,
	      dynamic: dynamic
	    }
	  }
	}
	
	/**
	 * Parse a directive value and extract the expression
	 * and its filters into a descriptor.
	 *
	 * Example:
	 *
	 * "a + 1 | uppercase" will yield:
	 * {
	 *   expression: 'a + 1',
	 *   filters: [
	 *     { name: 'uppercase', args: null }
	 *   ]
	 * }
	 *
	 * @param {String} str
	 * @return {Object}
	 */
	
	exports.parse = function (s) {
	
	  var hit = cache.get(s)
	  if (hit) {
	    return hit
	  }
	
	  // reset parser state
	  str = s
	  inSingle = inDouble = false
	  curly = square = paren = 0
	  lastFilterIndex = 0
	  dir = {}
	
	  for (i = 0, l = str.length; i < l; i++) {
	    c = str.charCodeAt(i)
	    if (inSingle) {
	      // check single quote
	      if (c === 0x27) inSingle = !inSingle
	    } else if (inDouble) {
	      // check double quote
	      if (c === 0x22) inDouble = !inDouble
	    } else if (
	      c === 0x7C && // pipe
	      str.charCodeAt(i + 1) !== 0x7C &&
	      str.charCodeAt(i - 1) !== 0x7C
	    ) {
	      if (dir.expression == null) {
	        // first filter, end of expression
	        lastFilterIndex = i + 1
	        dir.expression = str.slice(0, i).trim()
	      } else {
	        // already has filter
	        pushFilter()
	      }
	    } else {
	      switch (c) {
	        case 0x22: inDouble = true; break // "
	        case 0x27: inSingle = true; break // '
	        case 0x28: paren++; break         // (
	        case 0x29: paren--; break         // )
	        case 0x5B: square++; break        // [
	        case 0x5D: square--; break        // ]
	        case 0x7B: curly++; break         // {
	        case 0x7D: curly--; break         // }
	      }
	    }
	  }
	
	  if (dir.expression == null) {
	    dir.expression = str.slice(0, i).trim()
	  } else if (lastFilterIndex !== 0) {
	    pushFilter()
	  }
	
	  cache.put(s, dir)
	  return dir
	}


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var Cache = __webpack_require__(16)
	var pathCache = new Cache(1000)
	var identRE = exports.identRE = /^[$_a-zA-Z]+[\w$]*$/
	
	// actions
	var APPEND = 0
	var PUSH = 1
	
	// states
	var BEFORE_PATH = 0
	var IN_PATH = 1
	var BEFORE_IDENT = 2
	var IN_IDENT = 3
	var BEFORE_ELEMENT = 4
	var AFTER_ZERO = 5
	var IN_INDEX = 6
	var IN_SINGLE_QUOTE = 7
	var IN_DOUBLE_QUOTE = 8
	var IN_SUB_PATH = 9
	var AFTER_ELEMENT = 10
	var AFTER_PATH = 11
	var ERROR = 12
	
	var pathStateMachine = []
	
	pathStateMachine[BEFORE_PATH] = {
	  'ws': [BEFORE_PATH],
	  'ident': [IN_IDENT, APPEND],
	  '[': [BEFORE_ELEMENT],
	  'eof': [AFTER_PATH]
	}
	
	pathStateMachine[IN_PATH] = {
	  'ws': [IN_PATH],
	  '.': [BEFORE_IDENT],
	  '[': [BEFORE_ELEMENT],
	  'eof': [AFTER_PATH]
	}
	
	pathStateMachine[BEFORE_IDENT] = {
	  'ws': [BEFORE_IDENT],
	  'ident': [IN_IDENT, APPEND]
	}
	
	pathStateMachine[IN_IDENT] = {
	  'ident': [IN_IDENT, APPEND],
	  '0': [IN_IDENT, APPEND],
	  'number': [IN_IDENT, APPEND],
	  'ws': [IN_PATH, PUSH],
	  '.': [BEFORE_IDENT, PUSH],
	  '[': [BEFORE_ELEMENT, PUSH],
	  'eof': [AFTER_PATH, PUSH]
	}
	
	pathStateMachine[BEFORE_ELEMENT] = {
	  'ws': [BEFORE_ELEMENT],
	  '0': [AFTER_ZERO, APPEND],
	  'number': [IN_INDEX, APPEND],
	  "'": [IN_SINGLE_QUOTE, APPEND, ''],
	  '"': [IN_DOUBLE_QUOTE, APPEND, ''],
	  'ident': [IN_SUB_PATH, APPEND, '*']
	}
	
	pathStateMachine[AFTER_ZERO] = {
	  'ws': [AFTER_ELEMENT, PUSH],
	  ']': [IN_PATH, PUSH]
	}
	
	pathStateMachine[IN_INDEX] = {
	  '0': [IN_INDEX, APPEND],
	  'number': [IN_INDEX, APPEND],
	  'ws': [AFTER_ELEMENT],
	  ']': [IN_PATH, PUSH]
	}
	
	pathStateMachine[IN_SINGLE_QUOTE] = {
	  "'": [AFTER_ELEMENT],
	  'eof': ERROR,
	  'else': [IN_SINGLE_QUOTE, APPEND]
	}
	
	pathStateMachine[IN_DOUBLE_QUOTE] = {
	  '"': [AFTER_ELEMENT],
	  'eof': ERROR,
	  'else': [IN_DOUBLE_QUOTE, APPEND]
	}
	
	pathStateMachine[IN_SUB_PATH] = {
	  'ident': [IN_SUB_PATH, APPEND],
	  '0': [IN_SUB_PATH, APPEND],
	  'number': [IN_SUB_PATH, APPEND],
	  'ws': [AFTER_ELEMENT],
	  ']': [IN_PATH, PUSH]
	}
	
	pathStateMachine[AFTER_ELEMENT] = {
	  'ws': [AFTER_ELEMENT],
	  ']': [IN_PATH, PUSH]
	}
	
	/**
	 * Determine the type of a character in a keypath.
	 *
	 * @param {Char} ch
	 * @return {String} type
	 */
	
	function getPathCharType (ch) {
	  if (ch === undefined) {
	    return 'eof'
	  }
	
	  var code = ch.charCodeAt(0)
	
	  switch (code) {
	    case 0x5B: // [
	    case 0x5D: // ]
	    case 0x2E: // .
	    case 0x22: // "
	    case 0x27: // '
	    case 0x30: // 0
	      return ch
	
	    case 0x5F: // _
	    case 0x24: // $
	      return 'ident'
	
	    case 0x20: // Space
	    case 0x09: // Tab
	    case 0x0A: // Newline
	    case 0x0D: // Return
	    case 0xA0:  // No-break space
	    case 0xFEFF:  // Byte Order Mark
	    case 0x2028:  // Line Separator
	    case 0x2029:  // Paragraph Separator
	      return 'ws'
	  }
	
	  // a-z, A-Z
	  if (
	    (code >= 0x61 && code <= 0x7A) ||
	    (code >= 0x41 && code <= 0x5A)
	  ) {
	    return 'ident'
	  }
	
	  // 1-9
	  if (code >= 0x31 && code <= 0x39) {
	    return 'number'
	  }
	
	  return 'else'
	}
	
	/**
	 * Parse a string path into an array of segments
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */
	
	function parsePath (path) {
	  var keys = []
	  var index = -1
	  var mode = BEFORE_PATH
	  var c, newChar, key, type, transition, action, typeMap
	
	  var actions = []
	  actions[PUSH] = function () {
	    if (key === undefined) {
	      return
	    }
	    keys.push(key)
	    key = undefined
	  }
	  actions[APPEND] = function () {
	    if (key === undefined) {
	      key = newChar
	    } else {
	      key += newChar
	    }
	  }
	
	  function maybeUnescapeQuote () {
	    var nextChar = path[index + 1]
	    if ((mode === IN_SINGLE_QUOTE && nextChar === "'") ||
	        (mode === IN_DOUBLE_QUOTE && nextChar === '"')) {
	      index++
	      newChar = nextChar
	      actions[APPEND]()
	      return true
	    }
	  }
	
	  while (mode != null) {
	    index++
	    c = path[index]
	
	    if (c === '\\' && maybeUnescapeQuote()) {
	      continue
	    }
	
	    type = getPathCharType(c)
	    typeMap = pathStateMachine[mode]
	    transition = typeMap[type] || typeMap['else'] || ERROR
	
	    if (transition === ERROR) {
	      return // parse error
	    }
	
	    mode = transition[0]
	    action = actions[transition[1]]
	    if (action) {
	      newChar = transition[2]
	      newChar = newChar === undefined
	        ? c
	        : newChar === '*'
	          ? newChar + c
	          : newChar
	      action()
	    }
	
	    if (mode === AFTER_PATH) {
	      keys.raw = path
	      return keys
	    }
	  }
	}
	
	/**
	 * Format a accessor segment based on its type.
	 *
	 * @param {String} key
	 * @return {Boolean}
	 */
	
	function formatAccessor (key) {
	  if (identRE.test(key)) { // identifier
	    return '.' + key
	  } else if (+key === key >>> 0) { // bracket index
	    return '[' + key + ']'
	  } else if (key.charAt(0) === '*') {
	    return '[o' + formatAccessor(key.slice(1)) + ']'
	  } else { // bracket string
	    return '["' + key.replace(/"/g, '\\"') + '"]'
	  }
	}
	
	/**
	 * Compiles a getter function with a fixed path.
	 * The fixed path getter supresses errors.
	 *
	 * @param {Array} path
	 * @return {Function}
	 */
	
	exports.compileGetter = function (path) {
	  var body = 'return o' + path.map(formatAccessor).join('')
	  return new Function('o', body)
	}
	
	/**
	 * External parse that check for a cache hit first
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */
	
	exports.parse = function (path) {
	  var hit = pathCache.get(path)
	  if (!hit) {
	    hit = parsePath(path)
	    if (hit) {
	      hit.get = exports.compileGetter(hit)
	      pathCache.put(path, hit)
	    }
	  }
	  return hit
	}
	
	/**
	 * Get from an object from a path string
	 *
	 * @param {Object} obj
	 * @param {String} path
	 */
	
	exports.get = function (obj, path) {
	  path = exports.parse(path)
	  if (path) {
	    return path.get(obj)
	  }
	}
	
	/**
	 * Warn against setting non-existent root path on a vm.
	 */
	
	var warnNonExistent
	if (true) {
	  warnNonExistent = function (path) {
	    _.warn(
	      'You are setting a non-existent path "' + path.raw + '" ' +
	      'on a vm instance. Consider pre-initializing the property ' +
	      'with the "data" option for more reliable reactivity ' +
	      'and better performance.'
	    )
	  }
	}
	
	/**
	 * Set on an object from a path
	 *
	 * @param {Object} obj
	 * @param {String | Array} path
	 * @param {*} val
	 */
	
	exports.set = function (obj, path, val) {
	  var original = obj
	  if (typeof path === 'string') {
	    path = exports.parse(path)
	  }
	  if (!path || !_.isObject(obj)) {
	    return false
	  }
	  var last, key
	  for (var i = 0, l = path.length; i < l; i++) {
	    last = obj
	    key = path[i]
	    if (key.charAt(0) === '*') {
	      key = original[key.slice(1)]
	    }
	    if (i < l - 1) {
	      obj = obj[key]
	      if (!_.isObject(obj)) {
	        obj = {}
	        if (("development") !== 'production' && last._isVue) {
	          warnNonExistent(path)
	        }
	        _.set(last, key, obj)
	      }
	    } else {
	      if (_.isArray(obj)) {
	        obj.$set(key, val)
	      } else if (key in obj) {
	        obj[key] = val
	      } else {
	        if (("development") !== 'production' && obj._isVue) {
	          warnNonExistent(path)
	        }
	        _.set(obj, key, val)
	      }
	    }
	  }
	  return true
	}


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(17)
	  , createDesc = __webpack_require__(48);
	module.exports = __webpack_require__(177) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 22 */,
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var compiler = __webpack_require__(18)
	var templateParser = __webpack_require__(11)
	var Fragment = __webpack_require__(348)
	var Cache = __webpack_require__(16)
	var linkerCache = new Cache(5000)
	
	/**
	 * A factory that can be used to create instances of a
	 * fragment. Caches the compiled linker if possible.
	 *
	 * @param {Vue} vm
	 * @param {Element|String} el
	 */
	
	function FragmentFactory (vm, el) {
	  this.vm = vm
	  var template
	  var isString = typeof el === 'string'
	  if (isString || _.isTemplate(el)) {
	    template = templateParser.parse(el, true)
	  } else {
	    template = document.createDocumentFragment()
	    template.appendChild(el)
	  }
	  this.template = template
	  // linker can be cached, but only for components
	  var linker
	  var cid = vm.constructor.cid
	  if (cid > 0) {
	    var cacheId = cid + (isString ? el : el.outerHTML)
	    linker = linkerCache.get(cacheId)
	    if (!linker) {
	      linker = compiler.compile(template, vm.$options, true)
	      linkerCache.put(cacheId, linker)
	    }
	  } else {
	    linker = compiler.compile(template, vm.$options, true)
	  }
	  this.linker = linker
	}
	
	/**
	 * Create a fragment instance with given host and scope.
	 *
	 * @param {Vue} host
	 * @param {Object} scope
	 * @param {Fragment} parentFrag
	 */
	
	FragmentFactory.prototype.create = function (host, scope, parentFrag) {
	  var frag = templateParser.clone(this.template)
	  return new Fragment(this.linker, this.vm, frag, host, scope, parentFrag)
	}
	
	module.exports = FragmentFactory


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var Path = __webpack_require__(20)
	var Cache = __webpack_require__(16)
	var expressionCache = new Cache(1000)
	
	var allowedKeywords =
	  'Math,Date,this,true,false,null,undefined,Infinity,NaN,' +
	  'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' +
	  'encodeURIComponent,parseInt,parseFloat'
	var allowedKeywordsRE =
	  new RegExp('^(' + allowedKeywords.replace(/,/g, '\\b|') + '\\b)')
	
	// keywords that don't make sense inside expressions
	var improperKeywords =
	  'break,case,class,catch,const,continue,debugger,default,' +
	  'delete,do,else,export,extends,finally,for,function,if,' +
	  'import,in,instanceof,let,return,super,switch,throw,try,' +
	  'var,while,with,yield,enum,await,implements,package,' +
	  'proctected,static,interface,private,public'
	var improperKeywordsRE =
	  new RegExp('^(' + improperKeywords.replace(/,/g, '\\b|') + '\\b)')
	
	var wsRE = /\s/g
	var newlineRE = /\n/g
	var saveRE = /[\{,]\s*[\w\$_]+\s*:|('[^']*'|"[^"]*")|new |typeof |void /g
	var restoreRE = /"(\d+)"/g
	var pathTestRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/
	var pathReplaceRE = /[^\w$\.]([A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\])*)/g
	var booleanLiteralRE = /^(true|false)$/
	
	/**
	 * Save / Rewrite / Restore
	 *
	 * When rewriting paths found in an expression, it is
	 * possible for the same letter sequences to be found in
	 * strings and Object literal property keys. Therefore we
	 * remove and store these parts in a temporary array, and
	 * restore them after the path rewrite.
	 */
	
	var saved = []
	
	/**
	 * Save replacer
	 *
	 * The save regex can match two possible cases:
	 * 1. An opening object literal
	 * 2. A string
	 * If matched as a plain string, we need to escape its
	 * newlines, since the string needs to be preserved when
	 * generating the function body.
	 *
	 * @param {String} str
	 * @param {String} isString - str if matched as a string
	 * @return {String} - placeholder with index
	 */
	
	function save (str, isString) {
	  var i = saved.length
	  saved[i] = isString
	    ? str.replace(newlineRE, '\\n')
	    : str
	  return '"' + i + '"'
	}
	
	/**
	 * Path rewrite replacer
	 *
	 * @param {String} raw
	 * @return {String}
	 */
	
	function rewrite (raw) {
	  var c = raw.charAt(0)
	  var path = raw.slice(1)
	  if (allowedKeywordsRE.test(path)) {
	    return raw
	  } else {
	    path = path.indexOf('"') > -1
	      ? path.replace(restoreRE, restore)
	      : path
	    return c + 'scope.' + path
	  }
	}
	
	/**
	 * Restore replacer
	 *
	 * @param {String} str
	 * @param {String} i - matched save index
	 * @return {String}
	 */
	
	function restore (str, i) {
	  return saved[i]
	}
	
	/**
	 * Rewrite an expression, prefixing all path accessors with
	 * `scope.` and generate getter/setter functions.
	 *
	 * @param {String} exp
	 * @param {Boolean} needSet
	 * @return {Function}
	 */
	
	function compileExpFns (exp, needSet) {
	  if (improperKeywordsRE.test(exp)) {
	    ("development") !== 'production' && _.warn(
	      'Avoid using reserved keywords in expression: ' + exp
	    )
	  }
	  // reset state
	  saved.length = 0
	  // save strings and object literal keys
	  var body = exp
	    .replace(saveRE, save)
	    .replace(wsRE, '')
	  // rewrite all paths
	  // pad 1 space here becaue the regex matches 1 extra char
	  body = (' ' + body)
	    .replace(pathReplaceRE, rewrite)
	    .replace(restoreRE, restore)
	  var getter = makeGetter(body)
	  if (getter) {
	    return {
	      get: getter,
	      body: body,
	      set: needSet
	        ? makeSetter(body)
	        : null
	    }
	  }
	}
	
	/**
	 * Compile getter setters for a simple path.
	 *
	 * @param {String} exp
	 * @return {Function}
	 */
	
	function compilePathFns (exp) {
	  var getter, path
	  if (exp.indexOf('[') < 0) {
	    // really simple path
	    path = exp.split('.')
	    path.raw = exp
	    getter = Path.compileGetter(path)
	  } else {
	    // do the real parsing
	    path = Path.parse(exp)
	    getter = path.get
	  }
	  return {
	    get: getter,
	    // always generate setter for simple paths
	    set: function (obj, val) {
	      Path.set(obj, path, val)
	    }
	  }
	}
	
	/**
	 * Build a getter function. Requires eval.
	 *
	 * We isolate the try/catch so it doesn't affect the
	 * optimization of the parse function when it is not called.
	 *
	 * @param {String} body
	 * @return {Function|undefined}
	 */
	
	function makeGetter (body) {
	  try {
	    return new Function('scope', 'return ' + body + ';')
	  } catch (e) {
	    ("development") !== 'production' && _.warn(
	      'Invalid expression. ' +
	      'Generated function body: ' + body
	    )
	  }
	}
	
	/**
	 * Build a setter function.
	 *
	 * This is only needed in rare situations like "a[b]" where
	 * a settable path requires dynamic evaluation.
	 *
	 * This setter function may throw error when called if the
	 * expression body is not a valid left-hand expression in
	 * assignment.
	 *
	 * @param {String} body
	 * @return {Function|undefined}
	 */
	
	function makeSetter (body) {
	  try {
	    return new Function('scope', 'value', body + '=value;')
	  } catch (e) {
	    ("development") !== 'production' && _.warn(
	      'Invalid setter function body: ' + body
	    )
	  }
	}
	
	/**
	 * Check for setter existence on a cache hit.
	 *
	 * @param {Function} hit
	 */
	
	function checkSetter (hit) {
	  if (!hit.set) {
	    hit.set = makeSetter(hit.body)
	  }
	}
	
	/**
	 * Parse an expression into re-written getter/setters.
	 *
	 * @param {String} exp
	 * @param {Boolean} needSet
	 * @return {Function}
	 */
	
	exports.parse = function (exp, needSet) {
	  exp = exp.trim()
	  // try cache
	  var hit = expressionCache.get(exp)
	  if (hit) {
	    if (needSet) {
	      checkSetter(hit)
	    }
	    return hit
	  }
	  // we do a simple path check to optimize for them.
	  // the check fails valid paths with unusal whitespaces,
	  // but that's too rare and we don't care.
	  // also skip boolean literals and paths that start with
	  // global "Math"
	  var res = exports.isSimplePath(exp)
	    ? compilePathFns(exp)
	    : compileExpFns(exp, needSet)
	  expressionCache.put(exp, res)
	  return res
	}
	
	/**
	 * Check if an expression is a simple path.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */
	
	exports.isSimplePath = function (exp) {
	  return pathTestRE.test(exp) &&
	    // don't treat true/false as paths
	    !booleanLiteralRE.test(exp) &&
	    // Math constants e.g. Math.PI, Math.E etc.
	    exp.slice(0, 5) !== 'Math.'
	}


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var Cache = __webpack_require__(16)
	var config = __webpack_require__(7)
	var dirParser = __webpack_require__(19)
	var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g
	var cache, tagRE, htmlRE
	
	/**
	 * Escape a string so it can be used in a RegExp
	 * constructor.
	 *
	 * @param {String} str
	 */
	
	function escapeRegex (str) {
	  return str.replace(regexEscapeRE, '\\$&')
	}
	
	exports.compileRegex = function () {
	  var open = escapeRegex(config.delimiters[0])
	  var close = escapeRegex(config.delimiters[1])
	  var unsafeOpen = escapeRegex(config.unsafeDelimiters[0])
	  var unsafeClose = escapeRegex(config.unsafeDelimiters[1])
	  tagRE = new RegExp(
	    unsafeOpen + '(.+?)' + unsafeClose + '|' +
	    open + '(.+?)' + close,
	    'g'
	  )
	  htmlRE = new RegExp(
	    '^' + unsafeOpen + '.*' + unsafeClose + '$'
	  )
	  // reset cache
	  cache = new Cache(1000)
	}
	
	/**
	 * Parse a template text string into an array of tokens.
	 *
	 * @param {String} text
	 * @return {Array<Object> | null}
	 *               - {String} type
	 *               - {String} value
	 *               - {Boolean} [html]
	 *               - {Boolean} [oneTime]
	 */
	
	exports.parse = function (text) {
	  if (!cache) {
	    exports.compileRegex()
	  }
	  var hit = cache.get(text)
	  if (hit) {
	    return hit
	  }
	  text = text.replace(/\n/g, '')
	  if (!tagRE.test(text)) {
	    return null
	  }
	  var tokens = []
	  var lastIndex = tagRE.lastIndex = 0
	  var match, index, html, value, first, oneTime
	  /* eslint-disable no-cond-assign */
	  while (match = tagRE.exec(text)) {
	  /* eslint-enable no-cond-assign */
	    index = match.index
	    // push text token
	    if (index > lastIndex) {
	      tokens.push({
	        value: text.slice(lastIndex, index)
	      })
	    }
	    // tag token
	    html = htmlRE.test(match[0])
	    value = html ? match[1] : match[2]
	    first = value.charCodeAt(0)
	    oneTime = first === 42 // *
	    value = oneTime
	      ? value.slice(1)
	      : value
	    tokens.push({
	      tag: true,
	      value: value.trim(),
	      html: html,
	      oneTime: oneTime
	    })
	    lastIndex = index + match[0].length
	  }
	  if (lastIndex < text.length) {
	    tokens.push({
	      value: text.slice(lastIndex)
	    })
	  }
	  cache.put(text, tokens)
	  return tokens
	}
	
	/**
	 * Format a list of tokens into an expression.
	 * e.g. tokens parsed from 'a {{b}} c' can be serialized
	 * into one single expression as '"a " + b + " c"'.
	 *
	 * @param {Array} tokens
	 * @return {String}
	 */
	
	exports.tokensToExp = function (tokens) {
	  if (tokens.length > 1) {
	    return tokens.map(function (token) {
	      return formatToken(token)
	    }).join('+')
	  } else {
	    return formatToken(tokens[0], true)
	  }
	}
	
	/**
	 * Format a single token.
	 *
	 * @param {Object} token
	 * @param {Boolean} single
	 * @return {String}
	 */
	
	function formatToken (token, single) {
	  return token.tag
	    ? inlineFilters(token.value, single)
	    : '"' + token.value + '"'
	}
	
	/**
	 * For an attribute with multiple interpolation tags,
	 * e.g. attr="some-{{thing | filter}}", in order to combine
	 * the whole thing into a single watchable expression, we
	 * have to inline those filters. This function does exactly
	 * that. This is a bit hacky but it avoids heavy changes
	 * to directive parser and watcher mechanism.
	 *
	 * @param {String} exp
	 * @param {Boolean} single
	 * @return {String}
	 */
	
	var filterRE = /[^|]\|[^|]/
	function inlineFilters (exp, single) {
	  if (!filterRE.test(exp)) {
	    return single
	      ? exp
	      : '(' + exp + ')'
	  } else {
	    var dir = dirParser.parse(exp)
	    if (!dir.filters) {
	      return '(' + exp + ')'
	    } else {
	      return 'this._applyFilters(' +
	        dir.expression + // value
	        ',null,' +       // oldValue (null for read)
	        JSON.stringify(dir.filters) + // filter descriptors
	        ',false)'        // write?
	    }
	  }
	}


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	
	/**
	 * Append with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	exports.append = function (el, target, vm, cb) {
	  apply(el, 1, function () {
	    target.appendChild(el)
	  }, vm, cb)
	}
	
	/**
	 * InsertBefore with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	exports.before = function (el, target, vm, cb) {
	  apply(el, 1, function () {
	    _.before(el, target)
	  }, vm, cb)
	}
	
	/**
	 * Remove with transition.
	 *
	 * @param {Element} el
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	exports.remove = function (el, vm, cb) {
	  apply(el, -1, function () {
	    _.remove(el)
	  }, vm, cb)
	}
	
	/**
	 * Apply transitions with an operation callback.
	 *
	 * @param {Element} el
	 * @param {Number} direction
	 *                  1: enter
	 *                 -1: leave
	 * @param {Function} op - the actual DOM operation
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	var apply = exports.apply = function (el, direction, op, vm, cb) {
	  var transition = el.__v_trans
	  if (
	    !transition ||
	    // skip if there are no js hooks and CSS transition is
	    // not supported
	    (!transition.hooks && !_.transitionEndEvent) ||
	    // skip transitions for initial compile
	    !vm._isCompiled ||
	    // if the vm is being manipulated by a parent directive
	    // during the parent's compilation phase, skip the
	    // animation.
	    (vm.$parent && !vm.$parent._isCompiled)
	  ) {
	    op()
	    if (cb) cb()
	    return
	  }
	  var action = direction > 0 ? 'enter' : 'leave'
	  transition[action](op, cb)
	}


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var config = __webpack_require__(7)
	var Dep = __webpack_require__(42)
	var expParser = __webpack_require__(24)
	var batcher = __webpack_require__(322)
	var uid = 0
	
	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 *
	 * @param {Vue} vm
	 * @param {String} expression
	 * @param {Function} cb
	 * @param {Object} options
	 *                 - {Array} filters
	 *                 - {Boolean} twoWay
	 *                 - {Boolean} deep
	 *                 - {Boolean} user
	 *                 - {Boolean} sync
	 *                 - {Boolean} lazy
	 *                 - {Function} [preProcess]
	 *                 - {Function} [postProcess]
	 * @constructor
	 */
	
	function Watcher (vm, expOrFn, cb, options) {
	  // mix in options
	  if (options) {
	    _.extend(this, options)
	  }
	  var isFn = typeof expOrFn === 'function'
	  this.vm = vm
	  vm._watchers.push(this)
	  this.expression = isFn ? expOrFn.toString() : expOrFn
	  this.cb = cb
	  this.id = ++uid // uid for batching
	  this.active = true
	  this.dirty = this.lazy // for lazy watchers
	  this.deps = Object.create(null)
	  this.newDeps = null
	  this.prevError = null // for async error stacks
	  // parse expression for getter/setter
	  if (isFn) {
	    this.getter = expOrFn
	    this.setter = undefined
	  } else {
	    var res = expParser.parse(expOrFn, this.twoWay)
	    this.getter = res.get
	    this.setter = res.set
	  }
	  this.value = this.lazy
	    ? undefined
	    : this.get()
	  // state for avoiding false triggers for deep and Array
	  // watchers during vm._digest()
	  this.queued = this.shallow = false
	}
	
	/**
	 * Add a dependency to this directive.
	 *
	 * @param {Dep} dep
	 */
	
	Watcher.prototype.addDep = function (dep) {
	  var id = dep.id
	  if (!this.newDeps[id]) {
	    this.newDeps[id] = dep
	    if (!this.deps[id]) {
	      this.deps[id] = dep
	      dep.addSub(this)
	    }
	  }
	}
	
	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */
	
	Watcher.prototype.get = function () {
	  this.beforeGet()
	  var scope = this.scope || this.vm
	  var value
	  try {
	    value = this.getter.call(scope, scope)
	  } catch (e) {
	    if (
	      ("development") !== 'production' &&
	      config.warnExpressionErrors
	    ) {
	      _.warn(
	        'Error when evaluating expression "' +
	        this.expression + '". ' +
	        (config.debug
	          ? ''
	          : 'Turn on debug mode to see stack trace.'
	        ), e
	      )
	    }
	  }
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value)
	  }
	  if (this.preProcess) {
	    value = this.preProcess(value)
	  }
	  if (this.filters) {
	    value = scope._applyFilters(value, null, this.filters, false)
	  }
	  if (this.postProcess) {
	    value = this.postProcess(value)
	  }
	  this.afterGet()
	  return value
	}
	
	/**
	 * Set the corresponding value with the setter.
	 *
	 * @param {*} value
	 */
	
	Watcher.prototype.set = function (value) {
	  var scope = this.scope || this.vm
	  if (this.filters) {
	    value = scope._applyFilters(
	      value, this.value, this.filters, true)
	  }
	  try {
	    this.setter.call(scope, scope, value)
	  } catch (e) {
	    if (
	      ("development") !== 'production' &&
	      config.warnExpressionErrors
	    ) {
	      _.warn(
	        'Error when evaluating setter "' +
	        this.expression + '"', e
	      )
	    }
	  }
	  // two-way sync for v-for alias
	  var forContext = scope.$forContext
	  if (true) {
	    if (
	      forContext &&
	      forContext.filters &&
	      (new RegExp(forContext.alias + '\\b')).test(this.expression)
	    ) {
	      _.warn(
	        'It seems you are using two-way binding on ' +
	        'a v-for alias (' + this.expression + '), and the ' +
	        'v-for has filters. This will not work properly. ' +
	        'Either remove the filters or use an array of ' +
	        'objects and bind to object properties instead.'
	      )
	    }
	  }
	  if (
	    forContext &&
	    forContext.alias === this.expression &&
	    !forContext.filters
	  ) {
	    if (scope.$key) { // original is an object
	      forContext.rawValue[scope.$key] = value
	    } else {
	      forContext.rawValue.$set(scope.$index, value)
	    }
	  }
	}
	
	/**
	 * Prepare for dependency collection.
	 */
	
	Watcher.prototype.beforeGet = function () {
	  Dep.target = this
	  this.newDeps = Object.create(null)
	}
	
	/**
	 * Clean up for dependency collection.
	 */
	
	Watcher.prototype.afterGet = function () {
	  Dep.target = null
	  var ids = Object.keys(this.deps)
	  var i = ids.length
	  while (i--) {
	    var id = ids[i]
	    if (!this.newDeps[id]) {
	      this.deps[id].removeSub(this)
	    }
	  }
	  this.deps = this.newDeps
	}
	
	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 *
	 * @param {Boolean} shallow
	 */
	
	Watcher.prototype.update = function (shallow) {
	  if (this.lazy) {
	    this.dirty = true
	  } else if (this.sync || !config.async) {
	    this.run()
	  } else {
	    // if queued, only overwrite shallow with non-shallow,
	    // but not the other way around.
	    this.shallow = this.queued
	      ? shallow
	        ? this.shallow
	        : false
	      : !!shallow
	    this.queued = true
	    // record before-push error stack in debug mode
	    /* istanbul ignore if */
	    if (("development") !== 'production' && config.debug) {
	      this.prevError = new Error('[vue] async stack trace')
	    }
	    batcher.push(this)
	  }
	}
	
	/**
	 * Batcher job interface.
	 * Will be called by the batcher.
	 */
	
	Watcher.prototype.run = function () {
	  if (this.active) {
	    var value = this.get()
	    if (
	      value !== this.value ||
	      // Deep watchers and Array watchers should fire even
	      // when the value is the same, because the value may
	      // have mutated; but only do so if this is a
	      // non-shallow update (caused by a vm digest).
	      ((_.isArray(value) || this.deep) && !this.shallow)
	    ) {
	      // set new value
	      var oldValue = this.value
	      this.value = value
	      // in debug + async mode, when a watcher callbacks
	      // throws, we also throw the saved before-push error
	      // so the full cross-tick stack trace is available.
	      var prevError = this.prevError
	      /* istanbul ignore if */
	      if (("development") !== 'production' &&
	          config.debug && prevError) {
	        this.prevError = null
	        try {
	          this.cb.call(this.vm, value, oldValue)
	        } catch (e) {
	          _.nextTick(function () {
	            throw prevError
	          }, 0)
	          throw e
	        }
	      } else {
	        this.cb.call(this.vm, value, oldValue)
	      }
	    }
	    this.queued = this.shallow = false
	  }
	}
	
	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */
	
	Watcher.prototype.evaluate = function () {
	  // avoid overwriting another watcher that is being
	  // collected.
	  var current = Dep.target
	  this.value = this.get()
	  this.dirty = false
	  Dep.target = current
	}
	
	/**
	 * Depend on all deps collected by this watcher.
	 */
	
	Watcher.prototype.depend = function () {
	  var depIds = Object.keys(this.deps)
	  var i = depIds.length
	  while (i--) {
	    this.deps[depIds[i]].depend()
	  }
	}
	
	/**
	 * Remove self from all dependencies' subcriber list.
	 */
	
	Watcher.prototype.teardown = function () {
	  if (this.active) {
	    // remove self from vm's watcher list
	    // we can skip this if the vm if being destroyed
	    // which can improve teardown performance.
	    if (!this.vm._isBeingDestroyed) {
	      this.vm._watchers.$remove(this)
	    }
	    var depIds = Object.keys(this.deps)
	    var i = depIds.length
	    while (i--) {
	      this.deps[depIds[i]].removeSub(this)
	    }
	    this.active = false
	    this.vm = this.cb = this.value = null
	  }
	}
	
	/**
	 * Recrusively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 *
	 * @param {Object} obj
	 */
	
	function traverse (obj) {
	  var key, val, i
	  for (key in obj) {
	    val = obj[key]
	    if (_.isArray(val)) {
	      i = val.length
	      while (i--) traverse(val[i])
	    } else if (_.isObject(val)) {
	      traverse(val)
	    }
	  }
	}
	
	module.exports = Watcher


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(29)
	  , core      = __webpack_require__(13)
	  , PROTOTYPE = 'prototype';
	var ctx = function(fn, that){
	  return function(){
	    return fn.apply(that, arguments);
	  };
	};
	var $def = function(type, name, source){
	  var key, own, out, exp
	    , isGlobal = type & $def.G
	    , isProto  = type & $def.P
	    , target   = isGlobal ? global : type & $def.S
	        ? global[name] : (global[name] || {})[PROTOTYPE]
	    , exports  = isGlobal ? core : core[name] || (core[name] = {});
	  if(isGlobal)source = name;
	  for(key in source){
	    // contains in native
	    own = !(type & $def.F) && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    if(isGlobal && typeof target[key] != 'function')exp = source[key];
	    // bind timers to global for call from export context
	    else if(type & $def.B && own)exp = ctx(out, global);
	    // wrap global constructors for prevent change them in library
	    else if(type & $def.W && target[key] == out)!function(C){
	      exp = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      exp[PROTOTYPE] = C[PROTOTYPE];
	    }(out);
	    else exp = isProto && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export
	    exports[key] = exp;
	    if(isProto)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$def.F = 1;  // forced
	$def.G = 2;  // global
	$def.S = 4;  // static
	$def.P = 8;  // proto
	$def.B = 16; // bind
	$def.W = 32; // wrap
	module.exports = $def;

/***/ },
/* 29 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var UNDEFINED = 'undefined';
	var global = module.exports = typeof window != UNDEFINED && window.Math == Math
	  ? window : typeof self != UNDEFINED && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 31 */,
/* 32 */,
/* 33 */
/***/ function(module, exports) {

	/* eslint-disable no-unused-vars */
	'use strict';
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	module.exports = Object.assign || function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ },
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */
/***/ function(module, exports) {

	/**
	 * Promises/A+ polyfill v1.1.0 (https://github.com/bramstein/promis)
	 */
	
	var RESOLVED = 0;
	var REJECTED = 1;
	var PENDING  = 2;
	
	function Promise(executor) {
	
	    this.state = PENDING;
	    this.value = undefined;
	    this.deferred = [];
	
	    var promise = this;
	
	    try {
	        executor(function (x) {
	            promise.resolve(x);
	        }, function (r) {
	            promise.reject(r);
	        });
	    } catch (e) {
	        promise.reject(e);
	    }
	}
	
	Promise.reject = function (r) {
	    return new Promise(function (resolve, reject) {
	        reject(r);
	    });
	};
	
	Promise.resolve = function (x) {
	    return new Promise(function (resolve, reject) {
	        resolve(x);
	    });
	};
	
	Promise.all = function all(iterable) {
	    return new Promise(function (resolve, reject) {
	        var count = 0,
	            result = [];
	
	        if (iterable.length === 0) {
	            resolve(result);
	        }
	
	        function resolver(i) {
	            return function (x) {
	                result[i] = x;
	                count += 1;
	
	                if (count === iterable.length) {
	                    resolve(result);
	                }
	            };
	        }
	
	        for (var i = 0; i < iterable.length; i += 1) {
	            iterable[i].then(resolver(i), reject);
	        }
	    });
	};
	
	Promise.race = function race(iterable) {
	    return new Promise(function (resolve, reject) {
	        for (var i = 0; i < iterable.length; i += 1) {
	            iterable[i].then(resolve, reject);
	        }
	    });
	};
	
	var p = Promise.prototype;
	
	p.resolve = function resolve(x) {
	    var promise = this;
	
	    if (promise.state === PENDING) {
	        if (x === promise) {
	            throw new TypeError('Promise settled with itself.');
	        }
	
	        var called = false;
	
	        try {
	            var then = x && x['then'];
	
	            if (x !== null && typeof x === 'object' && typeof then === 'function') {
	                then.call(x, function (x) {
	                    if (!called) {
	                        promise.resolve(x);
	                    }
	                    called = true;
	
	                }, function (r) {
	                    if (!called) {
	                        promise.reject(r);
	                    }
	                    called = true;
	                });
	                return;
	            }
	        } catch (e) {
	            if (!called) {
	                promise.reject(e);
	            }
	            return;
	        }
	        promise.state = RESOLVED;
	        promise.value = x;
	        promise.notify();
	    }
	};
	
	p.reject = function reject(reason) {
	    var promise = this;
	
	    if (promise.state === PENDING) {
	        if (reason === promise) {
	            throw new TypeError('Promise settled with itself.');
	        }
	
	        promise.state = REJECTED;
	        promise.value = reason;
	        promise.notify();
	    }
	};
	
	p.notify = function notify() {
	    var promise = this;
	
	    async(function () {
	        if (promise.state !== PENDING) {
	            while (promise.deferred.length) {
	                var deferred = promise.deferred.shift(),
	                    onResolved = deferred[0],
	                    onRejected = deferred[1],
	                    resolve = deferred[2],
	                    reject = deferred[3];
	
	                try {
	                    if (promise.state === RESOLVED) {
	                        if (typeof onResolved === 'function') {
	                            resolve(onResolved.call(undefined, promise.value));
	                        } else {
	                            resolve(promise.value);
	                        }
	                    } else if (promise.state === REJECTED) {
	                        if (typeof onRejected === 'function') {
	                            resolve(onRejected.call(undefined, promise.value));
	                        } else {
	                            reject(promise.value);
	                        }
	                    }
	                } catch (e) {
	                    reject(e);
	                }
	            }
	        }
	    });
	};
	
	p.catch = function (onRejected) {
	    return this.then(undefined, onRejected);
	};
	
	p.then = function then(onResolved, onRejected) {
	    var promise = this;
	
	    return new Promise(function (resolve, reject) {
	        promise.deferred.push([onResolved, onRejected, resolve, reject]);
	        promise.notify();
	    });
	};
	
	var queue = [];
	var async = function (callback) {
	    queue.push(callback);
	
	    if (queue.length === 1) {
	        async.async();
	    }
	};
	
	async.run = function () {
	    while (queue.length) {
	        queue[0]();
	        queue.shift();
	    }
	};
	
	if (window.MutationObserver) {
	    var el = document.createElement('div');
	    var mo = new MutationObserver(async.run);
	
	    mo.observe(el, {
	        attributes: true
	    });
	
	    async.async = function () {
	        el.setAttribute("x", 0);
	    };
	} else {
	    async.async = function () {
	        setTimeout(async.run);
	    };
	}
	
	module.exports = window.Promise || Promise;


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var uid = 0
	
	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 *
	 * @constructor
	 */
	
	function Dep () {
	  this.id = uid++
	  this.subs = []
	}
	
	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null
	
	/**
	 * Add a directive subscriber.
	 *
	 * @param {Directive} sub
	 */
	
	Dep.prototype.addSub = function (sub) {
	  this.subs.push(sub)
	}
	
	/**
	 * Remove a directive subscriber.
	 *
	 * @param {Directive} sub
	 */
	
	Dep.prototype.removeSub = function (sub) {
	  this.subs.$remove(sub)
	}
	
	/**
	 * Add self as a dependency to the target watcher.
	 */
	
	Dep.prototype.depend = function () {
	  Dep.target.addDep(this)
	}
	
	/**
	 * Notify all subscribers of a new value.
	 */
	
	Dep.prototype.notify = function () {
	  // stablize the subscriber list first
	  var subs = _.toArray(this.subs)
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update()
	  }
	}
	
	module.exports = Dep


/***/ },
/* 43 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 45 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	module.exports = function(KEY, exec){
	  var $def = __webpack_require__(28)
	    , fn   = (__webpack_require__(13).Object || {})[KEY] || Object[KEY]
	    , exp  = {};
	  exp[KEY] = exec(fn);
	  $def($def.S + $def.F * __webpack_require__(44)(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var has  = __webpack_require__(45)
	  , hide = __webpack_require__(21)
	  , TAG  = __webpack_require__(10)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))hide(it, TAG, tag);
	};

/***/ },
/* 50 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(43);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 52 */,
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(231)
	module.exports = __webpack_require__(141)
	module.exports.template = __webpack_require__(247)


/***/ },
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Object$keys = __webpack_require__(156)['default'];
	
	var _Object$create = __webpack_require__(153)['default'];
	
	exports.__esModule = true;
	exports.canReuse = canReuse;
	exports.canDeactivate = canDeactivate;
	exports.canActivate = canActivate;
	exports.deactivate = deactivate;
	exports.activate = activate;
	exports.reuse = reuse;
	
	var _util = __webpack_require__(9);
	
	/**
	 * Determine the reusability of an existing router view.
	 *
	 * @param {Directive} view
	 * @param {Object} handler
	 * @param {Transition} transition
	 */
	
	function canReuse(view, handler, transition) {
	  var component = view.childVM;
	  if (!component || !handler) {
	    return false;
	  }
	  // important: check view.Component here because it may
	  // have been changed in activate hook
	  if (view.Component !== handler.component) {
	    return false;
	  }
	  var canReuseFn = _util.getRouteConfig(component, 'canReuse');
	  return typeof canReuseFn === 'boolean' ? canReuseFn : canReuseFn ? canReuseFn.call(component, {
	    to: transition.to,
	    from: transition.from
	  }) : true; // defaults to true
	}
	
	/**
	 * Check if a component can deactivate.
	 *
	 * @param {Directive} view
	 * @param {Transition} transition
	 * @param {Function} next
	 */
	
	function canDeactivate(view, transition, next) {
	  var fromComponent = view.childVM;
	  var hook = _util.getRouteConfig(fromComponent, 'canDeactivate');
	  if (!hook) {
	    next();
	  } else {
	    transition.callHook(hook, fromComponent, next, {
	      expectBoolean: true
	    });
	  }
	}
	
	/**
	 * Check if a component can activate.
	 *
	 * @param {Object} handler
	 * @param {Transition} transition
	 * @param {Function} next
	 */
	
	function canActivate(handler, transition, next) {
	  _util.resolveAsyncComponent(handler, function (Component) {
	    // have to check due to async-ness
	    if (transition.aborted) {
	      return;
	    }
	    // determine if this component can be activated
	    var hook = _util.getRouteConfig(Component, 'canActivate');
	    if (!hook) {
	      next();
	    } else {
	      transition.callHook(hook, null, next, {
	        expectBoolean: true
	      });
	    }
	  });
	}
	
	/**
	 * Call deactivate hooks for existing router-views.
	 *
	 * @param {Directive} view
	 * @param {Transition} transition
	 * @param {Function} next
	 */
	
	function deactivate(view, transition, next) {
	  var component = view.childVM;
	  var hook = _util.getRouteConfig(component, 'deactivate');
	  if (!hook) {
	    next();
	  } else {
	    transition.callHooks(hook, component, next);
	  }
	}
	
	/**
	 * Activate / switch component for a router-view.
	 *
	 * @param {Directive} view
	 * @param {Transition} transition
	 * @param {Number} depth
	 * @param {Function} [cb]
	 */
	
	function activate(view, transition, depth, cb, reuse) {
	  var handler = transition.activateQueue[depth];
	  if (!handler) {
	    // fix 1.0.0-alpha.3 compat
	    if (view._bound) {
	      view.setComponent(null);
	    }
	    cb && cb();
	    return;
	  }
	
	  var Component = view.Component = handler.component;
	  var activateHook = _util.getRouteConfig(Component, 'activate');
	  var dataHook = _util.getRouteConfig(Component, 'data');
	  var waitForData = _util.getRouteConfig(Component, 'waitForData');
	
	  view.depth = depth;
	  view.activated = false;
	
	  var component = undefined;
	  var loading = !!(dataHook && !waitForData);
	
	  // "reuse" is a flag passed down when the parent view is
	  // either reused via keep-alive or as a child of a kept-alive view.
	  // of course we can only reuse if the current kept-alive instance
	  // is of the correct type.
	  reuse = reuse && view.childVM && view.childVM.constructor === Component;
	
	  if (reuse) {
	    // just reuse
	    component = view.childVM;
	    component.$loadingRouteData = loading;
	  } else {
	    // unbuild current component. this step also destroys
	    // and removes all nested child views.
	    view.unbuild(true);
	    // handle keep-alive.
	    // if the view has keep-alive, the child vm is not actually
	    // destroyed - its nested views will still be in router's
	    // view list. We need to removed these child views and
	    // cache them on the child vm.
	    if (view.keepAlive) {
	      var views = transition.router._views;
	      var i = views.indexOf(view);
	      if (i > 0) {
	        transition.router._views = views.slice(i);
	        if (view.childVM) {
	          view.childVM._routerViews = views.slice(0, i);
	        }
	      }
	    }
	
	    // build the new component. this will also create the
	    // direct child view of the current one. it will register
	    // itself as view.childView.
	    component = view.build({
	      _meta: {
	        $loadingRouteData: loading
	      }
	    });
	    // handle keep-alive.
	    // when a kept-alive child vm is restored, we need to
	    // add its cached child views into the router's view list,
	    // and also properly update current view's child view.
	    if (view.keepAlive) {
	      component.$loadingRouteData = loading;
	      var cachedViews = component._routerViews;
	      if (cachedViews) {
	        transition.router._views = cachedViews.concat(transition.router._views);
	        view.childView = cachedViews[cachedViews.length - 1];
	        component._routerViews = null;
	      }
	    }
	  }
	
	  // cleanup the component in case the transition is aborted
	  // before the component is ever inserted.
	  var cleanup = function cleanup() {
	    component.$destroy();
	  };
	
	  // actually insert the component and trigger transition
	  var insert = function insert() {
	    if (reuse) {
	      cb && cb();
	      return;
	    }
	    var router = transition.router;
	    if (router._rendered || router._transitionOnLoad) {
	      view.transition(component);
	    } else {
	      // no transition on first render, manual transition
	      /* istanbul ignore if */
	      if (view.setCurrent) {
	        // 0.12 compat
	        view.setCurrent(component);
	      } else {
	        // 1.0
	        view.childVM = component;
	      }
	      component.$before(view.anchor, null, false);
	    }
	    cb && cb();
	  };
	
	  // called after activation hook is resolved
	  var afterActivate = function afterActivate() {
	    view.activated = true;
	    // activate the child view
	    if (view.childView) {
	      activate(view.childView, transition, depth + 1, null, reuse || view.keepAlive);
	    }
	    if (dataHook && waitForData) {
	      // wait until data loaded to insert
	      loadData(component, transition, dataHook, insert, cleanup);
	    } else {
	      // load data and insert at the same time
	      if (dataHook) {
	        loadData(component, transition, dataHook);
	      }
	      insert();
	    }
	  };
	
	  if (activateHook) {
	    transition.callHooks(activateHook, component, afterActivate, {
	      cleanup: cleanup
	    });
	  } else {
	    afterActivate();
	  }
	}
	
	/**
	 * Reuse a view, just reload data if necessary.
	 *
	 * @param {Directive} view
	 * @param {Transition} transition
	 */
	
	function reuse(view, transition) {
	  var component = view.childVM;
	  var dataHook = _util.getRouteConfig(component, 'data');
	  if (dataHook) {
	    loadData(component, transition, dataHook);
	  }
	}
	
	/**
	 * Asynchronously load and apply data to component.
	 *
	 * @param {Vue} component
	 * @param {Transition} transition
	 * @param {Function} hook
	 * @param {Function} cb
	 * @param {Function} cleanup
	 */
	
	function loadData(component, transition, hook, cb, cleanup) {
	  component.$loadingRouteData = true;
	  transition.callHooks(hook, component, function (data, onError) {
	    // merge data from multiple data hooks
	    if (Array.isArray(data) && data._needMerge) {
	      data = data.reduce(function (res, obj) {
	        if (isPlainObject(obj)) {
	          _Object$keys(obj).forEach(function (key) {
	            res[key] = obj[key];
	          });
	        }
	        return res;
	      }, _Object$create(null));
	    }
	    // handle promise sugar syntax
	    var promises = [];
	    if (isPlainObject(data)) {
	      _Object$keys(data).forEach(function (key) {
	        var val = data[key];
	        if (_util.isPromise(val)) {
	          promises.push(val.then(function (resolvedVal) {
	            component.$set(key, resolvedVal);
	          }));
	        } else {
	          component.$set(key, val);
	        }
	      });
	    }
	    if (!promises.length) {
	      component.$loadingRouteData = false;
	      cb && cb();
	    } else {
	      promises[0].constructor.all(promises).then(function (_) {
	        component.$loadingRouteData = false;
	        cb && cb();
	      }, onError);
	    }
	  }, {
	    cleanup: cleanup,
	    expectData: true
	  });
	}
	
	function isPlainObject(obj) {
	  return Object.prototype.toString.call(obj) === '[object Object]';
	}

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {(function() {
	    "use strict";
	    function $$route$recognizer$dsl$$Target(path, matcher, delegate) {
	      this.path = path;
	      this.matcher = matcher;
	      this.delegate = delegate;
	    }
	
	    $$route$recognizer$dsl$$Target.prototype = {
	      to: function(target, callback) {
	        var delegate = this.delegate;
	
	        if (delegate && delegate.willAddRoute) {
	          target = delegate.willAddRoute(this.matcher.target, target);
	        }
	
	        this.matcher.add(this.path, target);
	
	        if (callback) {
	          if (callback.length === 0) { throw new Error("You must have an argument in the function passed to `to`"); }
	          this.matcher.addChild(this.path, target, callback, this.delegate);
	        }
	        return this;
	      }
	    };
	
	    function $$route$recognizer$dsl$$Matcher(target) {
	      this.routes = {};
	      this.children = {};
	      this.target = target;
	    }
	
	    $$route$recognizer$dsl$$Matcher.prototype = {
	      add: function(path, handler) {
	        this.routes[path] = handler;
	      },
	
	      addChild: function(path, target, callback, delegate) {
	        var matcher = new $$route$recognizer$dsl$$Matcher(target);
	        this.children[path] = matcher;
	
	        var match = $$route$recognizer$dsl$$generateMatch(path, matcher, delegate);
	
	        if (delegate && delegate.contextEntered) {
	          delegate.contextEntered(target, match);
	        }
	
	        callback(match);
	      }
	    };
	
	    function $$route$recognizer$dsl$$generateMatch(startingPath, matcher, delegate) {
	      return function(path, nestedCallback) {
	        var fullPath = startingPath + path;
	
	        if (nestedCallback) {
	          nestedCallback($$route$recognizer$dsl$$generateMatch(fullPath, matcher, delegate));
	        } else {
	          return new $$route$recognizer$dsl$$Target(startingPath + path, matcher, delegate);
	        }
	      };
	    }
	
	    function $$route$recognizer$dsl$$addRoute(routeArray, path, handler) {
	      var len = 0;
	      for (var i=0, l=routeArray.length; i<l; i++) {
	        len += routeArray[i].path.length;
	      }
	
	      path = path.substr(len);
	      var route = { path: path, handler: handler };
	      routeArray.push(route);
	    }
	
	    function $$route$recognizer$dsl$$eachRoute(baseRoute, matcher, callback, binding) {
	      var routes = matcher.routes;
	
	      for (var path in routes) {
	        if (routes.hasOwnProperty(path)) {
	          var routeArray = baseRoute.slice();
	          $$route$recognizer$dsl$$addRoute(routeArray, path, routes[path]);
	
	          if (matcher.children[path]) {
	            $$route$recognizer$dsl$$eachRoute(routeArray, matcher.children[path], callback, binding);
	          } else {
	            callback.call(binding, routeArray);
	          }
	        }
	      }
	    }
	
	    var $$route$recognizer$dsl$$default = function(callback, addRouteCallback) {
	      var matcher = new $$route$recognizer$dsl$$Matcher();
	
	      callback($$route$recognizer$dsl$$generateMatch("", matcher, this.delegate));
	
	      $$route$recognizer$dsl$$eachRoute([], matcher, function(route) {
	        if (addRouteCallback) { addRouteCallback(this, route); }
	        else { this.add(route); }
	      }, this);
	    };
	
	    var $$route$recognizer$$specials = [
	      '/', '.', '*', '+', '?', '|',
	      '(', ')', '[', ']', '{', '}', '\\'
	    ];
	
	    var $$route$recognizer$$escapeRegex = new RegExp('(\\' + $$route$recognizer$$specials.join('|\\') + ')', 'g');
	
	    function $$route$recognizer$$isArray(test) {
	      return Object.prototype.toString.call(test) === "[object Array]";
	    }
	
	    // A Segment represents a segment in the original route description.
	    // Each Segment type provides an `eachChar` and `regex` method.
	    //
	    // The `eachChar` method invokes the callback with one or more character
	    // specifications. A character specification consumes one or more input
	    // characters.
	    //
	    // The `regex` method returns a regex fragment for the segment. If the
	    // segment is a dynamic of star segment, the regex fragment also includes
	    // a capture.
	    //
	    // A character specification contains:
	    //
	    // * `validChars`: a String with a list of all valid characters, or
	    // * `invalidChars`: a String with a list of all invalid characters
	    // * `repeat`: true if the character specification can repeat
	
	    function $$route$recognizer$$StaticSegment(string) { this.string = string; }
	    $$route$recognizer$$StaticSegment.prototype = {
	      eachChar: function(callback) {
	        var string = this.string, ch;
	
	        for (var i=0, l=string.length; i<l; i++) {
	          ch = string.charAt(i);
	          callback({ validChars: ch });
	        }
	      },
	
	      regex: function() {
	        return this.string.replace($$route$recognizer$$escapeRegex, '\\$1');
	      },
	
	      generate: function() {
	        return this.string;
	      }
	    };
	
	    function $$route$recognizer$$DynamicSegment(name) { this.name = name; }
	    $$route$recognizer$$DynamicSegment.prototype = {
	      eachChar: function(callback) {
	        callback({ invalidChars: "/", repeat: true });
	      },
	
	      regex: function() {
	        return "([^/]+)";
	      },
	
	      generate: function(params) {
	        return params[this.name];
	      }
	    };
	
	    function $$route$recognizer$$StarSegment(name) { this.name = name; }
	    $$route$recognizer$$StarSegment.prototype = {
	      eachChar: function(callback) {
	        callback({ invalidChars: "", repeat: true });
	      },
	
	      regex: function() {
	        return "(.+)";
	      },
	
	      generate: function(params) {
	        return params[this.name];
	      }
	    };
	
	    function $$route$recognizer$$EpsilonSegment() {}
	    $$route$recognizer$$EpsilonSegment.prototype = {
	      eachChar: function() {},
	      regex: function() { return ""; },
	      generate: function() { return ""; }
	    };
	
	    function $$route$recognizer$$parse(route, names, specificity) {
	      // normalize route as not starting with a "/". Recognition will
	      // also normalize.
	      if (route.charAt(0) === "/") { route = route.substr(1); }
	
	      var segments = route.split("/"), results = [];
	
	      // A routes has specificity determined by the order that its different segments
	      // appear in. This system mirrors how the magnitude of numbers written as strings
	      // works.
	      // Consider a number written as: "abc". An example would be "200". Any other number written
	      // "xyz" will be smaller than "abc" so long as `a > z`. For instance, "199" is smaller
	      // then "200", even though "y" and "z" (which are both 9) are larger than "0" (the value
	      // of (`b` and `c`). This is because the leading symbol, "2", is larger than the other
	      // leading symbol, "1".
	      // The rule is that symbols to the left carry more weight than symbols to the right
	      // when a number is written out as a string. In the above strings, the leading digit
	      // represents how many 100's are in the number, and it carries more weight than the middle
	      // number which represents how many 10's are in the number.
	      // This system of number magnitude works well for route specificity, too. A route written as
	      // `a/b/c` will be more specific than `x/y/z` as long as `a` is more specific than
	      // `x`, irrespective of the other parts.
	      // Because of this similarity, we assign each type of segment a number value written as a
	      // string. We can find the specificity of compound routes by concatenating these strings
	      // together, from left to right. After we have looped through all of the segments,
	      // we convert the string to a number.
	      specificity.val = '';
	
	      for (var i=0, l=segments.length; i<l; i++) {
	        var segment = segments[i], match;
	
	        if (match = segment.match(/^:([^\/]+)$/)) {
	          results.push(new $$route$recognizer$$DynamicSegment(match[1]));
	          names.push(match[1]);
	          specificity.val += '3';
	        } else if (match = segment.match(/^\*([^\/]+)$/)) {
	          results.push(new $$route$recognizer$$StarSegment(match[1]));
	          specificity.val += '2';
	          names.push(match[1]);
	        } else if(segment === "") {
	          results.push(new $$route$recognizer$$EpsilonSegment());
	          specificity.val += '1';
	        } else {
	          results.push(new $$route$recognizer$$StaticSegment(segment));
	          specificity.val += '4';
	        }
	      }
	
	      specificity.val = +specificity.val;
	
	      return results;
	    }
	
	    // A State has a character specification and (`charSpec`) and a list of possible
	    // subsequent states (`nextStates`).
	    //
	    // If a State is an accepting state, it will also have several additional
	    // properties:
	    //
	    // * `regex`: A regular expression that is used to extract parameters from paths
	    //   that reached this accepting state.
	    // * `handlers`: Information on how to convert the list of captures into calls
	    //   to registered handlers with the specified parameters
	    // * `types`: How many static, dynamic or star segments in this route. Used to
	    //   decide which route to use if multiple registered routes match a path.
	    //
	    // Currently, State is implemented naively by looping over `nextStates` and
	    // comparing a character specification against a character. A more efficient
	    // implementation would use a hash of keys pointing at one or more next states.
	
	    function $$route$recognizer$$State(charSpec) {
	      this.charSpec = charSpec;
	      this.nextStates = [];
	    }
	
	    $$route$recognizer$$State.prototype = {
	      get: function(charSpec) {
	        var nextStates = this.nextStates;
	
	        for (var i=0, l=nextStates.length; i<l; i++) {
	          var child = nextStates[i];
	
	          var isEqual = child.charSpec.validChars === charSpec.validChars;
	          isEqual = isEqual && child.charSpec.invalidChars === charSpec.invalidChars;
	
	          if (isEqual) { return child; }
	        }
	      },
	
	      put: function(charSpec) {
	        var state;
	
	        // If the character specification already exists in a child of the current
	        // state, just return that state.
	        if (state = this.get(charSpec)) { return state; }
	
	        // Make a new state for the character spec
	        state = new $$route$recognizer$$State(charSpec);
	
	        // Insert the new state as a child of the current state
	        this.nextStates.push(state);
	
	        // If this character specification repeats, insert the new state as a child
	        // of itself. Note that this will not trigger an infinite loop because each
	        // transition during recognition consumes a character.
	        if (charSpec.repeat) {
	          state.nextStates.push(state);
	        }
	
	        // Return the new state
	        return state;
	      },
	
	      // Find a list of child states matching the next character
	      match: function(ch) {
	        // DEBUG "Processing `" + ch + "`:"
	        var nextStates = this.nextStates,
	            child, charSpec, chars;
	
	        // DEBUG "  " + debugState(this)
	        var returned = [];
	
	        for (var i=0, l=nextStates.length; i<l; i++) {
	          child = nextStates[i];
	
	          charSpec = child.charSpec;
	
	          if (typeof (chars = charSpec.validChars) !== 'undefined') {
	            if (chars.indexOf(ch) !== -1) { returned.push(child); }
	          } else if (typeof (chars = charSpec.invalidChars) !== 'undefined') {
	            if (chars.indexOf(ch) === -1) { returned.push(child); }
	          }
	        }
	
	        return returned;
	      }
	
	      /** IF DEBUG
	      , debug: function() {
	        var charSpec = this.charSpec,
	            debug = "[",
	            chars = charSpec.validChars || charSpec.invalidChars;
	
	        if (charSpec.invalidChars) { debug += "^"; }
	        debug += chars;
	        debug += "]";
	
	        if (charSpec.repeat) { debug += "+"; }
	
	        return debug;
	      }
	      END IF **/
	    };
	
	    /** IF DEBUG
	    function debug(log) {
	      console.log(log);
	    }
	
	    function debugState(state) {
	      return state.nextStates.map(function(n) {
	        if (n.nextStates.length === 0) { return "( " + n.debug() + " [accepting] )"; }
	        return "( " + n.debug() + " <then> " + n.nextStates.map(function(s) { return s.debug() }).join(" or ") + " )";
	      }).join(", ")
	    }
	    END IF **/
	
	    // Sort the routes by specificity
	    function $$route$recognizer$$sortSolutions(states) {
	      return states.sort(function(a, b) {
	        return b.specificity.val - a.specificity.val;
	      });
	    }
	
	    function $$route$recognizer$$recognizeChar(states, ch) {
	      var nextStates = [];
	
	      for (var i=0, l=states.length; i<l; i++) {
	        var state = states[i];
	
	        nextStates = nextStates.concat(state.match(ch));
	      }
	
	      return nextStates;
	    }
	
	    var $$route$recognizer$$oCreate = Object.create || function(proto) {
	      function F() {}
	      F.prototype = proto;
	      return new F();
	    };
	
	    function $$route$recognizer$$RecognizeResults(queryParams) {
	      this.queryParams = queryParams || {};
	    }
	    $$route$recognizer$$RecognizeResults.prototype = $$route$recognizer$$oCreate({
	      splice: Array.prototype.splice,
	      slice:  Array.prototype.slice,
	      push:   Array.prototype.push,
	      length: 0,
	      queryParams: null
	    });
	
	    function $$route$recognizer$$findHandler(state, path, queryParams) {
	      var handlers = state.handlers, regex = state.regex;
	      var captures = path.match(regex), currentCapture = 1;
	      var result = new $$route$recognizer$$RecognizeResults(queryParams);
	
	      for (var i=0, l=handlers.length; i<l; i++) {
	        var handler = handlers[i], names = handler.names, params = {};
	
	        for (var j=0, m=names.length; j<m; j++) {
	          params[names[j]] = captures[currentCapture++];
	        }
	
	        result.push({ handler: handler.handler, params: params, isDynamic: !!names.length });
	      }
	
	      return result;
	    }
	
	    function $$route$recognizer$$addSegment(currentState, segment) {
	      segment.eachChar(function(ch) {
	        var state;
	
	        currentState = currentState.put(ch);
	      });
	
	      return currentState;
	    }
	
	    function $$route$recognizer$$decodeQueryParamPart(part) {
	      // http://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.1
	      part = part.replace(/\+/gm, '%20');
	      return decodeURIComponent(part);
	    }
	
	    // The main interface
	
	    var $$route$recognizer$$RouteRecognizer = function() {
	      this.rootState = new $$route$recognizer$$State();
	      this.names = {};
	    };
	
	
	    $$route$recognizer$$RouteRecognizer.prototype = {
	      add: function(routes, options) {
	        var currentState = this.rootState, regex = "^",
	            specificity = {},
	            handlers = [], allSegments = [], name;
	
	        var isEmpty = true;
	
	        for (var i=0, l=routes.length; i<l; i++) {
	          var route = routes[i], names = [];
	
	          var segments = $$route$recognizer$$parse(route.path, names, specificity);
	
	          allSegments = allSegments.concat(segments);
	
	          for (var j=0, m=segments.length; j<m; j++) {
	            var segment = segments[j];
	
	            if (segment instanceof $$route$recognizer$$EpsilonSegment) { continue; }
	
	            isEmpty = false;
	
	            // Add a "/" for the new segment
	            currentState = currentState.put({ validChars: "/" });
	            regex += "/";
	
	            // Add a representation of the segment to the NFA and regex
	            currentState = $$route$recognizer$$addSegment(currentState, segment);
	            regex += segment.regex();
	          }
	
	          var handler = { handler: route.handler, names: names };
	          handlers.push(handler);
	        }
	
	        if (isEmpty) {
	          currentState = currentState.put({ validChars: "/" });
	          regex += "/";
	        }
	
	        currentState.handlers = handlers;
	        currentState.regex = new RegExp(regex + "$");
	        currentState.specificity = specificity;
	
	        if (name = options && options.as) {
	          this.names[name] = {
	            segments: allSegments,
	            handlers: handlers
	          };
	        }
	      },
	
	      handlersFor: function(name) {
	        var route = this.names[name], result = [];
	        if (!route) { throw new Error("There is no route named " + name); }
	
	        for (var i=0, l=route.handlers.length; i<l; i++) {
	          result.push(route.handlers[i]);
	        }
	
	        return result;
	      },
	
	      hasRoute: function(name) {
	        return !!this.names[name];
	      },
	
	      generate: function(name, params) {
	        var route = this.names[name], output = "";
	        if (!route) { throw new Error("There is no route named " + name); }
	
	        var segments = route.segments;
	
	        for (var i=0, l=segments.length; i<l; i++) {
	          var segment = segments[i];
	
	          if (segment instanceof $$route$recognizer$$EpsilonSegment) { continue; }
	
	          output += "/";
	          output += segment.generate(params);
	        }
	
	        if (output.charAt(0) !== '/') { output = '/' + output; }
	
	        if (params && params.queryParams) {
	          output += this.generateQueryString(params.queryParams, route.handlers);
	        }
	
	        return output;
	      },
	
	      generateQueryString: function(params, handlers) {
	        var pairs = [];
	        var keys = [];
	        for(var key in params) {
	          if (params.hasOwnProperty(key)) {
	            keys.push(key);
	          }
	        }
	        keys.sort();
	        for (var i = 0, len = keys.length; i < len; i++) {
	          key = keys[i];
	          var value = params[key];
	          if (value == null) {
	            continue;
	          }
	          var pair = encodeURIComponent(key);
	          if ($$route$recognizer$$isArray(value)) {
	            for (var j = 0, l = value.length; j < l; j++) {
	              var arrayPair = key + '[]' + '=' + encodeURIComponent(value[j]);
	              pairs.push(arrayPair);
	            }
	          } else {
	            pair += "=" + encodeURIComponent(value);
	            pairs.push(pair);
	          }
	        }
	
	        if (pairs.length === 0) { return ''; }
	
	        return "?" + pairs.join("&");
	      },
	
	      parseQueryString: function(queryString) {
	        var pairs = queryString.split("&"), queryParams = {};
	        for(var i=0; i < pairs.length; i++) {
	          var pair      = pairs[i].split('='),
	              key       = $$route$recognizer$$decodeQueryParamPart(pair[0]),
	              keyLength = key.length,
	              isArray = false,
	              value;
	          if (pair.length === 1) {
	            value = 'true';
	          } else {
	            //Handle arrays
	            if (keyLength > 2 && key.slice(keyLength -2) === '[]') {
	              isArray = true;
	              key = key.slice(0, keyLength - 2);
	              if(!queryParams[key]) {
	                queryParams[key] = [];
	              }
	            }
	            value = pair[1] ? $$route$recognizer$$decodeQueryParamPart(pair[1]) : '';
	          }
	          if (isArray) {
	            queryParams[key].push(value);
	          } else {
	            queryParams[key] = value;
	          }
	        }
	        return queryParams;
	      },
	
	      recognize: function(path) {
	        var states = [ this.rootState ],
	            pathLen, i, l, queryStart, queryParams = {},
	            isSlashDropped = false;
	
	        queryStart = path.indexOf('?');
	        if (queryStart !== -1) {
	          var queryString = path.substr(queryStart + 1, path.length);
	          path = path.substr(0, queryStart);
	          queryParams = this.parseQueryString(queryString);
	        }
	
	        path = decodeURI(path);
	
	        // DEBUG GROUP path
	
	        if (path.charAt(0) !== "/") { path = "/" + path; }
	
	        pathLen = path.length;
	        if (pathLen > 1 && path.charAt(pathLen - 1) === "/") {
	          path = path.substr(0, pathLen - 1);
	          isSlashDropped = true;
	        }
	
	        for (i=0, l=path.length; i<l; i++) {
	          states = $$route$recognizer$$recognizeChar(states, path.charAt(i));
	          if (!states.length) { break; }
	        }
	
	        // END DEBUG GROUP
	
	        var solutions = [];
	        for (i=0, l=states.length; i<l; i++) {
	          if (states[i].handlers) { solutions.push(states[i]); }
	        }
	
	        states = $$route$recognizer$$sortSolutions(solutions);
	
	        var state = solutions[0];
	
	        if (state && state.handlers) {
	          // if a trailing slash was dropped and a star segment is the last segment
	          // specified, put the trailing slash back
	          if (isSlashDropped && state.regex.source.slice(-5) === "(.+)$") {
	            path = path + "/";
	          }
	          return $$route$recognizer$$findHandler(state, path, queryParams);
	        }
	      }
	    };
	
	    $$route$recognizer$$RouteRecognizer.prototype.map = $$route$recognizer$dsl$$default;
	
	    $$route$recognizer$$RouteRecognizer.VERSION = '0.1.9';
	
	    var $$route$recognizer$$default = $$route$recognizer$$RouteRecognizer;
	
	    /* global define:true module:true window: true */
	    if ("function" === 'function' && __webpack_require__(94)['amd']) {
	      !(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return $$route$recognizer$$default; }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof module !== 'undefined' && module['exports']) {
	      module['exports'] = $$route$recognizer$$default;
	    } else if (typeof this !== 'undefined') {
	      this['RouteRecognizer'] = $$route$recognizer$$default;
	    }
	}).call(this);
	
	//# sourceMappingURL=route-recognizer.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(95)(module)))

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	exports.style = __webpack_require__(89)
	exports['class'] = __webpack_require__(330)
	exports.component = __webpack_require__(331)
	exports.prop = __webpack_require__(88)
	exports.transition = __webpack_require__(332)


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	// NOTE: the prop internal directive is compiled and linked
	// during _initScope(), before the created hook is called.
	// The purpose is to make the initial prop values available
	// inside `created` hooks and `data` functions.
	
	var _ = __webpack_require__(1)
	var Watcher = __webpack_require__(27)
	var bindingModes = __webpack_require__(7)._propBindingModes
	
	module.exports = {
	
	  bind: function () {
	
	    var child = this.vm
	    var parent = child._context
	    // passed in from compiler directly
	    var prop = this.descriptor.prop
	    var childKey = prop.path
	    var parentKey = prop.parentPath
	    var twoWay = prop.mode === bindingModes.TWO_WAY
	
	    var parentWatcher = this.parentWatcher = new Watcher(
	      parent,
	      parentKey,
	      function (val) {
	        if (_.assertProp(prop, val)) {
	          child[childKey] = val
	        }
	      }, {
	        twoWay: twoWay,
	        filters: prop.filters,
	        // important: props need to be observed on the
	        // v-for scope if present
	        scope: this._scope
	      }
	    )
	
	    // set the child initial value.
	    _.initProp(child, prop, parentWatcher.value)
	
	    // setup two-way binding
	    if (twoWay) {
	      // important: defer the child watcher creation until
	      // the created hook (after data observation)
	      var self = this
	      child.$once('hook:created', function () {
	        self.childWatcher = new Watcher(
	          child,
	          childKey,
	          function (val) {
	            parentWatcher.set(val)
	          }
	        )
	      })
	    }
	  },
	
	  unbind: function () {
	    this.parentWatcher.teardown()
	    if (this.childWatcher) {
	      this.childWatcher.teardown()
	    }
	  }
	}


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var prefixes = ['-webkit-', '-moz-', '-ms-']
	var camelPrefixes = ['Webkit', 'Moz', 'ms']
	var importantRE = /!important;?$/
	var testEl = null
	var propCache = {}
	
	module.exports = {
	
	  deep: true,
	
	  update: function (value) {
	    if (typeof value === 'string') {
	      this.el.style.cssText = value
	    } else if (_.isArray(value)) {
	      this.handleObject(value.reduce(_.extend, {}))
	    } else {
	      this.handleObject(value || {})
	    }
	  },
	
	  handleObject: function (value) {
	    // cache object styles so that only changed props
	    // are actually updated.
	    var cache = this.cache || (this.cache = {})
	    var name, val
	    for (name in cache) {
	      if (!(name in value)) {
	        this.handleSingle(name, null)
	        delete cache[name]
	      }
	    }
	    for (name in value) {
	      val = value[name]
	      if (val !== cache[name]) {
	        cache[name] = val
	        this.handleSingle(name, val)
	      }
	    }
	  },
	
	  handleSingle: function (prop, value) {
	    prop = normalize(prop)
	    if (!prop) return // unsupported prop
	    // cast possible numbers/booleans into strings
	    if (value != null) value += ''
	    if (value) {
	      var isImportant = importantRE.test(value)
	        ? 'important'
	        : ''
	      if (isImportant) {
	        value = value.replace(importantRE, '').trim()
	      }
	      this.el.style.setProperty(prop, value, isImportant)
	    } else {
	      this.el.style.removeProperty(prop)
	    }
	  }
	
	}
	
	/**
	 * Normalize a CSS property name.
	 * - cache result
	 * - auto prefix
	 * - camelCase -> dash-case
	 *
	 * @param {String} prop
	 * @return {String}
	 */
	
	function normalize (prop) {
	  if (propCache[prop]) {
	    return propCache[prop]
	  }
	  var res = prefix(prop)
	  propCache[prop] = propCache[res] = res
	  return res
	}
	
	/**
	 * Auto detect the appropriate prefix for a CSS property.
	 * https://gist.github.com/paulirish/523692
	 *
	 * @param {String} prop
	 * @return {String}
	 */
	
	function prefix (prop) {
	  prop = _.hyphenate(prop)
	  var camel = _.camelize(prop)
	  var upper = camel.charAt(0).toUpperCase() + camel.slice(1)
	  if (!testEl) {
	    testEl = document.createElement('div')
	  }
	  if (camel in testEl.style) {
	    return prop
	  }
	  var i = prefixes.length
	  var prefixed
	  while (i--) {
	    prefixed = camelPrefixes[i] + upper
	    if (prefixed in testEl.style) {
	      return prefixes[i] + prop
	    }
	  }
	}


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var FragmentFactory = __webpack_require__(23)
	var isObject = _.isObject
	var uid = 0
	
	module.exports = {
	
	  priority: 2000,
	
	  params: [
	    'track-by',
	    'stagger',
	    'enter-stagger',
	    'leave-stagger'
	  ],
	
	  bind: function () {
	    // support "item in items" syntax
	    var inMatch = this.expression.match(/(.*) in (.*)/)
	    if (inMatch) {
	      var itMatch = inMatch[1].match(/\((.*),(.*)\)/)
	      if (itMatch) {
	        this.iterator = itMatch[1].trim()
	        this.alias = itMatch[2].trim()
	      } else {
	        this.alias = inMatch[1].trim()
	      }
	      this.expression = inMatch[2]
	    }
	
	    if (!this.alias) {
	      ("development") !== 'production' && _.warn(
	        'Alias is required in v-for.'
	      )
	      return
	    }
	
	    // uid as a cache identifier
	    this.id = '__v-for__' + (++uid)
	
	    // check if this is an option list,
	    // so that we know if we need to update the <select>'s
	    // v-model when the option list has changed.
	    // because v-model has a lower priority than v-for,
	    // the v-model is not bound here yet, so we have to
	    // retrive it in the actual updateModel() function.
	    var tag = this.el.tagName
	    this.isOption =
	      (tag === 'OPTION' || tag === 'OPTGROUP') &&
	      this.el.parentNode.tagName === 'SELECT'
	
	    // setup anchor nodes
	    this.start = _.createAnchor('v-for-start')
	    this.end = _.createAnchor('v-for-end')
	    _.replace(this.el, this.end)
	    _.before(this.start, this.end)
	
	    // check ref
	    this.ref = _.findRef(this.el)
	
	    // cache
	    this.cache = Object.create(null)
	
	    // fragment factory
	    this.factory = new FragmentFactory(this.vm, this.el)
	  },
	
	  update: function (data) {
	    this.diff(data)
	    this.updateRef()
	    this.updateModel()
	  },
	
	  /**
	   * Diff, based on new data and old data, determine the
	   * minimum amount of DOM manipulations needed to make the
	   * DOM reflect the new data Array.
	   *
	   * The algorithm diffs the new data Array by storing a
	   * hidden reference to an owner vm instance on previously
	   * seen data. This allows us to achieve O(n) which is
	   * better than a levenshtein distance based algorithm,
	   * which is O(m * n).
	   *
	   * @param {Array} data
	   */
	
	  diff: function (data) {
	    // check if the Array was converted from an Object
	    var item = data[0]
	    var convertedFromObject = this.fromObject =
	      isObject(item) &&
	      item.hasOwnProperty('$key') &&
	      item.hasOwnProperty('$value')
	
	    var trackByKey = this.params.trackBy
	    var oldFrags = this.frags
	    var frags = this.frags = new Array(data.length)
	    var alias = this.alias
	    var iterator = this.iterator
	    var start = this.start
	    var end = this.end
	    var inDoc = _.inDoc(start)
	    var init = !oldFrags
	    var i, l, frag, key, value, primitive
	
	    // First pass, go through the new Array and fill up
	    // the new frags array. If a piece of data has a cached
	    // instance for it, we reuse it. Otherwise build a new
	    // instance.
	    for (i = 0, l = data.length; i < l; i++) {
	      item = data[i]
	      key = convertedFromObject ? item.$key : null
	      value = convertedFromObject ? item.$value : item
	      primitive = !isObject(value)
	      frag = !init && this.getCachedFrag(value, i, key)
	      if (frag) { // reusable fragment
	        frag.reused = true
	        // update $index
	        frag.scope.$index = i
	        // update $key
	        if (key) {
	          frag.scope.$key = key
	        }
	        // update iterator
	        if (iterator) {
	          frag.scope[iterator] = key !== null ? key : i
	        }
	        // update data for track-by, object repeat &
	        // primitive values.
	        if (trackByKey || convertedFromObject || primitive) {
	          frag.scope[alias] = value
	        }
	      } else { // new isntance
	        frag = this.create(value, alias, i, key)
	        frag.fresh = !init
	      }
	      frags[i] = frag
	      if (init) {
	        frag.before(end)
	      }
	    }
	
	    // we're done for the initial render.
	    if (init) {
	      return
	    }
	
	    // Second pass, go through the old fragments and
	    // destroy those who are not reused (and remove them
	    // from cache)
	    var removalIndex = 0
	    var totalRemoved = oldFrags.length - frags.length
	    for (i = 0, l = oldFrags.length; i < l; i++) {
	      frag = oldFrags[i]
	      if (!frag.reused) {
	        this.deleteCachedFrag(frag)
	        this.remove(frag, removalIndex++, totalRemoved, inDoc)
	      }
	    }
	
	    // Final pass, move/insert new fragments into the
	    // right place.
	    var targetPrev, prevEl, currentPrev
	    var insertionIndex = 0
	    for (i = 0, l = frags.length; i < l; i++) {
	      frag = frags[i]
	      // this is the frag that we should be after
	      targetPrev = frags[i - 1]
	      prevEl = targetPrev
	        ? targetPrev.staggerCb
	          ? targetPrev.staggerAnchor
	          : targetPrev.end || targetPrev.node
	        : start
	      if (frag.reused && !frag.staggerCb) {
	        currentPrev = findPrevFrag(frag, start, this.id)
	        if (currentPrev !== targetPrev) {
	          this.move(frag, prevEl)
	        }
	      } else {
	        // new instance, or still in stagger.
	        // insert with updated stagger index.
	        this.insert(frag, insertionIndex++, prevEl, inDoc)
	      }
	      frag.reused = frag.fresh = false
	    }
	  },
	
	  /**
	   * Create a new fragment instance.
	   *
	   * @param {*} value
	   * @param {String} alias
	   * @param {Number} index
	   * @param {String} [key]
	   * @return {Fragment}
	   */
	
	  create: function (value, alias, index, key) {
	    var host = this._host
	    // create iteration scope
	    var parentScope = this._scope || this.vm
	    var scope = Object.create(parentScope)
	    // ref holder for the scope
	    scope.$refs = {}
	    scope.$els = {}
	    // make sure point $parent to parent scope
	    scope.$parent = parentScope
	    // for two-way binding on alias
	    scope.$forContext = this
	    // define scope properties
	    _.defineReactive(scope, alias, value)
	    _.defineReactive(scope, '$index', index)
	    if (key) {
	      _.defineReactive(scope, '$key', key)
	    } else if (scope.$key) {
	      // avoid accidental fallback
	      _.define(scope, '$key', null)
	    }
	    if (this.iterator) {
	      _.defineReactive(scope, this.iterator, key !== null ? key : index)
	    }
	    var frag = this.factory.create(host, scope, this._frag)
	    frag.forId = this.id
	    this.cacheFrag(value, frag, index, key)
	    return frag
	  },
	
	  /**
	   * Update the v-ref on owner vm.
	   */
	
	  updateRef: function () {
	    var ref = this.ref
	    if (!ref) return
	    var hash = (this._scope || this.vm).$refs
	    var refs
	    if (!this.fromObject) {
	      refs = this.frags.map(findVmFromFrag)
	    } else {
	      refs = {}
	      this.frags.forEach(function (frag) {
	        refs[frag.scope.$key] = findVmFromFrag(frag)
	      })
	    }
	    if (!hash.hasOwnProperty(ref)) {
	      _.defineReactive(hash, ref, refs)
	    } else {
	      hash[ref] = refs
	    }
	  },
	
	  /**
	   * For option lists, update the containing v-model on
	   * parent <select>.
	   */
	
	  updateModel: function () {
	    if (this.isOption) {
	      var parent = this.start.parentNode
	      var model = parent && parent.__v_model
	      if (model) {
	        model.forceUpdate()
	      }
	    }
	  },
	
	  /**
	   * Insert a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Node} prevEl
	   * @param {Boolean} inDoc
	   */
	
	  insert: function (frag, index, prevEl, inDoc) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel()
	      frag.staggerCb = null
	    }
	    var staggerAmount = this.getStagger(frag, index, null, 'enter')
	    if (inDoc && staggerAmount) {
	      // create an anchor and insert it synchronously,
	      // so that we can resolve the correct order without
	      // worrying about some elements not inserted yet
	      var anchor = frag.staggerAnchor
	      if (!anchor) {
	        anchor = frag.staggerAnchor = _.createAnchor('stagger-anchor')
	        anchor.__vfrag__ = frag
	      }
	      _.after(anchor, prevEl)
	      var op = frag.staggerCb = _.cancellable(function () {
	        frag.staggerCb = null
	        frag.before(anchor)
	        _.remove(anchor)
	      })
	      setTimeout(op, staggerAmount)
	    } else {
	      frag.before(prevEl.nextSibling)
	    }
	  },
	
	  /**
	   * Remove a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {Boolean} inDoc
	   */
	
	  remove: function (frag, index, total, inDoc) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel()
	      frag.staggerCb = null
	      // it's not possible for the same frag to be removed
	      // twice, so if we have a pending stagger callback,
	      // it means this frag is queued for enter but removed
	      // before its transition started. Since it is already
	      // destroyed, we can just leave it in detached state.
	      return
	    }
	    var staggerAmount = this.getStagger(frag, index, total, 'leave')
	    if (inDoc && staggerAmount) {
	      var op = frag.staggerCb = _.cancellable(function () {
	        frag.staggerCb = null
	        frag.remove(true)
	      })
	      setTimeout(op, staggerAmount)
	    } else {
	      frag.remove(true)
	    }
	  },
	
	  /**
	   * Move a fragment to a new position.
	   * Force no transition.
	   *
	   * @param {Fragment} frag
	   * @param {Node} prevEl
	   */
	
	  move: function (frag, prevEl) {
	    frag.before(prevEl.nextSibling, false)
	  },
	
	  /**
	   * Cache a fragment using track-by or the object key.
	   *
	   * @param {*} value
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {String} [key]
	   */
	
	  cacheFrag: function (value, frag, index, key) {
	    var trackByKey = this.params.trackBy
	    var cache = this.cache
	    var primitive = !isObject(value)
	    var id
	    if (key || trackByKey || primitive) {
	      id = trackByKey
	        ? trackByKey === '$index'
	          ? index
	          : value[trackByKey]
	        : (key || value)
	      if (!cache[id]) {
	        cache[id] = frag
	      } else if (trackByKey !== '$index') {
	        ("development") !== 'production' &&
	        this.warnDuplicate(value)
	      }
	    } else {
	      id = this.id
	      if (value.hasOwnProperty(id)) {
	        if (value[id] === null) {
	          value[id] = frag
	        } else {
	          ("development") !== 'production' &&
	          this.warnDuplicate(value)
	        }
	      } else {
	        _.define(value, id, frag)
	      }
	    }
	    frag.raw = value
	  },
	
	  /**
	   * Get a cached fragment from the value/index/key
	   *
	   * @param {*} value
	   * @param {Number} index
	   * @param {String} key
	   * @return {Fragment}
	   */
	
	  getCachedFrag: function (value, index, key) {
	    var trackByKey = this.params.trackBy
	    var primitive = !isObject(value)
	    var frag
	    if (key || trackByKey || primitive) {
	      var id = trackByKey
	        ? trackByKey === '$index'
	          ? index
	          : value[trackByKey]
	        : (key || value)
	      frag = this.cache[id]
	    } else {
	      frag = value[this.id]
	    }
	    if (frag && (frag.reused || frag.fresh)) {
	      ("development") !== 'production' &&
	      this.warnDuplicate(value)
	    }
	    return frag
	  },
	
	  /**
	   * Delete a fragment from cache.
	   *
	   * @param {Fragment} frag
	   */
	
	  deleteCachedFrag: function (frag) {
	    var value = frag.raw
	    var trackByKey = this.params.trackBy
	    var scope = frag.scope
	    var index = scope.$index
	    // fix #948: avoid accidentally fall through to
	    // a parent repeater which happens to have $key.
	    var key = scope.hasOwnProperty('$key') && scope.$key
	    var primitive = !isObject(value)
	    if (trackByKey || key || primitive) {
	      var id = trackByKey
	        ? trackByKey === '$index'
	          ? index
	          : value[trackByKey]
	        : (key || value)
	      this.cache[id] = null
	    } else {
	      value[this.id] = null
	      frag.raw = null
	    }
	  },
	
	  /**
	   * Get the stagger amount for an insertion/removal.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {String} type
	   */
	
	  getStagger: function (frag, index, total, type) {
	    type = type + 'Stagger'
	    var trans = frag.node.__v_trans
	    var hooks = trans && trans.hooks
	    var hook = hooks && (hooks[type] || hooks.stagger)
	    return hook
	      ? hook.call(frag, index, total)
	      : index * parseInt(this.params[type] || this.params.stagger, 10)
	  },
	
	  /**
	   * Pre-process the value before piping it through the
	   * filters. This is passed to and called by the watcher.
	   */
	
	  _preProcess: function (value) {
	    // regardless of type, store the un-filtered raw value.
	    this.rawValue = value
	    return value
	  },
	
	  /**
	   * Post-process the value after it has been piped through
	   * the filters. This is passed to and called by the watcher.
	   *
	   * It is necessary for this to be called during the
	   * wathcer's dependency collection phase because we want
	   * the v-for to update when the source Object is mutated.
	   */
	
	  _postProcess: function (value) {
	    if (_.isArray(value)) {
	      return value
	    } else if (_.isPlainObject(value)) {
	      // convert plain object to array.
	      var keys = Object.keys(value)
	      var i = keys.length
	      var res = new Array(i)
	      var key
	      while (i--) {
	        key = keys[i]
	        res[i] = {
	          $key: key,
	          $value: value[key]
	        }
	      }
	      return res
	    } else {
	      var type = typeof value
	      if (type === 'number') {
	        value = range(value)
	      } else if (type === 'string') {
	        value = _.toArray(value)
	      }
	      return value || []
	    }
	  },
	
	  unbind: function () {
	    if (this.ref) {
	      (this._scope || this.vm).$refs[this.ref] = null
	    }
	    if (this.frags) {
	      var i = this.frags.length
	      var frag
	      while (i--) {
	        frag = this.frags[i]
	        this.deleteCachedFrag(frag)
	        frag.destroy()
	      }
	    }
	  }
	}
	
	/**
	 * Helper to find the previous element that is a fragment
	 * anchor. This is necessary because a destroyed frag's
	 * element could still be lingering in the DOM before its
	 * leaving transition finishes, but its inserted flag
	 * should have been set to false so we can skip them.
	 *
	 * If this is a block repeat, we want to make sure we only
	 * return frag that is bound to this v-for. (see #929)
	 *
	 * @param {Fragment} frag
	 * @param {Comment|Text} anchor
	 * @param {String} id
	 * @return {Fragment}
	 */
	
	function findPrevFrag (frag, anchor, id) {
	  var el = frag.node.previousSibling
	  /* istanbul ignore if */
	  if (!el) return
	  frag = el.__vfrag__
	  while (
	    (!frag || frag.forId !== id || !frag.inserted) &&
	    el !== anchor
	  ) {
	    el = el.previousSibling
	    /* istanbul ignore if */
	    if (!el) return
	    frag = el.__vfrag__
	  }
	  return frag
	}
	
	/**
	 * Find a vm from a fragment.
	 *
	 * @param {Fragment} frag
	 * @return {Vue|undefined}
	 */
	
	function findVmFromFrag (frag) {
	  return frag.node.__vue__ || frag.node.nextSibling.__vue__
	}
	
	/**
	 * Create a range array from given number.
	 *
	 * @param {Number} n
	 * @return {Array}
	 */
	
	function range (n) {
	  var i = -1
	  var ret = new Array(n)
	  while (++i < n) {
	    ret[i] = i
	  }
	  return ret
	}
	
	if (true) {
	  module.exports.warnDuplicate = function (value) {
	    _.warn(
	      'Duplicate value found in v-for="' + this.descriptor.raw + '": ' +
	      JSON.stringify(value) + '. Use track-by="$index" if ' +
	      'you are expecting duplicate values.'
	    )
	  }
	}


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var FragmentFactory = __webpack_require__(23)
	
	module.exports = {
	
	  priority: 2000,
	
	  bind: function () {
	    var el = this.el
	    if (!el.__vue__) {
	      // check else block
	      var next = el.nextElementSibling
	      if (next && _.attr(next, 'v-else') !== null) {
	        _.remove(next)
	        this.elseFactory = new FragmentFactory(this.vm, next)
	      }
	      // check main block
	      this.anchor = _.createAnchor('v-if')
	      _.replace(el, this.anchor)
	      this.factory = new FragmentFactory(this.vm, el)
	    } else {
	      ("development") !== 'production' && _.warn(
	        'v-if="' + this.expression + '" cannot be ' +
	        'used on an instance root element.'
	      )
	      this.invalid = true
	    }
	  },
	
	  update: function (value) {
	    if (this.invalid) return
	    if (value) {
	      if (!this.frag) {
	        this.insert()
	      }
	    } else {
	      this.remove()
	    }
	  },
	
	  insert: function () {
	    if (this.elseFrag) {
	      this.elseFrag.remove(true)
	      this.elseFrag = null
	    }
	    this.frag = this.factory.create(this._host, this._scope, this._frag)
	    this.frag.before(this.anchor)
	  },
	
	  remove: function () {
	    if (this.frag) {
	      this.frag.remove(true)
	      this.frag = null
	    }
	    if (this.elseFactory) {
	      this.elseFrag = this.elseFactory.create(this._host, this._scope, this._frag)
	      this.elseFrag.before(this.anchor)
	    }
	  },
	
	  unbind: function () {
	    if (this.frag) {
	      this.frag.destroy()
	    }
	  }
	}


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	// text & html
	exports.text = __webpack_require__(345)
	exports.html = __webpack_require__(336)
	
	// logic control
	exports['for'] = __webpack_require__(90)
	exports['if'] = __webpack_require__(91)
	exports.show = __webpack_require__(344)
	
	// two-way binding
	exports.model = __webpack_require__(338)
	
	// event handling
	exports.on = __webpack_require__(342)
	
	// attributes
	exports.bind = __webpack_require__(333)
	
	// ref & el
	exports.el = __webpack_require__(335)
	exports.ref = __webpack_require__(343)
	
	// cloak
	exports.cloak = __webpack_require__(334)


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var extend = _.extend
	
	/**
	 * The exposed Vue constructor.
	 *
	 * API conventions:
	 * - public API methods/properties are prefiexed with `$`
	 * - internal methods/properties are prefixed with `_`
	 * - non-prefixed properties are assumed to be proxied user
	 *   data.
	 *
	 * @constructor
	 * @param {Object} [options]
	 * @public
	 */
	
	function Vue (options) {
	  this._init(options)
	}
	
	/**
	 * Mixin global API
	 */
	
	extend(Vue, __webpack_require__(320))
	
	/**
	 * Vue and every constructor that extends Vue has an
	 * associated options object, which can be accessed during
	 * compilation steps as `this.constructor.options`.
	 *
	 * These can be seen as the default options of every
	 * Vue instance.
	 */
	
	Vue.options = {
	  replace: true,
	  directives: __webpack_require__(92),
	  elementDirectives: __webpack_require__(327),
	  filters: __webpack_require__(347),
	  transitions: {},
	  components: {},
	  partials: {}
	}
	
	/**
	 * Build up the prototype
	 */
	
	var p = Vue.prototype
	
	/**
	 * $data has a setter which does a bunch of
	 * teardown/setup work
	 */
	
	Object.defineProperty(p, '$data', {
	  get: function () {
	    return this._data
	  },
	  set: function (newData) {
	    if (newData !== this._data) {
	      this._setData(newData)
	    }
	  }
	})
	
	/**
	 * Mixin internal instance methods
	 */
	
	extend(p, __webpack_require__(350))
	extend(p, __webpack_require__(349))
	extend(p, __webpack_require__(353))
	extend(p, __webpack_require__(351))
	extend(p, __webpack_require__(352))
	
	/**
	 * Mixin public API methods
	 */
	
	extend(p, __webpack_require__(317))
	extend(p, __webpack_require__(318))
	extend(p, __webpack_require__(319))
	extend(p, __webpack_require__(321))
	
	Vue.version = '1.0.3'
	module.exports = _.Vue = Vue
	
	/* istanbul ignore if */
	if (true) {
	  if (_.inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
	    window.__VUE_DEVTOOLS_GLOBAL_HOOK__.emit('init', Vue)
	  }
	}


/***/ },
/* 94 */
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ },
/* 95 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.configRouter = configRouter;
	
	function configRouter(router) {
	  router.map({
	    'components': {
	      component: __webpack_require__(273),
	      subRoutes: {
	        'introduce': {
	          component: __webpack_require__(276)
	        },
	
	        'getting-started': {
	          component: __webpack_require__(275)
	        },
	
	        'download': {
	          component: __webpack_require__(274)
	        },
	
	        'affix': {
	          component: __webpack_require__(440)
	        },
	
	        'alert': {
	          component: __webpack_require__(258)
	        },
	
	        'button': {
	          component: __webpack_require__(261)
	        },
	
	        'badge': {
	          component: __webpack_require__(259)
	        },
	
	        'breadcrumb': {
	          component: __webpack_require__(260)
	        },
	
	        'checkbox': {
	          component: __webpack_require__(262)
	        },
	
	        'iconfont': {
	          component: __webpack_require__(263)
	        },
	
	        'progress': {
	          component: __webpack_require__(264)
	        },
	
	        'upload': {
	          component: __webpack_require__(271)
	        },
	
	        // 'modal': {
	        //   component: require('../components/modal.vue')
	        // },
	
	        'radio': {
	          component: __webpack_require__(265)
	        },
	
	        'switch': {
	          component: __webpack_require__(268)
	        },
	
	        'steps': {
	          component: __webpack_require__(267)
	        },
	
	        'spin': {
	          component: __webpack_require__(266)
	        },
	
	        'table': {
	          component: __webpack_require__(269)
	        },
	
	        'tag': {
	          component: __webpack_require__(270)
	        }
	      }
	    },
	
	    '*': {
	      component: __webpack_require__(277)
	    }
	  });
	
	  router.alias({
	    '/components': '/components/introduce',
	    '/docs/introduce': '/components/introduce',
	    '/docs/getting-started': '/components/getting-started',
	    '/docs/download': '/components/download'
	  });
	
	  // global before
	  // 3 options:
	  // 1. return a boolean
	  // 2. return a Promise that resolves to a boolean
	  // 3. call transition.next() or transition.abort()
	  router.beforeEach(function (transition) {
	    if (transition.to.path === '/forbidden') {
	      router.app.authenticating = true;
	      setTimeout(function () {
	        router.app.authenticating = false;
	        // alert('this route is forbidden by a global before hook')
	        transition.abort();
	      }, 3000);
	    } else {
	      transition.next();
	    }
	  });
	}

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _AlertVue = __webpack_require__(278);
	
	var _AlertVue2 = _interopRequireDefault(_AlertVue);

	exports['default'] = _AlertVue2['default'];
	module.exports = exports['default'];

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _BadgeVue = __webpack_require__(279);
	
	var _BadgeVue2 = _interopRequireDefault(_BadgeVue);

	exports['default'] = _BadgeVue2['default'];
	module.exports = exports['default'];

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _BreadcrumbVue = __webpack_require__(280);
	
	var _BreadcrumbVue2 = _interopRequireDefault(_BreadcrumbVue);
	
	var _BreadcrumbItemVue = __webpack_require__(281);
	
	var _BreadcrumbItemVue2 = _interopRequireDefault(_BreadcrumbItemVue);
	
	_BreadcrumbVue2['default'].BreadcrumbItem = _BreadcrumbItemVue2['default'];
	
	exports['default'] = _BreadcrumbVue2['default'];
	module.exports = exports['default'];

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _CheckboxVue = __webpack_require__(284);
	
	var _CheckboxVue2 = _interopRequireDefault(_CheckboxVue);

	exports['default'] = _CheckboxVue2['default'];
	module.exports = exports['default'];

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _ProgressLineVue = __webpack_require__(287);
	
	var _ProgressLineVue2 = _interopRequireDefault(_ProgressLineVue);
	
	var _ProgressCircleVue = __webpack_require__(286);
	
	var _ProgressCircleVue2 = _interopRequireDefault(_ProgressCircleVue);
	
	exports['default'] = { vProgressLine: _ProgressLineVue2['default'], vProgressCircle: _ProgressCircleVue2['default'] };
	module.exports = exports['default'];

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _RadioVue = __webpack_require__(53);
	
	var _RadioVue2 = _interopRequireDefault(_RadioVue);
	
	var _RadioGroupVue = __webpack_require__(288);
	
	var _RadioGroupVue2 = _interopRequireDefault(_RadioGroupVue);
	
	_RadioVue2['default'].RadioGroup = _RadioGroupVue2['default'];
	
	exports['default'] = _RadioVue2['default'];
	module.exports = exports['default'];

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _SpinVue = __webpack_require__(289);
	
	var _SpinVue2 = _interopRequireDefault(_SpinVue);

	exports['default'] = _SpinVue2['default'];
	module.exports = exports['default'];

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _StepsVue = __webpack_require__(291);
	
	var _StepsVue2 = _interopRequireDefault(_StepsVue);
	
	var _StepVue = __webpack_require__(290);
	
	var _StepVue2 = _interopRequireDefault(_StepVue);
	
	_StepsVue2['default'].vStep = _StepVue2['default'];
	
	exports['default'] = _StepsVue2['default'];
	module.exports = exports['default'];

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _SwitchVue = __webpack_require__(292);
	
	var _SwitchVue2 = _interopRequireDefault(_SwitchVue);

	exports['default'] = _SwitchVue2['default'];
	module.exports = exports['default'];

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _objectAssign = __webpack_require__(33);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	function noop() {}
	
	function defaultResolve(data) {
	  return data || [];
	}
	
	var DataSource = (function () {
	  function DataSource(config) {
	    _classCallCheck(this, DataSource);
	
	    if (config) {
	      this.init(config);
	    }
	  }
	
	  _createClass(DataSource, [{
	    key: 'init',
	    value: function init(config) {
	      this.config = config;
	      this.url = config.url || '';
	      this.resolve = config.resolve || defaultResolve;
	      this.getParams = config.getParams || noop;
	      this.getPagination = config.getPagination || noop;
	      this.headers = config.headers || {};
	      this.data = config.data || {};
	    }
	  }, {
	    key: 'clone',
	    value: function clone() {
	      var config = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	      return new DataSource((0, _objectAssign2['default'])({}, this.config, config));
	    }
	  }]);
	
	  return DataSource;
	})();
	
	exports['default'] = DataSource;
	module.exports = exports['default'];

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _DataSource = __webpack_require__(106);
	
	var _DataSource2 = _interopRequireDefault(_DataSource);
	
	var _TableVue = __webpack_require__(293);
	
	var _TableVue2 = _interopRequireDefault(_TableVue);
	
	_TableVue2['default'].DataSource = _DataSource2['default'];
	
	exports['default'] = _TableVue2['default'];
	module.exports = exports['default'];

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _TagVue = __webpack_require__(294);
	
	var _TagVue2 = _interopRequireDefault(_TagVue);

	exports['default'] = _TagVue2['default'];
	module.exports = exports['default'];

/***/ },
/* 109 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = getFileItem;
	
	function getFileItem(file, fileList) {
	  var matchWay = !file.uid ? 'byName' : 'byUid';
	
	  var target = fileList.filter(function (item) {
	    if (matchWay === 'byName') {
	      return item.name === file.name;
	    } else {
	      return item.uid === file.uid;
	    }
	  })[0];
	
	  return target;
	}
	
	module.exports = exports['default'];

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _UploadsVue = __webpack_require__(297);
	
	var _UploadsVue2 = _interopRequireDefault(_UploadsVue);

	exports['default'] = _UploadsVue2['default'];
	module.exports = exports['default'];

/***/ },
/* 111 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = upload;
	function getError(option, xhr) {
	  var msg = 'cannot post ' + option.action + ' ' + xhr.status + '\'';
	  var err = new Error(msg);
	  err.status = xhr.status;
	  err.method = 'post';
	  err.url = option.action;
	  return err;
	}
	
	function getBody(xhr) {
	  var text = xhr.responseText || xhr.response;
	  if (!text) {
	    return text;
	  }
	
	  try {
	    return JSON.parse(text);
	  } catch (e) {
	    return text;
	  }
	}
	
	function upload(option) {
	  if (typeof XMLHttpRequest === 'undefined') {
	    return;
	  }
	
	  var xhr = new XMLHttpRequest();
	  if (xhr.upload) {
	    xhr.upload.onprogress = function (e) {
	      if (e.total > 0) {
	        e.percent = e.loaded / e.total * 100;
	      }
	      option.onProgress(e);
	    };
	  }
	
	  var formData = new FormData();
	  formData.append(option.filename, option.file);
	  if (option.data) {
	    Object.keys(option.data).map(function (key) {
	      formData.append(key, option.data[key]);
	    });
	  }
	
	  xhr.onerror = function (e) {
	    option.onError(e);
	  };
	
	  xhr.onload = function () {
	    if (xhr.status !== 200) {
	      return option.onError(getError(option, xhr), getBody(xhr));
	    }
	
	    option.onSuccess(getBody(xhr));
	  };
	
	  xhr.open('post', option.action, true);
	  xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	  xhr.send(formData);
	}
	
	module.exports = exports['default'];

/***/ },
/* 112 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = uid;
	var now = +new Date();
	var index = 0;
	
	function uid() {
	  return 'ant-upload-' + now + '-' + ++index;
	}
	
	module.exports = exports['default'];

/***/ },
/* 113 */,
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _srcComponentsAlert = __webpack_require__(97);
	
	var _srcComponentsAlert2 = _interopRequireDefault(_srcComponentsAlert);
	
	exports['default'] = {
	  data: function data() {
	    return {};
	  },
	
	  components: { vAlert: _srcComponentsAlert2['default'] },
	
	  methods: {
	    _close: function _close() {
	      console.log('我要被关闭啦！');
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _srcComponentsBadge = __webpack_require__(98);
	
	var _srcComponentsBadge2 = _interopRequireDefault(_srcComponentsBadge);
	
	var _srcComponentsIconfont = __webpack_require__(6);
	
	var _srcComponentsIconfont2 = _interopRequireDefault(_srcComponentsIconfont);
	
	exports['default'] = {
	
	  components: { vBadge: _srcComponentsBadge2['default'], vIcon: _srcComponentsIconfont2['default'] }
	
	};
	module.exports = exports['default'];

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _srcComponentsBreadcrumb = __webpack_require__(99);
	
	var _srcComponentsBreadcrumb2 = _interopRequireDefault(_srcComponentsBreadcrumb);
	
	var _srcComponentsIconfont = __webpack_require__(6);
	
	var _srcComponentsIconfont2 = _interopRequireDefault(_srcComponentsIconfont);
	
	exports['default'] = {
	
	  components: { vBreadcrumb: _srcComponentsBreadcrumb2['default'], vBreadcrumbItem: _srcComponentsBreadcrumb.BreadcrumbItem, vIcon: _srcComponentsIconfont2['default'] }
	
	};
	module.exports = exports['default'];

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _srcComponentsButton = __webpack_require__(8);
	
	var _srcComponentsButton2 = _interopRequireDefault(_srcComponentsButton);
	
	var _srcComponentsIconfont = __webpack_require__(6);
	
	var _srcComponentsIconfont2 = _interopRequireDefault(_srcComponentsIconfont);
	
	exports['default'] = {
	  data: function data() {
	    return {
	      loading: false
	    };
	  },
	
	  components: { vButton: _srcComponentsButton2['default'], vButtonGroup: _srcComponentsButton.vButtonGroup, vIcon: _srcComponentsIconfont2['default'] },
	
	  methods: {
	    _enterLoading: function _enterLoading() {
	      this.loading = true;
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _srcComponentsCheckbox = __webpack_require__(100);
	
	var _srcComponentsCheckbox2 = _interopRequireDefault(_srcComponentsCheckbox);
	
	var _srcComponentsButton = __webpack_require__(8);
	
	var _srcComponentsButton2 = _interopRequireDefault(_srcComponentsButton);
	
	exports['default'] = {
	  data: function data() {
	    return {
	      checked: true,
	      disabled: false
	    };
	  },
	
	  components: { vCheckbox: _srcComponentsCheckbox2['default'], vButton: _srcComponentsButton2['default'] },
	
	  computed: {
	    checkedStatus: function checkedStatus() {
	      return this.checked ? '选中' : '取 消';
	    },
	
	    disabledStatus: function disabledStatus() {
	      return this.disabled ? '不可用' : '可 用';
	    }
	  },
	
	  methods: {
	    _change: function _change(e) {
	      console.log('checked=' + e.target.checked);
	    },
	
	    _toggleChecked: function _toggleChecked() {
	      this.checked = !this.checked;
	    },
	
	    _toggleDisable: function _toggleDisable() {
	      this.disabled = !this.disabled;
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _toConsumableArray = __webpack_require__(157)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = {
	  ready: function ready() {
	    [].concat(_toConsumableArray(document.querySelectorAll('.anticons-list li'))).forEach(function (item, i) {
	      var client = new ZeroClipboard(item);
	
	      client.on("copy", function (event) {
	        client.setText('<v-icon type="' + item.querySelectorAll('.anticon-class')[0].innerHTML + '">');
	      });
	
	      client.on("ready", function (readyEvent) {
	        client.on("aftercopy", function (event) {
	          // `this` === `client`
	          // `event.target` === the element that was clicked
	          event.target.classList.add('copied');
	          setTimeout(function () {
	            event.target.classList.remove('copied');
	          }, 2000);
	        });
	      });
	    });
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _srcComponentsProgress = __webpack_require__(101);
	
	var _srcComponentsButton = __webpack_require__(8);
	
	var _srcComponentsButton2 = _interopRequireDefault(_srcComponentsButton);
	
	var _srcComponentsIconfont = __webpack_require__(6);
	
	var _srcComponentsIconfont2 = _interopRequireDefault(_srcComponentsIconfont);
	
	exports['default'] = {
	  data: function data() {
	    return {
	      percent: 0
	    };
	  },
	
	  components: { vProgressLine: _srcComponentsProgress.vProgressLine, vProgressCircle: _srcComponentsProgress.vProgressCircle, vButtonGroup: _srcComponentsButton.vButtonGroup, vButton: _srcComponentsButton2['default'], vIcon: _srcComponentsIconfont2['default'] },
	
	  methods: {
	    _decline: function _decline() {
	      var percent = this.percent - 10;
	      if (percent < 0) {
	        percent = 0;
	      }
	      this.percent = percent;
	    },
	
	    _increase: function _increase() {
	      var percent = this.percent + 10;
	      if (percent > 100) {
	        percent = 100;
	      }
	      this.percent = percent;
	    }
	  }
	
	};
	module.exports = exports['default'];

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _srcComponentsRadio = __webpack_require__(102);
	
	var _srcComponentsRadio2 = _interopRequireDefault(_srcComponentsRadio);
	
	var _srcComponentsButton = __webpack_require__(8);
	
	var _srcComponentsButton2 = _interopRequireDefault(_srcComponentsButton);
	
	var vRadioGroup = _srcComponentsRadio2['default'].RadioGroup;
	
	exports['default'] = {
	  data: function data() {
	    return {
	      disabled: true,
	      groupValue: 'a',
	      cityName: null
	    };
	  },
	
	  components: { vRadio: _srcComponentsRadio2['default'], vRadioGroup: vRadioGroup, vButton: _srcComponentsButton2['default'] },
	
	  methods: {
	    _change: function _change() {},
	
	    _toggleDisabled: function _toggleDisabled() {
	      this.disabled = !this.disabled;
	    },
	
	    _onGroupChange: function _onGroupChange(e) {
	      console.log('radio checked:' + e.target.value);
	      this.groupValue = e.target.value;
	    },
	
	    _onCityChange: function _onCityChange(e) {
	      console.log('当前城市: ' + e.target.name);
	      this.cityName = e.target.name;
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _srcComponentsSpin = __webpack_require__(103);
	
	var _srcComponentsSpin2 = _interopRequireDefault(_srcComponentsSpin);
	
	var _srcComponentsButton = __webpack_require__(8);
	
	var _srcComponentsButton2 = _interopRequireDefault(_srcComponentsButton);
	
	exports['default'] = {
	  data: function data() {
	    return {
	      loading: true
	    };
	  },
	
	  components: { vSpin: _srcComponentsSpin2['default'], vButton: _srcComponentsButton2['default'] },
	
	  methods: {
	    _enterLoading: function _enterLoading() {
	      this.loading = !this.loading;
	    }
	  }
	
	};
	module.exports = exports['default'];

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _srcComponentsSteps = __webpack_require__(104);
	
	var _srcComponentsSteps2 = _interopRequireDefault(_srcComponentsSteps);
	
	var _srcComponentsButton = __webpack_require__(8);
	
	var _srcComponentsButton2 = _interopRequireDefault(_srcComponentsButton);
	
	exports['default'] = {
	  data: function data() {
	    return {
	      steps: 3,
	      currentStep: 0
	    };
	  },
	
	  components: { vSteps: _srcComponentsSteps2['default'], vStep: _srcComponentsSteps.vStep, vButton: _srcComponentsButton2['default'] },
	
	  beforeCompile: function beforeCompile() {
	    this.currentStep = Math.floor(Math.random() * this.steps);
	  },
	
	  methods: {
	    _next: function _next() {
	      var s = this.currentStep + 1;
	      if (s === this.steps) {
	        s = 0;
	      }
	      this.currentStep = s;
	    }
	  }
	
	};
	module.exports = exports['default'];

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _srcComponentsSwitch = __webpack_require__(105);
	
	var _srcComponentsSwitch2 = _interopRequireDefault(_srcComponentsSwitch);
	
	var _srcComponentsButton = __webpack_require__(8);
	
	var _srcComponentsButton2 = _interopRequireDefault(_srcComponentsButton);
	
	var _srcUtils = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../src/utils\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	exports['default'] = {
	  props: (0, _srcUtils.defaultProps)({
	    prefixCls: 'ant-switch'
	  }),
	
	  data: function data() {
	    return {
	      disabled: false
	    };
	  },
	
	  components: { vSwitch: _srcComponentsSwitch2['default'], vButton: _srcComponentsButton2['default'] },
	
	  methods: {
	    _change: function _change(value) {
	      console.log('current', value);
	    },
	
	    _toogle: function _toogle() {
	      this.disabled = !this.disabled;
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _srcComponentsTable = __webpack_require__(107);
	
	var _srcComponentsTable2 = _interopRequireDefault(_srcComponentsTable);
	
	exports['default'] = {
	  data: function data() {
	    return {
	      columns: [{
	        title: '姓名',
	        dataIndex: 'name'
	      }, {
	        title: '年龄',
	        dataIndex: 'age'
	      }, {
	        title: '住址',
	        dataIndex: 'address'
	      }, {
	        title: '操作',
	        dataIndex: '',
	        render: function render(text, record) {
	          return '<span :class="{\'item\', true}">\n            <a href="javascript:;" @click="edit">编辑</a>\n            <span class="ant-divider"></span>\n            <a href="javascript:;" @click="del">删除</a>\n          </span>';
	        }
	      }],
	      dataSource: [{
	        key: '1',
	        name: '胡彦斌',
	        age: 32,
	        address: '西湖区湖底公园1号'
	      }, {
	        key: '2',
	        name: '胡彦祖',
	        age: 42,
	        address: '西湖区湖底公园1号'
	      }, {
	        key: '3',
	        name: '李大嘴',
	        age: 32,
	        address: '西湖区湖底公园1号'
	      }]
	    };
	  },
	
	  components: { vTable: _srcComponentsTable2['default'] },
	
	  compiled: function compiled() {
	    // debugger
	  },
	
	  methods: {
	    edit: function edit() {
	      alert('edit');
	    },
	
	    del: function del() {
	      alert('del');
	    }
	  }
	
	};
	module.exports = exports['default'];

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _srcComponentsTag = __webpack_require__(108);
	
	var _srcComponentsTag2 = _interopRequireDefault(_srcComponentsTag);
	
	exports['default'] = {
	
	  components: { vTag: _srcComponentsTag2['default'] },
	
	  methods: {
	    _onClose: function _onClose() {
	      console.log('tag 关闭');
	    }
	  }
	
	};
	module.exports = exports['default'];

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _srcComponentsUpload = __webpack_require__(110);
	
	var _srcComponentsUpload2 = _interopRequireDefault(_srcComponentsUpload);
	
	var _srcComponentsIconfont = __webpack_require__(6);
	
	var _srcComponentsIconfont2 = _interopRequireDefault(_srcComponentsIconfont);
	
	var _srcComponentsButton = __webpack_require__(8);
	
	var _srcComponentsButton2 = _interopRequireDefault(_srcComponentsButton);
	
	exports['default'] = {
	  data: function data() {
	    return {
	      name: 'file',
	      action: '/upload',
	      onChange: function onChange(info) {
	        if (info.file.status !== 'uploading') {
	          console.log(info.file, info.fileList);
	        }
	        if (info.file.status === 'done') {
	          console.log(info.file.name + ' 上传成功.');
	        } else if (info.file.status === 'error') {
	          console.log(info.file.name + ' 上传失败.');
	        }
	      },
	      defaultFileList: [{
	        uid: -1,
	        name: 'xxx.png',
	        status: 'done',
	        url: 'http://www.baidu.com/xxx.png'
	      }, {
	        uid: -2,
	        name: 'yyy.png',
	        status: 'done',
	        url: 'http://www.baidu.com/yyy.png'
	      }]
	    };
	  },
	
	  components: { vUpload: _srcComponentsUpload2['default'], vIcon: _srcComponentsIconfont2['default'], vButton: _srcComponentsButton2['default'] }
	};
	module.exports = exports['default'];

/***/ },
/* 128 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = {
	  computed: {
	    isHomePage: function isHomePage() {
	      if (this.$route.path === '/' || this.$route.path.indexOf('/?') === 0) return true;
	
	      return false;
	    },
	
	    isComponentsPage: function isComponentsPage() {
	      if (this.$route.path.indexOf('/components') === 0) return true;
	
	      return false;
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 129 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = {
	  data: function data() {
	    return {
	      componentsMenu: {
	        base: [{
	          name: 'button',
	          desc: '按钮'
	        }, {
	          name: 'iconfont',
	          desc: '字体图标'
	        }
	        // {
	        //   name: 'layout',
	        //   desc: '布局'
	        // }
	        ],
	        form: [{
	          name: 'checkbox',
	          desc: '多选框'
	        },
	        // {
	        //   name: 'datepicker',
	        //   desc: '日期选择框'
	        // },
	        // {
	        //   name: 'form',
	        //   desc: '表单'
	        // },
	        // {
	        //   name: 'input-number',
	        //   desc: '数字输入框'
	        // },
	        {
	          name: 'radio',
	          desc: '单选框'
	        },
	        // {
	        //   name: 'select',
	        //   desc: '选择器'
	        // },
	        // {
	        //   name: 'slider',
	        //   desc: '滑动输入条'
	        // },
	        {
	          name: 'switch',
	          desc: '开关'
	        }, {
	          name: 'upload',
	          desc: '文件上传'
	        }
	        // {
	        //   name: 'validation',
	        //   desc: '表单验证'
	        // }
	        ],
	        show: [
	        // {
	        //   name: 'alert',
	        //   desc: '警告提示'
	        // },
	        {
	          name: 'badge',
	          desc: '徽标数'
	        },
	        // {
	        //   name: 'carousel',
	        //   desc: '走马灯'
	        // },
	        // {
	        //   name: 'collapse',
	        //   desc: '折叠面板'
	        // },
	        // {
	        //   name: 'dropdown',
	        //   desc: '下拉菜单'
	        // },
	        // {
	        //   name: 'message',
	        //   desc: '全局提示'
	        // },
	        // {
	        //   name: 'modal',
	        //   desc: '对话框'
	        // },
	        // {
	        //   name: 'notification',
	        //   desc: '通知提醒框'
	        // },
	        // {
	        //   name: 'popconfirm',
	        //   desc: '气泡确认框'
	        // },
	        // {
	        //   name: 'popover',
	        //   desc: '气泡卡片'
	        // },
	        {
	          name: 'progress',
	          desc: '进度条'
	        },
	        // {
	        //   name: 'table',
	        //   desc: '表格'
	        // },
	        {
	          name: 'tag',
	          desc: '标签'
	        }, {
	          name: 'spin',
	          desc: '加载动画'
	        }
	        // {
	        //   name: 'timeline',
	        //   desc: '时间轴'
	        // },
	        // {
	        //   name: 'tooltip',
	        //   desc: '文字提示'
	        // },
	        // {
	        //   name: 'tree',
	        //   desc: '树形控件'
	        // }
	        ],
	        pagination: [{
	          name: 'breadcrumb',
	          desc: '面包屑'
	        },
	        // {
	        //   name: 'menu',
	        //   desc: '导航菜单'
	        // },
	        // {
	        //   name: 'pagination',
	        //   desc: '分页'
	        // },
	        {
	          name: 'steps',
	          desc: '步骤条'
	        }
	        // {
	        //   name: 'tabs',
	        //   desc: '标签页'
	        // }
	        ],
	        other: [{
	          name: 'affix',
	          desc: '固钉'
	        }
	        // {
	        //   name: 'enter-animation',
	        //   desc: '进场动画'
	        // }
	        ]
	      }
	    };
	  },
	
	  filters: {
	    Upper: function Upper(str) {
	      var arr = str.split('-');
	
	      return arr.map(function (item) {
	        return item.substring(0, 1).toUpperCase() + item.substring(1);
	      }).join('');
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 130 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = {
	  methods: {}
	};
	module.exports = exports["default"];

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _utils = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../utils\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	// import Animate from './base/animate.vue'
	
	exports['default'] = {
	  props: (0, _utils.defaultProps)({
	    prefixCls: 'ant-alert',
	    type: String,
	    closable: Boolean,
	    message: String,
	    description: String,
	    closeText: String,
	    onClose: function onClose() {}
	  }),
	
	  data: function data() {
	    return {
	      iconClass: '',
	      closeName: '',
	
	      closing: true,
	      closed: false
	    };
	  },
	
	  computed: {
	    iconClass: function iconClass() {
	      var iconClass = this.description ? 'ant-alert-with-description-icon anticon-' : 'ant-alert-icon anticon-';
	
	      switch (this.type) {
	        case 'success':
	          iconClass += 'check-circle';
	          break;
	
	        case 'info':
	          iconClass += 'info-circle';
	          break;
	
	        case 'error':
	          iconClass += 'exclamation-circle';
	          break;
	
	        case 'warn':
	          iconClass += 'question-circle';
	          break;
	
	        default:
	          iconClass += 'default';
	      }
	
	      return iconClass;
	    },
	
	    closeName: function closeName() {
	      return !this.closing ? ' ' + this.prefixCls + '-close' : '';
	    }
	  },
	
	  methods: {
	    _handleClose: function _handleClose(e) {
	      var dom = this.$el;
	      dom.style.height = dom.offsetHeight + 'px';
	
	      this.closing = false;
	
	      if (this.onClose) {
	        this.onClose.call(this, e);
	      }
	    },
	
	    _animationEnd: function _animationEnd() {
	      this.closed = true, this.closing = true;
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _utils = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../utils\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	exports['default'] = {
	  props: (0, _utils.defaultProps)({
	    prefixCls: 'ant-badge',
	    count: Number,
	    dot: false
	  }),
	
	  filters: {
	    short: function short(value) {
	      return value >= 100 ? '99+' : value;
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _utils = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../utils\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	exports['default'] = {
	  props: (0, _utils.defaultProps)({
	    prefixCls: 'ant-breadcrumb'
	  })
	};
	module.exports = exports['default'];

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _utils = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../utils\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	exports['default'] = {
	  props: (0, _utils.defaultProps)({
	    prefixCls: 'ant-breadcrumb',
	    href: String
	  })
	};
	module.exports = exports['default'];

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _defineProperty = __webpack_require__(5)['default'];
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _utils = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../utils\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _classnames2 = __webpack_require__(4);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	exports['default'] = {
	  props: (0, _utils.defaultProps)({
	    prefixCls: 'ant-btn',
	
	    type: (0, _utils.oneOf)(['primary', 'ghost', undefined]),
	    htmlType: 'button',
	    shape: (0, _utils.oneOf)(['circle', 'circle-outline', undefined]),
	    size: (0, _utils.oneOf)(['small', 'large', undefined]),
	    loading: Boolean,
	    className: '',
	    onclick: function onclick() {}
	  }),
	
	  computed: {
	    btClasses: function btClasses() {
	      var _classnames;
	
	      var sizeCls = ({
	        'large': 'lg',
	        'small': 'sm'
	      })[this.size] || '';
	
	      return (0, _classnames3['default'])((_classnames = {}, _defineProperty(_classnames, this.prefixCls, 1), _defineProperty(_classnames, this.prefixCls + '-' + this.type, !!this.type), _defineProperty(_classnames, this.prefixCls + '-' + this.shape, !!this.shape), _defineProperty(_classnames, this.prefixCls + '-' + sizeCls, !!sizeCls), _defineProperty(_classnames, this.prefixCls + '-loading', this.loading != null && this.loading), _defineProperty(_classnames, this.className, !!this.className), _classnames));
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _defineProperty = __webpack_require__(5)['default'];
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _utils = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../utils\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _classnames2 = __webpack_require__(4);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	exports['default'] = {
	  props: (0, _utils.defaultProps)({
	    prefixCls: 'ant-btn-group',
	
	    size: (0, _utils.oneOf)(['large', 'small', undefined]),
	    className: ''
	  }),
	
	  computed: {
	    btgClasses: function btgClasses() {
	      var _classnames;
	
	      var sizeCls = ({
	        'large': 'lg',
	        'small': 'sm'
	      })[this.size] || '';
	
	      return (0, _classnames3['default'])((_classnames = {}, _defineProperty(_classnames, this.prefixCls, 1), _defineProperty(_classnames, this.prefixCls + '-' + sizeCls, !!sizeCls), _defineProperty(_classnames, this.className, this.className), _classnames));
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _defineProperty = __webpack_require__(5)['default'];
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _utils = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../utils\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _classnames3 = __webpack_require__(4);
	
	var _classnames4 = _interopRequireDefault(_classnames3);
	
	exports['default'] = {
	  props: (0, _utils.defaultProps)({
	    prefixCls: 'ant-checkbox',
	    style: {},
	    type: 'checkbox',
	    className: '',
	    disabled: false,
	    checked: Boolean,
	    defaultChecked: false,
	    onChange: function onChange() {}
	  }),
	
	  computed: {
	    wrapClasses: function wrapClasses() {
	      var _classnames;
	
	      return (0, _classnames4['default'])((_classnames = {}, _defineProperty(_classnames, this.className, !!this.className), _defineProperty(_classnames, this.className + '-checked', this.checked), _classnames));
	    },
	
	    ckClasses: function ckClasses() {
	      var _classnames2;
	
	      return (0, _classnames4['default'])((_classnames2 = {}, _defineProperty(_classnames2, this.className, !!this.className), _defineProperty(_classnames2, this.prefixCls, 1), _defineProperty(_classnames2, this.prefixCls + '-checked', this.checked), _defineProperty(_classnames2, this.prefixCls + '-checked-' + (this.checked ? 1 : 0), !!this.checked), _defineProperty(_classnames2, this.prefixCls + '-disabled', this.disabled), _classnames2));
	    }
	  },
	
	  compiled: function compiled() {
	    if (this.checked == null) {
	      this.checked = this.defaultChecked;
	    }
	  },
	
	  methods: {
	    _handleChange: function _handleChange(e) {
	      this.checked = e.target.checked;
	      this.onChange(e);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _defineProperty = __webpack_require__(5)['default'];
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _utils = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../utils\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _classnames2 = __webpack_require__(4);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	exports['default'] = {
	  props: (0, _utils.defaultProps)({
	    className: '',
	    type: {
	      type: String,
	      require: true
	    }
	  }),
	
	  computed: {
	    iconClasses: function iconClasses() {
	      var _classnames;
	
	      return (0, _classnames3['default'])((_classnames = {}, _defineProperty(_classnames, this.className, !!this.className), _defineProperty(_classnames, 'anticon', 1), _defineProperty(_classnames, 'anticon-' + this.type, this.type), _classnames));
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _utils = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../utils\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _iconfont = __webpack_require__(6);
	
	var _iconfont2 = _interopRequireDefault(_iconfont);
	
	var _classnames = __webpack_require__(4);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var statusColorMap = {
	  'normal': '#2db7f5',
	  'exception': '#ff6600',
	  'success': '#87d068'
	};
	
	exports['default'] = {
	  props: (0, _utils.defaultProps)({
	    prefixCls: 'ant-progress',
	
	    status: (0, _utils.oneOf)(['normal', 'exception', 'success'], 'normal'),
	    width: 132,
	    percent: 0,
	    trailWidth: 6,
	    strokeWidth: 6,
	    trailColor: '#e9e9e9'
	  }),
	
	  components: { vIcon: _iconfont2['default'] },
	
	  computed: {
	    strokeColor: function strokeColor() {
	      return statusColorMap[this.status];
	    },
	
	    radius: function radius() {
	      return 50 - this.strokeWidth / 2;
	    },
	
	    pathString: function pathString() {
	      return 'M 50,50 m 0,-' + this.radius + '\n              a ' + this.radius + ',' + this.radius + ' 0 1 1 0,' + 2 * this.radius + '\n              a ' + this.radius + ',' + this.radius + ' 0 1 1 0,-' + 2 * this.radius;
	    },
	
	    pathStyle: function pathStyle() {
	      var len = Math.PI * 2 * this.radius;
	      return {
	        'strokeDasharray': len + 'px ' + len + 'px',
	        'strokeDashoffset': (100 - this.percent) / 100 * len + 'px',
	        'transition': 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease'
	      };
	    }
	  },
	
	  compiled: function compiled() {
	    this._handleStatus();
	  },
	
	  watch: {
	    percent: function percent() {
	      this._handleStatus();
	    }
	  },
	
	  methods: {
	    _handleStatus: function _handleStatus() {
	      if (parseInt(this.percent, 10) === 100) {
	        this.status = 'success';
	      }
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _defineProperty = __webpack_require__(5)['default'];
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _utils = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../utils\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _iconfont = __webpack_require__(6);
	
	var _iconfont2 = _interopRequireDefault(_iconfont);
	
	var _classnames2 = __webpack_require__(4);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	exports['default'] = {
	  props: (0, _utils.defaultProps)({
	    prefixCls: 'ant-progress',
	
	    status: (0, _utils.oneOf)(['normal', 'exception', 'active', 'success'], 'normal'),
	    showInfo: true,
	    percent: 0,
	    strokeWidth: 10
	  }),
	
	  components: { vIcon: _iconfont2['default'] },
	
	  computed: {
	    wrapClasses: function wrapClasses() {
	      var _classnames;
	
	      return (0, _classnames3['default'])((_classnames = {}, _defineProperty(_classnames, this.prefixCls + '-line-wrap', 1), _defineProperty(_classnames, 'clearfix', 1), _defineProperty(_classnames, 'status-' + this.status, this.status), _defineProperty(_classnames, this.prefixCls + '-line-wrap-full', !this.showInfo), _classnames));
	    }
	  },
	
	  compiled: function compiled() {
	    this._handleStatus();
	  },
	
	  watch: {
	    percent: function percent() {
	      this._handleStatus();
	    }
	  },
	
	  methods: {
	    _handleStatus: function _handleStatus() {
	      if (parseInt(this.percent, 10) === 100) {
	        this.status = 'success';
	      }
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _defineProperty = __webpack_require__(5)['default'];
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _utils = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../utils\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _classnames3 = __webpack_require__(4);
	
	var _classnames4 = _interopRequireDefault(_classnames3);
	
	exports['default'] = {
	  props: (0, _utils.defaultProps)({
	    prefixCls: 'ant-radio',
	
	    checked: Boolean,
	    defaultChecked: false,
	    value: (0, _utils.oneOfType)([String, Number]),
	    onChange: function onChange() {},
	
	    disabled: Boolean,
	
	    style: {},
	    className: ''
	  }),
	
	  computed: {
	    wrapClasses: function wrapClasses() {
	      var _classnames;
	
	      return (0, _classnames4['default'])((_classnames = {}, _defineProperty(_classnames, this.className, !!this.className), _defineProperty(_classnames, this.className + '-checked', this.checked), _classnames));
	    },
	
	    radioClasses: function radioClasses() {
	      var _classnames2;
	
	      return (0, _classnames4['default'])((_classnames2 = {}, _defineProperty(_classnames2, this.className, !!this.className), _defineProperty(_classnames2, this.prefixCls, true), _defineProperty(_classnames2, this.prefixCls + '-checked', this.checked), _defineProperty(_classnames2, this.prefixCls + '-checked-' + (this.checked ? 1 : 0), !!this.checked), _defineProperty(_classnames2, this.prefixCls + '-disabled', this.disabled), _classnames2));
	    }
	  },
	
	  compiled: function compiled() {
	    if (this.checked == null) {
	      this.checked = this.defaultChecked;
	    }
	  },
	
	  methods: {
	    _handleChange: function _handleChange(e) {
	      this.checked = e.target.checked;
	      this.onChange(e);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _utils = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../utils\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _RadioVue = __webpack_require__(53);
	
	var _RadioVue2 = _interopRequireDefault(_RadioVue);
	
	exports['default'] = {
	  props: (0, _utils.defaultProps)({
	    prefixCls: 'ant-radio-group',
	    type: 'radio', // or button
	    value: (0, _utils.oneOfType)([String, Number]),
	    defaultValue: (0, _utils.oneOfType)([String, Number]),
	    radios: [],
	    onChange: function onChange() {}
	  }),
	
	  components: { vRadio: _RadioVue2['default'] },
	
	  computed: {
	    radioClasses: function radioClasses() {
	      if (this.type === 'button') {
	        return 'ant-radio-button';
	      }
	
	      return '';
	    }
	  },
	
	  compiled: function compiled() {
	    if (this.value == null) {
	      this.value = this.defaultValue;
	    }
	  },
	
	  methods: {
	    _onRadioChange: function _onRadioChange(index, e) {
	      e.target.name = this.radios[index].name;
	      this.value = e.target.value;
	      this.onChange(e);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _defineProperty = __webpack_require__(5)['default'];
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _utils = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../utils\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _classnames3 = __webpack_require__(4);
	
	var _classnames4 = _interopRequireDefault(_classnames3);
	
	exports['default'] = {
	  props: (0, _utils.defaultProps)({
	    prefixCls: 'ant-spin',
	
	    size: (0, _utils.oneOf)(['small', 'default', 'large'], 'default'),
	    hide: false,
	    className: String
	  }),
	
	  computed: {
	    nestedStatus: function nestedStatus() {
	      return this.$children ? true : false;
	    },
	
	    loadingClasses: function loadingClasses() {
	      return (0, _classnames4['default'])({
	        'ant-spin-nested-loading': !this.hide && this.nestedStatus
	      });
	    },
	
	    spinWrapClasses: function spinWrapClasses() {
	      var _classnames;
	
	      var sizeCls = ({
	        'large': 'lg',
	        'small': 'sm'
	      })[this.size] || '';
	
	      return (0, _classnames4['default'])((_classnames = {}, _defineProperty(_classnames, this.prefixCls + '-wrapper', 1), _defineProperty(_classnames, this.prefixCls + '-' + sizeCls, !!sizeCls), _classnames));
	    },
	
	    spinClasses: function spinClasses() {
	      var _classnames2;
	
	      return (0, _classnames4['default'])((_classnames2 = {}, _defineProperty(_classnames2, this.prefixCls, 1), _defineProperty(_classnames2, this.className, !!this.className), _classnames2));
	    }
	  },
	
	  methods: {}
	};
	module.exports = exports['default'];

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _defineProperty = __webpack_require__(5)['default'];
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _utils = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../utils\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _classnames2 = __webpack_require__(4);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	exports['default'] = {
	  props: (0, _utils.defaultProps)({
	    status: String,
	    title: '',
	    description: '',
	    prefixCls: '',
	    iconPrefix: '',
	    maxDescriptionWidth: '',
	    tailWidth: String,
	    icon: String,
	    stepNumber: Number,
	    stepLast: Boolean
	  }),
	
	  computed: {
	    iconName: function iconName() {
	      return this.icon ? this.icon : 'check';
	    },
	
	    wrapClasses: function wrapClasses() {
	      var _classnames;
	
	      return (0, _classnames3['default'])((_classnames = {}, _defineProperty(_classnames, this.prefixCls + '-item', 1), _defineProperty(_classnames, this.prefixCls + '-item-last', this.stepLast), _defineProperty(_classnames, this.prefixCls + '-status-' + this.status, 1), _defineProperty(_classnames, this.prefixCls + '-custom', this.icon), _classnames));
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _defineProperty = __webpack_require__(5)['default'];
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _utils = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../utils\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _classnames2 = __webpack_require__(4);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	exports['default'] = {
	  props: (0, _utils.defaultProps)({
	    prefixCls: 'ant-steps',
	    iconPrefix: 'ant',
	    size: 'default',
	    maxDescriptionWidth: 100,
	    direction: '',
	    current: 0
	  }),
	
	  data: function data() {
	    return {
	      init: false,
	      tailWidth: 0,
	      previousStepsWidth: 0,
	      itemsWidth: []
	    };
	  },
	
	  computed: {
	    wrapClasses: function wrapClasses() {
	      var _classnames;
	
	      return (0, _classnames3['default'])((_classnames = {}, _defineProperty(_classnames, this.prefixCls, 1), _defineProperty(_classnames, this.prefixCls + '-small', this.size === 'small'), _defineProperty(_classnames, this.prefixCls + '-vertical', this.direction === 'vertical'), _classnames));
	    }
	  },
	
	  compiled: function compiled() {
	    // console.log(this.$children)
	  },
	
	  ready: function ready() {
	    var _this = this;
	
	    var self = this;
	
	    if (this.direction === 'vertical') {
	      this.maxDescriptionWidth = 'auto';
	    }
	
	    this._mapPropsToChildComponent(true);
	
	    // 延迟执行，一边子组件可能更新完props的状态。
	    setTimeout(function () {
	      _this._handleTailWidth();
	    }, 30);
	  },
	
	  watch: {
	    current: function current() {
	      this._mapPropsToChildComponent();
	    }
	  },
	
	  beforeDestroy: function beforeDestroy() {
	    if (this.direction === 'vertical') {
	      return;
	    }
	
	    if (window.attachEvent) {
	      window.attachEvent('onresize', this._resize);
	    } else {
	      window.removeEventListener('resize', this._resize);
	    }
	  },
	
	  methods: {
	    _mapPropsToChildComponent: function _mapPropsToChildComponent(isInit) {
	      var self = this;
	      var len = this.$children.length - 1;
	      this.$children.forEach(function (child, index) {
	        child.stepNumber = (index + 1).toString();
	        child.stepLast = index === len;
	        // child.tailWidth = (self.itemsWidth.length === 0 || index === len) ? 'auto' : self.itemsWidth[index] + self.tailWidth + 'px'
	        child.prefixCls = self.prefixCls;
	        child.maxDescriptionWidth = self.maxDescriptionWidth;
	        child.iconPrefix = self.iconPrefix;
	
	        // 如果是初始化状态且已经存在了status，这样就不需要根据current来设置status了
	        if (isInit && child.status) {
	          return;
	        }
	
	        if (index === self.current) {
	          child.status = 'process';
	        } else if (index < self.current) {
	          child.status = 'finish';
	        } else {
	          child.status = 'wait';
	        }
	      });
	    },
	
	    _handleTailWidth: function _handleTailWidth() {
	      if (this.direction === 'vertical') {
	        return;
	      }
	
	      var self = this;
	      var dom = this.$el;
	      var len = this.$el.children.length - 1;
	      this.itemsWidth = new Array(len + 1);
	
	      var i = 0;
	      for (; i <= len - 1; i++) {
	        var _item = this.$el.children[i].children;
	        this.itemsWidth[i] = Math.ceil(_item[0].offsetWidth + _item[1].children[0].offsetWidth);
	      }
	
	      this.itemsWidth[i] = Math.ceil(this.$el.children[len].offsetWidth);
	      this.previousStepsWidth = Math.floor(this.$el.offsetWidth);
	      this._update();
	
	      this.$el.children[len].style.position = 'absolute';
	
	      // 算出tailWidth, 动态更新子组件
	      this.$children.forEach(function (child, index) {
	        child.tailWidth = self.itemsWidth.length === 0 || index === len ? 'auto' : self.itemsWidth[index] + self.tailWidth + 'px';
	      });
	    },
	
	    _bindResize: function _bindResize() {
	      var _this2 = this;
	
	      setTimeout(function () {
	        _this2._resize();
	      });
	
	      if (window.attachEvent) {
	        window.attachEvent('onresize', this._resize);
	      } else {
	        window.addEventListener('resize', this._resize);
	      }
	    },
	
	    _resize: function _resize() {
	      var w = Math.floor(this.$el.offsetWidth);
	      if (this.previousStepsWidth === w) {
	        return;
	      }
	      this.previousStepsWidth = w;
	      this._update();
	    },
	
	    _update: function _update() {
	      var len = this.$children.length - 1;
	      var tw = 0;
	      this.itemsWidth.forEach(function (w) {
	        tw += w;
	      });
	
	      var dw = Math.floor((this.previousStepsWidth - tw) / len) - 1;
	      if (dw <= 0) {
	        return;
	      }
	
	      this.init = true;
	      this.tailWidth = dw;
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _defineProperty = __webpack_require__(5)['default'];
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _srcUtils = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../../src/utils\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _classnames2 = __webpack_require__(4);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	exports['default'] = {
	  props: (0, _srcUtils.defaultProps)({
	    prefixCls: 'ant-switch',
	    style: {},
	    className: '',
	    disabled: Boolean,
	    checked: Boolean,
	    defaultChecked: false,
	    onChange: function onChange() {}
	  }),
	
	  compiled: function compiled() {
	    if (this.checked == null) {
	      this.checked = this.defaultChecked;
	    }
	  },
	
	  computed: {
	    wrapClasses: function wrapClasses() {
	      var _classnames;
	
	      return (0, _classnames3['default'])((_classnames = {}, _defineProperty(_classnames, this.className, !!this.className), _defineProperty(_classnames, this.prefixCls, true), _defineProperty(_classnames, this.prefixCls + '-checked', this.checked), _defineProperty(_classnames, this.prefixCls + '-disabled', this.disabled), _classnames));
	    }
	  },
	
	  methods: {
	    _toggle: function _toggle() {
	      if (this.disabled) return function () {};
	
	      this.checked = !this.checked;
	      this.onChange(this.checked);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _vue = __webpack_require__(93);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _objectAssign = __webpack_require__(33);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _utils = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../utils\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	exports['default'] = {
	  props: (0, _utils.defaultProps)({
	    rowSelection: Object,
	    pagination: Object,
	    size: 'normal',
	    dataSource: (0, _utils.oneOfType)([Array, Object]),
	    columns: Array,
	    expandIconAsCell: true,
	    onChange: function onChange() {},
	
	    prefixCls: 'ant-table',
	    useFixedHeader: false,
	    bordered: false,
	    bodyStyle: Object,
	    style: Object
	  }),
	
	  data: function data() {
	    return {
	      selectedRowKeys: [],
	      filters: {},
	      loading: false,
	      sortColumn: '',
	      sortOrder: '',
	      sorter: null
	    };
	  },
	
	  ready: function ready() {
	    console.log(this.dataSource);
	  },
	
	  computed: {
	
	    isEmpty: function isEmpty() {
	      return this.dataSource && !!this.dataSource.length;
	    },
	
	    tableClass: function tableClass() {
	      var classString = this.prefixCls;
	
	      if (this.loading) {
	        classString += ' ant-table-loading';
	      }
	
	      if (this.size === 'small') {
	        classString += ' ant-table-small';
	      }
	
	      if (this.bordered) {
	        classString += ' ant-table-bordered';
	      }
	
	      return classString;
	    }
	  },
	
	  ready: function ready() {
	    console.log('true');
	    this.compileRender();
	  },
	
	  methods: {
	    compileRender: function compileRender() {
	      var $el = this.$els.render;
	
	      for (var i = 0; i < this.columns.length; i++) {
	        if (this.columns[i].render) {
	          for (var j = 0; j < this.dataSource.length; j++) {
	            var template = this.columns[i].render();
	            var CustomRender = _vue2['default'].extend({
	              template: template
	            });
	
	            var _el = $el.children[j].children[i];
	
	            // new CustomRender().$mount(_el)
	          }
	          // $el
	        }
	      }
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _defineProperty = __webpack_require__(5)['default'];
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _classnames2 = __webpack_require__(4);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	var _utils = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../utils\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _iconfont = __webpack_require__(6);
	
	var _iconfont2 = _interopRequireDefault(_iconfont);
	
	exports['default'] = {
	  props: (0, _utils.defaultProps)({
	    prefixCls: 'ant-tag',
	
	    href: String,
	    closable: false,
	    onClose: function onClose() {},
	    color: (0, _utils.oneOf)(['blue', 'green', 'yellow', 'red'])
	  }),
	
	  data: function data() {
	    return {
	      closed: false
	    };
	  },
	
	  components: { vIcon: _iconfont2['default'] },
	
	  computed: {
	    wrapClasses: function wrapClasses() {
	      var _classnames;
	
	      return (0, _classnames3['default'])((_classnames = {}, _defineProperty(_classnames, this.prefixCls, 1), _defineProperty(_classnames, this.prefixCls + '-' + this.color, this.color), _defineProperty(_classnames, this.prefixCls + '-close', this.closing), _classnames));
	    }
	  },
	
	  methods: {
	    _close: function _close(e) {
	      // let dom = this.$el
	      // dom.style.width = dom.offsetWidth + 'px'
	      // dom.style.height = dom.offsetHeight + 'px'
	      this.closed = true;
	      this.onClose.call(this, e);
	    }
	  }
	
	};
	module.exports = exports['default'];

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _utils = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../utils\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _request = __webpack_require__(111);
	
	var _request2 = _interopRequireDefault(_request);
	
	var _uid = __webpack_require__(112);
	
	var _uid2 = _interopRequireDefault(_uid);
	
	exports['default'] = {
	  props: (0, _utils.defaultProps)({
	    action: String,
	    name: String,
	    multiple: Boolean,
	    data: Object,
	    onStart: function onStart() {},
	    onProgress: function onProgress() {},
	    onSuccess: function onSuccess() {},
	    onError: function onError() {},
	    beforeUpload: function beforeUpload() {}
	  }),
	
	  methods: {
	    _onChange: function _onChange(e) {
	      var files = e.target.files;
	      this._uploadFiles(files);
	    },
	
	    _onClick: function _onClick() {
	      var el = this.$els.file;
	      if (!el) return;
	
	      el.click();
	      el.value = '';
	    },
	
	    _onKeyDown: function _onKeyDown(e) {
	      if (e.key === 'Enter') {
	        this._onClick();
	      }
	    },
	
	    _onFileDrop: function _onFileDrop(e) {
	      if (e.type === 'dragover') {
	        return e.preventDefault();
	      }
	
	      var files = e.dataTransfer.files;
	      this._uploadFiles(files);
	
	      e.preventDefault();
	    },
	
	    _uploadFiles: function _uploadFiles(files) {
	      var len = files.length;
	      if (len > 0) {
	        for (var i = 0; i < len; i++) {
	          var file = files.item(i);
	          file.uid = (0, _uid2['default'])();
	          this._upload(file);
	        }
	
	        if (this.multiple) {
	          this.onStart(Array.prototype.slice.call(files));
	        } else {
	          this.onStart(Array.prototype.slice.call(files)[0]);
	        }
	      }
	    },
	
	    _upload: function _upload(file) {
	      var _this = this;
	
	      if (!this.beforeUpload) {
	        return this._post(file);
	      }
	
	      var before = this.beforeUpload(file);
	      if (before && before.then) {
	        before.then(function () {
	          _this._post(file);
	        });
	      } else if (before !== false) {
	        this._post(file);
	      }
	    },
	
	    _post: function _post(file) {
	      var _this2 = this;
	
	      var data = this.data;
	      if (typeof data === 'function') {
	        data = data();
	      }
	
	      (0, _request2['default'])({
	        action: this.action,
	        filename: this.name,
	        file: file,
	        data: data,
	        onProgress: function onProgress(e) {
	          _this2.onProgress(e, file);
	        },
	        onSuccess: function onSuccess(ret) {
	          _this2.onSuccess(ret, file);
	        },
	        onError: function onError(err, ret) {
	          _this2.onError(err, ret, file);
	        }
	      });
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _utils = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../utils\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _iconfont = __webpack_require__(6);
	
	var _iconfont2 = _interopRequireDefault(_iconfont);
	
	exports['default'] = {
	  props: (0, _utils.defaultProps)({
	    prefixCls: 'ant-upload',
	
	    items: [],
	    onRemove: function onRemove() {}
	  }),
	
	  components: { vIcon: _iconfont2['default'] },
	
	  methods: {
	    _handleClose: function _handleClose(file) {
	      this.onRemove(file);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _defineProperty = __webpack_require__(5)['default'];
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _utils = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../utils\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _classnames3 = __webpack_require__(4);
	
	var _classnames4 = _interopRequireDefault(_classnames3);
	
	var _AjaxUploaderVue = __webpack_require__(295);
	
	var _AjaxUploaderVue2 = _interopRequireDefault(_AjaxUploaderVue);
	
	var _UploadListVue = __webpack_require__(296);
	
	var _UploadListVue2 = _interopRequireDefault(_UploadListVue);
	
	var _objectAssign = __webpack_require__(33);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _getFileItem = __webpack_require__(109);
	
	var _getFileItem2 = _interopRequireDefault(_getFileItem);
	
	// Fix IE file.status problem
	// via coping a new Object
	function fileToObject(file) {
	  return {
	    lastModified: file.lastModified,
	    lastModifiedDate: file.lastModifiedDate,
	    name: file.filename || file.name,
	    size: file.size,
	    type: file.type,
	    uid: file.uid,
	    response: file.response,
	    error: file.error
	  };
	}
	
	exports['default'] = {
	  props: (0, _utils.defaultProps)({
	    prefixCls: 'ant-upload',
	
	    type: 'select',
	    name: '',
	    forceAjax: false,
	    multipart: false,
	    action: '',
	    data: {},
	    accept: '',
	    multiple: false,
	    fileList: Array,
	    defaultFileList: Array,
	    beforeUpload: function beforeUpload() {},
	    onChange: function onChange() {}
	  }),
	
	  components: { AjaxUpload: _AjaxUploaderVue2['default'], UploadList: _UploadListVue2['default'] },
	
	  computed: {
	    isDrag: function isDrag() {
	      return this.type === 'drag';
	    },
	
	    wrapClasses: function wrapClasses() {
	      var _classnames;
	
	      return (0, _classnames4['default'])((_classnames = {}, _defineProperty(_classnames, this.prefixCls, 1), _defineProperty(_classnames, this.prefixCls + '-drag', this.isDrag), _defineProperty(_classnames, this.prefixCls + '-select', !this.isDrag), _classnames));
	    },
	
	    containerClasses: function containerClasses() {
	      return (0, _classnames4['default'])(_defineProperty({}, this.prefixCls + '-drag-container', this.isDrag));
	    }
	  },
	
	  beforeCompile: function beforeCompile() {
	    this.$set('fileList', this.fileList || this.defaultFileList || []);
	  },
	
	  methods: {
	    _onStart: function _onStart(file) {
	      var targetItem = undefined;
	      var nextFileList = this.fileList.concat();
	      if (file.length > 0) {
	        targetItem = file.map(function (f) {
	          f = fileToObject(f);
	          f.status = 'uploading';
	          return f;
	        });
	        nextFileList = nextFileList.concat(file);
	      } else {
	        targetItem = fileToObject(file);
	        targetItem.status = 'uploading';
	        nextFileList.push(targetItem);
	      }
	
	      this._onChange({
	        file: targetItem,
	        fileList: nextFileList
	      });
	    },
	
	    _onProgress: function _onProgress(e, file) {
	      var fileList = this.fileList;
	      var targetItem = (0, _getFileItem2['default'])(file, fileList);
	
	      if (targetItem) {
	        this._onChange({
	          event: e,
	          file: file,
	          fileList: this.fileList
	        });
	      }
	    },
	
	    _onSuccess: function _onSuccess(response, file) {
	      // 服务器端需要返回标准 json 字符串
	      // 否则视为失败
	      try {
	        if (typeof response === 'string') {
	          JSON.parse(response);
	        }
	      } catch (e) {
	        this._onError(new Error('No response'), response, file);
	        return;
	      }
	
	      var fileList = this.fileList;
	      var targetItem = (0, _getFileItem2['default'])(file, fileList);
	
	      // 之前已经删除
	      if (targetItem) {
	        targetItem.status = 'done';
	        targetItem.response = response;
	
	        this._onChange({
	          file: targetItem,
	          fileList: fileList
	        });
	      }
	    },
	
	    _onError: function _onError(error, response, file) {
	      var fileList = this.fileList;
	      var targetItem = (0, _getFileItem2['default'])(file, fileList);
	      targetItem.error = error;
	      targetItem.response = response;
	      targetItem.status = 'error';
	
	      this._handleRemove(targetItem);
	    },
	
	    _removeFile: function _removeFile(file) {
	      var fileList = this.fileList;
	      var targetItem = (0, _getFileItem2['default'])(file, fileList);
	      var index = fileList.indexOf(targetItem);
	
	      if (index !== -1) {
	        fileList.splice(index, 1);
	        return fileList;
	      }
	
	      return null;
	    },
	
	    _handleRemove: function _handleRemove(file) {
	      var fileList = this._removeFile(file);
	
	      if (fileList) {
	        this._onChange({
	          file: file,
	          fileList: fileList
	        });
	      }
	    },
	
	    _handleManualRemove: function _handleManualRemove(file) {
	      file.status = 'removed';
	      this._handleRemove(file);
	    },
	
	    _getFilePlainObject: function _getFilePlainObject(fileList) {
	      var arr = [];
	      fileList.forEach(function (item) {
	        arr.push({
	          name: item.name,
	          size: item.size,
	          status: item.status,
	          type: item.type,
	          uid: item.uid,
	          response: item.response
	        });
	      });
	      return arr;
	    },
	
	    _onChange: function _onChange(info) {
	      // 1. 有设置外部属性时不改变 fileList
	      // 2. 上传中状态（info.event）不改变 fileList
	      if (info.fileList) {
	        var fileList = info.fileList;
	        // todo
	        // 用纯对象的方式来触发vue的更新，好吧，之后看看有没有好的方式
	        fileList = this._getFilePlainObject(fileList);
	        this.$set('fileList', fileList);
	      }
	      this.onChange(info);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(158), __esModule: true };

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(159), __esModule: true };

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(160), __esModule: true };

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(161), __esModule: true };

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(162), __esModule: true };

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Array$from = __webpack_require__(152)["default"];
	
	exports["default"] = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
	
	    return arr2;
	  } else {
	    return _Array$from(arr);
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(184);
	__webpack_require__(181);
	module.exports = __webpack_require__(13).Array.from;

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(17);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(17);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(182);
	module.exports = __webpack_require__(13).Object.freeze;

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(183);
	module.exports = __webpack_require__(13).Object.keys;

/***/ },
/* 163 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(46);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(166)
	  , TAG = __webpack_require__(10)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 166 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(163);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators = __webpack_require__(30)
	  , ITERATOR  = __webpack_require__(10)('iterator');
	module.exports = function(it){
	  return (Iterators.Array || Array.prototype[ITERATOR]) === it;
	};

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(164);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $ = __webpack_require__(17)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(21)(IteratorPrototype, __webpack_require__(10)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: __webpack_require__(48)(1,next)});
	  __webpack_require__(49)(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY         = __webpack_require__(173)
	  , $def            = __webpack_require__(28)
	  , $redef          = __webpack_require__(174)
	  , hide            = __webpack_require__(21)
	  , has             = __webpack_require__(45)
	  , SYMBOL_ITERATOR = __webpack_require__(10)('iterator')
	  , Iterators       = __webpack_require__(30)
	  , BUGGY           = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR     = '@@iterator'
	  , KEYS            = 'keys'
	  , VALUES          = 'values';
	var returnThis = function(){ return this; };
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCE){
	  __webpack_require__(170)(Constructor, NAME, next);
	  var createMethod = function(kind){
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG      = NAME + ' Iterator'
	    , proto    = Base.prototype
	    , _native  = proto[SYMBOL_ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , _default = _native || createMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if(_native){
	    var IteratorPrototype = __webpack_require__(17).getProto(_default.call(new Base));
	    // Set @@toStringTag to native iterators
	    __webpack_require__(49)(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, SYMBOL_ITERATOR, returnThis);
	  }
	  // Define iterator
	  if(!LIBRARY || FORCE)hide(proto, SYMBOL_ITERATOR, _default);
	  // Plug for library
	  Iterators[NAME] = _default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      keys:    IS_SET            ? _default : createMethod(KEYS),
	      values:  DEFAULT == VALUES ? _default : createMethod(VALUES),
	      entries: DEFAULT != VALUES ? _default : createMethod('entries')
	    };
	    if(FORCE)for(key in methods){
	      if(!(key in proto))$redef(proto, key, methods[key]);
	    } else $def($def.P + $def.F * BUGGY, NAME, methods);
	  }
	};

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	var SYMBOL_ITERATOR = __webpack_require__(10)('iterator')
	  , SAFE_CLOSING    = false;
	try {
	  var riter = [7][SYMBOL_ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	module.exports = function(exec){
	  if(!SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[SYMBOL_ITERATOR]();
	    iter.next = function(){ safe = true; };
	    arr[SYMBOL_ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 173 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(21);

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(29)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	// true  -> String#at
	// false -> String#codePointAt
	var toInteger = __webpack_require__(50)
	  , defined   = __webpack_require__(43);
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l
	      || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	        ? TO_STRING ? s.charAt(i) : a
	        : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(44)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(50)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 179 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(165)
	  , ITERATOR  = __webpack_require__(10)('iterator')
	  , Iterators = __webpack_require__(30);
	module.exports = __webpack_require__(13).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
	};

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx         = __webpack_require__(167)
	  , $def        = __webpack_require__(28)
	  , toObject    = __webpack_require__(51)
	  , call        = __webpack_require__(169)
	  , isArrayIter = __webpack_require__(168)
	  , toLength    = __webpack_require__(178)
	  , getIterFn   = __webpack_require__(180);
	$def($def.S + $def.F * !__webpack_require__(172)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , mapfn   = arguments[1]
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, arguments[2], 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        result[index] = mapping ? mapfn(O[index], index) : O[index];
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(46);
	
	__webpack_require__(47)('freeze', function($freeze){
	  return function freeze(it){
	    return $freeze && isObject(it) ? $freeze(it) : it;
	  };
	});

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(51);
	
	__webpack_require__(47)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(176)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(171)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports
	
	
	// module
	exports.push([module.id, ".head-example {\n  width: 42px;\n  height: 42px;\n  border-radius: 6px;\n  background: #eee;\n  display: inline-block;\n}", ""]);
	
	// exports


/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports
	
	
	// module
	exports.push([module.id, "#components-button-demo-icon .ant-btn {\n  margin-right: 8px;\n  margin-bottom: 12px;\n}\n\n#components-button-demo-button-group .ant-btn {\n    margin-bottom: 12px;\n    margin-right: 0;\n}", ""]);
	
	// exports


/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports
	
	
	// module
	exports.push([module.id, ".spin-demo2-container {\n  text-align: center;\n  background: rgba(0,0,0,0.05);\n  border-radius: 4px;\n  margin-bottom: 20px;\n  padding: 30px 50px;\n  margin: 20px 0;\n}", ""]);
	
	// exports


/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports
	
	
	// module
	exports.push([module.id, ".main-container {\n  margin-left: 260px;\n  padding: 30px 40px 120px;\n  -webkit-animation: xRightMatrix .5s ease-out;\n  animation: xRightMatrix .5s ease-out;\n  background: #fff;\n  min-height: 500px;\n}\n\n.main-container-center {\n  margin: 0 auto;\n  padding: 30px 80px 120px;\n  border-left: 1px solid #e9e9e9;\n  border-right: 1px solid #e9e9e9;\n  width: 80%;\n  height: 100%;\n}\n\n.aside-container {\n  width: 260px;\n  background: #F9F9F9;\n  padding-top: 10px;\n  padding-bottom: 50px;\n  float: left;\n}\n\n.aside-container > ul > li {\n  overflow: hidden;\n}\n\n.aside-container li h4 {\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px 0 10px 46px;\n  margin: 0;\n  color: #5C6B77;\n  cursor: pointer;\n  transition: background .5s, border .5s;\n  border-left: 3px solid transparent;\n  position: relative;\n  z-index: 1;\n  background: #F9F9F9;\n  position: relative;\n}\n\n.aside-container li h4:after {\n  position: absolute;\n  top: 11px;\n  right: 30px;\n  content: \"\\E600\";\n  font-family: \"anticon\";\n  transform: scale(0.6);\n  font-size: 12px;\n  color: #5C6B76;\n  opacity: 0;\n  -webkit-transform: scale(0.6) rotate(180deg);\n  transform: scale(0.6) rotate(180deg);\n  transition: all 0.3s ease;\n}\n\n.aside-container li[open=open] h4:after {\n  -webkit-transform: scale(0.6) rotate(0deg);\n  transform: scale(0.6) rotate(0deg);\n}\n\n.aside-container li:hover h4:after {\n  opacity: 0.8;\n}\n\n.aside-container li > ul.aside-list-show {\n  display: block;\n}\n\n.aside-container li > ul li {\n  border-left: 3px solid transparent;\n}\n\n.aside-container li a {\n  line-height: 40px;\n  height: 40px;\n  display: block;\n  padding-left: 60px;\n  font-size: 14px;\n  color: #5C6B76;\n}\n\n.aside-container li.type-divider {\n  font-size: 12px;\n  -webkit-transform:  scale(0.9);\n  transform: scale(0.9);\n  transform-origin: 0 50%;\n  color: #aaa;\n  text-shadow: 0px 1px 0px #FFF;\n  margin: 6px 0 6px 48px;\n}\n\n.aside-container > ul > li > a {\n  padding-left: 46px;\n  font-size: 14px;\n  border-left: 3px solid transparent;\n}\n\n.aside-container > ul > li.current > a {\n  border-left: 0;\n}\n\n.aside-container .chinese {\n  font-size: 12px;\n  margin-left: 6px;\n  font-weight: normal;\n  opacity: 0.67;\n}\n\n.aside-container li a:hover {\n  color: #6EB4E0;\n}\n\n.aside-container .current {\n  background: #fff;\n  border-left: 3px solid #71B5DE;\n  color: #71B5DE;\n}\n\n.aside-container .current a {\n  color: #71B5DE;\n}\n\n.markdown {\n  /*color: #777;*/\n  font-size: 14px;\n  /*line-height: 1.8;\n  width: 80%;*/\n}\n\n.markdown img {\n  vertical-align: middle;\n}\n\n.markdown h1 {\n  color: #5C6B77;\n  font-weight: 600;\n}\n\n.markdown h2,\n.markdown h3,\n.markdown h4,\n.markdown h5,\n.markdown h6 {\n  color: #5C6B77;\n  margin: 1.8em 0 1em 0;\n  font-weight: 600;\n}\n\n.markdown hr {\n  border-radius: 10px;\n  height: 3px;\n  border: 0;\n  background: #eee;\n  margin: 20px 0;\n}\n\n.markdown code,\n.markdown kbd,\n.markdown pre,\n.markdown samp {\n  font-family: Consolas, monospace;\n}\n\n.markdown p,\n.markdown pre {\n  margin: 1.2em 0;\n  padding: 1em;\n}\n\n.markdown > ul li {\n  list-style: circle;\n  margin-left: 20px;\n  padding-left: 8px;\n}\n\n.markdown > ol li {\n  list-style: decimal;\n  margin-left: 20px;\n  padding-left: 8px;\n}\n\n.markdown code {\n  margin: 0 3px;\n}\n\n.markdown pre {\n  background: #F7F7F7;\n  border-radius: 6px;\n}\n\n/*.markdown pre code {\n  background: #F7F7F7;\n  border: none;\n  padding: 12px 20px;\n  margin: 0;\n}*/\n\n.markdown strong,\n.markdown b {\n  font-weight: 600;\n}\n\n.markdown > table {\n  border-collapse: collapse;\n  border-spacing: 0px;\n  empty-cells: show;\n  border: 1px solid #e9e9e9;\n  width: 100%;\n  margin-bottom: 24px;\n}\n\n.markdown > table th {\n  white-space: nowrap;\n  color: #5C6B77;\n  font-weight: 600;\n}\n\n.markdown > table th,\n.markdown > table td {\n  border: 1px solid #e9e9e9;\n  padding: 8px 16px;\n  text-align: left;\n}\n\n.markdown > table th {\n  background: #F7F7F7;\n}\n\n.markdown blockquote {\n  font-size: 90%;\n  color: #999;\n  border-left: 4px solid #e9e9e9;\n  padding-left: 0.8em;\n  margin: 0;\n}\n\n.markdown .anchor {\n  opacity: 0;\n  transition: opacity 0.3s ease;\n  margin-left: 8px;\n}\n\n.markdown h1:hover .anchor,\n.markdown h2:hover .anchor,\n.markdown h3:hover .anchor,\n.markdown h4:hover .anchor,\n.markdown h5:hover .anchor,\n.markdown h6:hover .anchor {\n  opacity: 1;\n  display: inline-block;\n}\n\n#api ~ ul > li > p > strong ~ code {\n  background: #fff;\n  color: #CC7300;\n  border: none;\n  margin-left: 0.5em;\n}\n\n.code-boxes-col {\n  width: 100%;\n}\n\n.code-boxes-col-1-1 {\n  width: 80%;\n}\n\n.code-boxes-col-2-1 {\n  width: 49%;\n  display: inline-block;\n  vertical-align: top;\n  padding-right: 15px;\n}\n\n.code-boxes-col-2-1:last-child {\n  padding-right: 0;\n}\n\n.code-box {\n  border: 1px solid #E9E9E9;\n  border-radius: 6px;\n  display: inline-block;\n  width: 100%;\n  position: relative;\n  margin: 0px 15px 15px 0px;\n  transition: all 0.5s ease;\n}\n\n.code-box:hover {\n  border-color: #ccc;\n}\n\n.code-box:target {\n  border: 1px solid rgba(45, 183, 245, 0.7);\n  box-shadow: 0 0 4px rgba(45, 183, 245, 0.5);\n}\n\n.code-box:hover .code-box-meta,\n.code-box:target .code-box-meta {\n  background: #fbfbfb;\n}\n\n.code-box:hover .code-box-title,\n.code-box:target .code-box-title {\n  background: #fbfbfb;\n  box-shadow: 0 -1.2px 0 #e9e9e9;\n}\n\n.code-box h3 {\n  margin: 1em;\n  font-size: 14px;\n}\n\n.code-box .code-box-title a,\n.code-box .code-box-title a:hover {\n  color: #666;\n}\n\n.code-box .code-box-demo {\n  padding: 1.2em 1em;\n}\n\n.code-box-meta {\n  position: relative;\n  padding: 10px 15px;\n  border-radius: 0 0 6px 6px;\n  transition: background-color 0.4s ease;\n  width: 100%;\n}\n\n.code-box-meta h4,\n.code-box-meta p {\n  margin: 0;\n}\n\n.code-box-title {\n  position: absolute;\n  top: -14px;\n  padding: 1px 1.1em;\n  color: #777;\n  border-radius: 6px;\n  background: #fff;\n  transition: all 0.4s ease;\n}\n\n.code-box-title:before {\n  font-family: anticon;\n  content: \"\\E665\";\n  font-size: 16px;\n  vertical-align: middle;\n  line-height: 22px;\n  position: relative;\n  margin-right: 8px;\n  top: -2px;\n  color: #ccc;\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n  display: inline-block;\n}\n\n.code-box-meta > p {\n  font-size: 12px;\n  margin: 0.5em 0;\n  padding-right: 25px;\n}\n\n.code-box .collapse {\n  position: absolute;\n  right: 16px;\n  bottom: 18px;\n  cursor: pointer;\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n  line-height: 18px;\n  opacity: 0.5;\n  text-align: center;\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg);\n  transition: all 0.3s ease;\n  color: #999;\n  background: #fff;\n}\n\n.code-box.expand .collapse {\n  -webkit-transform: rotate(-90deg);\n  transform: rotate(-90deg);\n}\n\n.code-box .collapse:hover {\n  opacity: 1;\n}\n\n.code-box .highlight {\n  overflow: hidden;\n  display: none;\n  padding: 5px;\n  border-top: 1px dashed #e9e9e9;\n}\n\n.xRightMatrix {\n  animation: xRightMatrix .5s ease-out;\n}\n\n@keyframes xRightMatrix {\n  0% {\n    opacity: 0;\n    transform: translateX(50px);\n  }\n\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}", ""]);
	
	// exports


/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports
	
	
	// module
	exports.push([module.id, ".ant-badge {\n    margin-right: 16px;\n}\n\n.ant-badge-count {\n  right: 0;\n  transform: translateX(50%);\n}", ""]);
	
	// exports


/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports
	
	
	// module
	exports.push([module.id, "label.ant-radio-button > .ant-radio {\n  display: none\n}", ""]);
	
	// exports


/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	var require;var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(process, global, module) {/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
	 * @version   3.0.2
	 */
	
	(function() {
	    "use strict";
	    function lib$es6$promise$utils$$objectOrFunction(x) {
	      return typeof x === 'function' || (typeof x === 'object' && x !== null);
	    }
	
	    function lib$es6$promise$utils$$isFunction(x) {
	      return typeof x === 'function';
	    }
	
	    function lib$es6$promise$utils$$isMaybeThenable(x) {
	      return typeof x === 'object' && x !== null;
	    }
	
	    var lib$es6$promise$utils$$_isArray;
	    if (!Array.isArray) {
	      lib$es6$promise$utils$$_isArray = function (x) {
	        return Object.prototype.toString.call(x) === '[object Array]';
	      };
	    } else {
	      lib$es6$promise$utils$$_isArray = Array.isArray;
	    }
	
	    var lib$es6$promise$utils$$isArray = lib$es6$promise$utils$$_isArray;
	    var lib$es6$promise$asap$$len = 0;
	    var lib$es6$promise$asap$$toString = {}.toString;
	    var lib$es6$promise$asap$$vertxNext;
	    var lib$es6$promise$asap$$customSchedulerFn;
	
	    var lib$es6$promise$asap$$asap = function asap(callback, arg) {
	      lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len] = callback;
	      lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len + 1] = arg;
	      lib$es6$promise$asap$$len += 2;
	      if (lib$es6$promise$asap$$len === 2) {
	        // If len is 2, that means that we need to schedule an async flush.
	        // If additional callbacks are queued before the queue is flushed, they
	        // will be processed by this flush that we are scheduling.
	        if (lib$es6$promise$asap$$customSchedulerFn) {
	          lib$es6$promise$asap$$customSchedulerFn(lib$es6$promise$asap$$flush);
	        } else {
	          lib$es6$promise$asap$$scheduleFlush();
	        }
	      }
	    }
	
	    function lib$es6$promise$asap$$setScheduler(scheduleFn) {
	      lib$es6$promise$asap$$customSchedulerFn = scheduleFn;
	    }
	
	    function lib$es6$promise$asap$$setAsap(asapFn) {
	      lib$es6$promise$asap$$asap = asapFn;
	    }
	
	    var lib$es6$promise$asap$$browserWindow = (typeof window !== 'undefined') ? window : undefined;
	    var lib$es6$promise$asap$$browserGlobal = lib$es6$promise$asap$$browserWindow || {};
	    var lib$es6$promise$asap$$BrowserMutationObserver = lib$es6$promise$asap$$browserGlobal.MutationObserver || lib$es6$promise$asap$$browserGlobal.WebKitMutationObserver;
	    var lib$es6$promise$asap$$isNode = typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';
	
	    // test for web worker but not in IE10
	    var lib$es6$promise$asap$$isWorker = typeof Uint8ClampedArray !== 'undefined' &&
	      typeof importScripts !== 'undefined' &&
	      typeof MessageChannel !== 'undefined';
	
	    // node
	    function lib$es6$promise$asap$$useNextTick() {
	      // node version 0.10.x displays a deprecation warning when nextTick is used recursively
	      // see https://github.com/cujojs/when/issues/410 for details
	      return function() {
	        process.nextTick(lib$es6$promise$asap$$flush);
	      };
	    }
	
	    // vertx
	    function lib$es6$promise$asap$$useVertxTimer() {
	      return function() {
	        lib$es6$promise$asap$$vertxNext(lib$es6$promise$asap$$flush);
	      };
	    }
	
	    function lib$es6$promise$asap$$useMutationObserver() {
	      var iterations = 0;
	      var observer = new lib$es6$promise$asap$$BrowserMutationObserver(lib$es6$promise$asap$$flush);
	      var node = document.createTextNode('');
	      observer.observe(node, { characterData: true });
	
	      return function() {
	        node.data = (iterations = ++iterations % 2);
	      };
	    }
	
	    // web worker
	    function lib$es6$promise$asap$$useMessageChannel() {
	      var channel = new MessageChannel();
	      channel.port1.onmessage = lib$es6$promise$asap$$flush;
	      return function () {
	        channel.port2.postMessage(0);
	      };
	    }
	
	    function lib$es6$promise$asap$$useSetTimeout() {
	      return function() {
	        setTimeout(lib$es6$promise$asap$$flush, 1);
	      };
	    }
	
	    var lib$es6$promise$asap$$queue = new Array(1000);
	    function lib$es6$promise$asap$$flush() {
	      for (var i = 0; i < lib$es6$promise$asap$$len; i+=2) {
	        var callback = lib$es6$promise$asap$$queue[i];
	        var arg = lib$es6$promise$asap$$queue[i+1];
	
	        callback(arg);
	
	        lib$es6$promise$asap$$queue[i] = undefined;
	        lib$es6$promise$asap$$queue[i+1] = undefined;
	      }
	
	      lib$es6$promise$asap$$len = 0;
	    }
	
	    function lib$es6$promise$asap$$attemptVertx() {
	      try {
	        var r = require;
	        var vertx = __webpack_require__(365);
	        lib$es6$promise$asap$$vertxNext = vertx.runOnLoop || vertx.runOnContext;
	        return lib$es6$promise$asap$$useVertxTimer();
	      } catch(e) {
	        return lib$es6$promise$asap$$useSetTimeout();
	      }
	    }
	
	    var lib$es6$promise$asap$$scheduleFlush;
	    // Decide what async method to use to triggering processing of queued callbacks:
	    if (lib$es6$promise$asap$$isNode) {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useNextTick();
	    } else if (lib$es6$promise$asap$$BrowserMutationObserver) {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMutationObserver();
	    } else if (lib$es6$promise$asap$$isWorker) {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMessageChannel();
	    } else if (lib$es6$promise$asap$$browserWindow === undefined && "function" === 'function') {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$attemptVertx();
	    } else {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useSetTimeout();
	    }
	
	    function lib$es6$promise$$internal$$noop() {}
	
	    var lib$es6$promise$$internal$$PENDING   = void 0;
	    var lib$es6$promise$$internal$$FULFILLED = 1;
	    var lib$es6$promise$$internal$$REJECTED  = 2;
	
	    var lib$es6$promise$$internal$$GET_THEN_ERROR = new lib$es6$promise$$internal$$ErrorObject();
	
	    function lib$es6$promise$$internal$$selfFulfillment() {
	      return new TypeError("You cannot resolve a promise with itself");
	    }
	
	    function lib$es6$promise$$internal$$cannotReturnOwn() {
	      return new TypeError('A promises callback cannot return that same promise.');
	    }
	
	    function lib$es6$promise$$internal$$getThen(promise) {
	      try {
	        return promise.then;
	      } catch(error) {
	        lib$es6$promise$$internal$$GET_THEN_ERROR.error = error;
	        return lib$es6$promise$$internal$$GET_THEN_ERROR;
	      }
	    }
	
	    function lib$es6$promise$$internal$$tryThen(then, value, fulfillmentHandler, rejectionHandler) {
	      try {
	        then.call(value, fulfillmentHandler, rejectionHandler);
	      } catch(e) {
	        return e;
	      }
	    }
	
	    function lib$es6$promise$$internal$$handleForeignThenable(promise, thenable, then) {
	       lib$es6$promise$asap$$asap(function(promise) {
	        var sealed = false;
	        var error = lib$es6$promise$$internal$$tryThen(then, thenable, function(value) {
	          if (sealed) { return; }
	          sealed = true;
	          if (thenable !== value) {
	            lib$es6$promise$$internal$$resolve(promise, value);
	          } else {
	            lib$es6$promise$$internal$$fulfill(promise, value);
	          }
	        }, function(reason) {
	          if (sealed) { return; }
	          sealed = true;
	
	          lib$es6$promise$$internal$$reject(promise, reason);
	        }, 'Settle: ' + (promise._label || ' unknown promise'));
	
	        if (!sealed && error) {
	          sealed = true;
	          lib$es6$promise$$internal$$reject(promise, error);
	        }
	      }, promise);
	    }
	
	    function lib$es6$promise$$internal$$handleOwnThenable(promise, thenable) {
	      if (thenable._state === lib$es6$promise$$internal$$FULFILLED) {
	        lib$es6$promise$$internal$$fulfill(promise, thenable._result);
	      } else if (thenable._state === lib$es6$promise$$internal$$REJECTED) {
	        lib$es6$promise$$internal$$reject(promise, thenable._result);
	      } else {
	        lib$es6$promise$$internal$$subscribe(thenable, undefined, function(value) {
	          lib$es6$promise$$internal$$resolve(promise, value);
	        }, function(reason) {
	          lib$es6$promise$$internal$$reject(promise, reason);
	        });
	      }
	    }
	
	    function lib$es6$promise$$internal$$handleMaybeThenable(promise, maybeThenable) {
	      if (maybeThenable.constructor === promise.constructor) {
	        lib$es6$promise$$internal$$handleOwnThenable(promise, maybeThenable);
	      } else {
	        var then = lib$es6$promise$$internal$$getThen(maybeThenable);
	
	        if (then === lib$es6$promise$$internal$$GET_THEN_ERROR) {
	          lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$GET_THEN_ERROR.error);
	        } else if (then === undefined) {
	          lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
	        } else if (lib$es6$promise$utils$$isFunction(then)) {
	          lib$es6$promise$$internal$$handleForeignThenable(promise, maybeThenable, then);
	        } else {
	          lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
	        }
	      }
	    }
	
	    function lib$es6$promise$$internal$$resolve(promise, value) {
	      if (promise === value) {
	        lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$selfFulfillment());
	      } else if (lib$es6$promise$utils$$objectOrFunction(value)) {
	        lib$es6$promise$$internal$$handleMaybeThenable(promise, value);
	      } else {
	        lib$es6$promise$$internal$$fulfill(promise, value);
	      }
	    }
	
	    function lib$es6$promise$$internal$$publishRejection(promise) {
	      if (promise._onerror) {
	        promise._onerror(promise._result);
	      }
	
	      lib$es6$promise$$internal$$publish(promise);
	    }
	
	    function lib$es6$promise$$internal$$fulfill(promise, value) {
	      if (promise._state !== lib$es6$promise$$internal$$PENDING) { return; }
	
	      promise._result = value;
	      promise._state = lib$es6$promise$$internal$$FULFILLED;
	
	      if (promise._subscribers.length !== 0) {
	        lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish, promise);
	      }
	    }
	
	    function lib$es6$promise$$internal$$reject(promise, reason) {
	      if (promise._state !== lib$es6$promise$$internal$$PENDING) { return; }
	      promise._state = lib$es6$promise$$internal$$REJECTED;
	      promise._result = reason;
	
	      lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publishRejection, promise);
	    }
	
	    function lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection) {
	      var subscribers = parent._subscribers;
	      var length = subscribers.length;
	
	      parent._onerror = null;
	
	      subscribers[length] = child;
	      subscribers[length + lib$es6$promise$$internal$$FULFILLED] = onFulfillment;
	      subscribers[length + lib$es6$promise$$internal$$REJECTED]  = onRejection;
	
	      if (length === 0 && parent._state) {
	        lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish, parent);
	      }
	    }
	
	    function lib$es6$promise$$internal$$publish(promise) {
	      var subscribers = promise._subscribers;
	      var settled = promise._state;
	
	      if (subscribers.length === 0) { return; }
	
	      var child, callback, detail = promise._result;
	
	      for (var i = 0; i < subscribers.length; i += 3) {
	        child = subscribers[i];
	        callback = subscribers[i + settled];
	
	        if (child) {
	          lib$es6$promise$$internal$$invokeCallback(settled, child, callback, detail);
	        } else {
	          callback(detail);
	        }
	      }
	
	      promise._subscribers.length = 0;
	    }
	
	    function lib$es6$promise$$internal$$ErrorObject() {
	      this.error = null;
	    }
	
	    var lib$es6$promise$$internal$$TRY_CATCH_ERROR = new lib$es6$promise$$internal$$ErrorObject();
	
	    function lib$es6$promise$$internal$$tryCatch(callback, detail) {
	      try {
	        return callback(detail);
	      } catch(e) {
	        lib$es6$promise$$internal$$TRY_CATCH_ERROR.error = e;
	        return lib$es6$promise$$internal$$TRY_CATCH_ERROR;
	      }
	    }
	
	    function lib$es6$promise$$internal$$invokeCallback(settled, promise, callback, detail) {
	      var hasCallback = lib$es6$promise$utils$$isFunction(callback),
	          value, error, succeeded, failed;
	
	      if (hasCallback) {
	        value = lib$es6$promise$$internal$$tryCatch(callback, detail);
	
	        if (value === lib$es6$promise$$internal$$TRY_CATCH_ERROR) {
	          failed = true;
	          error = value.error;
	          value = null;
	        } else {
	          succeeded = true;
	        }
	
	        if (promise === value) {
	          lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$cannotReturnOwn());
	          return;
	        }
	
	      } else {
	        value = detail;
	        succeeded = true;
	      }
	
	      if (promise._state !== lib$es6$promise$$internal$$PENDING) {
	        // noop
	      } else if (hasCallback && succeeded) {
	        lib$es6$promise$$internal$$resolve(promise, value);
	      } else if (failed) {
	        lib$es6$promise$$internal$$reject(promise, error);
	      } else if (settled === lib$es6$promise$$internal$$FULFILLED) {
	        lib$es6$promise$$internal$$fulfill(promise, value);
	      } else if (settled === lib$es6$promise$$internal$$REJECTED) {
	        lib$es6$promise$$internal$$reject(promise, value);
	      }
	    }
	
	    function lib$es6$promise$$internal$$initializePromise(promise, resolver) {
	      try {
	        resolver(function resolvePromise(value){
	          lib$es6$promise$$internal$$resolve(promise, value);
	        }, function rejectPromise(reason) {
	          lib$es6$promise$$internal$$reject(promise, reason);
	        });
	      } catch(e) {
	        lib$es6$promise$$internal$$reject(promise, e);
	      }
	    }
	
	    function lib$es6$promise$enumerator$$Enumerator(Constructor, input) {
	      var enumerator = this;
	
	      enumerator._instanceConstructor = Constructor;
	      enumerator.promise = new Constructor(lib$es6$promise$$internal$$noop);
	
	      if (enumerator._validateInput(input)) {
	        enumerator._input     = input;
	        enumerator.length     = input.length;
	        enumerator._remaining = input.length;
	
	        enumerator._init();
	
	        if (enumerator.length === 0) {
	          lib$es6$promise$$internal$$fulfill(enumerator.promise, enumerator._result);
	        } else {
	          enumerator.length = enumerator.length || 0;
	          enumerator._enumerate();
	          if (enumerator._remaining === 0) {
	            lib$es6$promise$$internal$$fulfill(enumerator.promise, enumerator._result);
	          }
	        }
	      } else {
	        lib$es6$promise$$internal$$reject(enumerator.promise, enumerator._validationError());
	      }
	    }
	
	    lib$es6$promise$enumerator$$Enumerator.prototype._validateInput = function(input) {
	      return lib$es6$promise$utils$$isArray(input);
	    };
	
	    lib$es6$promise$enumerator$$Enumerator.prototype._validationError = function() {
	      return new Error('Array Methods must be provided an Array');
	    };
	
	    lib$es6$promise$enumerator$$Enumerator.prototype._init = function() {
	      this._result = new Array(this.length);
	    };
	
	    var lib$es6$promise$enumerator$$default = lib$es6$promise$enumerator$$Enumerator;
	
	    lib$es6$promise$enumerator$$Enumerator.prototype._enumerate = function() {
	      var enumerator = this;
	
	      var length  = enumerator.length;
	      var promise = enumerator.promise;
	      var input   = enumerator._input;
	
	      for (var i = 0; promise._state === lib$es6$promise$$internal$$PENDING && i < length; i++) {
	        enumerator._eachEntry(input[i], i);
	      }
	    };
	
	    lib$es6$promise$enumerator$$Enumerator.prototype._eachEntry = function(entry, i) {
	      var enumerator = this;
	      var c = enumerator._instanceConstructor;
	
	      if (lib$es6$promise$utils$$isMaybeThenable(entry)) {
	        if (entry.constructor === c && entry._state !== lib$es6$promise$$internal$$PENDING) {
	          entry._onerror = null;
	          enumerator._settledAt(entry._state, i, entry._result);
	        } else {
	          enumerator._willSettleAt(c.resolve(entry), i);
	        }
	      } else {
	        enumerator._remaining--;
	        enumerator._result[i] = entry;
	      }
	    };
	
	    lib$es6$promise$enumerator$$Enumerator.prototype._settledAt = function(state, i, value) {
	      var enumerator = this;
	      var promise = enumerator.promise;
	
	      if (promise._state === lib$es6$promise$$internal$$PENDING) {
	        enumerator._remaining--;
	
	        if (state === lib$es6$promise$$internal$$REJECTED) {
	          lib$es6$promise$$internal$$reject(promise, value);
	        } else {
	          enumerator._result[i] = value;
	        }
	      }
	
	      if (enumerator._remaining === 0) {
	        lib$es6$promise$$internal$$fulfill(promise, enumerator._result);
	      }
	    };
	
	    lib$es6$promise$enumerator$$Enumerator.prototype._willSettleAt = function(promise, i) {
	      var enumerator = this;
	
	      lib$es6$promise$$internal$$subscribe(promise, undefined, function(value) {
	        enumerator._settledAt(lib$es6$promise$$internal$$FULFILLED, i, value);
	      }, function(reason) {
	        enumerator._settledAt(lib$es6$promise$$internal$$REJECTED, i, reason);
	      });
	    };
	    function lib$es6$promise$promise$all$$all(entries) {
	      return new lib$es6$promise$enumerator$$default(this, entries).promise;
	    }
	    var lib$es6$promise$promise$all$$default = lib$es6$promise$promise$all$$all;
	    function lib$es6$promise$promise$race$$race(entries) {
	      /*jshint validthis:true */
	      var Constructor = this;
	
	      var promise = new Constructor(lib$es6$promise$$internal$$noop);
	
	      if (!lib$es6$promise$utils$$isArray(entries)) {
	        lib$es6$promise$$internal$$reject(promise, new TypeError('You must pass an array to race.'));
	        return promise;
	      }
	
	      var length = entries.length;
	
	      function onFulfillment(value) {
	        lib$es6$promise$$internal$$resolve(promise, value);
	      }
	
	      function onRejection(reason) {
	        lib$es6$promise$$internal$$reject(promise, reason);
	      }
	
	      for (var i = 0; promise._state === lib$es6$promise$$internal$$PENDING && i < length; i++) {
	        lib$es6$promise$$internal$$subscribe(Constructor.resolve(entries[i]), undefined, onFulfillment, onRejection);
	      }
	
	      return promise;
	    }
	    var lib$es6$promise$promise$race$$default = lib$es6$promise$promise$race$$race;
	    function lib$es6$promise$promise$resolve$$resolve(object) {
	      /*jshint validthis:true */
	      var Constructor = this;
	
	      if (object && typeof object === 'object' && object.constructor === Constructor) {
	        return object;
	      }
	
	      var promise = new Constructor(lib$es6$promise$$internal$$noop);
	      lib$es6$promise$$internal$$resolve(promise, object);
	      return promise;
	    }
	    var lib$es6$promise$promise$resolve$$default = lib$es6$promise$promise$resolve$$resolve;
	    function lib$es6$promise$promise$reject$$reject(reason) {
	      /*jshint validthis:true */
	      var Constructor = this;
	      var promise = new Constructor(lib$es6$promise$$internal$$noop);
	      lib$es6$promise$$internal$$reject(promise, reason);
	      return promise;
	    }
	    var lib$es6$promise$promise$reject$$default = lib$es6$promise$promise$reject$$reject;
	
	    var lib$es6$promise$promise$$counter = 0;
	
	    function lib$es6$promise$promise$$needsResolver() {
	      throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
	    }
	
	    function lib$es6$promise$promise$$needsNew() {
	      throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
	    }
	
	    var lib$es6$promise$promise$$default = lib$es6$promise$promise$$Promise;
	    /**
	      Promise objects represent the eventual result of an asynchronous operation. The
	      primary way of interacting with a promise is through its `then` method, which
	      registers callbacks to receive either a promise's eventual value or the reason
	      why the promise cannot be fulfilled.
	
	      Terminology
	      -----------
	
	      - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
	      - `thenable` is an object or function that defines a `then` method.
	      - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
	      - `exception` is a value that is thrown using the throw statement.
	      - `reason` is a value that indicates why a promise was rejected.
	      - `settled` the final resting state of a promise, fulfilled or rejected.
	
	      A promise can be in one of three states: pending, fulfilled, or rejected.
	
	      Promises that are fulfilled have a fulfillment value and are in the fulfilled
	      state.  Promises that are rejected have a rejection reason and are in the
	      rejected state.  A fulfillment value is never a thenable.
	
	      Promises can also be said to *resolve* a value.  If this value is also a
	      promise, then the original promise's settled state will match the value's
	      settled state.  So a promise that *resolves* a promise that rejects will
	      itself reject, and a promise that *resolves* a promise that fulfills will
	      itself fulfill.
	
	
	      Basic Usage:
	      ------------
	
	      ```js
	      var promise = new Promise(function(resolve, reject) {
	        // on success
	        resolve(value);
	
	        // on failure
	        reject(reason);
	      });
	
	      promise.then(function(value) {
	        // on fulfillment
	      }, function(reason) {
	        // on rejection
	      });
	      ```
	
	      Advanced Usage:
	      ---------------
	
	      Promises shine when abstracting away asynchronous interactions such as
	      `XMLHttpRequest`s.
	
	      ```js
	      function getJSON(url) {
	        return new Promise(function(resolve, reject){
	          var xhr = new XMLHttpRequest();
	
	          xhr.open('GET', url);
	          xhr.onreadystatechange = handler;
	          xhr.responseType = 'json';
	          xhr.setRequestHeader('Accept', 'application/json');
	          xhr.send();
	
	          function handler() {
	            if (this.readyState === this.DONE) {
	              if (this.status === 200) {
	                resolve(this.response);
	              } else {
	                reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
	              }
	            }
	          };
	        });
	      }
	
	      getJSON('/posts.json').then(function(json) {
	        // on fulfillment
	      }, function(reason) {
	        // on rejection
	      });
	      ```
	
	      Unlike callbacks, promises are great composable primitives.
	
	      ```js
	      Promise.all([
	        getJSON('/posts'),
	        getJSON('/comments')
	      ]).then(function(values){
	        values[0] // => postsJSON
	        values[1] // => commentsJSON
	
	        return values;
	      });
	      ```
	
	      @class Promise
	      @param {function} resolver
	      Useful for tooling.
	      @constructor
	    */
	    function lib$es6$promise$promise$$Promise(resolver) {
	      this._id = lib$es6$promise$promise$$counter++;
	      this._state = undefined;
	      this._result = undefined;
	      this._subscribers = [];
	
	      if (lib$es6$promise$$internal$$noop !== resolver) {
	        if (!lib$es6$promise$utils$$isFunction(resolver)) {
	          lib$es6$promise$promise$$needsResolver();
	        }
	
	        if (!(this instanceof lib$es6$promise$promise$$Promise)) {
	          lib$es6$promise$promise$$needsNew();
	        }
	
	        lib$es6$promise$$internal$$initializePromise(this, resolver);
	      }
	    }
	
	    lib$es6$promise$promise$$Promise.all = lib$es6$promise$promise$all$$default;
	    lib$es6$promise$promise$$Promise.race = lib$es6$promise$promise$race$$default;
	    lib$es6$promise$promise$$Promise.resolve = lib$es6$promise$promise$resolve$$default;
	    lib$es6$promise$promise$$Promise.reject = lib$es6$promise$promise$reject$$default;
	    lib$es6$promise$promise$$Promise._setScheduler = lib$es6$promise$asap$$setScheduler;
	    lib$es6$promise$promise$$Promise._setAsap = lib$es6$promise$asap$$setAsap;
	    lib$es6$promise$promise$$Promise._asap = lib$es6$promise$asap$$asap;
	
	    lib$es6$promise$promise$$Promise.prototype = {
	      constructor: lib$es6$promise$promise$$Promise,
	
	    /**
	      The primary way of interacting with a promise is through its `then` method,
	      which registers callbacks to receive either a promise's eventual value or the
	      reason why the promise cannot be fulfilled.
	
	      ```js
	      findUser().then(function(user){
	        // user is available
	      }, function(reason){
	        // user is unavailable, and you are given the reason why
	      });
	      ```
	
	      Chaining
	      --------
	
	      The return value of `then` is itself a promise.  This second, 'downstream'
	      promise is resolved with the return value of the first promise's fulfillment
	      or rejection handler, or rejected if the handler throws an exception.
	
	      ```js
	      findUser().then(function (user) {
	        return user.name;
	      }, function (reason) {
	        return 'default name';
	      }).then(function (userName) {
	        // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
	        // will be `'default name'`
	      });
	
	      findUser().then(function (user) {
	        throw new Error('Found user, but still unhappy');
	      }, function (reason) {
	        throw new Error('`findUser` rejected and we're unhappy');
	      }).then(function (value) {
	        // never reached
	      }, function (reason) {
	        // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
	        // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
	      });
	      ```
	      If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
	
	      ```js
	      findUser().then(function (user) {
	        throw new PedagogicalException('Upstream error');
	      }).then(function (value) {
	        // never reached
	      }).then(function (value) {
	        // never reached
	      }, function (reason) {
	        // The `PedgagocialException` is propagated all the way down to here
	      });
	      ```
	
	      Assimilation
	      ------------
	
	      Sometimes the value you want to propagate to a downstream promise can only be
	      retrieved asynchronously. This can be achieved by returning a promise in the
	      fulfillment or rejection handler. The downstream promise will then be pending
	      until the returned promise is settled. This is called *assimilation*.
	
	      ```js
	      findUser().then(function (user) {
	        return findCommentsByAuthor(user);
	      }).then(function (comments) {
	        // The user's comments are now available
	      });
	      ```
	
	      If the assimliated promise rejects, then the downstream promise will also reject.
	
	      ```js
	      findUser().then(function (user) {
	        return findCommentsByAuthor(user);
	      }).then(function (comments) {
	        // If `findCommentsByAuthor` fulfills, we'll have the value here
	      }, function (reason) {
	        // If `findCommentsByAuthor` rejects, we'll have the reason here
	      });
	      ```
	
	      Simple Example
	      --------------
	
	      Synchronous Example
	
	      ```javascript
	      var result;
	
	      try {
	        result = findResult();
	        // success
	      } catch(reason) {
	        // failure
	      }
	      ```
	
	      Errback Example
	
	      ```js
	      findResult(function(result, err){
	        if (err) {
	          // failure
	        } else {
	          // success
	        }
	      });
	      ```
	
	      Promise Example;
	
	      ```javascript
	      findResult().then(function(result){
	        // success
	      }, function(reason){
	        // failure
	      });
	      ```
	
	      Advanced Example
	      --------------
	
	      Synchronous Example
	
	      ```javascript
	      var author, books;
	
	      try {
	        author = findAuthor();
	        books  = findBooksByAuthor(author);
	        // success
	      } catch(reason) {
	        // failure
	      }
	      ```
	
	      Errback Example
	
	      ```js
	
	      function foundBooks(books) {
	
	      }
	
	      function failure(reason) {
	
	      }
	
	      findAuthor(function(author, err){
	        if (err) {
	          failure(err);
	          // failure
	        } else {
	          try {
	            findBoooksByAuthor(author, function(books, err) {
	              if (err) {
	                failure(err);
	              } else {
	                try {
	                  foundBooks(books);
	                } catch(reason) {
	                  failure(reason);
	                }
	              }
	            });
	          } catch(error) {
	            failure(err);
	          }
	          // success
	        }
	      });
	      ```
	
	      Promise Example;
	
	      ```javascript
	      findAuthor().
	        then(findBooksByAuthor).
	        then(function(books){
	          // found books
	      }).catch(function(reason){
	        // something went wrong
	      });
	      ```
	
	      @method then
	      @param {Function} onFulfilled
	      @param {Function} onRejected
	      Useful for tooling.
	      @return {Promise}
	    */
	      then: function(onFulfillment, onRejection) {
	        var parent = this;
	        var state = parent._state;
	
	        if (state === lib$es6$promise$$internal$$FULFILLED && !onFulfillment || state === lib$es6$promise$$internal$$REJECTED && !onRejection) {
	          return this;
	        }
	
	        var child = new this.constructor(lib$es6$promise$$internal$$noop);
	        var result = parent._result;
	
	        if (state) {
	          var callback = arguments[state - 1];
	          lib$es6$promise$asap$$asap(function(){
	            lib$es6$promise$$internal$$invokeCallback(state, child, callback, result);
	          });
	        } else {
	          lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection);
	        }
	
	        return child;
	      },
	
	    /**
	      `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
	      as the catch block of a try/catch statement.
	
	      ```js
	      function findAuthor(){
	        throw new Error('couldn't find that author');
	      }
	
	      // synchronous
	      try {
	        findAuthor();
	      } catch(reason) {
	        // something went wrong
	      }
	
	      // async with promises
	      findAuthor().catch(function(reason){
	        // something went wrong
	      });
	      ```
	
	      @method catch
	      @param {Function} onRejection
	      Useful for tooling.
	      @return {Promise}
	    */
	      'catch': function(onRejection) {
	        return this.then(null, onRejection);
	      }
	    };
	    function lib$es6$promise$polyfill$$polyfill() {
	      var local;
	
	      if (typeof global !== 'undefined') {
	          local = global;
	      } else if (typeof self !== 'undefined') {
	          local = self;
	      } else {
	          try {
	              local = Function('return this')();
	          } catch (e) {
	              throw new Error('polyfill failed because global object is unavailable in this environment');
	          }
	      }
	
	      var P = local.Promise;
	
	      if (P && Object.prototype.toString.call(P.resolve()) === '[object Promise]' && !P.cast) {
	        return;
	      }
	
	      local.Promise = lib$es6$promise$promise$$default;
	    }
	    var lib$es6$promise$polyfill$$default = lib$es6$promise$polyfill$$polyfill;
	
	    var lib$es6$promise$umd$$ES6Promise = {
	      'Promise': lib$es6$promise$promise$$default,
	      'polyfill': lib$es6$promise$polyfill$$default
	    };
	
	    /* global define:true module:true window: true */
	    if ("function" === 'function' && __webpack_require__(94)['amd']) {
	      !(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return lib$es6$promise$umd$$ES6Promise; }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof module !== 'undefined' && module['exports']) {
	      module['exports'] = lib$es6$promise$umd$$ES6Promise;
	    } else if (typeof this !== 'undefined') {
	      this['ES6Promise'] = lib$es6$promise$umd$$ES6Promise;
	    }
	
	    lib$es6$promise$polyfill$$default();
	}).call(this);
	
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(364), (function() { return this; }()), __webpack_require__(95)(module)))

/***/ },
/* 192 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 193 */
192,
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "45d809bfeeaa44603f43a5f05c92f3fc.png"

/***/ },
/* 195 */
/***/ function(module, exports) {

	module.exports = "<div class=\"markdown\"><h1 id=\"alert\">Alert</h1>\n<hr>\n<p>警告提示，展现需要关注的信息。</p>\n<h2 id=\"-\">何时使用</h2>\n<ul>\n<li>当某个页面需要向用户显示警告的信息时。</li>\n<li>非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。</li>\n</ul>\n<h2 id=\"-\">组件演示</h2>\n<div class=\"code-boxes\">\n  <div class=\"code-boxes-col-2-1\">\n    <div class=\"code-box\">\n      <div class=\"code-box-demo\">\n        <v-alert :message=\"'成功提示的文案'\" :type=\"'success'\"></v-alert>\n      </div>\n    </div>\n  </div>\n  <div class=\"code-boxes-col-2-1\">\n    <div class=\"code-box\">\n      <div class=\"code-box-demo\">\n        <v-alert :message=\"'警告提示的文案'\" :type=\"'warn'\" :closable=\"true\" :on-close=\"_close\"></v-alert>\n        <v-alert :message=\"'错误提示的文案'\" :type=\"'error'\" :description=\"'错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍'\" :closable=\"true\" :on-close=\"_close\"></v-alert>\n      </div>\n    </div>\n  </div>\n  <div class=\"code-boxes-col-2-1\">\n    <div class=\"code-box\">\n      <div class=\"code-box-demo\">\n        <v-alert :message=\"'成功提示的文案'\" :type=\"'success'\" :description=\"'成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍'\"></v-alert>\n        <v-alert :message=\"'消息提示的文案'\" :type=\"'info'\" :description=\"'消息提示的辅助性文字介绍消息提示的辅助性文字介绍消息提示的辅助性文字介绍'\"></v-alert>\n        <v-alert :message=\"'警告提示的文案'\" :type=\"'warn'\" :description=\"'成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍'\"></v-alert>\n        <v-alert :message=\"'错误提示的文案'\" :type=\"'error'\" :description=\"'错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍'\"></v-alert>\n      </div>\n    </div>\n  </div>\n  <div class=\"code-boxes-col-2-1\">\n    <div class=\"code-box\">\n      <div class=\"code-box-demo\">\n        <v-alert :message=\"'成功提示的文案'\" :type=\"'success'\"></v-alert>\n        <v-alert :message=\"'消息提示的文案'\" :type=\"'info'\"></v-alert>\n        <v-alert :message=\"'警告提示的文案'\" :type=\"'warn'\"></v-alert>\n        <v-alert :message=\"'错误提示的文案'\" :type=\"'error'\"></v-alert>\n      </div>\n    </div>\n  </div>\n  <div class=\"code-boxes-col-2-1\">\n    <div class=\"code-box\">\n      <div class=\"code-box-demo\">\n        <v-alert :message=\"'消息提示的文案'\" :type=\"'info'\" :closable=\"true\">\n          <a slot=\"closeText\" href=\"javascript:;\">不再提醒</a>\n        </v-alert>\n      </div>\n    </div>\n  </div>\n</div>\n<h2 id=\"api\">API</h2>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td>必选参数，指定警告提示的样式，有四种选择<code>success</code>、<code>info</code>、<code>warn</code>、<code>error</code></td>\n<td>String</td>\n<td>无</td>\n</tr>\n<tr>\n<td>closable</td>\n<td>可选参数，默认不显示关闭按钮</td>\n<td>Boolean</td>\n<td>无</td>\n<td></td>\n<td>message</td>\n<td>必选参数，警告提示内容</td>\n<td>String</td>\n<td>无</td>\n</tr>\n<tr>\n<td>description</td>\n<td>可选参数，警告提示的辅助性文字介绍</td>\n<td>String</td>\n<td>无</td>\n</tr>\n<tr>\n<td>onClose</td>\n<td>可选参数，关闭时触发的回调函数</td>\n<td>Function</td>\n<td>无</td>\n</tr>\n<tr>\n<td>slot::closeText</td>\n<td>可选参数，自定义关闭按钮</td>\n<td>slot</td>\n<td>无</td>\n</tr>\n</tbody>\n</table>\n</div>";

/***/ },
/* 196 */
/***/ function(module, exports) {

	module.exports = "<div class=\"markdown\"><h1 id=\"badge\">Badge</h1>\n<hr>\n<p>图标右上角的圆形徽标数字。</p>\n<h2 id=\"-\">何时使用</h2>\n<p>一般出现在通知图标或头像的右上角，用于显示需要处理的消息条数，通过醒目视觉形式吸引用户处理。</p>\n<h2 id=\"-\">组件演示</h2>\n<div class=\"code-boxes\">\n  <div class=\"code-box code-boxes-col\">\n          <h3>简单的徽章显示</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-badge :count=\"5\">\n      <a href=\"javascript:;\" class=\"head-example\"></a>\n    </v-badge>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-badge</span> <span class=\"token attr-name\" >:count</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>5<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>javascript:;<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>head-example<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-badge</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n  <div class=\"code-box code-boxes-col\">\n          <h3>超过99的会显示为99+</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-badge :count=\"99\">\n      <a href=\"javascript:;\" class=\"head-example\"></a>\n    </v-badge>\n    <v-badge :count=\"200\">\n      <a href=\"javascript:;\" class=\"head-example\"></a>\n    </v-badge>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-badge</span> <span class=\"token attr-name\" >:count</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>99<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>javascript:;<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>head-example<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-badge</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-badge</span> <span class=\"token attr-name\" >:count</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>200<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>javascript:;<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>head-example<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-badge</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n  <div class=\"code-box code-boxes-col\">\n          <h3>没有具体的数字</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-badge :dot=\"true\">\n      <v-icon :type=\"'notification'\"></v-icon>\n    </v-badge>\n    <v-badge :dot=\"true\">\n      <a href=\"javascript:;\">一个链接</a>\n    </v-badge>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-badge</span> <span class=\"token attr-name\" >:dot</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>true<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-icon</span> <span class=\"token attr-name\" >:type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >'</span>notification<span class=\"token punctuation\" >'</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-icon</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-badge</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-badge</span> <span class=\"token attr-name\" >:dot</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>true<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>javascript:;<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>一个链接<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-badge</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n  <div class=\"code-box code-boxes-col\">\n          <h3>用a标签进行包裹即可</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <a href=\"#\">\n      <v-badge :dot=\"true\">\n        <span class=\"head-example\"></span>\n      </v-badge>\n    </a>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-badge</span> <span class=\"token attr-name\" >:dot</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>true<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>head-example<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-badge</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n</div>\n<h2 id=\"api\">API</h2>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>count</td>\n<td>展示的数字，大于 99 时显示为 99+</td>\n<td>Number</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>dot</td>\n<td>不展示数字，只有一个小红点</td>\n<td>boolean</td>\n<td></td>\n<td>false</td>\n</tr>\n</tbody>\n</table>\n</div>";

/***/ },
/* 197 */
/***/ function(module, exports) {

	module.exports = "<div class=\"markdown\"><h1 id=\"breadcrumb\">Breadcrumb</h1>\n<hr>\n<p>显示当前页面在系统层级结构中的位置，并能向上返回。</p>\n<h2 id=\"-\">何时使用</h2>\n<ul>\n<li>当系统拥有超过两级以上的层级结构时；</li>\n<li>当需要告知用户“你在哪里”时；</li>\n<li>当需要向上导航的功能时。</li>\n</ul>\n<h2 id=\"-\">组件演示</h2>\n<div class=\"code-boxes\">\n  <div class=\"code-box code-boxes-col\">\n          <h3>基本</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-breadcrumb>\n      <v-breadcrumb-item>首页</v-breadcrumb-item>\n      <v-breadcrumb-item :href=\"'#'\">应用中心</v-breadcrumb-item>\n      <v-breadcrumb-item :href=\"'#'\">应用列表</v-breadcrumb-item>\n      <v-breadcrumb-item>某应用</v-breadcrumb-item>\n    </v-breadcrumb>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-breadcrumb</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-breadcrumb-item</span><span class=\"token punctuation\" >></span></span>首页<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-breadcrumb-item</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-breadcrumb-item</span> <span class=\"token attr-name\" >:href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >'</span>#<span class=\"token punctuation\" >'</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>应用中心<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-breadcrumb-item</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-breadcrumb-item</span> <span class=\"token attr-name\" >:href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >'</span>#<span class=\"token punctuation\" >'</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>应用列表<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-breadcrumb-item</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-breadcrumb-item</span><span class=\"token punctuation\" >></span></span>某应用<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-breadcrumb-item</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-breadcrumb</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n  <div class=\"code-box code-boxes-col\">\n          <h3>带图标</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-breadcrumb>\n      <v-breadcrumb-item><v-icon :type=\"'home'\"></v-icon>首页</v-breadcrumb-item>\n      <v-breadcrumb-item><v-icon :type=\"'user'\"></v-icon>应用列表</v-breadcrumb-item>\n      <v-breadcrumb-item>应用</v-breadcrumb-item>\n    </v-breadcrumb>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-breadcrumb</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-breadcrumb-item</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-icon</span> <span class=\"token attr-name\" >:type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >'</span>home<span class=\"token punctuation\" >'</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-icon</span><span class=\"token punctuation\" >></span></span>首页<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-breadcrumb-item</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-breadcrumb-item</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-icon</span> <span class=\"token attr-name\" >:type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >'</span>user<span class=\"token punctuation\" >'</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-icon</span><span class=\"token punctuation\" >></span></span>应用列表<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-breadcrumb-item</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-breadcrumb-item</span><span class=\"token punctuation\" >></span></span>应用<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-breadcrumb-item</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-breadcrumb</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n</div>\n<h2 id=\"api\">API</h2>\n<h3 id=\"breadcrumb\">Breadcrumb</h3>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>router</td>\n<td>可传入 react-router 的实例</td>\n<td>Object</td>\n<td></td>\n<td>-</td>\n</tr>\n<tr>\n<td>routes</td>\n<td>router 的路由栈信息</td>\n<td>Array</td>\n<td></td>\n<td>-</td>\n</tr>\n<tr>\n<td>params</td>\n<td>路由的参数</td>\n<td>Object</td>\n<td></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n<h3 id=\"breadcrumb-item\">Breadcrumb.Item</h3>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>href</td>\n<td>链接，如不传则不可点击</td>\n<td>string</td>\n<td></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div>";

/***/ },
/* 198 */
/***/ function(module, exports) {

	module.exports = "<div class=\"markdown\"><h1 id=\"button\">Button</h1>\n<hr>\n<p>按钮用于开始一个即时操作。</p>\n<h2 id=\"-\">何时使用</h2>\n<p>标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。</p>\n<h2 id=\"-\">如何使用</h2>\n<ul>\n<li><p>通过设置 Button 的属性来产生不同的按钮样式，推荐顺序为：<code>type</code> -&gt; <code>shape</code> -&gt; <code>size</code> -&gt; <code>loading</code> -&gt; <code>disabled</code></p>\n</li>\n<li><p>按钮的属性说明如下：</p>\n</li>\n</ul>\n<table>\n<thead>\n<tr>\n<th>属性</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td>设置按钮类型，可选值为 <code>primary</code> <code>ghost</code> 或者不设</td>\n<td>Enum</td>\n<td>undefined</td>\n</tr>\n<tr>\n<td>htmlType</td>\n<td>设置 <code>button</code> 原生的 <code>type</code> 值，可选值请参考 HTML标准</td>\n<td>Enum</td>\n<td><code>button</code></td>\n</tr>\n<tr>\n<td>shape</td>\n<td>设置按钮形状，可选值为 <code>circle</code> <code>circle-outline</code> 或者不设</td>\n<td>Enum</td>\n<td>undefined</td>\n</tr>\n<tr>\n<td>size</td>\n<td>设置按钮大小，可选值为 <code>sm</code> <code>lg</code> 或者不设</td>\n<td>Enum</td>\n<td>undefined</td>\n</tr>\n<tr>\n<td>loading</td>\n<td>设置按钮载入状态，存在为 <code>true</code>，不存在为 <code>false</code>，或直接设置值，如：<code>loading=&quot;true&quot;</code></td>\n<td>Bool</td>\n<td>false</td>\n</tr>\n<tr>\n<td>onClick</td>\n<td><code>click</code> 事件的 handler</td>\n<td>Function</td>\n<td><code>function() {}</code></td>\n</tr>\n</tbody>\n</table>\n<ul>\n<li><code>&lt;Button&gt;Hello world!&lt;/Button&gt;</code> 最终会被渲染为 <code>&lt;button&gt;Hello world!&lt;/button&gt;</code>，并且除了上表中的属性，其它属性都会直接传到 <code>&lt;button&gt;&lt;/button&gt;</code></li>\n</ul>\n<h2 id=\"-\">组件演示</h2>\n<div class=\"code-boxes\">\n  <div class=\"code-box code-boxes-col\">\n          <h3>按钮类型</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-button type=\"primary\">主按钮</v-button>\n    <v-button>次按钮</v-button>\n    <v-button type=\"ghost\">幽灵按钮</v-button>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>主按钮<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span><span class=\"token punctuation\" >></span></span>次按钮<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>幽灵按钮<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n  <div class=\"code-box code-boxes-col\">\n          <h3>按钮尺寸</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-button type=\"primary\" size=\"large\">大号按钮</v-button>\n    <v-button type=\"primary\">中号按钮(默认)</v-button>\n    <v-button type=\"primary\" size=\"small\">小号按钮</v-button>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >size</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>large<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>大号按钮<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>中号按钮(默认)<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >size</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>small<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>小号按钮<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n  <div class=\"code-box code-boxes-col\">\n          <h3>按钮形状</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-button type=\"primary\" shape=\"circle\" size=\"large\">\n      <v-icon type=\"search\" />\n    </v-button>\n    <v-button type=\"primary\" shape=\"circle\">\n      <v-icon type=\"search\" />\n    </v-button>\n    <v-button type=\"primary\" shape=\"circle\" size=\"small\">\n      <v-icon type=\"search\" />\n    </v-button>\n    <br />\n    <v-button type=\"ghost\" shape=\"circle-outline\" size=\"large\">\n      <v-icon type=\"search\" />\n    </v-button>\n    <v-button type=\"ghost\" shape=\"circle-outline\">\n      <v-icon type=\"search\" />\n    </v-button>\n    <v-button type=\"ghost\" shape=\"circle-outline\" size=\"small\">\n      <v-icon type=\"search\" />\n    </v-button>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >shape</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>circle<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >size</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>large<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>search<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >shape</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>circle<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>search<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >shape</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>circle<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >size</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>small<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>search<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>br</span> <span class=\"token punctuation\" >/></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >shape</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>circle-outline<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >size</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>large<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>search<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >shape</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>circle-outline<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>search<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >shape</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>circle-outline<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >size</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>small<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>search<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n  <div class=\"code-box code-boxes-col\">\n          <h3>按钮状态</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <h4>使用 <code>disabled</code> 属性</h4>\n    <v-button type=\"primary\">主按钮</v-button>\n    <v-button type=\"primary\" disabled>主按钮(失效)</v-button>\n    <br>\n    <v-button>次按钮</v-button>\n    <v-button disabled>次按钮(失效)</v-button>\n    <br>\n    <h4>使用 <code>.disabled</code> class</h4>\n    <v-button type=\"ghost\">幽灵按钮</v-button>\n    <v-button type=\"ghost\" class=\"disabled\">幽灵按钮(失效)</v-button>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>h4</span><span class=\"token punctuation\" >></span></span>使用 <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>code</span><span class=\"token punctuation\" >></span></span>disabled<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>code</span><span class=\"token punctuation\" >></span></span> 属性<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>h4</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>主按钮<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >disabled</span><span class=\"token punctuation\" >></span></span>主按钮(失效)<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>br</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span><span class=\"token punctuation\" >></span></span>次按钮<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >disabled</span><span class=\"token punctuation\" >></span></span>次按钮(失效)<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>br</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>h4</span><span class=\"token punctuation\" >></span></span>使用 <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>code</span><span class=\"token punctuation\" >></span></span>.disabled<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>code</span><span class=\"token punctuation\" >></span></span> class<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>h4</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>幽灵按钮<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>disabled<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>幽灵按钮(失效)<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n  <div class=\"code-box code-boxes-col\">\n          <h3>按钮加载中</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-button type=\"primary\" :loading=\"true\" size=\"large\">加载中</v-button>\n    <v-button type=\"primary\" :loading=\"true\">加载中</v-button>\n    <v-button type=\"primary\" :loading=\"true\" size=\"small\">加载中</v-button>\n    <v-button type=\"primary\" :loading=\"loading\" @click=\"_enterLoading\">点击变加载</v-button>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:loading</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>true<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >size</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>large<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>加载中<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:loading</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>true<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>加载中<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:loading</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>true<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >size</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>small<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>加载中<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:loading</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>loading<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >@click</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>_enterLoading<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>点击变加载<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n  <div class=\"code-box code-boxes-col\">\n          <h3>按钮组合</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <h4>基本组合</h4>\n    <v-button-group>\n      <v-button type=\"primary\">确定</v-button>\n      <v-button type=\"primary\">取消</v-button>\n    </v-button-group>\n    <v-button-group>\n      <v-button>左</v-button>\n      <v-button>中</v-button>\n      <v-button>右</v-button>\n    </v-button-group>\n    <v-button-group>\n      <v-button type=\"primary\">左</v-button>\n      <v-button type=\"ghost\">中</v-button>\n      <v-button type=\"ghost\">中</v-button>\n      <v-button>右</v-button>\n    </v-button-group>\n    <h4>带图标按钮组合 </h4>\n    <v-button-group>\n      <v-button type=\"primary\">\n        <v-icon type=\"left\"></v-icon>\n        <span>后退</span>\n      </v-button>\n      <v-button type=\"primary\">\n        前进\n        <v-icon type=\"right\"></v-icon>\n      </v-button>\n    </v-button-group>\n    <v-button-group>\n      <v-button type=\"primary\">\n        <v-icon type=\"cloud\"></v-icon>\n      </v-button>\n      <v-button type=\"primary\">\n        <v-icon type=\"cloud-download\"></v-icon>\n      </v-button>\n    </v-button-group>\n    <h4>多个组合</h4>\n    <v-button-group>\n      <v-button type=\"ghost\">1</v-button>\n      <v-button type=\"ghost\">2</v-button>\n      <v-button type=\"ghost\">3</v-button>\n      <v-button type=\"ghost\">4</v-button>\n      <v-button type=\"ghost\">\n        <span>前进</span>\n        <v-icon type=\"right\"></v-icon>\n      </v-button>\n    </v-button-group>\n    <h4>尺寸</h4>\n    <v-button-group size=\"large\">\n      <v-button type=\"ghost\">大</v-button>\n      <v-button type=\"ghost\">大</v-button>\n      <v-button type=\"ghost\">大</v-button>\n    </v-button-group>\n    <v-button-group>\n      <v-button type=\"ghost\">默认</v-button>\n      <v-button type=\"ghost\">默认</v-button>\n      <v-button type=\"ghost\">默认</v-button>\n    </v-button-group>\n    <v-button-group size=\"small\">\n      <v-button type=\"ghost\">小</v-button>\n      <v-button type=\"ghost\">小</v-button>\n      <v-button type=\"ghost\">小</v-button>\n    </v-button-group>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>h4</span><span class=\"token punctuation\" >></span></span>基本组合<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>h4</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button-group</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>确定<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>取消<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button-group</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button-group</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span><span class=\"token punctuation\" >></span></span>左<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span><span class=\"token punctuation\" >></span></span>中<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span><span class=\"token punctuation\" >></span></span>右<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button-group</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button-group</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>左<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>中<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>中<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span><span class=\"token punctuation\" >></span></span>右<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button-group</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>h4</span><span class=\"token punctuation\" >></span></span>带图标按钮组合 <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>h4</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button-group</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>left<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-icon</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span><span class=\"token punctuation\" >></span></span>后退<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    前进\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>right<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-icon</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button-group</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button-group</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>cloud<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-icon</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>cloud-download<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-icon</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button-group</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>h4</span><span class=\"token punctuation\" >></span></span>多个组合<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>h4</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button-group</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>1<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>2<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>3<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>4<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span><span class=\"token punctuation\" >></span></span>前进<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>right<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-icon</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button-group</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>h4</span><span class=\"token punctuation\" >></span></span>尺寸<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>h4</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button-group</span> <span class=\"token attr-name\" >size</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>large<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>大<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>大<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>大<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button-group</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button-group</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>默认<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>默认<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>默认<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button-group</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button-group</span> <span class=\"token attr-name\" >size</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>small<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>小<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>小<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>小<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button-group</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n  <div class=\"code-box code-boxes-col\">\n          <h3>图标按钮</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-button type=\"primary\" shape=\"circle\" size=\"large\">\n      <v-icon type=\"search\"></v-icon>\n    </v-button>\n    <v-button type=\"primary\" size=\"large\">\n      <v-icon type=\"search\"></v-icon>\n      <span>大按钮</span>\n    </v-button>\n    <br>\n    <v-button type=\"primary\" shape=\"circle\">\n      <v-icon type=\"search\"></v-icon>\n    </v-button>\n    <v-button type=\"primary\">\n      <v-icon type=\"search\"></v-icon>\n      <span>中按钮</span>\n    </v-button>\n    <br>\n    <v-button type=\"primary\" shape=\"circle\" size=\"small\">\n      <v-icon type=\"search\"></v-icon>\n    </v-button>\n    <v-button type=\"primary\" size=\"small\">\n      <v-icon type=\"search\"></v-icon>\n      <span>小按钮</span>\n    </v-button>\n    <br>\n    <v-button type=\"ghost\" shape=\"circle-outline\" size=\"large\">\n      <v-icon type=\"search\" />\n    </v-button>\n    <v-button type=\"ghost\" shape=\"circle-outline\">\n      <v-icon type=\"search\" />\n    </v-button>\n    <v-button type=\"ghost\" shape=\"circle-outline\" size=\"small\">\n      <v-icon type=\"search\" />\n    </v-button>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >shape</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>circle<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >size</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>large<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>search<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-icon</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >size</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>large<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>search<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-icon</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span><span class=\"token punctuation\" >></span></span>大按钮<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>br</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >shape</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>circle<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>search<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-icon</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>search<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-icon</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span><span class=\"token punctuation\" >></span></span>中按钮<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>br</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >shape</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>circle<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >size</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>small<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>search<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-icon</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >size</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>small<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>search<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-icon</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span><span class=\"token punctuation\" >></span></span>小按钮<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>br</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >shape</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>circle-outline<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >size</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>large<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>search<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >shape</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>circle-outline<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>search<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >shape</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>circle-outline<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >size</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>small<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>search<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n</div></div>";

/***/ },
/* 199 */
/***/ function(module, exports) {

	module.exports = "<div class=\"markdown\"><h1 id=\"checkbox\">Checkbox</h1>\n<hr>\n<p>多选框。</p>\n<h2 id=\"-\">何时使用</h2>\n<ul>\n<li>需要表示开关状态/两种状态之间的切换时；</li>\n<li>和 <code>switch</code>的区别是，切换 <code>switch</code> 会直接触发状态改变，而 <code>checkbox</code> 一般用于状态标记，需要和提交操作配合。</li>\n</ul>\n<h2 id=\"-\">组件演示</h2>\n<div class=\"code-boxes\">\n  <div class=\"code-box code-boxes-col\">\n          <h3>基本用法</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-checkbox :default-checked=\"false\" :on-change=\"_change\"><span>Checkbox</span></v-checkbox>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-checkbox</span> <span class=\"token attr-name\" >:default-checked</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>false<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:on-change</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>_change<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span><span class=\"token punctuation\" >></span></span>Checkbox<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-checkbox</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n  <div class=\"code-box code-boxes-col\">\n          <h3>不可用</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-checkbox :default-checked=\"false\" :disabled=\"true\"><span>不可用</span></v-checkbox>\n    <br>\n    <v-checkbox :default-checked=\"true\" :disabled=\"true\"><span>不可用</span></v-checkbox>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-checkbox</span> <span class=\"token attr-name\" >:default-checked</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>false<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:disabled</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>true<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span><span class=\"token punctuation\" >></span></span>不可用<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-checkbox</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>br</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-checkbox</span> <span class=\"token attr-name\" >:default-checked</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>true<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:disabled</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>true<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span><span class=\"token punctuation\" >></span></span>不可用<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-checkbox</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n  <div class=\"code-box code-boxes-col\">\n          <h3>和外部组件通信</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-checkbox :checked=\"checked\" :disabled=\"disabled\"><span>{{checkedStatus}}-{{disabledStatus}}</span></v-checkbox>\n    <br>\n    <br>\n    <v-button type=\"primary\" size=\"small\" @click=\"_toggleChecked\">{{checkedStatus}}</v-button>\n    <v-button type=\"primary\" size=\"small\" @click=\"_toggleDisable\">{{disabledStatus}}</v-button>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-checkbox</span> <span class=\"token attr-name\" >:checked</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>checked<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:disabled</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>disabled<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span><span class=\"token punctuation\" >></span></span>{{checkedStatus}}-{{disabledStatus}}<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-checkbox</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>br</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>br</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >size</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>small<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >@click</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>_toggleChecked<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>{{checkedStatus}}<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >size</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>small<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >@click</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>_toggleDisable<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>{{disabledStatus}}<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n</div>\n<h2 id=\"api\">API</h2>\n<h3 id=\"checkbox\">Checkbox</h3>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>checked</td>\n<td>指定当前是否选中</td>\n<td>boolean</td>\n<td></td>\n<td>false</td>\n</tr>\n<tr>\n<td>default-checked</td>\n<td>初始是否选中</td>\n<td>boolean</td>\n<td></td>\n<td>false</td>\n</tr>\n<tr>\n<td>on-change</td>\n<td>变化时回调函数</td>\n<td>Function(e:Event)</td>\n<td></td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n</div>";

/***/ },
/* 200 */
/***/ function(module, exports) {

	module.exports = "<div class=\"markdown\"><h1 id=\"iconfont\">Iconfont</h1>\n<hr>\n<p>有含义的矢量图形，每一个图标打倒一个敌人。</p>\n<h2 id=\"-\">图标的命名规范</h2>\n<p>我们为每个图标赋予了语义化的命名。只需在 <code>&lt;v-icon&gt;</code> 标签内，制定对应的 type 属性即可。</p>\n<p>不同 type 命名规则如下:</p>\n<ul>\n<li><p>实心和描线图标保持同名，用 <code>-o</code> 来区分，比如 <code>question-circle</code>(实心) 和 <code>question-circle-o</code>(描线)；</p>\n</li>\n<li><p>命名顺序：<code>[icon名]-[描线与否]-[方向]</code>。</p>\n</li>\n</ul>\n<h2 id=\"-\">实现原理</h2>\n<p>所有的 Icon 标签最终会渲染为</p>\n<pre><code class=\"lang-html\">&lt;i class=&quot;anticon anticon-${type}&quot;&gt;&lt;/i&gt;\n</code></pre>\n<h2 id=\"-\">如何使用</h2>\n<p>使用 <code>&lt;v-icon&gt;</code> 标签申明组件，设置对应的 type 设置需要渲染的图标，示例代码如下:</p>\n<pre><code class=\"lang-html\">&lt;v-icon type=&quot;link&quot; &gt;\n</code></pre>\n<blockquote>\n<p>点击图标复制代码。</p>\n</blockquote>\n<h2 id=\"-\">图标列表</h2>\n<h3 id=\"-\">一. 方向性图标</h3>\n<ul class=\"row anticons-list clearfix\">\n  <li>\n    <i class=\"anticon anticon-step-backward\"></i>\n    <span class=\"anticon-class\">step-backward</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-step-forward\"></i>\n    <span class=\"anticon-class\">step-forward</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-fast-backward\"></i>\n    <span class=\"anticon-class\">fast-backward</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-fast-forward\"></i>\n    <span class=\"anticon-class\">fast-forward</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-shrink\"></i>\n    <span class=\"anticon-class\">shrink</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-arrow-salt\"></i>\n    <span class=\"anticon-class\">arrow-salt</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-down\"></i>\n    <span class=\"anticon-class\">down</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-up\"></i>\n    <span class=\"anticon-class\">up</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-left\"></i>\n    <span class=\"anticon-class\">left</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-right\"></i>\n    <span class=\"anticon-class\">right</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-caret-down\"></i>\n    <span class=\"anticon-class\">caret-down</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-caret-up\"></i>\n    <span class=\"anticon-class\">caret-up</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-caret-left\"></i>\n    <span class=\"anticon-class\">caret-left</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-caret-right\"></i>\n    <span class=\"anticon-class\">caret-right</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-caret-circle-right\"></i>\n    <span class=\"anticon-class\">caret-circle-right</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-caret-circle-left\"></i>\n    <span class=\"anticon-class\">caret-circle-left</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-caret-circle-o-right\"></i>\n    <span class=\"anticon-class\">caret-circle-o-right</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-caret-circle-o-left\"></i>\n    <span class=\"anticon-class\">caret-circle-o-left</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-circle-right\"></i>\n    <span class=\"anticon-class\">circle-right</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-circle-left\"></i>\n    <span class=\"anticon-class\">circle-left</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-circle-o-right\"></i>\n    <span class=\"anticon-class\">circle-o-right</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-circle-o-left\"></i>\n    <span class=\"anticon-class\">circle-o-left</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-double-right\"></i>\n    <span class=\"anticon-class\">double-right</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-double-left\"></i>\n    <span class=\"anticon-class\">double-left</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-verticle-right\"></i>\n    <span class=\"anticon-class\">verticle-right</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-verticle-left\"></i>\n    <span class=\"anticon-class\">verticle-left</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-forward\"></i>\n    <span class=\"anticon-class\">forward</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-backward\"></i>\n    <span class=\"anticon-class\">backward</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-rollback\"></i>\n    <span class=\"anticon-class\">rollback</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-retweet\"></i>\n    <span class=\"anticon-class\">retweet</span>\n  </li>\n</ul>\n<h3 id=\"-\">二. 提示建议性图标</h3>\n<ul class=\"anticons-list clearfix\">\n  <li>\n    <i class=\"anticon anticon-question\"></i>\n    <span class=\"anticon-class\">question</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-question-circle-o\"></i>\n    <span class=\"anticon-class\">question-circle-o</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-question-circle\"></i>\n    <span class=\"anticon-class\">question-circle</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-plus\"></i>\n    <span class=\"anticon-class\">plus</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-plus-circle-o\"></i>\n    <span class=\"anticon-class\">plus-circle-o</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-plus-circle\"></i>\n    <span class=\"anticon-class\">plus-circle</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-pause\"></i>\n    <span class=\"anticon-class\">pause</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-pause-circle-o\"></i>\n    <span class=\"anticon-class\">pause-circle-o</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-pause-circle\"></i>\n    <span class=\"anticon-class\">pause-circle</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-minus\"></i>\n    <span class=\"anticon-class\">minus</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-minus-circle-o\"></i>\n    <span class=\"anticon-class\">minus-circle-o</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-minus-circle\"></i>\n    <span class=\"anticon-class\">minus-circle</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-info\"></i>\n    <span class=\"anticon-class\">info</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-info-circle-o\"></i>\n    <span class=\"anticon-class\">info-circle-o</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-info-circle\"></i>\n    <span class=\"anticon-class\">info-circle</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-exclamation\"></i>\n    <span class=\"anticon-class\">exclamation</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-exclamation-circle-o\"></i>\n    <span class=\"anticon-class\">exclamation-circle-o</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-exclamation-circle\"></i>\n    <span class=\"anticon-class\">exclamation-circle</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-cross\"></i>\n    <span class=\"anticon-class\">cross</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-cross-circle-o\"></i>\n    <span class=\"anticon-class\">cross-circle-o</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-cross-circle\"></i>\n    <span class=\"anticon-class\">cross-circle</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-check\"></i>\n    <span class=\"anticon-class\">check</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-check-circle-o\"></i>\n    <span class=\"anticon-class\">check-circle-o</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-check-circle\"></i>\n    <span class=\"anticon-class\">check-circle</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-clock-circle-o\"></i>\n    <span class=\"anticon-class\">clock-circle-o</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-clock-circle\"></i>\n    <span class=\"anticon-class\">clock-circle</span>\n  </li>\n</ul>\n<h3 id=\"-\">三. 网站通用图标</h3>\n<ul class=\"anticons-list clearfix\">\n  <li>\n    <i class=\"anticon anticon-lock\"></i>\n    <span class=\"anticon-class\">lock</span>\n  </li>\n    <li>\n    <i class=\"anticon anticon-unlock\"></i>\n    <span class=\"anticon-class\">unlock</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-android\"></i>\n    <span class=\"anticon-class\">android</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-apple\"></i>\n    <span class=\"anticon-class\">apple</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-area-chart\"></i>\n    <span class=\"anticon-class\">area-chart</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-bar-chart\"></i>\n    <span class=\"anticon-class\">bar-chart</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-bars\"></i>\n    <span class=\"anticon-class\">bars</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-book\"></i>\n    <span class=\"anticon-class\">book</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-calendar\"></i>\n    <span class=\"anticon-class\">calendar</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-cloud\"></i>\n    <span class=\"anticon-class\">cloud</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-cloud-download\"></i>\n    <span class=\"anticon-class\">cloud-download</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-code\"></i>\n    <span class=\"anticon-class\">code</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-copy\"></i>\n    <span class=\"anticon-class\">copy</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-credit-card\"></i>\n    <span class=\"anticon-class\">credit-card</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-delete\"></i>\n    <span class=\"anticon-class\">delete</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-desktop\"></i>\n    <span class=\"anticon-class\">desktop</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-download-line\"></i>\n    <span class=\"anticon-class\">download-line</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-edit\"></i>\n    <span class=\"anticon-class\">edit</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-ellipsis\"></i>\n    <span class=\"anticon-class\">ellipsis</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-environment\"></i>\n    <span class=\"anticon-class\">environment</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-file\"></i>\n    <span class=\"anticon-class\">file</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-file-text\"></i>\n    <span class=\"anticon-class\">file-text</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-folder\"></i>\n    <span class=\"anticon-class\">folder</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-folder-open\"></i>\n    <span class=\"anticon-class\">folder-open</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-github\"></i>\n    <span class=\"anticon-class\">github</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-hdd\"></i>\n    <span class=\"anticon-class\">hdd</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-frown\"></i>\n    <span class=\"anticon-class\">frown</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-meh\"></i>\n    <span class=\"anticon-class\">meh</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-inbox\"></i>\n    <span class=\"anticon-class\">inbox</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-laptop\"></i>\n    <span class=\"anticon-class\">laptop</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-appstore\"></i>\n    <span class=\"anticon-class\">appstore</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-line-chart\"></i>\n    <span class=\"anticon-class\">line-chart</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-link\"></i>\n    <span class=\"anticon-class\">link</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-logout\"></i>\n    <span class=\"anticon-class\">logout</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-mail\"></i>\n    <span class=\"anticon-class\">mail</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-menu-fold\"></i>\n    <span class=\"anticon-class\">menu-fold</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-menu-unfold\"></i>\n    <span class=\"anticon-class\">menu-unfold</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-mobile\"></i>\n    <span class=\"anticon-class\">mobile</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-notification\"></i>\n    <span class=\"anticon-class\">notification</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-paper-clip\"></i>\n    <span class=\"anticon-class\">paper-clip</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-picture\"></i>\n    <span class=\"anticon-class\">picture</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-pie-chart\"></i>\n    <span class=\"anticon-class\">pie-chart</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-poweroff\"></i>\n    <span class=\"anticon-class\">poweroff</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-reload\"></i>\n    <span class=\"anticon-class\">reload</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-search\"></i>\n    <span class=\"anticon-class\">search</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-setting\"></i>\n    <span class=\"anticon-class\">setting</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-share-alt\"></i>\n    <span class=\"anticon-class\">share-alt</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-shopping-cart\"></i>\n    <span class=\"anticon-class\">shopping-cart</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-smile\"></i>\n    <span class=\"anticon-class\">smile</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-tablet\"></i>\n    <span class=\"anticon-class\">tablet</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-tag\"></i>\n    <span class=\"anticon-class\">tag</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-tags\"></i>\n    <span class=\"anticon-class\">tags</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-to-top\"></i>\n    <span class=\"anticon-class\">to-top</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-upload\"></i>\n    <span class=\"anticon-class\">upload</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-user\"></i>\n    <span class=\"anticon-class\">user</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-video-camera\"></i>\n    <span class=\"anticon-class\">video-camera</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-windows\"></i>\n    <span class=\"anticon-class\">windows</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-ie\"></i>\n    <span class=\"anticon-class\">ie</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-chrome\"></i>\n    <span class=\"anticon-class\">chrome</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-home\"></i>\n    <span class=\"anticon-class\">home</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-loading\"></i>\n    <span class=\"anticon-class\">loading</span>\n  </li>\n</ul>\n<style>\nul.anticons-list {\n  margin: 20px 0;\n  list-style: none;\n  width: 120%;\n  overflow: hidden;\n}\nul.anticons-list li {\n  float: left;\n  margin: 5px 5px 5px 0;\n  width: 155px;\n  text-align: center;\n  list-style: none;\n  cursor: pointer;\n  height: 110px;\n  color: #5C6B77;\n  transition: all 0.2s ease;\n  position: relative;\n  padding: 0;\n}\nul.anticons-list li:hover,\nul.anticons-list li.zeroclipboard-is-hover {\n  background-color: #4BB8FF;\n  color: #fff;\n  border-radius: 4px;\n}\nul.anticons-list li.copied.zeroclipboard-is-hover {\n  color: rgba(255,255,255,0.2);\n}\nul.anticons-list li:after {\n  position: absolute;\n  top: 10px;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  content: \"Copied!\";\n  text-align: center;\n  line-height: 110px;\n  color: #fff;\n  transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);\n  opacity: 0;\n}\nul.anticons-list li.copied:after {\n  opacity: 1;\n  top: 0;\n}\n.anticon {\n  font-size: 26px;\n  margin: 12px 0 16px;\n}\n.anticon-class {\n  display: block;\n  text-align: center;\n  word-wrap: break-word;\n  transform: scale(0.83);\n  font-family: Consolas;\n}\n</style>\n<p></template></p>\n</div>";

/***/ },
/* 201 */
/***/ function(module, exports) {

	module.exports = "<div class=\"markdown\"><h1 id=\"progress\">Progress</h1>\n<hr>\n<p>展示操作的当前进度。</p>\n<h2 id=\"-\">何时使用</h2>\n<p>在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。</p>\n<ul>\n<li>当一个操作会打断当前界面，或者需要在后台运行，且耗时可能超过2秒时；</li>\n<li>当需要显示一个操作完成的百分比时。</li>\n</ul>\n<h2 id=\"-\">组件演示</h2>\n<div class=\"code-boxes\">\n  <div class=\"code-box code-boxes-col\">\n          <h3>进度条</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-progress-line :percent=\"30\"></v-progress-line>\n    <v-progress-line :percent=\"50\" status=\"active\"></v-progress-line>\n    <v-progress-line :percent=\"70\" status=\"exception\"></v-progress-line>\n    <v-progress-line :percent=\"100\"></v-progress-line>\n    <v-progress-line :percent=\"50\" :show-info=\"false\"></v-progress-line>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-progress-line</span> <span class=\"token attr-name\" >:percent</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>30<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-progress-line</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-progress-line</span> <span class=\"token attr-name\" >:percent</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>50<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >status</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>active<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-progress-line</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-progress-line</span> <span class=\"token attr-name\" >:percent</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>70<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >status</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>exception<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-progress-line</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-progress-line</span> <span class=\"token attr-name\" >:percent</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>100<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-progress-line</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-progress-line</span> <span class=\"token attr-name\" >:percent</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>50<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:show-info</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>false<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-progress-line</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n  <div class=\"code-box code-boxes-col\">\n          <h3>小型进度条</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-progress-line :percent=\"30\"  :stroke-width=\"5\"></v-progress-line>\n    <v-progress-line :percent=\"50\"  :stroke-width=\"5\" status=\"active\"></v-progress-line>\n    <v-progress-line :percent=\"70\"  :stroke-width=\"5\" status=\"exception\"></v-progress-line>\n    <v-progress-line :percent=\"100\" :stroke-width=\"5\"></v-progress-line>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-progress-line</span> <span class=\"token attr-name\" >:percent</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>30<span class=\"token punctuation\" >\"</span></span>  <span class=\"token attr-name\" >:stroke-width</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>5<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-progress-line</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-progress-line</span> <span class=\"token attr-name\" >:percent</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>50<span class=\"token punctuation\" >\"</span></span>  <span class=\"token attr-name\" >:stroke-width</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>5<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >status</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>active<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-progress-line</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-progress-line</span> <span class=\"token attr-name\" >:percent</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>70<span class=\"token punctuation\" >\"</span></span>  <span class=\"token attr-name\" >:stroke-width</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>5<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >status</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>exception<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-progress-line</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-progress-line</span> <span class=\"token attr-name\" >:percent</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>100<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:stroke-width</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>5<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-progress-line</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n  <div class=\"code-box code-boxes-col\">\n          <h3>进度圈</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-progress-circle :percent=\"30\"></v-progress-circle>\n    <v-progress-circle :percent=\"70\" status=\"exception\"></v-progress-circle>\n    <v-progress-circle :percent=\"100\"></v-progress-circle>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-progress-circle</span> <span class=\"token attr-name\" >:percent</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>30<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-progress-circle</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-progress-circle</span> <span class=\"token attr-name\" >:percent</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>70<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >status</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>exception<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-progress-circle</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-progress-circle</span> <span class=\"token attr-name\" >:percent</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>100<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-progress-circle</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n  <div class=\"code-box code-boxes-col\">\n          <h3>小型进度圈</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-progress-circle :percent=\"30\"  :width=\"80\"></v-progress-circle>\n    <v-progress-circle :percent=\"70\"  :width=\"80\" status=\"exception\"></v-progress-circle>\n    <v-progress-circle :percent=\"100\" :width=\"80\"></v-progress-circle>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-progress-circle</span> <span class=\"token attr-name\" >:percent</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>30<span class=\"token punctuation\" >\"</span></span>  <span class=\"token attr-name\" >:width</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>80<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-progress-circle</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-progress-circle</span> <span class=\"token attr-name\" >:percent</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>70<span class=\"token punctuation\" >\"</span></span>  <span class=\"token attr-name\" >:width</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>80<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >status</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>exception<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-progress-circle</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-progress-circle</span> <span class=\"token attr-name\" >:percent</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>100<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:width</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>80<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-progress-circle</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n  <div class=\"code-box code-boxes-col\">\n          <h3>进度圈动态展示</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-progress-circle :percent=\"percent\"></v-progress-circle>\n    <v-button-group>\n      <v-button type=\"ghost\" @click=\"_decline\">\n        <v-icon type=\"minus\"></v-icon>\n      </v-button>\n      <v-button type=\"ghost\" @click=\"_increase\">\n        <v-icon type=\"plus\"></v-icon>\n      </v-button>\n    </v-button-group>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-progress-circle</span> <span class=\"token attr-name\" >:percent</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>percent<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-progress-circle</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button-group</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >@click</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>_decline<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>minus<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-icon</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >@click</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>_increase<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>plus<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-icon</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button-group</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n  <div class=\"code-box code-boxes-col\">\n          <h3>动态展示</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-progress-line :percent=\"percent\"></v-progress-line>\n    <v-button-group>\n      <v-button type=\"ghost\" @click=\"_decline\">\n        <v-icon type=\"minus\"></v-icon>\n      </v-button>\n      <v-button type=\"ghost\" @click=\"_increase\">\n        <v-icon type=\"plus\"></v-icon>\n      </v-button>\n    </v-button-group>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-progress-line</span> <span class=\"token attr-name\" >:percent</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>percent<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-progress-line</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button-group</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >@click</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>_decline<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>minus<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-icon</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >@click</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>_increase<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>plus<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-icon</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button-group</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n</div>\n<h2 id=\"api\">API</h2>\n<h2 id=\"progress-bar\">Progress Bar</h2>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>percent</td>\n<td>百分比</td>\n<td>number</td>\n<td>0</td>\n</tr>\n<tr>\n<td>status</td>\n<td>状态，有两个值normal、exception、active三种状态</td>\n<td>string</td>\n<td>normal</td>\n</tr>\n<tr>\n<td>strokeWidth</td>\n<td>进度条线的宽度，单位是px</td>\n<td>number</td>\n<td>1</td>\n</tr>\n<tr>\n<td>showInfo</td>\n<td>是否显示进度数值和状态图标</td>\n<td>bool</td>\n<td>true</td>\n</tr>\n</tbody>\n</table>\n<h3 id=\"progress-circle\">Progress Circle</h3>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>percent</td>\n<td>百分比</td>\n<td>number</td>\n<td>0</td>\n</tr>\n<tr>\n<td>status</td>\n<td>状态，有两个值normal、exception</td>\n<td>string</td>\n<td>normal</td>\n</tr>\n<tr>\n<td>strokeWidth</td>\n<td>进度条线的宽度，单位是进度条画布宽度的百分比</td>\n<td>number</td>\n<td>1</td>\n</tr>\n<tr>\n<td>width</td>\n<td>必填，进度条画布宽度，单位px。这里没有提供height属性设置，Line型高度就是strokeWidth，Circle型高度等于width</td>\n<td>number</td>\n<td>null</td>\n</tr>\n</tbody>\n</table>\n</div>";

/***/ },
/* 202 */
/***/ function(module, exports) {

	module.exports = "<div class=\"markdown\"><h1 id=\"radio\">Radio</h1>\n<hr>\n<p>单选框。</p>\n<h2 id=\"-\">何时使用</h2>\n<ul>\n<li>用于在多个备选项中选中单个状态。</li>\n<li>和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。</li>\n</ul>\n<h2 id=\"-\">组件演示</h2>\n<div class=\"code-boxes\">\n  <div class=\"code-box code-boxes-col\">\n          <h3>最基本的用法</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-radio :on-change=\"_change\"><span>Radio</span></v-radio>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-radio</span> <span class=\"token attr-name\" >:on-change</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>_change<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span><span class=\"token punctuation\" >></span></span>Radio<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-radio</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n  <div class=\"code-box code-boxes-col\">\n          <h3>不可用</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-radio :default-checked=\"false\" :disabled=\"disabled\"><span>不可用</span></v-radio>\n    <br>\n    <v-radio :default-checked=\"true\" :disabled=\"disabled\"><span>不可用</span></v-radio>\n    <br>\n    <br>\n    <v-button :type=\"'primary'\" @click=\"_toggleDisabled\">Toggle disabled</v-button>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-radio</span> <span class=\"token attr-name\" >:default-checked</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>false<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:disabled</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>disabled<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span><span class=\"token punctuation\" >></span></span>不可用<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-radio</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>br</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-radio</span> <span class=\"token attr-name\" >:default-checked</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>true<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:disabled</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>disabled<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span><span class=\"token punctuation\" >></span></span>不可用<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-radio</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>br</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>br</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >:type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >'</span>primary<span class=\"token punctuation\" >'</span><span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >@click</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>_toggleDisabled<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Toggle disabled<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n  <div class=\"code-box code-boxes-col\">\n          <h3>一组互斥的Radio配合使用</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-radio-group\n      :on-change=\"_onGroupChange\"\n      :value=\"groupValue\"\n      :radios=\"[{value: 'a', name: 'A'},{value: 'b', name: 'B'},{value: 'c', name: 'C'},{value: 'd', name: 'D'}]\">\n    </v-radio-group>\n    <br>\n    <br>\n    <p>你选中的是： <span>{{groupValue}}</span></p>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n&lt;v-radio-group\n  :on-change=\"_onGroupChange\"\n  :value=\"groupValue\"\n  :radios=\"[{value: 'a', name: 'A'},{value: 'b', name: 'B'},{value: 'c', name: 'C'},{value: 'd', name: 'D'}]\">\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-radio-group</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>br</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>br</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>p</span><span class=\"token punctuation\" >></span></span>你选中的是： <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span><span class=\"token punctuation\" >></span></span>{{groupValue}}<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>p</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n  <div class=\"code-box code-boxes-col\">\n          <h3>按钮样式的单选组合</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-radio-group\n      :type=\"'button'\"\n      :on-change=\"_onCityChange\"\n      :default-value=\"'hangzhou'\"\n      :radios=\"[{value: 'hangzhou', name: '杭州'},{value: 'shanghai', name: '上海'},{value: 'beijing', name: '北京'},{value: 'chengdu', name: '成都'}]\">\n    </v-radio-group>\n    <div style=\"margin-top: 20px\" v-if=\"cityName\">\n      <span>你选中的是： </span><span>{{cityName}}</span>\n    </div>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n&lt;v-radio-group\n  :type=\"'button'\"\n  :on-change=\"_onCityChange\"\n  :default-value=\"'hangzhou'\"\n  :radios=\"[{value: 'hangzhou', name: '杭州'},{value: 'shanghai', name: '上海'},{value: 'beijing', name: '北京'},{value: 'chengdu', name: '成都'}]\">\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-radio-group</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token style-attr language-css\" ><span class=\"token attr-name\" > <span class=\"token attr-name\" >style</span></span><span class=\"token punctuation\" >=\"</span><span class=\"token attr-value\" ><span class=\"token property\" >margin-top</span><span class=\"token punctuation\" >:</span> 20px</span><span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >v-if</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>cityName<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span><span class=\"token punctuation\" >></span></span>你选中的是： <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span><span class=\"token punctuation\" >></span></span>{{cityName}}<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n</div>\n<h2 id=\"api\">API</h2>\n<h3 id=\"radio\">Radio</h3>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>checked</td>\n<td>指定当前是否选中</td>\n<td>Boolean</td>\n<td></td>\n<td>false</td>\n</tr>\n<tr>\n<td>defaultChecked</td>\n<td>初始是否选中</td>\n<td>Boolean</td>\n<td></td>\n<td>false</td>\n</tr>\n<tr>\n<td>value</td>\n<td>根据 value 进行比较，判断是否选中</td>\n<td>String</td>\n<td></td>\n<td>无</td>\n</tr>\n</tbody>\n</table>\n<h3 id=\"radiogroup\">RadioGroup</h3>\n<p>单选框组合，用于包裹一组 <code>Radio</code>。</p>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>onChange</td>\n<td>选项变化时的回调函数</td>\n<td>Function(e:Event)</td>\n<td>无</td>\n<td>无</td>\n</tr>\n<tr>\n<td>value</td>\n<td>用于设置当前选中的值</td>\n<td>String</td>\n<td>无</td>\n<td>无</td>\n</tr>\n<tr>\n<td>defaultValue</td>\n<td>默认选中的值</td>\n<td>String</td>\n<td>无</td>\n<td>无</td>\n</tr>\n</tbody>\n</table>\n</div>";

/***/ },
/* 203 */
/***/ function(module, exports) {

	module.exports = "<div class=\"markdown\"><h1 id=\"spin\">Spin</h1>\n<hr>\n<p>用于页面和区块的loading状态。</p>\n<h2 id=\"-\">何时使用</h2>\n<p>页面局部处于等待数据渲染时。</p>\n<h2 id=\"-\">组件演示</h2>\n<div class=\"code-boxes\">\n  <div class=\"code-box code-boxes-col\">\n          <h3>基本用法</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-spin></v-spin>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-spin</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-spin</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n  <div class=\"code-box code-boxes-col\">\n          <h3>容器</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <div class=\"spin-demo2-container\">\n      <v-spin></v-spin>\n    </div>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>spin-demo2-container<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-spin</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-spin</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n  <div class=\"code-box code-boxes-col\">\n          <h3>卡片加载中</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-spin size=\"large\" :hide=\"!loading\">\n      <div style=\"text-align: center;\">\n        <img src=\"https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg\" width=\"200px\" height=\"200px\" />\n        <div>我是一张图片</div>\n      </div>\n    </v-spin>\n    <br>\n    <div style=\"text-align: center\">\n      <v-button type=\"primary\" @click=\"_enterLoading\">点击切换</v-button>\n    </div>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-spin</span> <span class=\"token attr-name\" >size</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>large<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:hide</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>!loading<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token style-attr language-css\" ><span class=\"token attr-name\" > <span class=\"token attr-name\" >style</span></span><span class=\"token punctuation\" >=\"</span><span class=\"token attr-value\" ><span class=\"token property\" >text-align</span><span class=\"token punctuation\" >:</span> center<span class=\"token punctuation\" >;</span></span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>img</span> <span class=\"token attr-name\" >src</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >width</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>200px<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >height</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>200px<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>我是一张图片<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-spin</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>br</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token style-attr language-css\" ><span class=\"token attr-name\" > <span class=\"token attr-name\" >style</span></span><span class=\"token punctuation\" >=\"</span><span class=\"token attr-value\" ><span class=\"token property\" >text-align</span><span class=\"token punctuation\" >:</span> center</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >@click</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>_enterLoading<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>点击切换<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n  <div class=\"code-box code-boxes-col\">\n          <h3>各种大小</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-spin size=\"small\"></v-spin>\n    <br>\n    <v-spin></v-spin>\n    <br>\n    <v-spin size=\"large\"></v-spin>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-spin</span> <span class=\"token attr-name\" >size</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>small<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-spin</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>br</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-spin</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-spin</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>br</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-spin</span> <span class=\"token attr-name\" >size</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>large<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-spin</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n</div>\n<h2 id=\"api\">API</h2>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>size</td>\n<td>enum</td>\n<td>default</td>\n<td>spin组件中点的大小，可选值为small default large</td>\n</tr>\n</tbody>\n</table>\n</div>";

/***/ },
/* 204 */
/***/ function(module, exports) {

	module.exports = "<div class=\"markdown\"><h1 id=\"steps\">Steps</h1>\n<hr>\n<p>引导用户按照流程完成任务的导航条。</p>\n<h2 id=\"-\">何时使用</h2>\n<p>当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务。</p>\n<h2 id=\"-\">组件演示</h2>\n<div class=\"code-boxes\">\n  <div class=\"code-box code-boxes-col\">\n          <h3>简单的步骤条</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-steps :current=\"1\">\n      <v-step title=\"已完成\" description=\"这里是多信息的描述啊\"></v-step>\n      <v-step title=\"进行中\" description=\"这里是多信息的耶哦耶哦哦耶哦耶\"></v-step>\n      <v-step title=\"有一个待运行\" description=\"描述啊描述啊\"></v-step>\n      <v-step title=\"待运行\" description=\"这里是多信息的描述啊\"></v-step>\n    </v-steps>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-steps</span> <span class=\"token attr-name\" >:current</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>1<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-step</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>已完成<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >description</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>这里是多信息的描述啊<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-step</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-step</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>进行中<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >description</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>这里是多信息的耶哦耶哦哦耶哦耶<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-step</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-step</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>有一个待运行<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >description</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>描述啊描述啊<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-step</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-step</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>待运行<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >description</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>这里是多信息的描述啊<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-step</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-steps</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n  <div class=\"code-box code-boxes-col\">\n          <h3>迷你版</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-steps size=\"small\" :current=\"1\">\n      <v-step title=\"已完成\" status=\"finish\"></v-step>\n      <v-step title=\"进行中\" status=\"process\"></v-step>\n      <v-step title=\"待运行\" status=\"wait\"></v-step>\n      <v-step title=\"待运行\" status=\"wait\"></v-step>\n    </v-steps>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-steps</span> <span class=\"token attr-name\" >size</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>small<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:current</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>1<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-step</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>已完成<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >status</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>finish<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-step</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-step</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>进行中<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >status</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>process<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-step</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-step</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>待运行<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >status</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>wait<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-step</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-step</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>待运行<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >status</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>wait<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-step</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-steps</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n  <div class=\"code-box code-boxes-col\">\n          <h3>带ICON图标的步骤条</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-steps>\n      <v-step title=\"步骤1\" status=\"finish\" icon=\"cloud\"></v-step>\n      <v-step title=\"步骤2\" status=\"process\" icon=\"apple\"></v-step>\n      <v-step title=\"步骤3\" status=\"wait\" icon=\"github\"></v-step>\n    </v-steps>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-steps</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-step</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>步骤1<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >status</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>finish<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >icon</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>cloud<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-step</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-step</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>步骤2<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >status</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>process<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >icon</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>apple<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-step</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-step</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>步骤3<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >status</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>wait<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >icon</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>github<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-step</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-steps</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n  <div class=\"code-box code-boxes-col\">\n          <h3>切换到下一步</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <div>当前正在执行第 {{currentStep + 1}} 步</div>\n    <br>\n    <v-steps :current=\"currentStep\">\n      <v-step title=\"步骤1\"></v-step>\n      <v-step title=\"步骤2\"></v-step>\n      <v-step title=\"步骤3\"></v-step>\n    </v-steps>\n    <br>\n    <div>\n      <v-button @click=\"_next\">下一步</v-button>\n    </div>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>当前正在执行第 {{currentStep + 1}} 步<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>br</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-steps</span> <span class=\"token attr-name\" >:current</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>currentStep<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-step</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>步骤1<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-step</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-step</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>步骤2<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-step</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-step</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>步骤3<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-step</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-steps</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>br</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >@click</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>_next<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>下一步<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n  <div class=\"code-box code-boxes-col\">\n          <h3>竖直方向的步骤条</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-steps direction=\"vertical\" :current=\"1\">\n      <v-step title=\"已完成\" description=\"这里是多信息的描述啊\"></v-step>\n      <v-step title=\"进行中\" description=\"这里是多信息的描述啊\"></v-step>\n      <v-step title=\"待运行\" description=\"这里是多信息的描述啊\"></v-step>\n      <v-step title=\"又一个待运行\" description=\"这里是多信息的描述啊\"></v-step>\n    </v-steps>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-steps</span> <span class=\"token attr-name\" >direction</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>vertical<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:current</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>1<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-step</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>已完成<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >description</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>这里是多信息的描述啊<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-step</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-step</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>进行中<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >description</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>这里是多信息的描述啊<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-step</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-step</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>待运行<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >description</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>这里是多信息的描述啊<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-step</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-step</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>又一个待运行<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >description</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>这里是多信息的描述啊<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-step</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-steps</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n  <div class=\"code-box code-boxes-col\">\n          <h3>竖直方向的小型步骤条</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-steps size='small' direction=\"vertical\" :current=\"1\">\n      <v-step title=\"已完成\" description=\"这里是多信息的描述啊\"></v-step>\n      <v-step title=\"进行中\" description=\"这里是多信息的描述啊\"></v-step>\n      <v-step title=\"待运行\" description=\"这里是多信息的描述啊\"></v-step>\n    </v-steps>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-steps</span> <span class=\"token attr-name\" >size</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >'</span>small<span class=\"token punctuation\" >'</span></span> <span class=\"token attr-name\" >direction</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>vertical<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:current</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>1<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-step</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>已完成<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >description</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>这里是多信息的描述啊<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-step</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-step</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>进行中<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >description</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>这里是多信息的描述啊<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-step</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-step</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>待运行<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >description</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>这里是多信息的描述啊<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-step</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-steps</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n  <div class=\"code-box code-boxes-col\">\n          <h3>自定义状态</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-steps>\n      <v-step title=\"已完成\" status=\"finish\" description=\"这里是多信息的描述啊\"></v-step>\n      <v-step title=\"进行中\" status=\"process\" description=\"这里是多信息的描述啊\"></v-step>\n      <v-step title=\"待运行\" status=\"wait\" description=\"这里是多信息的描述啊\"></v-step>\n      <v-step title=\"又一个待运行\" status=\"wait\" description=\"这里是多信息的描述啊\"></v-step>\n    </v-steps>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-steps</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-step</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>已完成<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >status</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>finish<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >description</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>这里是多信息的描述啊<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-step</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-step</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>进行中<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >status</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>process<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >description</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>这里是多信息的描述啊<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-step</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-step</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>待运行<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >status</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>wait<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >description</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>这里是多信息的描述啊<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-step</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-step</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>又一个待运行<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >status</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>wait<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >description</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>这里是多信息的描述啊<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-step</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-steps</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n</div>\n<h2 id=\"api\">API</h2>\n<pre><code class=\"lang-js\">&lt;v-steps&gt;\n  &lt;v-step title=&quot;第一步&quot;&gt;&lt;/v-step&gt;\n  &lt;v-step title=&quot;第二步&quot;&gt;&lt;/v-step&gt;\n  &lt;v-step title=&quot;第三步&quot;&gt;&lt;/v-step&gt;\n&lt;/v-steps&gt;\n</code></pre>\n<h3 id=\"steps\">Steps</h3>\n<p>整体步骤条。</p>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>current</td>\n<td>可选参数，指定当前处理正在执行状态的步骤，从0开始记数。在子Step元素中，可以通过status属性覆盖状态。</td>\n<td>number</td>\n<td>无</td>\n<td>0</td>\n</tr>\n<tr>\n<td>size</td>\n<td>可选参数，指定大小（目前只支持普通和迷你两种大小）。</td>\n<td>string</td>\n<td>small, default</td>\n<td>default</td>\n</tr>\n<tr>\n<td>direction</td>\n<td>可选参数，指定步骤条方向（目前支持水平和竖直两种方向，默认水平方向）。</td>\n<td>string</td>\n<td>vertical</td>\n<td>无</td>\n</tr>\n<tr>\n<td>maxDescriptionWidth</td>\n<td>可选参数，指定步骤的详细描述文字的最大宽度。</td>\n<td>number</td>\n<td>无</td>\n<td>100</td>\n</tr>\n</tbody>\n</table>\n<h3 id=\"steps-step\">Steps.Step</h3>\n<p>步骤条内的每一个步。</p>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>status</td>\n<td>可选参数，指定状态。当不配置该属性时，会使用父Steps元素的current来自动指定状态。</td>\n<td>string</td>\n<td>wait, process, finish</td>\n<td>wait</td>\n</tr>\n<tr>\n<td>title</td>\n<td>必要参数，标题。</td>\n<td>string/jsx</td>\n<td>无</td>\n<td>无</td>\n</tr>\n<tr>\n<td>description</td>\n<td>可选参数，步骤的详情描述。</td>\n<td>string/jsx</td>\n<td>无</td>\n<td>空</td>\n</tr>\n<tr>\n<td>icon</td>\n<td>可选参数，步骤的Icon。如果不指定，则使用默认的样式。</td>\n<td>string/jsx</td>\n<td>无</td>\n<td>空</td>\n</tr>\n</tbody>\n</table>\n</div>";

/***/ },
/* 205 */
/***/ function(module, exports) {

	module.exports = "<div class=\"markdown\"><h1 id=\"switch\">Switch</h1>\n<hr>\n<p>开关选择器。</p>\n<h2 id=\"-\">何时使用</h2>\n<ul>\n<li>需要表示开关状态/两种状态之间的切换时；</li>\n<li>和 <code>checkbox</code>的区别是，切换 <code>switch</code> 会直接触发状态改变，而 <code>checkbox</code> 一般用于状态标记，需要和提交操作配合。</li>\n</ul>\n<h2 id=\"-\">组件演示</h2>\n<div class=\"code-boxes\">\n  <div class=\"code-box code-boxes-col\">\n          <h3>最简单的用法</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-switch :on-change=\"_change\"></v-switch>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-switch</span> <span class=\"token attr-name\" >:on-change</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>_change<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-switch</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n  <div class=\"code-box code-boxes-col\">\n          <h3>不可用</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-switch :disabled=\"disabled\"></v-switch>\n    <br>\n    <br>\n    <v-button :type=\"'primary'\" @click=\"_toogle\">Toggle disabled</v-button>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-switch</span> <span class=\"token attr-name\" >:disabled</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>disabled<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-switch</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>br</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>br</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >:type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >'</span>primary<span class=\"token punctuation\" >'</span><span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >@click</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>_toogle<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Toggle disabled<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n  <div class=\"code-box code-boxes-col\">\n          <h3>带文字和图标</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-switch :disabled=\"disabled\">\n      <span slot=\"checkedChildren\">开</span>\n      <span slot=\"unCheckedChildren\">关</span>\n    </v-switch>\n    <v-switch :disabled=\"disabled\">\n      <span slot=\"checkedChildren\">\n        <i class=\"anticon anticon-check\"></i>\n      </span>\n      <span slot=\"unCheckedChildren\">\n        <i class=\"anticon anticon-cross\"></i>\n      </span>\n    </v-switch>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-switch</span> <span class=\"token attr-name\" >:disabled</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>disabled<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span> <span class=\"token attr-name\" >slot</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>checkedChildren<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>开<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span> <span class=\"token attr-name\" >slot</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>unCheckedChildren<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>关<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-switch</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-switch</span> <span class=\"token attr-name\" >:disabled</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>disabled<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span> <span class=\"token attr-name\" >slot</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>checkedChildren<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>i</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>anticon anticon-check<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>i</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span> <span class=\"token attr-name\" >slot</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>unCheckedChildren<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>i</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>anticon anticon-cross<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>i</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-switch</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n</div>\n<h2 id=\"api\">API</h2>\n<h3 id=\"switch\">Switch</h3>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>checked</td>\n<td>指定当前是否选中</td>\n<td>boolean</td>\n<td></td>\n<td>false</td>\n</tr>\n<tr>\n<td>defaultChecked</td>\n<td>初始是否选中</td>\n<td>boolean</td>\n<td></td>\n<td>false</td>\n</tr>\n<tr>\n<td>onChange</td>\n<td>变化时回调函数</td>\n<td>Function(checked:boolean)</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>slot::checkedChildren</td>\n<td>选中时的内容</td>\n<td>slot node</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>slot::unCheckedChildren</td>\n<td>非选中时的内容</td>\n<td>slot node</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n</div>";

/***/ },
/* 206 */
/***/ function(module, exports) {

	module.exports = "<div class=\"markdown\"><h1 id=\"table\">Table</h1>\n<hr>\n<p>展示行列数据。</p>\n<h2 id=\"-\">何时使用</h2>\n<ul>\n<li>当有大量结构化的数据需要展现时；</li>\n<li>当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时。</li>\n</ul>\n<h2 id=\"-\">如何使用</h2>\n<p>Table 有两种模式，本地数据和远程数据模式。</p>\n<p><strong>本地数据模式</strong>是指数据一次性载入内存，纯前端进行分页、筛选、排序等功能。</p>\n<p>通过指定表格的数据源 <code>dataSource</code> 为一个数据数组。</p>\n<p><strong>远程数据模式</strong>是更常见的业务场景，是一次只从服务端读取一页的数据放在前端，执行筛选、排序、切换页码等操作时均向后台发送请求，后台返回当页的数据和相关分页信息。</p>\n<p>通过指定表格的数据源 <code>dataSource</code> 为一个 DataSource 的实例如下。</p>\n<h2 id=\"-\">组件演示</h2>\n<div>\n  <v-table :columns=\"columns\" :data-source=\"dataSource\"></v-table>\n</div>\n<h2 id=\"api\">API</h2>\n<h3 id=\"table\">Table</h3>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>rowSelection</td>\n<td>列表项是否可选择</td>\n<td>Object</td>\n<td></td>\n<td>false</td>\n</tr>\n<tr>\n<td>pagination</td>\n<td>分页器</td>\n<td>Object</td>\n<td>配置项参考 <a href=\"/components/pagination\">pagination</a>，设为 false 时不显示分页</td>\n<td></td>\n</tr>\n<tr>\n<td>size</td>\n<td>正常或迷你类型</td>\n<td>String</td>\n<td><code>normal</code> or <code>small</code></td>\n<td>normal</td>\n</tr>\n<tr>\n<td>dataSource</td>\n<td>数据源，可以为数组（本地模式）或一个数据源描述对象（远程模式）</td>\n<td>Array or Object</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>columns</td>\n<td>表格列的配置描述，具体项见下表</td>\n<td>Array</td>\n<td></td>\n<td>无</td>\n</tr>\n<tr>\n<td>rowKey</td>\n<td>表格列 key 的取值</td>\n<td>Function(recode, index):string</td>\n<td></td>\n<td>record.key</td>\n</tr>\n<tr>\n<td>expandIconAsCell</td>\n<td>设置展开 Icon 是否单独一列</td>\n<td>Boolean</td>\n<td></td>\n<td>true</td>\n</tr>\n<tr>\n<td>onChange</td>\n<td>分页、排序、筛选变化时触发</td>\n<td>Function(pagination, filters, sorter)</td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<h3 id=\"column\">Column</h3>\n<p>列描述数据对象，是 columns 中的一项。</p>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>title</td>\n<td>列头显示文字</td>\n<td>String or React.Element</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>dataIndex</td>\n<td>列数据在 data 中对应的 key</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>key</td>\n<td>React 需要的 key</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>render</td>\n<td>生成复杂数据的渲染函数，参数分别为当前列的值，当前列数据，列索引</td>\n<td>Function(text, record, index) {}</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>filters</td>\n<td>表头的筛选菜单项</td>\n<td>Array</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>onFilter</td>\n<td>本地模式下，确定筛选的运行函数</td>\n<td>Function</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>sorter</td>\n<td>排序函数，本地模式下为一个函数，远程模式下为布尔值</td>\n<td>Function or Boolean</td>\n<td></td>\n<td>无</td>\n</tr>\n<tr>\n<td>width</td>\n<td>列宽度</td>\n<td>String or Number</td>\n<td></td>\n<td>无</td>\n</tr>\n</tbody>\n</table>\n<h3 id=\"datasource\">dataSource</h3>\n<p>远程数据源配置对象。</p>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>url</td>\n<td>数据源地址</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>resolve</td>\n<td>获得数据的解析函数，接收参数为远程数据返回的 result</td>\n<td>Function</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>getPagination</td>\n<td>和后台接口返回的分页数据进行适配的函数，返回值会传给表格中的分页器</td>\n<td>Function</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>getParams</td>\n<td>和后台接口接收的参数进行适配，返回值会作为请求的参数发送</td>\n<td>Function</td>\n<td></td>\n<td>无</td>\n</tr>\n</tbody>\n</table>\n</div>";

/***/ },
/* 207 */
/***/ function(module, exports) {

	module.exports = "<div class=\"markdown\"><h1 id=\"tag\">Tag</h1>\n<hr>\n<p>进行标记和分类的小标签。</p>\n<h2 id=\"-\">何时使用</h2>\n<ul>\n<li>用于标记事物的属性和维度。</li>\n<li>进行分类。</li>\n</ul>\n<h2 id=\"-\">组件演示</h2>\n<div class=\"code-boxes\">\n  <div class=\"code-box code-boxes-col\">\n          <h3>基本</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-tag>标签一</v-tag>\n    <v-tag>标签二</v-tag>\n    <v-tag closable :on-close=\"_onClose\">标签三</v-tag>\n    <v-tag href=\"http://www.baidu.com\">标签四 (链接)</v-tag>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-tag</span><span class=\"token punctuation\" >></span></span>标签一<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-tag</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-tag</span><span class=\"token punctuation\" >></span></span>标签二<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-tag</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-tag</span> <span class=\"token attr-name\" >closable</span> <span class=\"token attr-name\" >:on-close</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>_onClose<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>标签三<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-tag</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-tag</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>http://www.baidu.com<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>标签四 (链接)<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-tag</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n  <div class=\"code-box code-boxes-col\">\n          <h3>四种颜色的类型</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-tag closable color=\"blue\">蓝色</v-tag>\n    <v-tag closable color=\"green\">绿色</v-tag>\n    <v-tag closable color=\"yellow\">黄色</v-tag>\n    <v-tag closable color=\"red\">红色</v-tag>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-tag</span> <span class=\"token attr-name\" >closable</span> <span class=\"token attr-name\" >color</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>blue<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>蓝色<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-tag</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-tag</span> <span class=\"token attr-name\" >closable</span> <span class=\"token attr-name\" >color</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>green<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>绿色<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-tag</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-tag</span> <span class=\"token attr-name\" >closable</span> <span class=\"token attr-name\" >color</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>yellow<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>黄色<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-tag</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-tag</span> <span class=\"token attr-name\" >closable</span> <span class=\"token attr-name\" >color</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>red<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>红色<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-tag</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n</div>\n<h2 id=\"api\">API</h2>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>href</td>\n<td>链接的地址，会传给 a 标签</td>\n<td>string</td>\n<td></td>\n<td>false</td>\n</tr>\n<tr>\n<td>closable</td>\n<td>标签是否可以关闭</td>\n<td>boolean</td>\n<td></td>\n<td>false</td>\n</tr>\n<tr>\n<td>on-close</td>\n<td>组合时根据此项判定checked</td>\n<td>function</td>\n<td></td>\n<td>无</td>\n</tr>\n<tr>\n<td>color</td>\n<td>标签的色彩</td>\n<td>string</td>\n<td>blue green yellow red</td>\n<td>无</td>\n</tr>\n</tbody>\n</table>\n</div>";

/***/ },
/* 208 */
/***/ function(module, exports) {

	module.exports = "<div class=\"markdown\"><h1 id=\"upload\">Upload</h1>\n<hr>\n<p>文件选择上传和拖拽上传控件。</p>\n<h2 id=\"-\">何时使用</h2>\n<p>上传是将信息（网页、文字、图片、视频等）通过网页或者上传工具发布到远程服务器上的过程。</p>\n<ul>\n<li>当需要上传一个或一些文件时。</li>\n<li>当需要展现上传的进度时。</li>\n<li>当需要使用拖拽交互时。</li>\n</ul>\n<h2 id=\"-\">组件演示</h2>\n<div class=\"code-boxes\">\n  <div class=\"code-box code-boxes-col\">\n          <h3>点击上传</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-upload :name=\"name\" :action=\"action\" :on-change=\"onChange\">\n      <v-button type=\"ghost\">\n        <v-icon type=\"upload\"></v-icon> 点击上传\n      </v-button>\n    </v-upload>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-upload</span> <span class=\"token attr-name\" >:name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>name<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:action</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>action<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:on-change</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>onChange<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>upload<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-icon</span><span class=\"token punctuation\" >></span></span> 点击上传\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-upload</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n  <div class=\"code-box code-boxes-col\">\n          <h3>传入已上传的文件</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-upload :name=\"name\" :action=\"action\" :default-file-list=\"defaultFileList\" :on-change=\"onChange\">\n      <v-button type=\"ghost\">\n        <v-icon type=\"upload\"></v-icon> 点击上传\n      </v-button>\n    </v-upload>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-upload</span> <span class=\"token attr-name\" >:name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>name<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:action</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>action<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:default-file-list</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>defaultFileList<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:on-change</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>onChange<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>upload<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-icon</span><span class=\"token punctuation\" >></span></span> 点击上传\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-upload</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n  <div class=\"code-box code-boxes-col\">\n          <h3>拖拽上传1</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-upload :name=\"name\" :action=\"action\" type=\"drag\" :on-change=\"onChange\">\n      <p class=\"ant-upload-drag-icon\">\n        <v-icon type=\"inbox\"></v-icon>\n      </p>\n      <p class=\"ant-upload-text\">点击或将文件拖拽到此区域上传</p>\n      <p class=\"ant-upload-hint\">支持单个或批量上传，严禁上传公司内部资料及其他违禁文件</p>\n    </v-upload>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-upload</span> <span class=\"token attr-name\" >:name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>name<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:action</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>action<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>drag<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:on-change</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>onChange<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>p</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ant-upload-drag-icon<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>inbox<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-icon</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>p</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>p</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ant-upload-text<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>点击或将文件拖拽到此区域上传<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>p</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>p</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ant-upload-hint<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>支持单个或批量上传，严禁上传公司内部资料及其他违禁文件<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>p</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-upload</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n  <div class=\"code-box code-boxes-col\">\n          <h3>拖拽上传2</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <div style=\"width: 246px; height: 146px\">\n      <v-upload :name=\"name\" :action=\"action\" type=\"drag\" :on-change=\"onChange\">\n        <v-icon type=\"plus\"></v-icon>\n      </v-upload>\n    </div>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token style-attr language-css\" ><span class=\"token attr-name\" > <span class=\"token attr-name\" >style</span></span><span class=\"token punctuation\" >=\"</span><span class=\"token attr-value\" ><span class=\"token property\" >width</span><span class=\"token punctuation\" >:</span> 246px<span class=\"token punctuation\" >;</span> <span class=\"token property\" >height</span><span class=\"token punctuation\" >:</span> 146px</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-upload</span> <span class=\"token attr-name\" >:name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>name<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:action</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>action<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>drag<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:on-change</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>onChange<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>plus<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-icon</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-upload</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n  <div class=\"code-box code-boxes-col\">\n          <h3>多文件选择</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-upload :name=\"name\" :action=\"action\" :multiple=\"true\" :on-change=\"onChange\">\n      <v-button type=\"ghost\">\n        <v-icon type=\"upload\"></v-icon> 点击上传\n      </v-button>\n    </v-upload>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-upload</span> <span class=\"token attr-name\" >:name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>name<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:action</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>action<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:multiple</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>true<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:on-change</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>onChange<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>upload<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-icon</span><span class=\"token punctuation\" >></span></span> 点击上传\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-upload</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n</div>\n<h2 id=\"api\">API</h2>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>name</td>\n<td>可选参数, 上传的文件</td>\n<td>String</td>\n<td>file</td>\n</tr>\n<tr>\n<td>action</td>\n<td>必选参数, 上传的地址</td>\n<td>String</td>\n<td>无</td>\n</tr>\n<tr>\n<td>data</td>\n<td>可选参数, 上传所需参数</td>\n<td>Object</td>\n<td>无</td>\n</tr>\n<tr>\n<td>multiple</td>\n<td>可选参数, 是否支持多选文件，支持 <code>ie10+</code></td>\n<td>Boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>accept</td>\n<td>可选参数, 接受上传的文件类型, 详见 input accept Attribute</td>\n<td>String</td>\n<td>无</td>\n</tr>\n<tr>\n<td>onChange</td>\n<td>可选参数, 上传文件改变时的状态，详见 onChange</td>\n<td>Function</td>\n<td>无</td>\n</tr>\n</tbody>\n</table>\n<h3 id=\"onchange\">onChange</h3>\n<p>文件状态改变的回调，返回为：</p>\n<pre><code class=\"lang-js\">{\n  file: { ... },\n  fileList: [ ... ],\n  event: { ... }\n}\n</code></pre>\n<ol>\n<li><p><code>file</code> 当前操作的文件对象。</p>\n<pre><code class=\"lang-js\">{\n   uid: &#39;uid&#39;,      // 文件唯一标识，建议设置为负数，防止和内部产生的 id 冲突\n   name: &#39;xx.png&#39;   // 文件名\n   status: &#39;done&#39;,  // 状态有：uploading done error removed\n   response: &#39;{&quot;status&quot;:&quot;success&quot;}&#39;  // 服务端响应内容\n}\n</code></pre>\n<p>如果上传控件是 multiple 时，此参数将为一个对象数组 <code>[file, ...]</code>。</p>\n</li>\n<li><p><code>fileList</code> 当前的文件列表。</p>\n</li>\n<li><code>event</code> 上传中的服务端响应内容，包含了上传进度等信息，高级浏览器支持。</li>\n</ol>\n<h2 id=\"-\">显示下载链接</h2>\n<p>请使用 fileList 属性设置数组项的 url 属性进行展示控制。</p>\n<h2 id=\"ie-note\">IE note</h2>\n<ul>\n<li><a href=\"https://github.com/react-component/upload#ie89-note\">https://github.com/react-component/upload#ie89-note</a></li>\n</ul>\n</div>";

/***/ },
/* 209 */
/***/ function(module, exports) {

	module.exports = "<div class=\"markdown\"><h1 id=\"-\">下载</h1>\n<hr>\n<p>可以使用 npm 进行安装或直接下载文件。</p>\n<h2 id=\"-npm-\">从 npm 安装</h2>\n<p><strong>我们推荐使用 npm 的方式进行开发</strong>，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。</p>\n<p>可以通过 npm 直接安装到本地，使用 <code>require</code> 或 <code>import</code> 进行引用。</p>\n<p><a href=\"https://www.npmjs.org/package/antd\"><img src=\"http://img.shields.io/npm/v/antd.svg?style=flat-square\" alt=\"npm package\"></a></p>\n<pre><code class=\"lang-bash\">$ npm install vue-antd --save\n</code></pre>\n<p>安装最新的开发版本：</p>\n<p><a href=\"https://www.npmjs.org/package/antd\"><img src=\"https://cnpmjs.org/badge/v/antd.svg?&amp;tag=beta&amp;subject=npm\" alt=\"\"></a></p>\n<pre><code class=\"lang-bash\">$ npm install vue-antd@beta --save\n</code></pre>\n<pre><code class=\"lang-json\">&quot;scripts&quot;: {\n  &quot;dev&quot;: &quot;antd server&quot;,\n  &quot;build&quot;: &quot;antd build&quot;\n}\n</code></pre>\n<style>\n.versions {\n  font-weight: bold;\n  color: #C05B4D;\n  font-family: Consolas;\n  margin-left: 0.3em;\n  background: #FFF1E7;\n  padding: 2px 5px;\n  border-radius: 3px;\n}\n</style></div>";

/***/ },
/* 210 */
/***/ function(module, exports) {

	module.exports = "<div class=\"markdown\"><h1 id=\"-\">快速上手</h1>\n<hr>\n<p>Ant Design Vue 致力于提供给程序员愉悦的开发体验。</p>\n<h2 id=\"-\">标准项目</h2>\n<p>实际项目开发中，你会需要 CommonJS 、JSX 构建、打包部署等一系列工程化的需求。\n提供了一套 <code>npm</code> + <code>webpack</code> 的开发工具链来辅助开发，下面我们用一个简单的实例来说明。</p>\n<h3 id=\"3-\">3. 使用组件</h3>\n<h3 id=\"4-\">4. 开发调试</h3>\n<p>一键启动调试，访问 <a href=\"http://127.0.0.1:8000\">http://127.0.0.1:8000</a> 查看效果。</p>\n<pre><code class=\"lang-bash\">$ npm run dev\n</code></pre>\n<h3 id=\"5-\">5. 构建和部署</h3>\n<pre><code class=\"lang-bash\">$ npm run build\n</code></pre>\n<p>入口文件会构建到 <code>dist</code> 目录中，你可以自由部署到不同环境中进行引用。</p>\n<blockquote>\n<p>上述例子用于帮助你理解 Ant Design Vue 的使用流程，并非真实的开发过程，你可以根据自己的项目开发流程进行接入。</p>\n</blockquote>\n<h2 id=\"-\">兼容性</h2>\n<p>Ant Design Vue 支持所有的现代浏览器。</p>\n<h2 id=\"-\">小甜点</h2>\n<ul>\n<li>你可以享用 <code>npm</code> 生态圈里的所有模块。</li>\n<li>我们使用了 <code>babel</code> 的写法来提升编码的愉悦感。</li>\n</ul>\n</div>";

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"markdown\"><h1 id=\"ant-design-of-vue\">Ant Design of Vue</h1>\n<hr>\n<p>这里是 Ant Design 的 Vue 实现，开发和服务于企业级后台产品。</p>\n<p><div class=\"pic-plus\">\n  <img width=\"150\" src=\"https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg\">\n  <span>+</span>\n  <img width=\"150\" src=\"" + __webpack_require__(194) + "\">\n</div></p>\n<style>\n.pic-plus > * {\n  display: inline-block!important;\n  vertical-align: middle;\n}\n.pic-plus span {\n  font-size: 30px;\n  color: #aaa;\n  margin: 0 20px;\n}\n</style>\n<h2 id=\"-\">特性</h2>\n<ul>\n<li>Designed as Ant Design.</li>\n<li>基于 Vue 的组件化开发模式。</li>\n<li>背靠 npm 生态圈。</li>\n<li>基于 webpack 的调试构建方案，支持 ES6。</li>\n</ul>\n<h2 id=\"-\">示例</h2>\n<h2 id=\"-\">版本</h2>\n<h2 id=\"-\">链接</h2>\n<ul>\n<li><a href=\"/vue-antd/\">首页</a></li>\n<li><a href=\"/introduce\">文档</a></li>\n<li><a href=\"/components/\">组件</a></li>\n</ul>\n<h2 id=\"-\">谁在使用</h2>\n<ul>\n<li>本人</li>\n</ul>\n<h2 id=\"-\">如何贡献</h2>\n<p>我们欢迎任何形式的贡献，有任何建议或意见您可以进行 <a href=\"https://github.com/okoala/vue-antd/pulls\">Pull Request</a>，或者给我们<a href=\"https://github.com/ant-design/ant-design/issues\">提问</a>。</p>\n</div>";

/***/ },
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(185);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./badge.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./badge.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(186);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./button.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./button.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(187);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./spin.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./spin.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(188);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./components.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./components.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(189);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Badge.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Badge.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(190);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Radio.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Radio.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 232 */,
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	(function () {
	  var vue // lazy bind
	
	  var asyncData = {
	    created: function () {
	      if (!vue) {
	        console.warn('[vue-async-data] not installed!')
	        return
	      }
	      if (this.$options.asyncData) {
	        if (this._defineMeta) {
	          // 0.12 compat
	          this._defineMeta('$loadingAsyncData', true)
	        } else {
	          // ^1.0.0-alpha
	          vue.util.defineReactive(this, '$loadingAsyncData', true)
	        }
	      }
	    },
	    compiled: function () {
	      this.reloadAsyncData()
	    },
	    methods: {
	      reloadAsyncData: function () {
	        var load = this.$options.asyncData
	        if (load) {
	          var self = this
	          var resolve = function (data) {
	            if (data) {
	              for (var key in data) {
	                self.$set(key, data[key])
	              }
	            }
	            self.$loadingAsyncData = false
	            self.$emit('async-data')
	          }
	          var reject = function (reason) {
	            var msg = '[vue] async data load failed'
	            if (reason instanceof Error) {
	              console.warn(msg)
	              throw reason
	            } else {
	              console.warn(msg + ': ' + reason)
	            }
	          }
	          this.$loadingAsyncData = true
	          var res = load.call(this, resolve, reject)
	          if (res && typeof res.then === 'function') {
	            res.then(resolve, reject)
	          }
	        }
	      }
	    }
	  }
	
	  var api = {
	    mixin: asyncData,
	    install: function (Vue, options) {
	      vue = Vue
	      Vue.options = Vue.util.mergeOptions(Vue.options, asyncData)
	    }
	  }
	
	  if(true) {
	    module.exports = api
	  } else if(typeof define === 'function' && define.amd) {
	    define(function () { return api })
	  } else if (typeof window !== 'undefined') {
	    window.VueAsyncData = api
	  }
	})()


/***/ },
/* 234 */
/***/ function(module, exports) {

	module.exports = "<header id=\"header\" class=\"clearfix\">\n  <a class=\"logo\" href=\"..\">\n    <img width=\"50\" src=\"http://s2.upload.tf/Gbv.png\">\n    Vue Antd\n  </a>\n  <nav class=\"nav\">\n    <ul>\n      <li :class=\"{current: isHomePage}\">\n        <a href=\"..\" data-no-instant=\"\" >首页</a>\n      </li>\n      <li :class=\"{current: isComponentsPage}\">\n        <a v-link=\"{path: '/components'}\">Components</a>\n      </li>\n      <li>\n        <a target=\"_blank\" title=\"Please star me and fork me!\" alt=\"star and fork\" href=\"https://github.com/okoala/vue-antd\">Github</a>\n      </li>\n    </ul>\n  </nav>\n</header>\n<router-view class=\"view\"></router-view>";

/***/ },
/* 235 */
/***/ function(module, exports) {

	module.exports = "<div class=\"main-wrapper\">\n  <aside class=\"aside-container\">\n    <ul>\n      <li>\n        <a v-link=\"{path: '/docs/introduce'}\" class=\"\">\n          Ant Design of Vue\n          <span class=\"chinese\"></span>\n        </a>\n      </li>\n      <li>\n        <a v-link=\"{path: '/docs/getting-started'}\" class=\"\">\n          快速上手\n          <span class=\"chinese\"></span>\n        </a>\n      </li>\n      <li>\n        <a v-link=\"{path: '/docs/download'}\" class=\"\">\n          下载\n          <span class=\"chinese\"></span>\n        </a>\n      </li>\n      <li>\n        <h4>Components</h4>\n        <ul>\n          <li class=\"type-divider\">基本</li>\n          <li v-for=\"component in componentsMenu.base\">\n            <a v-link=\"{path: '/components/' + component.name}\">\n              {{component.name | Upper}}\n              <span class=\"chinese\">{{component.desc}}</span>\n            </a>\n          </li>\n          <li class=\"type-divider\">表单</li>\n          <li v-for=\"component in componentsMenu.form\">\n            <a v-link=\"{path: '/components/' + component.name}\">\n              {{component.name | Upper}}\n              <span class=\"chinese\">{{component.desc}}</span>\n            </a>\n          </li>\n          <li class=\"type-divider\">展示</li>\n          <li v-for=\"component in componentsMenu.show\">\n            <a v-link=\"{path: '/components/' + component.name}\">\n              {{component.name | Upper}}\n              <span class=\"chinese\">{{component.desc}}</span>\n            </a>\n          </li>\n          <li class=\"type-divider\">导航</li>\n          <li v-for=\"component in componentsMenu.pagination\">\n            <a v-link=\"{path: '/components/' + component.name}\">\n              {{component.name | Upper}}\n              <span class=\"chinese\">{{component.desc}}</span>\n            </a>\n          </li>\n          <li class=\"type-divider\">其他</li>\n          <li v-for=\"component in componentsMenu.other\">\n            <a v-link=\"{path: '/components/' + component.name}\">\n              {{component.name | Upper}}\n              <span class=\"chinese\">{{component.desc}}</span>\n            </a>\n          </li>\n        </ul>\n      </li>\n    </ul>\n  </aside>\n  <section class=\"main-container\">\n    <router-view class=\"view xRightMatrix\"></router-view>\n  </section>\n</div>";

/***/ },
/* 236 */
/***/ function(module, exports) {

	module.exports = "404 Not Found.";

/***/ },
/* 237 */
/***/ function(module, exports) {

	module.exports = "<div v-show='!closed'>\n    <div v-if='description'>\n      <div\n        data-show={{closeing}}\n        :class=\"'ant-alert-with-description ant-alert-with-description-' + type + closeName\">\n        <i :class=\"'anticon ' + iconClass\"></i>\n        <p class='ant-alert-with-description-message'>\n          {{message}}\n        </p>\n        <span class='ant-alert-with-description-description'>\n          {{description}}\n        </span>\n        <a\n          v-if='closable'\n          @click='_handleClose'\n          class='ant-alert-with-description-close-icon'>\n          <span class='ant-alert-with-description-close-icon-x'></span>\n        </a>\n      </div>\n    </div>\n    <div v-else>\n      <div v-if='closeText'>\n        <div\n          data-show={{closing}}\n          :class=\"'ant-alert ant-alert-' + type + closeName\">\n          <i :class=\"'anticon ' + iconClass\"></i>\n          <span class='ant-alert-description'>{{message}}</span>\n          <span\n            @click='_handleClose'\n            class='ant-alert-close-text'>{{closeText}}</span>\n        </div>\n      </div>\n      <div v-else>\n        <div\n          data-show={{closing}}\n          :class=\"'ant-alert ant-alert-' + type + closeName\">\n          <i :class=\"'anticon ' + iconClass\"></i>\n          <span class='ant-alert-description'>{{message}}</span>\n          <a\n            v-if='closable'\n            @click='_handleClose'\n            class='ant-alert-close-icon'>\n            <span class='ant-alert-close-icon-x'></span>\n          </a>\n        </div>\n      </div>\n    </div>\n</div>";

/***/ },
/* 238 */
/***/ function(module, exports) {

	module.exports = "<span v-if='dot' :class=\"prefixCls\">\n  <slot></slot>\n  <sup :class=\"prefixCls + '-dot'\"></sup>\n</span>\n<span v-else :class=\"prefixCls\">\n  <slot></slot>\n  <sup v-if='count' :class=\"prefixCls + '-count'\">{{count | short}}</sup>\n</span>";

/***/ },
/* 239 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"prefixCls\">\n  <slot></slot>\n</div>";

/***/ },
/* 240 */
/***/ function(module, exports) {

	module.exports = "<span>\n  <a v-if='href' :href=\"href\" :class=\"prefixCls + '-link'\">\n    <slot></slot>\n  </a>\n  <span v-else :class=\"prefixCls + '-link'\">\n    <slot></slot>\n  </span>\n  <span :class=\"prefixCls + '-slash'\">/</span>\n</span>";

/***/ },
/* 241 */
/***/ function(module, exports) {

	module.exports = "<button :type=\"htmlType || 'button'\" :class=\"btClasses\" @click=\"onclick\">\n  <slot></slot>\n</button>";

/***/ },
/* 242 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"btgClasses\">\n  <slot></slot>\n</div>";

/***/ },
/* 243 */
/***/ function(module, exports) {

	module.exports = "<label :class=\"wrapClasses\">\n  <span :class=\"ckClasses\" :style=\"style\">\n    <span :class=\"prefixCls + '-inner'\"></span>\n    <input\n      type=\"checkbox\"\n      :disabled=\"disabled\"\n      :defaultChecked=\"!!defaultChecked\"\n      :value=\"value\"\n      :class=\"prefixCls + '-input'\"\n      :checked=\"!!checked\"\n      @change=\"_handleChange\"/>\n  </span>\n  <slot></slot>\n</label>";

/***/ },
/* 244 */
/***/ function(module, exports) {

	module.exports = "<i :class=\"iconClasses\">\n  <slot></slot>\n</i>";

/***/ },
/* 245 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"prefixCls + '-circle-wrap status-' + status\" >\n  <div\n    :class=\"prefixCls + '-circle-inner'\"\n    :style=\"{\n      'width': width + 'px',\n      'height': width + 'px',\n      'fontSize': width * 0.16 + 6 + 'px'\n    }\">\n\n    <svg viewBox='0 0 100 100'>\n      <path :d=\"pathString\" :stroke=\"trailColor\"\n        :stroke-width=\"trailWidth\" fill-opacity='0'/>\n      <path :d=\"pathString\" stroke-linecap='round'\n        :stroke=\"strokeColor\" :stroke-width=\"strokeWidth\" fill-opacity='0' :style=\"pathStyle\" />\n    </svg>\n\n    <span v-if=\"status === 'exception'\" :class=\"prefixCls + '-circle-text'\"><v-icon type=\"exclamation\"></v-icon></span>\n    <span v-if=\"status === 'success'\" :class=\"prefixCls + '-circle-text'\"><v-icon type=\"check\"></v-icon></span>\n    <span v-if=\"status !== 'exception' && status !== 'success'\" :class=\"prefixCls + '-circle-text'\">{{ percent }}%</span>\n  </div>\n</div>";

/***/ },
/* 246 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"wrapClasses\">\n  <span v-if=\"showInfo === true\">\n    <span v-if=\"status === 'exception' || status === 'success'\" :class=\"prefixCls + '-line-text'\">\n      <v-icon type=\"exclamation-circle\"></v-icon>\n    </span>\n    <span v-else :class=\"prefixCls + '-line-text'\">\n      {{ percent }}%\n    </span>\n  </span>\n\n  <div :class=\"prefixCls + '-line-outer'\">\n    <div :class=\"prefixCls + '-line-inner'\">\n      <div\n        :class=\"prefixCls + '-line-bg'\"\n        :style=\"{width: percent + '%', height: strokeWidth + 'px'}\"></div>\n    </div>\n  </div>\n</div>";

/***/ },
/* 247 */
/***/ function(module, exports) {

	module.exports = "<label :class=\"wrapClasses\">\n  <span :class=\"radioClasses\">\n    <span :class=\"prefixCls + '-inner'\"></span>\n    <input\n      type=\"radio\"\n      :disabled=\"disabled\"\n      :value=\"value\"\n      :checked=\"!!checked\"\n      :class=\"prefixCls + '-input'\"\n      @change=\"_handleChange\">\n  </span>\n  <slot>Radio</slot>\n</label>";

/***/ },
/* 248 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"prefixCls\">\n  <v-radio v-for=\"radio in radios\" :class-name=\"radioClasses\" :value=\"radio.value\" :on-change=\"_onRadioChange.bind(radio, $index)\" :checked=\"value === radio.value\"><span>{{radio.name}}</span></v-radio>\n</div>";

/***/ },
/* 249 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"loadingClasses\">\n  <div v-if=\"!hide\" :class=\"spinWrapClasses\">\n    <div :class=\"spinClasses\">\n      <span :class=\"prefixCls + '-dot ' + prefixCls + '-dot-first'\"></span>\n      <span :class=\"prefixCls + '-dot ' + prefixCls + '-dot-second'\"></span>\n      <span :class=\"prefixCls + '-dot ' + prefixCls + '-dot-third'\"></span>\n    </div>\n  </div>\n  <div :class=\"prefixCls + '-container'\">\n    <slot></slot>\n  </div>\n</div>";

/***/ },
/* 250 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"wrapClasses\" :style=\"{'width': tailWidth}\">\n  <div v-if=\"!stepLast\" :class=\"prefixCls + '-tail'\"><i></i></div>\n  <div :class=\"prefixCls + '-head'\">\n    <div :class=\"prefixCls + '-head-inner'\">\n      <span v-if=\"!icon && status !== 'finish'\" :class=\"prefixCls + '-icon'\">{{stepNumber}}</span>\n      <span v-else :class=\"prefixCls + '-icon ' + iconPrefix + 'icon ' + iconPrefix + 'icon-' + iconName\"></span>\n    </div>\n  </div>\n  <div :class=\"prefixCls + '-main'\" :style=\"{'maxWidth': maxDescriptionWidth}\">\n    <div :class=\"prefixCls + '-title'\">{{title}}</div>\n    <div v-if=\"description\" :class=\"prefixCls + '-description'\">{{description}}</div>\n  </div>\n</div>";

/***/ },
/* 251 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"wrapClasses\">\n  <slot></slot>\n</div>";

/***/ },
/* 252 */
/***/ function(module, exports) {

	module.exports = "<span :class=\"wrapClasses\" @click=\"_toggle\">\n  <span :class=\"prefixCls + '-inner'\">\n    <slot v-if=\"checked\" name=\"checkedChildren\"></slot>\n    <slot v-if=\"!checked\" name=\"unCheckedChildren\"></slot>\n  </span>\n</span>";

/***/ },
/* 253 */
/***/ function(module, exports) {

	module.exports = "<div class=\"clearfix\" :class=\"{'ant-table-empty': isEmpty}\">\n  <div :class=\"tableClass\" :style=\"style\">\n    <div v-if=\"useFixedHeader\" :class=\"prefixCls + '-header'\">\n      <table>\n        <colgroup>\n          <col v-if=\"expandIconAsCell\" :class=\"prefixCls + '-expand-icon-col'\" key=\"rc-table-expand-icon-col\"></col>\n          <col v-for=\"col in columns\" :style=\"{'width': col.width}\"></col>\n        </colgroup>\n        <thead :class=\"prefixCls + '-thead'\">\n          <tr>\n            <th v-for=\"col in columns\">{{col.title}}</th>\n          </tr>\n        </thead>\n      </table>\n    </div>\n    <div :class=\"prefixCls + '-body'\" :style=\"bodyStyle\">\n      <table>\n        <colgroup>\n          <col v-if=\"expandIconAsCell\" :class=\"prefixCls + '-expand-icon-col'\" key=\"rc-table-expand-icon-col\"></col>\n          <col v-for=\"col in columns\" :style=\"{'width': col.width}\"></col>\n        </colgroup>\n        <thead :class=\"prefixCls + '-thead'\">\n          <tr>\n            <th v-for=\"col in columns\">{{col.title}}</th>\n          </tr>\n        </thead>\n        <tbody :class=\"prefixCls + '-tbody'\" v-el:render>\n          <tr v-for=\"data in dataSource\" :class=\"prefixCls + classString\">\n            <td v-for=\"col in columns\">{{{col.dataIndex ? data[col.dataIndex] : ''}}}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>";

/***/ },
/* 254 */
/***/ function(module, exports) {

	module.exports = "<div v-if=\"!closed\" :class=\"wrapClasses\">\n  <a :class=\"prefixCls + '-text'\" :href=\"href\"><slot></slot></a>\n  <v-icon v-if=\"closable\" type=\"cross\" @click=\"_close\"></v-icon>\n</div>";

/***/ },
/* 255 */
/***/ function(module, exports) {

	module.exports = "<span role=\"button\"\n      tabIndex=\"0\"\n      @click=\"_onClick\"\n      @keydown=\"_onKeyDown\"\n      @drop=\"_onFileDrop\"\n      @dragover=\"_onFileDrop\">\n  <input v-el:file\n         type=\"file\"\n         style=\"display: none\"\n         :accept=\"accept\"\n         :multiple=\"multiple\"\n         @change=\"_onChange\">\n  <slot></slot>\n</span>";

/***/ },
/* 256 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"prefixCls + '-list'\">\n  <div v-for=\"file in items\" :class=\"prefixCls + '-list-item'\" :key=\"file.uid\">\n    <v-icon v-if=\"file.status === 'done'\" type=\"check\" :class=\"prefixCls + '-success-icon'\"></v-icon>\n    <v-icon v-if=\"file.status !== 'done'\" type=\"loading\"></v-icon>\n\n    <a v-if=\"file.url\" :class=\"prefixCls + '-item-name'\" :href=\"file.url\" target=\"_blank\">{{file.name}}</a>\n    <b v-if=\"!file.url\" :class=\"prefixCls + '-item-name'\">{{file.name}}</b>\n\n    <v-icon type=\"cross\" @click=\"_handleClose(file)\"></v-icon>\n  </div>\n</div>";

/***/ },
/* 257 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"wrapClasses\">\n  <ajax-upload :action=\"action\"\n              :name=\"name\"\n              :multiple=\"multiple\"\n              :on-start=\"_onStart\"\n              :on-progress=\"_onProgress\"\n              :on-success=\"_onSuccess\"\n              :on-error=\"_onError\"\n              :before-upload=\"beforeUpload\">\n    <div :class=\"containerClasses\">\n      <slot></slot>\n    </div>\n  </ajax-upload>\n</div>\n<upload-list :items=\"fileList\" :on-remove=\"_handleManualRemove\" ></upload-list>";

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(114)
	module.exports.template = __webpack_require__(195)


/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(226)
	module.exports = __webpack_require__(115)
	module.exports.template = __webpack_require__(196)


/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(116)
	module.exports.template = __webpack_require__(197)


/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(227)
	module.exports = __webpack_require__(117)
	module.exports.template = __webpack_require__(198)


/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(118)
	module.exports.template = __webpack_require__(199)


/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(119)
	module.exports.template = __webpack_require__(200)


/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(120)
	module.exports.template = __webpack_require__(201)


/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(121)
	module.exports.template = __webpack_require__(202)


/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(228)
	module.exports = __webpack_require__(122)
	module.exports.template = __webpack_require__(203)


/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(123)
	module.exports.template = __webpack_require__(204)


/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(124)
	module.exports.template = __webpack_require__(205)


/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(125)
	module.exports.template = __webpack_require__(206)


/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(126)
	module.exports.template = __webpack_require__(207)


/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(127)
	module.exports.template = __webpack_require__(208)


/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(192)
	module.exports = __webpack_require__(128)
	module.exports.template = __webpack_require__(234)


/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(229)
	module.exports = __webpack_require__(129)
	module.exports.template = __webpack_require__(235)


/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	module.exports.template = __webpack_require__(209)


/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	module.exports.template = __webpack_require__(210)


/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	module.exports.template = __webpack_require__(211)


/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(130)
	module.exports.template = __webpack_require__(236)


/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(131)
	module.exports.template = __webpack_require__(237)


/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(230)
	module.exports = __webpack_require__(132)
	module.exports.template = __webpack_require__(238)


/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(133)
	module.exports.template = __webpack_require__(239)


/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(134)
	module.exports.template = __webpack_require__(240)


/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(135)
	module.exports.template = __webpack_require__(241)


/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(136)
	module.exports.template = __webpack_require__(242)


/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(137)
	module.exports.template = __webpack_require__(243)


/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(138)
	module.exports.template = __webpack_require__(244)


/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(139)
	module.exports.template = __webpack_require__(245)


/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(140)
	module.exports.template = __webpack_require__(246)


/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(142)
	module.exports.template = __webpack_require__(248)


/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(143)
	module.exports.template = __webpack_require__(249)


/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(144)
	module.exports.template = __webpack_require__(250)


/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(145)
	module.exports.template = __webpack_require__(251)


/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(146)
	module.exports.template = __webpack_require__(252)


/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(147)
	module.exports.template = __webpack_require__(253)


/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(148)
	module.exports.template = __webpack_require__(254)


/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(149)
	module.exports.template = __webpack_require__(255)


/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(150)
	module.exports.template = __webpack_require__(256)


/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(151)
	module.exports.template = __webpack_require__(257)


/***/ },
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Service for sending network requests.
	 */
	
	var xhr = __webpack_require__(305);
	var jsonp = __webpack_require__(303);
	var Promise = __webpack_require__(41);
	
	module.exports = function (_) {
	
	    var originUrl = _.url.parse(location.href);
	    var jsonType = {'Content-Type': 'application/json;charset=utf-8'};
	
	    function Http(url, options) {
	
	        var promise;
	
	        if (_.isPlainObject(url)) {
	            options = url;
	            url = '';
	        }
	
	        options = _.extend({url: url}, options);
	        options = _.extend(true, {},
	            Http.options, this.options, options
	        );
	
	        if (options.crossOrigin === null) {
	            options.crossOrigin = crossOrigin(options.url);
	        }
	
	        options.method = options.method.toUpperCase();
	        options.headers = _.extend({}, Http.headers.common,
	            !options.crossOrigin ? Http.headers.custom : {},
	            Http.headers[options.method.toLowerCase()],
	            options.headers
	        );
	
	        if (_.isPlainObject(options.data) && /^(GET|JSONP)$/i.test(options.method)) {
	            _.extend(options.params, options.data);
	            delete options.data;
	        }
	
	        if (options.emulateHTTP && !options.crossOrigin && /^(PUT|PATCH|DELETE)$/i.test(options.method)) {
	            options.headers['X-HTTP-Method-Override'] = options.method;
	            options.method = 'POST';
	        }
	
	        if (options.emulateJSON && _.isPlainObject(options.data)) {
	            options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
	            options.data = _.url.params(options.data);
	        }
	
	        if (_.isObject(options.data) && /FormData/i.test(options.data.toString())) {
	            delete options.headers['Content-Type'];
	        }
	
	        if (_.isPlainObject(options.data)) {
	            options.data = JSON.stringify(options.data);
	        }
	
	        promise = (options.method == 'JSONP' ? jsonp : xhr).call(this.vm, _, options);
	        promise = extendPromise(promise.then(transformResponse, transformResponse), this.vm);
	
	        if (options.success) {
	            promise = promise.success(options.success);
	        }
	
	        if (options.error) {
	            promise = promise.error(options.error);
	        }
	
	        return promise;
	    }
	
	    function extendPromise(promise, vm) {
	
	        promise.success = function (fn) {
	
	            return extendPromise(promise.then(function (response) {
	                return fn.call(vm, response.data, response.status, response) || response;
	            }), vm);
	
	        };
	
	        promise.error = function (fn) {
	
	            return extendPromise(promise.then(undefined, function (response) {
	                return fn.call(vm, response.data, response.status, response) || response;
	            }), vm);
	
	        };
	
	        promise.always = function (fn) {
	
	            var cb = function (response) {
	                return fn.call(vm, response.data, response.status, response) || response;
	            };
	
	            return extendPromise(promise.then(cb, cb), vm);
	        };
	
	        return promise;
	    }
	
	    function transformResponse(response) {
	
	        try {
	            response.data = JSON.parse(response.responseText);
	        } catch (e) {
	            response.data = response.responseText;
	        }
	
	        return response.ok ? response : Promise.reject(response);
	    }
	
	    function crossOrigin(url) {
	
	        var requestUrl = _.url.parse(url);
	
	        return (requestUrl.protocol !== originUrl.protocol || requestUrl.host !== originUrl.host);
	    }
	
	    Http.options = {
	        method: 'get',
	        params: {},
	        data: '',
	        xhr: null,
	        jsonp: 'callback',
	        beforeSend: null,
	        crossOrigin: null,
	        emulateHTTP: false,
	        emulateJSON: false
	    };
	
	    Http.headers = {
	        put: jsonType,
	        post: jsonType,
	        patch: jsonType,
	        delete: jsonType,
	        common: {'Accept': 'application/json, text/plain, */*'},
	        custom: {'X-Requested-With': 'XMLHttpRequest'}
	    };
	
	    ['get', 'put', 'post', 'patch', 'delete', 'jsonp'].forEach(function (method) {
	
	        Http[method] = function (url, data, success, options) {
	
	            if (_.isFunction(data)) {
	                options = success;
	                success = data;
	                data = undefined;
	            }
	
	            return this(url, _.extend({method: method, data: data, success: success}, options));
	        };
	    });
	
	    return _.http = Http;
	};


/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Install plugin.
	 */
	
	function install(Vue) {
	
	    var _ = __webpack_require__(304)(Vue);
	
	    Vue.url = __webpack_require__(307)(_);
	    Vue.http = __webpack_require__(301)(_);
	    Vue.resource = __webpack_require__(306)(_);
	
	    Object.defineProperties(Vue.prototype, {
	
	        $url: {
	            get: function () {
	                return this._url || (this._url = _.options(Vue.url, this, this.$options.url));
	            }
	        },
	
	        $http: {
	            get: function () {
	                return this._http || (this._http = _.options(Vue.http, this, this.$options.http));
	            }
	        },
	
	        $resource: {
	            get: function () {
	                return Vue.resource.bind(this);
	            }
	        }
	
	    });
	}
	
	if (window.Vue) {
	    Vue.use(install);
	}
	
	module.exports = install;

/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * JSONP request.
	 */
	
	var Promise = __webpack_require__(41);
	
	module.exports = function (_, options) {
	
	    var callback = '_jsonp' + Math.random().toString(36).substr(2), response = {}, script, body;
	
	    options.params[options.jsonp] = callback;
	
	    if (_.isFunction(options.beforeSend)) {
	        options.beforeSend.call(this, {}, options);
	    }
	
	    return new Promise(function (resolve, reject) {
	
	        script = document.createElement('script');
	        script.src = _.url(options);
	        script.type = 'text/javascript';
	        script.async = true;
	
	        window[callback] = function (data) {
	            body = data;
	        };
	
	        var handler = function (event) {
	
	            delete window[callback];
	            document.body.removeChild(script);
	
	            if (event.type === 'load' && !body) {
	                event.type = 'error';
	            }
	
	            response.ok = event.type !== 'error';
	            response.status = response.ok ? 200 : 404;
	            response.responseText = body ? body : event.type;
	
	            (response.ok ? resolve : reject)(response);
	        };
	
	        script.onload = handler;
	        script.onerror = handler;
	
	        document.body.appendChild(script);
	    });
	
	};


/***/ },
/* 304 */
/***/ function(module, exports) {

	/**
	 * Utility functions.
	 */
	
	module.exports = function (Vue) {
	
	    var _ = Vue.util.extend({}, Vue.util);
	
	    _.isString = function (value) {
	        return typeof value === 'string';
	    };
	
	    _.isFunction = function (value) {
	        return typeof value === 'function';
	    };
	
	    _.options = function (fn, obj, options) {
	
	        options = options || {};
	
	        if (_.isFunction(options)) {
	            options = options.call(obj);
	        }
	
	        return _.extend(fn.bind({vm: obj, options: options}), fn, {options: options});
	    };
	
	    _.each = function (obj, iterator) {
	
	        var i, key;
	
	        if (typeof obj.length == 'number') {
	            for (i = 0; i < obj.length; i++) {
	                iterator.call(obj[i], obj[i], i);
	            }
	        } else if (_.isObject(obj)) {
	            for (key in obj) {
	                if (obj.hasOwnProperty(key)) {
	                    iterator.call(obj[key], obj[key], key);
	                }
	            }
	        }
	
	        return obj;
	    };
	
	    _.extend = function (target) {
	
	        var array = [], args = array.slice.call(arguments, 1), deep;
	
	        if (typeof target == 'boolean') {
	            deep = target;
	            target = args.shift();
	        }
	
	        args.forEach(function (arg) {
	            extend(target, arg, deep);
	        });
	
	        return target;
	    };
	
	    function extend(target, source, deep) {
	        for (var key in source) {
	            if (deep && (_.isPlainObject(source[key]) || _.isArray(source[key]))) {
	                if (_.isPlainObject(source[key]) && !_.isPlainObject(target[key])) {
	                    target[key] = {};
	                }
	                if (_.isArray(source[key]) && !_.isArray(target[key])) {
	                    target[key] = [];
	                }
	                extend(target[key], source[key], deep);
	            } else if (source[key] !== undefined) {
	                target[key] = source[key];
	            }
	        }
	    }
	
	    return _;
	};


/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * XMLHttp request.
	 */
	
	var Promise = __webpack_require__(41);
	var XDomain = window.XDomainRequest;
	
	module.exports = function (_, options) {
	
	    var request = new XMLHttpRequest(), promise;
	
	    if (XDomain && options.crossOrigin) {
	        request = new XDomainRequest(); options.headers = {};
	    }
	
	    if (_.isPlainObject(options.xhr)) {
	        _.extend(request, options.xhr);
	    }
	
	    if (_.isFunction(options.beforeSend)) {
	        options.beforeSend.call(this, request, options);
	    }
	
	    promise = new Promise(function (resolve, reject) {
	
	        request.open(options.method, _.url(options), true);
	
	        _.each(options.headers, function (value, header) {
	            request.setRequestHeader(header, value);
	        });
	
	        var handler = function (event) {
	
	            request.ok = event.type === 'load';
	
	            if (request.ok && request.status) {
	                request.ok = request.status >= 200 && request.status < 300;
	            }
	
	            (request.ok ? resolve : reject)(request);
	        };
	
	        request.onload = handler;
	        request.onabort = handler;
	        request.onerror = handler;
	
	        request.send(options.data);
	    });
	
	    return promise;
	};


/***/ },
/* 306 */
/***/ function(module, exports) {

	/**
	 * Service for interacting with RESTful services.
	 */
	
	module.exports = function (_) {
	
	    function Resource(url, params, actions) {
	
	        var self = this, resource = {};
	
	        actions = _.extend({},
	            Resource.actions,
	            actions
	        );
	
	        _.each(actions, function (action, name) {
	
	            action = _.extend(true, {url: url, params: params || {}}, action);
	
	            resource[name] = function () {
	                return (self.$http || _.http)(opts(action, arguments));
	            };
	        });
	
	        return resource;
	    }
	
	    function opts(action, args) {
	
	        var options = _.extend({}, action), params = {}, data, success, error;
	
	        switch (args.length) {
	
	            case 4:
	
	                error = args[3];
	                success = args[2];
	
	            case 3:
	            case 2:
	
	                if (_.isFunction(args[1])) {
	
	                    if (_.isFunction(args[0])) {
	
	                        success = args[0];
	                        error = args[1];
	
	                        break;
	                    }
	
	                    success = args[1];
	                    error = args[2];
	
	                } else {
	
	                    params = args[0];
	                    data = args[1];
	                    success = args[2];
	
	                    break;
	                }
	
	            case 1:
	
	                if (_.isFunction(args[0])) {
	                    success = args[0];
	                } else if (/^(POST|PUT|PATCH)$/i.test(options.method)) {
	                    data = args[0];
	                } else {
	                    params = args[0];
	                }
	
	                break;
	
	            case 0:
	
	                break;
	
	            default:
	
	                throw 'Expected up to 4 arguments [params, data, success, error], got ' + args.length + ' arguments';
	        }
	
	        options.data = data;
	        options.params = _.extend({}, options.params, params);
	
	        if (success) {
	            options.success = success;
	        }
	
	        if (error) {
	            options.error = error;
	        }
	
	        return options;
	    }
	
	    Resource.actions = {
	
	        get: {method: 'GET'},
	        save: {method: 'POST'},
	        query: {method: 'GET'},
	        update: {method: 'PUT'},
	        remove: {method: 'DELETE'},
	        delete: {method: 'DELETE'}
	
	    };
	
	    return _.resource = Resource;
	};


/***/ },
/* 307 */
/***/ function(module, exports) {

	/**
	 * Service for URL templating.
	 */
	
	var ie = document.documentMode;
	var el = document.createElement('a');
	
	module.exports = function (_) {
	
	    function Url(url, params) {
	
	        var urlParams = {}, queryParams = {}, options = url, query;
	
	        if (!_.isPlainObject(options)) {
	            options = {url: url, params: params};
	        }
	
	        options = _.extend(true, {},
	            Url.options, this.options, options
	        );
	
	        url = options.url.replace(/(\/?):([a-z]\w*)/gi, function (match, slash, name) {
	
	            if (options.params[name]) {
	                urlParams[name] = true;
	                return slash + encodeUriSegment(options.params[name]);
	            }
	
	            return '';
	        });
	
	        if (_.isString(options.root) && !url.match(/^(https?:)?\//)) {
	            url = options.root + '/' + url;
	        }
	
	        _.each(options.params, function (value, key) {
	            if (!urlParams[key]) {
	                queryParams[key] = value;
	            }
	        });
	
	        query = Url.params(queryParams);
	
	        if (query) {
	            url += (url.indexOf('?') == -1 ? '?' : '&') + query;
	        }
	
	        return url;
	    }
	
	    /**
	     * Url options.
	     */
	
	    Url.options = {
	        url: '',
	        root: null,
	        params: {}
	    };
	
	    /**
	     * Encodes a Url parameter string.
	     *
	     * @param {Object} obj
	     */
	
	    Url.params = function (obj) {
	
	        var params = [];
	
	        params.add = function (key, value) {
	
	            if (_.isFunction (value)) {
	                value = value();
	            }
	
	            if (value === null) {
	                value = '';
	            }
	
	            this.push(encodeUriSegment(key) + '=' + encodeUriSegment(value));
	        };
	
	        serialize(params, obj);
	
	        return params.join('&');
	    };
	
	    /**
	     * Parse a URL and return its components.
	     *
	     * @param {String} url
	     */
	
	    Url.parse = function (url) {
	
	        if (ie) {
	            el.href = url;
	            url = el.href;
	        }
	
	        el.href = url;
	
	        return {
	            href: el.href,
	            protocol: el.protocol ? el.protocol.replace(/:$/, '') : '',
	            port: el.port,
	            host: el.host,
	            hostname: el.hostname,
	            pathname: el.pathname.charAt(0) === '/' ? el.pathname : '/' + el.pathname,
	            search: el.search ? el.search.replace(/^\?/, '') : '',
	            hash: el.hash ? el.hash.replace(/^#/, '') : ''
	        };
	    };
	
	    function serialize(params, obj, scope) {
	
	        var array = _.isArray(obj), plain = _.isPlainObject(obj), hash;
	
	        _.each(obj, function (value, key) {
	
	            hash = _.isObject(value) || _.isArray(value);
	
	            if (scope) {
	                key = scope + '[' + (plain || hash ? key : '') + ']';
	            }
	
	            if (!scope && array) {
	                params.add(value.name, value.value);
	            } else if (hash) {
	                serialize(params, value, key);
	            } else {
	                params.add(key, value);
	            }
	        });
	    }
	
	    function encodeUriSegment(value) {
	
	        return encodeUriQuery(value, true).
	            replace(/%26/gi, '&').
	            replace(/%3D/gi, '=').
	            replace(/%2B/gi, '+');
	    }
	
	    function encodeUriQuery(value, spaces) {
	
	        return encodeURIComponent(value).
	            replace(/%40/gi, '@').
	            replace(/%3A/gi, ':').
	            replace(/%24/g, '$').
	            replace(/%2C/gi, ',').
	            replace(/%20/g, (spaces ? '%20' : '+'));
	    }
	
	    return _.url = Url;
	};


/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _util = __webpack_require__(9);
	
	var trailingSlashRE = /\/$/;
	var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	
	// install v-link, which provides navigation support for
	// HTML5 history mode
	
	exports['default'] = function (Vue) {
	
	  var _ = Vue.util;
	
	  Vue.directive('link', {
	
	    bind: function bind() {
	      var _this = this;
	
	      var vm = this.vm;
	      /* istanbul ignore if */
	      if (!vm.$route) {
	        _util.warn('v-link can only be used inside a ' + 'router-enabled app.');
	        return;
	      }
	      var router = vm.$route.router;
	      this.handler = function (e) {
	        // don't redirect with control keys
	        if (e.metaKey || e.ctrlKey || e.shiftKey) return;
	        // don't redirect when preventDefault called
	        if (e.defaultPrevented) return;
	        // don't redirect on right click
	        if (e.button !== 0) return;
	
	        var target = _this.target;
	        if (_this.el.tagName === 'A' || e.target === _this.el) {
	          // v-link on <a v-link="'path'">
	          e.preventDefault();
	          if (target != null) {
	            router.go(target);
	          }
	        } else {
	          // v-link delegate on <div v-link>
	          var el = e.target;
	          while (el && el.tagName !== 'A' && el !== _this.el) {
	            el = el.parentNode;
	          }
	          if (!el || el.tagName !== 'A' || !el.href) return;
	          if (sameOrigin(el)) {
	            e.preventDefault();
	            router.go({
	              path: el.pathname,
	              replace: target && target.replace,
	              append: target && target.append
	            });
	          }
	        }
	      };
	      this.el.addEventListener('click', this.handler);
	      // manage active link class
	      this.unwatch = vm.$watch('$route.path', _.bind(this.updateClasses, this));
	    },
	
	    update: function update(path) {
	      var router = this.vm.$route.router;
	      var append = undefined;
	      this.target = path;
	      if (_.isObject(path)) {
	        append = path.append;
	        this.exact = path.exact;
	        this.prevActiveClass = this.activeClass;
	        this.activeClass = path.activeClass;
	      }
	      path = this.path = router._stringifyPath(path);
	      this.activeRE = path && !this.exact ? new RegExp('^' + path.replace(/\/$/, '').replace(regexEscapeRE, '\\$&') + '(\\/|$)') : null;
	      this.updateClasses(this.vm.$route.path);
	      var isAbsolute = path.charAt(0) === '/';
	      // do not format non-hash relative paths
	      var href = path && (router.mode === 'hash' || isAbsolute) ? router.history.formatPath(path, append) : path;
	      if (this.el.tagName === 'A') {
	        if (href) {
	          this.el.href = href;
	        } else {
	          this.el.removeAttribute('href');
	        }
	      }
	    },
	
	    updateClasses: function updateClasses(path) {
	      var el = this.el;
	      var dest = this.path;
	      var router = this.vm.$route.router;
	      var activeClass = this.activeClass || router._linkActiveClass;
	      // clear old class
	      if (this.prevActiveClass !== activeClass) {
	        _.removeClass(el, this.prevActiveClass);
	      }
	      // add new class
	      if (this.exact) {
	        if (dest === path ||
	        // also allow additional trailing slash
	        dest.charAt(dest.length - 1) !== '/' && dest === path.replace(trailingSlashRE, '')) {
	          _.addClass(el, activeClass);
	        } else {
	          _.removeClass(el, activeClass);
	        }
	      } else {
	        if (this.activeRE && this.activeRE.test(path)) {
	          _.addClass(el, activeClass);
	        } else {
	          _.removeClass(el, activeClass);
	        }
	      }
	    },
	
	    unbind: function unbind() {
	      this.el.removeEventListener('click', this.handler);
	      this.unwatch && this.unwatch();
	    }
	  });
	
	  function sameOrigin(link) {
	    return link.protocol === location.protocol && link.hostname === location.hostname && link.port === location.port;
	  }
	};
	
	module.exports = exports['default'];

/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _util = __webpack_require__(9);
	
	var _pipeline = __webpack_require__(85);
	
	exports['default'] = function (Vue) {
	
	  var _ = Vue.util;
	  var componentDef =
	  // 0.12
	  Vue.directive('_component') ||
	  // 1.0
	  Vue.internalDirectives.component;
	  // <router-view> extends the internal component directive
	  var viewDef = _.extend({}, componentDef);
	
	  // with some overrides
	  _.extend(viewDef, {
	
	    _isRouterView: true,
	
	    bind: function bind() {
	      var route = this.vm.$route;
	      /* istanbul ignore if */
	      if (!route) {
	        _util.warn('<router-view> can only be used inside a ' + 'router-enabled app.');
	        return;
	      }
	      // force dynamic directive so v-component doesn't
	      // attempt to build right now
	      this._isDynamicLiteral = true;
	      // finally, init by delegating to v-component
	      componentDef.bind.call(this);
	
	      // all we need to do here is registering this view
	      // in the router. actual component switching will be
	      // managed by the pipeline.
	      var router = this.router = route.router;
	      router._views.unshift(this);
	
	      // note the views are in reverse order.
	      var parentView = router._views[1];
	      if (parentView) {
	        // register self as a child of the parent view,
	        // instead of activating now. This is so that the
	        // child's activate hook is called after the
	        // parent's has resolved.
	        parentView.childView = this;
	      }
	
	      // handle late-rendered view
	      // two possibilities:
	      // 1. root view rendered after transition has been
	      //    validated;
	      // 2. child view rendered after parent view has been
	      //    activated.
	      var transition = route.router._currentTransition;
	      if (!parentView && transition.done || parentView && parentView.activated) {
	        var depth = parentView ? parentView.depth + 1 : 0;
	        _pipeline.activate(this, transition, depth);
	      }
	    },
	
	    unbind: function unbind() {
	      this.router._views.$remove(this);
	      componentDef.unbind.call(this);
	    }
	  });
	
	  Vue.elementDirective('router-view', viewDef);
	};
	
	module.exports = exports['default'];

/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _classCallCheck = __webpack_require__(12)['default'];
	
	exports.__esModule = true;
	
	var _util = __webpack_require__(9);
	
	var AbstractHistory = (function () {
	  function AbstractHistory(_ref) {
	    var onChange = _ref.onChange;
	
	    _classCallCheck(this, AbstractHistory);
	
	    this.onChange = onChange;
	    this.currentPath = '/';
	  }
	
	  AbstractHistory.prototype.start = function start() {
	    this.onChange('/');
	  };
	
	  AbstractHistory.prototype.stop = function stop() {
	    // noop
	  };
	
	  AbstractHistory.prototype.go = function go(path, replace, append) {
	    path = this.currentPath = this.formatPath(path, append);
	    this.onChange(path);
	  };
	
	  AbstractHistory.prototype.formatPath = function formatPath(path, append) {
	    return path.charAt(0) === '/' ? path : _util.resolvePath(this.currentPath, path, append);
	  };
	
	  return AbstractHistory;
	})();
	
	exports['default'] = AbstractHistory;
	module.exports = exports['default'];

/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _classCallCheck = __webpack_require__(12)['default'];
	
	exports.__esModule = true;
	
	var _util = __webpack_require__(9);
	
	var HashHistory = (function () {
	  function HashHistory(_ref) {
	    var hashbang = _ref.hashbang;
	    var onChange = _ref.onChange;
	
	    _classCallCheck(this, HashHistory);
	
	    this.hashbang = hashbang;
	    this.onChange = onChange;
	  }
	
	  HashHistory.prototype.start = function start() {
	    var self = this;
	    this.listener = function () {
	      var path = location.hash;
	      var raw = path.replace(/^#!?/, '');
	      // always
	      if (raw.charAt(0) !== '/') {
	        raw = '/' + raw;
	      }
	      var formattedPath = self.formatPath(raw);
	      if (formattedPath !== path) {
	        location.replace(formattedPath);
	        return;
	      }
	      var pathToMatch = decodeURI(path.replace(/^#!?/, '') + location.search);
	      self.onChange(pathToMatch);
	    };
	    window.addEventListener('hashchange', this.listener);
	    this.listener();
	  };
	
	  HashHistory.prototype.stop = function stop() {
	    window.removeEventListener('hashchange', this.listener);
	  };
	
	  HashHistory.prototype.go = function go(path, replace, append) {
	    path = this.formatPath(path, append);
	    if (replace) {
	      location.replace(path);
	    } else {
	      location.hash = path;
	    }
	  };
	
	  HashHistory.prototype.formatPath = function formatPath(path, append) {
	    var isAbsoloute = path.charAt(0) === '/';
	    var prefix = '#' + (this.hashbang ? '!' : '');
	    return isAbsoloute ? prefix + path : prefix + _util.resolvePath(location.hash.replace(/^#!?/, ''), path, append);
	  };
	
	  return HashHistory;
	})();
	
	exports['default'] = HashHistory;
	module.exports = exports['default'];

/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _classCallCheck = __webpack_require__(12)['default'];
	
	exports.__esModule = true;
	
	var _util = __webpack_require__(9);
	
	var hashRE = /#.*$/;
	
	var HTML5History = (function () {
	  function HTML5History(_ref) {
	    var root = _ref.root;
	    var onChange = _ref.onChange;
	
	    _classCallCheck(this, HTML5History);
	
	    if (root) {
	      // make sure there's the starting slash
	      if (root.charAt(0) !== '/') {
	        root = '/' + root;
	      }
	      // remove trailing slash
	      this.root = root.replace(/\/$/, '');
	      this.rootRE = new RegExp('^\\' + this.root);
	    } else {
	      this.root = null;
	    }
	    this.onChange = onChange;
	    // check base tag
	    var baseEl = document.querySelector('base');
	    this.base = baseEl && baseEl.getAttribute('href');
	  }
	
	  HTML5History.prototype.start = function start() {
	    var _this = this;
	
	    this.listener = function (e) {
	      var url = decodeURI(location.pathname + location.search);
	      if (_this.root) {
	        url = url.replace(_this.rootRE, '');
	      }
	      _this.onChange(url, e && e.state, location.hash);
	    };
	    window.addEventListener('popstate', this.listener);
	    this.listener();
	  };
	
	  HTML5History.prototype.stop = function stop() {
	    window.removeEventListener('popstate', this.listener);
	  };
	
	  HTML5History.prototype.go = function go(path, replace, append) {
	    var url = this.formatPath(path, append);
	    if (replace) {
	      history.replaceState({}, '', url);
	    } else {
	      // record scroll position by replacing current state
	      history.replaceState({
	        pos: {
	          x: window.pageXOffset,
	          y: window.pageYOffset
	        }
	      }, '');
	      // then push new state
	      history.pushState({}, '', url);
	    }
	    var hashMatch = path.match(hashRE);
	    var hash = hashMatch && hashMatch[0];
	    path = url
	    // strip hash so it doesn't mess up params
	    .replace(hashRE, '')
	    // remove root before matching
	    .replace(this.rootRE, '');
	    this.onChange(path, null, hash);
	  };
	
	  HTML5History.prototype.formatPath = function formatPath(path, append) {
	    return path.charAt(0) === '/'
	    // absolute path
	    ? this.root ? this.root + '/' + path.replace(/^\//, '') : path : _util.resolvePath(this.base || location.pathname, path, append);
	  };
	
	  return HTML5History;
	})();
	
	exports['default'] = HTML5History;
	module.exports = exports['default'];

/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _classCallCheck = __webpack_require__(12)['default'];
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	exports.__esModule = true;
	
	var _util = __webpack_require__(9);
	
	var _util2 = _interopRequireDefault(_util);
	
	var _override = __webpack_require__(314);
	
	var _override2 = _interopRequireDefault(_override);
	
	var _routeRecognizer = __webpack_require__(86);
	
	var _routeRecognizer2 = _interopRequireDefault(_routeRecognizer);
	
	var _route = __webpack_require__(315);
	
	var _route2 = _interopRequireDefault(_route);
	
	var _transition = __webpack_require__(316);
	
	var _transition2 = _interopRequireDefault(_transition);
	
	var _directivesView = __webpack_require__(309);
	
	var _directivesView2 = _interopRequireDefault(_directivesView);
	
	var _directivesLink = __webpack_require__(308);
	
	var _directivesLink2 = _interopRequireDefault(_directivesLink);
	
	var _historyAbstract = __webpack_require__(310);
	
	var _historyAbstract2 = _interopRequireDefault(_historyAbstract);
	
	var _historyHash = __webpack_require__(311);
	
	var _historyHash2 = _interopRequireDefault(_historyHash);
	
	var _historyHtml5 = __webpack_require__(312);
	
	var _historyHtml52 = _interopRequireDefault(_historyHtml5);
	
	var historyBackends = {
	  abstract: _historyAbstract2['default'],
	  hash: _historyHash2['default'],
	  html5: _historyHtml52['default']
	};
	
	// late bind during install
	var Vue = undefined;
	
	/**
	 * Router constructor
	 *
	 * @param {Object} [options]
	 */
	
	var Router = (function () {
	  function Router() {
	    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	    var _ref$hashbang = _ref.hashbang;
	    var hashbang = _ref$hashbang === undefined ? true : _ref$hashbang;
	    var _ref$abstract = _ref.abstract;
	    var abstract = _ref$abstract === undefined ? false : _ref$abstract;
	    var _ref$history = _ref.history;
	    var history = _ref$history === undefined ? false : _ref$history;
	    var _ref$saveScrollPosition = _ref.saveScrollPosition;
	    var saveScrollPosition = _ref$saveScrollPosition === undefined ? false : _ref$saveScrollPosition;
	    var _ref$transitionOnLoad = _ref.transitionOnLoad;
	    var transitionOnLoad = _ref$transitionOnLoad === undefined ? false : _ref$transitionOnLoad;
	    var _ref$suppressTransitionError = _ref.suppressTransitionError;
	    var suppressTransitionError = _ref$suppressTransitionError === undefined ? false : _ref$suppressTransitionError;
	    var _ref$root = _ref.root;
	    var root = _ref$root === undefined ? null : _ref$root;
	    var _ref$linkActiveClass = _ref.linkActiveClass;
	    var linkActiveClass = _ref$linkActiveClass === undefined ? 'v-link-active' : _ref$linkActiveClass;
	
	    _classCallCheck(this, Router);
	
	    /* istanbul ignore if */
	    if (!Router.installed) {
	      throw new Error('Please install the Router with Vue.use() before ' + 'creating an instance.');
	    }
	
	    // Vue instances
	    this.app = null;
	    this._views = [];
	    this._children = [];
	
	    // route recognizer
	    this._recognizer = new _routeRecognizer2['default']();
	    this._guardRecognizer = new _routeRecognizer2['default']();
	
	    // state
	    this._started = false;
	    this._startCb = null;
	    this._currentRoute = {};
	    this._currentTransition = null;
	    this._previousTransition = null;
	    this._notFoundHandler = null;
	    this._notFoundRedirect = null;
	    this._beforeEachHooks = [];
	    this._afterEachHooks = [];
	
	    // feature detection
	    this._hasPushState = typeof window !== 'undefined' && window.history && window.history.pushState;
	
	    // trigger transition on initial render?
	    this._rendered = false;
	    this._transitionOnLoad = transitionOnLoad;
	
	    // history mode
	    this._abstract = abstract;
	    this._hashbang = hashbang;
	    this._history = this._hasPushState && history;
	
	    // other options
	    this._saveScrollPosition = saveScrollPosition;
	    this._linkActiveClass = linkActiveClass;
	    this._suppress = suppressTransitionError;
	
	    // create history object
	    var inBrowser = Vue.util.inBrowser;
	    this.mode = !inBrowser || this._abstract ? 'abstract' : this._history ? 'html5' : 'hash';
	
	    var History = historyBackends[this.mode];
	    var self = this;
	    this.history = new History({
	      root: root,
	      hashbang: this._hashbang,
	      onChange: function onChange(path, state, anchor) {
	        self._match(path, state, anchor);
	      }
	    });
	  }
	
	  /**
	   * Allow directly passing components to a route
	   * definition.
	   *
	   * @param {String} path
	   * @param {Object} handler
	   */
	
	  // API ===================================================
	
	  /**
	  * Register a map of top-level paths.
	  *
	  * @param {Object} map
	  */
	
	  Router.prototype.map = function map(_map) {
	    for (var route in _map) {
	      this.on(route, _map[route]);
	    }
	  };
	
	  /**
	   * Register a single root-level path
	   *
	   * @param {String} rootPath
	   * @param {Object} handler
	   *                 - {String} component
	   *                 - {Object} [subRoutes]
	   *                 - {Boolean} [forceRefresh]
	   *                 - {Function} [before]
	   *                 - {Function} [after]
	   */
	
	  Router.prototype.on = function on(rootPath, handler) {
	    if (rootPath === '*') {
	      this._notFound(handler);
	    } else {
	      this._addRoute(rootPath, handler, []);
	    }
	  };
	
	  /**
	   * Set redirects.
	   *
	   * @param {Object} map
	   */
	
	  Router.prototype.redirect = function redirect(map) {
	    for (var path in map) {
	      this._addRedirect(path, map[path]);
	    }
	  };
	
	  /**
	   * Set aliases.
	   *
	   * @param {Object} map
	   */
	
	  Router.prototype.alias = function alias(map) {
	    for (var path in map) {
	      this._addAlias(path, map[path]);
	    }
	  };
	
	  /**
	   * Set global before hook.
	   *
	   * @param {Function} fn
	   */
	
	  Router.prototype.beforeEach = function beforeEach(fn) {
	    this._beforeEachHooks.push(fn);
	  };
	
	  /**
	   * Set global after hook.
	   *
	   * @param {Function} fn
	   */
	
	  Router.prototype.afterEach = function afterEach(fn) {
	    this._afterEachHooks.push(fn);
	  };
	
	  /**
	   * Navigate to a given path.
	   * The path can be an object describing a named path in
	   * the format of { name: '...', params: {}, query: {}}
	   * The path is assumed to be already decoded, and will
	   * be resolved against root (if provided)
	   *
	   * @param {String|Object} path
	   * @param {Boolean} [replace]
	   */
	
	  Router.prototype.go = function go(path) {
	    var replace = false;
	    var append = false;
	    if (Vue.util.isObject(path)) {
	      replace = path.replace;
	      append = path.append;
	    }
	    path = this._stringifyPath(path);
	    if (path) {
	      this.history.go(path, replace, append);
	    }
	  };
	
	  /**
	   * Short hand for replacing current path
	   *
	   * @param {String} path
	   */
	
	  Router.prototype.replace = function replace(path) {
	    this.go({ path: path, replace: true });
	  };
	
	  /**
	   * Start the router.
	   *
	   * @param {VueConstructor} App
	   * @param {String|Element} container
	   * @param {Function} [cb]
	   */
	
	  Router.prototype.start = function start(App, container, cb) {
	    /* istanbul ignore if */
	    if (this._started) {
	      _util.warn('already started.');
	      return;
	    }
	    this._started = true;
	    this._startCb = cb;
	    if (!this.app) {
	      /* istanbul ignore if */
	      if (!App || !container) {
	        throw new Error('Must start vue-router with a component and a ' + 'root container.');
	      }
	      this._appContainer = container;
	      this._appConstructor = typeof App === 'function' ? App : Vue.extend(App);
	    }
	    this.history.start();
	  };
	
	  /**
	   * Stop listening to route changes.
	   */
	
	  Router.prototype.stop = function stop() {
	    this.history.stop();
	    this._started = false;
	  };
	
	  // Internal methods ======================================
	
	  /**
	  * Add a route containing a list of segments to the internal
	  * route recognizer. Will be called recursively to add all
	  * possible sub-routes.
	  *
	  * @param {String} path
	  * @param {Object} handler
	  * @param {Array} segments
	  */
	
	  Router.prototype._addRoute = function _addRoute(path, handler, segments) {
	    guardComponent(path, handler);
	    handler.path = path;
	    handler.fullPath = (segments.reduce(function (path, segment) {
	      return path + segment.path;
	    }, '') + path).replace('//', '/');
	    segments.push({
	      path: path,
	      handler: handler
	    });
	    this._recognizer.add(segments, {
	      as: handler.name
	    });
	    // add sub routes
	    if (handler.subRoutes) {
	      for (var subPath in handler.subRoutes) {
	        // recursively walk all sub routes
	        this._addRoute(subPath, handler.subRoutes[subPath],
	        // pass a copy in recursion to avoid mutating
	        // across branches
	        segments.slice());
	      }
	    }
	  };
	
	  /**
	   * Set the notFound route handler.
	   *
	   * @param {Object} handler
	   */
	
	  Router.prototype._notFound = function _notFound(handler) {
	    guardComponent('*', handler);
	    this._notFoundHandler = [{ handler: handler }];
	  };
	
	  /**
	   * Add a redirect record.
	   *
	   * @param {String} path
	   * @param {String} redirectPath
	   */
	
	  Router.prototype._addRedirect = function _addRedirect(path, redirectPath) {
	    if (path === '*') {
	      this._notFoundRedirect = redirectPath;
	    } else {
	      this._addGuard(path, redirectPath, this.replace);
	    }
	  };
	
	  /**
	   * Add an alias record.
	   *
	   * @param {String} path
	   * @param {String} aliasPath
	   */
	
	  Router.prototype._addAlias = function _addAlias(path, aliasPath) {
	    this._addGuard(path, aliasPath, this._match);
	  };
	
	  /**
	   * Add a path guard.
	   *
	   * @param {String} path
	   * @param {String} mappedPath
	   * @param {Function} handler
	   */
	
	  Router.prototype._addGuard = function _addGuard(path, mappedPath, _handler) {
	    var _this = this;
	
	    this._guardRecognizer.add([{
	      path: path,
	      handler: function handler(match, query) {
	        var realPath = _util.mapParams(mappedPath, match.params, query);
	        _handler.call(_this, realPath);
	      }
	    }]);
	  };
	
	  /**
	   * Check if a path matches any redirect records.
	   *
	   * @param {String} path
	   * @return {Boolean} - if true, will skip normal match.
	   */
	
	  Router.prototype._checkGuard = function _checkGuard(path) {
	    var matched = this._guardRecognizer.recognize(path);
	    if (matched) {
	      matched[0].handler(matched[0], matched.queryParams);
	      return true;
	    } else if (this._notFoundRedirect) {
	      matched = this._recognizer.recognize(path);
	      if (!matched) {
	        this.replace(this._notFoundRedirect);
	        return true;
	      }
	    }
	  };
	
	  /**
	   * Match a URL path and set the route context on vm,
	   * triggering view updates.
	   *
	   * @param {String} path
	   * @param {Object} [state]
	   * @param {String} [anchor]
	   */
	
	  Router.prototype._match = function _match(path, state, anchor) {
	    var _this2 = this;
	
	    if (this._checkGuard(path)) {
	      return;
	    }
	
	    var currentRoute = this._currentRoute;
	    var currentTransition = this._currentTransition;
	
	    if (currentTransition) {
	      if (currentTransition.to.path === path) {
	        // do nothing if we have an active transition going to the same path
	        return;
	      } else if (currentRoute.path === path) {
	        // We are going to the same path, but we also have an ongoing but
	        // not-yet-validated transition. Abort that transition and reset to
	        // prev transition.
	        currentTransition.aborted = true;
	        this._currentTransition = this._prevTransition;
	        return;
	      } else {
	        // going to a totally different path. abort ongoing transition.
	        currentTransition.aborted = true;
	      }
	    }
	
	    // construct new route and transition context
	    var route = new _route2['default'](path, this);
	    var transition = new _transition2['default'](this, route, currentRoute);
	
	    // current transition is updated right now.
	    // however, current route will only be updated after the transition has
	    // been validated.
	    this._prevTransition = currentTransition;
	    this._currentTransition = transition;
	
	    if (!this.app) {
	      // initial render
	      this.app = new this._appConstructor({
	        el: this._appContainer,
	        _meta: {
	          $route: route
	        }
	      });
	    }
	
	    // check global before hook
	    var beforeHooks = this._beforeEachHooks;
	    var startTransition = function startTransition() {
	      transition.start(function () {
	        _this2._postTransition(route, state, anchor);
	      });
	    };
	
	    if (beforeHooks.length) {
	      transition.runQueue(beforeHooks, function (hook, _, next) {
	        if (transition === _this2._currentTransition) {
	          transition.callHook(hook, null, next, {
	            expectBoolean: true
	          });
	        }
	      }, startTransition);
	    } else {
	      startTransition();
	    }
	
	    if (!this._rendered && this._startCb) {
	      this._startCb.call(null);
	    }
	
	    // HACK:
	    // set rendered to true after the transition start, so
	    // that components that are acitvated synchronously know
	    // whether it is the initial render.
	    this._rendered = true;
	  };
	
	  /**
	   * Set current to the new transition.
	   * This is called by the transition object when the
	   * validation of a route has succeeded.
	   *
	   * @param {Transition} transition
	   */
	
	  Router.prototype._onTransitionValidated = function _onTransitionValidated(transition) {
	    // set current route
	    var route = this._currentRoute = transition.to;
	    // update route context for all children
	    if (this.app.$route !== route) {
	      this.app.$route = route;
	      this._children.forEach(function (child) {
	        child.$route = route;
	      });
	    }
	    // call global after hook
	    if (this._afterEachHooks.length) {
	      this._afterEachHooks.forEach(function (hook) {
	        return hook.call(null, {
	          to: transition.to,
	          from: transition.from
	        });
	      });
	    }
	    this._currentTransition.done = true;
	  };
	
	  /**
	   * Handle stuff after the transition.
	   *
	   * @param {Route} route
	   * @param {Object} [state]
	   * @param {String} [anchor]
	   */
	
	  Router.prototype._postTransition = function _postTransition(route, state, anchor) {
	    // handle scroll positions
	    // saved scroll positions take priority
	    // then we check if the path has an anchor
	    var pos = state && state.pos;
	    if (pos && this._saveScrollPosition) {
	      Vue.nextTick(function () {
	        window.scrollTo(pos.x, pos.y);
	      });
	    } else if (anchor) {
	      Vue.nextTick(function () {
	        var el = document.getElementById(anchor.slice(1));
	        if (el) {
	          window.scrollTo(window.scrollX, el.offsetTop);
	        }
	      });
	    }
	  };
	
	  /**
	   * Normalize named route object / string paths into
	   * a string.
	   *
	   * @param {Object|String|Number} path
	   * @return {String}
	   */
	
	  Router.prototype._stringifyPath = function _stringifyPath(path) {
	    if (path && typeof path === 'object') {
	      if (path.name) {
	        var params = path.params || {};
	        if (path.query) {
	          params.queryParams = path.query;
	        }
	        return this._recognizer.generate(path.name, params);
	      } else if (path.path) {
	        return path.path;
	      } else {
	        return '';
	      }
	    } else {
	      return path ? path + '' : '';
	    }
	  };
	
	  return Router;
	})();
	
	function guardComponent(path, handler) {
	  var comp = handler.component;
	  if (Vue.util.isPlainObject(comp)) {
	    comp = handler.component = Vue.extend(comp);
	  }
	  /* istanbul ignore if */
	  if (typeof comp !== 'function') {
	    handler.component = null;
	    _util.warn('invalid component for route "' + path + '".');
	  }
	}
	
	/* Installation */
	
	Router.installed = false;
	
	/**
	 * Installation interface.
	 * Install the necessary directives.
	 */
	
	Router.install = function (externalVue) {
	  /* istanbul ignore if */
	  if (Router.installed) {
	    _util.warn('already installed.');
	    return;
	  }
	  Vue = externalVue;
	  _override2['default'](Vue);
	  _directivesView2['default'](Vue);
	  _directivesLink2['default'](Vue);
	  _util2['default'].Vue = Vue;
	  Router.installed = true;
	};
	
	// auto install
	/* istanbul ignore if */
	if (typeof window !== 'undefined' && window.Vue) {
	  window.Vue.use(Router);
	}
	
	exports['default'] = Router;
	module.exports = exports['default'];

/***/ },
/* 314 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	
	exports['default'] = function (Vue) {
	
	  var _ = Vue.util;
	
	  // override Vue's init and destroy process to keep track of router instances
	  var init = Vue.prototype._init;
	  Vue.prototype._init = function (options) {
	    var root = options._parent || options.parent || this;
	    var route = root.$route;
	    if (route) {
	      route.router._children.push(this);
	      if (!this.$route) {
	        /* istanbul ignore if */
	        if (this._defineMeta) {
	          // 0.12
	          this._defineMeta('$route', route);
	        } else {
	          // 1.0
	          _.defineReactive(this, '$route', route);
	        }
	      }
	    }
	    init.call(this, options);
	  };
	
	  var destroy = Vue.prototype._destroy;
	  Vue.prototype._destroy = function () {
	    if (!this._isBeingDestroyed) {
	      var route = this.$root.$route;
	      if (route) {
	        route.router._children.$remove(this);
	      }
	      destroy.apply(this, arguments);
	    }
	  };
	
	  // 1.0 only: enable route mixins
	  var strats = Vue.config.optionMergeStrategies;
	  var hooksToMergeRE = /^(data|activate|deactivate)$/;
	
	  if (strats) {
	    strats.route = function (parentVal, childVal) {
	      if (!childVal) return parentVal;
	      if (!parentVal) return childVal;
	      var ret = {};
	      _.extend(ret, parentVal);
	      for (var key in childVal) {
	        var a = ret[key];
	        var b = childVal[key];
	        // for data, activate and deactivate, we need to merge them into
	        // arrays similar to lifecycle hooks.
	        if (a && hooksToMergeRE.test(key)) {
	          ret[key] = (_.isArray(a) ? a : [a]).concat(b);
	        } else {
	          ret[key] = b;
	        }
	      }
	      return ret;
	    };
	  }
	};
	
	module.exports = exports['default'];

/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _classCallCheck = __webpack_require__(12)["default"];
	
	var _Object$freeze = __webpack_require__(155)["default"];
	
	exports.__esModule = true;
	var internalKeysRE = /^(component|subRoutes)$/;
	
	/**
	 * Route Context Object
	 *
	 * @param {String} path
	 * @param {Router} router
	 */
	
	var Route = function Route(path, router) {
	  var _this = this;
	
	  _classCallCheck(this, Route);
	
	  var matched = router._recognizer.recognize(path);
	  if (matched) {
	    // copy all custom fields from route configs
	    [].forEach.call(matched, function (match) {
	      for (var key in match.handler) {
	        if (!internalKeysRE.test(key)) {
	          _this[key] = match.handler[key];
	        }
	      }
	    });
	    // set query and params
	    this.query = matched.queryParams;
	    this.params = [].reduce.call(matched, function (prev, cur) {
	      if (cur.params) {
	        for (var key in cur.params) {
	          prev[key] = cur.params[key];
	        }
	      }
	      return prev;
	    }, {});
	  }
	  // expose path and router
	  this.path = path;
	  this.router = router;
	  // for internal use
	  this.matched = matched || router._notFoundHandler;
	  // Important: freeze self to prevent observation
	  _Object$freeze(this);
	};
	
	exports["default"] = Route;
	module.exports = exports["default"];

/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _classCallCheck = __webpack_require__(12)['default'];
	
	exports.__esModule = true;
	
	var _util = __webpack_require__(9);
	
	var _pipeline = __webpack_require__(85);
	
	/**
	 * A RouteTransition object manages the pipeline of a
	 * router-view switching process. This is also the object
	 * passed into user route hooks.
	 *
	 * @param {Router} router
	 * @param {Route} to
	 * @param {Route} from
	 */
	
	var RouteTransition = (function () {
	  function RouteTransition(router, to, from) {
	    _classCallCheck(this, RouteTransition);
	
	    this.router = router;
	    this.to = to;
	    this.from = from;
	    this.next = null;
	    this.aborted = false;
	    this.done = false;
	
	    // start by determine the queues
	
	    // the deactivate queue is an array of router-view
	    // directive instances that need to be deactivated,
	    // deepest first.
	    this.deactivateQueue = router._views;
	
	    // check the default handler of the deepest match
	    var matched = to.matched ? Array.prototype.slice.call(to.matched) : [];
	
	    // the activate queue is an array of route handlers
	    // that need to be activated
	    this.activateQueue = matched.map(function (match) {
	      return match.handler;
	    });
	  }
	
	  /**
	   * Abort current transition and return to previous location.
	   */
	
	  RouteTransition.prototype.abort = function abort() {
	    if (!this.aborted) {
	      this.aborted = true;
	      // if the root path throws an error during validation
	      // on initial load, it gets caught in an infinite loop.
	      var abortingOnLoad = !this.from.path && this.to.path === '/';
	      if (!abortingOnLoad) {
	        this.router.replace(this.from.path || '/');
	      }
	    }
	  };
	
	  /**
	   * Abort current transition and redirect to a new location.
	   *
	   * @param {String} path
	   */
	
	  RouteTransition.prototype.redirect = function redirect(path) {
	    if (!this.aborted) {
	      this.aborted = true;
	      if (typeof path === 'string') {
	        path = _util.mapParams(path, this.to.params, this.to.query);
	      } else {
	        path.params = this.to.params;
	        path.query = this.to.query;
	      }
	      this.router.replace(path);
	    }
	  };
	
	  /**
	   * A router view transition's pipeline can be described as
	   * follows, assuming we are transitioning from an existing
	   * <router-view> chain [Component A, Component B] to a new
	   * chain [Component A, Component C]:
	   *
	   *  A    A
	   *  | => |
	   *  B    C
	   *
	   * 1. Reusablity phase:
	   *   -> canReuse(A, A)
	   *   -> canReuse(B, C)
	   *   -> determine new queues:
	   *      - deactivation: [B]
	   *      - activation: [C]
	   *
	   * 2. Validation phase:
	   *   -> canDeactivate(B)
	   *   -> canActivate(C)
	   *
	   * 3. Activation phase:
	   *   -> deactivate(B)
	   *   -> activate(C)
	   *
	   * Each of these steps can be asynchronous, and any
	   * step can potentially abort the transition.
	   *
	   * @param {Function} cb
	   */
	
	  RouteTransition.prototype.start = function start(cb) {
	    var transition = this;
	    var daq = this.deactivateQueue;
	    var aq = this.activateQueue;
	    var rdaq = daq.slice().reverse();
	    var reuseQueue = undefined;
	
	    // 1. Reusability phase
	    var i = undefined;
	    for (i = 0; i < rdaq.length; i++) {
	      if (!_pipeline.canReuse(rdaq[i], aq[i], transition)) {
	        break;
	      }
	    }
	    if (i > 0) {
	      reuseQueue = rdaq.slice(0, i);
	      daq = rdaq.slice(i).reverse();
	      aq = aq.slice(i);
	    }
	
	    // 2. Validation phase
	    transition.runQueue(daq, _pipeline.canDeactivate, function () {
	      transition.runQueue(aq, _pipeline.canActivate, function () {
	        transition.runQueue(daq, _pipeline.deactivate, function () {
	          // 3. Activation phase
	
	          // Update router current route
	          transition.router._onTransitionValidated(transition);
	
	          // trigger reuse for all reused views
	          reuseQueue && reuseQueue.forEach(function (view) {
	            _pipeline.reuse(view, transition);
	          });
	
	          // the root of the chain that needs to be replaced
	          // is the top-most non-reusable view.
	          if (daq.length) {
	            var view = daq[daq.length - 1];
	            var depth = reuseQueue ? reuseQueue.length : 0;
	            _pipeline.activate(view, transition, depth, cb);
	          } else {
	            cb();
	          }
	        });
	      });
	    });
	  };
	
	  /**
	   * Asynchronously and sequentially apply a function to a
	   * queue.
	   *
	   * @param {Array} queue
	   * @param {Function} fn
	   * @param {Function} cb
	   */
	
	  RouteTransition.prototype.runQueue = function runQueue(queue, fn, cb) {
	    var transition = this;
	    step(0);
	    function step(index) {
	      if (index >= queue.length) {
	        cb();
	      } else {
	        fn(queue[index], transition, function () {
	          step(index + 1);
	        });
	      }
	    }
	  };
	
	  /**
	   * Call a user provided route transition hook and handle
	   * the response (e.g. if the user returns a promise).
	   *
	   * If the user neither expects an argument nor returns a
	   * promise, the hook is assumed to be synchronous.
	   *
	   * @param {Function} hook
	   * @param {*} [context]
	   * @param {Function} [cb]
	   * @param {Object} [options]
	   *                 - {Boolean} expectBoolean
	   *                 - {Boolean} expectData
	   *                 - {Function} cleanup
	   */
	
	  RouteTransition.prototype.callHook = function callHook(hook, context, cb) {
	    var _ref = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
	
	    var _ref$expectBoolean = _ref.expectBoolean;
	    var expectBoolean = _ref$expectBoolean === undefined ? false : _ref$expectBoolean;
	    var _ref$expectData = _ref.expectData;
	    var expectData = _ref$expectData === undefined ? false : _ref$expectData;
	    var cleanup = _ref.cleanup;
	
	    var transition = this;
	    var nextCalled = false;
	
	    // abort the transition
	    var abort = function abort() {
	      cleanup && cleanup();
	      transition.abort();
	    };
	
	    // handle errors
	    var onError = function onError(err) {
	      // cleanup indicates an after-activation hook,
	      // so instead of aborting we just let the transition
	      // finish.
	      cleanup ? next() : abort();
	      if (err && !transition.router._suppress) {
	        _util.warn('Uncaught error during transition: ');
	        throw err instanceof Error ? err : new Error(err);
	      }
	    };
	
	    // advance the transition to the next step
	    var next = function next(data) {
	      if (nextCalled) {
	        _util.warn('transition.next() should be called only once.');
	        return;
	      }
	      nextCalled = true;
	      if (transition.aborted) {
	        cleanup && cleanup();
	        return;
	      }
	      cb && cb(data, onError);
	    };
	
	    // expose a clone of the transition object, so that each
	    // hook gets a clean copy and prevent the user from
	    // messing with the internals.
	    var exposed = {
	      to: transition.to,
	      from: transition.from,
	      abort: abort,
	      next: next,
	      redirect: function redirect() {
	        transition.redirect.apply(transition, arguments);
	      }
	    };
	
	    // actually call the hook
	    var res = undefined;
	    try {
	      res = hook.call(context, exposed);
	    } catch (err) {
	      return onError(err);
	    }
	
	    // handle boolean/promise return values
	    var resIsPromise = _util.isPromise(res);
	    if (expectBoolean) {
	      if (typeof res === 'boolean') {
	        res ? next() : abort();
	      } else if (resIsPromise) {
	        res.then(function (ok) {
	          ok ? next() : abort();
	        }, onError);
	      } else if (!hook.length) {
	        next(res);
	      }
	    } else if (resIsPromise) {
	      res.then(next, onError);
	    } else if (expectData && isPlainOjbect(res) || !hook.length) {
	      next(res);
	    }
	  };
	
	  /**
	   * Call a single hook or an array of async hooks in series.
	   *
	   * @param {Array} hooks
	   * @param {*} context
	   * @param {Function} cb
	   * @param {Object} [options]
	   */
	
	  RouteTransition.prototype.callHooks = function callHooks(hooks, context, cb, options) {
	    var _this = this;
	
	    if (Array.isArray(hooks)) {
	      (function () {
	        var res = [];
	        res._needMerge = true;
	        var onError = undefined;
	        _this.runQueue(hooks, function (hook, _, next) {
	          if (!_this.aborted) {
	            _this.callHook(hook, context, function (r, onError) {
	              if (r) res.push(r);
	              onError = onError;
	              next();
	            }, options);
	          }
	        }, function () {
	          cb(res, onError);
	        });
	      })();
	    } else {
	      this.callHook(hooks, context, cb, options);
	    }
	  };
	
	  return RouteTransition;
	})();
	
	exports['default'] = RouteTransition;
	
	function isPlainOjbect(val) {
	  return Object.prototype.toString.call(val) === '[object Object]';
	}
	module.exports = exports['default'];

/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var Watcher = __webpack_require__(27)
	var Path = __webpack_require__(20)
	var textParser = __webpack_require__(25)
	var dirParser = __webpack_require__(19)
	var expParser = __webpack_require__(24)
	var filterRE = /[^|]\|[^|]/
	
	/**
	 * Get the value from an expression on this vm.
	 *
	 * @param {String} exp
	 * @param {Boolean} [asStatement]
	 * @return {*}
	 */
	
	exports.$get = function (exp, asStatement) {
	  var res = expParser.parse(exp)
	  if (res) {
	    if (asStatement && !expParser.isSimplePath(exp)) {
	      var self = this
	      return function statementHandler () {
	        res.get.call(self, self)
	      }
	    } else {
	      try {
	        return res.get.call(this, this)
	      } catch (e) {}
	    }
	  }
	}
	
	/**
	 * Set the value from an expression on this vm.
	 * The expression must be a valid left-hand
	 * expression in an assignment.
	 *
	 * @param {String} exp
	 * @param {*} val
	 */
	
	exports.$set = function (exp, val) {
	  var res = expParser.parse(exp, true)
	  if (res && res.set) {
	    res.set.call(this, this, val)
	  }
	}
	
	/**
	 * Delete a property on the VM
	 *
	 * @param {String} key
	 */
	
	exports.$delete = function (key) {
	  _.delete(this._data, key)
	}
	
	/**
	 * Watch an expression, trigger callback when its
	 * value changes.
	 *
	 * @param {String|Function} expOrFn
	 * @param {Function} cb
	 * @param {Object} [options]
	 *                 - {Boolean} deep
	 *                 - {Boolean} immediate
	 * @return {Function} - unwatchFn
	 */
	
	exports.$watch = function (expOrFn, cb, options) {
	  var vm = this
	  var parsed
	  if (typeof expOrFn === 'string') {
	    parsed = dirParser.parse(expOrFn)
	    expOrFn = parsed.expression
	  }
	  var watcher = new Watcher(vm, expOrFn, cb, {
	    deep: options && options.deep,
	    filters: parsed && parsed.filters
	  })
	  if (options && options.immediate) {
	    cb.call(vm, watcher.value)
	  }
	  return function unwatchFn () {
	    watcher.teardown()
	  }
	}
	
	/**
	 * Evaluate a text directive, including filters.
	 *
	 * @param {String} text
	 * @param {Boolean} [asStatement]
	 * @return {String}
	 */
	
	exports.$eval = function (text, asStatement) {
	  // check for filters.
	  if (filterRE.test(text)) {
	    var dir = dirParser.parse(text)
	    // the filter regex check might give false positive
	    // for pipes inside strings, so it's possible that
	    // we don't get any filters here
	    var val = this.$get(dir.expression, asStatement)
	    return dir.filters
	      ? this._applyFilters(val, null, dir.filters)
	      : val
	  } else {
	    // no filter
	    return this.$get(text, asStatement)
	  }
	}
	
	/**
	 * Interpolate a piece of template text.
	 *
	 * @param {String} text
	 * @return {String}
	 */
	
	exports.$interpolate = function (text) {
	  var tokens = textParser.parse(text)
	  var vm = this
	  if (tokens) {
	    if (tokens.length === 1) {
	      return vm.$eval(tokens[0].value) + ''
	    } else {
	      return tokens.map(function (token) {
	        return token.tag
	          ? vm.$eval(token.value)
	          : token.value
	      }).join('')
	    }
	  } else {
	    return text
	  }
	}
	
	/**
	 * Log instance data as a plain JS object
	 * so that it is easier to inspect in console.
	 * This method assumes console is available.
	 *
	 * @param {String} [path]
	 */
	
	exports.$log = function (path) {
	  var data = path
	    ? Path.get(this._data, path)
	    : this._data
	  if (data) {
	    data = clean(data)
	  }
	  // include computed fields
	  if (!path) {
	    for (var key in this.$options.computed) {
	      data[key] = clean(this[key])
	    }
	  }
	  console.log(data)
	}
	
	/**
	 * "clean" a getter/setter converted object into a plain
	 * object copy.
	 *
	 * @param {Object} - obj
	 * @return {Object}
	 */
	
	function clean (obj) {
	  return JSON.parse(JSON.stringify(obj))
	}


/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var transition = __webpack_require__(26)
	
	/**
	 * Convenience on-instance nextTick. The callback is
	 * auto-bound to the instance, and this avoids component
	 * modules having to rely on the global Vue.
	 *
	 * @param {Function} fn
	 */
	
	exports.$nextTick = function (fn) {
	  _.nextTick(fn, this)
	}
	
	/**
	 * Append instance to target
	 *
	 * @param {Node} target
	 * @param {Function} [cb]
	 * @param {Boolean} [withTransition] - defaults to true
	 */
	
	exports.$appendTo = function (target, cb, withTransition) {
	  return insert(
	    this, target, cb, withTransition,
	    append, transition.append
	  )
	}
	
	/**
	 * Prepend instance to target
	 *
	 * @param {Node} target
	 * @param {Function} [cb]
	 * @param {Boolean} [withTransition] - defaults to true
	 */
	
	exports.$prependTo = function (target, cb, withTransition) {
	  target = query(target)
	  if (target.hasChildNodes()) {
	    this.$before(target.firstChild, cb, withTransition)
	  } else {
	    this.$appendTo(target, cb, withTransition)
	  }
	  return this
	}
	
	/**
	 * Insert instance before target
	 *
	 * @param {Node} target
	 * @param {Function} [cb]
	 * @param {Boolean} [withTransition] - defaults to true
	 */
	
	exports.$before = function (target, cb, withTransition) {
	  return insert(
	    this, target, cb, withTransition,
	    before, transition.before
	  )
	}
	
	/**
	 * Insert instance after target
	 *
	 * @param {Node} target
	 * @param {Function} [cb]
	 * @param {Boolean} [withTransition] - defaults to true
	 */
	
	exports.$after = function (target, cb, withTransition) {
	  target = query(target)
	  if (target.nextSibling) {
	    this.$before(target.nextSibling, cb, withTransition)
	  } else {
	    this.$appendTo(target.parentNode, cb, withTransition)
	  }
	  return this
	}
	
	/**
	 * Remove instance from DOM
	 *
	 * @param {Function} [cb]
	 * @param {Boolean} [withTransition] - defaults to true
	 */
	
	exports.$remove = function (cb, withTransition) {
	  if (!this.$el.parentNode) {
	    return cb && cb()
	  }
	  var inDoc = this._isAttached && _.inDoc(this.$el)
	  // if we are not in document, no need to check
	  // for transitions
	  if (!inDoc) withTransition = false
	  var self = this
	  var realCb = function () {
	    if (inDoc) self._callHook('detached')
	    if (cb) cb()
	  }
	  if (this._isFragment) {
	    _.removeNodeRange(
	      this._fragmentStart,
	      this._fragmentEnd,
	      this, this._fragment, realCb
	    )
	  } else {
	    var op = withTransition === false
	      ? remove
	      : transition.remove
	    op(this.$el, this, realCb)
	  }
	  return this
	}
	
	/**
	 * Shared DOM insertion function.
	 *
	 * @param {Vue} vm
	 * @param {Element} target
	 * @param {Function} [cb]
	 * @param {Boolean} [withTransition]
	 * @param {Function} op1 - op for non-transition insert
	 * @param {Function} op2 - op for transition insert
	 * @return vm
	 */
	
	function insert (vm, target, cb, withTransition, op1, op2) {
	  target = query(target)
	  var targetIsDetached = !_.inDoc(target)
	  var op = withTransition === false || targetIsDetached
	      ? op1
	      : op2
	  var shouldCallHook =
	    !targetIsDetached &&
	    !vm._isAttached &&
	    !_.inDoc(vm.$el)
	  if (vm._isFragment) {
	    _.mapNodeRange(vm._fragmentStart, vm._fragmentEnd, function (node) {
	      op(node, target, vm)
	    })
	    cb && cb()
	  } else {
	    op(vm.$el, target, vm, cb)
	  }
	  if (shouldCallHook) {
	    vm._callHook('attached')
	  }
	  return vm
	}
	
	/**
	 * Check for selectors
	 *
	 * @param {String|Element} el
	 */
	
	function query (el) {
	  return typeof el === 'string'
	    ? document.querySelector(el)
	    : el
	}
	
	/**
	 * Append operation that takes a callback.
	 *
	 * @param {Node} el
	 * @param {Node} target
	 * @param {Vue} vm - unused
	 * @param {Function} [cb]
	 */
	
	function append (el, target, vm, cb) {
	  target.appendChild(el)
	  if (cb) cb()
	}
	
	/**
	 * InsertBefore operation that takes a callback.
	 *
	 * @param {Node} el
	 * @param {Node} target
	 * @param {Vue} vm - unused
	 * @param {Function} [cb]
	 */
	
	function before (el, target, vm, cb) {
	  _.before(el, target)
	  if (cb) cb()
	}
	
	/**
	 * Remove operation that takes a callback.
	 *
	 * @param {Node} el
	 * @param {Vue} vm - unused
	 * @param {Function} [cb]
	 */
	
	function remove (el, vm, cb) {
	  _.remove(el)
	  if (cb) cb()
	}


/***/ },
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	
	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 */
	
	exports.$on = function (event, fn) {
	  (this._events[event] || (this._events[event] = []))
	    .push(fn)
	  modifyListenerCount(this, event, 1)
	  return this
	}
	
	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 */
	
	exports.$once = function (event, fn) {
	  var self = this
	  function on () {
	    self.$off(event, on)
	    fn.apply(this, arguments)
	  }
	  on.fn = fn
	  this.$on(event, on)
	  return this
	}
	
	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 */
	
	exports.$off = function (event, fn) {
	  var cbs
	  // all
	  if (!arguments.length) {
	    if (this.$parent) {
	      for (event in this._events) {
	        cbs = this._events[event]
	        if (cbs) {
	          modifyListenerCount(this, event, -cbs.length)
	        }
	      }
	    }
	    this._events = {}
	    return this
	  }
	  // specific event
	  cbs = this._events[event]
	  if (!cbs) {
	    return this
	  }
	  if (arguments.length === 1) {
	    modifyListenerCount(this, event, -cbs.length)
	    this._events[event] = null
	    return this
	  }
	  // specific handler
	  var cb
	  var i = cbs.length
	  while (i--) {
	    cb = cbs[i]
	    if (cb === fn || cb.fn === fn) {
	      modifyListenerCount(this, event, -1)
	      cbs.splice(i, 1)
	      break
	    }
	  }
	  return this
	}
	
	/**
	 * Trigger an event on self.
	 *
	 * @param {String} event
	 */
	
	exports.$emit = function (event) {
	  var cbs = this._events[event]
	  this._shouldPropagate = !cbs
	  if (cbs) {
	    cbs = cbs.length > 1
	      ? _.toArray(cbs)
	      : cbs
	    var args = _.toArray(arguments, 1)
	    for (var i = 0, l = cbs.length; i < l; i++) {
	      var res = cbs[i].apply(this, args)
	      if (res === true) {
	        this._shouldPropagate = true
	      }
	    }
	  }
	  return this
	}
	
	/**
	 * Recursively broadcast an event to all children instances.
	 *
	 * @param {String} event
	 * @param {...*} additional arguments
	 */
	
	exports.$broadcast = function (event) {
	  // if no child has registered for this event,
	  // then there's no need to broadcast.
	  if (!this._eventsCount[event]) return
	  var children = this.$children
	  for (var i = 0, l = children.length; i < l; i++) {
	    var child = children[i]
	    child.$emit.apply(child, arguments)
	    if (child._shouldPropagate) {
	      child.$broadcast.apply(child, arguments)
	    }
	  }
	  return this
	}
	
	/**
	 * Recursively propagate an event up the parent chain.
	 *
	 * @param {String} event
	 * @param {...*} additional arguments
	 */
	
	exports.$dispatch = function () {
	  this.$emit.apply(this, arguments)
	  var parent = this.$parent
	  while (parent) {
	    parent.$emit.apply(parent, arguments)
	    parent = parent._shouldPropagate
	      ? parent.$parent
	      : null
	  }
	  return this
	}
	
	/**
	 * Modify the listener counts on all parents.
	 * This bookkeeping allows $broadcast to return early when
	 * no child has listened to a certain event.
	 *
	 * @param {Vue} vm
	 * @param {String} event
	 * @param {Number} count
	 */
	
	var hookRE = /^hook:/
	function modifyListenerCount (vm, event, count) {
	  var parent = vm.$parent
	  // hooks do not get broadcasted so no need
	  // to do bookkeeping for them
	  if (!parent || !count || hookRE.test(event)) return
	  while (parent) {
	    parent._eventsCount[event] =
	      (parent._eventsCount[event] || 0) + count
	    parent = parent.$parent
	  }
	}


/***/ },
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var config = __webpack_require__(7)
	
	/**
	 * Expose useful internals
	 */
	
	exports.util = _
	exports.config = config
	exports.set = _.set
	exports.delete = _.delete
	exports.nextTick = _.nextTick
	
	/**
	 * The following are exposed for advanced usage / plugins
	 */
	
	exports.compiler = __webpack_require__(18)
	exports.FragmentFactory = __webpack_require__(23)
	exports.internalDirectives = __webpack_require__(87)
	exports.parsers = {
	  path: __webpack_require__(20),
	  text: __webpack_require__(25),
	  template: __webpack_require__(11),
	  directive: __webpack_require__(19),
	  expression: __webpack_require__(24)
	}
	
	/**
	 * Each instance constructor, including Vue, has a unique
	 * cid. This enables us to create wrapped "child
	 * constructors" for prototypal inheritance and cache them.
	 */
	
	exports.cid = 0
	var cid = 1
	
	/**
	 * Class inheritance
	 *
	 * @param {Object} extendOptions
	 */
	
	exports.extend = function (extendOptions) {
	  extendOptions = extendOptions || {}
	  var Super = this
	  var isFirstExtend = Super.cid === 0
	  if (isFirstExtend && extendOptions._Ctor) {
	    return extendOptions._Ctor
	  }
	  var name = extendOptions.name || Super.options.name
	  var Sub = createClass(name || 'VueComponent')
	  Sub.prototype = Object.create(Super.prototype)
	  Sub.prototype.constructor = Sub
	  Sub.cid = cid++
	  Sub.options = _.mergeOptions(
	    Super.options,
	    extendOptions
	  )
	  Sub['super'] = Super
	  // allow further extension
	  Sub.extend = Super.extend
	  // create asset registers, so extended classes
	  // can have their private assets too.
	  config._assetTypes.forEach(function (type) {
	    Sub[type] = Super[type]
	  })
	  // enable recursive self-lookup
	  if (name) {
	    Sub.options.components[name] = Sub
	  }
	  // cache constructor
	  if (isFirstExtend) {
	    extendOptions._Ctor = Sub
	  }
	  return Sub
	}
	
	/**
	 * A function that returns a sub-class constructor with the
	 * given name. This gives us much nicer output when
	 * logging instances in the console.
	 *
	 * @param {String} name
	 * @return {Function}
	 */
	
	function createClass (name) {
	  return new Function(
	    'return function ' + _.classify(name) +
	    ' (options) { this._init(options) }'
	  )()
	}
	
	/**
	 * Plugin system
	 *
	 * @param {Object} plugin
	 */
	
	exports.use = function (plugin) {
	  /* istanbul ignore if */
	  if (plugin.installed) {
	    return
	  }
	  // additional parameters
	  var args = _.toArray(arguments, 1)
	  args.unshift(this)
	  if (typeof plugin.install === 'function') {
	    plugin.install.apply(plugin, args)
	  } else {
	    plugin.apply(null, args)
	  }
	  plugin.installed = true
	  return this
	}
	
	/**
	 * Apply a global mixin by merging it into the default
	 * options.
	 */
	
	exports.mixin = function (mixin) {
	  var Vue = _.Vue
	  Vue.options = _.mergeOptions(Vue.options, mixin)
	}
	
	/**
	 * Create asset registration methods with the following
	 * signature:
	 *
	 * @param {String} id
	 * @param {*} definition
	 */
	
	config._assetTypes.forEach(function (type) {
	  exports[type] = function (id, definition) {
	    if (!definition) {
	      return this.options[type + 's'][id]
	    } else {
	      if (
	        type === 'component' &&
	        _.isPlainObject(definition)
	      ) {
	        definition.name = id
	        definition = _.Vue.extend(definition)
	      }
	      this.options[type + 's'][id] = definition
	      return definition
	    }
	  }
	})


/***/ },
/* 321 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var compiler = __webpack_require__(18)
	
	/**
	 * Set instance target element and kick off the compilation
	 * process. The passed in `el` can be a selector string, an
	 * existing Element, or a DocumentFragment (for block
	 * instances).
	 *
	 * @param {Element|DocumentFragment|string} el
	 * @public
	 */
	
	exports.$mount = function (el) {
	  if (this._isCompiled) {
	    ("development") !== 'production' && _.warn(
	      '$mount() should be called only once.'
	    )
	    return
	  }
	  el = _.query(el)
	  if (!el) {
	    el = document.createElement('div')
	  }
	  this._compile(el)
	  this._initDOMHooks()
	  if (_.inDoc(this.$el)) {
	    this._callHook('attached')
	    ready.call(this)
	  } else {
	    this.$once('hook:attached', ready)
	  }
	  return this
	}
	
	/**
	 * Mark an instance as ready.
	 */
	
	function ready () {
	  this._isAttached = true
	  this._isReady = true
	  this._callHook('ready')
	}
	
	/**
	 * Teardown the instance, simply delegate to the internal
	 * _destroy.
	 */
	
	exports.$destroy = function (remove, deferCleanup) {
	  this._destroy(remove, deferCleanup)
	}
	
	/**
	 * Partially compile a piece of DOM and return a
	 * decompile function.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Vue} [host]
	 * @return {Function}
	 */
	
	exports.$compile = function (el, host, scope, frag) {
	  return compiler.compile(el, this.$options, true)(
	    this, el, host, scope, frag
	  )
	}


/***/ },
/* 322 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var config = __webpack_require__(7)
	
	// we have two separate queues: one for directive updates
	// and one for user watcher registered via $watch().
	// we want to guarantee directive updates to be called
	// before user watchers so that when user watchers are
	// triggered, the DOM would have already been in updated
	// state.
	var queue = []
	var userQueue = []
	var has = {}
	var circular = {}
	var waiting = false
	var internalQueueDepleted = false
	
	/**
	 * Reset the batcher's state.
	 */
	
	function resetBatcherState () {
	  queue = []
	  userQueue = []
	  has = {}
	  circular = {}
	  waiting = internalQueueDepleted = false
	}
	
	/**
	 * Flush both queues and run the watchers.
	 */
	
	function flushBatcherQueue () {
	  runBatcherQueue(queue)
	  internalQueueDepleted = true
	  runBatcherQueue(userQueue)
	  // dev tool hook
	  /* istanbul ignore if */
	  if (true) {
	    if (_.inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
	      window.__VUE_DEVTOOLS_GLOBAL_HOOK__.emit('flush')
	    }
	  }
	  resetBatcherState()
	}
	
	/**
	 * Run the watchers in a single queue.
	 *
	 * @param {Array} queue
	 */
	
	function runBatcherQueue (queue) {
	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (var i = 0; i < queue.length; i++) {
	    var watcher = queue[i]
	    var id = watcher.id
	    has[id] = null
	    watcher.run()
	    // in dev build, check and stop circular updates.
	    if (("development") !== 'production' && has[id] != null) {
	      circular[id] = (circular[id] || 0) + 1
	      if (circular[id] > config._maxUpdateCount) {
	        queue.splice(has[id], 1)
	        _.warn(
	          'You may have an infinite update loop for watcher ' +
	          'with expression: ' + watcher.expression
	        )
	      }
	    }
	  }
	}
	
	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 *
	 * @param {Watcher} watcher
	 *   properties:
	 *   - {Number} id
	 *   - {Function} run
	 */
	
	exports.push = function (watcher) {
	  var id = watcher.id
	  if (has[id] == null) {
	    // if an internal watcher is pushed, but the internal
	    // queue is already depleted, we run it immediately.
	    if (internalQueueDepleted && !watcher.user) {
	      watcher.run()
	      return
	    }
	    // push watcher into appropriate queue
	    var q = watcher.user ? userQueue : queue
	    has[id] = q.length
	    q.push(watcher)
	    // queue the flush
	    if (!waiting) {
	      waiting = true
	      _.nextTick(flushBatcherQueue)
	    }
	  }
	}


/***/ },
/* 323 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var dirParser = __webpack_require__(19)
	var propDef = __webpack_require__(88)
	var propBindingModes = __webpack_require__(7)._propBindingModes
	var empty = {}
	
	// regexes
	var identRE = __webpack_require__(20).identRE
	var settablePathRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/
	
	/**
	 * Compile props on a root element and return
	 * a props link function.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Array} propOptions
	 * @return {Function} propsLinkFn
	 */
	
	module.exports = function compileProps (el, propOptions) {
	  var props = []
	  var names = Object.keys(propOptions)
	  var i = names.length
	  var options, name, attr, value, path, parsed, prop, isTitleBinding
	  while (i--) {
	    name = names[i]
	    options = propOptions[name] || empty
	
	    if (("development") !== 'production' && name === '$data') {
	      _.warn('Do not use $data as prop.')
	      continue
	    }
	
	    // props could contain dashes, which will be
	    // interpreted as minus calculations by the parser
	    // so we need to camelize the path here
	    path = _.camelize(name)
	    if (!identRE.test(path)) {
	      ("development") !== 'production' && _.warn(
	        'Invalid prop key: "' + name + '". Prop keys ' +
	        'must be valid identifiers.'
	      )
	      continue
	    }
	
	    prop = {
	      name: name,
	      path: path,
	      options: options,
	      mode: propBindingModes.ONE_WAY
	    }
	
	    // IE title issues
	    isTitleBinding = false
	    if (name === 'title' && (el.getAttribute(':title') || el.getAttribute('v-bind:title'))) {
	      isTitleBinding = true
	    }
	
	    // first check literal version
	    attr = _.hyphenate(name)
	    value = prop.raw = _.attr(el, attr)
	    if (value === null || isTitleBinding) {
	      // then check dynamic version
	      if ((value = _.getBindAttr(el, attr)) === null) {
	        if ((value = _.getBindAttr(el, attr + '.sync')) !== null) {
	          prop.mode = propBindingModes.TWO_WAY
	        } else if ((value = _.getBindAttr(el, attr + '.once')) !== null) {
	          prop.mode = propBindingModes.ONE_TIME
	        }
	      }
	      prop.raw = value
	      if (value !== null) {
	        parsed = dirParser.parse(value)
	        value = parsed.expression
	        prop.filters = parsed.filters
	        // check binding type
	        if (_.isLiteral(value)) {
	          // for expressions containing literal numbers and
	          // booleans, there's no need to setup a prop binding,
	          // so we can optimize them as a one-time set.
	          prop.optimizedLiteral = true
	        } else {
	          prop.dynamic = true
	          // check non-settable path for two-way bindings
	          if (("development") !== 'production' &&
	              prop.mode === propBindingModes.TWO_WAY &&
	              !settablePathRE.test(value)) {
	            prop.mode = propBindingModes.ONE_WAY
	            _.warn(
	              'Cannot bind two-way prop with non-settable ' +
	              'parent path: ' + value
	            )
	          }
	        }
	        prop.parentPath = value
	
	        // warn required two-way
	        if (
	          ("development") !== 'production' &&
	          options.twoWay &&
	          prop.mode !== propBindingModes.TWO_WAY
	        ) {
	          _.warn(
	            'Prop "' + name + '" expects a two-way binding type.'
	          )
	        }
	
	      } else if (options.required) {
	        // warn missing required
	        ("development") !== 'production' && _.warn(
	          'Missing required prop: ' + name
	        )
	      }
	    }
	
	    // push prop
	    props.push(prop)
	  }
	  return makePropsLinkFn(props)
	}
	
	/**
	 * Build a function that applies props to a vm.
	 *
	 * @param {Array} props
	 * @return {Function} propsLinkFn
	 */
	
	function makePropsLinkFn (props) {
	  return function propsLinkFn (vm, scope) {
	    // store resolved props info
	    vm._props = {}
	    var i = props.length
	    var prop, path, options, value, raw
	    while (i--) {
	      prop = props[i]
	      raw = prop.raw
	      path = prop.path
	      options = prop.options
	      vm._props[path] = prop
	      if (raw === null) {
	        // initialize absent prop
	        _.initProp(vm, prop, getDefault(vm, options))
	      } else if (prop.dynamic) {
	        // dynamic prop
	        if (vm._context) {
	          if (prop.mode === propBindingModes.ONE_TIME) {
	            // one time binding
	            value = (scope || vm._context).$get(prop.parentPath)
	            _.initProp(vm, prop, value)
	          } else {
	            // dynamic binding
	            vm._bindDir({
	              name: 'prop',
	              def: propDef,
	              prop: prop
	            }, null, null, scope) // el, host, scope
	          }
	        } else {
	          ("development") !== 'production' && _.warn(
	            'Cannot bind dynamic prop on a root instance' +
	            ' with no parent: ' + prop.name + '="' +
	            raw + '"'
	          )
	        }
	      } else if (prop.optimizedLiteral) {
	        // optimized literal, cast it and just set once
	        raw = _.stripQuotes(raw)
	        value = _.toBoolean(_.toNumber(raw))
	        _.initProp(vm, prop, value)
	      } else {
	        // string literal, but we need to cater for
	        // Boolean props with no value
	        value = options.type === Boolean && raw === ''
	          ? true
	          : raw
	        _.initProp(vm, prop, value)
	      }
	    }
	  }
	}
	
	/**
	 * Get the default value of a prop.
	 *
	 * @param {Vue} vm
	 * @param {Object} options
	 * @return {*}
	 */
	
	function getDefault (vm, options) {
	  // no default, return undefined
	  if (!options.hasOwnProperty('default')) {
	    // absent boolean value defaults to false
	    return options.type === Boolean
	      ? false
	      : undefined
	  }
	  var def = options.default
	  // warn against non-factory defaults for Object & Array
	  if (_.isObject(def)) {
	    ("development") !== 'production' && _.warn(
	      'Object/Array as default prop values will be shared ' +
	      'across multiple instances. Use a factory function ' +
	      'to return the default value instead.'
	    )
	  }
	  // call factory function for non-Function types
	  return typeof def === 'function' && options.type !== Function
	    ? def.call(vm)
	    : def
	}


/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var publicDirectives = __webpack_require__(92)
	var internalDirectives = __webpack_require__(87)
	var compileProps = __webpack_require__(323)
	var textParser = __webpack_require__(25)
	var dirParser = __webpack_require__(19)
	var templateParser = __webpack_require__(11)
	var resolveAsset = _.resolveAsset
	
	// special binding prefixes
	var bindRE = /^v-bind:|^:/
	var onRE = /^v-on:|^@/
	var argRE = /:(.*)$/
	var modifierRE = /\.[^\.]+/g
	var transitionRE = /^(v-bind:|:)?transition$/
	
	// terminal directives
	var terminalDirectives = [
	  'for',
	  'if'
	]
	
	/**
	 * Compile a template and return a reusable composite link
	 * function, which recursively contains more link functions
	 * inside. This top level compile function would normally
	 * be called on instance root nodes, but can also be used
	 * for partial compilation if the partial argument is true.
	 *
	 * The returned composite link function, when called, will
	 * return an unlink function that tearsdown all directives
	 * created during the linking phase.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Object} options
	 * @param {Boolean} partial
	 * @return {Function}
	 */
	
	exports.compile = function (el, options, partial) {
	  // link function for the node itself.
	  var nodeLinkFn = partial || !options._asComponent
	    ? compileNode(el, options)
	    : null
	  // link function for the childNodes
	  var childLinkFn =
	    !(nodeLinkFn && nodeLinkFn.terminal) &&
	    el.tagName !== 'SCRIPT' &&
	    el.hasChildNodes()
	      ? compileNodeList(el.childNodes, options)
	      : null
	
	  /**
	   * A composite linker function to be called on a already
	   * compiled piece of DOM, which instantiates all directive
	   * instances.
	   *
	   * @param {Vue} vm
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host] - host vm of transcluded content
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - link context fragment
	   * @return {Function|undefined}
	   */
	
	  return function compositeLinkFn (vm, el, host, scope, frag) {
	    // cache childNodes before linking parent, fix #657
	    var childNodes = _.toArray(el.childNodes)
	    // link
	    var dirs = linkAndCapture(function compositeLinkCapturer () {
	      if (nodeLinkFn) nodeLinkFn(vm, el, host, scope, frag)
	      if (childLinkFn) childLinkFn(vm, childNodes, host, scope, frag)
	    }, vm)
	    return makeUnlinkFn(vm, dirs)
	  }
	}
	
	/**
	 * Apply a linker to a vm/element pair and capture the
	 * directives created during the process.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 */
	
	function linkAndCapture (linker, vm) {
	  var originalDirCount = vm._directives.length
	  linker()
	  var dirs = vm._directives.slice(originalDirCount)
	  dirs.sort(directiveComparator)
	  for (var i = 0, l = dirs.length; i < l; i++) {
	    dirs[i]._bind()
	  }
	  return dirs
	}
	
	/**
	 * Directive priority sort comparator
	 *
	 * @param {Object} a
	 * @param {Object} b
	 */
	
	function directiveComparator (a, b) {
	  a = a.descriptor.def.priority || 0
	  b = b.descriptor.def.priority || 0
	  return a > b ? -1 : a === b ? 0 : 1
	}
	
	/**
	 * Linker functions return an unlink function that
	 * tearsdown all directives instances generated during
	 * the process.
	 *
	 * We create unlink functions with only the necessary
	 * information to avoid retaining additional closures.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Vue} [context]
	 * @param {Array} [contextDirs]
	 * @return {Function}
	 */
	
	function makeUnlinkFn (vm, dirs, context, contextDirs) {
	  return function unlink (destroying) {
	    teardownDirs(vm, dirs, destroying)
	    if (context && contextDirs) {
	      teardownDirs(context, contextDirs)
	    }
	  }
	}
	
	/**
	 * Teardown partial linked directives.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Boolean} destroying
	 */
	
	function teardownDirs (vm, dirs, destroying) {
	  var i = dirs.length
	  while (i--) {
	    dirs[i]._teardown()
	    if (!destroying) {
	      vm._directives.$remove(dirs[i])
	    }
	  }
	}
	
	/**
	 * Compile link props on an instance.
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 * @param {Object} props
	 * @param {Object} [scope]
	 * @return {Function}
	 */
	
	exports.compileAndLinkProps = function (vm, el, props, scope) {
	  var propsLinkFn = compileProps(el, props)
	  var propDirs = linkAndCapture(function () {
	    propsLinkFn(vm, scope)
	  }, vm)
	  return makeUnlinkFn(vm, propDirs)
	}
	
	/**
	 * Compile the root element of an instance.
	 *
	 * 1. attrs on context container (context scope)
	 * 2. attrs on the component template root node, if
	 *    replace:true (child scope)
	 *
	 * If this is a fragment instance, we only need to compile 1.
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 * @param {Object} options
	 * @param {Object} contextOptions
	 * @return {Function}
	 */
	
	exports.compileRoot = function (el, options, contextOptions) {
	  var containerAttrs = options._containerAttrs
	  var replacerAttrs = options._replacerAttrs
	  var contextLinkFn, replacerLinkFn
	
	  // only need to compile other attributes for
	  // non-fragment instances
	  if (el.nodeType !== 11) {
	    // for components, container and replacer need to be
	    // compiled separately and linked in different scopes.
	    if (options._asComponent) {
	      // 2. container attributes
	      if (containerAttrs && contextOptions) {
	        contextLinkFn = compileDirectives(containerAttrs, contextOptions)
	      }
	      if (replacerAttrs) {
	        // 3. replacer attributes
	        replacerLinkFn = compileDirectives(replacerAttrs, options)
	      }
	    } else {
	      // non-component, just compile as a normal element.
	      replacerLinkFn = compileDirectives(el.attributes, options)
	    }
	  } else if (("development") !== 'production' && containerAttrs) {
	    // warn container directives for fragment instances
	    containerAttrs.forEach(function (attr) {
	      if (attr.name.indexOf('v-') === 0 || attr.name === 'transition') {
	        _.warn(
	          attr.name + ' is ignored on component ' +
	          '<' + options.el.tagName.toLowerCase() + '> because ' +
	          'the component is a fragment instance: ' +
	          'http://vuejs.org/guide/components.html#Fragment_Instance'
	        )
	      }
	    })
	  }
	
	  return function rootLinkFn (vm, el, scope) {
	    // link context scope dirs
	    var context = vm._context
	    var contextDirs
	    if (context && contextLinkFn) {
	      contextDirs = linkAndCapture(function () {
	        contextLinkFn(context, el, null, scope)
	      }, context)
	    }
	
	    // link self
	    var selfDirs = linkAndCapture(function () {
	      if (replacerLinkFn) replacerLinkFn(vm, el)
	    }, vm)
	
	    // return the unlink function that tearsdown context
	    // container directives.
	    return makeUnlinkFn(vm, selfDirs, context, contextDirs)
	  }
	}
	
	/**
	 * Compile a node and return a nodeLinkFn based on the
	 * node type.
	 *
	 * @param {Node} node
	 * @param {Object} options
	 * @return {Function|null}
	 */
	
	function compileNode (node, options) {
	  var type = node.nodeType
	  if (type === 1 && node.tagName !== 'SCRIPT') {
	    return compileElement(node, options)
	  } else if (type === 3 && node.data.trim()) {
	    return compileTextNode(node, options)
	  } else {
	    return null
	  }
	}
	
	/**
	 * Compile an element and return a nodeLinkFn.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|null}
	 */
	
	function compileElement (el, options) {
	  // preprocess textareas.
	  // textarea treats its text content as the initial value.
	  // just bind it as an attr directive for value.
	  if (el.tagName === 'TEXTAREA') {
	    var tokens = textParser.parse(el.value)
	    if (tokens) {
	      el.setAttribute(':value', textParser.tokensToExp(tokens))
	      el.value = ''
	    }
	  }
	  var linkFn
	  var hasAttrs = el.hasAttributes()
	  // check terminal directives (for & if)
	  if (hasAttrs) {
	    linkFn = checkTerminalDirectives(el, options)
	  }
	  // check element directives
	  if (!linkFn) {
	    linkFn = checkElementDirectives(el, options)
	  }
	  // check component
	  if (!linkFn) {
	    linkFn = checkComponent(el, options)
	  }
	  // normal directives
	  if (!linkFn && hasAttrs) {
	    linkFn = compileDirectives(el.attributes, options)
	  }
	  return linkFn
	}
	
	/**
	 * Compile a textNode and return a nodeLinkFn.
	 *
	 * @param {TextNode} node
	 * @param {Object} options
	 * @return {Function|null} textNodeLinkFn
	 */
	
	function compileTextNode (node, options) {
	  var tokens = textParser.parse(node.data)
	  if (!tokens) {
	    return null
	  }
	  var frag = document.createDocumentFragment()
	  var el, token
	  for (var i = 0, l = tokens.length; i < l; i++) {
	    token = tokens[i]
	    el = token.tag
	      ? processTextToken(token, options)
	      : document.createTextNode(token.value)
	    frag.appendChild(el)
	  }
	  return makeTextNodeLinkFn(tokens, frag, options)
	}
	
	/**
	 * Process a single text token.
	 *
	 * @param {Object} token
	 * @param {Object} options
	 * @return {Node}
	 */
	
	function processTextToken (token, options) {
	  var el
	  if (token.oneTime) {
	    el = document.createTextNode(token.value)
	  } else {
	    if (token.html) {
	      el = document.createComment('v-html')
	      setTokenType('html')
	    } else {
	      // IE will clean up empty textNodes during
	      // frag.cloneNode(true), so we have to give it
	      // something here...
	      el = document.createTextNode(' ')
	      setTokenType('text')
	    }
	  }
	  function setTokenType (type) {
	    if (token.descriptor) return
	    var parsed = dirParser.parse(token.value)
	    token.descriptor = {
	      name: type,
	      def: publicDirectives[type],
	      expression: parsed.expression,
	      filters: parsed.filters
	    }
	  }
	  return el
	}
	
	/**
	 * Build a function that processes a textNode.
	 *
	 * @param {Array<Object>} tokens
	 * @param {DocumentFragment} frag
	 */
	
	function makeTextNodeLinkFn (tokens, frag) {
	  return function textNodeLinkFn (vm, el, host, scope) {
	    var fragClone = frag.cloneNode(true)
	    var childNodes = _.toArray(fragClone.childNodes)
	    var token, value, node
	    for (var i = 0, l = tokens.length; i < l; i++) {
	      token = tokens[i]
	      value = token.value
	      if (token.tag) {
	        node = childNodes[i]
	        if (token.oneTime) {
	          value = (scope || vm).$eval(value)
	          if (token.html) {
	            _.replace(node, templateParser.parse(value, true))
	          } else {
	            node.data = value
	          }
	        } else {
	          vm._bindDir(token.descriptor, node, host, scope)
	        }
	      }
	    }
	    _.replace(el, fragClone)
	  }
	}
	
	/**
	 * Compile a node list and return a childLinkFn.
	 *
	 * @param {NodeList} nodeList
	 * @param {Object} options
	 * @return {Function|undefined}
	 */
	
	function compileNodeList (nodeList, options) {
	  var linkFns = []
	  var nodeLinkFn, childLinkFn, node
	  for (var i = 0, l = nodeList.length; i < l; i++) {
	    node = nodeList[i]
	    nodeLinkFn = compileNode(node, options)
	    childLinkFn =
	      !(nodeLinkFn && nodeLinkFn.terminal) &&
	      node.tagName !== 'SCRIPT' &&
	      node.hasChildNodes()
	        ? compileNodeList(node.childNodes, options)
	        : null
	    linkFns.push(nodeLinkFn, childLinkFn)
	  }
	  return linkFns.length
	    ? makeChildLinkFn(linkFns)
	    : null
	}
	
	/**
	 * Make a child link function for a node's childNodes.
	 *
	 * @param {Array<Function>} linkFns
	 * @return {Function} childLinkFn
	 */
	
	function makeChildLinkFn (linkFns) {
	  return function childLinkFn (vm, nodes, host, scope, frag) {
	    var node, nodeLinkFn, childrenLinkFn
	    for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
	      node = nodes[n]
	      nodeLinkFn = linkFns[i++]
	      childrenLinkFn = linkFns[i++]
	      // cache childNodes before linking parent, fix #657
	      var childNodes = _.toArray(node.childNodes)
	      if (nodeLinkFn) {
	        nodeLinkFn(vm, node, host, scope, frag)
	      }
	      if (childrenLinkFn) {
	        childrenLinkFn(vm, childNodes, host, scope, frag)
	      }
	    }
	  }
	}
	
	/**
	 * Check for element directives (custom elements that should
	 * be resovled as terminal directives).
	 *
	 * @param {Element} el
	 * @param {Object} options
	 */
	
	function checkElementDirectives (el, options) {
	  var tag = el.tagName.toLowerCase()
	  if (_.commonTagRE.test(tag)) return
	  var def = resolveAsset(options, 'elementDirectives', tag)
	  if (def) {
	    return makeTerminalNodeLinkFn(el, tag, '', options, def)
	  }
	}
	
	/**
	 * Check if an element is a component. If yes, return
	 * a component link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|undefined}
	 */
	
	function checkComponent (el, options) {
	  var component = _.checkComponent(el, options)
	  if (component) {
	    var descriptor = {
	      name: 'component',
	      expression: component.id,
	      def: internalDirectives.component,
	      modifiers: {
	        literal: !component.dynamic
	      }
	    }
	    var componentLinkFn = function (vm, el, host, scope, frag) {
	      vm._bindDir(descriptor, el, host, scope, frag)
	    }
	    componentLinkFn.terminal = true
	    return componentLinkFn
	  }
	}
	
	/**
	 * Check an element for terminal directives in fixed order.
	 * If it finds one, return a terminal link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function} terminalLinkFn
	 */
	
	function checkTerminalDirectives (el, options) {
	  // skip v-pre
	  if (_.attr(el, 'v-pre') !== null) {
	    return skip
	  }
	  // skip v-else block, but only if following v-if
	  if (el.hasAttribute('v-else')) {
	    var prev = el.previousElementSibling
	    if (prev && prev.hasAttribute('v-if')) {
	      return skip
	    }
	  }
	  var value, dirName
	  for (var i = 0, l = terminalDirectives.length; i < l; i++) {
	    dirName = terminalDirectives[i]
	    /* eslint-disable no-cond-assign */
	    if (value = el.getAttribute('v-' + dirName)) {
	      return makeTerminalNodeLinkFn(el, dirName, value, options)
	    }
	    /* eslint-enable no-cond-assign */
	  }
	}
	
	function skip () {}
	skip.terminal = true
	
	/**
	 * Build a node link function for a terminal directive.
	 * A terminal link function terminates the current
	 * compilation recursion and handles compilation of the
	 * subtree in the directive.
	 *
	 * @param {Element} el
	 * @param {String} dirName
	 * @param {String} value
	 * @param {Object} options
	 * @param {Object} [def]
	 * @return {Function} terminalLinkFn
	 */
	
	function makeTerminalNodeLinkFn (el, dirName, value, options, def) {
	  var parsed = dirParser.parse(value)
	  var descriptor = {
	    name: dirName,
	    expression: parsed.expression,
	    filters: parsed.filters,
	    raw: value,
	    // either an element directive, or if/for
	    def: def || publicDirectives[dirName]
	  }
	  var fn = function terminalNodeLinkFn (vm, el, host, scope, frag) {
	    vm._bindDir(descriptor, el, host, scope, frag)
	  }
	  fn.terminal = true
	  return fn
	}
	
	/**
	 * Compile the directives on an element and return a linker.
	 *
	 * @param {Array|NamedNodeMap} attrs
	 * @param {Object} options
	 * @return {Function}
	 */
	
	function compileDirectives (attrs, options) {
	  var i = attrs.length
	  var dirs = []
	  var attr, name, value, rawName, rawValue, dirName, arg, modifiers, dirDef, tokens
	  while (i--) {
	    attr = attrs[i]
	    name = rawName = attr.name
	    value = rawValue = attr.value
	    tokens = textParser.parse(value)
	    // reset arg
	    arg = null
	    // check modifiers
	    modifiers = parseModifiers(name)
	    name = name.replace(modifierRE, '')
	
	    // attribute interpolations
	    if (tokens) {
	      value = textParser.tokensToExp(tokens)
	      arg = name
	      pushDir('bind', publicDirectives.bind, true)
	    } else
	
	    // special attribute: transition
	    if (transitionRE.test(name)) {
	      modifiers.literal = !bindRE.test(name)
	      pushDir('transition', internalDirectives.transition)
	    } else
	
	    // event handlers
	    if (onRE.test(name)) {
	      arg = name.replace(onRE, '')
	      pushDir('on', publicDirectives.on)
	    } else
	
	    // attribute bindings
	    if (bindRE.test(name)) {
	      dirName = name.replace(bindRE, '')
	      if (dirName === 'style' || dirName === 'class') {
	        pushDir(dirName, internalDirectives[dirName])
	      } else {
	        arg = dirName
	        pushDir('bind', publicDirectives.bind)
	      }
	    } else
	
	    // normal directives
	    if (name.indexOf('v-') === 0) {
	      // check arg
	      arg = (arg = name.match(argRE)) && arg[1]
	      if (arg) {
	        name = name.replace(argRE, '')
	      }
	      // extract directive name
	      dirName = name.slice(2)
	
	      // skip v-else (when used with v-show)
	      if (dirName === 'else') {
	        continue
	      }
	
	      dirDef = resolveAsset(options, 'directives', dirName)
	
	      if (true) {
	        _.assertAsset(dirDef, 'directive', dirName)
	      }
	
	      if (dirDef) {
	        if (_.isLiteral(value)) {
	          value = _.stripQuotes(value)
	          modifiers.literal = true
	        }
	        pushDir(dirName, dirDef)
	      }
	    }
	  }
	
	  /**
	   * Push a directive.
	   *
	   * @param {String} dirName
	   * @param {Object|Function} def
	   * @param {Boolean} [interp]
	   */
	
	  function pushDir (dirName, def, interp) {
	    var parsed = dirParser.parse(value)
	    dirs.push({
	      name: dirName,
	      attr: rawName,
	      raw: rawValue,
	      def: def,
	      arg: arg,
	      modifiers: modifiers,
	      expression: parsed.expression,
	      filters: parsed.filters,
	      interp: interp
	    })
	  }
	
	  if (dirs.length) {
	    return makeNodeLinkFn(dirs)
	  }
	}
	
	/**
	 * Parse modifiers from directive attribute name.
	 *
	 * @param {String} name
	 * @return {Object}
	 */
	
	function parseModifiers (name) {
	  var res = Object.create(null)
	  var match = name.match(modifierRE)
	  if (match) {
	    var i = match.length
	    while (i--) {
	      res[match[i].slice(1)] = true
	    }
	  }
	  return res
	}
	
	/**
	 * Build a link function for all directives on a single node.
	 *
	 * @param {Array} directives
	 * @return {Function} directivesLinkFn
	 */
	
	function makeNodeLinkFn (directives) {
	  return function nodeLinkFn (vm, el, host, scope, frag) {
	    // reverse apply because it's sorted low to high
	    var i = directives.length
	    while (i--) {
	      vm._bindDir(directives[i], el, host, scope, frag)
	    }
	  }
	}


/***/ },
/* 325 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var templateParser = __webpack_require__(11)
	var specialCharRE = /[^\w\-:\.]/
	
	/**
	 * Process an element or a DocumentFragment based on a
	 * instance option object. This allows us to transclude
	 * a template node/fragment before the instance is created,
	 * so the processed fragment can then be cloned and reused
	 * in v-for.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */
	
	exports.transclude = function (el, options) {
	  // extract container attributes to pass them down
	  // to compiler, because they need to be compiled in
	  // parent scope. we are mutating the options object here
	  // assuming the same object will be used for compile
	  // right after this.
	  if (options) {
	    options._containerAttrs = extractAttrs(el)
	  }
	  // for template tags, what we want is its content as
	  // a documentFragment (for fragment instances)
	  if (_.isTemplate(el)) {
	    el = templateParser.parse(el)
	  }
	  if (options) {
	    if (options._asComponent && !options.template) {
	      options.template = '<slot></slot>'
	    }
	    if (options.template) {
	      options._content = _.extractContent(el)
	      el = transcludeTemplate(el, options)
	    }
	  }
	  if (el instanceof DocumentFragment) {
	    // anchors for fragment instance
	    // passing in `persist: true` to avoid them being
	    // discarded by IE during template cloning
	    _.prepend(_.createAnchor('v-start', true), el)
	    el.appendChild(_.createAnchor('v-end', true))
	  }
	  return el
	}
	
	/**
	 * Process the template option.
	 * If the replace option is true this will swap the $el.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */
	
	function transcludeTemplate (el, options) {
	  var template = options.template
	  var frag = templateParser.parse(template, true)
	  if (frag) {
	    var replacer = frag.firstChild
	    var tag = replacer.tagName && replacer.tagName.toLowerCase()
	    if (options.replace) {
	      /* istanbul ignore if */
	      if (el === document.body) {
	        ("development") !== 'production' && _.warn(
	          'You are mounting an instance with a template to ' +
	          '<body>. This will replace <body> entirely. You ' +
	          'should probably use `replace: false` here.'
	        )
	      }
	      // there are many cases where the instance must
	      // become a fragment instance: basically anything that
	      // can create more than 1 root nodes.
	      if (
	        // multi-children template
	        frag.childNodes.length > 1 ||
	        // non-element template
	        replacer.nodeType !== 1 ||
	        // single nested component
	        tag === 'component' ||
	        _.resolveAsset(options, 'components', tag) ||
	        replacer.hasAttribute('is') ||
	        replacer.hasAttribute(':is') ||
	        replacer.hasAttribute('v-bind:is') ||
	        // element directive
	        _.resolveAsset(options, 'elementDirectives', tag) ||
	        // for block
	        replacer.hasAttribute('v-for') ||
	        // if block
	        replacer.hasAttribute('v-if')
	      ) {
	        return frag
	      } else {
	        options._replacerAttrs = extractAttrs(replacer)
	        mergeAttrs(el, replacer)
	        return replacer
	      }
	    } else {
	      el.appendChild(frag)
	      return el
	    }
	  } else {
	    ("development") !== 'production' && _.warn(
	      'Invalid template option: ' + template
	    )
	  }
	}
	
	/**
	 * Helper to extract a component container's attributes
	 * into a plain object array.
	 *
	 * @param {Element} el
	 * @return {Array}
	 */
	
	function extractAttrs (el) {
	  if (el.nodeType === 1 && el.hasAttributes()) {
	    return _.toArray(el.attributes)
	  }
	}
	
	/**
	 * Merge the attributes of two elements, and make sure
	 * the class names are merged properly.
	 *
	 * @param {Element} from
	 * @param {Element} to
	 */
	
	function mergeAttrs (from, to) {
	  var attrs = from.attributes
	  var i = attrs.length
	  var name, value
	  while (i--) {
	    name = attrs[i].name
	    value = attrs[i].value
	    if (!to.hasAttribute(name) && !specialCharRE.test(name)) {
	      to.setAttribute(name, value)
	    } else if (name === 'class') {
	      value = to.getAttribute(name) + ' ' + value
	      to.setAttribute(name, value)
	    }
	  }
	}


/***/ },
/* 326 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var Watcher = __webpack_require__(27)
	var expParser = __webpack_require__(24)
	function noop () {}
	
	/**
	 * A directive links a DOM element with a piece of data,
	 * which is the result of evaluating an expression.
	 * It registers a watcher with the expression and calls
	 * the DOM update function when a change is triggered.
	 *
	 * @param {String} name
	 * @param {Node} el
	 * @param {Vue} vm
	 * @param {Object} descriptor
	 *                 - {String} name
	 *                 - {Object} def
	 *                 - {String} expression
	 *                 - {Array<Object>} [filters]
	 *                 - {Boolean} literal
	 *                 - {String} attr
	 *                 - {String} raw
	 * @param {Object} def - directive definition object
	 * @param {Vue} [host] - transclusion host component
	 * @param {Object} [scope] - v-for scope
	 * @param {Fragment} [frag] - owner fragment
	 * @constructor
	 */
	
	function Directive (descriptor, vm, el, host, scope, frag) {
	  this.vm = vm
	  this.el = el
	  // copy descriptor properties
	  this.descriptor = descriptor
	  this.name = descriptor.name
	  this.expression = descriptor.expression
	  this.arg = descriptor.arg
	  this.modifiers = descriptor.modifiers
	  this.filters = descriptor.filters
	  this.literal = this.modifiers && this.modifiers.literal
	  // private
	  this._locked = false
	  this._bound = false
	  this._listeners = null
	  // link context
	  this._host = host
	  this._scope = scope
	  this._frag = frag
	  // store directives on node in dev mode
	  if (("development") !== 'production' && this.el) {
	    this.el._vue_directives = this.el._vue_directives || []
	    this.el._vue_directives.push(this)
	  }
	}
	
	/**
	 * Initialize the directive, mixin definition properties,
	 * setup the watcher, call definition bind() and update()
	 * if present.
	 *
	 * @param {Object} def
	 */
	
	Directive.prototype._bind = function () {
	  var name = this.name
	  var descriptor = this.descriptor
	
	  // remove attribute
	  if (
	    (name !== 'cloak' || this.vm._isCompiled) &&
	    this.el && this.el.removeAttribute
	  ) {
	    var attr = descriptor.attr || ('v-' + name)
	    this.el.removeAttribute(attr)
	  }
	
	  // copy def properties
	  var def = descriptor.def
	  if (typeof def === 'function') {
	    this.update = def
	  } else {
	    _.extend(this, def)
	  }
	
	  // setup directive params
	  this._setupParams()
	
	  // initial bind
	  if (this.bind) {
	    this.bind()
	  }
	
	  if (this.literal) {
	    this.update && this.update(descriptor.raw)
	  } else if (
	    (this.expression || this.modifiers) &&
	    (this.update || this.twoWay) &&
	    !this._checkStatement()
	  ) {
	    // wrapped updater for context
	    var dir = this
	    if (this.update) {
	      this._update = function (val, oldVal) {
	        if (!dir._locked) {
	          dir.update(val, oldVal)
	        }
	      }
	    } else {
	      this._update = noop
	    }
	    var preProcess = this._preProcess
	      ? _.bind(this._preProcess, this)
	      : null
	    var postProcess = this._postProcess
	      ? _.bind(this._postProcess, this)
	      : null
	    var watcher = this._watcher = new Watcher(
	      this.vm,
	      this.expression,
	      this._update, // callback
	      {
	        filters: this.filters,
	        twoWay: this.twoWay,
	        deep: this.deep,
	        preProcess: preProcess,
	        postProcess: postProcess,
	        scope: this._scope
	      }
	    )
	    // v-model with inital inline value need to sync back to
	    // model instead of update to DOM on init. They would
	    // set the afterBind hook to indicate that.
	    if (this.afterBind) {
	      this.afterBind()
	    } else if (this.update) {
	      this.update(watcher.value)
	    }
	  }
	  this._bound = true
	}
	
	/**
	 * Setup all param attributes, e.g. track-by,
	 * transition-mode, etc...
	 */
	
	Directive.prototype._setupParams = function () {
	  if (!this.params) {
	    return
	  }
	  var params = this.params
	  // swap the params array with a fresh object.
	  this.params = Object.create(null)
	  var i = params.length
	  var key, val, mappedKey
	  while (i--) {
	    key = params[i]
	    mappedKey = _.camelize(key)
	    val = _.attr(this.el, key)
	    if (val != null) {
	      // static
	      this.params[mappedKey] = val === '' ? true : val
	    } else {
	      // dynamic
	      val = _.getBindAttr(this.el, key)
	      if (val != null) {
	        this._setupParamWatcher(mappedKey, val)
	      }
	    }
	  }
	}
	
	/**
	 * Setup a watcher for a dynamic param.
	 *
	 * @param {String} key
	 * @param {String} expression
	 */
	
	Directive.prototype._setupParamWatcher = function (key, expression) {
	  var self = this
	  var called = false
	  var unwatch = (this._scope || this.vm).$watch(expression, function (val, oldVal) {
	    self.params[key] = val
	    // since we are in immediate mode,
	    // only call the param change callbacks if this is not the first update.
	    if (called) {
	      var cb = self.paramWatchers && self.paramWatchers[key]
	      if (cb) {
	        cb.call(self, val, oldVal)
	      }
	    } else {
	      called = true
	    }
	  }, {
	    immediate: true
	  })
	  ;(this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(unwatch)
	}
	
	/**
	 * Check if the directive is a function caller
	 * and if the expression is a callable one. If both true,
	 * we wrap up the expression and use it as the event
	 * handler.
	 *
	 * e.g. on-click="a++"
	 *
	 * @return {Boolean}
	 */
	
	Directive.prototype._checkStatement = function () {
	  var expression = this.expression
	  if (
	    expression && this.acceptStatement &&
	    !expParser.isSimplePath(expression)
	  ) {
	    var fn = expParser.parse(expression).get
	    var scope = this._scope || this.vm
	    var handler = function () {
	      fn.call(scope, scope)
	    }
	    if (this.filters) {
	      handler = this.vm._applyFilters(handler, null, this.filters)
	    }
	    this.update(handler)
	    return true
	  }
	}
	
	/**
	 * Set the corresponding value with the setter.
	 * This should only be used in two-way directives
	 * e.g. v-model.
	 *
	 * @param {*} value
	 * @public
	 */
	
	Directive.prototype.set = function (value) {
	  /* istanbul ignore else */
	  if (this.twoWay) {
	    this._withLock(function () {
	      this._watcher.set(value)
	    })
	  } else if (true) {
	    _.warn(
	      'Directive.set() can only be used inside twoWay' +
	      'directives.'
	    )
	  }
	}
	
	/**
	 * Execute a function while preventing that function from
	 * triggering updates on this directive instance.
	 *
	 * @param {Function} fn
	 */
	
	Directive.prototype._withLock = function (fn) {
	  var self = this
	  self._locked = true
	  fn.call(self)
	  _.nextTick(function () {
	    self._locked = false
	  })
	}
	
	/**
	 * Convenience method that attaches a DOM event listener
	 * to the directive element and autometically tears it down
	 * during unbind.
	 *
	 * @param {String} event
	 * @param {Function} handler
	 */
	
	Directive.prototype.on = function (event, handler) {
	  _.on(this.el, event, handler)
	  ;(this._listeners || (this._listeners = []))
	    .push([event, handler])
	}
	
	/**
	 * Teardown the watcher and call unbind.
	 */
	
	Directive.prototype._teardown = function () {
	  if (this._bound) {
	    this._bound = false
	    if (this.unbind) {
	      this.unbind()
	    }
	    if (this._watcher) {
	      this._watcher.teardown()
	    }
	    var listeners = this._listeners
	    var i
	    if (listeners) {
	      i = listeners.length
	      while (i--) {
	        _.off(this.el, listeners[i][0], listeners[i][1])
	      }
	    }
	    var unwatchFns = this._paramUnwatchFns
	    if (unwatchFns) {
	      i = unwatchFns.length
	      while (i--) {
	        unwatchFns[i]()
	      }
	    }
	    if (("development") !== 'production' && this.el) {
	      this.el._vue_directives.$remove(this)
	    }
	    this.vm = this.el = this._watcher = this._listeners = null
	  }
	}
	
	module.exports = Directive


/***/ },
/* 327 */
/***/ function(module, exports, __webpack_require__) {

	exports.slot = __webpack_require__(329)
	exports.partial = __webpack_require__(328)


/***/ },
/* 328 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var vIf = __webpack_require__(91)
	var FragmentFactory = __webpack_require__(23)
	
	module.exports = {
	
	  priority: 1750,
	
	  params: ['name'],
	
	  // watch changes to name for dynamic partials
	  paramWatchers: {
	    name: function (value) {
	      vIf.remove.call(this)
	      if (value) {
	        this.insert(value)
	      }
	    }
	  },
	
	  bind: function () {
	    this.anchor = _.createAnchor('v-partial')
	    _.replace(this.el, this.anchor)
	    this.insert(this.params.name)
	  },
	
	  insert: function (id) {
	    var partial = _.resolveAsset(this.vm.$options, 'partials', id)
	    if (true) {
	      _.assertAsset(partial, 'partial', id)
	    }
	    if (partial) {
	      this.factory = new FragmentFactory(this.vm, partial)
	      vIf.insert.call(this)
	    }
	  },
	
	  unbind: function () {
	    if (this.frag) {
	      this.frag.destroy()
	    }
	  }
	}


/***/ },
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var templateParser = __webpack_require__(11)
	
	// This is the elementDirective that handles <content>
	// transclusions. It relies on the raw content of an
	// instance being stored as `$options._content` during
	// the transclude phase.
	
	module.exports = {
	
	  priority: 1750,
	
	  params: ['name'],
	
	  bind: function () {
	    var host = this.vm
	    var raw = host.$options._content
	    var content
	    if (!raw) {
	      this.fallback()
	      return
	    }
	    var context = host._context
	    var slotName = this.params.name
	    if (!slotName) {
	      // Default content
	      var self = this
	      var compileDefaultContent = function () {
	        self.compile(
	          extractFragment(raw.childNodes, raw, true),
	          context,
	          host
	        )
	      }
	      if (!host._isCompiled) {
	        // defer until the end of instance compilation,
	        // because the default outlet must wait until all
	        // other possible outlets with selectors have picked
	        // out their contents.
	        host.$once('hook:compiled', compileDefaultContent)
	      } else {
	        compileDefaultContent()
	      }
	    } else {
	      var selector = '[slot="' + slotName + '"]'
	      var nodes = raw.querySelectorAll(selector)
	      if (nodes.length) {
	        content = extractFragment(nodes, raw)
	        if (content.hasChildNodes()) {
	          this.compile(content, context, host)
	        } else {
	          this.fallback()
	        }
	      } else {
	        this.fallback()
	      }
	    }
	  },
	
	  fallback: function () {
	    this.compile(_.extractContent(this.el, true), this.vm)
	  },
	
	  compile: function (content, context, host) {
	    if (content && context) {
	      var scope = host
	        ? host._scope
	        : this._scope
	      this.unlink = context.$compile(
	        content, host, scope, this._frag
	      )
	    }
	    if (content) {
	      _.replace(this.el, content)
	    } else {
	      _.remove(this.el)
	    }
	  },
	
	  unbind: function () {
	    if (this.unlink) {
	      this.unlink()
	    }
	  }
	}
	
	/**
	 * Extract qualified content nodes from a node list.
	 *
	 * @param {NodeList} nodes
	 * @param {Element} parent
	 * @param {Boolean} main
	 * @return {DocumentFragment}
	 */
	
	function extractFragment (nodes, parent, main) {
	  var frag = document.createDocumentFragment()
	  for (var i = 0, l = nodes.length; i < l; i++) {
	    var node = nodes[i]
	    // if this is the main outlet, we want to skip all
	    // previously selected nodes;
	    // otherwise, we want to mark the node as selected.
	    // clone the node so the original raw content remains
	    // intact. this ensures proper re-compilation in cases
	    // where the outlet is inside a conditional block
	    if (main && !node.__v_selected) {
	      append(node)
	    } else if (!main && node.parentNode === parent) {
	      node.__v_selected = true
	      append(node)
	    }
	  }
	  return frag
	
	  function append (node) {
	    if (_.isTemplate(node) &&
	        !node.hasAttribute('v-if') &&
	        !node.hasAttribute('v-for')) {
	      node = templateParser.parse(node)
	    }
	    node = templateParser.clone(node)
	    frag.appendChild(node)
	  }
	}


/***/ },
/* 330 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var addClass = _.addClass
	var removeClass = _.removeClass
	
	module.exports = {
	
	  update: function (value) {
	    if (value && typeof value === 'string') {
	      this.handleObject(stringToObject(value))
	    } else if (_.isPlainObject(value)) {
	      this.handleObject(value)
	    } else if (_.isArray(value)) {
	      this.handleArray(value)
	    } else {
	      this.cleanup()
	    }
	  },
	
	  handleObject: function (value) {
	    this.cleanup(value)
	    var keys = this.prevKeys = Object.keys(value)
	    for (var i = 0, l = keys.length; i < l; i++) {
	      var key = keys[i]
	      if (value[key]) {
	        addClass(this.el, key)
	      } else {
	        removeClass(this.el, key)
	      }
	    }
	  },
	
	  handleArray: function (value) {
	    this.cleanup(value)
	    for (var i = 0, l = value.length; i < l; i++) {
	      if (value[i]) {
	        addClass(this.el, value[i])
	      }
	    }
	    this.prevKeys = value.slice()
	  },
	
	  cleanup: function (value) {
	    if (this.prevKeys) {
	      var i = this.prevKeys.length
	      while (i--) {
	        var key = this.prevKeys[i]
	        if (key && (!value || !contains(value, key))) {
	          removeClass(this.el, key)
	        }
	      }
	    }
	  }
	}
	
	function stringToObject (value) {
	  var res = {}
	  var keys = value.trim().split(/\s+/)
	  var i = keys.length
	  while (i--) {
	    res[keys[i]] = true
	  }
	  return res
	}
	
	function contains (value, key) {
	  return _.isArray(value)
	    ? value.indexOf(key) > -1
	    : value.hasOwnProperty(key)
	}


/***/ },
/* 331 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var templateParser = __webpack_require__(11)
	
	module.exports = {
	
	  priority: 1500,
	
	  params: [
	    'keep-alive',
	    'transition-mode',
	    'inline-template'
	  ],
	
	  /**
	   * Setup. Two possible usages:
	   *
	   * - static:
	   *   <comp> or <div v-component="comp">
	   *
	   * - dynamic:
	   *   <component :is="view">
	   */
	
	  bind: function () {
	    if (!this.el.__vue__) {
	      // check ref
	      this.ref = _.findRef(this.el)
	      var refs = (this._scope || this.vm).$refs
	      if (this.ref && !refs.hasOwnProperty(this.ref)) {
	        _.defineReactive(refs, this.ref, null)
	      }
	      // keep-alive cache
	      this.keepAlive = this.params.keepAlive
	      if (this.keepAlive) {
	        this.cache = {}
	      }
	      // check inline-template
	      if (this.params.inlineTemplate) {
	        // extract inline template as a DocumentFragment
	        this.inlineTemplate = _.extractContent(this.el, true)
	      }
	      // component resolution related state
	      this.pendingComponentCb =
	      this.Component = null
	      // transition related state
	      this.pendingRemovals = 0
	      this.pendingRemovalCb = null
	      // check dynamic component params
	        // create a ref anchor
	      this.anchor = _.createAnchor('v-component')
	      _.replace(this.el, this.anchor)
	      // if static, build right now.
	      if (this.literal) {
	        this.setComponent(this.expression)
	      }
	    } else {
	      ("development") !== 'production' && _.warn(
	        'cannot mount component "' + this.expression + '" ' +
	        'on already mounted element: ' + this.el
	      )
	    }
	  },
	
	  /**
	   * Public update, called by the watcher in the dynamic
	   * literal scenario, e.g. <component :is="view">
	   */
	
	  update: function (value) {
	    if (!this.literal) {
	      this.setComponent(value)
	    }
	  },
	
	  /**
	   * Switch dynamic components. May resolve the component
	   * asynchronously, and perform transition based on
	   * specified transition mode. Accepts a few additional
	   * arguments specifically for vue-router.
	   *
	   * The callback is called when the full transition is
	   * finished.
	   *
	   * @param {String} value
	   * @param {Function} [cb]
	   */
	
	  setComponent: function (value, cb) {
	    this.invalidatePending()
	    if (!value) {
	      // just remove current
	      this.unbuild(true)
	      this.remove(this.childVM, cb)
	      this.childVM = null
	    } else {
	      var self = this
	      this.resolveComponent(value, function () {
	        self.mountComponent(cb)
	      })
	    }
	  },
	
	  /**
	   * Resolve the component constructor to use when creating
	   * the child vm.
	   */
	
	  resolveComponent: function (id, cb) {
	    var self = this
	    this.pendingComponentCb = _.cancellable(function (Component) {
	      self.ComponentName = Component.options.name || id
	      self.Component = Component
	      cb()
	    })
	    this.vm._resolveComponent(id, this.pendingComponentCb)
	  },
	
	  /**
	   * Create a new instance using the current constructor and
	   * replace the existing instance. This method doesn't care
	   * whether the new component and the old one are actually
	   * the same.
	   *
	   * @param {Function} [cb]
	   */
	
	  mountComponent: function (cb) {
	    // actual mount
	    this.unbuild(true)
	    var self = this
	    var activateHook = this.Component.options.activate
	    var cached = this.getCached()
	    var newComponent = this.build()
	    if (activateHook && !cached) {
	      this.waitingFor = newComponent
	      activateHook.call(newComponent, function () {
	        self.waitingFor = null
	        self.transition(newComponent, cb)
	      })
	    } else {
	      this.transition(newComponent, cb)
	    }
	  },
	
	  /**
	   * When the component changes or unbinds before an async
	   * constructor is resolved, we need to invalidate its
	   * pending callback.
	   */
	
	  invalidatePending: function () {
	    if (this.pendingComponentCb) {
	      this.pendingComponentCb.cancel()
	      this.pendingComponentCb = null
	    }
	  },
	
	  /**
	   * Instantiate/insert a new child vm.
	   * If keep alive and has cached instance, insert that
	   * instance; otherwise build a new one and cache it.
	   *
	   * @param {Object} [extraOptions]
	   * @return {Vue} - the created instance
	   */
	
	  build: function (extraOptions) {
	    var cached = this.getCached()
	    if (cached) {
	      return cached
	    }
	    if (this.Component) {
	      // default options
	      var options = {
	        name: this.ComponentName,
	        el: templateParser.clone(this.el),
	        template: this.inlineTemplate,
	        // make sure to add the child with correct parent
	        // if this is a transcluded component, its parent
	        // should be the transclusion host.
	        parent: this._host || this.vm,
	        // if no inline-template, then the compiled
	        // linker can be cached for better performance.
	        _linkerCachable: !this.inlineTemplate,
	        _ref: this.ref,
	        _asComponent: true,
	        _isRouterView: this._isRouterView,
	        // if this is a transcluded component, context
	        // will be the common parent vm of this instance
	        // and its host.
	        _context: this.vm,
	        // if this is inside an inline v-for, the scope
	        // will be the intermediate scope created for this
	        // repeat fragment. this is used for linking props
	        // and container directives.
	        _scope: this._scope,
	        // pass in the owner fragment of this component.
	        // this is necessary so that the fragment can keep
	        // track of its contained components in order to
	        // call attach/detach hooks for them.
	        _frag: this._frag
	      }
	      // extra options
	      // in 1.0.0 this is used by vue-router only
	      /* istanbul ignore if */
	      if (extraOptions) {
	        _.extend(options, extraOptions)
	      }
	      var child = new this.Component(options)
	      if (this.keepAlive) {
	        this.cache[this.Component.cid] = child
	      }
	      /* istanbul ignore if */
	      if (("development") !== 'production' &&
	          this.el.hasAttribute('transition') &&
	          child._isFragment) {
	        _.warn(
	          'Transitions will not work on a fragment instance. ' +
	          'Template: ' + child.$options.template
	        )
	      }
	      return child
	    }
	  },
	
	  /**
	   * Try to get a cached instance of the current component.
	   *
	   * @return {Vue|undefined}
	   */
	
	  getCached: function () {
	    return this.keepAlive && this.cache[this.Component.cid]
	  },
	
	  /**
	   * Teardown the current child, but defers cleanup so
	   * that we can separate the destroy and removal steps.
	   *
	   * @param {Boolean} defer
	   */
	
	  unbuild: function (defer) {
	    if (this.waitingFor) {
	      this.waitingFor.$destroy()
	      this.waitingFor = null
	    }
	    var child = this.childVM
	    if (!child || this.keepAlive) {
	      return
	    }
	    // the sole purpose of `deferCleanup` is so that we can
	    // "deactivate" the vm right now and perform DOM removal
	    // later.
	    child.$destroy(false, defer)
	  },
	
	  /**
	   * Remove current destroyed child and manually do
	   * the cleanup after removal.
	   *
	   * @param {Function} cb
	   */
	
	  remove: function (child, cb) {
	    var keepAlive = this.keepAlive
	    if (child) {
	      // we may have a component switch when a previous
	      // component is still being transitioned out.
	      // we want to trigger only one lastest insertion cb
	      // when the existing transition finishes. (#1119)
	      this.pendingRemovals++
	      this.pendingRemovalCb = cb
	      var self = this
	      child.$remove(function () {
	        self.pendingRemovals--
	        if (!keepAlive) child._cleanup()
	        if (!self.pendingRemovals && self.pendingRemovalCb) {
	          self.pendingRemovalCb()
	          self.pendingRemovalCb = null
	        }
	      })
	    } else if (cb) {
	      cb()
	    }
	  },
	
	  /**
	   * Actually swap the components, depending on the
	   * transition mode. Defaults to simultaneous.
	   *
	   * @param {Vue} target
	   * @param {Function} [cb]
	   */
	
	  transition: function (target, cb) {
	    var self = this
	    var current = this.childVM
	    // for devtool inspection
	    if (true) {
	      if (current) current._inactive = true
	      target._inactive = false
	    }
	    this.childVM = target
	    switch (self.params.transitionMode) {
	      case 'in-out':
	        target.$before(self.anchor, function () {
	          self.remove(current, cb)
	        })
	        break
	      case 'out-in':
	        self.remove(current, function () {
	          target.$before(self.anchor, cb)
	        })
	        break
	      default:
	        self.remove(current)
	        target.$before(self.anchor, cb)
	    }
	  },
	
	  /**
	   * Unbind.
	   */
	
	  unbind: function () {
	    this.invalidatePending()
	    // Do not defer cleanup when unbinding
	    this.unbuild()
	    // destroy all keep-alive cached instances
	    if (this.cache) {
	      for (var key in this.cache) {
	        this.cache[key].$destroy()
	      }
	      this.cache = null
	    }
	  }
	}


/***/ },
/* 332 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var Transition = __webpack_require__(357)
	
	module.exports = {
	
	  priority: 1000,
	
	  update: function (id, oldId) {
	    var el = this.el
	    // resolve on owner vm
	    var hooks = _.resolveAsset(this.vm.$options, 'transitions', id)
	    id = id || 'v'
	    // apply on closest vm
	    el.__v_trans = new Transition(el, id, hooks, this.el.__vue__ || this.vm)
	    if (oldId) {
	      _.removeClass(el, oldId + '-transition')
	    }
	    _.addClass(el, id + '-transition')
	  }
	}


/***/ },
/* 333 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	
	// xlink
	var xlinkNS = 'http://www.w3.org/1999/xlink'
	var xlinkRE = /^xlink:/
	
	// these input element attributes should also set their
	// corresponding properties
	var inputProps = {
	  value: 1,
	  checked: 1,
	  selected: 1
	}
	
	// these attributes should set a hidden property for
	// binding v-model to object values
	var modelProps = {
	  value: '_value',
	  'true-value': '_trueValue',
	  'false-value': '_falseValue'
	}
	
	// check for attributes that prohibit interpolations
	var disallowedInterpAttrRE = /^v-|^:|^@|^(is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/
	
	module.exports = {
	
	  priority: 850,
	
	  bind: function () {
	    var attr = this.arg
	    var tag = this.el.tagName
	    // handle interpolation bindings
	    if (this.descriptor.interp) {
	      // only allow binding on native attributes
	      if (
	        disallowedInterpAttrRE.test(attr) ||
	        (attr === 'name' && (tag === 'PARTIAL' || tag === 'SLOT'))
	      ) {
	        ("development") !== 'production' && _.warn(
	          attr + '="' + this.descriptor.raw + '": ' +
	          'attribute interpolation is not allowed in Vue.js ' +
	          'directives and special attributes.'
	        )
	        this.el.removeAttribute(attr)
	        this.invalid = true
	      }
	
	      /* istanbul ignore if */
	      if (true) {
	        var raw = attr + '="' + this.descriptor.raw + '": '
	        // warn src
	        if (attr === 'src') {
	          _.warn(
	            raw + 'interpolation in "src" attribute will cause ' +
	            'a 404 request. Use v-bind:src instead.'
	          )
	        }
	
	        // warn style
	        if (attr === 'style') {
	          _.warn(
	            raw + 'interpolation in "style" attribute will cause ' +
	            'the attribute to be discarded in Internet Explorer. ' +
	            'Use v-bind:style instead.'
	          )
	        }
	      }
	    }
	  },
	
	  update: function (value) {
	    if (this.invalid) {
	      return
	    }
	    var attr = this.arg
	    if (this.arg) {
	      this.handleSingle(attr, value)
	    } else {
	      this.handleObject(value || {})
	    }
	  },
	
	  // share object handler with v-bind:class
	  handleObject: __webpack_require__(89).handleObject,
	
	  handleSingle: function (attr, value) {
	    if (inputProps[attr] && attr in this.el) {
	      this.el[attr] = attr === 'value'
	        ? (value || '') // IE9 will set input.value to "null" for null...
	        : value
	    }
	    // set model props
	    var modelProp = modelProps[attr]
	    if (modelProp) {
	      this.el[modelProp] = value
	      // update v-model if present
	      var model = this.el.__v_model
	      if (model) {
	        model.listener()
	      }
	    }
	    // do not set value attribute for textarea
	    if (attr === 'value' && this.el.tagName === 'TEXTAREA') {
	      this.el.removeAttribute(attr)
	      return
	    }
	    // update attribute
	    if (value != null && value !== false) {
	      if (xlinkRE.test(attr)) {
	        this.el.setAttributeNS(xlinkNS, attr, value)
	      } else {
	        this.el.setAttribute(attr, value)
	      }
	    } else {
	      this.el.removeAttribute(attr)
	    }
	  }
	}


/***/ },
/* 334 */
/***/ function(module, exports) {

	module.exports = {
	  bind: function () {
	    var el = this.el
	    this.vm.$once('hook:compiled', function () {
	      el.removeAttribute('v-cloak')
	    })
	  }
	}


/***/ },
/* 335 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	
	module.exports = {
	
	  priority: 1500,
	
	  bind: function () {
	    /* istanbul ignore if */
	    if (!this.arg) {
	      return
	    }
	    var id = this.id = _.camelize(this.arg)
	    var refs = (this._scope || this.vm).$els
	    if (refs.hasOwnProperty(id)) {
	      refs[id] = this.el
	    } else {
	      _.defineReactive(refs, id, this.el)
	    }
	  },
	
	  unbind: function () {
	    var refs = (this._scope || this.vm).$els
	    if (refs[this.id] === this.el) {
	      refs[this.id] = null
	    }
	  }
	}


/***/ },
/* 336 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var templateParser = __webpack_require__(11)
	
	module.exports = {
	
	  bind: function () {
	    // a comment node means this is a binding for
	    // {{{ inline unescaped html }}}
	    if (this.el.nodeType === 8) {
	      // hold nodes
	      this.nodes = []
	      // replace the placeholder with proper anchor
	      this.anchor = _.createAnchor('v-html')
	      _.replace(this.el, this.anchor)
	    }
	  },
	
	  update: function (value) {
	    value = _.toString(value)
	    if (this.nodes) {
	      this.swap(value)
	    } else {
	      this.el.innerHTML = value
	    }
	  },
	
	  swap: function (value) {
	    // remove old nodes
	    var i = this.nodes.length
	    while (i--) {
	      _.remove(this.nodes[i])
	    }
	    // convert new value to a fragment
	    // do not attempt to retrieve from id selector
	    var frag = templateParser.parse(value, true, true)
	    // save a reference to these nodes so we can remove later
	    this.nodes = _.toArray(frag.childNodes)
	    _.before(frag, this.anchor)
	  }
	}


/***/ },
/* 337 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	
	module.exports = {
	
	  bind: function () {
	    var self = this
	    var el = this.el
	
	    this.getValue = function () {
	      return el.hasOwnProperty('_value')
	        ? el._value
	        : self.params.number
	          ? _.toNumber(el.value)
	          : el.value
	    }
	
	    function getBooleanValue () {
	      var val = el.checked
	      if (val && el.hasOwnProperty('_trueValue')) {
	        return el._trueValue
	      }
	      if (!val && el.hasOwnProperty('_falseValue')) {
	        return el._falseValue
	      }
	      return val
	    }
	
	    this.listener = function () {
	      var model = self._watcher.value
	      if (_.isArray(model)) {
	        var val = self.getValue()
	        if (el.checked) {
	          if (_.indexOf(model, val) < 0) {
	            model.push(val)
	          }
	        } else {
	          model.$remove(val)
	        }
	      } else {
	        self.set(getBooleanValue())
	      }
	    }
	
	    this.on('change', this.listener)
	    if (el.checked) {
	      this.afterBind = this.listener
	    }
	  },
	
	  update: function (value) {
	    var el = this.el
	    if (_.isArray(value)) {
	      el.checked = _.indexOf(value, this.getValue()) > -1
	    } else {
	      if (el.hasOwnProperty('_trueValue')) {
	        el.checked = _.looseEqual(value, el._trueValue)
	      } else {
	        el.checked = !!value
	      }
	    }
	  }
	}


/***/ },
/* 338 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	
	var handlers = {
	  text: __webpack_require__(341),
	  radio: __webpack_require__(339),
	  select: __webpack_require__(340),
	  checkbox: __webpack_require__(337)
	}
	
	module.exports = {
	
	  priority: 800,
	  twoWay: true,
	  handlers: handlers,
	  params: ['lazy', 'number', 'debounce'],
	
	  /**
	   * Possible elements:
	   *   <select>
	   *   <textarea>
	   *   <input type="*">
	   *     - text
	   *     - checkbox
	   *     - radio
	   *     - number
	   */
	
	  bind: function () {
	    // friendly warning...
	    this.checkFilters()
	    if (this.hasRead && !this.hasWrite) {
	      ("development") !== 'production' && _.warn(
	        'It seems you are using a read-only filter with ' +
	        'v-model. You might want to use a two-way filter ' +
	        'to ensure correct behavior.'
	      )
	    }
	    var el = this.el
	    var tag = el.tagName
	    var handler
	    if (tag === 'INPUT') {
	      handler = handlers[el.type] || handlers.text
	    } else if (tag === 'SELECT') {
	      handler = handlers.select
	    } else if (tag === 'TEXTAREA') {
	      handler = handlers.text
	    } else {
	      ("development") !== 'production' && _.warn(
	        'v-model does not support element type: ' + tag
	      )
	      return
	    }
	    el.__v_model = this
	    handler.bind.call(this)
	    this.update = handler.update
	    this._unbind = handler.unbind
	  },
	
	  /**
	   * Check read/write filter stats.
	   */
	
	  checkFilters: function () {
	    var filters = this.filters
	    if (!filters) return
	    var i = filters.length
	    while (i--) {
	      var filter = _.resolveAsset(this.vm.$options, 'filters', filters[i].name)
	      if (typeof filter === 'function' || filter.read) {
	        this.hasRead = true
	      }
	      if (filter.write) {
	        this.hasWrite = true
	      }
	    }
	  },
	
	  unbind: function () {
	    this.el.__v_model = null
	    this._unbind && this._unbind()
	  }
	}


/***/ },
/* 339 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	
	module.exports = {
	
	  bind: function () {
	    var self = this
	    var el = this.el
	
	    this.getValue = function () {
	      // value overwrite via v-bind:value
	      if (el.hasOwnProperty('_value')) {
	        return el._value
	      }
	      var val = el.value
	      if (self.params.number) {
	        val = _.toNumber(val)
	      }
	      return val
	    }
	
	    this.listener = function () {
	      self.set(self.getValue())
	    }
	    this.on('change', this.listener)
	
	    if (el.checked) {
	      this.afterBind = this.listener
	    }
	  },
	
	  update: function (value) {
	    this.el.checked = _.looseEqual(value, this.getValue())
	  }
	}


/***/ },
/* 340 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	
	module.exports = {
	
	  bind: function () {
	    var self = this
	    var el = this.el
	
	    // method to force update DOM using latest value.
	    this.forceUpdate = function () {
	      if (self._watcher) {
	        self.update(self._watcher.get())
	      }
	    }
	
	    // check if this is a multiple select
	    var multiple = this.multiple = el.hasAttribute('multiple')
	
	    // attach listener
	    this.listener = function () {
	      var value = getValue(el, multiple)
	      value = self.params.number
	        ? _.isArray(value)
	          ? value.map(_.toNumber)
	          : _.toNumber(value)
	        : value
	      self.set(value)
	    }
	    this.on('change', this.listener)
	
	    // if has initial value, set afterBind
	    var initValue = getValue(el, multiple, true)
	    if ((multiple && initValue.length) ||
	        (!multiple && initValue !== null)) {
	      this.afterBind = this.listener
	    }
	
	    // All major browsers except Firefox resets
	    // selectedIndex with value -1 to 0 when the element
	    // is appended to a new parent, therefore we have to
	    // force a DOM update whenever that happens...
	    this.vm.$on('hook:attached', this.forceUpdate)
	  },
	
	  update: function (value) {
	    var el = this.el
	    el.selectedIndex = -1
	    var multi = this.multiple && _.isArray(value)
	    var options = el.options
	    var i = options.length
	    var op, val
	    while (i--) {
	      op = options[i]
	      val = op.hasOwnProperty('_value')
	        ? op._value
	        : op.value
	      /* eslint-disable eqeqeq */
	      op.selected = multi
	        ? indexOf(value, val) > -1
	        : _.looseEqual(value, val)
	      /* eslint-enable eqeqeq */
	    }
	  },
	
	  unbind: function () {
	    /* istanbul ignore next */
	    this.vm.$off('hook:attached', this.forceUpdate)
	  }
	}
	
	/**
	 * Get select value
	 *
	 * @param {SelectElement} el
	 * @param {Boolean} multi
	 * @param {Boolean} init
	 * @return {Array|*}
	 */
	
	function getValue (el, multi, init) {
	  var res = multi ? [] : null
	  var op, val, selected
	  for (var i = 0, l = el.options.length; i < l; i++) {
	    op = el.options[i]
	    selected = init
	      ? op.hasAttribute('selected')
	      : op.selected
	    if (selected) {
	      val = op.hasOwnProperty('_value')
	        ? op._value
	        : op.value
	      if (multi) {
	        res.push(val)
	      } else {
	        return val
	      }
	    }
	  }
	  return res
	}
	
	/**
	 * Native Array.indexOf uses strict equal, but in this
	 * case we need to match string/numbers with custom equal.
	 *
	 * @param {Array} arr
	 * @param {*} val
	 */
	
	function indexOf (arr, val) {
	  var i = arr.length
	  while (i--) {
	    if (_.looseEqual(arr[i], val)) {
	      return i
	    }
	  }
	  return -1
	}


/***/ },
/* 341 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	
	module.exports = {
	
	  bind: function () {
	    var self = this
	    var el = this.el
	    var isRange = el.type === 'range'
	    var lazy = this.params.lazy
	    var number = this.params.number
	    var debounce = this.params.debounce
	
	    // handle composition events.
	    //   http://blog.evanyou.me/2014/01/03/composition-event/
	    // skip this for Android because it handles composition
	    // events quite differently. Android doesn't trigger
	    // composition events for language input methods e.g.
	    // Chinese, but instead triggers them for spelling
	    // suggestions... (see Discussion/#162)
	    var composing = false
	    if (!_.isAndroid && !isRange) {
	      this.on('compositionstart', function () {
	        composing = true
	      })
	      this.on('compositionend', function () {
	        composing = false
	        // in IE11 the "compositionend" event fires AFTER
	        // the "input" event, so the input handler is blocked
	        // at the end... have to call it here.
	        //
	        // #1327: in lazy mode this is unecessary.
	        if (!lazy) {
	          self.listener()
	        }
	      })
	    }
	
	    // prevent messing with the input when user is typing,
	    // and force update on blur.
	    this.focused = false
	    if (!isRange) {
	      this.on('focus', function () {
	        self.focused = true
	      })
	      this.on('blur', function () {
	        self.focused = false
	        self.listener()
	      })
	    }
	
	    // Now attach the main listener
	    this.listener = function () {
	      if (composing) return
	      var val = number || isRange
	        ? _.toNumber(el.value)
	        : el.value
	      self.set(val)
	      // force update on next tick to avoid lock & same value
	      // also only update when user is not typing
	      _.nextTick(function () {
	        if (self._bound && !self.focused) {
	          self.update(self._watcher.value)
	        }
	      })
	    }
	
	    // apply debounce
	    if (debounce) {
	      this.listener = _.debounce(this.listener, debounce)
	    }
	
	    // Support jQuery events, since jQuery.trigger() doesn't
	    // trigger native events in some cases and some plugins
	    // rely on $.trigger()
	    //
	    // We want to make sure if a listener is attached using
	    // jQuery, it is also removed with jQuery, that's why
	    // we do the check for each directive instance and
	    // store that check result on itself. This also allows
	    // easier test coverage control by unsetting the global
	    // jQuery variable in tests.
	    this.hasjQuery = typeof jQuery === 'function'
	    if (this.hasjQuery) {
	      jQuery(el).on('change', this.listener)
	      if (!lazy) {
	        jQuery(el).on('input', this.listener)
	      }
	    } else {
	      this.on('change', this.listener)
	      if (!lazy) {
	        this.on('input', this.listener)
	      }
	    }
	
	    // IE9 doesn't fire input event on backspace/del/cut
	    if (!lazy && _.isIE9) {
	      this.on('cut', function () {
	        _.nextTick(self.listener)
	      })
	      this.on('keyup', function (e) {
	        if (e.keyCode === 46 || e.keyCode === 8) {
	          self.listener()
	        }
	      })
	    }
	
	    // set initial value if present
	    if (
	      el.hasAttribute('value') ||
	      (el.tagName === 'TEXTAREA' && el.value.trim())
	    ) {
	      this.afterBind = this.listener
	    }
	  },
	
	  update: function (value) {
	    this.el.value = _.toString(value)
	  },
	
	  unbind: function () {
	    var el = this.el
	    if (this.hasjQuery) {
	      jQuery(el).off('change', this.listener)
	      jQuery(el).off('input', this.listener)
	    }
	  }
	}


/***/ },
/* 342 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	
	// keyCode aliases
	var keyCodes = {
	  esc: 27,
	  tab: 9,
	  enter: 13,
	  space: 32,
	  'delete': 46,
	  up: 38,
	  left: 37,
	  right: 39,
	  down: 40
	}
	
	function keyFilter (handler, keys) {
	  var codes = keys.map(function (key) {
	    var code = keyCodes[key]
	    if (!code) {
	      code = parseInt(key, 10)
	    }
	    return code
	  })
	  return function keyHandler (e) {
	    if (codes.indexOf(e.keyCode) > -1) {
	      return handler.call(this, e)
	    }
	  }
	}
	
	function stopFilter (handler) {
	  return function stopHandler (e) {
	    e.stopPropagation()
	    return handler.call(this, e)
	  }
	}
	
	function preventFilter (handler) {
	  return function preventHandler (e) {
	    e.preventDefault()
	    return handler.call(this, e)
	  }
	}
	
	module.exports = {
	
	  acceptStatement: true,
	  priority: 700,
	
	  bind: function () {
	    // deal with iframes
	    if (
	      this.el.tagName === 'IFRAME' &&
	      this.arg !== 'load'
	    ) {
	      var self = this
	      this.iframeBind = function () {
	        _.on(self.el.contentWindow, self.arg, self.handler)
	      }
	      this.on('load', this.iframeBind)
	    }
	  },
	
	  update: function (handler) {
	    // stub a noop for v-on with no value,
	    // e.g. @mousedown.prevent
	    if (!this.descriptor.raw) {
	      handler = function () {}
	    }
	
	    if (typeof handler !== 'function') {
	      ("development") !== 'production' && _.warn(
	        'v-on:' + this.arg + '="' +
	        this.expression + '" expects a function value, ' +
	        'got ' + handler
	      )
	      return
	    }
	
	    // apply modifiers
	    if (this.modifiers.stop) {
	      handler = stopFilter(handler)
	    }
	    if (this.modifiers.prevent) {
	      handler = preventFilter(handler)
	    }
	    // key filter
	    var keys = Object.keys(this.modifiers)
	      .filter(function (key) {
	        return key !== 'stop' && key !== 'prevent'
	      })
	    if (keys.length) {
	      handler = keyFilter(handler, keys)
	    }
	
	    this.reset()
	    var scope = this._scope || this.vm
	    this.handler = function (e) {
	      scope.$event = e
	      var res = handler(e)
	      scope.$event = null
	      return res
	    }
	    if (this.iframeBind) {
	      this.iframeBind()
	    } else {
	      _.on(this.el, this.arg, this.handler)
	    }
	  },
	
	  reset: function () {
	    var el = this.iframeBind
	      ? this.el.contentWindow
	      : this.el
	    if (this.handler) {
	      _.off(el, this.arg, this.handler)
	    }
	  },
	
	  unbind: function () {
	    this.reset()
	  }
	}


/***/ },
/* 343 */
/***/ function(module, exports, __webpack_require__) {

	if (true) {
	  module.exports = {
	    bind: function () {
	      __webpack_require__(1).warn(
	        'v-ref:' + this.arg + ' must be used on a child ' +
	        'component. Found on <' + this.el.tagName.toLowerCase() + '>.'
	      )
	    }
	  }
	}


/***/ },
/* 344 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var transition = __webpack_require__(26)
	
	module.exports = {
	
	  bind: function () {
	    // check else block
	    var next = this.el.nextElementSibling
	    if (next && _.attr(next, 'v-else') !== null) {
	      this.elseEl = next
	    }
	  },
	
	  update: function (value) {
	    var el = this.el
	    transition.apply(el, value ? 1 : -1, function () {
	      el.style.display = value ? '' : 'none'
	    }, this.vm)
	    var elseEl = this.elseEl
	    if (elseEl) {
	      transition.apply(elseEl, value ? -1 : 1, function () {
	        elseEl.style.display = value ? 'none' : ''
	      }, this.vm)
	    }
	  }
	}


/***/ },
/* 345 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	
	module.exports = {
	
	  bind: function () {
	    this.attr = this.el.nodeType === 3
	      ? 'data'
	      : 'textContent'
	  },
	
	  update: function (value) {
	    this.el[this.attr] = _.toString(value)
	  }
	}


/***/ },
/* 346 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var Path = __webpack_require__(20)
	var toArray = __webpack_require__(90)._postProcess
	
	/**
	 * Limit filter for arrays
	 *
	 * @param {Number} n
	 */
	
	exports.limitBy = function (arr, n) {
	  return typeof n === 'number'
	    ? arr.slice(0, n)
	    : arr
	}
	
	/**
	 * Filter filter for arrays
	 *
	 * @param {String} searchKey
	 * @param {String} [delimiter]
	 * @param {String} dataKey
	 */
	
	exports.filterBy = function (arr, search, delimiter /* ...dataKeys */) {
	  arr = toArray(arr)
	  if (search == null) {
	    return arr
	  }
	  if (typeof search === 'function') {
	    return arr.filter(search)
	  }
	  // cast to lowercase string
	  search = ('' + search).toLowerCase()
	  // allow optional `in` delimiter
	  // because why not
	  var n = delimiter === 'in' ? 3 : 2
	  // extract and flatten keys
	  var keys = _.toArray(arguments, n).reduce(function (prev, cur) {
	    return prev.concat(cur)
	  }, [])
	  var res = []
	  var item, key, val, j
	  for (var i = 0, l = arr.length; i < l; i++) {
	    item = arr[i]
	    val = (item && item.$value) || item
	    j = keys.length
	    if (j) {
	      while (j--) {
	        key = keys[j]
	        if ((key === '$key' && contains(item.$key, search)) ||
	            contains(Path.get(val, key), search)) {
	          res.push(item)
	          break
	        }
	      }
	    } else if (contains(item, search)) {
	      res.push(item)
	    }
	  }
	  return res
	}
	
	/**
	 * Filter filter for arrays
	 *
	 * @param {String} sortKey
	 * @param {String} reverse
	 */
	
	exports.orderBy = function (arr, sortKey, reverse) {
	  arr = toArray(arr)
	  if (!sortKey) {
	    return arr
	  }
	  var order = (reverse && reverse < 0) ? -1 : 1
	  // sort on a copy to avoid mutating original array
	  return arr.slice().sort(function (a, b) {
	    if (sortKey !== '$key') {
	      if (_.isObject(a) && '$value' in a) a = a.$value
	      if (_.isObject(b) && '$value' in b) b = b.$value
	    }
	    a = _.isObject(a) ? Path.get(a, sortKey) : a
	    b = _.isObject(b) ? Path.get(b, sortKey) : b
	    return a === b ? 0 : a > b ? order : -order
	  })
	}
	
	/**
	 * String contain helper
	 *
	 * @param {*} val
	 * @param {String} search
	 */
	
	function contains (val, search) {
	  var i
	  if (_.isPlainObject(val)) {
	    var keys = Object.keys(val)
	    i = keys.length
	    while (i--) {
	      if (contains(val[keys[i]], search)) {
	        return true
	      }
	    }
	  } else if (_.isArray(val)) {
	    i = val.length
	    while (i--) {
	      if (contains(val[i], search)) {
	        return true
	      }
	    }
	  } else if (val != null) {
	    return val.toString().toLowerCase().indexOf(search) > -1
	  }
	}


/***/ },
/* 347 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	
	/**
	 * Stringify value.
	 *
	 * @param {Number} indent
	 */
	
	exports.json = {
	  read: function (value, indent) {
	    return typeof value === 'string'
	      ? value
	      : JSON.stringify(value, null, Number(indent) || 2)
	  },
	  write: function (value) {
	    try {
	      return JSON.parse(value)
	    } catch (e) {
	      return value
	    }
	  }
	}
	
	/**
	 * 'abc' => 'Abc'
	 */
	
	exports.capitalize = function (value) {
	  if (!value && value !== 0) return ''
	  value = value.toString()
	  return value.charAt(0).toUpperCase() + value.slice(1)
	}
	
	/**
	 * 'abc' => 'ABC'
	 */
	
	exports.uppercase = function (value) {
	  return (value || value === 0)
	    ? value.toString().toUpperCase()
	    : ''
	}
	
	/**
	 * 'AbC' => 'abc'
	 */
	
	exports.lowercase = function (value) {
	  return (value || value === 0)
	    ? value.toString().toLowerCase()
	    : ''
	}
	
	/**
	 * 12345 => $12,345.00
	 *
	 * @param {String} sign
	 */
	
	var digitsRE = /(\d{3})(?=\d)/g
	exports.currency = function (value, currency) {
	  value = parseFloat(value)
	  if (!isFinite(value) || (!value && value !== 0)) return ''
	  currency = currency != null ? currency : '$'
	  var stringified = Math.abs(value).toFixed(2)
	  var _int = stringified.slice(0, -3)
	  var i = _int.length % 3
	  var head = i > 0
	    ? (_int.slice(0, i) + (_int.length > 3 ? ',' : ''))
	    : ''
	  var _float = stringified.slice(-3)
	  var sign = value < 0 ? '-' : ''
	  return currency + sign + head +
	    _int.slice(i).replace(digitsRE, '$1,') +
	    _float
	}
	
	/**
	 * 'item' => 'items'
	 *
	 * @params
	 *  an array of strings corresponding to
	 *  the single, double, triple ... forms of the word to
	 *  be pluralized. When the number to be pluralized
	 *  exceeds the length of the args, it will use the last
	 *  entry in the array.
	 *
	 *  e.g. ['single', 'double', 'triple', 'multiple']
	 */
	
	exports.pluralize = function (value) {
	  var args = _.toArray(arguments, 1)
	  return args.length > 1
	    ? (args[value % 10 - 1] || args[args.length - 1])
	    : (args[0] + (value === 1 ? '' : 's'))
	}
	
	/**
	 * Debounce a handler function.
	 *
	 * @param {Function} handler
	 * @param {Number} delay = 300
	 * @return {Function}
	 */
	
	exports.debounce = function (handler, delay) {
	  if (!handler) return
	  if (!delay) {
	    delay = 300
	  }
	  return _.debounce(handler, delay)
	}
	
	/**
	 * Install special array filters
	 */
	
	_.extend(exports, __webpack_require__(346))


/***/ },
/* 348 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var transition = __webpack_require__(26)
	
	/**
	 * Abstraction for a partially-compiled fragment.
	 * Can optionally compile content with a child scope.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Vue} [host]
	 * @param {Object} [scope]
	 */
	
	function Fragment (linker, vm, frag, host, scope, parentFrag) {
	  this.children = []
	  this.childFrags = []
	  this.vm = vm
	  this.scope = scope
	  this.inserted = false
	  this.parentFrag = parentFrag
	  if (parentFrag) {
	    parentFrag.childFrags.push(this)
	  }
	  this.unlink = linker(vm, frag, host, scope, this)
	  var single = this.single = frag.childNodes.length === 1
	  if (single) {
	    this.node = frag.childNodes[0]
	    this.before = singleBefore
	    this.remove = singleRemove
	  } else {
	    this.node = _.createAnchor('fragment-start')
	    this.end = _.createAnchor('fragment-end')
	    this.frag = frag
	    _.prepend(this.node, frag)
	    frag.appendChild(this.end)
	    this.before = multiBefore
	    this.remove = multiRemove
	  }
	  this.node.__vfrag__ = this
	}
	
	/**
	 * Call attach/detach for all components contained within
	 * this fragment. Also do so recursively for all child
	 * fragments.
	 *
	 * @param {Function} hook
	 */
	
	Fragment.prototype.callHook = function (hook) {
	  var i, l
	  for (i = 0, l = this.children.length; i < l; i++) {
	    hook(this.children[i])
	  }
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    this.childFrags[i].callHook(hook)
	  }
	}
	
	/**
	 * Destroy the fragment.
	 */
	
	Fragment.prototype.destroy = function () {
	  if (this.parentFrag) {
	    this.parentFrag.childFrags.$remove(this)
	  }
	  this.unlink()
	}
	
	/**
	 * Insert fragment before target, single node version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */
	
	function singleBefore (target, withTransition) {
	  this.inserted = true
	  var method = withTransition !== false
	    ? transition.before
	    : _.before
	  method(this.node, target, this.vm)
	  if (_.inDoc(this.node)) {
	    this.callHook(attach)
	  }
	}
	
	/**
	 * Remove fragment, single node version
	 *
	 * @param {Boolean} [destroy]
	 */
	
	function singleRemove (destroy) {
	  this.inserted = false
	  var shouldCallRemove = _.inDoc(this.node)
	  var self = this
	  transition.remove(this.node, this.vm, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach)
	    }
	    if (destroy) {
	      self.destroy()
	    }
	  })
	}
	
	/**
	 * Insert fragment before target, multi-nodes version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */
	
	function multiBefore (target, withTransition) {
	  this.inserted = true
	  var vm = this.vm
	  var method = withTransition !== false
	    ? transition.before
	    : _.before
	  _.mapNodeRange(this.node, this.end, function (node) {
	    method(node, target, vm)
	  })
	  if (_.inDoc(this.node)) {
	    this.callHook(attach)
	  }
	}
	
	/**
	 * Remove fragment, multi-nodes version
	 *
	 * @param {Boolean} [destroy]
	 */
	
	function multiRemove (destroy) {
	  this.inserted = false
	  var self = this
	  var shouldCallRemove = _.inDoc(this.node)
	  _.removeNodeRange(this.node, this.end, this.vm, this.frag, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach)
	    }
	    if (destroy) {
	      self.destroy()
	    }
	  })
	}
	
	/**
	 * Call attach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */
	
	function attach (child) {
	  if (!child._isAttached) {
	    child._callHook('attached')
	  }
	}
	
	/**
	 * Call detach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */
	
	function detach (child) {
	  if (child._isAttached) {
	    child._callHook('detached')
	  }
	}
	
	module.exports = Fragment


/***/ },
/* 349 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var inDoc = _.inDoc
	var eventRE = /^v-on:|^@/
	
	/**
	 * Setup the instance's option events & watchers.
	 * If the value is a string, we pull it from the
	 * instance's methods by name.
	 */
	
	exports._initEvents = function () {
	  var options = this.$options
	  if (options._asComponent) {
	    registerComponentEvents(this, options.el)
	  }
	  registerCallbacks(this, '$on', options.events)
	  registerCallbacks(this, '$watch', options.watch)
	}
	
	/**
	 * Register v-on events on a child component
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 */
	
	function registerComponentEvents (vm, el) {
	  var attrs = el.attributes
	  var name, handler
	  for (var i = 0, l = attrs.length; i < l; i++) {
	    name = attrs[i].name
	    if (eventRE.test(name)) {
	      name = name.replace(eventRE, '')
	      handler = (vm._scope || vm._context).$eval(attrs[i].value, true)
	      vm.$on(name.replace(eventRE), handler)
	    }
	  }
	}
	
	/**
	 * Register callbacks for option events and watchers.
	 *
	 * @param {Vue} vm
	 * @param {String} action
	 * @param {Object} hash
	 */
	
	function registerCallbacks (vm, action, hash) {
	  if (!hash) return
	  var handlers, key, i, j
	  for (key in hash) {
	    handlers = hash[key]
	    if (_.isArray(handlers)) {
	      for (i = 0, j = handlers.length; i < j; i++) {
	        register(vm, action, key, handlers[i])
	      }
	    } else {
	      register(vm, action, key, handlers)
	    }
	  }
	}
	
	/**
	 * Helper to register an event/watch callback.
	 *
	 * @param {Vue} vm
	 * @param {String} action
	 * @param {String} key
	 * @param {Function|String|Object} handler
	 * @param {Object} [options]
	 */
	
	function register (vm, action, key, handler, options) {
	  var type = typeof handler
	  if (type === 'function') {
	    vm[action](key, handler, options)
	  } else if (type === 'string') {
	    var methods = vm.$options.methods
	    var method = methods && methods[handler]
	    if (method) {
	      vm[action](key, method, options)
	    } else {
	      ("development") !== 'production' && _.warn(
	        'Unknown method: "' + handler + '" when ' +
	        'registering callback for ' + action +
	        ': "' + key + '".'
	      )
	    }
	  } else if (handler && type === 'object') {
	    register(vm, action, key, handler.handler, handler)
	  }
	}
	
	/**
	 * Setup recursive attached/detached calls
	 */
	
	exports._initDOMHooks = function () {
	  this.$on('hook:attached', onAttached)
	  this.$on('hook:detached', onDetached)
	}
	
	/**
	 * Callback to recursively call attached hook on children
	 */
	
	function onAttached () {
	  if (!this._isAttached) {
	    this._isAttached = true
	    this.$children.forEach(callAttach)
	  }
	}
	
	/**
	 * Iterator to call attached hook
	 *
	 * @param {Vue} child
	 */
	
	function callAttach (child) {
	  if (!child._isAttached && inDoc(child.$el)) {
	    child._callHook('attached')
	  }
	}
	
	/**
	 * Callback to recursively call detached hook on children
	 */
	
	function onDetached () {
	  if (this._isAttached) {
	    this._isAttached = false
	    this.$children.forEach(callDetach)
	  }
	}
	
	/**
	 * Iterator to call detached hook
	 *
	 * @param {Vue} child
	 */
	
	function callDetach (child) {
	  if (child._isAttached && !inDoc(child.$el)) {
	    child._callHook('detached')
	  }
	}
	
	/**
	 * Trigger all handlers for a hook
	 *
	 * @param {String} hook
	 */
	
	exports._callHook = function (hook) {
	  var handlers = this.$options[hook]
	  if (handlers) {
	    for (var i = 0, j = handlers.length; i < j; i++) {
	      handlers[i].call(this)
	    }
	  }
	  this.$emit('hook:' + hook)
	}


/***/ },
/* 350 */
/***/ function(module, exports, __webpack_require__) {

	var mergeOptions = __webpack_require__(1).mergeOptions
	var uid = 0
	
	/**
	 * The main init sequence. This is called for every
	 * instance, including ones that are created from extended
	 * constructors.
	 *
	 * @param {Object} options - this options object should be
	 *                           the result of merging class
	 *                           options and the options passed
	 *                           in to the constructor.
	 */
	
	exports._init = function (options) {
	
	  options = options || {}
	
	  this.$el = null
	  this.$parent = options.parent
	  this.$root = this.$parent
	    ? this.$parent.$root
	    : this
	  this.$children = []
	  this.$refs = {}       // child vm references
	  this.$els = {}        // element references
	  this._watchers = []   // all watchers as an array
	  this._directives = [] // all directives
	
	  // a uid
	  this._uid = uid++
	
	  // a flag to avoid this being observed
	  this._isVue = true
	
	  // events bookkeeping
	  this._events = {}            // registered callbacks
	  this._eventsCount = {}       // for $broadcast optimization
	  this._shouldPropagate = false // for event propagation
	
	  // fragment instance properties
	  this._isFragment = false
	  this._fragment =         // @type {DocumentFragment}
	  this._fragmentStart =    // @type {Text|Comment}
	  this._fragmentEnd = null // @type {Text|Comment}
	
	  // lifecycle state
	  this._isCompiled =
	  this._isDestroyed =
	  this._isReady =
	  this._isAttached =
	  this._isBeingDestroyed = false
	  this._unlinkFn = null
	
	  // context:
	  // if this is a transcluded component, context
	  // will be the common parent vm of this instance
	  // and its host.
	  this._context = options._context || this.$parent
	
	  // scope:
	  // if this is inside an inline v-for, the scope
	  // will be the intermediate scope created for this
	  // repeat fragment. this is used for linking props
	  // and container directives.
	  this._scope = options._scope
	
	  // fragment:
	  // if this instance is compiled inside a Fragment, it
	  // needs to reigster itself as a child of that fragment
	  // for attach/detach to work properly.
	  this._frag = options._frag
	  if (this._frag) {
	    this._frag.children.push(this)
	  }
	
	  // push self into parent / transclusion host
	  if (this.$parent) {
	    this.$parent.$children.push(this)
	  }
	
	  // set ref
	  if (options._ref) {
	    (this._scope || this._context).$refs[options._ref] = this
	  }
	
	  // merge options.
	  options = this.$options = mergeOptions(
	    this.constructor.options,
	    options,
	    this
	  )
	
	  // initialize data as empty object.
	  // it will be filled up in _initScope().
	  this._data = {}
	
	  // call init hook
	  this._callHook('init')
	
	  // initialize data observation and scope inheritance.
	  this._initState()
	
	  // setup event system and option events.
	  this._initEvents()
	
	  // call created hook
	  this._callHook('created')
	
	  // if `el` option is passed, start compilation.
	  if (options.el) {
	    this.$mount(options.el)
	  }
	}


/***/ },
/* 351 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var Directive = __webpack_require__(326)
	var compiler = __webpack_require__(18)
	
	/**
	 * Transclude, compile and link element.
	 *
	 * If a pre-compiled linker is available, that means the
	 * passed in element will be pre-transcluded and compiled
	 * as well - all we need to do is to call the linker.
	 *
	 * Otherwise we need to call transclude/compile/link here.
	 *
	 * @param {Element} el
	 * @return {Element}
	 */
	
	exports._compile = function (el) {
	  var options = this.$options
	
	  // transclude and init element
	  // transclude can potentially replace original
	  // so we need to keep reference; this step also injects
	  // the template and caches the original attributes
	  // on the container node and replacer node.
	  var original = el
	  el = compiler.transclude(el, options)
	  this._initElement(el)
	
	  // root is always compiled per-instance, because
	  // container attrs and props can be different every time.
	  var contextOptions = this._context && this._context.$options
	  var rootLinker = compiler.compileRoot(el, options, contextOptions)
	
	  // compile and link the rest
	  var contentLinkFn
	  var ctor = this.constructor
	  // component compilation can be cached
	  // as long as it's not using inline-template
	  if (options._linkerCachable) {
	    contentLinkFn = ctor.linker
	    if (!contentLinkFn) {
	      contentLinkFn = ctor.linker = compiler.compile(el, options)
	    }
	  }
	
	  // link phase
	  // make sure to link root with prop scope!
	  var rootUnlinkFn = rootLinker(this, el, this._scope)
	  var contentUnlinkFn = contentLinkFn
	    ? contentLinkFn(this, el)
	    : compiler.compile(el, options)(this, el)
	
	  // register composite unlink function
	  // to be called during instance destruction
	  this._unlinkFn = function () {
	    rootUnlinkFn()
	    // passing destroying: true to avoid searching and
	    // splicing the directives
	    contentUnlinkFn(true)
	  }
	
	  // finally replace original
	  if (options.replace) {
	    _.replace(original, el)
	  }
	
	  this._isCompiled = true
	  this._callHook('compiled')
	  return el
	}
	
	/**
	 * Initialize instance element. Called in the public
	 * $mount() method.
	 *
	 * @param {Element} el
	 */
	
	exports._initElement = function (el) {
	  if (el instanceof DocumentFragment) {
	    this._isFragment = true
	    this.$el = this._fragmentStart = el.firstChild
	    this._fragmentEnd = el.lastChild
	    // set persisted text anchors to empty
	    if (this._fragmentStart.nodeType === 3) {
	      this._fragmentStart.data = this._fragmentEnd.data = ''
	    }
	    this._fragment = el
	  } else {
	    this.$el = el
	  }
	  this.$el.__vue__ = this
	  this._callHook('beforeCompile')
	}
	
	/**
	 * Create and bind a directive to an element.
	 *
	 * @param {String} name - directive name
	 * @param {Node} node   - target node
	 * @param {Object} desc - parsed directive descriptor
	 * @param {Object} def  - directive definition object
	 * @param {Vue} [host] - transclusion host component
	 * @param {Object} [scope] - v-for scope
	 * @param {Fragment} [frag] - owner fragment
	 */
	
	exports._bindDir = function (descriptor, node, host, scope, frag) {
	  this._directives.push(
	    new Directive(descriptor, this, node, host, scope, frag)
	  )
	}
	
	/**
	 * Teardown an instance, unobserves the data, unbind all the
	 * directives, turn off all the event listeners, etc.
	 *
	 * @param {Boolean} remove - whether to remove the DOM node.
	 * @param {Boolean} deferCleanup - if true, defer cleanup to
	 *                                 be called later
	 */
	
	exports._destroy = function (remove, deferCleanup) {
	  if (this._isBeingDestroyed) {
	    return
	  }
	  this._callHook('beforeDestroy')
	  this._isBeingDestroyed = true
	  var i
	  // remove self from parent. only necessary
	  // if parent is not being destroyed as well.
	  var parent = this.$parent
	  if (parent && !parent._isBeingDestroyed) {
	    parent.$children.$remove(this)
	    // unregister ref
	    var ref = this.$options._ref
	    if (ref) {
	      var scope = this._scope || this._context
	      if (scope.$refs[ref] === this) {
	        scope.$refs[ref] = null
	      }
	    }
	  }
	  // remove self from owner fragment
	  if (this._frag) {
	    this._frag.children.$remove(this)
	  }
	  // destroy all children.
	  i = this.$children.length
	  while (i--) {
	    this.$children[i].$destroy()
	  }
	  // teardown props
	  if (this._propsUnlinkFn) {
	    this._propsUnlinkFn()
	  }
	  // teardown all directives. this also tearsdown all
	  // directive-owned watchers.
	  if (this._unlinkFn) {
	    this._unlinkFn()
	  }
	  i = this._watchers.length
	  while (i--) {
	    this._watchers[i].teardown()
	  }
	  // remove reference to self on $el
	  if (this.$el) {
	    this.$el.__vue__ = null
	  }
	  // remove DOM element
	  var self = this
	  if (remove && this.$el) {
	    this.$remove(function () {
	      self._cleanup()
	    })
	  } else if (!deferCleanup) {
	    this._cleanup()
	  }
	}
	
	/**
	 * Clean up to ensure garbage collection.
	 * This is called after the leave transition if there
	 * is any.
	 */
	
	exports._cleanup = function () {
	  // remove reference from data ob
	  // frozen object may not have observer.
	  if (this._data.__ob__) {
	    this._data.__ob__.removeVm(this)
	  }
	  // Clean up references to private properties and other
	  // instances. preserve reference to _data so that proxy
	  // accessors still work. The only potential side effect
	  // here is that mutating the instance after it's destroyed
	  // may affect the state of other components that are still
	  // observing the same object, but that seems to be a
	  // reasonable responsibility for the user rather than
	  // always throwing an error on them.
	  this.$el =
	  this.$parent =
	  this.$root =
	  this.$children =
	  this._watchers =
	  this._context =
	  this._scope =
	  this._directives = null
	  // call the last hook...
	  this._isDestroyed = true
	  this._callHook('destroyed')
	  // turn off all instance listeners.
	  this.$off()
	}


/***/ },
/* 352 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	
	/**
	 * Apply a list of filter (descriptors) to a value.
	 * Using plain for loops here because this will be called in
	 * the getter of any watcher with filters so it is very
	 * performance sensitive.
	 *
	 * @param {*} value
	 * @param {*} [oldValue]
	 * @param {Array} filters
	 * @param {Boolean} write
	 * @return {*}
	 */
	
	exports._applyFilters = function (value, oldValue, filters, write) {
	  var filter, fn, args, arg, offset, i, l, j, k
	  for (i = 0, l = filters.length; i < l; i++) {
	    filter = filters[i]
	    fn = _.resolveAsset(this.$options, 'filters', filter.name)
	    if (true) {
	      _.assertAsset(fn, 'filter', filter.name)
	    }
	    if (!fn) continue
	    fn = write ? fn.write : (fn.read || fn)
	    if (typeof fn !== 'function') continue
	    args = write ? [value, oldValue] : [value]
	    offset = write ? 2 : 1
	    if (filter.args) {
	      for (j = 0, k = filter.args.length; j < k; j++) {
	        arg = filter.args[j]
	        args[j + offset] = arg.dynamic
	          ? this.$get(arg.value)
	          : arg.value
	      }
	    }
	    value = fn.apply(this, args)
	  }
	  return value
	}
	
	/**
	 * Resolve a component, depending on whether the component
	 * is defined normally or using an async factory function.
	 * Resolves synchronously if already resolved, otherwise
	 * resolves asynchronously and caches the resolved
	 * constructor on the factory.
	 *
	 * @param {String} id
	 * @param {Function} cb
	 */
	
	exports._resolveComponent = function (id, cb) {
	  var factory = _.resolveAsset(this.$options, 'components', id)
	  if (true) {
	    _.assertAsset(factory, 'component', id)
	  }
	  if (!factory) {
	    return
	  }
	  // async component factory
	  if (!factory.options) {
	    if (factory.resolved) {
	      // cached
	      cb(factory.resolved)
	    } else if (factory.requested) {
	      // pool callbacks
	      factory.pendingCallbacks.push(cb)
	    } else {
	      factory.requested = true
	      var cbs = factory.pendingCallbacks = [cb]
	      factory(function resolve (res) {
	        if (_.isPlainObject(res)) {
	          res = _.Vue.extend(res)
	        }
	        // cache resolved
	        factory.resolved = res
	        // invoke callbacks
	        for (var i = 0, l = cbs.length; i < l; i++) {
	          cbs[i](res)
	        }
	      }, function reject (reason) {
	        ("development") !== 'production' && _.warn(
	          'Failed to resolve async component: ' + id + '. ' +
	          (reason ? '\nReason: ' + reason : '')
	        )
	      })
	    }
	  } else {
	    // normal component
	    cb(factory)
	  }
	}


/***/ },
/* 353 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var compiler = __webpack_require__(18)
	var Observer = __webpack_require__(355)
	var Dep = __webpack_require__(42)
	var Watcher = __webpack_require__(27)
	
	/**
	 * Setup the scope of an instance, which contains:
	 * - observed data
	 * - computed properties
	 * - user methods
	 * - meta properties
	 */
	
	exports._initState = function () {
	  this._initProps()
	  this._initMeta()
	  this._initMethods()
	  this._initData()
	  this._initComputed()
	}
	
	/**
	 * Initialize props.
	 */
	
	exports._initProps = function () {
	  var options = this.$options
	  var el = options.el
	  var props = options.props
	  if (props && !el) {
	    ("development") !== 'production' && _.warn(
	      'Props will not be compiled if no `el` option is ' +
	      'provided at instantiation.'
	    )
	  }
	  // make sure to convert string selectors into element now
	  el = options.el = _.query(el)
	  this._propsUnlinkFn = el && el.nodeType === 1 && props
	    // props must be linked in proper scope if inside v-for
	    ? compiler.compileAndLinkProps(this, el, props, this._scope)
	    : null
	}
	
	/**
	 * Initialize the data.
	 */
	
	exports._initData = function () {
	  var propsData = this._data
	  var optionsDataFn = this.$options.data
	  var optionsData = optionsDataFn && optionsDataFn()
	  if (optionsData) {
	    this._data = optionsData
	    for (var prop in propsData) {
	      if (("development") !== 'production' &&
	          optionsData.hasOwnProperty(prop)) {
	        _.warn(
	          'Data field "' + prop + '" is already defined ' +
	          'as a prop. Use prop default value instead.'
	        )
	      }
	      if (this._props[prop].raw !== null ||
	          !optionsData.hasOwnProperty(prop)) {
	        _.set(optionsData, prop, propsData[prop])
	      }
	    }
	  }
	  var data = this._data
	  // proxy data on instance
	  var keys = Object.keys(data)
	  var i, key
	  i = keys.length
	  while (i--) {
	    key = keys[i]
	    this._proxy(key)
	  }
	  // observe data
	  Observer.create(data, this)
	}
	
	/**
	 * Swap the isntance's $data. Called in $data's setter.
	 *
	 * @param {Object} newData
	 */
	
	exports._setData = function (newData) {
	  newData = newData || {}
	  var oldData = this._data
	  this._data = newData
	  var keys, key, i
	  // unproxy keys not present in new data
	  keys = Object.keys(oldData)
	  i = keys.length
	  while (i--) {
	    key = keys[i]
	    if (!(key in newData)) {
	      this._unproxy(key)
	    }
	  }
	  // proxy keys not already proxied,
	  // and trigger change for changed values
	  keys = Object.keys(newData)
	  i = keys.length
	  while (i--) {
	    key = keys[i]
	    if (!this.hasOwnProperty(key)) {
	      // new property
	      this._proxy(key)
	    }
	  }
	  oldData.__ob__.removeVm(this)
	  Observer.create(newData, this)
	  this._digest()
	}
	
	/**
	 * Proxy a property, so that
	 * vm.prop === vm._data.prop
	 *
	 * @param {String} key
	 */
	
	exports._proxy = function (key) {
	  if (!_.isReserved(key)) {
	    // need to store ref to self here
	    // because these getter/setters might
	    // be called by child scopes via
	    // prototype inheritance.
	    var self = this
	    Object.defineProperty(self, key, {
	      configurable: true,
	      enumerable: true,
	      get: function proxyGetter () {
	        return self._data[key]
	      },
	      set: function proxySetter (val) {
	        self._data[key] = val
	      }
	    })
	  }
	}
	
	/**
	 * Unproxy a property.
	 *
	 * @param {String} key
	 */
	
	exports._unproxy = function (key) {
	  if (!_.isReserved(key)) {
	    delete this[key]
	  }
	}
	
	/**
	 * Force update on every watcher in scope.
	 */
	
	exports._digest = function () {
	  for (var i = 0, l = this._watchers.length; i < l; i++) {
	    this._watchers[i].update(true) // shallow updates
	  }
	}
	
	/**
	 * Setup computed properties. They are essentially
	 * special getter/setters
	 */
	
	function noop () {}
	exports._initComputed = function () {
	  var computed = this.$options.computed
	  if (computed) {
	    for (var key in computed) {
	      var userDef = computed[key]
	      var def = {
	        enumerable: true,
	        configurable: true
	      }
	      if (typeof userDef === 'function') {
	        def.get = makeComputedGetter(userDef, this)
	        def.set = noop
	      } else {
	        def.get = userDef.get
	          ? userDef.cache !== false
	            ? makeComputedGetter(userDef.get, this)
	            : _.bind(userDef.get, this)
	          : noop
	        def.set = userDef.set
	          ? _.bind(userDef.set, this)
	          : noop
	      }
	      Object.defineProperty(this, key, def)
	    }
	  }
	}
	
	function makeComputedGetter (getter, owner) {
	  var watcher = new Watcher(owner, getter, null, {
	    lazy: true
	  })
	  return function computedGetter () {
	    if (watcher.dirty) {
	      watcher.evaluate()
	    }
	    if (Dep.target) {
	      watcher.depend()
	    }
	    return watcher.value
	  }
	}
	
	/**
	 * Setup instance methods. Methods must be bound to the
	 * instance since they might be passed down as a prop to
	 * child components.
	 */
	
	exports._initMethods = function () {
	  var methods = this.$options.methods
	  if (methods) {
	    for (var key in methods) {
	      this[key] = _.bind(methods[key], this)
	    }
	  }
	}
	
	/**
	 * Initialize meta information like $index, $key & $value.
	 */
	
	exports._initMeta = function () {
	  var metas = this.$options._meta
	  if (metas) {
	    for (var key in metas) {
	      _.defineReactive(this, key, metas[key])
	    }
	  }
	}


/***/ },
/* 354 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var arrayProto = Array.prototype
	var arrayMethods = Object.create(arrayProto)
	
	/**
	 * Intercept mutating methods and emit events
	 */
	
	;[
	  'push',
	  'pop',
	  'shift',
	  'unshift',
	  'splice',
	  'sort',
	  'reverse'
	]
	.forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method]
	  _.define(arrayMethods, method, function mutator () {
	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length
	    var args = new Array(i)
	    while (i--) {
	      args[i] = arguments[i]
	    }
	    var result = original.apply(this, args)
	    var ob = this.__ob__
	    var inserted
	    switch (method) {
	      case 'push':
	        inserted = args
	        break
	      case 'unshift':
	        inserted = args
	        break
	      case 'splice':
	        inserted = args.slice(2)
	        break
	    }
	    if (inserted) ob.observeArray(inserted)
	    // notify change
	    ob.dep.notify()
	    return result
	  })
	})
	
	/**
	 * Swap the element at the given index with a new value
	 * and emits corresponding event.
	 *
	 * @param {Number} index
	 * @param {*} val
	 * @return {*} - replaced element
	 */
	
	_.define(
	  arrayProto,
	  '$set',
	  function $set (index, val) {
	    if (index >= this.length) {
	      this.length = index + 1
	    }
	    return this.splice(index, 1, val)[0]
	  }
	)
	
	/**
	 * Convenience method to remove the element at given index.
	 *
	 * @param {Number} index
	 * @param {*} val
	 */
	
	_.define(
	  arrayProto,
	  '$remove',
	  function $remove (item) {
	    /* istanbul ignore if */
	    if (!this.length) return
	    var index = _.indexOf(this, item)
	    if (index > -1) {
	      return this.splice(index, 1)
	    }
	  }
	)
	
	module.exports = arrayMethods


/***/ },
/* 355 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var Dep = __webpack_require__(42)
	var arrayMethods = __webpack_require__(354)
	var arrayKeys = Object.getOwnPropertyNames(arrayMethods)
	
	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 *
	 * @param {Array|Object} value
	 * @constructor
	 */
	
	function Observer (value) {
	  this.value = value
	  this.dep = new Dep()
	  _.define(value, '__ob__', this)
	  if (_.isArray(value)) {
	    var augment = _.hasProto
	      ? protoAugment
	      : copyAugment
	    augment(value, arrayMethods, arrayKeys)
	    this.observeArray(value)
	  } else {
	    this.walk(value)
	  }
	}
	
	// Static methods
	
	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 *
	 * @param {*} value
	 * @param {Vue} [vm]
	 * @return {Observer|undefined}
	 * @static
	 */
	
	Observer.create = function (value, vm) {
	  if (!value || typeof value !== 'object') {
	    return
	  }
	  var ob
	  if (
	    value.hasOwnProperty('__ob__') &&
	    value.__ob__ instanceof Observer
	  ) {
	    ob = value.__ob__
	  } else if (
	    (_.isArray(value) || _.isPlainObject(value)) &&
	    !Object.isFrozen(value) &&
	    !value._isVue
	  ) {
	    ob = new Observer(value)
	  }
	  if (ob && vm) {
	    ob.addVm(vm)
	  }
	  return ob
	}
	
	// Instance methods
	
	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 *
	 * @param {Object} obj
	 */
	
	Observer.prototype.walk = function (obj) {
	  var keys = Object.keys(obj)
	  var i = keys.length
	  while (i--) {
	    this.convert(keys[i], obj[keys[i]])
	  }
	}
	
	/**
	 * Observe a list of Array items.
	 *
	 * @param {Array} items
	 */
	
	Observer.prototype.observeArray = function (items) {
	  var i = items.length
	  while (i--) {
	    Observer.create(items[i])
	  }
	}
	
	/**
	 * Convert a property into getter/setter so we can emit
	 * the events when the property is accessed/changed.
	 *
	 * @param {String} key
	 * @param {*} val
	 */
	
	Observer.prototype.convert = function (key, val) {
	  defineReactive(this.value, key, val)
	}
	
	/**
	 * Add an owner vm, so that when $set/$delete mutations
	 * happen we can notify owner vms to proxy the keys and
	 * digest the watchers. This is only called when the object
	 * is observed as an instance's root $data.
	 *
	 * @param {Vue} vm
	 */
	
	Observer.prototype.addVm = function (vm) {
	  (this.vms || (this.vms = [])).push(vm)
	}
	
	/**
	 * Remove an owner vm. This is called when the object is
	 * swapped out as an instance's $data object.
	 *
	 * @param {Vue} vm
	 */
	
	Observer.prototype.removeVm = function (vm) {
	  this.vms.$remove(vm)
	}
	
	// helpers
	
	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */
	
	function protoAugment (target, src) {
	  target.__proto__ = src
	}
	
	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */
	
	function copyAugment (target, src, keys) {
	  var i = keys.length
	  var key
	  while (i--) {
	    key = keys[i]
	    _.define(target, key, src[key])
	  }
	}
	
	/**
	 * Define a reactive property on an Object.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 */
	
	function defineReactive (obj, key, val) {
	  var dep = new Dep()
	  var childOb = Observer.create(val)
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function metaGetter () {
	      if (Dep.target) {
	        dep.depend()
	        if (childOb) {
	          childOb.dep.depend()
	        }
	        if (_.isArray(val)) {
	          for (var e, i = 0, l = val.length; i < l; i++) {
	            e = val[i]
	            e && e.__ob__ && e.__ob__.dep.depend()
	          }
	        }
	      }
	      return val
	    },
	    set: function metaSetter (newVal) {
	      if (newVal === val) return
	      val = newVal
	      childOb = Observer.create(newVal)
	      dep.notify()
	    }
	  })
	}
	
	// Attach to the util object so it can be used elsewhere.
	_.defineReactive = defineReactive
	
	module.exports = Observer


/***/ },
/* 356 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var queue = []
	var queued = false
	
	/**
	 * Push a job into the queue.
	 *
	 * @param {Function} job
	 */
	
	exports.push = function (job) {
	  queue.push(job)
	  if (!queued) {
	    queued = true
	    _.nextTick(flush)
	  }
	}
	
	/**
	 * Flush the queue, and do one forced reflow before
	 * triggering transitions.
	 */
	
	function flush () {
	  // Force layout
	  var f = document.documentElement.offsetHeight
	  for (var i = 0; i < queue.length; i++) {
	    queue[i]()
	  }
	  queue = []
	  queued = false
	  // dummy return, so js linters don't complain about
	  // unused variable f
	  return f
	}


/***/ },
/* 357 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var queue = __webpack_require__(356)
	var addClass = _.addClass
	var removeClass = _.removeClass
	var transitionEndEvent = _.transitionEndEvent
	var animationEndEvent = _.animationEndEvent
	var transDurationProp = _.transitionProp + 'Duration'
	var animDurationProp = _.animationProp + 'Duration'
	
	var TYPE_TRANSITION = 1
	var TYPE_ANIMATION = 2
	
	/**
	 * A Transition object that encapsulates the state and logic
	 * of the transition.
	 *
	 * @param {Element} el
	 * @param {String} id
	 * @param {Object} hooks
	 * @param {Vue} vm
	 */
	
	function Transition (el, id, hooks, vm) {
	  this.id = id
	  this.el = el
	  this.enterClass = id + '-enter'
	  this.leaveClass = id + '-leave'
	  this.hooks = hooks
	  this.vm = vm
	  // async state
	  this.pendingCssEvent =
	  this.pendingCssCb =
	  this.cancel =
	  this.pendingJsCb =
	  this.op =
	  this.cb = null
	  this.justEntered = false
	  this.entered = this.left = false
	  this.typeCache = {}
	  // bind
	  var self = this
	  ;['enterNextTick', 'enterDone', 'leaveNextTick', 'leaveDone']
	    .forEach(function (m) {
	      self[m] = _.bind(self[m], self)
	    })
	}
	
	var p = Transition.prototype
	
	/**
	 * Start an entering transition.
	 *
	 * 1. enter transition triggered
	 * 2. call beforeEnter hook
	 * 3. add enter class
	 * 4. insert/show element
	 * 5. call enter hook (with possible explicit js callback)
	 * 6. reflow
	 * 7. based on transition type:
	 *    - transition:
	 *        remove class now, wait for transitionend,
	 *        then done if there's no explicit js callback.
	 *    - animation:
	 *        wait for animationend, remove class,
	 *        then done if there's no explicit js callback.
	 *    - no css transition:
	 *        done now if there's no explicit js callback.
	 * 8. wait for either done or js callback, then call
	 *    afterEnter hook.
	 *
	 * @param {Function} op - insert/show the element
	 * @param {Function} [cb]
	 */
	
	p.enter = function (op, cb) {
	  this.cancelPending()
	  this.callHook('beforeEnter')
	  this.cb = cb
	  addClass(this.el, this.enterClass)
	  op()
	  this.entered = false
	  this.callHookWithCb('enter')
	  if (this.entered) {
	    return // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.enterCancelled
	  queue.push(this.enterNextTick)
	}
	
	/**
	 * The "nextTick" phase of an entering transition, which is
	 * to be pushed into a queue and executed after a reflow so
	 * that removing the class can trigger a CSS transition.
	 */
	
	p.enterNextTick = function () {
	
	  // Importnatn hack:
	  // in Chrome, if a just-entered element is applied the
	  // leave class while its interpolated property still has
	  // a very small value (within one frame), Chrome will
	  // skip the leave transition entirely and not firing the
	  // transtionend event. Therefore we need to protected
	  // against such cases using a one-frame timeout.
	  this.justEntered = true
	  var self = this
	  setTimeout(function () {
	    self.justEntered = false
	  }, 17)
	
	  var enterDone = this.enterDone
	  var type = this.getCssTransitionType(this.enterClass)
	  if (!this.pendingJsCb) {
	    if (type === TYPE_TRANSITION) {
	      // trigger transition by removing enter class now
	      removeClass(this.el, this.enterClass)
	      this.setupCssCb(transitionEndEvent, enterDone)
	    } else if (type === TYPE_ANIMATION) {
	      this.setupCssCb(animationEndEvent, enterDone)
	    } else {
	      enterDone()
	    }
	  } else if (type === TYPE_TRANSITION) {
	    removeClass(this.el, this.enterClass)
	  }
	}
	
	/**
	 * The "cleanup" phase of an entering transition.
	 */
	
	p.enterDone = function () {
	  this.entered = true
	  this.cancel = this.pendingJsCb = null
	  removeClass(this.el, this.enterClass)
	  this.callHook('afterEnter')
	  if (this.cb) this.cb()
	}
	
	/**
	 * Start a leaving transition.
	 *
	 * 1. leave transition triggered.
	 * 2. call beforeLeave hook
	 * 3. add leave class (trigger css transition)
	 * 4. call leave hook (with possible explicit js callback)
	 * 5. reflow if no explicit js callback is provided
	 * 6. based on transition type:
	 *    - transition or animation:
	 *        wait for end event, remove class, then done if
	 *        there's no explicit js callback.
	 *    - no css transition:
	 *        done if there's no explicit js callback.
	 * 7. wait for either done or js callback, then call
	 *    afterLeave hook.
	 *
	 * @param {Function} op - remove/hide the element
	 * @param {Function} [cb]
	 */
	
	p.leave = function (op, cb) {
	  this.cancelPending()
	  this.callHook('beforeLeave')
	  this.op = op
	  this.cb = cb
	  addClass(this.el, this.leaveClass)
	  this.left = false
	  this.callHookWithCb('leave')
	  if (this.left) {
	    return // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.leaveCancelled
	  // only need to handle leaveDone if
	  // 1. the transition is already done (synchronously called
	  //    by the user, which causes this.op set to null)
	  // 2. there's no explicit js callback
	  if (this.op && !this.pendingJsCb) {
	    // if a CSS transition leaves immediately after enter,
	    // the transitionend event never fires. therefore we
	    // detect such cases and end the leave immediately.
	    if (this.justEntered) {
	      this.leaveDone()
	    } else {
	      queue.push(this.leaveNextTick)
	    }
	  }
	}
	
	/**
	 * The "nextTick" phase of a leaving transition.
	 */
	
	p.leaveNextTick = function () {
	  var type = this.getCssTransitionType(this.leaveClass)
	  if (type) {
	    var event = type === TYPE_TRANSITION
	      ? transitionEndEvent
	      : animationEndEvent
	    this.setupCssCb(event, this.leaveDone)
	  } else {
	    this.leaveDone()
	  }
	}
	
	/**
	 * The "cleanup" phase of a leaving transition.
	 */
	
	p.leaveDone = function () {
	  this.left = true
	  this.cancel = this.pendingJsCb = null
	  this.op()
	  removeClass(this.el, this.leaveClass)
	  this.callHook('afterLeave')
	  if (this.cb) this.cb()
	  this.op = null
	}
	
	/**
	 * Cancel any pending callbacks from a previously running
	 * but not finished transition.
	 */
	
	p.cancelPending = function () {
	  this.op = this.cb = null
	  var hasPending = false
	  if (this.pendingCssCb) {
	    hasPending = true
	    _.off(this.el, this.pendingCssEvent, this.pendingCssCb)
	    this.pendingCssEvent = this.pendingCssCb = null
	  }
	  if (this.pendingJsCb) {
	    hasPending = true
	    this.pendingJsCb.cancel()
	    this.pendingJsCb = null
	  }
	  if (hasPending) {
	    removeClass(this.el, this.enterClass)
	    removeClass(this.el, this.leaveClass)
	  }
	  if (this.cancel) {
	    this.cancel.call(this.vm, this.el)
	    this.cancel = null
	  }
	}
	
	/**
	 * Call a user-provided synchronous hook function.
	 *
	 * @param {String} type
	 */
	
	p.callHook = function (type) {
	  if (this.hooks && this.hooks[type]) {
	    this.hooks[type].call(this.vm, this.el)
	  }
	}
	
	/**
	 * Call a user-provided, potentially-async hook function.
	 * We check for the length of arguments to see if the hook
	 * expects a `done` callback. If true, the transition's end
	 * will be determined by when the user calls that callback;
	 * otherwise, the end is determined by the CSS transition or
	 * animation.
	 *
	 * @param {String} type
	 */
	
	p.callHookWithCb = function (type) {
	  var hook = this.hooks && this.hooks[type]
	  if (hook) {
	    if (hook.length > 1) {
	      this.pendingJsCb = _.cancellable(this[type + 'Done'])
	    }
	    hook.call(this.vm, this.el, this.pendingJsCb)
	  }
	}
	
	/**
	 * Get an element's transition type based on the
	 * calculated styles.
	 *
	 * @param {String} className
	 * @return {Number}
	 */
	
	p.getCssTransitionType = function (className) {
	  /* istanbul ignore if */
	  if (
	    !transitionEndEvent ||
	    // skip CSS transitions if page is not visible -
	    // this solves the issue of transitionend events not
	    // firing until the page is visible again.
	    // pageVisibility API is supported in IE10+, same as
	    // CSS transitions.
	    document.hidden ||
	    // explicit js-only transition
	    (this.hooks && this.hooks.css === false) ||
	    // element is hidden
	    isHidden(this.el)
	  ) {
	    return
	  }
	  var type = this.typeCache[className]
	  if (type) return type
	  var inlineStyles = this.el.style
	  var computedStyles = window.getComputedStyle(this.el)
	  var transDuration =
	    inlineStyles[transDurationProp] ||
	    computedStyles[transDurationProp]
	  if (transDuration && transDuration !== '0s') {
	    type = TYPE_TRANSITION
	  } else {
	    var animDuration =
	      inlineStyles[animDurationProp] ||
	      computedStyles[animDurationProp]
	    if (animDuration && animDuration !== '0s') {
	      type = TYPE_ANIMATION
	    }
	  }
	  if (type) {
	    this.typeCache[className] = type
	  }
	  return type
	}
	
	/**
	 * Setup a CSS transitionend/animationend callback.
	 *
	 * @param {String} event
	 * @param {Function} cb
	 */
	
	p.setupCssCb = function (event, cb) {
	  this.pendingCssEvent = event
	  var self = this
	  var el = this.el
	  var onEnd = this.pendingCssCb = function (e) {
	    if (e.target === el) {
	      _.off(el, event, onEnd)
	      self.pendingCssEvent = self.pendingCssCb = null
	      if (!self.pendingJsCb && cb) {
	        cb()
	      }
	    }
	  }
	  _.on(el, event, onEnd)
	}
	
	/**
	 * Check if an element is hidden - in that case we can just
	 * skip the transition alltogether.
	 *
	 * @param {Element} el
	 * @return {Boolean}
	 */
	
	function isHidden (el) {
	  return !(
	    el.offsetWidth &&
	    el.offsetHeight &&
	    el.getClientRects().length
	  )
	}
	
	module.exports = Transition


/***/ },
/* 358 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	
	/**
	 * Check if an element is a component, if yes return its
	 * component id.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */
	
	exports.commonTagRE = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/
	exports.checkComponent = function (el, options) {
	  var tag = el.tagName.toLowerCase()
	  var hasAttrs = el.hasAttributes()
	  if (!exports.commonTagRE.test(tag) && tag !== 'component') {
	    if (_.resolveAsset(options, 'components', tag)) {
	      return { id: tag }
	    } else {
	      var is = hasAttrs && getIsBinding(el)
	      if (is) {
	        return is
	      } else if (true) {
	        if (
	          tag.indexOf('-') > -1 ||
	          (
	            /HTMLUnknownElement/.test(el.toString()) &&
	            // Chrome returns unknown for several HTML5 elements.
	            // https://code.google.com/p/chromium/issues/detail?id=540526
	            !/^(data|time|rtc|rb)$/.test(tag)
	          )
	        ) {
	          _.warn(
	            'Unknown custom element: <' + tag + '> - did you ' +
	            'register the component correctly?'
	          )
	        }
	      }
	    }
	  } else if (hasAttrs) {
	    return getIsBinding(el)
	  }
	}
	
	/**
	 * Get "is" binding from an element.
	 *
	 * @param {Element} el
	 * @return {Object|undefined}
	 */
	
	function getIsBinding (el) {
	  // dynamic syntax
	  var exp = _.attr(el, 'is')
	  if (exp != null) {
	    return { id: exp }
	  } else {
	    exp = _.getBindAttr(el, 'is')
	    if (exp != null) {
	      return { id: exp, dynamic: true }
	    }
	  }
	}
	
	/**
	 * Set a prop's initial value on a vm and its data object.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */
	
	exports.initProp = function (vm, prop, value) {
	  if (exports.assertProp(prop, value)) {
	    var key = prop.path
	    vm[key] = vm._data[key] = value
	  }
	}
	
	/**
	 * Assert whether a prop is valid.
	 *
	 * @param {Object} prop
	 * @param {*} value
	 */
	
	exports.assertProp = function (prop, value) {
	  // if a prop is not provided and is not required,
	  // skip the check.
	  if (prop.raw === null && !prop.required) {
	    return true
	  }
	  var options = prop.options
	  var type = options.type
	  var valid = true
	  var expectedType
	  if (type) {
	    if (type === String) {
	      expectedType = 'string'
	      valid = typeof value === expectedType
	    } else if (type === Number) {
	      expectedType = 'number'
	      valid = typeof value === 'number'
	    } else if (type === Boolean) {
	      expectedType = 'boolean'
	      valid = typeof value === 'boolean'
	    } else if (type === Function) {
	      expectedType = 'function'
	      valid = typeof value === 'function'
	    } else if (type === Object) {
	      expectedType = 'object'
	      valid = _.isPlainObject(value)
	    } else if (type === Array) {
	      expectedType = 'array'
	      valid = _.isArray(value)
	    } else {
	      valid = value instanceof type
	    }
	  }
	  if (!valid) {
	    ("development") !== 'production' && _.warn(
	      'Invalid prop: type check failed for ' +
	      prop.path + '="' + prop.raw + '".' +
	      ' Expected ' + formatType(expectedType) +
	      ', got ' + formatValue(value) + '.'
	    )
	    return false
	  }
	  var validator = options.validator
	  if (validator) {
	    if (!validator.call(null, value)) {
	      ("development") !== 'production' && _.warn(
	        'Invalid prop: custom validator check failed for ' +
	        prop.path + '="' + prop.raw + '"'
	      )
	      return false
	    }
	  }
	  return true
	}
	
	function formatType (val) {
	  return val
	    ? val.charAt(0).toUpperCase() + val.slice(1)
	    : 'custom type'
	}
	
	function formatValue (val) {
	  return Object.prototype.toString.call(val).slice(8, -1)
	}


/***/ },
/* 359 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Enable debug utilities.
	 */
	
	if (true) {
	
	  var config = __webpack_require__(7)
	  var hasConsole = typeof console !== 'undefined'
	
	  /**
	   * Log a message.
	   *
	   * @param {String} msg
	   */
	
	  exports.log = function (msg) {
	    if (hasConsole && config.debug) {
	      console.log('[Vue info]: ' + msg)
	    }
	  }
	
	  /**
	   * We've got a problem here.
	   *
	   * @param {String} msg
	   */
	
	  exports.warn = function (msg, e) {
	    if (hasConsole && (!config.silent || config.debug)) {
	      console.warn('[Vue warn]: ' + msg)
	      /* istanbul ignore if */
	      if (config.debug) {
	        console.warn((e || new Error('Warning Stack Trace')).stack)
	      }
	    }
	  }
	
	  /**
	   * Assert asset exists
	   */
	
	  exports.assertAsset = function (val, type, id) {
	    if (!val) {
	      exports.warn('Failed to resolve ' + type + ': ' + id)
	    }
	  }
	}


/***/ },
/* 360 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var config = __webpack_require__(7)
	var transition = __webpack_require__(26)
	
	/**
	 * Query an element selector if it's not an element already.
	 *
	 * @param {String|Element} el
	 * @return {Element}
	 */
	
	exports.query = function (el) {
	  if (typeof el === 'string') {
	    var selector = el
	    el = document.querySelector(el)
	    if (!el) {
	      ("development") !== 'production' && _.warn(
	        'Cannot find element: ' + selector
	      )
	    }
	  }
	  return el
	}
	
	/**
	 * Check if a node is in the document.
	 * Note: document.documentElement.contains should work here
	 * but always returns false for comment nodes in phantomjs,
	 * making unit tests difficult. This is fixed by doing the
	 * contains() check on the node's parentNode instead of
	 * the node itself.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */
	
	exports.inDoc = function (node) {
	  var doc = document.documentElement
	  var parent = node && node.parentNode
	  return doc === node ||
	    doc === parent ||
	    !!(parent && parent.nodeType === 1 && (doc.contains(parent)))
	}
	
	/**
	 * Get and remove an attribute from a node.
	 *
	 * @param {Node} node
	 * @param {String} attr
	 */
	
	exports.attr = function (node, attr) {
	  var val = node.getAttribute(attr)
	  if (val !== null) {
	    node.removeAttribute(attr)
	  }
	  return val
	}
	
	/**
	 * Get an attribute with colon or v-bind: prefix.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {String|null}
	 */
	
	exports.getBindAttr = function (node, name) {
	  var val = exports.attr(node, ':' + name)
	  if (val === null) {
	    val = exports.attr(node, 'v-bind:' + name)
	  }
	  return val
	}
	
	/**
	 * Insert el before target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	exports.before = function (el, target) {
	  target.parentNode.insertBefore(el, target)
	}
	
	/**
	 * Insert el after target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	exports.after = function (el, target) {
	  if (target.nextSibling) {
	    exports.before(el, target.nextSibling)
	  } else {
	    target.parentNode.appendChild(el)
	  }
	}
	
	/**
	 * Remove el from DOM
	 *
	 * @param {Element} el
	 */
	
	exports.remove = function (el) {
	  el.parentNode.removeChild(el)
	}
	
	/**
	 * Prepend el to target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	exports.prepend = function (el, target) {
	  if (target.firstChild) {
	    exports.before(el, target.firstChild)
	  } else {
	    target.appendChild(el)
	  }
	}
	
	/**
	 * Replace target with el
	 *
	 * @param {Element} target
	 * @param {Element} el
	 */
	
	exports.replace = function (target, el) {
	  var parent = target.parentNode
	  if (parent) {
	    parent.replaceChild(el, target)
	  }
	}
	
	/**
	 * Add event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 */
	
	exports.on = function (el, event, cb) {
	  el.addEventListener(event, cb)
	}
	
	/**
	 * Remove event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 */
	
	exports.off = function (el, event, cb) {
	  el.removeEventListener(event, cb)
	}
	
	/**
	 * Add class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {Strong} cls
	 */
	
	exports.addClass = function (el, cls) {
	  if (el.classList) {
	    el.classList.add(cls)
	  } else {
	    var cur = ' ' + (el.getAttribute('class') || '') + ' '
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      el.setAttribute('class', (cur + cls).trim())
	    }
	  }
	}
	
	/**
	 * Remove class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {Strong} cls
	 */
	
	exports.removeClass = function (el, cls) {
	  if (el.classList) {
	    el.classList.remove(cls)
	  } else {
	    var cur = ' ' + (el.getAttribute('class') || '') + ' '
	    var tar = ' ' + cls + ' '
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ')
	    }
	    el.setAttribute('class', cur.trim())
	  }
	  if (!el.className) {
	    el.removeAttribute('class')
	  }
	}
	
	/**
	 * Extract raw content inside an element into a temporary
	 * container div
	 *
	 * @param {Element} el
	 * @param {Boolean} asFragment
	 * @return {Element}
	 */
	
	exports.extractContent = function (el, asFragment) {
	  var child
	  var rawContent
	  /* istanbul ignore if */
	  if (
	    exports.isTemplate(el) &&
	    el.content instanceof DocumentFragment
	  ) {
	    el = el.content
	  }
	  if (el.hasChildNodes()) {
	    exports.trimNode(el)
	    rawContent = asFragment
	      ? document.createDocumentFragment()
	      : document.createElement('div')
	    /* eslint-disable no-cond-assign */
	    while (child = el.firstChild) {
	    /* eslint-enable no-cond-assign */
	      rawContent.appendChild(child)
	    }
	  }
	  return rawContent
	}
	
	/**
	 * Trim possible empty head/tail textNodes inside a parent.
	 *
	 * @param {Node} node
	 */
	
	exports.trimNode = function (node) {
	  trim(node, node.firstChild)
	  trim(node, node.lastChild)
	}
	
	function trim (parent, node) {
	  if (node && node.nodeType === 3 && !node.data.trim()) {
	    parent.removeChild(node)
	  }
	}
	
	/**
	 * Check if an element is a template tag.
	 * Note if the template appears inside an SVG its tagName
	 * will be in lowercase.
	 *
	 * @param {Element} el
	 */
	
	exports.isTemplate = function (el) {
	  return el.tagName &&
	    el.tagName.toLowerCase() === 'template'
	}
	
	/**
	 * Create an "anchor" for performing dom insertion/removals.
	 * This is used in a number of scenarios:
	 * - fragment instance
	 * - v-html
	 * - v-if
	 * - v-for
	 * - component
	 *
	 * @param {String} content
	 * @param {Boolean} persist - IE trashes empty textNodes on
	 *                            cloneNode(true), so in certain
	 *                            cases the anchor needs to be
	 *                            non-empty to be persisted in
	 *                            templates.
	 * @return {Comment|Text}
	 */
	
	exports.createAnchor = function (content, persist) {
	  return config.debug
	    ? document.createComment(content)
	    : document.createTextNode(persist ? ' ' : '')
	}
	
	/**
	 * Find a component ref attribute that starts with $.
	 *
	 * @param {Element} node
	 * @return {String|undefined}
	 */
	
	var refRE = /^v-ref:/
	exports.findRef = function (node) {
	  if (node.hasAttributes()) {
	    var attrs = node.attributes
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      var name = attrs[i].name
	      if (refRE.test(name)) {
	        node.removeAttribute(name)
	        return _.camelize(name.replace(refRE, ''))
	      }
	    }
	  }
	}
	
	/**
	 * Map a function to a range of nodes .
	 *
	 * @param {Node} node
	 * @param {Node} end
	 * @param {Function} op
	 */
	
	exports.mapNodeRange = function (node, end, op) {
	  var next
	  while (node !== end) {
	    next = node.nextSibling
	    op(node)
	    node = next
	  }
	  op(end)
	}
	
	/**
	 * Remove a range of nodes with transition, store
	 * the nodes in a fragment with correct ordering,
	 * and call callback when done.
	 *
	 * @param {Node} start
	 * @param {Node} end
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Function} cb
	 */
	
	exports.removeNodeRange = function (start, end, vm, frag, cb) {
	  var done = false
	  var removed = 0
	  var nodes = []
	  exports.mapNodeRange(start, end, function (node) {
	    if (node === end) done = true
	    nodes.push(node)
	    transition.remove(node, vm, onRemoved)
	  })
	  function onRemoved () {
	    removed++
	    if (done && removed >= nodes.length) {
	      for (var i = 0; i < nodes.length; i++) {
	        frag.appendChild(nodes[i])
	      }
	      cb && cb()
	    }
	  }
	}


/***/ },
/* 361 */
/***/ function(module, exports) {

	// can we use __proto__?
	exports.hasProto = '__proto__' in {}
	
	// Browser environment sniffing
	var inBrowser = exports.inBrowser =
	  typeof window !== 'undefined' &&
	  Object.prototype.toString.call(window) !== '[object Object]'
	
	exports.isIE9 =
	  inBrowser &&
	  navigator.userAgent.toLowerCase().indexOf('msie 9.0') > 0
	
	exports.isAndroid =
	  inBrowser &&
	  navigator.userAgent.toLowerCase().indexOf('android') > 0
	
	// Transition property/event sniffing
	if (inBrowser && !exports.isIE9) {
	  var isWebkitTrans =
	    window.ontransitionend === undefined &&
	    window.onwebkittransitionend !== undefined
	  var isWebkitAnim =
	    window.onanimationend === undefined &&
	    window.onwebkitanimationend !== undefined
	  exports.transitionProp = isWebkitTrans
	    ? 'WebkitTransition'
	    : 'transition'
	  exports.transitionEndEvent = isWebkitTrans
	    ? 'webkitTransitionEnd'
	    : 'transitionend'
	  exports.animationProp = isWebkitAnim
	    ? 'WebkitAnimation'
	    : 'animation'
	  exports.animationEndEvent = isWebkitAnim
	    ? 'webkitAnimationEnd'
	    : 'animationend'
	}
	
	/**
	 * Defer a task to execute it asynchronously. Ideally this
	 * should be executed as a microtask, so we leverage
	 * MutationObserver if it's available, and fallback to
	 * setTimeout(0).
	 *
	 * @param {Function} cb
	 * @param {Object} ctx
	 */
	
	exports.nextTick = (function () {
	  var callbacks = []
	  var pending = false
	  var timerFunc
	  function nextTickHandler () {
	    pending = false
	    var copies = callbacks.slice(0)
	    callbacks = []
	    for (var i = 0; i < copies.length; i++) {
	      copies[i]()
	    }
	  }
	  /* istanbul ignore if */
	  if (typeof MutationObserver !== 'undefined') {
	    var counter = 1
	    var observer = new MutationObserver(nextTickHandler)
	    var textNode = document.createTextNode(counter)
	    observer.observe(textNode, {
	      characterData: true
	    })
	    timerFunc = function () {
	      counter = (counter + 1) % 2
	      textNode.data = counter
	    }
	  } else {
	    timerFunc = setTimeout
	  }
	  return function (cb, ctx) {
	    var func = ctx
	      ? function () { cb.call(ctx) }
	      : cb
	    callbacks.push(func)
	    if (pending) return
	    pending = true
	    timerFunc(nextTickHandler, 0)
	  }
	})()


/***/ },
/* 362 */
/***/ function(module, exports) {

	/**
	 * Set a property on an object. Adds the new property and
	 * triggers change notification if the property doesn't
	 * already exist.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @public
	 */
	
	exports.set = function set (obj, key, val) {
	  if (obj.hasOwnProperty(key)) {
	    obj[key] = val
	    return
	  }
	  if (obj._isVue) {
	    set(obj._data, key, val)
	    return
	  }
	  var ob = obj.__ob__
	  if (!ob) {
	    obj[key] = val
	    return
	  }
	  ob.convert(key, val)
	  ob.dep.notify()
	  if (ob.vms) {
	    var i = ob.vms.length
	    while (i--) {
	      var vm = ob.vms[i]
	      vm._proxy(key)
	      vm._digest()
	    }
	  }
	}
	
	/**
	 * Delete a property and trigger change if necessary.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 */
	
	exports.delete = function (obj, key) {
	  if (!obj.hasOwnProperty(key)) {
	    return
	  }
	  delete obj[key]
	  var ob = obj.__ob__
	  if (!ob) {
	    return
	  }
	  ob.dep.notify()
	  if (ob.vms) {
	    var i = ob.vms.length
	    while (i--) {
	      var vm = ob.vms[i]
	      vm._unproxy(key)
	      vm._digest()
	    }
	  }
	}
	
	/**
	 * Check if an expression is a literal value.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */
	
	var literalValueRE = /^\s?(true|false|[\d\.]+|'[^']*'|"[^"]*")\s?$/
	exports.isLiteral = function (exp) {
	  return literalValueRE.test(exp)
	}
	
	/**
	 * Check if a string starts with $ or _
	 *
	 * @param {String} str
	 * @return {Boolean}
	 */
	
	exports.isReserved = function (str) {
	  var c = (str + '').charCodeAt(0)
	  return c === 0x24 || c === 0x5F
	}
	
	/**
	 * Guard text output, make sure undefined outputs
	 * empty string
	 *
	 * @param {*} value
	 * @return {String}
	 */
	
	exports.toString = function (value) {
	  return value == null
	    ? ''
	    : value.toString()
	}
	
	/**
	 * Check and convert possible numeric strings to numbers
	 * before setting back to data
	 *
	 * @param {*} value
	 * @return {*|Number}
	 */
	
	exports.toNumber = function (value) {
	  if (typeof value !== 'string') {
	    return value
	  } else {
	    var parsed = Number(value)
	    return isNaN(parsed)
	      ? value
	      : parsed
	  }
	}
	
	/**
	 * Convert string boolean literals into real booleans.
	 *
	 * @param {*} value
	 * @return {*|Boolean}
	 */
	
	exports.toBoolean = function (value) {
	  return value === 'true'
	    ? true
	    : value === 'false'
	      ? false
	      : value
	}
	
	/**
	 * Strip quotes from a string
	 *
	 * @param {String} str
	 * @return {String | false}
	 */
	
	exports.stripQuotes = function (str) {
	  var a = str.charCodeAt(0)
	  var b = str.charCodeAt(str.length - 1)
	  return a === b && (a === 0x22 || a === 0x27)
	    ? str.slice(1, -1)
	    : str
	}
	
	/**
	 * Camelize a hyphen-delmited string.
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var camelizeRE = /-(\w)/g
	exports.camelize = function (str) {
	  return str.replace(camelizeRE, toUpper)
	}
	
	function toUpper (_, c) {
	  return c ? c.toUpperCase() : ''
	}
	
	/**
	 * Hyphenate a camelCase string.
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var hyphenateRE = /([a-z\d])([A-Z])/g
	exports.hyphenate = function (str) {
	  return str
	    .replace(hyphenateRE, '$1-$2')
	    .toLowerCase()
	}
	
	/**
	 * Converts hyphen/underscore/slash delimitered names into
	 * camelized classNames.
	 *
	 * e.g. my-component => MyComponent
	 *      some_else    => SomeElse
	 *      some/comp    => SomeComp
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var classifyRE = /(?:^|[-_\/])(\w)/g
	exports.classify = function (str) {
	  return str.replace(classifyRE, toUpper)
	}
	
	/**
	 * Simple bind, faster than native
	 *
	 * @param {Function} fn
	 * @param {Object} ctx
	 * @return {Function}
	 */
	
	exports.bind = function (fn, ctx) {
	  return function (a) {
	    var l = arguments.length
	    return l
	      ? l > 1
	        ? fn.apply(ctx, arguments)
	        : fn.call(ctx, a)
	      : fn.call(ctx)
	  }
	}
	
	/**
	 * Convert an Array-like object to a real Array.
	 *
	 * @param {Array-like} list
	 * @param {Number} [start] - start index
	 * @return {Array}
	 */
	
	exports.toArray = function (list, start) {
	  start = start || 0
	  var i = list.length - start
	  var ret = new Array(i)
	  while (i--) {
	    ret[i] = list[i + start]
	  }
	  return ret
	}
	
	/**
	 * Mix properties into target object.
	 *
	 * @param {Object} to
	 * @param {Object} from
	 */
	
	exports.extend = function (to, from) {
	  var keys = Object.keys(from)
	  var i = keys.length
	  while (i--) {
	    to[keys[i]] = from[keys[i]]
	  }
	  return to
	}
	
	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	exports.isObject = function (obj) {
	  return obj !== null && typeof obj === 'object'
	}
	
	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	var toString = Object.prototype.toString
	var OBJECT_STRING = '[object Object]'
	exports.isPlainObject = function (obj) {
	  return toString.call(obj) === OBJECT_STRING
	}
	
	/**
	 * Array type check.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	exports.isArray = Array.isArray
	
	/**
	 * Define a non-enumerable property
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @param {Boolean} [enumerable]
	 */
	
	exports.define = function (obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  })
	}
	
	/**
	 * Debounce a function so it only gets called after the
	 * input stops arriving after the given wait period.
	 *
	 * @param {Function} func
	 * @param {Number} wait
	 * @return {Function} - the debounced function
	 */
	
	exports.debounce = function (func, wait) {
	  var timeout, args, context, timestamp, result
	  var later = function () {
	    var last = Date.now() - timestamp
	    if (last < wait && last >= 0) {
	      timeout = setTimeout(later, wait - last)
	    } else {
	      timeout = null
	      result = func.apply(context, args)
	      if (!timeout) context = args = null
	    }
	  }
	  return function () {
	    context = this
	    args = arguments
	    timestamp = Date.now()
	    if (!timeout) {
	      timeout = setTimeout(later, wait)
	    }
	    return result
	  }
	}
	
	/**
	 * Manual indexOf because it's slightly faster than
	 * native.
	 *
	 * @param {Array} arr
	 * @param {*} obj
	 */
	
	exports.indexOf = function (arr, obj) {
	  var i = arr.length
	  while (i--) {
	    if (arr[i] === obj) return i
	  }
	  return -1
	}
	
	/**
	 * Make a cancellable version of an async callback.
	 *
	 * @param {Function} fn
	 * @return {Function}
	 */
	
	exports.cancellable = function (fn) {
	  var cb = function () {
	    if (!cb.cancelled) {
	      return fn.apply(this, arguments)
	    }
	  }
	  cb.cancel = function () {
	    cb.cancelled = true
	  }
	  return cb
	}
	
	/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 *
	 * @param {*} a
	 * @param {*} b
	 * @return {Boolean}
	 */
	
	exports.looseEqual = function (a, b) {
	  /* eslint-disable eqeqeq */
	  return a == b || (
	    exports.isObject(a) && exports.isObject(b)
	      ? JSON.stringify(a) === JSON.stringify(b)
	      : false
	  )
	  /* eslint-enable eqeqeq */
	}


/***/ },
/* 363 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var config = __webpack_require__(7)
	var extend = _.extend
	
	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 *
	 * All strategy functions follow the same signature:
	 *
	 * @param {*} parentVal
	 * @param {*} childVal
	 * @param {Vue} [vm]
	 */
	
	var strats = config.optionMergeStrategies = Object.create(null)
	
	/**
	 * Helper that recursively merges two data objects together.
	 */
	
	function mergeData (to, from) {
	  var key, toVal, fromVal
	  for (key in from) {
	    toVal = to[key]
	    fromVal = from[key]
	    if (!to.hasOwnProperty(key)) {
	      _.set(to, key, fromVal)
	    } else if (_.isObject(toVal) && _.isObject(fromVal)) {
	      mergeData(toVal, fromVal)
	    }
	  }
	  return to
	}
	
	/**
	 * Data
	 */
	
	strats.data = function (parentVal, childVal, vm) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal
	    }
	    if (typeof childVal !== 'function') {
	      ("development") !== 'production' && _.warn(
	        'The "data" option should be a function ' +
	        'that returns a per-instance value in component ' +
	        'definitions.'
	      )
	      return parentVal
	    }
	    if (!parentVal) {
	      return childVal
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn () {
	      return mergeData(
	        childVal.call(this),
	        parentVal.call(this)
	      )
	    }
	  } else if (parentVal || childVal) {
	    return function mergedInstanceDataFn () {
	      // instance merge
	      var instanceData = typeof childVal === 'function'
	        ? childVal.call(vm)
	        : childVal
	      var defaultData = typeof parentVal === 'function'
	        ? parentVal.call(vm)
	        : undefined
	      if (instanceData) {
	        return mergeData(instanceData, defaultData)
	      } else {
	        return defaultData
	      }
	    }
	  }
	}
	
	/**
	 * El
	 */
	
	strats.el = function (parentVal, childVal, vm) {
	  if (!vm && childVal && typeof childVal !== 'function') {
	    ("development") !== 'production' && _.warn(
	      'The "el" option should be a function ' +
	      'that returns a per-instance value in component ' +
	      'definitions.'
	    )
	    return
	  }
	  var ret = childVal || parentVal
	  // invoke the element factory if this is instance merge
	  return vm && typeof ret === 'function'
	    ? ret.call(vm)
	    : ret
	}
	
	/**
	 * Hooks and param attributes are merged as arrays.
	 */
	
	strats.init =
	strats.created =
	strats.ready =
	strats.attached =
	strats.detached =
	strats.beforeCompile =
	strats.compiled =
	strats.beforeDestroy =
	strats.destroyed = function (parentVal, childVal) {
	  return childVal
	    ? parentVal
	      ? parentVal.concat(childVal)
	      : _.isArray(childVal)
	        ? childVal
	        : [childVal]
	    : parentVal
	}
	
	/**
	 * 0.11 deprecation warning
	 */
	
	strats.paramAttributes = function () {
	  /* istanbul ignore next */
	  ("development") !== 'production' && _.warn(
	    '"paramAttributes" option has been deprecated in 0.12. ' +
	    'Use "props" instead.'
	  )
	}
	
	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */
	
	function mergeAssets (parentVal, childVal) {
	  var res = Object.create(parentVal)
	  return childVal
	    ? extend(res, guardArrayAssets(childVal))
	    : res
	}
	
	config._assetTypes.forEach(function (type) {
	  strats[type + 's'] = mergeAssets
	})
	
	/**
	 * Events & Watchers.
	 *
	 * Events & watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */
	
	strats.watch =
	strats.events = function (parentVal, childVal) {
	  if (!childVal) return parentVal
	  if (!parentVal) return childVal
	  var ret = {}
	  extend(ret, parentVal)
	  for (var key in childVal) {
	    var parent = ret[key]
	    var child = childVal[key]
	    if (parent && !_.isArray(parent)) {
	      parent = [parent]
	    }
	    ret[key] = parent
	      ? parent.concat(child)
	      : [child]
	  }
	  return ret
	}
	
	/**
	 * Other object hashes.
	 */
	
	strats.props =
	strats.methods =
	strats.computed = function (parentVal, childVal) {
	  if (!childVal) return parentVal
	  if (!parentVal) return childVal
	  var ret = Object.create(null)
	  extend(ret, parentVal)
	  extend(ret, childVal)
	  return ret
	}
	
	/**
	 * Default strategy.
	 */
	
	var defaultStrat = function (parentVal, childVal) {
	  return childVal === undefined
	    ? parentVal
	    : childVal
	}
	
	/**
	 * Make sure component options get converted to actual
	 * constructors.
	 *
	 * @param {Object} options
	 */
	
	function guardComponents (options) {
	  if (options.components) {
	    var components = options.components =
	      guardArrayAssets(options.components)
	    var def
	    var ids = Object.keys(components)
	    for (var i = 0, l = ids.length; i < l; i++) {
	      var key = ids[i]
	      if (_.commonTagRE.test(key)) {
	        ("development") !== 'production' && _.warn(
	          'Do not use built-in HTML elements as component ' +
	          'id: ' + key
	        )
	        continue
	      }
	      def = components[key]
	      if (_.isPlainObject(def)) {
	        components[key] = _.Vue.extend(def)
	      }
	    }
	  }
	}
	
	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 *
	 * @param {Object} options
	 */
	
	function guardProps (options) {
	  var props = options.props
	  var i
	  if (_.isArray(props)) {
	    options.props = {}
	    i = props.length
	    while (i--) {
	      options.props[props[i]] = null
	    }
	  } else if (_.isPlainObject(props)) {
	    var keys = Object.keys(props)
	    i = keys.length
	    while (i--) {
	      var val = props[keys[i]]
	      if (typeof val === 'function') {
	        props[keys[i]] = { type: val }
	      }
	    }
	  }
	}
	
	/**
	 * Guard an Array-format assets option and converted it
	 * into the key-value Object format.
	 *
	 * @param {Object|Array} assets
	 * @return {Object}
	 */
	
	function guardArrayAssets (assets) {
	  if (_.isArray(assets)) {
	    var res = {}
	    var i = assets.length
	    var asset
	    while (i--) {
	      asset = assets[i]
	      var id = typeof asset === 'function'
	        ? ((asset.options && asset.options.name) || asset.id)
	        : (asset.name || asset.id)
	      if (!id) {
	        ("development") !== 'production' && _.warn(
	          'Array-syntax assets must provide a "name" or "id" field.'
	        )
	      } else {
	        res[id] = asset
	      }
	    }
	    return res
	  }
	  return assets
	}
	
	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 *
	 * @param {Object} parent
	 * @param {Object} child
	 * @param {Vue} [vm] - if vm is present, indicates this is
	 *                     an instantiation merge.
	 */
	
	exports.mergeOptions = function merge (parent, child, vm) {
	  guardComponents(child)
	  guardProps(child)
	  var options = {}
	  var key
	  if (child.mixins) {
	    for (var i = 0, l = child.mixins.length; i < l; i++) {
	      parent = merge(parent, child.mixins[i], vm)
	    }
	  }
	  for (key in parent) {
	    mergeField(key)
	  }
	  for (key in child) {
	    if (!(parent.hasOwnProperty(key))) {
	      mergeField(key)
	    }
	  }
	  function mergeField (key) {
	    var strat = strats[key] || defaultStrat
	    options[key] = strat(parent[key], child[key], vm, key)
	  }
	  return options
	}
	
	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 *
	 * @param {Object} options
	 * @param {String} type
	 * @param {String} id
	 * @return {Object|Function}
	 */
	
	exports.resolveAsset = function resolve (options, type, id) {
	  var assets = options[type]
	  var camelizedId
	  return assets[id] ||
	    // camelCase ID
	    assets[camelizedId = _.camelize(id)] ||
	    // Pascal Case ID
	    assets[camelizedId.charAt(0).toUpperCase() + camelizedId.slice(1)]
	}


/***/ },
/* 364 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 365 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */
/***/ function(module, exports) {

	module.exports = "<div class=\"markdown\"><h1 id=\"affix\">Affix</h1>\n<hr>\n<p>将页面元素钉在可视范围。</p>\n<h2 id=\"-\">何时使用</h2>\n<p>当内容区域比较长，需要滚动页面时，这部分内容对应的操作或者导航需要在滚动范围内始终展现。常用于侧边菜单和按钮组合。</p>\n<p>页面可视范围过小时，慎用此功能以免遮挡页面内容。</p>\n<h2 id=\"-\">组件演示</h2>\n<div class=\"code-boxes\">\n  <div class=\"code-box code-boxes-col\">\n          <h3>基本</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-affix>\n      <v-button type=\"primary\">固定在顶部</v-button>\n    </v-affix>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-affix</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>固定在顶部<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-affix</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n  <div class=\"code-box code-boxes-col\">\n          <h3>偏移</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-affix offset=\"75\">\n      <v-button type=\"primary\">固定在距离顶部 75px 的位置</v-button>\n    </v-affix>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-affix</span> <span class=\"token attr-name\" >offset</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>75<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>固定在距离顶部 75px 的位置<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-affix</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n</div>\n<h2 id=\"api\">API</h2>\n<table>\n<thead>\n<tr>\n<th>成员</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>offset</td>\n<td>达到指定偏移量后触发</td>\n<td>Number</td>\n<td>0</td>\n</tr>\n</tbody>\n</table>\n</div>";

/***/ },
/* 440 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(443)
	module.exports.template = __webpack_require__(439)


/***/ },
/* 441 */,
/* 442 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _AffixVue = __webpack_require__(444);
	
	var _AffixVue2 = _interopRequireDefault(_AffixVue);

	exports['default'] = _AffixVue2['default'];
	module.exports = exports['default'];

/***/ },
/* 443 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _srcComponentsAffix = __webpack_require__(442);
	
	var _srcComponentsAffix2 = _interopRequireDefault(_srcComponentsAffix);
	
	var _srcComponentsButton = __webpack_require__(8);
	
	var _srcComponentsButton2 = _interopRequireDefault(_srcComponentsButton);
	
	exports['default'] = {
	
	  components: { vAffix: _srcComponentsAffix2['default'], vButton: _srcComponentsButton2['default'] }
	
	};
	module.exports = exports['default'];

/***/ },
/* 444 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(446)
	module.exports.template = __webpack_require__(447)


/***/ },
/* 445 */,
/* 446 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _defineProperty = __webpack_require__(5)['default'];
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _utils = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../utils\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _classnames2 = __webpack_require__(4);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	exports['default'] = {
	  props: (0, _utils.defaultProps)({
	    prefixCls: 'ant-affix',
	
	    className: String,
	    offset: oneOfType([Number, String], 0)
	  }),
	
	  data: function data() {
	    return {
	      affix: false,
	      affixStyle: null
	    };
	  },
	
	  computed: {
	    wrapClasses: function wrapClasses() {
	      var _classnames;
	
	      return (0, _classnames3['default'])((_classnames = {}, _defineProperty(_classnames, this.className, !!this.className), _defineProperty(_classnames, this.prefixCls, this.affix), _classnames));
	    }
	  },
	
	  ready: function ready() {
	    widow.addEventListener('scorll', this._handleScroll, false);
	    widow.addEventListener('resize', this._handleScroll, false);
	  },
	
	  beforeDestory: function beforeDestory() {
	    window.removeEventListener('scorll', this._handleScroll, false);
	    window.removeEventListener('resize', this._handleScroll, false);
	  },
	
	  methods: {
	    _handleScroll: function _handleScroll() {
	      var affix = this.affix;
	      var scrollTop = getScroll(window, true);
	      var elemOffset = getOffset(this.$el);
	
	      if (!affix && elemOffset.top - this.offset < scrollTop) {
	        this.affix = true;
	        this.affixStyle = {
	          top: this.props.offset,
	          left: elemOffset.left,
	          width: this.$el.offsetWidth
	        };
	      }
	
	      if (affix && elemOffset.top - this.offset > scrollTop) {
	        this.affix = false;
	        this.affixStyle = null;
	      }
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 447 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"wrapClasses\" :style=\"affixStyle\">\n  <slot></slot>\n</div>";

/***/ }
/******/ ])));
//# sourceMappingURL=app.js.map