queryString = document.location.search
keyword = /keyword=([^&]*)/.exec queryString
keyword = keyword[1].toLowerCase() if keyword
redirect = (tag) -> window.location = tag[0].href if tag.length > 0 and tag[0].innerHTML.toLowerCase() == keyword
tds = document.getElementsByClassName('tduser')
for td in tds
	do (td) ->
		redirect td.getElementsByTagName('a')
