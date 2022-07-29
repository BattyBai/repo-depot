// START JQUERY AND JS CODE
$(() => {

    
    $("#resumeButton").on('click', clickResume);
    $("#homeButton").on('click', clickHome);
    $("#projectButton").on('click', clickProject);
    $("#contactButton").on('click', clickContact);

   
    $(".topbutton").hover(function(){
        $(this).css("background-color", "yellow");
        }, function(){
        $(this).css("background-color", "");
      })
    
    })