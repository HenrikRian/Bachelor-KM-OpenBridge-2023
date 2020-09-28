export interface ExportDef {
    name: string;
    path: string[]; // Array of subpath for targeting the svg export in Figma
    outputFolder?: string; // sub folder of ./gen
}

const staticExportComponents: ExportDef[] = [
    {
        name: 'CircleCompassArrowHdgMedium',
        path: ['HDG & COG', 'Elements', 'Circle compass arrow/ HDG - Medium'],
        outputFolder: 'HDG_COG'
    },
    {
        name: 'FlatArrowHdgMedium',
        path: ['HDG & COG', 'Elements', 'Flat compass arrow/ HDG - Medium'],
        outputFolder: 'HDG_COG'
    },
    {
        name: 'WatchFaceLarge',
        path: ['HDG & COG', 'Circular HDG', 'Large', 'Watch face'],
        outputFolder: 'HDG_COG'
    },
    {
        name: 'HeadingLarge',
        path: ['HDG & COG', 'Elements', 'Circle compass arrow/ HDG - Large'],
        outputFolder: 'HDG_COG'
    },
    {
        name: 'CogLarge',
        path: ['HDG & COG', 'Elements', 'Circle compass arrow/ COG - Large'],
        outputFolder: 'HDG_COG'
    }, {
        name: 'WatchFaceMedium',
        path: ['HDG & COG', 'Circular HDG', 'Medium', 'Medium/ Compass 45°'],
        outputFolder: 'HDG_COG'
    },
    {
        name: 'HeadingMedium',
        path: ['HDG & COG', 'Elements', 'Circle compass arrow/ HDG - Medium'],
        outputFolder: 'HDG_COG'
    }, {
        name: 'WatchFaceSmall',
        path: ['HDG & COG', 'Circular HDG', 'Small', 'Small/ Compass 45°'],
        outputFolder: 'HDG_COG'
    },
    {
        name: 'HeadingSmall',
        path: ['HDG & COG', 'Elements', 'Circle compass arrow/ HDG - Small'],
        outputFolder: 'HDG_COG'
    },
    {
        name: 'AzimuthWatchFaceMedium',
        path: ['Thrusters & Propulsion', '01 Azimuth thruster', 'Medium', 'Medium'],
        outputFolder: 'Thruster'
    },{
        name: 'CircleBorderInsideMedium',
        path: ['ROT', '01 Circle', 'Medium', 'border-inside'],
        outputFolder: 'ROT'
    },{
        name: 'CircleBorderOutsideMedium',
        path: ['ROT', '01 Circle', 'Medium', 'border-outisde'],
        outputFolder: 'ROT'
    },{
        name: 'CircleTrackMedium',
        path: ['ROT', '01 Circle', 'Medium', 'track'],
        outputFolder: 'ROT'
    },{
        name: 'CircleDotsMedium',
        path: ['ROT', '01 Circle', 'Medium', 'rot-dots'],
        outputFolder: 'ROT'
    },
    {
        name: 'FlatBarMedium',
        path: ['ROT', 'Elements', 'Bar/ Medium'],
        outputFolder: 'ROT'
    },
    {
        name: 'TicBarMedium',
        path: ['ROT', 'Elements', 'Tick bar/ Medium'],
        outputFolder: 'ROT'
    },
    {
        name: 'SpeedNeedleMedium',
        path: ['SOG & STW', 'Elements', '01 Speed Needle/ Medium'],
        outputFolder: 'SOG_STW'
    },
    {
        name: 'WatchFaceMedium',
        path: ['SOG & STW', 'Elements', '02 Watch face/ Medium'],
        outputFolder: 'SOG_STW'
    },
    {
        name: 'PointerMedium',
        path: ['Thrusters & Propulsion', 'Thruster element', 'Medium', 'EndPointer'],
        outputFolder: 'Thruster'
    },
    {
        name: 'MainEngineArrowMedium',
        path: ['Thrusters & Propulsion', '03 Main Engine', 'Medium', 'Medium', 'FrontArrow'],
        outputFolder: 'Thruster'
    },
    {
        name: 'FrontArrowMedium',
        path: ['Thrusters & Propulsion', 'Thruster element', 'Medium', 'FrontArrow'],
        outputFolder: 'Thruster'
    }, {
        name: 'ThrusterPowerInputMedium',
        path: ['Thrusters & Propulsion', 'Thruster element', 'Medium', 'PowerInput'],
        outputFolder: 'Thruster'
    }, {
        name: 'ThrusterPowerMedium',
        path: ['Thrusters & Propulsion', 'Thruster element', 'Medium', 'Power'],
        outputFolder: 'Thruster'
    }, {
        name: 'ThrusterStaticMedium',
        path: ['Thrusters & Propulsion', 'Thruster element', 'Medium', 'ThrusterElement'],
        outputFolder: 'Thruster'
    }, {
        name: 'PointerLarge',
        path: ['Thrusters & Propulsion', 'Thruster element', 'Large', 'EndPointer'],
        outputFolder: 'Thruster'
    }, {
        name: 'FrontArrowLarge',
        path: ['Thrusters & Propulsion', 'Thruster element', 'Large', 'FrontArrow'],
        outputFolder: 'Thruster'
    }, {
        name: 'ThrusterPowerInputLarge',
        path: ['Thrusters & Propulsion', 'Thruster element', 'Large', 'PowerInput'],
        outputFolder: 'Thruster'
    }, {
        name: 'ThrusterPowerLarge',
        path: ['Thrusters & Propulsion', 'Thruster element', 'Large', 'Power'],
        outputFolder: 'Thruster'
    }, {
        name: 'ThrusterStaticLarge',
        path: ['Thrusters & Propulsion', 'Thruster element', 'Large', 'ThrusterElement'],
        outputFolder: 'Thruster'
    }, {
        name: 'PrimaryTickmarks90Medium',
        path: ['Watch face', '01 Primary Tickmarks', 'Medium/ 1 per 90° - 90°'],
        outputFolder: 'WatchFace'
    },{
        name: 'PrimaryTickmarks45Medium',
        path: ['Watch face', '01 Primary Tickmarks', 'Medium/ 2 per 90 - 45°'],
        outputFolder: 'WatchFace'
    },{
        name: 'PrimaryTickmarks30Medium',
        path: ['Watch face', '01 Primary Tickmarks', 'Medium/ 3 per 90° - 30°'],
        outputFolder: 'WatchFace'
    },
    {
        name: 'SecondaryTickmarks5Medium',
        path: ['Watch face', '02 Secondary Tickmarks', 'Medium/ 18 per 90° - 5°'],
        outputFolder: 'WatchFace'
    },{
        name: 'SecondaryTickmarks9Medium',
        path: ['Watch face', '02 Secondary Tickmarks', 'Medium/ 10 per 90° - 09°'],
        outputFolder: 'WatchFace'
    },{
        name: 'SecondaryTickmarks10Medium',
        path: ['Watch face', '02 Secondary Tickmarks', 'Medium/ 09 per 90° - 10°'],
        outputFolder: 'WatchFace'
    },
    {
        name: 'InnerCircleRegularMedium',
        path: ['Watch face', '04 Inner circle', 'Medium/ 01 Regular'],
        outputFolder: 'WatchFace'
    },{
        name: 'InnerCirclePortStarboardMedium',
        path: ['Watch face', '04 Inner circle', 'Medium/ 02 PORT STBD'],
        outputFolder: 'WatchFace'
    },{
        name: 'InnerCirclePositiveNegativeMedium',
        path: ['Watch face', '04 Inner circle', 'Medium/ 03 Positive Negative'],
        outputFolder: 'WatchFace'
    },
    {
        name: 'CrossRegularMedium',
        path: ['Watch face', '05 Cross', 'Medium'],
        outputFolder: 'WatchFace'
    },
    {
        name: 'Calm',
        path: ['Wind symbols', 'Wind symbols', 'Wind medium 1'],
        outputFolder: 'Wind'
    },

    {
        name: 'LightAir',
        path: ['Wind symbols', 'Wind symbols', 'Wind medium 2'],
        outputFolder: 'Wind'
    },

    {
        name: 'LightBreeze',
        path: ['Wind symbols', 'Wind symbols', 'Wind medium 3'],
        outputFolder: 'Wind'
    },

    {
        name: 'GentleBreeze',
        path: ['Wind symbols', 'Wind symbols', 'Wind medium 4'],
        outputFolder: 'Wind'
    },

    {
        name: 'ModerateBreeze',
        path: ['Wind symbols', 'Wind symbols', 'Wind medium 5'],
        outputFolder: 'Wind'
    },

    {
        name: 'FreshBreeze',
        path: ['Wind symbols', 'Wind symbols', 'Wind medium 6'],
        outputFolder: 'Wind'
    },

    {
        name: 'StrongBreeze',
        path: ['Wind symbols', 'Wind symbols', 'Wind medium 7'],
        outputFolder: 'Wind'
    },

    {
        name: 'HighWind',
        path: ['Wind symbols', 'Wind symbols', 'Wind medium 8'],
        outputFolder: 'Wind'
    },

    {
        name: 'FreshGale',
        path: ['Wind symbols', 'Wind symbols', 'Wind medium 9'],
        outputFolder: 'Wind'
    },

    {
        name: 'StrongGale',
        path: ['Wind symbols', 'Wind symbols', 'Wind medium 10'],
        outputFolder: 'Wind'
    },

    {
        name: 'Storm',
        path: ['Wind symbols', 'Wind symbols', 'Wind medium 11'],
        outputFolder: 'Wind'
    },

    {
        name: 'ViolentStorm',
        path: ['Wind symbols', 'Wind symbols', 'Wind medium 12'],
        outputFolder: 'Wind'
    },

    {
        name: 'Hurricane',
        path: ['Wind symbols', 'Wind symbols', 'Wind medium 13'],
        outputFolder: 'Wind'
    },

    {
        name: 'Calm',
        path: ['Wind symbols', 'Current symbol', 'Current arrow 1 (large)'],
        outputFolder: 'Current'
    },
    {
        name: 'Gentle',
        path: ['Wind symbols', 'Current symbol', 'Current arrow 2 (large)'],
        outputFolder: 'Current'
    },
    {
        name: 'Moderate',
        path: ['Wind symbols', 'Current symbol', 'Current arrow 3 (large)'],
        outputFolder: 'Current'
    },
    {
        name: 'Strong',
        path: ['Wind symbols', 'Current symbol', 'Current arrow 4 (large)'],
        outputFolder: 'Current'
    }
];
const circleDegrees = ['1°', '5°', '10°', '30°', '45°', '90°'];
const circleLengths = ['8px', '16px', '24px'];
const circleTickMarks: ExportDef[] = [];

for (const degree of circleDegrees) {
    for (const length of circleLengths) {
        const def: ExportDef = {
            name: `Tick_${degree}_${length}`,
            path: ['Circle tick marks', 'Tick marks', `${degree}/ ${length}`],
            outputFolder: 'Azimuth'
        };
        circleTickMarks.push(def);
    }
}

export const exportComponents = [...staticExportComponents, ...circleTickMarks];
