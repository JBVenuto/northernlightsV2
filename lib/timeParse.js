const timeParse = (timeStamp) => {
  const [date, time] = timeStamp.replace("T", " ").split(" ");
  return [date.split("-"), time.split(":")];
};

export default timeParse;
