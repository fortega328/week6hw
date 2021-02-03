$(document).ready(function(){

    $(".saveBtn").on("click", function(){
        var activity = $(this).siblings(".description").val()
        console.log(activity)
        var hour = $(this).parent().attr("data-hour")
        console.log(hour);
        localStorage.setItem(hour, activity)
        console.log(localStorage)
    })


$("#hour-9 .description").val(localStorage.getItem("9"))

})