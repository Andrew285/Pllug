const str_1 = "Web ";
const str_2 = "Course";

//conctate two string
const concat_str = str_1.concat(str_2);
console.log(concat_str);

//returns the charachter at the specified position
const letter_e = str_1.charAt(1);
console.log(letter_e);

//The endsWith() method determines whether a string ends with the characters
// of a specified string, returning true or false as appropriate.
console.log(concat_str.endsWith("Course"));

//The includes() method performs a case-sensitive search to determine whether one
//string may be found within another string, returning true or false as appropriate.
let sentence = "The Book is open";
console.log(sentence.includes("is"));

//The indexOf() method returns the index within the calling String object of the first
//occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.

console.log(sentence.indexOf("i"));
console.log(sentence.indexOf("e", 4)); //second argument: search from specified position

//The match() method retrieves the result of matching a string against a regular expression.

const regex = /[A-Z]/g;
console.log(sentence.match(regex));


//The padEnd() method pads the current string with a given string (repeated, if needed) 
//so that the resulting string reaches a given length. The padding is applied from the 
//end of the current string.
console.log("|" + str_2.padEnd(10) + "|"); //output: "Course    "
console.log("|" + str_2.padEnd(10, ".") + "|");

//The padStart() method pads the current string with another string (multiple times, if needed) 
//until the resulting string reaches the given length. The padding is applied from the start of
// the current string.
console.log("|" + str_2.padStart(10) + "|"); 
console.log("|" + str_2.padStart(10, ".") + "|");

//The repeat() method constructs and returns a new string which contains the specified number of 
//copies of the string on which it was called, concatenated together.
console.log(str_1.repeat(5));

//The replace() method returns a new string with some or all matches of a pattern replaced by a 
//replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a 
//function to be called for each match. If pattern is a string, only the first occurrence will be replaced.
const sentence_2 = sentence.replace("open", "closed");
console.log(sentence_2);

//The search() method executes a search for a match between a regular expression and this String object.
console.log(str_2.search(regex));

//The slice() method extracts a section of a string and returns it as a new string, without 
//modifying the original string.
console.log(sentence.slice(9));
console.log(sentence.slice(9, 11));

//The split() method divides a String into an ordered list of substrings, puts these substrings 
//into an array, and returns the array.  The division is done by searching for a pattern; where the 
//pattern is provided as the first parameter in the method's call.
console.log(sentence.split(" "));
console.log(sentence.split(" ")[1]);

//The startsWith() method determines whether a string begins with the characters of a 
//specified string, returning true or false as appropriate.
console.log(sentence.startsWith("The"));

//The substring() method returns the part of the string between the start and end 
//indexes, or to the end of the string.
console.log(str_2.substr(1, 3));

//The toLowerCase() method returns the calling string value converted to lower case.
console.log(str_2.toLowerCase());

//The toUpperCase() method returns the calling string value converted to uppercase
// (the value will be converted to a string if it isn't one).
console.log(str_2.toUpperCase());

//The trim() method removes whitespace from both ends of a string. Whitespace in this context
// is all the whitespace characters (space, tab, no-break space, etc.) and all the line 
//terminator characters (LF, CR, etc.).

const string_with_spaces = "   Web Course      ";
console.log(string_with_spaces.trim());