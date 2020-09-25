export interface ExportDef {
  name: string;
  path: string[]; // Array of subpath for targeting the svg export in Figma
  outputFolder?: string; // sub folder of ./gen
}

const staticExportComponents: ExportDef[] = [
  {
    name: 'WatchFaceLarge',
    path: ['HDG & COG', 'Circular HDG', 'Large', 'Watch face'],
    outputFolder: 'HdgCircular'
  },
  {
    name: 'HeadingLarge',
    path: ['HDG & COG', 'Elements', 'Circle compass arrow/ HDG - Large'],
    outputFolder: 'HdgCircular'
  },
  {
    name: 'CogLarge',
    path: ['HDG & COG', 'Elements', 'Circle compass arrow/ COG - Large'],
    outputFolder: 'HdgCircular'
  }, {
    name: 'WatchFaceMedium',
    path: ['HDG & COG', 'Circular HDG', 'Medium', 'Medium/ Compass 45°'],
    outputFolder: 'HdgCircular'
  },
  {
    name: 'HeadingMedium',
    path: ['HDG & COG', 'Elements', 'Circle compass arrow/ HDG - Medium'],
    outputFolder: 'HdgCircular'
  }, {
    name: 'WatchFaceSmall',
    path: ['HDG & COG', 'Circular HDG', 'Small', 'Small/ Compass 45°'],
    outputFolder: 'HdgCircular'
  },
  {
    name: 'HeadingSmall',
    path: ['HDG & COG', 'Elements', 'Circle compass arrow/ HDG - Small'],
    outputFolder: 'HdgCircular'
  },
  {
    name: 'InnerCircleRegularMedium',
    path: ['Watch face', '04 Inner circle', 'Medium/ 01 Regular'],
    outputFolder: 'WatchFace'
  },
  {
    name: 'PrimaryTickmarks45Medium',
    path: ['Watch face', '01 Primary Tickmarks', 'Medium/ 2 per 90 - 45°'],
    outputFolder: 'WatchFace'
  },
  {
    name: 'SecondaryTickmarks5Medium',
    path: ['Watch face', '02 Secondary Tickmarks', 'Medium/ 18 per 90° - 5°'],
    outputFolder: 'WatchFace'
  },
  {
    name: 'CrossRegularMedium',
    path: ['Watch face', '05 Cross', 'Medium'],
    outputFolder: 'WatchFace'
  },
  {
    name: 'CircleCompassArrowHdgMedium',
    path: ['HDG & COG', 'Elements', 'Circle compass arrow/ HDG - Medium'],
    outputFolder: 'HDG_COG'
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
      name: `Tick_${ degree }_${ length }`,
      path: ['Circle tick marks', 'Tick marks', `${ degree }/ ${ length }`],
      outputFolder: 'Azimuth'
    };
    circleTickMarks.push(def);
  }
}

export const exportComponents = [...staticExportComponents, ...circleTickMarks];
