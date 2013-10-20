$ ->
	delay = 20
	window.setTimeout((->
		id = $('[name=id]').val()
		pw = $('[name=pw]').val()
		isAfterLogout = /bbslogout/.test(document.referrer)
		console.log id
		console.log pw
		console.log isAfterLogout
		$('form').submit() if id and pw and not isAfterLogout
	), delay)
