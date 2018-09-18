module.exports = function longestConsecutiveLength(array) {
  // your solution here
  if (array.length == 0) return 0;
  if (array.length == 1) return 1;

  var con = 1;
  var conMax = 1;
  var diff = 0;

  for (var i = 0; i < array.length - 1; i++) {
    diff = array[i+1] - array[i];
    if (diff == 0 || diff == 1) {
      con += diff;
    } else {
      if (conMax < con) {
        conMax = con;
      }
      con = 1;
    }
  }
  return conMax;
}
