$(document).ready(function(){
   $('#navbar1 li').click(function() {
    $(this).addClass('active1');
    $(this).siblings().removeClass('active1');
}); 
})




$("#about").click(function(){
    $('html, body').animate({
        scrollTop: $(".about").offset().top
    }, 1000);
})


$("#contact").click(function(){
    $('html, body').animate({
        scrollTop: $(".contact").offset().top
    }, 1000);
})

$("#home").click(function(){
    $('html, body').animate({
        scrollTop: $(".home").offset().top
    }, 1000);
})

$("#team").click(function(){
    $('html, body').animate({
        scrollTop: $(".team").offset().top
    }, 1000);
})


/*$(window).click(function(){
    
    alert(window.pageYOffset)
})*/


/*

var h1 = document.getElementById("h1");
var h2 = document.getElementById("h2");
var h3 = document.getElementById("h3");
var num1 = parseInt(h1.textContent);
var num2 = parseInt(h2.textContent);
var num3 = parseInt(h3.textContent);
*/














/*function repeat()
{
    num1 = parseInt(h1.textContent);
    if (num1 >= 99)
            {
                clearInterval(int);
            }
    num1++;
    h1.textContent = num1;
    
}


var int

        window.onscroll = function()
        {
        if(window.pageYOffset >= 398)
          {
           int = setInterval(repeat,300);  
          }
       
    }

window.onclick = function ()
{
    alert(window.pageYOffset)
}*/