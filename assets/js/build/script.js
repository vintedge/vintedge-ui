/*
Table of Contents:
==================
jQuery Ready
	
	- 
	
Functions
	

Tools:
======
Compressor
	- http://www.refresh-sf.com/yui/
	- http://javascriptcompressor.com/
*/



/*	=============================================================================
	jQuery Ready
	========================================================================== */
	
	$( document ).ready( function() {
		/*	--------------------------------------------------
		:: 
		-------------------------------------------------- */
		
	});



/*	=============================================================================
	jQuery Window Resize
	========================================================================== */
	
	$( window ).on( 'resize' , function(){
		/*	--------------------------------------------------
		:: 
		-------------------------------------------------- */
		
	});



/*	=============================================================================
	Functions
	========================================================================== */
	
	/*	--------------------------------------------------
		:: 
		-------------------------------------------------- */
		
		
	/*	--------------------------------------------------
		:: Avoid `console` errors
		-------------------------------------------------- */
		(function() {
			var method;
			var noop = function () {};
			var methods = [
				'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
				'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
				'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
				'timeStamp', 'trace', 'warn'
			];
			var length = methods.length;
			var console = (window.console = window.console || {});
		
			while (length--) {
				method = methods[length];
		
				// Only stub undefined methods.
				if (!console[method]) {
					console[method] = noop;
				}
			}
		}());