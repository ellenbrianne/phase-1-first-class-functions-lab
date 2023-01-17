const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function (drivers) {
    let firstTwo = drivers.slice(0,2);
    return firstTwo;
};

const returnLastTwoDrivers = function (drivers) {
    let lastTwo = drivers.slice(2);
    return lastTwo;
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = num => {
    return function (fare) {
        return num * fare;
    };
};

const fareDoubler = function (fare) {
    return fare * 2;
};

const fareTripler = function (fare) {
    return fare * 3;
};

const selectDifferentDrivers = function (drivers, driverFunction) {
    if (driverFunction === returnFirstTwoDrivers) {
        return drivers.slice(0,2);
    } else {
        return drivers.slice(2);
    };
};