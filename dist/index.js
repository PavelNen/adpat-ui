'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var core = require('@emotion/core');
var React = require('react');
var React__default = _interopDefault(React);
var styled = _interopDefault(require('@emotion/styled'));
var emotionTheming = require('emotion-theming');
var reactDom = require('react-dom');
var reactDom__default = _interopDefault(reactDom);

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = process.env.NODE_ENV !== 'production';

/* eslint-disable no-restricted-globals, eqeqeq,  */
/**
 * React currently throws a warning when using useLayoutEffect on the server.
 * To get around it, we can conditionally useEffect on the server (no-op) and
 * useLayoutEffect in the browser. We occasionally need useLayoutEffect to
 * ensure we don't get a render flash for certain operations, but we may also
 * need affected components to render on the server. One example is when setting
 * a component's descendants to retrieve their index values.
 *
 * Important to note that using this hook as an escape hatch will break the
 * eslint dependency warnings unless you rename the import to `useLayoutEffect`.
 * Use sparingly only when the effect won't effect the rendered HTML to avoid
 * any server/client mismatch.
 *
 * If a useLayoutEffect is needed and the result would create a mismatch, it's
 * likely that the component in question shouldn't be rendered on the server at
 * all, so a better approach would be to lazily render those in a parent
 * component after client-side hydration.
 *
 * TODO: We are calling useLayoutEffect in a couple of places that will likely
 * cause some issues for SSR users, whether the warning shows or not. Audit and
 * fix these.
 *
 * https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
 * https://github.com/reduxjs/react-redux/blob/master/src/utils/useIsomorphicLayoutEffect.js
 *
 * @param effect
 * @param deps
 */

var useIsomorphicLayoutEffect = /*#__PURE__*/canUseDOM() ? React__default.useLayoutEffect : React__default.useEffect;

if (process.env.NODE_ENV !== "production") {
  // In CJS files, process.env.NODE_ENV is stripped from our build, but we need
  // it to prevent style checks from clogging up user logs while testing.
  // This is a workaround until we can tweak the build a bit to accommodate.
  var _ref = typeof process !== "undefined" ? process : {
    env: {
      NODE_ENV: "development"
    }
  },
      env = _ref.env;
}
function canUseDOM() {
  return typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
}

/*
 * Welcome to @reach/auto-id!

 * Let's see if we can make sense of why this hook exists and its
 * implementation.
 *
 * Some background:
 *   1. Accessibiliy APIs rely heavily on element IDs
 *   2. Requiring developers to put IDs on every element in Reach UI is both
 *      cumbersome and error-prone
 *   3. With a component model, we can generate IDs for them!
 *
 * Solution 1: Generate random IDs.
 *
 * This works great as long as you don't server render your app. When React (in
 * the client) tries to reuse the markup from the server, the IDs won't match
 * and React will then recreate the entire DOM tree.
 *
 * Solution 2: Increment an integer
 *
 * This sounds great. Since we're rendering the exact same tree on the server
 * and client, we can increment a counter and get a deterministic result between
 * client and server. Also, JS integers can go up to nine-quadrillion. I'm
 * pretty sure the tab will be closed before an app never needs
 * 10 quadrillion IDs!
 *
 * Problem solved, right?
 *
 * Ah, but there's a catch! React's concurrent rendering makes this approach
 * non-deterministic. While the client and server will end up with the same
 * elements in the end, depending on suspense boundaries (and possibly some user
 * input during the initial render) the incrementing integers won't always match
 * up.
 *
 * Solution 3: Don't use IDs at all on the server; patch after first render.
 *
 * What we've done here is solution 2 with some tricks. With this approach, the
 * ID returned is an empty string on the first render. This way the server and
 * client have the same markup no matter how wild the concurrent rendering may
 * have gotten.
 *
 * After the render, we patch up the components with an incremented ID. This
 * causes a double render on any components with `useId`. Shouldn't be a problem
 * since the components using this hook should be small, and we're only updating
 * the ID attribute on the DOM, nothing big is happening.
 *
 * It doesn't have to be an incremented number, though--we could do generate
 * random strings instead, but incrementing a number is probably the cheapest
 * thing we can do.
 *
 * Additionally, we only do this patchup on the very first client render ever.
 * Any calls to `useId` that happen dynamically in the client will be
 * populated immediately with a value. So, we only get the double render after
 * server hydration and never again, SO BACK OFF ALRIGHT?
 */
var serverHandoffComplete = false;
var id = 0;

var genId = function genId() {
  return ++id;
};
/**
 * useId
 *
 * Autogenerate IDs to facilitate WAI-ARIA and server rendering.
 *
 * Note: The returned ID will initially be `null` and will update after a
 * component mounts. Users may need to supply their own ID if they need
 * consistent values for SSR.
 *
 * @see Docs https://reacttraining.com/reach-ui/auto-id
 */


var useId = function useId(idFromProps) {
  /*
   * If this instance isn't part of the initial render, we don't have to do the
   * double render/patch-up dance. We can just generate the ID and return it.
   */
  var initialId = idFromProps || (serverHandoffComplete ? genId() : null);

  var _useState = React.useState(initialId),
      id = _useState[0],
      setId = _useState[1];

  useIsomorphicLayoutEffect(function () {
    if (id === null) {
      /*
       * Patch the ID after render. We do this in `useLayoutEffect` to avoid any
       * rendering flicker, though it'll make the first render slower (unlikely
       * to matter, but you're welcome to measure your app and let us know if
       * it's a problem).
       */
      setId(genId());
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);
  React.useEffect(function () {
    if (serverHandoffComplete === false) {
      /*
       * Flag all future uses of `useId` to skip the update dance. This is in
       * `useEffect` because it goes after `useLayoutEffect`, ensuring we don't
       * accidentally bail out of the patch-up dance prematurely.
       */
      serverHandoffComplete = true;
    }
  }, []);
  return id != null ? String(id) : undefined;
};

function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = memoize(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
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

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

var merge = function merge(a, b) {
  var result = objectAssign({}, a, b);

  for (var key in a) {
    var _assign;

    if (!a[key] || typeof b[key] !== 'object') continue;
    objectAssign(result, (_assign = {}, _assign[key] = objectAssign(a[key], b[key]), _assign));
  }

  return result;
}; // sort object-value responsive styles

var sort = function sort(obj) {
  var next = {};
  Object.keys(obj).sort(function (a, b) {
    return a.localeCompare(b, undefined, {
      numeric: true,
      sensitivity: 'base'
    });
  }).forEach(function (key) {
    next[key] = obj[key];
  });
  return next;
};

var defaults = {
  breakpoints: [40, 52, 64].map(function (n) {
    return n + 'em';
  })
};

var createMediaQuery = function createMediaQuery(n) {
  return "@media screen and (min-width: " + n + ")";
};

var getValue = function getValue(n, scale) {
  return get(scale, n, n);
};

var get = function get(obj, key, def, p, undef) {
  key = key && key.split ? key.split('.') : [key];

  for (p = 0; p < key.length; p++) {
    obj = obj ? obj[key[p]] : undef;
  }

  return obj === undef ? def : obj;
};
var createParser = function createParser(config) {
  var cache = {};

  var parse = function parse(props) {
    var styles = {};
    var shouldSort = false;
    var isCacheDisabled = props.theme && props.theme.disableStyledSystemCache;

    for (var key in props) {
      if (!config[key]) continue;
      var sx = config[key];
      var raw = props[key];
      var scale = get(props.theme, sx.scale, sx.defaults);

      if (typeof raw === 'object') {
        cache.breakpoints = !isCacheDisabled && cache.breakpoints || get(props.theme, 'breakpoints', defaults.breakpoints);

        if (Array.isArray(raw)) {
          cache.media = !isCacheDisabled && cache.media || [null].concat(cache.breakpoints.map(createMediaQuery));
          styles = merge(styles, parseResponsiveStyle(cache.media, sx, scale, raw, props));
          continue;
        }

        if (raw !== null) {
          styles = merge(styles, parseResponsiveObject(cache.breakpoints, sx, scale, raw, props));
          shouldSort = true;
        }

        continue;
      }

      objectAssign(styles, sx(raw, scale, props));
    } // sort object-based responsive styles


    if (shouldSort) {
      styles = sort(styles);
    }

    return styles;
  };

  parse.config = config;
  parse.propNames = Object.keys(config);
  parse.cache = cache;
  var keys = Object.keys(config).filter(function (k) {
    return k !== 'config';
  });

  if (keys.length > 1) {
    keys.forEach(function (key) {
      var _createParser;

      parse[key] = createParser((_createParser = {}, _createParser[key] = config[key], _createParser));
    });
  }

  return parse;
};

var parseResponsiveStyle = function parseResponsiveStyle(mediaQueries, sx, scale, raw, _props) {
  var styles = {};
  raw.slice(0, mediaQueries.length).forEach(function (value, i) {
    var media = mediaQueries[i];
    var style = sx(value, scale, _props);

    if (!media) {
      objectAssign(styles, style);
    } else {
      var _assign2;

      objectAssign(styles, (_assign2 = {}, _assign2[media] = objectAssign({}, styles[media], style), _assign2));
    }
  });
  return styles;
};

var parseResponsiveObject = function parseResponsiveObject(breakpoints, sx, scale, raw, _props) {
  var styles = {};

  for (var key in raw) {
    var breakpoint = breakpoints[key];
    var value = raw[key];
    var style = sx(value, scale, _props);

    if (!breakpoint) {
      objectAssign(styles, style);
    } else {
      var _assign3;

      var media = createMediaQuery(breakpoint);
      objectAssign(styles, (_assign3 = {}, _assign3[media] = objectAssign({}, styles[media], style), _assign3));
    }
  }

  return styles;
};

var createStyleFunction = function createStyleFunction(_ref) {
  var properties = _ref.properties,
      property = _ref.property,
      scale = _ref.scale,
      _ref$transform = _ref.transform,
      transform = _ref$transform === void 0 ? getValue : _ref$transform,
      defaultScale = _ref.defaultScale;
  properties = properties || [property];

  var sx = function sx(value, scale, _props) {
    var result = {};
    var n = transform(value, scale, _props);
    if (n === null) return;
    properties.forEach(function (prop) {
      result[prop] = n;
    });
    return result;
  };

  sx.scale = scale;
  sx.defaults = defaultScale;
  return sx;
}; // new v5 API

var system = function system(args) {
  if (args === void 0) {
    args = {};
  }

  var config = {};
  Object.keys(args).forEach(function (key) {
    var conf = args[key];

    if (conf === true) {
      // shortcut definition
      config[key] = createStyleFunction({
        property: key,
        scale: key
      });
      return;
    }

    if (typeof conf === 'function') {
      config[key] = conf;
      return;
    }

    config[key] = createStyleFunction(conf);
  });
  var parser = createParser(config);
  return parser;
};
var compose = function compose() {
  var config = {};

  for (var _len = arguments.length, parsers = new Array(_len), _key = 0; _key < _len; _key++) {
    parsers[_key] = arguments[_key];
  }

  parsers.forEach(function (parser) {
    if (!parser || !parser.config) return;
    objectAssign(config, parser.config);
  });
  var parser = createParser(config);
  return parser;
};

var isNumber = function isNumber(n) {
  return typeof n === 'number' && !isNaN(n);
};

var getWidth = function getWidth(n, scale) {
  return get(scale, n, !isNumber(n) || n > 1 ? n : n * 100 + '%');
};

var config = {
  width: {
    property: 'width',
    scale: 'sizes',
    transform: getWidth
  },
  height: {
    property: 'height',
    scale: 'sizes'
  },
  minWidth: {
    property: 'minWidth',
    scale: 'sizes'
  },
  minHeight: {
    property: 'minHeight',
    scale: 'sizes'
  },
  maxWidth: {
    property: 'maxWidth',
    scale: 'sizes'
  },
  maxHeight: {
    property: 'maxHeight',
    scale: 'sizes'
  },
  size: {
    properties: ['width', 'height'],
    scale: 'sizes'
  },
  overflow: true,
  overflowX: true,
  overflowY: true,
  display: true,
  verticalAlign: true
};
var layout = system(config);

var config$1 = {
  color: {
    property: 'color',
    scale: 'colors'
  },
  backgroundColor: {
    property: 'backgroundColor',
    scale: 'colors'
  },
  opacity: true
};
config$1.bg = config$1.backgroundColor;
var color = system(config$1);

var defaults$1 = {
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]
};
var config$2 = {
  fontFamily: {
    property: 'fontFamily',
    scale: 'fonts'
  },
  fontSize: {
    property: 'fontSize',
    scale: 'fontSizes',
    defaultScale: defaults$1.fontSizes
  },
  fontWeight: {
    property: 'fontWeight',
    scale: 'fontWeights'
  },
  lineHeight: {
    property: 'lineHeight',
    scale: 'lineHeights'
  },
  letterSpacing: {
    property: 'letterSpacing',
    scale: 'letterSpacings'
  },
  textAlign: true,
  fontStyle: true
};
var typography = system(config$2);

var config$3 = {
  alignItems: true,
  alignContent: true,
  justifyItems: true,
  justifyContent: true,
  flexWrap: true,
  flexDirection: true,
  // item
  flex: true,
  flexGrow: true,
  flexShrink: true,
  flexBasis: true,
  justifySelf: true,
  alignSelf: true,
  order: true
};
var flexbox = system(config$3);

var defaults$2 = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
};
var config$4 = {
  gridGap: {
    property: 'gridGap',
    scale: 'space',
    defaultScale: defaults$2.space
  },
  gridColumnGap: {
    property: 'gridColumnGap',
    scale: 'space',
    defaultScale: defaults$2.space
  },
  gridRowGap: {
    property: 'gridRowGap',
    scale: 'space',
    defaultScale: defaults$2.space
  },
  gridColumn: true,
  gridRow: true,
  gridAutoFlow: true,
  gridAutoColumns: true,
  gridAutoRows: true,
  gridTemplateColumns: true,
  gridTemplateRows: true,
  gridTemplateAreas: true,
  gridArea: true
};
var grid = system(config$4);

var config$5 = {
  border: {
    property: 'border',
    scale: 'borders'
  },
  borderWidth: {
    property: 'borderWidth',
    scale: 'borderWidths'
  },
  borderStyle: {
    property: 'borderStyle',
    scale: 'borderStyles'
  },
  borderColor: {
    property: 'borderColor',
    scale: 'colors'
  },
  borderRadius: {
    property: 'borderRadius',
    scale: 'radii'
  },
  borderTop: {
    property: 'borderTop',
    scale: 'borders'
  },
  borderTopLeftRadius: {
    property: 'borderTopLeftRadius',
    scale: 'radii'
  },
  borderTopRightRadius: {
    property: 'borderTopRightRadius',
    scale: 'radii'
  },
  borderRight: {
    property: 'borderRight',
    scale: 'borders'
  },
  borderBottom: {
    property: 'borderBottom',
    scale: 'borders'
  },
  borderBottomLeftRadius: {
    property: 'borderBottomLeftRadius',
    scale: 'radii'
  },
  borderBottomRightRadius: {
    property: 'borderBottomRightRadius',
    scale: 'radii'
  },
  borderLeft: {
    property: 'borderLeft',
    scale: 'borders'
  },
  borderX: {
    properties: ['borderLeft', 'borderRight'],
    scale: 'borders'
  },
  borderY: {
    properties: ['borderTop', 'borderBottom'],
    scale: 'borders'
  }
};
config$5.borderTopWidth = {
  property: 'borderTopWidth',
  scale: 'borderWidths'
};
config$5.borderTopColor = {
  property: 'borderTopColor',
  scale: 'colors'
};
config$5.borderTopStyle = {
  property: 'borderTopStyle',
  scale: 'borderStyles'
};
config$5.borderTopLeftRadius = {
  property: 'borderTopLeftRadius',
  scale: 'radii'
};
config$5.borderTopRightRadius = {
  property: 'borderTopRightRadius',
  scale: 'radii'
};
config$5.borderBottomWidth = {
  property: 'borderBottomWidth',
  scale: 'borderWidths'
};
config$5.borderBottomColor = {
  property: 'borderBottomColor',
  scale: 'colors'
};
config$5.borderBottomStyle = {
  property: 'borderBottomStyle',
  scale: 'borderStyles'
};
config$5.borderBottomLeftRadius = {
  property: 'borderBottomLeftRadius',
  scale: 'radii'
};
config$5.borderBottomRightRadius = {
  property: 'borderBottomRightRadius',
  scale: 'radii'
};
config$5.borderLeftWidth = {
  property: 'borderLeftWidth',
  scale: 'borderWidths'
};
config$5.borderLeftColor = {
  property: 'borderLeftColor',
  scale: 'colors'
};
config$5.borderLeftStyle = {
  property: 'borderLeftStyle',
  scale: 'borderStyles'
};
config$5.borderRightWidth = {
  property: 'borderRightWidth',
  scale: 'borderWidths'
};
config$5.borderRightColor = {
  property: 'borderRightColor',
  scale: 'colors'
};
config$5.borderRightStyle = {
  property: 'borderRightStyle',
  scale: 'borderStyles'
};
var border = system(config$5);

var config$6 = {
  background: true,
  backgroundImage: true,
  backgroundSize: true,
  backgroundPosition: true,
  backgroundRepeat: true
};
config$6.bgImage = config$6.backgroundImage;
config$6.bgSize = config$6.backgroundSize;
config$6.bgPosition = config$6.backgroundPosition;
config$6.bgRepeat = config$6.backgroundRepeat;
var background = system(config$6);

var defaults$3 = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
};
var config$7 = {
  position: true,
  zIndex: {
    property: 'zIndex',
    scale: 'zIndices'
  },
  top: {
    property: 'top',
    scale: 'space',
    defaultScale: defaults$3.space
  },
  right: {
    property: 'right',
    scale: 'space',
    defaultScale: defaults$3.space
  },
  bottom: {
    property: 'bottom',
    scale: 'space',
    defaultScale: defaults$3.space
  },
  left: {
    property: 'left',
    scale: 'space',
    defaultScale: defaults$3.space
  }
};
var position = system(config$7);

var defaults$4 = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
};

var isNumber$1 = function isNumber(n) {
  return typeof n === 'number' && !isNaN(n);
};

var getMargin = function getMargin(n, scale) {
  if (!isNumber$1(n)) {
    return get(scale, n, n);
  }

  var isNegative = n < 0;
  var absolute = Math.abs(n);
  var value = get(scale, absolute, absolute);

  if (!isNumber$1(value)) {
    return isNegative ? '-' + value : value;
  }

  return value * (isNegative ? -1 : 1);
};

var configs = {};
configs.margin = {
  margin: {
    property: 'margin',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults$4.space
  },
  marginTop: {
    property: 'marginTop',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults$4.space
  },
  marginRight: {
    property: 'marginRight',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults$4.space
  },
  marginBottom: {
    property: 'marginBottom',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults$4.space
  },
  marginLeft: {
    property: 'marginLeft',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults$4.space
  },
  marginX: {
    properties: ['marginLeft', 'marginRight'],
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults$4.space
  },
  marginY: {
    properties: ['marginTop', 'marginBottom'],
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults$4.space
  }
};
configs.margin.m = configs.margin.margin;
configs.margin.mt = configs.margin.marginTop;
configs.margin.mr = configs.margin.marginRight;
configs.margin.mb = configs.margin.marginBottom;
configs.margin.ml = configs.margin.marginLeft;
configs.margin.mx = configs.margin.marginX;
configs.margin.my = configs.margin.marginY;
configs.padding = {
  padding: {
    property: 'padding',
    scale: 'space',
    defaultScale: defaults$4.space
  },
  paddingTop: {
    property: 'paddingTop',
    scale: 'space',
    defaultScale: defaults$4.space
  },
  paddingRight: {
    property: 'paddingRight',
    scale: 'space',
    defaultScale: defaults$4.space
  },
  paddingBottom: {
    property: 'paddingBottom',
    scale: 'space',
    defaultScale: defaults$4.space
  },
  paddingLeft: {
    property: 'paddingLeft',
    scale: 'space',
    defaultScale: defaults$4.space
  },
  paddingX: {
    properties: ['paddingLeft', 'paddingRight'],
    scale: 'space',
    defaultScale: defaults$4.space
  },
  paddingY: {
    properties: ['paddingTop', 'paddingBottom'],
    scale: 'space',
    defaultScale: defaults$4.space
  }
};
configs.padding.p = configs.padding.padding;
configs.padding.pt = configs.padding.paddingTop;
configs.padding.pr = configs.padding.paddingRight;
configs.padding.pb = configs.padding.paddingBottom;
configs.padding.pl = configs.padding.paddingLeft;
configs.padding.px = configs.padding.paddingX;
configs.padding.py = configs.padding.paddingY;
var margin = system(configs.margin);
var padding = system(configs.padding);
var space = compose(margin, padding);

var shadow = system({
  boxShadow: {
    property: 'boxShadow',
    scale: 'shadows'
  },
  textShadow: {
    property: 'textShadow',
    scale: 'shadows'
  }
});

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

// based on https://github.com/developit/dlv
var get$1 = function get(obj, key, def, p, undef) {
  key = key && key.split ? key.split('.') : [key];

  for (p = 0; p < key.length; p++) {
    obj = obj ? obj[key[p]] : undef;
  }

  return obj === undef ? def : obj;
};
var defaultBreakpoints = [40, 52, 64].map(function (n) {
  return n + 'em';
});
var defaultTheme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]
};
var aliases = {
  bg: 'backgroundColor',
  m: 'margin',
  mt: 'marginTop',
  mr: 'marginRight',
  mb: 'marginBottom',
  ml: 'marginLeft',
  mx: 'marginX',
  my: 'marginY',
  p: 'padding',
  pt: 'paddingTop',
  pr: 'paddingRight',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
  px: 'paddingX',
  py: 'paddingY'
};
var multiples = {
  marginX: ['marginLeft', 'marginRight'],
  marginY: ['marginTop', 'marginBottom'],
  paddingX: ['paddingLeft', 'paddingRight'],
  paddingY: ['paddingTop', 'paddingBottom'],
  size: ['width', 'height']
};
var scales = {
  color: 'colors',
  backgroundColor: 'colors',
  borderColor: 'colors',
  margin: 'space',
  marginTop: 'space',
  marginRight: 'space',
  marginBottom: 'space',
  marginLeft: 'space',
  marginX: 'space',
  marginY: 'space',
  padding: 'space',
  paddingTop: 'space',
  paddingRight: 'space',
  paddingBottom: 'space',
  paddingLeft: 'space',
  paddingX: 'space',
  paddingY: 'space',
  top: 'space',
  right: 'space',
  bottom: 'space',
  left: 'space',
  gridGap: 'space',
  gridColumnGap: 'space',
  gridRowGap: 'space',
  gap: 'space',
  columnGap: 'space',
  rowGap: 'space',
  fontFamily: 'fonts',
  fontSize: 'fontSizes',
  fontWeight: 'fontWeights',
  lineHeight: 'lineHeights',
  letterSpacing: 'letterSpacings',
  border: 'borders',
  borderTop: 'borders',
  borderRight: 'borders',
  borderBottom: 'borders',
  borderLeft: 'borders',
  borderWidth: 'borderWidths',
  borderStyle: 'borderStyles',
  borderRadius: 'radii',
  borderTopRightRadius: 'radii',
  borderTopLeftRadius: 'radii',
  borderBottomRightRadius: 'radii',
  borderBottomLeftRadius: 'radii',
  borderTopWidth: 'borderWidths',
  borderTopColor: 'colors',
  borderTopStyle: 'borderStyles',
  borderBottomWidth: 'borderWidths',
  borderBottomColor: 'colors',
  borderBottomStyle: 'borderStyles',
  borderLeftWidth: 'borderWidths',
  borderLeftColor: 'colors',
  borderLeftStyle: 'borderStyles',
  borderRightWidth: 'borderWidths',
  borderRightColor: 'colors',
  borderRightStyle: 'borderStyles',
  outlineColor: 'colors',
  boxShadow: 'shadows',
  textShadow: 'shadows',
  zIndex: 'zIndices',
  width: 'sizes',
  minWidth: 'sizes',
  maxWidth: 'sizes',
  height: 'sizes',
  minHeight: 'sizes',
  maxHeight: 'sizes',
  flexBasis: 'sizes',
  size: 'sizes',
  // svg
  fill: 'colors',
  stroke: 'colors'
};

var positiveOrNegative = function positiveOrNegative(scale, value) {
  if (typeof value !== 'number' || value >= 0) {
    return get$1(scale, value, value);
  }

  var absolute = Math.abs(value);
  var n = get$1(scale, absolute, absolute);
  if (typeof n === 'string') return '-' + n;
  return n * -1;
};

var transforms = ['margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'marginX', 'marginY', 'top', 'bottom', 'left', 'right'].reduce(function (acc, curr) {
  var _extends2;

  return _extends$1({}, acc, (_extends2 = {}, _extends2[curr] = positiveOrNegative, _extends2));
}, {});
var responsive = function responsive(styles) {
  return function (theme) {
    var next = {};
    var breakpoints = get$1(theme, 'breakpoints', defaultBreakpoints);
    var mediaQueries = [null].concat(breakpoints.map(function (n) {
      return "@media screen and (min-width: " + n + ")";
    }));

    for (var key in styles) {
      var value = typeof styles[key] === 'function' ? styles[key](theme) : styles[key];
      if (value == null) continue;

      if (!Array.isArray(value)) {
        next[key] = value;
        continue;
      }

      for (var i = 0; i < value.slice(0, mediaQueries.length).length; i++) {
        var media = mediaQueries[i];

        if (!media) {
          next[key] = value[i];
          continue;
        }

        next[media] = next[media] || {};
        if (value[i] == null) continue;
        next[media][key] = value[i];
      }
    }

    return next;
  };
};
var css = function css(args) {
  return function (props) {
    if (props === void 0) {
      props = {};
    }

    var theme = _extends$1({}, defaultTheme, {}, props.theme || props);

    var result = {};
    var obj = typeof args === 'function' ? args(theme) : args;
    var styles = responsive(obj)(theme);

    for (var key in styles) {
      var x = styles[key];
      var val = typeof x === 'function' ? x(theme) : x;

      if (key === 'variant') {
        var variant = css(get$1(theme, val))(theme);
        result = _extends$1({}, result, {}, variant);
        continue;
      }

      if (val && typeof val === 'object') {
        result[key] = css(val)(theme);
        continue;
      }

      var prop = get$1(aliases, key, key);
      var scaleName = get$1(scales, prop);
      var scale = get$1(theme, scaleName, get$1(theme, prop, {}));
      var transform = get$1(transforms, prop, get$1);
      var value = transform(scale, val, val);

      if (multiples[prop]) {
        var dirs = multiples[prop];

        for (var i = 0; i < dirs.length; i++) {
          result[dirs[i]] = value;
        }
      } else {
        result[prop] = value;
      }
    }

    return result;
  };
};

var variant = function variant(_ref) {
  var _config;

  var scale = _ref.scale,
      _ref$prop = _ref.prop,
      prop = _ref$prop === void 0 ? 'variant' : _ref$prop,
      _ref$variants = _ref.variants,
      variants = _ref$variants === void 0 ? {} : _ref$variants,
      key = _ref.key;
  var sx;

  if (Object.keys(variants).length) {
    sx = function sx(value, scale, props) {
      return css(get(scale, value, null))(props.theme);
    };
  } else {
    sx = function sx(value, scale) {
      return get(scale, value, null);
    };
  }

  sx.scale = scale || key;
  sx.defaults = variants;
  var config = (_config = {}, _config[prop] = sx, _config);
  var parser = createParser(config);
  return parser;
};
var buttonStyle = variant({
  key: 'buttons'
});
var textStyle = variant({
  key: 'textStyles',
  prop: 'textStyle'
});
var colorStyle = variant({
  key: 'colorStyles',
  prop: 'colors'
});

var all = compose(space, typography, color, layout, flexbox, border, background, position, grid, shadow, buttonStyle, textStyle, colorStyle);
var props = all.propNames;
var createShouldForwardProp = function createShouldForwardProp(props) {
  var regex = new RegExp("^(" + props.join('|') + ")$");
  return memoize(function (prop) {
    return index(prop) && !regex.test(prop);
  });
};
createShouldForwardProp(props);

var isNumber$2 = function isNumber(n) {
  return typeof n === "number" && !isNaN(n);
};

var getWidth$1 = function getWidth(n, scale) {
  return get(scale, n, !isNumber$2(n) || n > 1 ? n : n * 100 + "%");
};

var config$8 = {
  roundedTop: {
    properties: ["borderTopLeftRadius", "borderTopRightRadius"],
    scale: "radii"
  },
  roundedBottom: {
    properties: ["borderBottomLeftRadius", "borderBottomRightRadius"],
    scale: "radii"
  },
  roundedLeft: {
    properties: ["borderTopLeftRadius", "borderBottomLeftRadius"],
    scale: "radii"
  },
  roundedRight: {
    properties: ["borderTopRightRadius", "borderBottomRightRadius"],
    scale: "radii"
  },
  roundedTopRight: {
    property: "borderTopRightRadius",
    scale: "radii"
  },
  roundedTopLeft: {
    property: "borderTopLeftRadius",
    scale: "radii"
  },
  roundedBottomRight: {
    property: "borderBottomRightRadius",
    scale: "radii"
  },
  roundedBottomLeft: {
    property: "borderBottomLeftRadius",
    scale: "radii"
  },
  rounded: {
    property: "borderRadius",
    scale: "radii"
  },
  d: {
    property: "display"
  },
  w: {
    property: "width",
    scale: "sizes",
    transform: getWidth$1
  },
  minW: {
    property: "minWidth",
    scale: "sizes"
  },
  maxW: {
    property: "maxWidth",
    scale: "sizes"
  },
  h: {
    property: "height",
    scale: "sizes"
  },
  minH: {
    property: "minHeight",
    scale: "sizes"
  },
  maxH: {
    property: "maxHeight",
    scale: "sizes"
  },
  bgImg: {
    property: "backgroundImage"
  },
  bgImage: {
    property: "backgroundImage"
  },
  bgSize: {
    property: "backgroundSize"
  },
  bgPos: {
    property: "backgroundPosition"
  },
  bgRepeat: {
    property: "backgroundRepeat"
  },
  pos: {
    property: "position"
  },
  flexDir: {
    property: "flexDirection"
  },
  shadow: {
    property: "boxShadow",
    scale: "shadows"
  },
  textDecoration: {
    property: "textDecoration"
  },
  overflowX: true,
  overflowY: true,
  textTransform: true,
  animation: true,
  appearance: true,
  transform: true,
  transformOrigin: true,
  visibility: true,
  whiteSpace: true,
  userSelect: true,
  pointerEvents: true,
  wordBreak: true,
  overflowWrap: true,
  textOverflow: true,
  boxSizing: true,
  cursor: true,
  resize: true,
  transition: true,
  listStyleType: true,
  listStylePosition: true,
  listStyleImage: true,
  fill: {
    property: "fill",
    scale: "colors"
  },
  stroke: {
    property: "stroke",
    scale: "colors"
  },
  objectFit: true,
  objectPosition: true,
  backgroundAttachment: {
    property: "backgroundAttachment"
  },
  outline: true,
  "float": true,
  willChange: true
};
config$8.bgAttachment = config$8.backgroundAttachment;
config$8.textDecor = config$8.textDecoration;
config$8.listStylePos = config$8.listStylePosition;
config$8.listStyleImg = config$8.listStyleImage;
var extraConfig = system(config$8);
// Transform the custom alias to a format that styled-system CSS supports

var transformAlias = function transformAlias(prop, propValue) {
  var configKeys = Object.keys(config$8);
  var result = {};

  if (configKeys.includes(prop)) {
    var _config$prop = config$8[prop],
        properties = _config$prop.properties,
        property = _config$prop.property;

    if (properties) {
      properties.forEach(function (_cssProp) {
        return result[_cssProp] = propValue;
      });
    }

    if (property) {
      result[property] = propValue;
    }

    if (config$8[prop] === true) {
      result[prop] = propValue;
    }
  } else {
    result[prop] = propValue;
  }

  return result;
};

var transformAliasProps = function transformAliasProps(props) {
  var result = {};

  for (var prop in props) {
    if (_typeof(props[prop]) === "object" && !Array.isArray(props[prop])) {
      result = _objectSpread2({}, result, _defineProperty({}, prop, transformAliasProps(props[prop])));
    } else {
      result = _objectSpread2({}, result, {}, transformAlias(prop, props[prop]));
    }
  }

  return result;
};

var truncate = function truncate(props) {
  if (props.isTruncated) {
    return {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    };
  }
};
var systemProps = compose(layout, color, space, background, border, grid, position, shadow, typography, flexbox, extraConfig);

var _shouldForwardProp = createShouldForwardProp([].concat(_toConsumableArray(props), ["d", "textDecoration", "pointerEvents", "visibility", "transform", "cursor", "fill", "stroke"]));
/**
 * htmlWidth and htmlHeight is used in the <Image />
 * component to support the native `width` and `height` attributes
 *
 * https://github.com/chakra-ui/chakra-ui/issues/149
 */


var nativeHTMLPropAlias = ["htmlWidth", "htmlHeight"];
var Box = styled("div", {
  shouldForwardProp: function shouldForwardProp(prop) {
    if (nativeHTMLPropAlias.includes(prop)) {
      return true;
    } else {
      return _shouldForwardProp(prop);
    }
  }
})(truncate, systemProps);
Box.displayName = "Box";

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k;var ContextProvider=h;var Element=c;var ForwardRef=n;var Fragment=e;var Lazy=t;var Memo=r;var Portal=d;
var Profiler=g;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A(a)||z(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z(a)===k};var isContextProvider=function(a){return z(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z(a)===n};var isFragment=function(a){return z(a)===e};var isLazy=function(a){return z(a)===t};
var isMemo=function(a){return z(a)===r};var isPortal=function(a){return z(a)===d};var isProfiler=function(a){return z(a)===g};var isStrictMode=function(a){return z(a)===f};var isSuspense=function(a){return z(a)===p};
var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};var typeOf=z;

var reactIs_production_min = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element,
	ForwardRef: ForwardRef,
	Fragment: Fragment,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

var reactIs_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}
});
var reactIs_development_1 = reactIs_development.AsyncMode;
var reactIs_development_2 = reactIs_development.ConcurrentMode;
var reactIs_development_3 = reactIs_development.ContextConsumer;
var reactIs_development_4 = reactIs_development.ContextProvider;
var reactIs_development_5 = reactIs_development.Element;
var reactIs_development_6 = reactIs_development.ForwardRef;
var reactIs_development_7 = reactIs_development.Fragment;
var reactIs_development_8 = reactIs_development.Lazy;
var reactIs_development_9 = reactIs_development.Memo;
var reactIs_development_10 = reactIs_development.Portal;
var reactIs_development_11 = reactIs_development.Profiler;
var reactIs_development_12 = reactIs_development.StrictMode;
var reactIs_development_13 = reactIs_development.Suspense;
var reactIs_development_14 = reactIs_development.isAsyncMode;
var reactIs_development_15 = reactIs_development.isConcurrentMode;
var reactIs_development_16 = reactIs_development.isContextConsumer;
var reactIs_development_17 = reactIs_development.isContextProvider;
var reactIs_development_18 = reactIs_development.isElement;
var reactIs_development_19 = reactIs_development.isForwardRef;
var reactIs_development_20 = reactIs_development.isFragment;
var reactIs_development_21 = reactIs_development.isLazy;
var reactIs_development_22 = reactIs_development.isMemo;
var reactIs_development_23 = reactIs_development.isPortal;
var reactIs_development_24 = reactIs_development.isProfiler;
var reactIs_development_25 = reactIs_development.isStrictMode;
var reactIs_development_26 = reactIs_development.isSuspense;
var reactIs_development_27 = reactIs_development.isValidElementType;
var reactIs_development_28 = reactIs_development.typeOf;

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning$1(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning$1(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning$1(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});
var propTypes_1 = propTypes.object;
var propTypes_2 = propTypes.func;
var propTypes_3 = propTypes.number;
var propTypes_4 = propTypes.oneOfType;
var propTypes_5 = propTypes.oneOf;
var propTypes_6 = propTypes.node;
var propTypes_7 = propTypes.string;
var propTypes_8 = propTypes.bool;

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

var AnimateHeight_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _react2 = _interopRequireDefault(React__default);



var _propTypes2 = _interopRequireDefault(propTypes);



var _classnames2 = _interopRequireDefault(classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ANIMATION_STATE_CLASSES = {
  animating: 'rah-animating',
  animatingUp: 'rah-animating--up',
  animatingDown: 'rah-animating--down',
  animatingToHeightZero: 'rah-animating--to-height-zero',
  animatingToHeightAuto: 'rah-animating--to-height-auto',
  animatingToHeightSpecific: 'rah-animating--to-height-specific',
  static: 'rah-static',
  staticHeightZero: 'rah-static--height-zero',
  staticHeightAuto: 'rah-static--height-auto',
  staticHeightSpecific: 'rah-static--height-specific'
};

var PROPS_TO_OMIT = ['animateOpacity', 'animationStateClasses', 'applyInlineTransitions', 'children', 'contentClassName', 'delay', 'duration', 'easing', 'height', 'onAnimationEnd', 'onAnimationStart'];

function omit(obj) {
  for (var _len = arguments.length, keys = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    keys[_key - 1] = arguments[_key];
  }

  if (!keys.length) {
    return obj;
  }

  var res = {};
  var objectKeys = Object.keys(obj);

  for (var i = 0; i < objectKeys.length; i++) {
    var key = objectKeys[i];

    if (keys.indexOf(key) === -1) {
      res[key] = obj[key];
    }
  }

  return res;
}

// Start animation helper using nested requestAnimationFrames
function startAnimationHelper(callback) {
  var requestAnimationFrameIDs = [];

  requestAnimationFrameIDs[0] = requestAnimationFrame(function () {
    requestAnimationFrameIDs[1] = requestAnimationFrame(function () {
      callback();
    });
  });

  return requestAnimationFrameIDs;
}

function cancelAnimationFrames(requestAnimationFrameIDs) {
  requestAnimationFrameIDs.forEach(function (id) {
    return cancelAnimationFrame(id);
  });
}

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function isPercentage(height) {
  // Percentage height
  return typeof height === 'string' && height.search('%') === height.length - 1 && isNumber(height.substr(0, height.length - 1));
}

function runCallback(callback, params) {
  if (callback && typeof callback === 'function') {
    callback(params);
  }
}

var AnimateHeight = function (_React$Component) {
  _inherits(AnimateHeight, _React$Component);

  function AnimateHeight(props) {
    _classCallCheck(this, AnimateHeight);

    var _this = _possibleConstructorReturn(this, (AnimateHeight.__proto__ || Object.getPrototypeOf(AnimateHeight)).call(this, props));

    _this.animationFrameIDs = [];

    var height = 'auto';
    var overflow = 'visible';

    if (isNumber(props.height)) {
      // If value is string "0" make sure we convert it to number 0
      height = props.height < 0 || props.height === '0' ? 0 : props.height;
      overflow = 'hidden';
    } else if (isPercentage(props.height)) {
      // If value is string "0%" make sure we convert it to number 0
      height = props.height === '0%' ? 0 : props.height;
      overflow = 'hidden';
    }

    _this.animationStateClasses = _extends({}, ANIMATION_STATE_CLASSES, props.animationStateClasses);

    var animationStateClasses = _this.getStaticStateClasses(height);

    _this.state = {
      animationStateClasses: animationStateClasses,
      height: height,
      overflow: overflow,
      shouldUseTransitions: false
    };
    return _this;
  }

  _createClass(AnimateHeight, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var height = this.state.height;

      // Hide content if height is 0 (to prevent tabbing into it)
      // Check for contentElement is added cause this would fail in tests (react-test-renderer)
      // Read more here: https://github.com/Stanko/react-animate-height/issues/17

      if (this.contentElement && this.contentElement.style) {
        this.hideContent(height);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      var _props = this.props,
          delay = _props.delay,
          duration = _props.duration,
          height = _props.height,
          onAnimationEnd = _props.onAnimationEnd,
          onAnimationStart = _props.onAnimationStart;

      // Check if 'height' prop has changed

      if (this.contentElement && height !== prevProps.height) {
        var _cx;

        // Remove display: none from the content div
        // if it was hidden to prevent tabbing into it
        this.showContent(prevState.height);

        // Cache content height
        this.contentElement.style.overflow = 'hidden';
        var contentHeight = this.contentElement.offsetHeight;
        this.contentElement.style.overflow = '';

        // set total animation time
        var totalDuration = duration + delay;

        var newHeight = null;
        var timeoutState = {
          height: null, // it will be always set to either 'auto' or specific number
          overflow: 'hidden'
        };
        var isCurrentHeightAuto = prevState.height === 'auto';

        if (isNumber(height)) {
          // If value is string "0" make sure we convert it to number 0
          newHeight = height < 0 || height === '0' ? 0 : height;
          timeoutState.height = newHeight;
        } else if (isPercentage(height)) {
          // If value is string "0%" make sure we convert it to number 0
          newHeight = height === '0%' ? 0 : height;
          timeoutState.height = newHeight;
        } else {
          // If not, animate to content height
          // and then reset to auto
          newHeight = contentHeight; // TODO solve contentHeight = 0
          timeoutState.height = 'auto';
          timeoutState.overflow = null;
        }

        if (isCurrentHeightAuto) {
          // This is the height to be animated to
          timeoutState.height = newHeight;

          // If previous height was 'auto'
          // set starting height explicitly to be able to use transition
          newHeight = contentHeight;
        }

        // Animation classes
        var animationStateClasses = (0, _classnames2.default)((_cx = {}, _defineProperty(_cx, this.animationStateClasses.animating, true), _defineProperty(_cx, this.animationStateClasses.animatingUp, prevProps.height === 'auto' || height < prevProps.height), _defineProperty(_cx, this.animationStateClasses.animatingDown, height === 'auto' || height > prevProps.height), _defineProperty(_cx, this.animationStateClasses.animatingToHeightZero, timeoutState.height === 0), _defineProperty(_cx, this.animationStateClasses.animatingToHeightAuto, timeoutState.height === 'auto'), _defineProperty(_cx, this.animationStateClasses.animatingToHeightSpecific, timeoutState.height > 0), _cx));

        // Animation classes to be put after animation is complete
        var timeoutAnimationStateClasses = this.getStaticStateClasses(timeoutState.height);

        // Set starting height and animating classes
        // We are safe to call set state as it will not trigger infinite loop
        // because of the "height !== prevProps.height" check
        this.setState({ // eslint-disable-line react/no-did-update-set-state
          animationStateClasses: animationStateClasses,
          height: newHeight,
          overflow: 'hidden',
          // When animating from 'auto' we first need to set fixed height
          // that change should be animated
          shouldUseTransitions: !isCurrentHeightAuto
        });

        // Clear timeouts
        clearTimeout(this.timeoutID);
        clearTimeout(this.animationClassesTimeoutID);

        if (isCurrentHeightAuto) {
          // When animating from 'auto' we use a short timeout to start animation
          // after setting fixed height above
          timeoutState.shouldUseTransitions = true;

          cancelAnimationFrames(this.animationFrameIDs);
          this.animationFrameIDs = startAnimationHelper(function () {
            _this2.setState(timeoutState);

            // ANIMATION STARTS, run a callback if it exists
            runCallback(onAnimationStart, { newHeight: timeoutState.height });
          });

          // Set static classes and remove transitions when animation ends
          this.animationClassesTimeoutID = setTimeout(function () {
            _this2.setState({
              animationStateClasses: timeoutAnimationStateClasses,
              shouldUseTransitions: false
            });

            // ANIMATION ENDS
            // Hide content if height is 0 (to prevent tabbing into it)
            _this2.hideContent(timeoutState.height);
            // Run a callback if it exists
            runCallback(onAnimationEnd, { newHeight: timeoutState.height });
          }, totalDuration);
        } else {
          // ANIMATION STARTS, run a callback if it exists
          runCallback(onAnimationStart, { newHeight: newHeight });

          // Set end height, classes and remove transitions when animation is complete
          this.timeoutID = setTimeout(function () {
            timeoutState.animationStateClasses = timeoutAnimationStateClasses;
            timeoutState.shouldUseTransitions = false;

            _this2.setState(timeoutState);

            // ANIMATION ENDS
            // If height is auto, don't hide the content
            // (case when element is empty, therefore height is 0)
            if (height !== 'auto') {
              // Hide content if height is 0 (to prevent tabbing into it)
              _this2.hideContent(newHeight); // TODO solve newHeight = 0
            }
            // Run a callback if it exists
            runCallback(onAnimationEnd, { newHeight: newHeight });
          }, totalDuration);
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      cancelAnimationFrames(this.animationFrameIDs);

      clearTimeout(this.timeoutID);
      clearTimeout(this.animationClassesTimeoutID);

      this.timeoutID = null;
      this.animationClassesTimeoutID = null;
      this.animationStateClasses = null;
    }
  }, {
    key: 'showContent',
    value: function showContent(height) {
      if (height === 0) {
        this.contentElement.style.display = '';
      }
    }
  }, {
    key: 'hideContent',
    value: function hideContent(newHeight) {
      if (newHeight === 0) {
        this.contentElement.style.display = 'none';
      }
    }
  }, {
    key: 'getStaticStateClasses',
    value: function getStaticStateClasses(height) {
      var _cx2;

      return (0, _classnames2.default)((_cx2 = {}, _defineProperty(_cx2, this.animationStateClasses.static, true), _defineProperty(_cx2, this.animationStateClasses.staticHeightZero, height === 0), _defineProperty(_cx2, this.animationStateClasses.staticHeightSpecific, height > 0), _defineProperty(_cx2, this.animationStateClasses.staticHeightAuto, height === 'auto'), _cx2));
    }
  }, {
    key: 'render',
    value: function render() {
      var _cx3,
          _this3 = this;

      var _props2 = this.props,
          animateOpacity = _props2.animateOpacity,
          applyInlineTransitions = _props2.applyInlineTransitions,
          children = _props2.children,
          className = _props2.className,
          contentClassName = _props2.contentClassName,
          duration = _props2.duration,
          easing = _props2.easing,
          delay = _props2.delay,
          style = _props2.style;
      var _state = this.state,
          height = _state.height,
          overflow = _state.overflow,
          animationStateClasses = _state.animationStateClasses,
          shouldUseTransitions = _state.shouldUseTransitions;


      var componentStyle = _extends({}, style, {
        height: height,
        overflow: overflow || style.overflow
      });

      if (shouldUseTransitions && applyInlineTransitions) {
        componentStyle.transition = 'height ' + duration + 'ms ' + easing + ' ' + delay + 'ms';

        // Include transition passed through styles
        if (style.transition) {
          componentStyle.transition = style.transition + ', ' + componentStyle.transition;
        }

        // Add webkit vendor prefix still used by opera, blackberry...
        componentStyle.WebkitTransition = componentStyle.transition;
      }

      var contentStyle = {};

      if (animateOpacity) {
        contentStyle.transition = 'opacity ' + duration + 'ms ' + easing + ' ' + delay + 'ms';
        // Add webkit vendor prefix still used by opera, blackberry...
        contentStyle.WebkitTransition = contentStyle.transition;

        if (height === 0) {
          contentStyle.opacity = 0;
        }
      }

      var componentClasses = (0, _classnames2.default)((_cx3 = {}, _defineProperty(_cx3, animationStateClasses, true), _defineProperty(_cx3, className, className), _cx3));

      return _react2.default.createElement(
        'div',
        _extends({}, omit.apply(undefined, [this.props].concat(PROPS_TO_OMIT)), {
          'aria-hidden': height === 0,
          className: componentClasses,
          style: componentStyle
        }),
        _react2.default.createElement(
          'div',
          {
            className: contentClassName,
            style: contentStyle,
            ref: function ref(el) {
              return _this3.contentElement = el;
            }
          },
          children
        )
      );
    }
  }]);

  return AnimateHeight;
}(_react2.default.Component);

var heightPropType = function heightPropType(props, propName, componentName) {
  var value = props[propName];

  if (typeof value === 'number' && value >= 0 || isPercentage(value) || value === 'auto') {
    return null;
  }

  return new TypeError('value "' + value + '" of type "' + (typeof value === 'undefined' ? 'undefined' : _typeof(value)) + '" is invalid type for ' + propName + ' in ' + componentName + '. ' + 'It needs to be a positive number, string "auto" or percentage string (e.g. "15%").');
};

AnimateHeight.propTypes = {
  animateOpacity: _propTypes2.default.bool,
  animationStateClasses: _propTypes2.default.object,
  applyInlineTransitions: _propTypes2.default.bool,
  children: _propTypes2.default.any.isRequired,
  className: _propTypes2.default.string,
  contentClassName: _propTypes2.default.string,
  duration: _propTypes2.default.number,
  delay: _propTypes2.default.number,
  easing: _propTypes2.default.string,
  height: heightPropType,
  onAnimationEnd: _propTypes2.default.func,
  onAnimationStart: _propTypes2.default.func,
  style: _propTypes2.default.object
};

AnimateHeight.defaultProps = {
  animateOpacity: false,
  animationStateClasses: ANIMATION_STATE_CLASSES,
  applyInlineTransitions: true,
  duration: 250,
  delay: 0,
  easing: 'ease',
  style: {}
};

exports.default = AnimateHeight;
});

var AnimateHeight = unwrapExports(AnimateHeight_1);

var Collapse = React.forwardRef(function (_ref, ref) {
  var isOpen = _ref.isOpen,
      _ref$animateOpacity = _ref.animateOpacity,
      animateOpacity = _ref$animateOpacity === void 0 ? true : _ref$animateOpacity,
      onAnimationStart = _ref.onAnimationStart,
      onAnimationEnd = _ref.onAnimationEnd,
      duration = _ref.duration,
      _ref$easing = _ref.easing,
      easing = _ref$easing === void 0 ? "ease" : _ref$easing,
      _ref$startingHeight = _ref.startingHeight,
      startingHeight = _ref$startingHeight === void 0 ? 0 : _ref$startingHeight,
      _ref$endingHeight = _ref.endingHeight,
      endingHeight = _ref$endingHeight === void 0 ? "auto" : _ref$endingHeight,
      rest = _objectWithoutProperties(_ref, ["isOpen", "animateOpacity", "onAnimationStart", "onAnimationEnd", "duration", "easing", "startingHeight", "endingHeight"]);

  return core.jsx(AnimateHeight, _extends({
    duration: duration,
    easing: easing,
    animateOpacity: animateOpacity,
    height: isOpen ? endingHeight : startingHeight,
    applyInlineTransitions: false,
    css: {
      transition: "height .2s ease,opacity .2s ease-in-out,transform .2s ease-in-out",
      "&.rah-animating--to-height-zero": {
        opacity: 0,
        transform: "translateY(-0.625rem)"
      }
    }
  }, {
    onAnimationStart: onAnimationStart,
    onAnimationEnd: onAnimationEnd
  }), core.jsx(Box, _extends({
    ref: ref
  }, rest)));
});
Collapse.displayName = "Collapse";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  flex-shrink: 0;\n  backface-visibility: hidden;\n  &:not(:root) {\n    overflow: hidden;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Svg = styled(Box)(_templateObject());
var Icon = React.forwardRef(function (_ref, ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? "1em" : _ref$size,
      name = _ref.name,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? "currentColor" : _ref$color,
      _ref$role = _ref.role,
      role = _ref$role === void 0 ? "presentation" : _ref$role,
      _ref$focusable = _ref.focusable,
      focusable = _ref$focusable === void 0 ? false : _ref$focusable,
      rest = _objectWithoutProperties(_ref, ["size", "name", "color", "role", "focusable"]);

  var _useContext = React.useContext(core.ThemeContext),
      iconPaths = _useContext.icons; // Fallback in case you pass the wrong name


  var iconFallback = iconPaths["question-outline"];
  var path = iconPaths[name] == null ? iconFallback.path : iconPaths[name].path;
  var viewBox = (iconPaths[name] == null ? iconFallback.viewBox : iconPaths[name].viewBox) || "0 0 24 24";
  return core.jsx(Svg, _extends({
    ref: ref,
    as: "svg",
    size: size,
    color: color,
    display: "inline-block",
    verticalAlign: "middle",
    viewBox: viewBox,
    focusable: focusable,
    role: role
  }, rest), path);
});
Icon.displayName = "Icon";

/**
 * The selectors are based on [WAI-ARIA state properties](https://www.w3.org/WAI/PF/aria-1.1/states_and_properties) and common CSS Selectors
 */

var hover = "&:hover";
var active = "&:active, &[data-active=true]";
var focus = "&:focus";
var visited = "&:visited";
var even = "&:nth-of-type(even)";
var odd = "&:nth-of-type(odd)";
var disabled = "&:disabled, &:disabled:focus, &:disabled:hover, &[aria-disabled=true], &[aria-disabled=true]:focus, &[aria-disabled=true]:hover";
var checked = "&[aria-checked=true]";
var mixed = "&[aria-checked=mixed]";
var selected = "&[aria-selected=true]";
var invalid = "&[aria-invalid=true]";
var pressed = "&[aria-pressed=true]";
var readOnly = "&[aria-readonly=true], &[readonly]";
var first = "&:first-of-type";
var last = "&:last-of-type";
var expanded = "&[aria-expanded=true]";
var grabbed = "&[aria-grabbed=true]";
var notFirst = "&:not(:first-of-type)";
var notLast = "&:not(:last-of-type)";
var groupHover = "[role=group]:hover &";
var PseudoBox = styled(Box)(function (_ref) {
  var _css;

  var _after = _ref._after,
      _focus = _ref._focus,
      _selected = _ref._selected,
      _focusWithin = _ref._focusWithin,
      _hover = _ref._hover,
      _invalid = _ref._invalid,
      _active = _ref._active,
      _disabled = _ref._disabled,
      _grabbed = _ref._grabbed,
      _pressed = _ref._pressed,
      _expanded = _ref._expanded,
      _visited = _ref._visited,
      _before = _ref._before,
      _readOnly = _ref._readOnly,
      _first = _ref._first,
      _notFirst = _ref._notFirst,
      _notLast = _ref._notLast,
      _last = _ref._last,
      _placeholder = _ref._placeholder,
      _checked = _ref._checked,
      _groupHover = _ref._groupHover,
      _mixed = _ref._mixed,
      _odd = _ref._odd,
      _even = _ref._even;
  return css((_css = {}, _defineProperty(_css, hover, transformAliasProps(_hover)), _defineProperty(_css, focus, transformAliasProps(_focus)), _defineProperty(_css, active, transformAliasProps(_active)), _defineProperty(_css, visited, transformAliasProps(_visited)), _defineProperty(_css, disabled, transformAliasProps(_disabled)), _defineProperty(_css, selected, transformAliasProps(_selected)), _defineProperty(_css, invalid, transformAliasProps(_invalid)), _defineProperty(_css, expanded, transformAliasProps(_expanded)), _defineProperty(_css, grabbed, transformAliasProps(_grabbed)), _defineProperty(_css, readOnly, transformAliasProps(_readOnly)), _defineProperty(_css, first, transformAliasProps(_first)), _defineProperty(_css, notFirst, transformAliasProps(_notFirst)), _defineProperty(_css, notLast, transformAliasProps(_notLast)), _defineProperty(_css, last, transformAliasProps(_last)), _defineProperty(_css, odd, transformAliasProps(_odd)), _defineProperty(_css, even, transformAliasProps(_even)), _defineProperty(_css, mixed, transformAliasProps(_mixed)), _defineProperty(_css, checked, transformAliasProps(_checked)), _defineProperty(_css, pressed, transformAliasProps(_pressed)), _defineProperty(_css, groupHover, transformAliasProps(_groupHover)), _defineProperty(_css, "&:before", transformAliasProps(_before)), _defineProperty(_css, "&:after", transformAliasProps(_after)), _defineProperty(_css, "&:focus-within", transformAliasProps(_focusWithin)), _defineProperty(_css, "&::placeholder", _placeholder), _css));
});
PseudoBox.displayName = "PseudoBox";

var iconPaths = {
  copy: {
    path: /*#__PURE__*/React__default.createElement("path", {
      fill: "currentColor",
      d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
    })
  },
  search: {
    path: /*#__PURE__*/React__default.createElement("path", {
      fill: "currentColor",
      d: "M23.384,21.619,16.855,15.09a9.284,9.284,0,1,0-1.768,1.768l6.529,6.529a1.266,1.266,0,0,0,1.768,0A1.251,1.251,0,0,0,23.384,21.619ZM2.75,9.5a6.75,6.75,0,1,1,6.75,6.75A6.758,6.758,0,0,1,2.75,9.5Z"
    })
  },
  "search-2": {
    path: /*#__PURE__*/React__default.createElement("path", {
      fill: "currentColor",
      d: "M23.414,20.591l-4.645-4.645a10.256,10.256,0,1,0-2.828,2.829l4.645,4.644a2.025,2.025,0,0,0,2.828,0A2,2,0,0,0,23.414,20.591ZM10.25,3.005A7.25,7.25,0,1,1,3,10.255,7.258,7.258,0,0,1,10.25,3.005Z"
    })
  },
  moon: {
    path: /*#__PURE__*/React__default.createElement("path", {
      fill: "currentColor",
      d: "M21.4,13.7C20.6,13.9,19.8,14,19,14c-5,0-9-4-9-9c0-0.8,0.1-1.6,0.3-2.4c0.1-0.3,0-0.7-0.3-1 c-0.3-0.3-0.6-0.4-1-0.3C4.3,2.7,1,7.1,1,12c0,6.1,4.9,11,11,11c4.9,0,9.3-3.3,10.6-8.1c0.1-0.3,0-0.7-0.3-1 C22.1,13.7,21.7,13.6,21.4,13.7z"
    })
  },
  sun: {
    path: /*#__PURE__*/React__default.createElement("g", {
      strokeLinejoin: "full",
      strokeLinecap: "full",
      strokeWidth: "2",
      fill: "none",
      stroke: "currentColor"
    }, /*#__PURE__*/React__default.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "5"
    }), /*#__PURE__*/React__default.createElement("path", {
      d: "M12 1v2"
    }), /*#__PURE__*/React__default.createElement("path", {
      d: "M12 21v2"
    }), /*#__PURE__*/React__default.createElement("path", {
      d: "M4.22 4.22l1.42 1.42"
    }), /*#__PURE__*/React__default.createElement("path", {
      d: "M18.36 18.36l1.42 1.42"
    }), /*#__PURE__*/React__default.createElement("path", {
      d: "M1 12h2"
    }), /*#__PURE__*/React__default.createElement("path", {
      d: "M21 12h2"
    }), /*#__PURE__*/React__default.createElement("path", {
      d: "M4.22 19.78l1.42-1.42"
    }), /*#__PURE__*/React__default.createElement("path", {
      d: "M18.36 5.64l1.42-1.42"
    }))
  },
  add: {
    path: /*#__PURE__*/React__default.createElement("path", {
      fill: "currentColor",
      d: "M0,12a1.5,1.5,0,0,0,1.5,1.5h8.75a.25.25,0,0,1,.25.25V22.5a1.5,1.5,0,0,0,3,0V13.75a.25.25,0,0,1,.25-.25H22.5a1.5,1.5,0,0,0,0-3H13.75a.25.25,0,0,1-.25-.25V1.5a1.5,1.5,0,0,0-3,0v8.75a.25.25,0,0,1-.25.25H1.5A1.5,1.5,0,0,0,0,12Z"
    })
  },
  "small-add": {
    path: /*#__PURE__*/React__default.createElement("path", {
      fill: "currentColor",
      d: "M14 9h-3V6c0-.55-.45-1-1-1s-1 .45-1 1v3H6c-.55 0-1 .45-1 1s.45 1 1 1h3v3c0 .55.45 1 1 1s1-.45 1-1v-3h3c.55 0 1-.45 1-1s-.45-1-1-1z",
      fillRule: "evenodd"
    }),
    viewBox: "0 0 20 20"
  },
  settings: {
    viewBox: "0 0 14 14",
    path: /*#__PURE__*/React__default.createElement("path", {
      fill: "currentColor",
      d: "M14,7.77 L14,6.17 L12.06,5.53 L11.61,4.44 L12.49,2.6 L11.36,1.47 L9.55,2.38 L8.46,1.93 L7.77,0.01 L6.17,0.01 L5.54,1.95 L4.43,2.4 L2.59,1.52 L1.46,2.65 L2.37,4.46 L1.92,5.55 L0,6.23 L0,7.82 L1.94,8.46 L2.39,9.55 L1.51,11.39 L2.64,12.52 L4.45,11.61 L5.54,12.06 L6.23,13.98 L7.82,13.98 L8.45,12.04 L9.56,11.59 L11.4,12.47 L12.53,11.34 L11.61,9.53 L12.08,8.44 L14,7.75 L14,7.77 Z M7,10 C5.34,10 4,8.66 4,7 C4,5.34 5.34,4 7,4 C8.66,4 10,5.34 10,7 C10,8.66 8.66,10 7,10 Z"
    })
  },
  "check-circle": {
    path: /*#__PURE__*/React__default.createElement("path", {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
    })
  },
  lock: {
    path: /*#__PURE__*/React__default.createElement("path", {
      fill: "currentColor",
      d: "M19.5,9.5h-.75V6.75a6.75,6.75,0,0,0-13.5,0V9.5H4.5a2,2,0,0,0-2,2V22a2,2,0,0,0,2,2h15a2,2,0,0,0,2-2V11.5A2,2,0,0,0,19.5,9.5Zm-9.5,6a2,2,0,1,1,3,1.723V19.5a1,1,0,0,1-2,0V17.223A1.994,1.994,0,0,1,10,15.5ZM7.75,6.75a4.25,4.25,0,0,1,8.5,0V9a.5.5,0,0,1-.5.5H8.25a.5.5,0,0,1-.5-.5Z"
    })
  },
  unlock: {
    path: /*#__PURE__*/React__default.createElement("path", {
      fill: "currentColor",
      d: "M19.5,9.5h-.75V6.75A6.751,6.751,0,0,0,5.533,4.811a1.25,1.25,0,1,0,2.395.717A4.251,4.251,0,0,1,16.25,6.75V9a.5.5,0,0,1-.5.5H4.5a2,2,0,0,0-2,2V22a2,2,0,0,0,2,2h15a2,2,0,0,0,2-2V11.5A2,2,0,0,0,19.5,9.5Zm-9.5,6a2,2,0,1,1,3,1.723V19.5a1,1,0,0,1-2,0V17.223A1.994,1.994,0,0,1,10,15.5Z"
    })
  },
  view: {
    path: /*#__PURE__*/React__default.createElement("g", {
      fill: "currentColor"
    }, /*#__PURE__*/React__default.createElement("path", {
      d: "M23.432,10.524C20.787,7.614,16.4,4.538,12,4.6,7.6,4.537,3.213,7.615.568,10.524a2.211,2.211,0,0,0,0,2.948C3.182,16.351,7.507,19.4,11.839,19.4h.308c4.347,0,8.671-3.049,11.288-5.929A2.21,2.21,0,0,0,23.432,10.524ZM7.4,12A4.6,4.6,0,1,1,12,16.6,4.6,4.6,0,0,1,7.4,12Z"
    }), /*#__PURE__*/React__default.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "2"
    }))
  },
  "view-off": {
    path: /*#__PURE__*/React__default.createElement("g", {
      fill: "currentColor"
    }, /*#__PURE__*/React__default.createElement("path", {
      d: "M23.2,10.549a20.954,20.954,0,0,0-4.3-3.6l4-3.995a1,1,0,1,0-1.414-1.414l-.018.018a.737.737,0,0,1-.173.291l-19.5,19.5c-.008.007-.018.009-.026.017a1,1,0,0,0,1.631,1.088l4.146-4.146a11.26,11.26,0,0,0,4.31.939h.3c4.256,0,8.489-2.984,11.051-5.8A2.171,2.171,0,0,0,23.2,10.549ZM16.313,13.27a4.581,4.581,0,0,1-3,3.028,4.3,4.3,0,0,1-3.1-.19.253.253,0,0,1-.068-.407l5.56-5.559a.252.252,0,0,1,.407.067A4.3,4.3,0,0,1,16.313,13.27Z"
    }), /*#__PURE__*/React__default.createElement("path", {
      d: "M7.615,13.4a.244.244,0,0,0,.061-.24A4.315,4.315,0,0,1,7.5,12,4.5,4.5,0,0,1,12,7.5a4.276,4.276,0,0,1,1.16.173.244.244,0,0,0,.24-.062l1.941-1.942a.254.254,0,0,0-.1-.421A10.413,10.413,0,0,0,12,4.75C7.7,4.692,3.4,7.7.813,10.549a2.15,2.15,0,0,0-.007,2.9,21.209,21.209,0,0,0,3.438,3.03.256.256,0,0,0,.326-.029Z"
    }))
  },
  download: {
    viewBox: "0 0 14 14",
    path: /*#__PURE__*/React__default.createElement("path", {
      fill: "currentColor",
      d: "M11.2857,6.05714 L10.08571,4.85714 L7.85714,7.14786 L7.85714,1 L6.14286,1 L6.14286,7.14786 L3.91429,4.85714 L2.71429,6.05714 L7,10.42857 L11.2857,6.05714 Z M1,11.2857 L1,13 L13,13 L13,11.2857 L1,11.2857 Z"
    })
  },
  "delete": {
    path: /*#__PURE__*/React__default.createElement("g", {
      fill: "currentColor"
    }, /*#__PURE__*/React__default.createElement("path", {
      d: "M19.452,7.5H4.547a.5.5,0,0,0-.5.545L5.334,22.181A2,2,0,0,0,7.326,24h9.347a2,2,0,0,0,1.992-1.819L19.95,8.045a.5.5,0,0,0-.129-.382A.5.5,0,0,0,19.452,7.5Zm-9.2,13a.75.75,0,0,1-1.5,0v-9a.75.75,0,0,1,1.5,0Zm5,0a.75.75,0,0,1-1.5,0v-9a.75.75,0,0,1,1.5,0Z"
    }), /*#__PURE__*/React__default.createElement("path", {
      d: "M22,4H17.25A.25.25,0,0,1,17,3.75V2.5A2.5,2.5,0,0,0,14.5,0h-5A2.5,2.5,0,0,0,7,2.5V3.75A.25.25,0,0,1,6.75,4H2A1,1,0,0,0,2,6H22a1,1,0,0,0,0-2ZM9,3.75V2.5A.5.5,0,0,1,9.5,2h5a.5.5,0,0,1,.5.5V3.75a.25.25,0,0,1-.25.25H9.25A.25.25,0,0,1,9,3.75Z"
    }))
  },
  repeat: {
    path: /*#__PURE__*/React__default.createElement("g", {
      fill: "currentColor"
    }, /*#__PURE__*/React__default.createElement("path", {
      d: "M10.319,4.936a7.239,7.239,0,0,1,7.1,2.252,1.25,1.25,0,1,0,1.872-1.657A9.737,9.737,0,0,0,9.743,2.5,10.269,10.269,0,0,0,2.378,9.61a.249.249,0,0,1-.271.178l-1.033-.13A.491.491,0,0,0,.6,9.877a.5.5,0,0,0-.019.526l2.476,4.342a.5.5,0,0,0,.373.248.43.43,0,0,0,.062,0,.5.5,0,0,0,.359-.152l3.477-3.593a.5.5,0,0,0-.3-.844L5.15,10.172a.25.25,0,0,1-.2-.333A7.7,7.7,0,0,1,10.319,4.936Z"
    }), /*#__PURE__*/React__default.createElement("path", {
      d: "M23.406,14.1a.5.5,0,0,0,.015-.526l-2.5-4.329A.5.5,0,0,0,20.546,9a.489.489,0,0,0-.421.151l-3.456,3.614a.5.5,0,0,0,.3.842l1.848.221a.249.249,0,0,1,.183.117.253.253,0,0,1,.023.216,7.688,7.688,0,0,1-5.369,4.9,7.243,7.243,0,0,1-7.1-2.253,1.25,1.25,0,1,0-1.872,1.656,9.74,9.74,0,0,0,9.549,3.03,10.261,10.261,0,0,0,7.369-7.12.251.251,0,0,1,.27-.179l1.058.127a.422.422,0,0,0,.06,0A.5.5,0,0,0,23.406,14.1Z"
    }))
  },
  "repeat-clock": {
    path: /*#__PURE__*/React__default.createElement("g", {
      fill: "currentColor"
    }, /*#__PURE__*/React__default.createElement("path", {
      d: "M12.965,6a1,1,0,0,0-1,1v5.5a1,1,0,0,0,1,1h5a1,1,0,0,0,0-2h-3.75a.25.25,0,0,1-.25-.25V7A1,1,0,0,0,12.965,6Z"
    }), /*#__PURE__*/React__default.createElement("path", {
      d: "M12.567,1.258A10.822,10.822,0,0,0,2.818,8.4a.25.25,0,0,1-.271.163L.858,8.309a.514.514,0,0,0-.485.213.5.5,0,0,0-.021.53l2.679,4.7a.5.5,0,0,0,.786.107l3.77-3.746a.5.5,0,0,0-.279-.85L5.593,9.007a.25.25,0,0,1-.192-.35,8.259,8.259,0,1,1,7.866,11.59,1.25,1.25,0,0,0,.045,2.5h.047a10.751,10.751,0,1,0-.792-21.487Z"
    }))
  },
  edit: {
    path: /*#__PURE__*/React__default.createElement("g", {
      fill: "none",
      stroke: "currentColor",
      strokeLinecap: "full",
      strokeWidth: "2"
    }, /*#__PURE__*/React__default.createElement("path", {
      d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
    }), /*#__PURE__*/React__default.createElement("path", {
      d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
    }))
  },
  "chevron-right": {
    path: /*#__PURE__*/React__default.createElement("path", {
      fill: "currentColor",
      d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
    })
  },
  "chevron-left": {
    path: /*#__PURE__*/React__default.createElement("path", {
      fill: "currentColor",
      d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
    })
  },
  "chevron-down": {
    path: /*#__PURE__*/React__default.createElement("path", {
      fill: "currentColor",
      d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
    })
  },
  "chevron-up": {
    path: /*#__PURE__*/React__default.createElement("path", {
      fill: "currentColor",
      d: "M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"
    })
  },
  "arrow-forward": {
    path: /*#__PURE__*/React__default.createElement("path", {
      fill: "currentColor",
      d: "M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
    })
  },
  "arrow-up": {
    path: /*#__PURE__*/React__default.createElement("path", {
      fill: "currentColor",
      d: "M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"
    })
  },
  "arrow-down": {
    path: /*#__PURE__*/React__default.createElement("path", {
      fill: "currentColor",
      d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
    })
  },
  "arrow-back": {
    path: /*#__PURE__*/React__default.createElement("path", {
      fill: "currentColor",
      d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
    })
  },
  "external-link": {
    path: /*#__PURE__*/React__default.createElement("g", {
      fill: "none",
      stroke: "currentColor",
      strokeLinecap: "full",
      strokeWidth: "2"
    }, /*#__PURE__*/React__default.createElement("path", {
      d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
    }), /*#__PURE__*/React__default.createElement("path", {
      d: "M15 3h6v6"
    }), /*#__PURE__*/React__default.createElement("path", {
      d: "M10 14L21 3"
    }))
  },
  link: {
    path: /*#__PURE__*/React__default.createElement("g", {
      fill: "currentColor"
    }, /*#__PURE__*/React__default.createElement("path", {
      d: "M10.458,18.374,7.721,21.11a2.853,2.853,0,0,1-3.942,0l-.892-.891a2.787,2.787,0,0,1,0-3.941l5.8-5.8a2.789,2.789,0,0,1,3.942,0l.893.892A1,1,0,0,0,14.94,9.952l-.893-.892a4.791,4.791,0,0,0-6.771,0l-5.8,5.8a4.787,4.787,0,0,0,0,6.77l.892.891a4.785,4.785,0,0,0,6.771,0l2.736-2.735a1,1,0,1,0-1.414-1.415Z"
    }), /*#__PURE__*/React__default.createElement("path", {
      d: "M22.526,2.363l-.892-.892a4.8,4.8,0,0,0-6.77,0l-2.905,2.9a1,1,0,0,0,1.414,1.414l2.9-2.9a2.79,2.79,0,0,1,3.941,0l.893.893a2.786,2.786,0,0,1,0,3.942l-5.8,5.8a2.769,2.769,0,0,1-1.971.817h0a2.766,2.766,0,0,1-1.969-.816,1,1,0,1,0-1.415,1.412,4.751,4.751,0,0,0,3.384,1.4h0a4.752,4.752,0,0,0,3.385-1.4l5.8-5.8a4.786,4.786,0,0,0,0-6.771Z"
    }))
  },
  "plus-square": {
    path: /*#__PURE__*/React__default.createElement("g", {
      fill: "none",
      stroke: "currentColor",
      strokeLinecap: "full",
      strokeWidth: "2"
    }, /*#__PURE__*/React__default.createElement("rect", {
      height: "18",
      width: "18",
      rx: "2",
      ry: "2",
      x: "3",
      y: "3"
    }), /*#__PURE__*/React__default.createElement("path", {
      d: "M12 8v8"
    }), /*#__PURE__*/React__default.createElement("path", {
      d: "M8 12h8"
    }))
  },
  chat: {
    viewBox: "0 0 14 14",
    path: /*#__PURE__*/React__default.createElement("path", {
      fill: "currentColor",
      d: "M0.913134,0.920639 C1.49851,0.331726 2.29348,0 3.12342,0 L10.8766,0 C11.7065,0 12.5015,0.331725 13.0869,0.920639 C13.6721,1.50939 14,2.30689 14,3.13746 L14,8.12943 C13.9962,8.51443 13.9059,8.97125 13.7629,9.32852 C13.6128,9.683 13.3552,10.0709 13.0869,10.3462 C12.813,10.6163 12.4265,10.8761 12.0734,11.0274 C11.7172,11.1716 11.2607,11.263 10.8766,11.2669 L10.1234,11.2669 L10.1234,12.5676 L10.1209,12.5676 C10.1204,12.793 10.0633,13.0791 9.97807,13.262 C9.8627,13.466 9.61158,13.7198 9.40818,13.8382 L9.40824,13.8383 C9.4077,13.8386 9.40716,13.8388 9.40661,13.8391 C9.40621,13.8393 9.4058,13.8396 9.40539,13.8398 L9.40535,13.8397 C9.22958,13.9254 8.94505,13.9951 8.75059,14 L8.74789,14 C8.35724,13.9963 7.98473,13.8383 7.71035,13.5617 L5.39553,11.2669 L3.12342,11.2669 C2.29348,11.2669 1.49851,10.9352 0.913134,10.3462 C0.644826,10.0709 0.387187,9.683 0.23711,9.32852 C0.0941235,8.97125 0.00379528,8.51443 0,8.12943 L0,3.13746 C0,2.30689 0.327915,1.50939 0.913134,0.920639 Z M3.12342,1.59494 C2.71959,1.59494 2.33133,1.75628 2.04431,2.04503 C1.75713,2.33395 1.59494,2.72681 1.59494,3.13746 L1.59494,8.12943 C1.59114,8.35901 1.62114,8.51076 1.71193,8.72129 C1.79563,8.9346 1.88065,9.06264 2.04431,9.22185 C2.33133,9.5106 2.71959,9.67195 3.12342,9.67195 L5.72383,9.67195 C5.93413,9.67195 6.13592,9.75502 6.28527,9.90308 L8.52848,12.1269 L8.52848,10.4694 C8.52848,10.029 8.88552,9.67195 9.32595,9.67195 L10.8766,9.67195 C11.1034,9.67583 11.2517,9.64614 11.4599,9.55518 C11.6712,9.47132 11.7976,9.38635 11.9557,9.22185 C12.1193,9.06264 12.2044,8.9346 12.2881,8.72129 C12.3789,8.51076 12.4089,8.35901 12.4051,8.12943 L12.4051,3.13746 C12.4051,2.72681 12.2429,2.33394 11.9557,2.04503 C11.6687,1.75628 11.2804,1.59494 10.8766,1.59494 L3.12342,1.59494 Z"
    })
  },
  calendar: {
    viewBox: "0 0 14 14",
    path: /*#__PURE__*/React__default.createElement("path", {
      fill: "currentColor",
      d: "M10.8889,5.5 L3.11111,5.5 L3.11111,7.05556 L10.8889,7.05556 L10.8889,5.5 Z M12.4444,1.05556 L11.6667,1.05556 L11.6667,0 L10.1111,0 L10.1111,1.05556 L3.88889,1.05556 L3.88889,0 L2.33333,0 L2.33333,1.05556 L1.55556,1.05556 C0.692222,1.05556 0.00777777,1.75556 0.00777777,2.61111 L0,12.5 C0,13.3556 0.692222,14 1.55556,14 L12.4444,14 C13.3,14 14,13.3556 14,12.5 L14,2.61111 C14,1.75556 13.3,1.05556 12.4444,1.05556 Z M12.4444,12.5 L1.55556,12.5 L1.55556,3.94444 L12.4444,3.94444 L12.4444,12.5 Z M8.55556,8.61111 L3.11111,8.61111 L3.11111,10.1667 L8.55556,10.1667 L8.55556,8.61111 Z"
    })
  },
  time: {
    path: /*#__PURE__*/React__default.createElement("g", {
      fill: "currentColor"
    }, /*#__PURE__*/React__default.createElement("path", {
      d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z"
    }), /*#__PURE__*/React__default.createElement("path", {
      d: "M17.134,15.81,12.5,11.561V6.5a1,1,0,0,0-2,0V12a1,1,0,0,0,.324.738l4.959,4.545a1.01,1.01,0,0,0,1.413-.061A1,1,0,0,0,17.134,15.81Z"
    }))
  },
  attachment: {
    path: /*#__PURE__*/React__default.createElement("path", {
      fill: "currentColor",
      d: "M21.843,3.455a6.961,6.961,0,0,0-9.846,0L1.619,13.832a5.128,5.128,0,0,0,7.252,7.252L17.3,12.653A3.293,3.293,0,1,0,12.646,8L7.457,13.184A1,1,0,1,0,8.871,14.6L14.06,9.409a1.294,1.294,0,0,1,1.829,1.83L7.457,19.67a3.128,3.128,0,0,1-4.424-4.424L13.411,4.869a4.962,4.962,0,1,1,7.018,7.018L12.646,19.67a1,1,0,1,0,1.414,1.414L21.843,13.3a6.96,6.96,0,0,0,0-9.846Z"
    })
  },
  "up-down": {
    viewBox: "-1 -1 9 11",
    path: /*#__PURE__*/React__default.createElement("path", {
      fill: "currentColor",
      d: "M 3.5 0L 3.98809 -0.569442L 3.5 -0.987808L 3.01191 -0.569442L 3.5 0ZM 3.5 9L 3.01191 9.56944L 3.5 9.98781L 3.98809 9.56944L 3.5 9ZM 0.488094 3.56944L 3.98809 0.569442L 3.01191 -0.569442L -0.488094 2.43056L 0.488094 3.56944ZM 3.01191 0.569442L 6.51191 3.56944L 7.48809 2.43056L 3.98809 -0.569442L 3.01191 0.569442ZM -0.488094 6.56944L 3.01191 9.56944L 3.98809 8.43056L 0.488094 5.43056L -0.488094 6.56944ZM 3.98809 9.56944L 7.48809 6.56944L 6.51191 5.43056L 3.01191 8.43056L 3.98809 9.56944Z"
    })
  },
  "at-sign": {
    path: /*#__PURE__*/React__default.createElement("path", {
      fill: "currentColor",
      d: "M12,.5A11.634,11.634,0,0,0,.262,12,11.634,11.634,0,0,0,12,23.5a11.836,11.836,0,0,0,6.624-2,1.25,1.25,0,1,0-1.393-2.076A9.34,9.34,0,0,1,12,21a9.132,9.132,0,0,1-9.238-9A9.132,9.132,0,0,1,12,3a9.132,9.132,0,0,1,9.238,9v.891a1.943,1.943,0,0,1-3.884,0V12A5.355,5.355,0,1,0,12,17.261a5.376,5.376,0,0,0,3.861-1.634,4.438,4.438,0,0,0,7.877-2.736V12A11.634,11.634,0,0,0,12,.5Zm0,14.261A2.763,2.763,0,1,1,14.854,12,2.812,2.812,0,0,1,12,14.761Z"
    })
  },
  "arrow-left": {
    path: /*#__PURE__*/React__default.createElement("g", {
      fill: "currentColor"
    }, /*#__PURE__*/React__default.createElement("path", {
      d: "M10.416,12a2.643,2.643,0,0,1,.775-1.875L20.732.584a1.768,1.768,0,0,1,2.5,2.5l-8.739,8.739a.25.25,0,0,0,0,.354l8.739,8.739a1.768,1.768,0,0,1-2.5,2.5l-9.541-9.541A2.643,2.643,0,0,1,10.416,12Z"
    }), /*#__PURE__*/React__default.createElement("path", {
      d: "M.25,12a2.643,2.643,0,0,1,.775-1.875L10.566.584a1.768,1.768,0,0,1,2.5,2.5L4.327,11.823a.25.25,0,0,0,0,.354l8.739,8.739a1.768,1.768,0,0,1-2.5,2.5L1.025,13.875A2.643,2.643,0,0,1,.25,12Z"
    }))
  },
  "arrow-right": {
    path: /*#__PURE__*/React__default.createElement("g", {
      fill: "currentColor"
    }, /*#__PURE__*/React__default.createElement("path", {
      d: "M13.584,12a2.643,2.643,0,0,1-.775,1.875L3.268,23.416a1.768,1.768,0,0,1-2.5-2.5l8.739-8.739a.25.25,0,0,0,0-.354L.768,3.084a1.768,1.768,0,0,1,2.5-2.5l9.541,9.541A2.643,2.643,0,0,1,13.584,12Z"
    }), /*#__PURE__*/React__default.createElement("path", {
      d: "M23.75,12a2.643,2.643,0,0,1-.775,1.875l-9.541,9.541a1.768,1.768,0,0,1-2.5-2.5l8.739-8.739a.25.25,0,0,0,0-.354L10.934,3.084a1.768,1.768,0,0,1,2.5-2.5l9.541,9.541A2.643,2.643,0,0,1,23.75,12Z"
    }))
  },
  star: {
    path: /*#__PURE__*/React__default.createElement("path", {
      fill: "currentColor",
      d: "M23.555,8.729a1.505,1.505,0,0,0-1.406-.98H16.062a.5.5,0,0,1-.472-.334L13.405,1.222a1.5,1.5,0,0,0-2.81,0l-.005.016L8.41,7.415a.5.5,0,0,1-.471.334H1.85A1.5,1.5,0,0,0,.887,10.4l5.184,4.3a.5.5,0,0,1,.155.543L4.048,21.774a1.5,1.5,0,0,0,2.31,1.684l5.346-3.92a.5.5,0,0,1,.591,0l5.344,3.919a1.5,1.5,0,0,0,2.312-1.683l-2.178-6.535a.5.5,0,0,1,.155-.543l5.194-4.306A1.5,1.5,0,0,0,23.555,8.729Z"
    })
  },
  email: {
    path: /*#__PURE__*/React__default.createElement("g", {
      fill: "currentColor"
    }, /*#__PURE__*/React__default.createElement("path", {
      d: "M11.114,14.556a1.252,1.252,0,0,0,1.768,0L22.568,4.87a.5.5,0,0,0-.281-.849A1.966,1.966,0,0,0,22,4H2a1.966,1.966,0,0,0-.289.021.5.5,0,0,0-.281.849Z"
    }), /*#__PURE__*/React__default.createElement("path", {
      d: "M23.888,5.832a.182.182,0,0,0-.2.039l-6.2,6.2a.251.251,0,0,0,0,.354l5.043,5.043a.75.75,0,1,1-1.06,1.061l-5.043-5.043a.25.25,0,0,0-.354,0l-2.129,2.129a2.75,2.75,0,0,1-3.888,0L7.926,13.488a.251.251,0,0,0-.354,0L2.529,18.531a.75.75,0,0,1-1.06-1.061l5.043-5.043a.251.251,0,0,0,0-.354l-6.2-6.2a.18.18,0,0,0-.2-.039A.182.182,0,0,0,0,6V18a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2V6A.181.181,0,0,0,23.888,5.832Z"
    }))
  },
  phone: {
    viewBox: "0 0 14 14",
    path: /*#__PURE__*/React__default.createElement("path", {
      fill: "currentColor",
      d: "M2.20731,0.0127209 C2.1105,-0.0066419 1.99432,-0.00664663 1.91687,0.032079 C0.871279,0.438698 0.212942,1.92964 0.0580392,2.95587 C-0.426031,6.28627 2.20731,9.17133 4.62766,11.0689 C6.77694,12.7534 10.9012,15.5223 13.3409,12.8503 C13.6507,12.5211 14.0186,12.037 13.9993,11.553 C13.9412,10.7397 13.186,10.1588 12.6051,9.71349 C12.1598,9.38432 11.2304,8.47427 10.6495,8.49363 C10.1267,8.51299 9.79754,9.05515 9.46837,9.38432 L8.88748,9.96521 C8.79067,10.062 7.55145,9.24878 7.41591,9.15197 C6.91248,8.8228 6.4284,8.45491 6.00242,8.04829 C5.57644,7.64167 5.18919,7.19632 4.86002,6.73161 C4.7632,6.59607 3.96933,5.41495 4.04678,5.31813 C4.04678,5.31813 4.72448,4.58234 4.91811,4.2919 C5.32473,3.67229 5.63453,3.18822 5.16982,2.45243 C4.99556,2.18135 4.78257,1.96836 4.55021,1.73601 C4.14359,1.34875 3.73698,0.942131 3.27227,0.612963 C3.02055,0.419335 2.59457,0.0708094 2.20731,0.0127209 Z"
    })
  },
  spinner: {
    path: /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("defs", null, /*#__PURE__*/React__default.createElement("linearGradient", {
      x1: "28.154%",
      y1: "63.74%",
      x2: "74.629%",
      y2: "17.783%",
      id: "a"
    }, /*#__PURE__*/React__default.createElement("stop", {
      stopColor: "currentColor",
      offset: "0%"
    }), /*#__PURE__*/React__default.createElement("stop", {
      stopColor: "#fff",
      stopOpacity: "0",
      offset: "100%"
    }))), /*#__PURE__*/React__default.createElement("g", {
      transform: "translate(2)",
      fill: "none"
    }, /*#__PURE__*/React__default.createElement("circle", {
      stroke: "url(#a)",
      strokeWidth: "4",
      cx: "10",
      cy: "12",
      r: "10"
    }), /*#__PURE__*/React__default.createElement("path", {
      d: "M10 2C4.477 2 0 6.477 0 12",
      stroke: "currentColor",
      strokeWidth: "4"
    }), /*#__PURE__*/React__default.createElement("rect", {
      fill: "currentColor",
      x: "8",
      width: "4",
      height: "4",
      rx: "8"
    })))
  },
  "drag-handle": {
    viewBox: "0 0 10 10",
    path: /*#__PURE__*/React__default.createElement("path", {
      fill: "currentColor",
      d: "M3,2 C2.44771525,2 2,1.55228475 2,1 C2,0.44771525 2.44771525,0 3,0 C3.55228475,0 4,0.44771525 4,1 C4,1.55228475 3.55228475,2 3,2 Z M3,6 C2.44771525,6 2,5.55228475 2,5 C2,4.44771525 2.44771525,4 3,4 C3.55228475,4 4,4.44771525 4,5 C4,5.55228475 3.55228475,6 3,6 Z M3,10 C2.44771525,10 2,9.55228475 2,9 C2,8.44771525 2.44771525,8 3,8 C3.55228475,8 4,8.44771525 4,9 C4,9.55228475 3.55228475,10 3,10 Z M7,2 C6.44771525,2 6,1.55228475 6,1 C6,0.44771525 6.44771525,0 7,0 C7.55228475,0 8,0.44771525 8,1 C8,1.55228475 7.55228475,2 7,2 Z M7,6 C6.44771525,6 6,5.55228475 6,5 C6,4.44771525 6.44771525,4 7,4 C7.55228475,4 8,4.44771525 8,5 C8,5.55228475 7.55228475,6 7,6 Z M7,10 C6.44771525,10 6,9.55228475 6,9 C6,8.44771525 6.44771525,8 7,8 C7.55228475,8 8,8.44771525 8,9 C8,9.55228475 7.55228475,10 7,10 Z"
    })
  },
  close: {
    path: /*#__PURE__*/React__default.createElement("path", {
      fill: "currentColor",
      d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
    })
  },
  "small-close": {
    path: /*#__PURE__*/React__default.createElement("path", {
      d: "M9.41 8l2.29-2.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71L8 6.59l-2.29-2.3a1.003 1.003 0 0 0-1.42 1.42L6.59 8 4.3 10.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71L8 9.41l2.29 2.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71L9.41 8z",
      fillRule: "evenodd",
      fill: "currentColor"
    }),
    viewBox: "0 0 16 16"
  },
  "not-allowed": {
    path: /*#__PURE__*/React__default.createElement("path", {
      fill: "currentColor",
      d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"
    })
  },
  "triangle-down": {
    path: /*#__PURE__*/React__default.createElement("path", {
      fill: "currentColor",
      d: "M21,5H3C2.621,5,2.275,5.214,2.105,5.553C1.937,5.892,1.973,6.297,2.2,6.6l9,12 c0.188,0.252,0.485,0.4,0.8,0.4s0.611-0.148,0.8-0.4l9-12c0.228-0.303,0.264-0.708,0.095-1.047C21.725,5.214,21.379,5,21,5z"
    })
  },
  "triangle-up": {
    path: /*#__PURE__*/React__default.createElement("path", {
      fill: "currentColor",
      d: "M12.8,5.4c-0.377-0.504-1.223-0.504-1.6,0l-9,12c-0.228,0.303-0.264,0.708-0.095,1.047 C2.275,18.786,2.621,19,3,19h18c0.379,0,0.725-0.214,0.895-0.553c0.169-0.339,0.133-0.744-0.095-1.047L12.8,5.4z"
    })
  },
  bell: {
    path: /*#__PURE__*/React__default.createElement("path", {
      fill: "currentColor",
      d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
    })
  },
  "info-outline": {
    path: /*#__PURE__*/React__default.createElement("g", {
      fill: "currentColor",
      stroke: "currentColor",
      strokeLinecap: "square",
      strokeWidth: "2"
    }, /*#__PURE__*/React__default.createElement("circle", {
      cx: "12",
      cy: "12",
      fill: "none",
      r: "11",
      stroke: "currentColor"
    }), /*#__PURE__*/React__default.createElement("line", {
      fill: "none",
      x1: "11.959",
      x2: "11.959",
      y1: "11",
      y2: "17"
    }), /*#__PURE__*/React__default.createElement("circle", {
      cx: "11.959",
      cy: "7",
      r: "1",
      stroke: "none"
    }))
  },
  info: {
    path: /*#__PURE__*/React__default.createElement("path", {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"
    })
  },
  question: {
    path: /*#__PURE__*/React__default.createElement("path", {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,19a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,12,19Zm1.6-6.08a1,1,0,0,0-.6.917,1,1,0,1,1-2,0,3,3,0,0,1,1.8-2.75A2,2,0,1,0,10,9.255a1,1,0,1,1-2,0,4,4,0,1,1,5.6,3.666Z"
    })
  },
  "question-outline": {
    path: /*#__PURE__*/React__default.createElement("g", {
      stroke: "currentColor",
      strokeWidth: "1.5"
    }, /*#__PURE__*/React__default.createElement("path", {
      strokeLinecap: "full",
      fill: "none",
      d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"
    }), /*#__PURE__*/React__default.createElement("path", {
      fill: "none",
      strokeLinecap: "full",
      d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"
    }), /*#__PURE__*/React__default.createElement("circle", {
      fill: "none",
      strokeMiterlimit: "10",
      cx: "12",
      cy: "12",
      r: "11.25"
    }))
  },
  warning: {
    path: /*#__PURE__*/React__default.createElement("path", {
      fill: "currentColor",
      d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
    })
  },
  "warning-2": {
    path: /*#__PURE__*/React__default.createElement("path", {
      fill: "currentColor",
      d: "M23.119,20,13.772,2.15h0a2,2,0,0,0-3.543,0L.881,20a2,2,0,0,0,1.772,2.928H21.347A2,2,0,0,0,23.119,20ZM11,8.423a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Zm1.05,11.51h-.028a1.528,1.528,0,0,1-1.522-1.47,1.476,1.476,0,0,1,1.448-1.53h.028A1.527,1.527,0,0,1,13.5,18.4,1.475,1.475,0,0,1,12.05,19.933Z"
    })
  },
  "arrow-up-down": {
    path: /*#__PURE__*/React__default.createElement("path", {
      fill: "currentColor",
      d: "M11.891 9.992a1 1 0 1 1 1.416 1.415l-4.3 4.3a1 1 0 0 1-1.414 0l-4.3-4.3A1 1 0 0 1 4.71 9.992l3.59 3.591 3.591-3.591zm0-3.984L8.3 2.417 4.709 6.008a1 1 0 0 1-1.416-1.415l4.3-4.3a1 1 0 0 1 1.414 0l4.3 4.3a1 1 0 1 1-1.416 1.415z"
    }),
    viewBox: "0 0 16 16"
  },
  check: {
    path: /*#__PURE__*/React__default.createElement("g", {
      fill: "currentColor"
    }, /*#__PURE__*/React__default.createElement("polygon", {
      points: "5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"
    })),
    viewBox: "0 0 14 14"
  },
  minus: {
    path: /*#__PURE__*/React__default.createElement("g", {
      fill: "currentColor"
    }, /*#__PURE__*/React__default.createElement("rect", {
      height: "4",
      width: "20",
      x: "2",
      y: "10"
    }))
  }
};

var colors = {
  transparent: "transparent",
  current: "currentColor",
  black: "#000",
  white: "#fff",
  whiteAlpha: {
    50: "rgba(255, 255, 255, 0.04)",
    100: "rgba(255, 255, 255, 0.06)",
    200: "rgba(255, 255, 255, 0.08)",
    300: "rgba(255, 255, 255, 0.16)",
    400: "rgba(255, 255, 255, 0.24)",
    500: "rgba(255, 255, 255, 0.36)",
    600: "rgba(255, 255, 255, 0.48)",
    700: "rgba(255, 255, 255, 0.64)",
    800: "rgba(255, 255, 255, 0.80)",
    900: "rgba(255, 255, 255, 0.92)"
  },
  blackAlpha: {
    50: "rgba(0, 0, 0, 0.04)",
    100: "rgba(0, 0, 0, 0.06)",
    200: "rgba(0, 0, 0, 0.08)",
    300: "rgba(0, 0, 0, 0.16)",
    400: "rgba(0, 0, 0, 0.24)",
    500: "rgba(0, 0, 0, 0.36)",
    600: "rgba(0, 0, 0, 0.48)",
    700: "rgba(0, 0, 0, 0.64)",
    800: "rgba(0, 0, 0, 0.80)",
    900: "rgba(0, 0, 0, 0.92)"
  },
  gray: {
    50: "#F7FAFC",
    100: "#EDF2F7",
    200: "#E2E8F0",
    300: "#CBD5E0",
    400: "#A0AEC0",
    500: "#718096",
    600: "#4A5568",
    700: "#2D3748",
    800: "#1A202C",
    900: "#171923"
  },
  red: {
    50: "#fff5f5",
    100: "#fed7d7",
    200: "#feb2b2",
    300: "#fc8181",
    400: "#f56565",
    500: "#e53e3e",
    600: "#c53030",
    700: "#9b2c2c",
    800: "#822727",
    900: "#63171b"
  },
  orange: {
    50: "#FFFAF0",
    100: "#FEEBC8",
    200: "#FBD38D",
    300: "#F6AD55",
    400: "#ED8936",
    500: "#DD6B20",
    600: "#C05621",
    700: "#9C4221",
    800: "#7B341E",
    900: "#652B19"
  },
  yellow: {
    50: "#fffff0",
    100: "#fefcbf",
    200: "#faf089",
    300: "#f6e05e",
    400: "#ecc94b",
    500: "#d69e2e",
    600: "#b7791f",
    700: "#975a16",
    800: "#744210",
    900: "#5F370E"
  },
  green: {
    50: "#f0fff4",
    100: "#c6f6d5",
    200: "#9ae6b4",
    300: "#68d391",
    400: "#48bb78",
    500: "#38a169",
    600: "#2f855a",
    700: "#276749",
    800: "#22543d",
    900: "#1C4532"
  },
  teal: {
    50: "#E6FFFA",
    100: "#B2F5EA",
    200: "#81E6D9",
    300: "#4FD1C5",
    400: "#38B2AC",
    500: "#319795",
    600: "#2C7A7B",
    700: "#285E61",
    800: "#234E52",
    900: "#1D4044"
  },
  blue: {
    50: "#ebf8ff",
    100: "#ceedff",
    200: "#90cdf4",
    300: "#63b3ed",
    400: "#4299e1",
    500: "#3182ce",
    600: "#2a69ac",
    700: "#1e4e8c",
    800: "#153e75",
    900: "#1a365d"
  },
  cyan: {
    50: "#EDFDFD",
    100: "#C4F1F9",
    200: "#9DECF9",
    300: "#76E4F7",
    400: "#0BC5EA",
    500: "#00B5D8",
    600: "#00A3C4",
    700: "#0987A0",
    800: "#086F83",
    900: "#065666"
  },
  purple: {
    50: "#faf5ff",
    100: "#e9d8fd",
    200: "#d6bcfa",
    300: "#b794f4",
    400: "#9f7aea",
    500: "#805ad5",
    600: "#6b46c1",
    700: "#553c9a",
    800: "#44337a",
    900: "#322659"
  },
  pink: {
    50: "#fff5f7",
    100: "#fed7e2",
    200: "#fbb6ce",
    300: "#f687b3",
    400: "#ed64a6",
    500: "#d53f8c",
    600: "#b83280",
    700: "#97266d",
    800: "#702459",
    900: "#521B41"
  },
  linkedin: {
    50: "#E8F4F9",
    100: "#CFEDFB",
    200: "#9BDAF3",
    300: "#68C7EC",
    400: "#34B3E4",
    500: "#00A0DC",
    600: "#008CC9",
    700: "#0077B5",
    800: "#005E93",
    900: "#004471"
  },
  facebook: {
    50: "#E8F4F9",
    100: "#D9DEE9",
    200: "#B7C2DA",
    300: "#6482C0",
    400: "#4267B2",
    500: "#385898",
    600: "#314E89",
    700: "#29487D",
    800: "#223B67",
    900: "#1E355B"
  },
  messenger: {
    50: "#D0E6FF",
    100: "#B9DAFF",
    200: "#A2CDFF",
    300: "#7AB8FF",
    400: "#2E90FF",
    500: "#0078FF",
    600: "#0063D1",
    700: "#0052AC",
    800: "#003C7E",
    900: "#002C5C"
  },
  whatsapp: {
    50: "#e2f7f4",
    100: "#c3f0e9",
    200: "#a0e7dc",
    300: "#76dccd",
    400: "#43cfba",
    500: "#00BFA5",
    600: "#00ac92",
    700: "#009780",
    800: "#007d6a",
    900: "#005a4c"
  },
  twitter: {
    50: "#e5f4fd",
    100: "#c8e9fb",
    200: "#a8dcfa",
    300: "#83cdf7",
    400: "#57bbf5",
    500: "#1DA1F2",
    600: "#1a94da",
    700: "#1681bf",
    800: "#136b9e",
    900: "#0d4d71"
  },
  telegram: {
    50: "#e3f2f9",
    100: "#c5e4f3",
    200: "#a2d4ec",
    300: "#7ac1e4",
    400: "#47a9da",
    500: "#0088CC",
    600: "#007ab8",
    700: "#006ba1",
    800: "#005885",
    900: "#003f5e"
  }
};

var baseSizes = {
  px: "1px",
  "0": "0",
  "1": "0.25rem",
  "2": "0.5rem",
  "3": "0.75rem",
  "4": "1rem",
  "5": "1.25rem",
  "6": "1.5rem",
  "8": "2rem",
  "10": "2.5rem",
  "12": "3rem",
  "16": "4rem",
  "20": "5rem",
  "24": "6rem",
  "32": "8rem",
  "40": "10rem",
  "48": "12rem",
  "56": "14rem",
  "64": "16rem"
};
var largeSizes = {
  full: "100%",
  "3xs": "14rem",
  "2xs": "16rem",
  xs: "20rem",
  sm: "24rem",
  md: "28rem",
  lg: "32rem",
  xl: "36rem",
  "2xl": "42rem",
  "3xl": "48rem",
  "4xl": "56rem",
  "5xl": "64rem",
  "6xl": "72rem"
};
var containers = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px"
};

var sizes = _objectSpread2({}, baseSizes, {}, largeSizes, {
  containers: containers
});

var typography$1 = {
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em"
  },
  lineHeights: {
    normal: "normal",
    none: "1",
    shorter: "1.25",
    "short": "1.375",
    base: "1.5",
    tall: "1.625",
    taller: "2"
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },
  fonts: {
    heading: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"",
    body: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"",
    mono: "SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace"
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "4rem"
  }
};

var space$1 = baseSizes;
var shadows = {
  sm: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
  inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
  none: "none"
};
var breakpoints = ["30em", "48em", "62em", "80em"]; // aliases

breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];
var zIndices = {
  hide: -1,
  auto: "auto",
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800
};
var radii = {
  none: "0",
  sm: "0.125rem",
  md: "0.25rem",
  lg: "0.5rem",
  full: "9999px"
};
var opacity = {
  "0": "0",
  "20%": "0.2",
  "40%": "0.4",
  "60%": "0.6",
  "80%": "0.8",
  "100%": "1"
};
var borders = {
  none: 0,
  "1px": "1px solid",
  "2px": "2px solid",
  "4px": "4px solid"
}; // const borderWidths = {
//   xl: "2rem",
//   lg: "1rem",
//   md: "0.5rem",
//   sm: "0.25rem",
//   xs: "0.125rem",
//   "2xs": "0.0625rem",
//   none: 0
// };

var theme = _objectSpread2({
  breakpoints: breakpoints,
  zIndices: zIndices,
  radii: radii,
  opacity: opacity,
  borders: borders,
  colors: colors
}, typography$1, {
  sizes: sizes,
  shadows: shadows,
  space: space$1,
  icons: iconPaths
});

/** @jsx jsx */

var ThemeProvider = function ThemeProvider(_ref) {
  var theme = _ref.theme,
      children = _ref.children;
  return core.jsx(emotionTheming.ThemeProvider, {
    theme: theme
  }, children);
};

ThemeProvider.defaultProps = {
  theme: theme
};

var useTheme = function useTheme() {
  var theme = React.useContext(core.ThemeContext);

  if (theme === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return theme;
};

var assignRef = function assignRef(ref, value) {
  if (ref == null) return;

  if (typeof ref === "function") {
    ref(value);
  } else {
    try {
      ref.current = value;
    } catch (error) {
      throw new Error("Cannot assign value \"".concat(value, "\" to ref \"").concat(ref, "\""));
    }
  }
};
var focusableElList = ["a[href]", "area[href]", "button:not([disabled])", "embed", "iframe", "input:not([disabled])", "object", "select:not([disabled])", "textarea:not([disabled])", "*[tabindex]:not([aria-disabled])", "*[contenteditable]"];
var focusableElSelector = focusableElList.join();
function getFocusables(element) {
  var keyboardOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var focusableEls = Array.from(element.querySelectorAll(focusableElSelector)); // filter out elements with display: none

  focusableEls = focusableEls.filter(function (focusableEl) {
    return window.getComputedStyle(focusableEl).display !== "none";
  });

  if (keyboardOnly === true) {
    focusableEls = focusableEls.filter(function (focusableEl) {
      return focusableEl.getAttribute("tabindex") !== "-1";
    });
  }

  return focusableEls;
}
function setRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}
function useForkRef(refA, refB) {
  return React.useMemo(function () {
    if (refA == null && refB == null) {
      return null;
    }

    return function (refValue) {
      setRef(refA, refValue);
      setRef(refB, refValue);
    };
  }, [refA, refB]);
}
function createChainedFunction() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  return funcs.reduce(function (acc, func) {
    if (func == null) {
      return acc;
    }

    return function chainedFunction() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      acc.apply(this, args);
      func.apply(this, args);
    };
  }, function () {});
}
var useEnhancedEffect = typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;
var wrapEvent = function wrapEvent(theirHandler, ourHandler) {
  return function (event) {
    if (theirHandler) {
      theirHandler(event);
    }

    if (!event.defaultPrevented) {
      return ourHandler(event);
    }
  };
};
function useVariantColorWarning(label, variantColor) {
  var theme = useTheme();

  if (process.env.NODE_ENV !== "production") {
    var variantColorIsDefined = variantColor != null;

    if (variantColorIsDefined) {
      var variantColorExists = (variantColor in theme.colors); // If variant color exists in theme object

      if (!variantColorExists) {
        console.warn("You passed an invalid variantColor to the ".concat(label, " Component. Variant color values must be a color key in the theme object that has '100' - '900' color values. Check http://chakra-ui.com/theme#colors to see possible values"));
      } // if variant color exists and is an object
      // TODO: Check for the 100 - 900 keys


      if (variantColorExists) {
        var colorObj = theme.colors[variantColor];
        var variantColorIsObject = _typeof(colorObj) === "object" && Object.keys(colorObj).length > 0;

        if (!variantColorIsObject) {
          console.warn("".concat(label, ": The variantColor passed exists in the theme object but is not valid. For a color to be a valid variantColor, it must be an object that has '100' - '900' color values. Use a tool like: \n        https://smart-swatch.netlify.com/ to generate color values quickly"));
        }
      }
    }
  }
}
function cleanChildren(children) {
  return React.Children.toArray(children).filter(function (child) {
    return React.isValidElement(child);
  });
}

var Accordion = function Accordion(_ref) {
  var allowMultiple = _ref.allowMultiple,
      allowToggle = _ref.allowToggle,
      index = _ref.index,
      defaultIndex = _ref.defaultIndex,
      _onChange = _ref.onChange,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["allowMultiple", "allowToggle", "index", "defaultIndex", "onChange", "children"]);

  var initializeState = function initializeState() {
    if (allowMultiple) {
      return defaultIndex || [];
    } else {
      return defaultIndex || 0;
    }
  };

  var getExpandCondition = function getExpandCondition(index, itemIndex) {
    if (Array.isArray(index)) {
      return index.includes(itemIndex);
    }

    return index === itemIndex;
  };

  var _useState = React.useState(initializeState),
      _useState2 = _slicedToArray(_useState, 2),
      expandedIndex = _useState2[0],
      setExpandedIndex = _useState2[1];

  var _useRef = React.useRef(index != null),
      isControlled = _useRef.current;

  var _index = isControlled ? index : expandedIndex;

  var validChildren = cleanChildren(children);
  var clones = validChildren.map(function (child, childIndex) {
    return React.cloneElement(child, {
      isOpen: getExpandCondition(_index, childIndex),
      onChange: function onChange(isExpanded) {
        if (allowMultiple) {
          if (isExpanded) {
            var newIndexes = [].concat(_toConsumableArray(_index), [childIndex]);
            !isControlled && setExpandedIndex(newIndexes);
            _onChange && _onChange(newIndexes);
          } else {
            var _newIndexes = _index.filter(function (itemIndex) {
              return itemIndex !== childIndex;
            });

            !isControlled && setExpandedIndex(_newIndexes);
            _onChange && _onChange(_newIndexes);
          }
        } else {
          if (isExpanded) {
            !isControlled && setExpandedIndex(childIndex);
            _onChange && _onChange(childIndex);
          } else {
            if (allowToggle) {
              !isControlled && setExpandedIndex(null);
              _onChange && _onChange(null);
            }
          }
        }
      }
    });
  });
  return core.jsx(Box, _extends({
    "data-accordion": ""
  }, rest), clones);
};

var AccordionItemContext = React.createContext();

var useAccordionItemContext = function useAccordionItemContext() {
  return React.useContext(AccordionItemContext);
};

var AccordionItem = React.forwardRef(function (_ref2, ref) {
  var isOpen = _ref2.isOpen,
      defaultIsOpen = _ref2.defaultIsOpen,
      id = _ref2.id,
      isDisabled = _ref2.isDisabled,
      onChange = _ref2.onChange,
      children = _ref2.children,
      rest = _objectWithoutProperties(_ref2, ["isOpen", "defaultIsOpen", "id", "isDisabled", "onChange", "children"]);

  var _useState3 = React.useState(defaultIsOpen || false),
      _useState4 = _slicedToArray(_useState3, 2),
      isExpanded = _useState4[0],
      setIsExpanded = _useState4[1];

  var _useRef2 = React.useRef(isOpen != null),
      isControlled = _useRef2.current;

  var _isExpanded = isControlled ? isOpen : isExpanded;

  var onToggle = function onToggle() {
    onChange && onChange(!_isExpanded);
    !isControlled && setIsExpanded(!isExpanded);
  };

  var uuid = useId();
  var uniqueId = id || uuid;
  var headerId = "accordion-header-".concat(uniqueId);
  var panelId = "accordion-panel-".concat(uniqueId);
  return core.jsx(AccordionItemContext.Provider, {
    value: {
      isExpanded: _isExpanded,
      isDisabled: isDisabled,
      headerId: headerId,
      panelId: panelId,
      onToggle: onToggle
    }
  }, core.jsx(PseudoBox, _extends({
    borderTopWidth: "1px",
    _last: {
      borderBottomWidth: "1px"
    },
    "data-accordion-item": "",
    ref: ref
  }, rest), typeof children === "function" ? children({
    isExpanded: _isExpanded,
    isDisabled: isDisabled
  }) : children));
});
AccordionItem.displayName = "AccordionItem"; /////////////////////////////////////////////////////////////

var AccordionHeader = React.forwardRef(function (_ref3, ref) {
  var _onClick = _ref3.onClick,
      props = _objectWithoutProperties(_ref3, ["onClick"]);

  var _useAccordionItemCont = useAccordionItemContext(),
      isExpanded = _useAccordionItemCont.isExpanded,
      panelId = _useAccordionItemCont.panelId,
      headerId = _useAccordionItemCont.headerId,
      isDisabled = _useAccordionItemCont.isDisabled,
      onToggle = _useAccordionItemCont.onToggle;

  return core.jsx(PseudoBox, _extends({
    ref: ref,
    display: "flex",
    alignItems: "center",
    width: "100%",
    transition: "all 0.2s",
    _focus: {
      boxShadow: "outline"
    },
    _hover: {
      bg: "blackAlpha.50"
    },
    _disabled: {
      opacity: "0.4",
      cursor: "not-allowed"
    },
    as: "button",
    type: "button",
    outline: "0",
    disabled: isDisabled,
    "aria-disabled": isDisabled,
    "aria-expanded": isExpanded,
    onClick: function onClick(event) {
      onToggle();

      if (_onClick) {
        _onClick(event);
      }
    },
    id: headerId,
    "aria-controls": panelId,
    px: 4,
    py: 2
  }, props));
});
AccordionHeader.displayName = "AccordionHeader"; /////////////////////////////////////////////////////////////

var AccordionPanel = React.forwardRef(function (props, ref) {
  var _useAccordionItemCont2 = useAccordionItemContext(),
      isExpanded = _useAccordionItemCont2.isExpanded,
      panelId = _useAccordionItemCont2.panelId,
      headerId = _useAccordionItemCont2.headerId;

  return core.jsx(Collapse, _extends({
    ref: ref,
    "data-accordion-panel": "",
    role: "region",
    id: panelId,
    "aria-labelledby": headerId,
    "aria-hidden": !isExpanded,
    isOpen: isExpanded,
    pt: 2,
    px: 4,
    pb: 5
  }, props));
});
AccordionPanel.displayName = "AccordionPanel"; /////////////////////////////////////////////////////////////

var AccordionIcon = function AccordionIcon(props) {
  var _useAccordionItemCont3 = useAccordionItemContext(),
      isExpanded = _useAccordionItemCont3.isExpanded,
      isDisabled = _useAccordionItemCont3.isDisabled;

  return core.jsx(Icon, _extends({
    "aria-hidden": true,
    focusable: "false",
    size: "1.25em",
    name: "chevron-down",
    opacity: isDisabled ? 0.4 : 1,
    transform: isExpanded ? "rotate(-180deg)" : null,
    transition: "transform 0.2s",
    transformOrigin: "center"
  }, props));
};

var colorName = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};

var isArrayish = function isArrayish(obj) {
	if (!obj || typeof obj === 'string') {
		return false;
	}

	return obj instanceof Array || Array.isArray(obj) ||
		(obj.length >= 0 && (obj.splice instanceof Function ||
			(Object.getOwnPropertyDescriptor(obj, (obj.length - 1)) && obj.constructor.name !== 'String')));
};

var simpleSwizzle = createCommonjsModule(function (module) {



var concat = Array.prototype.concat;
var slice = Array.prototype.slice;

var swizzle = module.exports = function swizzle(args) {
	var results = [];

	for (var i = 0, len = args.length; i < len; i++) {
		var arg = args[i];

		if (isArrayish(arg)) {
			// http://jsperf.com/javascript-array-concat-vs-push/98
			results = concat.call(results, slice.call(arg));
		} else {
			results.push(arg);
		}
	}

	return results;
};

swizzle.wrap = function (fn) {
	return function () {
		return fn(swizzle(arguments));
	};
};
});

var colorString = createCommonjsModule(function (module) {
/* MIT license */



var reverseNames = {};

// create a list of reverse color names
for (var name in colorName) {
	if (colorName.hasOwnProperty(name)) {
		reverseNames[colorName[name]] = name;
	}
}

var cs = module.exports = {
	to: {},
	get: {}
};

cs.get = function (string) {
	var prefix = string.substring(0, 3).toLowerCase();
	var val;
	var model;
	switch (prefix) {
		case 'hsl':
			val = cs.get.hsl(string);
			model = 'hsl';
			break;
		case 'hwb':
			val = cs.get.hwb(string);
			model = 'hwb';
			break;
		default:
			val = cs.get.rgb(string);
			model = 'rgb';
			break;
	}

	if (!val) {
		return null;
	}

	return {model: model, value: val};
};

cs.get.rgb = function (string) {
	if (!string) {
		return null;
	}

	var abbr = /^#([a-f0-9]{3,4})$/i;
	var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
	var rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var keyword = /(\D+)/;

	var rgb = [0, 0, 0, 1];
	var match;
	var i;
	var hexAlpha;

	if (match = string.match(hex)) {
		hexAlpha = match[2];
		match = match[1];

		for (i = 0; i < 3; i++) {
			// https://jsperf.com/slice-vs-substr-vs-substring-methods-long-string/19
			var i2 = i * 2;
			rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
		}

		if (hexAlpha) {
			rgb[3] = Math.round((parseInt(hexAlpha, 16) / 255) * 100) / 100;
		}
	} else if (match = string.match(abbr)) {
		match = match[1];
		hexAlpha = match[3];

		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i] + match[i], 16);
		}

		if (hexAlpha) {
			rgb[3] = Math.round((parseInt(hexAlpha + hexAlpha, 16) / 255) * 100) / 100;
		}
	} else if (match = string.match(rgba)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i + 1], 0);
		}

		if (match[4]) {
			rgb[3] = parseFloat(match[4]);
		}
	} else if (match = string.match(per)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
		}

		if (match[4]) {
			rgb[3] = parseFloat(match[4]);
		}
	} else if (match = string.match(keyword)) {
		if (match[1] === 'transparent') {
			return [0, 0, 0, 0];
		}

		rgb = colorName[match[1]];

		if (!rgb) {
			return null;
		}

		rgb[3] = 1;

		return rgb;
	} else {
		return null;
	}

	for (i = 0; i < 3; i++) {
		rgb[i] = clamp(rgb[i], 0, 255);
	}
	rgb[3] = clamp(rgb[3], 0, 1);

	return rgb;
};

cs.get.hsl = function (string) {
	if (!string) {
		return null;
	}

	var hsl = /^hsla?\(\s*([+-]?(?:\d*\.)?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var match = string.match(hsl);

	if (match) {
		var alpha = parseFloat(match[4]);
		var h = (parseFloat(match[1]) + 360) % 360;
		var s = clamp(parseFloat(match[2]), 0, 100);
		var l = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);

		return [h, s, l, a];
	}

	return null;
};

cs.get.hwb = function (string) {
	if (!string) {
		return null;
	}

	var hwb = /^hwb\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var match = string.match(hwb);

	if (match) {
		var alpha = parseFloat(match[4]);
		var h = ((parseFloat(match[1]) % 360) + 360) % 360;
		var w = clamp(parseFloat(match[2]), 0, 100);
		var b = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
		return [h, w, b, a];
	}

	return null;
};

cs.to.hex = function () {
	var rgba = simpleSwizzle(arguments);

	return (
		'#' +
		hexDouble(rgba[0]) +
		hexDouble(rgba[1]) +
		hexDouble(rgba[2]) +
		(rgba[3] < 1
			? (hexDouble(Math.round(rgba[3] * 255)))
			: '')
	);
};

cs.to.rgb = function () {
	var rgba = simpleSwizzle(arguments);

	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ')'
		: 'rgba(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ', ' + rgba[3] + ')';
};

cs.to.rgb.percent = function () {
	var rgba = simpleSwizzle(arguments);

	var r = Math.round(rgba[0] / 255 * 100);
	var g = Math.round(rgba[1] / 255 * 100);
	var b = Math.round(rgba[2] / 255 * 100);

	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + r + '%, ' + g + '%, ' + b + '%)'
		: 'rgba(' + r + '%, ' + g + '%, ' + b + '%, ' + rgba[3] + ')';
};

cs.to.hsl = function () {
	var hsla = simpleSwizzle(arguments);
	return hsla.length < 4 || hsla[3] === 1
		? 'hsl(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%)'
		: 'hsla(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%, ' + hsla[3] + ')';
};

// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
// (hwb have alpha optional & 1 is default value)
cs.to.hwb = function () {
	var hwba = simpleSwizzle(arguments);

	var a = '';
	if (hwba.length >= 4 && hwba[3] !== 1) {
		a = ', ' + hwba[3];
	}

	return 'hwb(' + hwba[0] + ', ' + hwba[1] + '%, ' + hwba[2] + '%' + a + ')';
};

cs.to.keyword = function (rgb) {
	return reverseNames[rgb.slice(0, 3)];
};

// helpers
function clamp(num, min, max) {
	return Math.min(Math.max(min, num), max);
}

function hexDouble(num) {
	var str = num.toString(16).toUpperCase();
	return (str.length < 2) ? '0' + str : str;
}
});
var colorString_1 = colorString.to;
var colorString_2 = colorString.get;

var colorName$1 = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};

var conversions = createCommonjsModule(function (module) {
/* MIT license */


// NOTE: conversions should only return primitive values (i.e. arrays, or
//       values that give correct `typeof` results).
//       do not use box values types (i.e. Number(), String(), etc.)

var reverseKeywords = {};
for (var key in colorName$1) {
	if (colorName$1.hasOwnProperty(key)) {
		reverseKeywords[colorName$1[key]] = key;
	}
}

var convert = module.exports = {
	rgb: {channels: 3, labels: 'rgb'},
	hsl: {channels: 3, labels: 'hsl'},
	hsv: {channels: 3, labels: 'hsv'},
	hwb: {channels: 3, labels: 'hwb'},
	cmyk: {channels: 4, labels: 'cmyk'},
	xyz: {channels: 3, labels: 'xyz'},
	lab: {channels: 3, labels: 'lab'},
	lch: {channels: 3, labels: 'lch'},
	hex: {channels: 1, labels: ['hex']},
	keyword: {channels: 1, labels: ['keyword']},
	ansi16: {channels: 1, labels: ['ansi16']},
	ansi256: {channels: 1, labels: ['ansi256']},
	hcg: {channels: 3, labels: ['h', 'c', 'g']},
	apple: {channels: 3, labels: ['r16', 'g16', 'b16']},
	gray: {channels: 1, labels: ['gray']}
};

// hide .channels and .labels properties
for (var model in convert) {
	if (convert.hasOwnProperty(model)) {
		if (!('channels' in convert[model])) {
			throw new Error('missing channels property: ' + model);
		}

		if (!('labels' in convert[model])) {
			throw new Error('missing channel labels property: ' + model);
		}

		if (convert[model].labels.length !== convert[model].channels) {
			throw new Error('channel and label counts mismatch: ' + model);
		}

		var channels = convert[model].channels;
		var labels = convert[model].labels;
		delete convert[model].channels;
		delete convert[model].labels;
		Object.defineProperty(convert[model], 'channels', {value: channels});
		Object.defineProperty(convert[model], 'labels', {value: labels});
	}
}

convert.rgb.hsl = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var min = Math.min(r, g, b);
	var max = Math.max(r, g, b);
	var delta = max - min;
	var h;
	var s;
	var l;

	if (max === min) {
		h = 0;
	} else if (r === max) {
		h = (g - b) / delta;
	} else if (g === max) {
		h = 2 + (b - r) / delta;
	} else if (b === max) {
		h = 4 + (r - g) / delta;
	}

	h = Math.min(h * 60, 360);

	if (h < 0) {
		h += 360;
	}

	l = (min + max) / 2;

	if (max === min) {
		s = 0;
	} else if (l <= 0.5) {
		s = delta / (max + min);
	} else {
		s = delta / (2 - max - min);
	}

	return [h, s * 100, l * 100];
};

convert.rgb.hsv = function (rgb) {
	var rdif;
	var gdif;
	var bdif;
	var h;
	var s;

	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var v = Math.max(r, g, b);
	var diff = v - Math.min(r, g, b);
	var diffc = function (c) {
		return (v - c) / 6 / diff + 1 / 2;
	};

	if (diff === 0) {
		h = s = 0;
	} else {
		s = diff / v;
		rdif = diffc(r);
		gdif = diffc(g);
		bdif = diffc(b);

		if (r === v) {
			h = bdif - gdif;
		} else if (g === v) {
			h = (1 / 3) + rdif - bdif;
		} else if (b === v) {
			h = (2 / 3) + gdif - rdif;
		}
		if (h < 0) {
			h += 1;
		} else if (h > 1) {
			h -= 1;
		}
	}

	return [
		h * 360,
		s * 100,
		v * 100
	];
};

convert.rgb.hwb = function (rgb) {
	var r = rgb[0];
	var g = rgb[1];
	var b = rgb[2];
	var h = convert.rgb.hsl(rgb)[0];
	var w = 1 / 255 * Math.min(r, Math.min(g, b));

	b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));

	return [h, w * 100, b * 100];
};

convert.rgb.cmyk = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var c;
	var m;
	var y;
	var k;

	k = Math.min(1 - r, 1 - g, 1 - b);
	c = (1 - r - k) / (1 - k) || 0;
	m = (1 - g - k) / (1 - k) || 0;
	y = (1 - b - k) / (1 - k) || 0;

	return [c * 100, m * 100, y * 100, k * 100];
};

/**
 * See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
 * */
function comparativeDistance(x, y) {
	return (
		Math.pow(x[0] - y[0], 2) +
		Math.pow(x[1] - y[1], 2) +
		Math.pow(x[2] - y[2], 2)
	);
}

convert.rgb.keyword = function (rgb) {
	var reversed = reverseKeywords[rgb];
	if (reversed) {
		return reversed;
	}

	var currentClosestDistance = Infinity;
	var currentClosestKeyword;

	for (var keyword in colorName$1) {
		if (colorName$1.hasOwnProperty(keyword)) {
			var value = colorName$1[keyword];

			// Compute comparative distance
			var distance = comparativeDistance(rgb, value);

			// Check if its less, if so set as closest
			if (distance < currentClosestDistance) {
				currentClosestDistance = distance;
				currentClosestKeyword = keyword;
			}
		}
	}

	return currentClosestKeyword;
};

convert.keyword.rgb = function (keyword) {
	return colorName$1[keyword];
};

convert.rgb.xyz = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;

	// assume sRGB
	r = r > 0.04045 ? Math.pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
	g = g > 0.04045 ? Math.pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
	b = b > 0.04045 ? Math.pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);

	var x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
	var y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
	var z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

	return [x * 100, y * 100, z * 100];
};

convert.rgb.lab = function (rgb) {
	var xyz = convert.rgb.xyz(rgb);
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};

convert.hsl.rgb = function (hsl) {
	var h = hsl[0] / 360;
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var t1;
	var t2;
	var t3;
	var rgb;
	var val;

	if (s === 0) {
		val = l * 255;
		return [val, val, val];
	}

	if (l < 0.5) {
		t2 = l * (1 + s);
	} else {
		t2 = l + s - l * s;
	}

	t1 = 2 * l - t2;

	rgb = [0, 0, 0];
	for (var i = 0; i < 3; i++) {
		t3 = h + 1 / 3 * -(i - 1);
		if (t3 < 0) {
			t3++;
		}
		if (t3 > 1) {
			t3--;
		}

		if (6 * t3 < 1) {
			val = t1 + (t2 - t1) * 6 * t3;
		} else if (2 * t3 < 1) {
			val = t2;
		} else if (3 * t3 < 2) {
			val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
		} else {
			val = t1;
		}

		rgb[i] = val * 255;
	}

	return rgb;
};

convert.hsl.hsv = function (hsl) {
	var h = hsl[0];
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var smin = s;
	var lmin = Math.max(l, 0.01);
	var sv;
	var v;

	l *= 2;
	s *= (l <= 1) ? l : 2 - l;
	smin *= lmin <= 1 ? lmin : 2 - lmin;
	v = (l + s) / 2;
	sv = l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s);

	return [h, sv * 100, v * 100];
};

convert.hsv.rgb = function (hsv) {
	var h = hsv[0] / 60;
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var hi = Math.floor(h) % 6;

	var f = h - Math.floor(h);
	var p = 255 * v * (1 - s);
	var q = 255 * v * (1 - (s * f));
	var t = 255 * v * (1 - (s * (1 - f)));
	v *= 255;

	switch (hi) {
		case 0:
			return [v, t, p];
		case 1:
			return [q, v, p];
		case 2:
			return [p, v, t];
		case 3:
			return [p, q, v];
		case 4:
			return [t, p, v];
		case 5:
			return [v, p, q];
	}
};

convert.hsv.hsl = function (hsv) {
	var h = hsv[0];
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var vmin = Math.max(v, 0.01);
	var lmin;
	var sl;
	var l;

	l = (2 - s) * v;
	lmin = (2 - s) * vmin;
	sl = s * vmin;
	sl /= (lmin <= 1) ? lmin : 2 - lmin;
	sl = sl || 0;
	l /= 2;

	return [h, sl * 100, l * 100];
};

// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
convert.hwb.rgb = function (hwb) {
	var h = hwb[0] / 360;
	var wh = hwb[1] / 100;
	var bl = hwb[2] / 100;
	var ratio = wh + bl;
	var i;
	var v;
	var f;
	var n;

	// wh + bl cant be > 1
	if (ratio > 1) {
		wh /= ratio;
		bl /= ratio;
	}

	i = Math.floor(6 * h);
	v = 1 - bl;
	f = 6 * h - i;

	if ((i & 0x01) !== 0) {
		f = 1 - f;
	}

	n = wh + f * (v - wh); // linear interpolation

	var r;
	var g;
	var b;
	switch (i) {
		default:
		case 6:
		case 0: r = v; g = n; b = wh; break;
		case 1: r = n; g = v; b = wh; break;
		case 2: r = wh; g = v; b = n; break;
		case 3: r = wh; g = n; b = v; break;
		case 4: r = n; g = wh; b = v; break;
		case 5: r = v; g = wh; b = n; break;
	}

	return [r * 255, g * 255, b * 255];
};

convert.cmyk.rgb = function (cmyk) {
	var c = cmyk[0] / 100;
	var m = cmyk[1] / 100;
	var y = cmyk[2] / 100;
	var k = cmyk[3] / 100;
	var r;
	var g;
	var b;

	r = 1 - Math.min(1, c * (1 - k) + k);
	g = 1 - Math.min(1, m * (1 - k) + k);
	b = 1 - Math.min(1, y * (1 - k) + k);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.rgb = function (xyz) {
	var x = xyz[0] / 100;
	var y = xyz[1] / 100;
	var z = xyz[2] / 100;
	var r;
	var g;
	var b;

	r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
	g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
	b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);

	// assume sRGB
	r = r > 0.0031308
		? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055)
		: r * 12.92;

	g = g > 0.0031308
		? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055)
		: g * 12.92;

	b = b > 0.0031308
		? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055)
		: b * 12.92;

	r = Math.min(Math.max(0, r), 1);
	g = Math.min(Math.max(0, g), 1);
	b = Math.min(Math.max(0, b), 1);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.lab = function (xyz) {
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};

convert.lab.xyz = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var x;
	var y;
	var z;

	y = (l + 16) / 116;
	x = a / 500 + y;
	z = y - b / 200;

	var y2 = Math.pow(y, 3);
	var x2 = Math.pow(x, 3);
	var z2 = Math.pow(z, 3);
	y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
	x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
	z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;

	x *= 95.047;
	y *= 100;
	z *= 108.883;

	return [x, y, z];
};

convert.lab.lch = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var hr;
	var h;
	var c;

	hr = Math.atan2(b, a);
	h = hr * 360 / 2 / Math.PI;

	if (h < 0) {
		h += 360;
	}

	c = Math.sqrt(a * a + b * b);

	return [l, c, h];
};

convert.lch.lab = function (lch) {
	var l = lch[0];
	var c = lch[1];
	var h = lch[2];
	var a;
	var b;
	var hr;

	hr = h / 360 * 2 * Math.PI;
	a = c * Math.cos(hr);
	b = c * Math.sin(hr);

	return [l, a, b];
};

convert.rgb.ansi16 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];
	var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2]; // hsv -> ansi16 optimization

	value = Math.round(value / 50);

	if (value === 0) {
		return 30;
	}

	var ansi = 30
		+ ((Math.round(b / 255) << 2)
		| (Math.round(g / 255) << 1)
		| Math.round(r / 255));

	if (value === 2) {
		ansi += 60;
	}

	return ansi;
};

convert.hsv.ansi16 = function (args) {
	// optimization here; we already know the value and don't need to get
	// it converted for us.
	return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
};

convert.rgb.ansi256 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];

	// we use the extended greyscale palette here, with the exception of
	// black and white. normal palette only has 4 greyscale shades.
	if (r === g && g === b) {
		if (r < 8) {
			return 16;
		}

		if (r > 248) {
			return 231;
		}

		return Math.round(((r - 8) / 247) * 24) + 232;
	}

	var ansi = 16
		+ (36 * Math.round(r / 255 * 5))
		+ (6 * Math.round(g / 255 * 5))
		+ Math.round(b / 255 * 5);

	return ansi;
};

convert.ansi16.rgb = function (args) {
	var color = args % 10;

	// handle greyscale
	if (color === 0 || color === 7) {
		if (args > 50) {
			color += 3.5;
		}

		color = color / 10.5 * 255;

		return [color, color, color];
	}

	var mult = (~~(args > 50) + 1) * 0.5;
	var r = ((color & 1) * mult) * 255;
	var g = (((color >> 1) & 1) * mult) * 255;
	var b = (((color >> 2) & 1) * mult) * 255;

	return [r, g, b];
};

convert.ansi256.rgb = function (args) {
	// handle greyscale
	if (args >= 232) {
		var c = (args - 232) * 10 + 8;
		return [c, c, c];
	}

	args -= 16;

	var rem;
	var r = Math.floor(args / 36) / 5 * 255;
	var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
	var b = (rem % 6) / 5 * 255;

	return [r, g, b];
};

convert.rgb.hex = function (args) {
	var integer = ((Math.round(args[0]) & 0xFF) << 16)
		+ ((Math.round(args[1]) & 0xFF) << 8)
		+ (Math.round(args[2]) & 0xFF);

	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.hex.rgb = function (args) {
	var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
	if (!match) {
		return [0, 0, 0];
	}

	var colorString = match[0];

	if (match[0].length === 3) {
		colorString = colorString.split('').map(function (char) {
			return char + char;
		}).join('');
	}

	var integer = parseInt(colorString, 16);
	var r = (integer >> 16) & 0xFF;
	var g = (integer >> 8) & 0xFF;
	var b = integer & 0xFF;

	return [r, g, b];
};

convert.rgb.hcg = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var max = Math.max(Math.max(r, g), b);
	var min = Math.min(Math.min(r, g), b);
	var chroma = (max - min);
	var grayscale;
	var hue;

	if (chroma < 1) {
		grayscale = min / (1 - chroma);
	} else {
		grayscale = 0;
	}

	if (chroma <= 0) {
		hue = 0;
	} else
	if (max === r) {
		hue = ((g - b) / chroma) % 6;
	} else
	if (max === g) {
		hue = 2 + (b - r) / chroma;
	} else {
		hue = 4 + (r - g) / chroma + 4;
	}

	hue /= 6;
	hue %= 1;

	return [hue * 360, chroma * 100, grayscale * 100];
};

convert.hsl.hcg = function (hsl) {
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var c = 1;
	var f = 0;

	if (l < 0.5) {
		c = 2.0 * s * l;
	} else {
		c = 2.0 * s * (1.0 - l);
	}

	if (c < 1.0) {
		f = (l - 0.5 * c) / (1.0 - c);
	}

	return [hsl[0], c * 100, f * 100];
};

convert.hsv.hcg = function (hsv) {
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;

	var c = s * v;
	var f = 0;

	if (c < 1.0) {
		f = (v - c) / (1 - c);
	}

	return [hsv[0], c * 100, f * 100];
};

convert.hcg.rgb = function (hcg) {
	var h = hcg[0] / 360;
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	if (c === 0.0) {
		return [g * 255, g * 255, g * 255];
	}

	var pure = [0, 0, 0];
	var hi = (h % 1) * 6;
	var v = hi % 1;
	var w = 1 - v;
	var mg = 0;

	switch (Math.floor(hi)) {
		case 0:
			pure[0] = 1; pure[1] = v; pure[2] = 0; break;
		case 1:
			pure[0] = w; pure[1] = 1; pure[2] = 0; break;
		case 2:
			pure[0] = 0; pure[1] = 1; pure[2] = v; break;
		case 3:
			pure[0] = 0; pure[1] = w; pure[2] = 1; break;
		case 4:
			pure[0] = v; pure[1] = 0; pure[2] = 1; break;
		default:
			pure[0] = 1; pure[1] = 0; pure[2] = w;
	}

	mg = (1.0 - c) * g;

	return [
		(c * pure[0] + mg) * 255,
		(c * pure[1] + mg) * 255,
		(c * pure[2] + mg) * 255
	];
};

convert.hcg.hsv = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	var v = c + g * (1.0 - c);
	var f = 0;

	if (v > 0.0) {
		f = c / v;
	}

	return [hcg[0], f * 100, v * 100];
};

convert.hcg.hsl = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	var l = g * (1.0 - c) + 0.5 * c;
	var s = 0;

	if (l > 0.0 && l < 0.5) {
		s = c / (2 * l);
	} else
	if (l >= 0.5 && l < 1.0) {
		s = c / (2 * (1 - l));
	}

	return [hcg[0], s * 100, l * 100];
};

convert.hcg.hwb = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;
	var v = c + g * (1.0 - c);
	return [hcg[0], (v - c) * 100, (1 - v) * 100];
};

convert.hwb.hcg = function (hwb) {
	var w = hwb[1] / 100;
	var b = hwb[2] / 100;
	var v = 1 - b;
	var c = v - w;
	var g = 0;

	if (c < 1) {
		g = (v - c) / (1 - c);
	}

	return [hwb[0], c * 100, g * 100];
};

convert.apple.rgb = function (apple) {
	return [(apple[0] / 65535) * 255, (apple[1] / 65535) * 255, (apple[2] / 65535) * 255];
};

convert.rgb.apple = function (rgb) {
	return [(rgb[0] / 255) * 65535, (rgb[1] / 255) * 65535, (rgb[2] / 255) * 65535];
};

convert.gray.rgb = function (args) {
	return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
};

convert.gray.hsl = convert.gray.hsv = function (args) {
	return [0, 0, args[0]];
};

convert.gray.hwb = function (gray) {
	return [0, 100, gray[0]];
};

convert.gray.cmyk = function (gray) {
	return [0, 0, 0, gray[0]];
};

convert.gray.lab = function (gray) {
	return [gray[0], 0, 0];
};

convert.gray.hex = function (gray) {
	var val = Math.round(gray[0] / 100 * 255) & 0xFF;
	var integer = (val << 16) + (val << 8) + val;

	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.rgb.gray = function (rgb) {
	var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
	return [val / 255 * 100];
};
});
var conversions_1 = conversions.rgb;
var conversions_2 = conversions.hsl;
var conversions_3 = conversions.hsv;
var conversions_4 = conversions.hwb;
var conversions_5 = conversions.cmyk;
var conversions_6 = conversions.xyz;
var conversions_7 = conversions.lab;
var conversions_8 = conversions.lch;
var conversions_9 = conversions.hex;
var conversions_10 = conversions.keyword;
var conversions_11 = conversions.ansi16;
var conversions_12 = conversions.ansi256;
var conversions_13 = conversions.hcg;
var conversions_14 = conversions.apple;
var conversions_15 = conversions.gray;

/*
	this function routes a model to all other models.

	all functions that are routed have a property `.conversion` attached
	to the returned synthetic function. This property is an array
	of strings, each with the steps in between the 'from' and 'to'
	color models (inclusive).

	conversions that are not possible simply are not included.
*/

function buildGraph() {
	var graph = {};
	// https://jsperf.com/object-keys-vs-for-in-with-closure/3
	var models = Object.keys(conversions);

	for (var len = models.length, i = 0; i < len; i++) {
		graph[models[i]] = {
			// http://jsperf.com/1-vs-infinity
			// micro-opt, but this is simple.
			distance: -1,
			parent: null
		};
	}

	return graph;
}

// https://en.wikipedia.org/wiki/Breadth-first_search
function deriveBFS(fromModel) {
	var graph = buildGraph();
	var queue = [fromModel]; // unshift -> queue -> pop

	graph[fromModel].distance = 0;

	while (queue.length) {
		var current = queue.pop();
		var adjacents = Object.keys(conversions[current]);

		for (var len = adjacents.length, i = 0; i < len; i++) {
			var adjacent = adjacents[i];
			var node = graph[adjacent];

			if (node.distance === -1) {
				node.distance = graph[current].distance + 1;
				node.parent = current;
				queue.unshift(adjacent);
			}
		}
	}

	return graph;
}

function link(from, to) {
	return function (args) {
		return to(from(args));
	};
}

function wrapConversion(toModel, graph) {
	var path = [graph[toModel].parent, toModel];
	var fn = conversions[graph[toModel].parent][toModel];

	var cur = graph[toModel].parent;
	while (graph[cur].parent) {
		path.unshift(graph[cur].parent);
		fn = link(conversions[graph[cur].parent][cur], fn);
		cur = graph[cur].parent;
	}

	fn.conversion = path;
	return fn;
}

var route = function (fromModel) {
	var graph = deriveBFS(fromModel);
	var conversion = {};

	var models = Object.keys(graph);
	for (var len = models.length, i = 0; i < len; i++) {
		var toModel = models[i];
		var node = graph[toModel];

		if (node.parent === null) {
			// no possible conversion, or this node is the source model.
			continue;
		}

		conversion[toModel] = wrapConversion(toModel, graph);
	}

	return conversion;
};

var convert = {};

var models = Object.keys(conversions);

function wrapRaw(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		return fn(args);
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

function wrapRounded(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		var result = fn(args);

		// we're assuming the result is an array here.
		// see notice in conversions.js; don't use box types
		// in conversion functions.
		if (typeof result === 'object') {
			for (var len = result.length, i = 0; i < len; i++) {
				result[i] = Math.round(result[i]);
			}
		}

		return result;
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

models.forEach(function (fromModel) {
	convert[fromModel] = {};

	Object.defineProperty(convert[fromModel], 'channels', {value: conversions[fromModel].channels});
	Object.defineProperty(convert[fromModel], 'labels', {value: conversions[fromModel].labels});

	var routes = route(fromModel);
	var routeModels = Object.keys(routes);

	routeModels.forEach(function (toModel) {
		var fn = routes[toModel];

		convert[fromModel][toModel] = wrapRounded(fn);
		convert[fromModel][toModel].raw = wrapRaw(fn);
	});
});

var colorConvert = convert;

var _slice = [].slice;

var skippedModels = [
	// to be honest, I don't really feel like keyword belongs in color convert, but eh.
	'keyword',

	// gray conflicts with some method names, and has its own method defined.
	'gray',

	// shouldn't really be in color-convert either...
	'hex'
];

var hashedModelKeys = {};
Object.keys(colorConvert).forEach(function (model) {
	hashedModelKeys[_slice.call(colorConvert[model].labels).sort().join('')] = model;
});

var limiters = {};

function Color(obj, model) {
	if (!(this instanceof Color)) {
		return new Color(obj, model);
	}

	if (model && model in skippedModels) {
		model = null;
	}

	if (model && !(model in colorConvert)) {
		throw new Error('Unknown model: ' + model);
	}

	var i;
	var channels;

	if (obj == null) { // eslint-disable-line no-eq-null,eqeqeq
		this.model = 'rgb';
		this.color = [0, 0, 0];
		this.valpha = 1;
	} else if (obj instanceof Color) {
		this.model = obj.model;
		this.color = obj.color.slice();
		this.valpha = obj.valpha;
	} else if (typeof obj === 'string') {
		var result = colorString.get(obj);
		if (result === null) {
			throw new Error('Unable to parse color from string: ' + obj);
		}

		this.model = result.model;
		channels = colorConvert[this.model].channels;
		this.color = result.value.slice(0, channels);
		this.valpha = typeof result.value[channels] === 'number' ? result.value[channels] : 1;
	} else if (obj.length) {
		this.model = model || 'rgb';
		channels = colorConvert[this.model].channels;
		var newArr = _slice.call(obj, 0, channels);
		this.color = zeroArray(newArr, channels);
		this.valpha = typeof obj[channels] === 'number' ? obj[channels] : 1;
	} else if (typeof obj === 'number') {
		// this is always RGB - can be converted later on.
		obj &= 0xFFFFFF;
		this.model = 'rgb';
		this.color = [
			(obj >> 16) & 0xFF,
			(obj >> 8) & 0xFF,
			obj & 0xFF
		];
		this.valpha = 1;
	} else {
		this.valpha = 1;

		var keys = Object.keys(obj);
		if ('alpha' in obj) {
			keys.splice(keys.indexOf('alpha'), 1);
			this.valpha = typeof obj.alpha === 'number' ? obj.alpha : 0;
		}

		var hashedKeys = keys.sort().join('');
		if (!(hashedKeys in hashedModelKeys)) {
			throw new Error('Unable to parse color from object: ' + JSON.stringify(obj));
		}

		this.model = hashedModelKeys[hashedKeys];

		var labels = colorConvert[this.model].labels;
		var color = [];
		for (i = 0; i < labels.length; i++) {
			color.push(obj[labels[i]]);
		}

		this.color = zeroArray(color);
	}

	// perform limitations (clamping, etc.)
	if (limiters[this.model]) {
		channels = colorConvert[this.model].channels;
		for (i = 0; i < channels; i++) {
			var limit = limiters[this.model][i];
			if (limit) {
				this.color[i] = limit(this.color[i]);
			}
		}
	}

	this.valpha = Math.max(0, Math.min(1, this.valpha));

	if (Object.freeze) {
		Object.freeze(this);
	}
}

Color.prototype = {
	toString: function () {
		return this.string();
	},

	toJSON: function () {
		return this[this.model]();
	},

	string: function (places) {
		var self = this.model in colorString.to ? this : this.rgb();
		self = self.round(typeof places === 'number' ? places : 1);
		var args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
		return colorString.to[self.model](args);
	},

	percentString: function (places) {
		var self = this.rgb().round(typeof places === 'number' ? places : 1);
		var args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
		return colorString.to.rgb.percent(args);
	},

	array: function () {
		return this.valpha === 1 ? this.color.slice() : this.color.concat(this.valpha);
	},

	object: function () {
		var result = {};
		var channels = colorConvert[this.model].channels;
		var labels = colorConvert[this.model].labels;

		for (var i = 0; i < channels; i++) {
			result[labels[i]] = this.color[i];
		}

		if (this.valpha !== 1) {
			result.alpha = this.valpha;
		}

		return result;
	},

	unitArray: function () {
		var rgb = this.rgb().color;
		rgb[0] /= 255;
		rgb[1] /= 255;
		rgb[2] /= 255;

		if (this.valpha !== 1) {
			rgb.push(this.valpha);
		}

		return rgb;
	},

	unitObject: function () {
		var rgb = this.rgb().object();
		rgb.r /= 255;
		rgb.g /= 255;
		rgb.b /= 255;

		if (this.valpha !== 1) {
			rgb.alpha = this.valpha;
		}

		return rgb;
	},

	round: function (places) {
		places = Math.max(places || 0, 0);
		return new Color(this.color.map(roundToPlace(places)).concat(this.valpha), this.model);
	},

	alpha: function (val) {
		if (arguments.length) {
			return new Color(this.color.concat(Math.max(0, Math.min(1, val))), this.model);
		}

		return this.valpha;
	},

	// rgb
	red: getset('rgb', 0, maxfn(255)),
	green: getset('rgb', 1, maxfn(255)),
	blue: getset('rgb', 2, maxfn(255)),

	hue: getset(['hsl', 'hsv', 'hsl', 'hwb', 'hcg'], 0, function (val) { return ((val % 360) + 360) % 360; }), // eslint-disable-line brace-style

	saturationl: getset('hsl', 1, maxfn(100)),
	lightness: getset('hsl', 2, maxfn(100)),

	saturationv: getset('hsv', 1, maxfn(100)),
	value: getset('hsv', 2, maxfn(100)),

	chroma: getset('hcg', 1, maxfn(100)),
	gray: getset('hcg', 2, maxfn(100)),

	white: getset('hwb', 1, maxfn(100)),
	wblack: getset('hwb', 2, maxfn(100)),

	cyan: getset('cmyk', 0, maxfn(100)),
	magenta: getset('cmyk', 1, maxfn(100)),
	yellow: getset('cmyk', 2, maxfn(100)),
	black: getset('cmyk', 3, maxfn(100)),

	x: getset('xyz', 0, maxfn(100)),
	y: getset('xyz', 1, maxfn(100)),
	z: getset('xyz', 2, maxfn(100)),

	l: getset('lab', 0, maxfn(100)),
	a: getset('lab', 1),
	b: getset('lab', 2),

	keyword: function (val) {
		if (arguments.length) {
			return new Color(val);
		}

		return colorConvert[this.model].keyword(this.color);
	},

	hex: function (val) {
		if (arguments.length) {
			return new Color(val);
		}

		return colorString.to.hex(this.rgb().round().color);
	},

	rgbNumber: function () {
		var rgb = this.rgb().color;
		return ((rgb[0] & 0xFF) << 16) | ((rgb[1] & 0xFF) << 8) | (rgb[2] & 0xFF);
	},

	luminosity: function () {
		// http://www.w3.org/TR/WCAG20/#relativeluminancedef
		var rgb = this.rgb().color;

		var lum = [];
		for (var i = 0; i < rgb.length; i++) {
			var chan = rgb[i] / 255;
			lum[i] = (chan <= 0.03928) ? chan / 12.92 : Math.pow(((chan + 0.055) / 1.055), 2.4);
		}

		return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
	},

	contrast: function (color2) {
		// http://www.w3.org/TR/WCAG20/#contrast-ratiodef
		var lum1 = this.luminosity();
		var lum2 = color2.luminosity();

		if (lum1 > lum2) {
			return (lum1 + 0.05) / (lum2 + 0.05);
		}

		return (lum2 + 0.05) / (lum1 + 0.05);
	},

	level: function (color2) {
		var contrastRatio = this.contrast(color2);
		if (contrastRatio >= 7.1) {
			return 'AAA';
		}

		return (contrastRatio >= 4.5) ? 'AA' : '';
	},

	isDark: function () {
		// YIQ equation from http://24ways.org/2010/calculating-color-contrast
		var rgb = this.rgb().color;
		var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
		return yiq < 128;
	},

	isLight: function () {
		return !this.isDark();
	},

	negate: function () {
		var rgb = this.rgb();
		for (var i = 0; i < 3; i++) {
			rgb.color[i] = 255 - rgb.color[i];
		}
		return rgb;
	},

	lighten: function (ratio) {
		var hsl = this.hsl();
		hsl.color[2] += hsl.color[2] * ratio;
		return hsl;
	},

	darken: function (ratio) {
		var hsl = this.hsl();
		hsl.color[2] -= hsl.color[2] * ratio;
		return hsl;
	},

	saturate: function (ratio) {
		var hsl = this.hsl();
		hsl.color[1] += hsl.color[1] * ratio;
		return hsl;
	},

	desaturate: function (ratio) {
		var hsl = this.hsl();
		hsl.color[1] -= hsl.color[1] * ratio;
		return hsl;
	},

	whiten: function (ratio) {
		var hwb = this.hwb();
		hwb.color[1] += hwb.color[1] * ratio;
		return hwb;
	},

	blacken: function (ratio) {
		var hwb = this.hwb();
		hwb.color[2] += hwb.color[2] * ratio;
		return hwb;
	},

	grayscale: function () {
		// http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
		var rgb = this.rgb().color;
		var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
		return Color.rgb(val, val, val);
	},

	fade: function (ratio) {
		return this.alpha(this.valpha - (this.valpha * ratio));
	},

	opaquer: function (ratio) {
		return this.alpha(this.valpha + (this.valpha * ratio));
	},

	rotate: function (degrees) {
		var hsl = this.hsl();
		var hue = hsl.color[0];
		hue = (hue + degrees) % 360;
		hue = hue < 0 ? 360 + hue : hue;
		hsl.color[0] = hue;
		return hsl;
	},

	mix: function (mixinColor, weight) {
		// ported from sass implementation in C
		// https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
		if (!mixinColor || !mixinColor.rgb) {
			throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof mixinColor);
		}
		var color1 = mixinColor.rgb();
		var color2 = this.rgb();
		var p = weight === undefined ? 0.5 : weight;

		var w = 2 * p - 1;
		var a = color1.alpha() - color2.alpha();

		var w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
		var w2 = 1 - w1;

		return Color.rgb(
				w1 * color1.red() + w2 * color2.red(),
				w1 * color1.green() + w2 * color2.green(),
				w1 * color1.blue() + w2 * color2.blue(),
				color1.alpha() * p + color2.alpha() * (1 - p));
	}
};

// model conversion methods and static constructors
Object.keys(colorConvert).forEach(function (model) {
	if (skippedModels.indexOf(model) !== -1) {
		return;
	}

	var channels = colorConvert[model].channels;

	// conversion methods
	Color.prototype[model] = function () {
		if (this.model === model) {
			return new Color(this);
		}

		if (arguments.length) {
			return new Color(arguments, model);
		}

		var newAlpha = typeof arguments[channels] === 'number' ? channels : this.valpha;
		return new Color(assertArray(colorConvert[this.model][model].raw(this.color)).concat(newAlpha), model);
	};

	// 'static' construction methods
	Color[model] = function (color) {
		if (typeof color === 'number') {
			color = zeroArray(_slice.call(arguments), channels);
		}
		return new Color(color, model);
	};
});

function roundTo(num, places) {
	return Number(num.toFixed(places));
}

function roundToPlace(places) {
	return function (num) {
		return roundTo(num, places);
	};
}

function getset(model, channel, modifier) {
	model = Array.isArray(model) ? model : [model];

	model.forEach(function (m) {
		(limiters[m] || (limiters[m] = []))[channel] = modifier;
	});

	model = model[0];

	return function (val) {
		var result;

		if (arguments.length) {
			if (modifier) {
				val = modifier(val);
			}

			result = this[model]();
			result.color[channel] = val;
			return result;
		}

		result = this[model]().color[channel];
		if (modifier) {
			result = modifier(result);
		}

		return result;
	};
}

function maxfn(max) {
	return function (v) {
		return Math.max(0, Math.min(max, v));
	};
}

function assertArray(val) {
	return Array.isArray(val) ? val : [val];
}

function zeroArray(arr, length) {
	for (var i = 0; i < length; i++) {
		if (typeof arr[i] !== 'number') {
			arr[i] = 0;
		}
	}

	return arr;
}

var color$1 = Color;

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n  background-image: linear-gradient(\n    45deg,\n    ", " 25%,\n    transparent 25%,\n    transparent 50%,\n    ", " 50%,\n    ", " 75%,\n    transparent 75%,\n    transparent\n  );\n  background-size: ", " ", ";\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var get$2 = function get(color, hue) {
  return "".concat(color, ".").concat(hue);
};
var addOpacity = function addOpacity(color, opacity) {
  return color$1(color).fade(1 - opacity).rgb().string();
};
var isDarkColor = function isDarkColor(color) {
  return color$1(color).isDark();
};
var generateAlphaColors = function generateAlphaColors(color) {
  return {
    900: addOpacity(color, 0.92),
    800: addOpacity(color, 0.8),
    700: addOpacity(color, 0.6),
    600: addOpacity(color, 0.48),
    500: addOpacity(color, 0.38),
    400: addOpacity(color, 0.24),
    300: addOpacity(color, 0.16),
    200: addOpacity(color, 0.12),
    100: addOpacity(color, 0.08),
    50: addOpacity(color, 0.04)
  };
};
var colorEmphasis = function colorEmphasis(color, emphasis) {
  switch (emphasis) {
    case "high":
      return color;

    case "medium":
      return generateAlphaColors(color)[700];

    case "low":
      return generateAlphaColors(color)[500];

    case "lowest":
      return generateAlphaColors(color)[300];

    default:
      return;
  }
};
var generateStripe = function generateStripe(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? "1rem" : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? "rgba(255, 255, 255, 0.15)" : _ref$color;
  return core.css(_templateObject$1(), color, color, color, size, size);
};

function e$1(e,r,i){void 0===i&&(i=global);var o=React.useRef();React.useEffect(function(){o.current=r;},[r]),React.useEffect(function(){if(i&&i.addEventListener){var n=function(n){return o.current(n)};return i.addEventListener(e,n),function(){i.removeEventListener(e,n);}}},[e,i]);}

var u={},c$1=function(t,n,e){return u[t]||(u[t]={callbacks:[],value:e}),u[t].callbacks.push(n),{deregister:function(){var e=u[t].callbacks,r=e.indexOf(n);r>-1&&e.splice(r,1);},emit:function(e){u[t].value!==e&&(u[t].value=e,u[t].callbacks.forEach(function(t){n!==t&&t(e);}));}}};function o(u,i){if(void 0===i&&(i=global.localStorage),i){var o=function(t){return {get:function(n,e){var r=t.getItem(n);return null===r?"function"==typeof e?e():e:JSON.parse(r)},set:function(n,e){t.setItem(n,JSON.stringify(e));}}}(i);return function(i){return function(u,i,o){var a=o.get,f=o.set,l=React.useRef(null),s=React.useState(function(){return a(i,u)}),v=s[0],g=s[1];return e$1("storage",function(t){var n=t.key,e=JSON.parse(t.newValue);n===i&&v!==e&&g(e);}),React.useEffect(function(){return l.current=c$1(i,g,u),function(){l.current.deregister();}},[]),React.useEffect(function(){f(i,v),l.current.emit(v);},[v]),[v,g]}(i,u,o)}}return React.useState}

var i=function(){},u$1={classList:{add:i,remove:i}},d$1=function(e,r,n){void 0===n&&(n=global);var a=e?o(e,r):React.useState,i=n.matchMedia?n.matchMedia("(prefers-color-scheme: dark)"):{},d={addEventListener:function(e,t){return i.addListener&&i.addListener(t)},removeEventListener:function(e,t){return i.removeListener&&i.removeListener(t)}},s="(prefers-color-scheme: dark)"===i.media,c=n.document&&n.document.body||u$1;return {usePersistedDarkModeState:a,getDefaultOnChange:function(e,t,r){return void 0===e&&(e=c),void 0===t&&(t="dark-mode"),void 0===r&&(r="light-mode"),function(n){e.classList.add(n?t:r),e.classList.remove(n?r:t);}},mediaQueryEventTarget:d,getInitialValue:function(e){return s?i.matches:e}}};function useDarkMode(t,o){void 0===t&&(t=!1),void 0===o&&(o={});var i=o.element,u=o.classNameDark,s=o.classNameLight,c=o.onChange,m=o.storageKey;void 0===m&&(m="darkMode");var l=o.storageProvider,f=o.global,v=React.useMemo(function(){return d$1(m,l,f)},[m,l,f]),g=v.getDefaultOnChange,h=v.mediaQueryEventTarget,L=(0, v.usePersistedDarkModeState)((0, v.getInitialValue)(t)),k=L[0],p=L[1],b=React.useMemo(function(){return c||g(i,u,s)},[c,i,u,s,g]);return React.useEffect(function(){b(k);},[b,k]),e$1("change",function(e){return p(e.matches)},h),{value:k,enable:React.useCallback(function(){return p(!0)},[p]),disable:React.useCallback(function(){return p(!1)},[p]),toggle:React.useCallback(function(){return p(function(e){return !e})},[p])}}

var ColorModeContext = React.createContext({
  colorMode: "light",
  toggleColorMode: function toggleColorMode() {}
});

var ColorModeProvider = function ColorModeProvider(_ref) {
  var value = _ref.value,
      children = _ref.children;

  var _useState = React.useState(value),
      _useState2 = _slicedToArray(_useState, 2),
      manualMode = _useState2[0],
      setManualMode = _useState2[1];

  var manualToggle = function manualToggle() {
    if (manualMode === "light") {
      setManualMode("dark");
    }

    if (manualMode === "dark") {
      setManualMode("light");
    }
  };

  var _useDarkMode = useDarkMode(false),
      isDarkMode = _useDarkMode.value,
      toggle = _useDarkMode.toggle;

  var colorMode = isDarkMode ? "dark" : "light";
  var childContext = value != null ? {
    colorMode: manualMode,
    toggleColorMode: manualToggle
  } : {
    colorMode: colorMode,
    toggleColorMode: toggle
  };
  return core.jsx(ColorModeContext.Provider, {
    value: childContext
  }, children);
};

var DarkMode = function DarkMode(props) {
  return core.jsx(ColorModeProvider, _extends({
    value: "dark"
  }, props));
};

var LightMode = function LightMode(props) {
  return core.jsx(ColorModeProvider, _extends({
    value: "light"
  }, props));
};

var useColorMode = function useColorMode() {
  var context = React.useContext(ColorModeContext);

  if (context === undefined) {
    throw new Error("useColorMode must be used within a ColorModeProvider");
  }

  return context;
};

var leftAccent = function leftAccent(props) {
  var color = props.color;
  return {
    light: _objectSpread2({
      pl: 3
    }, subtle(props).light, {
      borderLeft: "4px",
      borderColor: "".concat(color, ".500")
    }),
    dark: _objectSpread2({
      pl: 3
    }, subtle(props).dark, {
      borderLeft: "4px",
      borderColor: "".concat(color, ".200")
    })
  };
};

var topAccent = function topAccent(props) {
  var color = props.color;
  return {
    light: _objectSpread2({
      pt: 2
    }, subtle(props).light, {
      borderTop: "4px",
      borderColor: "".concat(color, ".500")
    }),
    dark: _objectSpread2({
      pt: 2
    }, subtle(props).dark, {
      borderTop: "4px",
      borderColor: "".concat(color, ".200")
    })
  };
};

var solid = function solid(_ref) {
  var color = _ref.color;
  return {
    light: {
      bg: "".concat(color, ".500"),
      color: "white"
    },
    dark: {
      bg: "".concat(color, ".200"),
      color: "gray.900"
    }
  };
};

var subtle = function subtle(_ref2) {
  var color = _ref2.color,
      colors = _ref2.theme.colors;
  var darkBg = colors[color] && colors[color][200];
  return {
    light: {
      bg: "".concat(color, ".100")
    },
    dark: {
      bg: colorEmphasis(darkBg, "lowest")
    }
  };
};

var statusStyleProps = function statusStyleProps(props) {
  switch (props.variant) {
    case "solid":
      return solid(props);

    case "subtle":
      return subtle(props);

    case "top-accent":
      return topAccent(props);

    case "left-accent":
      return leftAccent(props);

    default:
      return {};
  }
};

var baseProps = {
  display: "flex",
  alignItems: "center",
  position: "relative",
  overflow: "hidden",
  pl: 4,
  pr: 4,
  pt: 3,
  pb: 3
};

var useAlertStyle = function useAlertStyle(props) {
  var _useColorMode = useColorMode(),
      colorMode = _useColorMode.colorMode;

  var theme = useTheme();

  var _props = _objectSpread2({}, props, {
    theme: theme
  });

  return _objectSpread2({}, baseProps, {}, statusStyleProps(_props)[colorMode]);
};

var useAlertIconStyle = function useAlertIconStyle(_ref3) {
  var variant = _ref3.variant,
      color = _ref3.color;

  var _useColorMode2 = useColorMode(),
      colorMode = _useColorMode2.colorMode;

  if (["left-accent", "top-accent", "subtle"].includes(variant)) {
    var result = {
      light: {
        color: "".concat(color, ".500")
      },
      dark: {
        color: "".concat(color, ".200")
      }
    };
    return result[colorMode];
  }
};

var statuses = {
  info: {
    icon: "info",
    color: "blue"
  },
  warning: {
    icon: "warning-2",
    color: "orange"
  },
  success: {
    icon: "check-circle",
    color: "green"
  },
  error: {
    icon: "warning",
    color: "red"
  }
};
var AlertContext = React.createContext();

var useAlertContext = function useAlertContext() {
  var context = React.useContext(AlertContext);

  if (context === undefined) {
    throw new Error("useAlertContext must be used within a AlertContextProvider");
  }

  return context;
};

var Alert = function Alert(_ref) {
  var _ref$status = _ref.status,
      status = _ref$status === void 0 ? "info" : _ref$status,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? "subtle" : _ref$variant,
      rest = _objectWithoutProperties(_ref, ["status", "variant"]);

  var alertStyleProps = useAlertStyle({
    variant: variant,
    color: statuses[status] && statuses[status]["color"]
  });
  var context = {
    status: status,
    variant: variant
  };
  return core.jsx(AlertContext.Provider, {
    value: context
  }, core.jsx(Box, _extends({
    role: "alert"
  }, alertStyleProps, rest)));
};

var AlertTitle = function AlertTitle(props) {
  return core.jsx(Box, _extends({
    fontWeight: "bold",
    lineHeight: "normal"
  }, props));
};

var AlertDescription = function AlertDescription(props) {
  return core.jsx(Box, props);
};

var AlertIcon = function AlertIcon(props) {
  var _useAlertContext = useAlertContext(),
      status = _useAlertContext.status,
      variant = _useAlertContext.variant;

  var iconStyleProps = useAlertIconStyle({
    variant: variant,
    color: statuses[status] && statuses[status]["color"]
  });
  return core.jsx(Icon // mt={1}
  , _extends({
    mr: 3,
    size: 5,
    name: statuses[status] && statuses[status]["icon"]
  }, iconStyleProps, props));
};

// Older browsers don't support event options, feature detect it.

// Adopted and modified solution from Bohdan Didukh (2017)
// https://stackoverflow.com/questions/41594997/ios-10-safari-prevent-scrolling-behind-a-fixed-overlay-and-maintain-scroll-posi

let hasPassiveEvents = false;
if (typeof window !== 'undefined') {
  const passiveTestOptions = {
    get passive() {
      hasPassiveEvents = true;
      return undefined;
    }
  };
  window.addEventListener('testPassive', null, passiveTestOptions);
  window.removeEventListener('testPassive', null, passiveTestOptions);
}

const isIosDevice = typeof window !== 'undefined' && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === 'MacIntel' && window.navigator.maxTouchPoints > 1);


let locks = [];
let documentListenerAdded = false;
let initialClientY = -1;
let previousBodyOverflowSetting;
let previousBodyPaddingRight;

// returns true if `el` should be allowed to receive touchmove events.
const allowTouchMove = el => locks.some(lock => {
  if (lock.options.allowTouchMove && lock.options.allowTouchMove(el)) {
    return true;
  }

  return false;
});

const preventDefault = rawEvent => {
  const e = rawEvent || window.event;

  // For the case whereby consumers adds a touchmove event listener to document.
  // Recall that we do document.addEventListener('touchmove', preventDefault, { passive: false })
  // in disableBodyScroll - so if we provide this opportunity to allowTouchMove, then
  // the touchmove event on document will break.
  if (allowTouchMove(e.target)) {
    return true;
  }

  // Do not prevent if the event has more than one touch (usually meaning this is a multi touch gesture like pinch to zoom).
  if (e.touches.length > 1) return true;

  if (e.preventDefault) e.preventDefault();

  return false;
};

const setOverflowHidden = options => {
  // Setting overflow on body/documentElement synchronously in Desktop Safari slows down
  // the responsiveness for some reason. Setting within a setTimeout fixes this.
  setTimeout(() => {
    // If previousBodyPaddingRight is already set, don't set it again.
    if (previousBodyPaddingRight === undefined) {
      const reserveScrollBarGap = !!options && options.reserveScrollBarGap === true;
      const scrollBarGap = window.innerWidth - document.documentElement.clientWidth;

      if (reserveScrollBarGap && scrollBarGap > 0) {
        previousBodyPaddingRight = document.body.style.paddingRight;
        document.body.style.paddingRight = `${scrollBarGap}px`;
      }
    }

    // If previousBodyOverflowSetting is already set, don't set it again.
    if (previousBodyOverflowSetting === undefined) {
      previousBodyOverflowSetting = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
    }
  });
};

const restoreOverflowSetting = () => {
  // Setting overflow on body/documentElement synchronously in Desktop Safari slows down
  // the responsiveness for some reason. Setting within a setTimeout fixes this.
  setTimeout(() => {
    if (previousBodyPaddingRight !== undefined) {
      document.body.style.paddingRight = previousBodyPaddingRight;

      // Restore previousBodyPaddingRight to undefined so setOverflowHidden knows it
      // can be set again.
      previousBodyPaddingRight = undefined;
    }

    if (previousBodyOverflowSetting !== undefined) {
      document.body.style.overflow = previousBodyOverflowSetting;

      // Restore previousBodyOverflowSetting to undefined
      // so setOverflowHidden knows it can be set again.
      previousBodyOverflowSetting = undefined;
    }
  });
};

// https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#Problems_and_solutions
const isTargetElementTotallyScrolled = targetElement => targetElement ? targetElement.scrollHeight - targetElement.scrollTop <= targetElement.clientHeight : false;

const handleScroll = (event, targetElement) => {
  const clientY = event.targetTouches[0].clientY - initialClientY;

  if (allowTouchMove(event.target)) {
    return false;
  }

  if (targetElement && targetElement.scrollTop === 0 && clientY > 0) {
    // element is at the top of its scroll.
    return preventDefault(event);
  }

  if (isTargetElementTotallyScrolled(targetElement) && clientY < 0) {
    // element is at the bottom of its scroll.
    return preventDefault(event);
  }

  event.stopPropagation();
  return true;
};

const disableBodyScroll = (targetElement, options) => {
  if (isIosDevice) {
    // targetElement must be provided, and disableBodyScroll must not have been
    // called on this targetElement before.
    if (!targetElement) {
      // eslint-disable-next-line no-console
      console.error('disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.');
      return;
    }

    if (targetElement && !locks.some(lock => lock.targetElement === targetElement)) {
      const lock = {
        targetElement,
        options: options || {}
      };

      locks = [...locks, lock];

      targetElement.ontouchstart = event => {
        if (event.targetTouches.length === 1) {
          // detect single touch.
          initialClientY = event.targetTouches[0].clientY;
        }
      };
      targetElement.ontouchmove = event => {
        if (event.targetTouches.length === 1) {
          // detect single touch.
          handleScroll(event, targetElement);
        }
      };

      if (!documentListenerAdded) {
        document.addEventListener('touchmove', preventDefault, hasPassiveEvents ? { passive: false } : undefined);
        documentListenerAdded = true;
      }
    }
  } else {
    setOverflowHidden(options);
    const lock = {
      targetElement,
      options: options || {}
    };

    locks = [...locks, lock];
  }
};

const enableBodyScroll = targetElement => {
  if (isIosDevice) {
    if (!targetElement) {
      // eslint-disable-next-line no-console
      console.error('enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.');
      return;
    }

    targetElement.ontouchstart = null;
    targetElement.ontouchmove = null;

    locks = locks.filter(lock => lock.targetElement !== targetElement);

    if (documentListenerAdded && locks.length === 0) {
      document.removeEventListener('touchmove', preventDefault, hasPassiveEvents ? { passive: false } : undefined);

      documentListenerAdded = false;
    }
  } else {
    locks = locks.filter(lock => lock.targetElement !== targetElement);
    if (!locks.length) {
      restoreOverflowSetting();
    }
  }
};

var interopRequireDefault = createCommonjsModule(function (module) {
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
});

unwrapExports(interopRequireDefault);

function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var objectWithoutPropertiesLoose = _objectWithoutPropertiesLoose$1;

function _objectWithoutProperties$1(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var objectWithoutProperties = _objectWithoutProperties$1;

var _extends_1 = createCommonjsModule(function (module) {
function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;
});

var _typeof_1 = createCommonjsModule(function (module) {
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
});

var interopRequireWildcard = createCommonjsModule(function (module) {
function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof_1(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;
});

unwrapExports(interopRequireWildcard);

function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var defineProperty = _defineProperty$1;

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? Object(arguments[i]) : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

var objectSpread = _objectSpread;

function _arrayWithHoles$1(arr) {
  if (Array.isArray(arr)) return arr;
}

var arrayWithHoles = _arrayWithHoles$1;

function _iterableToArrayLimit$1(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

var iterableToArrayLimit = _iterableToArrayLimit$1;

function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

var arrayLikeToArray = _arrayLikeToArray$1;

function _unsupportedIterableToArray$1(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

var unsupportedIterableToArray = _unsupportedIterableToArray$1;

function _nonIterableRest$1() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var nonIterableRest = _nonIterableRest$1;

function _slicedToArray$1(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

var slicedToArray = _slicedToArray$1;

var FOCUS_GROUP = 'data-focus-lock';
var FOCUS_DISABLED = 'data-focus-lock-disabled';
var FOCUS_ALLOW = 'data-no-focus-lock';
var FOCUS_AUTO = 'data-autofocus-inside';

var constants = /*#__PURE__*/Object.freeze({
  __proto__: null,
  FOCUS_GROUP: FOCUS_GROUP,
  FOCUS_DISABLED: FOCUS_DISABLED,
  FOCUS_ALLOW: FOCUS_ALLOW,
  FOCUS_AUTO: FOCUS_AUTO
});

function assignRef$1(ref, value) {
    if (typeof ref === 'function') {
        ref(value);
    }
    else if (ref != null) {
        ref.current = value;
    }
    return ref;
}

function useCallbackRef(initialValue, callback) {
    var ref = React.useState(function () { return ({
        value: initialValue,
        callback: callback,
        facade: {
            get current() {
                return ref.value;
            },
            set current(value) {
                var last = ref.value;
                if (last !== value) {
                    ref.value = value;
                    ref.callback(value, last);
                }
            }
        }
    }); })[0];
    ref.callback = callback;
    return ref.facade;
}

function createCallbackRef(callback) {
    var current = null;
    return {
        get current() {
            return current;
        },
        set current(value) {
            var last = current;
            if (last !== value) {
                current = value;
                callback(value, last);
            }
        }
    };
}

function mergeRefs(refs) {
    return createCallbackRef(function (newValue) {
        return refs.forEach(function (ref) { return assignRef$1(ref, newValue); });
    });
}

function useMergeRefs(refs, defaultValue) {
    return useCallbackRef(defaultValue, function (newValue) {
        return refs.forEach(function (ref) { return assignRef$1(ref, newValue); });
    });
}

function useTransformRef(ref, transformer) {
    return useCallbackRef(undefined, function (value) {
        return assignRef$1(ref, transformer(value));
    });
}

function transformRef(ref, transformer) {
    return createCallbackRef(function (value) { return assignRef$1(ref, transformer(value)); });
}

function refToCallback(ref) {
    return function (newValue) {
        if (typeof ref === 'function') {
            ref(newValue);
        }
        else if (ref != null) {
            ref.current = newValue;
        }
    };
}
var weakMem = new WeakMap();
var weakMemoize = function (ref) {
    if (weakMem.has(ref)) {
        return weakMem.get(ref);
    }
    var cb = refToCallback(ref);
    weakMem.set(ref, cb);
    return cb;
};
function useRefToCallback(ref) {
    return weakMemoize(ref);
}

var es2015 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  assignRef: assignRef$1,
  useCallbackRef: useCallbackRef,
  createCallbackRef: createCallbackRef,
  mergeRefs: mergeRefs,
  useMergeRefs: useMergeRefs,
  useTransformRef: useTransformRef,
  transformRef: transformRef,
  refToCallback: refToCallback,
  useRefToCallback: useRefToCallback
});

var FocusGuard = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.hiddenGuard = void 0;

var _react = interopRequireDefault(React__default);

var _propTypes = interopRequireDefault(propTypes);

var hiddenGuard = {
  width: '1px',
  height: '0px',
  padding: 0,
  overflow: 'hidden',
  position: 'fixed',
  top: '1px',
  left: '1px'
};
exports.hiddenGuard = hiddenGuard;

var InFocusGuard = function InFocusGuard(_ref) {
  var children = _ref.children;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
    key: "guard-first",
    "data-focus-guard": true,
    "data-focus-auto-guard": true,
    style: hiddenGuard
  }), children, children && _react.default.createElement("div", {
    key: "guard-last",
    "data-focus-guard": true,
    "data-focus-auto-guard": true,
    style: hiddenGuard
  }));
};

InFocusGuard.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes.default.node
} : {};
InFocusGuard.defaultProps = {
  children: null
};
var _default = InFocusGuard;
exports.default = _default;
});

unwrapExports(FocusGuard);
var FocusGuard_1 = FocusGuard.hiddenGuard;

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

// Only Node.JS has a process variable that is of [[Class]] process
var detectNode = Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) === '[object process]';

var env$1 = {
    isNode: detectNode,
    forceCache: false,
};

var cache = new WeakMap();
function useSidecar(importer, effect) {
    var options = effect && effect.options || {};
    if (env$1.isNode && !options.ssr) {
        return [null, null];
    }
    var couldUseCache =  (env$1.isNode && !!options.ssr) || (!options.async);
    var _a = React.useState(couldUseCache ? function () { return cache.get(importer); } : undefined), Car = _a[0], setCar = _a[1];
    var _b = React.useState(null), error = _b[0], setError = _b[1];
    React.useEffect(function () {
        if (!Car) {
            importer()
                .then(function (car) {
                var resolved = effect ? effect.read() : (car.default || car);
                if (!resolved) {
                    console.error('Sidecar error: with importer', importer);
                    var error_1;
                    if (effect) {
                        console.error('Sidecar error: with medium', effect);
                        error_1 = new Error('Sidecar medium was not found');
                    }
                    else {
                        error_1 = new Error('Sidecar was not found in exports');
                    }
                    setError(function () { return error_1; });
                    throw error_1;
                }
                cache.set(importer, resolved);
                setCar(function () { return resolved; });
            }, function (e) { return setError(function () { return e; }); });
        }
    }, []);
    return [Car, error];
}

function sidecar(importer, errorComponent) {
    var ErrorCase = function () { return errorComponent; };
    return function Sidecar(props) {
        var _a = useSidecar(importer, props.sideCar), Car = _a[0], error = _a[1];
        if (error && errorComponent) {
            return ErrorCase;
        }
        return Car ? React.createElement(Car, __assign({}, props)) : null;
    };
}

var config$9 = {
    onError: function (e) { return console.error(e); },
};
var setConfig = function (conf) {
    Object.assign(config$9, conf);
};

function ItoI(a) {
    return a;
}
function innerCreateMedium(defaults, middleware) {
    if (middleware === void 0) { middleware = ItoI; }
    var buffer = [];
    var assigned = false;
    var medium = {
        read: function () {
            if (assigned) {
                throw new Error('Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.');
            }
            if (buffer.length) {
                return buffer[buffer.length - 1];
            }
            return defaults;
        },
        useMedium: function (data) {
            var item = middleware(data, assigned);
            buffer.push(item);
            return function () {
                buffer = buffer.filter(function (x) { return x !== item; });
            };
        },
        assignSyncMedium: function (cb) {
            assigned = true;
            while (buffer.length) {
                var cbs = buffer;
                buffer = [];
                cbs.forEach(cb);
            }
            buffer = {
                push: function (x) { return cb(x); },
                filter: function () { return buffer; },
            };
        },
        assignMedium: function (cb) {
            assigned = true;
            var pendingQueue = [];
            if (buffer.length) {
                var cbs = buffer;
                buffer = [];
                cbs.forEach(cb);
                pendingQueue = buffer;
            }
            var executeQueue = function () {
                var cbs = pendingQueue;
                pendingQueue = [];
                cbs.forEach(cb);
            };
            var cycle = function () { return Promise.resolve().then(executeQueue); };
            cycle();
            buffer = {
                push: function (x) {
                    pendingQueue.push(x);
                    cycle();
                },
                filter: function (filter) {
                    pendingQueue = pendingQueue.filter(filter);
                    return buffer;
                },
            };
        },
    };
    return medium;
}
function createMedium(defaults, middleware) {
    if (middleware === void 0) { middleware = ItoI; }
    return innerCreateMedium(defaults, middleware);
}
function createSidecarMedium(options) {
    if (options === void 0) { options = {}; }
    var medium = innerCreateMedium(null);
    medium.options = __assign({ async: true, ssr: false }, options);
    return medium;
}

function renderCar(WrappedComponent, defaults, options) {
    function State(_a) {
        var stateRef = _a.stateRef, props = _a.props;
        var renderTarget = React.useCallback(function SideTarget() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            React.useLayoutEffect(function () {
                stateRef.current(args);
            });
            return null;
        }, []);
        return React.createElement(WrappedComponent, __assign({}, props, { children: renderTarget }));
    }
    var Children = React.memo(function (_a) {
        var stateRef = _a.stateRef, defaultState = _a.defaultState, children = _a.children;
        var _b = React.useState(defaultState.current), state = _b[0], setState = _b[1];
        React.useEffect(function () {
            stateRef.current = setState;
        }, []);
        return children.apply(void 0, state);
    }, function () { return true; });
    return function Combiner(props) {
        var defaultState = React.useRef(defaults(props));
        var ref = React.useRef(function (state) { return defaultState.current = state; });
        return (React.createElement(React.Fragment, null,
            React.createElement(State, { stateRef: ref, props: props }),
            React.createElement(Children, { stateRef: ref, defaultState: defaultState, children: props.children })));
    };
}

var SideCar = function (_a) {
    var sideCar = _a.sideCar, rest = __rest(_a, ["sideCar"]);
    if (!sideCar) {
        throw new Error('Sidecar: please provide `sideCar` property to import the right car');
    }
    var Target = sideCar.read();
    if (!Target) {
        throw new Error('Sidecar medium not found');
    }
    return React.createElement(Target, __assign({}, rest));
};
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
    medium.useMedium(exported);
    return SideCar;
}

var es2015$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  sidecar: sidecar,
  useSidecar: useSidecar,
  setConfig: setConfig,
  createMedium: createMedium,
  createSidecarMedium: createSidecarMedium,
  renderCar: renderCar,
  exportSidecar: exportSidecar
});

var medium = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mediumSidecar = exports.mediumEffect = exports.mediumBlur = exports.mediumFocus = void 0;



var mediumFocus = (0, es2015$1.createMedium)({}, function (_ref) {
  var target = _ref.target,
      currentTarget = _ref.currentTarget;
  return {
    target: target,
    currentTarget: currentTarget
  };
});
exports.mediumFocus = mediumFocus;
var mediumBlur = (0, es2015$1.createMedium)();
exports.mediumBlur = mediumBlur;
var mediumEffect = (0, es2015$1.createMedium)();
exports.mediumEffect = mediumEffect;
var mediumSidecar = (0, es2015$1.createSidecarMedium)({
  async: true
});
exports.mediumSidecar = mediumSidecar;
});

unwrapExports(medium);
var medium_1 = medium.mediumSidecar;
var medium_2 = medium.mediumEffect;
var medium_3 = medium.mediumBlur;
var medium_4 = medium.mediumFocus;

var Lock = createCommonjsModule(function (module, exports) {





Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = interopRequireDefault(_extends_1);

var _defineProperty2 = interopRequireDefault(defineProperty);

var _objectSpread3 = interopRequireDefault(objectSpread);

var _typeof2 = interopRequireDefault(_typeof_1);

var _slicedToArray2 = interopRequireDefault(slicedToArray);

var _react = interopRequireWildcard(React__default);



var constants$1 = interopRequireWildcard(constants);







var emptyArray = [];

var FocusLock = _react.default.forwardRef(function (props, parentRef) {
  var _objectSpread2;

  var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      realObserved = _useState2[0],
      setObserved = _useState2[1];

  var observed = (0, _react.useRef)();
  var isActive = (0, _react.useRef)(false);
  var originalFocusedElement = (0, _react.useRef)(null);
  var children = props.children,
      disabled = props.disabled,
      noFocusGuards = props.noFocusGuards,
      persistentFocus = props.persistentFocus,
      autoFocus = props.autoFocus,
      allowTextSelection = props.allowTextSelection,
      group = props.group,
      className = props.className,
      whiteList = props.whiteList,
      _props$shards = props.shards,
      shards = _props$shards === void 0 ? emptyArray : _props$shards,
      _props$as = props.as,
      Container = _props$as === void 0 ? 'div' : _props$as,
      _props$lockProps = props.lockProps,
      containerProps = _props$lockProps === void 0 ? {} : _props$lockProps,
      SideCar = props.sideCar,
      shouldReturnFocus = props.returnFocus,
      onActivationCallback = props.onActivation,
      onDeactivationCallback = props.onDeactivation;

  var _useState3 = (0, _react.useState)({}),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 1),
      id = _useState4[0]; // SIDE EFFECT CALLBACKS


  var onActivation = (0, _react.useCallback)(function () {
    originalFocusedElement.current = originalFocusedElement.current || document && document.activeElement;

    if (observed.current && onActivationCallback) {
      onActivationCallback(observed.current);
    }

    isActive.current = true;
  }, [onActivationCallback]);
  var onDeactivation = (0, _react.useCallback)(function () {
    isActive.current = false;

    if (onDeactivationCallback) {
      onDeactivationCallback(observed.current);
    }
  }, [onDeactivationCallback]);
  var returnFocus = (0, _react.useCallback)(function (allowDefer) {
    var current = originalFocusedElement.current;

    if (Boolean(shouldReturnFocus) && current && current.focus) {
      var focusOptions = (0, _typeof2.default)(shouldReturnFocus) === 'object' ? shouldReturnFocus : undefined;
      originalFocusedElement.current = null;

      if (allowDefer) {
        // React might return focus after update
        // it's safer to defer the action
        Promise.resolve().then(function () {
          return current.focus(focusOptions);
        });
      } else {
        current.focus(focusOptions);
      }
    }
  }, [shouldReturnFocus]); // MEDIUM CALLBACKS

  var onFocus = (0, _react.useCallback)(function (event) {
    if (isActive.current) {
      medium.mediumFocus.useMedium(event);
    }
  }, []);
  var onBlur = medium.mediumBlur.useMedium; // REF PROPAGATION
  // not using real refs due to race conditions

  var setObserveNode = (0, _react.useCallback)(function (newObserved) {
    if (observed.current !== newObserved) {
      observed.current = newObserved;
      setObserved(newObserved);
    }
  }, []);

  if (process.env.NODE_ENV !== 'production') {
    if (typeof allowTextSelection !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn('React-Focus-Lock: allowTextSelection is deprecated and enabled by default');
    }

    _react.default.useEffect(function () {
      if (!observed.current) {
        // eslint-disable-next-line no-console
        console.error('FocusLock: could not obtain ref to internal node');
      }
    }, []);
  }

  var lockProps = (0, _objectSpread3.default)((_objectSpread2 = {}, (0, _defineProperty2.default)(_objectSpread2, constants$1.FOCUS_DISABLED, disabled && 'disabled'), (0, _defineProperty2.default)(_objectSpread2, constants$1.FOCUS_GROUP, group), _objectSpread2), containerProps);
  var hasLeadingGuards = noFocusGuards !== true;
  var hasTailingGuards = hasLeadingGuards && noFocusGuards !== 'tail';
  var mergedRef = (0, es2015.useMergeRefs)([parentRef, setObserveNode]);
  return _react.default.createElement(_react.default.Fragment, null, hasLeadingGuards && [_react.default.createElement("div", {
    key: "guard-first",
    "data-focus-guard": true,
    tabIndex: disabled ? -1 : 0,
    style: FocusGuard.hiddenGuard
  }), // nearest focus guard
  _react.default.createElement("div", {
    key: "guard-nearest",
    "data-focus-guard": true,
    tabIndex: disabled ? -1 : 1,
    style: FocusGuard.hiddenGuard
  })], !disabled && _react.default.createElement(SideCar, {
    id: id,
    sideCar: medium.mediumSidecar,
    observed: realObserved,
    disabled: disabled,
    persistentFocus: persistentFocus,
    autoFocus: autoFocus,
    whiteList: whiteList,
    shards: shards,
    onActivation: onActivation,
    onDeactivation: onDeactivation,
    returnFocus: returnFocus
  }), _react.default.createElement(Container, (0, _extends2.default)({
    ref: mergedRef
  }, lockProps, {
    className: className,
    onBlur: onBlur,
    onFocus: onFocus
  }), children), hasTailingGuards && _react.default.createElement("div", {
    "data-focus-guard": true,
    tabIndex: disabled ? -1 : 0,
    style: FocusGuard.hiddenGuard
  }));
});

FocusLock.propTypes = process.env.NODE_ENV !== "production" ? {
  children: propTypes.node,
  disabled: propTypes.bool,
  returnFocus: (0, propTypes.oneOfType)([propTypes.bool, propTypes.object]),
  noFocusGuards: propTypes.bool,
  allowTextSelection: propTypes.bool,
  autoFocus: propTypes.bool,
  persistentFocus: propTypes.bool,
  group: propTypes.string,
  className: propTypes.string,
  whiteList: propTypes.func,
  shards: (0, propTypes.arrayOf)(propTypes.any),
  as: (0, propTypes.oneOfType)([propTypes.string, propTypes.func, propTypes.object]),
  lockProps: propTypes.object,
  onActivation: propTypes.func,
  onDeactivation: propTypes.func,
  sideCar: propTypes.any.isRequired
} : {};
FocusLock.defaultProps = {
  children: undefined,
  disabled: false,
  returnFocus: false,
  noFocusGuards: false,
  autoFocus: true,
  persistentFocus: false,
  allowTextSelection: undefined,
  group: undefined,
  className: undefined,
  whiteList: undefined,
  shards: undefined,
  as: 'div',
  lockProps: {},
  onActivation: undefined,
  onDeactivation: undefined
};
var _default = FocusLock;
exports.default = _default;
});

unwrapExports(Lock);

function _arrayWithoutHoles$1(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

var arrayWithoutHoles = _arrayWithoutHoles$1;

function _iterableToArray$1(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

var iterableToArray = _iterableToArray$1;

function _nonIterableSpread$1() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var nonIterableSpread = _nonIterableSpread$1;

function _toConsumableArray$1(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

var toConsumableArray = _toConsumableArray$1;

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _defineProperty$2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function withSideEffect(reducePropsToState, handleStateChangeOnClient) {
  if (process.env.NODE_ENV !== "production") {
    if (typeof reducePropsToState !== 'function') {
      throw new Error('Expected reducePropsToState to be a function.');
    }

    if (typeof handleStateChangeOnClient !== 'function') {
      throw new Error('Expected handleStateChangeOnClient to be a function.');
    }
  }

  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }

  return function wrap(WrappedComponent) {
    if (process.env.NODE_ENV !== "production") {
      if (typeof WrappedComponent !== 'function') {
        throw new Error('Expected WrappedComponent to be a React component.');
      }
    }

    var mountedInstances = [];
    var state;

    function emitChange() {
      state = reducePropsToState(mountedInstances.map(function (instance) {
        return instance.props;
      }));
      handleStateChangeOnClient(state);
    }

    var SideEffect =
    /*#__PURE__*/
    function (_PureComponent) {
      _inheritsLoose(SideEffect, _PureComponent);

      function SideEffect() {
        return _PureComponent.apply(this, arguments) || this;
      }

      // Try to use displayName of wrapped component
      SideEffect.peek = function peek() {
        return state;
      };

      var _proto = SideEffect.prototype;

      _proto.componentDidMount = function componentDidMount() {
        mountedInstances.push(this);
        emitChange();
      };

      _proto.componentDidUpdate = function componentDidUpdate() {
        emitChange();
      };

      _proto.componentWillUnmount = function componentWillUnmount() {
        var index = mountedInstances.indexOf(this);
        mountedInstances.splice(index, 1);
        emitChange();
      };

      _proto.render = function render() {
        return React__default.createElement(WrappedComponent, this.props);
      };

      return SideEffect;
    }(React.PureComponent);

    _defineProperty$2(SideEffect, "displayName", "SideEffect(" + getDisplayName(WrappedComponent) + ")");

    return SideEffect;
  };
}

var toArray = function toArray(a) {
  var ret = Array(a.length);
  for (var i = 0; i < a.length; ++i) {
    ret[i] = a[i];
  }
  return ret;
};

var asArray = function asArray(a) {
  return Array.isArray(a) ? a : [a];
};

var tabSort = function tabSort(a, b) {
  var tabDiff = a.tabIndex - b.tabIndex;
  var indexDiff = a.index - b.index;

  if (tabDiff) {
    if (!a.tabIndex) return 1;
    if (!b.tabIndex) return -1;
  }

  return tabDiff || indexDiff;
};

var orderByTabIndex = function orderByTabIndex(nodes, filterNegative, keepGuards) {
  return toArray(nodes).map(function (node, index) {
    return {
      node: node,
      index: index,
      tabIndex: keepGuards && node.tabIndex === -1 ? (node.dataset || {}).focusGuard ? 0 : -1 : node.tabIndex
    };
  }).filter(function (data) {
    return !filterNegative || data.tabIndex >= 0;
  }).sort(tabSort);
};

var tabbables = ['button:enabled:not([readonly])', 'select:enabled:not([readonly])', 'textarea:enabled:not([readonly])', 'input:enabled:not([readonly])', 'a[href]', 'area[href]', 'iframe', 'object', 'embed', '[tabindex]', '[contenteditable]', '[autofocus]'];

var queryTabbables = tabbables.join(',');
var queryGuardTabbables = queryTabbables + ', [data-focus-guard]';

var getFocusables$1 = function getFocusables(parents, withGuards) {
  return parents.reduce(function (acc, parent) {
    return acc.concat(
    // add all tabbables inside
    toArray(parent.querySelectorAll(withGuards ? queryGuardTabbables : queryTabbables)),
    // add if node is tabble itself
    parent.parentNode ? toArray(parent.parentNode.querySelectorAll(tabbables.join(','))).filter(function (node) {
      return node === parent;
    }) : []);
  }, []);
};

var getParentAutofocusables = function getParentAutofocusables(parent) {
  var parentFocus = parent.querySelectorAll('[' + FOCUS_AUTO + ']');
  return toArray(parentFocus).map(function (node) {
    return getFocusables$1([node]);
  }).reduce(function (acc, nodes) {
    return acc.concat(nodes);
  }, []);
};

var isElementHidden = function isElementHidden(computedStyle) {
  if (!computedStyle || !computedStyle.getPropertyValue) {
    return false;
  }
  return computedStyle.getPropertyValue('display') === 'none' || computedStyle.getPropertyValue('visibility') === 'hidden';
};

var isVisible = function isVisible(node) {
  return !node || node === document || node.nodeType === Node.DOCUMENT_NODE || !isElementHidden(window.getComputedStyle(node, null)) && isVisible(node.parentNode);
};

var notHiddenInput = function notHiddenInput(node) {
  return !((node.tagName === 'INPUT' || node.tagName === 'BUTTON') && (node.type === 'hidden' || node.disabled));
};

var getParents = function getParents(node) {
  var parents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  parents.push(node);
  if (node.parentNode) {
    getParents(node.parentNode, parents);
  }
  return parents;
};

var getCommonParent = function getCommonParent(nodea, nodeb) {
  var parentsA = getParents(nodea);
  var parentsB = getParents(nodeb);

  for (var i = 0; i < parentsA.length; i += 1) {
    var currentParent = parentsA[i];
    if (parentsB.indexOf(currentParent) >= 0) {
      return currentParent;
    }
  }
  return false;
};

var filterFocusable = function filterFocusable(nodes) {
  return toArray(nodes).filter(function (node) {
    return isVisible(node);
  }).filter(function (node) {
    return notHiddenInput(node);
  });
};

var getTabbableNodes = function getTabbableNodes(topNodes, withGuards) {
  return orderByTabIndex(filterFocusable(getFocusables$1(topNodes, withGuards)), true, withGuards);
};

var getAllTabbableNodes = function getAllTabbableNodes(topNodes) {
  return orderByTabIndex(filterFocusable(getFocusables$1(topNodes)), false);
};

var parentAutofocusables = function parentAutofocusables(topNode) {
  return filterFocusable(getParentAutofocusables(topNode));
};

var isRadio = function isRadio(node) {
  return node.tagName === 'INPUT' && node.type === 'radio';
};

var findSelectedRadio = function findSelectedRadio(node, nodes) {
  return nodes.filter(isRadio).filter(function (el) {
    return el.name === node.name;
  }).filter(function (el) {
    return el.checked;
  })[0] || node;
};

var pickFirstFocus = function pickFirstFocus(nodes) {
  if (nodes[0] && nodes.length > 1) {
    if (isRadio(nodes[0]) && nodes[0].name) {
      return findSelectedRadio(nodes[0], nodes);
    }
  }
  return nodes[0];
};

var _typeof$1 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var filterNested = function filterNested(nodes) {
  var l = nodes.length;
  for (var i = 0; i < l; i += 1) {
    var _loop = function _loop(j) {
      if (i !== j) {
        if (nodes[i].contains(nodes[j])) {
          return {
            v: filterNested(nodes.filter(function (x) {
              return x !== nodes[j];
            }))
          };
        }
      }
    };

    for (var j = 0; j < l; j += 1) {
      var _ret = _loop(j);

      if ((typeof _ret === 'undefined' ? 'undefined' : _typeof$1(_ret)) === "object") return _ret.v;
    }
  }
  return nodes;
};

var getTopParent = function getTopParent(node) {
  return node.parentNode ? getTopParent(node.parentNode) : node;
};

var getAllAffectedNodes = function getAllAffectedNodes(node) {
  var nodes = asArray(node);
  return nodes.filter(Boolean).reduce(function (acc, currentNode) {
    var group = currentNode.getAttribute(FOCUS_GROUP);
    acc.push.apply(acc, group ? filterNested(toArray(getTopParent(currentNode).querySelectorAll('[' + FOCUS_GROUP + '="' + group + '"]:not([' + FOCUS_DISABLED + '="disabled"])'))) : [currentNode]);
    return acc;
  }, []);
};

var findAutoFocused = function findAutoFocused(autoFocusables) {
  return function (node) {
    return !!node.autofocus || node.dataset && !!node.dataset.autofocus || autoFocusables.indexOf(node) >= 0;
  };
};

var isGuard = function isGuard(node) {
  return node.dataset && node.dataset.focusGuard;
};
var notAGuard = function notAGuard(node) {
  return !isGuard(node);
};

var newFocus = function newFocus(innerNodes, outerNodes, activeElement, lastNode, autoFocused) {
  var cnt = innerNodes.length;
  var firstFocus = innerNodes[0];
  var lastFocus = innerNodes[cnt - 1];

  // focus is inside
  if (innerNodes.indexOf(activeElement) >= 0) {
    return undefined;
  }

  var activeIndex = outerNodes.indexOf(activeElement);
  var lastIndex = outerNodes.indexOf(lastNode || activeIndex);
  var lastNodeInside = innerNodes.indexOf(lastNode);
  var indexDiff = activeIndex - lastIndex;
  var firstNodeIndex = outerNodes.indexOf(firstFocus);
  var lastNodeIndex = outerNodes.indexOf(lastFocus);

  // new focus
  if (activeIndex === -1 || lastNodeInside === -1) {
    return innerNodes.indexOf(autoFocused.length ? pickFirstFocus(autoFocused) : pickFirstFocus(innerNodes));
  }
  // old focus
  if (!indexDiff && lastNodeInside >= 0) {
    return lastNodeInside;
  }
  // first element
  if (activeIndex <= firstNodeIndex && isGuard(activeElement) && Math.abs(indexDiff) > 1) {
    return 0;
  }
  // jump out
  if (indexDiff && Math.abs(indexDiff) > 1) {
    return lastNodeInside;
  }
  // focus above lock
  if (activeIndex <= firstNodeIndex) {
    return cnt - 1;
  }
  // focus below lock
  if (activeIndex > lastNodeIndex) {
    return 0;
  }
  // index is inside tab order, but outside Lock
  if (indexDiff) {
    if (Math.abs(indexDiff) > 1) {
      return lastNodeInside;
    }
    return (cnt + lastNodeInside + indexDiff) % cnt;
  }
  // do nothing
  return undefined;
};

var getTopCommonParent = function getTopCommonParent(baseActiveElement, leftEntry, rightEntries) {
  var activeElements = asArray(baseActiveElement);
  var leftEntries = asArray(leftEntry);
  var activeElement = activeElements[0];
  var topCommon = null;
  leftEntries.filter(Boolean).forEach(function (entry) {
    topCommon = getCommonParent(topCommon || entry, entry) || topCommon;
    rightEntries.filter(Boolean).forEach(function (subEntry) {
      var common = getCommonParent(activeElement, subEntry);
      if (common) {
        if (!topCommon || common.contains(topCommon)) {
          topCommon = common;
        } else {
          topCommon = getCommonParent(common, topCommon);
        }
      }
    });
  });
  return topCommon;
};

var allParentAutofocusables = function allParentAutofocusables(entries) {
  return entries.reduce(function (acc, node) {
    return acc.concat(parentAutofocusables(node));
  }, []);
};

var reorderNodes = function reorderNodes(srcNodes, dstNodes) {
  var remap = new Map();
  // no Set(dstNodes) for IE11 :(
  dstNodes.forEach(function (entity) {
    return remap.set(entity.node, entity);
  });
  // remap to dstNodes
  return srcNodes.map(function (node) {
    return remap.get(node);
  }).filter(Boolean);
};

var getFocusMerge = function getFocusMerge(topNode, lastNode) {
  var activeElement = document && document.activeElement;
  var entries = getAllAffectedNodes(topNode).filter(notAGuard);

  var commonParent = getTopCommonParent(activeElement || topNode, topNode, entries);

  var innerElements = getTabbableNodes(entries).filter(function (_ref4) {
    var node = _ref4.node;
    return notAGuard(node);
  });

  if (!innerElements[0]) {
    innerElements = getAllTabbableNodes(entries).filter(function (_ref5) {
      var node = _ref5.node;
      return notAGuard(node);
    });
    if (!innerElements[0]) {
      return undefined;
    }
  }

  var outerNodes = getTabbableNodes([commonParent]).map(function (_ref6) {
    var node = _ref6.node;
    return node;
  });
  var orderedInnerElements = reorderNodes(outerNodes, innerElements);
  var innerNodes = orderedInnerElements.map(function (_ref7) {
    var node = _ref7.node;
    return node;
  });

  var newId = newFocus(innerNodes, outerNodes, activeElement, lastNode, innerNodes.filter(findAutoFocused(allParentAutofocusables(entries))));

  if (newId === undefined) {
    return newId;
  }
  return orderedInnerElements[newId];
};

var focusOn = function focusOn(target) {
  target.focus();
  if (target.contentWindow) {
    target.contentWindow.focus();
  }
};

var guardCount = 0;
var lockDisabled = false;

var setFocus = (function (topNode, lastNode) {
  var focusable = getFocusMerge(topNode, lastNode);

  if (lockDisabled) {
    return;
  }

  if (focusable) {
    if (guardCount > 2) {
      // eslint-disable-next-line no-console
      console.error('FocusLock: focus-fighting detected. Only one focus management system could be active. ' + 'See https://github.com/theKashey/focus-lock/#focus-fighting');
      lockDisabled = true;
      setTimeout(function () {
        lockDisabled = false;
      }, 1);
      return;
    }
    guardCount++;
    focusOn(focusable.node);
    guardCount--;
  }
});

var util = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deferAction = deferAction;
exports.inlineProp = void 0;

function deferAction(action) {
  // Hidding setImmediate from Webpack to avoid inserting polyfill
  var _window = window,
      setImmediate = _window.setImmediate;

  if (typeof setImmediate !== 'undefined') {
    setImmediate(action);
  } else {
    setTimeout(action, 1);
  }
}

var inlineProp = function inlineProp(name, value) {
  var obj = {};
  obj[name] = value;
  return obj;
};

exports.inlineProp = inlineProp;
});

unwrapExports(util);
var util_1 = util.deferAction;
var util_2 = util.inlineProp;

var Trap = createCommonjsModule(function (module, exports) {





Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = interopRequireDefault(toConsumableArray);

var _react = interopRequireDefault(React__default);

var _propTypes = interopRequireDefault(propTypes);

var _reactClientsideEffect = interopRequireDefault(withSideEffect);

var _focusLock = interopRequireWildcard(setFocus);





var focusOnBody = function focusOnBody() {
  return document && document.activeElement === document.body;
};

var isFreeFocus = function isFreeFocus() {
  return focusOnBody() || (0, _focusLock.focusIsHidden)();
};

var lastActiveTrap = null;
var lastActiveFocus = null;
var lastPortaledElement = null;
var focusWasOutsideWindow = false;

var defaultWhitelist = function defaultWhitelist() {
  return true;
};

var focusWhitelisted = function focusWhitelisted(activeElement) {
  return (lastActiveTrap.whiteList || defaultWhitelist)(activeElement);
};

var recordPortal = function recordPortal(observerNode, portaledElement) {
  lastPortaledElement = {
    observerNode: observerNode,
    portaledElement: portaledElement
  };
};

var focusIsPortaledPair = function focusIsPortaledPair(element) {
  return lastPortaledElement && lastPortaledElement.portaledElement === element;
};

function autoGuard(startIndex, end, step, allNodes) {
  var lastGuard = null;
  var i = startIndex;

  do {
    var item = allNodes[i];

    if (item.guard) {
      if (item.node.dataset.focusAutoGuard) {
        lastGuard = item;
      }
    } else if (item.lockItem) {
      if (i !== startIndex) {
        // we will tab to the next element
        return;
      }

      lastGuard = null;
    } else {
      break;
    }
  } while ((i += step) !== end);

  if (lastGuard) {
    lastGuard.node.tabIndex = 0;
  }
}

var extractRef = function extractRef(ref) {
  return ref && 'current' in ref ? ref.current : ref;
};

var activateTrap = function activateTrap() {
  var result = false;

  if (lastActiveTrap) {
    var _lastActiveTrap = lastActiveTrap,
        observed = _lastActiveTrap.observed,
        persistentFocus = _lastActiveTrap.persistentFocus,
        autoFocus = _lastActiveTrap.autoFocus,
        shards = _lastActiveTrap.shards;
    var workingNode = observed || lastPortaledElement && lastPortaledElement.portaledElement;
    var activeElement = document && document.activeElement;

    if (workingNode) {
      var workingArea = [workingNode].concat((0, _toConsumableArray2.default)(shards.map(extractRef).filter(Boolean)));

      if (!activeElement || focusWhitelisted(activeElement)) {
        if (persistentFocus || focusWasOutsideWindow || !isFreeFocus() || !lastActiveFocus && autoFocus) {
          if (workingNode && !((0, _focusLock.focusInside)(workingArea) || focusIsPortaledPair(activeElement))) {
            if (document && !lastActiveFocus && activeElement && !autoFocus) {
              activeElement.blur();
              document.body.focus();
            } else {
              result = (0, _focusLock.default)(workingArea, lastActiveFocus);
              lastPortaledElement = {};
            }
          }

          focusWasOutsideWindow = false;
          lastActiveFocus = document && document.activeElement;
        }
      }

      if (document) {
        var newActiveElement = document && document.activeElement;
        var allNodes = (0, _focusLock.getFocusabledIn)(workingArea);
        var focusedItem = allNodes.find(function (_ref) {
          var node = _ref.node;
          return node === newActiveElement;
        });

        if (focusedItem) {
          // remove old focus
          allNodes.filter(function (_ref2) {
            var guard = _ref2.guard,
                node = _ref2.node;
            return guard && node.dataset.focusAutoGuard;
          }).forEach(function (_ref3) {
            var node = _ref3.node;
            return node.removeAttribute('tabIndex');
          });
          var focusedIndex = allNodes.indexOf(focusedItem);
          autoGuard(focusedIndex, allNodes.length, +1, allNodes);
          autoGuard(focusedIndex, -1, -1, allNodes);
        }
      }
    }
  }

  return result;
};

var onTrap = function onTrap(event) {
  if (activateTrap() && event) {
    // prevent scroll jump
    event.stopPropagation();
    event.preventDefault();
  }
};

var onBlur = function onBlur() {
  return (0, util.deferAction)(activateTrap);
};

var onFocus = function onFocus(event) {
  // detect portal
  var source = event.target;
  var currentNode = event.currentTarget;

  if (!currentNode.contains(source)) {
    recordPortal(currentNode, source);
  }
};

var FocusWatcher = function FocusWatcher() {
  return null;
};

var FocusTrap = function FocusTrap(_ref4) {
  var children = _ref4.children;
  return _react.default.createElement("div", {
    onBlur: onBlur,
    onFocus: onFocus
  }, children);
};

FocusTrap.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes.default.node.isRequired
} : {};

var onWindowBlur = function onWindowBlur() {
  focusWasOutsideWindow = true;
};

var attachHandler = function attachHandler() {
  document.addEventListener('focusin', onTrap, true);
  document.addEventListener('focusout', onBlur);
  window.addEventListener('blur', onWindowBlur);
};

var detachHandler = function detachHandler() {
  document.removeEventListener('focusin', onTrap, true);
  document.removeEventListener('focusout', onBlur);
  window.removeEventListener('blur', onWindowBlur);
};

function reducePropsToState(propsList) {
  return propsList.filter(function (_ref5) {
    var disabled = _ref5.disabled;
    return !disabled;
  });
}

function handleStateChangeOnClient(traps) {
  var trap = traps.slice(-1)[0];

  if (trap && !lastActiveTrap) {
    attachHandler();
  }

  var lastTrap = lastActiveTrap;
  var sameTrap = lastTrap && trap && trap.id === lastTrap.id;
  lastActiveTrap = trap;

  if (lastTrap && !sameTrap) {
    lastTrap.onDeactivation(); // return focus only of last trap was removed

    if (!traps.filter(function (_ref6) {
      var id = _ref6.id;
      return id === lastTrap.id;
    }).length) {
      // allow defer is no other trap is awaiting restore
      lastTrap.returnFocus(!trap);
    }
  }

  if (trap) {
    lastActiveFocus = null;

    if (!sameTrap || lastTrap.observed !== trap.observed) {
      trap.onActivation();
    }

    activateTrap();
    (0, util.deferAction)(activateTrap);
  } else {
    detachHandler();
    lastActiveFocus = null;
  }
} // bind medium


medium.mediumFocus.assignSyncMedium(onFocus);

medium.mediumBlur.assignMedium(onBlur);

medium.mediumEffect.assignMedium(function (cb) {
  return cb({
    moveFocusInside: _focusLock.default,
    focusInside: _focusLock.focusInside
  });
});

var _default = (0, _reactClientsideEffect.default)(reducePropsToState, handleStateChangeOnClient)(FocusWatcher);

exports.default = _default;
});

unwrapExports(Trap);

var Combination = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties);

var _extends2 = interopRequireDefault(_extends_1);

var _react = interopRequireDefault(React__default);

var _Lock = interopRequireDefault(Lock);

var _Trap = interopRequireDefault(Trap);

/* that would be a BREAKING CHANGE!
// delaying sidecar execution till the first usage
const RequireSideCar = (props) => {
  // eslint-disable-next-line global-require
  const SideCar = require('./Trap').default;
  return <SideCar {...props} />;
};
*/
var FocusLockCombination = _react.default.forwardRef(function (props, ref) {
  return _react.default.createElement(_Lock.default, (0, _extends2.default)({
    sideCar: _Trap.default,
    ref: ref
  }, props));
});

var _ref = _Lock.default.propTypes || {},
    sideCar = _ref.sideCar,
    propTypes = (0, _objectWithoutProperties2.default)(_ref, ["sideCar"]);

FocusLockCombination.propTypes = propTypes;
var _default = FocusLockCombination;
exports.default = _default;
});

unwrapExports(Combination);

var AutoFocusInside_1 = createCommonjsModule(function (module, exports) {





Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = interopRequireDefault(_extends_1);

var _react = interopRequireDefault(React__default);

var _propTypes = interopRequireDefault(propTypes);

var constants$1 = interopRequireWildcard(constants);



var AutoFocusInside = function AutoFocusInside(_ref) {
  var disabled = _ref.disabled,
      children = _ref.children,
      className = _ref.className;
  return _react.default.createElement("div", (0, _extends2.default)({}, (0, util.inlineProp)(constants$1.FOCUS_AUTO, !disabled), {
    className: className
  }), children);
};

AutoFocusInside.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes.default.node.isRequired,
  disabled: _propTypes.default.bool,
  className: _propTypes.default.string
} : {};
AutoFocusInside.defaultProps = {
  disabled: false,
  className: undefined
};
var _default = AutoFocusInside;
exports.default = _default;
});

unwrapExports(AutoFocusInside_1);

var MoveFocusInside_1 = createCommonjsModule(function (module, exports) {





Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = interopRequireDefault(_extends_1);

var _react = interopRequireDefault(React__default);

var _propTypes = interopRequireDefault(propTypes);

var constants$1 = interopRequireWildcard(constants);





function MoveFocusInside(_ref) {
  var isDisabled = _ref.disabled,
      className = _ref.className,
      children = _ref.children;

  var ref = _react.default.useRef(null);

  var disabled = _react.default.useRef(isDisabled);

  var moveFocus = function moveFocus() {
    var observed = ref.current;

    medium.mediumEffect.useMedium(function (car) {
      if (!disabled.current && observed) {
        if (!car.focusInside(observed)) {
          car.moveFocusInside(observed, null);
        }
      }
    });
  };

  _react.default.useEffect(function () {
    disabled.current = isDisabled;
    moveFocus();
  }, [isDisabled]);

  return _react.default.createElement("div", (0, _extends2.default)({}, (0, util.inlineProp)(constants$1.FOCUS_AUTO, !isDisabled), {
    ref: ref,
    className: className
  }), children);
}

MoveFocusInside.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes.default.node.isRequired,
  disabled: _propTypes.default.bool,
  className: _propTypes.default.string
} : {};
MoveFocusInside.defaultProps = {
  disabled: false,
  className: undefined
};
var _default = MoveFocusInside;
exports.default = _default;
});

unwrapExports(MoveFocusInside_1);

var FreeFocusInside_1 = createCommonjsModule(function (module, exports) {





Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = interopRequireDefault(_extends_1);

var _react = interopRequireDefault(React__default);

var _propTypes = interopRequireDefault(propTypes);

var constants$1 = interopRequireWildcard(constants);



var FreeFocusInside = function FreeFocusInside(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return _react.default.createElement("div", (0, _extends2.default)({}, (0, util.inlineProp)(constants$1.FOCUS_ALLOW, true), {
    className: className
  }), children);
};

FreeFocusInside.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes.default.node.isRequired,
  className: _propTypes.default.string
} : {};
FreeFocusInside.defaultProps = {
  className: undefined
};
var _default = FreeFocusInside;
exports.default = _default;
});

unwrapExports(FreeFocusInside_1);

var UI = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "FocusLockUI", {
  enumerable: true,
  get: function get() {
    return _Lock.default;
  }
});
Object.defineProperty(exports, "AutoFocusInside", {
  enumerable: true,
  get: function get() {
    return _AutoFocusInside.default;
  }
});
Object.defineProperty(exports, "MoveFocusInside", {
  enumerable: true,
  get: function get() {
    return _MoveFocusInside.default;
  }
});
Object.defineProperty(exports, "FreeFocusInside", {
  enumerable: true,
  get: function get() {
    return _FreeFocusInside.default;
  }
});
Object.defineProperty(exports, "InFocusGuard", {
  enumerable: true,
  get: function get() {
    return _FocusGuard.default;
  }
});
exports.default = void 0;

var _Lock = interopRequireDefault(Lock);

var _AutoFocusInside = interopRequireDefault(AutoFocusInside_1);

var _MoveFocusInside = interopRequireDefault(MoveFocusInside_1);

var _FreeFocusInside = interopRequireDefault(FreeFocusInside_1);

var _FocusGuard = interopRequireDefault(FocusGuard);

var _default = _Lock.default;
exports.default = _default;
});

unwrapExports(UI);

var cjs = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {};
exports.default = void 0;

var _Combination = interopRequireDefault(Combination);



Object.keys(UI).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return UI[key];
    }
  });
});
var _default = _Combination.default;
exports.default = _default;
});

var FocusLock = unwrapExports(cjs);

function getContainer(container) {
  container = typeof container === "function" ? container() : container;
  return reactDom.findDOMNode(container);
}

var Portal$1 = React.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      container = _ref.container,
      _ref$isDisabled = _ref.isDisabled,
      isDisabled = _ref$isDisabled === void 0 ? false : _ref$isDisabled,
      onRendered = _ref.onRendered;

  var _useState = React.useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      mountNode = _useState2[0],
      setMountNode = _useState2[1];

  var handleRef = useForkRef(children.ref, ref);
  useEnhancedEffect(function () {
    if (!isDisabled) {
      setMountNode(getContainer(container) || document.body);
    }
  }, [container, isDisabled]);
  useEnhancedEffect(function () {
    if (mountNode && !isDisabled) {
      setRef(ref, mountNode);
      return function () {
        setRef(ref, null);
      };
    }

    return undefined;
  }, [ref, mountNode, isDisabled]);
  useEnhancedEffect(function () {
    if (onRendered && (mountNode || isDisabled)) {
      onRendered();
    }
  }, [onRendered, mountNode, isDisabled]);

  if (isDisabled) {
    React.Children.only(children);
    return React.cloneElement(children, {
      ref: handleRef
    });
  }

  return mountNode ? reactDom.createPortal(children, mountNode) : mountNode;
});
Portal$1.displayName = "Portal";

var baseProps$1 = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  rounded: "md",
  transition: "all 0.2s",
  flex: "0 0 auto",
  _hover: {
    bg: "blackAlpha.100"
  },
  _active: {
    bg: "blackAlpha.200"
  },
  _disabled: {
    cursor: "not-allowed"
  },
  _focus: {
    boxShadow: "outline"
  }
};
var sizes$1 = {
  lg: {
    button: "40px",
    icon: "16px"
  },
  md: {
    button: "32px",
    icon: "12px"
  },
  sm: {
    button: "24px",
    icon: "10px"
  }
};

var CloseButton = function CloseButton(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? "md" : _ref$size,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? "button" : _ref$type,
      isDisabled = _ref.isDisabled,
      color = _ref.color,
      _ref$ariaLabel = _ref["aria-label"],
      ariaLabel = _ref$ariaLabel === void 0 ? "Close" : _ref$ariaLabel,
      rest = _objectWithoutProperties(_ref, ["size", "type", "isDisabled", "color", "aria-label"]);

  var _useColorMode = useColorMode(),
      colorMode = _useColorMode.colorMode;

  var hoverColor = {
    light: "blackAlpha.100",
    dark: "whiteAlpha.100"
  };
  var activeColor = {
    light: "blackAlpha.200",
    dark: "whiteAlpha.200"
  };
  var buttonSize = sizes$1[size] && sizes$1[size]["button"];
  var iconSize = sizes$1[size] && sizes$1[size]["icon"];
  return core.jsx(PseudoBox, _extends({
    as: "button",
    outline: "none",
    "aria-disabled": isDisabled,
    disabled: isDisabled,
    "aria-label": ariaLabel,
    size: buttonSize,
    _hover: {
      bg: hoverColor[colorMode]
    },
    _active: {
      bg: activeColor[colorMode]
    },
    type: type
  }, baseProps$1, rest), core.jsx(Icon, {
    color: color,
    focusable: "false",
    name: "close",
    "aria-hidden": true,
    size: iconSize
  }));
};

var defaultParent = typeof document !== 'undefined' ? document.body : null;
var counterMap = new WeakMap();
var uncontrolledNodes = new WeakMap();
var markerMap = {};
var lockCount = 0;
var hideOthers = function (originalTarget, parentNode, markerName) {
    if (parentNode === void 0) { parentNode = defaultParent; }
    if (markerName === void 0) { markerName = "data-aria-hidden"; }
    var targets = Array.isArray(originalTarget) ? originalTarget : [originalTarget];
    if (!markerMap[markerName]) {
        markerMap[markerName] = new WeakMap();
    }
    var markerCounter = markerMap[markerName];
    var hiddenNodes = [];
    var deep = function (parent) {
        if (!parent || targets.indexOf(parent) >= 0) {
            return;
        }
        Array.prototype.forEach.call(parent.children, function (node) {
            if (targets.some(function (target) { return node.contains(target); })) {
                deep(node);
            }
            else {
                var attr = node.getAttribute('aria-hidden');
                var alreadyHidden = attr !== null && attr !== 'false';
                var counterValue = (counterMap.get(node) || 0) + 1;
                var markerValue = (markerCounter.get(node) || 0) + 1;
                counterMap.set(node, counterValue);
                markerCounter.set(node, markerValue);
                hiddenNodes.push(node);
                if (counterValue === 1 && alreadyHidden) {
                    uncontrolledNodes.set(node, true);
                }
                if (markerValue === 1) {
                    node.setAttribute(markerName, 'true');
                }
                if (!alreadyHidden) {
                    node.setAttribute('aria-hidden', 'true');
                }
            }
        });
    };
    deep(parentNode);
    lockCount++;
    return function () {
        hiddenNodes.forEach(function (node) {
            var counterValue = counterMap.get(node) - 1;
            var markerValue = markerCounter.get(node) - 1;
            counterMap.set(node, counterValue);
            markerCounter.set(node, markerValue);
            if (!counterValue) {
                if (!uncontrolledNodes.has(node)) {
                    node.removeAttribute('aria-hidden');
                }
                uncontrolledNodes.delete(node);
            }
            if (!markerValue) {
                node.removeAttribute(markerName);
            }
        });
        lockCount--;
        if (!lockCount) {
            counterMap = new WeakMap();
            counterMap = new WeakMap();
            uncontrolledNodes = new WeakMap();
            markerMap = {};
        }
    };
};

var exenv = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
/* global define */

(function () {

	var canUseDOM = !!(
		typeof window !== 'undefined' &&
		window.document &&
		window.document.createElement
	);

	var ExecutionEnvironment = {

		canUseDOM: canUseDOM,

		canUseWorkers: typeof Worker !== 'undefined',

		canUseEventListeners:
			canUseDOM && !!(window.addEventListener || window.attachEvent),

		canUseViewport: canUseDOM && !!window.screen

	};

	if ( module.exports) {
		module.exports = ExecutionEnvironment;
	} else {
		window.ExecutionEnvironment = ExecutionEnvironment;
	}

}());
});

var canUseDOM$1 = exenv.canUseDOM;
var ModalContext = React.createContext({});

var useModalContext = function useModalContext() {
  return React.useContext(ModalContext);
}; ////////////////////////////////////////////////////////////////////////


function useAriaHider(_ref) {
  var isOpen = _ref.isOpen,
      id = _ref.id,
      enableInert = _ref.enableInert,
      _ref$container = _ref.container,
      container = _ref$container === void 0 ? canUseDOM$1 ? document.body : null : _ref$container;
  var mountRef = React.useRef(canUseDOM$1 ? document.getElementById(id) || document.createElement("div") : null);
  React.useEffect(function () {
    var undoAriaHidden = null;
    var mountNode = mountRef.current;

    if (isOpen && canUseDOM$1) {
      mountRef.current.id = id;
      container.appendChild(mountRef.current);

      if (enableInert) {
        undoAriaHidden = hideOthers(mountNode);
      }
    }

    return function () {
      if (enableInert && undoAriaHidden != null) {
        undoAriaHidden();
      }

      if (mountNode.parentElement) {
        mountNode.parentElement.removeChild(mountNode);
      }
    };
  }, [isOpen, id, enableInert, container]);
  return mountRef;
} ////////////////////////////////////////////////////////////////////////


var Modal = function Modal(_ref2) {
  var isOpen = _ref2.isOpen,
      initialFocusRef = _ref2.initialFocusRef,
      finalFocusRef = _ref2.finalFocusRef,
      onClose = _ref2.onClose,
      _ref2$blockScrollOnMo = _ref2.blockScrollOnMount,
      blockScrollOnMount = _ref2$blockScrollOnMo === void 0 ? true : _ref2$blockScrollOnMo,
      _ref2$closeOnEsc = _ref2.closeOnEsc,
      closeOnEsc = _ref2$closeOnEsc === void 0 ? true : _ref2$closeOnEsc,
      _ref2$closeOnOverlayC = _ref2.closeOnOverlayClick,
      closeOnOverlayClick = _ref2$closeOnOverlayC === void 0 ? true : _ref2$closeOnOverlayC,
      _ref2$useInert = _ref2.useInert,
      useInert = _ref2$useInert === void 0 ? true : _ref2$useInert,
      _ref2$scrollBehavior = _ref2.scrollBehavior,
      scrollBehavior = _ref2$scrollBehavior === void 0 ? "outside" : _ref2$scrollBehavior,
      isCentered = _ref2.isCentered,
      _ref2$addAriaLabels = _ref2.addAriaLabels,
      addAriaLabels = _ref2$addAriaLabels === void 0 ? true : _ref2$addAriaLabels,
      preserveScrollBarGap = _ref2.preserveScrollBarGap,
      _ref2$formatIds = _ref2.formatIds,
      formatIds = _ref2$formatIds === void 0 ? function (id) {
    return {
      content: "modal-".concat(id),
      header: "modal-".concat(id, "-header"),
      body: "modal-".concat(id, "-body")
    };
  } : _ref2$formatIds,
      container = _ref2.container,
      _ref2$returnFocusOnCl = _ref2.returnFocusOnClose,
      returnFocusOnClose = _ref2$returnFocusOnCl === void 0 ? true : _ref2$returnFocusOnCl,
      children = _ref2.children,
      id = _ref2.id,
      _ref2$size = _ref2.size,
      size = _ref2$size === void 0 ? "md" : _ref2$size;
  var contentRef = React.useRef(null);
  var uuid = useId();

  var _id = id || uuid;

  var contentId = formatIds(_id)["content"];
  var headerId = formatIds(_id)["header"];
  var bodyId = formatIds(_id)["body"];
  var portalId = "chakra-portal-".concat(_id);
  var addAriaLabelledby = false;
  var addAriaDescribedby = false;

  if (_typeof(addAriaLabels) === "object") {
    addAriaLabelledby = addAriaLabels["header"];
    addAriaDescribedby = addAriaLabels["body"];
  }

  if (typeof addAriaLabels === "boolean") {
    addAriaLabelledby = addAriaLabels;
    addAriaDescribedby = addAriaLabels;
  }

  React.useEffect(function () {
    var dialogNode = contentRef.current;

    if (isOpen && blockScrollOnMount) {
      disableBodyScroll(dialogNode, {
        reserveScrollBarGap: preserveScrollBarGap
      });
    }

    return function () {
      return enableBodyScroll(dialogNode);
    };
  }, [isOpen, blockScrollOnMount, preserveScrollBarGap]);
  React.useEffect(function () {
    var func = function func(event) {
      if (event.key === "Escape" && closeOnEsc) {
        onClose(event, "pressedEscape");
      }
    };

    if (isOpen && !closeOnOverlayClick) {
      canUseDOM$1 && document.addEventListener("keydown", func);
    }

    return function () {
      canUseDOM$1 && document.removeEventListener("keydown", func);
    };
  }, [isOpen, onClose, closeOnOverlayClick, closeOnEsc]);
  var mountRef = useAriaHider({
    isOpen: isOpen,
    id: portalId,
    enableInert: useInert,
    container: container
  });
  var context = {
    isOpen: isOpen,
    initialFocusRef: initialFocusRef,
    onClose: onClose,
    blockScrollOnMount: blockScrollOnMount,
    closeOnEsc: closeOnEsc,
    closeOnOverlayClick: closeOnOverlayClick,
    returnFocusOnClose: returnFocusOnClose,
    contentRef: contentRef,
    scrollBehavior: scrollBehavior,
    isCentered: isCentered,
    headerId: headerId,
    bodyId: bodyId,
    contentId: contentId,
    size: size,
    addAriaLabelledby: addAriaLabelledby,
    addAriaDescribedby: addAriaDescribedby
  };
  var activateFocusLock = React.useCallback(function () {
    if (initialFocusRef && initialFocusRef.current) {
      initialFocusRef.current.focus();
    } else {
      if (contentRef.current) {
        var focusables = getFocusables(contentRef.current);

        if (focusables.length === 0) {
          contentRef.current.focus();
        }
      }
    }
  }, [initialFocusRef]);
  var deactivateFocusLock = React.useCallback(function () {
    if (finalFocusRef && finalFocusRef.current) {
      finalFocusRef.current.focus();
    }
  }, [finalFocusRef]);
  if (!isOpen) return null;
  return /*#__PURE__*/React__default.createElement(ModalContext.Provider, {
    value: context
  }, /*#__PURE__*/React__default.createElement(Portal$1, {
    container: mountRef.current
  }, /*#__PURE__*/React__default.createElement(FocusLock, {
    returnFocus: returnFocusOnClose && !finalFocusRef,
    onActivation: activateFocusLock,
    onDeactivation: deactivateFocusLock
  }, children)));
}; ////////////////////////////////////////////////////////////////////////


var ModalOverlay = React__default.forwardRef(function (props, ref) {
  return /*#__PURE__*/React__default.createElement(Box, _extends({
    pos: "fixed",
    bg: "rgba(0,0,0,0.4)",
    left: "0",
    top: "0",
    w: "100vw",
    h: "100vh",
    ref: ref,
    zIndex: "overlay",
    onClick: wrapEvent(props.onClick, function (event) {
      event.stopPropagation();
    })
  }, props));
});
ModalOverlay.displayName = "ModalOverlay"; ////////////////////////////////////////////////////////////////////////

var ModalContent = React__default.forwardRef(function (_ref3, ref) {
  var onClick = _ref3.onClick,
      children = _ref3.children,
      _ref3$zIndex = _ref3.zIndex,
      zIndex = _ref3$zIndex === void 0 ? "modal" : _ref3$zIndex,
      noStyles = _ref3.noStyles,
      props = _objectWithoutProperties(_ref3, ["onClick", "children", "zIndex", "noStyles"]);

  var _useModalContext = useModalContext(),
      contentRef = _useModalContext.contentRef,
      onClose = _useModalContext.onClose,
      isCentered = _useModalContext.isCentered,
      bodyId = _useModalContext.bodyId,
      headerId = _useModalContext.headerId,
      contentId = _useModalContext.contentId,
      size = _useModalContext.size,
      closeOnEsc = _useModalContext.closeOnEsc,
      addAriaLabelledby = _useModalContext.addAriaLabelledby,
      addAriaDescribedby = _useModalContext.addAriaDescribedby,
      scrollBehavior = _useModalContext.scrollBehavior,
      closeOnOverlayClick = _useModalContext.closeOnOverlayClick;

  var _contentRef = useForkRef(ref, contentRef);

  var _useColorMode = useColorMode(),
      colorMode = _useColorMode.colorMode;

  var colorModeStyles = {
    light: {
      bg: "white",
      shadow: "0 7px 14px 0 rgba(0,0,0, 0.1), 0 3px 6px 0 rgba(0, 0, 0, .07)"
    },
    dark: {
      bg: "gray.700",
      shadow: "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px"
    }
  };
  var boxStyleProps = colorModeStyles[colorMode];
  var wrapperStyle = {};
  var contentStyle = {};

  if (isCentered) {
    wrapperStyle = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    };
  } else {
    contentStyle = {
      top: "3.75rem",
      mx: "auto"
    };
  }

  if (scrollBehavior === "inside") {
    wrapperStyle = _objectSpread2({}, wrapperStyle, {
      maxHeight: "calc(100vh - 7.5rem)",
      overflow: "hidden",
      top: "3.75rem"
    });
    contentStyle = _objectSpread2({}, contentStyle, {
      height: "100%",
      top: 0
    });
  }

  if (scrollBehavior === "outside") {
    wrapperStyle = _objectSpread2({}, wrapperStyle, {
      overflowY: "auto",
      overflowX: "hidden"
    });
    contentStyle = _objectSpread2({}, contentStyle, {
      my: "3.75rem",
      top: 0
    });
  }

  if (noStyles) {
    wrapperStyle = {};
    contentStyle = {};
  }

  return /*#__PURE__*/React__default.createElement(Box, _extends({
    pos: "fixed",
    left: "0",
    top: "0",
    w: "100%",
    h: "100%",
    zIndex: zIndex,
    onClick: function onClick(event) {
      event.stopPropagation();

      if (closeOnOverlayClick) {
        onClose(event, "clickedOverlay");
      }
    },
    onKeyDown: function onKeyDown(event) {
      if (event.key === "Escape") {
        event.stopPropagation();

        if (closeOnEsc) {
          onClose(event, "pressedEscape");
        }
      }
    }
  }, wrapperStyle), /*#__PURE__*/React__default.createElement(Box, _extends({
    ref: _contentRef,
    as: "section",
    role: "dialog",
    "aria-modal": "true",
    tabIndex: -1,
    outline: 0,
    maxWidth: size,
    w: "100%",
    id: contentId
  }, addAriaDescribedby && {
    "aria-describedby": bodyId
  }, addAriaLabelledby && {
    "aria-labelledby": headerId
  }, {
    pos: "relative",
    d: "flex",
    flexDir: "column",
    zIndex: zIndex,
    onClick: wrapEvent(onClick, function (event) {
      return event.stopPropagation();
    })
  }, boxStyleProps, contentStyle, props), children));
});
ModalContent.displayName = "ModalContent"; ////////////////////////////////////////////////////////////////////////

var ModalHeader = React.forwardRef(function (props, ref) {
  var _useModalContext2 = useModalContext(),
      headerId = _useModalContext2.headerId;

  return /*#__PURE__*/React__default.createElement(Box, _extends({
    ref: ref,
    px: 6,
    py: 4,
    id: headerId,
    as: "header",
    position: "relative",
    fontSize: "xl",
    fontWeight: "semibold"
  }, props));
});
ModalHeader.displayName = "ModalHeader"; ////////////////////////////////////////////////////////////////////////

var ModalFooter = React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React__default.createElement(Box, _extends({
    display: "flex",
    justifyContent: "flex-end",
    ref: ref,
    px: 6,
    py: 4,
    as: "footer"
  }, props));
});
ModalFooter.displayName = "ModalFooter"; ////////////////////////////////////////////////////////////////////////

var ModalBody = React.forwardRef(function (props, ref) {
  var _useModalContext3 = useModalContext(),
      bodyId = _useModalContext3.bodyId,
      scrollBehavior = _useModalContext3.scrollBehavior;

  var style = {};

  if (scrollBehavior === "inside") {
    style = {
      overflowY: "auto"
    };
  }

  return /*#__PURE__*/React__default.createElement(Box, _extends({
    ref: ref,
    id: bodyId,
    px: 6,
    py: 2,
    flex: "1"
  }, style, props));
});
ModalBody.displayName = "ModalBody"; ////////////////////////////////////////////////////////////////////////

var ModalCloseButton = React.forwardRef(function (props, ref) {
  var _useModalContext4 = useModalContext(),
      onClose = _useModalContext4.onClose;

  return /*#__PURE__*/React__default.createElement(CloseButton, _extends({
    ref: ref,
    onClick: onClose,
    position: "absolute",
    top: "8px",
    right: "12px"
  }, props));
});
ModalCloseButton.displayName = "ModalCloseButton"; ////////////////////////////////////////////////////////////////////////

var formatIds = function formatIds(id) {
  return {
    content: "alert-dialog-".concat(id),
    header: "alert-dialog-".concat(id, "-label"),
    body: "alert-dialog-".concat(id, "-desc")
  };
};

var AlertDialog = function AlertDialog(_ref) {
  var leastDestructiveRef = _ref.leastDestructiveRef,
      props = _objectWithoutProperties(_ref, ["leastDestructiveRef"]);

  return core.jsx(Modal, _extends({
    formatIds: formatIds,
    initialFocusRef: leastDestructiveRef
  }, props));
};

var AlertDialogContent = React.forwardRef(function (props, ref) {
  return core.jsx(ModalContent, _extends({
    ref: ref,
    role: "alertdialog"
  }, props));
});
AlertDialogContent.displayName = "AlertDialogContent";

function string2Hex(str) {
  var hash = 0;
  if (str.length === 0) return hash;

  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
    hash = hash & hash;
  }

  var color = "#";

  for (var j = 0; j < 3; j++) {
    var value = hash >> j * 8 & 255;
    color += ("00" + value.toString(16)).substr(-2);
  }

  return color;
}

var avatarSizes = {
  "2xs": 4,
  xs: 6,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  "2xl": 32,
  full: "full"
};

var useAvatarStyle = function useAvatarStyle(_ref) {
  var size = _ref.size,
      name = _ref.name,
      showBorder = _ref.showBorder,
      borderColor = _ref.borderColor;

  var _useTheme = useTheme(),
      colors = _useTheme.colors;

  var _useColorMode = useColorMode(),
      colorMode = _useColorMode.colorMode;

  var bg = name ? string2Hex(name) : colors.gray[400];
  var color = name ? isDarkColor(bg) ? "#fff" : "gray.800" : "#fff";
  var _borderColor = {
    light: "#fff",
    dark: "gray.800"
  };
  var baseProps = {
    display: "inline-flex",
    rounded: "full",
    alignItems: "center",
    flexShrink: "0",
    justifyContent: "center",
    position: "relative"
  };
  return _objectSpread2({}, baseProps, {
    size: avatarSizes[size],
    bg: bg,
    color: color
  }, showBorder && {
    border: "2px",
    borderColor: borderColor || _borderColor[colorMode]
  });
};

function useHasImageLoaded(props) {
  var src = props.src,
      onLoad = props.onLoad,
      onError = props.onError,
      _props$enabled = props.enabled,
      enabled = _props$enabled === void 0 ? true : _props$enabled;
  var isMounted = React.useRef(true);

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      hasLoaded = _useState2[0],
      setHasLoaded = _useState2[1];

  React.useEffect(function () {
    if (!src || !enabled) {
      return;
    }

    var image = new window.Image();
    image.src = src;

    image.onload = function (event) {
      if (isMounted.current) {
        setHasLoaded(true);
        onLoad && onLoad(event);
      }
    };

    image.onerror = function (event) {
      if (isMounted.current) {
        setHasLoaded(false);
        onError && onError(event);
      }
    };
  }, [src, onLoad, onError, enabled]);
  React.useEffect(function () {
    return function () {
      isMounted.current = false;
    };
  }, []);
  return hasLoaded;
}
var NativeImage = React.forwardRef(function (_ref, ref) {
  var htmlWidth = _ref.htmlWidth,
      htmlHeight = _ref.htmlHeight,
      alt = _ref.alt,
      props = _objectWithoutProperties(_ref, ["htmlWidth", "htmlHeight", "alt"]);

  return core.jsx("img", _extends({
    width: htmlWidth,
    height: htmlHeight,
    ref: ref,
    alt: alt
  }, props));
});
var Image = React.forwardRef(function (props, ref) {
  var src = props.src,
      fallbackSrc = props.fallbackSrc,
      onError = props.onError,
      onLoad = props.onLoad,
      ignoreFallback = props.ignoreFallback,
      rest = _objectWithoutProperties(props, ["src", "fallbackSrc", "onError", "onLoad", "ignoreFallback"]);

  var hasLoaded = useHasImageLoaded({
    src: src,
    onLoad: onLoad,
    onError: onError,
    enabled: !Boolean(ignoreFallback)
  });
  var imageProps = ignoreFallback ? {
    src: src,
    onLoad: onLoad,
    onError: onError
  } : {
    src: hasLoaded ? src : fallbackSrc
  };
  return core.jsx(Box, _extends({
    as: NativeImage,
    ref: ref
  }, imageProps, rest));
});
Image.displayName = "Image";

var AvatarBadge = function AvatarBadge(props) {
  var _useColorMode = useColorMode(),
      colorMode = _useColorMode.colorMode;

  var borderColor = {
    light: "white",
    dark: "gray.800"
  };
  return core.jsx(Box, _extends({
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transform: "translate(25%, 25%)",
    bottom: "0",
    right: "0",
    border: "0.2em solid",
    borderColor: borderColor[colorMode],
    rounded: "full"
  }, props));
};

var getInitials = function getInitials(name) {
  var _name$split = name.split(" "),
      _name$split2 = _slicedToArray(_name$split, 2),
      firstName = _name$split2[0],
      lastName = _name$split2[1];

  if (firstName && lastName) {
    return "".concat(firstName.charAt(0)).concat(lastName.charAt(0));
  } else {
    return firstName.charAt(0);
  }
};

var AvatarName = function AvatarName(_ref) {
  var name = _ref.name,
      props = _objectWithoutProperties(_ref, ["name"]);

  return core.jsx(Box, _extends({
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "medium",
    "aria-label": name
  }, props), name ? getInitials(name) : null);
};

var DefaultAvatar = function DefaultAvatar(props) {
  return core.jsx(Box, _extends({
    size: "100%"
  }, props), core.jsx("svg", {
    fill: "#fff",
    viewBox: "0 0 128 128",
    role: "img"
  }, core.jsx("g", null, core.jsx("path", {
    d: "M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"
  }), core.jsx("path", {
    d: "M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"
  }))));
};

var Avatar = function Avatar(_ref2) {
  var size = _ref2.size,
      showBorder = _ref2.showBorder,
      name = _ref2.name,
      src = _ref2.src,
      borderColor = _ref2.borderColor,
      children = _ref2.children,
      rest = _objectWithoutProperties(_ref2, ["size", "showBorder", "name", "src", "borderColor", "children"]);

  var avatarStyleProps = useAvatarStyle({
    name: name,
    size: size,
    showBorder: showBorder,
    borderColor: borderColor
  });
  var hasLoaded = useHasImageLoaded({
    src: src
  });
  var theme = useTheme();
  var sizeKey = avatarSizes[size];
  var _size = theme.sizes[sizeKey];
  var fontSize = "calc(".concat(_size, " / 2.5)");

  var renderChildren = function renderChildren() {
    if (src && hasLoaded) {
      return core.jsx(Box, {
        as: "img",
        size: "100%",
        rounded: "full",
        objectFit: "cover",
        src: src,
        alt: name
      });
    }

    if (src && !hasLoaded) {
      if (name) {
        return core.jsx(AvatarName, {
          size: _size,
          name: name
        });
      } else {
        return core.jsx(DefaultAvatar, {
          "aria-label": name
        });
      }
    }

    if (!src && name) {
      return core.jsx(AvatarName, {
        size: _size,
        name: name
      });
    }

    return core.jsx(DefaultAvatar, {
      "aria-label": name
    });
  };

  return core.jsx(Box, _extends({
    fontSize: fontSize,
    lineHeight: _size,
    verticalAlign: "top"
  }, avatarStyleProps, rest), renderChildren(), children);
};

Avatar.defaultProps = {
  size: "md"
};

var AspectRatioBox = function AspectRatioBox(_ref) {
  var _ref$ratio = _ref.ratio,
      ratio = _ref$ratio === void 0 ? 4 / 3 : _ref$ratio,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["ratio", "children"]);

  var child = React.Children.only(children);
  return core.jsx(PseudoBox, _extends({
    pos: "relative",
    _before: {
      h: 0,
      content: "\"\"",
      d: "block",
      pb: "".concat(1 / ratio * 100, "%")
    }
  }, props), React.cloneElement(child, {
    pos: "absolute",
    w: "full",
    h: "full",
    top: 0,
    left: 0
  }));
};

var Flex = React.forwardRef(function (_ref, ref) {
  var align = _ref.align,
      justify = _ref.justify,
      wrap = _ref.wrap,
      direction = _ref.direction,
      rest = _objectWithoutProperties(_ref, ["align", "justify", "wrap", "direction"]);

  return /*#__PURE__*/React__default.createElement(Box, _extends({
    ref: ref,
    display: "flex",
    flexDirection: direction,
    alignItems: align,
    justifyContent: justify,
    flexWrap: wrap
  }, rest));
});
Flex.displayName = "Flex";

var MoreAvatarLabel = function MoreAvatarLabel(_ref) {
  var size = _ref.size,
      label = _ref.label,
      props = _objectWithoutProperties(_ref, ["size", "label"]);

  var borderColor = {
    light: "#fff",
    dark: "gray.800"
  };
  var bg = {
    light: "gray.200",
    dark: "whiteAlpha.400"
  };
  var theme = useTheme();
  var sizeKey = avatarSizes[size];
  var _size = theme.sizes[sizeKey];
  var fontSize = "calc(".concat(_size, " / 2.75)");

  var _useColorMode = useColorMode(),
      colorMode = _useColorMode.colorMode;

  return core.jsx(Flex, _extends({
    bg: bg[colorMode],
    color: "inherit",
    rounded: "full",
    alignItems: "center",
    justifyContent: "center",
    border: "2px",
    borderColor: borderColor[colorMode],
    size: avatarSizes[size],
    fontSize: fontSize
  }, props), label);
};

var AvatarGroup = function AvatarGroup(_ref2) {
  var size = _ref2.size,
      children = _ref2.children,
      borderColor = _ref2.borderColor,
      max = _ref2.max,
      _ref2$spacing = _ref2.spacing,
      spacing = _ref2$spacing === void 0 ? -3 : _ref2$spacing,
      rest = _objectWithoutProperties(_ref2, ["size", "children", "borderColor", "max", "spacing"]);

  var validChildren = cleanChildren(children);
  var count = validChildren.length;
  var clones = validChildren.map(function (child, index) {
    if (max && index > max) {
      return null;
    }

    if (max == null || max && index < max) {
      var isFirstAvatar = index === 0;
      return React.cloneElement(child, {
        ml: isFirstAvatar ? 0 : spacing,
        size: size,
        borderColor: borderColor || child.props.borderColor,
        showBorder: true,
        zIndex: count - index
      });
    }

    if (max && index === max) {
      return core.jsx(MoreAvatarLabel, {
        key: index,
        size: size,
        ml: spacing,
        label: "+".concat(count - max)
      });
    }
  });
  return core.jsx(Flex, _extends({
    alignItems: "center"
  }, rest), clones);
};

var solidStyle = function solidStyle(_ref) {
  var colors = _ref.theme.colors,
      color = _ref.color;

  var _color = colors[color] && colors[color][500];

  var darkModeBg = addOpacity(_color, 0.6);
  return {
    light: {
      bg: get$2(color, 500),
      color: "white"
    },
    dark: {
      bg: darkModeBg,
      color: "whiteAlpha.800"
    }
  };
};

var subtleStyle = function subtleStyle(_ref2) {
  var colors = _ref2.theme.colors,
      color = _ref2.color;

  var _color = colors[color] && colors[color][200];

  var alphaColors = generateAlphaColors(_color);
  var darkModeBg = alphaColors[300];
  return {
    light: {
      bg: get$2(color, 100),
      color: get$2(color, 800)
    },
    dark: {
      bg: darkModeBg,
      color: get$2(color, 200)
    }
  };
};

var outlineStyle = function outlineStyle(_ref3) {
  var colors = _ref3.theme.colors,
      color = _ref3.color;

  var _color = colors[color] && colors[color][200];

  var darkModeColor = addOpacity(_color, 0.8);
  var boxShadowColor = colors[color] && colors[color][500];
  return {
    light: {
      boxShadow: "inset 0 0 0px 1px " + boxShadowColor,
      color: get$2(color, 500)
    },
    dark: {
      boxShadow: "inset 0 0 0px 1px " + darkModeColor,
      color: darkModeColor
    }
  };
};

var variantProps = function variantProps(props) {
  var variant = props.variant,
      colorMode = props.colorMode;

  switch (variant) {
    case "solid":
      return solidStyle(props)[colorMode];

    case "subtle":
      return subtleStyle(props)[colorMode];

    case "outline":
      return outlineStyle(props)[colorMode];

    default:
      return {};
  }
};

var useBadgeStyle = function useBadgeStyle(props) {
  var theme = useTheme();

  var _useColorMode = useColorMode(),
      colorMode = _useColorMode.colorMode;

  var _props = _objectSpread2({}, props, {
    theme: theme,
    colorMode: colorMode
  });

  return variantProps(_props);
};

var Badge = React.forwardRef(function (_ref, ref) {
  var _ref$variantColor = _ref.variantColor,
      variantColor = _ref$variantColor === void 0 ? "gray" : _ref$variantColor,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? "subtle" : _ref$variant,
      props = _objectWithoutProperties(_ref, ["variantColor", "variant"]);

  // Wrong usage of `variantColor` prop is quite common
  // Let's add a warning hook that validates the passed variantColor
  useVariantColorWarning("Badge", variantColor);
  var badgeStyleProps = useBadgeStyle({
    color: variantColor,
    variant: variant
  });
  return core.jsx(Box, _extends({
    ref: ref,
    display: "inline-block",
    px: 1,
    textTransform: "uppercase",
    fontSize: "xs",
    borderRadius: "sm",
    fontWeight: "bold",
    whiteSpace: "nowrap",
    verticalAlign: "middle"
  }, badgeStyleProps, props));
});
Badge.displayName = "Badge";

var baseStyleProps = {
  transition: "all 0.15s ease-out",
  cursor: "pointer",
  textDecoration: "none",
  outline: "none",
  _focus: {
    boxShadow: "outline"
  },
  _disabled: {
    opacity: "0.4",
    cursor: "not-allowed",
    textDecoration: "none"
  }
};
var Link = React.forwardRef(function (_ref, ref) {
  var isDisabled = _ref.isDisabled,
      isExternal = _ref.isExternal,
      onClick = _ref.onClick,
      rest = _objectWithoutProperties(_ref, ["isDisabled", "isExternal", "onClick"]);

  var externalProps = isExternal ? {
    target: "_blank",
    rel: "noopener noreferrer"
  } : null;
  return core.jsx(PseudoBox, _extends({
    as: "a",
    ref: ref,
    tabIndex: isDisabled ? -1 : undefined,
    "aria-disabled": isDisabled,
    onClick: isDisabled ? function (event) {
      return event.preventDefault();
    } : onClick,
    _hover: {
      textDecoration: "underline"
    }
  }, externalProps, baseStyleProps, rest));
});
Link.displayName = "Link";

var BreadcrumbSeparator = React.forwardRef(function (_ref, ref) {
  var spacing = _ref.spacing,
      props = _objectWithoutProperties(_ref, ["spacing"]);

  return core.jsx(Box, _extends({
    ref: ref,
    role: "presentation",
    as: "span",
    mx: spacing
  }, props));
});
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
var Span = React.forwardRef(function (props, ref) {
  return core.jsx(Box, _extends({
    ref: ref,
    as: "span"
  }, props));
});
var BreadcrumbLink = React.forwardRef(function (_ref2, ref) {
  var isCurrentPage = _ref2.isCurrentPage,
      props = _objectWithoutProperties(_ref2, ["isCurrentPage"]);

  var Comp = isCurrentPage ? Span : Link;
  return core.jsx(Comp, _extends({
    ref: ref,
    "aria-current": isCurrentPage ? "page" : null
  }, props));
});
BreadcrumbLink.displayName = "BreadcrumbLink";

var BreadcrumbItem = function BreadcrumbItem(_ref3) {
  var isCurrentPage = _ref3.isCurrentPage,
      separator = _ref3.separator,
      isLastChild = _ref3.isLastChild,
      addSeparator = _ref3.addSeparator,
      spacing = _ref3.spacing,
      children = _ref3.children,
      rest = _objectWithoutProperties(_ref3, ["isCurrentPage", "separator", "isLastChild", "addSeparator", "spacing", "children"]);

  var validChildren = cleanChildren(children);
  var clones = validChildren.map(function (child) {
    if (child.type === BreadcrumbLink) {
      return React.cloneElement(child, {
        isCurrentPage: isCurrentPage
      });
    }

    if (child.type === BreadcrumbSeparator) {
      return React.cloneElement(child, {
        spacing: spacing,
        children: child.props.children || separator
      });
    }

    return child;
  });
  return core.jsx(Box, _extends({
    display: "inline-flex",
    alignItems: "center",
    as: "li"
  }, rest), clones, !isLastChild && addSeparator && core.jsx(BreadcrumbSeparator, {
    spacing: spacing,
    children: separator
  }));
};

var Breadcrumb = function Breadcrumb(_ref4) {
  var children = _ref4.children,
      _ref4$spacing = _ref4.spacing,
      spacing = _ref4$spacing === void 0 ? 2 : _ref4$spacing,
      _ref4$addSeparator = _ref4.addSeparator,
      addSeparator = _ref4$addSeparator === void 0 ? true : _ref4$addSeparator,
      _ref4$separator = _ref4.separator,
      separator = _ref4$separator === void 0 ? "/" : _ref4$separator,
      rest = _objectWithoutProperties(_ref4, ["children", "spacing", "addSeparator", "separator"]);

  var validChildren = cleanChildren(children);
  var clones = validChildren.map(function (child, index) {
    return React.cloneElement(child, {
      addSeparator: addSeparator,
      separator: separator,
      spacing: spacing,
      isLastChild: validChildren.length === index + 1
    });
  });
  return core.jsx(Box, _extends({
    as: "nav",
    "aria-label": "breadcrumb"
  }, rest), core.jsx(Box, {
    as: "ol"
  }, clones));
};

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n  border: 0px;\n  clip: rect(0px, 0px, 0px, 0px);\n  height: 1px;\n  width: 1px;\n  margin: -1px;\n  padding: 0px;\n  overflow: hidden;\n  white-space: nowrap;\n  position: absolute;\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var VisuallyHidden = styled(Box)(_templateObject$2());
VisuallyHidden.displayName = "VisuallyHidden";

function _templateObject$3() {
  var data = _taggedTemplateLiteral(["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var spin = core.keyframes(_templateObject$3());
var sizes$2 = {
  xs: "0.75rem",
  sm: "1rem",
  md: "1.5rem",
  lg: "2rem",
  xl: "3rem"
};
var Spinner = React.forwardRef(function (_ref, ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? "md" : _ref$size,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? "Loading..." : _ref$label,
      _ref$thickness = _ref.thickness,
      thickness = _ref$thickness === void 0 ? "2px" : _ref$thickness,
      _ref$speed = _ref.speed,
      speed = _ref$speed === void 0 ? "0.45s" : _ref$speed,
      color = _ref.color,
      _ref$emptyColor = _ref.emptyColor,
      emptyColor = _ref$emptyColor === void 0 ? "transparent" : _ref$emptyColor,
      props = _objectWithoutProperties(_ref, ["size", "label", "thickness", "speed", "color", "emptyColor"]);

  var _size = sizes$2[size] || size;

  return core.jsx(Box, _extends({
    ref: ref,
    display: "inline-block",
    borderWidth: thickness,
    borderColor: "currentColor",
    borderBottomColor: emptyColor,
    borderLeftColor: emptyColor,
    borderStyle: "solid",
    rounded: "full",
    color: color,
    animation: "".concat(spin, " ").concat(speed, " linear infinite"),
    size: _size
  }, props), label && core.jsx(VisuallyHidden, null, label));
});
Spinner.displayName = "Spinner";

var grayGhostStyle = {
  light: {
    color: "inherit",
    _hover: {
      bg: "gray.100"
    },
    _active: {
      bg: "gray.200"
    }
  },
  dark: {
    color: "whiteAlpha.900",
    _hover: {
      bg: "whiteAlpha.200"
    },
    _active: {
      bg: "whiteAlpha.300"
    }
  }
};

var ghostVariantProps = function ghostVariantProps(_ref) {
  var color = _ref.color,
      colorMode = _ref.colorMode,
      theme = _ref.theme;

  var _color = theme.colors[color] && theme.colors[color][200];

  var result;

  if (color === "gray") {
    result = grayGhostStyle;
  } else {
    result = {
      light: {
        color: "".concat(color, ".500"),
        bg: "transparent",
        _hover: {
          bg: "".concat(color, ".50")
        },
        _active: {
          bg: "".concat(color, ".100")
        }
      },
      dark: {
        color: "".concat(color, ".200"),
        bg: "transparent",
        _hover: {
          bg: addOpacity(_color, 0.12)
        },
        _active: {
          bg: addOpacity(_color, 0.24)
        }
      }
    };
  }

  return result[colorMode];
}; ////////////////////////////////////////////////////////////


var outlineVariantProps = function outlineVariantProps(props) {
  var color = props.color,
      colorMode = props.colorMode;
  var borderColor = {
    light: "gray.200",
    dark: "whiteAlpha.300"
  };
  return _objectSpread2({
    border: "1px",
    borderColor: color === "gray" ? borderColor[colorMode] : "current"
  }, ghostVariantProps(props));
}; ////////////////////////////////////////////////////////////


var graySolidStyle = {
  light: {
    bg: "gray.100",
    _hover: {
      bg: "gray.200"
    },
    _active: {
      bg: "gray.300"
    }
  },
  dark: {
    bg: "whiteAlpha.200",
    _hover: {
      bg: "whiteAlpha.300"
    },
    _active: {
      bg: "whiteAlpha.400"
    }
  }
};

var solidVariantProps = function solidVariantProps(_ref2) {
  var color = _ref2.color,
      colorMode = _ref2.colorMode;
  var style = {
    light: {
      bg: "".concat(color, ".500"),
      color: "white",
      _hover: {
        bg: "".concat(color, ".600")
      },
      _active: {
        bg: "".concat(color, ".700")
      }
    },
    dark: {
      bg: "".concat(color, ".200"),
      color: "gray.800",
      _hover: {
        bg: "".concat(color, ".300")
      },
      _active: {
        bg: "".concat(color, ".400")
      }
    }
  };

  if (color === "gray") {
    style = graySolidStyle;
  }

  return style[colorMode];
}; ////////////////////////////////////////////////////////////


var linkVariantProps = function linkVariantProps(_ref3) {
  var color = _ref3.color,
      colorMode = _ref3.colorMode;
  var _color = {
    light: "".concat(color, ".500"),
    dark: "".concat(color, ".200")
  };
  var _activeColor = {
    light: "".concat(color, ".700"),
    dark: "".concat(color, ".500")
  };
  return {
    p: 0,
    height: "auto",
    lineHeight: "normal",
    color: _color[colorMode],
    _hover: {
      textDecoration: "underline"
    },
    _active: {
      color: _activeColor[colorMode]
    }
  };
}; ////////////////////////////////////////////////////////////


var disabledProps = {
  _disabled: {
    opacity: "40%",
    cursor: "not-allowed",
    boxShadow: "none"
  }
}; ////////////////////////////////////////////////////////////

var sizes$3 = {
  lg: {
    height: 12,
    minWidth: 12,
    fontSize: "lg",
    px: 6
  },
  md: {
    height: 10,
    minWidth: 10,
    fontSize: "md",
    px: 4
  },
  sm: {
    height: 8,
    minWidth: 8,
    fontSize: "sm",
    px: 3
  },
  xs: {
    height: 6,
    minWidth: 6,
    fontSize: "xs",
    px: 2
  }
};

var sizeProps = function sizeProps(_ref4) {
  var size = _ref4.size;
  return sizes$3[size];
}; ////////////////////////////////////////////////////////////


var focusProps = {
  _focus: {
    boxShadow: "outline"
  }
}; ////////////////////////////////////////////////////////////

var unstyledStyle = {
  userSelect: "inherit",
  bg: "none",
  border: 0,
  color: "inherit",
  display: "inline",
  font: "inherit",
  lineHeight: "inherit",
  m: 0,
  p: 0,
  textAlign: "inherit"
}; ////////////////////////////////////////////////////////////

var variantProps$1 = function variantProps(props) {
  switch (props.variant) {
    case "solid":
      return solidVariantProps(props);

    case "ghost":
      return ghostVariantProps(props);

    case "link":
      return linkVariantProps(props);

    case "outline":
      return outlineVariantProps(props);

    case "unstyled":
      return unstyledStyle;

    default:
      return {};
  }
}; ////////////////////////////////////////////////////////////


var baseProps$2 = {
  display: "inline-flex",
  appearance: "none",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 250ms",
  userSelect: "none",
  position: "relative",
  whiteSpace: "nowrap",
  verticalAlign: "middle",
  lineHeight: "1.2",
  outline: "none"
}; ////////////////////////////////////////////////////////////

var useButtonStyle = function useButtonStyle(props) {
  var _useColorMode = useColorMode(),
      colorMode = _useColorMode.colorMode;

  var theme = useTheme();

  var _props = _objectSpread2({}, props, {
    colorMode: colorMode,
    theme: theme
  });

  return _objectSpread2({}, baseProps$2, {}, sizeProps(_props), {}, focusProps, {}, disabledProps, {}, variantProps$1(_props));
};

var ButtonIcon = function ButtonIcon(_ref) {
  var icon = _ref.icon,
      props = _objectWithoutProperties(_ref, ["icon"]);

  if (typeof icon === "string") {
    return core.jsx(Icon, _extends({
      focusable: "false",
      "aria-hidden": "true",
      name: icon,
      color: "currentColor"
    }, props));
  }

  return core.jsx(Box, _extends({
    as: icon,
    "data-custom-icon": true,
    focusable: "false",
    "aria-hidden": "true",
    color: "currentColor"
  }, props));
};

var Button = React.forwardRef(function (_ref2, ref) {
  var isDisabled = _ref2.isDisabled,
      isLoading = _ref2.isLoading,
      isActive = _ref2.isActive,
      isFullWidth = _ref2.isFullWidth,
      children = _ref2.children,
      _ref2$as = _ref2.as,
      Comp = _ref2$as === void 0 ? "button" : _ref2$as,
      _ref2$variantColor = _ref2.variantColor,
      variantColor = _ref2$variantColor === void 0 ? "gray" : _ref2$variantColor,
      leftIcon = _ref2.leftIcon,
      rightIcon = _ref2.rightIcon,
      _ref2$variant = _ref2.variant,
      variant = _ref2$variant === void 0 ? "solid" : _ref2$variant,
      loadingText = _ref2.loadingText,
      _ref2$iconSpacing = _ref2.iconSpacing,
      iconSpacing = _ref2$iconSpacing === void 0 ? 2 : _ref2$iconSpacing,
      _ref2$type = _ref2.type,
      type = _ref2$type === void 0 ? "button" : _ref2$type,
      _ref2$size = _ref2.size,
      size = _ref2$size === void 0 ? "md" : _ref2$size,
      colorMode = _ref2.colorMode,
      rest = _objectWithoutProperties(_ref2, ["isDisabled", "isLoading", "isActive", "isFullWidth", "children", "as", "variantColor", "leftIcon", "rightIcon", "variant", "loadingText", "iconSpacing", "type", "size", "colorMode"]);

  // Wrong usage of `variantColor` prop is quite common
  // Let's add a warning hook that validates the passed variantColor
  useVariantColorWarning("Button", variantColor);
  var buttonStyleProps = useButtonStyle({
    color: variantColor,
    variant: variant,
    size: size,
    colorMode: colorMode
  });

  var _isDisabled = isDisabled || isLoading;

  return core.jsx(PseudoBox, _extends({
    disabled: _isDisabled,
    "aria-disabled": _isDisabled,
    ref: ref,
    as: Comp,
    type: type,
    borderRadius: "md",
    fontWeight: "semibold",
    width: isFullWidth ? "full" : undefined,
    "data-active": isActive ? "true" : undefined
  }, buttonStyleProps, rest), leftIcon && !isLoading && core.jsx(ButtonIcon, {
    ml: -1,
    mr: iconSpacing,
    icon: leftIcon
  }), isLoading && core.jsx(Spinner, {
    position: loadingText ? "relative" : "absolute",
    mr: loadingText ? iconSpacing : 0,
    color: "currentColor",
    size: "1em"
  }), isLoading ? loadingText || core.jsx(Box, {
    as: "span",
    opacity: "0"
  }, children) : children, rightIcon && !isLoading && core.jsx(ButtonIcon, {
    mr: -1,
    ml: iconSpacing,
    icon: rightIcon
  }));
});
Button.displayName = "Button";

var ButtonGroup = function ButtonGroup(_ref) {
  var size = _ref.size,
      variantColor = _ref.variantColor,
      variant = _ref.variant,
      isAttached = _ref.isAttached,
      _ref$spacing = _ref.spacing,
      spacing = _ref$spacing === void 0 ? 2 : _ref$spacing,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["size", "variantColor", "variant", "isAttached", "spacing", "children"]);

  var validChildren = cleanChildren(children);
  var clones = validChildren.map(function (child, index) {
    var isFirst = index === 0;
    var isLast = index === validChildren.length - 1;
    return React.cloneElement(child, _objectSpread2({
      size: size || child.props.size,
      variantColor: child.props.variantColor || variantColor,
      variant: child.props.variant || variant,
      _focus: {
        boxShadow: "outline",
        zIndex: 1
      }
    }, !isLast && !isAttached && {
      mr: spacing
    }, {}, isFirst && isAttached && {
      roundedRight: 0
    }, {}, isLast && isAttached && {
      roundedLeft: 0
    }, {}, !isLast && isAttached && {
      borderRight: 0
    }, {}, !isFirst && !isLast && isAttached && {
      rounded: 0
    }));
  });
  return core.jsx(Box, _extends({
    display: "inline-block"
  }, rest), clones);
};

var Callout = function Callout(_ref) {
  var _ref$status = _ref.status,
      status = _ref$status === void 0 ? "info" : _ref$status,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? "subtle" : _ref$variant,
      rest = _objectWithoutProperties(_ref, ["status", "variant"]);

  var alertStyleProps = useAlertStyle({
    variant: variant,
    color: statuses[status] && statuses[status]["color"]
  });
  return core.jsx(Box, _extends({}, alertStyleProps, rest));
};

var Code = function Code(_ref) {
  var _ref$variantColor = _ref.variantColor,
      variantColor = _ref$variantColor === void 0 ? "gray" : _ref$variantColor,
      props = _objectWithoutProperties(_ref, ["variantColor"]);

  useVariantColorWarning("Code", variantColor);
  var badgeStyle = useBadgeStyle({
    variant: "subtle",
    color: variantColor
  });
  return core.jsx(Box, _extends({
    as: "code",
    display: "inline-block",
    fontFamily: "mono",
    fontSize: "sm",
    px: "0.2em",
    rounded: "sm"
  }, badgeStyle, props));
};

var ControlBox = styled(Box)(function (_ref) {
  var _css;

  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? "checkbox" : _ref$type,
      _hover = _ref._hover,
      _invalid = _ref._invalid,
      _disabled = _ref._disabled,
      _focus = _ref._focus,
      _checked = _ref._checked,
      _ref$_child = _ref._child,
      _child = _ref$_child === void 0 ? {
    opacity: 0
  } : _ref$_child,
      _ref$_checkedAndChild = _ref._checkedAndChild,
      _checkedAndChild = _ref$_checkedAndChild === void 0 ? {
    opacity: 1
  } : _ref$_checkedAndChild,
      _checkedAndDisabled = _ref._checkedAndDisabled,
      _checkedAndFocus = _ref._checkedAndFocus,
      _checkedAndHover = _ref._checkedAndHover;

  var checkedAndDisabled = "input[type=".concat(type, "]:checked:disabled + &, input[type=").concat(type, "][aria-checked=mixed]:disabled + &"),
      checkedAndHover = "input[type=".concat(type, "]:checked:hover:not(:disabled) + &, input[type=").concat(type, "][aria-checked=mixed]:hover:not(:disabled) + &"),
      checkedAndFocus = "input[type=".concat(type, "]:checked:focus + &, input[type=").concat(type, "][aria-checked=mixed]:focus + &"),
      disabled = "input[type=".concat(type, "]:disabled + &"),
      focus = "input[type=".concat(type, "]:focus + &"),
      hover = "input[type=".concat(type, "]:hover:not(:disabled):not(:checked) + &"),
      checked = "input[type=".concat(type, "]:checked + &, input[type=").concat(type, "][aria-checked=mixed] + &"),
      invalid = "input[type=".concat(type, "][aria-invalid=true] + &");
  return css((_css = {}, _defineProperty(_css, focus, transformAliasProps(_focus)), _defineProperty(_css, hover, transformAliasProps(_hover)), _defineProperty(_css, disabled, transformAliasProps(_disabled)), _defineProperty(_css, invalid, transformAliasProps(_invalid)), _defineProperty(_css, checkedAndDisabled, transformAliasProps(_checkedAndDisabled)), _defineProperty(_css, checkedAndFocus, transformAliasProps(_checkedAndFocus)), _defineProperty(_css, checkedAndHover, transformAliasProps(_checkedAndHover)), _defineProperty(_css, "& > *", transformAliasProps(_child)), _defineProperty(_css, checked, _objectSpread2({}, transformAliasProps(_checked), {
    "& > *": transformAliasProps(_checkedAndChild)
  })), _css));
});
ControlBox.displayName = "ControlBox";
ControlBox.defaultProps = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 120ms",
  flexShrink: "0",
  "aria-hidden": "true"
};

var baseProps$3 = {
  userSelect: "none",
  border: "2px",
  rounded: "md",
  borderColor: "inherit",
  transition: "background-color 120ms, box-shadow 250ms"
};

var interactionProps = function interactionProps(_ref) {
  var color = _ref.color,
      colorMode = _ref.colorMode;
  var isDarkMode = colorMode === "dark";

  var _color = isDarkMode ? 200 : 500;

  return {
    color: "white",
    _checked: {
      bg: get$2(color, _color),
      borderColor: get$2(color, _color),
      color: isDarkMode ? "gray.900" : undefined
    },
    _checkedAndDisabled: {
      borderColor: isDarkMode ? "transparent" : "gray.200",
      bg: isDarkMode ? "whiteAlpha.300" : "gray.200",
      color: isDarkMode ? "whiteAlpha.500" : "gray.500"
    },
    _disabled: {
      bg: isDarkMode ? "whiteAlpha.100" : "gray.100",
      borderColor: isDarkMode ? "transparent" : "gray.100"
    },
    _focus: {
      boxShadow: "outline"
    },
    _invalid: {
      borderColor: isDarkMode ? "red.300" : "red.500"
    }
  };
};

var useCheckboxStyle = function useCheckboxStyle(props) {
  var sizes = {
    lg: 5,
    md: 4,
    sm: props.type === "radio" ? 3 : "auto"
  };
  return _objectSpread2({}, baseProps$3, {}, props.size && {
    rounded: "sm"
  }, {}, interactionProps(props), {
    size: sizes[props.size]
  });
};

var Checkbox = React.forwardRef(function (_ref2, ref) {
  var id = _ref2.id,
      name = _ref2.name,
      value = _ref2.value,
      ariaLabel = _ref2["aria-label"],
      ariaLabelledBy = _ref2["aria-labelledby"],
      _ref2$variantColor = _ref2.variantColor,
      variantColor = _ref2$variantColor === void 0 ? "blue" : _ref2$variantColor,
      defaultIsChecked = _ref2.defaultIsChecked,
      isChecked = _ref2.isChecked,
      isFullWidth = _ref2.isFullWidth,
      _ref2$size = _ref2.size,
      size = _ref2$size === void 0 ? "md" : _ref2$size,
      isDisabled = _ref2.isDisabled,
      isInvalid = _ref2.isInvalid,
      isReadOnly = _ref2.isReadOnly,
      onChange = _ref2.onChange,
      onBlur = _ref2.onBlur,
      onFocus = _ref2.onFocus,
      isIndeterminate = _ref2.isIndeterminate,
      children = _ref2.children,
      iconColor = _ref2.iconColor,
      _ref2$iconSize = _ref2.iconSize,
      iconSize = _ref2$iconSize === void 0 ? "10px" : _ref2$iconSize,
      rest = _objectWithoutProperties(_ref2, ["id", "name", "value", "aria-label", "aria-labelledby", "variantColor", "defaultIsChecked", "isChecked", "isFullWidth", "size", "isDisabled", "isInvalid", "isReadOnly", "onChange", "onBlur", "onFocus", "isIndeterminate", "children", "iconColor", "iconSize"]);

  // Wrong usage of `variantColor` prop is quite common
  // Let's add a warning hook that validates the passed variantColor
  useVariantColorWarning("Checkbox", variantColor);

  var _useColorMode = useColorMode(),
      colorMode = _useColorMode.colorMode;

  var styleProps = useCheckboxStyle({
    color: variantColor,
    size: size,
    colorMode: colorMode
  });
  var ownRef = React.useRef();

  var _ref = useForkRef(ownRef, ref);

  React.useEffect(function () {
    if (_ref.current) {
      _ref.current.indeterminate = Boolean(isIndeterminate);
    }
  }, [isIndeterminate, _ref]);
  return core.jsx(Box, _extends({
    as: "label",
    display: "inline-flex",
    verticalAlign: "top",
    alignItems: "center",
    width: isFullWidth ? "full" : undefined,
    cursor: isDisabled ? "not-allowed" : "pointer"
  }, rest), core.jsx(VisuallyHidden, {
    as: "input",
    type: "checkbox",
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    id: id,
    ref: _ref,
    name: name,
    value: value,
    onChange: isReadOnly ? undefined : onChange,
    onBlur: onBlur,
    onFocus: onFocus,
    defaultChecked: isReadOnly ? undefined : defaultIsChecked,
    checked: isReadOnly ? Boolean(isChecked) : defaultIsChecked ? undefined : isChecked,
    disabled: isDisabled,
    readOnly: isReadOnly,
    "aria-readonly": isReadOnly,
    "aria-invalid": isInvalid,
    "aria-checked": isIndeterminate ? "mixed" : isChecked
  }), core.jsx(ControlBox, _extends({
    opacity: isReadOnly ? 0.8 : 1
  }, styleProps), core.jsx(Icon, {
    name: isIndeterminate ? "minus" : "check",
    size: iconSize,
    color: iconColor,
    transition: "transform 240ms, opacity 240ms"
  })), children && core.jsx(Box, {
    ml: 2,
    fontSize: size,
    userSelect: "none",
    opacity: isDisabled ? 0.4 : 1
  }, children));
});
Checkbox.displayName = "Checkbox";

var CheckboxGroup = function CheckboxGroup(_ref) {
  var onChange = _ref.onChange,
      name = _ref.name,
      variantColor = _ref.variantColor,
      size = _ref.size,
      defaultValue = _ref.defaultValue,
      isInline = _ref.isInline,
      valueProp = _ref.value,
      _ref$spacing = _ref.spacing,
      spacing = _ref$spacing === void 0 ? 2 : _ref$spacing,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["onChange", "name", "variantColor", "size", "defaultValue", "isInline", "value", "spacing", "children"]);

  var _useState = React.useState(defaultValue || []),
      _useState2 = _slicedToArray(_useState, 2),
      values = _useState2[0],
      setValues = _useState2[1];

  var _useRef = React.useRef(valueProp != null),
      isControlled = _useRef.current;

  var _values = isControlled ? valueProp : values;

  var _onChange = function _onChange(event) {
    var _event$target = event.target,
        checked = _event$target.checked,
        value = _event$target.value;
    var newValues;

    if (checked) {
      newValues = [].concat(_toConsumableArray(_values), [value]);
    } else {
      newValues = _values.filter(function (val) {
        return val !== value;
      });
    }

    !isControlled && setValues(newValues);
    onChange && onChange(newValues);
  }; // If no name is passed, we'll generate a random, unique name


  var fallbackName = "checkbox-".concat(useId());

  var _name = name || fallbackName;

  var validChildren = cleanChildren(children);
  var clones = validChildren.map(function (child, index) {
    var isLastCheckbox = validChildren.length === index + 1;
    var spacingProps = isInline ? {
      mr: spacing
    } : {
      mb: spacing
    };
    return core.jsx(Box, _extends({
      key: index,
      display: isInline ? "inline-block" : "block"
    }, !isLastCheckbox && spacingProps), React.cloneElement(child, {
      size: size,
      variantColor: variantColor,
      name: "".concat(_name, "-").concat(index),
      onChange: _onChange,
      isChecked: _values.includes(child.props.value)
    }));
  });
  return core.jsx(Box, _extends({
    role: "group"
  }, rest), clones);
};

var css$1 = function css$1(styleProps) {
  return css(transformAliasProps(styleProps));
};

function _templateObject$4() {
  var data = _taggedTemplateLiteral(["\n  html {\n    line-height: 1.15;\n    -webkit-text-size-adjust: 100%;\n  }\n\n  body {\n    margin: 0;\n  }\n\n  main {\n    display: block;\n  }\n\n  h1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n  }\n\n  hr {\n    box-sizing: content-box;\n    height: 0;\n    overflow: visible;\n  }\n\n  pre {\n    font-family: monospace, monospace;\n    font-size: 1em;\n  }\n\n  a {\n    background-color: transparent;\n  }\n\n  abbr[title] {\n    border-bottom: none;\n    text-decoration: underline;\n    -webkit-text-decoration: underline dotted;\n    text-decoration: underline dotted;\n  }\n\n  b,\n  strong {\n    font-weight: bolder;\n  }\n\n  code,\n  kbd,\n  samp {\n    font-family: monospace, monospace;\n    font-size: 1em;\n  }\n\n  small {\n    font-size: 80%;\n  }\n\n  sub,\n  sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n  }\n\n  sub {\n    bottom: -0.25em;\n  }\n\n  sup {\n    top: -0.5em;\n  }\n\n  img {\n    border-style: none;\n  }\n\n  button,\n  input,\n  optgroup,\n  select,\n  textarea {\n    font-family: inherit;\n    font-size: 100%;\n    line-height: 1.15;\n    margin: 0;\n  }\n\n  button,\n  input {\n    overflow: visible;\n  }\n\n  button,\n  select {\n    text-transform: none;\n  }\n\n  button::-moz-focus-inner,\n  [type=\"button\"]::-moz-focus-inner,\n  [type=\"reset\"]::-moz-focus-inner,\n  [type=\"submit\"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n  }\n\n  fieldset {\n    padding: 0.35em 0.75em 0.625em;\n  }\n\n  legend {\n    box-sizing: border-box;\n    color: inherit;\n    display: table;\n    max-width: 100%;\n    padding: 0;\n    white-space: normal;\n  }\n\n  progress {\n    vertical-align: baseline;\n  }\n\n  textarea {\n    overflow: auto;\n  }\n\n  [type=\"checkbox\"],\n  [type=\"radio\"] {\n    box-sizing: border-box;\n    padding: 0;\n  }\n\n  [type=\"number\"]::-webkit-inner-spin-button,\n  [type=\"number\"]::-webkit-outer-spin-button {\n    -webkit-appearance: none !important;\n  }\n\n  input[type=\"number\"] {\n    -moz-appearance: textfield;\n  }\n\n  [type=\"search\"] {\n    -webkit-appearance: textfield;\n    outline-offset: -2px;\n  }\n\n  [type=\"search\"]::-webkit-search-decoration {\n    -webkit-appearance: none !important;\n  }\n\n  ::-webkit-file-upload-button {\n    -webkit-appearance: button;\n    font: inherit;\n  }\n\n  details {\n    display: block;\n  }\n\n  summary {\n    display: list-item;\n  }\n\n  template {\n    display: none;\n  }\n\n  [hidden] {\n    display: none !important;\n  }\n\n  html {\n    box-sizing: border-box;\n    font-family: sans-serif;\n  }\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n\n  blockquote,\n  dl,\n  dd,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  hr,\n  figure,\n  p,\n  pre {\n    margin: 0;\n  }\n\n  button {\n    background: transparent;\n    padding: 0;\n  }\n\n  fieldset {\n    margin: 0;\n    padding: 0;\n  }\n\n  ol,\n  ul {\n    margin: 0;\n    padding: 0;\n  }\n\n  html {\n    font-family: ", ";\n    line-height: 1.5;\n    -webkit-font-smoothing: antialiased;\n    -webkit-text-size-adjust: 100%;\n    text-rendering: optimizelegibility;\n  }\n\n  hr {\n    border-top-width: 1px;\n  }\n\n  img {\n    border-style: solid;\n  }\n\n  textarea {\n    resize: vertical;\n  }\n\n  button,\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n\n  button::-moz-focus-inner {\n    border: 0 !important;\n  }\n\n  table {\n    border-collapse: collapse;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-size: inherit;\n    font-weight: inherit;\n  }\n\n  a {\n    color: inherit;\n    text-decoration: inherit;\n  }\n\n  button,\n  input,\n  optgroup,\n  select,\n  textarea {\n    padding: 0;\n    line-height: inherit;\n    color: inherit;\n  }\n\n  pre,\n  code,\n  kbd,\n  samp {\n    font-family: ", ";\n  }\n\n  img,\n  svg,\n  video,\n  canvas,\n  audio,\n  iframe,\n  embed,\n  object {\n    display: block;\n    vertical-align: middle;\n  }\n\n  img,\n  video {\n    max-width: 100%;\n    height: auto;\n  }\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}

var tailwindPreflight = function tailwindPreflight(theme) {
  return core.css(_templateObject$4(), theme.fonts.body, theme.fonts.mono);
};

function _templateObject$5() {
  var data = _taggedTemplateLiteral(["\n      html {\n        line-height: 1.5;\n        color: ", ";\n        background-color: ", ";\n      }\n\n      /**\n      * Allow adding a border to an element by just adding a border-width.\n      */\n\n      *,\n      *::before,\n      *::after {\n        border-width: 0;\n        border-style: solid;\n        border-color: ", ";\n      }\n\n      input:-ms-input-placeholder,\n      textarea:-ms-input-placeholder {\n        color: ", ";\n      }\n\n      input::-ms-input-placeholder,\n      textarea::-ms-input-placeholder {\n        color: ", ";\n      }\n\n      input::placeholder,\n      textarea::placeholder {\n        color: ", ";\n      }\n    "]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}

var defaultConfig = function defaultConfig(theme) {
  return {
    light: {
      color: theme.colors.gray[800],
      bg: undefined,
      borderColor: theme.colors.gray[200],
      placeholderColor: theme.colors.gray[400]
    },
    dark: {
      color: theme.colors.whiteAlpha[900],
      bg: theme.colors.gray[800],
      borderColor: theme.colors.whiteAlpha[300],
      placeholderColor: theme.colors.whiteAlpha[400]
    }
  };
};

var CSSReset = function CSSReset(_ref) {
  var config = _ref.config;

  var _useColorMode = useColorMode(),
      colorMode = _useColorMode.colorMode;

  var configCSS = function configCSS(theme) {
    var _defaultConfig = defaultConfig(theme);

    var _config = config ? config(theme, _defaultConfig) : defaultConfig(theme);

    var _config$colorMode = _config[colorMode],
        color = _config$colorMode.color,
        bg = _config$colorMode.bg,
        borderColor = _config$colorMode.borderColor,
        placeholderColor = _config$colorMode.placeholderColor;
    return core.css(_templateObject$5(), color, bg, borderColor, placeholderColor, placeholderColor, placeholderColor);
  };

  return core.jsx(core.Global, {
    styles: function styles(theme) {
      return core.css([tailwindPreflight(theme), configCSS(theme)]);
    }
  });
};

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$6() {
  var data = _taggedTemplateLiteral(["\n  0% {\n    stroke-dasharray: 1, 400;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 400, 400;\n    stroke-dashoffset: -100;\n  }\n\n  100% {\n    stroke-dasharray: 400, 400;\n    stroke-dashoffset: -300;\n  }\n"]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}
var circularProgressCircle = core.keyframes(_templateObject$6());
var spin$1 = core.keyframes(_templateObject2());
var CircularProgressLabel = function CircularProgressLabel(props) {
  return core.jsx(Box, _extends({
    position: "absolute",
    left: "50%",
    top: "50%",
    lineHeight: "1",
    transform: "translate(-50%, -50%)",
    fontSize: "0.25em",
    css: {
      fontVariantNumeric: "tabular-nums"
    }
  }, props));
};

function getComputedProps(_ref) {
  var min = _ref.min,
      max = _ref.max,
      size = _ref.size,
      value = _ref.value,
      angle = _ref.angle,
      thickness = _ref.thickness,
      trackColor = _ref.trackColor,
      color = _ref.color,
      capIsRound = _ref.capIsRound,
      isIndeterminate = _ref.isIndeterminate;
  var radius = 50;
  var diameter = radius * 2;
  var circumference = diameter * Math.PI;
  var strokeDasharray = Math.round(circumference * 1000) / 1000;
  var viewBox = diameter / (1 - thickness / 2);
  var viewBoxAttr = "".concat(viewBox / 2, " ").concat(viewBox / 2, " ").concat(viewBox, " ").concat(viewBox);
  var strokeWidth = thickness / 2 * viewBox;
  var progress = 1 - (value - min) / (max - min);
  var strokeDashoffset = progress * circumference;

  function getCircleProps(_ref2) {
    var thickness = _ref2.thickness,
        offset = _ref2.offset,
        color = _ref2.color;
    return {
      as: "circle",
      color: color,
      fill: "transparent",
      stroke: "currentColor",
      strokeWidth: thickness,
      strokeDasharray: strokeDasharray,
      strokeDashoffset: offset,
      cx: viewBox,
      cy: viewBox,
      r: radius
    };
  }

  return {
    rootProps: {
      size: "1em",
      fontSize: size,
      display: "inline-block",
      position: "relative",
      veriticalAlign: "middle",
      role: "progressbar",
      "aria-valuemin": min,
      "aria-valuemax": max,
      "aria-valuenow": isIndeterminate ? null : value
    },
    svgProps: _objectSpread2({
      as: "svg",
      viewBox: viewBoxAttr,
      verticalAlign: "top",
      transform: "rotate3d(0, 0, 1, ".concat(angle - 90, "deg)"),
      size: "100%"
    }, isIndeterminate && {
      transformOrigin: "50% 50%",
      animation: "".concat(spin$1, " 2s linear infinite")
    }),
    trackCircleProps: getCircleProps({
      thickness: strokeWidth,
      offset: 0,
      color: trackColor
    }),
    indicatorCircleProps: _objectSpread2({}, getCircleProps({
      thickness: strokeWidth,
      offset: strokeDashoffset,
      color: color
    }), {}, capIsRound && {
      strokeLinecap: "round"
    }, {}, isIndeterminate && {
      transition: "stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease",
      animation: "".concat(circularProgressCircle, " 1.5s ease-in-out infinite"),
      strokeDasharray: "1 400",
      strokeDashoffset: "0"
    }, {
      stroke: "currentColor"
    })
  };
}

var CircularProgress = React.forwardRef(function (props, ref) {
  var _props$size = props.size,
      size = _props$size === void 0 ? "48px" : _props$size,
      _props$max = props.max,
      max = _props$max === void 0 ? 100 : _props$max,
      _props$min = props.min,
      min = _props$min === void 0 ? 0 : _props$min,
      isIndeterminate = props.isIndeterminate,
      _props$thickness = props.thickness,
      thickness = _props$thickness === void 0 ? 0.2 : _props$thickness,
      value = props.value,
      _props$angle = props.angle,
      angle = _props$angle === void 0 ? 0 : _props$angle,
      capIsRound = props.capIsRound,
      children = props.children,
      _props$trackColor = props.trackColor,
      trackColor = _props$trackColor === void 0 ? "gray" : _props$trackColor,
      _props$color = props.color,
      color = _props$color === void 0 ? "blue" : _props$color,
      rest = _objectWithoutProperties(props, ["size", "max", "min", "isIndeterminate", "thickness", "value", "angle", "capIsRound", "children", "trackColor", "color"]);

  var _useColorMode = useColorMode(),
      colorMode = _useColorMode.colorMode;

  var _trackColor = {
    light: "".concat(trackColor, ".100"),
    dark: "whiteAlpha.300"
  };
  var _color = {
    light: "".concat(color, ".500"),
    dark: "".concat(color, ".200")
  };

  var _getComputedProps = getComputedProps({
    min: min,
    max: max,
    value: value,
    size: size,
    angle: angle,
    thickness: thickness,
    capIsRound: capIsRound,
    isIndeterminate: isIndeterminate,
    color: _color[colorMode],
    trackColor: _trackColor[colorMode]
  }),
      rootProps = _getComputedProps.rootProps,
      indicatorCircleProps = _getComputedProps.indicatorCircleProps,
      svgProps = _getComputedProps.svgProps,
      trackCircleProps = _getComputedProps.trackCircleProps;

  return core.jsx(Box, _extends({
    ref: ref
  }, rootProps, rest), core.jsx(Box, svgProps, core.jsx(Box, _extends({}, trackCircleProps, {
    "data-progress-track": true
  })), core.jsx(Box, _extends({}, indicatorCircleProps, {
    "data-progress-indicator": true
  }))), children);
});
CircularProgress.displayName = "CircularProgress";

var Divider = React.forwardRef(function (_ref, ref) {
  var orientation = _ref.orientation,
      props = _objectWithoutProperties(_ref, ["orientation"]);

  var borderProps = orientation === "vertical" ? {
    borderLeft: "0.0625rem solid",
    height: "auto",
    mx: 2
  } : {
    borderBottom: "0.0625rem solid",
    width: "auto",
    my: 2
  };
  return core.jsx(Box, _extends({
    ref: ref,
    as: "hr",
    "aria-orientation": orientation,
    border: "0",
    opacity: "0.6"
  }, borderProps, {
    borderColor: "inherit"
  }, props));
});

function _inheritsLoose$1(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var inheritsLoose = _inheritsLoose$1;

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var assertThisInitialized = _assertThisInitialized;

var renderprops_cjs = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _objectWithoutPropertiesLoose = _interopDefault(objectWithoutPropertiesLoose);
var _inheritsLoose = _interopDefault(inheritsLoose);
var _assertThisInitialized = _interopDefault(assertThisInitialized);
var _extends = _interopDefault(_extends_1);

var React__default$1 = _interopDefault(React__default);
var ReactDOM = _interopDefault(reactDom__default);

var bugfixes = undefined;
var applyAnimatedValues = undefined;
var colorNames = [];
var requestFrame = function requestFrame(cb) {
  return typeof window !== 'undefined' && window.requestAnimationFrame(cb);
};
var cancelFrame = function cancelFrame(cb) {
  return typeof window !== 'undefined' && window.cancelAnimationFrame(cb);
};
var interpolation = undefined;
var now = function now() {
  return Date.now();
};
var defaultElement = undefined;
var createAnimatedStyle = undefined;
var injectApplyAnimatedValues = function injectApplyAnimatedValues(fn, transform) {
  return applyAnimatedValues = {
    fn: fn,
    transform: transform
  };
};
var injectColorNames = function injectColorNames(names) {
  return colorNames = names;
};
var injectBugfixes = function injectBugfixes(fn) {
  return bugfixes = fn;
};
var injectInterpolation = function injectInterpolation(cls) {
  return interpolation = cls;
};
var injectFrame = function injectFrame(raf, caf) {
  var _ref;

  return _ref = [raf, caf], requestFrame = _ref[0], cancelFrame = _ref[1], _ref;
};
var injectNow = function injectNow(nowFn) {
  return now = nowFn;
};
var injectDefaultElement = function injectDefaultElement(el) {
  return defaultElement = el;
};
var injectCreateAnimatedStyle = function injectCreateAnimatedStyle(factory) {
  return createAnimatedStyle = factory;
};

var Globals = /*#__PURE__*/Object.freeze({
  get bugfixes () { return bugfixes; },
  get applyAnimatedValues () { return applyAnimatedValues; },
  get colorNames () { return colorNames; },
  get requestFrame () { return requestFrame; },
  get cancelFrame () { return cancelFrame; },
  get interpolation () { return interpolation; },
  get now () { return now; },
  get defaultElement () { return defaultElement; },
  get createAnimatedStyle () { return createAnimatedStyle; },
  injectApplyAnimatedValues: injectApplyAnimatedValues,
  injectColorNames: injectColorNames,
  injectBugfixes: injectBugfixes,
  injectInterpolation: injectInterpolation,
  injectFrame: injectFrame,
  injectNow: injectNow,
  injectDefaultElement: injectDefaultElement,
  injectCreateAnimatedStyle: injectCreateAnimatedStyle
});

var Animated =
/*#__PURE__*/
function () {
  function Animated() {}

  var _proto = Animated.prototype;

  _proto.attach = function attach() {};

  _proto.detach = function detach() {};

  _proto.getValue = function getValue() {};

  _proto.getAnimatedValue = function getAnimatedValue() {
    return this.getValue();
  };

  _proto.addChild = function addChild(child) {};

  _proto.removeChild = function removeChild(child) {};

  _proto.getChildren = function getChildren() {
    return [];
  };

  return Animated;
}();

var getValues = function getValues(object) {
  return Object.keys(object).map(function (k) {
    return object[k];
  });
};

var AnimatedWithChildren =
/*#__PURE__*/
function (_Animated) {
  _inheritsLoose(AnimatedWithChildren, _Animated);

  function AnimatedWithChildren() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Animated.call.apply(_Animated, [this].concat(args)) || this;
    _this.children = [];

    _this.getChildren = function () {
      return _this.children;
    };

    _this.getPayload = function (index) {
      if (index === void 0) {
        index = undefined;
      }

      return index !== void 0 && _this.payload ? _this.payload[index] : _this.payload || _assertThisInitialized(_this);
    };

    return _this;
  }

  var _proto = AnimatedWithChildren.prototype;

  _proto.addChild = function addChild(child) {
    if (this.children.length === 0) this.attach();
    this.children.push(child);
  };

  _proto.removeChild = function removeChild(child) {
    var index = this.children.indexOf(child);
    this.children.splice(index, 1);
    if (this.children.length === 0) this.detach();
  };

  return AnimatedWithChildren;
}(Animated);
var AnimatedArrayWithChildren =
/*#__PURE__*/
function (_AnimatedWithChildren) {
  _inheritsLoose(AnimatedArrayWithChildren, _AnimatedWithChildren);

  function AnimatedArrayWithChildren() {
    var _this2;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _AnimatedWithChildren.call.apply(_AnimatedWithChildren, [this].concat(args)) || this;
    _this2.payload = [];

    _this2.getAnimatedValue = function () {
      return _this2.getValue();
    };

    _this2.attach = function () {
      return _this2.payload.forEach(function (p) {
        return p instanceof Animated && p.addChild(_assertThisInitialized(_this2));
      });
    };

    _this2.detach = function () {
      return _this2.payload.forEach(function (p) {
        return p instanceof Animated && p.removeChild(_assertThisInitialized(_this2));
      });
    };

    return _this2;
  }

  return AnimatedArrayWithChildren;
}(AnimatedWithChildren);
var AnimatedObjectWithChildren =
/*#__PURE__*/
function (_AnimatedWithChildren2) {
  _inheritsLoose(AnimatedObjectWithChildren, _AnimatedWithChildren2);

  function AnimatedObjectWithChildren() {
    var _this3;

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    _this3 = _AnimatedWithChildren2.call.apply(_AnimatedWithChildren2, [this].concat(args)) || this;
    _this3.payload = {};

    _this3.getAnimatedValue = function () {
      return _this3.getValue(true);
    };

    _this3.attach = function () {
      return getValues(_this3.payload).forEach(function (s) {
        return s instanceof Animated && s.addChild(_assertThisInitialized(_this3));
      });
    };

    _this3.detach = function () {
      return getValues(_this3.payload).forEach(function (s) {
        return s instanceof Animated && s.removeChild(_assertThisInitialized(_this3));
      });
    };

    return _this3;
  }

  var _proto2 = AnimatedObjectWithChildren.prototype;

  _proto2.getValue = function getValue(animated) {
    if (animated === void 0) {
      animated = false;
    }

    var payload = {};

    for (var key in this.payload) {
      var value = this.payload[key];
      if (animated && !(value instanceof Animated)) continue;
      payload[key] = value instanceof Animated ? value[animated ? 'getAnimatedValue' : 'getValue']() : value;
    }

    return payload;
  };

  return AnimatedObjectWithChildren;
}(AnimatedWithChildren);

var AnimatedStyle =
/*#__PURE__*/
function (_AnimatedObjectWithCh) {
  _inheritsLoose(AnimatedStyle, _AnimatedObjectWithCh);

  function AnimatedStyle(style) {
    var _this;

    _this = _AnimatedObjectWithCh.call(this) || this;
    style = style || {};
    if (style.transform && !(style.transform instanceof Animated)) style = applyAnimatedValues.transform(style);
    _this.payload = style;
    return _this;
  }

  return AnimatedStyle;
}(AnimatedObjectWithChildren);

// http://www.w3.org/TR/css3-color/#svg-color
var colors = {
  transparent: 0x00000000,
  aliceblue: 0xf0f8ffff,
  antiquewhite: 0xfaebd7ff,
  aqua: 0x00ffffff,
  aquamarine: 0x7fffd4ff,
  azure: 0xf0ffffff,
  beige: 0xf5f5dcff,
  bisque: 0xffe4c4ff,
  black: 0x000000ff,
  blanchedalmond: 0xffebcdff,
  blue: 0x0000ffff,
  blueviolet: 0x8a2be2ff,
  brown: 0xa52a2aff,
  burlywood: 0xdeb887ff,
  burntsienna: 0xea7e5dff,
  cadetblue: 0x5f9ea0ff,
  chartreuse: 0x7fff00ff,
  chocolate: 0xd2691eff,
  coral: 0xff7f50ff,
  cornflowerblue: 0x6495edff,
  cornsilk: 0xfff8dcff,
  crimson: 0xdc143cff,
  cyan: 0x00ffffff,
  darkblue: 0x00008bff,
  darkcyan: 0x008b8bff,
  darkgoldenrod: 0xb8860bff,
  darkgray: 0xa9a9a9ff,
  darkgreen: 0x006400ff,
  darkgrey: 0xa9a9a9ff,
  darkkhaki: 0xbdb76bff,
  darkmagenta: 0x8b008bff,
  darkolivegreen: 0x556b2fff,
  darkorange: 0xff8c00ff,
  darkorchid: 0x9932ccff,
  darkred: 0x8b0000ff,
  darksalmon: 0xe9967aff,
  darkseagreen: 0x8fbc8fff,
  darkslateblue: 0x483d8bff,
  darkslategray: 0x2f4f4fff,
  darkslategrey: 0x2f4f4fff,
  darkturquoise: 0x00ced1ff,
  darkviolet: 0x9400d3ff,
  deeppink: 0xff1493ff,
  deepskyblue: 0x00bfffff,
  dimgray: 0x696969ff,
  dimgrey: 0x696969ff,
  dodgerblue: 0x1e90ffff,
  firebrick: 0xb22222ff,
  floralwhite: 0xfffaf0ff,
  forestgreen: 0x228b22ff,
  fuchsia: 0xff00ffff,
  gainsboro: 0xdcdcdcff,
  ghostwhite: 0xf8f8ffff,
  gold: 0xffd700ff,
  goldenrod: 0xdaa520ff,
  gray: 0x808080ff,
  green: 0x008000ff,
  greenyellow: 0xadff2fff,
  grey: 0x808080ff,
  honeydew: 0xf0fff0ff,
  hotpink: 0xff69b4ff,
  indianred: 0xcd5c5cff,
  indigo: 0x4b0082ff,
  ivory: 0xfffff0ff,
  khaki: 0xf0e68cff,
  lavender: 0xe6e6faff,
  lavenderblush: 0xfff0f5ff,
  lawngreen: 0x7cfc00ff,
  lemonchiffon: 0xfffacdff,
  lightblue: 0xadd8e6ff,
  lightcoral: 0xf08080ff,
  lightcyan: 0xe0ffffff,
  lightgoldenrodyellow: 0xfafad2ff,
  lightgray: 0xd3d3d3ff,
  lightgreen: 0x90ee90ff,
  lightgrey: 0xd3d3d3ff,
  lightpink: 0xffb6c1ff,
  lightsalmon: 0xffa07aff,
  lightseagreen: 0x20b2aaff,
  lightskyblue: 0x87cefaff,
  lightslategray: 0x778899ff,
  lightslategrey: 0x778899ff,
  lightsteelblue: 0xb0c4deff,
  lightyellow: 0xffffe0ff,
  lime: 0x00ff00ff,
  limegreen: 0x32cd32ff,
  linen: 0xfaf0e6ff,
  magenta: 0xff00ffff,
  maroon: 0x800000ff,
  mediumaquamarine: 0x66cdaaff,
  mediumblue: 0x0000cdff,
  mediumorchid: 0xba55d3ff,
  mediumpurple: 0x9370dbff,
  mediumseagreen: 0x3cb371ff,
  mediumslateblue: 0x7b68eeff,
  mediumspringgreen: 0x00fa9aff,
  mediumturquoise: 0x48d1ccff,
  mediumvioletred: 0xc71585ff,
  midnightblue: 0x191970ff,
  mintcream: 0xf5fffaff,
  mistyrose: 0xffe4e1ff,
  moccasin: 0xffe4b5ff,
  navajowhite: 0xffdeadff,
  navy: 0x000080ff,
  oldlace: 0xfdf5e6ff,
  olive: 0x808000ff,
  olivedrab: 0x6b8e23ff,
  orange: 0xffa500ff,
  orangered: 0xff4500ff,
  orchid: 0xda70d6ff,
  palegoldenrod: 0xeee8aaff,
  palegreen: 0x98fb98ff,
  paleturquoise: 0xafeeeeff,
  palevioletred: 0xdb7093ff,
  papayawhip: 0xffefd5ff,
  peachpuff: 0xffdab9ff,
  peru: 0xcd853fff,
  pink: 0xffc0cbff,
  plum: 0xdda0ddff,
  powderblue: 0xb0e0e6ff,
  purple: 0x800080ff,
  rebeccapurple: 0x663399ff,
  red: 0xff0000ff,
  rosybrown: 0xbc8f8fff,
  royalblue: 0x4169e1ff,
  saddlebrown: 0x8b4513ff,
  salmon: 0xfa8072ff,
  sandybrown: 0xf4a460ff,
  seagreen: 0x2e8b57ff,
  seashell: 0xfff5eeff,
  sienna: 0xa0522dff,
  silver: 0xc0c0c0ff,
  skyblue: 0x87ceebff,
  slateblue: 0x6a5acdff,
  slategray: 0x708090ff,
  slategrey: 0x708090ff,
  snow: 0xfffafaff,
  springgreen: 0x00ff7fff,
  steelblue: 0x4682b4ff,
  tan: 0xd2b48cff,
  teal: 0x008080ff,
  thistle: 0xd8bfd8ff,
  tomato: 0xff6347ff,
  turquoise: 0x40e0d0ff,
  violet: 0xee82eeff,
  wheat: 0xf5deb3ff,
  white: 0xffffffff,
  whitesmoke: 0xf5f5f5ff,
  yellow: 0xffff00ff,
  yellowgreen: 0x9acd32ff
};

var Interpolation =
/*#__PURE__*/
function () {
  function Interpolation() {}

  // Default config = config, args
  // Short config   = range, output, extrapolate
  Interpolation.create = function create(config, output, extra) {
    if (typeof config === 'function') return config;else if (interpolation && config.output && typeof config.output[0] === 'string') return interpolation(config);else if (Array.isArray(config)) return Interpolation.create({
      range: config,
      output: output,
      extrapolate: extra || 'extend'
    });
    var outputRange = config.output;
    var inputRange = config.range || [0, 1];

    var easing = config.easing || function (t) {
      return t;
    };

    var extrapolateLeft = 'extend';
    var map = config.map;
    if (config.extrapolateLeft !== undefined) extrapolateLeft = config.extrapolateLeft;else if (config.extrapolate !== undefined) extrapolateLeft = config.extrapolate;
    var extrapolateRight = 'extend';
    if (config.extrapolateRight !== undefined) extrapolateRight = config.extrapolateRight;else if (config.extrapolate !== undefined) extrapolateRight = config.extrapolate;
    return function (input) {
      var range = findRange(input, inputRange);
      return interpolate(input, inputRange[range], inputRange[range + 1], outputRange[range], outputRange[range + 1], easing, extrapolateLeft, extrapolateRight, map);
    };
  };

  return Interpolation;
}();

function interpolate(input, inputMin, inputMax, outputMin, outputMax, easing, extrapolateLeft, extrapolateRight, map) {
  var result = map ? map(input) : input; // Extrapolate

  if (result < inputMin) {
    if (extrapolateLeft === 'identity') return result;else if (extrapolateLeft === 'clamp') result = inputMin;
  }

  if (result > inputMax) {
    if (extrapolateRight === 'identity') return result;else if (extrapolateRight === 'clamp') result = inputMax;
  }

  if (outputMin === outputMax) return outputMin;
  if (inputMin === inputMax) return input <= inputMin ? outputMin : outputMax; // Input Range

  if (inputMin === -Infinity) result = -result;else if (inputMax === Infinity) result = result - inputMin;else result = (result - inputMin) / (inputMax - inputMin); // Easing

  result = easing(result); // Output Range

  if (outputMin === -Infinity) result = -result;else if (outputMax === Infinity) result = result + outputMin;else result = result * (outputMax - outputMin) + outputMin;
  return result;
}

function findRange(input, inputRange) {
  for (var i = 1; i < inputRange.length - 1; ++i) {
    if (inputRange[i] >= input) break;
  }

  return i - 1;
}

// const INTEGER = '[-+]?\\d+';
var NUMBER = '[-+]?\\d*\\.?\\d+';
var PERCENTAGE = NUMBER + '%';

function call() {
  return '\\(\\s*(' + Array.prototype.slice.call(arguments).join(')\\s*,\\s*(') + ')\\s*\\)';
}

var rgb = new RegExp('rgb' + call(NUMBER, NUMBER, NUMBER));
var rgba = new RegExp('rgba' + call(NUMBER, NUMBER, NUMBER, NUMBER));
var hsl = new RegExp('hsl' + call(NUMBER, PERCENTAGE, PERCENTAGE));
var hsla = new RegExp('hsla' + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER));
var hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
var hex4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
var hex6 = /^#([0-9a-fA-F]{6})$/;
var hex8 = /^#([0-9a-fA-F]{8})$/;

/*
https://github.com/react-community/normalize-css-color

BSD 3-Clause License

Copyright (c) 2016, React Community
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

* Neither the name of the copyright holder nor the names of its
  contributors may be used to endorse or promote products derived from
  this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
function normalizeColor(color) {
  var match;

  if (typeof color === 'number') {
    return color >>> 0 === color && color >= 0 && color <= 0xffffffff ? color : null;
  } // Ordered based on occurrences on Facebook codebase


  if (match = hex6.exec(color)) return parseInt(match[1] + 'ff', 16) >>> 0;
  if (colors.hasOwnProperty(color)) return colors[color];

  if (match = rgb.exec(color)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    0x000000ff) >>> // a
    0;
  }

  if (match = rgba.exec(color)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    parse1(match[4])) >>> // a
    0;
  }

  if (match = hex3.exec(color)) {
    return parseInt(match[1] + match[1] + // r
    match[2] + match[2] + // g
    match[3] + match[3] + // b
    'ff', // a
    16) >>> 0;
  } // https://drafts.csswg.org/css-color-4/#hex-notation


  if (match = hex8.exec(color)) return parseInt(match[1], 16) >>> 0;

  if (match = hex4.exec(color)) {
    return parseInt(match[1] + match[1] + // r
    match[2] + match[2] + // g
    match[3] + match[3] + // b
    match[4] + match[4], // a
    16) >>> 0;
  }

  if (match = hsl.exec(color)) {
    return (hslToRgb(parse360(match[1]), // h
    parsePercentage(match[2]), // s
    parsePercentage(match[3]) // l
    ) | 0x000000ff) >>> // a
    0;
  }

  if (match = hsla.exec(color)) {
    return (hslToRgb(parse360(match[1]), // h
    parsePercentage(match[2]), // s
    parsePercentage(match[3]) // l
    ) | parse1(match[4])) >>> // a
    0;
  }

  return null;
}

function hue2rgb(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}

function hslToRgb(h, s, l) {
  var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  var p = 2 * l - q;
  var r = hue2rgb(p, q, h + 1 / 3);
  var g = hue2rgb(p, q, h);
  var b = hue2rgb(p, q, h - 1 / 3);
  return Math.round(r * 255) << 24 | Math.round(g * 255) << 16 | Math.round(b * 255) << 8;
}

function parse255(str) {
  var int = parseInt(str, 10);
  if (int < 0) return 0;
  if (int > 255) return 255;
  return int;
}

function parse360(str) {
  var int = parseFloat(str);
  return (int % 360 + 360) % 360 / 360;
}

function parse1(str) {
  var num = parseFloat(str);
  if (num < 0) return 0;
  if (num > 1) return 255;
  return Math.round(num * 255);
}

function parsePercentage(str) {
  // parseFloat conveniently ignores the final %
  var int = parseFloat(str);
  if (int < 0) return 0;
  if (int > 100) return 1;
  return int / 100;
}

function colorToRgba(input) {
  var int32Color = normalizeColor(input);
  if (int32Color === null) return input;
  int32Color = int32Color || 0;
  var r = (int32Color & 0xff000000) >>> 24;
  var g = (int32Color & 0x00ff0000) >>> 16;
  var b = (int32Color & 0x0000ff00) >>> 8;
  var a = (int32Color & 0x000000ff) / 255;
  return "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
} // Problem: https://github.com/animatedjs/animated/pull/102
// Solution: https://stackoverflow.com/questions/638565/parsing-scientific-notation-sensibly/658662


var stringShapeRegex = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g; // Covers rgb, rgba, hsl, hsla
// Taken from https://gist.github.com/olmokramer/82ccce673f86db7cda5e

var colorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi; // Covers color names (transparent, blue, etc.)

var colorNamesRegex = new RegExp("(" + Object.keys(colors).join('|') + ")", 'g');
/**
 * Supports string shapes by extracting numbers so new values can be computed,
 * and recombines those values into new strings of the same shape.  Supports
 * things like:
 *
 *   rgba(123, 42, 99, 0.36)           // colors
 *   -45deg                            // values with units
 *   0 2px 2px 0px rgba(0, 0, 0, 0.12) // box shadows
 */

function createInterpolation(config) {
  // Replace colors with rgba
  var outputRange = config.output.map(function (rangeValue) {
    return rangeValue.replace(colorRegex, colorToRgba);
  }).map(function (rangeValue) {
    return rangeValue.replace(colorNamesRegex, colorToRgba);
  }); // ->
  // [
  //   [0, 50],
  //   [100, 150],
  //   [200, 250],
  //   [0, 0.5],
  // ]

  var outputRanges = outputRange[0].match(stringShapeRegex).map(function () {
    return [];
  });
  outputRange.forEach(function (value) {
    value.match(stringShapeRegex).forEach(function (number, i) {
      return outputRanges[i].push(+number);
    });
  });
  var interpolations = outputRange[0].match(stringShapeRegex).map(function (value, i) {
    return Interpolation.create(_extends({}, config, {
      output: outputRanges[i]
    }));
  });
  return function (input) {
    var i = 0;
    return outputRange[0] // 'rgba(0, 100, 200, 0)'
    // ->
    // 'rgba(${interpolations[0](input)}, ${interpolations[1](input)}, ...'
    .replace(stringShapeRegex, function () {
      return interpolations[i++](input);
    }) // rgba requires that the r,g,b are integers.... so we want to round them, but we *dont* want to
    // round the opacity (4th column).
    .replace(/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, function (_, p1, p2, p3, p4) {
      return "rgba(" + Math.round(p1) + ", " + Math.round(p2) + ", " + Math.round(p3) + ", " + p4 + ")";
    });
  };
}

var AnimatedInterpolation =
/*#__PURE__*/
function (_AnimatedArrayWithChi) {
  _inheritsLoose(AnimatedInterpolation, _AnimatedArrayWithChi);

  function AnimatedInterpolation(parents, _config, _arg) {
    var _this;

    _this = _AnimatedArrayWithChi.call(this) || this;

    _this.getValue = function () {
      var _this2;

      return (_this2 = _this).calc.apply(_this2, _this.payload.map(function (value) {
        return value.getValue();
      }));
    };

    _this.updateConfig = function (config, arg) {
      return _this.calc = Interpolation.create(config, arg);
    };

    _this.interpolate = function (config, arg) {
      return new AnimatedInterpolation(_assertThisInitialized(_this), config, arg);
    };

    _this.payload = // AnimatedArrays should unfold, except AnimatedInterpolation which is taken as is
    parents instanceof AnimatedArrayWithChildren && !parents.updateConfig ? parents.payload : Array.isArray(parents) ? parents : [parents];
    _this.calc = Interpolation.create(_config, _arg);
    return _this;
  }

  return AnimatedInterpolation;
}(AnimatedArrayWithChildren);
var interpolate$1 = function interpolate(parents, config, arg) {
  return parents && new AnimatedInterpolation(parents, config, arg);
};

/**
 * Animated works by building a directed acyclic graph of dependencies
 * transparently when you render your Animated components.
 *
 *               new Animated.Value(0)
 *     .interpolate()        .interpolate()    new Animated.Value(1)
 *         opacity               translateY      scale
 *          style                         transform
 *         View#234                         style
 *                                         View#123
 *
 * A) Top Down phase
 * When an Animated.Value is updated, we recursively go down through this
 * graph in order to find leaf nodes: the views that we flag as needing
 * an update.
 *
 * B) Bottom Up phase
 * When a view is flagged as needing an update, we recursively go back up
 * in order to build the new value that it needs. The reason why we need
 * this two-phases process is to deal with composite props such as
 * transform which can receive values from multiple parents.
 */

function findAnimatedStyles(node, styles) {
  if (typeof node.update === 'function') styles.add(node);else node.getChildren().forEach(function (child) {
    return findAnimatedStyles(child, styles);
  });
}
/**
 * Standard value for driving animations.  One `Animated.Value` can drive
 * multiple properties in a synchronized fashion, but can only be driven by one
 * mechanism at a time.  Using a new mechanism (e.g. starting a new animation,
 * or calling `setValue`) will stop any previous ones.
 */


var AnimatedValue =
/*#__PURE__*/
function (_AnimatedWithChildren) {
  _inheritsLoose(AnimatedValue, _AnimatedWithChildren);

  function AnimatedValue(_value) {
    var _this;

    _this = _AnimatedWithChildren.call(this) || this;

    _this.setValue = function (value, flush) {
      if (flush === void 0) {
        flush = true;
      }

      _this.value = value;
      if (flush) _this.flush();
    };

    _this.getValue = function () {
      return _this.value;
    };

    _this.updateStyles = function () {
      return findAnimatedStyles(_assertThisInitialized(_this), _this.animatedStyles);
    };

    _this.updateValue = function (value) {
      return _this.flush(_this.value = value);
    };

    _this.interpolate = function (config, arg) {
      return new AnimatedInterpolation(_assertThisInitialized(_this), config, arg);
    };

    _this.value = _value;
    _this.animatedStyles = new Set();
    _this.done = false;
    _this.startPosition = _value;
    _this.lastPosition = _value;
    _this.lastVelocity = undefined;
    _this.lastTime = undefined;
    _this.controller = undefined;
    return _this;
  }

  var _proto = AnimatedValue.prototype;

  _proto.flush = function flush() {
    if (this.animatedStyles.size === 0) this.updateStyles();
    this.animatedStyles.forEach(function (animatedStyle) {
      return animatedStyle.update();
    });
  };

  _proto.prepare = function prepare(controller) {
    // Values stay loyal to their original controller, this is also a way to
    // detect trailing values originating from a foreign controller
    if (this.controller === undefined) this.controller = controller;

    if (this.controller === controller) {
      this.startPosition = this.value;
      this.lastPosition = this.value;
      this.lastVelocity = controller.isActive ? this.lastVelocity : undefined;
      this.lastTime = controller.isActive ? this.lastTime : undefined;
      this.done = false;
      this.animatedStyles.clear();
    }
  };

  return AnimatedValue;
}(AnimatedWithChildren);

var AnimatedArray =
/*#__PURE__*/
function (_AnimatedArrayWithChi) {
  _inheritsLoose(AnimatedArray, _AnimatedArrayWithChi);

  function AnimatedArray(array) {
    var _this;

    _this = _AnimatedArrayWithChi.call(this) || this;

    _this.setValue = function (value, flush) {
      if (flush === void 0) {
        flush = true;
      }

      if (Array.isArray(value)) {
        if (value.length === _this.payload.length) value.forEach(function (v, i) {
          return _this.payload[i].setValue(v, flush);
        });
      } else _this.payload.forEach(function (v, i) {
        return _this.payload[i].setValue(value, flush);
      });
    };

    _this.getValue = function () {
      return _this.payload.map(function (v) {
        return v.getValue();
      });
    };

    _this.interpolate = function (config, arg) {
      return new AnimatedInterpolation(_assertThisInitialized(_this), config, arg);
    };

    _this.payload = array.map(function (n) {
      return new AnimatedValue(n);
    });
    return _this;
  }

  return AnimatedArray;
}(AnimatedArrayWithChildren);

function withDefault(value, defaultValue) {
  return value === undefined || value === null ? defaultValue : value;
}
function toArray(a) {
  return a !== void 0 ? Array.isArray(a) ? a : [a] : [];
}
function shallowEqual(a, b) {
  if (typeof a !== typeof b) return false;
  if (typeof a === 'string' || typeof a === 'number') return a === b;
  var i;

  for (i in a) {
    if (!(i in b)) return false;
  }

  for (i in b) {
    if (a[i] !== b[i]) return false;
  }

  return i === void 0 ? a === b : true;
}
function callProp(obj) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return typeof obj === 'function' ? obj.apply(void 0, args) : obj;
}
function getValues$1(object) {
  return Object.keys(object).map(function (k) {
    return object[k];
  });
}
function getForwardProps(props) {
  var to = props.to,
      from = props.from,
      config = props.config,
      native = props.native,
      onStart = props.onStart,
      onRest = props.onRest,
      onFrame = props.onFrame,
      children = props.children,
      reset = props.reset,
      reverse = props.reverse,
      force = props.force,
      immediate = props.immediate,
      impl = props.impl,
      inject = props.inject,
      delay = props.delay,
      attach = props.attach,
      destroyed = props.destroyed,
      interpolateTo = props.interpolateTo,
      autoStart = props.autoStart,
      ref = props.ref,
      forward = _objectWithoutPropertiesLoose(props, ["to", "from", "config", "native", "onStart", "onRest", "onFrame", "children", "reset", "reverse", "force", "immediate", "impl", "inject", "delay", "attach", "destroyed", "interpolateTo", "autoStart", "ref"]);

  return forward;
}
function interpolateTo(props) {
  var forward = getForwardProps(props);
  var rest = Object.keys(props).reduce(function (a, k) {
    var _extends2;

    return forward[k] !== void 0 ? a : _extends({}, a, (_extends2 = {}, _extends2[k] = props[k], _extends2));
  }, {});
  return _extends({
    to: forward
  }, rest);
}
function convertToAnimatedValue(acc, _ref) {
  var _extends3;

  var name = _ref[0],
      value = _ref[1];
  return _extends({}, acc, (_extends3 = {}, _extends3[name] = new (Array.isArray(value) ? AnimatedArray : AnimatedValue)(value), _extends3));
}
function convertValues(props) {
  var from = props.from,
      to = props.to,
      native = props.native;
  var allProps = Object.entries(_extends({}, from, to));
  return native ? allProps.reduce(convertToAnimatedValue, {}) : _extends({}, from, to);
}
function handleRef(ref, forward) {
  if (forward) {
    // If it's a function, assume it's a ref callback
    if (typeof forward === 'function') forward(ref);else if (typeof forward === 'object') {
      // If it's an object and has a 'current' property, assume it's a ref object
      forward.current = ref;
    }
  }

  return ref;
}

var check = function check(value) {
  return value === 'auto';
};

var overwrite = function overwrite(width, height) {
  return function (acc, _ref) {
    var _extends2;

    var name = _ref[0],
        value = _ref[1];
    return _extends({}, acc, (_extends2 = {}, _extends2[name] = value === 'auto' ? ~name.indexOf('height') ? height : width : value, _extends2));
  };
};

function fixAuto(props, callback) {
  var from = props.from,
      to = props.to,
      children = props.children; // Dry-route props back if nothing's using 'auto' in there
  // TODO: deal with "null"

  if (!(getValues$1(to).some(check) || getValues$1(from).some(check))) return; // Fetch render v-dom

  var element = children(convertValues(props)); // A spring can return undefined/null, check against that (#153)

  if (!element) return; // Or it could be an array (#346) ...

  if (Array.isArray(element)) element = {
    type: 'div',
    props: {
      children: element
    } // Extract styles

  };
  var elementStyles = element.props.style; // Return v.dom with injected ref

  return React__default$1.createElement(element.type, _extends({
    key: element.key ? element.key : undefined
  }, element.props, {
    style: _extends({}, elementStyles, {
      position: 'absolute',
      visibility: 'hidden'
    }),
    ref: function ref(_ref2) {
      if (_ref2) {
        // Once it's rendered out, fetch bounds (minus padding/margin/borders)
        var node = ReactDOM.findDOMNode(_ref2);
        var width, height;
        var cs = getComputedStyle(node);

        if (cs.boxSizing === 'border-box') {
          width = node.offsetWidth;
          height = node.offsetHeight;
        } else {
          var paddingX = parseFloat(cs.paddingLeft || 0) + parseFloat(cs.paddingRight || 0);
          var paddingY = parseFloat(cs.paddingTop || 0) + parseFloat(cs.paddingBottom || 0);
          var borderX = parseFloat(cs.borderLeftWidth || 0) + parseFloat(cs.borderRightWidth || 0);
          var borderY = parseFloat(cs.borderTopWidth || 0) + parseFloat(cs.borderBottomWidth || 0);
          width = node.offsetWidth - paddingX - borderX;
          height = node.offsetHeight - paddingY - borderY;
        }

        var convert = overwrite(width, height);
        callback(_extends({}, props, {
          from: Object.entries(from).reduce(convert, from),
          to: Object.entries(to).reduce(convert, to)
        }));
      }
    }
  }));
}

var isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};

var prefixKey = function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
};

var prefixes = ['Webkit', 'Ms', 'Moz', 'O'];
isUnitlessNumber = Object.keys(isUnitlessNumber).reduce(function (acc, prop) {
  prefixes.forEach(function (prefix) {
    return acc[prefixKey(prefix, prop)] = acc[prop];
  });
  return acc;
}, isUnitlessNumber);

function dangerousStyleValue(name, value, isCustomProperty) {
  if (value == null || typeof value === 'boolean' || value === '') return '';
  if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers

  return ('' + value).trim();
}

var attributeCache = {};
injectCreateAnimatedStyle(function (style) {
  return new AnimatedStyle(style);
});
injectDefaultElement('div');
injectInterpolation(createInterpolation);
injectColorNames(colors);
injectBugfixes(fixAuto);
injectApplyAnimatedValues(function (instance, props) {
  if (instance.nodeType && instance.setAttribute !== undefined) {
    var style = props.style,
        children = props.children,
        scrollTop = props.scrollTop,
        scrollLeft = props.scrollLeft,
        attributes = _objectWithoutPropertiesLoose(props, ["style", "children", "scrollTop", "scrollLeft"]);

    if (scrollTop !== void 0) instance.scrollTop = scrollTop;
    if (scrollLeft !== void 0) instance.scrollLeft = scrollLeft; // Set textContent, if children is an animatable value

    if (children !== void 0) instance.textContent = children; // Set styles ...

    for (var styleName in style) {
      if (!style.hasOwnProperty(styleName)) continue;
      var isCustomProperty = styleName.indexOf('--') === 0;
      var styleValue = dangerousStyleValue(styleName, style[styleName], isCustomProperty);
      if (styleName === 'float') styleName = 'cssFloat';
      if (isCustomProperty) instance.style.setProperty(styleName, styleValue);else instance.style[styleName] = styleValue;
    } // Set attributes ...


    for (var name in attributes) {
      // Attributes are written in dash case
      var dashCase = attributeCache[name] || (attributeCache[name] = name.replace(/([A-Z])/g, function (n) {
        return '-' + n.toLowerCase();
      }));
      if (typeof instance.getAttribute(dashCase) !== 'undefined') instance.setAttribute(dashCase, attributes[name]);
    }
  } else return false;
}, function (style) {
  return style;
});

var active = false;
var controllers = new Set();

var frameLoop = function frameLoop() {
  var time = now();

  for (var _iterator = controllers, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var controller = _ref;
    var isDone = true;
    var noChange = true;

    for (var configIdx = 0; configIdx < controller.configs.length; configIdx++) {
      var config = controller.configs[configIdx];
      var endOfAnimation = void 0,
          lastTime = void 0;

      for (var valIdx = 0; valIdx < config.animatedValues.length; valIdx++) {
        var animation = config.animatedValues[valIdx]; // If an animation is done, skip, until all of them conclude

        if (animation.done) continue;
        var from = config.fromValues[valIdx];
        var to = config.toValues[valIdx];
        var position = animation.lastPosition;
        var isAnimated = to instanceof Animated;

        var _velocity = Array.isArray(config.initialVelocity) ? config.initialVelocity[valIdx] : config.initialVelocity;

        if (isAnimated) to = to.getValue(); // Conclude animation if it's either immediate, or from-values match end-state

        if (config.immediate || !isAnimated && !config.decay && from === to) {
          animation.updateValue(to);
          animation.done = true;
          continue;
        } // Doing delay here instead of setTimeout is one async worry less


        if (config.delay && time - controller.startTime < config.delay) {
          isDone = false;
          continue;
        } // Flag change


        noChange = false; // Break animation when string values are involved

        if (typeof from === 'string' || typeof to === 'string') {
          animation.updateValue(to);
          animation.done = true;
          continue;
        }

        if (config.duration !== void 0) {
          /** Duration easing */
          position = from + config.easing((time - controller.startTime - config.delay) / config.duration) * (to - from);
          endOfAnimation = time >= controller.startTime + config.delay + config.duration;
        } else if (config.decay) {
          /** Decay easing */
          position = from + _velocity / (1 - 0.998) * (1 - Math.exp(-(1 - 0.998) * (time - controller.startTime)));
          endOfAnimation = Math.abs(animation.lastPosition - position) < 0.1;
          if (endOfAnimation) to = position;
        } else {
          /** Spring easing */
          lastTime = animation.lastTime !== void 0 ? animation.lastTime : time;
          _velocity = animation.lastVelocity !== void 0 ? animation.lastVelocity : config.initialVelocity; // If we lost a lot of frames just jump to the end.

          if (time > lastTime + 64) lastTime = time; // http://gafferongames.com/game-physics/fix-your-timestep/

          var numSteps = Math.floor(time - lastTime);

          for (var i = 0; i < numSteps; ++i) {
            var force = -config.tension * (position - to);
            var damping = -config.friction * _velocity;
            var acceleration = (force + damping) / config.mass;
            _velocity = _velocity + acceleration * 1 / 1000;
            position = position + _velocity * 1 / 1000;
          } // Conditions for stopping the spring animation


          var isOvershooting = config.clamp && config.tension !== 0 ? from < to ? position > to : position < to : false;
          var isVelocity = Math.abs(_velocity) <= config.precision;
          var isDisplacement = config.tension !== 0 ? Math.abs(to - position) <= config.precision : true;
          endOfAnimation = isOvershooting || isVelocity && isDisplacement;
          animation.lastVelocity = _velocity;
          animation.lastTime = time;
        } // Trails aren't done until their parents conclude


        if (isAnimated && !config.toValues[valIdx].done) endOfAnimation = false;

        if (endOfAnimation) {
          // Ensure that we end up with a round value
          if (animation.value !== to) position = to;
          animation.done = true;
        } else isDone = false;

        animation.updateValue(position);
        animation.lastPosition = position;
      } // Keep track of updated values only when necessary


      if (controller.props.onFrame || !controller.props.native) controller.animatedProps[config.name] = config.interpolation.getValue();
    } // Update callbacks in the end of the frame


    if (controller.props.onFrame || !controller.props.native) {
      if (!controller.props.native && controller.onUpdate) controller.onUpdate();
      if (controller.props.onFrame) controller.props.onFrame(controller.animatedProps);
    } // Either call onEnd or next frame


    if (isDone) {
      controllers.delete(controller);
      controller.debouncedOnEnd({
        finished: true,
        noChange: noChange
      });
    }
  } // Loop over as long as there are controllers ...


  if (controllers.size) requestFrame(frameLoop);else active = false;
};

var addController = function addController(controller) {
  if (!controllers.has(controller)) {
    controllers.add(controller);
    if (!active) requestFrame(frameLoop);
    active = true;
  }
};

var removeController = function removeController(controller) {
  if (controllers.has(controller)) {
    controllers.delete(controller);
  }
};

var Controller =
/*#__PURE__*/
function () {
  function Controller(props, config) {
    var _this = this;

    if (config === void 0) {
      config = {
        native: true,
        interpolateTo: true,
        autoStart: true
      };
    }

    this.getValues = function () {
      return _this.props.native ? _this.interpolations : _this.animatedProps;
    };

    this.dependents = new Set();
    this.isActive = false;
    this.hasChanged = false;
    this.props = {};
    this.merged = {};
    this.animations = {};
    this.interpolations = {};
    this.animatedProps = {};
    this.configs = [];
    this.frame = undefined;
    this.startTime = undefined;
    this.lastTime = undefined;
    this.update(_extends({}, props, config));
  }

  var _proto = Controller.prototype;

  _proto.update = function update(props) {
    var _this2 = this;

    this.props = _extends({}, this.props, props);

    var _ref = this.props.interpolateTo ? interpolateTo(this.props) : this.props,
        _ref$from = _ref.from,
        from = _ref$from === void 0 ? {} : _ref$from,
        _ref$to = _ref.to,
        to = _ref$to === void 0 ? {} : _ref$to,
        _ref$config = _ref.config,
        config = _ref$config === void 0 ? {} : _ref$config,
        _ref$delay = _ref.delay,
        delay = _ref$delay === void 0 ? 0 : _ref$delay,
        reverse = _ref.reverse,
        attach = _ref.attach,
        reset = _ref.reset,
        immediate = _ref.immediate,
        autoStart = _ref.autoStart,
        ref = _ref.ref; // Reverse values when requested


    if (reverse) {
      var _ref2 = [to, from];
      from = _ref2[0];
      to = _ref2[1];
    }

    this.hasChanged = false; // Attachment handling, trailed springs can "attach" themselves to a previous spring

    var target = attach && attach(this); // Reset merged props when necessary

    var extra = reset ? {} : this.merged; // This will collect all props that were ever set

    this.merged = _extends({}, from, extra, to); // Reduces input { name: value } pairs into animated values

    this.animations = Object.entries(this.merged).reduce(function (acc, _ref3, i) {
      var name = _ref3[0],
          value = _ref3[1];
      // Issue cached entries, except on reset
      var entry = !reset && acc[name] || {}; // Figure out what the value is supposed to be

      var isNumber = typeof value === 'number';
      var isString = typeof value === 'string' && !value.startsWith('#') && !/\d/.test(value) && !colorNames[value];
      var isArray = !isNumber && !isString && Array.isArray(value);
      var fromValue = from[name] !== undefined ? from[name] : value;
      var toValue = isNumber || isArray ? value : isString ? value : 1;
      var toConfig = callProp(config, name);
      if (target) toValue = target.animations[name].parent; // Detect changes, animated values will be checked in the raf-loop

      if (toConfig.decay !== void 0 || !shallowEqual(entry.changes, value)) {
        var _extends2;

        _this2.hasChanged = true;
        var parent, interpolation$$1;
        if (isNumber || isString) parent = interpolation$$1 = entry.parent || new AnimatedValue(fromValue);else if (isArray) parent = interpolation$$1 = entry.parent || new AnimatedArray(fromValue);else {
          var prev = entry.interpolation && entry.interpolation.calc(entry.parent.value);

          if (entry.parent) {
            parent = entry.parent;
            parent.setValue(0, false);
          } else parent = new AnimatedValue(0);

          var range = {
            output: [prev !== void 0 ? prev : fromValue, value]
          };

          if (entry.interpolation) {
            interpolation$$1 = entry.interpolation;
            entry.interpolation.updateConfig(range);
          } else interpolation$$1 = parent.interpolate(range);
        } // Set immediate values

        if (callProp(immediate, name)) parent.setValue(value, false); // Reset animated values

        var animatedValues = toArray(parent.getPayload());
        animatedValues.forEach(function (value) {
          return value.prepare(_this2);
        });
        return _extends({}, acc, (_extends2 = {}, _extends2[name] = _extends({}, entry, {
          name: name,
          parent: parent,
          interpolation: interpolation$$1,
          animatedValues: animatedValues,
          changes: value,
          fromValues: toArray(parent.getValue()),
          toValues: toArray(target ? toValue.getPayload() : toValue),
          immediate: callProp(immediate, name),
          delay: withDefault(toConfig.delay, delay || 0),
          initialVelocity: withDefault(toConfig.velocity, 0),
          clamp: withDefault(toConfig.clamp, false),
          precision: withDefault(toConfig.precision, 0.01),
          tension: withDefault(toConfig.tension, 170),
          friction: withDefault(toConfig.friction, 26),
          mass: withDefault(toConfig.mass, 1),
          duration: toConfig.duration,
          easing: withDefault(toConfig.easing, function (t) {
            return t;
          }),
          decay: toConfig.decay
        }), _extends2));
      } else return acc;
    }, this.animations);

    if (this.hasChanged) {
      this.configs = getValues$1(this.animations);
      this.animatedProps = {};
      this.interpolations = {};

      for (var key in this.animations) {
        this.interpolations[key] = this.animations[key].interpolation;
        this.animatedProps[key] = this.animations[key].interpolation.getValue();
      }
    } // TODO: clean up ref in controller


    for (var _len = arguments.length, start = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      start[_key - 1] = arguments[_key];
    }

    if (!ref && (autoStart || start.length)) this.start.apply(this, start);
    var onEnd = start[0],
        onUpdate = start[1];
    this.onEnd = typeof onEnd === 'function' && onEnd;
    this.onUpdate = onUpdate;
    return this.getValues();
  };

  _proto.start = function start(onEnd, onUpdate) {
    var _this3 = this;

    this.startTime = now();
    if (this.isActive) this.stop();
    this.isActive = true;
    this.onEnd = typeof onEnd === 'function' && onEnd;
    this.onUpdate = onUpdate;
    if (this.props.onStart) this.props.onStart();
    addController(this);
    return new Promise(function (res) {
      return _this3.resolve = res;
    });
  };

  _proto.stop = function stop(finished) {
    if (finished === void 0) {
      finished = false;
    }

    // Reset collected changes since the animation has been stopped cold turkey
    if (finished) getValues$1(this.animations).forEach(function (a) {
      return a.changes = undefined;
    });
    this.debouncedOnEnd({
      finished: finished
    });
  };

  _proto.destroy = function destroy() {
    removeController(this);
    this.props = {};
    this.merged = {};
    this.animations = {};
    this.interpolations = {};
    this.animatedProps = {};
    this.configs = [];
  };

  _proto.debouncedOnEnd = function debouncedOnEnd(result) {
    removeController(this);
    this.isActive = false;
    var onEnd = this.onEnd;
    this.onEnd = null;
    if (onEnd) onEnd(result);
    if (this.resolve) this.resolve();
    this.resolve = null;
  };

  return Controller;
}();

var AnimatedProps =
/*#__PURE__*/
function (_AnimatedObjectWithCh) {
  _inheritsLoose(AnimatedProps, _AnimatedObjectWithCh);

  function AnimatedProps(props, callback) {
    var _this;

    _this = _AnimatedObjectWithCh.call(this) || this;
    if (props.style) props = _extends({}, props, {
      style: createAnimatedStyle(props.style)
    });
    _this.payload = props;
    _this.update = callback;

    _this.attach();

    return _this;
  }

  return AnimatedProps;
}(AnimatedObjectWithChildren);

function createAnimatedComponent(Component) {
  var AnimatedComponent =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(AnimatedComponent, _React$Component);

    function AnimatedComponent(props) {
      var _this;

      _this = _React$Component.call(this) || this;

      _this.callback = function () {
        if (_this.node) {
          var didUpdate = applyAnimatedValues.fn(_this.node, _this.propsAnimated.getAnimatedValue(), _assertThisInitialized(_this));
          if (didUpdate === false) _this.forceUpdate();
        }
      };

      _this.attachProps(props);

      return _this;
    }

    var _proto = AnimatedComponent.prototype;

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.propsAnimated && this.propsAnimated.detach();
    };

    _proto.setNativeProps = function setNativeProps(props) {
      var didUpdate = applyAnimatedValues.fn(this.node, props, this);
      if (didUpdate === false) this.forceUpdate();
    } // The system is best designed when setNativeProps is implemented. It is
    // able to avoid re-rendering and directly set the attributes that
    // changed. However, setNativeProps can only be implemented on leaf
    // native components. If you want to animate a composite component, you
    // need to re-render it. In this case, we have a fallback that uses
    // forceUpdate.
    ;

    _proto.attachProps = function attachProps(_ref) {
      var forwardRef = _ref.forwardRef,
          nextProps = _objectWithoutPropertiesLoose(_ref, ["forwardRef"]);

      var oldPropsAnimated = this.propsAnimated;
      this.propsAnimated = new AnimatedProps(nextProps, this.callback); // When you call detach, it removes the element from the parent list
      // of children. If it goes to 0, then the parent also detaches itself
      // and so on.
      // An optimization is to attach the new elements and THEN detach the old
      // ones instead of detaching and THEN attaching.
      // This way the intermediate state isn't to go to 0 and trigger
      // this expensive recursive detaching to then re-attach everything on
      // the very next operation.

      oldPropsAnimated && oldPropsAnimated.detach();
    };

    _proto.shouldComponentUpdate = function shouldComponentUpdate(props) {
      var style = props.style,
          nextProps = _objectWithoutPropertiesLoose(props, ["style"]);

      var _this$props = this.props,
          currentStyle = _this$props.style,
          currentProps = _objectWithoutPropertiesLoose(_this$props, ["style"]);

      if (!shallowEqual(currentProps, nextProps) || !shallowEqual(currentStyle, style)) {
        this.attachProps(props);
        return true;
      }

      return false;
    };

    _proto.render = function render() {
      var _this2 = this;

      var _this$propsAnimated$g = this.propsAnimated.getValue(),
          scrollTop = _this$propsAnimated$g.scrollTop,
          scrollLeft = _this$propsAnimated$g.scrollLeft,
          animatedProps = _objectWithoutPropertiesLoose(_this$propsAnimated$g, ["scrollTop", "scrollLeft"]);

      return React__default$1.createElement(Component, _extends({}, animatedProps, {
        ref: function ref(node) {
          return _this2.node = handleRef(node, _this2.props.forwardRef);
        }
      }));
    };

    return AnimatedComponent;
  }(React__default$1.Component);

  return React__default$1.forwardRef(function (props, ref) {
    return React__default$1.createElement(AnimatedComponent, _extends({}, props, {
      forwardRef: ref
    }));
  });
}

var config = {
  default: {
    tension: 170,
    friction: 26
  },
  gentle: {
    tension: 120,
    friction: 14
  },
  wobbly: {
    tension: 180,
    friction: 12
  },
  stiff: {
    tension: 210,
    friction: 20
  },
  slow: {
    tension: 280,
    friction: 60
  },
  molasses: {
    tension: 280,
    friction: 120
  }
};

var Spring =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Spring, _React$Component);

  function Spring() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      lastProps: {
        from: {},
        to: {}
      },
      propsChanged: false,
      internal: false
    };
    _this.controller = new Controller(null, null);
    _this.didUpdate = false;
    _this.didInject = false;
    _this.finished = true;

    _this.start = function () {
      _this.finished = false;
      var wasMounted = _this.mounted;

      _this.controller.start(function (props) {
        return _this.finish(_extends({}, props, {
          wasMounted: wasMounted
        }));
      }, _this.update);
    };

    _this.stop = function () {
      return _this.controller.stop(true);
    };

    _this.update = function () {
      return _this.mounted && _this.setState({
        internal: true
      });
    };

    _this.finish = function (_ref) {
      var finished = _ref.finished,
          noChange = _ref.noChange,
          wasMounted = _ref.wasMounted;
      _this.finished = true;

      if (_this.mounted && finished) {
        // Only call onRest if either we *were* mounted, or when there were changes
        if (_this.props.onRest && (wasMounted || !noChange)) _this.props.onRest(_this.controller.merged); // Restore end-state

        if (_this.mounted && _this.didInject) {
          _this.afterInject = convertValues(_this.props);

          _this.setState({
            internal: true
          });
        } // If we have an inject or values to apply after the animation we ping here


        if (_this.mounted && (_this.didInject || _this.props.after)) _this.setState({
          internal: true
        });
        _this.didInject = false;
      }
    };

    return _this;
  }

  var _proto = Spring.prototype;

  _proto.componentDidMount = function componentDidMount() {
    // componentDidUpdate isn't called on mount, we call it here to start animating
    this.componentDidUpdate();
    this.mounted = true;
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    // Stop all ongoing animtions
    this.mounted = false;
    this.stop();
  };

  Spring.getDerivedStateFromProps = function getDerivedStateFromProps(props, _ref2) {
    var internal = _ref2.internal,
        lastProps = _ref2.lastProps;
    // The following is a test against props that could alter the animation
    var from = props.from,
        to = props.to,
        reset = props.reset,
        force = props.force;
    var propsChanged = !shallowEqual(to, lastProps.to) || !shallowEqual(from, lastProps.from) || reset && !internal || force && !internal;
    return {
      propsChanged: propsChanged,
      lastProps: props,
      internal: false
    };
  };

  _proto.render = function render() {
    var _this2 = this;

    var children = this.props.children;
    var propsChanged = this.state.propsChanged; // Inject phase -----------------------------------------------------------
    // Handle injected frames, for instance targets/web/fix-auto
    // An inject will return an intermediary React node which measures itself out
    // .. and returns a callback when the values sought after are ready, usually "auto".

    if (this.props.inject && propsChanged && !this.injectProps) {
      var frame = this.props.inject(this.props, function (injectProps) {
        // The inject frame has rendered, now let's update animations...
        _this2.injectProps = injectProps;

        _this2.setState({
          internal: true
        });
      }); // Render out injected frame

      if (frame) return frame;
    } // Update phase -----------------------------------------------------------


    if (this.injectProps || propsChanged) {
      // We can potentially cause setState, but we're inside render, the flag prevents that
      this.didInject = false; // Update animations, this turns from/to props into AnimatedValues
      // An update can occur on injected props, or when own-props have changed.

      if (this.injectProps) {
        this.controller.update(this.injectProps); // didInject is needed, because there will be a 3rd stage, where the original values
        // .. will be restored after the animation is finished. When someone animates towards
        // .. "auto", the end-result should be "auto", not "1999px", which would block nested
        // .. height/width changes.

        this.didInject = true;
      } else if (propsChanged) this.controller.update(this.props); // Flag an update that occured, componentDidUpdate will start the animation later on


      this.didUpdate = true;
      this.afterInject = undefined;
      this.injectProps = undefined;
    } // Render phase -----------------------------------------------------------
    // Render out raw values or AnimatedValues depending on "native"


    var values = _extends({}, this.controller.getValues(), this.afterInject);

    if (this.finished) values = _extends({}, values, this.props.after);
    return Object.keys(values).length ? children(values) : null;
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    // The animation has to start *after* render, since at that point the scene
    // .. graph should be established, so we do it here. Unfortunatelly, non-native
    // .. animations as well as "auto"-injects call forceUpdate, so it's causing a loop.
    // .. didUpdate prevents that as it gets set only on prop changes.
    if (this.didUpdate) this.start();
    this.didUpdate = false;
  };

  return Spring;
}(React__default$1.Component);

Spring.defaultProps = {
  from: {},
  to: {},
  config: config.default,
  native: false,
  immediate: false,
  reset: false,
  force: false,
  inject: bugfixes
};

var Trail =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(Trail, _React$PureComponent);

  function Trail() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;
    _this.first = true;
    _this.instances = new Set();

    _this.hook = function (instance, index, length, reverse) {
      // Add instance to set
      _this.instances.add(instance); // Return undefined on the first index and from then on the previous instance


      if (reverse ? index === length - 1 : index === 0) return undefined;else return Array.from(_this.instances)[reverse ? index + 1 : index - 1];
    };

    return _this;
  }

  var _proto = Trail.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        items = _this$props.items,
        _children = _this$props.children,
        _this$props$from = _this$props.from,
        from = _this$props$from === void 0 ? {} : _this$props$from,
        initial = _this$props.initial,
        reverse = _this$props.reverse,
        keys = _this$props.keys,
        delay = _this$props.delay,
        onRest = _this$props.onRest,
        props = _objectWithoutPropertiesLoose(_this$props, ["items", "children", "from", "initial", "reverse", "keys", "delay", "onRest"]);

    var array = toArray(items);
    return toArray(array).map(function (item, i) {
      return React__default$1.createElement(Spring, _extends({
        onRest: i === 0 ? onRest : null,
        key: typeof keys === 'function' ? keys(item) : toArray(keys)[i],
        from: _this2.first && initial !== void 0 ? initial || {} : from
      }, props, {
        delay: i === 0 && delay || undefined,
        attach: function attach(instance) {
          return _this2.hook(instance, i, array.length, reverse);
        },
        children: function children(props) {
          var child = _children(item, i);

          return child ? child(props) : null;
        }
      }));
    });
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    this.first = false;
    if (prevProps.items !== this.props.items) this.instances.clear();
  };

  return Trail;
}(React__default$1.PureComponent);

Trail.defaultProps = {
  keys: function keys(item) {
    return item;
  }
};

var DEFAULT = '__default';

var KeyframesImpl =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(KeyframesImpl, _React$PureComponent);

  function KeyframesImpl() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;
    _this.guid = 0;
    _this.state = {
      props: {},
      resolve: function resolve() {
        return null;
      },
      last: true,
      index: 0
    };

    _this.next = function (props, last, index) {
      if (last === void 0) {
        last = true;
      }

      if (index === void 0) {
        index = 0;
      }

      _this.running = true;
      return new Promise(function (resolve) {
        _this.mounted && _this.setState(function (state) {
          return {
            props: props,
            resolve: resolve,
            last: last,
            index: index
          };
        }, function () {
          return _this.running = false;
        });
      });
    };

    return _this;
  }

  var _proto = KeyframesImpl.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.componentDidUpdate({});
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  _proto.componentDidUpdate = function componentDidUpdate(previous) {
    var _this2 = this;

    var _this$props = this.props,
        states = _this$props.states,
        f = _this$props.filter,
        state = _this$props.state;

    if (previous.state !== this.props.state || this.props.reset && !this.running || !shallowEqual(states[state], previous.states[previous.state])) {
      if (states && state && states[state]) {
        (function () {
          var localId = ++_this2.guid;
          var slots = states[state];

          if (slots) {
            if (Array.isArray(slots)) {
              var q = Promise.resolve();

              var _loop = function _loop(i) {
                var index = i;
                var slot = slots[index];
                var last = index === slots.length - 1;
                q = q.then(function () {
                  return localId === _this2.guid && _this2.next(f(slot), last, index);
                });
              };

              for (var i = 0; i < slots.length; i++) {
                _loop(i);
              }
            } else if (typeof slots === 'function') {
              var index = 0;
              slots( // next
              function (props, last) {
                if (last === void 0) {
                  last = false;
                }

                return localId === _this2.guid && _this2.next(f(props), last, index++);
              }, // cancel
              function () {
                return requestFrame(function () {
                  return _this2.instance && _this2.instance.stop();
                });
              }, // ownprops
              _this2.props);
            } else {
              _this2.next(f(states[state]));
            }
          }
        })();
      }
    }
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$state = this.state,
        props = _this$state.props,
        resolve = _this$state.resolve,
        last = _this$state.last,
        index = _this$state.index;
    if (!props || Object.keys(props).length === 0) return null;

    var _this$props2 = this.props,
        state = _this$props2.state,
        filter = _this$props2.filter,
        states = _this$props2.states,
        config = _this$props2.config,
        Component = _this$props2.primitive,
        _onRest = _this$props2.onRest,
        forwardRef = _this$props2.forwardRef,
        rest = _objectWithoutPropertiesLoose(_this$props2, ["state", "filter", "states", "config", "primitive", "onRest", "forwardRef"]); // Arrayed configs need an index to process


    if (Array.isArray(config)) config = config[index];
    return React__default$1.createElement(Component, _extends({
      ref: function ref(_ref) {
        return _this3.instance = handleRef(_ref, forwardRef);
      },
      config: config
    }, rest, props, {
      onRest: function onRest(args) {
        resolve(args);
        if (_onRest && last) _onRest(args);
      }
    }));
  };

  return KeyframesImpl;
}(React__default$1.PureComponent);

KeyframesImpl.defaultProps = {
  state: DEFAULT
};
var Keyframes = React__default$1.forwardRef(function (props, ref) {
  return React__default$1.createElement(KeyframesImpl, _extends({}, props, {
    forwardRef: ref
  }));
});

Keyframes.create = function (primitive) {
  return function (states, filter) {
    var _states;

    if (filter === void 0) {
      filter = function filter(states) {
        return states;
      };
    }

    if (typeof states === 'function' || Array.isArray(states)) states = (_states = {}, _states[DEFAULT] = states, _states);
    return function (props) {
      return React__default$1.createElement(KeyframesImpl, _extends({
        primitive: primitive,
        states: states,
        filter: filter
      }, props));
    };
  };
};

Keyframes.Spring = function (states) {
  return Keyframes.create(Spring)(states, interpolateTo);
};

Keyframes.Trail = function (states) {
  return Keyframes.create(Trail)(states, interpolateTo);
};

var guid = 0;

var get = function get(props) {
  var items = props.items,
      keys = props.keys,
      rest = _objectWithoutPropertiesLoose(props, ["items", "keys"]);

  items = toArray(items !== void 0 ? items : null);
  keys = typeof keys === 'function' ? items.map(keys) : toArray(keys); // Make sure numeric keys are interpreted as Strings (5 !== "5")

  return _extends({
    items: items,
    keys: keys.map(function (key) {
      return String(key);
    })
  }, rest);
};

var Transition =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(Transition, _React$PureComponent);

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  function Transition(prevProps) {
    var _this;

    _this = _React$PureComponent.call(this, prevProps) || this;

    _this.destroyItem = function (item, key, state) {
      return function (values) {
        var _this$props = _this.props,
            onRest = _this$props.onRest,
            onDestroyed = _this$props.onDestroyed;

        if (_this.mounted) {
          onDestroyed && onDestroyed(item);

          _this.setState(function (_ref) {
            var deleted = _ref.deleted;
            return {
              deleted: deleted.filter(function (t) {
                return t.key !== key;
              })
            };
          });

          onRest && onRest(item, state, values);
        }
      };
    };

    _this.state = {
      first: true,
      transitions: [],
      current: {},
      deleted: [],
      prevProps: prevProps
    };
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(props, _ref2) {
    var first = _ref2.first,
        prevProps = _ref2.prevProps,
        state = _objectWithoutPropertiesLoose(_ref2, ["first", "prevProps"]);

    var _get = get(props),
        items = _get.items,
        keys = _get.keys,
        initial = _get.initial,
        from = _get.from,
        enter = _get.enter,
        leave = _get.leave,
        update = _get.update,
        _get$trail = _get.trail,
        trail = _get$trail === void 0 ? 0 : _get$trail,
        unique = _get.unique,
        config = _get.config;

    var _get2 = get(prevProps),
        _keys = _get2.keys,
        _items = _get2.items;

    var current = _extends({}, state.current);

    var deleted = [].concat(state.deleted); // Compare next keys with current keys

    var currentKeys = Object.keys(current);
    var currentSet = new Set(currentKeys);
    var nextSet = new Set(keys);
    var added = keys.filter(function (item) {
      return !currentSet.has(item);
    });
    var removed = state.transitions.filter(function (item) {
      return !item.destroyed && !nextSet.has(item.originalKey);
    }).map(function (i) {
      return i.originalKey;
    });
    var updated = keys.filter(function (item) {
      return currentSet.has(item);
    });
    var delay = 0;
    added.forEach(function (key) {
      // In unique mode, remove fading out transitions if their key comes in again
      if (unique && deleted.find(function (d) {
        return d.originalKey === key;
      })) deleted = deleted.filter(function (t) {
        return t.originalKey !== key;
      });
      var keyIndex = keys.indexOf(key);
      var item = items[keyIndex];
      var state = 'enter';
      current[key] = {
        state: state,
        originalKey: key,
        key: unique ? String(key) : guid++,
        item: item,
        trail: delay = delay + trail,
        config: callProp(config, item, state),
        from: callProp(first ? initial !== void 0 ? initial || {} : from : from, item),
        to: callProp(enter, item)
      };
    });
    removed.forEach(function (key) {
      var keyIndex = _keys.indexOf(key);

      var item = _items[keyIndex];
      var state = 'leave';
      deleted.push(_extends({}, current[key], {
        state: state,
        destroyed: true,
        left: _keys[Math.max(0, keyIndex - 1)],
        right: _keys[Math.min(_keys.length, keyIndex + 1)],
        trail: delay = delay + trail,
        config: callProp(config, item, state),
        to: callProp(leave, item)
      }));
      delete current[key];
    });
    updated.forEach(function (key) {
      var keyIndex = keys.indexOf(key);
      var item = items[keyIndex];
      var state = 'update';
      current[key] = _extends({}, current[key], {
        item: item,
        state: state,
        trail: delay = delay + trail,
        config: callProp(config, item, state),
        to: callProp(update, item)
      });
    }); // This tries to restore order for deleted items by finding their last known siblings

    var out = keys.map(function (key) {
      return current[key];
    });
    deleted.forEach(function (_ref3) {
      var left = _ref3.left,
          right = _ref3.right,
          transition = _objectWithoutPropertiesLoose(_ref3, ["left", "right"]);

      var pos; // Was it the element on the left, if yes, move there ...

      if ((pos = out.findIndex(function (t) {
        return t.originalKey === left;
      })) !== -1) pos += 1; // Or how about the element on the right ...

      if (pos === -1) pos = out.findIndex(function (t) {
        return t.originalKey === right;
      }); // Maybe we'll find it in the list of deleted items

      if (pos === -1) pos = deleted.findIndex(function (t) {
        return t.originalKey === left;
      }); // Checking right side as well

      if (pos === -1) pos = deleted.findIndex(function (t) {
        return t.originalKey === right;
      }); // And if nothing else helps, move it to the start ¯\_(ツ)_/¯

      pos = Math.max(0, pos);
      out = [].concat(out.slice(0, pos), [transition], out.slice(pos));
    });
    return {
      first: first && added.length === 0,
      transitions: out,
      current: current,
      deleted: deleted,
      prevProps: props
    };
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props2 = this.props,
        initial = _this$props2.initial,
        _this$props2$from = _this$props2.from,
        _this$props2$enter = _this$props2.enter,
        _this$props2$leave = _this$props2.leave,
        _this$props2$update = _this$props2.update,
        onDestroyed = _this$props2.onDestroyed,
        keys = _this$props2.keys,
        items = _this$props2.items,
        onFrame = _this$props2.onFrame,
        onRest = _this$props2.onRest,
        onStart = _this$props2.onStart,
        trail = _this$props2.trail,
        config = _this$props2.config,
        _children = _this$props2.children,
        unique = _this$props2.unique,
        reset = _this$props2.reset,
        extra = _objectWithoutPropertiesLoose(_this$props2, ["initial", "from", "enter", "leave", "update", "onDestroyed", "keys", "items", "onFrame", "onRest", "onStart", "trail", "config", "children", "unique", "reset"]);

    return this.state.transitions.map(function (_ref4, i) {
      var _ref5;

      var state = _ref4.state,
          key = _ref4.key,
          item = _ref4.item,
          from = _ref4.from,
          to = _ref4.to,
          trail = _ref4.trail,
          config = _ref4.config,
          destroyed = _ref4.destroyed;
      return React__default$1.createElement(Keyframes, _extends({
        reset: reset && state === 'enter',
        primitive: Spring,
        state: state,
        filter: interpolateTo,
        states: (_ref5 = {}, _ref5[state] = to, _ref5),
        key: key,
        onRest: destroyed ? _this2.destroyItem(item, key, state) : onRest && function (values) {
          return onRest(item, state, values);
        },
        onStart: onStart && function () {
          return onStart(item, state);
        },
        onFrame: onFrame && function (values) {
          return onFrame(item, state, values);
        },
        delay: trail,
        config: config
      }, extra, {
        from: from,
        children: function children(props) {
          var child = _children(item, state, i);

          return child ? child(props) : null;
        }
      }));
    });
  };

  return Transition;
}(React__default$1.PureComponent);

Transition.defaultProps = {
  keys: function keys(item) {
    return item;
  },
  unique: false,
  reset: false
};

var domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];
var extendedAnimated = domElements.reduce(function (acc, element) {
  acc[element] = createAnimatedComponent(element);
  return acc;
}, createAnimatedComponent);

exports.Spring = Spring;
exports.Keyframes = Keyframes;
exports.Transition = Transition;
exports.Trail = Trail;
exports.Controller = Controller;
exports.config = config;
exports.animated = extendedAnimated;
exports.interpolate = interpolate$1;
exports.Globals = Globals;
});

unwrapExports(renderprops_cjs);
var renderprops_cjs_1 = renderprops_cjs.Spring;
var renderprops_cjs_2 = renderprops_cjs.Keyframes;
var renderprops_cjs_3 = renderprops_cjs.Transition;
var renderprops_cjs_4 = renderprops_cjs.Trail;
var renderprops_cjs_5 = renderprops_cjs.Controller;
var renderprops_cjs_6 = renderprops_cjs.config;
var renderprops_cjs_7 = renderprops_cjs.animated;
var renderprops_cjs_8 = renderprops_cjs.interpolate;
var renderprops_cjs_9 = renderprops_cjs.Globals;

function expOut(t) {
  return 1 - Math.pow(2, -10 * t);
} // function expInOut(t) {
//   return (
//     ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) /
//     2
//   );
// }
///////////////////////////////////////////////////////////////////////////


var Slide = function Slide(_ref) {
  var inProp = _ref["in"],
      children = _ref.children,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 250 : _ref$duration,
      from = _ref.from,
      _ref$finalHeight = _ref.finalHeight,
      finalHeight = _ref$finalHeight === void 0 ? "auto" : _ref$finalHeight,
      finalWidth = _ref.finalWidth;
  var placements = {
    bottom: {
      maxWidth: "100vw",
      height: finalHeight,
      bottom: 0,
      left: 0,
      right: 0
    },
    top: {
      maxWidth: "100vw",
      height: finalHeight,
      top: 0,
      left: 0,
      right: 0
    },
    left: _objectSpread2({}, finalWidth && {
      maxWidth: finalWidth
    }, {
      height: "100vh",
      left: 0,
      top: 0
    }),
    right: _objectSpread2({}, finalWidth && {
      maxWidth: finalWidth
    }, {
      right: 0,
      top: 0,
      height: "100vh"
    })
  };
  var transitionOptions = {
    bottom: {
      offset: "100%",
      transform: function transform(y) {
        return "translateY(".concat(y, ")");
      }
    },
    top: {
      offset: "-100%",
      transform: function transform(y) {
        return "translateY(".concat(y, ")");
      }
    },
    left: {
      offset: "-100%",
      transform: function transform(x) {
        return "translateX(".concat(x, ")");
      }
    },
    right: {
      offset: "100%",
      transform: function transform(x) {
        return "translateX(".concat(x, ")");
      }
    }
  };
  var _transitionOptions$fr = transitionOptions[from],
      transform = _transitionOptions$fr.transform,
      offset = _transitionOptions$fr.offset;
  return core.jsx(renderprops_cjs_3, {
    items: inProp,
    from: {
      opacity: 0,
      offset: offset
    },
    enter: {
      opacity: 1,
      offset: "0%"
    },
    leave: {
      opacity: 0,
      offset: offset
    },
    config: {
      duration: duration,
      easing: expOut
    }
  }, function (inProp) {
    return inProp && function (styles) {
      return children(_objectSpread2({
        willChange: "opacity, transform",
        opacity: styles.opacity,
        transform: transform(styles.offset)
      }, placements[from]));
    };
  });
}; ///////////////////////////////////////////////////////////////////////////

var Scale = function Scale(_ref2) {
  var inProp = _ref2["in"],
      _ref2$initialScale = _ref2.initialScale,
      initialScale = _ref2$initialScale === void 0 ? 0.97 : _ref2$initialScale,
      _ref2$duration = _ref2.duration,
      duration = _ref2$duration === void 0 ? 150 : _ref2$duration,
      children = _ref2.children,
      rest = _objectWithoutProperties(_ref2, ["in", "initialScale", "duration", "children"]);

  return core.jsx(renderprops_cjs_3, _extends({
    items: inProp,
    config: {
      duration: duration
    },
    from: {
      opacity: 0,
      transform: "scale(".concat(initialScale, ")")
    },
    enter: {
      opacity: 1,
      transform: "scale(1)"
    },
    leave: {
      opacity: 0,
      transform: "scale(".concat(initialScale, ")")
    }
  }, rest), function (inProp) {
    return inProp && function (styles) {
      return children(_objectSpread2({
        willChange: "opacity, transform"
      }, styles));
    };
  });
};
var SlideIn = function SlideIn(_ref3) {
  var inProp = _ref3["in"],
      _ref3$offset = _ref3.offset,
      offset = _ref3$offset === void 0 ? "10px" : _ref3$offset,
      _ref3$duration = _ref3.duration,
      duration = _ref3$duration === void 0 ? 150 : _ref3$duration,
      children = _ref3.children,
      rest = _objectWithoutProperties(_ref3, ["in", "offset", "duration", "children"]);

  return core.jsx(renderprops_cjs_3, _extends({
    items: inProp,
    config: {
      duration: duration
    },
    from: {
      opacity: 0,
      transform: "translate3d(0, ".concat(offset, ", 0)")
    },
    enter: {
      opacity: 1,
      transform: "translate3d(0, 0, 0)"
    },
    leave: {
      opacity: 0,
      transform: "translate3d(0, ".concat(offset, ", 0)")
    }
  }, rest), function (inProp) {
    return inProp && function (styles) {
      return children(_objectSpread2({
        willChange: "opacity, transform"
      }, styles));
    };
  });
};

var DrawerContext = React.createContext({});

var useDrawerContext = function useDrawerContext() {
  return React.useContext(DrawerContext);
};

var Drawer = function Drawer(_ref) {
  var isOpen = _ref.isOpen,
      onClose = _ref.onClose,
      isFullHeight = _ref.isFullHeight,
      _ref$placement = _ref.placement,
      placement = _ref$placement === void 0 ? "right" : _ref$placement,
      finalFocusRef = _ref.finalFocusRef,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? "xs" : _ref$size,
      props = _objectWithoutProperties(_ref, ["isOpen", "onClose", "isFullHeight", "placement", "finalFocusRef", "size"]);

  return core.jsx(Slide, {
    "in": isOpen,
    from: placement,
    finalHeight: isFullHeight ? "100vh" : "auto"
  }, function (styles) {
    return core.jsx(DrawerContext.Provider, {
      value: {
        styles: styles,
        size: size
      }
    }, core.jsx(Modal, _extends({
      isOpen: true,
      onClose: onClose,
      finalFocusRef: finalFocusRef,
      formatIds: function formatIds(id) {
        return {
          content: "drawer-".concat(id),
          header: "drawer-".concat(id, "-header"),
          body: "drawer-".concat(id, "-body")
        };
      }
    }, props)));
  });
};

var drawerSizes = {
  xs: "xs",
  sm: "md",
  md: "lg",
  lg: "2xl",
  xl: "4xl",
  full: "100vw"
};
var DrawerContent = React.forwardRef(function (props, ref) {
  var _useDrawerContext = useDrawerContext(),
      _useDrawerContext$sty = _useDrawerContext.styles,
      opacity = _useDrawerContext$sty.opacity,
      placementStyles = _objectWithoutProperties(_useDrawerContext$sty, ["opacity"]),
      size = _useDrawerContext.size;

  var _size = size in drawerSizes ? drawerSizes[size] : size;

  return core.jsx(ModalContent, _extends({
    ref: ref,
    noStyles: true,
    pos: "fixed",
    maxWidth: _size
  }, props, {
    style: _objectSpread2({}, props.styles, {}, placementStyles)
  }));
});
DrawerContent.displayName = "DrawerContent";
var DrawerOverlay = React.forwardRef(function (props, ref) {
  var _useDrawerContext2 = useDrawerContext(),
      styles = _useDrawerContext2.styles;

  return core.jsx(ModalOverlay, _extends({
    ref: ref,
    opacity: styles.opacity
  }, props));
});
DrawerOverlay.displayName = "DrawerOverlay";
var DrawerCloseButton = React.forwardRef(function (_ref2, ref) {
  var onClick = _ref2.onClick,
      rest = _objectWithoutProperties(_ref2, ["onClick"]);

  return core.jsx(ModalCloseButton, _extends({
    ref: ref,
    position: "fixed",
    zIndex: "1"
  }, rest));
});
DrawerCloseButton.displayName = "DrawerCloseButton";

var EditableContext = React.createContext();
var Editable = React.forwardRef(function (_ref, ref) {
  var valueProp = _ref.value,
      defaultValue = _ref.defaultValue,
      isDisabled = _ref.isDisabled,
      onChange = _ref.onChange,
      startWithEditView = _ref.startWithEditView,
      onCancel = _ref.onCancel,
      onSubmit = _ref.onSubmit,
      _ref$selectAllOnFocus = _ref.selectAllOnFocus,
      selectAllOnFocus = _ref$selectAllOnFocus === void 0 ? true : _ref$selectAllOnFocus,
      _ref$submitOnBlur = _ref.submitOnBlur,
      submitOnBlur = _ref$submitOnBlur === void 0 ? true : _ref$submitOnBlur,
      _ref$isPreviewFocusab = _ref.isPreviewFocusable,
      isPreviewFocusable = _ref$isPreviewFocusab === void 0 ? true : _ref$isPreviewFocusab,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? "Click to edit..." : _ref$placeholder,
      children = _ref.children,
      onEdit = _ref.onEdit,
      rest = _objectWithoutProperties(_ref, ["value", "defaultValue", "isDisabled", "onChange", "startWithEditView", "onCancel", "onSubmit", "selectAllOnFocus", "submitOnBlur", "isPreviewFocusable", "placeholder", "children", "onEdit"]);

  var _useState = React.useState(startWithEditView && !isDisabled),
      _useState2 = _slicedToArray(_useState, 2),
      isEditing = _useState2[0],
      setIsEditing = _useState2[1];

  var _useRef = React.useRef(valueProp != null),
      isControlled = _useRef.current;

  var _useState3 = React.useState(defaultValue || ""),
      _useState4 = _slicedToArray(_useState3, 2),
      value = _useState4[0],
      setValue = _useState4[1];

  var _value = isControlled ? valueProp : value;

  var _useState5 = React.useState(_value),
      _useState6 = _slicedToArray(_useState5, 2),
      previousValue = _useState6[0],
      setPreviousValue = _useState6[1];

  var inputRef = React.useRef(null);

  var onRequestEdit = function onRequestEdit(event) {
    if (!isDisabled) {
      setIsEditing(true);
    }
  };

  React.useEffect(function () {
    if (isEditing) {
      onEdit && onEdit();
    }
  }, [isEditing, onEdit]);
  React.useEffect(function () {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      selectAllOnFocus && inputRef.current.select();
    }
  }, [isEditing, selectAllOnFocus]);

  var handleCancel = function handleCancel() {
    setIsEditing(false);
    setValue(previousValue);

    if (value !== previousValue) {
      onChange && onChange(previousValue);
    }

    onCancel && onCancel(previousValue);
  };

  var handleSubmit = function handleSubmit() {
    setIsEditing(false);
    setPreviousValue(value);
    onSubmit && onSubmit(value);
  };

  var handleChange = function handleChange(event) {
    var value = event.target.value;

    if (!isControlled) {
      setValue(value);
    }

    onChange && onChange(value);
  };

  var handleKeyDown = function handleKeyDown(event) {
    var key = event.key;

    if (key === "Escape") {
      handleCancel();
      return;
    }

    if (key === "Enter") {
      handleSubmit();
    }
  };

  var handleFocus = function handleFocus(event) {
    if (selectAllOnFocus) {
      inputRef.current.select();
    }
  };

  var childContext = {
    inputRef: inputRef,
    isEditing: isEditing,
    isDisabled: isDisabled,
    placeholder: placeholder,
    onRequestEdit: onRequestEdit,
    submitOnBlur: submitOnBlur,
    isPreviewFocusable: isPreviewFocusable,
    value: _value,
    onKeyDown: handleKeyDown,
    onChange: handleChange,
    onSubmit: handleSubmit,
    onCancel: handleCancel,
    onFocus: handleFocus
  };
  return core.jsx(EditableContext.Provider, {
    value: childContext
  }, core.jsx(Box, _extends({
    ref: ref
  }, rest), typeof children === "function" ? children({
    isEditing: isEditing,
    onSubmit: handleSubmit,
    onCancel: handleCancel,
    onRequestEdit: onRequestEdit
  }) : children));
});
Editable.displayName = "Editable";
var sharedProps = {
  fontSize: "inherit",
  fontWeight: "inherit",
  textAlign: "inherit",
  bg: "transparent",
  transition: "all 0.2s",
  borderRadius: "md",
  px: "3px",
  mx: "-3px"
};
var EditablePreview = function EditablePreview(props) {
  var _useContext = React.useContext(EditableContext),
      isEditing = _useContext.isEditing,
      isDisabled = _useContext.isDisabled,
      value = _useContext.value,
      onRequestEdit = _useContext.onRequestEdit,
      placeholder = _useContext.placeholder,
      isPreviewFocusable = _useContext.isPreviewFocusable;

  var hasValue = value != null && value !== "";

  var getTabIndex = function getTabIndex() {
    if ((!isEditing || !isDisabled) && isPreviewFocusable) {
      return 0;
    }

    return null;
  };

  var styleProps = _objectSpread2({}, sharedProps, {
    cursor: "text",
    display: "inline-block",
    opacity: !hasValue ? 0.6 : undefined
  });

  if (isEditing) {
    return null;
  }

  return core.jsx(PseudoBox, _extends({
    as: "span",
    "aria-disabled": isDisabled,
    tabIndex: getTabIndex(),
    onFocus: onRequestEdit
  }, styleProps, props), hasValue ? value : placeholder);
};
var EditableInput = function EditableInput(props) {
  var _useContext2 = React.useContext(EditableContext),
      inputRef = _useContext2.inputRef,
      isEditing = _useContext2.isEditing,
      onChange = _useContext2.onChange,
      onKeyDown = _useContext2.onKeyDown,
      value = _useContext2.value,
      onSubmit = _useContext2.onSubmit,
      onCancel = _useContext2.onCancel,
      submitOnBlur = _useContext2.submitOnBlur,
      placeholder = _useContext2.placeholder,
      isDisabled = _useContext2.isDisabled;

  if (!isEditing) {
    return null;
  }

  var styleProps = _objectSpread2({}, sharedProps, {
    width: "full",
    _placeholder: {
      opacity: "0.6"
    }
  });

  var renderProps = {
    ref: inputRef,
    onBlur: function onBlur(event) {
      submitOnBlur ? onSubmit() : onCancel();

      if (props.onBlur) {
        props.onBlur(event);
      }
    },
    value: value,
    placeholder: placeholder,
    onChange: onChange,
    onKeyDown: onKeyDown
  };
  return props.children ? props.children(renderProps) : core.jsx(PseudoBox, _extends({
    "aria-disabled": isDisabled,
    disabled: isDisabled,
    as: "input",
    outline: "none",
    _focus: {
      shadow: "outline"
    }
  }, renderProps, styleProps, props));
};

var useFormControl = function useFormControl(props) {
  var context = useFormControlContext();

  if (!context) {
    return props;
  }

  var keys = Object.keys(context);
  return keys.reduce(function (acc, prop) {
    /** Giving precedence to `props` over `context` */
    acc[prop] = props[prop];

    if (context) {
      if (props[prop] == null) {
        acc[prop] = context[prop];
      }
    }

    return acc;
  }, {});
};
var FormControlContext = React.createContext();
var useFormControlContext = function useFormControlContext() {
  return React.useContext(FormControlContext);
};
var FormControl = React.forwardRef(function (_ref, ref) {
  var isInvalid = _ref.isInvalid,
      isRequired = _ref.isRequired,
      isDisabled = _ref.isDisabled,
      isReadOnly = _ref.isReadOnly,
      rest = _objectWithoutProperties(_ref, ["isInvalid", "isRequired", "isDisabled", "isReadOnly"]);

  var context = {
    isRequired: isRequired,
    isDisabled: isDisabled,
    isInvalid: isInvalid,
    isReadOnly: isReadOnly
  };
  return core.jsx(FormControlContext.Provider, {
    value: context
  }, core.jsx(Box, _extends({
    role: "group",
    ref: ref
  }, rest)));
});
FormControl.displayName = "FormControl";

var Text = React__default.forwardRef(function (props, ref) {
  return /*#__PURE__*/React__default.createElement(Box, _extends({
    ref: ref,
    as: "p",
    fontFamily: "body"
  }, props));
});
Text.displayName = "Text";

var FormHelperText = React.forwardRef(function (props, ref) {
  var _useColorMode = useColorMode(),
      colorMode = _useColorMode.colorMode;

  var formControl = useFormControl(props);
  var color = {
    light: "gray.500",
    dark: "whiteAlpha.600"
  };
  return core.jsx(Text, _extends({
    mt: 2,
    ref: ref,
    id: formControl.id ? "".concat(formControl.id, "-help-text") : null,
    color: color[colorMode],
    lineHeight: "normal",
    fontSize: "sm"
  }, props));
});
FormHelperText.displayName = "FormHelperText";

var RequiredIndicator = function RequiredIndicator(props) {
  var _useColorMode = useColorMode(),
      colorMode = _useColorMode.colorMode;

  var color = {
    light: "red.500",
    dark: "red.300"
  };
  return core.jsx(Box, _extends({
    as: "span",
    ml: 1,
    color: color[colorMode],
    "aria-hidden": "true",
    children: "*"
  }, props));
};
var FormLabel = React.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  var formControl = useFormControl(props);
  return core.jsx(Box, _extends({
    ref: ref,
    fontSize: "md",
    pr: "12px",
    pb: "4px",
    opacity: formControl.isDisabled ? "0.4" : "1",
    fontWeight: "medium",
    textAlign: "left",
    verticalAlign: "middle",
    display: "inline-block",
    as: "label"
  }, props), children, formControl.isRequired && core.jsx(RequiredIndicator, null));
});
FormLabel.displayName = "FormLabel";

var FormErrorMessage = React.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      icon = _ref.icon,
      props = _objectWithoutProperties(_ref, ["children", "icon"]);

  var _useColorMode = useColorMode(),
      colorMode = _useColorMode.colorMode;

  var formControl = useFormControl(props);
  var color = {
    light: "red.500",
    dark: "red.300"
  };

  if (!formControl.isInvalid) {
    return null;
  }

  return core.jsx(Flex, _extends({
    ref: ref,
    color: color[colorMode],
    id: formControl.id ? "".concat(formControl.id, "-error-message") : null,
    mt: 2,
    fontSize: "sm",
    align: "center"
  }, props), core.jsx(Icon, {
    "aria-hidden": true,
    name: icon || "warning",
    mr: "0.5em"
  }), core.jsx(Text, {
    lineHeight: "normal"
  }, children));
});
FormErrorMessage.displayName = "FormErrorMessage";

var Grid = React.forwardRef(function (_ref, ref) {
  var gap = _ref.gap,
      rowGap = _ref.rowGap,
      columnGap = _ref.columnGap,
      autoFlow = _ref.autoFlow,
      autoRows = _ref.autoRows,
      autoColumns = _ref.autoColumns,
      templateRows = _ref.templateRows,
      templateColumns = _ref.templateColumns,
      templateAreas = _ref.templateAreas,
      area = _ref.area,
      column = _ref.column,
      row = _ref.row,
      props = _objectWithoutProperties(_ref, ["gap", "rowGap", "columnGap", "autoFlow", "autoRows", "autoColumns", "templateRows", "templateColumns", "templateAreas", "area", "column", "row"]);

  return /*#__PURE__*/React__default.createElement(Box, _extends({
    ref: ref,
    display: "grid",
    gridArea: area,
    gridTemplateAreas: templateAreas,
    gridGap: gap,
    gridRowGap: rowGap,
    gridColumnGap: columnGap,
    gridAutoColumns: autoColumns,
    gridColumn: column,
    gridRow: row,
    gridAutoFlow: autoFlow,
    gridAutoRows: autoRows,
    gridTemplateRows: templateRows,
    gridTemplateColumns: templateColumns
  }, props));
});
Grid.displayName = "Grid";

var sizes$4 = {
  "2xl": ["4xl", null, "5xl"],
  xl: ["3xl", null, "4xl"],
  lg: ["xl", null, "2xl"],
  md: "xl",
  sm: "md",
  xs: "sm"
};
var Heading = React.forwardRef(function (_ref, ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? "xl" : _ref$size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return core.jsx(Box, _extends({
    ref: ref,
    as: "h2",
    fontSize: sizes$4[size],
    lineHeight: "shorter",
    fontWeight: "bold",
    fontFamily: "heading"
  }, props));
});
Heading.displayName = "Heading";

var IconButton = React.forwardRef(function (_ref, ref) {
  var icon = _ref.icon,
      isRound = _ref.isRound,
      ariaLabel = _ref["aria-label"],
      rest = _objectWithoutProperties(_ref, ["icon", "isRound", "aria-label"]);

  // Remove some props before passing it to IconButton
  var isFullWidth = rest.isFullWidth,
      leftIcon = rest.leftIcon,
      rightIcon = rest.rightIcon,
      loadingText = rest.loadingText,
      props = _objectWithoutProperties(rest, ["isFullWidth", "leftIcon", "rightIcon", "loadingText"]);

  return core.jsx(Button, _extends({
    p: "0",
    borderRadius: isRound ? "full" : "md",
    ref: ref,
    "aria-label": ariaLabel
  }, props), typeof icon === "string" ? core.jsx(Icon, {
    name: icon,
    focusable: "false",
    color: "currentColor",
    "aria-hidden": true
  }) : core.jsx(Box, {
    as: icon,
    "aria-hidden": true,
    focusable: "false",
    color: "currentColor"
  }));
});
IconButton.displayName = "IconButton";
IconButton.defaultProps = Button.defaultProps;

var outlinedStyle = function outlinedStyle(_ref) {
  var theme = _ref.theme,
      colorMode = _ref.colorMode,
      focusBorderColor = _ref.focusBorderColor,
      errorBorderColor = _ref.errorBorderColor;
  var bg = {
    light: "white",
    dark: "whiteAlpha.100"
  };
  var borderColor = {
    light: "inherit",
    dark: "whiteAlpha.50"
  };
  var hoverColor = {
    light: "gray.300",
    dark: "whiteAlpha.200"
  };
  /**
   * styled-system's get takes 3 args
   * - object or array to read from
   * - key to get
   * - fallback value
   */

  var _focusBorderColor = get(theme.colors, focusBorderColor, focusBorderColor // If color doesn't exist in theme, use it's raw value
  );

  var _errorBorderColor = get(theme.colors, errorBorderColor, errorBorderColor);

  return _objectSpread2({}, readOnly$1, {
    border: "1px",
    borderColor: borderColor[colorMode],
    bg: bg[colorMode],
    _hover: {
      borderColor: hoverColor[colorMode]
    },
    _disabled: {
      opacity: "0.4",
      cursor: "not-allowed"
    },
    _focus: {
      zIndex: 1,
      borderColor: _focusBorderColor,
      boxShadow: "0 0 0 1px ".concat(_focusBorderColor)
    },
    _invalid: {
      borderColor: _errorBorderColor,
      boxShadow: "0 0 0 1px ".concat(_errorBorderColor)
    }
  });
};

var readOnly$1 = {
  _readOnly: {
    bg: "transparent",
    boxShadow: "none !important",
    userSelect: "all"
  }
};

var filledStyle = function filledStyle(_ref2) {
  var theme = _ref2.theme,
      focusBorderColor = _ref2.focusBorderColor,
      errorBorderColor = _ref2.errorBorderColor,
      colorMode = _ref2.colorMode;
  var bg = {
    light: "gray.100",
    dark: "whiteAlpha.50"
  };
  var hoverColor = {
    light: "gray.200",
    dark: "whiteAlpha.100"
  };

  var _focusBorderColor = get(theme.colors, focusBorderColor, focusBorderColor);

  var _errorBorderColor = get(theme.colors, errorBorderColor, errorBorderColor);

  return _objectSpread2({}, readOnly$1, {
    border: "2px",
    borderColor: "transparent",
    bg: bg[colorMode],
    _hover: {
      bg: hoverColor[colorMode]
    },
    _disabled: {
      opacity: "0.4",
      cursor: "not-allowed"
    },
    _focus: {
      zIndex: 1,
      bg: "transparent",
      borderColor: _focusBorderColor
    },
    _invalid: {
      borderColor: _errorBorderColor
    }
  });
};

var flushedStyle = function flushedStyle(_ref3) {
  var theme = _ref3.theme,
      focusBorderColor = _ref3.focusBorderColor,
      errorBorderColor = _ref3.errorBorderColor;

  var _focusBorderColor = get(theme.colors, focusBorderColor, focusBorderColor);

  var _errorBorderColor = get(theme.colors, errorBorderColor, errorBorderColor);

  return _objectSpread2({}, readOnly$1, {
    borderBottom: "2px",
    borderColor: "inherit",
    rounded: 0,
    px: undefined,
    bg: "transparent",
    _focus: {
      zIndex: 1,
      borderColor: _focusBorderColor
    },
    _invalid: {
      borderColor: _errorBorderColor
    }
  });
};

var unstyledStyle$1 = {
  bg: "transparent",
  px: undefined,
  height: undefined
};

var variantProps$2 = function variantProps(props) {
  switch (props.variant) {
    case "flushed":
      return flushedStyle(props);

    case "unstyled":
      return unstyledStyle$1;

    case "filled":
      return filledStyle(props);

    case "outline":
      return outlinedStyle(props);

    default:
      return {};
  }
};

var baseProps$4 = {
  display: "flex",
  alignItems: "center",
  position: "relative",
  transition: "all 0.2s",
  outline: "none",
  appearance: "none"
};
var inputSizes = {
  lg: {
    fontSize: "lg",
    px: 4,
    height: 12,
    rounded: "md"
  },
  md: {
    fontSize: "md",
    px: 4,
    height: 10,
    rounded: "md"
  },
  sm: {
    fontSize: "sm",
    px: 3,
    height: 8,
    rounded: "sm"
  }
};

var sizeProps$1 = function sizeProps(props) {
  return inputSizes[props.size];
};

var useInputStyle = function useInputStyle(props) {
  var theme = useTheme();

  var _useColorMode = useColorMode(),
      colorMode = _useColorMode.colorMode;

  var _props = _objectSpread2({}, props, {
    theme: theme,
    colorMode: colorMode
  });

  return _objectSpread2({
    width: props.isFullWidth ? "100%" : undefined
  }, baseProps$4, {}, sizeProps$1(_props), {}, variantProps$2(_props));
};

var Input = React.forwardRef(function (props, ref) {
  var size = props.size,
      variant = props.variant,
      as = props.as,
      ariaLabel = props["aria-label"],
      ariaDescribedby = props["aria-describedby"],
      isReadOnly = props.isReadOnly,
      isFullWidth = props.isFullWidth,
      isDisabled = props.isDisabled,
      isInvalid = props.isInvalid,
      isRequired = props.isRequired,
      focusBorderColor = props.focusBorderColor,
      errorBorderColor = props.errorBorderColor,
      rest = _objectWithoutProperties(props, ["size", "variant", "as", "aria-label", "aria-describedby", "isReadOnly", "isFullWidth", "isDisabled", "isInvalid", "isRequired", "focusBorderColor", "errorBorderColor"]);

  var inputStyleProps = useInputStyle(props);
  var formControl = useFormControl(props);
  return core.jsx(PseudoBox, _extends({
    ref: ref,
    as: as,
    readOnly: formControl.isReadOnly,
    "aria-readonly": isReadOnly,
    disabled: formControl.isDisabled,
    "aria-label": ariaLabel,
    "aria-invalid": formControl.isInvalid,
    required: formControl.isRequired,
    "aria-required": formControl.isRequired,
    "aria-disabled": formControl.isDisabled,
    "aria-describedby": ariaDescribedby
  }, inputStyleProps, rest));
});
Input.displayName = "Input";
Input.defaultProps = {
  size: "md",
  as: "input",
  variant: "outline",
  isFullWidth: true,
  focusBorderColor: "blue.500",
  errorBorderColor: "red.500"
};

var InputAddon = function InputAddon(_ref) {
  var _ref$placement = _ref.placement,
      placement = _ref$placement === void 0 ? "left" : _ref$placement,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? "md" : _ref$size,
      props = _objectWithoutProperties(_ref, ["placement", "size"]);

  var _useColorMode = useColorMode(),
      colorMode = _useColorMode.colorMode;

  var bg = {
    dark: "whiteAlpha.300",
    light: "gray.100"
  };
  var _placement = {
    left: {
      mr: "-1px",
      roundedRight: 0,
      borderRightColor: "transparent"
    },
    right: {
      order: 1,
      roundedLeft: 0,
      borderLeftColor: "transparent"
    }
  };

  var styleProps = _objectSpread2({}, useInputStyle({
    size: size,
    variant: "outline"
  }), {
    flex: "0 0 auto",
    whiteSpace: "nowrap",
    bg: bg[colorMode]
  }, _placement[placement]);

  return core.jsx(Box, _extends({}, styleProps, props));
};

var InputLeftAddon = function InputLeftAddon(props) {
  return core.jsx(InputAddon, _extends({
    placement: "left"
  }, props));
};

var InputRightAddon = function InputRightAddon(props) {
  return core.jsx(InputAddon, _extends({
    placement: "right"
  }, props));
};

var InputElement = React.forwardRef(function (_ref, ref) {
  var size = _ref.size,
      children = _ref.children,
      _ref$placement = _ref.placement,
      placement = _ref$placement === void 0 ? "left" : _ref$placement,
      _ref$disablePointerEv = _ref.disablePointerEvents,
      disablePointerEvents = _ref$disablePointerEv === void 0 ? false : _ref$disablePointerEv,
      props = _objectWithoutProperties(_ref, ["size", "children", "placement", "disablePointerEvents"]);

  var height = inputSizes[size] && inputSizes[size]["height"];
  var fontSize = inputSizes[size] && inputSizes[size]["fontSize"];

  var placementProp = _defineProperty({}, placement, "0");

  return core.jsx(Box, _extends({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    height: height,
    width: height,
    fontSize: fontSize,
    top: "0",
    zIndex: 2,
    ref: ref
  }, disablePointerEvents && {
    pointerEvents: "none"
  }, placementProp, props), children);
});
InputElement.displayName = "InputElement";
var InputLeftElement = React.forwardRef(function (props, ref) {
  return core.jsx(InputElement, _extends({
    ref: ref,
    placement: "left"
  }, props));
});
InputLeftElement.displayName = "InputLeftElement";
var InputRightElement = React.forwardRef(function (props, ref) {
  return core.jsx(InputElement, _extends({
    ref: ref,
    placement: "right"
  }, props));
});
InputRightElement.displayName = "InputRightElement";

var InputGroup = function InputGroup(_ref) {
  var children = _ref.children,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? "md" : _ref$size,
      props = _objectWithoutProperties(_ref, ["children", "size"]);

  var _useTheme = useTheme(),
      sizes = _useTheme.sizes;

  var height = inputSizes[size] && inputSizes[size]["height"];
  var pl = null;
  var pr = null;
  var validChildren = cleanChildren(children);
  return core.jsx(Box, _extends({
    display: "flex",
    position: "relative"
  }, props), validChildren.map(function (child) {
    if (child.type === InputLeftElement) {
      pl = sizes[height];
    }

    if (child.type === InputRightElement) {
      pr = sizes[height];
    }

    if (child.type === Input) {
      return React.cloneElement(child, {
        size: size,
        pl: child.props.pl || pl,
        pr: child.props.pr || pr
      });
    }

    return React.cloneElement(child, {
      size: size
    });
  }));
};

var Kbd = function Kbd(props) {
  var _useColorMode = useColorMode(),
      colorMode = _useColorMode.colorMode;

  var bg = {
    light: "gray.100",
    dark: "whiteAlpha.50"
  };
  return core.jsx(Box, _extends({
    as: "kbd",
    bg: bg[colorMode],
    rounded: "md",
    border: "1px",
    borderColor: "inherit",
    borderBottomWidth: "3px",
    fontSize: "0.8em",
    fontWeight: "bold",
    lineHeight: "normal",
    px: "0.4em",
    whiteSpace: "nowrap"
  }, props));
};

var List = React.forwardRef(function (_ref, ref) {
  var _ref$styleType = _ref.styleType,
      styleType = _ref$styleType === void 0 ? "none" : _ref$styleType,
      _ref$stylePos = _ref.stylePos,
      stylePos = _ref$stylePos === void 0 ? "inside" : _ref$stylePos,
      spacing = _ref.spacing,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["styleType", "stylePos", "spacing", "children"]);

  var validChildren = cleanChildren(children);
  return core.jsx(Box, _extends({
    ref: ref,
    as: "ul",
    listStyleType: styleType,
    listStylePosition: stylePos
  }, props), validChildren.map(function (child, index) {
    var isLast = index + 1 === React.Children.count(children);

    if (isLast) {
      return child;
    }

    return React.cloneElement(child, {
      spacing: spacing
    });
  }));
});
List.displayName = "List";
var ListItem = React.forwardRef(function (_ref2, ref) {
  var spacing = _ref2.spacing,
      props = _objectWithoutProperties(_ref2, ["spacing"]);

  return core.jsx(PseudoBox, _extends({
    ref: ref,
    as: "li",
    mb: spacing
  }, props));
});
ListItem.diplayName = "ListItem";
var ListIcon = function ListIcon(_ref3) {
  var icon = _ref3.icon,
      props = _objectWithoutProperties(_ref3, ["icon"]);

  if (typeof icon === "string") {
    return core.jsx(Icon, _extends({
      name: icon,
      mr: 2
    }, props));
  }

  return core.jsx(Box, _extends({
    as: icon,
    d: "inline",
    focusable: "false",
    size: "1em",
    color: "currentColor",
    mr: 2
  }, props));
};

var Stack = React.forwardRef(function (_ref, ref) {
  var direction = _ref.direction,
      _ref$isInline = _ref.isInline,
      isInline = _ref$isInline === void 0 ? false : _ref$isInline,
      _ref$isReversed = _ref.isReversed,
      isReversed = _ref$isReversed === void 0 ? false : _ref$isReversed,
      children = _ref.children,
      align = _ref.align,
      justify = _ref.justify,
      _ref$spacing = _ref.spacing,
      spacing = _ref$spacing === void 0 ? 2 : _ref$spacing,
      shouldWrapChildren = _ref.shouldWrapChildren,
      rest = _objectWithoutProperties(_ref, ["direction", "isInline", "isReversed", "children", "align", "justify", "spacing", "shouldWrapChildren"]);

  var _isReversed = isReversed || direction && direction.endsWith("reverse");

  var _isInline = isInline || direction && direction.startsWith("row");

  var _direction;

  if (_isInline) {
    _direction = "row";
  }

  if (_isReversed) {
    _direction = isInline ? "row-reverse" : "column-reverse";
  }

  if (direction) {
    _direction = direction;
  }

  if (!_isInline && !_isReversed && !direction) {
    _direction = "column";
  }

  var validChildrenArray = React.Children.toArray(children).filter(React.isValidElement);
  return core.jsx(Flex, _extends({
    align: align,
    justify: justify,
    direction: _direction
  }, rest, {
    ref: ref
  }), validChildrenArray.map(function (child, index) {
    var isLastChild = validChildrenArray.length === index + 1;
    var spacingProps = _isInline ? _defineProperty({}, _isReversed ? "ml" : "mr", isLastChild ? null : spacing) : _defineProperty({}, _isReversed ? "mt" : "mb", isLastChild ? null : spacing);

    if (shouldWrapChildren) {
      return core.jsx(Box, _extends({
        d: "inline-block"
      }, spacingProps, {
        key: "stack-box-wrapper-".concat(index)
      }), child);
    }

    return React.cloneElement(child, spacingProps);
  }));
});

// These helper fns are modified versions of the amazing rebass library
// https://github.com/rebassjs/rebass/blob/master/packages/layout/src/index.js
var px = function px(n) {
  return typeof n === "number" ? n + "px" : n;
};

var widthToColumns = function widthToColumns(width) {
  if (Array.isArray(width)) {
    return width.map(widthToColumns);
  }

  if (width !== null && _typeof(width) === "object" && Object.keys(width).length > 0) {
    var acc = {};

    for (var key in width) {
      acc[key] = "repeat(auto-fit, minmax(".concat(px(width[key]), ", 1fr))");
    }

    return acc;
  }

  if (width != null) {
    return "repeat(auto-fit, minmax(".concat(px(width), ", 1fr))");
  }

  return null;
};
var countToColumns = function countToColumns(count) {
  if (Array.isArray(count)) {
    return count.map(countToColumns);
  }

  if (count !== null && _typeof(count) === "object" && Object.keys(count).length > 0) {
    var acc = {};

    for (var key in count) {
      acc[key] = "repeat(".concat(count[key], ", 1fr)");
    }

    return acc;
  }

  if (count != null) {
    return "repeat(".concat(count, ", 1fr)");
  }

  return null;
};

var SimpleGrid = React.forwardRef(function (_ref, ref) {
  var columns = _ref.columns,
      spacingX = _ref.spacingX,
      spacingY = _ref.spacingY,
      spacing = _ref.spacing,
      minChildWidth = _ref.minChildWidth,
      props = _objectWithoutProperties(_ref, ["columns", "spacingX", "spacingY", "spacing", "minChildWidth"]);

  var templateColumns = !!minChildWidth ? widthToColumns(minChildWidth) : countToColumns(columns);
  return /*#__PURE__*/React__default.createElement(Grid, _extends({
    ref: ref,
    gap: spacing,
    columnGap: spacingX,
    rowGap: spacingY,
    templateColumns: templateColumns
  }, props));
});
SimpleGrid.displayName = "SimpleGrid";

function usePrevious(value) {
  var ref = React.useRef();
  React.useEffect(function () {
    ref.current = value;
  }, [value]);
  return ref.current;
}

var useMenuListStyle = function useMenuListStyle() {
  var _useColorMode = useColorMode(),
      colorMode = _useColorMode.colorMode;

  var elevation = {
    light: {
      bg: "#fff",
      shadow: "sm"
    },
    dark: {
      bg: "gray.700",
      shadow: "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px"
    }
  };
  return _objectSpread2({
    color: "inherit",
    borderWidth: "1px"
  }, elevation[colorMode]);
};
/**
|--------------------------------------------------
| Styles for MenuItem
|--------------------------------------------------
*/

var baseProps$5 = {
  width: "full",
  flex: " 0 0 auto",
  userSelect: "none",
  transition: "background-color 220ms, color 220ms"
};

var interactionProps$1 = function interactionProps(_ref) {
  var colorMode = _ref.colorMode;
  var _focusColor = {
    light: "gray.100",
    dark: "whiteAlpha.100"
  };
  var _activeColor = {
    light: "gray.200",
    dark: "whiteAlpha.200"
  };
  return {
    _active: {
      bg: _activeColor[colorMode]
    },
    _focus: {
      bg: _focusColor[colorMode],
      outline: 0
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    }
  };
};

var useMenuItemStyle = function useMenuItemStyle() {
  var theme = useTheme();

  var _useColorMode2 = useColorMode(),
      colorMode = _useColorMode2.colorMode;

  var props = {
    theme: theme,
    colorMode: colorMode
  };
  return _objectSpread2({}, baseProps$5, {}, interactionProps$1(props));
};

/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';

var timeoutDuration = function () {
  var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
      return 1;
    }
  }
  return 0;
}();

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

/**
 * Returns the reference node of the reference object, or the reference object itself.
 * @method
 * @memberof Popper.Utils
 * @param {Element|Object} reference - the reference element (the popper will be relative to this)
 * @returns {Element} parent
 */
function getReferenceNode(reference) {
  return reference && reference.referenceNode ? reference.referenceNode : reference;
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent || null;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width']) + parseFloat(styles['border' + sideB + 'Width']);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty$1 = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
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

var _extends$2 = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends$2({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.width;
  var height = sizes.height || element.clientHeight || result.height;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop);
    var marginLeft = parseFloat(styles.marginLeft);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  var parentNode = getParentNode(element);
  if (!parentNode) {
    return false;
  }
  return isFixed(parentNode);
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends$2({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicitly asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */
function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);

  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;

  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends$2({}, attributes, data.attributes);
  data.styles = _extends$2({}, styles, data.styles);
  data.arrowStyles = _extends$2({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized]);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width']);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty$1(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty$1(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;

    // flips variation if reference element overflows boundaries
    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    // flips variation if popper content overflows boundaries
    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);

    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends$2({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty$1({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty$1({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends$2({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty$1({}, side, reference[side]),
      end: defineProperty$1({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends$2({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport',
    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,
    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends$2({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends$2({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends$2({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends$2({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

function _templateObject$7() {
  var data = _taggedTemplateLiteral(["\n    [x-arrow] {\n      width: ", ";\n      height: ", ";\n      position: absolute;\n      transform: rotate(45deg);\n\n      &::before {\n        content: \"\";\n        width: ", ";\n        height: ", ";\n        position: absolute;\n        z-index: -1;\n      }\n    }\n\n    &[x-placement^=\"top\"] {\n      margin-bottom: ", ";\n      transform-origin: bottom center;\n    }\n\n    &[x-placement^=\"top\"] [x-arrow] {\n      bottom: ", ";\n\n      &::before {\n        box-shadow: 2px 2px 2px 0 ", ";\n      }\n    }\n\n    &[x-placement^=\"bottom\"] {\n      margin-top: ", ";\n      transform-origin: top center;\n    }\n\n    &[x-placement^=\"bottom\"] [x-arrow] {\n      top: ", ";\n\n      &::before {\n        box-shadow: -1px -1px 1px 0 ", ";\n      }\n    }\n\n    &[x-placement^=\"right\"] {\n      margin-left: ", ";\n      transform-origin: left center;\n    }\n\n    &[x-placement^=\"right\"] [x-arrow] {\n      left: ", ";\n\n      &::before {\n        box-shadow: -1px 1px 1px 0 ", ";\n      }\n    }\n\n    &[x-placement^=\"left\"] {\n      margin-right: ", ";\n      transform-origin: right center;\n    }\n\n    &[x-placement^=\"left\"] [x-arrow] {\n      right: ", ";\n      &::before {\n        box-shadow: 1px -1px 1px 0 ", ";\n      }\n    }\n  "]);

  _templateObject$7 = function _templateObject() {
    return data;
  };

  return data;
}

var getPopperArrowStyle = function getPopperArrowStyle(_ref) {
  var _ref$arrowSize = _ref.arrowSize,
      arrowSize = _ref$arrowSize === void 0 ? "1rem" : _ref$arrowSize,
      _ref$arrowShadowColor = _ref.arrowShadowColor,
      arrowShadowColor = _ref$arrowShadowColor === void 0 ? "rgba(0, 0, 0, 0.1)" : _ref$arrowShadowColor,
      _ref$hasArrow = _ref.hasArrow,
      hasArrow = _ref$hasArrow === void 0 ? true : _ref$hasArrow;
  var popoverMargin = hasArrow ? "calc(".concat(arrowSize, " / 2)") : null;
  var arrowPos = "calc(".concat(arrowSize, " / 2 * -1)");
  return core.css(_templateObject$7(), arrowSize, arrowSize, arrowSize, arrowSize, popoverMargin, arrowPos, arrowShadowColor, popoverMargin, arrowPos, arrowShadowColor, popoverMargin, arrowPos, arrowShadowColor, popoverMargin, arrowPos, arrowShadowColor);
};

/**
 * Flips placement if in <body dir="rtl" />
 * @param {string} placement
 */

function flipPlacement(placement) {
  var direction = typeof window !== "undefined" && document.body.getAttribute("dir") || "ltr";

  if (direction !== "rtl") {
    return placement;
  }

  switch (placement) {
    case "bottom-end":
      return "bottom-start";

    case "bottom-start":
      return "bottom-end";

    case "top-end":
      return "top-start";

    case "top-start":
      return "top-end";

    default:
      return placement;
  }
}

function getAnchorEl(anchorEl) {
  return typeof anchorEl === "function" ? anchorEl() : anchorEl;
}

var useEnhancedEffect$1 = typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;
var Popper$1 = React.forwardRef(function (_ref, ref) {
  var anchorEl = _ref.anchorEl,
      children = _ref.children,
      gutter = _ref.gutter,
      container = _ref.container,
      _ref$usePortal = _ref.usePortal,
      usePortal = _ref$usePortal === void 0 ? true : _ref$usePortal,
      _ref$unmountOnExit = _ref.unmountOnExit,
      unmountOnExit = _ref$unmountOnExit === void 0 ? true : _ref$unmountOnExit,
      modifiers = _ref.modifiers,
      isOpen = _ref.isOpen,
      _ref$placement = _ref.placement,
      initialPlacement = _ref$placement === void 0 ? "bottom" : _ref$placement,
      _ref$popperOptions = _ref.popperOptions,
      popperOptions = _ref$popperOptions === void 0 ? {} : _ref$popperOptions,
      popperRefProp = _ref.popperRef,
      _ref$willUseTransitio = _ref.willUseTransition,
      willUseTransition = _ref$willUseTransitio === void 0 ? false : _ref$willUseTransitio,
      arrowSize = _ref.arrowSize,
      arrowShadowColor = _ref.arrowShadowColor,
      hasArrow = _ref.hasArrow,
      rest = _objectWithoutProperties(_ref, ["anchorEl", "children", "gutter", "container", "usePortal", "unmountOnExit", "modifiers", "isOpen", "placement", "popperOptions", "popperRef", "willUseTransition", "arrowSize", "arrowShadowColor", "hasArrow"]);

  var tooltipRef = React.useRef(null);
  var ownRef = useForkRef(tooltipRef, ref);
  var popperRef = React.useRef(null);
  var handlePopperRef = useForkRef(popperRef, popperRefProp);
  var handlePopperRefRef = React.useRef(handlePopperRef);
  useEnhancedEffect$1(function () {
    handlePopperRefRef.current = handlePopperRef;
  }, [handlePopperRef]);
  React.useImperativeHandle(popperRefProp, function () {
    return popperRef.current;
  }, []);

  var _useState = React.useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      exited = _useState2[0],
      setExited = _useState2[1];

  var rtlPlacement = flipPlacement(initialPlacement);

  var _useState3 = React.useState(rtlPlacement),
      _useState4 = _slicedToArray(_useState3, 2),
      placement = _useState4[0],
      setPlacement = _useState4[1];

  if (rtlPlacement !== placement) {
    setPlacement(rtlPlacement);
  }

  var handleOpen = React.useCallback(function () {
    var popperNode = tooltipRef.current;

    if (!popperNode || !anchorEl || !isOpen) {
      return;
    }

    if (popperRef.current) {
      popperRef.current.destroy();
      handlePopperRefRef.current(null);
    }

    var handlePopperUpdate = function handlePopperUpdate(data) {
      setPlacement(data.placement);
    };

    var popper = new Popper(getAnchorEl(anchorEl), popperNode, _objectSpread2({
      placement: rtlPlacement
    }, popperOptions, {
      modifiers: _objectSpread2({}, usePortal && {
        preventOverflow: {
          boundariesElement: "window"
        }
      }, {}, modifiers, {}, popperOptions.modifiers),
      onUpdate: createChainedFunction(handlePopperUpdate, popperOptions.onUpdate)
    }));
    handlePopperRefRef.current(popper);
  }, [anchorEl, usePortal, modifiers, isOpen, rtlPlacement, popperOptions]);
  var handleRef = React.useCallback(function (node) {
    setRef(ownRef, node);
    handleOpen();
  }, [ownRef, handleOpen]);

  var handleEnter = function handleEnter() {
    setExited(false);
  };

  var handleClose = function handleClose() {
    if (!popperRef.current) {
      return;
    }

    popperRef.current.destroy();
    handlePopperRefRef.current(null);
  };

  var handleExited = function handleExited() {
    setExited(true);
    handleClose();
  };

  React.useEffect(function () {
    handleOpen();
  }, [handleOpen]);
  React.useEffect(function () {
    return function () {
      handleClose();
    };
  }, []);
  React.useEffect(function () {
    if (!isOpen && !willUseTransition) {
      handleClose();
    }
  }, [isOpen, willUseTransition]);

  if (unmountOnExit && !isOpen && (!willUseTransition || exited)) {
    return null;
  }

  var childProps = {
    placement: placement
  };

  if (willUseTransition) {
    childProps.transition = {
      "in": isOpen,
      onEnter: handleEnter,
      onExited: handleExited
    };
  }

  return core.jsx(Portal$1, {
    isDisabled: !usePortal,
    container: container
  }, core.jsx(PseudoBox, _extends({
    ref: handleRef,
    pos: "absolute",
    css: getPopperArrowStyle({
      arrowSize: arrowSize,
      arrowShadowColor: arrowShadowColor,
      hasArrow: hasArrow
    })
  }, rest), typeof children === "function" ? children(childProps) : children));
});
var PopperArrow = function PopperArrow(props) {
  return core.jsx(Box, _extends({
    "x-arrow": "",
    role: "presentation",
    bg: "inherit"
  }, props));
};

var MenuItemOption = React.forwardRef(function (_ref, ref) {
  var isDisabled = _ref.isDisabled,
      children = _ref.children,
      onClick = _ref.onClick,
      type = _ref.type,
      onMouseLeave = _ref.onMouseLeave,
      onMouseEnter = _ref.onMouseEnter,
      onKeyDown = _ref.onKeyDown,
      isChecked = _ref.isChecked,
      rest = _objectWithoutProperties(_ref, ["isDisabled", "children", "onClick", "type", "onMouseLeave", "onMouseEnter", "onKeyDown", "isChecked"]);

  var _useMenuContext = useMenuContext(),
      focusableItems = _useMenuContext.focusableItems,
      focusAtIndex = _useMenuContext.focusAtIndex,
      closeMenu = _useMenuContext.closeMenu,
      closeOnSelect = _useMenuContext.closeOnSelect;

  var role = "menuitem".concat(type);

  var handleSelect = function handleSelect() {
    onClick && onClick();
    closeOnSelect && closeMenu();
  };

  var handleClick = function handleClick(event) {
    if (isDisabled) {
      event.stopPropagation();
      event.preventDefault();
      return;
    }

    handleSelect();
  };

  var handleKeyDown = function handleKeyDown(event) {
    if (isDisabled) return;

    if (["Enter", " "].includes(event.key)) {
      event.preventDefault();
      handleSelect();
    }

    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  var handleMouseEnter = function handleMouseEnter(event) {
    if (isDisabled) {
      event.stopPropagation();
      event.preventDefault();
      return;
    }

    var nextIndex = focusableItems.current.indexOf(event.currentTarget);
    focusAtIndex(nextIndex);

    if (onMouseEnter) {
      onMouseEnter(event);
    }
  };

  var handleMouseLeave = function handleMouseLeave(event) {
    focusAtIndex(-1);

    if (onMouseLeave) {
      onMouseLeave(event);
    }
  };

  var styleProps = useMenuItemStyle();
  return core.jsx(PseudoBox, _extends({
    ref: ref,
    as: "button",
    display: "flex",
    minHeight: "32px",
    alignItems: "center",
    onClick: handleClick,
    role: role,
    tabIndex: -1,
    "aria-checked": isChecked,
    disabled: isDisabled,
    "aria-disabled": isDisabled ? "" : undefined,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onKeyDown: handleKeyDown
  }, styleProps, rest), core.jsx(Icon, {
    name: "check",
    opacity: isChecked ? 1 : 0,
    color: "currentColor",
    size: "1em",
    ml: "1rem",
    mr: "-4px",
    "aria-hidden": true,
    "data-menuitem-icon": ""
  }), core.jsx(Box, {
    textAlign: "left",
    as: "span",
    mx: "1rem",
    flex: "1"
  }, children));
});
MenuItemOption.displayName = "MenuItemOption";
var MenuOptionGroup = function MenuOptionGroup(_ref2) {
  var children = _ref2.children,
      _ref2$type = _ref2.type,
      type = _ref2$type === void 0 ? "radio" : _ref2$type,
      name = _ref2.name,
      title = _ref2.title,
      valueProp = _ref2.value,
      defaultValue = _ref2.defaultValue,
      onChange = _ref2.onChange,
      rest = _objectWithoutProperties(_ref2, ["children", "type", "name", "title", "value", "defaultValue", "onChange"]);

  var _useState = React.useState(defaultValue || ""),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useRef = React.useRef(valueProp != null),
      isControlled = _useRef.current;

  var derivedValue = isControlled ? valueProp : value;

  var handleChange = function handleChange(_value) {
    if (type === "radio") {
      !isControlled && setValue(_value);
      onChange && onChange(_value);
    }

    if (type === "checkbox") {
      var newValue = derivedValue.includes(_value) ? derivedValue.filter(function (itemValue) {
        return itemValue !== _value;
      }) : [].concat(_toConsumableArray(derivedValue), [_value]);
      !isControlled && setValue(newValue);
      onChange && onChange(newValue);
    }
  };

  var fallbackName = "radio-".concat(useId());
  var validChildren = cleanChildren(children);
  return core.jsx(MenuGroup, _extends({
    title: title
  }, rest), validChildren.map(function (child) {
    if (type === "radio") {
      return React.cloneElement(child, {
        type: type,
        key: child.props.value,
        onClick: function onClick(event) {
          handleChange(child.props.value);

          if (child.props.onClick) {
            child.props.onClick(event);
          }
        },
        name: name || fallbackName,
        isChecked: child.props.value === derivedValue
      });
    }

    if (type === "checkbox") {
      return React.cloneElement(child, {
        type: type,
        key: child.props.value,
        onClick: function onClick(event) {
          handleChange(child.props.value);

          if (child.props.onClick) {
            child.props.onClick(event);
          }
        },
        isChecked: derivedValue.includes(child.props.value)
      });
    }
  }));
};

var MenuContext = React.createContext();

var Menu = function Menu(_ref) {
  var children = _ref.children,
      isOpenProp = _ref.isOpen,
      defaultIsOpen = _ref.defaultIsOpen,
      onOpen = _ref.onOpen,
      onClose = _ref.onClose,
      _ref$autoSelect = _ref.autoSelect,
      autoSelect = _ref$autoSelect === void 0 ? true : _ref$autoSelect,
      _ref$closeOnBlur = _ref.closeOnBlur,
      closeOnBlur = _ref$closeOnBlur === void 0 ? true : _ref$closeOnBlur,
      _ref$closeOnSelect = _ref.closeOnSelect,
      closeOnSelect = _ref$closeOnSelect === void 0 ? true : _ref$closeOnSelect,
      defaultActiveIndex = _ref.defaultActiveIndex,
      placement = _ref.placement;

  var _useColorMode = useColorMode(),
      colorMode = _useColorMode.colorMode;

  var _useState = React.useState(defaultActiveIndex || -1),
      _useState2 = _slicedToArray(_useState, 2),
      activeIndex = _useState2[0],
      setActiveIndex = _useState2[1];

  var _useState3 = React.useState(defaultIsOpen || false),
      _useState4 = _slicedToArray(_useState3, 2),
      isOpen = _useState4[0],
      setIsOpen = _useState4[1];

  var _useRef = React.useRef(isOpenProp != null),
      isControlled = _useRef.current;

  var _isOpen = isControlled ? isOpenProp : isOpen;

  var menuId = "menu-".concat(useId());
  var buttonId = "menubutton-".concat(useId());
  var focusableItems = React.useRef(null);
  var menuRef = React.useRef(null);
  var buttonRef = React.useRef(null);
  React.useEffect(function () {
    if (_isOpen && menuRef && menuRef.current) {
      var focusables = getFocusables(menuRef.current).filter(function (node) {
        return ["menuitem", "menuitemradio", "menuitemcheckbox"].includes(node.getAttribute("role"));
      });
      focusableItems.current = menuRef.current ? focusables : [];
      initTabIndex();
    }
  }, [_isOpen]);

  var updateTabIndex = function updateTabIndex(index) {
    if (focusableItems.current.length > 0) {
      var nodeAtIndex = focusableItems.current[index];
      focusableItems.current.forEach(function (node) {
        if (node !== nodeAtIndex) {
          node.setAttribute("tabindex", -1);
        }
      });
      nodeAtIndex.setAttribute("tabindex", 0);
    }
  };

  var resetTabIndex = function resetTabIndex() {
    if (focusableItems.current) {
      focusableItems.current.forEach(function (node) {
        return node.setAttribute("tabindex", -1);
      });
    }
  };

  var initTabIndex = function initTabIndex() {
    focusableItems.current.forEach(function (node, index) {
      return index === 0 && node.setAttribute("tabindex", 0);
    });
  };

  var wasPreviouslyOpen = usePrevious(_isOpen);
  React.useEffect(function () {
    if (activeIndex !== -1) {
      focusableItems.current[activeIndex] && focusableItems.current[activeIndex].focus();
      updateTabIndex(activeIndex);
    }

    if (activeIndex === -1 && !_isOpen && wasPreviouslyOpen) {
      buttonRef.current && buttonRef.current.focus();
    }

    if (activeIndex === -1 && _isOpen) {
      menuRef.current && menuRef.current.focus();
    }
  }, [activeIndex, _isOpen, buttonRef, menuRef, wasPreviouslyOpen]);

  var focusOnFirstItem = function focusOnFirstItem() {
    openMenu();
    setActiveIndex(0);
  };

  var openMenu = function openMenu() {
    if (!isControlled) {
      setIsOpen(true);
    }

    if (onOpen) {
      onOpen();
    }
  };

  var focusAtIndex = function focusAtIndex(index) {
    setActiveIndex(index);
  };

  var focusOnLastItem = function focusOnLastItem() {
    openMenu();
    setActiveIndex(focusableItems.current.length - 1);
  };

  var closeMenu = function closeMenu() {
    if (!isControlled) {
      setIsOpen(false);
    }

    if (onClose) {
      onClose();
    }

    setActiveIndex(-1);
    resetTabIndex();
  };

  var context = {
    activeIndex: activeIndex,
    isOpen: _isOpen,
    focusAtIndex: focusAtIndex,
    focusOnLastItem: focusOnLastItem,
    focusOnFirstItem: focusOnFirstItem,
    closeMenu: closeMenu,
    buttonRef: buttonRef,
    menuRef: menuRef,
    focusableItems: focusableItems,
    placement: placement,
    menuId: menuId,
    buttonId: buttonId,
    openMenu: openMenu,
    autoSelect: autoSelect,
    closeOnSelect: closeOnSelect,
    closeOnBlur: closeOnBlur,
    colorMode: colorMode
  };
  return core.jsx(MenuContext.Provider, {
    value: context
  }, typeof children === "function" ? children({
    isOpen: _isOpen,
    onClose: closeMenu
  }) : children);
};

function useMenuContext() {
  var context = React.useContext(MenuContext);

  if (context === undefined) {
    throw new Error("useMenuContext must be used within a MenuContext Provider");
  }

  return context;
} //////////////////////////////////////////////////////////////////////////////////////////

var PseudoButton = React.forwardRef(function (props, ref) {
  return core.jsx(PseudoBox, _extends({
    ref: ref,
    as: "button"
  }, props));
});
PseudoButton.displayName = "PseudoButton";
var MenuButton = React.forwardRef(function (_ref2, ref) {
  var onClick = _ref2.onClick,
      onKeyDown = _ref2.onKeyDown,
      _ref2$as = _ref2.as,
      Comp = _ref2$as === void 0 ? PseudoButton : _ref2$as,
      rest = _objectWithoutProperties(_ref2, ["onClick", "onKeyDown", "as"]);

  var _useMenuContext = useMenuContext(),
      isOpen = _useMenuContext.isOpen,
      focusOnLastItem = _useMenuContext.focusOnLastItem,
      focusOnFirstItem = _useMenuContext.focusOnFirstItem,
      closeMenu = _useMenuContext.closeMenu,
      menuId = _useMenuContext.menuId,
      buttonId = _useMenuContext.buttonId,
      autoSelect = _useMenuContext.autoSelect,
      openMenu = _useMenuContext.openMenu,
      buttonRef = _useMenuContext.buttonRef;

  var menuButtonRef = useForkRef(buttonRef, ref);
  return core.jsx(Comp, _extends({
    "aria-haspopup": "menu",
    "aria-expanded": isOpen,
    "aria-controls": menuId,
    id: buttonId,
    role: "button",
    ref: menuButtonRef,
    onClick: wrapEvent(onClick, function () {
      if (isOpen) {
        closeMenu();
      } else {
        if (autoSelect) {
          focusOnFirstItem();
        } else {
          openMenu();
        }
      }
    }),
    onKeyDown: wrapEvent(onKeyDown, function (event) {
      if (event.key === "ArrowDown") {
        event.preventDefault();
        focusOnFirstItem();
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();
        focusOnLastItem();
      }
    })
  }, rest));
});
MenuButton.displayName = "MenuButton"; //////////////////////////////////////////////////////////////////////////////////////////

var MenuList = function MenuList(_ref3) {
  var onKeyDown = _ref3.onKeyDown,
      onBlur = _ref3.onBlur,
      props = _objectWithoutProperties(_ref3, ["onKeyDown", "onBlur"]);

  var _useMenuContext2 = useMenuContext(),
      index = _useMenuContext2.activeIndex,
      isOpen = _useMenuContext2.isOpen,
      focusAtIndex = _useMenuContext2.focusAtIndex,
      focusOnFirstItem = _useMenuContext2.focusOnFirstItem,
      focusOnLastItem = _useMenuContext2.focusOnLastItem,
      closeMenu = _useMenuContext2.closeMenu,
      focusableItems = _useMenuContext2.focusableItems,
      buttonRef = _useMenuContext2.buttonRef,
      menuId = _useMenuContext2.menuId,
      buttonId = _useMenuContext2.buttonId,
      menuRef = _useMenuContext2.menuRef,
      closeOnBlur = _useMenuContext2.closeOnBlur,
      placement = _useMenuContext2.placement;

  var handleKeyDown = function handleKeyDown(event) {
    var count = focusableItems.current.length;
    var nextIndex;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      nextIndex = (index + 1) % count;
      focusAtIndex(nextIndex);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      nextIndex = (index - 1 + count) % count;
      focusAtIndex(nextIndex);
    } else if (event.key === "Home") {
      focusOnFirstItem();
    } else if (event.key === "End") {
      focusOnLastItem();
    } else if (event.key === "Tab") {
      event.preventDefault();
    } else if (event.key === "Escape") {
      closeMenu();
    } // Set focus based on first character


    if (/^[a-z0-9_-]$/i.test(event.key)) {
      event.stopPropagation();
      event.preventDefault();
      var foundNode = focusableItems.current.find(function (item) {
        return item.textContent.toLowerCase().startsWith(event.key);
      });

      if (foundNode) {
        nextIndex = focusableItems.current.indexOf(foundNode);
        focusAtIndex(nextIndex);
      }
    }

    onKeyDown && onKeyDown(event);
  }; // Close the menu on blur


  var handleBlur = function handleBlur(event) {
    if (closeOnBlur && isOpen && menuRef.current && buttonRef.current && !menuRef.current.contains(event.relatedTarget) && !buttonRef.current.contains(event.relatedTarget)) {
      closeMenu();
    }

    onBlur && onBlur(event);
  };

  var styleProps = useMenuListStyle();
  return core.jsx(Popper$1, _extends({
    usePortal: false,
    isOpen: isOpen,
    anchorEl: buttonRef.current,
    placement: placement,
    modifiers: {
      preventOverflow: {
        enabled: true,
        boundariesElement: "viewport"
      }
    },
    minW: "3xs",
    rounded: "md",
    role: "menu",
    ref: menuRef,
    id: menuId,
    py: 2,
    "aria-labelledby": buttonId,
    onKeyDown: handleKeyDown,
    onBlur: handleBlur,
    tabIndex: -1,
    zIndex: "1",
    _focus: {
      outline: 0
    }
  }, styleProps, props));
}; //////////////////////////////////////////////////////////////////////////////////////////


var MenuItem = React.forwardRef(function (_ref4, ref) {
  var isDisabled = _ref4.isDisabled,
      onClick = _ref4.onClick,
      onMouseLeave = _ref4.onMouseLeave,
      onMouseEnter = _ref4.onMouseEnter,
      onKeyDown = _ref4.onKeyDown,
      _ref4$role = _ref4.role,
      role = _ref4$role === void 0 ? "menuitem" : _ref4$role,
      props = _objectWithoutProperties(_ref4, ["isDisabled", "onClick", "onMouseLeave", "onMouseEnter", "onKeyDown", "role"]);

  var _useMenuContext3 = useMenuContext(),
      focusableItems = _useMenuContext3.focusableItems,
      focusAtIndex = _useMenuContext3.focusAtIndex,
      closeOnSelect = _useMenuContext3.closeOnSelect,
      closeMenu = _useMenuContext3.closeMenu;

  var styleProps = useMenuItemStyle();
  return core.jsx(PseudoBox, _extends({
    as: "button",
    ref: ref,
    display: "flex",
    textDecoration: "none",
    color: "inherit",
    minHeight: "32px",
    alignItems: "center",
    textAlign: "left",
    outline: "none",
    px: 4,
    role: role,
    tabIndex: -1,
    disabled: isDisabled,
    "aria-disabled": isDisabled,
    onClick: wrapEvent(onClick, function (event) {
      if (isDisabled) {
        event.stopPropagation();
        event.preventDefault();
        return;
      }

      if (closeOnSelect) {
        closeMenu();
      }
    }),
    onMouseEnter: wrapEvent(onMouseEnter, function (event) {
      if (isDisabled) {
        event.stopPropagation();
        event.preventDefault();
        return;
      }

      if (focusableItems && focusableItems.current.length > 0) {
        var nextIndex = focusableItems.current.indexOf(event.currentTarget);
        focusAtIndex(nextIndex);
      }
    }),
    onMouseLeave: wrapEvent(onMouseLeave, function () {
      focusAtIndex(-1);
    }),
    onKeyDown: wrapEvent(onKeyDown, function (event) {
      if (isDisabled) return;

      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();

        if (onClick) {
          onClick();
        }

        if (closeOnSelect) {
          closeMenu();
        }
      }
    })
  }, styleProps, props));
});
MenuItem.displayName = "MenuItem"; //////////////////////////////////////////////////////////////////////////////////////////

var MenuDivider = React.forwardRef(function (props, ref) {
  return core.jsx(Divider, _extends({
    ref: ref,
    orientation: "horizontal"
  }, props));
});
MenuDivider.displayName = "MenuDivider"; //////////////////////////////////////////////////////////////////////////////////////////

var MenuGroup = React.forwardRef(function (_ref5, ref) {
  var children = _ref5.children,
      title = _ref5.title,
      rest = _objectWithoutProperties(_ref5, ["children", "title"]);

  return core.jsx(Box, {
    ref: ref,
    role: "group"
  }, title && core.jsx(Text, _extends({
    mx: 4,
    my: 2,
    fontWeight: "semibold",
    fontSize: "sm"
  }, rest), title), children);
});
MenuGroup.displayName = "MenuGroup"; //////////////////////////////////////////////////////////////////////////////////////////

function isNumberKey(event) {
  var charCode = event.which ? event.which : event.keyCode;
  if (event.key === ".") return true;
  if (charCode > 31 && (charCode < 48 || charCode > 57) && (charCode < 96 || charCode > 105) && charCode !== 110) return false;
  return true;
}
function preventNonNumberKey(event) {
  if (!isNumberKey(event)) {
    event.preventDefault();
  }
}
function roundToPrecision(value, precision) {
  return parseFloat(value).toFixed(precision);
}
function calculatePrecision(value) {
  var groups = /[1-9]([0]+$)|\.([0-9]*)/.exec(String(value));

  if (!groups) {
    return 0;
  }

  if (groups[1]) {
    return -groups[1].length;
  }

  if (groups[2]) {
    return groups[2].length;
  }

  return 0;
}

var _require = require('exenv'),
    canUseDOM$2 = _require.canUseDOM;

function useLongPress() {
  var _ref;

  var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
  var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isPressed = _useState2[0],
      setIsPressed = _useState2[1];

  React.useEffect(function () {
    var timerId;

    if (isPressed) {
      timerId = setTimeout(callback, speed);
    } else {
      clearTimeout(timerId);
    }

    return function () {
      clearTimeout(timerId);
    };
  }, [isPressed, callback, speed]);
  var start = React.useCallback(function () {
    callback();
    setIsPressed(true);
  }, [callback]);
  var stop = React.useCallback(function () {
    setIsPressed(false);
  }, []);
  var clickEvent = canUseDOM$2 && !!document.documentElement.ontouchstart ? "onTouchStart" : "onMouseDown";
  return _ref = {}, _defineProperty(_ref, clickEvent, start), _defineProperty(_ref, "onMouseUp", stop), _defineProperty(_ref, "onMouseLeave", stop), _defineProperty(_ref, "onTouchEnd", stop), _ref;
}

function useNumberInput(_ref2) {
  var valueProp = _ref2.value,
      onChange = _ref2.onChange,
      defaultValue = _ref2.defaultValue,
      _ref2$focusInputOnCha = _ref2.focusInputOnChange,
      focusInputOnChange = _ref2$focusInputOnCha === void 0 ? true : _ref2$focusInputOnCha,
      _ref2$clampValueOnBlu = _ref2.clampValueOnBlur,
      clampValueOnBlur = _ref2$clampValueOnBlu === void 0 ? true : _ref2$clampValueOnBlu,
      _ref2$keepWithinRange = _ref2.keepWithinRange,
      keepWithinRange = _ref2$keepWithinRange === void 0 ? true : _ref2$keepWithinRange,
      _ref2$min = _ref2.min,
      min = _ref2$min === void 0 ? -Infinity : _ref2$min,
      _ref2$max = _ref2.max,
      max = _ref2$max === void 0 ? Infinity : _ref2$max,
      _ref2$step = _ref2.step,
      stepProp = _ref2$step === void 0 ? 1 : _ref2$step,
      precisionProp = _ref2.precision,
      getAriaValueText = _ref2.getAriaValueText,
      isReadOnly = _ref2.isReadOnly,
      isInvalid = _ref2.isInvalid,
      isDisabled = _ref2.isDisabled;

  var _useRef = React.useRef(valueProp != null),
      isControlled = _useRef.current;

  var defaultPrecision = Math.max(calculatePrecision(stepProp), 0);
  var precision = precisionProp || defaultPrecision;

  var _useState3 = React.useState(function () {
    if (defaultValue != null) {
      var nextValue = defaultValue;

      if (keepWithinRange) {
        nextValue = Math.max(Math.min(nextValue, max), min);
      }

      nextValue = roundToPrecision(nextValue, precision);
      return nextValue;
    }

    return "";
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      valueState = _useState4[0],
      setValue = _useState4[1];

  var _useState5 = React.useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isFocused = _useState6[0],
      setIsFocused = _useState6[1];

  var value = isControlled ? valueProp : valueState;
  var isInteractive = !(isReadOnly || isDisabled);
  var inputRef = React.useRef();
  var prevNextValue = React.useRef(null);

  var shouldConvertToNumber = function shouldConvertToNumber(value) {
    var hasDot = value.indexOf(".") > -1;
    var hasTrailingZero = value.substr(value.length - 1) === "0";
    var hasTrailingDot = value.substr(value.length - 1) === ".";
    if (hasDot && hasTrailingZero) return false;
    if (hasDot && hasTrailingDot) return false;
    return true;
  };

  var updateValue = function updateValue(nextValue) {
    //eslint-disable-next-line
    if (prevNextValue.current == nextValue) return;
    var shouldConvert = shouldConvertToNumber(nextValue);
    var converted = shouldConvert ? +nextValue : nextValue;
    if (!isControlled) setValue(converted);
    if (onChange) onChange(converted);
    prevNextValue.current = nextValue;
  };

  var handleIncrement = function handleIncrement() {
    var step = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : stepProp;
    if (!isInteractive) return;
    var nextValue = Number(value) + Number(step);

    if (keepWithinRange) {
      nextValue = Math.min(nextValue, max);
    }

    nextValue = roundToPrecision(nextValue, precision);
    updateValue(nextValue);
    focusInput();
  };

  var handleDecrement = function handleDecrement() {
    var step = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : stepProp;
    if (!isInteractive) return;
    var nextValue = Number(value) - Number(step);

    if (keepWithinRange) {
      nextValue = Math.max(nextValue, min);
    }

    nextValue = roundToPrecision(nextValue, precision);
    updateValue(nextValue);
    focusInput();
  };

  var focusInput = function focusInput() {
    if (focusInputOnChange && inputRef.current && canUseDOM$2) {
      requestAnimationFrame(function () {
        inputRef.current.focus();
      });
    }
  };

  var incrementStepperProps = useLongPress(handleIncrement);
  var decrementStepperProps = useLongPress(handleDecrement);

  var handleChange = function handleChange(event) {
    updateValue(event.target.value);
  };

  var handleKeyDown = function handleKeyDown(event) {
    preventNonNumberKey(event);
    if (!isInteractive) return;

    if (event.key === "ArrowUp") {
      event.preventDefault();
      var ratio = getIncrementFactor(event);
      handleIncrement(ratio * stepProp);
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();

      var _ratio = getIncrementFactor(event);

      handleDecrement(_ratio * stepProp);
    }

    if (event.key === "Home") {
      event.preventDefault();

      if (min != null) {
        updateValue(max);
      }
    }

    if (event.key === "End") {
      event.preventDefault();

      if (max != null) {
        updateValue(min);
      }
    }
  };

  var getIncrementFactor = function getIncrementFactor(event) {
    var ratio = 1;

    if (event.metaKey || event.ctrlKey) {
      ratio = 0.1;
    }

    if (event.shiftKey) {
      ratio = 10;
    }

    return ratio;
  };

  var validateAndClamp = function validateAndClamp() {
    var maxExists = max != null;
    var minExists = min != null;

    if (maxExists && value > max) {
      updateValue(max);
    }

    if (minExists && value < min) {
      updateValue(min);
    }
  };

  var isOutOfRange = value > max || value < min;
  var ariaValueText = getAriaValueText ? getAriaValueText(value) : null;
  return {
    value: value,
    isFocused: isFocused,
    isDisabled: isDisabled,
    isReadOnly: isReadOnly,
    incrementStepper: incrementStepperProps,
    decrementStepper: decrementStepperProps,
    incrementButton: _objectSpread2({
      onClick: function onClick() {
        return handleIncrement();
      },
      "aria-label": "add"
    }, keepWithinRange && {
      disabled: value === max,
      "aria-disabled": value === max
    }),
    decrementButton: _objectSpread2({
      onClick: function onClick() {
        return handleDecrement();
      },
      "aria-label": "subtract"
    }, keepWithinRange && {
      disabled: value === min,
      "aria-disabled": value === min
    }),
    input: _objectSpread2({
      onChange: handleChange,
      onKeyDown: handleKeyDown,
      ref: inputRef,
      value: value,
      role: "spinbutton",
      type: "text",
      "aria-valuemin": min,
      "aria-valuemax": max,
      "aria-disabled": isDisabled,
      "aria-valuenow": value,
      "aria-invalid": isInvalid || isOutOfRange
    }, getAriaValueText && {
      "aria-valuetext": ariaValueText
    }, {
      readOnly: isReadOnly,
      disabled: isDisabled,
      autoComplete: "off",
      onFocus: function onFocus() {
        setIsFocused(true);
      },
      onBlur: function onBlur() {
        setIsFocused(false);

        if (clampValueOnBlur) {
          validateAndClamp();
        }
      }
    }),
    hiddenLabel: {
      "aria-live": "polite",
      children: getAriaValueText ? ariaValueText : value,
      style: {
        position: "absolute",
        clip: "rect(0px, 0px, 0px, 0px)",
        height: 1,
        width: 1,
        margin: -1,
        whiteSpace: "nowrap",
        border: 0,
        overflow: "hidden",
        padding: 0
      }
    }
  };
}

var themedProps = {
  light: {
    borderColor: "inherit",
    _active: {
      bg: "gray.200"
    }
  },
  dark: {
    color: "whiteAlpha.800",
    borderColor: "whiteAlpha.300",
    _active: {
      bg: "whiteAlpha.300"
    }
  }
};

var styleProps = function styleProps(_ref) {
  var colorMode = _ref.colorMode,
      size = _ref.size;
  return _objectSpread2({
    borderLeft: "1px",
    _first: {
      roundedTopRight: size === "sm" ? 1 : 3
    },
    _last: {
      roundedBottomRight: size === "sm" ? 1 : 3,
      mt: "-1px",
      borderTopWidth: 1
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    }
  }, themedProps[colorMode]);
};

var NumberInputContext = React.createContext({});

var useNumberInputContext = function useNumberInputContext() {
  var context = React.useContext(NumberInputContext);

  if (context == null) {
    throw new Error("This component must be used within the `NumberInput` ");
  }

  return context;
};

var NumberInput = React.forwardRef(function (_ref2, ref) {
  var value = _ref2.value,
      onChange = _ref2.onChange,
      defaultValue = _ref2.defaultValue,
      focusInputOnChange = _ref2.focusInputOnChange,
      clampValueOnBlur = _ref2.clampValueOnBlur,
      keepWithinRange = _ref2.keepWithinRange,
      min = _ref2.min,
      max = _ref2.max,
      step = _ref2.step,
      precision = _ref2.precision,
      getAriaValueText = _ref2.getAriaValueText,
      isReadOnly = _ref2.isReadOnly,
      isInvalid = _ref2.isInvalid,
      isDisabled = _ref2.isDisabled,
      isFullWidth = _ref2.isFullWidth,
      _ref2$size = _ref2.size,
      size = _ref2$size === void 0 ? "md" : _ref2$size,
      children = _ref2.children,
      rest = _objectWithoutProperties(_ref2, ["value", "onChange", "defaultValue", "focusInputOnChange", "clampValueOnBlur", "keepWithinRange", "min", "max", "step", "precision", "getAriaValueText", "isReadOnly", "isInvalid", "isDisabled", "isFullWidth", "size", "children"]);

  var context = useNumberInput({
    value: value,
    onChange: onChange,
    defaultValue: defaultValue,
    focusInputOnChange: focusInputOnChange,
    clampValueOnBlur: clampValueOnBlur,
    keepWithinRange: keepWithinRange,
    min: min,
    max: max,
    step: step,
    precision: precision,
    getAriaValueText: getAriaValueText,
    isReadOnly: isReadOnly,
    isInvalid: isInvalid,
    isDisabled: isDisabled
  });

  var _children = children || /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(NumberInputField, null), /*#__PURE__*/React__default.createElement(NumberInputStepper, null, /*#__PURE__*/React__default.createElement(NumberIncrementStepper, null), /*#__PURE__*/React__default.createElement(NumberDecrementStepper, null)));

  return /*#__PURE__*/React__default.createElement(NumberInputContext.Provider, {
    value: _objectSpread2({}, context, {
      size: size
    })
  }, /*#__PURE__*/React__default.createElement(Flex, _extends({
    ref: ref,
    align: "stretch",
    w: isFullWidth ? "full" : null,
    pos: "relative"
  }, rest), _children));
});
NumberInput.displayName = "NumberInput";
var NumberInputField = React.forwardRef(function (_ref3, ref) {
  var onBlur = _ref3.onBlur,
      onFocus = _ref3.onFocus,
      onKeyDown = _ref3.onKeyDown,
      onChange = _ref3.onChange,
      props = _objectWithoutProperties(_ref3, ["onBlur", "onFocus", "onKeyDown", "onChange"]);

  var _useNumberInputContex = useNumberInputContext(),
      size = _useNumberInputContex.size,
      _useNumberInputContex2 = _useNumberInputContex.input,
      _ref = _useNumberInputContex2.ref,
      _onBlur = _useNumberInputContex2.onBlur,
      _onFocus = _useNumberInputContex2.onFocus,
      _onChange = _useNumberInputContex2.onChange,
      _onKeyDown = _useNumberInputContex2.onKeyDown,
      isDisabled = _useNumberInputContex2.disabled,
      isReadOnly = _useNumberInputContex2.readOnly,
      otherInputProps = _objectWithoutProperties(_useNumberInputContex2, ["ref", "onBlur", "onFocus", "onChange", "onKeyDown", "disabled", "readOnly"]);

  var inputRef = useForkRef(_ref, ref);
  var handleBlur = wrapEvent(onBlur, _onBlur);
  var handleFocus = wrapEvent(onFocus, _onFocus);
  var handleKeyDown = wrapEvent(onKeyDown, _onKeyDown);
  var handleChange = wrapEvent(onChange, _onChange);
  return /*#__PURE__*/React__default.createElement(Input, _extends({
    ref: inputRef,
    isReadOnly: isReadOnly,
    isDisabled: isDisabled,
    onBlur: handleBlur,
    onFocus: handleFocus,
    onKeyDown: handleKeyDown,
    onChange: handleChange,
    size: size
  }, otherInputProps, props));
});
NumberInputField.displayName = "NumberInputField";
var NumberInputStepper = React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React__default.createElement(Flex, _extends({
    ref: ref,
    direction: "column",
    "aria-hidden": true,
    width: "24px",
    margin: "1px",
    position: "absolute",
    right: "0px",
    zIndex: "1",
    height: "calc(100% - 2px)"
  }, props));
});
var StepperButton = React.forwardRef(function (props, ref) {
  var _useColorMode = useColorMode(),
      colorMode = _useColorMode.colorMode;

  var _useNumberInputContex3 = useNumberInputContext(),
      isDisabled = _useNumberInputContex3.isDisabled,
      size = _useNumberInputContex3.size;

  return /*#__PURE__*/React__default.createElement(PseudoBox, _extends({
    ref: ref,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: "1",
    transition: "all 0.3s",
    role: "button",
    tabindex: "-1",
    userSelect: "none",
    "aria-disabled": isDisabled,
    pointerEvents: isDisabled ? "none" : undefined,
    cursor: "pointer",
    lineHeight: "normal"
  }, styleProps({
    colorMode: colorMode,
    size: size
  }), props));
});
NumberInputStepper.displayName = "NumberInputStepper";
var NumberIncrementStepper = React.forwardRef(function (props, ref) {
  var _useNumberInputContex4 = useNumberInputContext(),
      incrementStepper = _useNumberInputContex4.incrementStepper,
      size = _useNumberInputContex4.size;

  var iconSize = size === "sm" ? "11px" : "15px";
  var children = props.children || /*#__PURE__*/React__default.createElement(Icon, {
    name: "triangle-up",
    size: "0.6em"
  });
  return /*#__PURE__*/React__default.createElement(StepperButton, _extends({
    fontSize: iconSize,
    ref: ref
  }, props, incrementStepper), children);
});
NumberIncrementStepper.displayName = "NumberIncrementStepper";
var NumberDecrementStepper = React.forwardRef(function (props, ref) {
  var _useNumberInputContex5 = useNumberInputContext(),
      decrementStepper = _useNumberInputContex5.decrementStepper,
      size = _useNumberInputContex5.size;

  var iconSize = size === "sm" ? "11px" : "15px";
  var children = props.children || /*#__PURE__*/React__default.createElement(Icon, {
    name: "triangle-down",
    size: "0.6em"
  });
  return /*#__PURE__*/React__default.createElement(StepperButton, _extends({
    fontSize: iconSize,
    ref: ref
  }, props, decrementStepper), children);
});
NumberDecrementStepper.displayName = "NumberDecrementStepper";

/**
 * Hook based idea:
 * const {referenceProps, popoverProps, arrowProps, state, actions} = usePopover(props).
 *
 * The popover must meet the AA Success Criterion
 * https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html
 * https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR39
 */

var PopoverContext = React.createContext();

var usePopoverContext = function usePopoverContext() {
  var context = React.useContext(PopoverContext);

  if (context == null) {
    throw Error("usePopoverContext must be used within <Popover/>");
  }

  return context;
}; /////////////////////////////////////////////////////////////////////


var PopoverTrigger = function PopoverTrigger(_ref) {
  var children = _ref.children;

  var _usePopoverContext = usePopoverContext(),
      referenceRef = _usePopoverContext.referenceRef,
      popoverId = _usePopoverContext.popoverId,
      onToggle = _usePopoverContext.onToggle,
      trigger = _usePopoverContext.trigger,
      onOpen = _usePopoverContext.onOpen,
      isOpen = _usePopoverContext.isOpen,
      onClose = _usePopoverContext.onClose,
      isHoveringRef = _usePopoverContext.isHoveringRef;

  var child = React.Children.only(children);
  var eventHandlers = {};

  if (trigger === "click") {
    eventHandlers = {
      onClick: wrapEvent(child.props.onClick, onToggle)
    };
  }

  var openTimeout = React.useRef(null);

  if (trigger === "hover") {
    eventHandlers = {
      onFocus: wrapEvent(child.props.onFocus, onOpen),
      onKeyDown: wrapEvent(child.props.onKeyDown, function (event) {
        if (event.key === "Escape") {
          setTimeout(onClose, 300);
        }
      }),
      onBlur: wrapEvent(child.props.onBlur, onClose),
      onMouseEnter: wrapEvent(child.props.onMouseEnter, function () {
        isHoveringRef.current = true;
        openTimeout.current = setTimeout(onOpen, 300);
      }),
      onMouseLeave: wrapEvent(child.props.onMouseLeave, function () {
        isHoveringRef.current = false;

        if (openTimeout.current) {
          clearTimeout(openTimeout.current);
          openTimeout.current = null;
        }

        setTimeout(function () {
          if (isHoveringRef.current === false) {
            onClose();
          }
        }, 300);
      })
    };
  }

  return React.cloneElement(child, _objectSpread2({
    "aria-haspopup": "dialog",
    "aria-expanded": isOpen,
    "aria-controls": popoverId,
    ref: referenceRef
  }, eventHandlers));
}; /////////////////////////////////////////////////////////////////////


var PopoverContent = function PopoverContent(_ref2) {
  var onKeyDown = _ref2.onKeyDown,
      onBlurProp = _ref2.onBlur,
      onMouseLeave = _ref2.onMouseLeave,
      onMouseEnter = _ref2.onMouseEnter,
      onFocus = _ref2.onFocus,
      _ref2$gutter = _ref2.gutter,
      gutter = _ref2$gutter === void 0 ? 4 : _ref2$gutter,
      ariaLabel = _ref2["aria-label"],
      props = _objectWithoutProperties(_ref2, ["onKeyDown", "onBlur", "onMouseLeave", "onMouseEnter", "onFocus", "gutter", "aria-label"]);

  var _usePopoverContext2 = usePopoverContext(),
      popoverRef = _usePopoverContext2.popoverRef,
      referenceRef = _usePopoverContext2.referenceRef,
      placement = _usePopoverContext2.placement,
      popoverId = _usePopoverContext2.popoverId,
      isOpen = _usePopoverContext2.isOpen,
      onBlur = _usePopoverContext2.onBlur,
      closeOnEsc = _usePopoverContext2.closeOnEsc,
      onClose = _usePopoverContext2.onClose,
      isHoveringRef = _usePopoverContext2.isHoveringRef,
      trigger = _usePopoverContext2.trigger,
      headerId = _usePopoverContext2.headerId,
      bodyId = _usePopoverContext2.bodyId,
      usePortal = _usePopoverContext2.usePortal;

  var _useColorMode = useColorMode(),
      colorMode = _useColorMode.colorMode;

  var bg = colorMode === "light" ? "white" : "gray.700";
  var eventHandlers = {};
  var roleProps = {};

  if (trigger === "click") {
    eventHandlers = {
      onBlur: wrapEvent(onBlurProp, onBlur)
    };
    roleProps = {
      role: "dialog",
      "aria-modal": "false"
    };
  }

  if (trigger === "hover") {
    eventHandlers = {
      onMouseEnter: wrapEvent(onMouseEnter, function () {
        isHoveringRef.current = true;
      }),
      onMouseLeave: wrapEvent(onMouseLeave, function () {
        isHoveringRef.current = false;
        setTimeout(onClose, 300);
      })
    };
    roleProps = {
      role: "tooltip"
    };
  }

  eventHandlers = _objectSpread2({}, eventHandlers, {
    onKeyDown: wrapEvent(onKeyDown, function (event) {
      if (event.key === "Escape" && closeOnEsc) {
        onClose && onClose();
      }
    })
  });
  return core.jsx(Popper$1, _extends({
    as: "section",
    usePortal: usePortal,
    isOpen: isOpen,
    placement: placement,
    "aria-label": ariaLabel,
    anchorEl: referenceRef.current,
    ref: popoverRef,
    bg: bg,
    id: popoverId,
    "aria-hidden": !isOpen,
    tabIndex: "-1",
    borderWidth: "1px",
    width: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    rounded: "md",
    shadow: "sm",
    maxWidth: "xs",
    modifiers: {
      offset: {
        enabled: true,
        offset: "0, ".concat(gutter)
      }
    },
    _focus: {
      outline: 0,
      shadow: "outline"
    },
    "aria-labelledby": headerId,
    "aria-describedby": bodyId
  }, roleProps, eventHandlers, props));
}; /////////////////////////////////////////////////////////////////////


var Popover = function Popover(_ref3) {
  var id = _ref3.id,
      isOpenProp = _ref3.isOpen,
      initialFocusRef = _ref3.initialFocusRef,
      defaultIsOpen = _ref3.defaultIsOpen,
      _ref3$usePortal = _ref3.usePortal,
      usePortal = _ref3$usePortal === void 0 ? false : _ref3$usePortal,
      _ref3$returnFocusOnCl = _ref3.returnFocusOnClose,
      returnFocusOnClose = _ref3$returnFocusOnCl === void 0 ? true : _ref3$returnFocusOnCl,
      _ref3$trigger = _ref3.trigger,
      trigger = _ref3$trigger === void 0 ? "click" : _ref3$trigger,
      placement = _ref3.placement,
      children = _ref3.children,
      _ref3$closeOnBlur = _ref3.closeOnBlur,
      closeOnBlur = _ref3$closeOnBlur === void 0 ? true : _ref3$closeOnBlur,
      _ref3$closeOnEsc = _ref3.closeOnEsc,
      closeOnEsc = _ref3$closeOnEsc === void 0 ? true : _ref3$closeOnEsc,
      onOpenProp = _ref3.onOpen,
      onCloseProp = _ref3.onClose;

  var _useState = React.useState(defaultIsOpen || false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var _useRef = React.useRef(isOpenProp != null),
      isControlled = _useRef.current;

  var isHoveringRef = React.useRef();
  var referenceRef = React.useRef();
  var popoverRef = React.useRef();

  var _isOpen = isControlled ? isOpenProp : isOpen;

  var onToggle = function onToggle() {
    if (!isControlled) {
      setIsOpen(!_isOpen);
    }

    if (!_isOpen === true) {
      onOpenProp && onOpenProp();
    } else {
      onCloseProp && onCloseProp();
    }
  };

  var onOpen = function onOpen() {
    if (!isControlled) {
      setIsOpen(true);
    }

    if (onOpenProp) {
      onOpenProp();
    }
  };

  var onClose = function onClose() {
    if (!isControlled) {
      setIsOpen(false);
    }

    if (onCloseProp) {
      onCloseProp();
    }
  };

  var handleBlur = function handleBlur(event) {
    if (_isOpen && closeOnBlur && popoverRef.current && referenceRef.current && !popoverRef.current.contains(event.relatedTarget) && !referenceRef.current.contains(event.relatedTarget)) {
      onClose();
    }
  }; // A unique fallback id in case the id prop wasn't passed


  var fallbackId = "popover-".concat(useId());
  var popoverId = id || fallbackId;
  var headerId = "".concat(popoverId, "-header");
  var bodyId = "".concat(popoverId, "-body");
  var prevIsOpen = usePrevious(_isOpen);
  React.useEffect(function () {
    if (_isOpen && trigger === "click") {
      requestAnimationFrame(function () {
        if (initialFocusRef && initialFocusRef.current) {
          initialFocusRef.current.focus();
        } else {
          if (popoverRef.current) {
            popoverRef.current.focus();
          }
        }
      });
    }

    if (!_isOpen && prevIsOpen && trigger === "click" && returnFocusOnClose) {
      if (referenceRef.current) {
        referenceRef.current.focus();
      }
    }
  }, [_isOpen, popoverRef, initialFocusRef, trigger, referenceRef, prevIsOpen, returnFocusOnClose]);
  var context = {
    popoverRef: popoverRef,
    placement: placement,
    referenceRef: referenceRef,
    headerId: headerId,
    bodyId: bodyId,
    popoverId: popoverId,
    onOpen: onOpen,
    onClose: onClose,
    onToggle: onToggle,
    trigger: trigger,
    isOpen: _isOpen,
    onBlur: handleBlur,
    closeOnEsc: closeOnEsc,
    initialFocusRef: initialFocusRef,
    isHoveringRef: isHoveringRef,
    usePortal: usePortal
  };
  return core.jsx(PopoverContext.Provider, {
    value: context
  }, typeof children === "function" ? children({
    isOpen: _isOpen,
    onClose: onClose
  }) : children);
}; /////////////////////////////////////////////////////////////////////


var PopoverHeader = function PopoverHeader(props) {
  var _usePopoverContext3 = usePopoverContext(),
      headerId = _usePopoverContext3.headerId;

  return core.jsx(Box, _extends({
    as: "header",
    id: headerId,
    px: 3,
    py: 2,
    borderBottomWidth: "1px"
  }, props));
}; /////////////////////////////////////////////////////////////////////


var PopoverFooter = function PopoverFooter(props) {
  return core.jsx(Box, _extends({
    as: "footer",
    px: 3,
    py: 2,
    borderTopWidth: "1px"
  }, props));
}; /////////////////////////////////////////////////////////////////////


var PopoverBody = function PopoverBody(props) {
  var _usePopoverContext4 = usePopoverContext(),
      bodyId = _usePopoverContext4.bodyId;

  return core.jsx(Box, _extends({
    id: bodyId,
    flex: "1",
    px: 3,
    py: 2
  }, props));
}; /////////////////////////////////////////////////////////////////////


var PopoverArrow = function PopoverArrow(props) {
  return core.jsx(PopperArrow, props);
}; /////////////////////////////////////////////////////////////////////


var PopoverCloseButton = function PopoverCloseButton(_ref4) {
  var onClick = _ref4.onClick,
      props = _objectWithoutProperties(_ref4, ["onClick"]);

  var _usePopoverContext5 = usePopoverContext(),
      onClose = _usePopoverContext5.onClose;

  return core.jsx(CloseButton, _extends({
    size: "sm",
    onClick: wrapEvent(onClick, onClose),
    "aria-label": "Close",
    pos: "absolute",
    rounded: "md",
    top: 1,
    right: 2,
    p: 2
  }, props));
}; /////////////////////////////////////////////////////////////////////

var centeredProps = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)"
};

var thumbStyle = function thumbStyle(_ref) {
  var thumbSize = _ref.thumbSize,
      trackPercent = _ref.trackPercent,
      theme = _ref.theme;
  return _objectSpread2({}, centeredProps, {
    zIndex: 1,
    size: thumbSize,
    rounded: "full",
    bg: "#fff",
    boxShadow: "sm",
    left: "calc(".concat(trackPercent, "% - ").concat(thumbSize, " / 2)"),
    border: "1px",
    borderColor: "transparent",
    transition: "transform 0.2s",
    _focus: {
      boxShadow: "outline"
    },
    _disabled: {
      backgroundColor: "gray.300"
    },
    _active: {
      transform: "translateY(-50%) scale(1.15)"
    }
  });
};

var filledTrackStyle = function filledTrackStyle(_ref2) {
  var trackHeight = _ref2.trackHeight,
      trackPercent = _ref2.trackPercent,
      color = _ref2.color,
      colorMode = _ref2.colorMode;
  return _objectSpread2({}, centeredProps, {
    height: trackHeight,
    bg: colorMode === "light" ? "".concat(color, ".500") : "".concat(color, ".200"),
    width: "".concat(trackPercent, "%"),
    rounded: "sm"
  });
};

var themedTrackStyle = {
  light: {
    bg: "gray.200",
    _disabled: {
      bg: "gray.300"
    }
  },
  dark: {
    bg: "whiteAlpha.200",
    _disabled: {
      bg: "whiteAlpha.300"
    }
  }
};

var trackStyle = function trackStyle(_ref3) {
  var trackHeight = _ref3.trackHeight,
      theme = _ref3.theme,
      colorMode = _ref3.colorMode;
  return _objectSpread2({
    height: trackHeight,
    borderRadius: "sm",
    width: "100%"
  }, centeredProps, {}, themedTrackStyle[colorMode]);
};

var rootStyle = {
  width: "full",
  display: "inline-block",
  position: "relative",
  cursor: "pointer",
  _disabled: {
    opacity: 0.6,
    cursor: "default",
    pointerEvents: "none"
  }
};
var sizes$5 = {
  lg: {
    thumb: "16px",
    trackHeight: "4px"
  },
  md: {
    thumb: "14px",
    trackHeight: "4px"
  },
  sm: {
    thumb: "10px",
    trackHeight: "2px"
  }
};

var useSliderStyle = function useSliderStyle(props) {
  var theme = useTheme();

  var _useColorMode = useColorMode(),
      colorMode = _useColorMode.colorMode;

  var trackPercent = props.trackPercent,
      size = props.size,
      color = props.color;
  var _sizes$size = sizes$5[size],
      trackHeight = _sizes$size.trackHeight,
      thumbSize = _sizes$size.thumb;
  var _props = {
    trackHeight: trackHeight,
    thumbSize: thumbSize,
    theme: theme,
    trackPercent: trackPercent,
    color: color,
    colorMode: colorMode
  };
  return {
    rootStyle: rootStyle,
    trackStyle: trackStyle(_props),
    filledTrackStyle: filledTrackStyle(_props),
    thumbStyle: thumbStyle(_props)
  };
};

function valueToPercent(value, min, max) {
  return (value - min) * 100 / (max - min);
}
function percentToValue(percent, min, max) {
  return (max - min) * percent + min;
}

function makeValuePrecise(value, step) {
  var stepDecimalPart = step.toString().split(".")[1];
  var stepPrecision = stepDecimalPart ? stepDecimalPart.length : 0;
  return Number(value.toFixed(stepPrecision));
}

function roundValueToStep(value, step) {
  return makeValuePrecise(Math.round(value / step) * step, step);
}
function clampValue(val, min, max) {
  if (val > max) {
    return max;
  }

  if (val < min) {
    return min;
  }

  return val;
} ////////////////////////////////////////////////////////////////

var SliderThumb = React.forwardRef(function (props, ref) {
  var _useSliderContext = useSliderContext(),
      thumbRef = _useSliderContext.thumbRef,
      isDisabled = _useSliderContext.isDisabled,
      onFocus = _useSliderContext.onFocus,
      onKeyDown = _useSliderContext.onThumbKeyDown,
      min = _useSliderContext.min,
      max = _useSliderContext.max,
      valueText = _useSliderContext.valueText,
      orientation = _useSliderContext.orientation,
      trackPercent = _useSliderContext.trackPercent,
      size = _useSliderContext.size,
      color = _useSliderContext.color,
      value = _useSliderContext.value,
      ariaLabelledBy = _useSliderContext.ariaLabelledBy;

  var _useSliderStyle = useSliderStyle({
    trackPercent: trackPercent,
    orientation: orientation,
    size: size,
    color: color
  }),
      thumbStyle = _useSliderStyle.thumbStyle;

  var sliderThumbRef = useForkRef(thumbRef, ref);
  return core.jsx(PseudoBox, _extends({
    "data-slider-thumb": "",
    d: "flex",
    alignItems: "center",
    outline: "none",
    justifyContent: "center",
    onFocus: onFocus,
    ref: sliderThumbRef,
    role: "slider",
    tabIndex: isDisabled ? undefined : 0,
    "aria-disabled": isDisabled,
    "aria-valuemin": min,
    "aria-valuetext": valueText,
    "aria-orientation": orientation,
    "aria-valuenow": value,
    "aria-valuemax": max,
    "aria-labelledby": ariaLabelledBy,
    onKeyDown: onKeyDown
  }, thumbStyle, props));
});
SliderThumb.displayName = "SliderThumb"; ////////////////////////////////////////////////////////////////

var SliderTrack = function SliderTrack(props) {
  var _useSliderContext2 = useSliderContext(),
      trackRef = _useSliderContext2.trackRef,
      isDisabled = _useSliderContext2.isDisabled,
      context = _objectWithoutProperties(_useSliderContext2, ["trackRef", "isDisabled"]);

  var _useSliderStyle2 = useSliderStyle(context),
      trackStyle = _useSliderStyle2.trackStyle;

  return core.jsx(Box, _extends({
    "data-slider-track": "",
    "aria-disabled": isDisabled,
    ref: trackRef
  }, trackStyle, props));
}; ////////////////////////////////////////////////////////////////

var SliderFilledTrack = function SliderFilledTrack(props) {
  var _useSliderContext3 = useSliderContext(),
      isDisabled = _useSliderContext3.isDisabled,
      context = _objectWithoutProperties(_useSliderContext3, ["isDisabled"]);

  var _useSliderStyle3 = useSliderStyle(context),
      filledTrackStyle = _useSliderStyle3.filledTrackStyle;

  return core.jsx(PseudoBox, _extends({
    "aria-disabled": isDisabled,
    "data-slider-filled-track": ""
  }, filledTrackStyle, props));
}; ////////////////////////////////////////////////////////////////

var SliderContext = React.createContext();

var useSliderContext = function useSliderContext() {
  return React.useContext(SliderContext);
};

var Slider = React.forwardRef(function (_ref, ref) {
  var controlledValue = _ref.value,
      defaultValue = _ref.defaultValue,
      onChange = _ref.onChange,
      onKeyDown = _ref.onKeyDown,
      onFocus = _ref.onFocus,
      _onBlur = _ref.onBlur,
      onMouseDown = _ref.onMouseDown,
      isDisabled = _ref.isDisabled,
      _ref$max = _ref.max,
      max = _ref$max === void 0 ? 100 : _ref$max,
      _ref$min = _ref.min,
      min = _ref$min === void 0 ? 0 : _ref$min,
      _ref$step = _ref.step,
      step = _ref$step === void 0 ? 1 : _ref$step,
      ariaLabelledBy = _ref["aria-labelledby"],
      ariaLabel = _ref["aria-label"],
      ariaValueText = _ref["aria-valuetext"],
      _ref$orientation = _ref.orientation,
      orientation = _ref$orientation === void 0 ? "horizontal" : _ref$orientation,
      getAriaValueText = _ref.getAriaValueText,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? "md" : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? "blue" : _ref$color,
      name = _ref.name,
      id = _ref.id,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["value", "defaultValue", "onChange", "onKeyDown", "onFocus", "onBlur", "onMouseDown", "isDisabled", "max", "min", "step", "aria-labelledby", "aria-label", "aria-valuetext", "orientation", "getAriaValueText", "size", "color", "name", "id", "children"]);

  var _useRef = React.useRef(controlledValue != null),
      isControlled = _useRef.current;

  var _useState = React.useState(defaultValue || 0),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _value = isControlled ? controlledValue : value;

  var actualValue = clampValue(_value, min, max);
  var trackPercent = valueToPercent(actualValue, min, max);

  var _useSliderStyle4 = useSliderStyle({
    trackPercent: trackPercent,
    orientation: orientation,
    size: size,
    color: color
  }),
      rootStyle = _useSliderStyle4.rootStyle;

  var trackRef = React.useRef();
  var thumbRef = React.useRef();

  var getNewValue = function getNewValue(event) {
    if (trackRef.current) {
      var _trackRef$current$get = trackRef.current.getBoundingClientRect(),
          left = _trackRef$current$get.left,
          width = _trackRef$current$get.width;

      var _ref2 = event.touches ? event.touches[0] : event,
          clientX = _ref2.clientX;

      var diffX = clientX - left;
      var percent = diffX / width;
      var newValue = percentToValue(percent, min, max);

      if (step) {
        newValue = roundValueToStep(newValue, step);
      }

      newValue = clampValue(newValue, min, max);
      return newValue;
    }
  };

  var updateValue = React.useCallback(function (newValue) {
    if (!isControlled) {
      setValue(newValue);
    }

    if (onChange) {
      onChange(newValue);
    }
  }, [isControlled, onChange]);

  var handleThumbKeyDown = function handleThumbKeyDown(event) {
    var flag = false;
    var newValue;
    var tenSteps = (max - min) / 10;

    switch (event.key) {
      case "ArrowLeft":
      case "ArrowDown":
        newValue = actualValue - step;
        flag = true;
        break;

      case "ArrowRight":
      case "ArrowUp":
        newValue = actualValue + step;
        flag = true;
        break;

      case "PageDown":
        newValue = actualValue - tenSteps;
        flag = true;
        break;

      case "PageUp":
        newValue = actualValue + tenSteps;
        flag = true;
        break;

      case "Home":
        newValue = min;
        flag = true;
        break;

      case "End":
        newValue = max;
        flag = true;
        break;

      default:
        return;
    }

    if (flag) {
      event.preventDefault();
      event.stopPropagation();
    }

    if (step) {
      newValue = roundValueToStep(newValue, step);
    }

    newValue = clampValue(newValue, min, max);
    updateValue(newValue);
    onKeyDown && onKeyDown(event);
  };

  var handleMouseUp = function handleMouseUp() {
    document.body.removeEventListener("mousemove", handleMouseMove);
    document.body.removeEventListener("touchmove", handleMouseMove);
    document.body.removeEventListener("mouseup", handleMouseUp);
    document.body.removeEventListener("touchend", handleMouseUp);
  }; // TODO: Optimize this mouseMove event


  var handleMouseMove = function handleMouseMove(event) {
    var newValue = getNewValue(event);
    updateValue(newValue);
  };

  var handleMouseDown = function handleMouseDown(event) {
    if (isDisabled) return;
    onMouseDown && onMouseDown(event);
    event.preventDefault();
    var newValue = getNewValue(event);

    if (newValue !== actualValue) {
      updateValue(newValue);
    }

    document.body.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("touchmove", handleMouseMove);
    document.body.addEventListener("mouseup", handleMouseUp);
    document.body.addEventListener("touchend", handleMouseUp);
    thumbRef.current && thumbRef.current.focus();
  };

  var valueText = getAriaValueText ? getAriaValueText(actualValue) : ariaValueText;
  var context = {
    trackRef: trackRef,
    thumbRef: thumbRef,
    onThumbKeyDown: handleThumbKeyDown,
    onFocus: onFocus,
    trackPercent: trackPercent,
    ariaLabelledBy: ariaLabelledBy,
    orientation: orientation,
    isDisabled: isDisabled,
    size: size,
    color: color,
    min: min,
    max: max,
    valueText: valueText,
    value: actualValue
  };
  return core.jsx(SliderContext.Provider, {
    value: context
  }, core.jsx(Box, _extends({
    role: "presentation",
    tabIndex: "-1",
    onMouseDown: handleMouseDown,
    onTouchStart: handleMouseDown,
    onMouseLeave: handleMouseUp,
    onTouchEnd: handleMouseUp,
    onBlur: function onBlur(event) {
      handleMouseUp();
      _onBlur && _onBlur(event);
    },
    py: 3,
    "aria-disabled": isDisabled,
    ref: ref,
    css: {
      touchAction: "none"
    }
  }, rootStyle, rest), children, core.jsx("input", {
    type: "hidden",
    value: actualValue,
    name: name,
    id: id
  })));
});
Slider.displayName = "Slider";

function _templateObject2$1() {
  var data = _taggedTemplateLiteral(["\n  animation: ", " 1s linear infinite;\n"]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$8() {
  var data = _taggedTemplateLiteral(["\n  from { background-position: 1rem 0}\n  to { background-position: 0 0 }\n"]);

  _templateObject$8 = function _templateObject() {
    return data;
  };

  return data;
}
var stripe = core.keyframes(_templateObject$8());
var stripeAnimation = core.css(_templateObject2$1(), stripe);
var ProgressLabel = function ProgressLabel(props) {
  return core.jsx(Box, _extends({
    textAlign: "center",
    width: "100%"
  }, props));
};

var ProgressIndicator = function ProgressIndicator(_ref) {
  var isIndeterminate = _ref.isIndeterminate,
      min = _ref.min,
      max = _ref.max,
      value = _ref.value,
      rest = _objectWithoutProperties(_ref, ["isIndeterminate", "min", "max", "value"]);

  var percent = valueToPercent(value, min, max);
  return core.jsx(Box, _extends({
    height: "100%",
    "aria-valuemax": max,
    "aria-valuemin": min,
    "aria-valuenow": isIndeterminate ? null : value,
    role: "progressbar",
    transition: "all 0.3s",
    width: "".concat(percent, "%")
  }, rest));
};

var progressbarSizes = {
  lg: "1rem",
  md: "0.75rem",
  sm: "0.5rem"
};

var ProgressTrack = function ProgressTrack(_ref2) {
  var size = _ref2.size,
      rest = _objectWithoutProperties(_ref2, ["size"]);

  return core.jsx(Box, _extends({
    pos: "relative",
    height: progressbarSizes[size],
    overflow: "hidden"
  }, rest));
};

var Progress = function Progress(_ref3) {
  var _ref3$color = _ref3.color,
      color = _ref3$color === void 0 ? "blue" : _ref3$color,
      _ref3$value = _ref3.value,
      value = _ref3$value === void 0 ? 63 : _ref3$value,
      _ref3$min = _ref3.min,
      min = _ref3$min === void 0 ? 0 : _ref3$min,
      _ref3$max = _ref3.max,
      max = _ref3$max === void 0 ? 100 : _ref3$max,
      _ref3$size = _ref3.size,
      size = _ref3$size === void 0 ? "md" : _ref3$size,
      hasStripe = _ref3.hasStripe,
      isAnimated = _ref3.isAnimated,
      borderRadius = _ref3.borderRadius,
      rounded = _ref3.rounded,
      children = _ref3.children,
      isIndeterminate = _ref3.isIndeterminate,
      rest = _objectWithoutProperties(_ref3, ["color", "value", "min", "max", "size", "hasStripe", "isAnimated", "borderRadius", "rounded", "children", "isIndeterminate"]);

  var _borderRadius = rounded || borderRadius;

  var _useColorMode = useColorMode(),
      colorMode = _useColorMode.colorMode;

  var trackColor = {
    light: "gray.100",
    dark: "whiteAlpha.300"
  };
  var indicatorColor = {
    light: "".concat(color, ".500"),
    dark: "".concat(color, ".200")
  };
  var stripeStyle = {
    light: generateStripe({}),
    dark: generateStripe({
      color: "rgba(0,0,0,0.1)"
    })
  };
  return core.jsx(ProgressTrack, _extends({
    size: size,
    bg: trackColor[colorMode],
    borderRadius: _borderRadius
  }, rest), core.jsx(ProgressIndicator, _extends({
    min: min,
    max: max,
    value: value,
    bg: indicatorColor[colorMode],
    borderRadius: _borderRadius
  }, isIndeterminate && {
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    willChange: "left, right"
  }, {
    css: [hasStripe && stripeStyle[colorMode], hasStripe && isAnimated && stripeAnimation]
  })));
};

var Radio = React.forwardRef(function (_ref, ref) {
  var id = _ref.id,
      name = _ref.name,
      value = _ref.value,
      ariaLabel = _ref["aria-label"],
      ariaLabelledBy = _ref["aria-labelledby"],
      _ref$variantColor = _ref.variantColor,
      variantColor = _ref$variantColor === void 0 ? "blue" : _ref$variantColor,
      defaultIsChecked = _ref.defaultIsChecked,
      isChecked = _ref.isChecked,
      isFullWidth = _ref.isFullWidth,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? "md" : _ref$size,
      isDisabled = _ref.isDisabled,
      isInvalid = _ref.isInvalid,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["id", "name", "value", "aria-label", "aria-labelledby", "variantColor", "defaultIsChecked", "isChecked", "isFullWidth", "size", "isDisabled", "isInvalid", "onChange", "onBlur", "onFocus", "children"]);

  // Wrong usage of `variantColor` prop is quite common
  // Let's add a warning hook that validates the passed variantColor
  useVariantColorWarning("Radio", variantColor);

  var _useColorMode = useColorMode(),
      colorMode = _useColorMode.colorMode;

  var styleProps = useCheckboxStyle({
    color: variantColor,
    size: size,
    colorMode: colorMode,
    type: "radio"
  });
  return core.jsx(Box, _extends({
    as: "label",
    display: "inline-flex",
    verticalAlign: "top",
    htmlFor: id,
    alignItems: "center",
    width: isFullWidth ? "full" : undefined,
    cursor: isDisabled ? "not-allowed" : "pointer"
  }, rest), core.jsx(VisuallyHidden, {
    as: "input",
    type: "radio",
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    id: id,
    ref: ref,
    name: name,
    value: value,
    "aria-invalid": isInvalid,
    defaultChecked: defaultIsChecked,
    onChange: onChange,
    onBlur: onBlur,
    onFocus: onFocus,
    checked: isChecked,
    disabled: isDisabled
  }), core.jsx(ControlBox, _extends({}, styleProps, {
    type: "radio",
    rounded: "full"
  }), core.jsx(Box, {
    bg: "currentColor",
    as: "span",
    rounded: "full",
    size: "50%"
  })), children && core.jsx(Box, {
    ml: 2,
    fontSize: size,
    userSelect: "none",
    opacity: isDisabled ? 0.32 : 1
  }, children));
});
Radio.displayName = "Radio";

var RadioGroup = React.forwardRef(function (_ref, ref) {
  var onChange = _ref.onChange,
      name = _ref.name,
      variantColor = _ref.variantColor,
      size = _ref.size,
      defaultValue = _ref.defaultValue,
      isInline = _ref.isInline,
      valueProp = _ref.value,
      _ref$spacing = _ref.spacing,
      spacing = _ref$spacing === void 0 ? 2 : _ref$spacing,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["onChange", "name", "variantColor", "size", "defaultValue", "isInline", "value", "spacing", "children"]);

  var _useRef = React.useRef(valueProp != null),
      isControlled = _useRef.current;

  var _useState = React.useState(defaultValue || null),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _value = isControlled ? valueProp : value;

  var rootRef = React.useRef();

  var _onChange = function _onChange(event) {
    if (!isControlled) {
      setValue(event.target.value);
    }

    if (onChange) {
      onChange(event, event.target.value);
    }
  }; // If no name is passed, we'll generate a random, unique name


  var fallbackName = "radio-".concat(useId());

  var _name = name || fallbackName;

  var validChildren = cleanChildren(children);
  var clones = validChildren.map(function (child, index) {
    var isLastRadio = validChildren.length === index + 1;
    var spacingProps = isInline ? {
      mr: spacing
    } : {
      mb: spacing
    };
    return core.jsx(Box, _extends({
      key: index,
      display: isInline ? "inline-block" : "block"
    }, !isLastRadio && spacingProps), React.cloneElement(child, {
      size: child.props.size || size,
      variantColor: child.props.variantColor || variantColor,
      name: _name,
      onChange: _onChange,
      isChecked: child.props.value === _value
    }));
  }); // Calling focus() on the radiogroup should focus on the selected option or first enabled option

  React.useImperativeHandle(ref, function () {
    return {
      focus: function focus() {
        var input = rootRef.current.querySelector("input:not(:disabled):checked");

        if (!input) {
          input = rootRef.current.querySelector("input:not(:disabled)");
        }

        if (input) {
          input.focus();
        }
      }
    };
  }, []);
  return core.jsx(Box, _extends({
    ref: rootRef,
    role: "radiogroup"
  }, rest), clones);
});
RadioGroup.displayName = "RadioGroup";

var RadioButtonGroup = function RadioButtonGroup(_ref) {
  var name = _ref.name,
      children = _ref.children,
      defaultValue = _ref.defaultValue,
      controlledValue = _ref.value,
      onChange = _ref.onChange,
      _ref$spacing = _ref.spacing,
      spacing = _ref$spacing === void 0 ? "12px" : _ref$spacing,
      isInline = _ref.isInline,
      rest = _objectWithoutProperties(_ref, ["name", "children", "defaultValue", "value", "onChange", "spacing", "isInline"]);

  var isControlled = controlledValue != null;

  var _useState = React.useState(defaultValue || null),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _value = isControlled ? controlledValue : value;

  var allNodes = React.useRef([]);
  var validChildren = cleanChildren(children);
  var focusableValues = validChildren.map(function (child) {
    return child.props.isDisabled === true ? null : child.props.value;
  }).filter(function (val) {
    return val != null;
  });
  var allValues = validChildren.map(function (child) {
    return child.props.value;
  });

  var updateIndex = function updateIndex(index) {
    var childValue = focusableValues[index];

    var _index = allValues.indexOf(childValue);

    allNodes.current[_index].focus();

    !isControlled && setValue(childValue);
    onChange && onChange(childValue);
  };

  var handleKeyDown = function handleKeyDown(event) {
    if (event.key === "Tab") {
      return;
    } // Disable page scrolling while navigating with keys


    event.preventDefault();
    var count = focusableValues.length;
    var enabledCheckedIndex = focusableValues.indexOf(_value);

    if (enabledCheckedIndex === -1) {
      enabledCheckedIndex = 0;
    }

    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        {
          var nextIndex = (enabledCheckedIndex + 1) % count;
          updateIndex(nextIndex);
          break;
        }

      case "ArrowLeft":
      case "ArrowUp":
        {
          var _nextIndex = (enabledCheckedIndex - 1 + count) % count;

          updateIndex(_nextIndex);
          break;
        }
    }
  };

  var fallbackName = "radio-".concat(useId());

  var _name = name || fallbackName;

  var clones = validChildren.map(function (child, index) {
    var isLastChild = validChildren.length === index + 1;
    var isFirstChild = index === 0;
    var spacingProps = isInline ? {
      mr: spacing
    } : {
      mb: spacing
    };
    var isChecked = child.props.value === _value;

    var handleClick = function handleClick() {
      !isControlled && setValue(child.props.value);
      onChange && onChange(child.props.value);
    };

    var getTabIndex = function getTabIndex() {
      // If a RadioGroup has no radio selected the first enabled radio should be focusable
      if (_value == null) {
        return isFirstChild ? 0 : -1;
      } else {
        return isChecked ? 0 : -1;
      }
    };

    return React.cloneElement(child, _objectSpread2({
      key: index,
      ref: function ref(node) {
        return allNodes.current[index] = node;
      },
      name: _name,
      onClick: handleClick,
      tabIndex: getTabIndex(),
      isChecked: isChecked
    }, !isLastChild && spacingProps));
  });
  return core.jsx(Box, _extends({
    role: "radiogroup",
    onKeyDown: handleKeyDown
  }, rest), clones);
};

RadioButtonGroup.displayName = "RadioButtonGroup";

var rootOptions = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginBottom", "marginLeft", "marginRight", "marginY", "marginX", "flex", "flexBasis", "width", "minWidth", "maxWidth", "maxW", "minW", "w", "zIndex", "top", "right", "bottom", "left", "position", "pos"];

var splitProps = function splitProps(props) {
  var rootProps = {};
  var selectProps = {};

  for (var key in props) {
    if (rootOptions.includes(key)) {
      rootProps[key] = props[key];
    } else {
      selectProps[key] = props[key];
    }
  }

  return [rootProps, selectProps];
};

var EnhancedIcon = function EnhancedIcon(_ref) {
  var icon = _ref.icon,
      props = _objectWithoutProperties(_ref, ["icon"]);

  if (typeof icon === "string") {
    return core.jsx(Icon, _extends({
      focusable: "false",
      name: icon,
      color: "currentColor"
    }, props));
  }

  return core.jsx(Box, _extends({
    as: icon,
    "data-custom-icon": true,
    focusable: "false",
    color: "currentColor"
  }, props));
};

var SelectIconWrapper = React.forwardRef(function SelectIconWrapper(props, ref) {
  return core.jsx(Box, _extends({
    ref: ref,
    position: "absolute",
    display: "inline-flex",
    width: "1.5rem",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    right: "0.5rem",
    top: "50%",
    pointerEvents: "none",
    zIndex: 2,
    transform: "translateY(-50%)"
  }, props));
});
var SelectInput = React.forwardRef(function SelectInput(_ref, ref) {
  var placeholder = _ref.placeholder,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["placeholder", "children"]);

  return core.jsx(Input, _extends({
    as: "select",
    appearance: "none",
    ref: ref,
    pr: "2rem",
    pb: "px",
    lineHeight: "normal"
  }, rest), placeholder && core.jsx("option", {
    value: ""
  }, placeholder), children);
});
var Select = React.forwardRef(function (_ref2, ref) {
  var rootProps = _ref2.rootProps,
      icon = _ref2.icon,
      _ref2$iconSize = _ref2.iconSize,
      iconSize = _ref2$iconSize === void 0 ? 5 : _ref2$iconSize,
      props = _objectWithoutProperties(_ref2, ["rootProps", "icon", "iconSize"]);

  var _useColorMode = useColorMode(),
      colorMode = _useColorMode.colorMode;

  var color = colorMode === "dark" ? "whiteAlpha.800" : "inherit";
  var opacity = props.isReadOnly || props.isDisabled ? 0.5 : null;

  var _splitProps = splitProps(props),
      _splitProps2 = _slicedToArray(_splitProps, 2),
      root = _splitProps2[0],
      select = _splitProps2[1];

  return core.jsx(Box, _extends({
    position: "relative",
    width: "100%"
  }, root, rootProps), core.jsx(SelectInput, _extends({
    ref: ref,
    color: color
  }, select)), core.jsx(SelectIconWrapper, {
    opacity: opacity,
    color: select.color || color
  }, core.jsx(EnhancedIcon, {
    focusable: "false",
    "aria-hidden": "true",
    icon: icon || "chevron-down",
    size: iconSize
  })));
});
Select.displayName = "Select";

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  animation: ", " ", "s;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\nfrom { opacity: 0; }\nto   { opacity: 1; }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$2() {
  var data = _taggedTemplateLiteral(["\n  border-color: ", " !important;\n  box-shadow: none !important;\n  opacity: 0.7;\n  // do not !important this for Firefox support\n  background: ", ";\n\n  // Prevent background color from extending to the border and overlappping\n  background-clip: padding-box !important;\n  cursor: default;\n\n  // Transparent text will occupy space but be invisible to the user\n  color: transparent !important;\n  animation: ", "s linear infinite alternate\n    ", ";\n  pointer-events: none;\n  user-select: none;\n\n  // Make pseudo-elements (CSS icons) and children invisible\n  &::before,\n  &::after,\n  * {\n    visibility: hidden !important;\n  }\n"]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$9() {
  var data = _taggedTemplateLiteral(["\nfrom {\n  border-color: ", ";\n  background: ", ";\n}\n\nto {\n  border-color: ", ";\n  background: ", ";\n}\n"]);

  _templateObject$9 = function _templateObject() {
    return data;
  };

  return data;
}

var skeletonGlow = function skeletonGlow(colorStart, colorEnd) {
  return core.keyframes(_templateObject$9(), colorStart, colorStart, colorEnd, colorEnd);
};

var getStyle = function getStyle(_ref) {
  var colorStart = _ref.colorStart,
      colorEnd = _ref.colorEnd,
      speed = _ref.speed;
  return core.css(_templateObject2$2(), colorStart, colorStart, speed, skeletonGlow(colorStart, colorEnd));
};

var fadeIn = core.keyframes(_templateObject3());

var fadeInCss = function fadeInCss(duration) {
  return core.css(_templateObject4(), fadeIn, duration);
};

var Skeleton = function Skeleton(props) {
  var _useTheme = useTheme(),
      colors = _useTheme.colors;

  var _useColorMode = useColorMode(),
      colorMode = _useColorMode.colorMode;

  var defaultStart = {
    light: colors.gray[100],
    dark: colors.gray[800]
  };
  var defaultEnd = {
    light: colors.gray[400],
    dark: colors.gray[600]
  };

  var _props$colorStart = props.colorStart,
      colorStart = _props$colorStart === void 0 ? defaultStart[colorMode] : _props$colorStart,
      _props$colorEnd = props.colorEnd,
      colorEnd = _props$colorEnd === void 0 ? defaultEnd[colorMode] : _props$colorEnd,
      _props$isLoaded = props.isLoaded,
      isLoaded = _props$isLoaded === void 0 ? false : _props$isLoaded,
      _props$fadeInDuration = props.fadeInDuration,
      fadeInDuration = _props$fadeInDuration === void 0 ? 0.4 : _props$fadeInDuration,
      _props$speed = props.speed,
      speed = _props$speed === void 0 ? 0.8 : _props$speed,
      rest = _objectWithoutProperties(props, ["colorStart", "colorEnd", "isLoaded", "fadeInDuration", "speed"]);

  var fadeInStyle = React.useMemo(function () {
    return fadeInCss(fadeInDuration);
  }, [fadeInDuration]);
  var skeletonStyle = React.useMemo(function () {
    return getStyle({
      colorStart: colorStart,
      colorEnd: colorEnd,
      speed: speed
    });
  }, [colorStart, colorEnd, speed]);

  if (isLoaded) {
    return core.jsx(Box, _extends({
      css: fadeInStyle
    }, rest));
  }

  return core.jsx(Box, _extends({
    css: skeletonStyle,
    borderRadius: "2px"
  }, rest));
};

var StatLabel = React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React__default.createElement(Text, _extends({
    ref: ref,
    fontWeight: "medium",
    fontSize: "sm"
  }, props));
});
StatLabel.displayName = "StatLabel";
var StatHelpText = React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React__default.createElement(Text, _extends({
    ref: ref,
    fontSize: "sm",
    opacity: "0.8",
    mb: 2
  }, props));
});
StatHelpText.displayName = "StatHelpText";

var StatNumber = function StatNumber(props) {
  return /*#__PURE__*/React__default.createElement(Text, _extends({
    fontSize: "2xl",
    verticalAlign: "baseline",
    fontWeight: "semibold"
  }, props));
};

var arrowOptions = {
  increase: {
    name: "triangle-up",
    color: "green.400"
  },
  decrease: {
    name: "triangle-down",
    color: "red.400"
  }
};
var StatArrow = React.forwardRef(function (_ref, ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? "increase" : _ref$type,
      ariaLabel = _ref["aria-label"],
      rest = _objectWithoutProperties(_ref, ["type", "aria-label"]);

  return /*#__PURE__*/React__default.createElement(Icon, _extends({
    ref: ref,
    mr: 1,
    size: "14px",
    verticalAlign: "middle",
    "aria-label": ariaLabel
  }, arrowOptions[type], rest));
});
StatArrow.displayName = "StatArrow";
var Stat = React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React__default.createElement(Box, _extends({
    ref: ref,
    flex: "1",
    pr: 4,
    position: "relative"
  }, props));
});
Stat.displayName = "Stat";
var StatGroup = React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React__default.createElement(Flex, _extends({
    ref: ref,
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "flex-start"
  }, props));
});
StatGroup.displayName = "StatGroup";

var switchSizes = {
  sm: {
    width: "1.375rem",
    height: "0.75rem"
  },
  md: {
    width: "1.875rem",
    height: "1rem"
  },
  lg: {
    width: "2.875rem",
    height: "1.5rem"
  }
};
var Switch = React.forwardRef(function (_ref, ref) {
  var id = _ref.id,
      name = _ref.name,
      value = _ref.value,
      ariaLabel = _ref["aria-label"],
      ariaLabelledBy = _ref["aria-labelledby"],
      color = _ref.color,
      defaultIsChecked = _ref.defaultIsChecked,
      isChecked = _ref.isChecked,
      size = _ref.size,
      isDisabled = _ref.isDisabled,
      isInvalid = _ref.isInvalid,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["id", "name", "value", "aria-label", "aria-labelledby", "color", "defaultIsChecked", "isChecked", "size", "isDisabled", "isInvalid", "onChange", "onBlur", "onFocus", "children"]);

  var _useColorMode = useColorMode(),
      colorMode = _useColorMode.colorMode;

  var width = switchSizes[size] && switchSizes[size]["width"];
  var height = switchSizes[size] && switchSizes[size]["height"];
  var stylesProps = {
    rounded: "full",
    justifyContent: "flex-start",
    width: width,
    height: height,
    bg: colorMode === "dark" ? "whiteAlpha.400" : "gray.300",
    boxSizing: "content-box",
    p: "2px",
    _checked: {
      bg: "".concat(color, ".500")
    },
    _child: {
      transform: "translateX(0)"
    },
    _checkedAndChild: {
      transform: "translateX(calc(".concat(width, " - ").concat(height, "))")
    },
    _focus: {
      boxShadow: "outline"
    },
    _hover: {
      cursor: "pointer"
    },
    _checkedAndHover: {
      cursor: "pointer"
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    }
  };
  return core.jsx(Box, _extends({
    as: "label",
    display: "inline-block",
    verticalAlign: "middle"
  }, rest), core.jsx(VisuallyHidden, {
    as: "input",
    type: "checkbox",
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    id: id,
    ref: ref,
    name: name,
    value: value,
    "aria-invalid": isInvalid,
    defaultChecked: defaultIsChecked,
    onChange: onChange,
    onBlur: onBlur,
    onFocus: onFocus,
    checked: isChecked,
    disabled: isDisabled
  }), core.jsx(ControlBox, stylesProps, core.jsx(Box, {
    bg: "white",
    transition: "transform 250ms",
    rounded: "full",
    size: height
  })));
});
Switch.displayName = "Switch";
Switch.defaultProps = {
  color: "blue",
  size: "md"
};

var baseProps$6 = {
  display: "flex",
  cursor: "pointer",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.2s",
  _focus: {
    zIndex: "1",
    boxShadow: "outline"
  }
};
var disabledProps$1 = {
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  }
};

var lineStyle = function lineStyle(_ref) {
  var color = _ref.color,
      colorMode = _ref.colorMode;
  var _color = {
    light: "".concat(color, ".600"),
    dark: "".concat(color, ".300")
  };
  return {
    tabList: {
      borderBottom: "2px",
      borderColor: "inherit"
    },
    tab: {
      borderBottom: "2px",
      borderColor: "transparent",
      mb: "-2px",
      _selected: {
        color: _color[colorMode],
        borderColor: "currentColor"
      },
      _active: {
        bg: "gray.200"
      },
      _disabled: {
        opacity: 0.4,
        cursor: "not-allowed"
      }
    }
  };
}; // TODO: Create new issue in @styled-system/css to allow custom alias


var enclosedStyle = function enclosedStyle(_ref2) {
  var color = _ref2.color,
      colorMode = _ref2.colorMode,
      theme = _ref2.theme;
  var _selectedColor = {
    light: "".concat(color, ".600"),
    dark: "".concat(color, ".300")
  };
  var _selectedBg = {
    light: "#fff",
    dark: theme.colors.gray[800]
  };
  return {
    tab: {
      roundedTop: "md",
      border: "1px",
      borderColor: "transparent",
      mb: "-1px",
      _selected: {
        color: _selectedColor[colorMode],
        borderColor: "inherit",
        borderBottomColor: _selectedBg[colorMode]
      }
    },
    tabList: {
      mb: "-1px",
      borderBottom: "1px",
      borderColor: "inherit"
    }
  };
};

var enclosedColoredStyle = function enclosedColoredStyle(_ref3) {
  var color = _ref3.color,
      colorMode = _ref3.colorMode;
  var bg = {
    light: "gray.50",
    dark: "whiteAlpha.50"
  };
  var _selectedColor = {
    light: "".concat(color, ".600"),
    dark: "".concat(color, ".300")
  };
  var _selectedBg = {
    light: "#fff",
    dark: "gray.800"
  };
  return {
    tab: {
      border: "1px",
      borderColor: "inherit",
      bg: bg[colorMode],
      mb: "-1px",
      _notLast: {
        mr: "-1px"
      },
      _selected: {
        bg: _selectedBg[colorMode],
        color: _selectedColor[colorMode],
        borderColor: "inherit",
        borderTopColor: "currentColor",
        borderBottomColor: "transparent"
      }
    },
    tabList: {
      mb: "-1px",
      borderBottom: "1px",
      borderColor: "inherit"
    }
  };
};

var softRoundedStyle = function softRoundedStyle(_ref4) {
  var color = _ref4.color;
  return {
    tab: {
      rounded: "full",
      fontWeight: "semibold",
      color: "gray.600",
      _selected: {
        color: "".concat(color, ".700"),
        bg: "".concat(color, ".100")
      }
    },
    tabList: {}
  };
};

var solidRoundedStyle = function solidRoundedStyle(_ref5) {
  var color = _ref5.color,
      colorMode = _ref5.colorMode;
  var _color = {
    light: "gray.600",
    dark: "inherit"
  };
  var _selectedBg = {
    light: "".concat(color, ".600"),
    dark: "".concat(color, ".300")
  };
  var _selectedColor = {
    light: "#fff",
    dark: "gray.800"
  };
  return {
    tab: {
      rounded: "full",
      fontWeight: "semibold",
      color: _color[colorMode],
      _selected: {
        color: _selectedColor[colorMode],
        bg: _selectedBg[colorMode]
      }
    },
    tabList: {}
  };
};

var variantStyle = function variantStyle(props) {
  switch (props.variant) {
    case "line":
      return lineStyle(props);

    case "enclosed":
      return enclosedStyle(props);

    case "enclosed-colored":
      return enclosedColoredStyle(props);

    case "soft-rounded":
      return softRoundedStyle(props);

    case "solid-rounded":
      return solidRoundedStyle(props);

    case "unstyled":
      return {};
  }
}; // TO DO: Add support for vertical orientation

var orientationStyle = function orientationStyle(_ref6) {
  var align = _ref6.align,
      orientation = _ref6.orientation;
  var alignments = {
    end: "flex-end",
    center: "center",
    start: "flex-start"
  };
  var tabListStyle;
  var tabStyle;

  if (orientation === "horizontal") {
    tabListStyle = {
      alignItems: "center",
      justifyContent: alignments[align],
      maxWidth: "full"
    };
    tabStyle = {
      height: "100%"
    };
  }

  if (orientation === "vertical") {
    tabListStyle = {
      flexDirection: "column"
    };
    tabStyle = {
      width: "100%"
    };
  }

  return {
    tabList: tabListStyle,
    tab: tabStyle
  };
};
var tabSizes = {
  sm: {
    padding: "0.25rem 1rem",
    fontSize: "0.85rem"
  },
  md: {
    fontSize: "1rem",
    padding: "0.5rem 1rem"
  },
  lg: {
    fontSize: "1.15rem",
    padding: "0.75rem 1rem"
  }
};
var useTabStyle = function useTabStyle() {
  var theme = useTheme();

  var _useContext = React.useContext(TabContext),
      variant = _useContext.variant,
      color = _useContext.color,
      size = _useContext.size,
      isFitted = _useContext.isFitted,
      orientation = _useContext.orientation;

  var _useColorMode = useColorMode(),
      colorMode = _useColorMode.colorMode;

  var _variantStyle = variantStyle({
    variant: variant,
    color: color,
    theme: theme,
    colorMode: colorMode
  });

  var _orientationStyle = orientationStyle({
    orientation: orientation
  });

  return _objectSpread2({}, baseProps$6, {}, disabledProps$1, {}, tabSizes[size], {}, _variantStyle && _variantStyle.tab, {}, _orientationStyle && _orientationStyle.tab, {}, isFitted && {
    flex: 1
  });
};
var useTabListStyle = function useTabListStyle() {
  var theme = useTheme();

  var _useContext2 = React.useContext(TabContext),
      variant = _useContext2.variant,
      align = _useContext2.align,
      orientation = _useContext2.orientation;

  var _variantStyle = variantStyle({
    variant: variant,
    theme: theme
  });

  var _orientationStyle = orientationStyle({
    align: align,
    orientation: orientation
  });

  return _objectSpread2({}, _variantStyle && _variantStyle.tabList, {}, _orientationStyle && _orientationStyle.tabList);
};

var Tab = React.forwardRef(function (props, ref) {
  var isSelected = props.isSelected,
      isDisabled = props.isDisabled,
      id = props.id,
      size = props.size,
      rest = _objectWithoutProperties(props, ["isSelected", "isDisabled", "id", "size"]);

  var tabStyleProps = useTabStyle();
  return core.jsx(PseudoBox, _extends({
    ref: ref,
    role: "tab",
    tabIndex: isSelected ? 0 : -1,
    id: "tab:".concat(id),
    outline: "none",
    as: "button",
    type: "button",
    disabled: isDisabled,
    "aria-selected": isSelected,
    "aria-disabled": isDisabled,
    "aria-controls": "panel:".concat(id)
  }, tabStyleProps, rest));
});
Tab.displayName = "Tab"; ////////////////////////////////////////////////////////////////////////

var TabList = React.forwardRef(function (props, ref) {
  var children = props.children,
      onKeyDown = props.onKeyDown,
      onClick = props.onClick,
      rest = _objectWithoutProperties(props, ["children", "onKeyDown", "onClick"]);

  var _useContext = React.useContext(TabContext),
      id = _useContext.id,
      selectedIndex = _useContext.index,
      manualIndex = _useContext.manualIndex,
      onManualTabChange = _useContext.onManualTabChange,
      isManual = _useContext.isManual,
      onChangeTab = _useContext.onChangeTab,
      onFocusPanel = _useContext.onFocusPanel,
      orientation = _useContext.orientation;

  var tabListStyleProps = useTabListStyle();
  var allNodes = React.useRef([]);
  var validChildren = cleanChildren(children);
  var focusableIndexes = validChildren.map(function (child, index) {
    return child.props.isDisabled === true ? null : index;
  }).filter(function (index) {
    return index != null;
  });
  var enabledSelectedIndex = focusableIndexes.indexOf(selectedIndex);
  var count = focusableIndexes.length;

  var updateIndex = function updateIndex(index) {
    var childIndex = focusableIndexes[index];
    allNodes.current[childIndex].focus();
    onChangeTab && onChangeTab(childIndex);
  };

  var handleKeyDown = function handleKeyDown(event) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      var nextIndex = (enabledSelectedIndex + 1) % count;
      updateIndex(nextIndex);
    }

    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();

      var _nextIndex = (enabledSelectedIndex - 1 + count) % count;

      updateIndex(_nextIndex);
    }

    if (event.key === "Home") {
      event.preventDefault();
      updateIndex(0);
    }

    if (event.key === "End") {
      event.preventDefault();
      updateIndex(count - 1);
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      onFocusPanel && onFocusPanel();
    }

    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  var clones = validChildren.map(function (child, index) {
    var isSelected = isManual ? index === manualIndex : index === selectedIndex;

    var handleClick = function handleClick(event) {
      // Hack for Safari. Buttons don't receive focus on click on Safari
      // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#Clicking_and_focus
      allNodes.current[index].focus();
      onManualTabChange(index);
      onChangeTab(index);

      if (child.props.onClick) {
        child.props.onClick(event);
      }
    };

    return React.cloneElement(child, {
      ref: function ref(node) {
        return allNodes.current[index] = node;
      },
      isSelected: isSelected,
      onClick: handleClick,
      id: "".concat(id, "-").concat(index)
    });
  });
  return core.jsx(Flex, _extends({
    onKeyDown: handleKeyDown,
    ref: ref,
    role: "tablist",
    "aria-orientation": orientation
  }, tabListStyleProps, rest), clones);
});
TabList.displayName = "TabList"; ////////////////////////////////////////////////////////////////////////

var TabPanel = React.forwardRef(function (_ref, _ref2) {
  var children = _ref.children,
      isSelected = _ref.isSelected,
      selectedPanelRef = _ref.selectedPanelRef,
      id = _ref.id,
      rest = _objectWithoutProperties(_ref, ["children", "isSelected", "selectedPanelRef", "id"]);

  return core.jsx(Box, _extends({
    ref: function ref(node) {
      if (isSelected) {
        assignRef(selectedPanelRef, node);
      }

      assignRef(_ref2, node);
    },
    role: "tabpanel",
    tabIndex: -1,
    "aria-labelledby": "tab:".concat(id),
    hidden: !isSelected,
    id: "panel:".concat(id),
    outline: 0
  }, rest), children);
});
TabPanel.displayName = "TabPanel"; ////////////////////////////////////////////////////////////////////////

var TabPanels = React.forwardRef(function (_ref3, ref) {
  var children = _ref3.children,
      rest = _objectWithoutProperties(_ref3, ["children"]);

  var _useContext2 = React.useContext(TabContext),
      selectedIndex = _useContext2.index,
      selectedPanelRef = _useContext2.selectedPanelRef,
      id = _useContext2.id,
      isManual = _useContext2.isManual,
      manualIndex = _useContext2.manualIndex;

  var validChildren = cleanChildren(children);
  var clones = validChildren.map(function (child, index) {
    return React.cloneElement(child, {
      isSelected: isManual ? index === manualIndex : index === selectedIndex,
      selectedPanelRef: selectedPanelRef,
      id: "".concat(id, "-").concat(index)
    });
  });
  return core.jsx(Box, _extends({
    tabIndex: "-1",
    ref: ref
  }, rest), clones);
});
TabPanels.displayName = "TabPanels"; ////////////////////////////////////////////////////////////////////////

var TabContext = React.createContext();
var Tabs = React.forwardRef(function (_ref4, ref) {
  var children = _ref4.children,
      onChange = _ref4.onChange,
      controlledIndex = _ref4.index,
      defaultIndex = _ref4.defaultIndex,
      isManual = _ref4.isManual,
      _ref4$variant = _ref4.variant,
      variant = _ref4$variant === void 0 ? "line" : _ref4$variant,
      _ref4$variantColor = _ref4.variantColor,
      variantColor = _ref4$variantColor === void 0 ? "blue" : _ref4$variantColor,
      _ref4$align = _ref4.align,
      align = _ref4$align === void 0 ? "start" : _ref4$align,
      _ref4$size = _ref4.size,
      size = _ref4$size === void 0 ? "md" : _ref4$size,
      _ref4$orientation = _ref4.orientation,
      orientation = _ref4$orientation === void 0 ? "horizontal" : _ref4$orientation,
      isFitted = _ref4.isFitted,
      props = _objectWithoutProperties(_ref4, ["children", "onChange", "index", "defaultIndex", "isManual", "variant", "variantColor", "align", "size", "orientation", "isFitted"]);

  // Wrong usage of `variantColor` prop is quite common
  // Let's add a warning hook that validates the passed variantColor
  useVariantColorWarning("Tabs", variantColor);

  var _useRef = React.useRef(controlledIndex != null),
      isControlled = _useRef.current;

  var selectedPanelRef = React.useRef();

  var getInitialIndex = function getInitialIndex() {
    if (!isManual) {
      return defaultIndex || 0;
    } else {
      return controlledIndex || defaultIndex || 0;
    }
  };

  var getActualIdx = function getActualIdx() {
    if (isManual) {
      return selectedIndex;
    } else {
      return isControlled ? controlledIndex : selectedIndex;
    }
  };

  var _useState = React.useState(getInitialIndex),
      _useState2 = _slicedToArray(_useState, 2),
      selectedIndex = _useState2[0],
      setSelectedIndex = _useState2[1];

  var _useState3 = React.useState(controlledIndex || defaultIndex || 0),
      _useState4 = _slicedToArray(_useState3, 2),
      manualIndex = _useState4[0],
      setManualIndex = _useState4[1];

  var actualIdx = getActualIdx();
  var manualIdx = isControlled ? controlledIndex : manualIndex;

  var onChangeTab = function onChangeTab(index) {
    if (!isControlled) {
      setSelectedIndex(index);
    }

    if (isControlled && isManual) {
      setSelectedIndex(index);
    }

    if (!isManual) {
      onChange && onChange(index);
    }
  };

  var onManualTabChange = function onManualTabChange(index) {
    if (!isControlled) {
      setManualIndex(index);
    }

    if (isManual) {
      onChange && onChange(index);
    }
  };

  var onFocusPanel = function onFocusPanel() {
    if (selectedPanelRef.current) {
      selectedPanelRef.current.focus();
    }
  };

  var id = useId();
  var context = {
    id: id,
    index: actualIdx,
    manualIndex: manualIdx,
    onManualTabChange: onManualTabChange,
    isManual: isManual,
    onChangeTab: onChangeTab,
    selectedPanelRef: selectedPanelRef,
    onFocusPanel: onFocusPanel,
    color: variantColor,
    size: size,
    align: align,
    variant: variant,
    isFitted: isFitted,
    orientation: orientation
  };
  return core.jsx(TabContext.Provider, {
    value: context
  }, core.jsx(Box, _extends({
    ref: ref
  }, props), children));
});
Tabs.displayName = "Tabs";

var tagSizes = {
  sm: {
    minH: 6,
    minW: 6,
    fontSize: "sm",
    px: 2
  },
  md: {
    minH: "1.75rem",
    minW: "1.75rem",
    fontSize: "sm",
    px: 2
  },
  lg: {
    minH: 8,
    minW: 8,
    px: 3
  }
};
var TagCloseButton = function TagCloseButton(_ref) {
  var isDisabled = _ref.isDisabled,
      props = _objectWithoutProperties(_ref, ["isDisabled"]);

  return core.jsx(PseudoBox, _extends({
    as: "button",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.2s",
    rounded: "full",
    size: "1.25rem",
    outline: "none",
    mr: -1,
    opacity: "0.5",
    disabled: isDisabled,
    _disabled: {
      opacity: "40%",
      cursor: "not-allowed",
      boxShadow: "none"
    },
    _focus: {
      boxShadow: "outline",
      bg: "rgba(0, 0, 0, 0.14)"
    },
    _hover: {
      opacity: "0.8"
    },
    _active: {
      opacity: "1"
    }
  }, props), core.jsx(Icon, {
    size: "18px",
    name: "small-close",
    focusable: "false"
  }));
};
var TagIcon = function TagIcon(_ref2) {
  var icon = _ref2.icon,
      props = _objectWithoutProperties(_ref2, ["icon"]);

  if (typeof icon === "string") {
    return core.jsx(Icon, _extends({
      name: icon,
      mx: "0.5rem",
      css: {
        "&:first-child": {
          marginLeft: 0
        },
        "&:last-child": {
          marginRight: 0
        }
      }
    }, props));
  }

  return core.jsx(Box, _extends({
    as: icon,
    focusable: "false",
    color: "currentColor",
    mx: "0.5rem",
    css: {
      "&:first-child": {
        marginLeft: 0
      },
      "&:last-child": {
        marginRight: 0
      }
    }
  }, props));
};
var TagLabel = function TagLabel(props) {
  return core.jsx(Box, _extends({
    isTruncated: true,
    lineHeight: "1.2",
    as: "span"
  }, props));
};

var Tag = function Tag(_ref3) {
  var _ref3$variant = _ref3.variant,
      variant = _ref3$variant === void 0 ? "subtle" : _ref3$variant,
      _ref3$size = _ref3.size,
      size = _ref3$size === void 0 ? "lg" : _ref3$size,
      _ref3$variantColor = _ref3.variantColor,
      variantColor = _ref3$variantColor === void 0 ? "gray" : _ref3$variantColor,
      rest = _objectWithoutProperties(_ref3, ["variant", "size", "variantColor"]);

  useVariantColorWarning("Tag", variantColor);
  var styleProps = useBadgeStyle({
    color: variantColor,
    variant: variant
  });
  var sizeProps = tagSizes[size];
  return core.jsx(PseudoBox, _extends({
    display: "inline-flex",
    alignItems: "center",
    minH: 6,
    maxW: "100%",
    rounded: "md",
    fontWeight: "medium"
  }, sizeProps, styleProps, rest));
};

var Textarea = React.forwardRef(function (props, ref) {
  return core.jsx(Input, _extends({
    py: "8px",
    minHeight: "80px",
    lineHeight: "short",
    ref: ref,
    as: "textarea"
  }, props));
});
Textarea.displayName = "Textarea";
var ExpandingTextarea = React.forwardRef(function (_ref, ref) {
  var _ref$minHeight = _ref.minHeight,
      minHeight = _ref$minHeight === void 0 ? "39px" : _ref$minHeight,
      onInput = _ref.onInput,
      props = _objectWithoutProperties(_ref, ["minHeight", "onInput"]);

  var _useState = React.useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      height = _useState2[0],
      setHeight = _useState2[1];

  var ownRef = React.useRef();
  var textareaRef = ref || ownRef;
  React.useLayoutEffect(function () {
    if (textareaRef.current) {
      setHeight(textareaRef.current.scrollHeight);
    }
  }, [textareaRef]);

  var handleInput = function handleInput(event) {
    if (textareaRef.current) {
      setTimeout(function () {
        setHeight("auto");
        setHeight(textareaRef.current.scrollHeight);
      }, 0);
    }

    onInput && onInput(event);
  };

  return core.jsx(Textarea, _extends({
    rows: "1",
    onInput: handleInput,
    css: {
      height: height,
      resize: "none",
      overflow: "hidden",
      minHeight: minHeight
    },
    ref: textareaRef
  }, props));
});
ExpandingTextarea.displayName = "ExpandingTextarea";

function _extends$3() {
  _extends$3 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends$3.apply(this, arguments);
}

function _objectWithoutPropertiesLoose$2(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

const is = {
  arr: Array.isArray,
  obj: a => Object.prototype.toString.call(a) === '[object Object]',
  fun: a => typeof a === 'function',
  str: a => typeof a === 'string',
  num: a => typeof a === 'number',
  und: a => a === void 0,
  nul: a => a === null,
  set: a => a instanceof Set,
  map: a => a instanceof Map,

  equ(a, b) {
    if (typeof a !== typeof b) return false;
    if (is.str(a) || is.num(a)) return a === b;
    if (is.obj(a) && is.obj(b) && Object.keys(a).length + Object.keys(b).length === 0) return true;
    let i;

    for (i in a) if (!(i in b)) return false;

    for (i in b) if (a[i] !== b[i]) return false;

    return is.und(i) ? a === b : true;
  }

};
function merge$1(target, lowercase) {
  if (lowercase === void 0) {
    lowercase = true;
  }

  return object => (is.arr(object) ? object : Object.keys(object)).reduce((acc, element) => {
    const key = lowercase ? element[0].toLowerCase() + element.substring(1) : element;
    acc[key] = target(key);
    return acc;
  }, target);
}
function useForceUpdate() {
  const _useState = React.useState(false),
        f = _useState[1];

  const forceUpdate = React.useCallback(() => f(v => !v), []);
  return forceUpdate;
}
function withDefault(value, defaultValue) {
  return is.und(value) || is.nul(value) ? defaultValue : value;
}
function toArray$1(a) {
  return !is.und(a) ? is.arr(a) ? a : [a] : [];
}
function callProp(obj) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return is.fun(obj) ? obj(...args) : obj;
}

function getForwardProps(props) {
  const to = props.to,
        from = props.from,
        config = props.config,
        onStart = props.onStart,
        onRest = props.onRest,
        onFrame = props.onFrame,
        children = props.children,
        reset = props.reset,
        reverse = props.reverse,
        force = props.force,
        immediate = props.immediate,
        delay = props.delay,
        attach = props.attach,
        destroyed = props.destroyed,
        interpolateTo = props.interpolateTo,
        ref = props.ref,
        lazy = props.lazy,
        forward = _objectWithoutPropertiesLoose$2(props, ["to", "from", "config", "onStart", "onRest", "onFrame", "children", "reset", "reverse", "force", "immediate", "delay", "attach", "destroyed", "interpolateTo", "ref", "lazy"]);

  return forward;
}

function interpolateTo(props) {
  const forward = getForwardProps(props);
  if (is.und(forward)) return _extends$3({
    to: forward
  }, props);
  const rest = Object.keys(props).reduce((a, k) => !is.und(forward[k]) ? a : _extends$3({}, a, {
    [k]: props[k]
  }), {});
  return _extends$3({
    to: forward
  }, rest);
}
function handleRef(ref, forward) {
  if (forward) {
    // If it's a function, assume it's a ref callback
    if (is.fun(forward)) forward(ref);else if (is.obj(forward)) {
      forward.current = ref;
    }
  }

  return ref;
}

class Animated {
  constructor() {
    this.payload = void 0;
    this.children = [];
  }

  getAnimatedValue() {
    return this.getValue();
  }

  getPayload() {
    return this.payload || this;
  }

  attach() {}

  detach() {}

  getChildren() {
    return this.children;
  }

  addChild(child) {
    if (this.children.length === 0) this.attach();
    this.children.push(child);
  }

  removeChild(child) {
    const index = this.children.indexOf(child);
    this.children.splice(index, 1);
    if (this.children.length === 0) this.detach();
  }

}
class AnimatedArray extends Animated {
  constructor() {
    super(...arguments);
    this.payload = [];

    this.attach = () => this.payload.forEach(p => p instanceof Animated && p.addChild(this));

    this.detach = () => this.payload.forEach(p => p instanceof Animated && p.removeChild(this));
  }

}
class AnimatedObject extends Animated {
  constructor() {
    super(...arguments);
    this.payload = {};

    this.attach = () => Object.values(this.payload).forEach(s => s instanceof Animated && s.addChild(this));

    this.detach = () => Object.values(this.payload).forEach(s => s instanceof Animated && s.removeChild(this));
  }

  getValue(animated) {
    if (animated === void 0) {
      animated = false;
    }

    const payload = {};

    for (const key in this.payload) {
      const value = this.payload[key];
      if (animated && !(value instanceof Animated)) continue;
      payload[key] = value instanceof Animated ? value[animated ? 'getAnimatedValue' : 'getValue']() : value;
    }

    return payload;
  }

  getAnimatedValue() {
    return this.getValue(true);
  }

}

let applyAnimatedValues;
function injectApplyAnimatedValues(fn, transform) {
  applyAnimatedValues = {
    fn,
    transform
  };
}
let colorNames;
function injectColorNames(names) {
  colorNames = names;
}
let requestFrame = cb => typeof window !== 'undefined' ? window.requestAnimationFrame(cb) : -1;
let interpolation;
function injectStringInterpolator(fn) {
  interpolation = fn;
}
let now = () => Date.now();
let animatedApi = node => node.current;
let createAnimatedStyle;
function injectCreateAnimatedStyle(factory) {
  createAnimatedStyle = factory;
}

/**
 * Wraps the `style` property with `AnimatedStyle`.
 */

class AnimatedProps extends AnimatedObject {
  constructor(props, callback) {
    super();
    this.update = void 0;
    this.payload = !props.style ? props : _extends$3({}, props, {
      style: createAnimatedStyle(props.style)
    });
    this.update = callback;
    this.attach();
  }

}

const isFunctionComponent = val => is.fun(val) && !(val.prototype instanceof React__default.Component);

const createAnimatedComponent = Component => {
  const AnimatedComponent = React.forwardRef((props, ref) => {
    const forceUpdate = useForceUpdate();
    const mounted = React.useRef(true);
    const propsAnimated = React.useRef(null);
    const node = React.useRef(null);
    const attachProps = React.useCallback(props => {
      const oldPropsAnimated = propsAnimated.current;

      const callback = () => {
        let didUpdate = false;

        if (node.current) {
          didUpdate = applyAnimatedValues.fn(node.current, propsAnimated.current.getAnimatedValue());
        }

        if (!node.current || didUpdate === false) {
          // If no referenced node has been found, or the update target didn't have a
          // native-responder, then forceUpdate the animation ...
          forceUpdate();
        }
      };

      propsAnimated.current = new AnimatedProps(props, callback);
      oldPropsAnimated && oldPropsAnimated.detach();
    }, []);
    React.useEffect(() => () => {
      mounted.current = false;
      propsAnimated.current && propsAnimated.current.detach();
    }, []);
    React.useImperativeHandle(ref, () => animatedApi(node));
    attachProps(props);

    const _getValue = propsAnimated.current.getValue(),
          scrollTop = _getValue.scrollTop,
          scrollLeft = _getValue.scrollLeft,
          animatedProps = _objectWithoutPropertiesLoose$2(_getValue, ["scrollTop", "scrollLeft"]); // Functions cannot have refs, see:
    // See: https://github.com/react-spring/react-spring/issues/569


    const refFn = isFunctionComponent(Component) ? undefined : childRef => node.current = handleRef(childRef, ref);
    return React__default.createElement(Component, _extends$3({}, animatedProps, {
      ref: refFn
    }));
  });
  return AnimatedComponent;
};

let active$1 = false;
const controllers = new Set();

const update$1 = () => {
  if (!active$1) return false;
  let time = now();

  for (let controller of controllers) {
    let isActive = false;

    for (let configIdx = 0; configIdx < controller.configs.length; configIdx++) {
      let config = controller.configs[configIdx];
      let endOfAnimation, lastTime;

      for (let valIdx = 0; valIdx < config.animatedValues.length; valIdx++) {
        let animation = config.animatedValues[valIdx]; // If an animation is done, skip, until all of them conclude

        if (animation.done) continue;
        let from = config.fromValues[valIdx];
        let to = config.toValues[valIdx];
        let position = animation.lastPosition;
        let isAnimated = to instanceof Animated;
        let velocity = Array.isArray(config.initialVelocity) ? config.initialVelocity[valIdx] : config.initialVelocity;
        if (isAnimated) to = to.getValue(); // Conclude animation if it's either immediate, or from-values match end-state

        if (config.immediate) {
          animation.setValue(to);
          animation.done = true;
          continue;
        } // Break animation when string values are involved


        if (typeof from === 'string' || typeof to === 'string') {
          animation.setValue(to);
          animation.done = true;
          continue;
        }

        if (config.duration !== void 0) {
          /** Duration easing */
          position = from + config.easing((time - animation.startTime) / config.duration) * (to - from);
          endOfAnimation = time >= animation.startTime + config.duration;
        } else if (config.decay) {
          /** Decay easing */
          position = from + velocity / (1 - 0.998) * (1 - Math.exp(-(1 - 0.998) * (time - animation.startTime)));
          endOfAnimation = Math.abs(animation.lastPosition - position) < 0.1;
          if (endOfAnimation) to = position;
        } else {
          /** Spring easing */
          lastTime = animation.lastTime !== void 0 ? animation.lastTime : time;
          velocity = animation.lastVelocity !== void 0 ? animation.lastVelocity : config.initialVelocity; // If we lost a lot of frames just jump to the end.

          if (time > lastTime + 64) lastTime = time; // http://gafferongames.com/game-physics/fix-your-timestep/

          let numSteps = Math.floor(time - lastTime);

          for (let i = 0; i < numSteps; ++i) {
            let force = -config.tension * (position - to);
            let damping = -config.friction * velocity;
            let acceleration = (force + damping) / config.mass;
            velocity = velocity + acceleration * 1 / 1000;
            position = position + velocity * 1 / 1000;
          } // Conditions for stopping the spring animation


          let isOvershooting = config.clamp && config.tension !== 0 ? from < to ? position > to : position < to : false;
          let isVelocity = Math.abs(velocity) <= config.precision;
          let isDisplacement = config.tension !== 0 ? Math.abs(to - position) <= config.precision : true;
          endOfAnimation = isOvershooting || isVelocity && isDisplacement;
          animation.lastVelocity = velocity;
          animation.lastTime = time;
        } // Trails aren't done until their parents conclude


        if (isAnimated && !config.toValues[valIdx].done) endOfAnimation = false;

        if (endOfAnimation) {
          // Ensure that we end up with a round value
          if (animation.value !== to) position = to;
          animation.done = true;
        } else isActive = true;

        animation.setValue(position);
        animation.lastPosition = position;
      } // Keep track of updated values only when necessary


      if (controller.props.onFrame) controller.values[config.name] = config.interpolation.getValue();
    } // Update callbacks in the end of the frame


    if (controller.props.onFrame) controller.props.onFrame(controller.values); // Either call onEnd or next frame

    if (!isActive) {
      controllers.delete(controller);
      controller.stop(true);
    }
  } // Loop over as long as there are controllers ...


  if (controllers.size) {
    requestFrame(update$1);
  } else {
    active$1 = false;
  }

  return active$1;
};

const start = controller => {
  if (!controllers.has(controller)) controllers.add(controller);

  if (!active$1) {
    active$1 = true;
    requestFrame(update$1);
  }
};

const stop = controller => {
  if (controllers.has(controller)) controllers.delete(controller);
};

function createInterpolator(range, output, extrapolate) {
  if (typeof range === 'function') {
    return range;
  }

  if (Array.isArray(range)) {
    return createInterpolator({
      range,
      output: output,
      extrapolate
    });
  }

  if (interpolation && typeof range.output[0] === 'string') {
    return interpolation(range);
  }

  const config = range;
  const outputRange = config.output;
  const inputRange = config.range || [0, 1];
  const extrapolateLeft = config.extrapolateLeft || config.extrapolate || 'extend';
  const extrapolateRight = config.extrapolateRight || config.extrapolate || 'extend';

  const easing = config.easing || (t => t);

  return input => {
    const range = findRange(input, inputRange);
    return interpolate(input, inputRange[range], inputRange[range + 1], outputRange[range], outputRange[range + 1], easing, extrapolateLeft, extrapolateRight, config.map);
  };
}

function interpolate(input, inputMin, inputMax, outputMin, outputMax, easing, extrapolateLeft, extrapolateRight, map) {
  let result = map ? map(input) : input; // Extrapolate

  if (result < inputMin) {
    if (extrapolateLeft === 'identity') return result;else if (extrapolateLeft === 'clamp') result = inputMin;
  }

  if (result > inputMax) {
    if (extrapolateRight === 'identity') return result;else if (extrapolateRight === 'clamp') result = inputMax;
  }

  if (outputMin === outputMax) return outputMin;
  if (inputMin === inputMax) return input <= inputMin ? outputMin : outputMax; // Input Range

  if (inputMin === -Infinity) result = -result;else if (inputMax === Infinity) result = result - inputMin;else result = (result - inputMin) / (inputMax - inputMin); // Easing

  result = easing(result); // Output Range

  if (outputMin === -Infinity) result = -result;else if (outputMax === Infinity) result = result + outputMin;else result = result * (outputMax - outputMin) + outputMin;
  return result;
}

function findRange(input, inputRange) {
  for (var i = 1; i < inputRange.length - 1; ++i) if (inputRange[i] >= input) break;

  return i - 1;
}

class AnimatedInterpolation extends AnimatedArray {
  constructor(parents, range, output, extrapolate) {
    super();
    this.calc = void 0;
    this.payload = parents instanceof AnimatedArray && !(parents instanceof AnimatedInterpolation) ? parents.getPayload() : Array.isArray(parents) ? parents : [parents];
    this.calc = createInterpolator(range, output, extrapolate);
  }

  getValue() {
    return this.calc(...this.payload.map(value => value.getValue()));
  }

  updateConfig(range, output, extrapolate) {
    this.calc = createInterpolator(range, output, extrapolate);
  }

  interpolate(range, output, extrapolate) {
    return new AnimatedInterpolation(this, range, output, extrapolate);
  }

}

/**
 * Animated works by building a directed acyclic graph of dependencies
 * transparently when you render your Animated components.
 *
 *               new Animated.Value(0)
 *     .interpolate()        .interpolate()    new Animated.Value(1)
 *         opacity               translateY      scale
 *          style                         transform
 *         View#234                         style
 *                                         View#123
 *
 * A) Top Down phase
 * When an AnimatedValue is updated, we recursively go down through this
 * graph in order to find leaf nodes: the views that we flag as needing
 * an update.
 *
 * B) Bottom Up phase
 * When a view is flagged as needing an update, we recursively go back up
 * in order to build the new value that it needs. The reason why we need
 * this two-phases process is to deal with composite props such as
 * transform which can receive values from multiple parents.
 */
function addAnimatedStyles(node, styles) {
  if ('update' in node) {
    styles.add(node);
  } else {
    node.getChildren().forEach(child => addAnimatedStyles(child, styles));
  }
}

class AnimatedValue extends Animated {
  constructor(_value) {
    var _this;

    super();
    _this = this;
    this.animatedStyles = new Set();
    this.value = void 0;
    this.startPosition = void 0;
    this.lastPosition = void 0;
    this.lastVelocity = void 0;
    this.startTime = void 0;
    this.lastTime = void 0;
    this.done = false;

    this.setValue = function (value, flush) {
      if (flush === void 0) {
        flush = true;
      }

      _this.value = value;
      if (flush) _this.flush();
    };

    this.value = _value;
    this.startPosition = _value;
    this.lastPosition = _value;
  }

  flush() {
    if (this.animatedStyles.size === 0) {
      addAnimatedStyles(this, this.animatedStyles);
    }

    this.animatedStyles.forEach(animatedStyle => animatedStyle.update());
  }

  clearStyles() {
    this.animatedStyles.clear();
  }

  getValue() {
    return this.value;
  }

  interpolate(range, output, extrapolate) {
    return new AnimatedInterpolation(this, range, output, extrapolate);
  }

}

class AnimatedValueArray extends AnimatedArray {
  constructor(values) {
    super();
    this.payload = values.map(n => new AnimatedValue(n));
  }

  setValue(value, flush) {
    if (flush === void 0) {
      flush = true;
    }

    if (Array.isArray(value)) {
      if (value.length === this.payload.length) {
        value.forEach((v, i) => this.payload[i].setValue(v, flush));
      }
    } else {
      this.payload.forEach(p => p.setValue(value, flush));
    }
  }

  getValue() {
    return this.payload.map(v => v.getValue());
  }

  interpolate(range, output) {
    return new AnimatedInterpolation(this, range, output);
  }

}

let G = 0;

class Controller {
  constructor() {
    this.id = void 0;
    this.idle = true;
    this.hasChanged = false;
    this.guid = 0;
    this.local = 0;
    this.props = {};
    this.merged = {};
    this.animations = {};
    this.interpolations = {};
    this.values = {};
    this.configs = [];
    this.listeners = [];
    this.queue = [];
    this.localQueue = void 0;

    this.getValues = () => this.interpolations;

    this.id = G++;
  }
  /** update(props)
   *  This function filters input props and creates an array of tasks which are executed in .start()
   *  Each task is allowed to carry a delay, which means it can execute asnychroneously */


  update(args) {
    //this._id = n + this.id
    if (!args) return this; // Extract delay and the to-prop from props

    const _ref = interpolateTo(args),
          _ref$delay = _ref.delay,
          delay = _ref$delay === void 0 ? 0 : _ref$delay,
          to = _ref.to,
          props = _objectWithoutPropertiesLoose$2(_ref, ["delay", "to"]);

    if (is.arr(to) || is.fun(to)) {
      // If config is either a function or an array queue it up as is
      this.queue.push(_extends$3({}, props, {
        delay,
        to
      }));
    } else if (to) {
      // Otherwise go through each key since it could be delayed individually
      let ops = {};
      Object.entries(to).forEach((_ref2) => {
        let k = _ref2[0],
            v = _ref2[1];

        // Fetch delay and create an entry, consisting of the to-props, the delay, and basic props
        const entry = _extends$3({
          to: {
            [k]: v
          },
          delay: callProp(delay, k)
        }, props);

        const previous = ops[entry.delay] && ops[entry.delay].to;
        ops[entry.delay] = _extends$3({}, ops[entry.delay], entry, {
          to: _extends$3({}, previous, entry.to)
        });
      });
      this.queue = Object.values(ops);
    } // Sort queue, so that async calls go last


    this.queue = this.queue.sort((a, b) => a.delay - b.delay); // Diff the reduced props immediately (they'll contain the from-prop and some config)

    this.diff(props);
    return this;
  }
  /** start(onEnd)
   *  This function either executes a queue, if present, or starts the frameloop, which animates */


  start(onEnd) {
    // If a queue is present we must excecute it
    if (this.queue.length) {
      this.idle = false; // Updates can interrupt trailing queues, in that case we just merge values

      if (this.localQueue) {
        this.localQueue.forEach((_ref3) => {
          let _ref3$from = _ref3.from,
              from = _ref3$from === void 0 ? {} : _ref3$from,
              _ref3$to = _ref3.to,
              to = _ref3$to === void 0 ? {} : _ref3$to;
          if (is.obj(from)) this.merged = _extends$3({}, from, this.merged);
          if (is.obj(to)) this.merged = _extends$3({}, this.merged, to);
        });
      } // The guid helps us tracking frames, a new queue over an old one means an override
      // We discard async calls in that caseÍ


      const local = this.local = ++this.guid;
      const queue = this.localQueue = this.queue;
      this.queue = []; // Go through each entry and execute it

      queue.forEach((_ref4, index) => {
        let delay = _ref4.delay,
            props = _objectWithoutPropertiesLoose$2(_ref4, ["delay"]);

        const cb = finished => {
          if (index === queue.length - 1 && local === this.guid && finished) {
            this.idle = true;
            if (this.props.onRest) this.props.onRest(this.merged);
          }

          if (onEnd) onEnd();
        }; // Entries can be delayed, ansyc or immediate


        let async = is.arr(props.to) || is.fun(props.to);

        if (delay) {
          setTimeout(() => {
            if (local === this.guid) {
              if (async) this.runAsync(props, cb);else this.diff(props).start(cb);
            }
          }, delay);
        } else if (async) this.runAsync(props, cb);else this.diff(props).start(cb);
      });
    } // Otherwise we kick of the frameloop
    else {
        if (is.fun(onEnd)) this.listeners.push(onEnd);
        if (this.props.onStart) this.props.onStart();
        start(this);
      }

    return this;
  }

  stop(finished) {
    this.listeners.forEach(onEnd => onEnd(finished));
    this.listeners = [];
    return this;
  }
  /** Pause sets onEnd listeners free, but also removes the controller from the frameloop */


  pause(finished) {
    this.stop(true);
    if (finished) stop(this);
    return this;
  }

  runAsync(_ref5, onEnd) {
    var _this = this;

    let delay = _ref5.delay,
        props = _objectWithoutPropertiesLoose$2(_ref5, ["delay"]);

    const local = this.local; // If "to" is either a function or an array it will be processed async, therefor "to" should be empty right now
    // If the view relies on certain values "from" has to be present

    let queue = Promise.resolve(undefined);

    if (is.arr(props.to)) {
      for (let i = 0; i < props.to.length; i++) {
        const index = i;

        const fresh = _extends$3({}, props, interpolateTo(props.to[index]));

        if (is.arr(fresh.config)) fresh.config = fresh.config[index];
        queue = queue.then(() => {
          //this.stop()
          if (local === this.guid) return new Promise(r => this.diff(fresh).start(r));
        });
      }
    } else if (is.fun(props.to)) {
      let index = 0;
      let last;
      queue = queue.then(() => props.to( // next(props)
      p => {
        const fresh = _extends$3({}, props, interpolateTo(p));

        if (is.arr(fresh.config)) fresh.config = fresh.config[index];
        index++; //this.stop()

        if (local === this.guid) return last = new Promise(r => this.diff(fresh).start(r));
        return;
      }, // cancel()
      function (finished) {
        if (finished === void 0) {
          finished = true;
        }

        return _this.stop(finished);
      }).then(() => last));
    }

    queue.then(onEnd);
  }

  diff(props) {
    this.props = _extends$3({}, this.props, props);
    let _this$props = this.props,
        _this$props$from = _this$props.from,
        from = _this$props$from === void 0 ? {} : _this$props$from,
        _this$props$to = _this$props.to,
        to = _this$props$to === void 0 ? {} : _this$props$to,
        _this$props$config = _this$props.config,
        config = _this$props$config === void 0 ? {} : _this$props$config,
        reverse = _this$props.reverse,
        attach = _this$props.attach,
        reset = _this$props.reset,
        immediate = _this$props.immediate; // Reverse values when requested

    if (reverse) {
      var _ref6 = [to, from];
      from = _ref6[0];
      to = _ref6[1];
    } // This will collect all props that were ever set, reset merged props when necessary


    this.merged = _extends$3({}, from, this.merged, to);
    this.hasChanged = false; // Attachment handling, trailed springs can "attach" themselves to a previous spring

    let target = attach && attach(this); // Reduces input { name: value } pairs into animated values

    this.animations = Object.entries(this.merged).reduce((acc, _ref7) => {
      let name = _ref7[0],
          value = _ref7[1];
      // Issue cached entries, except on reset
      let entry = acc[name] || {}; // Figure out what the value is supposed to be

      const isNumber = is.num(value);
      const isString = is.str(value) && !value.startsWith('#') && !/\d/.test(value) && !colorNames[value];
      const isArray = is.arr(value);
      const isInterpolation = !isNumber && !isArray && !isString;
      let fromValue = !is.und(from[name]) ? from[name] : value;
      let toValue = isNumber || isArray ? value : isString ? value : 1;
      let toConfig = callProp(config, name);
      if (target) toValue = target.animations[name].parent;
      let parent = entry.parent,
          interpolation$$1 = entry.interpolation,
          toValues = toArray$1(target ? toValue.getPayload() : toValue),
          animatedValues;
      let newValue = value;
      if (isInterpolation) newValue = interpolation({
        range: [0, 1],
        output: [value, value]
      })(1);
      let currentValue = interpolation$$1 && interpolation$$1.getValue(); // Change detection flags

      const isFirst = is.und(parent);
      const isActive = !isFirst && entry.animatedValues.some(v => !v.done);
      const currentValueDiffersFromGoal = !is.equ(newValue, currentValue);
      const hasNewGoal = !is.equ(newValue, entry.previous);
      const hasNewConfig = !is.equ(toConfig, entry.config); // Change animation props when props indicate a new goal (new value differs from previous one)
      // and current values differ from it. Config changes trigger a new update as well (though probably shouldn't?)

      if (reset || hasNewGoal && currentValueDiffersFromGoal || hasNewConfig) {
        // Convert regular values into animated values, ALWAYS re-use if possible
        if (isNumber || isString) parent = interpolation$$1 = entry.parent || new AnimatedValue(fromValue);else if (isArray) parent = interpolation$$1 = entry.parent || new AnimatedValueArray(fromValue);else if (isInterpolation) {
          let prev = entry.interpolation && entry.interpolation.calc(entry.parent.value);
          prev = prev !== void 0 && !reset ? prev : fromValue;

          if (entry.parent) {
            parent = entry.parent;
            parent.setValue(0, false);
          } else parent = new AnimatedValue(0);

          const range = {
            output: [prev, value]
          };

          if (entry.interpolation) {
            interpolation$$1 = entry.interpolation;
            entry.interpolation.updateConfig(range);
          } else interpolation$$1 = parent.interpolate(range);
        }
        toValues = toArray$1(target ? toValue.getPayload() : toValue);
        animatedValues = toArray$1(parent.getPayload());
        if (reset && !isInterpolation) parent.setValue(fromValue, false);
        this.hasChanged = true; // Reset animated values

        animatedValues.forEach(value => {
          value.startPosition = value.value;
          value.lastPosition = value.value;
          value.lastVelocity = isActive ? value.lastVelocity : undefined;
          value.lastTime = isActive ? value.lastTime : undefined;
          value.startTime = now();
          value.done = false;
          value.animatedStyles.clear();
        }); // Set immediate values

        if (callProp(immediate, name)) {
          parent.setValue(isInterpolation ? toValue : value, false);
        }

        return _extends$3({}, acc, {
          [name]: _extends$3({}, entry, {
            name,
            parent,
            interpolation: interpolation$$1,
            animatedValues,
            toValues,
            previous: newValue,
            config: toConfig,
            fromValues: toArray$1(parent.getValue()),
            immediate: callProp(immediate, name),
            initialVelocity: withDefault(toConfig.velocity, 0),
            clamp: withDefault(toConfig.clamp, false),
            precision: withDefault(toConfig.precision, 0.01),
            tension: withDefault(toConfig.tension, 170),
            friction: withDefault(toConfig.friction, 26),
            mass: withDefault(toConfig.mass, 1),
            duration: toConfig.duration,
            easing: withDefault(toConfig.easing, t => t),
            decay: toConfig.decay
          })
        });
      } else {
        if (!currentValueDiffersFromGoal) {
          // So ... the current target value (newValue) appears to be different from the previous value,
          // which normally constitutes an update, but the actual value (currentValue) matches the target!
          // In order to resolve this without causing an animation update we silently flag the animation as done,
          // which it technically is. Interpolations also needs a config update with their target set to 1.
          if (isInterpolation) {
            parent.setValue(1, false);
            interpolation$$1.updateConfig({
              output: [newValue, newValue]
            });
          }

          parent.done = true;
          this.hasChanged = true;
          return _extends$3({}, acc, {
            [name]: _extends$3({}, acc[name], {
              previous: newValue
            })
          });
        }

        return acc;
      }
    }, this.animations);

    if (this.hasChanged) {
      // Make animations available to frameloop
      this.configs = Object.values(this.animations);
      this.values = {};
      this.interpolations = {};

      for (let key in this.animations) {
        this.interpolations[key] = this.animations[key].interpolation;
        this.values[key] = this.animations[key].interpolation.getValue();
      }
    }

    return this;
  }

  destroy() {
    this.stop();
    this.props = {};
    this.merged = {};
    this.animations = {};
    this.interpolations = {};
    this.values = {};
    this.configs = [];
    this.local = 0;
  }

}

/** API
 * const transitions = useTransition(items, itemKeys, { ... })
 * const [transitions, update] = useTransition(items, itemKeys, () => ({ ... }))
 */

let guid = 0;
const ENTER = 'enter';
const LEAVE = 'leave';
const UPDATE = 'update';

const mapKeys = (items, keys) => (typeof keys === 'function' ? items.map(keys) : toArray$1(keys)).map(String);

const get$3 = props => {
  let items = props.items,
      _props$keys = props.keys,
      keys = _props$keys === void 0 ? item => item : _props$keys,
      rest = _objectWithoutPropertiesLoose$2(props, ["items", "keys"]);

  items = toArray$1(items !== void 0 ? items : null);
  return _extends$3({
    items,
    keys: mapKeys(items, keys)
  }, rest);
};

function useTransition(input, keyTransform, config) {
  const props = _extends$3({
    items: input,
    keys: keyTransform || (i => i)
  }, config);

  const _get = get$3(props),
        _get$lazy = _get.lazy,
        lazy = _get$lazy === void 0 ? false : _get$lazy,
        _get$unique = _get.unique,
        _get$reset = _get.reset,
        reset = _get$reset === void 0 ? false : _get$reset,
        enter = _get.enter,
        leave = _get.leave,
        update = _get.update,
        onDestroyed = _get.onDestroyed,
        keys = _get.keys,
        items = _get.items,
        onFrame = _get.onFrame,
        _onRest = _get.onRest,
        onStart = _get.onStart,
        ref = _get.ref,
        extra = _objectWithoutPropertiesLoose$2(_get, ["lazy", "unique", "reset", "enter", "leave", "update", "onDestroyed", "keys", "items", "onFrame", "onRest", "onStart", "ref"]);

  const forceUpdate = useForceUpdate();
  const mounted = React.useRef(false);
  const state = React.useRef({
    mounted: false,
    first: true,
    deleted: [],
    current: {},
    transitions: [],
    prevProps: {},
    paused: !!props.ref,
    instances: !mounted.current && new Map(),
    forceUpdate
  });
  React.useImperativeHandle(props.ref, () => ({
    start: () => Promise.all(Array.from(state.current.instances).map((_ref) => {
      let c = _ref[1];
      return new Promise(r => c.start(r));
    })),
    stop: finished => Array.from(state.current.instances).forEach((_ref2) => {
      let c = _ref2[1];
      return c.stop(finished);
    }),

    get controllers() {
      return Array.from(state.current.instances).map((_ref3) => {
        let c = _ref3[1];
        return c;
      });
    }

  })); // Update state

  state.current = diffItems(state.current, props);

  if (state.current.changed) {
    // Update state
    state.current.transitions.forEach(transition => {
      const slot = transition.slot,
            from = transition.from,
            to = transition.to,
            config = transition.config,
            trail = transition.trail,
            key = transition.key,
            item = transition.item;
      if (!state.current.instances.has(key)) state.current.instances.set(key, new Controller()); // update the map object

      const ctrl = state.current.instances.get(key);

      const newProps = _extends$3({}, extra, {
        to,
        from,
        config,
        ref,
        onRest: values => {
          if (state.current.mounted) {
            if (transition.destroyed) {
              // If no ref is given delete destroyed items immediately
              if (!ref && !lazy) cleanUp(state, key);
              if (onDestroyed) onDestroyed(item);
            } // A transition comes to rest once all its springs conclude


            const curInstances = Array.from(state.current.instances);
            const active = curInstances.some((_ref4) => {
              let c = _ref4[1];
              return !c.idle;
            });
            if (!active && (ref || lazy) && state.current.deleted.length > 0) cleanUp(state);
            if (_onRest) _onRest(item, slot, values);
          }
        },
        onStart: onStart && (() => onStart(item, slot)),
        onFrame: onFrame && (values => onFrame(item, slot, values)),
        delay: trail,
        reset: reset && slot === ENTER // Update controller

      });

      ctrl.update(newProps);
      if (!state.current.paused) ctrl.start();
    });
  }

  React.useEffect(() => {
    state.current.mounted = mounted.current = true;
    return () => {
      state.current.mounted = mounted.current = false;
      Array.from(state.current.instances).map((_ref5) => {
        let c = _ref5[1];
        return c.destroy();
      });
      state.current.instances.clear();
    };
  }, []);
  return state.current.transitions.map((_ref6) => {
    let item = _ref6.item,
        slot = _ref6.slot,
        key = _ref6.key;
    return {
      item,
      key,
      state: slot,
      props: state.current.instances.get(key).getValues()
    };
  });
}

function cleanUp(state, filterKey) {
  const deleted = state.current.deleted;

  for (let _ref7 of deleted) {
    let key = _ref7.key;

    const filter = t => t.key !== key;

    if (is.und(filterKey) || filterKey === key) {
      state.current.instances.delete(key);
      state.current.transitions = state.current.transitions.filter(filter);
      state.current.deleted = state.current.deleted.filter(filter);
    }
  }

  state.current.forceUpdate();
}

function diffItems(_ref8, props) {
  let first = _ref8.first,
      prevProps = _ref8.prevProps,
      state = _objectWithoutPropertiesLoose$2(_ref8, ["first", "prevProps"]);

  let _get2 = get$3(props),
      items = _get2.items,
      keys = _get2.keys,
      initial = _get2.initial,
      from = _get2.from,
      enter = _get2.enter,
      leave = _get2.leave,
      update = _get2.update,
      _get2$trail = _get2.trail,
      trail = _get2$trail === void 0 ? 0 : _get2$trail,
      unique = _get2.unique,
      config = _get2.config,
      _get2$order = _get2.order,
      order = _get2$order === void 0 ? [ENTER, LEAVE, UPDATE] : _get2$order;

  let _get3 = get$3(prevProps),
      _keys = _get3.keys,
      _items = _get3.items;

  let current = _extends$3({}, state.current);

  let deleted = [...state.deleted]; // Compare next keys with current keys

  let currentKeys = Object.keys(current);
  let currentSet = new Set(currentKeys);
  let nextSet = new Set(keys);
  let added = keys.filter(item => !currentSet.has(item));
  let removed = state.transitions.filter(item => !item.destroyed && !nextSet.has(item.originalKey)).map(i => i.originalKey);
  let updated = keys.filter(item => currentSet.has(item));
  let delay = -trail;

  while (order.length) {
    const changeType = order.shift();

    switch (changeType) {
      case ENTER:
        {
          added.forEach((key, index) => {
            // In unique mode, remove fading out transitions if their key comes in again
            if (unique && deleted.find(d => d.originalKey === key)) deleted = deleted.filter(t => t.originalKey !== key);
            const keyIndex = keys.indexOf(key);
            const item = items[keyIndex];
            const slot = first && initial !== void 0 ? 'initial' : ENTER;
            current[key] = {
              slot,
              originalKey: key,
              key: unique ? String(key) : guid++,
              item,
              trail: delay = delay + trail,
              config: callProp(config, item, slot),
              from: callProp(first ? initial !== void 0 ? initial || {} : from : from, item),
              to: callProp(enter, item)
            };
          });
          break;
        }

      case LEAVE:
        {
          removed.forEach(key => {
            const keyIndex = _keys.indexOf(key);

            const item = _items[keyIndex];
            const slot = LEAVE;
            deleted.unshift(_extends$3({}, current[key], {
              slot,
              destroyed: true,
              left: _keys[Math.max(0, keyIndex - 1)],
              right: _keys[Math.min(_keys.length, keyIndex + 1)],
              trail: delay = delay + trail,
              config: callProp(config, item, slot),
              to: callProp(leave, item)
            }));
            delete current[key];
          });
          break;
        }

      case UPDATE:
        {
          updated.forEach(key => {
            const keyIndex = keys.indexOf(key);
            const item = items[keyIndex];
            const slot = UPDATE;
            current[key] = _extends$3({}, current[key], {
              item,
              slot,
              trail: delay = delay + trail,
              config: callProp(config, item, slot),
              to: callProp(update, item)
            });
          });
          break;
        }
    }
  }

  let out = keys.map(key => current[key]); // This tries to restore order for deleted items by finding their last known siblings
  // only using the left sibling to keep order placement consistent for all deleted items

  deleted.forEach((_ref9) => {
    let left = _ref9.left,
        right = _ref9.right,
        item = _objectWithoutPropertiesLoose$2(_ref9, ["left", "right"]);

    let pos; // Was it the element on the left, if yes, move there ...

    if ((pos = out.findIndex(t => t.originalKey === left)) !== -1) pos += 1; // And if nothing else helps, move it to the start ¯\_(ツ)_/¯

    pos = Math.max(0, pos);
    out = [...out.slice(0, pos), item, ...out.slice(pos)];
  });
  return _extends$3({}, state, {
    changed: added.length || removed.length || updated.length,
    first: first && added.length === 0,
    transitions: out,
    current,
    deleted,
    prevProps: props
  });
}

class AnimatedStyle extends AnimatedObject {
  constructor(style) {
    if (style === void 0) {
      style = {};
    }

    super();

    if (style.transform && !(style.transform instanceof Animated)) {
      style = applyAnimatedValues.transform(style);
    }

    this.payload = style;
  }

}

// http://www.w3.org/TR/css3-color/#svg-color
const colors$1 = {
  transparent: 0x00000000,
  aliceblue: 0xf0f8ffff,
  antiquewhite: 0xfaebd7ff,
  aqua: 0x00ffffff,
  aquamarine: 0x7fffd4ff,
  azure: 0xf0ffffff,
  beige: 0xf5f5dcff,
  bisque: 0xffe4c4ff,
  black: 0x000000ff,
  blanchedalmond: 0xffebcdff,
  blue: 0x0000ffff,
  blueviolet: 0x8a2be2ff,
  brown: 0xa52a2aff,
  burlywood: 0xdeb887ff,
  burntsienna: 0xea7e5dff,
  cadetblue: 0x5f9ea0ff,
  chartreuse: 0x7fff00ff,
  chocolate: 0xd2691eff,
  coral: 0xff7f50ff,
  cornflowerblue: 0x6495edff,
  cornsilk: 0xfff8dcff,
  crimson: 0xdc143cff,
  cyan: 0x00ffffff,
  darkblue: 0x00008bff,
  darkcyan: 0x008b8bff,
  darkgoldenrod: 0xb8860bff,
  darkgray: 0xa9a9a9ff,
  darkgreen: 0x006400ff,
  darkgrey: 0xa9a9a9ff,
  darkkhaki: 0xbdb76bff,
  darkmagenta: 0x8b008bff,
  darkolivegreen: 0x556b2fff,
  darkorange: 0xff8c00ff,
  darkorchid: 0x9932ccff,
  darkred: 0x8b0000ff,
  darksalmon: 0xe9967aff,
  darkseagreen: 0x8fbc8fff,
  darkslateblue: 0x483d8bff,
  darkslategray: 0x2f4f4fff,
  darkslategrey: 0x2f4f4fff,
  darkturquoise: 0x00ced1ff,
  darkviolet: 0x9400d3ff,
  deeppink: 0xff1493ff,
  deepskyblue: 0x00bfffff,
  dimgray: 0x696969ff,
  dimgrey: 0x696969ff,
  dodgerblue: 0x1e90ffff,
  firebrick: 0xb22222ff,
  floralwhite: 0xfffaf0ff,
  forestgreen: 0x228b22ff,
  fuchsia: 0xff00ffff,
  gainsboro: 0xdcdcdcff,
  ghostwhite: 0xf8f8ffff,
  gold: 0xffd700ff,
  goldenrod: 0xdaa520ff,
  gray: 0x808080ff,
  green: 0x008000ff,
  greenyellow: 0xadff2fff,
  grey: 0x808080ff,
  honeydew: 0xf0fff0ff,
  hotpink: 0xff69b4ff,
  indianred: 0xcd5c5cff,
  indigo: 0x4b0082ff,
  ivory: 0xfffff0ff,
  khaki: 0xf0e68cff,
  lavender: 0xe6e6faff,
  lavenderblush: 0xfff0f5ff,
  lawngreen: 0x7cfc00ff,
  lemonchiffon: 0xfffacdff,
  lightblue: 0xadd8e6ff,
  lightcoral: 0xf08080ff,
  lightcyan: 0xe0ffffff,
  lightgoldenrodyellow: 0xfafad2ff,
  lightgray: 0xd3d3d3ff,
  lightgreen: 0x90ee90ff,
  lightgrey: 0xd3d3d3ff,
  lightpink: 0xffb6c1ff,
  lightsalmon: 0xffa07aff,
  lightseagreen: 0x20b2aaff,
  lightskyblue: 0x87cefaff,
  lightslategray: 0x778899ff,
  lightslategrey: 0x778899ff,
  lightsteelblue: 0xb0c4deff,
  lightyellow: 0xffffe0ff,
  lime: 0x00ff00ff,
  limegreen: 0x32cd32ff,
  linen: 0xfaf0e6ff,
  magenta: 0xff00ffff,
  maroon: 0x800000ff,
  mediumaquamarine: 0x66cdaaff,
  mediumblue: 0x0000cdff,
  mediumorchid: 0xba55d3ff,
  mediumpurple: 0x9370dbff,
  mediumseagreen: 0x3cb371ff,
  mediumslateblue: 0x7b68eeff,
  mediumspringgreen: 0x00fa9aff,
  mediumturquoise: 0x48d1ccff,
  mediumvioletred: 0xc71585ff,
  midnightblue: 0x191970ff,
  mintcream: 0xf5fffaff,
  mistyrose: 0xffe4e1ff,
  moccasin: 0xffe4b5ff,
  navajowhite: 0xffdeadff,
  navy: 0x000080ff,
  oldlace: 0xfdf5e6ff,
  olive: 0x808000ff,
  olivedrab: 0x6b8e23ff,
  orange: 0xffa500ff,
  orangered: 0xff4500ff,
  orchid: 0xda70d6ff,
  palegoldenrod: 0xeee8aaff,
  palegreen: 0x98fb98ff,
  paleturquoise: 0xafeeeeff,
  palevioletred: 0xdb7093ff,
  papayawhip: 0xffefd5ff,
  peachpuff: 0xffdab9ff,
  peru: 0xcd853fff,
  pink: 0xffc0cbff,
  plum: 0xdda0ddff,
  powderblue: 0xb0e0e6ff,
  purple: 0x800080ff,
  rebeccapurple: 0x663399ff,
  red: 0xff0000ff,
  rosybrown: 0xbc8f8fff,
  royalblue: 0x4169e1ff,
  saddlebrown: 0x8b4513ff,
  salmon: 0xfa8072ff,
  sandybrown: 0xf4a460ff,
  seagreen: 0x2e8b57ff,
  seashell: 0xfff5eeff,
  sienna: 0xa0522dff,
  silver: 0xc0c0c0ff,
  skyblue: 0x87ceebff,
  slateblue: 0x6a5acdff,
  slategray: 0x708090ff,
  slategrey: 0x708090ff,
  snow: 0xfffafaff,
  springgreen: 0x00ff7fff,
  steelblue: 0x4682b4ff,
  tan: 0xd2b48cff,
  teal: 0x008080ff,
  thistle: 0xd8bfd8ff,
  tomato: 0xff6347ff,
  turquoise: 0x40e0d0ff,
  violet: 0xee82eeff,
  wheat: 0xf5deb3ff,
  white: 0xffffffff,
  whitesmoke: 0xf5f5f5ff,
  yellow: 0xffff00ff,
  yellowgreen: 0x9acd32ff
};

// const INTEGER = '[-+]?\\d+';
const NUMBER = '[-+]?\\d*\\.?\\d+';
const PERCENTAGE = NUMBER + '%';

function call() {
  for (var _len = arguments.length, parts = new Array(_len), _key = 0; _key < _len; _key++) {
    parts[_key] = arguments[_key];
  }

  return '\\(\\s*(' + parts.join(')\\s*,\\s*(') + ')\\s*\\)';
}

const rgb = new RegExp('rgb' + call(NUMBER, NUMBER, NUMBER));
const rgba = new RegExp('rgba' + call(NUMBER, NUMBER, NUMBER, NUMBER));
const hsl = new RegExp('hsl' + call(NUMBER, PERCENTAGE, PERCENTAGE));
const hsla = new RegExp('hsla' + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER));
const hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
const hex4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
const hex6 = /^#([0-9a-fA-F]{6})$/;
const hex8 = /^#([0-9a-fA-F]{8})$/;

/*
https://github.com/react-community/normalize-css-color

BSD 3-Clause License

Copyright (c) 2016, React Community
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

* Neither the name of the copyright holder nor the names of its
  contributors may be used to endorse or promote products derived from
  this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
function normalizeColor(color) {
  let match;

  if (typeof color === 'number') {
    return color >>> 0 === color && color >= 0 && color <= 0xffffffff ? color : null;
  } // Ordered based on occurrences on Facebook codebase


  if (match = hex6.exec(color)) return parseInt(match[1] + 'ff', 16) >>> 0;
  if (colors$1.hasOwnProperty(color)) return colors$1[color];

  if (match = rgb.exec(color)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    0x000000ff) >>> // a
    0;
  }

  if (match = rgba.exec(color)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    parse1(match[4])) >>> // a
    0;
  }

  if (match = hex3.exec(color)) {
    return parseInt(match[1] + match[1] + // r
    match[2] + match[2] + // g
    match[3] + match[3] + // b
    'ff', // a
    16) >>> 0;
  } // https://drafts.csswg.org/css-color-4/#hex-notation


  if (match = hex8.exec(color)) return parseInt(match[1], 16) >>> 0;

  if (match = hex4.exec(color)) {
    return parseInt(match[1] + match[1] + // r
    match[2] + match[2] + // g
    match[3] + match[3] + // b
    match[4] + match[4], // a
    16) >>> 0;
  }

  if (match = hsl.exec(color)) {
    return (hslToRgb(parse360(match[1]), // h
    parsePercentage(match[2]), // s
    parsePercentage(match[3]) // l
    ) | 0x000000ff) >>> // a
    0;
  }

  if (match = hsla.exec(color)) {
    return (hslToRgb(parse360(match[1]), // h
    parsePercentage(match[2]), // s
    parsePercentage(match[3]) // l
    ) | parse1(match[4])) >>> // a
    0;
  }

  return null;
}

function hue2rgb(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}

function hslToRgb(h, s, l) {
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const r = hue2rgb(p, q, h + 1 / 3);
  const g = hue2rgb(p, q, h);
  const b = hue2rgb(p, q, h - 1 / 3);
  return Math.round(r * 255) << 24 | Math.round(g * 255) << 16 | Math.round(b * 255) << 8;
}

function parse255(str) {
  const int = parseInt(str, 10);
  if (int < 0) return 0;
  if (int > 255) return 255;
  return int;
}

function parse360(str) {
  const int = parseFloat(str);
  return (int % 360 + 360) % 360 / 360;
}

function parse1(str) {
  const num = parseFloat(str);
  if (num < 0) return 0;
  if (num > 1) return 255;
  return Math.round(num * 255);
}

function parsePercentage(str) {
  // parseFloat conveniently ignores the final %
  const int = parseFloat(str);
  if (int < 0) return 0;
  if (int > 100) return 1;
  return int / 100;
}

function colorToRgba(input) {
  let int32Color = normalizeColor(input);
  if (int32Color === null) return input;
  int32Color = int32Color || 0;
  let r = (int32Color & 0xff000000) >>> 24;
  let g = (int32Color & 0x00ff0000) >>> 16;
  let b = (int32Color & 0x0000ff00) >>> 8;
  let a = (int32Color & 0x000000ff) / 255;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
} // Problem: https://github.com/animatedjs/animated/pull/102
// Solution: https://stackoverflow.com/questions/638565/parsing-scientific-notation-sensibly/658662


const stringShapeRegex = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g; // Covers rgb, rgba, hsl, hsla
// Taken from https://gist.github.com/olmokramer/82ccce673f86db7cda5e

const colorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi; // Covers color names (transparent, blue, etc.)

const colorNamesRegex = new RegExp(`(${Object.keys(colors$1).join('|')})`, 'g');
/**
 * Supports string shapes by extracting numbers so new values can be computed,
 * and recombines those values into new strings of the same shape.  Supports
 * things like:
 *
 *   rgba(123, 42, 99, 0.36)           // colors
 *   -45deg                            // values with units
 *   0 2px 2px 0px rgba(0, 0, 0, 0.12) // box shadows
 */

const createStringInterpolator = config => {
  // Replace colors with rgba
  const outputRange = config.output.map(rangeValue => rangeValue.replace(colorRegex, colorToRgba)).map(rangeValue => rangeValue.replace(colorNamesRegex, colorToRgba));
  const outputRanges = outputRange[0].match(stringShapeRegex).map(() => []);
  outputRange.forEach(value => {
    value.match(stringShapeRegex).forEach((number, i) => outputRanges[i].push(+number));
  });
  const interpolations = outputRange[0].match(stringShapeRegex).map((_value, i) => createInterpolator(_extends$3({}, config, {
    output: outputRanges[i]
  })));
  return input => {
    let i = 0;
    return outputRange[0] // 'rgba(0, 100, 200, 0)'
    // ->
    // 'rgba(${interpolations[0](input)}, ${interpolations[1](input)}, ...'
    .replace(stringShapeRegex, () => interpolations[i++](input)) // rgba requires that the r,g,b are integers.... so we want to round them, but we *dont* want to
    // round the opacity (4th column).
    .replace(/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, (_, p1, p2, p3, p4) => `rgba(${Math.round(p1)}, ${Math.round(p2)}, ${Math.round(p3)}, ${p4})`);
  };
};

let isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};

const prefixKey = (prefix, key) => prefix + key.charAt(0).toUpperCase() + key.substring(1);

const prefixes = ['Webkit', 'Ms', 'Moz', 'O'];
isUnitlessNumber = Object.keys(isUnitlessNumber).reduce((acc, prop) => {
  prefixes.forEach(prefix => acc[prefixKey(prefix, prop)] = acc[prop]);
  return acc;
}, isUnitlessNumber);

function dangerousStyleValue(name, value, isCustomProperty) {
  if (value == null || typeof value === 'boolean' || value === '') return '';
  if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers

  return ('' + value).trim();
}

const attributeCache = {};
injectCreateAnimatedStyle(style => new AnimatedStyle(style));
injectStringInterpolator(createStringInterpolator);
injectColorNames(colors$1);
injectApplyAnimatedValues((instance, props) => {
  if (instance.nodeType && instance.setAttribute !== undefined) {
    const style = props.style,
          children = props.children,
          scrollTop = props.scrollTop,
          scrollLeft = props.scrollLeft,
          attributes = _objectWithoutPropertiesLoose$2(props, ["style", "children", "scrollTop", "scrollLeft"]);

    const filter = instance.nodeName === 'filter' || instance.parentNode && instance.parentNode.nodeName === 'filter';
    if (scrollTop !== void 0) instance.scrollTop = scrollTop;
    if (scrollLeft !== void 0) instance.scrollLeft = scrollLeft; // Set textContent, if children is an animatable value

    if (children !== void 0) instance.textContent = children; // Set styles ...

    for (let styleName in style) {
      if (!style.hasOwnProperty(styleName)) continue;
      var isCustomProperty = styleName.indexOf('--') === 0;
      var styleValue = dangerousStyleValue(styleName, style[styleName], isCustomProperty);
      if (styleName === 'float') styleName = 'cssFloat';
      if (isCustomProperty) instance.style.setProperty(styleName, styleValue);else instance.style[styleName] = styleValue;
    } // Set attributes ...


    for (let name in attributes) {
      // Attributes are written in dash case
      const dashCase = filter ? name : attributeCache[name] || (attributeCache[name] = name.replace(/([A-Z])/g, n => '-' + n.toLowerCase()));
      if (typeof instance.getAttribute(dashCase) !== 'undefined') instance.setAttribute(dashCase, attributes[name]);
    }

    return;
  } else return false;
}, style => style);

const domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];
// Extend animated with all the available THREE elements
const apply = merge$1(createAnimatedComponent, false);
const extendedAnimated = apply(domElements);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties$2(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var cleanProps = function cleanProps(props) {
  var initialState = props.initialState,
      getInitialState = props.getInitialState,
      refs = props.refs,
      getRefs = props.getRefs,
      didMount = props.didMount,
      didUpdate = props.didUpdate,
      willUnmount = props.willUnmount,
      getSnapshotBeforeUpdate = props.getSnapshotBeforeUpdate,
      shouldUpdate = props.shouldUpdate,
      render = props.render,
      rest = _objectWithoutProperties$2(props, ["initialState", "getInitialState", "refs", "getRefs", "didMount", "didUpdate", "willUnmount", "getSnapshotBeforeUpdate", "shouldUpdate", "render"]);

  return rest;
};

var Component = function (_React$Component) {
  _inherits(Component, _React$Component);

  function Component() {
    var _temp, _this, _ret;

    _classCallCheck(this, Component);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  Component.prototype.getArgs = function getArgs() {
    var state = this.state,
        props = this.props,
        setState = this._setState,
        forceUpdate = this._forceUpdate,
        refs = this._refs;

    return {
      state: state,
      props: cleanProps(props),
      refs: refs,
      setState: setState,
      forceUpdate: forceUpdate
    };
  };

  Component.prototype.componentDidMount = function componentDidMount() {
    if (this.props.didMount) this.props.didMount(this.getArgs());
  };

  Component.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    if (this.props.shouldUpdate) return this.props.shouldUpdate({
      props: this.props,
      state: this.state,
      nextProps: cleanProps(nextProps),
      nextState: nextState
    });else return true;
  };

  Component.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this.props.willUnmount) this.props.willUnmount({
      state: this.state,
      props: cleanProps(this.props),
      refs: this._refs
    });
  };

  Component.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.didUpdate) this.props.didUpdate(Object.assign(this.getArgs(), {
      prevProps: cleanProps(prevProps),
      prevState: prevState
    }), snapshot);
  };

  Component.prototype.getSnapshotBeforeUpdate = function getSnapshotBeforeUpdate(prevProps, prevState) {
    if (this.props.getSnapshotBeforeUpdate) {
      return this.props.getSnapshotBeforeUpdate(Object.assign(this.getArgs(), {
        prevProps: cleanProps(prevProps),
        prevState: prevState
      }));
    } else {
      return null;
    }
  };

  Component.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        render = _props.render;

    return render ? render(this.getArgs()) : typeof children === "function" ? children(this.getArgs()) : children || null;
  };

  return Component;
}(React__default.Component);

Component.defaultProps = {
  getInitialState: function getInitialState() {},
  getRefs: function getRefs() {
    return {};
  }
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.state = this.props.initialState || this.props.getInitialState(this.props);
  this._refs = this.props.refs || this.props.getRefs(this.getArgs());

  this._setState = function () {
    return _this2.setState.apply(_this2, arguments);
  };

  this._forceUpdate = function () {
    return _this2.forceUpdate.apply(_this2, arguments);
  };
};

process.env.NODE_ENV !== "production" ? Component.propTypes = {
  initialState: propTypes_1,
  getInitialState: propTypes_2,
  refs: propTypes_1,
  getRefs: propTypes_2,
  didMount: propTypes_2,
  didUpdate: propTypes_2,
  willUnmount: propTypes_2,
  getSnapshotBeforeUpdate: propTypes_2,
  shouldUpdate: propTypes_2,
  render: propTypes_2,
  children: propTypes_4([propTypes_2, propTypes_6])
} : void 0;

var _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var style = {
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  width: "1px",
  margin: "-1px",
  padding: 0,
  overflow: "hidden",
  position: "absolute"
};

var VisuallyHidden$1 = (function (props) {
  return React__default.createElement("div", _extends$4({ style: style }, props));
});

var _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties$3(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// singleton state is fine because you don't server render
// an alert (SRs don't read them on first load anyway)
var keys = {
  polite: -1,
  assertive: -1
};

var elements = {
  polite: {},
  assertive: {}
};

var liveRegions = {
  polite: null,
  assertive: null
};

var renderTimer = null;

var renderAlerts = function renderAlerts() {
  clearTimeout(renderTimer);

  renderTimer = setTimeout(function () {
    Object.keys(elements).forEach(function (type) {
      var container = liveRegions[type];
      if (container) {
        reactDom.render(React__default.createElement(
          VisuallyHidden$1,
          null,
          React__default.createElement(
            "div",
            {
              role: type === "assertive" ? "alert" : "status",
              "aria-live": type
            },
            Object.keys(elements[type]).map(function (key) {
              return React__default.cloneElement(elements[type][key], {
                key: key
              });
            })
          )
        ), liveRegions[type]);
      }
    });
  }, 500);
};

var createMirror = function createMirror(type) {
  var key = ++keys[type];

  var mount = function mount(element) {
    if (liveRegions[type]) {
      elements[type][key] = element;
      renderAlerts();
    } else {
      var _node = document.createElement("div");
      _node.setAttribute("data-reach-live-" + type, "true");
      liveRegions[type] = _node;
      document.body.appendChild(liveRegions[type]);
      mount(element);
    }
  };

  var update = function update(element) {
    elements[type][key] = element;
    renderAlerts();
  };

  var unmount = function unmount(element) {
    delete elements[type][key];
    renderAlerts();
  };

  return { mount: mount, update: update, unmount: unmount };
};

var Alert$1 = function Alert(_ref) {
  var children = _ref.children,
      type = _ref.type,
      props = _objectWithoutProperties$3(_ref, ["children", "type"]);

  var element = React__default.createElement(
    "div",
    _extends$5({}, props, { "data-reach-alert": true }),
    children
  );
  return React__default.createElement(Component, {
    type: type,
    getRefs: function getRefs() {
      return { mirror: createMirror(type) };
    },
    didMount: function didMount(_ref2) {
      var refs = _ref2.refs;
      return refs.mirror.mount(element);
    },
    didUpdate: function didUpdate(_ref3) {
      var refs = _ref3.refs,
          prevProps = _ref3.prevProps;

      if (prevProps.type !== type) {
        refs.mirror.unmount();
        refs.mirror = createMirror(type);
        refs.mirror.mount(element);
      } else {
        refs.mirror.update(element, prevProps.type, type);
      }
    },
    willUnmount: function willUnmount(_ref4) {
      var refs = _ref4.refs;
      return refs.mirror.unmount(element);
    },
    children: element
  });
};

process.env.NODE_ENV !== "production" ? Alert$1.propTypes = {
  children: propTypes_6,
  type: propTypes_7
} : void 0;

Alert$1.defaultProps = {
  type: "polite"
};

const Alert$2 = ({ id, title, onClose }) => {
    return (React.createElement("div", { id: id, className: "Toaster__alert" },
        typeof title === "string" ? (React.createElement("div", { className: "Toaster__alert_text" }, title)) : (title),
        onClose && React.createElement(Close, { onClose: onClose })));
};
const Close = ({ onClose }) => (React.createElement("button", { className: "Toaster__alert_close", type: "button", "aria-label": "Close", onClick: onClose },
    React.createElement("span", { "aria-hidden": "true" }, "\u00D7")));

function useTimeout(callback, delay) {
    const savedCallback = React.useRef();
    // Remember the latest callback.
    React.useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);
    // Set up the interval.
    React.useEffect(() => {
        function tick() {
            if (savedCallback.current) {
                savedCallback.current();
            }
        }
        if (delay !== null) {
            let id = setTimeout(tick, delay);
            return () => clearTimeout(id);
        }
    }, [delay]);
}

const getStyle$1 = (position) => {
    let style = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    };
    if (position.includes("right")) {
        style.alignItems = "flex-end";
    }
    else if (position.includes("left")) {
        style.alignItems = "flex-start";
    }
    return style;
};
const Message = ({ id, message, position, onRequestRemove, requestClose = false, duration = 30000 }) => {
    const container = React.useRef(null);
    const [timeout, setTimeout] = React.useState(duration);
    const [localShow, setLocalShow] = React.useState(true);
    const isFromTop = position === "top-left" || position === "top-right" || position === "top";
    useTimeout(close, timeout);
    const animation = {
        config: { mass: 1, tension: 185, friction: 26 },
        from: {
            opacity: 1,
            height: 0,
            transform: `translateY(${isFromTop ? "-100%" : 0}) scale(1)`
        },
        enter: () => (next) => next({
            opacity: 1,
            height: container.current.getBoundingClientRect().height,
            transform: `translateY(0) scale(1)`
        }),
        leave: {
            opacity: 0,
            height: 0,
            transform: `translateY(0 scale(0.9)`
        },
        onRest
    };
    const transition = useTransition(localShow, null, animation);
    const style = React.useMemo(() => getStyle$1(position), [position]);
    function onMouseEnter() {
        setTimeout(null);
    }
    function onMouseLeave() {
        setTimeout(duration);
    }
    function onRest() {
        if (!localShow) {
            onRequestRemove();
        }
    }
    function close() {
        setLocalShow(false);
    }
    React.useEffect(() => {
        if (requestClose) {
            setLocalShow(false);
        }
    }, [requestClose]);
    function renderMessage() {
        if (typeof message === "string" || React.isValidElement(message)) {
            return React.createElement(Alert$2, { id: id, title: message, onClose: close });
        }
        if (typeof message === "function") {
            return message({
                id,
                onClose: close
            });
        }
        return null;
    }
    return (React.createElement(React.Fragment, null, transition.map(({ key, item, props }) => item && (React.createElement(extendedAnimated.div, { key: key, className: "Toaster__message", onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave, style: Object.assign({ opacity: props.opacity, height: props.height }, style) },
        React.createElement(extendedAnimated.div, { style: {
                transform: props.transform,
                pointerEvents: "auto"
            }, ref: container, className: "Toaster__message-wrapper" },
            React.createElement(Alert$1, null, renderMessage())))))));
};

const defaultState = {
    top: [],
    "top-left": [],
    "top-right": [],
    "bottom-left": [],
    bottom: [],
    "bottom-right": []
};
class ToastManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = defaultState;
        this.notify = (message, options) => {
            const toast = this.createToastState(message, options);
            const { position } = toast;
            // prepend the toast for toasts positioned at the top of
            // the screen, otherwise append it.
            const isTop = position.includes("top");
            this.setState(prev => {
                return Object.assign({}, prev, { [position]: isTop
                        ? [toast, ...prev[position]]
                        : [...prev[position], toast] });
            });
            return { id: toast.id, position: toast.position };
        };
        this.closeAll = () => {
            Object.keys(this.state).forEach(pos => {
                const p = pos;
                const position = this.state[p];
                position.forEach((toast) => {
                    this.closeToast(toast.id, p);
                });
            });
        };
        this.createToastState = (message, options) => {
            const id = ++ToastManager.idCounter;
            // a bit messy, but object.position returns a number because
            // it's a method argument.
            const position = options.hasOwnProperty("position") && typeof options.position === "string"
                ? options.position
                : "top";
            return {
                id,
                message,
                position,
                showing: true,
                duration: typeof options.duration === "undefined" ? 5000 : options.duration,
                onRequestRemove: () => this.removeToast(String(id), position),
                type: options.type
            };
        };
        this.closeToast = (id, position) => {
            this.setState(prev => {
                return Object.assign({}, prev, { [position]: prev[position].map(toast => {
                        if (toast.id !== id)
                            return toast;
                        return Object.assign({}, toast, { requestClose: true });
                    }) });
            });
        };
        // actually fully remove the toast
        this.removeToast = (id, position) => {
            this.setState(prev => {
                return Object.assign({}, prev, { [position]: prev[position].filter(toast => toast.id !== id) });
            });
        };
        this.getStyle = (position) => {
            let style = {
                maxWidth: "560px",
                position: "fixed",
                zIndex: 5500,
                pointerEvents: "none"
            };
            if (position === "top" || position === "bottom") {
                style.margin = "0 auto";
                style.textAlign = "center";
            }
            if (position.includes("top")) {
                style.top = 0;
            }
            if (position.includes("bottom")) {
                style.bottom = 0;
            }
            if (!position.includes("left")) {
                style.right = 0;
            }
            if (!position.includes("right")) {
                style.left = 0;
            }
            return style;
        };
        props.notify(this.notify, this.closeAll, this.closeToast);
    }
    render() {
        return Object.keys(this.state).map(position => {
            const pos = position;
            const toasts = this.state[pos];
            return (React.createElement("span", { key: position, className: "Toaster__manager-" + pos, style: this.getStyle(pos) }, toasts.map((toast) => {
                return React.createElement(Message, Object.assign({ position: pos, key: toast.id }, toast));
            })));
        });
    }
}
ToastManager.idCounter = 0;

const isBrowser$1 = typeof window !== "undefined" && typeof window.document !== "undefined";
const PORTAL_ID = "react-toast";
class Toaster {
    constructor() {
        this.closeAll = () => {
            if (this.removeAll) {
                this.removeAll();
            }
        };
        this.bindNotify = (fn, removeAll, closeToast) => {
            this.createNotification = fn;
            this.removeAll = removeAll;
            this.closeToast = closeToast;
        };
        this.notify = (message, options = {}) => {
            if (this.createNotification) {
                return this.createNotification(message, options);
            }
        };
        this.close = (id, position) => {
            if (this.closeToast) {
                this.closeToast(id, position);
            }
        };
        if (!isBrowser$1) {
            return;
        }
        let portalElement;
        const existingPortalElement = document.getElementById(PORTAL_ID);
        if (existingPortalElement) {
            portalElement = existingPortalElement;
        }
        else {
            const el = document.createElement("div");
            el.id = PORTAL_ID;
            el.className = "Toaster";
            if (document.body != null) {
                document.body.appendChild(el);
            }
            portalElement = el;
        }
        reactDom.render(React.createElement(ToastManager, { notify: this.bindNotify }), portalElement);
    }
}

const toaster = new Toaster();

var Toast = function Toast(_ref) {
  var status = _ref.status,
      variant = _ref.variant,
      id = _ref.id,
      title = _ref.title,
      isClosable = _ref.isClosable,
      onClose = _ref.onClose,
      description = _ref.description,
      props = _objectWithoutProperties(_ref, ["status", "variant", "id", "title", "isClosable", "onClose", "description"]);

  return core.jsx(Alert, _extends({
    status: status,
    variant: variant,
    id: id,
    textAlign: "left",
    boxShadow: "lg",
    rounded: "md",
    alignItems: "start",
    m: 2,
    pr: 8
  }, props), core.jsx(AlertIcon, null), core.jsx(Box, {
    flex: "1"
  }, title && core.jsx(AlertTitle, null, title), description && core.jsx(AlertDescription, null, description)), isClosable && core.jsx(CloseButton, {
    size: "sm",
    onClick: onClose,
    position: "absolute",
    right: "4px",
    top: "4px"
  }));
};

function useToast() {
  var theme = useTheme();
  var notify = React.useCallback(function (_ref2) {
    var _ref2$position = _ref2.position,
        position = _ref2$position === void 0 ? "bottom" : _ref2$position,
        _ref2$duration = _ref2.duration,
        duration = _ref2$duration === void 0 ? 5000 : _ref2$duration,
        render = _ref2.render,
        title = _ref2.title,
        description = _ref2.description,
        status = _ref2.status,
        _ref2$variant = _ref2.variant,
        variant = _ref2$variant === void 0 ? "solid" : _ref2$variant,
        isClosable = _ref2.isClosable;
    var options = {
      position: position,
      duration: duration
    };

    if (render) {
      return toaster.notify(function (_ref3) {
        var onClose = _ref3.onClose,
            id = _ref3.id;
        return core.jsx(ThemeProvider, {
          theme: theme
        }, render({
          onClose: onClose,
          id: id
        }));
      }, options);
    }

    toaster.notify(function (_ref4) {
      var onClose = _ref4.onClose,
          id = _ref4.id;
      return core.jsx(ThemeProvider, {
        theme: theme
      }, core.jsx(Toast, {
        onClose: onClose,
        id: id,
        title: title,
        description: description,
        status: status,
        variant: variant,
        isClosable: isClosable
      }));
    }, options);
  }, [theme]);
  return notify;
}

var useDisclosure = function useDisclosure(defaultIsOpen) {
  var _useState = React.useState(Boolean(defaultIsOpen)),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var onClose = React.useCallback(function () {
    return setIsOpen(false);
  }, []);
  var onOpen = React.useCallback(function () {
    return setIsOpen(true);
  }, []);
  var onToggle = React.useCallback(function () {
    return setIsOpen(function (prevIsOpen) {
      return !prevIsOpen;
    });
  }, []);
  return {
    isOpen: isOpen,
    onOpen: onOpen,
    onClose: onClose,
    onToggle: onToggle
  };
};

var wrapEvent$1 = function wrapEvent(child, theirHandler, ourHandler) {
  return function (event) {
    if (typeof child !== "string" && child.props[theirHandler]) {
      child.props[theirHandler](event);
    }

    if (!event.defaultPrevented) {
      return ourHandler(event);
    }
  };
};

var Tooltip = function Tooltip(_ref) {
  var label = _ref.label,
      ariaLabel = _ref["aria-label"],
      _ref$showDelay = _ref.showDelay,
      showDelay = _ref$showDelay === void 0 ? 0 : _ref$showDelay,
      _ref$hideDelay = _ref.hideDelay,
      hideDelay = _ref$hideDelay === void 0 ? 0 : _ref$hideDelay,
      _ref$placement = _ref.placement,
      placement = _ref$placement === void 0 ? "auto" : _ref$placement,
      children = _ref.children,
      hasArrow = _ref.hasArrow,
      closeOnClick = _ref.closeOnClick,
      defaultIsOpen = _ref.defaultIsOpen,
      shouldWrapChildren = _ref.shouldWrapChildren,
      controlledIsOpen = _ref.isOpen,
      onOpenProp = _ref.onOpen,
      onCloseProp = _ref.onClose,
      rest = _objectWithoutProperties(_ref, ["label", "aria-label", "showDelay", "hideDelay", "placement", "children", "hasArrow", "closeOnClick", "defaultIsOpen", "shouldWrapChildren", "isOpen", "onOpen", "onClose"]);

  var _useDisclosure = useDisclosure(defaultIsOpen || false),
      isOpen = _useDisclosure.isOpen,
      onClose = _useDisclosure.onClose,
      onOpen = _useDisclosure.onOpen;

  var _useRef = React.useRef(controlledIsOpen != null),
      isControlled = _useRef.current;

  var _isOpen = isControlled ? controlledIsOpen : isOpen;

  var referenceRef = React.useRef();
  var enterTimeoutRef = React.useRef();
  var exitTimeoutRef = React.useRef();

  var openWithDelay = function openWithDelay() {
    enterTimeoutRef.current = setTimeout(onOpen, showDelay);
  };

  var closeWithDelay = function closeWithDelay() {
    clearTimeout(enterTimeoutRef.current);
    exitTimeoutRef.current = setTimeout(onClose, hideDelay);
  };

  var tooltipId = "tooltip-".concat(useId());

  var handleOpen = function handleOpen() {
    if (!isControlled) {
      openWithDelay();
    }

    if (onOpenProp) {
      onOpenProp();
    }
  };

  var handleClose = function handleClose() {
    if (!isControlled) {
      closeWithDelay();
    }

    if (onCloseProp) {
      onCloseProp();
    }
  };

  var _useColorMode = useColorMode(),
      colorMode = _useColorMode.colorMode;

  var _bg = colorMode === "dark" ? "gray.300" : "gray.700";

  var _color = colorMode === "dark" ? "gray.900" : "whiteAlpha.900";

  var handleClick = wrapEvent$1(children, "onClick", function () {
    if (closeOnClick) {
      closeWithDelay();
    }
  });

  var referenceProps = _objectSpread2({
    ref: referenceRef,
    onMouseEnter: wrapEvent$1(children, "onMouseEnter", handleOpen),
    onMouseLeave: wrapEvent$1(children, "onMouseLeave", handleClose),
    onClick: handleClick,
    onFocus: wrapEvent$1(children, "onFocus", handleOpen),
    onBlur: wrapEvent$1(children, "onBlur", handleClose)
  }, _isOpen && {
    "aria-describedby": tooltipId
  });

  var clone;

  if (typeof children === "string" || shouldWrapChildren) {
    clone = core.jsx(Box, _extends({
      as: "span",
      tabIndex: "0"
    }, referenceProps), children);
  } else {
    clone = React.cloneElement(React.Children.only(children), referenceProps);
  }

  var hasAriaLabel = ariaLabel != null;
  return core.jsx(React.Fragment, null, clone, core.jsx(Popper$1, _extends({
    usePortal: true,
    isOpen: _isOpen,
    placement: placement,
    timeout: 200,
    modifiers: {
      offset: {
        enabled: true,
        offset: "0, 8"
      }
    },
    anchorEl: referenceRef.current,
    arrowSize: "10px",
    hasArrow: hasArrow,
    px: "8px",
    py: "2px",
    id: hasAriaLabel ? undefined : tooltipId,
    role: hasAriaLabel ? undefined : "tooltip",
    bg: _bg,
    borderRadius: "sm",
    fontWeight: "medium",
    pointerEvents: "none",
    color: _color,
    fontSize: "sm",
    shadow: "md",
    maxW: "320px"
  }, rest), label, hasAriaLabel && core.jsx(VisuallyHidden, {
    role: "tooltip",
    id: tooltipId
  }, ariaLabel), hasArrow && core.jsx(PopperArrow, null)));
};

var toggleSelection = function () {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function () {};
  }
  var active = document.activeElement;

  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }

  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
    case 'INPUT':
    case 'TEXTAREA':
      active.blur();
      break;

    default:
      active = null;
      break;
  }

  selection.removeAllRanges();
  return function () {
    selection.type === 'Caret' &&
    selection.removeAllRanges();

    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }

    active &&
    active.focus();
  };
};

var clipboardToIE11Formatting = {
  "text/plain": "Text",
  "text/html": "Url",
  "default": "Text"
};

var defaultMessage = "Copy to clipboard: #{key}, Enter";

function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return message.replace(/#{\s*key\s*}/g, copyKey);
}

function copy(text, options) {
  var debug,
    message,
    reselectPrevious,
    range,
    selection,
    mark,
    success = false;
  if (!options) {
    options = {};
  }
  debug = options.debug || false;
  try {
    reselectPrevious = toggleSelection();

    range = document.createRange();
    selection = document.getSelection();

    mark = document.createElement("span");
    mark.textContent = text;
    // reset user styles for span element
    mark.style.all = "unset";
    // prevents scrolling to the end of the page
    mark.style.position = "fixed";
    mark.style.top = 0;
    mark.style.clip = "rect(0, 0, 0, 0)";
    // used to preserve spaces and line breaks
    mark.style.whiteSpace = "pre";
    // do not inherit user-select (it may be `none`)
    mark.style.webkitUserSelect = "text";
    mark.style.MozUserSelect = "text";
    mark.style.msUserSelect = "text";
    mark.style.userSelect = "text";
    mark.addEventListener("copy", function(e) {
      e.stopPropagation();
      if (options.format) {
        e.preventDefault();
        if (typeof e.clipboardData === "undefined") { // IE 11
          debug && console.warn("unable to use e.clipboardData");
          debug && console.warn("trying IE specific stuff");
          window.clipboardData.clearData();
          var format = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"];
          window.clipboardData.setData(format, text);
        } else { // all other browsers
          e.clipboardData.clearData();
          e.clipboardData.setData(options.format, text);
        }
      }
      if (options.onCopy) {
        e.preventDefault();
        options.onCopy(e.clipboardData);
      }
    });

    document.body.appendChild(mark);

    range.selectNodeContents(mark);
    selection.addRange(range);

    var successful = document.execCommand("copy");
    if (!successful) {
      throw new Error("copy command was unsuccessful");
    }
    success = true;
  } catch (err) {
    debug && console.error("unable to copy using execCommand: ", err);
    debug && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(options.format || "text", text);
      options.onCopy && options.onCopy(window.clipboardData);
      success = true;
    } catch (err) {
      debug && console.error("unable to copy using clipboardData: ", err);
      debug && console.error("falling back to prompt");
      message = format("message" in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == "function") {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }

    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }

  return success;
}

var copyToClipboard = copy;

function useClipboard(value) {
  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      hasCopied = _useState2[0],
      setHasCopied = _useState2[1];

  var onCopy = React.useCallback(function () {
    var didCopy = copyToClipboard(value);
    setHasCopied(didCopy);
  }, [value]);
  React.useEffect(function () {
    if (hasCopied) {
      var id = setTimeout(function () {
        setHasCopied(false);
      }, 1500);
      return function () {
        return clearTimeout(id);
      };
    }
  }, [hasCopied]);
  return {
    value: value,
    onCopy: onCopy,
    hasCopied: hasCopied
  };
}

exports.Accordion = Accordion;
exports.AccordionHeader = AccordionHeader;
exports.AccordionIcon = AccordionIcon;
exports.AccordionItem = AccordionItem;
exports.AccordionPanel = AccordionPanel;
exports.Alert = Alert;
exports.AlertDescription = AlertDescription;
exports.AlertDialog = AlertDialog;
exports.AlertDialogBody = ModalBody;
exports.AlertDialogCloseButton = ModalCloseButton;
exports.AlertDialogContent = AlertDialogContent;
exports.AlertDialogFooter = ModalFooter;
exports.AlertDialogHeader = ModalHeader;
exports.AlertDialogOverlay = ModalOverlay;
exports.AlertIcon = AlertIcon;
exports.AlertTitle = AlertTitle;
exports.AspectRatioBox = AspectRatioBox;
exports.Avatar = Avatar;
exports.AvatarBadge = AvatarBadge;
exports.AvatarGroup = AvatarGroup;
exports.Badge = Badge;
exports.Box = Box;
exports.Breadcrumb = Breadcrumb;
exports.BreadcrumbItem = BreadcrumbItem;
exports.BreadcrumbLink = BreadcrumbLink;
exports.BreadcrumbSeparator = BreadcrumbSeparator;
exports.Button = Button;
exports.ButtonGroup = ButtonGroup;
exports.CSSReset = CSSReset;
exports.Callout = Callout;
exports.Checkbox = Checkbox;
exports.CheckboxGroup = CheckboxGroup;
exports.CircularProgress = CircularProgress;
exports.CircularProgressLabel = CircularProgressLabel;
exports.CloseButton = CloseButton;
exports.Code = Code;
exports.Collapse = Collapse;
exports.ColorModeContext = ColorModeContext;
exports.ColorModeProvider = ColorModeProvider;
exports.ControlBox = ControlBox;
exports.DarkMode = DarkMode;
exports.Divider = Divider;
exports.Drawer = Drawer;
exports.DrawerBody = ModalBody;
exports.DrawerCloseButton = DrawerCloseButton;
exports.DrawerContent = DrawerContent;
exports.DrawerFooter = ModalFooter;
exports.DrawerHeader = ModalHeader;
exports.DrawerOverlay = DrawerOverlay;
exports.Editable = Editable;
exports.EditableInput = EditableInput;
exports.EditablePreview = EditablePreview;
exports.Flex = Flex;
exports.FormControl = FormControl;
exports.FormErrorMessage = FormErrorMessage;
exports.FormHelperText = FormHelperText;
exports.FormLabel = FormLabel;
exports.Grid = Grid;
exports.Heading = Heading;
exports.Icon = Icon;
exports.IconButton = IconButton;
exports.Image = Image;
exports.Input = Input;
exports.InputAddon = InputAddon;
exports.InputGroup = InputGroup;
exports.InputLeftAddon = InputLeftAddon;
exports.InputLeftElement = InputLeftElement;
exports.InputRightAddon = InputRightAddon;
exports.InputRightElement = InputRightElement;
exports.Kbd = Kbd;
exports.LightMode = LightMode;
exports.Link = Link;
exports.List = List;
exports.ListIcon = ListIcon;
exports.ListItem = ListItem;
exports.Menu = Menu;
exports.MenuButton = MenuButton;
exports.MenuDivider = MenuDivider;
exports.MenuGroup = MenuGroup;
exports.MenuItem = MenuItem;
exports.MenuItemOption = MenuItemOption;
exports.MenuList = MenuList;
exports.MenuOptionGroup = MenuOptionGroup;
exports.Modal = Modal;
exports.ModalBody = ModalBody;
exports.ModalCloseButton = ModalCloseButton;
exports.ModalContent = ModalContent;
exports.ModalFooter = ModalFooter;
exports.ModalHeader = ModalHeader;
exports.ModalOverlay = ModalOverlay;
exports.NumberDecrementStepper = NumberDecrementStepper;
exports.NumberIncrementStepper = NumberIncrementStepper;
exports.NumberInput = NumberInput;
exports.NumberInputField = NumberInputField;
exports.NumberInputStepper = NumberInputStepper;
exports.Popover = Popover;
exports.PopoverArrow = PopoverArrow;
exports.PopoverBody = PopoverBody;
exports.PopoverCloseButton = PopoverCloseButton;
exports.PopoverContent = PopoverContent;
exports.PopoverFooter = PopoverFooter;
exports.PopoverHeader = PopoverHeader;
exports.PopoverTrigger = PopoverTrigger;
exports.Portal = Portal$1;
exports.Progress = Progress;
exports.ProgressLabel = ProgressLabel;
exports.PseudoBox = PseudoBox;
exports.Radio = Radio;
exports.RadioButtonGroup = RadioButtonGroup;
exports.RadioGroup = RadioGroup;
exports.Scale = Scale;
exports.Select = Select;
exports.SimpleGrid = SimpleGrid;
exports.Skeleton = Skeleton;
exports.Slide = Slide;
exports.SlideIn = SlideIn;
exports.Slider = Slider;
exports.SliderFilledTrack = SliderFilledTrack;
exports.SliderThumb = SliderThumb;
exports.SliderTrack = SliderTrack;
exports.Spinner = Spinner;
exports.Stack = Stack;
exports.Stat = Stat;
exports.StatArrow = StatArrow;
exports.StatGroup = StatGroup;
exports.StatHelpText = StatHelpText;
exports.StatLabel = StatLabel;
exports.StatNumber = StatNumber;
exports.Switch = Switch;
exports.Tab = Tab;
exports.TabContext = TabContext;
exports.TabList = TabList;
exports.TabPanel = TabPanel;
exports.TabPanels = TabPanels;
exports.Tabs = Tabs;
exports.Tag = Tag;
exports.TagCloseButton = TagCloseButton;
exports.TagIcon = TagIcon;
exports.TagLabel = TagLabel;
exports.Text = Text;
exports.Textarea = Textarea;
exports.ThemeProvider = ThemeProvider;
exports.Tooltip = Tooltip;
exports.VisuallyHidden = VisuallyHidden;
exports.clampValue = clampValue;
exports.css = css$1;
exports.percentToValue = percentToValue;
exports.roundValueToStep = roundValueToStep;
exports.statuses = statuses;
exports.theme = theme;
exports.useClipboard = useClipboard;
exports.useColorMode = useColorMode;
exports.useDisclosure = useDisclosure;
exports.useFormControl = useFormControl;
exports.useFormControlContext = useFormControlContext;
exports.useMenuContext = useMenuContext;
exports.useNumberInput = useNumberInput;
exports.usePrevious = usePrevious;
exports.useTheme = useTheme;
exports.useToast = useToast;
exports.valueToPercent = valueToPercent;
//# sourceMappingURL=index.js.map
