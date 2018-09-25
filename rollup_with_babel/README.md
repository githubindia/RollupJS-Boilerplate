# Learn Rollup.js

This is an example project to accompany a tutorial on using [Rollup](http://rollupjs.org/).

Make .babelrc file and put this snippet into it:

```
{
    "preset": [
        [
            "es2015", {
                "modules": false
            }
        ]
    ],
    "plugins": [
        "external-helpers"
    ]
}
```