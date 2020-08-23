import * as fs from "fs";
import {DOMParser} from "xmldom";

export interface SubComponentDefinition {
    file: string,
    controlRotatePropName: null | string,
    width?: number
    height?: number
}

export interface ComponentDefinition {
    name: string
    components: SubComponentDefinition[]
}

interface AutoGenParts {
    template: string
    props: string[]
    computed?: string
}

export async function convert2vue(definition: ComponentDefinition) {
    for (const sub of definition.components) {
        const svgString = await fs.readFileSync(`gen/${sub.file}.svg`, 'utf-8');
        const svgDoc = new DOMParser().parseFromString(svgString, 'text/svg')
        const svg = svgDoc.firstChild as Element;
        const widthS = svg.getAttribute("width");
        if (widthS !== null) {
            sub.width = parseFloat(widthS);
        }
        const height = svg.getAttribute("height");
        if (height !== null) {
            sub.height = parseFloat(height);
        }
    }
    const maxHeight = Math.max(...(definition.components.map(value => value.height) as number[]))
    const maxWidth = Math.max(...(definition.components.map(value => value.width) as number[]))

    const parts: AutoGenParts[] = []
    for (const sub of definition.components) {
        if (sub.width === undefined || sub.height === undefined) continue
        const x = maxWidth / 2 - sub.width / 2;
        const y = maxHeight / 2 - sub.height / 2;
        let extraGArgs = ""
        let computed: string | undefined = undefined;
        const props = [];
        if (sub.controlRotatePropName) {
            const rotateFunctionName = `rotate${sub.file}`
            const prop = sub.controlRotatePropName
            props.push(prop)
            extraGArgs = `:transform="${rotateFunctionName}"`
            computed = `${rotateFunctionName}: function () { return \`rotate(\${this.${prop}} ${maxWidth / 2} ${maxHeight / 2})\`}`
        }
        let svg = await fs.readFileSync(`gen/${sub.file}.svg`, 'utf-8');
        svg = [svg.slice(0, 5), `x="${x}" y="${y}" `, svg.slice(5)].join('');
        parts.push({
            template: `<g ${extraGArgs}>${svg}</g>`,
            props: props,
            computed: computed
        })
    }


    const template = `<template>
    <svg style="height: 100%"  viewBox="0 0 ${maxWidth} ${maxHeight}">
        ${parts.map(p => p.template).join("\n")}
    </svg>
</template>`

    let props = ""
    for (const p of parts) {
        if (p.props.length === 0) continue;
        props += "'" + p.props.join("','") + "'"
    }

    const script = `<script>

export default {
        name: '${definition.name}',
        props: [${props}],
        computed: {${parts.map(v => v.computed).filter(v => v !== undefined).join(",\n")}}
        }
</script>`
    const res = `${template}\n\n${script}`
    fs.writeFileSync(`gen-vue/${definition.name}.vue`, res)

}
