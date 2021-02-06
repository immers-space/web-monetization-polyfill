# web-monetization-polyfill

[![npm](https://img.shields.io/npm/v/web-monetization-polyfill)](https://www.npmjs.com/package/web-monetization-polyfill)

Polyfill the [Web Monetization JavaScript API](https://webmonetization.org/docs/api)
on `document.monetization`

## Why

The [Coil browser extension](https://help.coil.com/using-coil/coil-extension)
will typically load the polyfill for you, but,
if you're serving your page with a Content Security Policy, the extension will
be unable to inject the polyfill script. 

In that case, you'll want to provide the `web-monetization-polyfill` yourself. 

## Usage

Install: `npm install web-monetization-polyfill`

Source: `require('web-monetization-polyfill')`

While you could, in theory, source this from a CDN in a script tag,
you'd have to open up your CSP to allow it, so this method is not recommended.
If you must, you'll need to add the [current hash](hash.txt) to your `script-src` directive.

## Compatibility

web-monetization-polyfill | Coil browser add-on
--- | ---
2.0.0 | 0.0.52

## Copyright

Copyright for the original source for the polyfill belongs to [Coil](https://github.com/coilhq/web-monetization-projects)
