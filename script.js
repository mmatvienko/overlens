$(document).ready(function(){
    var video = $('#video')[0];
	var obj = JSON.parse(text);
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