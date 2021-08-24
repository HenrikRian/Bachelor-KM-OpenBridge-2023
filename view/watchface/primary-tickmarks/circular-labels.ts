import { svg } from "lit-element";

const DIRECTION_MAPPING: Record<number, string> = {
  0: "N",
  45: "NE",
  90: "E",
  135: "SE",
  180: "S",
  225: "SW",
  270: "W",
  315: "NW",
};

export interface CircularLabelOptions {
  show: boolean;
  rotate?: number;
  nsew?: boolean;
  bold?: boolean;
  intervalDeg?: number;
  custom?: { angle: number; text: string; bold: boolean; cssClass?: string }[];
}

export function circularLabels(
  option: CircularLabelOptions,
  svgOptions: {
    scaleRatio?: number;
    labelRadius: number;
    x0: number;
    y0: number;
    startDeg?: number;
    endDeg?: number;
  }
) {
  if (!option.show) {
    return;
  }

  let labels = [];
  if (option.custom) {
    labels = option.custom;
  } else if (option.intervalDeg === undefined || option.intervalDeg <= 0) {
    throw Error(
      "Either intervalDeg must be non-zero or custom label must be set"
    );
  } else {
    let first = svgOptions.startDeg ?? 0;
    if (first % option.intervalDeg !== 0) {
      first -= first % option.intervalDeg;
      first += option.intervalDeg;
    }
    let last = svgOptions.endDeg ?? 360;
    if (last < first) {
      last += 360;
    } else if (last == first) {
      last = 359.99;
    }
    for (let angle = first; angle <= last; angle += option.intervalDeg) {
      let text = String(angle).padStart(3, "0");
      if (option.nsew && angle % 45 === 0) text = DIRECTION_MAPPING[angle];
      labels.push({
        angle: angle,
        text: text,
        bold: option.bold && angle % 90 === 0,
      });
    }
  }

  return labels.map((l) => {
    const rad = (l.angle / 180) * Math.PI;
    const x = svgOptions.x0 + svgOptions.labelRadius * Math.sin(rad);
    const y = svgOptions.y0 - svgOptions.labelRadius * Math.cos(rad);
    const cssClass = l.bold ? "ob-font-ui-body-active" : "ob-font-ui-body";
    const rotate = `rotate(${-(option.rotate ?? 0)} ${x} ${y})`;
    return svg`
          <g  transform="${rotate}">
            <text  x="${x}" y="${y}" style="font-size: ${
      16 / (svgOptions.scaleRatio ?? 1)
    }px" class="${cssClass} ob-center-label">${l.text}</text>
          </g>`;
  });
}
