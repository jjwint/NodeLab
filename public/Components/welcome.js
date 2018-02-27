(function() {
	var welcome = {
		templateUrl: "Templates/welcome.html",
	};

	angular
		.module("app")
		.component("welcome", welcome);
})();