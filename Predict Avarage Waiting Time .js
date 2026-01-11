function waitingTime(waitingTimes  , serialNumber){
    let sum = 0;
    for( let time of waitingTimes )
    {
       sum+= time;
    }
    const avgTime = Math.round(sum/waitingTimes.length);
    const remainingPeople = (serialNumber - 1) - waitingTimes.length;
     const totalWaitingTime = remainingPeople * avgTime;

    return totalWaitingTime;

}
console.log(waitingTime([6], 4



))