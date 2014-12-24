( function() {
	var is_webkit = navigator.userAgent.toLowerCase().indexOf( 'webkit' ) > -1,
	    is_opera  = navigator.userAgent.toLowerCase().indexOf( 'opera' )  > -1,
	    is_ie     = navigator.userAgent.toLowerCase().indexOf( 'msie' )   > -1;

	if ( ( is_webkit || is_opera || is_ie ) && document.getElementById) {
		var eventMethod;
		var eventName;
		if ( window.addEventListener ) {
			eventMethod = 'addEventListener';
			eventName = 'hashchange';
		}
		else if ( window.attachEvent ) {
			eventMethod = 'attachEvent';
			eventName = 'onhashchange';
		}
		else {
			return;
		}
		window[ eventMethod ]( eventName, function() {
			var element = document.getElementById( location.hash.substring( 1 ) );

			if ( element ) {
				if ( ! /^(?:a|select|input|button|textarea)$/i.test( element.tagName ) ) {
					element.tabIndex = -1;
				}

				element.focus();
			}
		}, false );
	}
})();
