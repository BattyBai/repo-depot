// START JQUERY AND JS CODE
$(() => {

$(".resume").hide()
$(".about-me").hide()
$(".project").hide()
    // BUTTON FUNCTIONALITY. WHEN CLICLING, SLIDES UP OR DOWN (HIDE/SHOWS) THE CURRENT TOPIC CLICKED 
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

const $hoverColor= () => {
    $(".topbutton").hover(
        function(){$(this).css("background", "gray");
    },
        function(){$(this).css("background","transparent");
    });
    $(".push").hover(
        function(){$(this).css("background", "gray");
    },
        function(){$(this).css("background","transparent");
    });
}

const $hoverPointer = () => {
    $(".topbutton").hover(
        function() {$(this).css('cursor','pointer');
    }, 
        function() {$(this).css('cursor','auto');
    });
    $(".push").hover(
        function() {$(this).css('cursor','pointer');
    }, 
        function() {$(this).css('cursor','auto');
    });
}


// FUNCTIONS CONNECTED TO THE ABOVE
    $("#home").on('click', clickHome);
    $("#aboutme").on('click', clickAboutMe);
    $("#resume").on('click', clickResume);
    $(".topbutton").on('hover', $hoverColor())
    $(".topbutton").on('hover', $hoverPointer())

    // $("#contactButton").on('click', clickContact);

   
    // $(".topbutton").hover(function(){
    //     $(this).css("background-color", "yellow");
    //     }, function(){
    //     $(this).css("background-color", "");
    //   })


    

    })