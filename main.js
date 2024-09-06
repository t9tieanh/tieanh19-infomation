document.addEventListener("DOMContentLoaded", function() {
    var introDiv = document.getElementById("introDiv");
    var mainForm = document.getElementById("mainForm");
    var otherElement = document.getElementById("other-element")
    introDiv.style.opacity = 1;

    introDiv.style.display = "none";
        mainForm.style.display = "block";
        otherElement.style.display = "block" ;

    // setTimeout(function() {
    //     introDiv.style.display = "none";
    //     mainForm.style.display = "block";
    //     otherElement.style.display = "block" ;
    // }, 2000);
});