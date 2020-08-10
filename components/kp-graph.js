import * as d3 from 'd3';

const KpGraph = props => {
    const parseTime = d3.timeParse("%Y-%m-%d %H:%M:%S");
    const kpData = props.kp.map(kp => {
        return [parseTime(kp[0]), kp[1]]
    })

    console.log('kp data:', kpData)
    return(
        <h3>Hello World!</h3>
    )
}

export default KpGraph;