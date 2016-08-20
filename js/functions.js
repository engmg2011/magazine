function printData(){ 
	api ="http://mgovmagazine.com/export2.php"; 
	//api ="http://localhost/mgov/export2.php"; 
	$('#My_data').html('<img src="icon.png" class="waiting-logo imageSpin" />');
	
	$.get(api, function(data) {
		$('#My_data').html('');
	    var $xml = data; 
		obj = JSON && JSON.parse($xml) || $.parseJSON($xml);  
	    
		obj.forEach(function(item){  
			//console.log(item.title[0]);
			console.log(item.link[0]);
			$('#My_data').append('<div class="content_item">\
				<div class="img">\
					<a href="#popup" onclick="openNews(\''+item.link[0]+'\' ,\''+item.title[0]+'\' )" data-role="button" data-rel="dialog" data-transition="pop">\
						<img src="'+item.image[0]+'" />\
					</a>\
				</div>\
				<a href="#popup" onclick="openNews(\''+item.link[0]+'\' ,\''+item.title[0]+'\' )" data-role="button" data-rel="dialog" data-transition="pop">\
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
				<a href="http://mgovmagazine.com/pdf/files/'+item+'">\
					<h3 class="title pdf-title"><i class="fa fa-file-pdf-o"></i> تصفح عدد '+itemname+'</h3>\
				</a>\
			</div> '); 
		}); 
	});  
}

function openNews(link , title){
	//<iframe src="'+link+'" /></iframe>
	$('#newsFrame').html('<iframe id="newsShow" src="'+link+'" /></iframe>');
	$('#newsTitle').html(title);
}


$(function(){
	printData();
})