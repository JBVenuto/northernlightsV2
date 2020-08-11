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
            lastKp: 10
        }
    }

    render() {
        return(
            // <h3>Hello World!</h3>
            <svg ref={r => (this.chartRef = r)} />
        )
    }
}

export default KpBar;