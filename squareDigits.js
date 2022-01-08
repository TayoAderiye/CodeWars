function squareDigits(num){
    const multiply = []
    var newArr = String(num).split("").map((num)=>{
        return Number(num)
    })
    
    for(let item of newArr){
        var times = item ** 2
        multiply.push(times)
    }
    var joined = multiply.join("")
    convertJoined = Number(joined)
    // console.log(typeof(convertJoined))
    return convertJoined
}

// function squareDigits(num){
//     return parseInt(num.toString().split("").map(n => Math.pow(parseInt(n), 2)).join(""))
//   }

console.log(squareDigits(9119))