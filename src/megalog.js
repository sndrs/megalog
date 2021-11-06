import { formatMessage } from './format-message.js';

export const megalog = (
	message,
	{
		heading,
		colour = 'black',
		color = colour,
		bgColour = 'white',
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
		bgColor: 'cyan',
		color: 'black',
		codeColor: 'dim',
	});

megalog.warn = (message, { heading = 'warning' } = {}) =>
	megalog(message, {
		heading,
		bgColor: 'yellow',
		color: 'black',
		codeColor: 'dim',
	});

megalog.error = (message, { heading = 'error' } = {}) =>
	megalog(message, {
		heading,
		bgColor: 'red',
		color: 'black',
		codeColor: 'dim',
	});

megalog.success = (message, { heading = 'success' } = {}) =>
	megalog(message, {
		heading,
		bgColor: 'green',
		color: 'black',
		codeColor: 'dim',
	});
