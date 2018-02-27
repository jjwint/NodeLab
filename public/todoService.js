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
 			})
 		}

 		function deleteTas

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