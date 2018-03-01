(function() {
 
 	function TodoService($http) {

 		return {
 			getAllTasks:getAllTasks,
 			addTask: addTask,
 			deleteTask: deleteTask
 		}


 		function getAllTasks {
 			return $http({
 				method: "GET",
 				url: "/tasks"
 			}).then(function(response) {
 				return response.data;
 			});
 		};

 		function addTask(item) {
 			return $http({
 				method: "POST",
 				url: "/tasks",
 				data: TodoText
 			}).then(function(response) {
 				console.log("push post");
 			});

 		};

 		function deleteTask(itemId) {
 			console.log
 			return $http({
 				method: "DELETE"
 				url: "/tasks/" + itemId
 			});
 		};

//Old lab
 	// 	var inputListItems = [];

 	// 	return {
 	// 		getData: getData,
 	// 		setData: setData
 	// 	}

 	// 	function getData() {
 	// 		return inputListItems;
 	// 	};

 	// 	function setData(listObj) {
 	// 		inputListItems.push(listObj);
 	// 	};
 	// }

	angular
		.module("app")
		.factory("TodoService", TodoService);

})();