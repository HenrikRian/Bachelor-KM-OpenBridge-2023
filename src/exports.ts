export interface ExportDef {
    name: string;
    path: string[]; // Array of subpath for targeting the svg export in Figma
    outputFolder: string; // sub folder of ./gen
    nonScaling?: boolean
}

const staticExportComponents: ExportDef[] = [
    {
        name: 'FlatArrowHdgSmall',
        path: ['M3 Elements', 'Navigation elements', 'HDG', 'Size=Small, Type=Flat'],
        outputFolder: 'HDG_COG'
    },
    {
        name: 'FlatArrowHdgMedium',
        path: ['M3 Elements', 'Navigation elements', 'HDG', 'Size=Medium, Type=Flat'],
        outputFolder: 'HDG_COG'
    },
    {
        name: 'FlatArrowHdgLarge',
        path: ['M3 Elements', 'Navigation elements', 'HDG', 'Size=Large, Type=Flat'],
        outputFolder: 'HDG_COG'
    },
    {
        name: 'HdgCircularSmall',
        path: ['M3 Elements', 'Navigation elements', 'HDG', 'Size=Small, Type=Circular'],
        outputFolder: 'HDG_COG'
    },
    {
        name: 'HdgCircularMedium',
        path: ['M3 Elements', 'Navigation elements', 'HDG', 'Size=Medium, Type=Circular'],
        outputFolder: 'HDG_COG'
    },
    {
        name: 'HdgCircularLarge',
        path: ['M3 Elements', 'Navigation elements', 'HDG', 'Size=Large, Type=Circular'],
        outputFolder: 'HDG_COG'
    },
    {
        name: 'FlatArrowCogSmall',
        path: ['M3 Elements', 'Navigation elements', 'COG', 'Size=Small, Type=Flat'],
        outputFolder: 'HDG_COG'
    },
    {
        name: 'FlatArrowCogMedium',
        path: ['M3 Elements', 'Navigation elements', 'COG', 'Size=Medium, Type=Flat'],
        outputFolder: 'HDG_COG'
    },
    {
        name: 'FlatArrowCogLarge',
        path: ['M3 Elements', 'Navigation elements', 'COG', 'Size=Medium, Type=Flat'],
        outputFolder: 'HDG_COG'
    },
    {
        name: 'CogCircularSmall',
        path: ['M3 Elements', 'Navigation elements', 'COG', 'Size=Small, Type=Circular'],
        outputFolder: 'HDG_COG'
    },
    {
        name: 'CogCircularMedium',
        path: ['M3 Elements', 'Navigation elements', 'COG', 'Size=Medium, Type=Circular'],
        outputFolder: 'HDG_COG'
    },
    {
        name: 'CogCircularLarge',
        path: ['M3 Elements', 'Navigation elements', 'COG', 'Size=Large, Type=Circular'],
        outputFolder: 'HDG_COG'
    },
    {
        name: 'SetPointFlatSmall',
        path: ['M3 Elements', 'Navigation elements', 'Setpoint', 'Size=Small, Type=Flat'],
        outputFolder: 'HDG_COG'
    },
    {
        name: 'SetPointFlatMedium',
        path: ['M3 Elements', 'Navigation elements', 'Setpoint', 'Size=Medium, Type=Flat'],
        outputFolder: 'HDG_COG'
    },
    {
        name: 'SetPointFlatLarge',
        path: ['M3 Elements', 'Navigation elements', 'Setpoint', 'Size=Medium, Type=Flat'],
        outputFolder: 'HDG_COG'
    },
    {
        name: 'SetPointCircularSmall',
        path: ['M3 Elements', 'Navigation elements', 'Setpoint', 'Size=Small, Type=Circular'],
        outputFolder: 'HDG_COG'
    },
    {
        name: 'SetPointCircularMedium',
        path: ['M3 Elements', 'Navigation elements', 'Setpoint', 'Size=Medium, Type=Circular'],
        outputFolder: 'HDG_COG'
    },
    {
        name: 'SetPointCircularLarge',
        path: ['M3 Elements', 'Navigation elements', 'Setpoint', 'Size=Large, Type=Circular'],
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
        path: ['M3 Elements', 'Navigation elements', 'Setpoint', 'Size=Small, Type=Circular'],
        outputFolder: 'SetPoint'
    },
    {
        name: 'AngleMedium',
        path: ['M3 Elements', 'Navigation elements', 'Setpoint', 'Size=Medium, Type=Circular'],
        outputFolder: 'SetPoint'
    },
    {
        name: 'AngleLarge',
        path: ['M3 Elements', 'Navigation elements', 'Setpoint', 'Size=Large, Type=Circular'],
        outputFolder: 'SetPoint'
    },
    {
        name: 'RudderSmall',
        path: ['M3 Elements', 'Navigation elements', 'Rudder', 'Size=Small'],
        outputFolder: 'Rudder'
    },
    {
        name: 'RudderMedium',
        path: ['M3 Elements', 'Navigation elements', 'Rudder', 'Size=Medium'],
        outputFolder: 'Rudder'
    },
    {
        name: 'RudderLarge',
        path: ['M3 Elements', 'Navigation elements', 'Rudder', 'Size=Large'],
        outputFolder: 'Rudder'
    },

    {
        name: 'ShipRollSmall',
        path: ['M3 Elements', 'Navigation elements', 'Ship - Front', 'Size=Small'],
        outputFolder: 'PitchRoll'
    },
    {
        name: 'ShipRollMedium',
        path: ['M3 Elements', 'Navigation elements', 'Ship - Front', 'Size=Medium'],
        outputFolder: 'PitchRoll'
    },
    {
        name: 'ShipRollLarge',
        path: ['M3 Elements', 'Navigation elements', 'Ship - Front', 'Size=Large'],
        outputFolder: 'PitchRoll'
    },
    {
        name: 'ShipPitchSmall',
        path: ['M3 Elements', 'Navigation elements', 'Ship - Side', 'Size=Small'],
        outputFolder: 'PitchRoll'
    },
    {
        name: 'ShipPitchMedium',
        path: ['M3 Elements', 'Navigation elements', 'Ship - Side', 'Size=Medium'],
        outputFolder: 'PitchRoll'
    },
    {
        name: 'ShipPitchLarge',
        path: ['M3 Elements', 'Navigation elements', 'Ship - Side', 'Size=Large'],
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
    },*/ {
        name: 'ThrusterElementCenterLineLarge',
        path: ['M3 Elements', 'Navigation elements', 'Thruster L', 'Suggestion=False, Setpoint=True, Tick marks=True', 'ThrusterElement', 'CenterLine'],
        outputFolder: 'Thruster'
    },{
        name: 'ThrusterElementTrackLarge',
        path: ['M3 Elements', 'Navigation elements', 'Thruster L', 'Suggestion=False, Setpoint=True, Tick marks=True', 'ThrusterElement', 'Track'],
        outputFolder: 'Thruster'
    },{
        name: 'ThrusterElementTickmarksLarge',
        path: ['M3 Elements', 'Navigation elements', 'Thruster L', 'Suggestion=False, Setpoint=True, Tick marks=True', 'ThrusterElement', 'Tickmarks'],
        outputFolder: 'Thruster'
    },{
        name: 'ThrusterFrontArrowLarge',
        path: ['M3 Elements', 'Navigation elements', 'Thruster L', 'Suggestion=False, Setpoint=True, Tick marks=True', 'FrontArrow'],
        outputFolder: 'Thruster'
    },
    {
        name: 'ThrusterMainEngineFrontArrowLarge',
        path: ['M3 Elements', 'Navigation elements', 'Thruster L', 'Suggestion=False, Setpoint=True, Tick marks=True', 'FrontArrow', 'Arrow'],
        outputFolder: 'Thruster'
    },{
        name: 'ThrusterEndPointerLarge',
        path: ['M3 Elements', 'Navigation elements', 'Thruster L', 'Suggestion=False, Setpoint=True, Tick marks=True', 'EndPointer'],
        outputFolder: 'Thruster'
    },{
        name: 'ThrusterPowerInputLarge',
        path: ['M3 Elements', 'Navigation elements', 'Thruster L', 'Suggestion=False, Setpoint=True, Tick marks=True', 'PowerInput'],
        outputFolder: 'Thruster'
    },{
        name: 'ThrusterSuggestedSetPointLarge',
        path: ['M3 Elements', 'Navigation elements', 'Thruster L', 'Suggestion=True, Setpoint=True, Tick marks=True', 'SuggestedSetpoint'],
        outputFolder: 'Thruster'
    },

    {
        name: 'SecondaryTickmarks5',
        path: ['M3 Elements', 'Elements/ Tickmarks - Compass', 'Degree=5°, Tick size=Secondary'],
        outputFolder: 'WatchFace',
        nonScaling: true
    }, {
        name: 'SecondaryTickmarks9',
        path: ['M3 Elements', 'Elements/ Tickmarks - Compass', 'Degree=9°, Tick size=Secondary'],
        outputFolder: 'WatchFace',
        nonScaling: true
    }, {
        name: 'SecondaryTickmarks10',
        path: ['M3 Elements', 'Elements/ Tickmarks - Compass', 'Degree=10°, Tick size=Secondary'],
        outputFolder: 'WatchFace',
        nonScaling: true
    }, {
        name: 'TertiaryTickmarks',
        path: ['M3 Elements', 'Elements/ Tickmarks - Compass', 'Degree=1°, Tick size=Tertiary'],
        outputFolder: 'WatchFace',
        nonScaling: true
    },

    {
        name: 'NorthArrowSmall',
        path: ['M1 Navigation components', 'Heading  S', 'Orientation=N up, Type=HDG', 'Component', 'Compass', 'North'],
        outputFolder: 'WatchFace',
    },

    {
        name: 'InnerCircleRegularLarge',
        path: ['M3 Elements', 'Elements/ Watchface circle', 'Size=Large, Type=Regular'],
        outputFolder: 'WatchFace'
    }, {
        name: 'InnerCirclePortStarboardLarge',
        path: ['M3 Elements', 'Elements/ Watchface circle', 'Size=Large, Type=PORT STBD'],
        outputFolder: 'WatchFace'
    }, {
        name: 'InnerCirclePositiveNegativeLarge',
        path: ['M3 Elements', 'Elements/ Watchface circle', 'Size=Large, Type=Positive / Negative'],
        outputFolder: 'WatchFace'
    },{
        name: 'InnerCircleRegularMedium',
        path: ['M3 Elements', 'Elements/ Watchface circle', 'Size=Medium, Type=Regular'],
        outputFolder: 'WatchFace'
    }, {
        name: 'InnerCirclePortStarboardMedium',
        path: ['M3 Elements', 'Elements/ Watchface circle', 'Size=Medium, Type=PORT STBD'],
        outputFolder: 'WatchFace'
    }, {
        name: 'InnerCirclePositiveNegativeMedium',
        path: ['M3 Elements', 'Elements/ Watchface circle', 'Size=Medium, Type=Positive / Negative'],
        outputFolder: 'WatchFace'
    }, {
        name: 'InnerCircleRegularSmall',
        path: ['M3 Elements', 'Elements/ Watchface circle', 'Size=Small, Type=Regular'],
        outputFolder: 'WatchFace'
    }, {
        name: 'InnerCirclePortStarboardSmall',
        path: ['M3 Elements', 'Elements/ Watchface circle', 'Size=Small, Type=PORT STBD'],
        outputFolder: 'WatchFace'
    }, {
        name: 'InnerCirclePositiveNegativeSmall',
        path: ['M3 Elements', 'Elements/ Watchface circle', 'Size=Small, Type=Positive / Negative'],
        outputFolder: 'WatchFace'
    },{
        name: 'CrossRegularLarge',
        path: ['M3 Elements', 'Compass watchface', 'Size=Large, Marks per=90°, Labels=False, Condensed=True, Cross=True, Frame=True', "Watchface", "center-cross"],
        outputFolder: 'WatchFace'
    }, {
        name: 'CrossRegularMedium',
        path: ['M3 Elements', 'Compass watchface', 'Size=Small, Marks per=90°, Labels=False, Condensed=True, Cross=True, Frame=True', "Cross"],
        outputFolder: 'WatchFace'
    },{
        name: 'CrossRegularSmall',
        path: ['M3 Elements', 'Compass watchface', 'Size=Small, Marks per=90°, Labels=False, Condensed=True, Cross=True, Frame=True', "Cross"],
        outputFolder: 'WatchFace'
    },/*{
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

const circleDegrees = ['1', '2', '5', '9', '10', '30', '45', '90'];
const tickType = ['Primary', 'Secondary', 'Tertiary'];
const circleTickMarks: ExportDef[] = [];

for (const degree of circleDegrees) {
    for (const tick of tickType) {
        const def: ExportDef = {
            name: `${tick}Tickmark${degree}`,
            path: ['M3 Elements', 'Elements/ Tickmarks - Compass', `Degree=${degree}°, Tick size=${tick}`],
            outputFolder: 'Tickmarks',
            nonScaling: true
        };
        circleTickMarks.push(def);
    }
}
export const exportComponents = [...staticExportComponents, ...circleTickMarks];
