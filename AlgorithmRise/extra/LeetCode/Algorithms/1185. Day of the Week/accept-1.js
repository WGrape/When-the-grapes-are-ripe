var dateDifference = function(year, month, day) {
    let newDate1 = new Date(year + '-' + month + '-' + day);
    let newDate2 = new Date("1970-01-05");
    return parseInt(Math.abs(newDate1 - newDate2) / 1000 / 60 / 60 / 24);
}

/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function(day, month, year) {

    let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    // 1970.01.05 周一
    // 此题的关键思想是找到一个已知的时间和其对应的星期, 然后计算输入时间与已知时间的天数差, 最后再与7取余即可得是周几
    
    // 这里之所以还要+1，是因为选的起始时间是1970-01-05周一, 天数差的话会少1个单位, 所以需要再+1
    let days = dateDifference(year, month, day)+1;
    return week[ days%7 ];
};