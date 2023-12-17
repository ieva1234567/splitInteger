function splitInteger(num, parts) {
    let fractions = Array(parts).fill(num);
    let addedFractionsInst = addedFractions(fractions, parts);
    let integerPartsOfFractionsInst = integerPartsOfFractions(addedFractionsInst, parts);
    let pairWiseDifferenceInst = pairWiseDifference(integerPartsOfFractionsInst, parts);
    return pairWiseDifferenceInst.sort((a, b) => (a-b));
}

function addedFractions(array, parts) {
    let newArray = Array(parts);
    newArray[0] = array[0];
    for (let i = 1; i < array.length; i++) {
        newArray[i] = newArray[i-1] + array[0];
    }
    return newArray;
}

function integerPartsOfFractions(array, parts) {
    let newArray = Array(parts);
    for (let i = 0; i < parts; i++) {
        newArray[i] = Math.trunc(array[i]/parts);
    }
    return newArray;
}

function pairWiseDifference(array, parts) {
    let newArray = Array(parts);
    newArray[0] = array[0];
    for (let i = 1; i < array.length; i++) {
        newArray[i] = array[i] - array[i - 1];
    }
    return newArray;
}

module.exports = splitInteger;