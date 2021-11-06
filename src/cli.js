#!/usr/bin/env node
import { createRequire } from 'module';
import mri from 'mri';
import { megalog } from './megalog.js';

const showHelp = () => {
	console.log(`Output messages to the console in unmissable blocks.\n`);
	showUsage();
};

const showUsage = () => {
	console.log(`Usage
  $ megalog <message> <options>

Options
  --info Use the info preset
  --warn Use the warning preset
  --error Use the error preset
  --success Use the success preset

  --heading Set a custom heading
  --color Set a custom text color
  --bgColor Set a custom background color
  --codeColor Set a custom code snippet color

Examples
  $ megalog "Something has gone wrong" --error
  $ megalog "Something just happened" -h "FYI"`);
};

const showVersion = () => {
	const require = createRequire(import.meta.url);
	console.log(require('../package.json').version);
};

const input = mri(process.argv.slice(2), {
	boolean: ['help', 'version', 'info', 'error', 'warn', 'success'],
	string: ['bgColor', 'color', 'codeColor', 'heading'],
	alias: {
		i: 'info',
		e: 'error',
		w: 'warn',
		s: 'success',
		h: 'help',
		v: 'version',
	},
});

const message = input._.join(' ');

if (input.help) {
	showHelp();
} else if (input.version) {
	showVersion();
} else if (input.info) {
	megalog.info(message, input);
} else if (input.warn) {
	megalog.warn(message, input);
} else if (input.error) {
	megalog.error(message, input);
} else if (input.success) {
	megalog.success(message, input);
} else {
	megalog(message, input);
}
