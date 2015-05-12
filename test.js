var megalog = require('./megalog');

megalog.log("Lorem ipsum dolor sit amet, `consectetur adipisicing` elit. Non totam asperiores.");
megalog.log("Lorem ipsum dolor sit amet, `consectetur adipisicing` elit. Non totam asperiores.", {heading: 'hello'});
megalog.log("Lorem ipsum dolor sit amet, `consectetur adipisicing` elit. Non totam asperiores.", {colour: 'yellow', bgColour: 'green', codeColour: 'grey'});

megalog.info("Lorem ipsum dolor sit amet, `consectetur adipisicing` elit. Non totam asperiores.");
megalog.info("Lorem ipsum dolor sit amet, `consectetur adipisicing` elit. Non totam asperiores.", {heading: 'hello'});
megalog.info("Lorem ipsum dolor sit amet, `consectetur adipisicing` elit. Non totam asperiores.", {colour: 'yellow', bgColour: 'green', codeColour: 'grey'});

megalog.warn("Lorem ipsum dolor sit amet, `consectetur adipisicing` elit. Non totam asperiores.");
megalog.warn("Lorem ipsum dolor sit amet, `consectetur adipisicing` elit. Non totam asperiores.", {heading: 'hello'});
megalog.warn("Lorem ipsum dolor sit amet, `consectetur adipisicing` elit. Non totam asperiores.", {colour: 'yellow', bgColour: 'green', codeColour: 'grey'});

megalog.error("Lorem ipsum dolor sit amet, `consectetur adipisicing` elit. Non totam asperiores.");
megalog.error("Lorem ipsum dolor sit amet, `consectetur adipisicing` elit. Non totam asperiores.", {heading: 'hello'});
megalog.error("Lorem ipsum dolor sit amet, `consectetur adipisicing` elit. Non totam asperiores.", {colour: 'yellow', bgColour: 'green', codeColour: 'grey'});