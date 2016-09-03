var postsData = [] ;
function printData(feeds_url ){ 
	var api ; 
	if(feeds_url == ''){
		api ="http://mgovmagazine.com/export2.php?rss_mod_id=424"; 
		//api ="http://localhost/mgov/export2.php"; 
	}
	else{
		//api = "http://localhost/mgov/export2.php?rss_mod_id="+feeds_url ;
		api = "http://mgovmagazine.com/export2.php?rss_mod_id="+feeds_url ;
	}
 
	$('#My_data').html('<img src="icon.png" class="waiting-logo imageSpin" />');
	
	$.get(api, function(data) {
		$('#My_data').html('');
	    var $xml = data; 
		obj = JSON && JSON.parse($xml) || $.parseJSON($xml);  
	    
		obj.forEach(function(item){  
			title = item.title[0];
			titlefree =  title.replace(/'/g, ""); 
			titlefree =  title.replace(/"/g, "");
			myContent = item.content[0];

			if (typeof myContent !== 'undefined') {
				myContent = myContent.replace("." , ". <br>");
			}
			postsData.push({
		        title: item.title[0],
		        link: item.link[0],
		        content: myContent,
		        image: item.image[0]
		    }); 
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

function printPDFData(){ 

	$('#My_data').html('<img src="icon.png" class="waiting-logo imageSpin" />');
	api ="http://mgovmagazine.com/pdf/index.php"; 
	//api ="http://localhost/test/filenames/index.php"; 
	
	$.get(api, function(data) {
		$('#My_data').html('');  
	    
		for( i=1 ; i<11 ; i++){  
			//console.log(item); 
			titlefree = 'العدد رقم '+i; 
			//$('#My_data').append(item); 
			$('#My_data').append('<div class="content_item">\
				<div class="img">\
					<a  onclick="openNews(\''+item.link[0]+'\' ,\''+titlefree+'\' )" data-role="button" data-rel="dialog" data-transition="pop">\
						<img src="'+item.image[0]+'" />\
					</a>\
				</div>\
				<a onclick="openNews(\''+item.link[0]+'\' ,\''+titlefree+'\' )" data-role="button" data-rel="dialog" data-transition="pop">\
						<h3 class="title">'+titlefree+'</h3>\
				</a>\
				<h6 class="time">'+item.pubDate+'</h6>\
			</div> ');
		} 
	});  
}

function openNews(link , title){
	// console.log(link); 
	var result = $.grep(postsData, function(e){ return e.link == link; });
	// console.log(result); 
	$('#slide_button').trigger('click');  
	$('#two>.content>.title').html(result[0].title);
	$('#two>.content>.text').html(result[0].content);
	$('#two>.content>.image').html(' <img src="'+result[0].image+'" />'); 
} 

function printIssues(){ 
	var api ;  
	api ="http://mgovmagazine.com/xml.php"; 
	//api ="http://localhost/test/xml/issues-xml.php";  

	$('#My_data').html('<img src="icon.png" class="waiting-logo imageSpin" />');
	
	$.get(api, function(data) {
		$('#My_data').html(''); 

		parser = new DOMParser(); 
		xmlDoc = $.parseXML( data ) 
		$xml = $( xmlDoc ),
		issues = $xml.find( "issue" ); 
		//console.log(issues);
		issues.each(function(){ 
		    var id = $(this).find('id').text(),
		        title = $(this).find('title').text(),
		        thumb = $(this).find('thumb').text(),
		        itemlink = $(this).find('itemlink').text();
		    $('#My_data').append('\
		    	<div class="issue">\
		    		<div class="title"><a onclick="openIssue(\''+itemlink+'\',\''+title+'\')"><h3>'+title+'</h3></a></div>\
		    		<div class="thumb"><a onclick="openIssue(\''+itemlink+'\',\''+title+'\')"><img src="'+thumb+'" /></a></div>\
		    	</div>');
			//console.log(title);
		})

	});  
}
 
function openIssue(link , title){
	 $('#popup_button').trigger('click');
	 title = title ;
	 $('#issueTitle').html(title);
	 $('#issueFrame').html('<iframe id="currentIssue" src="'+link+'" ></iframe>');
} 

function getFeeds(feeds_url_id  ){  
	$('.goback').trigger('click');
	$('#megamenu>.header').css('background','#eee url("images/'+feeds_url_id+'.jpg") 0px no-repeat');  
	$('#one>.ui-header').css('background','#eee url("images/'+feeds_url_id+'.jpg") 0px no-repeat'); 
	$('#one>.ui-header').css('background-size','100%'); 
	if(feeds_url_id == "") $('#one>.ui-header').css('background','#eee url("images/image.jpg") 0px no-repeat'); 
	printData(feeds_url_id);  
	megaMenuAction()
}

function getIssues(){
	$('.goback').trigger('click');
	$('#megamenu>.header').css('background','#eee url("images/pdf.jpg") 0px no-repeat');  
	$('#one>.ui-header').css('background','#eee url("images/pdf.jpg") 0px no-repeat'); 
	$('#one>.ui-header').css('background-size','100%'); 
	printIssues();  
	megaMenuAction() 
}
 
$('.showHome').click(function(e){   
	megaMenuAction();
})
$('.sideMenu>li').click(function(){ 
	catname = $(this).children('a').html();
	$('.info').html(catname);
	$('.sideMenu>li').removeClass('active');
	$(this).addClass('active');
})
$('.return_home').click(function(){
	megaMenuAction();
})
$('.overlay').click(function(){
	megaMenuAction();
})

function megaMenuAction(){
	$("#megamenu").animate({width:'toggle'},350);
	$(".ui-content").toggleClass('disable-scrolling'); 
}
$(function(){
 	printData('');
})
