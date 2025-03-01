/*
Experiment number : 03
Experiment Name : Get a current date in Various Formats

*/
//Grt the current data
var today = new Date();

// Get the day of the month
var dd = today.getDate();

// Get the month (adding 1 because month are zero-based)
var mm = today.getMonth() + 1;

// Get the year
var yyyy = today.getFullYear();

//Add leading zero if the day is less than 10.
if(dd < 10){
    dd  = '0' + dd;
}

// Add leading zero if the month is less than 10
if(mm < 10){
    mm = '0' + mm;
}

// Format the date as mm-dd-yy add log it
today = mm +  '-' + dd + '-' + yyyy;
console.log(today);

// Formate the date as dd/mm/yyyy and log it
today = mm + '/' + dd + '/' + yyyy;
console.log(today);

// Format the date as dd-mm-yyyy and log it
today = dd + '-' + mm + '-' + yyyy;
console.log(today);

// Format the date as dd/mm/yyyy and log it
today = dd + '/' + mm + '/' + yyyy;
console.log(today); 