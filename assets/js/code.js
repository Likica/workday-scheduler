// var $currentDay = $('#currentDay');
var $timeBlocks = $('.time-block');
var $taskArea = $('.tasks');
var $saveBtn = $('.saveBtn');
var time = moment();

// tasks counter
toDoItems = [];


// START Subtitle Date
//Add date below Subtitle
var today = new Date();
var date = (today.getMonth() + 1) + '-' + today.getDate() + '-' + today.getFullYear();
// var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds(); ***DO NOT NEED THIS***
var date = date + ' ';
document.getElementById('currentDay').innerHTML = date;
// END subtitle Date


// begin function for scheduling tasks
function runMyScheduler() {
    // set up localStorage
    // $('#currentDay').text(moment().format('dddd, MMMM Do'));

    $('.time-block').each(function () {
        var id = $(this).attr('id');
        var textarea = localStorage.getItem(id);

        if (textarea !== null) {
            $(this).children('.textarea').val(textarea);
        }
    });

}
runMyScheduler();


// colorize timeblocks
function colorizeTimeblocks() {
    hour = time.hours();
    $('.time-block').each(function () {
        var thisHour = parseInt($(this).attr('id'));

        if (thisHour > hour) {
            $(this).addClass('future').removeClass('past present');
        }
        else if
            (thisHour === hour) {
            $(this).addClass('present').removeClass('past future');
        }
        else {
            $(this).addClass('past').removeClass('present future');
        }
    })
}
colorizeTimeblocks();
// $timeBlocks.each(function () {
//     var $thisBlock = $(this);
//     var thisBlockTime = parseInt($thisBlock.attr('time'));
//     var todoObj = {
//         time: thisBlockTime,
//         text: '',
//     }
//     toDoItems.push(todoObj);
// });
// add localStorage
//     localStorage.setItem('todos', JSON.stringify(toDoItems));
// }

// // Add date,time and formatting for tasks
// var curentDay = moment().format('dddd, MMMM Do');
// var currentTime = moment().format('H');

// var colorTimeBlocks = function () {
//     var currentHour = moment().hour()

//     for (var i = 6; i < 15; i++) {
//         var tasks = $('task -' + i)
//     } if (currentHour > i) {
//         $(tasks).addClass('past').removeClass('present future');
//     }
//     else if
//         (currentHour === i) {
//         $(tasks).addClass('present').removeClass('past future');;
//     } else {
//         $(tasks).addClass('future').removeClass('present past');;
//     }
// }

// // Colorize time blocks
// function colorizeTimeBlocks() {
//     $timeBlocks.each(function () {
//         var $thisBlock = $(this);
//         var thisBlockTime = parseInt($thisBlock.attr('time'));

//         // if task is in past time, remove other classes and display only past classs (color)
//         if (thisBlockTime < currentTime) {
//             $thisBlock.addClass('past').removeClass('present future');
//         }
//         // if task is in present time, remove other classes and display only present classs (color)
//         else if (thisBlockTime = currentTime) {
//             $thisBlock.addClass('present').removeClass('past future');
//         }
//         // if task is in future time, remove other classes and display only future classs (color)
//         else if (thisBlockTime > currentTime) {
//             $thisBlock.addClass('future').removeClass('past present');
//         }
//     });




