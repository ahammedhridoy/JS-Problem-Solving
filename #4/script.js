/*

Write a JavaScript program to get the current
date.
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/УУ

*/

const getCurrentDate = () => {
    const date = new Date();
    const day = date.getDate(); 
    const month = date.getMonth() + 1; 
    const year = date.getFullYear();
    const currentDate = `${day}/${month}/${year}`;

    return currentDate; 
}

console.log(getCurrentDate());