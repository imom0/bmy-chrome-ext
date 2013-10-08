/*
 
BMY filter 0.9.0

A javascript file to filter BMY BBS items.

Created by iMom0 (Mobeiheart[at]GMail.COM)
Fri Feb 25,2011

*/

function filter()
{
    function reInit() {
        chrome.extension.sendRequest({req_ids:"now"},function(response){ localStorage["bmy"] = response.ids;});
        var list = localStorage["bmy"];
        var re = new RegExp(list,"i");
        return re;
    }

    list_re = reInit();

    function displayNone(obj) {
        obj.style.display = "none";
    }

    var base = document.getElementsByTagName("table");

    for (var i=7;i<base.length;i++)
    {
        var source_html = base[i].getElementsByTagName("a")[4].innerHTML;
        if (list_re.test(source_html)) displayNone(base[i]);
    }
}

filter();
