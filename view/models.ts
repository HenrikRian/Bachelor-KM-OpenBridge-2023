export enum InnerWatchFaceType {
    REGULAR = "REGULAR",
    PORT_STARBOARD = "PORT_STARBOARD",
    POSITIVE_NEGATIVE = "POSITIVE_NEGATIVE"
}

export type  InnerWatchFaceTypeString = keyof typeof InnerWatchFaceType;

export enum WidthSize {
    MIN = "MIN",
    REGULAR = "REGULAR",
    MAX = "MAX"
}

export type WidthSizeStrings = keyof typeof WidthSize;


export enum WindSpeed {
    CALM_0 = "Calm",
    LIGHT_AIR_1 = "LightAir",
    LIGHT_BREEZE_2 = "LightBreeze",
    GENTLE_BREEZE_3 = "GentleBreeze",
    MODERATE_BREEZE_4 = "ModerateBreeze",
    FRESH_BREEZE_5 = "FreshBreeze",
    STRONG_BREEZE_6 = "StrongBreeze",
    HIGH_WIND_7 = "HighWind",
    FRESH_GALE_8 = "FreshGale",
    STRONG_GALE_9 = "StrongGale",
    STORM_10 = "Storm",
    VIOLENT_STORM_11 = "ViolentStorm",
}

export type WindSpeedStrings = keyof typeof WindSpeed;

export enum CurrentSpeed {
    CALM = "Calm",
    GENTLE = "Gentle",
    MODERATE = "Moderate",
    STRONG = "Strong",
}

export type CurrentSpeedStrings = keyof typeof CurrentSpeed;
