var app = angular.module('ourModule', []);
app.controller('ourController', function($scope){
    $scope.taskList = [
        {name:'Walk dog', importance: 'High'},
        {name:'Get groceries', importance: 'Low'},
        {name:'Exercise', importance: 'Low'}];
    $scope.addTask = function(task) {
        console.log(task);
        $scope.taskList.push({name: task.name, importance: task.importance});
    };
    $scope.remove = function(task) {
      var index = $scope.taskList.indexOf(task);
      $scope.taskList.splice(index, 1);


};

});
