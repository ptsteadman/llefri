$(document).ready(function(){

  // functions
  function hideAll(){
    $(".about").hide();
    $(".credits").hide();
    $(".photos").hide();
  }

  function showPhotos(index){
    $(".photos").html("");
    $(".photos").show();
     for(var i = (index * 100) + 1; i <= ((index + 1) * 100); i++){
       var img_url = i + ".jpg"; 
       while(img_url.length < 8){
          img_url = "0" + img_url;
       }
       var img = $("<img></img").attr("src", "../assets/" + img_url).css("width", "100%");
       $(".photos").append(img);
       $(".photos").append("<p class='caption'>Photo No. " + img_url.substring(0,4) + "</p>");
       $(".photos").append("<br><br>");
     }
  }

  function showPhoto(index){
   //
  }

  function underlineIndex(index){
    $(".photo-menu li").css("text-decoration", "none");
    $(".photo-menu li").eq(index).css("text-decoration", "underline");
  }
  
  // handle window location hash
  if(location.hash){
    var index = location.hash.substring(1);
    showPhotos(index);
    underlineIndex(index);
  } else {
    showPhotos(0);
    underlineIndex(0);
  }
  
  // event listeners

  $(".photo-menu li").click(function(){
     var index = $(".photo-menu li").index(this); 
     underlineIndex(index);
     if(history.pushState){
       history.pushState(null, null, "#" + index);
     } else {
       location.hash = "#" + index;
     }
     showPhotos(index);
   }); 

  $("#about").click(function(){ hideAll(); $(".about").show(); }); 
  $("#credits").click(function(){ hideAll(); $(".credits").show(); }); 
});
