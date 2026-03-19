export function lastKp(data) {
  let last;

  if (!data) {
    return null;
  };
  
  data?.map((kp) => {
    if (kp[2] === "observed") {
      last = kp;
    }
  });

  return last;
}
