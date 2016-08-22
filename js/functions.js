 function printData( feeds_url = '' ){ 
	var api ; 
	if(feeds_url == '')
		api ="http://mgovmagazine.com/export2.php"; 
	else
		api = "http://mgovmagazine.com/export2.php?rss_mod_id="+feeds_url ;
 
	 
}

$(function(){
	$('#My_data').html('should update 1 ');  
})
