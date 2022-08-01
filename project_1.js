// START JQUERY AND JS CODE
$(() => {
// ON LOAD, HIDES ALL ELEMENTS FOR THE SPLASH PAGE
$(".resume").hide()
$(".about-me").hide()
$(".project").hide()
$(".dropdown").hide()

// BUTTON FUNCTIONALITY. WHEN CLICKLING, SLIDES UP OR DOWN (HIDE/SHOWS) THE CURRENT TOPIC CLICKED 
const clickHome = () => {
    $(".resume").slideUp(1000);
    $(".about-me").slideUp(1000);
    $(".project").slideUp(1000);
}
const clickAboutMe = () => {
    $(".resume").slideUp(1000);
    $(".project").slideUp(1000)
    $(".about-me").slideDown(900);
}
const clickResume = () => {
    $(".about-me").slideUp(1000);
    $(".project").slideUp(1000);
    $(".resume").slideDown(900);
}

const clickRPS = () => {
    $(".about-me").slideUp(1000);
    $(".resume").slideUp(1000);
    $(".project").slideDown()
}
// HOVER FUNCTIONALITY FOR THE NAVIGATION BAR AND DROP DOWN MENU
const $hoverColor= () => {
    $(".topbutton").hover(
        function(){
            $(this).css("background", "gray");
    },
        function(){
            $(this).css("background","transparent");
    });
    $(".push").hover(
        function(){
            $(this).css("background", "gray");
    },
        function(){
            $(this).css("background","transparent");
    });
    $(".projectA").hover(
        function(){
            $(this).css("background", "gray");
    },
        function(){
            $(this).css("background","transparent");
    });
}

// SINCE NAVBAR CONSISTS OF DIVS AND NOT BUTTON TYPES, HAD TO MAKE THE CURSOR CHANGE TO A POINTER TO INDICATE THEY WERE BUTTONS 
const $hoverPointer = () => {
    $(".topbutton").hover(
        function() {
            $(this).css('cursor','pointer');
    }, 
        function() {
            $(this).css('cursor','auto');
    });
    $(".push").hover(
        function() {
            $(this).css('cursor','pointer');
    }, 
        function() {
            $(this).css('cursor','auto');
    });
}



// HOVER OVER FOR DROP DOWN MENU FUNCTIONALITY. WHEN NOT. USED SHOW/HIDE INSTEAD OF SLIDE METHOD. WHEN USING SLIDE, BUGS OCCUERED WITH CHILD DIVS (CONSTANT UP/DOWN INFINITELY)
const $hoverDropDown = () => {
    $("#project, .dropdown").hover(
        function(){
            $(".dropdown").show()
    },   
        function(){
            $(".dropdown").hide()
    }   
    )
}

//CLICK INSTEAD OF HOVER WHEN ON MOBILE
const $clickDropDown = () => {
    $("#project").click(
        function(){
            $(".dropdown").slideToggle()
    },
  )
}

// MEDIA QUERY THAT DETERMINES IF THE SCREEN SIZE IS BELOW A CERTAIN AMOUNT, USE THE CLICK FUNCTION INSTEAD OF HOVER
const $mediaQuery = () => {
    if(window.matchMedia("(max-width: 767px)").matches){
        // The viewport is less than 768 pixels wide
        $clickDropDown();
    } else{
        // The viewport is at least 768 pixels wide
        $hoverDropDown();
    }
};

// Rock Paper Scissors JS Function
// ===============================

// ARRAY FOR COMPUTER TO "CHOOSE"
const options = ["rock", "paper", "scissors"];
// COMPUTER RANDOM CHOICE FUNCTION 
let computerChooses = () => {
  return options[Math.floor(Math.random() * 3)]
};
// COMPARING THE CHOICES AND RETURNING THE RESULT
compareChoices = (userChoice, computerChoice) => {
    if (userChoice === computerChoice){
      return (`It's a tie! You chose ${userChoice} and the computer chose ${computerChoice}. Play again?`)
    } else if (userChoice === options[0] && computerChoice === options[2] ||
               userChoice === options[1] && computerChoice === options[0] || 
               userChoice === options[2] && computerChoice === options[1]) {
      return (`You won! You chose ${userChoice} and the computer chose ${computerChoice}. Play again?`)
    } else {
      return (`You lost. You chose ${userChoice} and the computer chose ${computerChoice}. Play again?`)
    }
} 


// JQUERY CONNECTED TO THE ABOVE
    $("#home").on('click', clickHome);
    $("#aboutme").on('click', clickAboutMe);
    $("#resume").on('click', clickResume);
    $(".projectA").on('click', clickRPS)
    $(".topbutton").on('hover', $hoverColor());

//ROCK PAPER SCISSORS RESULT TO USE IN THE DOM AND SHOW USER
// USER CHOOSES ROCK PAPER OR SCISSORS WITH BUTTON ON PAGE 
// EACH BUTTON TRIGGERS THE RPS FUNCTION WITH A THE ASSOCIATED BUTTON ARGUMENT AND COMPUTER "CHOICE"; COMPARES THEM. 
    $("#paper").on('click', function(){
        let result = compareChoices("paper", computerChooses());
        $("#resultContainer").text(result)
    });
    $("#rock").on('click', function(){
        let result = compareChoices("rock", computerChooses());
        $("#resultContainer").text(result)
    });
    $("#scissors").on('click', function(){
        let result = compareChoices("scissors", computerChooses());
        $("#resultContainer").text(result)
    });

//ADDED THESE HERE, BECUASE I NEED TO CALL THEM FOR THEM TO WORK. DIDN'T KNOW WHERE TO PUT THEM. I GUESS I COULD PUT THEM UP ABOVE.  
    $mediaQuery()
    $hoverPointer()


   
  

})