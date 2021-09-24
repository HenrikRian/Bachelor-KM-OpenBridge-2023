# OpenBridge Web Components

This is an implementation of the openbridge design system in web components.

## Demo

A storybook demo is available [here](https://openbridge.gitlab.io/openbridge-web-components/).

# How to use the components
## With npm
The project can be used directly from npm.

1.  Install the package by: `npm install openbridge-web-components`
2.  Install openbridge-css: `npm install openbridge-css`
3.  Include the package in you javascript code (vue/react/angular) `import "openbridge-web-components";`
4.  Include the openbridge css in your project `openbridge-css/dist/css/openbridge.css`
5.  Set the theme in the html tag, for instance `<html theme="day">`
6.  Use the components, e.g.,:

        `<ob-rudder-medium rudderAngle="5" rudderSetPointAngle="3" clipAngle="60" showPortStarboard="false" showSetPoint="true"/>`

## Directly in html
The components can be used directly in html (see also [demo.html](./demo.html)):

        <html lang="en" theme="day"> <!-- set theme="day for day pallett -->
        <head>
            <script src="https://unpkg.com/openbridge-web-components@0.2.1"></script> <!--import web components-->
            <link rel="stylesheet" href="https://unpkg.com/openbridge-css@0.2.1/dist/css/openbridge.css"> <!--import openbridge css-->
        </head>
        <body>
            <ob-azimuth-large target="90" value = "80" angle = "45" targetAngle="60"/>
        </body>
        </html># SVG export

There is also a tool for exporting SVG components from Figma.
To run the exporter you need to acquire an token [here](https://www.figma.com/developers/api#access-tokens).
The exporter generates SVGs. The project also includes WebComponents.

[Generated SVGs cleaned](https://gitlab.com/openbridge/openbridge-web-components/-/jobs/artifacts/master/browse/generated-without-style?job=build)
[Generated SVGs with inline style](https://gitlab.com/openbridge/openbridge-web-components/-/jobs/artifacts/master/browse/generated-with-style?job=build)

## How to contribute

We welcome all contributions! This could for instance be bug reports or implementation of components.
We accept implementation in all major frameworks, but prefer web-components and vue.js.

### Implementation guideline

1. Use basic components if possible. For instance use the WatchFace component.
2. Export SVG components by defining the component in `src/exports.ts`.
   This ensures that the component works in all palettes.
3. Center of the SVG viewbox should be (0,0).
