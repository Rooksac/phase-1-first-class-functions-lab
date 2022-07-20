const returnFirstTwoDrivers = function(drivers) {
    let firstDrivers = drivers.slice(0,2);
    return firstDrivers;
}
const returnLastTwoDrivers = function(drivers) {
    let lastDrivers = drivers.slice(2);
    return lastDrivers;
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(multiplier) {
    const fareMultiplier = function(fare){
        return fare * multiplier;
    }
    return fareMultiplier        
}
const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(drivers, selector) {
    return selector(drivers);
}