# OpenbridgeAngular

Angular and SASS implementation of OpenBridge Design System.  

## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
However, when scss files are updated this will happen:
1. Angular will detect that a file has changed and rebuild the project, this will also reload the web page.
2. The css-watch will detect that the scss files have changed and rebuild the css files, this is the copied to the angular app.
3. The angular app will see that the css file have changed and the project is rebuild and the page is reloaded. The css will then be up to date.

Alternatively run `npm run start-day`, this will run the example app with the day palette only. 
This is useful when developing the style sheet as the sass file are used directly and the therefore a change in css is seen momentarily.

## Projects in the project
This project consist of three main parts:
1. The Angular library: `Openbridge Components` found in `projects/openbridge-components`. 
    This is an Angular library of OpenBridge compliant components. These are based on the [Angular Material library](https://material.angular.io/).
2. An Angular demo app: found in `projects/openbridge-demo`
    This is an Angular app which uses the `Openbridge Components library`.
    It is used for demonstration purposes, but is also useful when implementing new components in the OpenBridge Component library
3. Sass style sheets: found in `scss`.
    This is a stylesheet project written using [SASS](https://sass-lang.com/). This project can be compiled to css-files.

## Stylesheets
The OpenBridge style sheets are implemented in the `scss/` directory. It can be build by running `npm run css` or with watch functionality `npm run watch-css`.
See [scss/readme.md](scss/readme.md) for more information.

## Storybook
[storybook.js](https://storybook.js.org/) is used to demonstrate the library components. 
It is based on `*.spec.ts` files which describes how the component can be used.
Use `npm run storybook` to start the storybook web interface.

# Development of OpenBridge components
The Angular OpenBridge components are based on [Angular Material library](https://material.angular.io/).
To implement a component:
1. Start by finding a similar component in [Angular Material library](https://material.angular.io/components/categories).
2. Find the [source code](https://github.com/angular/components/tree/master/src/material) of the component.
3. Copy the source code files into `projects/openbridge-components/scs/lib/*component category*/*component name*`. Include the copyright header and test files (`*.spec.ts`)
4. Remove unnecessary code, but keep the copyright header. Make sure that the tests are still running. For instance remove `aria` and `role`. 
5. Stylesheets should be implemented in the `scss/` project not in the components.

# Development of Openbridge Components from Westcon repo
Westcon made an Angular implementation very early. It follows another structure. It can be used as basis for development of new components.
1. Copy code from the Westcon repo.
2. 

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
