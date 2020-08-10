import * as d3 from 'd3';

const KpGraph = props => {
    const svg = d3.create('svg')
        .attr('width', 800)
        .attr('height', 600)
        .selectAll('rect')
        .data(props.kp-data)
        .enter().append('rect')
            .style({'fill': '#3c763d', 'stroke': '#d6e9c6', 'stroke-width': '5'})
            .attr('width', 40)
            .attr('height', d => {
                return 10 * d[1]
            })
            .attr('x', (d, i) => {
                return i * 60
            })
            .attr('y', d => {
                return 600 - (10 * d[1])
            })

    return (
        // <div></div>
        svg.node()
    )
}

export default KpGraph;