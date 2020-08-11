import React, { Component } from 'react';
import * as d3 from 'd3';

class KpGraph extends Component {
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

    componentDidMount() {
        console.log('kpData:', this.state.kpData)
        const width = 700,
            height = 500;

        let chart = d3
            .select(this.chartRef)
            .attr("width", width + 100)
            .attr("height", height + 200) //200 for legend
            .append("g")
            .attr("transform", "translate(100, 0)");

        const x = d3
            .scaleTime()
            .domain([this.state.kpData[0][0], this.state.kpData[this.state.lastKp][0]]) // min max dates
            .range([0, width]);

        const y = d3
            .scaleLinear()
            .domain([0, 9]) //max value
            .range([height, 0]);

        const graph = chart
            .selectAll(".graph")
            .data(this.state.kpData)
            // .enter()
            .append("g")
            .attr("class", "graph");

        graph
            .append("path")
            .attr("class", "line")
            .style("stroke", "red")
            .attr("d", function(parentData) {
                return (d3
                    .line()
                    .curve(d3.curveBasis) // make points round, not sharp
                    // .x(d => x(d[0]))
                    // .y(d => y(d[1]))(parentData);
                    .x(d => x(parentData[0]))
                    .y(d => y(parentData[1])))
            });

        chart
            .append("g")
            .attr("class", "axis axis--x")
            .attr("transform", `translate(0,${y(0) - 20})`)
            .call(d3.axisBottom(x));
    
        chart
            .append("g")
            .attr("class", "axis axis--y")
            .attr("transform", `translate(0,0)`)
            .call(d3.axisLeft(y));
    }

    render() {
        return(
            // <h3>Hello World!</h3>
            <svg ref={r => (this.chartRef = r)} />
        )
    }
}

export default KpGraph;