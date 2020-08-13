export function forcast(data) {
    let predictedKp = []
    
    data.forEach(kp => {
        if (kp[2] != 'observed') {
            predictedKp.push(kp)
        }
    })

    return predictedKp;
}
