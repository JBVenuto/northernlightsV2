export function lastKp(data) {
  let last = null;

  data.forEach((kp) => {
    const observed = Array.isArray(kp) ? kp[2] : kp.observed;

    if (observed === "observed") {
      last = Array.isArray(kp) ? [kp[0], kp[1]] : [kp.time_tag, kp.kp];
    }
  });

  return last;
}
