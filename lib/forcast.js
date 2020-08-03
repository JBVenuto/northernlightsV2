export function forcast(data) {
    let predictedKp = []
    
    data.forEach(kp => {
        if (kp[2] != 'observed') {
            predictedKp.push(kp)
        }
    })

    return predictedKp
}

export function lastKp(data) {
    const arr = []

    return arr
}
