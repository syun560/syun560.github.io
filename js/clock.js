"use strict"

// 桁数が1桁だったら先頭に0を加えて2桁に調整する
const set2fig = num => num < 10 ? "0"+num : num

const showClock = () => {
    const nowTime = new Date()
    const nowHour = set2fig(nowTime.getHours())
    const nowMin  = set2fig(nowTime.getMinutes())
    const nowSec  = set2fig(nowTime.getSeconds())
    const msg = nowHour + ":" + nowMin + ":" + nowSec
    document.getElementById("RealtimeClockArea").innerHTML = msg
}
setInterval('showClock', 1000)