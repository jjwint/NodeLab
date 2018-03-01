(function() {
	function FormController(TodoService) {
		var vm = this;
		refreshDataFromServer();

		TodoService.getAllTasks().then(function(tasks) {
			vm.todoList = tasks;
		});

		vm.setData = function(newItemText) {
			var newTask = {
				text: newItemText
			}
			TodoService.addTask(newTask);
			console.log(newItemText);
			console.log(newTask);
		}

		vm.removeItem = function(index) {

		}

	// 	vm.updateInfo = function(item) {
	// 		TodoService.setData(item);
	// 		// vm.words.push(item);
	// 		document.getElementById("inputEl").value = "";
	// 	};

	// 	vm.words = TodoService.getData();
	// 	console.log(vm.words);
		
	// 	vm.remove = function(item) {
	// 		vm.words.splice(item, 1);
	// 	};
	// };

	angular
		.module("app")
		.controller("FormController", FormController);

})();