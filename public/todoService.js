(function() {
 
 	function TodoService($http) {

 		var inputListItems = [];

 		return {
 			getData: getData,
 			setData: setData
 		}

 		function getData() {
 			return inputListItems;
 		};

 		function setData(listObj) {
 			inputListItems.push(listObj);
 		};
 	}

	angular
		.module("app")
		.factory("TodoService", TodoService);

})();