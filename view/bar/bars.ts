import { svg } from "lit-element";
import BarMediumSvg from "../../generated-without-style/BARS/BarVertical100BarMedium.svg";
import BarLargeSvg from "../../generated-without-style/BARS/BarVertical100BarLarge.svg";

export function renderVerticalActiveBarSmall(
  value0: number,
  value1: number,
  cfg: { valueMin: number; valueMax: number; yMin: number; yMax: number }
) {
  function value2y(value: number): number {
    return (
      ((value - cfg.valueMin) / (cfg.valueMax - cfg.valueMin)) *
        (cfg.yMax - cfg.yMin) +
      cfg.yMin
    );
  }

  const y0 = value2y(value0);
  const y1 = value2y(value1);
  return svg`
    <rect id="Active bar" y="${Math.min(y0, y1)}" height="${Math.abs(
    y0 - y1
  )}" x="-4" width="8" height="20" 
        class="ob-instrument-dynamic-color-fill"/>`;
}

export function renderVerticalActiveBarMedium(
  value0: number,
  value1: number,
  cfg: {
    valueMin: number;
    valueMax: number;
    yMin: number;
    yMax: number;
    showBar0: boolean;
    showBar1: boolean;
  }
) {
  function value2y(value: number): number {
    return (
      ((value - cfg.valueMin) / (cfg.valueMax - cfg.valueMin)) *
        (cfg.yMax - cfg.yMin) +
      cfg.yMin
    );
  }

  const y0 = value2y(value0);
  const y1 = value2y(value1);
  return svg`
        <rect id="Active bar" x="-4" y="${Math.min(
          y0,
          y1
        )}" width="8" height="${Math.abs(y0 - y1)}" 
            class="ob-instrument-dynamic-color-fill"/>
        ${
          cfg.showBar1
            ? svg`<path d="M-7, ${y1} h 14" id="BaseLine" stroke-width="1"
                                    class="ob-instrument-dynamic-color-stroke"/>`
            : null
        }
        ${
          cfg.showBar0
            ? svg`<path d="M-7, ${y0} h 14" id="BaseLine" stroke-width="1"
                                    class="ob-instrument-dynamic-color-stroke"/>`
            : null
        }`;
}

export function renderVerticalActiveBarLarge(
  value0: number,
  value1: number,
  cfg: {
    valueMin: number;
    valueMax: number;
    yMin: number;
    yMax: number;
    showBar0: boolean;
    showBar1: boolean;
  }
) {
  function value2y(value: number): number {
    return (
      ((value - cfg.valueMin) / (cfg.valueMax - cfg.valueMin)) *
        (cfg.yMax - cfg.yMin) +
      cfg.yMin
    );
  }

  const y0 = value2y(value0);
  const y1 = value2y(value1);
  return svg`
        <rect id="Active bar" x="-8" y="${Math.min(
          y0,
          y1
        )}" width="16" height="${Math.abs(y0 - y1)}" 
            class="ob-instrument-dynamic-color-fill"/>
        ${
          cfg.showBar1
            ? svg`<path d="M-15, ${y1} h 30" id="BaseLine" stroke-width="2"
                                    class="ob-instrument-dynamic-color-stroke"/>`
            : null
        }
        ${
          cfg.showBar0
            ? svg`<path d="M-15, ${y0} h 30" id="BaseLine" stroke-width="2"
                                    class="ob-instrument-dynamic-color-stroke"/>`
            : null
        }`;
}

export function renderHorizontalActiveBarLarge(
  value0: number,
  value1: number,
  cfg: {
    valueMin: number;
    valueMax: number;
    xMin: number;
    xMax: number;
    showBar0: boolean;
    showBar1: boolean;
  }
) {
  function value2y(value: number): number {
    return (
      ((value - cfg.valueMin) / (cfg.valueMax - cfg.valueMin)) *
        (cfg.xMax - cfg.xMin) +
      cfg.xMin
    );
  }

  const y0 = value2y(value0);
  const y1 = value2y(value1);
  return svg`
        <rect id="Active bar" y="-8" x="${Math.min(
          y0,
          y1
        )}" height="16" width="${Math.abs(y0 - y1)}" 
            class="ob-instrument-dynamic-color-fill"/>
        ${
          cfg.showBar1
            ? svg`<path d="M${y1}, -15 v 30" id="BaseLine" stroke-width="2"
                                    class="ob-instrument-dynamic-color-stroke"/>`
            : null
        }
        ${
          cfg.showBar0
            ? svg`<path d="M${y0}, -15 v 30" id="BaseLine" stroke-width="2"
                                    class="ob-instrument-dynamic-color-stroke"/>`
            : null
        }`;
}

export function renderVerticalBarLarge(value: number, range: number) {
  const yrange = 221;
  return svg`
        <svg x="-24" y="-222" style="overflow: visible">${BarLargeSvg}</svg>
        ${renderVerticalActiveBarLarge(0, value, {
          yMin: yrange,
          yMax: -yrange,
          valueMin: -range,
          valueMax: range,
          showBar0: false,
          showBar1: true,
        })}`;
}

export function renderVerticalBarMedium(value: number, range: number) {
  const yrange = 104;
  return svg`
        <svg x="-16" y="-104.5" style="overflow: visible">${BarMediumSvg}</svg>
        ${renderVerticalActiveBarMedium(0, value, {
          yMin: yrange,
          yMax: -yrange,
          valueMin: -range,
          valueMax: range,
          showBar0: false,
          showBar1: true,
        })}`;
}
