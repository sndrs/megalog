import size from 'window-size';
import wrapAnsi from 'wrap-ansi';
import stripAnsi from 'strip-ansi';
import chalk from 'chalk';
import { marked } from 'marked';

const PADDING = 3;
const MARGIN = 3;
const WIDTH = Math.min(size.width - (PADDING + MARGIN) * 2, 60);

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export const formatMessage = (
	message,
	{ heading, color, bgColor, codeColor } = {},
) => {
	const chalkColor = color;
	const chalkBgColor = `bg${capitalize(bgColor)}`;
	const chalkCodeColor = codeColor;

	marked.use({
		smartypants: true,
		headerIds: false,
		renderer: {
			blockquote: (text) => {
				const quote = text.split('\n').slice(0, -2);
				const indented = quote.map((line) => `> ${line}`).join('\n');
				return chalk.dim.italic(indented) + '\n\n';
			},

			br: () => '\n',
			checkbox: (checked) => (checked ? '☒ ' : '☐ '),
			code: (text, infostring, escaped) =>
				'▾'.repeat(WIDTH) +
				'\n' +
				text.replace(/ /g, ' ') +
				'\n' +
				'▴'.repeat(WIDTH) +
				'\n\n',

			codespan: (text) => chalk[chalkCodeColor]('`' + text + '`'),
			del: (text) => chalk.strikethrough(text),
			em: (text) => chalk.italic(text),
			heading: (text, level, raw, slugger) => {
				let heading = text.toUpperCase();
				if (level === 1) {
					heading = wrapAnsi(heading, WIDTH - 2)
						.split('\n')
						// these spaces are en quads so they are not trimmed
						// by wrapAnsi later on
						.map((line) => chalk.inverse(' ' + line + ' '))
						.join('\n');
				}
				return heading + '\n\n';
			},
			hr: () => '/'.repeat(WIDTH) + '\n\n',
			html: (text) => text,
			link: (href, title, text) =>
				`${text} ${chalk.dim(`(${chalk.underline(href)})`)}`,
			list: (text, ordered, start) => text + '\n',
			listitem: (text, task, checked) => `• ${text}\n`,
			paragraph: (text) => text + '\n\n',
			strong: (text) => chalk.bold(text),
			table: (text, body) => text.toUpperCase() + body + '\n',
			tablecell: (text, flags) => text + ' / ',
			tablerow: (text) => text.trim().replace(/\/$/g, '') + '\n',
		},
	});

	if (heading) {
		message = `# ${heading}\n` + message;
	}

	message = marked.parse(message);

	message = wrapAnsi(message, WIDTH, { hard: true });
	message = '\n' + message.trim() + '\n';
	message = message
		.split('\n')
		.map(
			(line) =>
				' '.repeat(PADDING) +
				line +
				' '.repeat(WIDTH + PADDING - stripAnsi(line).length),
		)
		.map((line) => chalk[chalkBgColor][chalkColor](line))
		.map((line) => ' '.repeat(MARGIN) + line + ' '.repeat(MARGIN))
		.join('\n');

	return '\n' + message + '\n';
};