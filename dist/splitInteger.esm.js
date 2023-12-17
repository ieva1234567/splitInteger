function splitInteger(num, parts) {
  var fractions = Array(parts).fill(num);
  var addedFractionsInst = addedFractions(fractions, parts);
  var integerPartsOfFractionsInst = integerPartsOfFractions(addedFractionsInst, parts);
  var pairWiseDifferenceInst = pairWiseDifference(integerPartsOfFractionsInst, parts);
  return pairWiseDifferenceInst.sort(function (a, b) {
    return a - b;
  });
}
function addedFractions(array, parts) {
  var newArray = Array(parts);
  newArray[0] = array[0];
  for (var i = 1; i < array.length; i++) {
    newArray[i] = newArray[i - 1] + array[0];
  }
  return newArray;
}
function integerPartsOfFractions(array, parts) {
  var newArray = Array(parts);
  for (var i = 0; i < parts; i++) {
    newArray[i] = Math.trunc(array[i] / parts);
  }
  return newArray;
}
function pairWiseDifference(array, parts) {
  var newArray = Array(parts);
  newArray[0] = array[0];
  for (var i = 1; i < array.length; i++) {
    newArray[i] = array[i] - array[i - 1];
  }
  return newArray;
}
module.exports = splitInteger;
