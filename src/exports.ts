export interface ExportDef {
  name: string;
  path: string[]; // Array of subpath for targeting the svg export in Figma
  outputFolder?: string; // sub folder of ./gen
}

const staticExportComponents: ExportDef[] = [
  {
    name: 'ShipAbove',
    path: ['Ship above', 'Ship above', 'Ship above (large)'],
    outputFolder: 'ShipAbove',
  },

  {
    name: 'InnerCircle',
    path: ['Azimuth', 'Elements', 'Watch face/ Large', 'Inner circle'],
    outputFolder: 'Azimuth',
  },
  {
    name: 'OuterCircle',
    path: ['Azimuth', 'Elements', 'Watch face/ Large', 'Yttersirkel'],
    outputFolder: 'Azimuth',
  },

  {
    name: 'Calm',
    path: ['Wind symbols', 'Wind symbols', 'Wind medium 1'],
    outputFolder: 'Wind',
  },

  {
    name: 'LightAir',
    path: ['Wind symbols', 'Wind symbols', 'Wind medium 2'],
    outputFolder: 'Wind',
  },

  {
    name: 'LightBreeze',
    path: ['Wind symbols', 'Wind symbols', 'Wind medium 3'],
    outputFolder: 'Wind',
  },

  {
    name: 'GentleBreeze',
    path: ['Wind symbols', 'Wind symbols', 'Wind medium 4'],
    outputFolder: 'Wind',
  },

  {
    name: 'ModerateBreeze',
    path: ['Wind symbols', 'Wind symbols', 'Wind medium 5'],
    outputFolder: 'Wind',
  },

  {
    name: 'FreshBreeze',
    path: ['Wind symbols', 'Wind symbols', 'Wind medium 6'],
    outputFolder: 'Wind',
  },

  {
    name: 'StrongBreeze',
    path: ['Wind symbols', 'Wind symbols', 'Wind medium 7'],
    outputFolder: 'Wind',
  },

  {
    name: 'HighWind',
    path: ['Wind symbols', 'Wind symbols', 'Wind medium 8'],
    outputFolder: 'Wind',
  },

  {
    name: 'FreshGale',
    path: ['Wind symbols', 'Wind symbols', 'Wind medium 9'],
    outputFolder: 'Wind',
  },

  {
    name: 'StrongGale',
    path: ['Wind symbols', 'Wind symbols', 'Wind medium 10'],
    outputFolder: 'Wind',
  },

  {
    name: 'Storm',
    path: ['Wind symbols', 'Wind symbols', 'Wind medium 11'],
    outputFolder: 'Wind',
  },

  {
    name: 'ViolentStorm',
    path: ['Wind symbols', 'Wind symbols', 'Wind medium 12'],
    outputFolder: 'Wind',
  },

  {
    name: 'Hurricane',
    path: ['Wind symbols', 'Wind symbols', 'Wind medium 13'],
    outputFolder: 'Wind',
  },

  {
    name: 'Calm',
    path: ['Wind symbols', 'Current symbol', 'Current arrow 1 (large)'],
    outputFolder: 'Current',
  },
  {
    name: 'Gentle',
    path: ['Wind symbols', 'Current symbol', 'Current arrow 2 (large)'],
    outputFolder: 'Current',
  },
  {
    name: 'Moderate',
    path: ['Wind symbols', 'Current symbol', 'Current arrow 3 (large)'],
    outputFolder: 'Current',
  },
  {
    name: 'Strong',
    path: ['Wind symbols', 'Current symbol', 'Current arrow 4 (large)'],
    outputFolder: 'Current',
  },
];
const circleDegrees = ['1°', '5°', '10°', '30°', '45°', '90°'];
const circleLengths = ['8px', '16px', '24px'];
const circleTickMarks: ExportDef[] = [];

for (const degree of circleDegrees) {
  for (const length of circleLengths) {
    const def: ExportDef = {
      name: `Tick_${degree}_${length}`,
      path: ['Circle tick marks', 'Tick marks', `${degree}/ ${length}`],
      outputFolder: 'Azimuth',
    };
    circleTickMarks.push(def);
  }
}

export const exportComponents = [...staticExportComponents, ...circleTickMarks];
