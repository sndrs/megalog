require('babel/register');
var megalog = require('../src/megalog');

megalog.log("This is a `megalog.log`.");
megalog.log("This is a `megalog.log` with a heading of 'Hello'.", {heading: 'Hello'});
megalog.log("This is a `megalog.log` in red, on blue, with green code.", {colour: 'red', bgColour: 'blue', codeColour: 'green'});
megalog.log("This is a `megalog.log` in red, on blue, with green code, spelt the American way.", {color: 'red', bgColor: 'blue', codeColor: 'green'});

megalog.info("This is a `megalog.info`.");
megalog.info("This is a `megalog.info` with a heading of 'Hello'.", {heading: 'Hello'});
megalog.info("This is a `megalog.info` in red, on blue, with green code.", {colour: 'red', bgColour: 'blue', codeColour: 'green'});
megalog.info("This is a `megalog.info` in red, on blue, with green code, spelt the American way.", {color: 'red', bgColor: 'blue', codeColor: 'green'});

megalog.warn("This is a `megalog.warn`.");
megalog.warn("This is a `megalog.warn` with a heading of 'Hello'.", {heading: 'Hello'});
megalog.warn("This is a `megalog.warn` in red, on blue, with green code.", {colour: 'red', bgColour: 'blue', codeColour: 'green'});
megalog.warn("This is a `megalog.warn` in red, on blue, with green code, spelt the American way.", {color: 'red', bgColor: 'blue', codeColor: 'green'});

megalog.error("This is a `megalog.error`.");
megalog.error("This is a `megalog.error` with a heading of 'Hello'.", {heading: 'Hello'});
megalog.error("This is a `megalog.error` in red, on blue, with green code.", {colour: 'red', bgColour: 'blue', codeColour: 'green'});
megalog.error("This is a `megalog.error` in red, on blue, with green code, spelt the American way.", {color: 'red', bgColor: 'blue', codeColor: 'green'});