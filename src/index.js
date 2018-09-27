module.exports = function longestConsecutiveLength(array) {
  // your solution here
  if (array.length == 0) return 0;
  if (array.length == 1) return 1;
  
  let arr = array.slice();
  const length = arr.length;
  let con = 1;
  let conMax = 1;
 
  //формируем вспомогательный массив
  let help = [];

  for (let i=0; i < length; i++) {
    help[arr[i]] = 1;
  }

  //находим самую длинную последовательность единичек в help
  //используем тот факт, что массив - тоже объект
  
  for (key in help) {
    if (help[key] == help[key-1]) {
      con++;
      continue;
    }
    if (con > conMax) conMax = con;
    con = 1;
  }

  return conMax;
}