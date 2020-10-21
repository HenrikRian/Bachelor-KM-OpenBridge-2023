import {customElement, property, svg} from "lit-element";
import {ObElement} from "../obElement";
import PointerLineTrue from "../../generated-without-style/SOG_STW/PointerLineTrueLarge.svg";
import PointerLineRelative from "../../generated-without-style/SOG_STW/PointerLineRelativeLarge.svg";
import Ship from "../../generated-without-style/Ship/TopShipLarge.svg";
import ArrowRelative from "./ArrowRelativeLarge.svg";
import {watchFaceLargeRender} from "../watchface/watchface-large";
import {CurrentSpeed, InnerWatchFaceType, WindSpeed} from "../models";

import LightAir from "../../generated-without-style/Wind/LightAir.svg";
import LightBreeze from "../../generated-without-style/Wind/LightBreeze.svg";
import GentleBreeze from "../../generated-without-style/Wind/GentleBreeze.svg";
import ModerateBreeze from "../../generated-without-style/Wind/ModerateBreeze.svg";
import FreshBreeze from "../../generated-without-style/Wind/FreshBreeze.svg";
import StrongBreeze from "../../generated-without-style/Wind/StrongBreeze.svg";
import HighWind from "../../generated-without-style/Wind/HighWind.svg";
import FreshGale from "../../generated-without-style/Wind/FreshGale.svg";
import StrongGale from "../../generated-without-style/Wind/StrongGale.svg";
import Storm from "../../generated-without-style/Wind/Storm.svg";
import ViolentStorm from "../../generated-without-style/Wind/ViolentStorm.svg";

import CurrentCalm from "../../generated-without-style/Current/Calm.svg";
import CurrentGentle from "../../generated-without-style/Current/Gentle.svg";
import CurrentModerate from "../../generated-without-style/Current/Moderate.svg";
import CurrentStrong from "../../generated-without-style/Current/Strong.svg";

@customElement('ob-speedlog-large')
export class SpeedlogLarge extends ObElement {
    @property({type: Number}) speedTrue = 0;
    @property({type: Number}) courseTrue = 0;
    @property({type: Number}) speedRelative = 0;
    @property({type: Number}) courseRelative = 0;
    @property({type: Number}) heading = 0;
    @property({type: String}) windSpeed = WindSpeed.LIGHT_AIR_1;
    @property({type: Number}) windFromDirection = 0;
    @property({type: String}) currentSpeed = CurrentSpeed.CALM;
    @property({type: Number}) currentFromDirection = 0;

    render() {
        const lengthTrue = -this.speedTrue * 1.2 - 8
        const lengthRelate = -this.speedRelative * 1.2 - 8
        let windSpeed = null;
        switch (this.windSpeed) {
            case WindSpeed.CALM_0:
                windSpeed = null;
                break;
            case WindSpeed.LIGHT_AIR_1:
                windSpeed = LightAir;
                break;
            case WindSpeed.LIGHT_BREEZE_2:
                windSpeed = LightBreeze;
                break;
            case WindSpeed.GENTLE_BREEZE_3:
                windSpeed = GentleBreeze;
                break;
            case WindSpeed.MODERATE_BREEZE_4:
                windSpeed = ModerateBreeze;
                break;
            case WindSpeed.FRESH_BREEZE_5:
                windSpeed = FreshBreeze;
                break;
            case WindSpeed.STRONG_BREEZE_6:
                windSpeed = StrongBreeze;
                break;
            case WindSpeed.HIGH_WIND_7:
                windSpeed = HighWind;
                break;
            case WindSpeed.FRESH_GALE_8:
                windSpeed = FreshGale;
                break;
            case WindSpeed.STRONG_GALE_9:
                windSpeed = StrongGale;
                break;
            case WindSpeed.STORM_10:
                windSpeed = Storm;
                break;
            case WindSpeed.VIOLENT_STORM_11:
                windSpeed = ViolentStorm;
                break;
        }
        let currentSpeed = null;
        switch (this.currentSpeed) {
            case CurrentSpeed.CALM:
                currentSpeed = CurrentCalm;
                break;
            case CurrentSpeed.GENTLE:
                currentSpeed = CurrentGentle;
                break;
            case CurrentSpeed.MODERATE:
                currentSpeed = CurrentModerate;
                break;
            case CurrentSpeed.STRONG:
                currentSpeed = CurrentStrong;
                break;
        }


        return svg`
  <svg viewBox="-256 -256 512 512">
    <svg x="-256" y="-256" width="512" height="512">${watchFaceLargeRender({
            cross: true,
            startClipDeg: 0,
            endClipDeg: 0,
            showLabels: true,
            primaryTickMarks: 45,
            rotate: 0,
            secondaryTickMarks: 5,
            tertiaryTickMarks: true,
            innerCircle: InnerWatchFaceType.REGULAR,
            uuid: this.uuid
        })}</svg>
    <g transform="rotate(${this.heading})">
        <svg x="-32" y="-96">${Ship}</svg>
    </g>
${this.speedRelative > 0 ? svg`
    <g transform="rotate(${this.courseRelative})">
      <svg x="-4" y="-192" width="8" height="192">${PointerLineRelative}</svg>
      <svg x="-24" y="${lengthRelate - 48}">${ArrowRelative}</svg>
      <line x1="0" y1="0" y2="${lengthRelate}" x2="0" stroke-width="4" class="ob-instrument-dynamic-color-stroke"/>
    </g>` : null}
${this.speedTrue > 0 ? svg`
    <g transform="rotate(${this.courseTrue})">
      <svg x="-4" y="-192" width="8" height="192">${PointerLineTrue}</svg>
      <path d="M-20 ${lengthTrue} l19 -48h2 l19 48Z" class="ob-instrument-dynamic-color-fill"/>
      <line x1="0" y1="0" y2="${lengthTrue}" x2="0" stroke-width="8" class="ob-instrument-dynamic-color-stroke"/>
    </g>` : null}
    <circle r="8" class="ob-instrument-dynamic-color-fill"/>
    <g transform="rotate(${this.windFromDirection + 90})">
        <svg x="-256" y="-24" width="48" height="48" viewBox="0 0 64 64">${windSpeed}</svg>
    </g>
    <g transform="rotate(${this.currentFromDirection + 90})">
        <svg x="-256" y="-24" width="48" height="48" viewBox="0 0 64 64">${currentSpeed}</svg>
    </g>
  </svg>`
    }
}
