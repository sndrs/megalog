import { formatMessage } from './format-message.js';

export const megalog = (
	message,
	{
		heading,
		colour = 'black',
		color = colour,
		bgColour = 'bgWhite',
		bgColor = bgColour,
		codeColour = 'dim',
		codeColor = codeColour,
	} = {},
) => {
	console.log(formatMessage(message, { color, bgColor, codeColor, heading }));
};

megalog.info = (message, { heading = 'info' } = {}) =>
	megalog(message, {
		heading,
		bgColor: 'bgCyan',
		color: 'black',
		codeColor: 'dim',
	});

megalog.warn = (message, { heading = 'warning' } = {}) =>
	megalog(message, {
		heading,
		bgColor: 'bgYellow',
		color: 'black',
		codeColor: 'dim',
	});

megalog.error = (message, { heading = 'error' } = {}) =>
	megalog(message, {
		heading,
		bgColor: 'bgRed',
		color: 'black',
		codeColor: 'dim',
	});

megalog.success = (message, { heading = 'success' } = {}) =>
	megalog(message, {
		heading,
		bgColor: 'bgGreen',
		color: 'black',
		codeColor: 'dim',
	});
