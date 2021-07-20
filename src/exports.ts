export interface ExportDef {
    name: string;
    path: string[]; // Array of subpath for targeting the svg export in Figma
    outputFolder?: string; // sub folder of ./gen
}

const staticExportComponents: ExportDef[] = [
    {
        name: 'FlatArrowHdgSmall',
        path: ['M1 Navigation components', 'Heading Flat S', 'Setpoint=False', 'hdg'],
        outputFolder: 'HDG_COG'
    },
    {
        name: 'FlatArrowHdgMedium',
        path: ['M1 Navigation components', 'Heading Flat M', 'Setpoint=False', 'hdg'],
        outputFolder: 'HDG_COG'
    },
    {
        name: 'FlatArrowHdgLarge',
        path: ['M1 Navigation components', 'Heading Flat L', 'Setpoint=False', 'hdg'],
        outputFolder: 'HDG_COG'
    },
    {
        name: 'FlatArrowCogSmall',
        path: ['M1 Navigation components', 'Heading Flat S', 'Setpoint=False', 'cog'],
        outputFolder: 'HDG_COG'
    },
    {
        name: 'FlatArrowCogMedium',
        path: ['M1 Navigation components', 'Heading Flat M', 'Setpoint=False', 'cog'],
        outputFolder: 'HDG_COG'
    },
    {
        name: 'FlatArrowCogLarge',
        path: ['M1 Navigation components', 'Heading Flat L', 'Setpoint=False', 'cog'],
        outputFolder: 'HDG_COG'
    },
    // {
    //     name: 'BarMeterBlackSmall',
    //     path: ['M1 Navigation components', 'ROT S Flat', 'Labels=True, PORT STBD=False', 'Component', 'Bar meter - Horizontal'],
    //     outputFolder: 'ROT'
    // },
    {
        name: 'BarMeterBlackMedium',
        path: ['M1 Navigation components', 'ROT M Flat', 'Labels=True, PORT STBD=False', 'Component', 'Bar meter - Horizontal'],
        outputFolder: 'ROT'
    }, {
        name: 'BarMeterBlackLarge',
        path: ['M1 Navigation components', 'ROT L Flat', 'Labels=True, PORT STBD=False', 'Component', 'Bar meter - Horizontal'],
        outputFolder: 'ROT'
    },
    // {
    //     name: 'BarMeterPSSmall',
    //     path: ['M1 Navigation components', 'ROT S Flat', 'Labels=True, PORT STBD=True', 'Component', 'Bar meter - Horizontal'],
    //     outputFolder: 'ROT'
    // },
    {
        name: 'BarMeterPSMedium',
        path: ['M1 Navigation components', 'ROT M Flat', 'Labels=True, PORT STBD=True', 'Component', 'Bar meter - Horizontal'],
        outputFolder: 'ROT'
    }, {
        name: 'BarMeterPSLarge',
        path: ['M1 Navigation components', 'ROT L Flat', 'Labels=True, PORT STBD=True', 'Component', 'Bar meter - Horizontal'],
        outputFolder: 'ROT'
    },
    {
        name: 'BarMeterNoLabelMedium',
        path: ['M1 Navigation components', 'ROT M Flat', 'Labels=False, PORT STBD=True', 'Component', 'Bar meter - Horizontal'],
        outputFolder: 'ROT'
    }, {
        name: 'BarMeterNoLabelLarge',
        path: ['M1 Navigation components', 'ROT L Flat', 'Labels=False, PORT STBD=True', 'Component', 'Bar meter - Horizontal'],
        outputFolder: 'ROT'
    },
    {
        name: 'CircleBorderInsideSmall',
        path: ['M1 Navigation components', 'ROT Circle S', 'Type=Dots, PORT STBD=False', 'Rot medium', 'border-inside'],
        outputFolder: 'ROT'
    }, {
        name: 'CircleBorderOutsideSmall',
        path: ['M1 Navigation components', 'ROT Circle S', 'Type=Dots, PORT STBD=False', 'Rot medium', 'border-outisde'],
        outputFolder: 'ROT'
    }, {
        name: 'CircleTrackSmall',
        path: ['M1 Navigation components', 'ROT Circle S', 'Type=Dots, PORT STBD=False', 'Rot medium', 'track (Stroke)'],
        outputFolder: 'ROT'
    }, {
        name: 'CircleDotsSmall',
        path: ['M1 Navigation components', 'ROT Circle S', 'Type=Dots, PORT STBD=False', 'Rot medium', 'rot-dots'],
        outputFolder: 'ROT'
    },
    {
        name: 'CircleBorderInsideMedium',
        path: ['M1 Navigation components', 'ROT Circle M', 'Type=Dots, PORT STBD=False', 'border-inside'],
        outputFolder: 'ROT'
    }, {
        name: 'CircleBorderOutsideMedium',
        path: ['M1 Navigation components', 'ROT Circle M', 'Type=Dots, PORT STBD=False', 'border-outisde'],
        outputFolder: 'ROT'
    }, {
        name: 'CircleTrackMedium',
        path: ['M1 Navigation components', 'ROT Circle M', 'Type=Dots, PORT STBD=False', 'track (Stroke)'],
        outputFolder: 'ROT'
    }, {
        name: 'CircleDotsMedium',
        path: ['M1 Navigation components', 'ROT Circle M', 'Type=Dots, PORT STBD=False', 'rot-dots'],
        outputFolder: 'ROT'
    },
    {
        name: 'CircleBorderInsideLarge',
        path: ['M1 Navigation components', 'ROT Circle L', 'Type=Dots, PORT STBD=False', 'border-inside'],
        outputFolder: 'ROT'
    }, {
        name: 'CircleBorderOutsideLarge',
        path: ['M1 Navigation components', 'ROT Circle L', 'Type=Dots, PORT STBD=False', 'border-outside'],
        outputFolder: 'ROT'
    }, {
        name: 'CircleTrackLarge',
        path: ['M1 Navigation components', 'ROT Circle L', 'Type=Dots, PORT STBD=False', 'track (Stroke)'],
        outputFolder: 'ROT'
    }, {
        name: 'CircleDotsLarge',
        path: ['M1 Navigation components', 'ROT Circle L', 'Type=Dots, PORT STBD=False', 'rot-dots'],
        outputFolder: 'ROT'
    },
    {
        name: 'AngleSmall',
        path: ['M3 Elements', 'Elements', 'Setpoint', 'Size=Small, Type=Circular'],
        outputFolder: 'SetPoint'
    },
    {
        name: 'AngleMedium',
        path: ['M3 Elements', 'Elements', 'Setpoint', 'Size=Medium, Type=Circular'],
        outputFolder: 'SetPoint'
    },
    {
        name: 'AngleLarge',
        path: ['M3 Elements', 'Elements', 'Setpoint', 'Size=Large, Type=Circular'],
        outputFolder: 'SetPoint'
    },
    {
        name: 'RudderSmall',
        path: ['M3 Elements', 'Elements', 'Rudder', 'Size=Small'],
        outputFolder: 'Rudder'
    },
    {
        name: 'RudderMedium',
        path: ['M3 Elements', 'Elements', 'Rudder', 'Size=Medium'],
        outputFolder: 'Rudder'
    },
    {
        name: 'RudderLarge',
        path: ['M3 Elements', 'Elements', 'Rudder', 'Size=Large'],
        outputFolder: 'Rudder'
    },

    {
        name: 'ShipRollSmall',
        path: ['M3 Elements', 'Elements', 'Ship - Front', 'Size=Small'],
        outputFolder: 'PitchRoll'
    },
    {
        name: 'ShipRollMedium',
        path: ['M3 Elements', 'Elements', 'Ship - Front', 'Size=Medium'],
        outputFolder: 'PitchRoll'
    },
    {
        name: 'ShipRollLarge',
        path: ['M3 Elements', 'Elements', 'Ship - Front', 'Size=Large'],
        outputFolder: 'PitchRoll'
    },
    {
        name: 'ShipPitchSmall',
        path: ['M3 Elements', 'Elements', 'Ship - Side', 'Size=Small'],
        outputFolder: 'PitchRoll'
    },
    {
        name: 'ShipPitchMedium',
        path: ['M3 Elements', 'Elements', 'Ship - Side', 'Size=Medium'],
        outputFolder: 'PitchRoll'
    },
    {
        name: 'ShipPitchLarge',
        path: ['M3 Elements', 'Elements', 'Ship - Side', 'Size=Large'],
        outputFolder: 'PitchRoll'
    },
    {
        name: 'PitchPointerSmall',
        path: ['M1 Navigation components', 'Pitch S', 'Pitch S', 'pitch', "pointer-line"],
        outputFolder: 'PitchRoll'
    },
    {
        name: 'PitchPointerMedium',
        path: ['M1 Navigation components', 'Pitch M', 'Pitch M', 'pointer', "pointer-line"],
        outputFolder: 'PitchRoll'
    },
    {
        name: 'PitchPointerLarge',
        path: ['M1 Navigation components', 'Pitch L', 'Pitch L', 'pitch', "pointer-line"],
        outputFolder: 'PitchRoll'
    },
    {
        name: 'PointerCenterSmall',
        path: ['M1 Navigation components', 'Pitch S', 'Pitch S', 'pitch', "center"],
        outputFolder: 'PitchRoll'
    },
    {
        name: 'PointerCenterMedium',
        path: ['M1 Navigation components', 'Pitch M', 'Pitch M', 'pointer', "center"],
        outputFolder: 'PitchRoll'
    },
    {
        name: 'PointerCenterLarge',
        path: ['M1 Navigation components', 'Pitch L', 'Pitch L', 'pitch', "center"],
        outputFolder: 'PitchRoll'
    },
    {
        name: 'RollPointerSmall',
        path: ['M1 Navigation components', 'Roll S', 'Roll S', 'pitch', "pointer-line"],
        outputFolder: 'PitchRoll'
    },
    {
        name: 'RollPointerMedium',
        path: ['M1 Navigation components', 'Roll M', 'Roll M', 'pointer', "pointer-line"],
        outputFolder: 'PitchRoll'
    },
    {
        name: 'RollPointerLarge',
        path: ['M1 Navigation components', 'Roll L', 'Roll L', 'pitch', "pointer-line"],
        outputFolder: 'PitchRoll'
    },
    /*
    {
        name: 'BarHorizontal100ActiveBarSmall',
        path: ['Bars', 'Horizontal +/-100', 'Small', 'Small', 'active-bar'],
        outputFolder: 'BARS'
    },
    {
        name: 'BarHorizontal100BarSmall',
        path: ['Bars', 'Horizontal +/-100', 'Small', 'Small', 'bar'],
        outputFolder: 'BARS'
    },
    {
        name: 'BarHorizontal100LabelsMedium',
        path: ['Bars', 'Horizontal +/-100', 'Medium', 'Labels'],
        outputFolder: 'BARS'
    },
    {
        name: 'BarHorizontal100ActiveBarMedium',
        path: ['Bars', 'Horizontal +/-100', 'Medium', 'active-bar'],
        outputFolder: 'BARS'
    },
    {
        name: 'BarHorizontal100BarMedium',
        path: ['Bars', 'Horizontal +/-100', 'Medium', 'bar'],
        outputFolder: 'BARS'
    },
    {
        name: 'BarHorizontal100Large',
        path: ['Bars', 'Horizontal +/-100', 'Large'],
        outputFolder: 'BARS'
    },
    {
        name: 'BarHorizontal100LabelsLarge',
        path: ['Bars', 'Horizontal +/-100', 'Large', 'Labels'],
        outputFolder: 'BARS'
    },
    {
        name: 'BarHorizontal100ActiveBarLarge',
        path: ['Bars', 'Horizontal +/-100', 'Large', 'active-bar'],
        outputFolder: 'BARS'
    },
    {
        name: 'BarHorizontal100BarLarge',
        path: ['Bars', 'Horizontal +/-100', 'Large', 'bar'],
        outputFolder: 'BARS'
    },

    {
        name: 'BarVerticalPositive100ActiveBarSmall',
        path: ['Bars', 'Vertical +100', 'Small', 'active-bar'],
        outputFolder: 'BARS'
    },
    {
        name: 'BarVerticalPositive100BarSmall',
        path: ['Bars', 'Vertical +100', 'Small', 'bar'],
        outputFolder: 'BARS'
    },
    {
        name: 'BarVerticalPositive100LabelsMedium',
        path: ['Bars', 'Vertical +100', 'Medium', 'labels'],
        outputFolder: 'BARS'
    },
    {
        name: 'BarVerticalPositive100ActiveBarMedium',
        path: ['Bars', 'Vertical +100', 'Medium', 'active-bar'],
        outputFolder: 'BARS'
    },
    {
        name: 'BarVerticalPositive100BarMedium',
        path: ['Bars', 'Vertical +100', 'Medium', 'bar'],
        outputFolder: 'BARS'
    },
    {
        name: 'BarVerticalPositive100LabelsLarge',
        path: ['Bars', 'Vertical +100', 'Large', 'labels'],
        outputFolder: 'BARS'
    },
    {
        name: 'BarVerticalPositive100ActiveBarLarge',
        path: ['Bars', 'Vertical +100', 'Large', 'active-bar'],
        outputFolder: 'BARS'
    },
    {
        name: 'BarVerticalPositive100BarLarge',
        path: ['Bars', 'Vertical +100', 'Large', 'bar'],
        outputFolder: 'BARS'
    },

    {
        name: 'BarVertical100ActiveBarSmall',
        path: ['Bars', 'Vertical +/-100', 'Small', 'active-bar'],
        outputFolder: 'BARS'
    },
    {
        name: 'BarVertical100BarSmall',
        path: ['Bars', 'Vertical +/-100', 'Small', 'bar'],
        outputFolder: 'BARS'
    },
    {
        name: 'BarVertical100LabelsMedium',
        path: ['Bars', 'Vertical +/-100', 'Medium', 'Labels'],
        outputFolder: 'BARS'
    },
    {
        name: 'BarVertical100ActiveBarMedium',
        path: ['Bars', 'Vertical +/-100', 'Medium', 'active-bar'],
        outputFolder: 'BARS'
    },
    {
        name: 'BarVertical100BarMedium',
        path: ['Bars', 'Vertical +/-100', 'Medium', 'bar'],
        outputFolder: 'BARS'
    },
    {
        name: 'BarVertical100LabelsLarge',
        path: ['Bars', 'Vertical +/-100', 'Large', 'Labels'],
        outputFolder: 'BARS'
    },
    {
        name: 'BarVertical100ActiveBarLarge',
        path: ['Bars', 'Vertical +/-100', 'Large', 'active-bar'],
        outputFolder: 'BARS'
    },
    {
        name: 'BarVertical100BarLarge',
        path: ['Bars', 'Vertical +/-100', 'Large', 'bar'],
        outputFolder: 'BARS'
    },

    {
        name: 'CircleCompassArrowHdgMedium',
        path: ['HDG & COG', 'Elements', 'Circle compass arrow/ HDG - Medium'],
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
    }, {
        name: 'CircleBorderInsideMedium',
        path: ['ROT', '01 Circle', 'Medium', 'border-inside'],
        outputFolder: 'ROT'
    }, {
        name: 'CircleBorderOutsideMedium',
        path: ['ROT', '01 Circle', 'Medium', 'border-outisde'],
        outputFolder: 'ROT'
    }, {
        name: 'CircleTrackMedium',
        path: ['ROT', '01 Circle', 'Medium', 'track'],
        outputFolder: 'ROT'
    }, {
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
        name: 'SpeedNeedleSmall',
        path: ['SOG & STW', 'Elements', '01 Speed Needle/ Small'],
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
        name: 'MainEngineArrowSmall',
        path: ['Thrusters & Propulsion', '03 Main Engine', 'Small', 'Small', 'FrontArrow'],
        outputFolder: 'Thruster'
    },
    {
        name: 'MainEngineArrowMedium',
        path: ['Thrusters & Propulsion', '03 Main Engine', 'Medium', 'Medium', 'FrontArrow'],
        outputFolder: 'Thruster'
    },
    {
        name: 'MainEngineArrowLarge',
        path: ['Thrusters & Propulsion', '03 Main Engine', 'Large', 'Large - Regular', 'FrontArrow'],
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
    },

    {
        name: 'FrontArrowSmall',
        path: ['Thrusters & Propulsion', 'Thruster element', 'Small', 'FrontArrow'],
        outputFolder: 'Thruster'
    }, {
        name: 'ThrusterPowerSmall',
        path: ['Thrusters & Propulsion', 'Thruster element', 'Small', 'Power'],
        outputFolder: 'Thruster'
    }, {
        name: 'ThrusterStaticSmall',
        path: ['Thrusters & Propulsion', 'Thruster element', 'Small', 'ThrusterElement'],
        outputFolder: 'Thruster'
    },

    {
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
    },
    {
        name: 'PointerLargeMaxWidth',
        path: ['Thrusters & Propulsion', 'Thruster element', 'Large - max width', 'Large', 'EndPointer'],
        outputFolder: 'Thruster'
    }, {
        name: 'FrontArrowLargeMaxWidth',
        path: ['Thrusters & Propulsion', 'Thruster element','Large - max width',  'Large', 'FrontArrow'],
        outputFolder: 'Thruster'
    }, {
        name: 'ThrusterPowerInputLargeMaxWidth',
        path: ['Thrusters & Propulsion', 'Thruster element','Large - max width',  'Large', 'PowerInput'],
        outputFolder: 'Thruster'
    }, {
        name: 'ThrusterPowerLargeMaxWidth',
        path: ['Thrusters & Propulsion', 'Thruster element','Large - max width',  'Large', 'Power'],
        outputFolder: 'Thruster'
    }, {
        name: 'ThrusterStaticLargeMaxWidth',
        path: ['Thrusters & Propulsion', 'Thruster element','Large - max width',  'Large', 'ThrusterElement'],
        outputFolder: 'Thruster'
    },

        {
        name: 'PointerLargeMinWidth',
        path: ['Thrusters & Propulsion', 'Thruster element', 'Large - min width', 'Large', 'EndPointer'],
        outputFolder: 'Thruster'
    }, {
        name: 'FrontArrowLargeMinWidth',
        path: ['Thrusters & Propulsion', 'Thruster element','Large - min width',  'Large', 'FrontArrow'],
        outputFolder: 'Thruster'
    }, {
        name: 'ThrusterPowerInputLargeMinWidth',
        path: ['Thrusters & Propulsion', 'Thruster element','Large - min width',  'Large', 'PowerInput'],
        outputFolder: 'Thruster'
    }, {
        name: 'ThrusterPowerLargeMinWidth',
        path: ['Thrusters & Propulsion', 'Thruster element','Large - min width',  'Large', 'Power'],
        outputFolder: 'Thruster'
    }, {
        name: 'ThrusterStaticLargeMinWidth',
        path: ['Thrusters & Propulsion', 'Thruster element','Large - min width',  'Large', 'ThrusterElement'],
        outputFolder: 'Thruster'
    },


    {
        name: 'PrimaryTickmarks90Large',
        path: ['Watch face', '01 Primary Tickmarks', 'Large/ 1 per 90° - 90°'],
        outputFolder: 'WatchFace'
    }, {
        name: 'PrimaryTickmarks45Large',
        path: ['Watch face', '01 Primary Tickmarks', 'Large/ 2 per 90 - 45°'],
        outputFolder: 'WatchFace'
    }, {
        name: 'PrimaryTickmarks30Large',
        path: ['Watch face', '01 Primary Tickmarks', 'Large/ 3 per 90° - 30°'],
        outputFolder: 'WatchFace'
    }, {
        name: 'PrimaryTickmarksLarge',
        path: ['Watch face', '01 Primary Tickmarks', 'Large/ Angle Master'],
        outputFolder: 'WatchFace'
    },
    {
        name: 'SecondaryTickmarks5Large',
        path: ['Watch face', '02 Secondary Tickmarks', 'Large/ 18 per 90° - 5°'],
        outputFolder: 'WatchFace'
    }, {
        name: 'SecondaryTickmarks9Large',
        path: ['Watch face', '02 Secondary Tickmarks', 'Large/ 10 per 90° - 09°'],
        outputFolder: 'WatchFace'
    }, {
        name: 'SecondaryTickmarks10Large',
        path: ['Watch face', '02 Secondary Tickmarks', 'Large/ 09 per 90° - 10°'],
        outputFolder: 'WatchFace'
    }, {
        name: 'TertiaryTickmarksLarge',
        path: ['Watch face', '03 Tertiary Tickmarks', 'Large/ 90 per 90° - 1°'],
        outputFolder: 'WatchFace'
    },
    {
        name: 'InnerCircleRegularLarge',
        path: ['Watch face', '04 Inner circle', 'Large/ 01 Regular'],
        outputFolder: 'WatchFace'
    }, {
        name: 'InnerCirclePortStarboardLarge',
        path: ['Watch face', '04 Inner circle', 'Large/ 02 PORT STBD'],
        outputFolder: 'WatchFace'
    }, {
        name: 'InnerCirclePositiveNegativeLarge',
        path: ['Watch face', '04 Inner circle', 'Large/ 03 Positive Negative'],
        outputFolder: 'WatchFace'
    }, {
        name: 'CrossRegularLarge',
        path: ['Watch face', '05 Cross', 'Large'],
        outputFolder: 'WatchFace'
    }, {
        name: 'PrimaryTickmarks90Medium',
        path: ['Watch face', '01 Primary Tickmarks', 'Medium/ 1 per 90° - 90°'],
        outputFolder: 'WatchFace'
    }, {
        name: 'PrimaryTickmarks45Medium',
        path: ['Watch face', '01 Primary Tickmarks', 'Medium/ 2 per 90 - 45°'],
        outputFolder: 'WatchFace'
    }, {
        name: 'PrimaryTickmarks30Medium',
        path: ['Watch face', '01 Primary Tickmarks', 'Medium/ 3 per 90° - 30°'],
        outputFolder: 'WatchFace'
    }, {
        name: 'PrimaryTickmarksMedium',
        path: ['Watch face', '01 Primary Tickmarks', 'Medium/ Angle Master'],
        outputFolder: 'WatchFace'
    },
    {
        name: 'SecondaryTickmarks5Medium',
        path: ['Watch face', '02 Secondary Tickmarks', 'Medium/ 18 per 90° - 5°'],
        outputFolder: 'WatchFace'
    }, {
        name: 'SecondaryTickmarks9Medium',
        path: ['Watch face', '02 Secondary Tickmarks', 'Medium/ 10 per 90° - 09°'],
        outputFolder: 'WatchFace'
    }, {
        name: 'SecondaryTickmarks10Medium',
        path: ['Watch face', '02 Secondary Tickmarks', 'Medium/ 09 per 90° - 10°'],
        outputFolder: 'WatchFace'
    }, {
        name: 'InnerCircleRegularMedium',
        path: ['Watch face', '04 Inner circle', 'Medium/ 01 Regular'],
        outputFolder: 'WatchFace'
    }, {
        name: 'InnerCirclePortStarboardMedium',
        path: ['Watch face', '04 Inner circle', 'Medium/ 02 PORT STBD'],
        outputFolder: 'WatchFace'
    }, {
        name: 'InnerCirclePositiveNegativeMedium',
        path: ['Watch face', '04 Inner circle', 'Medium/ 03 Positive Negative'],
        outputFolder: 'WatchFace'
    }, {
        name: 'CrossRegularMedium',
        path: ['Watch face', '05 Cross', 'Medium'],
        outputFolder: 'WatchFace'
    },
    {
        name: 'PrimaryTickmarks90Small',
        path: ['Watch face', '01 Primary Tickmarks', 'Small/ 1 per 90° - 90°'],
        outputFolder: 'WatchFace'
    }, {
        name: 'PrimaryTickmarks45Small',
        path: ['Watch face', '01 Primary Tickmarks', 'Small/ 2 per 90 - 45°'],
        outputFolder: 'WatchFace'
    }, {
        name: 'PrimaryTickmarks30Small',
        path: ['Watch face', '01 Primary Tickmarks', 'Small/ 3 per 90° - 30°'],
        outputFolder: 'WatchFace'
    }, {
        name: 'PrimaryTickmarksSmall',
        path: ['Watch face', '01 Primary Tickmarks', 'Small/ Angle Master'],
        outputFolder: 'WatchFace'
    }, {
        name: 'InnerCircleRegularSmall',
        path: ['Watch face', '04 Inner circle', 'Small/ 01 Regular'],
        outputFolder: 'WatchFace'
    }, {
        name: 'InnerCirclePortStarboardSmall',
        path: ['Watch face', '04 Inner circle', 'Small/ 02 PORT STBD'],
        outputFolder: 'WatchFace'
    }, {
        name: 'InnerCirclePositiveNegativeSmall',
        path: ['Watch face', '04 Inner circle', 'Small/ 03 Positive Negative'],
        outputFolder: 'WatchFace'
    },
    {
        name: 'CrossRegularSmall',
        path: ['Watch face', '05 Cross', 'Small'],
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
    */
];
/*
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
*/
export const exportComponents = [...staticExportComponents];
