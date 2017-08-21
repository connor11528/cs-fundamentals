CSS Flexbox
===

- What the Flexbox by @wesbos - https://flexbox.io/

- Complete Guide to Flexbox by @CSS-Tricks - https://css-tricks.com/snippets/css/a-guide-to-flexbox/

Can display `flex` or `inline-flex`for the `display:` CSS property.

`height:100vh` gives element 100% viewport height

`flex-direction: row;` is default. It makes the main axis from left to right. Cross axis goes from top to bottom.

`flex-direction: column` stacks them. It makes the main axis from top to bottom. The cross axis becomes left to right.

The reverse flag can be added to these to make right to left (`row-reverse`) or `column-reverse` where main axis goes from bottom to top.

flex-wrap...

`calc()` in CSS can incorporate margins. So `width:33%;margin:10px` will break but `width:calc(33%-20px);margin:10px;` will take care of the 10px on each side and show 3 boxes.

`border` and `padding` is part of the box model. `margin` is not part of the box model.

Add vendor prefixes to our code to make sure that all browsers accept our code.

- Online tool: https://autoprefixer.github.io/

- autoprefixer github: https://github.com/postcss/autoprefixer

- for webpack: https://github.com/postcss/postcss-loader

