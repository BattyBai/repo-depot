// ARRAYS TO BE USED 
const whereWorked = ["Work 1", "Work 2", "Work 3", "Work 4"]
const myProjects = ["Project 1", "Project 2", "Project 3"]
const contactInfoSubmit = ["isaacpure@gmail.com", "https://www.linkedin.com/in/isaacpure/"]

// START JQUERY AND JS CODE
$(() => {
// CREATES AND APPENDS ULs, THEN HIDES THEM IMMEDIATELY UPON LOAD
    const $resume_ul = $("<ul>").attr("id", "resume-ul");
     $("nav").append($resume_ul);
     $resume_ul.hide();

    const $project_ul = $("<ul>").attr("id", "project-ul");
    $("nav").append($project_ul);
    $project_ul.hide();

    const $contactSubmit_1 = $("<p>").text(contactInfoSubmit[0]).addClass("contact");
    $("nav").append($contactSubmit_1);
    $contactSubmit_1.hide();

    const $contactSubmit_2 = $("<p>").text(contactInfoSubmit[1]).addClass("contact");
    $("nav").append($contactSubmit_2);
    $contactSubmit_2.hide();
 
// FOR LOOP THAT CREATES THE LIs WITH RESUME POINTS
    for (let i = 0; i < whereWorked.length; i++) {
        const $resume_li = $("<li>").css("background", "red");
        $resume_li.addClass("resume_bullet").text(whereWorked[i]);
        $($resume_ul).append($resume_li)
    } 
    
    for (let i = 0; i < myProjects.length; i++) {
        const $project_li = $("<li>").css("background", "blue");
        $project_li.addClass("project_bullet").text(myProjects[i]);
        $($project_ul).append($project_li)
    } 

// UPON CLICK HIDES THE ABOUT ME PORTION
    
    const clickResume = () => {
        $("#aboutme").hide(1000);
        $("#project-ul").hide(1000);
        $(".contact").hide(1000);
        $resume_ul.show(900);
    }
       
    const clickHome = () => {
        $("#resume-ul").hide(1000);
        $("#project-ul").hide(1000);
        $(".contact").hide(1000);
        $("#aboutme").show(900)


    }
    const clickProject = () => {
        $("#aboutme").hide(1000);
        $("#resume-ul").hide(1000);
        $(".contact").hide(1000);
        $project_ul.show(900)
    }

    const clickContact = () => {
        $("#aboutme").hide(1000);
        $("#resume-ul").hide(1000);
        $("#project-ul").hide(1000);
        $contactSubmit_1.show(900)
        $contactSubmit_2.show(900)
    }

$("#resume").on('click', clickResume);
$("#home").on('click', clickHome);
$("#project").on('click', clickProject);
$("#contact").on('click', clickContact);

})