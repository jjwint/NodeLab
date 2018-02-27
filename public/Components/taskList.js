(function() {

	var taskList = {
		templateUrl: "Templates/taskList.html",
		controller: "FormController"
	};

	angular
		.module("app")
		.component("taskList", taskList);

})();