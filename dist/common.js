(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jquery"));
	else if(typeof define === 'function' && define.amd)
		define(["jquery"], factory);
	else if(typeof exports === 'object')
		exports["common"] = factory(require("jquery"));
	else
		root["common"] = factory(root["$"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; // @TODO enable lints
/* eslint-disable max-len*/
/* eslint-disable object-shorthand*/
/* eslint-disable dot-notation*/
/* eslint-disable vars-on-top*/
/* eslint-disable prefer-template*/
/* eslint-disable prefer-const*/
/* eslint-disable spaced-comment*/
/* eslint-disable curly*/
/* eslint-disable object-curly-spacing*/
/* eslint-disable spaced-comment*/
/* eslint-disable prefer-arrow-callback*/
/* eslint-disable one-let*/
/* eslint-disable space-in-parens*/
/* eslint-disable camelcase*/
/* eslint-disable no-undef*/
/* eslint-disable quote-props*/
/* eslint-disable no-shadow*/
/* eslint-disable no-param-reassign*/
/* eslint-disable no-unused-expressions*/
/* eslint-disable no-shadow*/
/* eslint-disable no-implied-eval*/
/* eslint-disable brace-style*/
/* eslint-disable no-unused-vars*/
/* eslint-disable brace-style*/
/* eslint-disable no-lonely-if*/
/* eslint-disable no-inline-comments*/
/* eslint-disable default-case*/
/* eslint-disable one-let*/
/* eslint-disable semi*/
/* eslint-disable no-throw-literal*/
/* eslint-disable no-sequences*/
/* eslint-disable consistent-this*/
/* eslint-disable no-dupe-keys*/
/* eslint-disable semi*/
/* eslint-disable no-loop-func*/


var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// jquery ui dependency

function getLevel(level) {

    level = parseInt(level, 10);

    if (isNaN(level) || level < 1) {
        return 1;
    }

    return level;
}

function getId(level) {
    return 'DIALOG' + getLevel(level);
}

function addButtons(buttons, dialog) {
    if (dialog.options.closeButton === true) {
        buttons[dialog.services.localeService.t('fermer')] = function () {
            dialog.close();
        };
    }
    if (dialog.options.cancelButton === true) {
        buttons[dialog.services.localeService.t('annuler')] = function () {
            dialog.close();
        };
    }

    return buttons;
}

var PhraseaDialog = function PhraseaDialog(services, options, level) {
    var _this = this;

    var createDialog = function createDialog(level) {

        var $dialog = (0, _jquery2.default)('#' + getId(level));

        if ($dialog.length > 0) {
            throw 'Dialog already exists at this level';
        }

        $dialog = (0, _jquery2.default)('<div style="display:none;" id="' + getId(level) + '"></div>');
        (0, _jquery2.default)('body').append($dialog);

        return $dialog;
    };

    var defaults = {
        size: 'Medium',
        buttons: {},
        loading: true,
        title: '',
        closeOnEscape: true,
        confirmExit: false,
        closeCallback: false,
        closeButton: false,
        cancelButton: false
    };
    var width = void 0;
    var height = void 0;
    var $dialog = void 0;
    var $this = this;

    options = (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object' ? options : {};

    this.closing = false;

    this.options = _jquery2.default.extend(defaults, options);

    this.services = services;

    this.level = getLevel(level);

    this.options.buttons = addButtons(this.options.buttons, this);

    if (/\d+x\d+/.test(this.options.size)) {
        var dimension = this.options.size.split('x');
        height = dimension[1];
        width = dimension[0];
    } else {
        switch (this.options.size) {
            case 'Full':
                height = bodySize.y - 30;
                width = bodySize.x - 30;
                break;
            case 'Medium':
                width = Math.min(bodySize.x - 30, 730);
                height = Math.min(bodySize.y - 30, 520);
                break;
            default:
            case 'Small':
                width = Math.min(bodySize.x - 30, 420);
                height = Math.min(bodySize.y - 30, 300);
                break;
            case 'Alert':
                width = Math.min(bodySize.x - 30, 300);
                height = Math.min(bodySize.y - 30, 150);
                break;
            case 'Custom':
                width = Math.min(bodySize.x - 30, this.options.customWidth);
                height = Math.min(bodySize.y - 30, this.options.customHeight);
                break;
        }
    }

    /*
     * 3 avaailable dimensions :
     *
     *  - Full   | Full size ()
     *  - Medium | 420 x 450
     *  - Small  | 730 x 480
     *
     **/
    this.$dialog = createDialog(this.level);
    this.zIndex = 5000 + parseInt(this.level, 10); //Math.min(this.level * 2000 + 5000, 32767);

    var CloseCallback = function CloseCallback() {
        if (typeof $this.options.closeCallback === 'function') {
            $this.options.closeCallback($this.$dialog);
        }

        if ($this.closing === false) {
            $this.closing = true;
            $this.close();
        }
    };

    if (this.$dialog.data('ui-dialog')) {
        this.$dialog.dialog('destroy');
    }

    this.$dialog.attr('title', this.options.title).empty().dialog({
        buttons: this.options.buttons,
        draggable: false,
        resizable: false,
        closeOnEscape: this.options.closeOnEscape,
        modal: true,
        width: width,
        height: height,
        open: function open(event) {
            var $dialogEl = (0, _jquery2.default)(event.currentTarget);
            //$(this)
            $dialogEl.dialog('widget').css('z-index', _this.zIndex);
        },
        close: CloseCallback
    }).dialog('open').addClass('dialog-' + this.options.size);

    if (this.options.loading === true) {
        this.$dialog.addClass('loading');
    }

    if (this.options.size === 'Full') {
        var _$this = this;
        (0, _jquery2.default)(window).unbind('resize.DIALOG' + getLevel(level)).bind('resize.DIALOG' + getLevel(level), function () {
            if (_$this.$dialog.data('ui-dialog')) {
                _$this.$dialog.dialog('option', {
                    width: bodySize.x - 30,
                    height: bodySize.y - 30
                });
            }
        });
    }

    return this;
};

PhraseaDialog.prototype = {
    close: function close() {
        dialog.close(this.level);
    },
    setContent: function setContent(content) {
        this.$dialog.removeClass('loading').empty().append(content);
    },
    getId: function getId() {
        return this.$dialog.attr('id');
    },
    load: function load(url, method, params) {
        var $this = this;
        this.loader = {
            url: url,
            method: typeof method === 'undefined' ? 'GET' : method,
            params: typeof params === 'undefined' ? {} : params
        };

        _jquery2.default.ajax({
            type: this.loader.method,
            url: this.loader.url,
            dataType: 'html',
            data: this.loader.params,
            beforeSend: function beforeSend() {},
            success: function success(data) {
                $this.setContent(data);
                return;
            }
        });
    },
    refresh: function refresh() {
        if (typeof this.loader === 'undefined') {
            throw 'Nothing to refresh';
        }
        this.load(this.loader.url, this.loader.method, this.loader.params);
    },
    getDomElement: function getDomElement() {
        return this.$dialog;
    },
    getOption: function getOption(optionName) {
        if (this.$dialog.data('ui-dialog')) {
            return this.$dialog.dialog('option', optionName);
        }
        return null;
    },
    setOption: function setOption(optionName, optionValue) {
        if (optionName === 'buttons') {
            optionValue = addButtons(optionValue, this);
        }
        if (this.$dialog.data('ui-dialog')) {
            this.$dialog.dialog('option', optionName, optionValue);
        }
    }
};

var Dialog = function Dialog() {
    this.currentStack = {};
};

Dialog.prototype = {
    create: function create(services, options, level) {

        if (this.get(level) instanceof PhraseaDialog) {
            this.get(level).close();
        }

        var $dialog = new PhraseaDialog(services, options, level);

        this.currentStack[$dialog.getId()] = $dialog;

        return $dialog;
    },
    get: function get(level) {

        var id = getId(level);

        if (id in this.currentStack) {
            return this.currentStack[id];
        }

        return null;
    },
    close: function close(level) {

        (0, _jquery2.default)(window).unbind('resize.DIALOG' + getLevel(level));

        this.get(level).closing = true;
        var dialog = this.get(level).getDomElement();
        if (dialog.data('ui-dialog')) {
            dialog.dialog('close').dialog('destroy');
        }
        dialog.remove();

        var id = this.get(level).getId();

        if (id in this.currentStack) {
            delete this.currentStack.id;
        }
    }
};

var dialog = new Dialog();
exports.default = dialog;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userModule = exports.utilsModule = exports.commonModule = exports.dialogModule = undefined;

var _common = __webpack_require__(3);

var _common2 = _interopRequireDefault(_common);

var _dialog = __webpack_require__(1);

var _dialog2 = _interopRequireDefault(_dialog);

var _user = __webpack_require__(5);

var _user2 = _interopRequireDefault(_user);

var _utils = __webpack_require__(7);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.dialogModule = _dialog2.default;
exports.commonModule = _common2.default;
exports.utilsModule = _utils2.default;
exports.userModule = _user2.default;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _dialog = __webpack_require__(1);

var _dialog2 = _interopRequireDefault(_dialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @TODO enable lints
/* eslint-disable max-len*/
/* eslint-disable object-shorthand*/
/* eslint-disable dot-notation*/
/* eslint-disable vars-on-top*/
/* eslint-disable prefer-template*/
/* eslint-disable prefer-const*/
/* eslint-disable spaced-comment*/
/* eslint-disable curly*/
/* eslint-disable object-curly-spacing*/
/* eslint-disable spaced-comment*/
/* eslint-disable prefer-arrow-callback*/
/* eslint-disable one-var*/
/* eslint-disable space-in-parens*/
/* eslint-disable camelcase*/
/* eslint-disable no-undef*/
/* eslint-disable quote-props*/
/* eslint-disable no-shadow*/
/* eslint-disable no-param-reassign*/
/* eslint-disable no-unused-expressions*/
/* eslint-disable no-shadow*/
/* eslint-disable no-implied-eval*/
/* eslint-disable brace-style*/
/* eslint-disable no-unused-vars*/
/* eslint-disable brace-style*/
/* eslint-disable no-lonely-if*/
/* eslint-disable no-inline-comments*/
/* eslint-disable default-case*/
/* eslint-disable one-var*/
/* eslint-disable semi*/
/* eslint-disable no-throw-literal*/
/* eslint-disable no-sequences*/
/* eslint-disable consistent-this*/
/* eslint-disable no-dupe-keys*/
/* eslint-disable semi*/
/* eslint-disable no-loop-func*/

var cookie = __webpack_require__(4);

var initialize = function initialize() {
    // $(document).ready(function () {

    var locale = cookie.get('i18next');
    if (locale === undefined) {
        locale = 'en-GB';
    }

    var cache = (0, _jquery2.default)('#mainMenu .helpcontextmenu');
    (0, _jquery2.default)('.context-menu-item', cache).hover(function () {
        (0, _jquery2.default)(this).addClass('context-menu-item-hover');
    }, function () {
        (0, _jquery2.default)(this).removeClass('context-menu-item-hover');
    });
};

// @deprecated
function manageSession(data, showMessages) {
    if (typeof showMessages === 'undefined') showMessages = false;

    if (data.status === 'disconnected' || data.status === 'session') {
        disconnected();
        return false;
    }
    if (showMessages) {
        var box = (0, _jquery2.default)('#notification_box');
        box.empty().append(data.notifications);

        if (box.is(':visible')) fix_notification_height();

        if ((0, _jquery2.default)('.notification.unread', box).length > 0) {
            var trigger = (0, _jquery2.default)('#notification_trigger');
            (0, _jquery2.default)('.counter', trigger).empty().append((0, _jquery2.default)('.notification.unread', box).length);
            (0, _jquery2.default)('.counter', trigger).css('visibility', 'visible');
        } else (0, _jquery2.default)('#notification_trigger .counter').css('visibility', 'hidden').empty();

        if (data.changed.length > 0) {
            var current_open = (0, _jquery2.default)('.SSTT.ui-state-active');
            var current_sstt = current_open.length > 0 ? current_open.attr('id').split('_').pop() : false;

            var main_open = false;
            for (var i = 0; i !== data.changed.length; i++) {
                var sstt = (0, _jquery2.default)('#SSTT_' + data.changed[i]);
                if (sstt.size() === 0) {
                    if (main_open === false) {
                        (0, _jquery2.default)('#baskets .bloc').animate({ 'top': 30 }, function () {
                            (0, _jquery2.default)('#baskets .alert_datas_changed:first').show();
                        });
                        main_open = true;
                    }
                } else {
                    if (!sstt.hasClass('active')) sstt.addClass('unread');else {
                        (0, _jquery2.default)('.alert_datas_changed', (0, _jquery2.default)('#SSTT_content_' + data.changed[i])).show();
                    }
                }
            }
        }
        if (_jquery2.default.trim(data.message) !== '') {
            if ((0, _jquery2.default)('#MESSAGE').length === 0) (0, _jquery2.default)('body').append('<div id="#MESSAGE"></div>');
            (0, _jquery2.default)('#MESSAGE').empty().append('<div style="margin:30px 10px;"><h4><b>' + data.message + '</b></h4></div><div style="margin:20px 0px 10px;"><label class="checkbox"><input type="checkbox" class="dialog_remove" />' + language.hideMessage + '</label></div>').attr('title', 'Global Message').dialog({
                autoOpen: false,
                closeOnEscape: true,
                resizable: false,
                draggable: false,
                modal: true,
                close: function close() {
                    if ((0, _jquery2.default)('.dialog_remove:checked', (0, _jquery2.default)(this)).length > 0) {
                        // setTemporaryPref
                        _jquery2.default.ajax({
                            type: 'POST',
                            url: '/user/preferences/temporary/',
                            data: {
                                prop: 'message',
                                value: 0
                            },
                            success: function success(data) {
                                return;
                            }
                        });
                    }
                }
            }).dialog('open');
        }
    }
    return true;
}

exports.default = {
    initialize: initialize,
    manageSession: manageSession
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.2.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader = false;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (true) {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function init (converter) {
		function api (key, value, attributes) {
			var result;
			if (typeof document === 'undefined') {
				return;
			}

			// Write

			if (arguments.length > 1) {
				attributes = extend({
					path: '/'
				}, api.defaults, attributes);

				if (typeof attributes.expires === 'number') {
					var expires = new Date();
					expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
					attributes.expires = expires;
				}

				// We're using "expires" because "max-age" is not supported by IE
				attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

				try {
					result = JSON.stringify(value);
					if (/^[\{\[]/.test(result)) {
						value = result;
					}
				} catch (e) {}

				if (!converter.write) {
					value = encodeURIComponent(String(value))
						.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
				} else {
					value = converter.write(value, key);
				}

				key = encodeURIComponent(String(key));
				key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
				key = key.replace(/[\(\)]/g, escape);

				var stringifiedAttributes = '';

				for (var attributeName in attributes) {
					if (!attributes[attributeName]) {
						continue;
					}
					stringifiedAttributes += '; ' + attributeName;
					if (attributes[attributeName] === true) {
						continue;
					}
					stringifiedAttributes += '=' + attributes[attributeName];
				}
				return (document.cookie = key + '=' + value + stringifiedAttributes);
			}

			// Read

			if (!key) {
				result = {};
			}

			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling "get()"
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var rdecode = /(%[0-9A-Z]{2})+/g;
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!this.json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = parts[0].replace(rdecode, decodeURIComponent);
					cookie = converter.read ?
						converter.read(cookie, name) : converter(cookie, name) ||
						cookie.replace(rdecode, decodeURIComponent);

					if (this.json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					if (key === name) {
						result = cookie;
						break;
					}

					if (!key) {
						result[name] = cookie;
					}
				} catch (e) {}
			}

			return result;
		}

		api.set = api;
		api.get = function (key) {
			return api.call(api, key);
		};
		api.getJSON = function () {
			return api.apply({
				json: true
			}, [].slice.call(arguments));
		};
		api.defaults = {};

		api.remove = function (key, attributes) {
			api(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var humane = __webpack_require__(6); // @TODO enable lints
/* eslint-disable no-undef*/


humane.info = humane.spawn({ addnCls: 'humane-libnotify-info', timeout: 1000 });
humane.error = humane.spawn({ addnCls: 'humane-libnotify-error', timeout: 1000 });
humane.forceNew = true;

function setPref(name, value) {
    var prefName = 'pref_' + name;
    if (_jquery2.default.data[prefName] && _jquery2.default.data[prefName].abort) {
        _jquery2.default.data[prefName].abort();
        _jquery2.default.data[prefName] = false;
    }
    _jquery2.default.data[prefName] = _jquery2.default.ajax({
        type: 'POST',
        url: '/user/preferences/',
        data: {
            prop: name,
            value: value
        },
        dataType: 'json',
        timeout: _jquery2.default.data[prefName] = false,
        error: _jquery2.default.data[prefName] = false,
        success: function success(data) {
            if (data.success) {
                humane.info(data.message);
            } else {
                humane.error(data.message);
            }
            _jquery2.default.data[prefName] = false;
            return data;
        }
    });
    return _jquery2.default.data[prefName];
}

exports.default = { setPref: setPref };

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * humane.js
 * Humanized Messages for Notifications
 * @author Marc Harter (@wavded)
 * @example
 *   humane.log('hello world');
 * @license MIT
 * See more usage examples at: http://wavded.github.com/humane-js/
 */

;!function (name, context, definition) {
   if (true) module.exports = definition(name, context)
   else if (typeof define === 'function' && typeof define.amd  === 'object') define(definition)
   else context[name] = definition(name, context)
}('humane', this, function (name, context) {
   var win = window
   var doc = document

   var ENV = {
      on: function (el, type, cb) {
         'addEventListener' in win ? el.addEventListener(type,cb,false) : el.attachEvent('on'+type,cb)
      },
      off: function (el, type, cb) {
         'removeEventListener' in win ? el.removeEventListener(type,cb,false) : el.detachEvent('on'+type,cb)
      },
      bind: function (fn, ctx) {
         return function () { fn.apply(ctx,arguments) }
      },
      isArray: Array.isArray || function (obj) { return Object.prototype.toString.call(obj) === '[object Array]' },
      config: function (preferred, fallback) {
         return preferred != null ? preferred : fallback
      },
      transSupport: false,
      useFilter: /msie [678]/i.test(navigator.userAgent), // sniff, sniff
      _checkTransition: function () {
         var el = doc.createElement('div')
         var vendors = { webkit: 'webkit', Moz: '', O: 'o', ms: 'MS' }

         for (var vendor in vendors)
            if (vendor + 'Transition' in el.style) {
               this.vendorPrefix = vendors[vendor]
               this.transSupport = true
            }
      }
   }
   ENV._checkTransition()

   var Humane = function (o) {
      o || (o = {})
      this.queue = []
      this.baseCls = o.baseCls || 'humane'
      this.addnCls = o.addnCls || ''
      this.timeout = 'timeout' in o ? o.timeout : 2500
      this.waitForMove = o.waitForMove || false
      this.clickToClose = o.clickToClose || false
      this.timeoutAfterMove = o.timeoutAfterMove || false
      this.container = o.container

      try { this._setupEl() } // attempt to setup elements
      catch (e) {
        ENV.on(win,'load',ENV.bind(this._setupEl, this)) // dom wasn't ready, wait till ready
      }
   }

   Humane.prototype = {
      constructor: Humane,
      _setupEl: function () {
         var el = doc.createElement('div')
         el.style.display = 'none'
         if (!this.container){
           if(doc.body) this.container = doc.body;
           else throw 'document.body is null'
         }
         this.container.appendChild(el)
         this.el = el
         this.removeEvent = ENV.bind(function(){
            var timeoutAfterMove = ENV.config(this.currentMsg.timeoutAfterMove,this.timeoutAfterMove)
            if (!timeoutAfterMove){
               this.remove()
            } else {
               setTimeout(ENV.bind(this.remove,this),timeoutAfterMove)
            }
         },this)

         this.transEvent = ENV.bind(this._afterAnimation,this)
         this._run()
      },
      _afterTimeout: function () {
         if (!ENV.config(this.currentMsg.waitForMove,this.waitForMove)) this.remove()

         else if (!this.removeEventsSet) {
            ENV.on(doc.body,'mousemove',this.removeEvent)
            ENV.on(doc.body,'click',this.removeEvent)
            ENV.on(doc.body,'keypress',this.removeEvent)
            ENV.on(doc.body,'touchstart',this.removeEvent)
            this.removeEventsSet = true
         }
      },
      _run: function () {
         if (this._animating || !this.queue.length || !this.el) return

         this._animating = true
         if (this.currentTimer) {
            clearTimeout(this.currentTimer)
            this.currentTimer = null
         }

         var msg = this.queue.shift()
         var clickToClose = ENV.config(msg.clickToClose,this.clickToClose)

         if (clickToClose) {
            ENV.on(this.el,'click',this.removeEvent)
            ENV.on(this.el,'touchstart',this.removeEvent)
         }

         var timeout = ENV.config(msg.timeout,this.timeout)

         if (timeout > 0)
            this.currentTimer = setTimeout(ENV.bind(this._afterTimeout,this), timeout)

         if (ENV.isArray(msg.html)) msg.html = '<ul><li>'+msg.html.join('<li>')+'</ul>'

         this.el.innerHTML = msg.html
         this.currentMsg = msg
         this.el.className = this.baseCls
         if (ENV.transSupport) {
            this.el.style.display = 'block'
            setTimeout(ENV.bind(this._showMsg,this),50)
         } else {
            this._showMsg()
         }

      },
      _setOpacity: function (opacity) {
         if (ENV.useFilter){
            try{
               this.el.filters.item('DXImageTransform.Microsoft.Alpha').Opacity = opacity*100
            } catch(err){}
         } else {
            this.el.style.opacity = String(opacity)
         }
      },
      _showMsg: function () {
         var addnCls = ENV.config(this.currentMsg.addnCls,this.addnCls)
         if (ENV.transSupport) {
            this.el.className = this.baseCls+' '+addnCls+' '+this.baseCls+'-animate'
         }
         else {
            var opacity = 0
            this.el.className = this.baseCls+' '+addnCls+' '+this.baseCls+'-js-animate'
            this._setOpacity(0) // reset value so hover states work
            this.el.style.display = 'block'

            var self = this
            var interval = setInterval(function(){
               if (opacity < 1) {
                  opacity += 0.1
                  if (opacity > 1) opacity = 1
                  self._setOpacity(opacity)
               }
               else clearInterval(interval)
            }, 30)
         }
      },
      _hideMsg: function () {
         var addnCls = ENV.config(this.currentMsg.addnCls,this.addnCls)
         if (ENV.transSupport) {
            this.el.className = this.baseCls+' '+addnCls
            ENV.on(this.el,ENV.vendorPrefix ? ENV.vendorPrefix+'TransitionEnd' : 'transitionend',this.transEvent)
         }
         else {
            var opacity = 1
            var self = this
            var interval = setInterval(function(){
               if(opacity > 0) {
                  opacity -= 0.1
                  if (opacity < 0) opacity = 0
                  self._setOpacity(opacity);
               }
               else {
                  self.el.className = self.baseCls+' '+addnCls
                  clearInterval(interval)
                  self._afterAnimation()
               }
            }, 30)
         }
      },
      _afterAnimation: function () {
         if (ENV.transSupport) ENV.off(this.el,ENV.vendorPrefix ? ENV.vendorPrefix+'TransitionEnd' : 'transitionend',this.transEvent)

         if (this.currentMsg.cb) this.currentMsg.cb()
         this.el.style.display = 'none'

         this._animating = false
         this._run()
      },
      remove: function (e) {
         var cb = typeof e == 'function' ? e : null

         ENV.off(doc.body,'mousemove',this.removeEvent)
         ENV.off(doc.body,'click',this.removeEvent)
         ENV.off(doc.body,'keypress',this.removeEvent)
         ENV.off(doc.body,'touchstart',this.removeEvent)
         ENV.off(this.el,'click',this.removeEvent)
         ENV.off(this.el,'touchstart',this.removeEvent)
         this.removeEventsSet = false

         if (cb && this.currentMsg) this.currentMsg.cb = cb
         if (this._animating) this._hideMsg()
         else if (cb) cb()
      },
      log: function (html, o, cb, defaults) {
         var msg = {}
         if (defaults)
           for (var opt in defaults)
               msg[opt] = defaults[opt]

         if (typeof o == 'function') cb = o
         else if (o)
            for (var opt in o) msg[opt] = o[opt]

         msg.html = html
         if (cb) msg.cb = cb
         this.queue.push(msg)
         this._run()
         return this
      },
      spawn: function (defaults) {
         var self = this
         return function (html, o, cb) {
            self.log.call(self,html,o,cb,defaults)
            return self
         }
      },
      create: function (o) { return new Humane(o) }
   }
   return new Humane()
});


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
// @TODO enable lints
/* eslint-disable camelcase*/
/* eslint-disable no-param-reassign*/
/* eslint-disable one-var*/

var utilsModule = function () {

    function RGBtoHex(R, G, B) {
        return _toHex(R) + _toHex(G) + _toHex(B);
    }

    function _toHex(N) {
        if (N === null) {
            return '00';
        }
        var nInt = parseInt(N, 10);
        if (nInt === 0 || isNaN(nInt)) {
            return '00';
        }
        nInt = Math.max(0, nInt);
        nInt = Math.min(nInt, 255);
        nInt = Math.round(nInt);
        return '0123456789ABCDEF'.charAt((nInt - nInt % 16) / 16) + '0123456789ABCDEF'.charAt(nInt % 16);
    }

    function hsl2rgb(h, s, l) {
        var m1 = void 0,
            m2 = void 0,
            hue = void 0;
        var r = void 0,
            g = void 0,
            b = void 0;
        // s /= 100;
        // l /= 100;

        if (s === 0) {
            r = g = b = l * 255;
        } else {
            if (l <= 0.5) {
                m2 = l * (s + 1);
            } else {
                m2 = l + s - l * s;
            }
            m1 = l * 2 - m2;
            hue = h / 360;
            r = _HueToRgb(m1, m2, hue + 1 / 3);
            g = _HueToRgb(m1, m2, hue);
            b = _HueToRgb(m1, m2, hue - 1 / 3);
        }
        return {
            r: r,
            g: g,
            b: b
        };
    }

    function _HueToRgb(m1, m2, hue) {
        var v = void 0;
        if (hue < 0) {
            hue += 1;
        } else if (hue > 1) {
            hue -= 1;
        }

        if (6 * hue < 1) {
            v = m1 + (m2 - m1) * hue * 6;
        } else if (2 * hue < 1) {
            v = m2;
        } else if (3 * hue < 2) {
            v = m1 + (m2 - m1) * (2 / 3 - hue) * 6;
        } else {
            v = m1;
        }

        return 255 * v;
    }

    function is_ctrl_key(event) {
        if (event.altKey) {
            return true;
        }
        if (event.ctrlKey) {
            return true;
        }
        // apple key opera
        if (event.metaKey) {
            return true;
        }
        // apple key opera
        if (event.keyCode === 17) {
            return true;
        }
        // apple key mozilla
        if (event.keyCode === 224) {
            return true;
        }
        // apple key safari
        if (event.keyCode === 91) {
            return true;
        }

        return false;
    }

    function is_shift_key(event) {
        if (event.shiftKey) {
            return true;
        }
        return false;
    }

    return {
        RGBtoHex: RGBtoHex,
        hsl2rgb: hsl2rgb,
        is_ctrl_key: is_ctrl_key,
        is_shift_key: is_shift_key
    };
}();

exports.default = utilsModule;

/***/ })
/******/ ]);
});