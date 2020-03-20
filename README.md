# Openbridge Components

SASS implementation of OpenBridge Design System.  

[Storybook](https://openbridge.gitlab.io/openbridge-angular/storybook)
[![pipeline status](https://gitlab.com/openbridge/openbridge-angular/badges/master/pipeline.svg)](https://gitlab.com/openbridge/openbridge-angular/commits/master)

## Development server

Run `npm run start` for a storybook server. The components are rendered there and automatically recompiled if the scss changes.

The pallet can be changed by changing the pallet file in `.storybook/config.js`

## Stylesheets
The OpenBridge style sheets are implemented in the `scss/` directory. It can be build by running `npm run css` or with watch functionality `npm run watch-css`.
See [scss/readme.md](scss/readme.md) for more information.

To use the compiled sheet import:
- `openbridge.css` this is the compiled version of the entire library.
- `openbridge-bright.css` this is the parameters corresponding to the `bright` pallet. Swap this file to change pallet.

# Development of OpenBridge components
When developing components:
- Use [BEM notation](http://getbem.com/introduction/)
- Remember that a component should be standalone. This means that it should work if you import the sass file from one component.
- All pallet dependent variables should be used as custom css-properties (also known as css variables.). 
    Define the variable first in `_variables.scss`. The definition should be implemented in the `variables-*.scss" files.

## Files
These are the main files in the sass project:
- `openbridge` root file, to get the main css files.
- `variables-*.scss` pallet files with pallet dependent variables.
- `_variables.scss` pallet independent variables and pallet dependent variables defined as css custom parameters
- `mixins/` folder with mixins
- `mixins/_styles.scss` mixins of styles and states.
- `components/` folder with definition of components.

# Development
The sass files are compiled to css by using `npm run css` or `npm run watch-css` to compile each time a sass file has changed.
This will also run tests to verify that all variables are used, linting (with autofix) and check of the bundlesize.

## Architecture of styles
The figure below gives an overview of a component should be build:
![Architecture of style](./doc/OpenBridgeSass.svg)
1. Place all variables in `_variables.scss`. 
    All variables which depend on pallet should first be defined as css custom properties (css-variables) in `_variables.scss`.
    Then the definition of the css custom properties should be be placed in `variables-*palletname*.scss`.
2. Make styles mixins in `mixins/_styles.scss`. The styles could be normal, raised, flat, indent, etc. Each style should also define the states (pseudo-classes) such as normal, hover, focus, active, etc.
3. Define the component, remember to use [BEM notation](http://getbem.com/introduction/), 
    e.g., `ob-button`, `ob-button--raised` and `ob-nav__icon--normal`.
