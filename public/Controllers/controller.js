(function() {

	function FormController(TodoService) {
		var vm = this;

		vm.updateInfo = function(item) {
			TodoService.setData(item);
			// vm.words.push(item);
			document.getElementById("inputEl").value = "";
		};

		vm.words = TodoService.getData();
		console.log(vm.words);
		
		vm.remove = function(item) {
			vm.words.splice(item, 1);
		};
	};

	angular
		.module("app")
		.controller("FormController", FormController);

})();