export function forcast(data) {
  let predictedKp = [];

  data.forEach((kp) => {
    const observed = Array.isArray(kp) ? kp[2] : kp.observed;

    if (observed !== "observed") {
      predictedKp.push(Array.isArray(kp) ? [kp[0], kp[1]] : [kp.time_tag, kp.kp]);
    }
  });

  return predictedKp;
}
