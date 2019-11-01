# OpenBridge Design System SASS implementation ##
T

# Development

## Test driven development
[Quixote](https://github.com/jamesshore/quixote) is used as test framework for css stylesheet. 
Its purpose is to test that the positioning and spacing is correct.
See for instance [Topbarstyle test](../projects/openbridge-components/src/lib/navigation/top-bar/top-bar.component.spec.ts) for an example.

The tests are depending on css files. These can be compiled by running `npm run watch-css`. 
The css-file is made available to karma in the [karma.conf.js-file](../projects/openbridge-components/karma.conf.js).
The test can be runned by running `ng test`.
