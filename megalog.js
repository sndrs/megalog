'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _windowSize = require('window-size');

var _windowSize2 = _interopRequireDefault(_windowSize);

var maxWidth = 44;
var minPadding = 3;
var minMargin = 3;

var MegaLog = (function () {
    function MegaLog() {
        var message = arguments[0] === undefined ? 'hello' : arguments[0];

        var _ref = arguments[1] === undefined ? {} : arguments[1];

        var _ref$width = _ref.width;
        var width = _ref$width === undefined ? 40 : _ref$width;
        var _ref$heading = _ref.heading;
        var heading = _ref$heading === undefined ? false : _ref$heading;
        var _ref$bgColour = _ref.bgColour;
        var bgColour = _ref$bgColour === undefined ? 'white' : _ref$bgColour;
        var _ref$colour = _ref.colour;
        var colour = _ref$colour === undefined ? 'black' : _ref$colour;
        var _ref$codeColour = _ref.codeColour;
        var codeColour = _ref$codeColour === undefined ? 'red' : _ref$codeColour;

        _classCallCheck(this, MegaLog);

        this.margin = minMargin;
        this.padding = minPadding;
        this.width = _windowSize2['default'].width - this.padding * 2 - this.margin * 2;

        this.bgColour = 'bg' + _lodash2['default'].capitalize(bgColour.toLowerCase());
        this.color = colour;
        this.codeColour = codeColour;

        this.heading = heading;
        this.message = this.colouriseCode(message);

        this.bar = this.formatLine(_lodash2['default'].repeat(' ', this.width));
    }

    _createClass(MegaLog, [{
        key: 'formatLine',
        value: function formatLine(line) {
            var space = this.width - _chalk2['default'].stripColor(line).length;
            return _lodash2['default'].repeat(' ', this.margin) + _chalk2['default'][this.bgColour][this.color](_lodash2['default'].repeat(' ', this.padding)
            // + _.repeat(' ', Math.floor(space / 2))
             + line + _lodash2['default'].repeat(' ', space)
            // + _.repeat(' ', Math.ceil(space / 2))
             + _lodash2['default'].repeat(' ', this.padding)) + '\n';
        }
    }, {
        key: 'colouriseCode',

        // highlight markdown-style inline code
        value: function colouriseCode(s) {
            var _this = this;

            return s.replace(/`([\s\S]+?)`/g, function (match, $1) {
                // colourise each word, in case the block is wrapped
                return _lodash2['default'].map($1.split(' '), function (codeFragment) {
                    return _chalk2['default'][_this.codeColour](codeFragment);
                }).join(' ');
            });
        }
    }, {
        key: 'asWrappedLines',
        value: function asWrappedLines() {
            var _this2 = this;

            var existingLines = this.message.split('\n');
            return _lodash2['default'].flatten(_lodash2['default'].map(existingLines, function (line) {
                var words = line.split(' ');
                return _lodash2['default'].reduce(words, function (prev, curr) {
                    if (prev.length && _chalk2['default'].stripColor(prev[prev.length - 1] + ' ' + curr).length <= _this2.width) {
                        prev[prev.length - 1] += ' ' + curr;
                    } else {
                        prev.push(curr);
                    }
                    return prev;
                }, []);
            }));
        }
    }, {
        key: 'formattedBlock',
        value: function formattedBlock() {
            var _this3 = this;

            return '\n' + this.bar + (this.heading ? _chalk2['default'].bold(this.formatLine(_lodash2['default'].padRight(this.heading.toUpperCase(), this.width))) + this.bar : '') + _lodash2['default'].map(this.asWrappedLines(), function (line) {
                return _this3.formatLine(line);
            }).join('') + this.bar;
        }
    }]);

    return MegaLog;
})();

exports['default'] = {
    log: function log(message, options) {
        console.log(new MegaLog(message, options).formattedBlock());
    },
    info: function info(message) {
        var options = arguments[1] === undefined ? {} : arguments[1];

        options = _lodash2['default'].merge({
            heading: 'FYI',
            bgColour: 'cyan',
            colour: 'white',
            codeColour: 'black'
        }, options);
        console.info(new MegaLog(message, options).formattedBlock());
    },
    warn: function warn(message) {
        var options = arguments[1] === undefined ? {} : arguments[1];

        options = _lodash2['default'].merge({
            heading: 'warning',
            bgColour: 'magenta',
            colour: 'white',
            codeColour: 'black'
        }, options);
        console.warn(new MegaLog(message, options).formattedBlock());
    },
    error: function error(message) {
        var options = arguments[1] === undefined ? {} : arguments[1];

        options = _lodash2['default'].merge({
            heading: 'error',
            bgColour: 'red',
            colour: 'white',
            codeColour: 'black'
        }, options);
        console.warn(new MegaLog(message, options).formattedBlock());
    }
};
module.exports = exports['default'];
