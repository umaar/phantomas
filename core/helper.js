/**
 * phantomas helper code
 *
 * Executed in page window
 */

(function(window) {

	// NodeRunner
	var nodeRunner = function() {
		// "Beep, Beep"
	};

	nodeRunner.prototype = {
		// call callback for each child of node
		walk: function(node, callback) {
			if (this.isSkipped(node)) {
				return;
			}

			var childNode,
				childNodes = node.childNodes || [];

			for (var n=0, len = childNodes.length; n < len; n++) {
				childNode = childNodes[n];

				// callback can return false to stop recursive
				if (callback(childNode) !== false) {
					this.walk(childNode, callback);
				}
			}
		},

		// override this function when you create an object of class phantomas.nodeRunner
		// by default only iterate over HTML elements
		isSkipped: function(node) {
			return !node || (node.nodeType !== Node.ELEMENT_NODE);
		}
	};

	// create a scope
	var phantomas = (window.phantomas = window.phantomas || {});

	// exports
	phantomas.nodeRunner = nodeRunner;

	console.log('phantomas scope injected');

})(window);
