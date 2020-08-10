export function lastKp(data) {
    let last;

    data.map(kp => {
        if (kp[2] === 'observed') {
            last = kp;
        }
    })

    // console.log('last', last)
    return last
}