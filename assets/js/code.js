
var saveTask = document.querySelector('#saveBtn');
var taskInfoEl = document.querySelectorAll('#description');
var classList = document.getElementsByClassName('hour');
var currentTime = parseInt(moment().format('H'));

// START Subtitle Date
//Add date below Subtitle
var today = new Date();
var date = (today.getMonth() + 1) + '-' + today.getDate() + '-' + today.getFullYear();
// var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds(); ***DO NOT NEED THIS***
var date = date + ' ';
document.getElementById('currentDay').innerHTML = date;
// END subtitle Date

// enable user to input task description


// saveTask btn function


// CHECK TIME and COLORIZE PAST, PRESENT AND FUTURE 



