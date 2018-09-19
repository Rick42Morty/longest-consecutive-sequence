module.exports = function longestConsecutiveLength(array) {
  // your solution here
  if (array.length == 0) return 0;
  if (array.length == 1) return 1;

  var length = array.length;
  var min = array[0];
  var max = min;

  var con = 1;
  var conMax = 1;
  var diff = 0;

  var sorted = 1;

  for (var i = 0; i < length - 1; i++) {
    if (array[i+1] < array[i]) {
      sorted = 0;
      break;
    }
  }

  if (sorted) {
    for (var i = 0; i < length - 1; i++) {
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

  for (var i=0; i < length; i++) {
    if (array[i] < min) min = array[i];
    if (array[i] > max) max = array[i];
  }

  for (var i=0; i < length; i++) {
    array[i] -= min;
  }

  //формируем вспомогательный массив
  var help = [];

  for (var i = 0; i < max - min; i++) {
    help[i] = 0;
  }

  for (i=0; i < length; i++) {
    help[array[i]] = 1;
  }

  //находим самую длинную последовательность единичек в help


  for (i = 0; i < max - min - 1; i++) {
    if (help[i] == help[i+1] && help[i] == 1) {
      con++;
      continue;
    }
    if (con > conMax) conMax = con;
    con = 1;
  }

  if (con > conMax) conMax = con;

  return conMax;
}
