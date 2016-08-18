function printData(){
	
	//FEED_URL = 'http://www.mgovmagazine.com/component/k2/itemlist?format=feed&amp;type=rss' ;

	//api ="http://mgovmagazine.com/export.php"; 
	api ="http://localhost/mgov/export2.php"; 
	$('#My_data').html('<img src="icon.png" class="waiting-logo imageSpin" />');
	
	$.get(api, function(data) {
		$('#My_data').html('');
	    var $xml = data; 
		obj = JSON && JSON.parse($xml) || $.parseJSON($xml);  
	    
		obj.forEach(function(item){  
			console.log(item.title[0]);
			$('#My_data').append('<div class="content_item">\
				<div class="img">\
					<img src="'+item.image[0]+'" />\
				</div>\
				<a href="'+item.link[0]+'">\
				<h3 class="title">'+item.title[0]+'</h3>\
				</a>\
				<!--h4 class="description">'+item.title[0]+'</h4-->\
				<h6 class="time">'+item.pubDate[0]+'</h6>\
			</div> ');
		}); 
	});  
}

function printPDFData(){ 

	$('#My_data').html('<img src="icon.png" class="waiting-logo imageSpin" />');
	//api ="http://mgovmagazine.com/export.php"; 
	api ="http://localhost/test/filenames/index.php"; 
	
	$.get(api, function(data) {
		$('#My_data').html('');
	    var $xml = data; 
		obj = JSON && JSON.parse($xml) || $.parseJSON($xml);  
	    
		obj.forEach(function(item){  
			console.log(item); 
			//$('#My_data').append(item);
			$('#My_data').append('<div class="content_item">\
				<a href="'+item+'">\
					<h3 class="title"> تصفح العدد '+item+'</h3>\
				</a>\
			</div> '); 
		}); 
	});  
}


$(function(){
	printData();
})