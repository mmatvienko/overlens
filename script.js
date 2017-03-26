$(document).ready(function(){
    var addr;
    var userObj;
    var objArr;
    $.ajax({
	url: './getaddr.php',
	success: function(data) {
	    addr = data;
	    //initialize userObj
	    userObj = new user(addr,0,0,0);
	    console.log(userObj);
	    //initialie array of user obj
	    
	    $.ajax({ 
		type: 'GET',
		contentType: "application/json; charset=utf-8",
		url: 'tracking1.json',
		dataType: "json",

		success: function (data) {
    		    objArr = data;
		}
	    });

	}
    });
    function user(ip, paused, bought, secondary) {
	this.paused = paused;
	this.bought = bought;
 	this.ip = ip;
	this.secondary = secondary;
    }


    var video = $('#video')[0];
    var obj;
    $.ajax({ 
        type: 'GET',
        contentType: "application/json; charset=utf-8",
        url: 'data.json',
        dataType: "json",

        success: function (data) {
    		obj = data;
        }
    });


    var bbutton = $('#bbutton')[0];
    bbutton.addEventListener("click",function(){
	userObj.bought = userObj.bought + 1;
    });
    
    var obutton = $('#obutton')[0];

    obutton.addEventListener("click",function(){
	userObj.secondary = userObj.secondary + 1;
    });


    
    video.addEventListener('playing', function(){
        $('#overlay').fadeOut();
		$('#overlay').css("visibility", "hidden");
    });
       
    window.onbeforeunload = function (e) {
	e = e || window.event;
	objArr.push(userObj);
	//push data
	$.ajax
	({
	    type: "GET",
	    dataType : 'json',
	    async: false,
	    url: './json1.php',
	    data: { data: JSON.stringify(objArr) },
	    success: function () {alert("Thanks!"); },
	    failure: function() {alert("Error!");}
	});
	console.log(objArr);
	//end push data
	//return "Sure?";
    }

    video.addEventListener('pause', function(){
		userObj.paused = userObj.paused + 1;
	console.log(userObj);
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
           		document.getElementById('name').innerHTML = objFound.name;
           		document.getElementById('img').src = objFound.img;
           		document.getElementById('purchase').href = objFound.link;
           }
       }
    });
});
