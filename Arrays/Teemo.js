//Leetcode 495


function findPoisonedDuration(timeSeries, duration) {
  if(timeSeries.length === 0 ) return 0;
  let totalPoisonedTime = 0;

  for(let i = 0; i < timeSeries.length; i++) {
    let timeDifference = timeSeries[i+1] - timeSeries[i];

    totalPoisonedTime = totalPoisonedTime + Math.min(timeDifference, duration);
  }
  totalPoisonedTime = totalPoisonedTime + duration;
  return totalPoisonedTime;
}