document.addEventListener("DOMContentLoaded", function(){
   console.log("Document is loaded");
    var page1 = document.querySelector(".pt-page-1");
    var page2 = document.querySelector(".pt-page-2");
    page1.classList.add("pt-page-current")
    page2.classList.add("pt-page-current");

    page1.classList.add("pt-page-rotateFoldTop");
    page2.classList.add("pt-page-fromBottom");
});
