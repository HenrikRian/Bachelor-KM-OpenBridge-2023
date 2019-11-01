# OpenbridgeAngular

Angular and SASS implementation of OpenBridge Design System.  

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
Alternativey run `npm run start-day`, this will run the example app with the day pallette only. This will also compile the sass file on-the-fly.

## Style sheets
The OpenBridge style sheets are implemented in the `scss/` directory. It can be build by running `npm run css` or with watch functionality `npm run watch-css`.
The base sass files are `openbridge-*palletname*.scss`. Note that parameters should be placed in `_variables.scss`, variables which are changing w  

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
