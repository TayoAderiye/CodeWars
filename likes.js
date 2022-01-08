// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.

function likes(names) {
    const arrayLength = names.length
    const newArray = [...names]
    const afterDel = []
    if (arrayLength < 1){
        return "no one likes this"
    } else if (arrayLength == 1) {
        return `${names[0]} likes this`
    } else if (arrayLength == 2 ) {
        return `${names[0]} and ${names[1]} like this`
    } else if (arrayLength == 3 ) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
    } else if (arrayLength > 3 ) {
        delete names[0]
        delete names[1]
        const filterE = names.filter(function (el){
            return el != null
        })
        return `${newArray[0]}, ${newArray[1]} and ${filterE.length} others like this`
    }
    
    
    
}
// function likes(names) {
//     if(names.length === 0) return "no one likes this";
//     if(names.length === 1) return names[0] + " likes this";
//     if(names.length === 2) return names[0] + " and " + names[1] + " like this";
//     if(names.length === 3) return names[0] + ", " + names[1] + " and " + names[2] + " like this";
//     return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
//   }




console.log(likes(["Max", "John", "Mark", "Max","j"]))