(function() {
	var taskForm = {
		templateUrl: "Templates/taskForm.html",
		controller: "FormController"
	};

	angular
		.module("app")
		.component("taskForm", taskForm);
})();