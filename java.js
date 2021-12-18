//document.getElementById("menubtn").onclick=function(){
//    document.getElementById("menubar").style.display="block";
//}
//
//document.getElementById("close").onclick=function(){
//     document.getElementById("menubar").style.display="none";
//}

$(function(){
    $("#menubtn").click(function(){
       $("#menubar").slideToggle(1000); 
    });
});

$(function(){
    $("#close").click(function(){
       $("#menubar").slideToggle(1000); 
    });
});