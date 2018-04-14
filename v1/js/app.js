(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _main = require('./app/main.class');

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

try {
	window.app = new _main2.default();
} catch (e) {
	var report = 'https://github.com/matreshkajs/matreshka.io/issues/new?title=Houston,%20we%20have%20a%20problem&body=userAgent: ' + encodeURIComponent(' ' + navigator.userAgent + '\nError: ' + e.message);

	if (!localStorage.ignoreErrors && confirm('Houston, we have a problem:\n' + e + '\n\nThe main script of the website is thrown an error. Would you like to report the issue?\n\nBy pressing "Cancel" further errors will be ignored and you can continue reading documentation, but some features will not work (syntax highlighting, comments etc).')) {
		location.href = report;
	} else {
		localStorage.ignoreErrors = 1;
		[].slice.call(document.querySelectorAll('nav .submenu-wrapper ul')).forEach(function (node) {
			node.style.marginTop = 0;
		});
		document.querySelector('.view-switcher').style.color = 'red';
		document.querySelector('.view-switcher').innerHTML = 'Error loading the website <a href="' + report + '" style="padding: 0;">Report the issue</a>';
		document.querySelector('.loader').classList.add('hide');
		document.querySelector('body').setAttribute('data-view', 'all');
		console && console.error && console.error(e);
	}
}

},{"./app/main.class":6}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _globals = require('./globals');

var _globals2 = _interopRequireDefault(_globals);

var _matreshka = require('../matreshka');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Article = function (_MK$Object) {
	_inherits(Article, _MK$Object);

	function Article(data) {
		var _this;

		_classCallCheck(this, Article);

		(_this = _possibleConstructorReturn(this, Object.getPrototypeOf(Article).call(this, data)), _this).set('commentsShown', false).events().links();
		return _this;
	}

	_createClass(Article, [{
		key: 'events',
		value: function events() {
			var _this2 = this;

			return this.on({
				'click::menuItem(.expand)': function clickMenuItemExpand(evt) {
					_this2.expanded = !_this2.expanded;
					evt.preventDefault();
				},
				'change:isActive': function changeIsActive(evt) {
					var node = _this2.bound('menuItem');
					while (node = node.parentNode) {
						(0, _matreshka.balalaika)('.submenu-wrapper').filter(function (wrapper) {
							return wrapper.contains(node);
						}).map(function (wrapper) {
							return wrapper.previousElementSibling;
						}).map(function (menuItem) {
							return menuItem.querySelector('.hidden-active-child');
						}).forEach(function (menuItem) {
							menuItem.innerHTML = this.isActive ? this.name : '';
						}, _this2);
						break;
					}
				},
				'click::comment': function clickComment(evt) {
					var url = document.location.origin + document.location.pathname + '#' + _this2.id,
					    commentsContainer = _this2.bound('commentsContainer');

					if (_this2.commentsShown = !_this2.commentsShown) {
						commentsContainer.classList.add('muut');
						_globals2.default.app.muut();
					}
				},
				'click::(.share-facebook)': function clickShareFacebook(evt) {
					var url = 'http://www.facebook.com/dialog/feed?app_id=901572946532005&link=' + encodeURIComponent(location.href) + '&name=' + _this2.name + '&description=' + _this2.summary + '&redirect_uri=' + encodeURIComponent('http://matreshka.io/popupclose.html') + '&display=popup&picture=' + encodeURIComponent('http://matreshka.io/img/mk_logo.png');

					window.open(url, 'Facebook', 'height=600,width=700');
				}, //
				'click::(.share-twitter)': function clickShareTwitter(evt) {
					var url = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent('#matreshkajs ' + _this2.name + ': ' + _this2.summary.substr(0, 60) + '...') + '&url=' + encodeURIComponent(location.href);
					window.open(url, 'Twitter', 'height=600,width=700');
				}
			}).on('render change:expanded', function () {
				var submenu = this.bound('submenu');
				if (submenu) {
					if (!this.expanded) {
						submenu.style.marginTop = -44 * this.selectAll(':bound(submenu) li').length + 'px';
					} else {
						submenu.style.marginTop = 0;
						submenu.style.display = 'block';
					}
				}
			}, true);
		}
	}, {
		key: 'links',
		value: function links() {
			return this.linkProps('ieVersion', [_globals2.default.app, 'ieVersion']).linkProps('newVersions', [_globals2.default.app, 'newVersions']).linkProps('_previous', [this, 'previous', _globals2.default.app, 'unstableVersion', _globals2.default.app, 'version', _globals2.default.app, 'articles', _globals2.default.app, 'importanceLevel'], function (previous, unstableVersion, version, articles, importanceLevel) {
				if (!previous || !previous.importance || version == 'unstable' || !articles) {
					return previous;
				} else {
					do {
						if (previous.since != unstableVersion && previous.importance <= importanceLevel) {
							return previous;
						}
					} while (previous = previous.previous);
				}
			}).linkProps('_next', [this, 'next', _globals2.default.app, 'unstableVersion', _globals2.default.app, 'version', _globals2.default.app, 'articles', _globals2.default.app, 'importanceLevel'], function (next, unstableVersion, version, articles, importanceLevel) {
				if (!next || !next.importance || version == 'unstable' || !articles) {
					return next;
				} else {
					do {
						if (next.since != unstableVersion && next.importance <= importanceLevel) {
							return next;
						}
					} while (next = next.next);
				}
			}).linkProps('previousId', '_previous', function (previous) {
				return previous ? previous.id : '';
			}).linkProps('nextId', '_next', function (next) {
				return next ? next.id : '';
			}).linkProps('previousHeader', '_previous', function (previous) {
				return previous ? previous.name : '';
			}).linkProps('nextHeader', '_next', function (next) {
				return next ? next.name : '';
			});
		}
	}, {
		key: 'onRender',
		value: function onRender() {
			var paginationHTML = _globals2.default.app.select('#pagination-template').innerHTML;
			this.bindNode('id', ':sandbox', _matreshka.Matreshka.binders.property('id'));

			if (!this.id) {
				return;
			}

			return this.bindNode({
				menuItem: _globals2.default.app.select('nav a[href="#' + this.id + '"]'),
				since: [':sandbox', _matreshka.Matreshka.binders.dataset('since')],
				isActive: [':bound(menuItem)', _matreshka.Matreshka.binders.className('active')],
				expanded: [':bound(menuItem)', _matreshka.Matreshka.binders.className('expanded')],
				newVersions: [':sandbox', {
					setValue: function setValue(v) {
						this.classList.toggle('new', ~v.indexOf(this.getAttribute('data-since')));
					}
				}]
			}).bindOptionalNode({
				commentsContainer: ':sandbox .comments-container',
				submenu: 'nav ul[data-submenu="' + this.id + '"]',
				comment: ':sandbox .comments',
				commentsShown: [':bound(commentsContainer)', _matreshka.Matreshka.binders.visibility()],
				ieVersion: [':sandbox .comments', _matreshka.Matreshka.binders.className('hide')],
				header: [':sandbox h2', {
					getValue: function getValue() {
						return this.innerHTML.replace(/<wbr>/g, '');
					}
				}],
				summary: [':sandbox .summary p', {
					getValue: function getValue() {
						return this.textContent;
					}
				}],
				importance: [':sandbox', {
					getValue: function getValue() {
						return +this.getAttribute('data-importance');
					}
				}]
			}).bindNode('pagination', [this.sandbox.insertBefore((0, _matreshka.balalaika)(paginationHTML)[0], this.sandbox.firstChild), this.sandbox.appendChild((0, _matreshka.balalaika)(paginationHTML)[0])]).bindNode('name', ':bound(menuItem)', {
				getValue: function getValue() {
					return this.getAttribute('data-name') || this.textContent;
				}
			}).bindNode({
				nextId: ':bound(pagination) .next-page',
				previousId: ':bound(pagination) .previous-page'
			}, {
				setValue: function setValue(v) {
					this.href = '#' + v;
				}
			}).bindNode({
				nextHeader: ':bound(pagination) .next-page',
				previousHeader: ':bound(pagination) .previous-page'
			}, _matreshka.Matreshka.binders.innerHTML());
		}
	}]);

	return Article;
}(_matreshka.Matreshka.Object);

exports.default = Article;

},{"../matreshka":16,"./globals":5}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _globals = require('./globals');

var _globals2 = _interopRequireDefault(_globals);

var _matreshka = require('../matreshka');

var _article = require('./article.class');

var _article2 = _interopRequireDefault(_article);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Articles = function (_MK$Array) {
	_inherits(Articles, _MK$Array);

	function Articles() {
		_classCallCheck(this, Articles);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Articles).call(this));

		_this.Model = _article2.default;


		_this.restore('article:not([data-typedef])');

		_this.forEach(function (article, index) {
			article.previous = _this[index - 1];
			article.next = _this[index + 1];
		});

		_this.bindNode('header', 'header .inner', _matreshka.Matreshka.binders.innerHTML()).bindNode('win', window).linkProps('hashValue', [_globals2.default.app, 'hashValue']).linkProps('header', 'active', function (active) {
			return active ? active.header || _globals2.default.app.mainTitle : _globals2.default.app.mainTitle;
		}).on({
			'change:hashValue': function changeHashValue(evt) {
				var active;
				for (var i = 0; i < _this.length; i++) {
					if (_this[i].id === _this.hashValue) {
						active = _this[i];
						break;
					}
				}
				if (_this.active) {
					_this.active.isActive = false;
				}

				if (_this.active = active) {
					_this.active.isActive = true;
				}
			},
			'change:active': function changeActive(evt) {
				_globals2.default.app.htmlTitle = _this.active ? _this.active.name + ' - ' + _globals2.default.app.mainTitle : _globals2.default.app.mainTitle;
			}
		}, true);
		return _this;
	}

	return Articles;
}(_matreshka.Matreshka.Array);

exports.default = Articles;

},{"../matreshka":16,"./article.class":2,"./globals":5}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _globals = require('./globals');

var _globals2 = _interopRequireDefault(_globals);

var _matreshka = require('../matreshka');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Examples = function (_MK) {
    _inherits(Examples, _MK);

    function Examples() {
        var _this;

        _classCallCheck(this, Examples);

        (_this = _possibleConstructorReturn(this, Object.getPrototypeOf(Examples).call(this)), _this).bindNode('sandbox', 'article[id="!examples"]').on('click::(a)', function (evt) {
            var target = evt.target;

            if (! ~target.href.indexOf('gh-embed')) return;
            evt.preventDefault();

            if (!target.classList.contains('initialized')) {
                target.parentNode.appendChild(_matreshka.balalaika.create('iframe', {
                    src: target.href,
                    attributes: {
                        width: "100%",
                        height: "500",
                        frameborder: "0"
                    }
                }));
                target.classList.add('initialized');
            } else {
                target.parentNode.lastChild.classList.toggle('hide');
            }
        });
        return _this;
    }

    return Examples;
}(_matreshka.Matreshka);

exports.default = Examples;

},{"../matreshka":16,"./globals":5}],5:[function(require,module,exports){
"use strict";

module.exports = {};

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _globals = require('./globals');

var _globals2 = _interopRequireDefault(_globals);

var _matreshka = require('../matreshka');

var _articles = require('./articles.class');

var _articles2 = _interopRequireDefault(_articles);

var _typedefs = require('./typedefs.class');

var _typedefs2 = _interopRequireDefault(_typedefs);

var _typo = require('./typo.class');

var _typo2 = _interopRequireDefault(_typo);

var _notifier = require('./notifier.class');

var _notifier2 = _interopRequireDefault(_notifier);

var _search = require('./search.class');

var _search2 = _interopRequireDefault(_search);

var _performance = require('./performance.class');

var _performance2 = _interopRequireDefault(_performance);

var _examples = require('./examples.class');

var _examples2 = _interopRequireDefault(_examples);

var _headerHider = require('../lib/header-hider');

var _headerHider2 = _interopRequireDefault(_headerHider);

var _prettify = require('../lib/prettify');

var _prettify2 = _interopRequireDefault(_prettify);

var _detailsPolyfill = require('../lib/details-polyfill');

var _detailsPolyfill2 = _interopRequireDefault(_detailsPolyfill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import embed from '../lib/embed-jsbin';


var Main = function (_MK$Object) {
	_inherits(Main, _MK$Object);

	function Main() {
		var _this;

		_classCallCheck(this, Main);

		_globals2.default.app = (_this = _possibleConstructorReturn(this, Object.getPrototypeOf(Main).call(this)), _this);

		_this.bindings().events().set({
			ieVersion: document.documentMode,
			isOldIE: document.documentMode <= 9,
			view: localStorage.view || 'all',
			version: localStorage.version || 'stable',
			unstableVersion: '1.11',
			newVersions: ['1.8', '1.9'],
			hideTypoBadge: localStorage.hideTypoBadge,
			isMobile: /mobile|android/i.test(navigator.userAgent),
			importanceLevel: +localStorage.importanceLevel || 2
		}).setClassFor({
			typo: _typo2.default,
			notifier: _notifier2.default,
			search: _search2.default,
			performance: _performance2.default,
			articles: _articles2.default,
			typedefs: _typedefs2.default,
			examples: _examples2.default
		});

		if (location.hash) {
			// looks stupid but it forces chrome correctly work with :target selector
			location.href = location.href;
		}

		// move to the hashbang url structure
		if (/#\w.*/.test(location.hash) && (0, _matreshka.balalaika)('[id="!' + location.hash.replace('#', '') + '"]').length) {
			location.hash = '!' + location.hash.replace('#', '');
		}

		location.hash = location.hash || '!home';

		if (~location.hash.indexOf('comments')) {
			// #!/matreshka/comments/matreshka-ru%23matreshka::unread
			// #!/matreshka/comments/matreshka-ru:matreshka-bindnode::unread
			var threadID = location.hash.replace(/#!\/matreshka\/comments\/matreshka-\S{2}(?:%23|:)(.*)::unread/, '$1').toLowerCase(),
			    commentArticle,
			    commentsContainer;

			for (var i = 0; i < _this.articles.length; i++) {
				if (~_this.articles[i].id.toLowerCase().replace(/\./g, '').indexOf(threadID)) {
					commentArticle = _this.articles[i];
					commentsContainer = commentArticle.bound('commentsContainer');
					break;
				}
			}

			if (commentArticle && commentsContainer) {
				location.hash = commentArticle.id;
				commentsContainer.classList.add('muut');
				commentArticle.commentsShown = true;
				_this.muut();
			}
		}

		// have no time to make it work in tamplete, so let's shitcode!
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = (0, _matreshka.balalaika)('a')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var a = _step.value;

				var href = a.getAttribute('href');
				if (href && ~href.indexOf('//')) {
					a.target = '_blank';
				}
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}

		_this.initDynamicStyles();

		// in ie10 code snippets are inlined
		if (_this.ieVersion <= 10) {
			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = (0, _matreshka.balalaika)('pre code')[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var snippet = _step2.value;

					snippet.innerHTML = snippet.innerHTML.replace(/\n/g, '<br>');
				}
			} catch (err) {
				_didIteratorError2 = true;
				_iteratorError2 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion2 && _iterator2.return) {
						_iterator2.return();
					}
				} finally {
					if (_didIteratorError2) {
						throw _iteratorError2;
					}
				}
			}
		}

		prettyPrint();

		var _iteratorNormalCompletion3 = true;
		var _didIteratorError3 = false;
		var _iteratorError3 = undefined;

		try {
			for (var _iterator3 = _this.articles[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
				var article = _step3.value;

				if (article.id === location.hash && article.importance > _this.importanceLevel) {}
			}
		} catch (err) {
			_didIteratorError3 = true;
			_iteratorError3 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion3 && _iterator3.return) {
					_iterator3.return();
				}
			} finally {
				if (_didIteratorError3) {
					throw _iteratorError3;
				}
			}
		}

		_this.loading = false;

		if (location.hash == '#!home') {
			setTimeout(function () {
				var el = document.querySelector('.demo .in');
				el.focus();
				el.selectionStart = el.selectionEnd = el.value.length;
			});
		}

		return _this;
	}

	_createClass(Main, [{
		key: 'initDynamicStyles',
		value: function initDynamicStyles() {
			var styleSheet = document.styleSheets[0];

			styleSheet.insertRule('\n\t\t\tbody[data-version="stable"] [data-since="' + this.unstableVersion + '"],\n\t\t\tbody[data-importance-level="1"] [data-importance="2"],\n\t\t\tbody[data-importance-level="1"] [data-importance="3"],\n\t\t\tbody[data-importance-level="2"] [data-importance="3"] {\n\t\t\t\tdisplay: none;\n\t\t\t}', styleSheet.cssRules.length);

			styleSheet.insertRule('article[data-since="' + this.unstableVersion + '"]::before {\n\t\t\t\tcontent: \'\\26A0   New since ' + this.unstableVersion + '\';\n\t\t\t\tcolor: #ef5350;\n\t\t\t}', styleSheet.cssRules.length);

			styleSheet.insertRule('nav a[data-since="' + this.unstableVersion + '"]::after {\n\t\t\t\tcontent: \'\\26A0\';\n\t\t\t\tcolor: #ef5350;\n\t\t\t}', styleSheet.cssRules.length);

			return this;
		}
	}, {
		key: 'bindings',
		value: function bindings() {
			return this.bindNode('demoProp', '.demo .in, .demo .out').bindNode({
				sandbox: 'body',
				win: window,
				typeBadge: ':sandbox .typo-badge',
				viewSwitcher: 'nav .view-switcher',
				versionSwitcher: 'nav .version-switcher',
				navShown: ['body', _matreshka.Matreshka.binders.className('nav-shown')],
				isMobile: [':sandbox', _matreshka.Matreshka.binders.className('mobile')],
				loading: ['.loader', _matreshka.Matreshka.binders.className('!hide')],
				navOverlay: ['.nav-overlay', _matreshka.Matreshka.binders.className('!hide')],
				hideTypoBadge: [':bound(typeBadge)', _matreshka.Matreshka.binders.className('hide')],
				htmlTitle: ['head title', _matreshka.Matreshka.binders.innerHTML()],
				isOldIE: [':bound(viewSwitcher)', _matreshka.Matreshka.binders.visibility(false)],
				hashValue: [':sandbox .another-language', {
					setValue: function setValue(v) {
						this.href = this.href.split('#')[0] + '#' + v;
					}
				}],
				version: [':sandbox', {
					setValue: function setValue(v) {
						this.setAttribute('data-version', v);
					}
				}],
				mainTitle: ['title', {
					getValue: function getValue() {
						return this.innerHTML;
					}
				}],

				view: ['body', _matreshka.Matreshka.binders.dataset('view')],
				importanceLevel: [':sandbox .doc-importance input', {
					getValue: function getValue() {
						return this.checked ? 3 : 2;
					},
					setValue: function setValue(v) {
						this.checked = v === 3;
					}
				}]
			}).bindNode({
				importanceLevel: [':sandbox', _matreshka.Matreshka.binders.dataset('importanceLevel')],
				hashValue: [window, {
					on: 'hashchange',
					getValue: function getValue() {
						return location.hash.replace('#', '');
					}
				}]
			}).bindNode({
				view: ':bound(viewSwitcher)',
				version: ':bound(versionSwitcher)'
			}, {
				on: 'click',
				getValue: function getValue() {
					return this.querySelector('.checked').getAttribute('data-value');
				},
				setValue: function setValue(v) {
					_matreshka.Matreshka.$b(this.children).forEach(function (item) {
						item.classList.toggle('checked', item.getAttribute('data-value') === v);
					});
				},
				initialize: function initialize() {
					this.addEventListener('mousedown', function (evt) {
						if (evt.target !== this) _matreshka.Matreshka.$b(this.children).forEach(function (item) {
							item.classList.toggle('checked', evt.target === item);
						});
					});
				}
			});
		}
	}, {
		key: 'events',
		value: function events() {
			var _this3 = this;

			return this.onDebounce('scroll::win', function () {
				var _this2 = this;

				if (this.view === 'all') {
					var fromTop = window.pageYOffset,
					    fromLeft = window.pageXOffset,
					    cur = this.articles.filter(function (article) {
						var el = article.sandbox;
						return (article.since !== _this2.unstableVersion || _this2.version == 'unstable') && el.offsetTop < fromTop + 50 && el.offsetWidth > 0 && el.offsetHeight > 0;
					}),
					    hash;

					cur = cur[cur.length - 1];

					hash = cur ? cur.id : "";

					if (this.hashValue != hash) {
						this.hashValue = hash;
						if (window.history && history.pushState) {
							history.pushState(null, null, '#' + hash);
						} else {
							location.hash = hash;
							scrollTo(fromLeft, fromTop);
						}
					}
				}
			}, 200).on({
				'change:view': function changeView(evt) {
					if (!_this3.articles) return;
					var fromLeft = window.pageXOffset,
					    fromTop;

					localStorage.view = _this3.view;

					if (_this3.view === 'all') {
						fromTop = _this3.articles.active ? _this3.articles.active.bound().offsetTop : 0;
					} else {
						fromTop = 0;
					}

					scrollTo(fromLeft, fromTop);
				},
				'change:version': function changeVersion(evt) {
					return localStorage.version = _this3.version;
				},
				'change:importanceLevel': function changeImportanceLevel(evt) {
					return localStorage.importanceLevel = _this3.importanceLevel;
				},
				'click::(.show-nav)': function clickShowNav(evt) {
					_this3.navOverlay = true;

					_this3.delay(function () {
						this.navShown = true;
					});
				},
				'click::navOverlay': function clickNavOverlay(evt) {
					_this3.once('transitionend::navOverlay', function (evt) {
						return _this3.navOverlay = false;
					});
					_this3.navShown = false;
				},
				/*'click::([href*="jsbin.com"][href*="edit"])': evt => {
    	if (evt.target.classList.contains('embedded')) {
    		evt.target.nextSibling.classList.toggle('hide');
    	} else {
    		embed(evt.target);
    	}
    		evt.preventDefault();
    },*/
				'click::typeBadge(.close)': function clickTypeBadgeClose(evt) {
					return localStorage.hideTypoBadge = _this3.hideTypoBadge = true;
				},
				'change:hashValue change:articles': function changeHashValueChangeArticles(evt) {
					var article = _this3.articles.filter(function (article) {
						return article.id === _this3.hashValue;
					})[0];
					if (article && article.importance > _this3.importanceLevel) {
						_this3.importanceLevel = article.importance;
					}
				}
			});
		}
	}, {
		key: 'muut',
		value: function muut() {
			var script;
			if (typeof jQuery === 'undefined' || !jQuery.fn.muut) {
				document.body.appendChild(_matreshka.balalaika.create('script', {
					src: '//cdn.muut.com/1/moot.min.js'
				}));
			} else {
				jQuery('.muut').muut();
			}
		}
	}]);

	return Main;
}(_matreshka.Matreshka.Object);

exports.default = Main;

},{"../lib/details-polyfill":13,"../lib/header-hider":14,"../lib/prettify":15,"../matreshka":16,"./articles.class":3,"./examples.class":4,"./globals":5,"./notifier.class":7,"./performance.class":8,"./search.class":9,"./typedefs.class":11,"./typo.class":12}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _globals = require('./globals');

var _globals2 = _interopRequireDefault(_globals);

var _matreshka = require('../matreshka');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_MK$Object) {
	_inherits(_class, _MK$Object);

	function _class() {
		var _this;

		_classCallCheck(this, _class);

		(_this = _possibleConstructorReturn(this, Object.getPrototypeOf(_class).call(this)), _this).set({
			formURL: '//docs.google.com/forms/d/1hxQBT5pyq5tLLWH0dWFtwUSLocFC3zxqb9eDJa9p_jE/formResponse',
			typeName: 'entry.1972481987',
			textName: 'entry.1777335671',
			pageName: 'entry.339184258'
		}).bindNode('sandbox', 'form.notification-form').bindNode({
			type: ':sandbox input.type',
			text: ':sandbox input.text',
			page: ':sandbox input.page'
		}).bindNode({
			typeName: ':bound(type)',
			textName: ':bound(text)',
			pageName: ':bound(page)'
		}, {
			on: null,
			getValue: null,
			setValue: function setValue(v) {
				this.name = v;
			}
		}).bindNode('formURL', ':sandbox', {
			setValue: function setValue(v) {
				this.action = v;
			}
		});
		return _this;
	}

	_createClass(_class, [{
		key: 'notify',
		value: function notify(type, text) {
			this.type = type;
			this.text = text;
			this.page = location.href;
			this.bound('sandbox').submit();
		}
	}]);

	return _class;
}(_matreshka.Matreshka.Object);

exports.default = _class;

},{"../matreshka":16,"./globals":5}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _globals = require('./globals');

var _globals2 = _interopRequireDefault(_globals);

var _matreshka = require('../matreshka');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var data = {
	10: {
		ng: [430, 463, 1404, 139, 204],
		kk: [600, 720, 1291, 197, 302],
		rt: [996, 722, 1251, 178, 302],
		mk: [1126, 1615, 2490, 340, 725]
	},
	50: {
		ng: [58.43, 105, 195, 39.63, 17.36],
		kk: [105, 162, 217, 55.89, 48.37],
		rt: [137, 111, 147, 37.45, 33.75],
		mk: [200, 260, 570, 166, 149]
	},
	100: {
		ng: [21.09, 40.87, 61.53, 15.96, 4.40],
		kk: [42.57, 71.28, 86.31, 25.17, 23.65],
		rt: [47.64, 43.13, 50.62, 15.61, 11.49],
		mk: [90.93, 119, 297, 85.02, 69.25]
	},
	500: {
		ng: [1.44, 2.75, 3.93, 0.95, 0.43],
		kk: [4.00, 2.98, 5.45, 1.80, 2.35],
		rt: [3.34, 2.71, 3.44, 0.79, 0.35],
		mk: [18.21, 23.06, 53.75, 17.31, 11.59]
	},
	1000: {
		ng: [0.37, 0.78, 0.95, 0.28, 0.20],
		kk: [0.67, 0.48, 0.89, 0.44, 0.69],
		rt: [0.79, 0.67, 0.99, 0.21, 0.14],
		mk: [8.71, 11.21, 29.07, 8.66, 5.51]
	}

};

var Performance = function (_MK$Object) {
	_inherits(Performance, _MK$Object);

	function Performance() {
		_classCallCheck(this, Performance);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Performance).call(this));

		_this.bindNode('sandbox', '.perf-graph-wrapper').bindNode({
			browser: ':sandbox .perf-browser',
			count: ':sandbox .perf-count',
			graph: ':sandbox .perf-graph',
			browserName: [':bound(browser)', {
				setValue: null,
				getValue: function getValue() {
					return this[this.selectedIndex].innerHTML;
				}
			}]
		}).bindNode({
			count: [':sandbox .benchmark-url', {
				setValue: function setValue(v) {
					this.href = {
						10: 'http://jsperf.com/angular-vs-knockout-vs-react-vs-matreshka/20',
						50: 'http://jsperf.com/angular-vs-knockout-vs-react-vs-matreshka/21',
						100: 'http://jsperf.com/angular-vs-knockout-vs-react-vs-matreshka/22',
						500: 'http://jsperf.com/angular-vs-knockout-vs-react-vs-matreshka/23',
						1000: 'http://jsperf.com/angular-vs-knockout-vs-react-vs-matreshka/24'
					}[v];
				}
			}]
		}).bindNode({
			mk: ':sandbox .mk',
			kk: ':sandbox .kk',
			ng: ':sandbox .ng',
			rt: ':sandbox .rt'
		}, {
			setValue: function setValue(v) {
				this.style.height = v + '%';
			}
		}).bindNode({
			slower_kk: ':bound(kk) .slower span',
			slower_ng: ':bound(ng) .slower span',
			slower_rt: ':bound(rt) .slower span'
		}, _matreshka.Matreshka.binders.innerHTML()).on({
			'change:browser change:count': function changeBrowserChangeCount(evt) {
				var d = data[_this.count],
				    values = [],
				    valuesMap = {};

				for (var framework in d) {
					var v = _this.browser === 'ie' ? (d[framework][3] + d[framework][4]) / 2 : d[framework][_this.nodes.browser.selectedIndex];
					values.push(v);
					valuesMap[framework] = v;
				}

				var max = Math.max.apply(Math, values);

				for (var _framework in valuesMap) {
					var _v = valuesMap[_framework];

					_this[_framework] = _v / max * 100;
					_this['slower_' + _framework] = 100 - _v / max * 100 | 0;
					//$( 'div', column )[0].innerHTML = framework === 'mk' ? '' : ( 100 - ( v/max ) * 100 | 0 ) + '% slower';
				}
			}
		}, true);

		var handler = function handler() {
			var d = data[count[count.selectedIndex].innerHTML.trim()],
			    values = [],
			    valuesMap = {};

			//graph.innerHTML = '';

			for (var framework in d) {
				var v = browser.value === 'ie' ? (d[framework][3] + d[framework][4]) / 2 : d[framework][browser.selectedIndex];
				values.push(v);
				valuesMap[framework] = v;
			}

			var max = Math.max.apply(Math, values);
			for (var _framework2 in valuesMap) {
				var _v2 = valuesMap[_framework2],
				    column = (0, _matreshka.balalaika)('.column.' + _framework2)[0];

				column.style.height = _v2 / max * 100 + '%';
				(0, _matreshka.balalaika)('div', column)[0].innerHTML = _framework2 === 'mk' ? '' : (100 - _v2 / max * 100 | 0) + '% slower';
			}
		};

		//$([browser, count]).on('change', handler);
		//handler();
		return _this;
	}

	return Performance;
}(_matreshka.Matreshka.Object);

exports.default = Performance;

},{"../matreshka":16,"./globals":5}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _globals = require('./globals');

var _globals2 = _interopRequireDefault(_globals);

var _matreshka = require('../matreshka');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_MK$Array) {
	_inherits(_class, _MK$Array);

	function _class(data) {
		var _temp, _this;

		_classCallCheck(this, _class);

		var UP_KEY = 38,
		    DOWN_KEY = 40,
		    TAB_KEY = 9,
		    ENTER_KEY = 13;

		(_temp = (_this = _possibleConstructorReturn(this, Object.getPrototypeOf(_class).call(this)), _this), _this.Model = _matreshka.Matreshka.Object, _this.itemRenderer = '<li>', _temp).set(data).bindNode({
			sandbox: 'header',
			container: ':sandbox .search-results-dropdown',
			search: ':sandbox .search',
			searchMode: [':sandbox', _matreshka.Matreshka.binders.className('search-mode')]
		}).on({
			'click::(.show-search)': function clickShowSearch(evt) {
				_this.searchMode = true;
				_this.bound('search').focus();
			},
			'click::(.back)': function clickBack(evt) {
				_this.searchMode = false;
				_this.search = '';
			},
			'*@render': function render(evt) {
				evt.self.bindNode('header', ':sandbox', _matreshka.Matreshka.binders.innerHTML()).bindNode('isActive', ':sandbox', _matreshka.Matreshka.binders.className('active'));
			},
			'@click::sandbox': function clickSandbox(evt) {
				_this.searchMode = false;
				_this.search = '';
				document.location.hash = _this.active.id;
			},
			'*@mouseover::sandbox': function mouseoverSandbox(evt) {
				_this.forEach(function (item) {
					item.isActive = item.eq(evt.self);
				});
			},
			'keydown::search': function keydownSearch(evt) {
				var activeIndex;
				if (_this.length) {
					if (evt.which === UP_KEY || evt.which === DOWN_KEY) {
						activeIndex = _this.indexOf(_this.active);

						if (evt.which === UP_KEY) {
							activeIndex = activeIndex - 1;
						} else if (evt.which === DOWN_KEY) {
							activeIndex = activeIndex + 1;
						}

						activeIndex = activeIndex < 0 ? _this.length + activeIndex : activeIndex;
						activeIndex %= _this.length;
						_this.forEach(function (item, index) {
							item.isActive = index === activeIndex;
						});

						evt.preventDefault();
					} else if (evt.which === ENTER_KEY) {
						document.location.hash = _this.active.id;
						_this.search = '';
						_this.searchMode = false;
					}
				}
			},
			'*@change:isActive': function changeIsActive(evt) {
				_this.active = evt.self.isActive ? evt.self : _this.active;
			},
			'change:search': function changeSearch(evt) {
				var search = _this.search;
				if (search) {
					search = search.toLowerCase();
					_this.recreate(_globals2.default.app.articles.toNative().filter(function (article) {
						search.toLowerCase();
						return ~article.name.toLowerCase().indexOf(search) || ~article.id.toLowerCase().indexOf(search);
					}).map(function (article) {
						return {
							header: article.header,
							name: article.name,
							article: article,
							id: article.id
						};
					}).slice(0, 5));

					if (_this.length) {
						_this[0].isActive = true;
					}
				} else {
					_this.recreate();
				}
			}
		});
		return _this;
	}

	return _class;
}(_matreshka.Matreshka.Array);

exports.default = _class;

},{"../matreshka":16,"./globals":5}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _globals = require('./globals');

var _globals2 = _interopRequireDefault(_globals);

var _matreshka = require('../matreshka');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_MK$Object) {
	_inherits(_class, _MK$Object);

	function _class() {
		_classCallCheck(this, _class);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(_class).call(this));
	}

	_createClass(_class, [{
		key: 'onRender',
		value: function onRender() {
			this.bindNode('typedef', ':sandbox', _matreshka.Matreshka.binders.dataset('typedef')).bindNode('isShown', ':sandbox', _matreshka.Matreshka.binders.className('shown'));
		}
	}]);

	return _class;
}(_matreshka.Matreshka.Object);

exports.default = _class;

},{"../matreshka":16,"./globals":5}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _globals = require('./globals');

var _globals2 = _interopRequireDefault(_globals);

var _matreshka = require('../matreshka');

var _typedef = require('./typedef.class');

var _typedef2 = _interopRequireDefault(_typedef);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_MK$Array) {
	_inherits(_class, _MK$Array);

	function _class() {
		var _temp, _this;

		_classCallCheck(this, _class);

		(_temp = (_this = _possibleConstructorReturn(this, Object.getPrototypeOf(_class).call(this)), _this), _this.Model = _typedef2.default, _temp).restore('article[data-typedef]').bindNode('sandbox', 'body').bindNode('overlay', '.typedef-overlay', _matreshka.Matreshka.binders.className('!hide')).bindNode('overlayOpaque', ':bound(overlay)', {
			setValue: function setValue(v) {
				this.style.opacity = v ? .5 : 0;
			}
		}).on('click::([data-type])', function (evt) {
			this.forEach(function (typedef) {
				typedef.isShown = typedef.typedef === evt.target.getAttribute('data-type');
			});
		}).on('@change:isShown', function (evt) {
			if (evt.value) {
				if (this.shown) {
					this.shown.isShown = false;
				}

				this.overlay = true;

				this.overlayOpaque = false;

				this.delay(function () {
					this.overlayOpaque = true;
				});

				this.shown = evt.self;
			}
		}).on('click::overlay @click::(.close-modal)', _this.close);

		_globals2.default.app.on('keydown::sandbox', function (evt) {
			if (evt.which === 27) {
				this.close();
			}
		}, _this);
		return _this;
	}

	_createClass(_class, [{
		key: 'close',
		value: function close() {
			this.overlayOpaque = false;

			this.once('transitionend::overlay', function () {
				this.overlay = false;
			});

			if (this.shown) {
				this.shown.isShown = false;
			}

			this.shown = null;
		}
	}]);

	return _class;
}(_matreshka.Matreshka.Array);

exports.default = _class;

},{"../matreshka":16,"./globals":5,"./typedef.class":10}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _globals = require('./globals');

var _globals2 = _interopRequireDefault(_globals);

var _matreshka = require('../matreshka');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_MK$Object) {
	_inherits(_class, _MK$Object);

	function _class() {
		var _this;

		_classCallCheck(this, _class);

		(_this = _possibleConstructorReturn(this, Object.getPrototypeOf(_class).call(this)), _this).set({
			formURL: '//docs.google.com/forms/d/1lCplFvSZfwDU_zr4WsK0fSCo5ktBOnox0od_BPx40xk/formResponse',
			selectionName: 'entry.1972481987',
			commentName: 'entry.1777335671',
			pageName: 'entry.339184258'
		}).bindNode('sandbox', 'form.typo').bindNode('shown', ':sandbox', _matreshka.Matreshka.binders.className('shown')).bindNode({
			selection: ':sandbox input.selection',
			comment: ':sandbox textarea.comment',
			page: ':sandbox input.page'
		}).bindNode({
			selectionName: ':bound(selection)',
			commentName: ':bound(comment)',
			pageName: ':bound(page)'
		}, {
			on: null,
			getValue: null,
			setValue: function setValue(v) {
				this.name = v;
			}
		}).bindNode('overlay', '.typo-overlay', _matreshka.Matreshka.binders.className('!hide')).bindNode('overlayOpaque', ':bound(overlay)', {
			setValue: function setValue(v) {
				this.style.opacity = v ? .5 : 0;
			}
		}).bindNode('formURL', ':sandbox', {
			setValue: function setValue(v) {
				this.action = v;
			}
		}).bindNode('selection', ':sandbox p.selection', _matreshka.Matreshka.binders.innerHTML()).on('submit::sandbox', function (evt) {
			this.shown = false;
		}).on('change:shown', function (evt) {
			if (evt.value) {
				this.overlay = true;
				this.delay(function () {
					this.overlayOpaque = true;
				});
			} else {
				this.overlayOpaque = false;

				this.once('transitionend::overlay', function () {
					this.overlay = false;
				});
			}
		}).on('click::overlay click::(.cancel) click::(.close-modal)', function (evt) {
			this.shown = false;
			evt.preventDefault();
		});

		_globals2.default.app.on('keydown::sandbox', function (evt) {
			if (13 === evt.which && (evt.domEvent.ctrlKey || evt.domEvent.metaKey)) {
				var selectionText = window.getSelection().toString();
				if (selectionText) {
					this.comment = '';
					this.selection = selectionText;
					this.page = location.href;
					this.shown = true;
				}
			}

			if (evt.which === 27) {
				this.shown = false;
			}
		}, _this);
		return _this;
	}

	return _class;
}(_matreshka.Matreshka.Object);

exports.default = _class;

},{"../matreshka":16,"./globals":5}],13:[function(require,module,exports){
'use strict';

if (!('open' in document.createElement('details'))) {
    var styleSheet = document.styleSheets[0];
    styleSheet.insertRule('details > :not(summary) { display: none; }', styleSheet.cssRules.length);
    styleSheet.insertRule('details.open > :not(summary) { display: block; }', styleSheet.cssRules.length);
    document.addEventListener('click', function (evt) {
        if (evt.target.tagName == 'SUMMARY' && evt.target.parentNode.tagName == 'DETAILS') {
            evt.target.parentNode.classList.toggle('open');
        }
    });
}

},{}],14:[function(require,module,exports){
'use strict';

/*
		By Osvaldas Valutis, www.osvaldas.info
		Available for use under the MIT License
	*/

;(function (document, window, index) {
	'use strict';

	var elSelector = 'header',
	    elClassHidden = 'hidden',
	    throttleTimeout = 500,
	    element = document.querySelector(elSelector);

	if (!element) return true;

	var dHeight = 0,
	    wHeight = 0,
	    wScrollCurrent = 0,
	    wScrollBefore = 0,
	    wScrollDiff = 0,
	    hasElementClass = function hasElementClass(element, className) {
		return element.classList ? element.classList.contains(className) : new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
	},
	    addElementClass = function addElementClass(element, className) {
		element.classList ? element.classList.add(className) : element.className += ' ' + className;
	},
	    removeElementClass = function removeElementClass(element, className) {
		element.classList ? element.classList.remove(className) : element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
	},
	    throttle = function throttle(delay, fn) {
		var last, deferTimer;
		return function () {
			var context = this,
			    args = arguments,
			    now = +new Date();
			if (last && now < last + delay) {
				clearTimeout(deferTimer);
				deferTimer = setTimeout(function () {
					last = now;fn.apply(context, args);
				}, delay);
			} else {
				last = now;
				fn.apply(context, args);
			}
		};
	};

	window.addEventListener('scroll', throttle(throttleTimeout, function () {
		dHeight = document.body.offsetHeight;
		wHeight = window.innerHeight;
		wScrollCurrent = window.pageYOffset;
		wScrollDiff = wScrollBefore - wScrollCurrent;

		if (wScrollCurrent <= 0) // scrolled to the very top; element sticks to the top
			removeElementClass(element, elClassHidden);else if (wScrollDiff > 0 && hasElementClass(element, elClassHidden)) // scrolled up; element slides in
			removeElementClass(element, elClassHidden);else if (wScrollDiff < 0) // scrolled down
			{
				if (wScrollCurrent + wHeight >= dHeight && hasElementClass(element, elClassHidden)) // scrolled to the very bottom; element slides in
					removeElementClass(element, elClassHidden);else // scrolled down; element slides out
					addElementClass(element, elClassHidden);
			}

		wScrollBefore = wScrollCurrent;
	}));
})(document, window, 0);

},{}],15:[function(require,module,exports){
"use strict";

!function () {
  var q = null;window.PR_SHOULD_USE_CONTINUATION = !0;
  (function () {
    function S(a) {
      function d(e) {
        var b = e.charCodeAt(0);if (b !== 92) return b;var a = e.charAt(1);return (b = r[a]) ? b : "0" <= a && a <= "7" ? parseInt(e.substring(1), 8) : a === "u" || a === "x" ? parseInt(e.substring(2), 16) : e.charCodeAt(1);
      }function g(e) {
        if (e < 32) return (e < 16 ? "\\x0" : "\\x") + e.toString(16);e = String.fromCharCode(e);return e === "\\" || e === "-" || e === "]" || e === "^" ? "\\" + e : e;
      }function b(e) {
        var b = e.substring(1, e.length - 1).match(/\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\S\s]|[^\\]/g),
            e = [],
            a = b[0] === "^",
            c = ["["];a && c.push("^");for (var a = a ? 1 : 0, f = b.length; a < f; ++a) {
          var h = b[a];if (/\\[bdsw]/i.test(h)) c.push(h);else {
            var h = d(h),
                l;a + 2 < f && "-" === b[a + 1] ? (l = d(b[a + 2]), a += 2) : l = h;e.push([h, l]);l < 65 || h > 122 || (l < 65 || h > 90 || e.push([Math.max(65, h) | 32, Math.min(l, 90) | 32]), l < 97 || h > 122 || e.push([Math.max(97, h) & -33, Math.min(l, 122) & -33]));
          }
        }e.sort(function (e, a) {
          return e[0] - a[0] || a[1] - e[1];
        });b = [];f = [];for (a = 0; a < e.length; ++a) {
          h = e[a], h[0] <= f[1] + 1 ? f[1] = Math.max(f[1], h[1]) : b.push(f = h);
        }for (a = 0; a < b.length; ++a) {
          h = b[a], c.push(g(h[0])), h[1] > h[0] && (h[1] + 1 > h[0] && c.push("-"), c.push(g(h[1])));
        }c.push("]");return c.join("");
      }function s(e) {
        for (var a = e.source.match(/\[(?:[^\\\]]|\\[\S\s])*]|\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\\d+|\\[^\dux]|\(\?[!:=]|[()^]|[^()[\\^]+/g), c = a.length, d = [], f = 0, h = 0; f < c; ++f) {
          var l = a[f];l === "(" ? ++h : "\\" === l.charAt(0) && (l = +l.substring(1)) && (l <= h ? d[l] = -1 : a[f] = g(l));
        }for (f = 1; f < d.length; ++f) {
          -1 === d[f] && (d[f] = ++x);
        }for (h = f = 0; f < c; ++f) {
          l = a[f], l === "(" ? (++h, d[h] || (a[f] = "(?:")) : "\\" === l.charAt(0) && (l = +l.substring(1)) && l <= h && (a[f] = "\\" + d[l]);
        }for (f = 0; f < c; ++f) {
          "^" === a[f] && "^" !== a[f + 1] && (a[f] = "");
        }if (e.ignoreCase && m) for (f = 0; f < c; ++f) {
          l = a[f], e = l.charAt(0), l.length >= 2 && e === "[" ? a[f] = b(l) : e !== "\\" && (a[f] = l.replace(/[A-Za-z]/g, function (a) {
            a = a.charCodeAt(0);return "[" + String.fromCharCode(a & -33, a | 32) + "]";
          }));
        }return a.join("");
      }for (var x = 0, m = !1, j = !1, k = 0, c = a.length; k < c; ++k) {
        var i = a[k];if (i.ignoreCase) j = !0;else if (/[a-z]/i.test(i.source.replace(/\\u[\da-f]{4}|\\x[\da-f]{2}|\\[^UXux]/gi, ""))) {
          m = !0;j = !1;break;
        }
      }for (var r = { b: 8, t: 9, n: 10, v: 11,
        f: 12, r: 13 }, n = [], k = 0, c = a.length; k < c; ++k) {
        i = a[k];if (i.global || i.multiline) throw Error("" + i);n.push("(?:" + s(i) + ")");
      }return RegExp(n.join("|"), j ? "gi" : "g");
    }function T(a, d) {
      function g(a) {
        var c = a.nodeType;if (c == 1) {
          if (!b.test(a.className)) {
            for (c = a.firstChild; c; c = c.nextSibling) {
              g(c);
            }c = a.nodeName.toLowerCase();if ("br" === c || "li" === c) s[j] = "\n", m[j << 1] = x++, m[j++ << 1 | 1] = a;
          }
        } else if (c == 3 || c == 4) c = a.nodeValue, c.length && (c = d ? c.replace(/\r\n?/g, "\n") : c.replace(/[\t\n\r ]+/g, " "), s[j] = c, m[j << 1] = x, x += c.length, m[j++ << 1 | 1] = a);
      }var b = /(?:^|\s)nocode(?:\s|$)/,
          s = [],
          x = 0,
          m = [],
          j = 0;g(a);return { a: s.join("").replace(/\n$/, ""), d: m };
    }function H(a, d, g, b) {
      d && (a = { a: d, e: a }, g(a), b.push.apply(b, a.g));
    }function U(a) {
      for (var d = void 0, g = a.firstChild; g; g = g.nextSibling) {
        var b = g.nodeType,
            d = b === 1 ? d ? a : g : b === 3 ? V.test(g.nodeValue) ? a : d : d;
      }return d === a ? void 0 : d;
    }function C(a, d) {
      function g(a) {
        for (var j = a.e, k = [j, "pln"], c = 0, i = a.a.match(s) || [], r = {}, n = 0, e = i.length; n < e; ++n) {
          var z = i[n],
              w = r[z],
              t = void 0,
              f;if (typeof w === "string") f = !1;else {
            var h = b[z.charAt(0)];
            if (h) t = z.match(h[1]), w = h[0];else {
              for (f = 0; f < x; ++f) {
                if (h = d[f], t = z.match(h[1])) {
                  w = h[0];break;
                }
              }t || (w = "pln");
            }if ((f = w.length >= 5 && "lang-" === w.substring(0, 5)) && !(t && typeof t[1] === "string")) f = !1, w = "src";f || (r[z] = w);
          }h = c;c += z.length;if (f) {
            f = t[1];var l = z.indexOf(f),
                B = l + f.length;t[2] && (B = z.length - t[2].length, l = B - f.length);w = w.substring(5);H(j + h, z.substring(0, l), g, k);H(j + h + l, f, I(w, f), k);H(j + h + B, z.substring(B), g, k);
          } else k.push(j + h, w);
        }a.g = k;
      }var b = {},
          s;(function () {
        for (var g = a.concat(d), j = [], k = {}, c = 0, i = g.length; c < i; ++c) {
          var r = g[c],
              n = r[3];if (n) for (var e = n.length; --e >= 0;) {
            b[n.charAt(e)] = r;
          }r = r[1];n = "" + r;k.hasOwnProperty(n) || (j.push(r), k[n] = q);
        }j.push(/[\S\s]/);s = S(j);
      })();var x = d.length;return g;
    }function v(a) {
      var d = [],
          g = [];a.tripleQuotedStrings ? d.push(["str", /^(?:'''(?:[^'\\]|\\[\S\s]|''?(?=[^']))*(?:'''|$)|"""(?:[^"\\]|\\[\S\s]|""?(?=[^"]))*(?:"""|$)|'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$))/, q, "'\""]) : a.multiLineStrings ? d.push(["str", /^(?:'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$)|`(?:[^\\`]|\\[\S\s])*(?:`|$))/, q, "'\"`"]) : d.push(["str", /^(?:'(?:[^\n\r'\\]|\\.)*(?:'|$)|"(?:[^\n\r"\\]|\\.)*(?:"|$))/, q, "\"'"]);a.verbatimStrings && g.push(["str", /^@"(?:[^"]|"")*(?:"|$)/, q]);var b = a.hashComments;b && (a.cStyleComments ? (b > 1 ? d.push(["com", /^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/, q, "#"]) : d.push(["com", /^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\n\r]*)/, q, "#"]), g.push(["str", /^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/, q])) : d.push(["com", /^#[^\n\r]*/, q, "#"]));a.cStyleComments && (g.push(["com", /^\/\/[^\n\r]*/, q]), g.push(["com", /^\/\*[\S\s]*?(?:\*\/|$)/, q]));if (b = a.regexLiterals) {
        var s = (b = b > 1 ? "" : "\n\r") ? "." : "[\\S\\s]";g.push(["lang-regex", RegExp("^(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*(" + ("/(?=[^/*" + b + "])(?:[^/\\x5B\\x5C" + b + "]|\\x5C" + s + "|\\x5B(?:[^\\x5C\\x5D" + b + "]|\\x5C" + s + ")*(?:\\x5D|$))+/") + ")")]);
      }(b = a.types) && g.push(["typ", b]);b = ("" + a.keywords).replace(/^ | $/g, "");b.length && g.push(["kwd", RegExp("^(?:" + b.replace(/[\s,]+/g, "|") + ")\\b"), q]);d.push(["pln", /^\s+/, q, " \r\n\t "]);b = "^.[^\\s\\w.$@'\"`/\\\\]*";a.regexLiterals && (b += "(?!s*/)");g.push(["lit", /^@[$_a-z][\w$@]*/i, q], ["typ", /^(?:[@_]?[A-Z]+[a-z][\w$@]*|\w+_t\b)/, q], ["pln", /^[$_a-z][\w$@]*/i, q], ["lit", /^(?:0x[\da-f]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+-]?\d+)?)[a-z]*/i, q, "0123456789"], ["pln", /^\\[\S\s]?/, q], ["pun", RegExp(b), q]);return C(d, g);
    }function J(a, d, g) {
      function b(a) {
        var c = a.nodeType;if (c == 1 && !x.test(a.className)) {
          if ("br" === a.nodeName) s(a), a.parentNode && a.parentNode.removeChild(a);else for (a = a.firstChild; a; a = a.nextSibling) {
            b(a);
          }
        } else if ((c == 3 || c == 4) && g) {
          var d = a.nodeValue,
              i = d.match(m);if (i) c = d.substring(0, i.index), a.nodeValue = c, (d = d.substring(i.index + i[0].length)) && a.parentNode.insertBefore(j.createTextNode(d), a.nextSibling), s(a), c || a.parentNode.removeChild(a);
        }
      }function s(a) {
        function b(a, c) {
          var d = c ? a.cloneNode(!1) : a,
              e = a.parentNode;if (e) {
            var e = b(e, 1),
                g = a.nextSibling;e.appendChild(d);for (var i = g; i; i = g) {
              g = i.nextSibling, e.appendChild(i);
            }
          }return d;
        }for (; !a.nextSibling;) {
          if (a = a.parentNode, !a) return;
        }for (var a = b(a.nextSibling, 0), d; (d = a.parentNode) && d.nodeType === 1;) {
          a = d;
        }c.push(a);
      }for (var x = /(?:^|\s)nocode(?:\s|$)/, m = /\r\n?|\n/, j = a.ownerDocument, k = j.createElement("li"); a.firstChild;) {
        k.appendChild(a.firstChild);
      }for (var c = [k], i = 0; i < c.length; ++i) {
        b(c[i]);
      }d === (d | 0) && c[0].setAttribute("value", d);var r = j.createElement("ol");
      r.className = "linenums";for (var d = Math.max(0, d - 1 | 0) || 0, i = 0, n = c.length; i < n; ++i) {
        k = c[i], k.className = "L" + (i + d) % 10, k.firstChild || k.appendChild(j.createTextNode(" ")), r.appendChild(k);
      }a.appendChild(r);
    }function p(a, d) {
      for (var g = d.length; --g >= 0;) {
        var b = d[g];F.hasOwnProperty(b) ? D.console && console.warn("cannot override language handler %s", b) : F[b] = a;
      }
    }function I(a, d) {
      if (!a || !F.hasOwnProperty(a)) a = /^\s*</.test(d) ? "default-markup" : "default-code";return F[a];
    }function K(a) {
      var d = a.h;try {
        var g = T(a.c, a.i),
            b = g.a;
        a.a = b;a.d = g.d;a.e = 0;I(d, b)(a);var s = /\bMSIE\s(\d+)/.exec(navigator.userAgent),
            s = s && +s[1] <= 8,
            d = /\n/g,
            x = a.a,
            m = x.length,
            g = 0,
            j = a.d,
            k = j.length,
            b = 0,
            c = a.g,
            i = c.length,
            r = 0;c[i] = m;var n, e;for (e = n = 0; e < i;) {
          c[e] !== c[e + 2] ? (c[n++] = c[e++], c[n++] = c[e++]) : e += 2;
        }i = n;for (e = n = 0; e < i;) {
          for (var p = c[e], w = c[e + 1], t = e + 2; t + 2 <= i && c[t + 1] === w;) {
            t += 2;
          }c[n++] = p;c[n++] = w;e = t;
        }c.length = n;var f = a.c,
            h;if (f) h = f.style.display, f.style.display = "none";try {
          for (; b < k;) {
            var l = j[b + 2] || m,
                B = c[r + 2] || m,
                t = Math.min(l, B),
                A = j[b + 1],
                G;if (A.nodeType !== 1 && (G = x.substring(g, t))) {
              s && (G = G.replace(d, "\r"));A.nodeValue = G;var L = A.ownerDocument,
                  o = L.createElement("span");o.className = c[r + 1];var v = A.parentNode;v.replaceChild(o, A);o.appendChild(A);g < l && (j[b + 1] = A = L.createTextNode(x.substring(t, l)), v.insertBefore(A, o.nextSibling));
            }g = t;g >= l && (b += 2);g >= B && (r += 2);
          }
        } finally {
          if (f) f.style.display = h;
        }
      } catch (u) {
        D.console && console.log(u && u.stack || u);
      }
    }var D = window,
        y = ["break,continue,do,else,for,if,return,while"],
        E = [[y, "auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"], "catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],
        M = [E, "alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],
        N = [E, "abstract,assert,boolean,byte,extends,final,finally,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"],
        O = [N, "as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,internal,into,is,let,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var,virtual,where"],
        E = [E, "debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"],
        P = [y, "and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],
        Q = [y, "alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],
        W = [y, "as,assert,const,copy,drop,enum,extern,fail,false,fn,impl,let,log,loop,match,mod,move,mut,priv,pub,pure,ref,self,static,struct,true,trait,type,unsafe,use"],
        y = [y, "case,done,elif,esac,eval,fi,function,in,local,set,then,until"],
        R = /^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)\b/,
        V = /\S/,
        X = v({ keywords: [M, O, E, "caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END", P, Q, y], hashComments: !0, cStyleComments: !0, multiLineStrings: !0, regexLiterals: !0 }),
        F = {};p(X, ["default-code"]);p(C([], [["pln", /^[^<?]+/], ["dec", /^<!\w[^>]*(?:>|$)/], ["com", /^<\!--[\S\s]*?(?:--\>|$)/], ["lang-", /^<\?([\S\s]+?)(?:\?>|$)/], ["lang-", /^<%([\S\s]+?)(?:%>|$)/], ["pun", /^(?:<[%?]|[%?]>)/], ["lang-", /^<xmp\b[^>]*>([\S\s]+?)<\/xmp\b[^>]*>/i], ["lang-js", /^<script\b[^>]*>([\S\s]*?)(<\/script\b[^>]*>)/i], ["lang-css", /^<style\b[^>]*>([\S\s]*?)(<\/style\b[^>]*>)/i], ["lang-in.tag", /^(<\/?[a-z][^<>]*>)/i]]), ["default-markup", "htm", "html", "mxml", "xhtml", "xml", "xsl"]);p(C([["pln", /^\s+/, q, " \t\r\n"], ["atv", /^(?:"[^"]*"?|'[^']*'?)/, q, "\"'"]], [["tag", /^^<\/?[a-z](?:[\w-.:]*\w)?|\/?>$/i], ["atn", /^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i], ["lang-uq.val", /^=\s*([^\s"'>]*(?:[^\s"'/>]|\/(?=\s)))/], ["pun", /^[/<->]+/], ["lang-js", /^on\w+\s*=\s*"([^"]+)"/i], ["lang-js", /^on\w+\s*=\s*'([^']+)'/i], ["lang-js", /^on\w+\s*=\s*([^\s"'>]+)/i], ["lang-css", /^style\s*=\s*"([^"]+)"/i], ["lang-css", /^style\s*=\s*'([^']+)'/i], ["lang-css", /^style\s*=\s*([^\s"'>]+)/i]]), ["in.tag"]);p(C([], [["atv", /^[\S\s]+/]]), ["uq.val"]);p(v({ keywords: M, hashComments: !0, cStyleComments: !0, types: R }), ["c", "cc", "cpp", "cxx", "cyc", "m"]);p(v({ keywords: "null,true,false" }), ["json"]);p(v({ keywords: O, hashComments: !0, cStyleComments: !0, verbatimStrings: !0, types: R }), ["cs"]);p(v({ keywords: N, cStyleComments: !0 }), ["java"]);p(v({ keywords: y, hashComments: !0, multiLineStrings: !0 }), ["bash", "bsh", "csh", "sh"]);p(v({ keywords: P, hashComments: !0, multiLineStrings: !0, tripleQuotedStrings: !0 }), ["cv", "py", "python"]);p(v({ keywords: "caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END", hashComments: !0, multiLineStrings: !0, regexLiterals: 2 }), ["perl", "pl", "pm"]);p(v({ keywords: Q,
      hashComments: !0, multiLineStrings: !0, regexLiterals: !0 }), ["rb", "ruby"]);p(v({ keywords: E, cStyleComments: !0, regexLiterals: !0 }), ["javascript", "js"]);p(v({ keywords: "all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes", hashComments: 3, cStyleComments: !0, multilineStrings: !0, tripleQuotedStrings: !0, regexLiterals: !0 }), ["coffee"]);p(v({ keywords: W, cStyleComments: !0, multilineStrings: !0 }), ["rc", "rs", "rust"]);
    p(C([], [["str", /^[\S\s]+/]]), ["regex"]);var Y = D.PR = { createSimpleLexer: C, registerLangHandler: p, sourceDecorator: v, PR_ATTRIB_NAME: "atn", PR_ATTRIB_VALUE: "atv", PR_COMMENT: "com", PR_DECLARATION: "dec", PR_KEYWORD: "kwd", PR_LITERAL: "lit", PR_NOCODE: "nocode", PR_PLAIN: "pln", PR_PUNCTUATION: "pun", PR_SOURCE: "src", PR_STRING: "str", PR_TAG: "tag", PR_TYPE: "typ", prettyPrintOne: D.prettyPrintOne = function (a, d, g) {
        var b = document.createElement("div");b.innerHTML = "<pre>" + a + "</pre>";b = b.firstChild;g && J(b, g, !0);K({ h: d, j: g, c: b, i: 1 });
        return b.innerHTML;
      }, prettyPrint: D.prettyPrint = function (a, d) {
        function g() {
          for (var b = D.PR_SHOULD_USE_CONTINUATION ? c.now() + 250 : Infinity; i < p.length && c.now() < b; i++) {
            for (var d = p[i], j = h, k = d; k = k.previousSibling;) {
              var m = k.nodeType,
                  o = (m === 7 || m === 8) && k.nodeValue;if (o ? !/^\??prettify\b/.test(o) : m !== 3 || /\S/.test(k.nodeValue)) break;if (o) {
                j = {};o.replace(/\b(\w+)=([\w%+\-.:]+)/g, function (a, b, c) {
                  j[b] = c;
                });break;
              }
            }k = d.className;if ((j !== h || e.test(k)) && !v.test(k)) {
              m = !1;for (o = d.parentNode; o; o = o.parentNode) {
                if (f.test(o.tagName) && o.className && e.test(o.className)) {
                  m = !0;break;
                }
              }if (!m) {
                d.className += " prettyprinted";m = j.lang;if (!m) {
                  var m = k.match(n),
                      y;if (!m && (y = U(d)) && t.test(y.tagName)) m = y.className.match(n);m && (m = m[1]);
                }if (w.test(d.tagName)) o = 1;else var o = d.currentStyle,
                    u = s.defaultView,
                    o = (o = o ? o.whiteSpace : u && u.getComputedStyle ? u.getComputedStyle(d, q).getPropertyValue("white-space") : 0) && "pre" === o.substring(0, 3);u = j.linenums;if (!(u = u === "true" || +u)) u = (u = k.match(/\blinenums\b(?::(\d+))?/)) ? u[1] && u[1].length ? +u[1] : !0 : !1;u && J(d, u, o);r = { h: m, c: d, j: u, i: o };K(r);
              }
            }
          }i < p.length ? setTimeout(g, 250) : "function" === typeof a && a();
        }for (var b = d || document.body, s = b.ownerDocument || document, b = [b.getElementsByTagName("pre"), b.getElementsByTagName("code"), b.getElementsByTagName("xmp")], p = [], m = 0; m < b.length; ++m) {
          for (var j = 0, k = b[m].length; j < k; ++j) {
            p.push(b[m][j]);
          }
        }var b = q,
            c = Date;c.now || (c = { now: function now() {
            return +new Date();
          } });var i = 0,
            r,
            n = /\blang(?:uage)?-([\w.]+)(?!\S)/,
            e = /\bprettyprint\b/,
            v = /\bprettyprinted\b/,
            w = /pre|xmp/i,
            t = /^code$/i,
            f = /^(?:pre|code|xmp)$/i,
            h = {};g();
      } };typeof define === "function" && define.amd && define("google-code-prettify", [], function () {
      return Y;
    });
  })();
}();

},{}],16:[function(require,module,exports){
'use strict';var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};;(function(__root){ /*
	Matreshka v1.8.0 (2016-03-05)
	JavaScript Framework by Andrey Gubanov
	Released under the MIT license
	More info: http://matreshka.io
*/var matreshka_dir_xclass,matreshka_dir_core_var_core,matreshka_dir_core_util_common,matreshka_dir_core_var_map,matreshka_dir_core_bindings_binders,matreshka_dir_core_dom_lib_bquery,matreshka_dir_core_dom_lib_dollar_lib,matreshka_dir_core_dom_lib_used_lib,matreshka_dir_core_initmk,matreshka_dir_core_definespecial,matreshka_dir_core_util_define,matreshka_dir_core_util_linkprops,matreshka_dir_core_util_mediate,matreshka_dir_core_get_set_remove,matreshka_dir_core_bindings_bindnode,matreshka_dir_core_bindings_unbindnode,matreshka_dir_core_bindings_parsebindings,matreshka_dir_core_bindings_getnodes,matreshka_dir_core_var_domevtreg,matreshka_dir_core_events_trigger,matreshka_dir_core_events_on,matreshka_dir_core_events_off,matreshka_dir_core_var_specialevtreg,matreshka_dir_core_events_addlistener,matreshka_dir_core_events_removelistener,matreshka_dir_core_events_delegatelistener,matreshka_dir_core_events_undelegatelistener,matreshka_dir_core_events_domevents,matreshka_dir_core_events_adddomlistener,matreshka_dir_core_events_removedomlistener,matreshka_dir_core_events_once,matreshka_dir_core_events_ondebounce,matreshka_dir_matreshka_magic,matreshka_dir_matreshka_dynamic,matreshka_dir_matreshka_static,matreshka_dir_matreshkaclass,matreshka_dir_matreshka_object_dynamic,matreshka_dir_matreshka_object_iterator,matreshka_dir_core_var_sym_iterator,matreshka_dir_matreshka_objectclass,matreshka_dir_matreshka_array_processrendering,matreshka_dir_matreshka_array_triggermodify,matreshka_dir_matreshka_array_recreate,matreshka_dir_matreshka_array_native_dynamic,matreshka_dir_matreshka_array_native_static,matreshka_dir_matreshka_array_custom_dynamic,matreshka_dir_matreshka_array_iterator,matreshka_dir_matreshka_arrayclass,matreshka_dir_amd_modules_matreshka,matreshka;matreshka_dir_xclass=function(){var ie=typeof document!='undefined'?document.documentMode:null; /* istanbul ignore if  */if(ie&&ie<9){throw Error('Internet Explorer '+ie+' isn\'t supported');}return function Class(prototype,staticProps){var Constructor=prototype.constructor!==Object?prototype.constructor:function EmptyConstructor(){},Parent=prototype['extends']=prototype['extends']||prototype.extend,proto,typeofParent,key,assign=Object.assign||function(target,firstSource){if(target===undefined||target===null){throw new TypeError('Cannot convert first argument to object');}var to=Object(target);for(var i=1;i<arguments.length;i++){var nextSource=arguments[i];if(nextSource===undefined||nextSource===null){continue;}var keysArray=Object.keys(Object(nextSource));for(var nextIndex=0,len=keysArray.length;nextIndex<len;nextIndex++){var nextKey=keysArray[nextIndex];var desc=Object.getOwnPropertyDescriptor(nextSource,nextKey);if(desc!==undefined&&desc.enumerable){to[nextKey]=nextSource[nextKey];}}}return to;};proto=Object.create(Parent?Parent.prototype:{});assign(proto,prototype);if(staticProps&&(typeof staticProps==='undefined'?'undefined':_typeof(staticProps))=='object'){assign(Constructor,staticProps);}proto.instanceOf=function(){return this instanceof Constructor;};Constructor.prototype=proto;if(this instanceof Class){return new Constructor();}else {return Constructor;}};}();matreshka_dir_core_var_core={};matreshka_dir_core_util_common=function(core){var extend=function extend(o1,o2){var i,j;if(o1){for(i=1;i<arguments.length;i++){o2=arguments[i];if(o2){for(j in o2){if(o2.hasOwnProperty(j)){o1[j]=o2[j];}}}}}return o1;},util={extend:extend,trim:function trim(s){return s.trim?s.trim():s.replace(/^\s+|\s+$/g,'');},randomString:function randomString(){return (new Date().getTime()-new Date(2013,4,3).getTime()).toString(36)+Math.floor(Math.random()*1679616).toString(36);},toArray:function toArray(object,start){var array=[],l=object.length,i;start=start||0;for(i=start;i<l;i++){array[i-start]=object[i];}return array;},debounce:function debounce(f,d,thisArg){var timeout;if(typeof d!=='number'){thisArg=d;d=0;}return function(){var args=arguments,ctx=this;clearTimeout(timeout);timeout=setTimeout(function(){f.apply(thisArg||ctx,args);},d||0);};},each:function each(o,f,thisArg){if(!o)return;if(o.isMK&&typeof o.each=='function'){o.each(f,thisArg);}else if('length' in o){[].forEach.call(o,f,thisArg);}else {for(var i in o){if(o.hasOwnProperty(i)){f.call(thisArg,o[i],i,o);}}}return o;},deepFind:function deepFind(obj,path){var paths=typeof path=='string'?path.split('.'):path,current=obj,i;for(i=0;i<paths.length;++i){if(typeof current[paths[i]]=='undefined'){return undefined;}else {current=current[paths[i]];}}return current;},noop:function noop(){},orderBy:function orderBy(arr,keys,orders){var defaultOrder='asc',newArr,length,i,commonOrder;if('length' in arr&&(typeof arr==='undefined'?'undefined':_typeof(arr))=='object'){if(!(orders instanceof Array)){commonOrder=orders||defaultOrder;}length=arr.length;newArr=Array(length);for(i=0;i<length;i++){newArr[i]=arr[i];}if(!keys)return newArr;keys=keys instanceof Array?keys:[keys];return newArr.sort(function(a,b){var length=keys.length,i,order,key;if(a&&b){for(i=0;i<length;i++){key=keys[i];order=(commonOrder||orders[i])!='desc'?-1:1;if(a[key]>b[key]){return -order;}else if(a[key]<b[key]){return order;}}}return 0;});}else {return [];}}};function PseudoMap(){}extend(PseudoMap.prototype,{get:function get(obj){return obj.matreshkaData;},set:function set(obj,data){Object.defineProperty(obj,'matreshkaData',{value:data,enumerable:false,writable:false,configurable:false});},has:function has(obj){return 'matreshkaData' in obj;}});util.PseudoMap=PseudoMap;extend(core,util);return util;}(matreshka_dir_core_var_core);matreshka_dir_core_var_map=function(util){var mkId='mk-'+util.randomString();return typeof WeakMap=='undefined'?new util.PseudoMap():new WeakMap();}(matreshka_dir_core_util_common);matreshka_dir_core_bindings_binders=function(core){var readFiles=function readFiles(files,readAs,callback){var length=files.length,i=0,filesArray=core.toArray(files),file;if(readAs){filesArray.forEach(function(file){var reader=new FileReader();reader.onloadend=function(evt){file.readerResult=reader.result;if(++i==length){callback(filesArray);}};reader[readAs](file);});}else {callback(filesArray);}},getReadAs=function getReadAs(readAs){ /* istanbul ignore if  */if(typeof FileReader=='undefined'){throw Error('FileReader is not supported by this browser');}if(readAs){readAs='readAs'+readAs[0].toUpperCase()+readAs.slice(1);if(!FileReader.prototype[readAs]){throw Error(readAs+' is not supported by FileReader');}}return readAs;},binders;core.binders=binders={innerHTML:function innerHTML(){return {on:'input',getValue:function getValue(){return this.innerHTML;},setValue:function setValue(v){this.innerHTML=v+'';}};},innerText:function innerText(){return {on:'input',getValue:function getValue(){return this.textContent;},setValue:function setValue(v){this.textContent=v+'';}};},className:function className(_className){var not=_className.indexOf('!')===0;if(not){_className=_className.replace('!','');}return {on:null,getValue:function getValue(){var _this=this,contains=_this.classList?_this.classList.contains(_className):hasClass(_this,_className);return not?!contains:!!contains;},setValue:function setValue(v){var _this=this,add=not?!v:!!v;_this.classList?_this.classList[add?'add':'remove'](_className):add?addClass(_this,_className):removeClass(_this,_className);}}; // @IE9
// thanks to Iliya Kantor
function addClass(o,c){var re=new RegExp('(^|\\s)'+c+'(\\s|$)','g');if(re.test(o.className))return;o.className=(o.className+' '+c).replace(/\s+/g,' ').replace(/(^ | $)/g,'');}function removeClass(o,c){var re=new RegExp('(^|\\s)'+c+'(\\s|$)','g');o.className=o.className.replace(re,'$1').replace(/\s+/g,' ').replace(/(^ | $)/g,'');}function hasClass(o,c){return new RegExp('(\\s|^)'+c+'(\\s|$)').test(o.className);}},property:function property(propertyName){return {on:null,getValue:function getValue(){return this[propertyName];},setValue:function setValue(v){ // in case when you're trying to set read-only property
try{this[propertyName]=v;}catch(e){}}};},attribute:function attribute(attributeName){return {on:null,getValue:function getValue(){return this.getAttribute(attributeName);},setValue:function setValue(v){this.setAttribute(attributeName,v);}};},dataset:function dataset(prop){ // replace namesLikeThis with names-like-this
function toDashed(name){return 'data-'+name.replace(/([A-Z])/g,function(u){return '-'+u.toLowerCase();});}return {on:null,getValue:function getValue(){var _this=this;return _this.dataset?_this.dataset[prop]:_this.getAttribute(toDashed(prop));},setValue:function setValue(v){var _this=this;if(_this.dataset){_this.dataset[prop]=v;}else {_this.setAttribute(toDashed(prop),v);}}};},textarea:function textarea(){return binders.input('text');},progress:function progress(){return binders.input();},input:function input(type,options){var on;switch(type){case 'checkbox':return {on:'click keyup',getValue:function getValue(){return this.checked;},setValue:function setValue(v){this.checked=v;}};case 'radio':return {on:'click keyup',getValue:function getValue(){return this.value;},setValue:function setValue(v){this.checked=typeof v!='undefined'&&this.value==v;}};case 'submit':case 'button':case 'image':case 'reset':return {};case 'hidden':on=null;break;case 'file':on='change';break; /*
      case 'text':
      case 'password':
      case 'date':
      case 'datetime':
      case 'datetime-local':
      case 'month':
      case 'time':
      case 'week':
      case 'range':
      case 'color':
      case 'search':
      case 'email':
      case 'tel':
      case 'url':
                  case 'file':
      case 'number':  */default: // other future (HTML6+) inputs
on='input';}return {on:on,getValue:function getValue(){return this.value;},setValue:function setValue(v){this.value=v;}};},output:function output(){return {getValue:function getValue(){var _this=this;return _this.value||_this.textContent;},setValue:function setValue(v){var _this=this;_this['form' in _this?'value':'textContent']=v===null?'':v+'';}};},select:function select(multiple){var i;if(multiple){return {on:'change',getValue:function getValue(){var i=0,options=this.options,result=[];for(;options.length>i;i++){if(options[i].selected){result.push(options[i].value);}}return result;},setValue:function setValue(v){v=typeof v=='string'?[v]:v;for(i=this.options.length-1;i>=0;i--){this.options[i].selected=~v.indexOf(this.options[i].value);}}};}else {return {on:'change',getValue:function getValue(){return this.value;},setValue:function setValue(v){var _this=this,options;_this.value=v;if(!v){options=_this.options;for(i=options.length-1;i>=0;i--){if(!options[i].value){options[i].selected=true;}}}}};}},display:function display(value){value=typeof value=='undefined'?true:value;return {on:null,getValue:function getValue(){var _this=this,v=_this.style.display||(window.getComputedStyle?getComputedStyle(_this,null).getPropertyValue('display'):_this.currentStyle.display),none=v=='none';return value?!none:!!none;},setValue:function setValue(v){this.style.display=value?v?'':'none':v?'none':'';}};},style:function style(property){return {getValue:function getValue(){var _this=this;return _this.style[property]||getComputedStyle(_this,null).getPropertyValue(property);},setValue:function setValue(v){this.style[property]=v;}};},file:function file(readAs){readAs=getReadAs(readAs);return {on:function on(callback){this.addEventListener('change',function(){var files=this.files;if(files.length){readFiles(files,readAs,callback);}else {callback([]);}});},getValue:function getValue(evt){var files=evt.domEvent||[];return this.multiple?files:files[0]||null;}};},dropFiles:function dropFiles(readAs){readAs=getReadAs(readAs);return {on:function on(callback){this.addEventListener('drop',function(evt){evt.preventDefault();var files=evt.dataTransfer.files;if(files.length){readFiles(files,readAs,callback);}else {callback([]);}});this.addEventListener('dragover',function(evt){evt.preventDefault();evt.dataTransfer.dropEffect='copy';});},getValue:function getValue(o){return o.domEvent||[];}};}};binders.visibility=binders.display;binders.html=binders.innerHTML;binders.text=binders.innerText;binders.prop=binders.property;binders.attr=binders.attribute;return binders;}(matreshka_dir_core_var_core);matreshka_dir_core_dom_lib_bquery=function(){ /* istanbul ignore if  */if(typeof window=='undefined'){return;}var s_classList='classList',nsReg=/\.(.+)/,allEvents={},nodeIndex=0,fn=[];function $b(s,context){return new $b.i(s,context);}$b.i=function(s,context){var result,l,i;if(s){if(s.nodeType||s==window){result=[s];}else if(typeof s=='string'){if(/</.test(s)){result=$b.parseHTML(s);}else {if(context){if(context=$b(context)[0]){result=context.querySelectorAll(s);}}else {result=document.querySelectorAll(s);}}}else if(s instanceof Function){ // typeof nodeList returns "function" in old WebKit
if(document.readyState=='loading'){document.addEventListener('DOMContentLoaded',s);}else {s();}}else {result=s;}}l=result&&result.length;if(l){for(i=0;i<l;i++){this.push(result[i]);}}};$b.fn=$b.i.fn=$b.i.prototype=fn;$b.extend=function(obj){var k=arguments,i,j,l;for(i=1;i<k.length;i++){if(l=k[i]){for(j in l){obj[j]=l[j];}}}return obj;};$b.extend(fn,{is:function is(s){var node=this[0];return node?(node.matches||node.webkitMatchesSelector||node.mozMatchesSelector||node.msMatchesSelector||node.oMatchesSelector).call(node,s):false;},on:function on(names,selector,handler){var _this=this,delegate,name,namespace,node,nodeID,events,event,exist,i,j,k;if(typeof selector=='function'){handler=selector;selector=null;}if(selector){delegate=function delegate(evt){var randomID='x'+String(Math.random()).split('.')[1],node=this,scopeSelector,is;node.setAttribute(randomID,randomID);scopeSelector='['+randomID+'="'+randomID+'"] ';is=selector.split(',').map(function(sel){return scopeSelector+sel+','+scopeSelector+sel+' *';}).join(',');if($b(evt.target).is(is)){handler.call(node,evt);}node.removeAttribute(randomID);};}names=names.split(/\s/);for(i=0;i<names.length;i++){name=names[i].split(nsReg);namespace=name[1];name=name[0];for(j=0;j<_this.length;j++){node=_this[j];nodeID=node.b$=node.b$||++nodeIndex,events=allEvents[name+nodeID]=allEvents[name+nodeID]||[],exist=false;for(k=0;k<events.length;k++){event=events[k];if(handler==event.handler&&(!selector||selector==event.selector)){exist=true;break;}}if(!exist){events.push({delegate:delegate,handler:handler,namespace:namespace,selector:selector});node.addEventListener(name,delegate||handler,false);}}}return _this;},off:function off(names,selector,handler){var _this=this,name,namespace,node,events,event,i,j,k;if(typeof selector=='function'){handler=selector;selector=null;}names=names.split(/\s/);for(i=0;i<names.length;i++){name=names[i].split(nsReg);namespace=name[1];name=name[0];for(j=0;j<_this.length;j++){node=_this[j];events=allEvents[name+node.b$];if(events){for(k=0;k<events.length;k++){event=events[k];if((!handler||handler==event.handler||handler==event.delegate)&&(!namespace||namespace==event.namespace)&&(!selector||selector==event.selector)){node.removeEventListener(name,event.delegate||event.handler);events.splice(k--,1);}}}else {if(!namespace&&!selector){node.removeEventListener(name,handler);}}}}return _this;},add:function add(s){var result=$b(this),map={},nodeID,node,i;s=$b(s);for(i=0;i<result.length;i++){node=result[i];nodeID=node.b$=node.b$||++nodeIndex;map[nodeID]=1;}for(i=0;i<s.length;i++){node=s[i];nodeID=node.b$=node.b$||++nodeIndex;if(!map[nodeID]){map[nodeID]=1;result.push(node);}}return result;},not:function not(s){var result=$b(this),index,i;s=$b(s);for(i=0;i<s.length;i++){if(~(index=result.indexOf(s[i]))){result.splice(index,1);}}return result;},find:function find(s){var result=$b();this.forEach(function(item){result=result.add($b(s,item));});return result;}}); // simple html parser
$b.parseHTML=function(html){var node=document.createElement('div'), // wrapMap is taken from jQuery
wrapMap={option:[1,'<select multiple=\'multiple\'>','</select>'],legend:[1,'<fieldset>','</fieldset>'],thead:[1,'<table>','</table>'],tr:[2,'<table><tbody>','</tbody></table>'],td:[3,'<table><tbody><tr>','</tr></tbody></table>'],col:[2,'<table><tbody></tbody><colgroup>','</colgroup></table>'],area:[1,'<map>','</map>'],_:[0,'','']},wrapper,i,ex;html=html.replace(/^\s+|\s+$/g,'');wrapMap.optgroup=wrapMap.option;wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead;wrapMap.th=wrapMap.td;ex=/<([\w:]+)/.exec(html);wrapper=ex&&wrapMap[ex[1]]||wrapMap._;node.innerHTML=wrapper[1]+html+wrapper[2];i=wrapper[0];while(i--){node=node.children[0];}return $b(node.childNodes);};$b.create=function create(tagName,props){var el,i,j,prop;if((typeof tagName==='undefined'?'undefined':_typeof(tagName))=='object'){props=tagName;tagName=props.tagName;}el=document.createElement(tagName);if(props)for(i in props){prop=props[i];if(i=='attributes'&&(typeof prop==='undefined'?'undefined':_typeof(prop))=='object'){for(j in prop){if(prop.hasOwnProperty(j)){el.setAttribute(j,prop[j]);}}}else if(i=='tagName'){continue;}else if(i=='children'&&prop){for(j=0;j<prop.length;j++){el.appendChild(create(prop[j]));}}else if(_typeof(el[i])=='object'&&el[i]!==null&&(typeof props==='undefined'?'undefined':_typeof(props))=='object'){for(j in prop){if(prop.hasOwnProperty(j)){el[i][j]=prop[j];}}}else {el[i]=prop;}}return el;};$b.one=function(s,context){return $b(s,context)[0]||null;};return $b;}();matreshka_dir_core_dom_lib_dollar_lib=function($b){ /* istanbul ignore if  */if(typeof window=='undefined'){return;}var neededMethods='on off is add not find'.split(/\s/),dollar=typeof window.$=='function'?window.$:null,useDollar=true,fn,i;if(dollar){fn=dollar.fn||dollar.prototype;for(i=0;i<neededMethods.length;i++){if(!fn[neededMethods[i]]){useDollar=false;break;}}if(useDollar&&!dollar.parseHTML){dollar.parseHTML=$b.parseHTML;}}else {useDollar=false;}return useDollar?dollar:$b;}(matreshka_dir_core_dom_lib_bquery);matreshka_dir_core_dom_lib_used_lib=function(core,$b,$){core.$=$||noop;core.$b=core.balalaika=core.bQuery=core.bquery=$b||noop;core.useAs$=function(_$){return core.$=this.$=$=_$;}; /* istanbul ignore next */ // used as DOM library placeholder in non-browser environment (eg nodejs)
function noop(){return [];}}(matreshka_dir_core_var_core,matreshka_dir_core_dom_lib_bquery,matreshka_dir_core_dom_lib_dollar_lib);matreshka_dir_core_initmk=function(core,map){var initMK=core.initMK=function(object){if(!map.has(object)){map.set(object,{events:{},special:{},id:'mk'+Math.random()});}return object;};return function(object){object._initMK?object._initMK():initMK(object);return object;};}(matreshka_dir_core_var_core,matreshka_dir_core_var_map);matreshka_dir_core_definespecial=function(core,map){core._defineSpecial=function(object,key,noAccessors){ /* istanbul ignore if  */if(!object||(typeof object==='undefined'?'undefined':_typeof(object))!='object'||!map.has(object))return object;var objectData=map.get(object),specialProps=objectData.special[key];if(!specialProps){specialProps=objectData.special[key]={$nodes:core.$(),value:object[key],getter:null,setter:null,mediator:null};if(!noAccessors&&key!='sandbox'){Object.defineProperty(object,key,{configurable:true,enumerable:true,get:function get(){return specialProps.getter?specialProps.getter.call(object):specialProps.value;},set:function set(v){specialProps.setter?specialProps.setter.call(object,v):core.set(object,key,v,{fromSetter:true});}});}}return specialProps;};}(matreshka_dir_core_var_core,matreshka_dir_core_var_map);matreshka_dir_core_util_define=function(core,initMK){var _define,defineGetter,defineSetter;_define=core.define=function(object,key,descriptor){ /* istanbul ignore if  */if(!object||(typeof object==='undefined'?'undefined':_typeof(object))!='object')return object;var i;if((typeof key==='undefined'?'undefined':_typeof(key))=='object'){for(i in key){_define(object,i,key[i]);}return object;}Object.defineProperty(object,key,descriptor);return object;};defineGetter=core.defineGetter=function(object,key,getter){ /* istanbul ignore if  */if(!object||(typeof object==='undefined'?'undefined':_typeof(object))!='object')return object;initMK(object);var i,special;if((typeof key==='undefined'?'undefined':_typeof(key))=='object'){for(i in key){if(key.hasOwnProperty(i)){defineGetter(object,i,key[i]);}}return object;}special=core._defineSpecial(object,key);special.getter=function(){return getter.call(object,{value:special.value,key:key,self:object});};return object;};defineSetter=core.defineSetter=function(object,key,setter){ /* istanbul ignore if  */if(!object||(typeof object==='undefined'?'undefined':_typeof(object))!='object')return object;initMK(object);var i;if((typeof key==='undefined'?'undefined':_typeof(key))=='object'){for(i in key){if(key.hasOwnProperty(i)){defineSetter(object,i,key[i]);}}return object;}core._defineSpecial(object,key).setter=function(v){return setter.call(object,v,{value:v,key:key,self:object});};return object;};}(matreshka_dir_core_var_core,matreshka_dir_core_initmk);matreshka_dir_core_util_linkprops=function(core,map,initMK,util){var linkProps=core.linkProps=function(object,key,keys,getter,evtOptions){ /* istanbul ignore if  */if(!object||(typeof object==='undefined'?'undefined':_typeof(object))!='object')return object;initMK(object);var optionsType=typeof evtOptions==='undefined'?'undefined':_typeof(evtOptions),objectData=map.get(object),_this,_key,_keys,i,j,path,t,setOnInit,onChange;onChange=function onChange(evt){var values=[],_protect=evt._protect;if(!_protect){_protect=evt._protect=evt._protect||{};for(i in evtOptions){evt[i]=evtOptions[i];}}if(!(key+objectData.id in _protect)){if(_typeof(keys[0])=='object'){for(i=0;i<keys.length;i+=2){_this=keys[i];_keys=typeof keys[i+1]=='string'?keys[i+1].split(/\s/):keys[i+1];for(j=0;j<_keys.length;j++){values.push(util.deepFind(_this,_keys[j]));}}}else {for(i=0;i<keys.length;i++){_key=keys[i];_this=object;values.push(util.deepFind(_this,_key));}}_protect[key+objectData.id]=1;core._defineSpecial(object,key,evtOptions.hideProperty);core.set(object,key,getter.apply(object,values),evt);}};keys=typeof keys=='string'?keys.split(/\s+/):keys; // backward compability for setOnInit
if(optionsType=='boolean'){setOnInit=evtOptions;}if(optionsType!='object'){evtOptions={};}if(optionsType=='boolean'){evtOptions.setOnInit=setOnInit;}evtOptions.fromDependency=true;getter=getter||function(value){return value;};function getEvtName(path){var evtName,sliceIndex;if(path.length>1){sliceIndex=path.length-1;evtName=path.slice(0,sliceIndex).join('.')+'@'+'_rundependencies:'+path[sliceIndex];}else {evtName='_rundependencies:'+path;}return evtName;}onChange=evtOptions.debounce?util.debounce(onChange):onChange; // TODO refactor this shi..
if(_typeof(keys[0])=='object'){for(i=0;i<keys.length;i+=2){_this=initMK(keys[i]);_keys=typeof keys[i+1]=='string'?keys[i+1].split(/\s/):keys[i+1];for(j=0;j<_keys.length;j++){path=_keys[j].split('.');core[path.length>1?'on':'_fastAddListener'](_this,getEvtName(path),onChange);}}}else {for(i=0;i<keys.length;i++){_key=keys[i];_this=object;path=_key.split('.');core[path.length>1?'on':'_fastAddListener'](_this,getEvtName(path),onChange);}}evtOptions.setOnInit!==false&&onChange.call(_typeof(keys[0])=='object'?keys[0]:object,{key:_typeof(keys[0])=='object'?keys[1]:keys[0]});return object;};}(matreshka_dir_core_var_core,matreshka_dir_core_var_map,matreshka_dir_core_initmk,matreshka_dir_core_util_common);matreshka_dir_core_util_mediate=function(core,initMK){var mediate=core.mediate=function(object,keys,mediator){ /* istanbul ignore if  */if(!object||(typeof object==='undefined'?'undefined':_typeof(object))!='object')return object;initMK(object);var type=typeof keys==='undefined'?'undefined':_typeof(keys),i,special;if(type=='object'&&!(keys instanceof Array)){for(i in keys){if(keys.hasOwnProperty(i)){core.mediate(object,i,keys[i]);}}return object;}keys=type=='string'?keys.split(/\s/):keys;for(i=0;i<keys.length;i++){(function(key){special=core._defineSpecial(object,key);special.mediator=function(v){return mediator.call(object,v,special.value,key,object);};core.set(object,key,special.mediator(special.value),{fromMediator:true});})(keys[i]);}return object;};var setClassFor=core.setClassFor=function(object,keys,Class,updateFunction){if(!object||(typeof object==='undefined'?'undefined':_typeof(object))!='object')return object;initMK(object);var type=typeof keys==='undefined'?'undefined':_typeof(keys),i;if(type=='object'&&!(keys instanceof Array)){for(i in keys){if(keys.hasOwnProperty(i)){core.setClassFor(object,i,keys[i],Class);}}return object;}keys=type=='string'?keys.split(/\s/):keys;updateFunction=updateFunction||function(instance,data){var i,keys,removeKeys;if(instance.isMKArray){instance.recreate(data);}else if(instance.isMKObject){keys=instance.keys();removeKeys=[];for(i=0;i<keys.length;i++){if(!(keys[i] in data)){removeKeys.push(keys[i]);}}instance.jset(data).removeDataKeys(removeKeys);}else {for(i in data){if(data.hasOwnProperty(i)){instance[i]=data[i];}}}};for(i=0;i<keys.length;i++){core.mediate(object,keys[i],function(v,prevVal,key){var result;if(prevVal&&(prevVal.instanceOf?prevVal.instanceOf(Class):prevVal instanceof Class)){updateFunction.call(object,prevVal,v,key);result=prevVal;}else {result=new Class(v,object,key);}return result;});}return object;};}(matreshka_dir_core_var_core,matreshka_dir_core_initmk);matreshka_dir_core_get_set_remove=function(core,map){var set;core.get=function(object,key){return object&&object[key];}; // set method is the most often used method
// we need to optimize it as good as possible
set=core.set=function(object,key,v,evt){ /* istanbul ignore if  */if(!object||(typeof object==='undefined'?'undefined':_typeof(object))!='object')return object;var type=typeof key==='undefined'?'undefined':_typeof(key),_isNaN=Number.isNaN||function(value){return typeof value=='number'&&isNaN(value);},objectData,special,events,prevVal,newV,i,_evt,isChanged,triggerChange;if(type=='undefined')return object;if(type=='object'){for(i in key){if(key.hasOwnProperty(i)){set(object,i,key[i],v);}}return object;}objectData=map.get(object);if(!objectData||!objectData.special[key]){object[key]=v;return object;}special=objectData.special[key];events=objectData.events;prevVal=special.value;if(special.mediator&&v!==prevVal&&(!evt||!evt.skipMediator&&!evt.fromMediator)){newV=special.mediator(v,prevVal,key,object);}else {newV=v;}isChanged=newV!==prevVal;_evt={originalEvent:evt,value:newV,previousValue:prevVal,key:key,node:special.$nodes[0]||null,$nodes:special.$nodes,self:object,isChanged:isChanged};if(evt&&(typeof evt==='undefined'?'undefined':_typeof(evt))=='object'){for(i in evt){_evt[i]=_evt[i]||evt[i];}}triggerChange=(isChanged||_evt.force)&&!_evt.silent;if(triggerChange){events['beforechange:'+key]&&core._fastTrigger(object,'beforechange:'+key,_evt);events.beforechange&&core._fastTrigger(object,'beforechange',_evt);}special.value=newV;if(isChanged||_evt.force||_evt.forceHTML||newV!==v&&!_isNaN(newV)){if(!_evt.silentHTML){events['_runbindings:'+key]&&core._fastTrigger(object,'_runbindings:'+key,_evt);}}if(triggerChange){events['change:'+key]&&core._fastTrigger(object,'change:'+key,_evt);events.change&&core._fastTrigger(object,'change',_evt);}if((isChanged||_evt.force)&&!_evt.skipLinks){events['_rundependencies:'+key]&&core._fastTrigger(object,'_rundependencies:'+key,_evt);}return object;};core.remove=function(object,key,evt){ /* istanbul ignore if  */if(!object||(typeof object==='undefined'?'undefined':_typeof(object))!='object'||typeof key!=='string')return object;var keys=key.split(/\s+/),_evt={keys:keys},objectData=map.get(object),exists,i;if(evt&&(typeof evt==='undefined'?'undefined':_typeof(evt))=='object'){for(i in evt){_evt[i]=evt[i];}}for(i=0;i<keys.length;i++){key=keys[i];exists=key in object;if(exists){_evt.key=key;_evt.value=object[key];delete object[key];if(objectData){core.unbindNode(object,key);core.off(object,'change:'+key+' beforechange:'+key+' _runbindings:'+key+' _rundependencies:'+key);delete objectData.special[key];if(!_evt.silent){core._fastTrigger(object,'delete',_evt);core._fastTrigger(object,'delete:'+key,_evt);}}}}return object;};}(matreshka_dir_core_var_core,matreshka_dir_core_var_map);matreshka_dir_core_bindings_bindnode=function(core,map,initMK,util){var defaultBinders,lookForBinder;defaultBinders=core.defaultBinders=[function(node){var tagName=node.tagName,binders=core.binders,b;if(tagName=='INPUT'){b=binders.input(node.type);}else if(tagName=='TEXTAREA'){b=binders.textarea();}else if(tagName=='SELECT'){b=binders.select(node.multiple);}else if(tagName=='PROGRESS'){b=binders.progress();}else if(tagName=='OUTPUT'){b=binders.output();}return b;}];lookForBinder=core.lookForBinder=function(node){var result,ep=defaultBinders,i;for(i=0;i<ep.length;i++){if(result=ep[i].call(node,node)){return result;}}};core.bindOptionalNode=function(object,key,node,binder,evt){if((typeof key==='undefined'?'undefined':_typeof(key))=='object'){ /*
      * this.bindNode({ key: $() }, { on: 'evt' }, { silent: true });
      */bindNode(object,key,node,binder,true);}else {bindNode(object,key,node,binder,evt,true);}return object;};var bindSandbox=core.bindSandbox=function(object,node,evt){var $nodes=core.$(node),_evt,special,i;initMK(object);if(!$nodes.length){throw Error('Binding error: node is missing for "sandbox".'+(typeof node=='string'?' The selector is "'+node+'"':''));}special=core._defineSpecial(object,'sandbox');special.$nodes=special.$nodes.length?special.$nodes.add($nodes):$nodes;if(object.isMK){object.$sandbox=$nodes;object.sandbox=$nodes[0];object.$nodes.sandbox=special.$nodes;object.nodes.sandbox=special.$nodes[0];}if(!evt||!evt.silent){_evt={key:'sandbox',$nodes:$nodes,node:$nodes[0]||null};if(evt){for(i in evt){_evt[i]=evt[i];}}core._fastTrigger(object,'bind:sandbox',_evt);core._fastTrigger(object,'bind',_evt);}return object;};var bindNode=core.bindNode=function(object,key,node,binder,evt,optional){ /* istanbul ignore if  */if(!object||(typeof object==='undefined'?'undefined':_typeof(object))!='object')return object;if(key=='sandbox'){return bindSandbox(object,node,evt,optional);}initMK(object);var objectData=map.get(object),win=typeof window!='undefined'?window:null,$nodes,keys,i,special,path,listenKey,changeHandler,_evt; /*
     * this.bindNode([['key', $(), {on:'evt'}], [{key: $(), {on: 'evt'}}]], { silent: true });
     */if(key instanceof Array){for(i=0;i<key.length;i++){bindNode(object,key[i][0],key[i][1],key[i][2]||evt,node);}return object;} /*
     * this.bindNode('key1 key2', node, binder, { silent: true });
     */if(typeof key=='string'&&~key.indexOf(' ')){keys=key.split(/\s+/);if(keys.length>1){for(i=0;i<keys.length;i++){bindNode(object,keys[i],node,binder,evt,optional);}return object;}} /*
     * this.bindNode({ key: $() }, { on: 'evt' }, { silent: true });
     */if((typeof key==='undefined'?'undefined':_typeof(key))=='object'){for(i in key){if(key.hasOwnProperty(i)){bindNode(object,i,key[i],node,binder,evt);}}return object;} /*
     * this.bindNode('key', [ node, binder ], { silent: true });
     */ // node !== win is the most uncommon bugfix ever. Don't ask what does it mean.
// This is about iframes, CORS and deprecated DOM API.
if(node&&node.length==2&&node!==win&&!node[1].nodeName&&(node[1].setValue||node[1].getValue)){return bindNode(object,key,node[0],node[1],binder,optional);}$nodes=core._getNodes(object,node);if(!$nodes.length){if(optional){return object;}else {throw Error('Binding error: node is missing for "'+key+'".'+(typeof node=='string'?' The selector is "'+node+'"':''));}}if((!evt||evt.deep!==false)&&~key.indexOf('.')){path=key.split('.');changeHandler=function changeHandler(evt){evt=evt&&evt.originalEvent;var target=evt&&evt.value,i;if(!target){target=object;for(i=0;i<path.length-1;i++){target=target[path[i]];}}bindNode(target,path[path.length-1],$nodes,binder,evt,optional);if(evt&&evt.previousValue){core.unbindNode(evt.previousValue,path[path.length-1],$nodes);}};core._delegateListener(object,path.slice(0,path.length-2).join('.'),'change:'+path[path.length-2],changeHandler);changeHandler();return object;}evt=evt||{};special=core._defineSpecial(object,key);special.$nodes=special.$nodes.length?special.$nodes.add($nodes):$nodes;if(object.isMK){object.$nodes[key]=special.$nodes;object.nodes[key]=special.$nodes[0];}for(i=0;i<$nodes.length;i++){initBinding(object,objectData,key,$nodes,i,binder,evt,special);}if(!evt.silent){_evt={key:key,$nodes:$nodes,node:$nodes[0]||null};for(i in evt){_evt[i]=evt[i];}core._fastTrigger(object,'bind:'+key,_evt);core._fastTrigger(object,'bind',_evt);}return object;};function initBinding(object,objectData,key,$nodes,index,binder,evt,special){var options={self:object,key:key,$nodes:$nodes,node:node},node=$nodes[index],isUndefined=typeof special.value=='undefined',_binder,_evt,foundBinder,_options,i,domEvt,mkHandler,val;if(binder===null){_binder={};}else {foundBinder=lookForBinder(node);if(foundBinder){if(binder){for(i in binder){foundBinder[i]=binder[i];}}_binder=foundBinder;}else {_binder=binder||{};}}if(_binder.initialize){_options={value:special.value};for(i in options){_options[i]=options[i];}_binder.initialize.call(node,_options);}if(_binder.getValue&&(isUndefined&&evt.assignDefaultValue!==false||evt.assignDefaultValue===true)){_evt={fromNode:true};for(i in evt){_evt[i]=evt[i];}val=_binder.getValue.call(node,options);isUndefined=typeof val=='undefined';core.set(object,key,val,_evt);}if(_binder.setValue){mkHandler=function mkHandler(evt){var v=objectData.special[key].value, // dirty hack for this one https://github.com/matreshkajs/matreshka/issues/19
_v=evt&&typeof evt.onChangeValue=='string'&&typeof v=='number'?v+'':v,i;if(evt&&evt.changedNode==node&&evt.onChangeValue==_v)return;_options={value:v};for(i in options){_options[i]=options[i];}_binder.setValue.call(node,v,_options);};if(evt.debounce){mkHandler=util.debounce(mkHandler);}core._fastAddListener(object,'_runbindings:'+key,mkHandler,null,{node:node});!isUndefined&&mkHandler();}if(_binder.getValue&&_binder.on){domEvt={node:node,on:_binder.on,instance:object,key:key,mkHandler:mkHandler,handler:function handler(evt){if(domEvt.removed)return;var oldvalue=object[key],value,j,_options={value:oldvalue,domEvent:evt,originalEvent:evt.originalEvent||evt,preventDefault:function preventDefault(){evt.preventDefault();},stopPropagation:function stopPropagation(){evt.stopPropagation();},which:evt.which,target:evt.target}; // hasOwnProperty is not required there
for(j in options){_options[j]=options[j];}value=_binder.getValue.call(node,_options);if(value!==oldvalue){core.set(object,key,value,{fromNode:true,changedNode:node,onChangeValue:value});}}};core.domEvents.add(domEvt);}}}(matreshka_dir_core_var_core,matreshka_dir_core_var_map,matreshka_dir_core_initmk,matreshka_dir_core_util_common);matreshka_dir_core_bindings_unbindnode=function(core,map,initMK){var unbindNode=core.unbindNode=function(object,key,node,evt){ /* istanbul ignore if  */if(!object||(typeof object==='undefined'?'undefined':_typeof(object))!='object')return object;initMK(object);var type=typeof key==='undefined'?'undefined':_typeof(key),objectData=map.get(object),special=objectData.special[key],$nodes,keys,i,indexOfDot,path,listenKey,_evt;if(key instanceof Array){for(i=0;i<key.length;i++){evt=node;unbindNode(object,key[i][0],key[i][1]||evt,evt);}return object;}if(type=='string'){keys=key.split(/\s/);if(keys.length>1){for(i=0;i<keys.length;i++){unbindNode(object,keys[i],node,evt);}return object;}indexOfDot=key.indexOf('.');if(~indexOfDot){path=key.split('.');var target=object;for(i=0;i<path.length-1;i++){target=target[path[i]];}core._undelegateListener(object,path.slice(0,path.length-2),'change:'+path[path.length-2]);unbindNode(target,path[path.length-1],node,evt);return object;}}if(key===null){for(key in objectData.special){if(objectData.special.hasOwnProperty(key)){unbindNode(object,key,node,evt);}}return object;}else if(type=='object'){for(i in key){if(key.hasOwnProperty(i)){unbindNode(object,i,key[i],node);}}return object;}else if(!node){if(special&&special.$nodes){return unbindNode(object,key,special.$nodes,evt);}else {return object;}}else if(node.length==2&&!node[1].nodeName&&(node[1].setValue||node[1].getValue||node[1].on)){ // It actually ignores binder. With such a syntax you can assign definite binders to some variable and then easily delete all at once using
return unbindNode(object,key,node[0],evt);}else if(!special){return object;}$nodes=core._getNodes(object,node);for(i=0;i<$nodes.length;i++){core.domEvents.remove({key:key,node:$nodes[i],instance:object});special.$nodes=special.$nodes.not($nodes[i]);(function(node){core._removeListener(object,'_runbindings:'+key,null,null,{node:node,howToRemove:function howToRemove(onData,offData){return onData.node==offData.node;}});})($nodes[i]);}if(object.isMK){object.$nodes[key]=special.$nodes;object.nodes[key]=special.$nodes[0]||null;if(key=='sandbox'){object.sandbox=special.$nodes[0]||null;object.$sandbox=special.$nodes;}}if(!evt||!evt.silent){_evt={key:key,$nodes:$nodes,node:$nodes[0]||null};for(i in evt){_evt[i]=evt[i];}core._fastTrigger(object,'unbind:'+key,_evt);core._fastTrigger(object,'unbind',_evt);}return object;};}(matreshka_dir_core_var_core,matreshka_dir_core_var_map,matreshka_dir_core_initmk);matreshka_dir_core_bindings_parsebindings=function(core,map,initMK,util){core.parserBrackets={left:'{{',right:'}}'};var parseBindings=core.parseBindings=function(object,nodes){var objectData,$=core.$,brackets=core.parserBrackets,leftBracket=brackets.left,rightBracket=brackets.right,escLeftBracket=leftBracket.replace(/(\[|\(|\?)/g,'\\$1'),escRightBracket=rightBracket.replace(/(\]|\)|\?)/g,'\\$1'),bindingsReg=new RegExp(escLeftBracket+'(.+?)'+escRightBracket,'g'),strictBindingsReg=new RegExp('^'+escLeftBracket+'(.+?)'+escRightBracket+'$','g'); /* istanbul ignore if  */if(!object||(typeof object==='undefined'?'undefined':_typeof(object))!='object')return $();initMK(object);objectData=map.get(object);if(typeof nodes=='string'){if(! ~nodes.indexOf(leftBracket)){return $.parseHTML(nodes.replace(/^\s+|\s+$/g,''));}else {nodes=$.parseHTML(nodes.replace(/^\s+|\s+$/g,''));}}else if(!nodes){nodes=objectData&&objectData.special&&objectData.special.sandbox&&objectData.special.sandbox.$nodes;if(!nodes||!nodes.length){return object;}}else {nodes=$(nodes);}var all=[],k=0,childNodes,i,j,node,bindHTMLKey,atts,attr,attrValue,attrName,keys,key,binder,previous,textContent,childNode,body,matched;function initLink(key,keys,attrValue){var regs={};for(i=0;i<keys.length;i++){regs[keys[i]]=new RegExp(escLeftBracket+keys[i]+escRightBracket,'g');}core.linkProps(object,key,keys,function(){var v=attrValue,i;for(i=0;i<keys.length;i++){v=v.replace(regs[keys[i]],arguments[i]);}return v;},{hideProperty:true,setOnInit:true});}for(i=0;i<nodes.length;i++){node=nodes[i]; // we need 2 if's for old firefoxes
if(node.outerHTML){ // this is for firefox too
if(! ~node.outerHTML.indexOf(leftBracket)&&! ~node.outerHTML.indexOf(encodeURI(leftBracket))){continue;}}childNodes=node.getElementsByTagName('*');for(j=0;j<childNodes.length;j++){all[k++]=childNodes[j];}all[k++]=node;}if(!all.length){return $();}for(j=0;j<all.length;j++){node=all[j];if(node.tagName!='TEXTAREA'){for(i=0;i<node.childNodes.length;i++){childNode=node.childNodes[i];if(childNode.nodeType==3&&~childNode.nodeValue.indexOf(leftBracket)){textContent=childNode.nodeValue.replace(bindingsReg,'<span mk-html="$1"></span>');insertHTML(node,childNode,textContent);node.removeChild(childNode);}}}}for(i=0;i<nodes.length;i++){childNodes=nodes[i].querySelectorAll('[mk-html]');for(j=0;j<childNodes.length;j++){all[k++]=childNodes[j];}}for(i=0;i<all.length;i++){node=all[i];bindHTMLKey=node.getAttribute('mk-html');if(bindHTMLKey){node.removeAttribute('mk-html');core.bindNode(object,bindHTMLKey,node,{setValue:function setValue(v){this.innerHTML=v;}});}atts=node.attributes;for(j=0;j<atts.length;j++){attr=atts[j];attrValue=attr.value;attrName=attr.name;matched=attrValue.match(bindingsReg);if(matched){keys=matched.map(function(key){return key.replace(bindingsReg,'$1');});if(keys.length==1&&strictBindingsReg.test(attrValue)){key=keys[0];}else {key=core.randomString();initLink(key,keys,attrValue);}if((attrName=='value'&&node.type!='checkbox'&&node.type!='radio'||attrName=='checked'&&(node.type=='checkbox'||node.type=='radio'))&&core.lookForBinder(node)){node.setAttribute(attrName,'');core.bindNode(object,key,node);}else {core.bindNode(object,key,node,core.binders.attr(attrName));}}}}return nodes;};function insertHTML(node,childNode,html){var previous=childNode.previousSibling,body;try{if(previous){previous.insertAdjacentHTML('afterend',html);}else {node.insertAdjacentHTML('afterbegin',html);}}catch(e){ // in case user uses very old webkit-based browser
/* istanbul ignore next */body=document.body; /* istanbul ignore next */if(previous){body.appendChild(previous);previous.insertAdjacentHTML('afterend',html);body.removeChild(previous);}else {body.appendChild(node);node.insertAdjacentHTML('afterbegin',html);body.removeChild(node);}}}}(matreshka_dir_core_var_core,matreshka_dir_core_var_map,matreshka_dir_core_initmk,matreshka_dir_core_util_common);matreshka_dir_core_bindings_getnodes=function(core,map,initMK,util){var selectAll,boundAll,bound; /**
  * @private
  * @summary selectNodes selects nodes match to custom selectors such as :sandbox and :bound(KEY)
  */function selectNodes(object,selectors){var objectData=map.get(object),$=core.$,result=$(),execResult,$bound,node,selector,i,j,random,subSelector,key,selected;if(!object||(typeof object==='undefined'?'undefined':_typeof(object))!='object'||!objectData)return result; // replacing :sandbox to :bound(sandbox)
selectors=selectors.split(',');for(i=0;i<selectors.length;i++){selector=selectors[i];if(execResult=/\s*:bound\(([^(]*)\)\s*([\S\s]*)\s*|\s*:sandbox\s*([\S\s]*)\s*/.exec(selector)){key=execResult[3]!==undefined?'sandbox':execResult[1];subSelector=execResult[3]!==undefined?execResult[3]:execResult[2]; // getting KEY from :bound(KEY)
$bound=objectData.special[key]&&objectData.special[key].$nodes;if(!$bound||!$bound.length){continue;} // if native selector passed after :bound(KEY) is not empty string
// for example ":bound(KEY) .my-selector"
if(subSelector){ // if native selector contains children selector
// for example ":bound(KEY) > .my-selector"
if(subSelector.indexOf('>')===0){ // selecting children
for(j=0;j<$bound.length;j++){node=$bound[j];random='m'+core.randomString();node.setAttribute(random,random);selected=node.querySelectorAll('['+random+'="'+random+'"]'+subSelector);result=result.add(util.toArray(selected));node.removeAttribute(random);}}else { // if native selector doesn't contain children selector
result=result.add($bound.find(subSelector));}}else { // if native selector is empty string
result=result.add($bound);} // if it's native selector
}else {result=result.add(selector);}}return result;}selectAll=core.selectAll=function(object,s){var $sandbox,objectData=map.get(object);if(!objectData||typeof s!='string')return core.$();if(/:sandbox|:bound\(([^(]*)\)/.test(s)){return selectNodes(object,s);}else {$sandbox=objectData.special;$sandbox=$sandbox&&$sandbox.sandbox&&$sandbox.sandbox.$nodes;return $sandbox&&$sandbox.find(s);}},core.select=function(object,s){var sandbox,objectData=map.get(object);if(!objectData||typeof s!='string')return null;if(/:sandbox|:bound\(([^(]*)\)/.test(s)){return selectNodes(object,s)[0]||null;}else {sandbox=objectData.special;sandbox=sandbox&&sandbox.sandbox&&sandbox.sandbox.$nodes&&sandbox.sandbox.$nodes[0];return sandbox&&sandbox.querySelector(s);}};boundAll=core.boundAll=function(object,key){var $=core.$,objectData=map.get(object),special,keys,$nodes,i;if(!objectData)return $();if(key&&~key.indexOf('.')){keys=key.split('.');key=keys.splice(-1)[0];return boundAll(util.deepFind(object,keys),key);}initMK(object);special=objectData.special,key=!key?'sandbox':key;keys=typeof key=='string'?key.split(/\s+/):key;if(keys.length<=1){return keys[0] in special?special[keys[0]].$nodes:$();}else {$nodes=$();for(i=0;i<keys.length;i++){$nodes=$nodes.add(special[keys[i]].$nodes);}return $nodes;}};core.$bound=function(object,key){return boundAll(object,key);};bound=core.bound=function(object,key){var objectData=map.get(object),special,keys,i;if(!objectData)return null;if(key&&~key.indexOf('.')){keys=key.split('.');key=keys.splice(-1)[0];return bound(util.deepFind(object,keys),key);}initMK(object);special=objectData.special;key=!key?'sandbox':key;keys=typeof key=='string'?key.split(/\s+/):key;if(keys.length<=1){return keys[0] in special?special[keys[0]].$nodes[0]||null:null;}else {for(i=0;i<keys.length;i++){if(keys[i] in special&&special[keys[i]].$nodes.length){return special[keys[i]].$nodes[0];}}}return null;};core._getNodes=function(object,s){return typeof s=='string'&&!/</.test(s)&&/:sandbox|:bound\(([^(]*)\)/.test(s)?selectNodes(object,s):core.$(s);};}(matreshka_dir_core_var_core,matreshka_dir_core_var_map,matreshka_dir_core_initmk,matreshka_dir_core_util_common);matreshka_dir_core_var_domevtreg=/([^\:\:]+)(::([^\(\)]+)?(\((.*)\))?)?/;matreshka_dir_core_events_trigger=function(core,map,utils,domEvtReg){var triggerDOMEvent=function triggerDOMEvent(el,name,args){var doc=document,event;if(doc.createEvent){ /* istanbul ignore next */event=doc.createEvent('Event');event.initEvent(name,true,true);event.mkArgs=args;el.dispatchEvent(event);}else if(typeof Event!='undefined'){event=new Event(name,{bubbles:true,cancelable:true});event.mkArgs=args;el.dispatchEvent(event);}else { /* istanbul ignore next */throw Error('Cannot trigger DOM event');}return event;};core.trigger=function(object,names){ /* istanbul ignore if  */if(!object||(typeof object==='undefined'?'undefined':_typeof(object))!='object')return object;var objectData=map.get(object),allEvents=objectData&&objectData.events,args,i,j,l,events,ev,name,executed,nodes,_nodes,selector;if(names&&allEvents){args=utils.toArray(arguments,2);names=names.split(/\s/);for(i=0;i<names.length;i++){name=names[i];if(~name.indexOf('::')){executed=domEvtReg.exec(name);nodes=objectData.special[executed[3]||'sandbox'];nodes=nodes&&nodes.$nodes;_nodes=core.$();selector=executed[5];if(selector){for(j=0;j<nodes.length;j++){_nodes=_nodes.add(nodes.find(selector));}}else {_nodes=nodes;}for(j=0;j<_nodes.length;j++){triggerDOMEvent(_nodes[i],executed[1],args);}}else {events=allEvents[name];if(events){j=-1,l=events.length;while(++j<l){(ev=events[j]).callback.apply(ev.ctx,args);}}}}}return object;};core._fastTrigger=function(object,name,evt){var events=map.get(object).events[name],i,l,ev;if(events){i=-1,l=events.length;while(++i<l){(ev=events[i]).callback.call(ev.ctx,evt);}}};}(matreshka_dir_core_var_core,matreshka_dir_core_var_map,matreshka_dir_core_util_common,matreshka_dir_core_var_domevtreg);matreshka_dir_core_events_on=function(core,initMK,util){var on=core.on=function(object,names,callback,triggerOnInit,context,evtData){ /* istanbul ignore if  */if(!object||(typeof object==='undefined'?'undefined':_typeof(object))!='object')return object;initMK(object);var t,i,name,path,lastIndexOfET; // if event-callback object is passed to the function
if((typeof names==='undefined'?'undefined':_typeof(names))=='object'&&!(names instanceof Array)){for(i in names){if(names.hasOwnProperty(i)){on(object,i,names[i],callback,triggerOnInit);}}return object;} // callback is required
if(!callback)throw Error('callback is not a function for event(s) "'+names+'"');names=names instanceof Array?names:util.trim(names).replace(/\s+/g,' ') // single spaces only
.split(/\s(?![^(]*\))/g) // split by spaces
; // allow to flip triggerOnInit and context
if(typeof triggerOnInit!='boolean'&&typeof triggerOnInit!='undefined'){t=context;context=triggerOnInit;triggerOnInit=t;}for(i=0;i<names.length;i++){name=names[i]; // index of @
lastIndexOfET=name.lastIndexOf('@');if(~lastIndexOfET){path=name.slice(0,lastIndexOfET); // fallback for older apps
if(!path){path='*';}else if(~path.indexOf('@')){path=path.replace(/([^@]*)@/g,function($0,key){return (key||'*')+'.';}).replace(/\.$/,'.*')||'*';}name=name.slice(lastIndexOfET+1);core._delegateListener(object,path,name,callback,context||object,evtData);}else {core._addListener(object,name,callback,context,evtData);}} // trigger after event is initialized
if(triggerOnInit===true){callback.call(context||object,{triggeredOnInit:true});}return object;};}(matreshka_dir_core_var_core,matreshka_dir_core_initmk,matreshka_dir_core_util_common);matreshka_dir_core_events_off=function(core,initMK,util,map){var off=core.off=function(object,names,callback,context){ /* istanbul ignore if  */if(!object||(typeof object==='undefined'?'undefined':_typeof(object))!='object')return object;var objectData=map.get(object),i,path,lastIndexOfET,name;if(!objectData)return object; // if event-callback object is passed to the function
if((typeof names==='undefined'?'undefined':_typeof(names))=='object'&&!(names instanceof Array)){for(i in names){if(names.hasOwnProperty(i)){off(object,i,names[i],callback);}}return object;}if(!names&&!callback&&!context){objectData.events={};return object;}names=util.trim(names).replace(/\s+/g,' ') // single spaces only
.split(/\s(?![^(]*\))/g);if((typeof object==='undefined'?'undefined':_typeof(object))!='object'){return object;}for(i=0;i<names.length;i++){name=names[i]; // index of @
lastIndexOfET=name.lastIndexOf('@');if(~lastIndexOfET){path=name.slice(0,lastIndexOfET);name=name.slice(lastIndexOfET+1).replace(/@/g,'.');core._undelegateListener(object,path,name,callback,context);}else {core._removeListener(object,name,callback,context);}}return object;};}(matreshka_dir_core_var_core,matreshka_dir_core_initmk,matreshka_dir_core_util_common,matreshka_dir_core_var_map);matreshka_dir_core_var_specialevtreg=/_rundependencies:|_runbindings:|change:/;matreshka_dir_core_events_addlistener=function(core,initMK,map,specialEvtReg,domEvtReg){var _addListener;core._fastAddListener=function(object,name,callback,context,evtData){var allEvents=map.get(object).events,events=allEvents[name]||(allEvents[name]=[]);events.push({callback:callback,context:context,ctx:context||object,name:name,node:evtData&&evtData.node});if(specialEvtReg.test(name)){ // define needed accessors for KEY
core._defineSpecial(object,name.replace(specialEvtReg,''));}return object;};_addListener=core._addListener=function(object,name,callback,context,evtData){ /* istanbul ignore if  */if(!object||(typeof object==='undefined'?'undefined':_typeof(object))!='object')return false;initMK(object);var ctx=context||object,allEvents=map.get(object).events,events=allEvents[name]||(allEvents[name]=[]),l=events.length,defaultEvtData={callback:callback, //_callback: callback._callback || callback,
context:context,ctx:ctx, //howToRemove: null,
name:name},i,ev,_evtData,executed;for(i=0;i<l;i++){ev=events[i];if((ev.callback==callback||ev.callback==callback._callback)&&ev.context==context){return false;}}if(evtData){_evtData={};for(i in evtData){_evtData[i]=evtData[i];}for(i in defaultEvtData){_evtData[i]=defaultEvtData[i];}}else {_evtData=defaultEvtData;}events.push(_evtData);executed=domEvtReg.exec(name);if(executed&&executed[2]){core._addDOMListener(object,executed[3]||'sandbox',executed[1],executed[5],callback,ctx,_evtData);}else if(specialEvtReg.test(name)){ // define needed accessors for KEY
core._defineSpecial(object,name.replace(specialEvtReg,''));}core._fastTrigger(object,'addevent:'+name,_evtData);core._fastTrigger(object,'addevent',_evtData);return true;};}(matreshka_dir_core_var_core,matreshka_dir_core_initmk,matreshka_dir_core_var_map,matreshka_dir_core_var_specialevtreg,matreshka_dir_core_var_domevtreg);matreshka_dir_core_events_removelistener=function(core,map){var domEvtNameRegExp=/([^\:\:]+)(::([^\(\)]+)(\((.*)\))?)?/;core._removeListener=function(object,name,callback,context,evtData){ /* istanbul ignore if  */if(!object||(typeof object==='undefined'?'undefined':_typeof(object))!='object')return object;var objectData=map.get(object),j=0,l,events,retain,evt,i,executed,howToRemove,removeEvtData;if(!objectData)return object;events=objectData.events[name]||[];retain=objectData.events[name]=[];l=events.length;evtData=evtData||{};executed=domEvtNameRegExp.exec(name);if(executed&&executed[2]){core._removeDOMListener(object,executed[3],executed[1],executed[5],callback,context);}else {for(i=0;i<l;i++){evt=events[i];howToRemove=evt.howToRemove||evtData.howToRemove;if(howToRemove?!howToRemove(evt,evtData):callback&&callback!==evt.callback&&callback._callback!==evt.callback||context&&context!==evt.context){retain[j++]=evt;}else {removeEvtData={name:name,callback:evt.callback,context:evt.context};core._fastTrigger(object,'removeevent:'+name,removeEvtData);core._fastTrigger(object,'removeevent',removeEvtData);}}if(!retain.length){delete objectData.events[name];}}return object;};}(matreshka_dir_core_var_core,matreshka_dir_core_var_map);matreshka_dir_core_events_delegatelistener=function(core,initMK,map,specialEvtReg){var _delegateListener=core._delegateListener=function(object,path,name,callback,context,evtData){ /* istanbul ignore if  */if(!object||(typeof object==='undefined'?'undefined':_typeof(object))!='object')return object;initMK(object);var objectData=map.get(object),executed=/([^\.]+)\.(.*)/.exec(path),f,firstKey=executed?executed[1]:path,changeKey,obj;path=executed?executed[2]:'';evtData=evtData||{};if(firstKey){if(firstKey=='*'){if(object.isMKArray){f=function f(evt){(evt&&evt.added?evt.added:object).forEach(function(item){item&&_delegateListener(item,path,name,callback,context,evtData);});};f._callback=callback;core._addListener(object,'add',f,context,evtData);f();}else if(object.isMKObject){f=function f(evt){var target=object[evt.key];if(target&&evt&&evt.key in objectData.keys){_delegateListener(target,path,name,callback,context,evtData);}};object.each(function(item){_delegateListener(item,path,name,callback,context,evtData);});f._callback=callback;core._addListener(object,'change',f,context,evtData);} /* else {
           	throw Error('"*" events are only allowed for MK.Array and MK.Object');
           }*/}else {f=function f(evt){if(evt&&evt._silent)return;var target=object[firstKey],changeKey,triggerChange=true,i,changeEvents;evtData.path=path;evtData.previousValue=evt&&evt.previousValue||evtData.previousValue&&evtData.previousValue[firstKey];if(evt&&evt.previousValue&&map.has(evt.previousValue)){core._undelegateListener(evt.previousValue,path,name,callback,context,evtData);}if((typeof target==='undefined'?'undefined':_typeof(target))=='object'&&target){_delegateListener(target,path,name,callback,context,evtData);}if(specialEvtReg.test(name)){changeKey=name.replace(specialEvtReg,'');if(!path&&evtData.previousValue&&evtData.previousValue[changeKey]!==target[changeKey]){changeEvents=map.get(evtData.previousValue).events[name];if(changeEvents){for(i=0;i<changeEvents.length;i++){if(changeEvents[i].path===path){triggerChange=false;}}}if(triggerChange){core.set(target,changeKey,target[changeKey],{force:true,previousValue:evtData.previousValue[changeKey],previousObject:evtData.previousValue,_silent:true});}}}};f._callback=callback;core._addListener(object,'change:'+firstKey,f,context,evtData);f();}}else {core._addListener(object,name,callback,context,evtData);}};}(matreshka_dir_core_var_core,matreshka_dir_core_initmk,matreshka_dir_core_var_map,matreshka_dir_core_var_specialevtreg);matreshka_dir_core_events_undelegatelistener=function(core,map){var _undelegateListener=core._undelegateListener=function(object,path,name,callback,context,evtData){ /* istanbul ignore if  */if(!object||(typeof object==='undefined'?'undefined':_typeof(object))!='object')return object;var executed=/([^\.]+)\.(.*)/.exec(path),firstKey=executed?executed[1]:path,p=path,objectData=map.get(object),events,i;path=executed?executed[2]:'';if(firstKey){if(firstKey=='*'){if(object.isMKArray){if(callback){_undelegateListener(object,path,'add',callback,context,evtData);}else {events=objectData.events.add||[];for(i=0;i<events.length;i++){if(events[i].path==p){_undelegateListener(object,path,'add',events[i].callback);}}}object.forEach(function(item){item&&_undelegateListener(item,path,name,callback,context);});}else if(object.isMKObject){if(callback){_undelegateListener(object,path,'change',callback,context);}else {events=objectData.events.change||[];for(i=0;i<events.length;i++){if(events[i].path==p){_undelegateListener(object,path,'change',events[i].callback);}}}object.each(function(item){item&&_undelegateListener(item,path,name,callback,context);});}}else {if(callback){core._removeListener(object,'change:'+firstKey,callback,context,evtData);}else {events=objectData.events['change:'+firstKey]||[];for(i=0;i<events.length;i++){if(events[i].path==p){core._removeListener(object,'change:'+firstKey,events[i].callback);}}}if(_typeof(object[firstKey])=='object'){_undelegateListener(object[firstKey],path,name,callback,context,evtData);}}}else {core._removeListener(object,name,callback,context,evtData);}};}(matreshka_dir_core_var_core,matreshka_dir_core_var_map);matreshka_dir_core_events_domevents=function(core,map){var list={}; /**
  * @private
  * @since 0.0.4
  * @todo optimize
  * @summary This object is used to map DOM nodes and their DOM events
  */core.domEvents={ // adds events to the map
add:function add(o){var $=core.$,objectData=map.get(o.instance);if(o.node){if(typeof o.on=='function'){o.on.call(o.node,o.handler);}else {$(o.node).on(o.on.split(/\s+/).join('.mk ')+'.mk',o.handler);}}(list[objectData.id]=list[objectData.id]||[]).push(o);}, // removes events from the map
remove:function remove(o){var objectData=map.get(o.instance),evts=list[objectData.id],$=core.$,evt,i;if(!evts)return;for(i=0;i<evts.length;i++){evt=evts[i];if(evt.node!==o.node)continue; // remove Matreshka event
evt.mkHandler&&core._removeListener(o.instance,'_runbindings:'+o.key,evt.mkHandler); // remove DOM event
if(typeof evt.on=='string'){$(o.node).off(evt.on+'.mk',evt.handler);}evt.removed=true;list[objectData.id].splice(i--,1);}}};}(matreshka_dir_core_var_core,matreshka_dir_core_var_map);matreshka_dir_core_events_adddomlistener=function(core,initMK,map){core._addDOMListener=function(object,key,domEvtName,selector,callback,context,evtData){ /* istanbul ignore if  */if(!object||(typeof object==='undefined'?'undefined':_typeof(object))!='object')return object;initMK(object);selector=selector||null;evtData=evtData||{};var objectData=map.get(object),domEvtHandler=function domEvtHandler(domEvt){var node=this,$=core.$,$nodes=$(node),mkArgs=domEvt.originalEvent?domEvt.originalEvent.mkArgs:domEvt.mkArgs,evt={self:object,node:node,$nodes:$nodes,key:key,domEvent:domEvt,originalEvent:domEvt.originalEvent||domEvt,preventDefault:function preventDefault(){domEvt.preventDefault();},stopPropagation:function stopPropagation(){domEvt.stopPropagation();},which:domEvt.which,target:domEvt.target},randomID,is;callback.apply(context,mkArgs?mkArgs:[evt]);},fullEvtName=domEvtName+'.'+objectData.id+key,bindHandler=function bindHandler(evt){evt&&evt.$nodes&&evt.$nodes.on(fullEvtName,selector,domEvtHandler);},unbindHandler=function unbindHandler(evt){evt&&evt.$nodes&&evt.$nodes.off(fullEvtName,selector,domEvtHandler);};domEvtHandler._callback=callback;core._defineSpecial(object,key);bindHandler._callback=unbindHandler._callback=callback;if(core._addListener(object,'bind:'+key,bindHandler,context,evtData)&&core._addListener(object,'unbind:'+key,unbindHandler,context,evtData)){bindHandler({$nodes:objectData.special[key]&&objectData.special[key].$nodes});}return object;};}(matreshka_dir_core_var_core,matreshka_dir_core_initmk,matreshka_dir_core_var_map);matreshka_dir_core_events_removedomlistener=function(core,map){core._removeDOMListener=function(object,key,domEvtName,selector,callback,context,evtData){ /* istanbul ignore if  */if(!object||(typeof object==='undefined'?'undefined':_typeof(object))!='object')return object;var objectData=map.get(object);if(!objectData)return object;selector=selector||null;evtData=evtData||{};if(key&&objectData.special[key]){objectData.special[key].$nodes.off(domEvtName+'.'+objectData.id+key,selector,callback);core._removeListener(object,'bind:'+key,callback,context,evtData);core._removeListener(object,'unbind:'+key,callback,context,evtData);}return object;};}(matreshka_dir_core_var_core,matreshka_dir_core_var_map);matreshka_dir_core_events_once=function(core,initMK){var once=core.once=function(object,names,callback,context,evtData){var i; /* istanbul ignore if  */if(!object||(typeof object==='undefined'?'undefined':_typeof(object))!='object')return object;if((typeof names==='undefined'?'undefined':_typeof(names))=='object'){for(i in names){if(names.hasOwnProperty(i)){once(object,i,names[i],callback,context);}}return object;}if(!callback)throw Error('callback is not function for event "'+names+'"');initMK(object);names=names.split(/\s+/);for(i=0;i<names.length;i++){(function(name){var once=function(func){var ran=false,memo;return function(){if(ran)return memo;ran=true;memo=func.apply(this,arguments);func=null;return memo;};}(callback);once._callback=callback;core.on(object,name,once,context);})(names[i]);}return object;};}(matreshka_dir_core_var_core,matreshka_dir_core_initmk);matreshka_dir_core_events_ondebounce=function(core,initMK,util){var onDebounce=core.onDebounce=function(object,names,callback,debounceDelay,triggerOnInit,context,evtData){ /* istanbul ignore if  */if(!object||(typeof object==='undefined'?'undefined':_typeof(object))!='object')return object;var cbc,i;if((typeof names==='undefined'?'undefined':_typeof(names))=='object'){for(i in names){if(names.hasOwnProperty(i)){onDebounce(object,i,names[i],callback,debounceDelay,triggerOnInit,context);}}return object;} // flip args
if(typeof debounceDelay!='number'){evtData=context;context=triggerOnInit;triggerOnInit=debounceDelay;debounceDelay=0;}cbc=util.debounce(callback,debounceDelay); // set reference to real callback for .off method
cbc._callback=callback;return core.on(object,names,cbc,triggerOnInit,context,evtData);};}(matreshka_dir_core_var_core,matreshka_dir_core_initmk,matreshka_dir_core_util_common);matreshka_dir_matreshka_magic=function(core,map){core.map=map;return core;}(matreshka_dir_core_var_core,matreshka_dir_core_var_map);matreshka_dir_matreshka_dynamic=function(magic,map){ /*
  
  	This is the list of methods that inherited from magic. We need a way how to
  	inherit them dynamically. method.apply is slow	*/return {isMK:true,on:function on(names,callback,triggerOnInit,context,evtData){return magic.on(this,names,callback,triggerOnInit,context,evtData);},onDebounce:function onDebounce(names,callback,debounceDelay,triggerOnInit,context,evtData){return magic.onDebounce(this,names,callback,debounceDelay,triggerOnInit,context,evtData);},once:function once(names,callback,context){return magic.once(this,names,callback,context);},off:function off(names,callback,context){return magic.off(this,names,callback,context);},trigger:function trigger(){var args=magic.toArray(arguments);args.unshift(this);return magic.trigger.apply(magic,args);},bindNode:function bindNode(key,node,binder,evt,optional){return magic.bindNode(this,key,node,binder,evt,optional);},bindOptionalNode:function bindOptionalNode(key,node,binder,evt){return magic.bindOptionalNode(this,key,node,binder,evt);},bindSandbox:function bindSandbox(node,evt){return magic.bindSandbox(this,node,evt);},unbindNode:function unbindNode(key,node,evt){return magic.unbindNode(this,key,node,evt);},boundAll:function boundAll(key){return magic.boundAll(this,key);},$bound:function $bound(key){return magic.boundAll(this,key);},bound:function bound(key){return magic.bound(this,key);},selectAll:function selectAll(s){return magic.selectAll(this,s);},$:function $(s){return magic.selectAll(this,s);},select:function select(s){return magic.select(this,s);},defineGetter:function defineGetter(key,getter){return magic.defineGetter(this,key,getter);},defineSetter:function defineSetter(key,setter){return magic.defineSetter(this,key,setter);},mediate:function mediate(keys,mediator){return magic.mediate(this,keys,mediator);},setClassFor:function setClassFor(keys,Class,updateFunction){return magic.setClassFor(this,keys,Class,updateFunction);},linkProps:function linkProps(key,keys,getter,setOnInit){return magic.linkProps(this,key,keys,getter,setOnInit);},get:function get(key){return this[key];},set:function set(key,v,evt){return magic.set(this,key,v,evt);},remove:function remove(key,evt){return magic.remove(this,key,evt);},define:function define(key,descriptor){return magic.define(this,key,descriptor);},delay:function delay(f,_delay,thisArg){var _this=this;if((typeof _delay==='undefined'?'undefined':_typeof(_delay))=='object'){thisArg=_delay;_delay=0;}setTimeout(function(){f.call(thisArg||_this);},_delay||0);return _this;},parseBindings:function parseBindings(nodes){return magic.parseBindings(this,nodes);},_initMK:function _initMK(){var _this=this;if(map.has(_this))return _this;magic.initMK(_this);_this.nodes={};_this.$nodes={};_this.sandbox=null;_this.$sandbox=magic.$();return _this;},toString:function toString(){return '[object Matreshka]';},constructor:function Matreshka(){ /* istanbul ignore if  */if(!(this instanceof Matreshka)){throw new TypeError('Cannot call a class as a function');}return this._initMK();}};}(matreshka_dir_matreshka_magic,matreshka_dir_core_var_map);matreshka_dir_matreshka_static=function(Class){return {version:'dev',Class:Class};}(matreshka_dir_xclass);matreshka_dir_matreshkaclass=function(Class,magic,dynamic,_static){ /* istanbul ignore if  */if(!Class)throw Error('Class function is missing');_static.to=function(data){var result,i;if((typeof data==='undefined'?'undefined':_typeof(data))=='object'){if('length' in data){result=[];for(i=0;i<data.length;i++){result[i]=MK.to(data[i]);}result=new MK.Array().recreate(result);}else {result={};for(i in data){if(data.hasOwnProperty(i)){result[i]=MK.to(data[i]);}}result=new MK.Object(result);}}else {result=data;}return result;};var MK=Class(dynamic,_static);MK.setProto=function(proto){ /* jshint proto: true */var __proto__='__proto__',prototype=MK.prototype;if(Object.setPrototypeOf){Object.setPrototypeOf(MK.prototype,proto);}else {if(!(__proto__ in MK.prototype)){Object.defineProperty(prototype,__proto__,Object.getOwnPropertyDescriptor(Object.prototype,__proto__));}MK.prototype[__proto__]=proto;}return MK;};return magic.extend(MK.Matreshka=MK.prototype.Matreshka=MK,magic);}(matreshka_dir_xclass,matreshka_dir_matreshka_magic,matreshka_dir_matreshka_dynamic,matreshka_dir_matreshka_static);matreshka_dir_matreshka_object_dynamic=function(map,MK){return {keys:function keys(){var _this=this._initMK(),keys=map.get(_this).keys,result=[],p;for(p in keys){if(keys.hasOwnProperty(p)){result.push(p);}}return result;},toObject:function toObject(){var _this=this._initMK(),o={},keys=map.get(_this).keys,p;for(p in keys){if(keys.hasOwnProperty(p)){o[p]=_this[p];}}return o;},toNative:function toNative(){return this.toObject();},toJSON:function toJSON(){var _this=this._initMK(),JSON={},keys=map.get(_this).keys,p;for(p in keys){if(keys.hasOwnProperty(p)){JSON[p]=_this[p]&&_this[p].toJSON?_this[p].toJSON():_this[p];}}return JSON;},keyOf:function keyOf(o){var _this=this._initMK(),keys=map.get(_this).keys,p;for(p in keys){if(keys.hasOwnProperty(p)){if(o&&o.isMK){if(o.eq(_this[p])){return p;}}else if(o===_this[p]){return p;}}}return null;},jset:function jset(key,v,evt){var _this=this._initMK(),type=typeof key==='undefined'?'undefined':_typeof(key),objectData=map.get(_this),i;if(type=='undefined')return _this;if(key&&type=='object'){key=key.toJSON?key.toJSON():key;for(i in key){objectData.keys[i]=1;MK._defineSpecial(_this,i);_this.set(i,key[i],v);}return _this;}objectData.keys[key]=1;MK._defineSpecial(_this,key);return _this.set(key,v,evt);},addDataKeys:function addDataKeys(keys){var _this=this._initMK(),objectData=map.get(_this),args=arguments,i;if(!args.length||!keys)return _this;keys=args.length>1?args:keys instanceof Array?keys:MK.trim(keys).split(/\s+/);for(i=0;i<keys.length;i++){if(!objectData.keys[keys[i]]){objectData.keys[keys[i]]=1;MK._defineSpecial(_this,keys[i]);MK._fastTrigger(_this,'modify',{key:keys[i],value:_this[keys[i]]});}}return _this;},removeDataKeys:function removeDataKeys(keys){var _this=this._initMK(),objectData=map.get(_this),args=arguments,i,evt;if(!args.length||!keys)return _this;keys=args.length>1?args:keys instanceof Array?keys:MK.trim(keys).split(/\s+/);for(i=0;i<keys.length;i++){if(objectData.keys[keys[i]]){delete objectData.keys[keys[i]];evt={key:keys[i],value:_this[keys[i]]};MK._fastTrigger(_this,'remove',evt);MK._fastTrigger(_this,'modify',evt);}}return _this;},each:function each(callback,thisArg){var _this=this._initMK(),objectData=map.get(_this),p;for(p in objectData.keys){if(objectData.keys.hasOwnProperty(p)){callback.call(thisArg,_this[p],p,_this);}}return _this;}};}(matreshka_dir_core_var_map,matreshka_dir_matreshkaclass);matreshka_dir_matreshka_object_iterator=function matreshka_dir_matreshka_object_iterator(){var _this=this,keys=_this.keys(),i=0;return {next:function next(){if(i>keys.length-1){return {done:true};}else {return {done:false,value:_this[keys[i++]]};}}};};matreshka_dir_core_var_sym_iterator=typeof Symbol!='undefined'?Symbol.iterator:'@@iterator';matreshka_dir_matreshka_objectclass=function(MK,dynamic,iterator,symIterator,map){ /* istanbul ignore if  */if(!MK)throw new Error('Matreshka is missing');var i,prototype={'extends':MK,isMKObject:true,renderer:null,constructor:function MatreshkaObject(object){ /* istanbul ignore if  */if(!(this instanceof MatreshkaObject)){throw new TypeError('Cannot call a class as a function');}return this.jset(object);},_initMK:function _initMK(){var _this=this,objectData,addedEvents;if(map.has(_this))return _this;MK.prototype._initMK.call(_this);objectData=map.get(_this);objectData.keys={};MK._fastAddListener(_this,'addevent:modify',function(evt){if(!addedEvents){MK._fastAddListener(_this,'change',function(evt){if(evt&&evt.key in objectData.keys&&!evt.silent){MK._fastTrigger(_this,'modify',evt);}});MK._fastAddListener(_this,'delete',function(evt){if(evt&&evt.key in objectData.keys){delete objectData.keys[evt.key];if(!evt.silent){MK._fastTrigger(_this,'remove',evt);MK._fastTrigger(_this,'modify',evt);}}});addedEvents=true;}});return _this;},hasOwnProperty:function hasOwnProperty(key){return map.get(this._initMK()).keys.hasOwnProperty(key);}};MK.extend(prototype,dynamic);prototype[symIterator]=iterator;return MK.Object=MK.Class(prototype);}(matreshka_dir_matreshkaclass,matreshka_dir_matreshka_object_dynamic,matreshka_dir_matreshka_object_iterator,matreshka_dir_core_var_sym_iterator,matreshka_dir_core_var_map);matreshka_dir_matreshka_array_processrendering=function(map,initMK,MK){var getNode=function getNode(_this,item,evt){var thisData=map.get(_this),itemData=map.get(item),id=thisData.id,$=MK.$,arraysNodes=itemData.arraysNodes=itemData.arraysNodes||{},node=arraysNodes[id],itemRenderer=_this.itemRenderer,renderer=item.renderer,usedRenderer=renderer||itemRenderer,isOwnRenderer=usedRenderer===renderer,rendererContext=isOwnRenderer?item:_this,knownRendererNode=itemData.rendererNode,rendererHasBindings=itemData.rendererHasBindings,knownItemRendererNode=thisData.itemRendererNode,itemRendererHasBindings=thisData.itemRendererHasBindings,useBindingsParser=_this.useBindingsParser!==false,useCache=true,hasBindings=false,wrapper,sandboxes,i;if(!usedRenderer)return;if(evt.moveSandbox){if(node=MK.bound(item,['sandbox'])){arraysNodes[id]=node;}return node;}if(node){if(evt.forceRerender){sandboxes=MK.boundAll(item,['sandbox']);for(i=0;i<sandboxes.length;i++){if(node==sandboxes[i]){MK.unbindNode(item,'sandbox',node);break;}}node=arraysNodes[id]=null;}else {return node;}}if(!evt.forceRerender&&typeof usedRenderer!='function'){if(knownRendererNode){if(rendererHasBindings&&useBindingsParser){node=MK.parseBindings(item,knownRendererNode.cloneNode(true))[0];}else {node=knownRendererNode.cloneNode(true);}}if(knownItemRendererNode){if(itemRendererHasBindings&&useBindingsParser){node=MK.parseBindings(item,knownItemRendererNode.cloneNode(true))[0];}else {node=knownItemRendererNode.cloneNode(true);}}}if(!node){if(typeof usedRenderer=='function'){useCache=false;usedRenderer=usedRenderer.call(rendererContext,item);}if(typeof usedRenderer=='string'){if(!/</.test(usedRenderer)){usedRenderer=MK._getNodes(rendererContext,usedRenderer)[0];if(usedRenderer){usedRenderer=usedRenderer.innerHTML;}else {throw Error('renderer node is missing');}}if(/{{/.test(usedRenderer)){hasBindings=true;}usedRenderer=$.parseHTML(MK.trim(usedRenderer));if(usedRenderer.length>1){wrapper=document.createElement('span');for(i=0;i<usedRenderer.length;i++){wrapper.appendChild(usedRenderer[i]);}usedRenderer=wrapper;}else {usedRenderer=usedRenderer[0];}}if(useCache){if(isOwnRenderer){itemData.rendererNode=usedRenderer;itemData.rendererHasBindings=hasBindings;}else {thisData.itemRendererNode=usedRenderer;thisData.itemRendererHasBindings=hasBindings;}}else {if(isOwnRenderer){itemData.rendererNode=null;itemData.rendererHasBindings=false;}else {thisData.itemRendererNode=null;thisData.itemRendererHasBindings=false;}}if(hasBindings&&useBindingsParser){node=MK.parseBindings(item,usedRenderer.cloneNode(true))[0];}else {node=usedRenderer.cloneNode(true);}}return arraysNodes[id]=node;};var renderOne=function renderOne(_this,item,evt){var itemEvt,node,objectData;if(!item||(typeof item==='undefined'?'undefined':_typeof(item))!='object'||!_this.renderIfPossible||evt.dontRender)return;initMK(item);objectData=map.get(item);node=getNode(_this,item,evt);if(!node)return;if(item.bindRenderedAsSandbox!==false){MK.bindSandbox(item,node);}if(!evt.silent){itemEvt={node:node,$nodes:MK.$(node),self:item,parentArray:_this};item.onRender&&item.onRender(itemEvt);_this.onItemRender&&_this.onItemRender(item,itemEvt);MK._fastTrigger(item,'render',itemEvt); // TODO make this code smarter, don't use setTimeout
objectData.events.afterrender&&setTimeout(function(){MK._fastTrigger(item,'afterrender',itemEvt);},0);}return node;};return function(_this,evt){var objectData=map.get(_this),id=objectData.id,l=_this.length,added=evt.added,removed=evt.removed,addedLength=added&&added.length,removedLength=removed&&removed.length,container=objectData.special.container||objectData.special.sandbox,node,next,i,item,itemData;container=container&&container.$nodes;container=container&&container[0];if(!container)return _this;switch(evt.method){case 'push':for(i=l-addedLength;i<l;i++){if(node=renderOne(_this,_this[i],evt)){container.appendChild(node);}}break;case 'unshift':for(i=addedLength-1;i+1;i--){if(node=renderOne(_this,_this[i],evt)){if(container.firstChild){container.insertBefore(node,container.firstChild);}else {container.appendChild(node);}}}break;case 'pull':case 'pop':case 'shift':for(i=0;i<removedLength;i++){item=removed[i];itemData=map.get(item);node=itemData.arraysNodes&&itemData.arraysNodes[id];if(node){container.removeChild(node);}}break;case 'sort':case 'reverse':for(i=0;i<l;i++){item=_this[i];itemData=map.get(item);if(node=itemData&&itemData.arraysNodes[id]){container.appendChild(node);}}break;case 'rerender':if(evt.forceRerender){for(i=0;i<l;i++){item=_this[i];itemData=map.get(item);node=itemData&&itemData.arraysNodes&&itemData.arraysNodes[id];if(node){container.removeChild(node);}}}for(i=0;i<l;i++){if(node=renderOne(_this,_this[i],evt)){container.appendChild(node);}}break;case 'recreate':for(i=0;i<removedLength;i++){item=removed[i];itemData=map.get(item);node=itemData&&itemData.arraysNodes&&itemData.arraysNodes[id];if(node){container.removeChild(node);}}for(i=0;i<l;i++){if(node=renderOne(_this,_this[i],evt)){container.appendChild(node);}}break;case 'splice':next=_this[evt.args[0]<0?l+evt.args[0]-addedLength+removedLength-1:evt.args[0]-1];next=map.get(next);next=next&&next.arraysNodes;next=next&&next[id];next=next&&next.nextSibling;next=next||container.firstChild;for(i=0;i<addedLength;i++){if(node=renderOne(_this,added[i],evt)){container.insertBefore(node,next);}}for(i=0;i<removedLength;i++){item=removed[i];itemData=map.get(item);node=itemData&&itemData.arraysNodes&&itemData.arraysNodes[id];if(node){container.removeChild(node);}}break;}return _this;};}(matreshka_dir_core_var_map,matreshka_dir_core_initmk,matreshka_dir_matreshkaclass);matreshka_dir_matreshka_array_triggermodify=function(MK,map,processRendering){return function(_this,evt,additional){var added=evt.added,removed=evt.removed,events=map.get(_this).events,method=evt.method,modified=added.length||removed.length||method=='sort'||method=='reverse',i;if(!evt.silent){if(additional){events[additional]&&MK._fastTrigger(_this,additional,evt);}if(added.length){events.add&&MK._fastTrigger(_this,'add',evt);if(events.addone){for(i=0;i<added.length;i++){MK._fastTrigger(_this,'addone',{self:_this,added:added[i]});}}}if(removed.length){events.remove&&MK._fastTrigger(_this,'remove',evt);if(events.removeone){for(i=0;i<removed.length;i++){MK._fastTrigger(_this,'removeone',{self:_this,removed:removed[i]});}}}if(modified){events.modify&&MK._fastTrigger(_this,'modify',evt);}}if(modified&&!evt.dontRender){processRendering(_this,evt);}};}(matreshka_dir_matreshkaclass,matreshka_dir_core_var_map,matreshka_dir_matreshka_array_processrendering);matreshka_dir_matreshka_array_recreate=function matreshka_dir_matreshka_array_recreate(_this,array){array=array||[];var diff=_this.length-array.length,prepared,i;for(i=0;i<array.length;i++){_this[i]=array[i];}for(i=0;i<diff;i++){_this.remove(i+array.length,{silent:true});}_this.length=array.length;return _this;};matreshka_dir_matreshka_array_native_dynamic=function(MK,util,triggerModify,recreate){var methods={},Array_prototype=Array.prototype,toArray=util.toArray;function createMethod(name,hasOptions){switch(name){case 'forEach':return function(callback,thisArg){var _this=this;Array_prototype[name].call(_this,callback,thisArg);return _this;};case 'map':case 'filter':case 'slice':return function(a,b){var _this=this;return MK.Array.from(Array_prototype[name].call(_this,a,b));};case 'every':case 'some':return function(callback,thisArg){var _this=this;return Array_prototype[name].call(_this,callback,thisArg);};case 'join':return function(separator){var _this=this;return Array_prototype[name].call(_this,separator||',');};case 'indexOf':case 'lastIndexOf':return function(item){var _this=this;return Array_prototype[name].call(_this,item);};case 'reduce':case 'reduceRight':return function(){var _this=this;return Array_prototype[name].apply(_this,arguments);};case 'sort':case 'reverse':return function(a,b){if(this.length<=1)return _this;var _this=this._initMK(),evt,array,returns,i,_evt;evt=hasOptions?(name=='sort'&&b?b:a)||{}:{};returns=Array_prototype[name].call(_this,a);_evt={method:name,self:_this,added:[],removed:[]};for(i in evt){_evt[i]=evt[i];}triggerModify(_this,_evt,name);return _this;};case 'pop':case 'shift':return function(evtOptions){if(!this.length)return;var _this=this._initMK(),evt,array,returns,added,removed,i,_evt;evt=hasOptions?evtOptions||{}:{};returns=Array_prototype[name].call(_this);_evt={method:name,self:_this,added:added=[],removed:removed=[returns]};for(i in evt){_evt[i]=evt[i];}triggerModify(_this,_evt,name);return returns;};case 'push':case 'unshift':return function(){var _this=this._initMK(),_arguments=arguments,args=new Array(_arguments.length),length=_this.length,argsLength=args.length,evt,array,returns,added,removed,i,_evt;for(i=0;i<argsLength;i++){args[i]=_arguments[i];}evt=hasOptions?args[argsLength-1]||{}:{};if(hasOptions){args.pop();argsLength--;}if(!argsLength){return length;}if(!evt.skipMediator&&typeof _this._itemMediator=='function'){for(i=0;i<argsLength;i++){args[i]=_this._itemMediator.call(_this,args[i],name=='push'?i+length:i);}}if(name=='push'){for(i=0;i<argsLength;i++){_this[length+i]=args[i];}}else if(name=='unshift'){for(i=length-1;i>=0;i--){_this[argsLength+i]=_this[i];}for(i=0;i<argsLength;i++){_this[i]=args[i];}}_this.length=length=length+argsLength;_evt={method:name,self:_this,added:args,removed:[]};for(i in evt){_evt[i]=evt[i];}triggerModify(_this,_evt,name);return length;};case 'splice':return function(){var _this=this._initMK(),_arguments=arguments,args=new Array(_arguments.length),length=_this.length,argsLength=args.length,added=[],start,evt,array,returns,removed,i,_evt;for(i=0;i<argsLength;i++){args[i]=_arguments[i];}start=args[0];evt=hasOptions?args[argsLength-1]||{}:{};start=start<0?length+start:start;if(hasOptions){args.pop();argsLength--;}if(!evt.skipMediator&&typeof _this._itemMediator=='function'){for(i=2;i<argsLength;i++){args[i]=_this._itemMediator.call(_this,args[i],start+i-2);}}for(i=2;i<argsLength;i++){if(i>=2){added[i-2]=args[i];}}returns=Array_prototype[name].apply(_this,args);removed=returns;if(added.length||removed.length){_evt={args:args,method:name,self:_this,added:added,removed:removed};for(i in evt){_evt[i]=evt[i];}triggerModify(_this,_evt,name);}return MK.Array.from(returns);};}}'push pop unshift shift sort reverse splice map filter slice every some reduce reduceRight forEach join indexOf lastIndexOf'.split(' ').forEach(function(name){methods[name]=createMethod(name);});'push pop unshift shift sort reverse splice'.split(' ').forEach(function(name){methods[name+'_']=createMethod(name,true);});methods.each=methods.forEach;methods.concat=function(){var args=arguments,result=this.toArray(),arg,i,j;for(i=0;i<args.length;i++){arg=args[i];if(arg instanceof Array||arg instanceof MK.Array||arg&&arg.instanceOf&&arg.instanceOf(MK.Array)){for(j=0;j<arg.length;j++){result.push(arg[j]);}}}return MK.Array.from(result);};methods.toString=function(){return this.toArray().join(',');};return methods;}(matreshka_dir_matreshkaclass,matreshka_dir_core_util_common,matreshka_dir_matreshka_array_triggermodify,matreshka_dir_matreshka_array_recreate);matreshka_dir_matreshka_array_native_static=function(MK){return {of:function of(){var result=new MK.Array(),args=arguments,i;result.length=args.length;for(i=0;i<args.length;i++){result[i]=args[i];}return result;}, // Doesn't work with maps and sets yet
from:function from(arrayLike,mapFn,thisArg){var result=new MK.Array(),i;result.length=arrayLike.length;for(i=0;i<arrayLike.length;i++){result[i]=mapFn?mapFn.call(thisArg,arrayLike[i],i,arrayLike):arrayLike[i];}return result;}};}(matreshka_dir_matreshkaclass);matreshka_dir_matreshka_array_custom_dynamic=function(map,MK,processRendering,triggerModify,recreate,initMK){return {mediateItem:function mediateItem(itemMediator){var _this=this,l=_this.length,i;_this._itemMediator=itemMediator;for(i=0;i<l;i++){_this[i]=itemMediator.call(_this,_this[i],i);}return _this;},recreate:function recreate(array,evt){array=array||[];var _this=this._initMK(),newLength=array.length,oldLength=_this.length,diff=oldLength-newLength,was=_this.toArray(),trackBy=_this.trackBy,prepared,i,j,_evt,trackMap,added,removed,now;evt=evt||{};function update(instance,data){var i;if(instance.isMKArray){instance.recreate(data);}else if(instance.isMKObject){instance.jset(data);}else {for(i in data){if(data.hasOwnProperty(i)){instance[i]=data[i];}}}return instance;}if(trackBy){trackMap={};if(trackBy=='$index'){for(i=0;i<newLength;i++){array[i]=_this[i]?update(_this[i],array[i]):array[i];}}else {for(i=0;i<_this.length;i++){trackMap[_this[i][trackBy]]=_this[i];}for(i=0;i<newLength;i++){if(array[i][trackBy] in trackMap){array[i]=update(trackMap[array[i][trackBy]],array[i]);}}}}if(_this._itemMediator&&!evt.skipMediator){prepared=[];for(i=0;i<newLength;i++){prepared[i]=_this._itemMediator.call(_this,array[i],i);}array=prepared;}for(i=0;i<newLength;i++){_this[i]=array[i];}for(i=0;i<diff;i++){delete _this[i+newLength];delete map.get(_this).special[i+newLength];}_this.length=newLength;if(evt.silent&&evt.dontRender){return _this;}now=_this.toArray();if(now.length){if(was.length){removed=[];j=0;for(i=0;i<was.length;i++){if(! ~now.indexOf(was[i])){removed[j++]=was[i];}}}else {removed=[];}}else {removed=was;}if(was.length){if(now.length){added=[];j=0;for(i=0;i<now.length;i++){if(! ~was.indexOf(now[i])){added[j++]=now[i];}}}else {added=[];}}else {added=now;}_evt={added:added,removed:removed,was:was,now:now,method:'recreate',self:_this};for(i in evt){_evt[i]=evt[i];}triggerModify(_this,_evt,'recreate');return _this;},toArray:function toArray(){var _this=this,array=[],l=_this.length,i;array=[];for(i=0;i<l;i++){array[i]=_this[i];}return array;},toNative:function toNative(){return this.toArray();},rerender:function rerender(evt){var _evt={method:'rerender'},i;if(evt&&(typeof evt==='undefined'?'undefined':_typeof(evt))=='object'){for(i in evt){_evt[i]=evt[i];}}return processRendering(this,_evt);},toJSON:function toJSON(){var _this=this,JSON=[],l=_this.length,i;for(i=0;i<l;i++){_this[i]&&_this[i].toJSON?JSON.push(_this[i].toJSON()):JSON.push(_this[i]);}return JSON;},pull:function pull(index,evt){var _this=this._initMK(),array=_this.toArray(),_index=index,type=typeof index==='undefined'?'undefined':_typeof(index),returns,removed,_evt,i;if(type!='number'&&type!='string'){index=_this.indexOf(index);if(! ~index){return null;}}returns=array.splice(index,1)[0]||null;if(returns){recreate(_this,array,evt);_evt={returns:returns,args:[_index],method:'pull',self:_this,added:[],removed:removed=returns?[returns]:[]};if(evt){for(i in evt){_evt[i]=evt[i];}}triggerModify(_this,_evt,'pull');}return returns;},restore:function restore(selector,evt){var _this=this._initMK(),objectData=map.get(_this),id=objectData.id,Model=_this.Model,nodes,node,container,i,item,arraysNodes,itemEvt,result;if(selector){nodes=MK._getNodes(_this,selector);}else {container=objectData.special.container||objectData.special.sandbox;container=container&&container.$nodes;container=container&&container[0];nodes=container&&container.children;}if(nodes&&nodes.length){result=[];for(i=0;i<nodes.length;i++){node=nodes[i];item=Model?new Model():{};initMK(item);arraysNodes=objectData.arraysNodes={};arraysNodes[id]=node;if(item.bindRenderedAsSandbox!==false){MK.bindNode(item,'sandbox',node);}if(!evt||!evt.silent){itemEvt={node:node,$nodes:MK.$(node),self:item,parentArray:_this};item.onRender&&item.onRender(itemEvt);_this.onItemRender&&_this.onItemRender(item,itemEvt);MK._fastTrigger(item,'render',itemEvt);}result[i]=item;}_this.recreate(result,evt);}return _this;},orderBy:function orderBy(keys,orders,evt){var _this=this,_evt,i;if(_this.length>1){recreate(_this,MK.orderBy(_this,keys,orders));_evt={method:'sort', // allows to listen "sort" event
self:_this,added:[],removed:[]};if(evt){for(i in evt){_evt[i]=evt[i];}}triggerModify(_this,_evt,'sort');}return _this;}};}(matreshka_dir_core_var_map,matreshka_dir_matreshkaclass,matreshka_dir_matreshka_array_processrendering,matreshka_dir_matreshka_array_triggermodify,matreshka_dir_matreshka_array_recreate,matreshka_dir_core_initmk);matreshka_dir_matreshka_array_iterator=function matreshka_dir_matreshka_array_iterator(){var _this=this,i=0;return {next:function next(){if(i>_this.length-1){return {done:true};}else {return {done:false,value:_this[i++]};}}};};matreshka_dir_matreshka_arrayclass=function(MK,map,nDynamic,nStatic,cDynamic,triggerModify,processRendering,iterator,symIterator){ /* istanbul ignore if  */if(!MK)throw new Error('Matreshka is missing');var prototype={'extends':MK,isMKArray:true,length:0,itemRenderer:null,renderIfPossible:true,Model:null,constructor:function MatreshkaArray(length){ /* istanbul ignore if  */if(!(this instanceof MatreshkaArray)){throw new TypeError('Cannot call a class as a function');}var _this=this._initMK(),al=arguments.length,i;if(al==1&&typeof length=='number'){_this.length=length;}else {for(i=0;i<al;i++){_this[i]=arguments[i];}_this.length=al;}return _this;},_initMK:function _initMK(){var _this=this,changeModel;if(map.has(_this))return _this;if('Model' in _this&&_this.Model!==null&&typeof _this.Model!='function'){throw Error('Only function or null are valid values for Model, not "'+_typeof(_this.Model)+'"');}changeModel=function changeModel(){var Model=_this.Model;if(Model){_this.mediateItem(function(item,i){return !item||!(item.instanceOf?item.instanceOf(Model):item instanceof Model)?new Model(item&&item.toJSON?item.toJSON():item,_this,i):item;});}};MK.prototype._initMK.call(_this);MK._fastAddListener(_this,'change:Model',changeModel);MK._fastAddListener(_this,'change:itemRenderer',function(evt){_this.rerender({forceRerender:evt&&'forceRerender' in evt?evt.forceRerender:true});});changeModel();return _this;},toJSON:function toJSON(){var _this=this,JSON=[],l=_this.length,i;for(i=0;i<l;i++){_this[i]&&_this[i].toJSON?JSON[i]=_this[i].toJSON():JSON[i]=_this[i];}return JSON;},hasOwnProperty:function hasOwnProperty(p){return p=='length'||p<this.length&&p>=0;}};MK.extend(prototype,nDynamic,cDynamic);prototype[symIterator]=iterator;MK.Array=MK.Class(prototype,nStatic);return MK.Array;}(matreshka_dir_matreshkaclass,matreshka_dir_core_var_map,matreshka_dir_matreshka_array_native_dynamic,matreshka_dir_matreshka_array_native_static,matreshka_dir_matreshka_array_custom_dynamic,matreshka_dir_matreshka_array_triggermodify,matreshka_dir_matreshka_array_processrendering,matreshka_dir_matreshka_array_iterator,matreshka_dir_core_var_sym_iterator);matreshka_dir_amd_modules_matreshka=function(MK,MK_Object,MK_Array,MK_binders){return MK;}(matreshka_dir_matreshkaclass,matreshka_dir_matreshka_objectclass,matreshka_dir_matreshka_arrayclass);matreshka=function(MK){return MK;}(matreshka_dir_amd_modules_matreshka);matreshka.version="1.8.0";(function(){ // hack for systemjs builder
var d="define"; // I don't know how to define modules with no dependencies (since we use AMDClean)
// so I have to hack it, unfortunatelly
if(typeof __root!='undefined'){ /* global matreshka, balalaika, matreshka_magic, xclass, __root */if(typeof define=='function'&&define.amd){if(__root[d]){__root[d]('matreshka',function(){return matreshka;});__root[d]('bquery',function(){return matreshka.$b;});__root[d]('balalaika',function(){return matreshka.$b;});__root[d]('xclass',function(){return matreshka.Class;});__root[d]('matreshka-magic',function(){return matreshka_magic;});}define(function(){return matreshka;});}else if((typeof exports==='undefined'?'undefined':_typeof(exports))=="object"){module.exports=matreshka;}else {__root.Matreshka=__root.MK=matreshka;__root.$b=matreshka.$b;__root.Class=matreshka.Class;}}})();})(typeof window!="undefined"?window:Function("return this")());

},{}]},{},[1]);
