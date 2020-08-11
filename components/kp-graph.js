import * as d3 from 'd3';

const KpGraph = props => {
    const parseTime = d3.timeParse("%Y-%m-%d %H:%M:%S");
    const kpData = props.kp.map(kp => {
        return [parseTime(kp[0]), kp[1]]
    })
    const lastKp = kpData.length - 1;

    const width = 700,
        height = 500;

    let chart = d3
        .select(this)
        .attr("width", width + 100)
        .attr("height", height + 200) //200 for legend
        .append("g")
        .attr("transform", "translate(100, 0)");

    const x = d3
        .scaleTime()
        .domain([kpData[0][0], kpData[lastKp][0]]) // min max dates
        .range([0, width]);

    const y = d3
        .scaleLinear()
        .domain([0, 9]) //max value
        .range([height, 0]);

    const graph = chart
        .selectAll(".graph")
        .data(kpData)
        .enter()
        .append("g")
        .attr("class", "graph");

    graph
        .append("path")
        .attr("class", "line")
        .style("stroke", "red")
        .attr("d", parentData => {
          return d3
            .line()
            .curve(d3.curveBasis) // make points round, not sharp
            .x(d => x(d[0]))
            .y(d => y(d[1]));
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

    console.log('kp chart:', chart)

    return(
        // <h3>Hello World!</h3>
        <svg ref={r => (chart = r)} />
    )
}

export default KpGraph;