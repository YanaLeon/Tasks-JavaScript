// Write a function which receives 4 digits and returns the latest time of day that can be built with those digits. The time should be in HH:MM format.
// Examples: 
// digits: 1, 9, 8, 3 => result: "19:38"
// digits: 9, 1, 2, 5 => result: "21:59" (19:25 is also a valid time, but 21:59 is later)

function latestClock(a, b, c, d) {
    let time = new Array(a, b, c, d);
    let maxHour = 0;
    let maxMinute = 0;
    let hour;
    let minute;

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (i === j) {
                continue;
            }
            for (let y = 0; y < 4; y++) {
                if (i === y || j === y) {
                    continue;
                }
                for (let d = 0; d < 4; d++) {
                    if (i === d || j === d || y === d) {
                        continue;
                    }

                    hour = `${time[i]}${time[j]}`
                    minute = `${time[y]}${time[d]}`

                    if (hour < 24 && minute < 60) {
                        if (hour > maxHour || (hour === maxHour && minute > maxMinute)) {
                            maxHour = hour;
                            maxMinute = minute;
                        }
                    }
                }
            }
        }
    }
    
    return `${String(maxHour).padStart(2, "0")}:${String(maxMinute).padStart(2, "0")}`;
  }
  console.log(latestClock(1, 9, 8, 3))
  console.log(latestClock(9, 1, 2, 5))
  console.log(latestClock(1, 2, 8, 9))