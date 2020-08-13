import React, { Component } from 'react';
import * as d3 from 'd3';

class KpBar extends Component {
    constructor(props) {
        super(props);
        const parseTime = d3.timeParse("%Y-%m-%d %H:%M:%S");
        this.state = {
            kpData: props.kp.map(kp => {
                        return {
                                time: parseTime(kp[0]), 
                                kp: parseInt(kp[1])
                            }
                    }),
            lastKp: 15,
            x: null,
            y: null
        }
    }

    componentDidMount() {
        console.log('state:', this.state);
        // const lastKp = this.state.kpData.length - 1;

        this.setState({
            // lastKp,
            x: this.scaleX(),
            y: this.scaleY()
        })
        console.log('state', this.state)
    }

    scaleX() {
        return d3
            .scaleLinear()
            .domain([0, 9]) //max value
            .range([0, this.state.width]);
    }

    scaleY() {
        return d3
            .scaleTime()
            .domain([this.state.kpData[0][0], this.state.kpData[this.state.lastKp][0]])
            .range([0, this.state.height]);
    }

    initGraph() {
        const { x, y, kpData } = this.state;

        return kpData.map((d, i) => (
            <div key={i} className="bar-chart__div" style={{ width: x(d.kp), height: y.bandwidth() }}>
                {d.kp}
            </div>
        ))
    }

    render() {
        return(
            <h3>Hello World!</h3>
            // <div>
            //     {this.initGraph()}
            // </div>
        )
    }
}

export default KpBar;