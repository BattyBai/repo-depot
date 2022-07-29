// START JQUERY AND JS CODE
$(() => {
const clickHome = () => {
    $(".resume").slideUp(1000);
    $(".about-me").slideUp(1000);
}
const clickAboutMe = () => {
    $(".resume").slideUp(1000);
    $(".about-me").slideDown(900);
}
const clickResume = () => {
$(".about-me").slideUp(1000);
$(".resume").slideDown(900);
}
    $("#home").on('click', clickHome);
    $("#aboutme").on('click', clickAboutMe);
    $("#resume").on('click', clickResume);
    // $("#contactButton").on('click', clickContact);

   
    // $(".topbutton").hover(function(){
    //     $(this).css("background-color", "yellow");
    //     }, function(){
    //     $(this).css("background-color", "");
    //   })
    

    })