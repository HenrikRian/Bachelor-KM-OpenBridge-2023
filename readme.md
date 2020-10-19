# Openbridge-exporter #
This is a tool to export SVG components from Figma. 
To run the exporter you need to acquire an token [here](https://www.figma.com/developers/api#access-tokens).
The exporter generates SVGs. The project also includes WebComponents.

## Exports ##
A storybook demo is available [here](https://openbridge.gitlab.io/openbridge-exporter/).

[Generated SVGs cleaned](https://gitlab.com/openbridge/openbridge-exporter/-/jobs/artifacts/master/browse/generated-without-style?job=build)
[Generated SVGs with inline style](https://gitlab.com/openbridge/openbridge-exporter/-/jobs/artifacts/master/browse/generated-with-style?job=build)

# How to use the components.
The project can be used directly from npm.
1. Install the package by: `npm install openbridge-exporter`
2. Install openbridge-css: `npm install git+https://gitlab.com/openbridge/openbridge-components.git`
3. Include the package in you javascript code (vue/react/angular) `import "openbridge-exporter";`
4. Include the openbridge css in your project `openbridge-components/dist/css/openbridge.css`
5. Set the theme in the html tag, for instance `<html theme="day">`
6. Use the components, e.g.,:

        `<ob-rudder-medium rudderAngle="5" rudderSetPointAngle="3" clipAngle="60" showPortStarboard="false" showSetPoint="true"/>`


## How to contribute ##
We welcome all contributions! This could for instance be bug reports or implementation of components.
We accept implementation in all major frameworks, but prefer web-components and vue.js.


### Implementation guideline ###
1. Use basic components if possible. For instance use the WatchFace component.
2. Export SVG components by defining the component in `src/exports.ts`. 
    This ensures that the component works in all palettes.
3. Center of the SVG viewbox should be (0,0).