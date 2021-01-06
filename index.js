/*
**************************************** FORMATE ***********************************************************************************

**************************************** Selecting Element **********************************************
JS  :-  document.queryselector("h1");
jQuery :- $("h1");

JS :- document.queryselectorAll("button");
jQuery :- $("button");

**************************************** Manipulate Style **********************************************
$("h1").css("color","red");
if we want to find value of this then simply write  console.log($("h1").css("color","red")); ---- Also font-size value...
$("h1").css("font-size","5rem");

**********

In styles.css we add style of big-title
.big-title{
color:yellow;
font-size:5rem;
font-family:cursive;
}
.margin-50{
margin:50px;
}
THis is better way to seperating Behaviour from styles.....
addClass
$("h1").addClass("big-title");       $("h1").addClass("big-title margin-50"); -----> Multiple class
removeClass
$("h1").removeClass("big-title");

**************************************** Manipulate Text **********************************************
$("h1").text("bye");
$("button").text("don't click me");
$("button").html("<em>Hey</em>");  -------> Using HTML instead of text ingnore <em> when run...

**************************************** Manipulate Attributes **********************************************

If we have <img> then we have src & in <a> we have href it's an Attributes.

$("img").attr("src");  -----> getAttribute to find value of Attributes.
$("a").attr("href" , "http://www.yahoo.com");  ----> getAttribute and also setAttribute.

Attributes also use to find class  --> like <h1 class="big-title margin-50">
 then console.log($("h1").attr("class"));

 **************************************** Adding EventListener **********************************************
CHECK EVENT LISTENER REFERENCE IN MDN

$("button").click(function(){
    $("h1").css("color","purple");
});

For Buttons As a click EventListener
JS:-  for(var i=0 ;i<5 ;i++){
                document.queryselectorAll("button")[i].addEventListener("click",function(){
                       document.queryselector("h1").style.color = "purple";
      });
}

jQuery:-  $("button").click(function(){
               $("h1").css("color","purple");
});

for keypress EventListener
$("input").keydown(function(event){
      console.log(event.key);
});

$(document).keydown(function(event){
  $("h1").text(event.key);
});

$("h1").on("mouseover",function(){
   $("h1").css("color","purple");
});

**************************************** Adding and Removing Element **********************************************

$("h1").before("<button>new</button>"); -------> Add button before h1 Tag
$("h1").after("<button>new</button>");  -------> Add button after h1 Tag
$("h1").prepend("<button>new</button>"); -------> Add button into h1 Tag but before h1
$("h1").append("<button>new</button>"); -------> Add button into h1 Tag but after h1

$("button").remove();

**************************************** Website Animation **********************************************

$("button").on("click",function(){
   $("h1").hide();
   $("h1").show();
   $("h1").toggle();
   $("h1").fadeOut();
   $("h1").fadeIn();
   $("h1").fadetoggle();
   $("h1").slideUp();
   $("h1").slideDown();
   $("h1").slideToggle();

   $("h1").animate({opacity :0.5}); ---> Only add css rules with numeric value in curly braces
   $("h1").slideUp().slideDown().animate({opacity :0.5});
});





















*/
$("button").on("click",function(){
  $("h1").slideUp().slideDown().animate({opacity :0.5});


});
$("h1").addClass("big-title margin-50");
