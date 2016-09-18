// links for sharing
var sharing = {link:'http://mgovmagazine.com',title:'مجلة الحكومة الذكية',desc:'تابع أحدث أخبار مجلة الحكومة الذكية'} ;
console.log(sharing.link);
function setShare(){ 
    $('#buttons-expanded').html('<div class="inner" style="display: none;"></div>\
        <ul class="shareIcons">\
            <li><a href="whatsapp://send?text='+window.sharing.link+'" target="_blank" class="ui-link"><img src="images/whatsapp.png" alt="" style="width: 16px; height: 16px; margin-top: 8px;"></a></li>\
            <li><a href="http://www.facebook.com/share.php?u='+window.sharing.link+'" title="Share with Facebook" target="_blank" class="ui-link"><img src="images/facebook.png" alt="" style="width: 16px; height: 16px; margin-top: 8px;"></a></li>\
            <li><a href="http://twitter.com/home?status='+window.sharing.title+''+window.sharing.link+'" title="Share with Twitter" target="_blank" class="ui-link"><img src="images/twitter.png" alt="" style="width: 16px; height: 16px; margin-top: 8px;"></a></li>\
            <li><a href="http://delicious.com/save?url='+window.sharing.link+'&amp;amp;title='+window.sharing.title+'" title="Share with Delicious" target="_blank" class="ui-link"><img src="images/delicious.png" alt="" style="width: 16px; height: 16px; margin-top: 8px;"></a></li>\
            <li><a href="http://www.stumbleupon.com/submit?url='+window.sharing.link+'&amp;amp;title='+window.sharing.title+'" title="Share with Stumble Upon" target="_blank" class="ui-link"><img src="images/stumbleupon.png" alt="" style="width: 16px; height: 16px; margin-top: 8px;"></a></li>\
            <li><a href="http://digg.com/submit?url='+window.sharing.link+'&amp;amp;title='+window.sharing.title+'" title="Share with Digg" target="_blank" class="ui-link"><img src="images/digg.png" alt="" style="width: 16px; height: 16px; margin-top: 8px;"></a></li>\
            <li><a href="http://reddit.com/submit?url='+window.sharing.link+'" title="Share with Reddit" target="_blank" class="ui-link"><img src="images/reddit.png" alt="" style="width: 16px; height: 16px; margin-top: 8px;"></a></li>\
            <li><a href="http://www.google.com/reader/link?url='+window.sharing.link+'&amp;title='+window.sharing.title+'&amp;snippet=%D8%AA%D8%A7%D8%A8%D8%B9%20%D8%A3%D8%AD%D8%AF%D8%AB%20%D8%A3%D8%AE%D8%A8%D8%A7%D8%B1%20'+window.sharing.title+'&amp;srcURL='+window.sharing.link+'%2F&amp;srcTitle='+window.sharing.title+'" title="Share with Gooble Buzz" target="_blank" class="ui-link"><img src="images/buzz.png" alt="" style="width: 16px; height: 16px; margin-top: 8px;"></a></li>\
            <li><a href="http://www.linkedin.com/shareArticle?mini=true&amp;url='+window.sharing.link+'&amp;title='+window.sharing.title+'&amp;summary=%D8%AA%D8%A7%D8%A8%D8%B9%20%D8%A3%D8%AD%D8%AF%D8%AB%20%D8%A3%D8%AE%D8%A8%D8%A7%D8%B1%20'+window.sharing.title+'&amp;source='+window.sharing.title+'" title="Share with LinkedIn" target="_blank" class="ui-link"><img src="images/linkedin.png" alt="" style="width: 16px; height: 16px; margin-top: 8px;"></a></li>\
            <li><a href="http://profile.live.com/badge?url='+window.sharing.link+'" title="Share with Live Messenger" target="_blank" class="ui-link"><img src="images/messenger.png" alt="" style="width: 16px; height: 16px; margin-top: 8px;"></a></li>\
            </ul>');

}

setShare();