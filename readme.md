# megalog

Output messages to the console in big blocks; for when you really need something to be noticed.

![examples](examples/megalogs.png)

## Install

```
$ npm install --save megalog
```

## Usage

Use in place of `console` in node/io.js, in the four following scenarios:

```js
var megalog = require('./megalog');

megalog.log("Process complete");
megalog.info("Everthing is looking good.");
megalog.warn("You should check something…");
megalog.error("Something has gone wrong.");
```

Markdown-style inline code snippets will be hightlighted (see image above):

```js
megalog.error("`grunt kill-website` has been removed.");
```

![example with inline code](examples/megalog-inlinecode.png)

### Options

You can override the defaults with an optional parametres object, as a second argument:
- `heading` adds or overides the heading

Megalog uses [chalk](https://github.com/sindresorhus/chalk), so all colour settings can be overridden using the [chalk presets](https://github.com/sindresorhus/chalk#colors)
- `colour` text colour
- `bgColour` background colour
- `codeColour` highlight colour for inline code

```js
megalog.log("Mmmmm nice: `rm -rf`", {colour: 'yellow', bgColour: 'green', codeColour: 'magenta'});
```

![example with overides](examples/megalog-colours.png)

## Build

```
$ npm install
$ npm run build
```
