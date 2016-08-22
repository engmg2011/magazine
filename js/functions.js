 function printData(feeds_url = ''){ 
	var api ; 
	if(feeds_url == '')
		api ="http://mgovmagazine.com/export2.php"; 
	else
		api = "http://mgovmagazine.com/export2.php?rss_mod_id="+feeds_url ;

	//console.log(api );
	//api ="http://localhost/mgov/export2.php"; 
	$('#My_data').html('<img src="icon.png" class="waiting-logo imageSpin" />');
	
	$.get(api, function(data) {
		$('#My_data').html('');
	    var $xml = data; 
		obj = JSON && JSON.parse($xml) || $.parseJSON($xml);  
	    
		obj.forEach(function(item){  
			title = item.title[0];
			titlefree =  title.replace(/'/g, "");; 
			titlefree =  title.replace(/"/g, "");; 
			//console.log(titlefree);
			//console.log(item.link[0]);
			//console.log(item);
			$('#My_data').append('<div class="content_item">\
				<div class="img">\
					<a  onclick="openNews(\''+item.link[0]+'\' ,\''+titlefree+'\' )" data-role="button" data-rel="dialog" data-transition="pop">\
						<img src="'+item.image[0]+'" />\
					</a>\
				</div>\
				<a onclick="openNews(\''+item.link[0]+'\' ,\''+titlefree+'\' )" data-role="button" data-rel="dialog" data-transition="pop">\
						<h3 class="title">'+titlefree+'</h3>\
				</a>\
				<!--h4 class="description">'+titlefree+'</h4-->\
				<h6 class="time">'+item.pubDate+'</h6>\
			</div> ');
		}); 
	});  
}

$(function(){
	$('#My_data').html('should update 1 ');  
})
