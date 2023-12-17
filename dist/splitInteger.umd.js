(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.split_integer_into_almost_even_integers = factory());
})(this, (function () { 'use strict';

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
    var splitInteger_1 = splitInteger;

    return splitInteger_1;

}));
