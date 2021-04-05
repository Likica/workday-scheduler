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
    $('.time-block').each(function () {
        var id = $(this).attr('id');
        var textarea = localStorage.getItem(id);

        if (textarea !== null) {
            $(this).children('.textarea').val(textarea);
        }
    });

}
runMyScheduler();

// saveBtn function & localStorage
var saveBtn = $('.saveBtn');

saveBtn.on('click', function () {
    var time = $(this).parent().attr('id');
    var textarea = $(this).siblings('.textarea').val();

    localStorage.setItem(time, textarea);
});

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
//saveBtn Handler
function saveBtnHandler() {

    var $thisBlock = $(this).parent();

    var timeToUpdate = $(this).parent().attr('time');
    var itemToAdd = (($(this).parent()).children('textarea')).val();

    for (var i = 0; i < toDoItems.length; i++) {
        if (toDoItems[i].time == timeToUpdate) {
            toDoItems[i].text = itemToAdd;
        }
    }
    localStorage.setItem('todos', JSON.stringify(toDoItems));
    runMyScheduler();
}

$(document).ready(function () {
    colorizeTimeblocks();
    runMyScheduler();

    if (!localStorage.getItem('todos')) {
        runMyScheduler();
    }

    // $currentDay.text(currentDay);
    $taskArea.on('click', 'button', saveBtnHandler)
});


