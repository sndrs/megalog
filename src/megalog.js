import _ from 'lodash';
import chalk from 'chalk';
import size from 'window-size';

const padding = 3;
const margin = 3;

class MegaLog {

    constructor (message = 'hello', {heading = false, bgColour = 'white', colour = 'black', codeColour = 'red'} = {}) {
        this.margin = margin;
        this.padding = padding;
        this.width = size.width - (this.padding * 2) - (this.margin * 2);

        this.bgColour = `bg${_.capitalize(bgColour.toLowerCase())}`;
        this.color = colour;
        this.codeColour = codeColour;

        this.heading = heading;
        this.message = this.colouriseCode(message);

        this.bar = this.formatLine(_.repeat(' ', this.width));
    }

    formatLine (line) {
        var space = this.width - chalk.stripColor(line).length;
        return (
            _.repeat(' ', this.margin)
            + chalk[this.bgColour][this.color](
                _.repeat(' ', this.padding)
                + line
                + _.repeat(' ', space)
                + _.repeat(' ', this.padding)
            )
            + '\n'
        )
    }

    // highlight markdown-style inline code
    colouriseCode (s) {
        return s.replace(/`([\s\S]+?)`/g, (match, $1) => {
            // colourise each word, in case the block is wrapped
            return _.map($1.split(' '), (codeFragment) => {
                return chalk[this.codeColour](codeFragment);
            }).join(' ');
        });
    }

    asWrappedLines () {
        var existingLines = this.message.split('\n');
        return _.flatten(_.map(existingLines, (line) => {
            var words = line.split(' ');
            return _.reduce(words, (prev, curr) => {
                if (prev.length && (chalk.stripColor(prev[prev.length - 1] + ' ' + curr)).length <= this.width) {
                    prev[prev.length - 1] += ' ' + curr;
                } else {
                    prev.push(curr);
                }
                return prev;
            }, [])
        }));
    }

    formattedBlock () {
        return (
            '\n'
            + this.bar
            + (this.heading ? chalk.bold(this.formatLine(_.padRight(this.heading.toUpperCase(), this.width))) + this.bar : '')
            + _.map(this.asWrappedLines(), (line) => {
                return this.formatLine(line);
            }).join('')
            + this.bar
        )
    }
}

export default {
    log: (message, options) => {
        console.log(new MegaLog(message, options).formattedBlock());
    },
    info: (message, options = {}) => {
        options = _.merge({
            heading: 'FYI',
            bgColour: 'cyan',
            colour: 'white',
            codeColour: 'black'
        }, options);
        console.info(new MegaLog(message, options).formattedBlock());
    },
    warn: (message, options = {}) => {
        options = _.merge({
            heading: 'warning',
            bgColour: 'magenta',
            colour: 'white',
            codeColour: 'black'
        }, options);
        console.warn(new MegaLog(message, options).formattedBlock());
    },
    error: (message, options = {}) => {
        options = _.merge({
            heading: 'error',
            bgColour: 'red',
            colour: 'white',
            codeColour: 'black'
        }, options);
        console.warn(new MegaLog(message, options).formattedBlock());
    }
}