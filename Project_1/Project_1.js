const whereWorked = ["Place 1", "Place 2", "Placed 3", "Place 4"]
$(() => {
    const $resume_ul = $("<ul>");
    $("nav").append($resume_ul);
   
    for (let i = 0; i < whereWorked.length; i++) {
        const $resume_li = $("<li>");
        $resume_li.addClass("resumebullet").text(whereWorked[i]);
        $($resume_ul).append($resume_li)
    } 

    $resume_ul.hide()

    const clickResume = () => {
        $("#aboutme").hide(1000)
        $resume_ul.show(900)
       
}

$("#resume").on('click', clickResume);

})