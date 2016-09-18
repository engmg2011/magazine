// links for sharing
var sharing = {link:'http://mgovmagazine.com',title:'مجلة الحكومة الذكية',desc:'تابع أحدث أخبار مجلة الحكومة الذكية'} ;
console.log(sharing.link);
function setShare(){ 
    $('#buttons-expanded').html('<div class="inner" style="display: none;"></div>\
        <ul class="shareIcons">\
            <li><a onclick="window.location.href=\''+encodeURIComponent(window.sharing.link)+'\'"  class="ui-link"><img src="images/whatsapp.png" alt="" style="width: 16px; height: 16px; margin-top: 8px;"></a></li>\
            <li><a onclick="window.location.href=\'whatsapp://send?text='+encodeURIComponent(window.sharing.link)+'\'"  class="ui-link"><img src="images/whatsapp.png" alt="" style="width: 16px; height: 16px; margin-top: 8px;"></a></li>\
            <li><a onclick="window.location.href=\'whatsapp://send?text='+window.sharing.link+'\'"  class="ui-link"><img src="images/whatsapp.png" alt="" style="width: 16px; height: 16px; margin-top: 8px;"></a></li>\
            <li><a onclick="window.location.href=\'whatsapp://send?text=http://mgovmagazine.com\'"  class="ui-link"><img src="images/whatsapp.png" alt="" style="width: 16px; height: 16px; margin-top: 8px;"></a></li>\
            <li><a href="whatsapp://send?text='+encodeURIComponent(window.sharing.link)+'"  class="ui-link"><img src="images/whatsapp.png" alt="" style="width: 16px; height: 16px; margin-top: 8px;"></a></li>\
            <li><a href="whatsapp://send?text='+encodeURIComponent(window.sharing.link)+'" ><img src="images/whatsapp.png" alt="" style="width: 16px; height: 16px; margin-top: 8px;"></a></li>\
            <li><a href="whatsapp://send?text=http://mgovmagazine.com"  class="ui-link"><img src="images/whatsapp.png" alt="" style="width: 16px; height: 16px; margin-top: 8px;"></a></li>\
            <li><a href="whatsapp://send?text=\'http://mgovmagazine.com\'"  class="ui-link"><img src="images/whatsapp.png" alt="" style="width: 16px; height: 16px; margin-top: 8px;"></a></li>\
            <li><a href="http://www.facebook.com/share.php?u='+window.sharing.link+'" title="Share with Facebook" target="_blank" class="ui-link"><img src="images/facebook.png" alt="" style="width: 16px; height: 16px; margin-top: 8px;"></a></li>\
            </ul>');

}
mgovmagazine.com
setShare();
