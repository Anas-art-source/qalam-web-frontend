export const parseDataTime = (dt) => {
  const datetime = new Date(dt);
  const date = datetime.toLocaleString("en-GB", {
    timeZone: "UTC",
    month: "short",
    day: "numeric",
  });

  const minutes = datetime.getMinutes();

  if (+minutes > 9)
    return `${date} ${datetime.getHours()}:${datetime.getMinutes()}`;

  return `${date} ${datetime.getHours()}:0${datetime.getMinutes()}`;
};
