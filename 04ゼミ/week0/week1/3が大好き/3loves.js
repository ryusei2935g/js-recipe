const genkiFunction = function(number) {
  for (let n = 1; n <= number; n++) {
    const strNum = String(n)
    if (strNum.includes("3")) {
      console.log(`${strNum}大好き`)
    } else {
      console.log(strNum)
    }
  }
}
