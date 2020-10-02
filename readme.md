# Openbridge-exporter #
This is a tool to export SVG components from Figma. 
To run the exporter you need to acquire an token [here](https://www.figma.com/developers/api#access-tokens).
The exporter generates SVGs and vue components.

## Exports ##
A storybook demo is available [here](https://openbridge.gitlab.io/openbridge-exporter/).

[Generated SVGs cleaned](https://gitlab.com/openbridge/openbridge-exporter/-/jobs/artifacts/master/browse/generated-without-style?job=build)
[Generated SVGs with inline style](https://gitlab.com/openbridge/openbridge-exporter/-/jobs/artifacts/master/browse/generated-with-style?job=build)

[Generated vue.js components](https://gitlab.com/openbridge/openbridge-exporter/-/jobs/artifacts/master/browse/gen-vue?job=build)

## How to contribute ##
We welcome all contributions! This could for instance be bug reports or implementation of components.
We accept implementation in all major frameworks, but prefer web-components and vue.js.

### Implementation guideline ###
1. Use basic components if possible. For instance use the WatchFace component.
2. Export SVG components by defining the component in `src/exports.ts`. 
    This ensures that the component works in all palettes.
3. Center of the SVG viewbox should be (0,0).