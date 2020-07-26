// Given a string s consisting of small English letters, 
// find and return the first instance of a non-repeating character in it. 
// If there is no such character, return '_'.

function firstNotRepeatingCharacter(s) {
    for (let i=0; i < s.length; i++){
        if(s.indexOf(s.charAt(i)) == s.lastIndexOf(s.charAt(i))){
            return s.charAt(i)
        }
    } 
    return "_"
}


//following is to test that solution works:
console.log(firstNotRepeatingCharacter('aabbcc')
// expected outcome: "_"

// FYI: this solution is not optimal(i.e. it is slow). Please share your solutions or suggestions in issues section of this repo.
