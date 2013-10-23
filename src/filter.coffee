chrome.storage.local.get 'bmy_blacklist_usernames', (data) ->
	list = data.bmy_blacklist_usernames.split('|').map((e) -> return '\\b' + e + '\\b').join('|')
	pattern = new RegExp list, "i"
	tables = document.getElementsByTagName("table")
	articles = Array::slice.call tables, 7
	for element, index in articles
		html = element.getElementsByTagName("a")[4].innerHTML
		element.style.display = "none" if pattern.test(html)
