$(document).ready(function(){
    var video = $('#video')[0];
    var obj;
    $.ajax({ 
        type: 'GET',
        contentType: "application/json; charset=utf-8",
        url: 'data.json',
        dataType: "json",

        success: function (data) {
    		obj = data;
        	console.log("successful read");
        }
    });

    video.ontimeupdate = function() {
      var found = false;
      var objFound;
      for(var i = 0; i < obj.length; i++){
        if((video.currentTime > obj[i].sTime) && (video.currentTime < obj[i].eTime)){
          objFound = obj[i];
          found = true;
        }
      }
       if(found){
          document.getElementById('name').innerHTML = objFound.name;
          document.getElementById('img').src = objFound.img;
	  $('#overlay').css("visibility", "visible");
       }else{
          document.getElementById('name').innerHTML = "";
          document.getElementById('img').src = "";
	  $('#overlay').css("visibility", "hidden");

       }
    };
});
