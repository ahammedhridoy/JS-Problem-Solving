/*
Write a JavaScript program to create a new
string adding "New!" in front of a given string.
If the given string begins with "New!" already
then return the original string.
*/

const addNew = (str) => {
  if (str.startsWith("New!")) {
    return str;
  } else {
    return "New! " + str;
  }
};

console.log(addNew("World!")); // "New! World!"
