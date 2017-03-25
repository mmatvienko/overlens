$(document).ready(function(){
    var video = $('#video')[0];
    var obj;
    var json = '{"sTime":0,"eTime":60,'+
    			'"name":"Patagonia","img":"jacket.jpg"}',
    			 obj = JSON.parse(json);
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