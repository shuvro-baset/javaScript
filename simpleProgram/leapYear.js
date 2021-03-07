function isLeapYear(year) {
    let isLeapObj = {};
    if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) {
        isLeapObj['isLeap'] = true;
        isLeapObj['days'] = 366;
    } else {
        isLeapObj['isLeap'] = false;
        isLeapObj['days'] = 365;
    }
    return isLeapObj;
}

x = isLeapYear(2020);
console.log(x);