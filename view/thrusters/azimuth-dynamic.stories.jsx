import "./azimuth-small";
import "./azimuth-medium";
import "./azimuth-large";
import React from "react";


export default {
    title: 'INSTRUMENT/Thruster & Propulsion/01 Azimuth thruster/Demo',
};

class AzimuthDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {time: 0};

    }

    componentDidMount() {
        this.timerID = setInterval(() => this.setState({time: this.state.time + .03}), 10);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        const time = this.state.time % 40;
        let angle = 45;
        let targetAngle = 45;
        let value = 60
        let target = 60
        if (time < 10) {
            angle = 25 + 2 * time;
            value = 10
            target = 10
        } else if (time < 20) {
            value = 10 + 5 * (time - 10)
        } else if (time < 30) {
            angle = 25 + 2 * (30 - time);
            targetAngle = 25;
            value = 60
            target = 60
        } else if (time < 40) {
            angle = 25;
            targetAngle = 25;
            value = 10 + 5 * (40 - time);
            target = 10;
        }

        const args = {
            angle: angle,
            targetAngle: targetAngle,
            showSetPointAngle: angle !== targetAngle,
            value: value,
            target: target,
            showSetPointValue: value !== target,
        }
        return (
            <div style={{width: 768, height: 256}}>
                    <ob-azimuth-small style={{position: 'absolute',width: 64, height: 64, top: 96, left: 96}} {...args}/>
                    <ob-azimuth-medium style={{position: 'absolute',width: 256, height: 256, top: 256, left: 0}} {...args}/>
                    <ob-azimuth-large style={{position: 'absolute', width: 512, height: 512, top: 0, left: 257}} {...args}/>
            </div>
        );
    }
}


export const Default = () => <AzimuthDemo/>;
