$(document).ready(function(){
    var video = $('#video')[0];
    var jsonFile = "data.json";
  
    var scene = {
	  "x": 0,
	  "y": 0,
	  "w": 11000,
	  "h": 3500
	};
		var obj = vid1.eTime;
	alert(scene.x);

    video.addEventListener('playing', function(){
           $('.overlay').fadeOut();
    })
    video.addEventListener('pause', function(){
           $('.overlay').fadeIn();
           if(video.currentTime > obj.sTime && 
           		video.currentTime < obj.eTime){
           		$('.overlay').update(obj.name);
           }
    })
})