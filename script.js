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

	video.addEventListener('seeking', function(){
		//$('#overlay').css("visibility", "hidden");

	});

    video.addEventListener('playing', function(){
        $('#overlay').fadeOut();
		$('#overlay').css("visibility", "hidden");
    });
    video.addEventListener('pause', function(){
		
	 	if(!video.seeking){
	 		var found = false;
 			var objFound;
	 		for(var i = 0; i < obj.length; i++){
	 	 		if((video.currentTime > obj[i].sTime) && (video.currentTime < obj[i].eTime)){
	 	 			objFound = obj[i];
	 	 			found = true;
	 	 		}
	 	 	}
           if(found){
           		$('#overlay').css("visibility", "visible");
				$('#overlay').fadeIn();
           		/*document.getElementById('overlay').innerHTML 
           		= "<div class='outer'>"+
           		"<div id='left'><div class = 'inner'>"+objFound.name + "</div>"+
           		"<div class = 'inner'><img class='inner' src='"+
           		objFound.img+
           		"' width='20%'/></div></div>"+
           		"<div id='right'>Hello</div>"
           		+"</div>";*/
           		document.getElementById('name').innerHTML = objFound.name;
           		document.getElementById('img').src = objFound.img;
           }
       }
    });
});