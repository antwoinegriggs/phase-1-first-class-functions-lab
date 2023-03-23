const returnFirstTwoDrivers = function (array) {
  return array.slice(0, 2);
};

const returnLastTwoDrivers = function (array) {
  return array.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (fareMultiplier) {
  return function (fare) {
    return fare * fareMultiplier;
  };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (array, key) {
  return key(array);
};
