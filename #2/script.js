/*
Write a JavaScript program to get the
extension of a filename.
*/

const getExtension = (str)=>{
    return str.split(".")[1]
}

console.log(getExtension("index.css"))