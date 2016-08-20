function printData(){
	
	//FEED_URL = 'http://www.mgovmagazine.com/component/k2/itemlist?format=feed&amp;type=rss' ;

	api ="http://mgovmagazine.com/export2.php"; 
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
			$('#My_data').append('<div class="content_item">\
				<div class="img">\
					<a  onclick="openNews(\''+item.link[0]+'\' ,\''+titlefree+'\' )" data-role="button" data-rel="dialog" data-transition="pop">\
						<img src="'+item.image[0]+'" />\
					</a>\
				</div>\
				<a onclick="openNews(\''+item.link[0]+'\' ,\'sssssssss\' )" data-role="button" data-rel="dialog" data-transition="pop">\
						<h3 class="title">'+titlefree+'</h3>\
				</a>\
				<!--h4 class="description">'+titlefree+'</h4-->\
				<h6 class="time">'+item.pubDate[0]+'</h6>\
			</div> ');
		}); 
	});  
}

function printPDFData(){ 

	$('#My_data').html('<img src="icon.png" class="waiting-logo imageSpin" />');
	api ="http://mgovmagazine.com/pdf/index.php"; 
	//api ="http://localhost/test/filenames/index.php"; 
	
	$.get(api, function(data) {
		$('#My_data').html('');
	    var $xml = data; 
		obj = JSON && JSON.parse($xml) || $.parseJSON($xml);  
	    
		obj.forEach(function(item){  
			//console.log(item); 
			itemname = item.replace(".pdf", "");
			//$('#My_data').append(item);
			$('#My_data').append('<div class="content_item">\
					<h3 class="title pdf-title"><i class="fa fa-file-pdf-o"></i>\
						<a href="http://mgovmagazine.com/pdf/files/'+item+'">\
							تصفح عدد '+itemname+' \
						</a>\
					</h3>\
			</div> '); 
		}); 
	});  
}

function openNews(link , title){
	console.log(link);
	console.log(title);
	$('#popup_button').trigger('click'); 
	$('#newsFrame').html('<iframe id="newsShow" src="'+link+'" /></iframe>');
	$('#newsTitle').html(title);
}


$(function(){
	printData();
})
