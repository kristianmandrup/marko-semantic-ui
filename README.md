marko-semantic-ui-taglibs [![NPM version](https://badge.fury.io/js/marko-semantic-ui-taglibs.svg)](https://npmjs.org/package/marko-semantic-ui-taglibs) [![Build Status](https://travis-ci.org/kristianmandrup/marko-semantic-ui-taglibs.svg?branch=master)](https://travis-ci.org/kristianmandrup/marko-semantic-ui-taglibs) [![Dependency Status](https://david-dm.org/kristianmandrup/marko-semantic-ui-taglibs.svg?theme=shields.io)](https://david-dm.org/kristianmandrup/marko-semantic-ui-taglibs)
=========================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================

> Marko taglibs for Semantic UI

Install
-------

```sh
$ npm install --save marko-semantic-ui-taglibs
```

Usage
-----

Have your taglib reference a `package.json` such as the one in your root project folder.

```json
    "taglib-imports": [
      "../package.json"
    ]
```

In your `package.json`, ensure `marko-semantic-ui-taglibs` is listed in `dependencies`

```json
{
    "dependencies": {
        "marko-semantic-ui-taglibs": "^0.0.1",
    }
}
```

The taglibs finder will then look up in each module in `node_modules` to see if it has a `marko-taglib.json` in the root and import it if found.

Development
-----------

Use Jade to develop templates. Then run `gulp jade:marko` to generate marko templates!

When you are happy with your changes, create index files for components by running:

`node indexes.js`

Or via npm:

`npm run index`

License
-------

MIT © [Kristian Mandrup]()
