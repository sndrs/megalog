import chalk from 'chalk';
import { megalog } from '../src/megalog.js';

megalog('default text on default background');
megalog(
	'long text sunt sint velit reprehenderit ex ullamco anim amet fugiat id exercitation cillum dolore quis officia nostrud consequat laboris occaecat do',
);
megalog('text color on default background', { color: 'blue' });
megalog('text color on background color', {
	color: 'red',
	bgColor: 'yellow',
});
megalog(chalk.green('pre-coloured (green) text on default background'));

megalog('default text with heading and `code` snippet', {
	heading: 'heading text',
});
megalog('default text with very long heading', {
	heading:
		'sunt sint velit reprehenderit ex ullamco anim amet fugiat id exercitation cillum dolore quis officia nostrud consequat laboris occaecat do',
});

megalog.info('info text with default heading and `code` snippet');
megalog.info('info text with custom heading and `code` snippet', {
	heading: 'custom heading',
});
megalog.warn('warn text with default heading and `code` snippet');
megalog.warn('warn text with custom heading and `code` snippet', {
	heading: 'custom heading',
});
megalog.error('error text with default heading and `code` snippet');
megalog.error('error text with custom heading and `code` snippet', {
	heading: 'custom heading',
});
megalog.success('success text with default heading and `code` snippet');
megalog.success('success text with custom heading and `code` snippet', {
	heading: 'custom heading',
});

megalog(
	`
__bold__ **bold**
_italic_ *italic*
___bold italic___ ***bold italic***
~~strike~~
\`code snippet\`
line-
  break
[link](https://domain.com)
# h1
## h2
### h3
#### h4
##### h5
###### h6
####### h7 (this doesn't exist)

\`\`\`
const codeExample = "code snippet let's make this longer";
codeExample.map(char =>
    char.toUpperCase()
);
\`\`\`

> This is a blockquote.
>
> Adipiscing occaecat proident ea dolore enim sed.

<p>html is ignored</p>

---

- list item
- list item with a lot of text that should be wrapped
- [x] checked list item
- [ ] unchecked list item

Paragraph text has space after it.

| Table    |  Example                                            |  Here     |
|----------|:---------------------------------------------------:|----------:|
| col 1 is |  left-aligned with a lot of characters in this cell | alignment |
| col 2 is |                       centered                      | is        |
| col 3 is |                                       right-aligned | ignored   |
`,
	{ heading: 'complex markdown example' },
);
