$(document).ready(function(){
  function hideAll(){
    $(".about").hide();
    $(".credits").hide();
    $(".photos").hide();
  }

  $("#about").click(function(){ hideAll(); $(".about").show(); }); 
  $("#credits").click(function(){ hideAll(); $(".credits").show(); }); 
});
