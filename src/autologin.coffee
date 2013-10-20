$ ->
	delay = 20
	window.setTimeout((->
		id = $('[name=id]').val()
		pw = $('[name=pw]').val()
		isAfterLogout = /bbslogout/.test(document.referrer)
		$('form').submit() if id and pw and not isAfterLogout
	), delay)
