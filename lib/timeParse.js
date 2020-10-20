const timeParse = timeStamp => {
    const [date, time] = timeStamp.split(' ');
    return [date.split('-'), time.split(':')];
    // return timeStamp.split(' ');
}

export default timeParse;