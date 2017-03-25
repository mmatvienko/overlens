$(document).ready(function(){
    var video = $('#video')[0];
    
    $.ajax({ 
        type: 'GET',
        contentType: "application/json; charset=utf-8",
        url: 'data.json',
        dataType: "json",

        success: function (data) {
        	alert(data[0].name);
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
           if((video.currentTime > obj.sTime) && (video.currentTime < obj.eTime)){
           		$('#overlay').css("visibility", "visible");
				$('#overlay').fadeIn();
           		document.getElementById('overlay').innerHTML 
           		= "<div class='outer'>"+
           		"<div id='left'><div class = 'inner'>"+obj.name + "</div>"+
           		"<div class = 'inner'><img class='inner' src='"+
           		obj.img+
           		"' width='20%'/></div></div>"+
           		"<div id='right'>Hello</div>"
           		+"</div>";
           }
       }
    });
});