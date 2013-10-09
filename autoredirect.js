var keyword = /keyword=([^&]*)/.exec(document.location.search);
if (!!keyword) {
  keyword = keyword[1].toLowerCase();
}
var tds = document.getElementsByClassName('tduser');
for (var i=0; i<tds.length; i++) {
  var tagA = tds[i].getElementsByTagName('a');
  if (tagA.length > 0 && tagA[0].innerHTML.toLowerCase() == keyword) {
    window.location = tagA[0].href;
  }
}
