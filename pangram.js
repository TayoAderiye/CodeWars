// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


// function isPangram(string){
//     let str=string.split(' ').join('').replace(/[\W\d]/g,'').toLowerCase().split('')
//   return [...new Set(str)].length==26
// }

function isPangram(string){
    const ff = []
    newArray = string.split("")
    for(let item of newArray ){
        var sd = item.toLowerCase()
        ff.push(sd)
    }
    const sT = new Set(ff)
    const unique = [...sT]
    var filtered = unique.filter(a => a.toString().match(/^[A-Za-z]/))
    console.log(filtered)

    if (filtered.length == 26){
        return true
    } else {
        return false
    }

}


console.log(isPangram("The quick brown fox jumps over the lazy dog."))