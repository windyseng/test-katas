function wrap(line, maxLen){
  if(line.length <= maxLen){
    return line;
  }
  const indexOfBlank = line.lastIndexOf(' ', maxLen);
  let split;
  let offset;
  if(indexOfBlank > -1){
    split = indexOfBlank;
    offset = 1;
  }else{
    split=maxLen;
    offset=0;
  }
  return line.substring(0, split) +  "\n" + wrap(line.substring(split + offset), maxLen)
}
console.log(wrap("this exercise is weird", 10));

// const wrap = (line, maxLen) => {
// let returnedStr = "";
// let count = 0;
// let newLine = "";
// if(line === "") return returnedStr;
// const arrStr = line.split(' ')
// for(let i = 0; i < arrStr.length; i++){
//   let currentWord = arrStr[i]
//   for(let j = 0; j < currentWord.length; j++){
//     if(currentWord.length < maxLen && count < maxLen && currentWord.length <= (maxLen - count)){
//       count += currentWord.length;
//       newLine + currentWord;
//     } else {
//       newLine + '\n';
//       count = 0;
//     }
//   }
// }
// return newLine;
// }
// console.log(wrap("this exercise is weird", 10));

module.exports = wrap;
