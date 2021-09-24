import { svg } from "lit-element";

export function renderBlueArch(
  radius: number,
  startDeg: number,
  endDeg: number,
  strokeWidth: number
) {
  const r = radius;
  const lowerRad = (startDeg * Math.PI) / 180;
  const xL = r * Math.sin(lowerRad);
  const yL = -r * Math.cos(lowerRad);

  const upperRad = (endDeg * Math.PI) / 180;
  const xU = r * Math.sin(upperRad);
  const yU = -r * Math.cos(upperRad);
  return svg`<path d="M ${xL} ${yL} A ${r} ${r} 0 0 1 ${xU} ${yU}" 
    stroke-width="${
      strokeWidth || 2
    }" fill="none" class="ob-instrument-dynamic-color-stroke"/>`;
}
