semantic-tags [![NPM version](https://badge.fury.io/js/semantic-tags.svg)](https://npmjs.org/package/semantic-tags) [![Build Status](https://travis-ci.org/kristianmandrup/semantic-tags.svg?branch=master)](https://travis-ci.org/kristianmandrup/semantic-tags) [![Dependency Status](https://david-dm.org/kristianmandrup/semantic-tags.svg?theme=shields.io)](https://david-dm.org/kristianmandrup/semantic-tags)
=====================================================================================================================================================================================================================================================================================================================================================================================================================

> Marko taglib for Semantic UI

Install
-------

```sh
$ npm install --save semantic-tags
```

Usage
-----

Have your taglib reference a `package.json` such as the one in your root project folder.

```json
    "taglib-imports": [
      "../package.json"
    ]
```

In your `package.json`, ensure `semantic-tags` is listed in `dependencies`

```json
{
    "dependencies": {
        "semantic-tags": "^0.0.1",
    }
}
```

The taglibs finder will then look up in each module in `node_modules` to see if it has a `marko-taglib.json` in the root and import it if found.

Development
-----------

Use Jade to develop templates. Then run `gulp jade:marko` to generate marko templates!

When you are happy with your changes, create index files for components by running `node indexes.js` or simply `npm prepublish`.

Note: it should be autorun before `npm publish`

License
-------

MIT © [Kristian Mandrup]()
