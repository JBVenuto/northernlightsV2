const timeParse = (timeStamp) => {
  const [date, time] = timeStamp.split(" ");
  return [date.split("-"), time.split(":")];
};

export default timeParse;
