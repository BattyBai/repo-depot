// START JQUERY AND JS CODE
$(() => {
// GRABS IDs FROM ALL DIFFERENT SECTIONS AND HIDES EXCEPT BIO UPON LOAD
    // const $hideResume_id = $("#resume").hide()
    // const $hideProject_id = $("#projects").hide()
    // const  $hideContact_id = $("#contact-info").hide()


// // UPON CLICK HIDES THE ABOUT ME PORTION
    
    const clickResume = () => {
        $("#resume").show(900);
        $("#aboutme").hide(1000);
        $("#projects").hide(1000);
        $("#contact-info").hide(1000);
        
    }
       
    const clickHome = () => {
        $(".contact_info").hide(1000);
        $("#resume").hide(1000);
        $("#projects").hide(1000);
        $("#aboutme").show(900)

    }
    const clickProject = () => {
        $("#aboutme").hide(1000);
        $("#resume").hide(1000);
        $("#contact-info").hide(1000);
        $("#projects").show(900);
    }
    const clickContact = () => {
        $("#aboutme").hide(1000);
        $("#resume").hide(1000);
        $("#projects").hide(1000);
        $("#contact-info").show(900);
    }

$("#resumeButton").on('click', clickResume);
$("#homeButton").on('click', clickHome);
$("#projectButton").on('click', clickProject);
$("#contactButton").on('click', clickContact);

})