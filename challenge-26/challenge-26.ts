function getCompleted(timeWorked: string, totalTime: string): string {
  const [hoursWorked, minutesWorked, secondsWorked] = timeWorked
    .split(':')
    .map((time) => Number(time));

  const [totalHours, totalMinutes, totalSeconds] = totalTime
    .split(':')
    .map((time) => Number(time));

  const totalSecondsWorked =
    hoursWorked * 3600 + minutesWorked * 60 + secondsWorked;
  const totalTimeSeconds = totalHours * 3600 + totalMinutes * 60 + totalSeconds;

  const percentage = Math.round((totalSecondsWorked / totalTimeSeconds) * 100);

  return percentage + '%';
}

export default getCompleted;
