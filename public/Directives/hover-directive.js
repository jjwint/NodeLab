(function() {

	function hoverState() {
		return {
			restrict: "A",
			link: function($scope, $element, $attrs) {
				$element.on("mouseenter", function() {
					$element.css("background-color", "#ccc");
				});
				$element.on("mouseleave", function() {
					$element.css("background-color", "#fff");
				});
			}
		}
	}

	angular
		.module("app")
		.directive("hoverState", hoverState);

})();