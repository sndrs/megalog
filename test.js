var megalog = require('./megalog');

megalog.log("This is a megalog.log.");
megalog.log("This is a megalog.log `with code`.");
megalog.log("This is a megalog.log with a heading of 'Hello'.", {heading: 'Hello'});
megalog.log("This is a megalog.log in red, on blue, with `grey code`.", {colour: 'red', bgColour: 'blue', codeColour: 'grey'});
megalog.log("This is a megalog.log in red, on blue, with `grey code`, spelt the American way.", {color: 'red', bgColor: 'blue', codeColor: 'grey'});

megalog.info("This is a megalog.info.");
megalog.info("This is a megalog.info `with code`.");
megalog.info("This is a megalog.info with a heading of 'Hello'.", {heading: 'Hello'});
megalog.info("This is a megalog.info in red, on blue, with `grey code`.", {colour: 'red', bgColour: 'blue', codeColour: 'grey'});
megalog.info("This is a megalog.info in red, on blue, with `grey code`, spelt the American way.", {color: 'red', bgColor: 'blue', codeColor: 'grey'});

megalog.warn("This is a megalog.warn.");
megalog.warn("This is a megalog.warn `with code`.");
megalog.warn("This is a megalog.warn with a heading of 'Hello'.", {heading: 'Hello'});
megalog.warn("This is a megalog.warn in red, on blue, with `grey code`.", {colour: 'red', bgColour: 'blue', codeColour: 'grey'});
megalog.warn("This is a megalog.warn in red, on blue, with `grey code`, spelt the American way.", {color: 'red', bgColor: 'blue', codeColor: 'grey'});

megalog.error("This is a megalog.error.");
megalog.error("This is a megalog.error `with code`.");
megalog.error("This is a megalog.error with a heading of 'Hello'.", {heading: 'Hello'});
megalog.error("This is a megalog.error in red, on blue, with `grey code`.", {colour: 'red', bgColour: 'blue', codeColour: 'grey'});
megalog.error("This is a megalog.error in red, on blue, with `grey code`, spelt the American way.", {color: 'red', bgColor: 'blue', codeColor: 'grey'});