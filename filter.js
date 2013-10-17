/*
 
BMY filter 0.9.0

A javascript file to filter BMY BBS items.

Created by iMom0 (Mobeiheart[at]GMail.COM)
Fri Feb 25,2011

*/

(function() {
    chrome.storage.local.get('bmy_blacklist_usernames', function(data){
        var list = data.bmy_blacklist_usernames.split('|').map(function(e) { return '\\b' + e + '\\b';}).join('|'),
            pattern = new RegExp(list,"i");

        var base = document.getElementsByTagName("table");

        for (var i=7;i<base.length;i++)
        {
          var source_html = base[i].getElementsByTagName("a")[4].innerHTML;
          if (pattern.test(source_html)) {
            base[i].style.display = "none";
          }
        }
    });
})();
