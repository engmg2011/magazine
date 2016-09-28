$('.zoomin').click(function(){
	$('h3.title').css('font-size','+=2px'); 
	$('div.text').css('font-size','+=2px');  
})
$('.zoomout').click(function(){
	$('h3.title').css('font-size','-=2px'); 
	$('div.text').css('font-size','-=2px'); 
})
 

	/*---------- Zooming the page2 -----------*/
// Bind the swipeHandler callback function to the swipe event on div.box
$( "#two .image" ).on( "swiperight", zoomIn );

// Callback function references the event target and adds the 'swipe' class to it
function zoomIn( event ){
	$( event.target ).css('width','+=25%');
	$( event.target ).css('margin-left','-=12.5%');
	$( event.target ).css('margin-right','-=12.5%');
}

// Bind the swipeHandler callback function to the swipe event on div.box
$( "#two .image" ).on( "swipeleft", zoomOut );

// Callback function references the event target and adds the 'swipe' class to it
function zoomOut( event ){ 
	$( event.target ).css('width','-=25%'); 
	$( event.target ).css('margin-left','+=12.5%');
	$( event.target ).css('margin-right','+=12.5%');
}

var tapped=false
$("#two .image").on("touchstart",function(e){
    if(!tapped){ //if tap is not set, set up single tap
      tapped=setTimeout(function(){
          tapped=null
          //insert things you want to do when single tapped
      },300);   //wait 300ms then run single click code
    } else {    //tapped within 300ms of last tap. double tap
      clearTimeout(tapped); //stop single tap callback
      tapped=null;
      zoomIn(e);
      zoomIn(e);
      //insert things you want to do when double tapped
    }
    e.preventDefault()
});
