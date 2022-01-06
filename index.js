const CLIENT_ID:'791324931321-okgh1io57np01mqh7jpbjfvc1kgoruu4.apps.googleusercontent.com';

var menuIcon=document.querySelector(".menu");
var sidebar=document.querySelector(".sidebar");
var container=document.querySelector(".container");

menuIcon.onclick=function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}