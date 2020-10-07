import {svg} from "lit-element";
import BarMediumSvg from "../../generated-without-style/BARS/BarVertical100BarMedium.svg";
import BarLargeSvg from "../../generated-without-style/BARS/BarVertical100BarLarge.svg";


export function renderVerticalActiveBarSmall(value0: number, value1: number,
                                             cfg: { valueMin: number, valueMax: number, yMin: number, yMax: number }) {

    function value2y(value: number): number {
        return (value - cfg.valueMin) / (cfg.valueMax - cfg.valueMin) * (cfg.yMax - cfg.yMin) + cfg.yMin
    }

    const y0 = value2y(value0);
    const y1 = value2y(value1);
    return svg`
    <rect id="Active bar" y="${Math.min(y0, y1)}" height="${Math.abs(y0 - y1)}" x="-4" width="8" height="20" 
        class="ob-instrument-dynamic-color-fill"/>`;
}

export function renderVerticalActiveBarMedium(value0: number, value1: number,
                                              cfg: { valueMin: number, valueMax: number, yMin: number, yMax: number, showBar0: boolean, showBar1: boolean }) {
    function value2y(value: number): number {
        return (value - cfg.valueMin) / (cfg.valueMax - cfg.valueMin) * (cfg.yMax - cfg.yMin) + cfg.yMin
    }

    const y0 = value2y(value0);
    const y1 = value2y(value1);
    return svg`
        <rect id="Active bar" x="-4" y="${Math.min(y0, y1)}" width="8" height="${Math.abs(y0 - y1)}" 
            class="ob-instrument-dynamic-color-fill"/>
        ${cfg.showBar1 ? svg`<rect id="BaseLine" x="-7" y="${y1 - .5}" width="14" height="1" 
                                    class="ob-instrument-dynamic-color-fill"/>` : null}
        ${cfg.showBar0 ? svg`<rect id="BaseLine" x="-7" y="${y0 - .5}" width="14" height="1" 
                                    class="ob-instrument-dynamic-color-fill"/>` : null}`;
}

export function renderVerticalActiveBarLarge(value0: number, value1: number,
                                             cfg: { valueMin: number, valueMax: number, yMin: number, yMax: number,
                                                 showBar0: boolean, showBar1: boolean }) {
    function value2y(value: number): number {
        return (value - cfg.valueMin) / (cfg.valueMax - cfg.valueMin) * (cfg.yMax - cfg.yMin) + cfg.yMin
    }

    const y0 = value2y(value0);
    const y1 = value2y(value1);
    return svg`
        <rect id="Active bar" x="-8" y="${Math.min(y0, y1)}" width="16" height="${Math.abs(y0 - y1)}" 
            class="ob-instrument-dynamic-color-fill"/>
        ${cfg.showBar1 ? svg`<rect id="BaseLine" x="-15" y="${y1 - 1}" width="30" height="2" 
                                    class="ob-instrument-dynamic-color-fill"/>` : null}
        ${cfg.showBar0 ? svg`<rect id="BaseLine" x="-15" y="${y0 - 1}" width="30" height="2" 
                                    class="ob-instrument-dynamic-color-fill"/>` : null}`;
}

export function renderVerticalBarLarge(value: number) {
    const yrange = 221
        return svg`
        <svg x="-24" y="-222" style="overflow: visible">${BarLargeSvg}</svg>
        ${renderVerticalActiveBarLarge(0, value, 
            {yMin: yrange, yMax:-yrange, valueMin: -100, valueMax: 100, showBar0: false, showBar1: true})}`;
}

export function renderVerticalBarMedium(value: number) {
    const yrange = 104
    return svg`
        <svg x="-16" y="-104.5" style="overflow: visible">${BarMediumSvg}</svg>
        ${renderVerticalActiveBarMedium(0, value,
        {yMin: yrange, yMax: -yrange, valueMin: -100, valueMax: 100, showBar0: false, showBar1: true})}`;
}
